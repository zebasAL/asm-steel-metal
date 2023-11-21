import React from "react";
import Shell from "~/components/shell";
import Content from "~/components/content/Content";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "~/firebase/auth/utils";

export default function Messages() {
  return (
    <Shell>
      <Content title="Messages">
        <>Messages</>
      </Content>
    </Shell>
  );
}