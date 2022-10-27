import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import {AnimatePresence} from "framer-motion";

const client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
      // <AnimatePresence>
          <WagmiConfig client={client}>
            <Component {...pageProps} />
          </WagmiConfig>
      // </AnimatePresence>
  )
}

export default MyApp
