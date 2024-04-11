import { theme } from "@/styles/theme"
import {
  Box,
  ChakraProvider,
  Text,
  chakra,
  extendTheme,
  shouldForwardProp,
} from "@chakra-ui/react"
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion"
import type { AppProps } from "next/app"
import { Montserrat } from "next/font/google"
import { useRouter } from "next/router"

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait">
          <ChakraBox
            key={router.route}
            transition={{
              duration: "0.5",
            }}
            initial={{
              background: "black",
              opacity: 0,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            animate={{
              background: "black",
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            exit={{
              background: "black",
              clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
            }}
          >
            <Component {...pageProps} />
          </ChakraBox>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}
