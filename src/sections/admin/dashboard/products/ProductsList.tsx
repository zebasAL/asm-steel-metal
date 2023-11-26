import axios from "axios"
import { useEffect } from "react";
import type { Product } from "~/firebase/products/products"

export default function ProductsList () {


  useEffect(() => {
    (async() => {
      const { data } = await axios.get<Product[]>('products', { params: { page: 1 } });
      console.log("data", data)
    })()

  }, [])

  return (
    <>
      productsList
    </>
  )
}