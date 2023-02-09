import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  const { data: session } = useSession();

  if (session) {
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

        <a onClick={() => signOut()}>
          <Link href="/">로그아웃</Link>
        </a>
      </Navigaiter>
    );
  }

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
