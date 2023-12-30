import React from "react";
import { NavBar, Footer } from "~/components/navigation/storefront";
import { HEADER_HEIGHT } from "~/config"
import { Product } from "~/mock/products/categoryProducts"

type PickedProduct = Pick<Product, 'name' | 'image'>;

type CategoryProductWithPickedProducts = {
  categoryName: string;
  products: PickedProduct[];
};

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children } : Props) {

  return (
    <div className="min-h-screen grid-cols-custom-sidenav-layout">
      <NavBar />
      <div style={{ marginTop: `${HEADER_HEIGHT}px` }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}