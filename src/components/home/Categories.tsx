import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'
import { CardLarge } from "~/components/ui"
import { CategoryProduct } from "~/mock/products/categoryProducts";

export default function Categories({ categories }: { categories: CategoryProduct[] }) {
  const { t } = useTranslation('home')

  return (
    <div>
      <h3 className="text-4xl text-center mt-20">
        {t('categories')}
      </h3>
  
      <div className="w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">        
  
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          {(categories ?? []).map((category, index) => (
            <Link key={index} href={`/categories/${category.categoryName}`}>
              <CardLarge
                key={category.categoryName}
                image={category.image ?? ""}
                title={category.categoryName}
                description={category.categoryDescription}
              />
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}