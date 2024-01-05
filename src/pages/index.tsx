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
        <title>ASM - STEEL METAL</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content="ASM - STEEL METAL" />
        <meta property="og:image" content="/asm-front.jpg" />
        <meta property="og:url" content={`${process.env.VERCEL_URL}`} />
        {/* Twitter */}
        <meta property="twitter:image" content="/asm-front.jpg" />
        <meta property="twitter:url" content={`${process.env.VERCEL_URL}`} />
      </Head>
      <MainLayout>
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
