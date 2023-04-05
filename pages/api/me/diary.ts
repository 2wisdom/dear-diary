import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "../../../lib/getServerSession";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  const session = await getServerSession(req, res);

  if (!session?.id) {
    return res.status(401).send({
      message: "Authentication Required",
    });
  }

  const query = req.query as {
    take: string;
    nextToken?: string;
  };

  const take = Number(query.take) || 8;

  const list = await prisma.diary.findMany({
    take: take + 1,
    skip: 0,
    ...(query.nextToken && {
      cursor: {
        id: query.nextToken,
      },
    }),
    select: {
      id: true,
      content: true,
      createdAt: true,
      diaryDate: true,
      image: true,
      title: true,
      updatedAt: true,
    },
    where: {
      AND: [
        {
          userId: session.id,
        },
      ],
    },
    orderBy: {
      diaryDate: "desc",
    },
  });

  const content = list.filter((_: any, i: number) => i < take);

  const next = list.find((_, i) => i === take);

  const totalElements = await prisma.diary.count({
    where: {
      AND: [
        {
          userId: session.id,
        },
      ],
    },
  });

  return res.send({
    meta: {
      nextToken: next?.id || null,
      totalElements,
    },
    content,
  });
});

export default handler;
