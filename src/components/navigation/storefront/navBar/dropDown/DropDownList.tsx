import { useState } from "react";
import { DropDownOption } from "~/routes/hooks/useNavItems";
import DropDownModal from "./DropDownModal"

export default function DropDownList({ options }: { options: DropDownOption[] }) {
  const [openModal, setOpenModal] = useState<boolean | number>(false)

  const handleOpenModel = (index: number) => {
    setOpenModal(index)
  }

  const handleCloseModel = () => {
    setOpenModal(false)
  }

  return (
    <div className="flex gap-5">
      {options?.map((item: DropDownOption, index) => (
        <div key={item.subheader} onClick={() => handleOpenModel(index)}>
          <div id="doubleDropdown" className=" text-gray-900 hover:text-gray-500 cursor-pointer z-10 flex items-center justify-cent">
            <p className="block py-2 px-3 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {item.subheader}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="border-none" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8l7 7 7-7"></path>
            </svg>
          </div>
          <DropDownModal
            option={item}
            isOpen={openModal === index}
            onClose={() => handleCloseModel()}
          />
        </div>
      ))}
    </div>
  );
}