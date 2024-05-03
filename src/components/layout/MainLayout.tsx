import { Container, ContainerProps } from "@chakra-ui/react"
import React from "react"

interface Props extends Omit<ContainerProps, "children"> {
  children?: React.ReactNode
  as?: React.ElementType
}

export default function MainLayout({ children, ...props }: Props) {
  return (
    <>
      <Container
        w={"100%"}
        minH={"100vh"}
        px={8}
        mx={"auto"}
        width={"100%"}
        maxW={{
          lg: "container.xl",
          xl: "1400px",
        }}
        {...props}
      >
        {children}
      </Container>
    </>
  )
}
