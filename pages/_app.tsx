import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import React from "react";
import Layout from "../components/Layout";
import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";

// Create a client
const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Wrapper>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </Wrapper>
        </Layout>
      </QueryClientProvider>
    </>
  );
}
