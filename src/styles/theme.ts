import { StyleFunctionProps, ThemeConfig, extendTheme } from "@chakra-ui/react"
import { Raleway } from "next/font/google"
// 1. Import the extendTheme function

const raleway = Raleway({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
})

const fonts = {
  heading: raleway.style.fontFamily,
  body: raleway.style.fontFamily,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: "white",
      bg: "#1A1A1A",
      // cursor: "none",
    },
  }),
}

const colors = {
  brand: {
    100: "#F4F0E6",
    200: "#1A1A1A",
    300: "#FF3B00",
  },
}

export const theme = extendTheme({
  styles,
  colors,
  fonts,
})
