import { useState } from "react"
import { TabButton, CardImage } from "~/components/ui"

const listProducts = [
  {
    title: 'Láminas',
    products: [
      { name: 'Lámina Negra', img: "https://panelyacanalados.com/wp-content/uploads/2021/09/lamina-negra-en-rollo.jpeg" },
      { name: 'Lámina Losacero', img: 'https://panelyacanalados.com/wp-content/uploads/2021/09/lamina-losacero-galvanizada.jpeg' },
      { name: 'Lámina de PVC', img: "https://panelyacanalados.com/wp-content/uploads/2021/09/laminas-de-pvc-productos.jpeg" }
    ]
  },
  {
    title: 'Panel',
    products: [
      { name: 'Viga IPS', img: 'https://panelyacanalados.com/wp-content/uploads/2021/09/viga-ips-de-acero-panel-y-acanalados.jpg' },
      { name: 'Canal CPS', img: 'https://panelyacanalados.com/wp-content/uploads/2019/09/canal-cps-2.jpg' },
      { name: 'Monten', img: 'https://panelyacanalados.com/wp-content/uploads/2021/09/polin-monten-de-acero.jpg' },
    ]
  },
  {
    title: 'Acero',
    products: [
      { name: 'Malla Electrosoldada', img: 'https://panelyacanalados.com/wp-content/uploads/2021/04/malla-electrosoldada-1.jpg' },
      { name: 'Alambron', img: 'https://panelyacanalados.com/wp-content/uploads/2021/04/alambron-1.jpg' },
      { name: 'Alambre Galvanizado', img: 'https://panelyacanalados.com/wp-content/uploads/2021/04/alambre-galvanizado-1.jpg' },
    ]
  }
]

export default function FeaturedProducts() {
  const [products, setProducts] = useState(listProducts[0]?.products)

  const handleSetProducts = (selectedProducts : any) => {
    setProducts(selectedProducts)
  }

  return (
    <div>
      <h3 className="text-4xl text-center mt-20">Productos Destacados</h3>

      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <div className="mt-10 gap-4 flex items-center justify-center w-full">
          {listProducts.map((product, index) => (
            <TabButton onClick={() => handleSetProducts(product.products)}>{product.title}</TabButton>
          ))}
        </div>

        <div className="mt-10 gap-6 flex items-center justify-center w-full">
          {(products ?? []).map((product) => (
            <CardImage key={product.name} image={product.img} title={product.name} />
          ))}
        </div>
        
      </div>
    </div>
  )
}