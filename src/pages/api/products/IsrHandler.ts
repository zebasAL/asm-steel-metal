import type { NextApiRequest, NextApiResponse } from "next"
import firebaseAdmin from '~/firebase/adminApp';
import { getNoneIsrUploadedProducts, batchUpdateIsrUploadedStatus, StaticProduct } from '~/firebase/products/isr';
import { serverFetch } from "~/utils/api";

export default async function isrHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;

    switch (method) {
      case 'GET':
        const db = firebaseAdmin.firestore();
        const products: StaticProduct[] = await getNoneIsrUploadedProducts(db)
        serverFetch('/api/products/isrHandler/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(products) });
        res.status(200).json({ success: true, data: products });
        break;

      case 'POST':
        const body: StaticProduct[] = req.body;
        batchUpdateIsrUploadedStatus(body)
        res.status(200).json({ message: 'This is a POST request' });
        break;

      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
