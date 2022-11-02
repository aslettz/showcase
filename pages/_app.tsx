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
          </Head>
          <Component {...pageProps} />
      </WagmiConfig>
  )
}

export default MyApp
