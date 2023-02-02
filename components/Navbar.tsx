import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={234}
          height={60}
          alt="logo"
          style={{ alignItems: "center" }}
        />
      </Link>
      <Link href="/signin">로그인</Link>
    </Navigaiter>
  );
}
