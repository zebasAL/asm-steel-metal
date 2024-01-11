import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import type { NextApiRequest, NextApiResponse } from "next"
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

        const sentFrom = new Sender("contacto@asm-steelmetal.com", "Contacto ASM Steel Metal");
        const recipients = [
          new Recipient(process.env.MAILERSEND_SENDER, "Contacto ASM1"),
        ];
        
        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(sentFrom)
          .setSubject(`Informacion de contacto: ${formData.name}`)
          .setHtml(
            `
              <div>Nombre: <strong>${formData.name}</strong></div>
              <div>Telefono: <strong>${formData.phone}</strong></div>
              <div>Correo: <strong>${formData.email}</strong></div>
              </div><p>${formData.message}</p></div>
            `
          )
        
        try {
          const response = await mailersend.email.send(emailParams);
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
