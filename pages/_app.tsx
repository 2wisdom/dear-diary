import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Layout>
      </QueryClientProvider>
    </>
  );
}
