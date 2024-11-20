"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Error - name must be at least 2 characters long" })
    .max(40, { message: "Error - name must be at most 40 characters long" }),
  email: z
    .string()
    .email({ message: "Error - email must be a valid email address" }),
  message: z
    .string()
    .min(5, { message: "Error - message must be at least 5 characters long" })
    .max(500, {
      message: "Error - message must be at most 500 characters long",
    }),
});

const formSubscriptionSchema = z.object({
  email: z
    .string()
    .email({ message: "Error - email must be a valid email address" }),
});

// Function to send contact form data to AWS API
async function sendContactData(data) {
  const response = await fetch(
    'https://m7rxsevdy4.execute-api.us-east-1.amazonaws.com/contact-us/',
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong!");
  }

  return result;
}

// Function to send subscription data to AWS API
export async function sendSubscriptionData(data) {
  const response = await fetch(
    "https://85kyf50iw2.execute-api.us-east-1.amazonaws.com/subscription/subscription",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong!");
  }

  return result;
}

async function submitForm(prevSate, formData) {
  const result = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  } else {
    const { name, email, message } = result.data;

    // Log the validated data
    console.log(result.data);

    try {

      await sendContactData({
        name:result.data.name,
        email: result.data.email,
        message: result.data.message
      });
      return {
        success: true,
        message: `Thank you, ${result.data.name}, your message was sent successfully. We will reply to you within 72 hours.`,
      };
    } catch (error) {
      console.error("Form submission error:", error);
      return {
        errors: {
          success: false,
          form: "An error occurred while submitting the form. Please try again later.",
        },
        message: `Sorry, ${result.data.name}, something went wrong. Please try again later.`,
      };
    }
  }
}

async function submitSubscription(prevSate, formData) {
  const result = formSubscriptionSchema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  } else {
    const { email } = result.data;

    // Log the validated data
    console.log(result.data);

    try {
      await sendSubscriptionData({
        email: result.data.email,
      });
      return {
        success: true,
        message: `Thank you, ${result.data.email}, for subscribing. We will send you a notification about our launch.`,
      };
    } catch (error) {
      console.error("Form submission error:", error);
      return {
        errors: {
          success: false,
          form: "An error occurred while submitting the form. Please try again later.",
        },
        message: `Sorry, ${result.data.email}, something went wrong. Please try again later.`,
      };
    }
  }
}

export {submitForm, submitSubscription};
