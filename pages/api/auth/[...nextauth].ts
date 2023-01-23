import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // 서명 양식에 표시할 이름(e.g. "Sign in with...")
      name: "Credentials",
      // 'credentials'은 로그인 페이지에서 양식을 생성하는 데 사용됩니다.
      // credentials 개체에 키를 추가하여 제출할 필드를 지정할 수 있습니다.
      // e.g. domain, username, password, 2FA token, etc.
      // HTML 속성을 개체를 통해 <input> 태그에 전달할 수 있습니다.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 제공된 credentials 사용자를 조회하는 로직을 여기에 추가합니다.
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // 반환된 개체는 JWT의 'user' 속성에 저장됩니다
          return user;
        } else {
          // null을 반환하면 사용자에게 세부 정보를 확인하라는 오류가 표시됩니다.
          return null;

          // 오류와 함께 이 콜백을 거부할 수도 있으므로 사용자는 오류 메시지를 쿼리 매개 변수로 사용하여 오류 페이지로 전송됩니다.
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
