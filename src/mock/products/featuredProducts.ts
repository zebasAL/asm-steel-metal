import { Product } from "./categoryProducts"

export type FeaturedProduct = {
  title: string;
  products: string[];
};

export type FeaturedProductsByCategory = {
  es: FeaturedProduct[];
  en: FeaturedProduct[];
};

const productsByCategory: FeaturedProductsByCategory = {
  es: [
    {
      title: 'Placas Cortada a Medida',
      products: ['4140', 'D2', 'HARDOX 400', 'HARDOX 450', 'HARDOX 500']
    },
    {
      title: 'Redondos',
      products: ['4140', 'H13', '416', '17-4PH']
    },
    {
      title: 'Soleras y Cuadrados',
      products: ['1018', '1045']
    },
    {
      title: 'Barras Huecas',
      products: ['1518', '1026']
    },
  ],
  en: [
    {
      title: 'Cut to Size Plates',
      products: ['4140', 'D2', 'HARDOX 400', 'HARDOX 450', 'HARDOX 500']
    },
    {
      title: 'Round Metals',
      products: ['4140', 'H13', '416', '17-4PH']
    },
    {
      title: 'Sill and Square Metals',
      products: ['1018', '1045']
    },
    {
      title: 'Hollow Bars',
      products: ['1518', '1026']
    },
  ]
}

export type ProductsByCategory = {
  title: string;
  products: Product[];
};

export type ProductsByCategories = {
  es: ProductsByCategory[];
  en: ProductsByCategory[];
}

export default productsByCategory