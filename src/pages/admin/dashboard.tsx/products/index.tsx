import Head from "next/head";
import ProductsList from "~/sections/admin/dashboard/products/ProductsList"

export default function Page () {
  return (
    <>
      <Head>
        <title>Dashboard: Productos</title>
        <meta name="description" content="Dashboard: Productos" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductsList />
      </main>
    </>
  );
}