"use server";

import { z } from "zod";

export type EnquiryState = {
  status: "idle" | "success" | "error" | "unavailable";
  message: string;
  fieldErrors: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(100),
  phone: z
    .string()
    .trim()
    .max(20)
    .refine(
      (value) => value.length === 0 || value.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Please enter your message.")
    .max(5000),
  company: z.string().optional(),
});

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const parsed = enquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const fieldErrors: EnquiryState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (
        field === "name" ||
        field === "email" ||
        field === "phone" ||
        field === "message"
      ) {
        fieldErrors[field] ??= issue.message;
      }
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  if (parsed.data.company) {
    return {
      status: "success",
      message: "Thank you. Your message has been sent.",
      fieldErrors: {},
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !inbox || !from) {
    return {
      status: "unavailable",
      message:
        "This form is not connected to email yet. Please call or email us and we will help you directly.",
      fieldErrors: {},
    };
  }

  const { name, email, phone, message } = parsed.data;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "—"}`, "", message].join(
        "\n",
      ),
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message:
        "There was an error sending your message. Please call or email us instead.",
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: "Thank you. Your message has been sent to us.",
    fieldErrors: {},
  };
}
