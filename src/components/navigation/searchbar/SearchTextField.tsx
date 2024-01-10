import useTranslation from "next-translate/useTranslation";
import { useEffect, useState, ChangeEvent, useRef } from "react";
import { useDebounce } from "~/hooks/useDebounce";
import categoryProducts, { CategoryProducts, CategoryProduct, Product } from "~/mock/products/categoryProducts"

// ----------------------------------------------------------------------------------

export default function SearchTextField ({ onChangeResults }: { onChangeResults: (param: SearchResult | null) => void }) {
  const { t, lang } = useTranslation("navbar")

  const [search, setSearch] = useState<string>("")

  const debouncedValue = useDebounce(search)

  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (debouncedValue === "") {
      onChangeResults(null)
      return 
    }
    const match = filterProductsAndCategories(search, categoryProducts[lang as keyof CategoryProducts]);
    onChangeResults(match)
  }, [debouncedValue])

  return (
    <input
      type="text"
      id="search-products"
      ref={searchRef}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      className="bg-gray-50 h-[50px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={t("search-modal-placeholder-field")}
      required
    />
  )
}

// ----------------------------------------------------------------------------------

export type SearchResult = {
  matchedCategories: CategoryProduct[] | [];
  matchedProducts: Product[] | [];
};

const filterProductsAndCategories = (
  searchTerm: string,
  categories: CategoryProduct[]
): SearchResult => {
  // Filtrar categorías que coincidan con el término de búsqueda en categoryName
  const matchedCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.categoryDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtrar productos que coincidan con el término de búsqueda en name o description
  const matchedProducts = categories
    .flatMap((category) => category.products)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return { matchedCategories, matchedProducts };
};