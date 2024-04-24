import { EmailTemplate } from "@/components/EmailTemplate"
import type { NextApiRequest, NextApiResponse } from "next"
import React from "react"

import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_SECRETKEY)

export default async function EmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "therahulchaurasia@gmail.com",
    subject: "Message from portfolio",
    react: EmailTemplate({ firstName: "John" }),
    text: "IDK Why",
  })

  if (error) {
    console.log(error)
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
