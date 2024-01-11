import Head from "next/head";
import { Typography } from "@material-tailwind/react";
import PostList from "~/components/products/PostList"
import categoryProducts, { CategoryProducts, CategoryProduct } from "~/mock/products/categoryProducts";
import MainLayout from "~/components/layouts/MainLayout";

export default function Category({ category, products }: { category: Omit<CategoryProduct, 'products'>, products: CategoryProduct["products"] }) {

  return (
    <>
      <Head>
        <title>{category.categoryName}</title>
        <meta name="description" content={category.categoryDescription} />
        <meta name="keywords" content={category.categoryName} />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content={category.categoryName} />
        <meta property="og:description" content={category.categoryDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.VERCEL_URL}/${products[0]?.image}`} />
        <meta property="og:image:alt" content={category.categoryName} />
        <meta property="og:url" content={`${process.env.VERCEL_URL}/categories/${category.categoryName}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={`${process.env.VERCEL_URL}`} />
        <meta property="twitter:url" content={`${process.env.VERCEL_URL}/categories/${category.categoryName}`} />
        <meta name="twitter:title" content={`ASM - STEEL METAL: ${category.categoryName}`} />
        <meta name="twitter:description" content={category.categoryDescription} />
        <meta property="twitter:image" content={`${process.env.VERCEL_URL}/${products[0]?.name}`} />
      </Head>
      <MainLayout>
        <main className="p-20">
          <Typography variant="h1" color="blue" className="mb-10 text-2xl sm:text-4xl">{category.categoryName}</Typography>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {products.slice(0, 2).map(product => (
              <PostList
                key={product.name}
                id={product.name}
                product={{
                  categories: [category.categoryName],
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
                  categories: [category.categoryName],
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
  const products: CategoryProducts = categoryProducts
  const defaultLocale = 'es'

  const paths = (locales ?? [defaultLocale]).flatMap((locale) =>
    (products[locale as keyof CategoryProducts] ?? []).flatMap((categoryProduct: CategoryProduct) =>
    ({
      params: { category: categoryProduct.categoryName },
      locale,
    })
    )
  );

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: { params: { category: string }, locale: string }) {
  const defaultLocale = 'es'

  const productsByCategory: CategoryProduct | { products: [] } = categoryProducts[locale as keyof CategoryProducts ?? defaultLocale]
    .find((item) => item.categoryName === params.category) ?? { products: [] }

  const { products, ...category } = productsByCategory

  return {
    props: {
      category,
      products,
    },
  };
}