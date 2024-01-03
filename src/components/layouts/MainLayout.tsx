import { NavBar, Footer } from "~/components/navigation/storefront";
import { HEADER_HEIGHT } from "~/config"

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