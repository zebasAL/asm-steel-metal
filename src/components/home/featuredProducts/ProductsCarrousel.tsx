import { Carousel } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { distributeItemsInCarouselColumns } from "~/utils/formatItemsForCarousel";
import { ImgWithBlurredCaption } from "~/components/ui"
import { ProductsByCategory } from "~/mock/products/featuredProducts"

// ---------------------------------------------------------------------------------

export default function ProductsCarrousel({ products, onClick }: { products: ProductsByCategory["products"], onClick: (id: string) => void }) {
  const productsGroup = distributeItemsInCarouselColumns(products);

  const [elements, setElements] = useState<JSX.Element[]>([])

  const carouselRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const productsList = (productsGroup ?? []).map((group, index) => (
      <div key={index} className="mx-[10px] md:mx-[50px] grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
        {group.map((product: ProductsByCategory["products"][0]) => (
          <div key={product.name} onClick={() => onClick(product.name)} className="relative group h-[300px] lg:h-96 w-full rounded-xl hover:shadow-lg hover:shadow-gray-500 transition group cursor-pointer">
            <ImgWithBlurredCaption
              image={product.image}
              alt={`producto-${product.name}`}
              title={product.name}
              description={product.description ?? ""}
            />
          </div>
        ))}
      </div>
    ))

    if (carouselRef.current) {
      carouselRef.current.click()
    }

    setElements(productsList)
  }, [products])

  return (
    <div className="home-products-carousel">
      {elements?.length > 0
      ? (
        <Carousel
          loop
          // autoplay
          // autoplayDelay={10000}
          color="black"
          key={0}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  itemID="tabs"
                  ref={i === 0 ? carouselRef : null}
                  tabIndex={i}
                  key={i}
                  className={`
                    block h-1 cursor-pointer rounded-2xl transition-all content-[''] bg-black
                    ${activeIndex === i ? "w-8" : "w-4"}
                  `}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {elements}
        </Carousel>
      )
      : null
      }
    </div>
  )
}