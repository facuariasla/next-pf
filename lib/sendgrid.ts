import * as sgMail from "@sendgrid/mail";

// export interface Message {
//   to: string;
//   from: string;
//   subject: string;
//   text?: string;
//   html: string;
// }
// const sendgridkey: any = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
// sgMail.setApiKey(sendgridkey);

// export const sendMail = async (msg: Message) => {
//   try {
//     await sgMail.send(msg);
//     console.log("Message send successfully!");
//   } catch (error: any) {
//     console.log(error);
//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// };
