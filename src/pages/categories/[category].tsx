import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { categories, ProductItem } from "~/routes/hooks/useNavItems";
import PostList from "~/components/products/PostList"
import categoryProducts, { CategoryProducts, CategoryProduct, Product } from "~/mock/products/categoryProducts";
import MainLayout from "~/components/layouts/MainLayout";

export default function Category({ category, products }: { category: string, products: Product[] }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Categoria: {category}</title>
        {/* <meta name="description" content={product.description} /> */}
        <meta name="keywords" content={category} />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content={`Material: ${category}`} />
        {/* <meta property="og:description" content={product.description} /> */}
        {/* <meta property="og:image" content={product.image} /> */}
        {/* <meta property="og:url" content={`${process.env.VERCEL_URL}/productos/${product.name}`} /> */}
        {/* Twitter */}
        <meta name="twitter:title" content={`Material: ${category}`} />
        {/* <meta name="twitter:description" content={product.description} /> */}
        {/* <meta name="twitter:image" content={product.image} /> */}
        {/* <meta name="twitter:site" content="@tu_usuario_de_twitter"> */}
      </Head>
      <MainLayout>
      <main className="p-20">
        <Typography variant="h1" color="blue" className="mb-10">{category}</Typography>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {products.slice(0, 2).map(product => (
              <PostList
                key={product.name}
                id={product.name}
                product={{
                  categories: [category],
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
                  categories: [category],
                  mainImage: {
                    src: product.image,
                  },
                  // publishedAt: new Date(),
                  // _createdAt: new Date(),
                  author: {
                    image: "",
                  },
                  ...product,
                }}
                aspect="square"
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

  const productsByCategory: CategoryProduct["products"] | [] = categoryProducts[locale as keyof CategoryProducts ?? defaultLocale]
    .find((item) => item.categoryName === params.category)?.products || []

  return {
    props: {
      category: params.category,
      products: productsByCategory ?? [],
    },
  };
}