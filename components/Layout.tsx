import React from "react";
import { ContentWrapper, GlobalStyle, Wrapper } from "../styles/GlobalStyle";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Parameter {
  children: React.ReactNode;
}

export default function Layout({ children }: Parameter) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <ContentWrapper>
          <main>{children}</main>
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
