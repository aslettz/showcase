import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Header from "../components/header";

const client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
      // <AnimatePresence>
          <WagmiConfig client={client}>
              <Header/>
              <Component {...pageProps} />
          </WagmiConfig>
      // </AnimatePresence>
  )
}

export default MyApp
