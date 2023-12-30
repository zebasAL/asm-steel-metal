import Link from "next/link";
import { useNavItems } from "~/routes/hooks/useNavItems";
import { CardLarge } from "~/components/ui"

export default function Categories() {
  const { navItems } = useNavItems()

  const categories = navItems.find((item) => item.subheader === "Categorias")

  return (
    <div>
      <h3 className="text-4xl text-center mt-20">Categorias</h3>
  
      <div className="w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">        
  
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          {(categories?.items ?? []).map((item, index) => (
            <Link key={index} href={`/categorias/${item.title}`}>
              <CardLarge key={item.title} image={item.image ?? ""} title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}