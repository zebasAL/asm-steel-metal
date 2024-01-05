import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import useTranslation from "next-translate/useTranslation";

export default function Document() {
  const { lang } = useTranslation()

  return (
    <Html lang={lang ?? "es"}>
      <Head>
        <meta
          name="description"
          content={
            lang === "es"
              ? "Somos comercializadores de aceros especiales y metales para la industria. Con años de experiencia en el sector, hemos consolidado nuestra posición como un socio confiable, rentable y comprometido con la excelencia."
              : "We are distributors of special steels and metals for the industry. With years of experience in the sector, we have consolidated our position as a reliable, profitable, and committed partner to excellence."
          }
        />
        <meta name="keywords" content={`asm, steel, metal, acero, asm - steel metal, asm steel-metal`} />
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook y General */}
        <meta property="og:title" content="ASM - STEEL METAL" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta
          name="og:description"
          content={
            lang === "es"
              ? "Somos comercializadores de aceros especiales y metales para la industria. Con años de experiencia en el sector, hemos consolidado nuestra posición como un socio confiable, rentable y comprometido con la excelencia."
              : "We are distributors of special steels and metals for the industry. With years of experience in the sector, we have consolidated our position as a reliable, profitable, and committed partner to excellence."
          }
        />
        {/* Twitter */}
        <meta name="twitter:card" content="/android-chrome-512x512.png" />
        <meta property="twitter:domain" content={`${process.env.VERCEL_URL}`} />
        <meta name="twitter:title" content="ASM - STEEL METAL" />
        <meta property="twitter:image" content="/android-chrome-512x512.png" />
        <meta
          name="twitter:description"
          content={
            lang === "es"
              ? "Somos comercializadores de aceros especiales y metales para la industria. Con años de experiencia en el sector, hemos consolidado nuestra posición como un socio confiable, rentable y comprometido con la excelencia."
              : "We are distributors of special steels and metals for the industry. With years of experience in the sector, we have consolidated our position as a reliable, profitable, and committed partner to excellence."
          }
        />
      </Head>
      <body className="antialiased">

        {/* <!-- Your Chat plugin code --> */}
        <div id="fb-root" />
        <div
          id="fb-customer-chat"
          className="fb-customerchat"
        />
        <Script
          id="messenger-tag"
          strategy="afterInteractive"
        >
          {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", ${process.env.META_CHATBOT_PAGE_ID});
          chatbox.setAttribute("attribution", "biz_inbox");
        `}
        </Script>
        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
        >
          {`
        window.fbAsyncInit = function() {
          FB.init({
            appId : 1092597915427318,
            xfbml : true,
            version : 'v18.0',
          });
        };
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      `}
        </Script>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
