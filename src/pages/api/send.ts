import type { NextApiRequest, NextApiResponse } from "next"
import { EmailTemplate } from "../../components/util/EmailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(400).json("test")
  const { name, email, description } = req.body
  if (!name || !email || !description) {
    return res.status(400).send("Please fill all the fields")
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["therahulchaurasia@gmail.com"],
    subject: "Inquiry on website",
    react: EmailTemplate({ name, email, description }),
    text: "Inquiry",
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
