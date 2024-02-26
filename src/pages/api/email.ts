// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resend = new Resend(process.env.RESEND_KEY);
  const data = req.body;
  console.log("backed:" + data);

  const success = await resend.emails.send({
    from: "amishkumar800@gmail.com",
    to: `${data.email}`,
    subject: "Hey, you missed me",
    html: `<p>Heres <strong>your details</strong>!</p>
    <h1>First Name:${data.firstName}</h1>
    <p>Last Name:${data.lastName}</p>
    <p>Email:${data.email}</p>
    <p>message:${data.message}</p>`,
  });
  console.log(success);
  if (!success) res.status(301).json({ message: "Soemthing went wrong" });
  // res.status(200).json({ name: "John Doe" });
  res.status(200).json({ message: "Form submitted successfully!" });
}
