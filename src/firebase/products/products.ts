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
}

export async function getAllProducts({ page = 1, per_page = 50 }: ProductParams = {}): Promise<Product[]> {

  const firestore = firebaseAdmin.firestore();
  const querySnapshot = await firestore.collection("products")
    .startAt((page - 1) * per_page)
    .limit(per_page)
    .get();

  const products: Product[] = [];
  
  querySnapshot.forEach((doc) => {
    const productData = doc.data() as Product;
    products.push(productData);
  });

  return products;
}