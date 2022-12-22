import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <meta name="description" content="Description" />
              <meta name="keywords" content="Keywords" />

              <link rel="manifest" href="/manifest.json" />
              <link
                href="/icons/Icon-App-20x20.png"
                rel="icon"
                type="image/png"
                sizes="20x20"
              />
              <link
                href="/icons/Icon-App-40x40.png"
                rel="icon"
                type="image/png"
                sizes="40x40"
              />
              <link
                rel="apple-touch-icon"
                href="/icons/Icon-App-20x20.png"
              ></link>
              <meta name="theme-color" content="#317EFB" />
            </Head>
            <Component {...pageProps} />
          </MantineProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
