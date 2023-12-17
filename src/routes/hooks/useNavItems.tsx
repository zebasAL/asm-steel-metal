import { useState } from 'react'

export type ProductItem = {
  title: string,
  path: string,
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

const navbarItems = [
  {
    subheader: 'Categorias',
    items: [
      {
        title: 'Aceros Al Carbono',
        path: 'aceros-al-carbono',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Descubre nuestra amplia gama de aceros al carbono para todas tus necesidades.',
        products: [
          { title: 'Producto 1', path: 'aceros-al-carbono/producto-1' },
          { title: 'Producto 2', path: 'aceros-al-carbono/producto-2' },
          { title: 'Producto 3', path: 'aceros-al-carbono/producto-3' },
          { title: 'Producto 4', path: 'aceros-al-carbono/producto-4' },
          { title: 'Producto 5', path: 'aceros-al-carbono/producto-5' },
          { title: 'Producto 6', path: 'aceros-al-carbono/producto-6' },
          { title: 'Producto 7', path: 'aceros-al-carbono/producto-7' },
          { title: 'Producto 8', path: 'aceros-al-carbono/producto-8' },
          { title: 'Producto 9', path: 'aceros-al-carbono/producto-9' },
          { title: 'Producto 10', path: 'aceros-al-carbono/producto-10' },
          { title: 'Producto 11', path: 'aceros-al-carbono/producto-11' },
          { title: 'Producto 12', path: 'aceros-al-carbono/producto-12' },
          { title: 'Producto 13', path: 'aceros-al-carbono/producto-13' },
        ],
      },
      {
        title: 'Aceros Maquinaria',
        path: 'aceros-maquinaria',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Equipos de acero de alta calidad para potenciar tu maquinaria.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
      {
        title: 'Aceros Inoxidables',
        path: 'aceros-inoxidables',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Explora nuestros aceros inoxidables resistentes y duraderos.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
      {
        title: 'Aceros Herramienta',
        path: 'aceros-herramienta',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Herramientas de acero de primera categoría para profesionales exigentes.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
      {
        title: 'Aluminio',
        path: 'aluminio',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Descubre las propiedades versátiles y livianas de nuestro aluminio de alta calidad.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
      {
        title: 'Placa Resistente a La Abrasión y al Impacto',
        path: 'placa-resistente-a-la-abrasión-y-al-impacto',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Placas diseñadas para resistir la abrasión y los impactos más exigentes.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
      {
        title: 'Plasticos de Ingenieria',
        path: 'plasticos-de-ingenieria',
        image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg',
        description: 'Soluciones de plásticos de ingeniería para aplicaciones especializadas.',
        products: [
          { title: 'Producto 1', path: 'aceros-maquinaria/producto-1' },
          { title: 'Producto 2', path: 'aceros-maquinaria/producto-2' },
          { title: 'Producto 3', path: 'aceros-maquinaria/producto-3' },
          { title: 'Producto 4', path: 'aceros-maquinaria/producto-4' },
          { title: 'Producto 5', path: 'aceros-maquinaria/producto-5' },
          { title: 'Producto 6', path: 'aceros-maquinaria/producto-6' },
          { title: 'Producto 7', path: 'aceros-maquinaria/producto-7' },
          { title: 'Producto 8', path: 'aceros-maquinaria/producto-8' },
          { title: 'Producto 9', path: 'aceros-maquinaria/producto-9' },
          { title: 'Producto 10', path: 'aceros-maquinaria/producto-10' },
          { title: 'Producto 11', path: 'aceros-maquinaria/producto-11' },
          { title: 'Producto 12', path: 'aceros-maquinaria/producto-12' },
          { title: 'Producto 13', path: 'aceros-maquinaria/producto-13' },
        ],
      },
    ],
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
  const [navItems, setNavItems] = useState<DropDownOption[]>(navbarItems)

  return { navItems }
}
