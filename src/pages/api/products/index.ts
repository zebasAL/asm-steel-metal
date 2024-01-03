/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from "next"
import { getAllProducts } from '~/firebase/products/products';

export default async function products(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;

    switch (method) {
      case 'GET':
        const products = await getAllProducts()
        res.status(200).json({ success: true, results: products });
        break;

      // case 'POST':
      //   break;

      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
