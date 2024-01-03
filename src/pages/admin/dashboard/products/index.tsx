import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '~/pages/_app'
import Head from "next/head";
import Dashboard from '~/components/layouts/Dashboard'
// import ProductsSection from "~/sections/admin/dashboard/products/ProductsSection"

const ProductsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard: Productos</title>
        <meta name="description" content="Dashboard: Productos" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        {/* <ProductsSection /> */}
      </main>
    </>
  );
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Dashboard>
      {page}
    </Dashboard>
  )
}
 
export default ProductsPage