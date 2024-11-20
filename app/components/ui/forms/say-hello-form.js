"use client";

import { submitForm } from "../../../../actions";
import FormTemplate from "./form-template";

export default function SayHelloForm() {
  const fields = [
    { name: "name", type: "text", placeholder: "Your name" },
    { name: "email", type: "email", placeholder: "Your email" },
    {
      name: "message",
      type: "text",
      placeholder: "A few words",
      isTextarea: true,
    },
  ];

  return <FormTemplate fields={fields} onSubmit={submitForm} />;
}
