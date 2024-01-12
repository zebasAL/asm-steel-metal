import { Product } from "./categoryProducts"

export type SectionProduct = {
  title: string;
  image_primary: string;
  image_secondary: string | null;
  products: string[];
};

export type Sections = {
  es: SectionProduct[];
  en: SectionProduct[];
};

const sections: Sections = {
  es: [
    {
      title: 'Placas Cortada a Medida',
      image_primary: '/images/placa.png',
      image_secondary: null,
      products: ['4140', 'D2', 'HARDOX 400', 'HARDOX 450', 'HARDOX 500']
    },
    {
      title: 'Redondos',
      image_primary: "/images/redondo.png",
      image_secondary: null,
      products: ['4140', 'H13', '416', '17-4PH']
    },
    {
      title: 'Soleras y Cuadrados',
      image_primary: "/images/solera.png",
      image_secondary: "/images/cuadrado.png",
      products: ['1018', '1045']
    },
    {
      title: 'Barras Huecas',
      image_primary: "/images/barra_hueca.png",
      image_secondary: null,
      products: ['1518', '1026']
    },
  ],
  en: [
    {
      title: 'Cut to Size Plates',
      image_primary: '/images/placa.png',
      image_secondary: null,
      products: ['4140', 'D2', 'HARDOX 400', 'HARDOX 450', 'HARDOX 500']
    },
    {
      title: 'Round Metals',
      image_primary: "/images/redondo.png",
      image_secondary: null,
      products: ['4140', 'H13', '416', '17-4PH']
    },
    {
      title: 'Sill and Square Metals',
      image_primary: "/images/solera.png",
      image_secondary: "/images/cuadrado.png",
      products: ['1018', '1045']
    },
    {
      title: 'Hollow Bars',
      image_primary: "/images/barra_hueca.png",
      image_secondary: null,
      products: ['1518', '1026']
    },
  ]
};

export default sections