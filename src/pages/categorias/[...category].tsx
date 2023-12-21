import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { categories, ProductItem } from "~/routes/hooks/useNavItems";
import PostList from "~/components/products/PostList"

export default function Category({ category, products }: { category: string, products: ProductItem[] }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CONTACTO: ASM STEEL-METAL</title>
        <meta name="description" content={`Conoce nuestras ubicaciones y contacta con nosotros para recibir mas informacion`} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm-steel-metal, asm steel-metal, contacto, ubicacion`} />
      </Head>
      <main className="p-20">
        <Typography variant="h1" color="blue" className="mb-10">{category}</Typography>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {products.slice(0, 2).map(product => (
              <PostList
                key={product.title}
                id={product.title}
                product={{
                  categories: [category],
                  mainImage: {
                    src: product.img,
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
                key={product.title}
                id={product.title}
                product={{
                  categories: [category],
                  mainImage: {
                    src: product.img,
                  },
                  publishedAt: new Date(),
                  _createdAt: new Date(),
                  author: {
                    image: "",
                  },
                  ...product,
                }}
                aspect="square"
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Ver mas</span>
            </Link>
          </div>
      </main>
    </>
  )
}


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { category } = ctx.params as { category: string[] };

  const categoryName = category.join('')

  const categoryDetail = categories.find((item) => item.title === categoryName) ?? []

  return {
    props: {
      category: categoryName,
      products: categoryDetail.products ?? [],
    },
  };
}