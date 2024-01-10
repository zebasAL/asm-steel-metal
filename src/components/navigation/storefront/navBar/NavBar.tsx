import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import Image from "next/image";
import Link from "next/link";
import DropDownList from "./dropDown";
import LocalesDropDown from "./LocalesDropDown";
import SearchBar from "../../searchbar";
import logoASM from "~/images/mid_logo.png";
import useOffSetTop from "~/hooks/useOffSetTop";
import useScrollDirection from "~/hooks/useScrollDirection";
import categoryProducts, { CategoryProducts, CategoryProduct } from "~/mock/products/categoryProducts";
import MobileNavbarItems from "../mobileNavbarItems";
import { HEADER_HEIGHT, MOBILE_HEADER } from "~/config"
import { breakpoints } from "~/hooks/useResponsive";

const HEADER = HEADER_HEIGHT + "px"

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: breakpoints["sm"] }); // Define el breakpoint según tus necesidades

  const isOffset = useOffSetTop(HEADER_HEIGHT)

  const isScrolling = useScrollDirection({ threshold: 1 })

  const router = useRouter();

  const locale = router.locale || (router.defaultLocale)

  const navItems: CategoryProduct[] = categoryProducts[locale as keyof CategoryProducts ?? 'es']

  return (
    <nav>
      <div className={`h-[64px] lg:h-[90px]`} />

      <div
        className={`hidden lg:block w-full bg-[#fff] fixed transition-all duration-3 ease-in-out z-50 shadow-2xl p-[13px]`}
        style={{
          height: HEADER,
          transform: isMobile ? `translateY(${-MOBILE_HEADER}px)` : `translateY(${-HEADER_HEIGHT}px)`,
          ...(isMobile === false) && {
            ...(isOffset && isScrolling === "up") && {
              transform: isMobile ? `translateY(${-MOBILE_HEADER}px)` : `translateY(${-HEADER_HEIGHT}px)`,
            },
            ...(isOffset && isScrolling === "down") && {
              transform: `translateY(${-HEADER_HEIGHT * 2}px)`,
            },
          }
        }}
      >
        <div className="hidden lg:flex items-center justify-between h-16">
          <Link href={'/'}>
            <Image src={logoASM} alt="logo" height={150} width={150} />
          </Link>

          <DropDownList options={navItems} />

          <div className="flex gap-10">
            <LocalesDropDown />
            <SearchBar />
          </div>
        </div>
      </div>

      <div
        className={`block lg:hidden w-full bg-[#fff] fixed transition-all duration-3 ease-in-out z-50 shadow-2xl`}
        style={{
          height: MOBILE_HEADER,
          transform: `translateY(${-MOBILE_HEADER}px)`,
          ...(isMobile) && {
            ...(isOffset && isScrolling === "up") && {
              transform: `translateY(${-MOBILE_HEADER}px)`,
            },
            ...(isOffset && isScrolling === "down") && {
              transform: `translateY(${-HEADER_HEIGHT * 2}px)`,
            },
          }
        }}
      >
        <MobileNavbarItems navItems={navItems} />
      </div>
    </nav>
  );
}
