import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react"; 
import { useNavItems } from "~/routes/hooks/useNavItems";
import DropDownList from "./dropDown";
import SearchBar from "./SearchBar";
import logoASM from "~/images/mid_logo.png";
import useResponsive from "~/hooks/useResponsive";
import useOffSetTop from "~/hooks/useOffSetTop";
import useScrollDirection from "~/hooks/useScrollDirection";
import { HEADER_HEIGHT, HEADER_PADDING } from "~/config"

export default function NavBar() {
  const { navItems } = useNavItems()
  
  const isMobile = useResponsive(false, 'down', 'md')

  const isOffset = useOffSetTop(HEADER_HEIGHT)

  const isScrolling = useScrollDirection({ threshold: 5 })

  return (
    <nav className={`w-full fixed bg-white transition-all ease-in-out top-0 z-50 shadow-2xl p-[13px] h-[${HEADER_HEIGHT-HEADER_PADDING}px]`}
      style={{
        transform: `translateY(${(isOffset && isScrolling !== "up") ? -HEADER_HEIGHT : 0}px)`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      }}
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="flex items-center justify-between h-16">
          
          <Image src={logoASM} alt="logo" height={150} width={150} />

          {/* <Tabs /> */}

          <div className="flex items-center justify-center gap-5">
            <DropDownList options={navItems} />
            <p>Contaco</p>
    
    
            <Button variant="gradient" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Catalogo de Productos
            </Button>
          </div>

          <SearchBar />

        </div>
      {/* </div> */}
    </nav>
  );
}
