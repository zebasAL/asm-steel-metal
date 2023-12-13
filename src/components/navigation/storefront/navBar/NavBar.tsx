import React from "react";
import Image from "next/image";
import { useNavItems } from "~/routes/hooks/useNavItems";
import DropDownList from "./dropDown";
import SearchBar from "./SearchBar";
import logoASM from "~/images/mid_logo.png";
import UploadIcon from "~/images/svg/uploadIcon.svg";
import useResponsive from "~/hooks/useResponsive";

export default function NavBar() {
  const { navItems } = useNavItems()
  const responsive = useResponsive(false, 'down', 'sm')

  return (
    <nav className="bg-white sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Image src={logoASM} alt="logo" height={150} width={150} />

          {/* <Tabs /> */}

          <div className="flex items-center justify-center gap-5">
            <DropDownList options={navItems} />
            <p>Contaco</p>
            <button className="cursor-pointer bg-primary-200 rounded-xl p-2">
              <div className="flex">
                <UploadIcon height="1.5rem" width="1.5rem" />
                <p>Carta de Presentacion</p>
              </div>
            </button>
          </div>

          <SearchBar />

        </div>
      </div>
    </nav>
  );
}
