import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import Layout from "../components/_App/Layout";
import Head from "next/head";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  // FUNCTION TO ADD SCHEMA.ORG VALID SCHEMA (SEO)
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Writ Labs",
        "url": "https://writlabs.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://writlabs.com/web-development/{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }`,
    };
  }
  return (
    <Layout>
      <Head>
        {/* GOOGLE ANALYTICS META TAG WITH ID */}
        <meta
          name="google-site-verification"
          content="oOK59Zpstea2Oha-j6_dkGdIK4pYa2bQXhEhrTuzTCw"
        />
        <meta
          name="keywords"
          content="business, software, development, writ labs"
        />
        <meta name="theme-color" content="#FFF5F7" />
      </Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XER0CZ93JB"
        strategy="afterInteractive"
      />
      {/* GOOGLE ANYALYTICS SCRIPT */}
      <Script async id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []; 
          function gtag()
          {window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', 'G-XER0CZ93JB');
          `}
      </Script>
      {/* SCHEMA.ORG SCRIPT  */}
      <Script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={addProductJsonLd()}
        key="product-jsonld"
      ></Script>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
