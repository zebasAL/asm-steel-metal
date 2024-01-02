import { NextApiResponse } from 'next';
import { z } from 'zod';
import { groupZodErrors } from "~/utils/groupZodErrors"

export const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  message: z.string().min(10),
});
export type ContactFormData = z.infer<typeof contactFormSchema>;


export function serverValidateContactForm<T>(data: ContactFormData, status: NextApiResponse["status"]): ContactFormData {
  try {
    const result: ContactFormData = contactFormSchema.parse(data);
    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const zodError = groupZodErrors(error)
      throw status(400).json({ success: false, error: 'Invalid data', message: zodError });
    } else {
      throw error
    }
  }
}