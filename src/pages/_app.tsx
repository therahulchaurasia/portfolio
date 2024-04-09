import { theme } from "@/styles/theme"
import { ChakraProvider, Text, extendTheme } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { Montserrat } from "next/font/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}
