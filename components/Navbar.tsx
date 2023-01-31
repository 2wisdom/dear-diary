import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <div>
        <h1>
          <Link href="/">
            <Image src="/images/logo.png" width={230} height={57} alt="logo" />
          </Link>
        </h1>
      </div>
      <div>
        <Link href="/signup">회원가입</Link>
        <Link href="/signin">로그인</Link>
      </div>
    </Navigaiter>
  );
}
