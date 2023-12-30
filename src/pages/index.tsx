import Head from "next/head";
import { Hero, FeaturedProducts, Categories, Content } from "~/components/home"
import categoryProducts from "~/mock/products/categoryProducts";

export default function Home(
  // props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>ASM STEEL-METAL</title>
        <meta name="description" content={`ASM STEEL-METAL es una empresa dedicada a entregar al sector productivo aceros y metales especiales`} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm-steel-metal, asm steel-metal`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <Hero />

        <FeaturedProducts />

        <div className="m-8">
          <Categories />
        </div>

        <Content />

      </main>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

//  const hola = categoryProducts = ctx

  return {
    props: { 
      img: '',
     },
  };
}
