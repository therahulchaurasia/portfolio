import { EmailForm } from "@/types/type"
import * as React from "react"

export const EmailTemplate: React.FC<Readonly<EmailForm>> = ({
  name,
  email,
  description,
}) => (
  <div>
    <h1>
      Sent by {name} using {email}
    </h1>
    <p>{description}</p>
  </div>
)
