import type { NextApiRequest, NextApiResponse } from "next"
import firebaseAdmin from '~/firebase/adminApp';
import { getNoneIsrUploadedProducts, batchUpdateIsrUploadedStatus } from '~/firebase/products/isr';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;
    const body = req.body;
    const { name = 'World' } = req.query;

    const db = firebaseAdmin.firestore();

    const { searchParams } = req.nextUrl;
    const hasTitle = searchParams.has('title');

    switch (method) {
      case 'GET':
        // Handle GET request
        res.status(200).json({ message: 'This is a GET request' });
        break;
      case 'POST':
        // Handle POST request
        res.status(200).json({ message: 'This is a POST request' });
        break;
      // Add cases for other HTTP methods as needed
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
