import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Head from "next/head";
import client from '../apolloClient';
import {ApolloProvider} from "@apollo/client";

const web3Client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <WagmiConfig client={web3Client}>
          <Head>
              <title>Aslettco Web Engineering</title>
              <meta name="description" content="Portfolio site for Zan Aslett"/>
              <link rel="icon" href="/aslettco.png"/>
              <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
          </Head>
          <ApolloProvider client={client}>
                <Component {...pageProps} />
          </ApolloProvider>
      </WagmiConfig>
  )
}

export default MyApp
