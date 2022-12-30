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

        <Link href="/signin">
          <li>로그인</li>
        </Link>
      </ul>
    </Navigaiter>
  );
}
