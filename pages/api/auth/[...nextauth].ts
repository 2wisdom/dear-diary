import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // 서명 양식에 표시할 이름(예: "로그인...")
      name: "Credentials",
      // '자격 증명'은 로그인 페이지에서 양식을 생성하는 데 사용됩니다.
      // 자격 증명 개체에 키를 추가하여 제출할 필드를 지정할 수 있습니다.
      // 예: 도메인, 사용자 이름, 암호, 2FA 토큰 등.
      // HTML 속성을 개체를 통해 <input> 태그에 전달할 수 있습니다.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 제공된 자격 증명에서 사용자를 조회하는 논리를 여기에 추가합니다
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
