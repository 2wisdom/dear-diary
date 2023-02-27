import Link from "next/link";
import React from "react";

export default function User() {
  return (
    <>
      <h1>User Page</h1>
      <Link href="/create-diary">오늘 일기 쓰러가기</Link>
      <br />
      <Link href="/diary">일기 읽으러 가기</Link>
    </>
  );
}
