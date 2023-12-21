/* eslint-disable */
import Image from "next/legacy/image";

type Product = {
  title: string,
  image: string,
  alt?: string,
  description?: string,
}

export default function CardLarge({
  title,
  image,
  alt = "image-card",
  description,
}: Product) {

  return (
    <div className="group relative cursor-pointer w-full flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-xl rounded-lg sm:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="md:w-1/3 md:height-full object-cover rounded-t-lg md:rounded-none md:rounded-s-lg"
        // className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-s-lg"
        src={image}
        alt="image-card"
        style={{ height: '200px' }}
      />
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}