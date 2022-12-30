import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Layout>
    </>
  );
}
