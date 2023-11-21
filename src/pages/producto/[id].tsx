import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from "next/head";
import { batchUpdateIsrUploadedStatus, getNoneIsrUploadedProducts, Product } from '~/firebase/products/isr'

import firebase from '~/firebase/clientApp';

const ProductoPage = ({ product }: { product: Product["params"] }) => {
  console.log("product", product)

  return (
    <>  
      <Head>
        <title>Producto: {product?.id}</title>
        <meta name="description" content={`Producto  ${product?.id}`} />
        <meta name="keywords" content={`${product?.id}, producto`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Detalles del Producto {product?.id}</h1>
      </main>
    </>
  );
};

export async function getStaticPaths<GetStaticPaths>() {
  const response = await fetch('api/products/IsrHandler/', { method: 'GET' })
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  const data = await response.json();
  return { paths: data, fallback: true };
} 

export async function getStaticProps<GetStaticProps>({ params }: Product) {
  return {
    props: {
      product: params,
    },
    revalidate: 52 * 7 * 24 * 60 * 60,
  };
}

export default ProductoPage;
