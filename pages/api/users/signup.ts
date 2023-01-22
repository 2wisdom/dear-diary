import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import prisma from "../../../lib/prisma";

type User = {
  name: string;
  email: string;
  password: string;
};

const handler = nc<NextApiRequest, NextApiResponse>()
  /**
   * POST /api/users/signup 회원가입
   *
   * TODO: request validation
   * TODO: password encryption
   */
  .post(async (req, res) => {
    const { email, password, name } = req.body;

    const countOfEmail = await prisma.user.count({
      where: {
        email,
      },
    });

    if (countOfEmail > 0) {
      return res.json({
        successful: false,
        message: "이미 존재하는 이메일이 있습니다",
      });
    }

    const savedUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return res.json({
      successful: true,
      id: savedUser.id,
    });
  });

export default handler;
