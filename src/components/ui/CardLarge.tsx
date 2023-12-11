import Link from "next/link";
import Image from "next/image";

type Product = {
  title: string,
  image: string,
  description?: string,
}

export default function CardLarge({
  title,
  image,
  description,
}: Product) {

  return (
    <Link href="/" className="">
      <div className="group relative cursor-pointer w-full flex flex-col md:flex-row items-center bg-white shadow-md hover:shadow-xl rounded-lg sm:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="w-full h-[200px] relative md:static md:h-auto md:w-auto">
          <Image
            layout="fill"
            className="tw-relative md:relative object-cover max-w-full md:max-w-[30%] rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={image}
            alt="image-card"
          />
        </div>
        <div className="md:ml-[30%] flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
        {/* <div className="absolute top-0 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Ver Más
        </div> */}
      </div>
    </Link>



  )
}