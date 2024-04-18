import { theme } from "@/styles/theme"
import {
  Box,
  ChakraProvider,
  Text,
  chakra,
  extendTheme,
  shouldForwardProp,
} from "@chakra-ui/react"
import {
  AnimatePresence,
  isValidMotionProp,
  motion,
  useMotionTemplate,
} from "framer-motion"
import type { AppProps } from "next/app"
import { Montserrat } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MotionBox = motion(chakra.div)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <AnimatePresence mode="wait">
          <ChakraBox
            key={router.route}
            transition={{
              duration: "0.25",
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
            <CustomMouse>
              <Component {...pageProps} />
            </CustomMouse>
          </ChakraBox>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}

const CustomMouse = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const mouseMove = useMotionTemplate`translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX - 2,
        y: e.clientY - 2,
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <>
      <MotionBox
        as={motion.div}
        h={6}
        w={6}
        bg={"brand.300"}
        position={"fixed"}
        top={0}
        left={0}
        rounded={"full"}
        style={{
          transform: mouseMove,
        }}
        zIndex={50}
      ></MotionBox>
      {children}
    </>
  )
}
