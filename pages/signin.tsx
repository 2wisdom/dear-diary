import Image from "next/image";
import React from "react";
import LoginBtn from "../components/login-btn";

export default function SignIn() {
  return (
    <>
      <Image
        src="/images/kakao_login_medium_wide.png"
        alt="kakao-login"
        width={300}
        height={45}
      />
      <LoginBtn />
    </>
  );
}
