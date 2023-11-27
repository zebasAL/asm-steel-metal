import React from "react";
import { SideNav } from "~/components/navigation";

type Props = {
  children: JSX.Element;
};

export default function Dashboard({ children } : Props) {
  return (
    <>
      <div className="h-screen flex grid-cols-custom-sidenav-layout">
        <SideNav />
        {children}
      </div>
    </>
  );
}