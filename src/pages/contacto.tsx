import Head from "next/head";
import Contact from "~/components/contact/Contact"

export default function index(
  // props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>CONTACTO: ASM STEEL-METAL</title>
        <meta name="description" content={`Conoce nuestras ubicaciones y contacta con nosotros para recibir mas informacion`} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm-steel-metal, asm steel-metal, contacto, ubicacion`} />
      </Head>
      <main>
        <Contact />
      </main>
    </>
  );
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const cookies = nookies.get(ctx);
//   const authenticated = await userIsLoggedIn(cookies);
//   return {
//     props: { authenticated },
//   };
// }
