import { NextApiResponse } from 'next';
import { z } from 'zod';
import { groupZodErrors } from "~/utils/groupZodErrors"

export const fileSchema = z.object({
  fileName: z.string().min(3).max(25),
  data: z.bigint(),
});
export type File = z.infer<typeof fileSchema>;


export function serverValidateContactForm(data: File, status: NextApiResponse["status"]): File {
  try {
    const result: File = fileSchema.parse(data);
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