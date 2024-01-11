import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CategoryProduct } from "~/mock/products/categoryProducts";
import { IconButton, Menu, MenuItem, MenuHandler, Typography, ListItem, MenuList } from "@material-tailwind/react"
import Modal from "~/components/ui/Modal";

type CategoryProductWithPickedProducts = CategoryProduct

type DropDownModalProps = {
  options: CategoryProductWithPickedProducts[] | [],
  isOpen: boolean,
  onClose: () => void,
  title: string,
}

export default function DropDownModal({ options, isOpen, onClose, title }: DropDownModalProps) {
  const { t } = useTranslation("common")

  const [categoryProducts, setCategoryProducts] = useState<CategoryProductWithPickedProducts | null>(null)

  const handleSelectProducts = (products: CategoryProductWithPickedProducts) => {
    setCategoryProducts(products)
  }

  const handleClose = () => {
    setCategoryProducts(null)
    onClose()
  }

  const handleClear = () => {
    setCategoryProducts(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="mt-[20px] pt-[50px] mx-[100px] min-w-[90vw] md:min-w-fit transition-all ease-in-out w-auto">
      <div className="transition-all ease-in-out w-auto">
        {categoryProducts
          ? (
            <>
              <div className="transition-all ease-in-out flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div onClick={handleClear} className="cursor-pointer flex items-center hover:bg-gray-200 hover:rounded-lg p-2">
                  <svg className="ml-2 w-4 h-4 transform rotate-180 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{categoryProducts.categoryName}</h3>
                </div>
                <Link
                  onClick={handleClose}
                  href={`/categories/${categoryProducts.categoryName}`}
                  className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-200 hover:rounded-lg p-2"
                >
                  <p>{t("see-all")}</p>
                </Link>
              </div>

              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
                {categoryProducts.products?.map((product) => (
                  <div key={product.name} className="group cursor-pointer rounded-md text-black hover:bg-gray-100 transition-all hover:pl-8">
                    <Link
                      href={`/products/${product.name}`}
                      className="text-lg flex items-center justify-center p-2"
                    >
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-semibold group-hover:text-[#1baee6]"
                      >
                        {product.name}
                      </Typography>
                      <svg className="ml-2 my-auto w-4 h-4 group-hover:text-[#1baee6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <Menu
                open={isOpen}
                offset={{ mainAxis: 200 }}
                placement="top"
              >
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 p-2">
                    {title}
                  </h3>
                  <div>
                    <IconButton onClick={onClose} variant="gradient" className="rounded-lg" style={{ background: "#282843" }}>
                      X
                    </IconButton>
                  </div>
                </div>
                <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 max-h-[300px] overflow-y-auto">
                  {(options ?? []).map((item) => (
                    <div key={item.categoryName} className="p-2">
                      <MenuItem
                        className="flex items-center gap-3 rounded-lg"
                        onClick={() => handleSelectProducts(item)}
                      >
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                          {" "}
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                          >
                            {item.categoryName}
                          </Typography>
                          <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                          >
                            {item.categoryDescription}
                          </Typography>
                        </div>
                      </MenuItem>
                    </div>
                  ))}
                </ul>
              </Menu>
            </>
          )}
      </div>
    </Modal>
  )
}