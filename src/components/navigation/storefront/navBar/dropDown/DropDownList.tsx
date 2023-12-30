import { useState } from "react";
import DropDownModal from "./DropDownModal"
import { Product } from "~/mock/products/categoryProducts";

type PickedProduct = Pick<Product, 'name' | 'image'>;

type CategoryProductWithPickedProducts = {
  categoryName: string;
  products: PickedProduct[];
};

type Props = {
  options: CategoryProductWithPickedProducts[] | [],
};

export default function DropDownList({ options }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleCloseModel = () => {
    setOpenModal(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <div className="flex gap-5">
        <div>
          <div onMouseEnter={handleOpenModal} id="doubleDropdown" className={`text-gray-900 ${openModal && "text-gray-500"} cursor-pointer z-10 flex items-center justify-cent`}>
            <p className={`block py-2 px-3 dark:text-white ${openModal && "md:dark:text-blue-500 dark:bg-gray-700 dark:text-white md:dark:bg-transparent"}`}>
              Categorias
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="border-none" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8l7 7 7-7"></path>
            </svg>
          </div>
          <DropDownModal
            title="Categorias"
            options={options}
            isOpen={openModal}
            onClose={() => handleCloseModel()}
          />
        </div>
    </div>
  );
}