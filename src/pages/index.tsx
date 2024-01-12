import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { Hero, FeaturedProducts, Categories, Content, Sections as SectionsComponent } from "~/components/home"
// import { getFeaturedProducts } from "~/mock/utils"
import { ProductsByCategories, ProductsByCategory } from "~/mock/products/featuredProducts"
import sections, { Sections, SectionProduct } from "~/mock/products/sections"
import categoryProducts, { CategoryProducts, CategoryProduct } from "~/mock/products/categoryProducts"
import MainLayout from "~/components/layouts/MainLayout"

export default function Home({ sections, featuredProducts, navItems }: { sections: SectionProduct[], featuredProducts: ProductsByCategory[], navItems: CategoryProduct[] }) {
  const { t, lang } = useTranslation("home")

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>ASM - STEEL METAL</title>
        <meta name="description" content={t("meta_description")} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm - steel metal, asm steel-metal`} />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content="ASM - STEEL METAL" />
        <meta name="og:description" content={t("meta_description")} />
        <meta property="og:image" content="/asm-front.png" />
        <meta property="og:image:alt" content="ASM steel metal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.VERCEL_URL}`} />
        {/* Twitter */}
        <meta name="twitter:title" content="ASM - STEEL METAL" />
        <meta name="twitter:description" content={t("meta_description")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/asm-front.png" />
        <meta property="twitter:domain" content={`${process.env.VERCEL_URL}`} />
        <meta property="twitter:url" content={`${process.env.VERCEL_URL}/${lang === "es" ? "" : "en"}`} />
      </Head>
      <MainLayout>
        <main>
          <Hero />

          <SectionsComponent sections={sections} />

          {/* <FeaturedProducts products={featuredProducts} /> */}

          <Categories categories={navItems} />

          <Content />
        </main>
      </MainLayout>
    </>
  );
}


export async function getStaticProps({ locale }: { locale: string }) {

  // const featuredProducts = getFeaturedProducts();
  // const featuredProductsByLocale = featuredProducts[locale as keyof ProductsByCategories]

  const navItems = categoryProducts[locale as keyof CategoryProducts ?? 'es'].map((item => ({
    ...item,
    products: item.products.map((product) => ({
      name: product.name,
      image: product.image,
    }))
  })))

  return {
    props: { 
      sections: sections[locale as keyof Sections],
      // featuredProducts: featuredProductsByLocale,
      navItems: navItems,
      locale,
     },
  };
}
