import { Container, ContainerProps } from "@chakra-ui/react"
import React from "react"

interface Props extends Omit<ContainerProps, "children"> {
  children?: React.ReactNode
  as?: React.ElementType
}

export default function MainLayout({ children, ...props }: Props) {
  return (
    <>
      <Container w={"full"} minH={"100vh"} px={8} mx={"auto"} {...props}>
        {children}
      </Container>
    </>
  )
}
