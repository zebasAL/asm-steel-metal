import "../styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AppProps } from "next/app";
import MainLayout from "~/components/layouts/MainLayout"
// import { AuthProvider } from "~/firebase/auth/auth";


export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// -------------------------------------------------------------------

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  // const isDashboard = router.pathname.includes("dashboard") && (<MainLayout><Component {...pageProps} /></MainLayout>)

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;