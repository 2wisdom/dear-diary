import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Layout>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
