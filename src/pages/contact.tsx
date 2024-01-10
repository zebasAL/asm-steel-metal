import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Contact from "~/components/contact/Contact"
import MainLayout from "~/components/layouts/MainLayout";

export default function index() {
  const { t, lang } = useTranslation("contact")

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{t("meta_title")}</title>
        <meta name="description" content={`${lang === "es" ? "Ubicaciones" : "Locations"}: Queretaro ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}, Tlanepantla ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_SECONDARY}`} />
        <meta name="keywords" content={`queretaro, tlanepantla,contacto, ubicacion, ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}, ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_SECONDARY}`} />
        <meta name="robots" content="index, follow" />
        {/* Facebook y General */}
        <meta property="og:title" content={t("meta_title")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="og:description" content={`${lang === "es" ? "Ubicaciones" : "Locations"}: Queretaro ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}, Tlanepantla ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_SECONDARY}`} />
        {/* Twitter */}
        <meta name="twitter:title" content={t("meta_title")} />
        <meta name="twitter:description" content={`${lang === "es" ? "Ubicaciones" : "Locations"}: Queretaro ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}, Tlanepantla ~ ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_SECONDARY}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/android-chrome-512x512.png" />
        <meta property="twitter:domain" content={`${process.env.VERCEL_URL}`} />
        <meta property="twitter:url" content={`${process.env.VERCEL_URL}/${lang === "es" ? "" : "en"}/contact`} />
      </Head>
      <MainLayout>
        <main>
          <Contact />
        </main>
      </MainLayout>
    </>
  );
}