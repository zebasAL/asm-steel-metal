import "../styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AppProps } from "next/app";
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import MainLayout from "~/components/layouts/MainLayout"
import categoryProducts, { CategoryProduct, CategoryProducts } from "~/mock/products/categoryProducts";
// import { AuthProvider } from "~/firebase/auth/auth";


export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  navItems?: [],
}

// -------------------------------------------------------------------

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  // const isDashboard = router.pathname.includes("dashboard") && (<MainLayout><Component {...pageProps} /></MainLayout>)

  return getLayout(
    <MainLayout>
      <>
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Component {...pageProps} />
      </>
    </MainLayout>
  );
}

export default App;