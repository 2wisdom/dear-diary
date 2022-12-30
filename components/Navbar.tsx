import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <div>
        <h1>
          <Link href="/">Dear Diary</Link>
        </h1>

        {/* <Image src="/images/logo.png" alt="logo" width={380} height={100} /> */}
      </div>
      <div>
        <Link href="/signup">회원가입</Link>
        <Link href="/signin">로그인</Link>
      </div>
    </Navigaiter>
  );
}
