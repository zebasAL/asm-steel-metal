import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '~/pages/_app'
import Head from "next/head";
import Dashboard from '~/components/layouts/Dashboard'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard: Home</title>
        <meta name="description" content="Dashboard: Home" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>
          Messages
        </h2>
      </main>
    </>
  );
}
 
DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Dashboard>
      {page}
    </Dashboard>
  )
}
 
export default DashboardPage