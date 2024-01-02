/* eslint-disable */

import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
// import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "~/components/products/categoryLabel";

const cx = (...classNames: Array<string | boolean>) =>
  classNames.filter(Boolean).join(" ");

type List = {
  id: string,
  product: {
    name: string,
    image: string,
    publishedAt?: string,
    _createdAt?: string,
  },
  aspect: string,
}

export default function PostList({
  id,
  product,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight
}) {
  const imageProps = product?.mainImage
    ? (product.mainImage)
    : null;
  const AuthorimageProps = product?.author?.image
    ? (product.author.image)
    : null;

  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={`/products/${pathPrefix ? `${pathPrefix}/` : ""}${id}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(product.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: product.mainImage.blurDataURL
                })}
                alt={product.mainImage.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                {/* <PhotoIcon /> */}
                <p>Icon</p>
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div>
            <CategoryLabel
              categories={product.categories}
              nomargin={minimal}
            />
            <h2
              className={cx(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                  ? "text-3xl"
                  : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link
                href={`/products/${pathPrefix ? `${pathPrefix}/` : ""}${id}`}>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900">
                  {product.name}
                </span>
              </Link>
            </h2>

            <div className="hidden">
              {product.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/products/${
                      pathPrefix ? `${pathPrefix}/` : ""
                    }${id}`}>
                    {product.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              {/* <Link href={`/author/${post?.author?.slug?.current}`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post?.author?.image && (
                      <Image
                        src={AuthorimageProps.src}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-sm">
                    {post?.author?.name}
                  </span>
                </div>
              </Link> */}
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              {/* <time
                className="truncate text-sm"
                dateTime={product?.publishedAt || product._createdAt}>
                {format(
                  (product?.publishedAt || product._createdAt),
                  "MMMM dd, yyyy"
                )}
              </time> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}