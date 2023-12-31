import React from "react";
import { SideNav } from "~/components/navigation/dashboard";

type Props = {
  children: JSX.Element;
};

export default function Dashboard({ children } : Props) {
  return (
    <>
      <div className="min-h-screen flex grid-cols-custom-sidenav-layout">
        <SideNav />
        {children}
      </div>
    </>
  );
}