import { theme } from "@/styles/theme"
import { ChakraProvider, Text, extendTheme } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { Montserrat } from "next/font/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Text fontFamily="montserrat">I am Montserrat</Text> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
