import Image from "next/image";
import { useRouter } from "next/router";
import DropDownList from "./dropDown";
import LocalesDropDown from "./LocalesDropDown";
import SearchBar from "../../searchbar";
import logoASM from "~/images/mid_logo.png";
// import useResponsive from "~/hooks/useResponsive";
import useOffSetTop from "~/hooks/useOffSetTop";
import useScrollDirection from "~/hooks/useScrollDirection";
import Link from "next/link";
import categoryProducts, { Product, CategoryProducts } from "~/mock/products/categoryProducts";
import { HEADER_HEIGHT, HEADER_PADDING } from "~/config"


export default function NavBar() {
  // const isMobile = useResponsive(false, 'down', 'md')

  const isOffset = useOffSetTop(HEADER_HEIGHT)

  const isScrolling = useScrollDirection({ threshold: 5 })

  const router = useRouter();

  const locale = router.locale || (router.defaultLocale)

  const navItems = categoryProducts[locale as keyof CategoryProducts ?? 'es'].map((item => ({
    ...item,
    products: item.products.map((product) => ({
      name: product.name,
      image: product.image,
    }))
  })))

  return (
    <nav className={`w-full fixed bg-white transition-all ease-in-out top-0 z-50 shadow-2xl p-[13px] h-[${HEADER_HEIGHT - HEADER_PADDING}px]`}
      style={{
        transform: `translateY(${(isOffset && isScrolling !== "up") ? -HEADER_HEIGHT : 0}px)`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      {/* <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="flex items-center justify-between h-16">

        <Link href={'/'}>
          <Image src={logoASM} alt="logo" height={150} width={150} />
        </Link>

        {/* <Tabs /> */}

        <DropDownList options={navItems} />

        <div className="flex gap-10">
          <LocalesDropDown />
          <SearchBar />
        </div>

      </div>
      {/* </div> */}
    </nav>
  );
}
