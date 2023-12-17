import { Typography } from "@material-tailwind/react";

type ImageCaption = {
  children?: React.ReactElement,
  image: string,
  alt?: string,
  imageProps: HTMLImageElement,
  title: string,
  date?: string,
  description?: string,

} 

export default function ImgWithBlurredCaption({ children, image, alt, title, date, description, ...imageProps }: ImageCaption) {
  return (
    <figure className="relative group h-96 w-full rounded-xl ">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={image}
        alt={alt ?? 'image-blured'}
        {...imageProps}
      />

      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <div>
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>

            {date && (
              <Typography color="gray" className="mt-2 font-normal">
                {date}
              </Typography>
            )}
          </div>
          <Typography variant="h5" color="blue-gray">
            {description ?? ""}
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}