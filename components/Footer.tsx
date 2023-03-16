import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterStyle } from "../styles/GlobalStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <div>
        <a>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a style={{ fontWeight: 700 }}>Dear Diary</a>. All rights reserved.
        </a>
      </div>
      <div>
        <a href="https://github.com/2wisdom" target="_blank" rel="noreferrer">
          <Image src="/images/github.svg" alt="github" width={24} height={24} />
        </a>
      </div>
    </FooterStyle>
  );
}
