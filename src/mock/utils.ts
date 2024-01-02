import categoryProducts, { CategoryProducts, CategoryProduct, Product } from "./products/categoryProducts";
import productsByCategory, { FeaturedProductsByCategory, ProductsByCategories, ProductsByCategory } from "./products/featuredProducts";

export const getFeaturedProducts = () => {
  const transformedData: ProductsByCategories = { es: [], en: [] };

  // Itera sobre cada idioma (es y en)
  for (const lang in productsByCategory) {
    if (Object.prototype.hasOwnProperty.call(productsByCategory, lang)) {
      const categories = productsByCategory[lang as keyof FeaturedProductsByCategory];

      // Itera sobre cada categoría en el idioma actual
      for (const category of categories) {
        const transformedCategory: ProductsByCategory = {
          title: category.title,
          products: [],
        };

        // Itera sobre cada producto en la categoría actual
        for (const productName of category.products) {
          // Busca la información del producto en el objeto productsInfo
          const productInfo = findProductInfo(productName, categoryProducts[lang as keyof CategoryProducts]);

          // Si se encuentra la información, agrégala a la categoría transformada
          if (productInfo) {
            transformedCategory.products.push(productInfo);
          }
        }

        // Agrega la categoría transformada al idioma correspondiente
        transformedData[lang as keyof CategoryProducts ?? 'es'].push(transformedCategory);
      }
    }
  }

  return transformedData;
};


const findProductInfo = (productName: string, products: CategoryProduct[]): Product | undefined => {
  for (const category of products) {
    const product = category.products.find((p) => p.name === productName);
    if (product) {
      return product;
    }
  }

  return undefined;
};