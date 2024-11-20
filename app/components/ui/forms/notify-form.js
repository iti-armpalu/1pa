"use client";

import { submitSubscription } from "../../../../actions";
import FormTemplate from "./form-template";

export default function NotifyForm() {
  const fields = [{ name: "email", type: "email", placeholder: "Your email" }];

  return <FormTemplate fields={fields} onSubmit={submitSubscription} />;
}
