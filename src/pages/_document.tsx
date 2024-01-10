import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import useTranslation from "next-translate/useTranslation";

export default function Document() {
  const { t } = useTranslation("common")

  return (
    <Html lang={t("meta_lang") ?? "es"}>
      <Head />
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
