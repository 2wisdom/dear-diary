import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Layout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
