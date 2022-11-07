import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Head from "next/head";

const client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <WagmiConfig client={client}>
          <Head>
              <title>Zan Aslett</title>
              <meta name="description" content="Portfolio site for Zan Aslett"/>
              <link rel="icon" href="../public/favicon.ico"/>
              <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
      </WagmiConfig>
  )
}

export default MyApp
