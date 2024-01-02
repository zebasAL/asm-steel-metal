import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from 'resend';
import { serverValidateContactForm } from "~/validationSchemas/forms/contactFormSchema"

export default async function resend(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;

    switch (method) {
      case 'POST':
        const formData = serverValidateContactForm(req.body, res.status);
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
          from: 'Contacto ASM <onboarding@resend.dev>',
          to: [process.env.NEXT_PUBLIC_ASM_EMAIL ?? ""],
          subject: `Informacion de contacto: ${formData.name}`,
          html: `
            <div>Nombre: <strong>${formData.name}</strong></div>
            <div>Telefono: <strong>${formData.phone}</strong></div>
            <div>Correo: <strong>${formData.email}</strong></div>
            </div><p>${formData.message}</p></div>
          `
        });

        if (error) return res.status(400).json({ succes: false, message: error });
        return res.status(200).json({ success: true, data });
      
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
