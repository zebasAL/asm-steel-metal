import axios from "axios"
import { useEffect, useState } from "react";
import type { ProductResponse } from '~/firebase/products/products';
import ProductCard, { ProductCardItem } from "~/components/products/ProductCard"

export default function ProductsList () {
  const [products, setProducts] = useState<ProductCardItem[]>([])

  useEffect(() => {
    const get = async () => {
      const { data } = await axios.get<ProductResponse>('/api/products/', { params: { page: 1 } });
      setProducts(() => data.data)
    }
    get()
  }, [])

  console.log("products", products)

  return (
    <>
      {products?.map((item) => (
        <ProductCard {...item} />
      ))}
    </>
  )
}