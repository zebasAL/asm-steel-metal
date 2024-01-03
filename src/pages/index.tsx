import Head from "next/head";
import { Hero, FeaturedProducts, Categories, Content } from "~/components/home"
import { getFeaturedProducts } from "~/mock/utils"
import { ProductsByCategories, ProductsByCategory } from "~/mock/products/featuredProducts"
import categoryProducts, { CategoryProducts, CategoryProduct } from "~/mock/products/categoryProducts"
import MainLayout from "~/components/layouts/MainLayout"

export default function Home({ featuredProducts, navItems }: { featuredProducts: ProductsByCategory[], navItems: CategoryProduct[] }) {
  return (
    <>
      <Head>
        <title>ASM STEEL-METAL</title>
        <meta name="description" content={`ASM STEEL-METAL es una empresa dedicada a entregar al sector productivo aceros y metales especiales`} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm-steel-metal, asm steel-metal`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout categories={navItems}>
        <main>
          
          <Hero />

          <FeaturedProducts products={featuredProducts} />

          <div className="m-8">
            <Categories categories={navItems} />
          </div>

          <Content />

        </main>
      </MainLayout>
    </>
  );
}


export async function getStaticProps({ locale }: { locale: string }) {

  const featuredProducts = getFeaturedProducts();
  const featuredProductsByLocale = featuredProducts[locale as keyof ProductsByCategories]

  const navItems = categoryProducts[locale as keyof CategoryProducts ?? 'es'].map((item => ({
    ...item,
    products: item.products.map((product) => ({
      name: product.name,
      image: product.image,
    }))
  })))

  return {
    props: { 
      featuredProducts: featuredProductsByLocale,
      navItems: navItems,
     },
  };
}
