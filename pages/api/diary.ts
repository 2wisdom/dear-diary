import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import nc from "next-connect";
import J from "joi";
import prisma from "../../lib/prismadb";
import * as _ from "radash";
import { getServerSession } from "../../lib/getServerSession";
import dayjs from "dayjs";

function loadUser(id: string) {
  return prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

const handler = nc<NextApiRequest, NextApiResponse>();

/**
 * 다이어리 등록
 *
 * POST /api/diary
 */
handler.post(async (req, res) => {
  const session = await getServerSession(req, res);

  if (!session) {
    return res.status(401).send({
      message: "로그인이 필요합니다",
    });
  }

  const schema = J.object({
    id: J.string(),
    title: J.string().required(),
    image: J.string().required(),
    content: J.string().required(),
    diaryDate: J.date().iso().required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  let { id = _.uid(10), content, title, diaryDate, image } = value;

  try {
    const upsert = await prisma.diary.upsert({
      create: {
        title: title,
        content: content,
        diaryDate: dayjs(diaryDate).toDate(),
        id: id,
        image: image,
        user: {
          connect: {
            id: session.id,
          },
        },
      },
      update: {
        content,
        title,
      },
      where: {
        id,
      },
    });

    return res.status(200).send({
      id: upsert.id,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "저장에 실패하였습니다",
    });
  }
});

/**
 * GET /api/diary
 * 다이어리 내용을 가져온다
 *
 * ex)
 * GET /api/diary?at=2022-01-01
 *
 * {
 *  meta: {
 *
 *      // 이전 날짜의 다이어리가 있을 경우 반환한다
 *      prevAt: '',
 *
 *      // 다음 날짜의 다이어리가 있을 경우 반환한다
 *      nextAt: '',
 *  }
 *  content: {
 *
 *  }
 * }
 */
handler.get(async (req, res) => {
  const { at } = req.query as {
    at: string;
  };

  const session = await getServerSession(req, res);

  if (!session) {
    return res.status(401).send({
      message: "로그인이 필요합니다",
    });
  }

  const searchDate = new Date(at as string);

  // 현재 날짜보다 이전날짜의 첫번째 데이터를 가져온다.
  const prevDiary = await prisma.diary.findFirst({
    where: {
      diaryDate: {
        lt: searchDate,
      },
      userId: session.id,
    },
    orderBy: {
      diaryDate: "desc",
    },
    take: 1,
  });

  const nextDiary = await prisma.diary.findFirst({
    where: {
      diaryDate: {
        gt: searchDate,
      },
      userId: session.id,
    },
    orderBy: {
      diaryDate: "asc",
    },
    take: 1,
  });

  const first = await prisma.diary.findFirst({
    where: {
      diaryDate: searchDate,
      userId: session.id,
    },
  });

  return res.send({
    meta: {
      ...(prevDiary && {
        prevAt: dayjs(prevDiary.diaryDate).format("YYYY-MM-DD"),
      }),
      ...(nextDiary && {
        nextAt: dayjs(nextDiary.diaryDate).format("YYYY-MM-DD"),
      }),
    },
    content: {
      ...first,
    },
  });
});

/**
 * 다이어리 삭제
 * DELETE /api/diary
 */
handler.delete(async (req, res) => {
  const { id } = req.query as {
    id: string;
  };

  await prisma.diary.delete({
    where: {
      id: id,
    },
  });

  return res.send({
    id: id,
  });
});

/**
 * 다이어리 수정
 * PUT /api/diary
 */
handler.put(async (req, res) => {
  const { id, title, content, image, diaryDate } = req.body;

  await prisma.diary.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      image,
      diaryDate,
    },
  });

  res.send({
    id: id,
  });
});

export default handler;
