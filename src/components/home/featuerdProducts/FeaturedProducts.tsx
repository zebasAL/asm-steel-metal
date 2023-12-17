import { useState } from "react"
import { Button } from "@material-tailwind/react";
import ProductsCarrousel from "./ProductsCarrousel"
import productsByCategory, { ProductCategory } from "~/mock/products/featuredProducts"


export default function FeaturedProducts() {
  const [selectedProducts, setProducts] = useState<ProductCategory>(productsByCategory[0] ?? { title: '', products: [] })

  const handleSetProducts = (selectedProducts: ProductCategory) => {
    setProducts(selectedProducts)
  }

  return (
    <div className="relative backdrop-blur-20 bg-gradient-to-r from-black via-gray-300 to-white py-[100px]">

      <div className="flex flex-col md:flex-row items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-[40px] md:pb-[100px] mx-1 sm:mx-20">
        <h3 className="text-2xl lg:text-4xl text-center md:text-left items-center text-white w-auto whitespace-normal md:whitespace-nowrap">Productos Destacados</h3>

        <div className="gap-4 flex flex-wrap justify-center md:justify-start items-center flex-start w-full mt-10 md:mt-0 md:ml-[50px] text-left">
          {productsByCategory.map((product, index) => (
            <div key={product.title}>
              <Button
                className={`${product?.title === selectedProducts.title ? 'text-black shadow-sm drop-shadow-sm bg-gray-300' : ''}`}
                onClick={() => handleSetProducts(product)}
              >
                {product.title}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ProductsCarrousel products={selectedProducts.products} />

      <div>
        <div
          className="absolute z-1 bottom-0 left-0 h-[60px] w-1/2 bg-gradient-to-r from-black via-gray-300 to-white bg-opacity-100 backdrop-blur-20"
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
          className="absolute z-1 bottom-0 right-0 h-[60px] w-1/2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
        <div
          className="absolute z-2 bottom-0 right-0 w-1/2 h-[40px] bg-gradient-to-r from-white via-gray-50 to-gray-50 bg-opacity-100 backdrop-blur-20"
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