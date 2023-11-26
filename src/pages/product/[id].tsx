import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from "next/head";
import { serverFetch } from "~/utils/api"
import { batchUpdateIsrUploadedStatus, getNoneIsrUploadedProducts, StaticProduct } from '~/firebase/products/isr'

import firebase from '~/firebase/clientApp';

const ProductoPage = ({ product }: { product: StaticProduct["params"] }) => {
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
  const { data } = await serverFetch('/api/products/isrHandler/', { method: 'GET' })
  return { paths: data, fallback: true };
} 

export async function getStaticProps<GetStaticProps>({ params }: StaticProduct) {
  return {
    props: {
      product: params,
    },
    revalidate: 7 * 24 * 60 * 60,
  };
}

export default ProductoPage;
