import { useState } from 'react'

export type DropDownItem = {
  title: string,
  description?: string,
  path: string,
  image?: string,
  svg?: string,
  items?: DropDownItem[],
}

export type DropDownOption = {
  subheader: string,
  items?: DropDownItem[],
}

const navbarItems = [
  {
    subheader: 'Categorias',
    items: [
      { title: 'Aceros Al Carbono', path: 'aceros-al-carbono', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Descubre nuestra amplia gama de aceros al carbono para todas tus necesidades.' },
      { title: 'Aceros Maquinaria', path: 'aceros-maquinaria', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Equipos de acero de alta calidad para potenciar tu maquinaria.' },
      { title: 'Aceros Inoxidables', path: 'aceros-inoxidables', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Explora nuestros aceros inoxidables resistentes y duraderos.' },
      { title: 'Aceros Herramienta', path: 'aceros-herramienta', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Herramientas de acero de primera categoría para profesionales exigentes.' },
      { title: 'Aluminio', path: 'aluminio', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Descubre las propiedades versátiles y livianas de nuestro aluminio de alta calidad.' },
      { title: 'Placa Resistente a La Abrasión y al Impacto', path: 'placa-resistente-a-la-abrasión-y-al-impacto', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Placas diseñadas para resistir la abrasión y los impactos más exigentes.' },
      { title: 'Plasticos de Ingenieria', path: 'plasticos-de-ingenieria', image: 'https://panelyacanalados.com/wp-content/uploads/2022/12/perfiles-de-acero-al-carbon-apilados-dentro-de-una-bodega.jpg', description: 'Soluciones de plásticos de ingeniería para aplicaciones especializadas.' },
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
