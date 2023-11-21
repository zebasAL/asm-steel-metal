import Head from "next/head";
import nookies from "nookies";
import Dashboard from "components/dashboard";
import Shell from "components/shell";
import Content from "components/content/Content";

export default function Messages() {
  return (
    <>
      <Head>
        <title>Dashboard: Home</title>
        <meta name="description" content="Dashboard: Home" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Dashboard />
         
        <Shell>
          <Content title="Messages">
            <>Messages</>
          </Content>
        </Shell>
      </main>
    </>
  );
}