import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function signup(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200);
}
