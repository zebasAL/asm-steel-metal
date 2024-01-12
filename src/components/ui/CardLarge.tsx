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
    <div className="h-full group relative cursor-pointer w-full flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-xl rounded-lg sm:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="md:w-1/3 min-h-[100px] mdd:h-[150px] lg:h-[200px] object-contain rounded-t-lg md:rounded-none md:rounded-s-lg"
        src={image}
        alt={alt}
      />
      <div className="mt-auto md:mt-0 w-full md:w-2/3 flex flex-col justify-between p-2 lg:p-4 leading-normal">
        <h5 className="overflow-hidden text-overflow-ellipsis mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-xs lg:font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-2 lg:mb-3 text-xs md:text-sm lg:font-normal dark:text-gray-400 text-[#1baee6] line-clamp-4 overflow-hidden">{description}</p>
      </div>
    </div>
  )
}