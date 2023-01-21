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

    const savedUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return res.json({
      id: savedUser.id,
    });
  });

export default handler;
