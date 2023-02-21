import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession as getNextAuthServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export function getServerSession(req: NextApiRequest, res: NextApiResponse) {
  return getNextAuthServerSession(req, res, authOptions);
}
