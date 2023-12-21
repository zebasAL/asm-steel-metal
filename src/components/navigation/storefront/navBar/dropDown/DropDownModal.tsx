import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "~/components/ui/Modal";
import { DropDownOption, DropDownItem } from "~/routes/hooks/useNavItems";

type DropDownModalProps = {
  option: DropDownOption,
  isOpen: boolean,
  onClose: () => void,
}

export default function DropDownModal({ option, isOpen, onClose }: DropDownModalProps) {
  const [categoryProducts, setProducts] = useState<DropDownItem | null>(null)

  const handleSelectProducts = (products: DropDownItem) => {
    setProducts(products)
  }

  const handleClose = () => {
    setProducts(null)
    onClose()
  }

  const handleClear = () => {
    setProducts(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="mt-[50px] mx-[100px] min-w-[90vw] md:min-w-fit transition-all ease-in-out w-auto">
      <div className="transition-all ease-in-out w-auto">
        {categoryProducts
          ? (
            <>
              <div className="transition-all ease-in-out flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div onClick={handleClear} className="cursor-pointer flex items-center hover:bg-gray-200 hover:rounded-lg p-2">
                  <svg className="ml-2 w-4 h-4 transform rotate-180 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{categoryProducts.title}</h3>
                </div>
                <Link
                  onClick={handleClose}
                  href={`/categorias/${categoryProducts.title}`}
                  className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-200 hover:rounded-lg p-2"
                >
                  <p>Ver todos</p>
                </Link>
              </div>

              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
                {categoryProducts.products?.map((product) => (
                  <div className="cursor-pointer p-2 rounded-md text-black hover:text-primary-lighter hover:bg-gray-100 transition-all hover:pl-8">
                    <Link href={`/productos/${product.title}`} className="text-lg flex items-center justify-center">
                      {product.title}
                      <svg className="ml-2 my-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white p-2">{option.subheader}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(option.items ?? []).map((item) => (
                  <div
                    key={item.title}
                    className="transition duration-300 ease-in bg-white min-h-[10rem] rounded-lg border-2 border-solid border-opacity-32 m-4 text-rgb-gray-600 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectProducts(item)}
                  >
                    <div className="relative flex items-center justify-between p-3 md:p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white z-10">{item.title}</h3>
                      {item.image && (<Image src={item.image} width={100} height={5} alt="image" layout="responsive" style={{ opacity: .5 }} className="w-full absolute left-0 top-0 rounded-t-lg object-cover max-h-[60px]" />)}
                    </div>
                    <div className="p-3 md:p-4 space-y-4 z-10">
                      <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-400 z-10">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    </Modal>
  )
}