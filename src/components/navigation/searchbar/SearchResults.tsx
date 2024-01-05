import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Button, Badge } from "@material-tailwind/react"
import { useState } from "react";
import { SearchResult } from "./SearchTextField";
import Image from "next/image";

export default function SearchResults({ results }: { results: SearchResult | null }) {
  const { t, lang } = useTranslation("navbar")

  const [showProducts, setShowProducts] = useState<boolean>(true)

  const noResults = !results?.matchedCategories.length && !results?.matchedProducts.length

  const contactTitle = lang === "es" ? "Contactanos" : "Contact us"

  if (results === null) return (
    <div className="flex flex-col items-center justify-center h-auto mt-10">
      <h3 className="text-4xl font-bold mb-4">{t("search-modal-title")}</h3>
      <p className="text-gray-600">{t("search-modal-description")}</p>

      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/contact" className="text-blue-500 hover:underline ml-2">{contactTitle}</Link>
      </div>
    </div>
  )

  if (noResults) return (
    <div className="flex flex-col items-center justify-center h-auto mt-10">
      <h3 className="text-4xl font-bold mb-4">{t("search-modal-title-not-found")}</h3>
      <p className="text-gray-600">{t("search-modal-description-not-found")}</p>

      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-3">{t("search-modal-description-not-found-second")}</p>
        <Link href={lang === "es" ? "/" : "en/"} className="text-blue-500 hover:underline">Home</Link>
        <Link href={`${lang === "es" ? "/" : "/en/"}contact`} className="text-blue-500 hover:underline ml-2">{contactTitle}</Link>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center h-auto mt-10">
      <div className="flex gap-[50px]">
        <Badge className="bg-[#45bde9]" content={results.matchedProducts.length}>
          <Button onClick={() => setShowProducts(true)}>{t("search-modal-products-title")}</Button>
        </Badge>

        <Badge className="bg-[#45bde9]" content={results.matchedCategories.length}>
          <Button onClick={() => setShowProducts(false)}>{t("search-modal-categories-title")}</Button>
        </Badge>
      </div>

      {showProducts && (
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-3 font-bold text-xl">{t("search-modal-products-title").toUpperCase()}</p>
          <div className="flex flex-col gap-[50px]">

            {results.matchedProducts.map((product) => (
              <Link href={`/products/${product.name}`} hrefLang={lang} className="flex hover:bg-blue-gray-50 rounded-lg p-2 cursor-pointer">
                <Image width={100} height={100} src={product.image} alt={product.name} className="object-contain" />
                <div>
                  <p className="text-lg font-bold">{product.name}</p>
                  <p className="line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}

            {results.matchedProducts.length === 0 && (
              <p className="text-lg font-bold">{t("search-modal-no-results-message")}</p>
            )}
          </div>
        </div>
      )}

      {showProducts === false && (
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-3 font-bold text-xl">{t("search-modal-categories-title").toUpperCase()}</p>
          <div className="flex flex-col gap-[50px]">

            {results.matchedCategories.map((category) => (
              <Link href={`/products/${category.categoryName}`} hrefLang={lang} className="flex hover:bg-blue-gray-50 rounded-lg p-2 cursor-pointer">
                <Image width={100} height={100} src={category.image} alt={category.categoryName} className="object-contain" />
                <div>
                  <p className="text-lg font-bold">{category.categoryName}</p>
                  <p className="line-clamp-2">{category.categoryDescription}</p>
                </div>
              </Link>
            ))}

            {results.matchedCategories.length === 0 && (
              <p className="text-lg font-bold">{t("search-modal-no-results-message")}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}