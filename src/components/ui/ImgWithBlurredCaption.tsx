import { Typography } from "@material-tailwind/react";
import Image from "next/image";

type ImageCaption = {
  children?: React.ReactElement,
  image: string,
  alt?: string,
  imageProps: HTMLImageElement,
  title: string,
  date?: string,
  description?: string,
};

export default function ImgWithBlurredCaption({
  image,
  alt,
  title,
  date,
  description,
  ...imageProps
}: ImageCaption) {
  return (
    <figure className="relative h-96 w-full rounded-xl cursor-pointer overflow-hidden">
      <Image
        className="h-full w-full rounded-xl object-contain object-center transition-transform transform group-hover:scale-110"
        src={image}
        width={400}
        height={300}
        alt={alt ?? 'image-blurred'}
        {...imageProps}
      />

      <figcaption className={`transition-all absolute bottom-8 left-2/4 flex flex-col w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 saturate-200 backdrop-blur-sm duration-300`}>
        <Typography color="blue-gray" className={`group-hover:max-h-52 max-h-0 overflow-x-hidden group-hover:overflow-y-hidden transition-all duration-100`}>
          {description ?? ""}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="text-center m-auto">
          {title}
        </Typography>
        {date && (
          <Typography color="gray" className="mt-2 font-normal">
            {date}
          </Typography>
        )}
      </figcaption>
    </figure>
  );
}