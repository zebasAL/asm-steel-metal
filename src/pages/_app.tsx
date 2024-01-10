import "~/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from "react-hot-toast";
import { WhatsappIcon } from "~/components/ui";
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
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <WhatsappIcon height="35" width="35" className="z-[10000] w-[60px] h-[60px] flex justify-center items-center rounded-full fixed cursor-pointer bottom-[120px] right-6 text-[#ffff] bg-[#55cd6c]" />
    </>
  );
}

export default App;