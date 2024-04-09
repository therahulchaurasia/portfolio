import { extendTheme } from "@chakra-ui/react"
import { Raleway } from "next/font/google"
// 1. Import the extendTheme function

const montserrat = Raleway({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
})

const fonts = {
  heading: montserrat.style.fontFamily,
  body: montserrat.style.fontFamily,
}

const colors = {
  brand: {
    100: "#F4F0E6",
    200: "#1A1A1A",
    300: "#FF3B00",
  },
}

export const theme = extendTheme({
  colors,
  fonts,
})
