import React from "react";
import Link from "next/link";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <ul>
        <li>
          <Link href="/signup">회원가입</Link>
        </li>
        <li>
          <Link href="/signin">로그인</Link>
        </li>
      </ul>
    </Navigaiter>
  );
}
