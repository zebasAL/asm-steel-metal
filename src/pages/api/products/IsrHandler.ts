import type { NextApiRequest, NextApiResponse } from "next"
import firebaseAdmin from '~/firebase/adminApp';
import { getNoneIsrUploadedProducts, batchUpdateIsrUploadedStatus, Product } from '~/firebase/products/isr';


export default async function IsrHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;
    const { name = 'World' } = req.query;

    switch (method) {
      case 'GET':
        const db = firebaseAdmin.firestore();
        const products = await getNoneIsrUploadedProducts(db)
        fetch('/api/ISR', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(products) });
        res.status(200).json({ success: true, data: products });
        break;

      case 'POST':
        const body: Product[] = req.body;
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
