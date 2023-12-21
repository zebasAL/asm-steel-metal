import { useState } from 'react'

export type ProductItem = {
  title: string,
  path: string,
  img: string,
}

export type DropDownItem = {
  title: string,
  description?: string,
  path: string,
  image?: string,
  svg?: string,
  products?: ProductItem[],
}

export type DropDownOption = {
  subheader: string,
  items?: DropDownItem[],
}

const imageUrl = 'https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75';

export const categories: DropDownItem[] = [
  {
    title: 'Aceros Al Carbono',
    path: 'aceros-al-carbono',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Descubre nuestra amplia gama de aceros al carbono para todas tus necesidades.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Aceros Maquinaria',
    path: 'aceros-maquinaria',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Equipos de acero de alta calidad para potenciar tu maquinaria.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Aceros Inoxidables',
    path: 'aceros-inoxidables',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Explora nuestros aceros inoxidables resistentes y duraderos.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Aceros Herramienta',
    path: 'aceros-herramienta',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Herramientas de acero de primera categoría para profesionales exigentes.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Aluminio',
    path: 'aluminio',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Descubre las propiedades versátiles y livianas de nuestro aluminio de alta calidad.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Placa Resistente a La Abrasión y al Impacto',
    path: 'placa-resistente-a-la-abrasión-y-al-impacto',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Placas diseñadas para resistir la abrasión y los impactos más exigentes.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
  {
    title: 'Plasticos de Ingenieria',
    path: 'plasticos-de-ingenieria',
    image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
    description: 'Soluciones de plásticos de ingeniería para aplicaciones especializadas.',
    products: [
      { title: 'Producto 1', path: 'aceros-al-carbono/producto-1', img: imageUrl },
      { title: 'Producto 2', path: 'aceros-al-carbono/producto-2', img: imageUrl },
      { title: 'Producto 3', path: 'aceros-al-carbono/producto-3', img: imageUrl },
      { title: 'Producto 4', path: 'aceros-al-carbono/producto-4', img: imageUrl },
      { title: 'Producto 5', path: 'aceros-al-carbono/producto-5', img: imageUrl },
      { title: 'Producto 6', path: 'aceros-al-carbono/producto-6', img: imageUrl },
      { title: 'Producto 7', path: 'aceros-al-carbono/producto-7', img: imageUrl },
      { title: 'Producto 8', path: 'aceros-al-carbono/producto-8', img: imageUrl },
      { title: 'Producto 9', path: 'aceros-al-carbono/producto-9', img: imageUrl},
      { title: 'Producto 10', path: 'aceros-al-carbono/producto-10', img: imageUrl },
      { title: 'Producto 11', path: 'aceros-al-carbono/producto-11', img: imageUrl },
      { title: 'Producto 12', path: 'aceros-al-carbono/producto-12', img: imageUrl },
      { title: 'Producto 13', path: 'aceros-al-carbono/producto-13', img: imageUrl },
    ],
  },
];

const navbarItems = [
  {
    subheader: 'Categorias',
    items: categories,
  },
  {
    subheader: 'Servicios',
    items: [
      { title: 'Asesorias', path: 'asesorias', image: 'https://panelyacanalados.com/wp-content/uploads/2021/10/rejilla-electroforjada-colocada-en-una-calle.jpg', description: 'Con nuestra ayuda obtendras todo lo necesario.' },
      { title: 'Venta', path: 'venta', image: 'https://panelyacanalados.com/wp-content/uploads/2021/10/rejilla-electroforjada-colocada-en-una-calle.jpg.', description: "Venta de todo tipo de acero de alta calidad." },
    ],
  },
]

export const useNavItems = () => {
  // const { data: dataLang } = useLanguageVerbose()
  const [navItems] = useState<DropDownOption[]>(navbarItems)

  return { navItems }
}
