import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { Typography } from "@material-tailwind/react";
import { getFeaturedSections } from "~/mock/utils"
import { CategoryProduct } from "~/mock/products/categoryProducts";
import { ProductsByCategories } from "~/mock/products/featuredProducts";
import sections, { SectionProduct, Sections } from "~/mock/products/sections";
import MainLayout from "~/components/layouts/MainLayout";
import PostList from "~/components/products/PostList"

export default function Category({ section, products }: { section: { title: string, image: string }, products: CategoryProduct["products"] }) {
  const { t } = useTranslation("sections")

  return (
    <>
      <Head>
        <title>{section.title}</title>
        <meta name="description" content={t("meta_description")} />
        <meta name="keywords" content={`${section.title}, ${t("meta_description")}`} />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content={section.title} />
        <meta property="og:description" content={t("meta_description")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.VERCEL_URL}/${section.image}`} />
        <meta property="og:image:alt" content={section.title} />
        <meta property="og:url" content={`${process.env.VERCEL_URL}/sections/${section.title}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={`${process.env.VERCEL_URL}`} />
        <meta property="twitter:url" content={`${process.env.VERCEL_URL}/sections/${section.title}`} />
        <meta name="twitter:title" content={section.title} />
        <meta name="twitter:description" content={t("meta_description")} />
        <meta property="twitter:image" content={`${process.env.VERCEL_URL}/${section.image}`} />
      </Head>
      <MainLayout>
        <main className="p-20">
          <Typography variant="h1" className="mb-10 text-2xl sm:text-4xl black">{t("featured").toUpperCase()}</Typography>

          <Typography variant="h1" color="blue" className="mb-10 text-2xl sm:text-4xl">{section.title}</Typography>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {products.slice(0, 2).map(product => (
              <PostList
                key={product.name}
                id={product.name}
                product={{
                  categories: [section.title],
                  mainImage: {
                    src: product.image,
                  },
                  publishedAt: new Date().toISOString(),
                  _createdAt: new Date().toISOString(),
                  author: {
                    image: "",
                  },
                  ...product,
                }}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {products.slice(2, 14).map(product => (
              <PostList
                key={product.name}
                id={product.name}
                product={{
                  categories: [section.title],
                  mainImage: {
                    src: product.image,
                  },
                  publishedAt: new Date().toISOString(),
                  _createdAt: new Date().toISOString(),
                  author: {
                    image: "",
                  },
                  ...product,
                }}
                aspect="square"
                preloadImage={true}
              />
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  )
}


// -----------------------------------------------------------------------------------------


export async function getStaticPaths<GetStaticPaths>({ locales }: { locales?: string[] }) {
  const defaultLocale = 'es'

  const paths = (locales ?? [defaultLocale]).flatMap((locale) =>
    (sections[locale as keyof Sections] ?? []).flatMap((section: SectionProduct) =>
    ({
      params: { section: section.title },
      locale,
    })
    )
  );

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: { params: { section: string }, locale: string }) {
  const featuredProducts = getFeaturedSections();
  const featuredProductsByLocale = featuredProducts[locale as keyof ProductsByCategories]

  const productsBySection: { products: any[], title: string } | undefined = featuredProductsByLocale.find((item: SectionProduct) => item.title === params.section)

  const { products, ...section } = productsBySection ?? {}

  return {
    props: {
      section,
      products,
    },
  };
}