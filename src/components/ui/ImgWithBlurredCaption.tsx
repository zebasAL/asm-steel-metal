import { Typography } from "@material-tailwind/react";
import Image from "next/image";

type ImageCaption = {
  children?: React.ReactElement,
  image: string,
  secondaryImage?: string | null,
  alt?: string,
  imageProps?: HTMLImageElement,
  title: string,
  date?: string,
  description?: string,
};

export default function ImgWithBlurredCaption({
  image,
  secondaryImage,
  alt,
  title,
  date,
  description,
  ...imageProps
}: ImageCaption) {

  return (
    <div className="relative h-52	sm:h-64 md:h-80	lg:h-96 w-full rounded-xl cursor-pointer overflow-hidden flex items-center">
      <img
        className={`absolute w-full rounded-xl object-contain object-center transition-transform transform group-hover:scale-110 block`}
        src={image}
        alt={alt ?? 'image-blurred'}
        {...imageProps}
      />
      {/* {secondaryImage && (
        <img
          className="absolute w-full h-full rounded-xl object-contain object-center transition-transform transform group-hover:scale-110 hidden group-hover:block"
          src={secondaryImage}
          alt={alt ?? 'image-blurred'}
          {...imageProps}
        />
      )} */}

      <figcaption style={{ background: "#1f1f33" }} className={`m-auto md:mx-0 w-[calc(100%-20px)] md:w-[calc(100%-4rem)] transition-all absolute bottom-1 md:bottom-8 left-2/4 flex flex-col -translate-x-2/4 justify-between rounded-lg border border-white bg-white/75 py-1 md:py-4 px-1 md:px-6 saturate-200 backdrop-blur-sm duration-300`}>
        {description && (
          <Typography
            color="blue-gray"
            style={{
              textOverflow: "ellipsis",
              overflow: "auto",
            }}
            // group-hover:max-h-52 h-[initial] md:h-auto
            className={`text-[#ffff] group-hover:max-h-52 max-h-0 overflow-x-hidden group-hover:overflow-y-hidden transition-all duration-100`}
          >
            {description ?? ""}
          </Typography>
        )}

        <Typography variant="h5" color="blue-gray" className="text-sm md:text-base text-center m-auto text-[#fff]">
          {title}
        </Typography>
        {date && (
          <Typography color="gray" className="mt-2 font-normal">
            {date}
          </Typography>
        )}
      </figcaption>
    </div>
  );
}