import React from "react";
import Shell from "~/components/shell";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "~/firebase/auth/utils";

export default function Settings() {
  return (
    <Shell>
      <></>
    </Shell>
  );
}