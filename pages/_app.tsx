import ErrorBoundary from "@components/ErrorBoundary";
import { Provider } from "jotai";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shotcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum=scale=2,shrink-to-fit=no"
        />
      </Head>
      <ErrorBoundary>
        <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
