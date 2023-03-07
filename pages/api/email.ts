import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { env } from "process";

export default async function SendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;
  try {
    sgMail.setApiKey(process.env.PORTF_SENDGRID_API_KEY as string);
    const msg = {
      to: "facundolautaroarias@hotmail.com", // Change to your recipient
      from: `facundolautaroarias@hotmail.com`, // Change to your verified sender
      subject: "facuariasl Portfolio Message:",
      text: `${req.body.userData.email}: ${req.body.userData.message}`,
      // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    const sendEmail = await sgMail.send(msg);
    res
      .status(200)
      .json({ status: "ok", response: "Email enviado", sendEmail });
  } catch (error) {
    console.log(error);
    return error;
  }
}
