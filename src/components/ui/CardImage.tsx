import Link from "next/link";
import Image from "next/image";
import Arrow from "~/images/svg/arrow.svg";

type Product = {
  title: string,
  image: string,
  description?: string,
}

export default function CardImage({
  title,
  image,
}: Product) {

  return (
    <Link href="/" passHref>
      <div className="group cursor-pointer transition-all duration-600 hover:shadow-lg max-w-[350px] w-full shadow-md">

        <div className="relative w-full">
          <div className="absolute w-full h-full opacity-30 transition-all duration-600 ease-in-out bottom-10 group-hover:bottom-0 group-hover:bg-gray-800 z-10" />
          <Arrow className="absolute top-[40%] fill-current text-white h-[20%] w-full z-20 justify-end opacity-0 transition-all duration-400 ease-in-out color-white group-hover:ml-0 group-hover:opacity-100" />

          <Image className="m-auto w-full object-fit transition-all group-hover:blur-sm" src={image} width={250} height={150} alt="product image" />
        </div>

        <h5 className="my-6 text-lg font-[400] tracking-tight text-gray-500 dark:text-white">
          {title}
        </h5>
      </div>
    </Link>
  )
}