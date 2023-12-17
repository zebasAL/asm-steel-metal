export type Product = {
  name: string;
  img: string;
};

export type ProductCategory = {
  title: string;
  products: Product[];
};

export type ProductsByCategory = ProductCategory[];

const productsByCategory: ProductsByCategory = [
  {
    title: 'Láminas',
    products: [
      { name: 'Lámina Negra', img: "https://maxacero.mx/wp-content/uploads/2023/05/laminas-acanaladas-galvanizadas-r101-apiladas-en-bodega.jpg" },
      { name: 'Lámina Losacero', img: 'https://maxacero.mx/wp-content/uploads/2023/05/lamina-acanalada-r101-galvanizada-sobre-fondo-blanco.jpg' },
      { name: 'Lámina Galvanizada', img: "https://maxacero.mx/wp-content/uploads/2023/05/laminas-acanaladas-galvanizadas-r101-apiladas-en-bodega.jpg" },
      { name: 'Lámina de PVC', img: "https://acerostorices.com/wp-content/uploads/2019/07/lamina-tricapa-termoacustica.jpg" },
    ]
  },
  {
    title: 'Panel',
    products: [
      { name: 'Viga IPS', img: 'https://cotresa.com/wp/wp-content/uploads/thumb_viga-1.jpg' },
      { name: 'Canal CPS', img: 'https://polin.mx/wp-content/uploads/2019/12/52e967d8109ed-1.jpeg' },
    ]
  },
  {
    title: 'Acero',
    products: [
      { name: 'Malla Electrosoldada', img: 'https://amasa.mx/pub/media/catalog/product/cache/752c0b8a99fe30f487529d65d3786ee4/M/A/MALLA_ELECTROSOLDADA_EN_HOJA_66-10-10__2.5M_x_6ML__1.jpg' },
    ]
  }
]

export default productsByCategory