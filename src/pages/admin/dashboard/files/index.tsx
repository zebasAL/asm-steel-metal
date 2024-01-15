import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '~/pages/_app'
import Head from "next/head";
import Dashboard from '~/components/layouts/Dashboard'
import Files from '~/components/dashboard/files/Files'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard: Archivos</title>
        <meta name="description" content="Dashboard: Archivos" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <Files />
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