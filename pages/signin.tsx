import Image from "next/image";
import React from "react";
import KakaoLogin from "../components/KakaoLogin";
import { Wrapper } from "../styles/AuthStyle";

export default function SignIn() {
  return (
    <Wrapper>
      <h3>오늘도 환영해요!</h3>
      <KakaoLogin />
    </Wrapper>
  );
}
