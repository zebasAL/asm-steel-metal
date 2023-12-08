import React from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useNavItems } from "~/routes/hooks/useNavItems";
import NavBarOptions from "./NavBarOptions";
import logoASM from "~/images/logo_asm.jpg";
import useResponsive from "~/hooks/use-responsive";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navItems } = useNavItems()
  const responsive = useResponsive(false, 'down', 'sm')

  return (
    <nav className="bg-white sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Image src={logoASM} alt="logo" height={70} width={70} />

          {/* <Tabs /> */}

          <NavBarOptions options={navItems} />

          <div>2</div>

        </div>
      </div>

      {/* {smallScreen && (
        <>
          <NavItem link="/settings" svgIcon={<Svg.CogSvg />} title="Settings" />
          <a
            onClick={() => {}}
            className="flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md"
          >
            <Svg.SignOutSvg />
            <div className="font-bold pl-3">Sign Out</div>
          </a>
        </>
      )} */}

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden float-right" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-screen bg-gray-800">
              <NavBarOptions options={[]} />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
