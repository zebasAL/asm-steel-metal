import type { NextApiRequest, NextApiResponse } from "next"
import { Recipient, EmailParams } from "mailersend";
import { MailerSend } from "mailersend";
import { serverValidateContactForm } from "~/validationSchemas/forms/contactFormSchema"

export default async function mailersend(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;

    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY ?? "",
    });

    switch (method) {
      case 'GET': {
        try {
          const { body } = await mailersend.others.getApiQuota()
          return res.status(200).json({ success: true, data: body });
        } catch (error) {
          return res.status(403).json({ success: false, error });
        }
      }

      case 'POST': {
        const formData = serverValidateContactForm(req.body, res.status);

        const recipients = [new Recipient("zebastianalc@gmail.com", "Sebastian Almeida")];
        const emailParams = new EmailParams()
          .setFrom({ email: "zebastian_al@hotmail.com", name: "Sebastian" })
          .setTo(recipients)
          .setSubject("Subject")
          .setHtml("Greetings from the team, you got this message through MailerSend.")
          .setText("Greetings from the team, you got this message through MailerSend.");

        try {
          // @ts-expect-error
          const response = await mailersend.email({ emailParams });
          res.status(200).json({ success: true, response });
        } catch (error) {
          res.status(500).json({ success: false, error: 'Internal Server Error', message: error });
        }
        break;
      }

      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
