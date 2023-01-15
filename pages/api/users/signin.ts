import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  email: string;
  password: string;
};

export default function signin(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200);
}
