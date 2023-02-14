import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { KakaoBtn } from "../styles/AuthStyle";
export default function KakaoLogin() {
  const { data: session } = useSession();

  return (
    <>
      <KakaoBtn onClick={() => signIn("kakao", { callbackUrl: "/user" })}>
        <Image
          src="/images/kakao_logo.png"
          alt="kakao-login"
          width={20}
          height={20}
        />
        <a>카카오 로그인</a>
      </KakaoBtn>
    </>
  );
}
