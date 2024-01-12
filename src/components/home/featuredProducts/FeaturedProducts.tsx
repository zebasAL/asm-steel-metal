import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react"
import { Button } from "@material-tailwind/react";
import { ProductsByCategory } from "~/mock/products/featuredProducts"
import ProductsCarrousel from "./ProductsCarrousel"


export default function FeaturedProducts({ products }: { products: ProductsByCategory[] }) {
  const router = useRouter()
  const { t, lang } = useTranslation('home')

  const [selectedProducts, setProducts] = useState<ProductsByCategory | undefined>(products[0])

  const handleSetProducts = (selectedProducts: ProductsByCategory) => {
    setProducts(selectedProducts)
  }

  const handleClickProduct = (productName: string) => {
    router.push(`products/${productName}`)
  }

  useEffect(() => {
    setProducts(products[0])
  }, [lang])

  return (
    <div className="relative backdrop-blur-20 bg-gradient-to-r from-gray-300 via-gray-50 to-white py-0 md:py-[100px]">

      <div className="flex flex-col lg/2:flex-row items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-[40px] md:pb-[40px] mx-[10px] sm:mx-20">
        <h3 className="mt-10 lg:mt-0 text-2xl md:text-3xl lg:text-4xl mb-[0] text-center md:text-left items-center text-black w-auto whitespace-normal md:whitespace-nowrap">
          {t('featured-products')}
        </h3>

        <div className="gap-4 flex flex-wrap justify-center md:justify-start items-center flex-start w-full mt-10 md:mt-0 md:ml-[50px] text-left">
          {products.map((product) => (
            <div key={product.title}>
              <Button
                style={{  boxShadow: "none" }}
                className={`${product?.title === selectedProducts?.title ? 'bg-[transparent] text-[#1baee6] shadow-none' : 'text-[#ffff] bg-[#282843] shadow-sm drop-shadow-sm'}`}
                onClick={() => handleSetProducts(product)}
              >
                {product.title}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ProductsCarrousel
        products={selectedProducts?.products ?? []}
        onClick={handleClickProduct}
      />

      <div className="hidden md:block">
        <div
          className="absolute z-1 bottom-0 left-0 h-[60px] w-1/2 bg-gradient-to-r from-gray-700 via-gray-300 to-white bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="absolute z-2 bottom-0 left-0 w-1/2 h-[40px] bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="absolute z-3 bottom-[-1px] left-0 w-1/2 h-4 bg-white overflow-clip"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />

        <div
          className="absolute z-1 bottom-0 right-0 h-[60px] w-1/2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
        <div
          className="absolute z-2 bottom-0 right-0 w-1/2 h-[40px] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
        <div
          className="absolute z-3 bottom-[-1px] right-0 w-1/2 h-4 bg-white overflow-clip"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
      </div>

    </div>
  )
}