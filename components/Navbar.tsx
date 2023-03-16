import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  const { data: session } = useSession();

  if (session) {
    /* 로그인 상태 */
    return (
      <Navigaiter>
        <div>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={224}
              height={50}
              alt="logo"
              style={{ alignItems: "center" }}
            />
          </Link>
        </div>
        <div>
          <Link href="/user">내 일기</Link>
          <a onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</a>
        </div>
      </Navigaiter>
    );
  }
  /* 비로그인 상태 */
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
