import { Button, ButtonProps } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface Props extends Omit<ButtonProps, "children"> {
  children?: ReactNode
}

export default function CustomButton({ children, ...props }: Props) {
  return (
    <>
      <Button
        border={"3px solid"}
        bg={"transparent"}
        rounded={"full"}
        h={32}
        w={32}
        outline={"none"}
        mx={"auto"}
        cursor={"none"}
        transition={"all 0.3s"}
        textTransform={"uppercase"}
        {...props}
      >
        {children}
      </Button>
    </>
  )
}
