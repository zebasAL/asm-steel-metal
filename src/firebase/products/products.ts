import firebaseAdmin from '../adminApp';

export type ProductParams = {
  page?: number,
  per_page?: number,
} | undefined

export type Product = {
  name: string,
  short_description?: string,
  main_photo?: string,
  secondary_photo?: string,
  description?: string,
  fav: boolean,
  is_active: boolean,
  isr_uploaded: boolean,
  locale: string,
  createdAt: string,
}

export type ProductResponse = {
  success: boolean,
  data: Product[],
}

export async function getAllProducts({ page = 1, per_page = 50 }: ProductParams = {}): Promise<Product[]> {

  const firestore = firebaseAdmin.firestore();
  const querySnapshot = await firestore.collection("products")
    .orderBy("createdAt", "desc")
    .get();

  const products: Product[] = [];

  querySnapshot.docs.forEach((doc) => {
    const productData = doc.data() as Product;
    products.push(productData);
  });

  return products;
}