import { useNavItems } from "~/routes/hooks/useNavItems";
import { CardLarge } from "~/components/ui"

export default function Categories() {
  const { navItems } = useNavItems()

  const categories = navItems.find((item) => item.subheader === "Categorias")

  return (
    <div>
      <h3 className="text-4xl text-center mt-20">Nuestros Productos</h3>
  
      <div className="w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">
  
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {(categories?.items ?? []).map((item) => (
            <CardLarge key={item.title} image={item.image ?? ""} title={item.title} description={item.description} />
          ))}
        </div>
        
      </div>
    </div>
  );
}