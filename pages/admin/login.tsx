import React from "react";
import Head from "next/head";
import SignInForm from "../../components/auth/SignInForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login: Admin</title>
        <meta name="description" content="Login ADMIN panel" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignInForm />
      </main>
    </>
  );
}