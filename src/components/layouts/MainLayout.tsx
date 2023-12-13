import React from "react";
import { NavBar, Footer } from "~/components/navigation/storefront";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children } : Props) {
  return (
    <div className="min-h-screen grid-cols-custom-sidenav-layout">
      <NavBar />
        {children}
      <Footer />
    </div>
  );
}