import "../styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AppProps } from "next/app";
import { AuthProvider } from "~/firebase/auth/auth";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;