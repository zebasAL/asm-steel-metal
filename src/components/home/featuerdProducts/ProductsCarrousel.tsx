import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { breakpoints } from "~/hooks/useResponsive";
import { ImgWithBlurredCaption } from "~/components/ui"
import { ProductCategory } from "~/mock/products/featuredProducts"

const getColumnsByBreakpoint = () => {
  const { sm, md, lg } = breakpoints;

  if (typeof window === 'undefined') return 4

  if (window.innerWidth < parseInt(sm)) {
    return 1;
  } else if (window.innerWidth < parseInt(md)) {
    return 2;
  } else if (window.innerWidth < parseInt(lg)) {
    return 3;
  } else {
    return 4;
  }
};

const groupProductsByColumns = (products: ProductCategory["products"]): Array<ProductCategory["products"]> => {
  const columns: number = getColumnsByBreakpoint();

  const chunk = (arr: ProductCategory["products"], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return chunk(products, columns);
};

// ---------------------------------------------------------------------------------

export default function ProductsCarrousel({ products }: { products: ProductCategory["products"] }) {
  const productsGroup = groupProductsByColumns(products);

  const [element, setElement] = useState([])

  useEffect(() => {
    const productsList = (productsGroup ?? []).map((group, index) => (
      <Link href="/" key={index} className="mx-[50px] grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 py-10">
        {group.map((product) => (
          <div key={product.name} className="relative group h-96 w-full rounded-xl hover:shadow-xl hover:shadow-gray-500 hover:bg-black transition">
            <ImgWithBlurredCaption
              image={product.img}
              alt={`producto-${product.name}`}
              title={product.name}
            />
            <div className="absolute rounded-xl inset-0 bg-gray-800 opacity-0 group-hover:opacity-30"></div>
          </div>
        ))}
      </Link>
    ))

    setElement(productsList)
  }, [products])

  return (
    <>
      {element?.length > 0
      ? (
        <Carousel loop autoplay autoplayDelay={5000}>
          {element}
        </Carousel>
      )
      : null
      }
    </>
  )
}