import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import WorkProcess from "../components/Common/WorkProcess";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";
import WebDevelopment from "../components/ServicesDetails/WebDevelopment";
import Head from "next/head";

const WebDetails = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Web Development | Services | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Writ Labs creates beautiful website experiences which are fast and robust, using the latest technology stacks like React, Next and Firebase"
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta
          itemProp="name"
          content="Web Development | Services | Writ Labs"
        />
        <meta
          itemProp="description"
          content="Writ Labs creates beautiful website experiences which are fast and robust, using the latest technology stacks like React, Next and Firebase"
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Web Development | Services | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="Writ Labs creates beautiful website experiences which are fast and robust, using the latest technology stacks like React, Next and Firebase"
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta
          name="og:title"
          content="Web Development | Services | Writ Labs"
        />
        <meta
          name="og:description"
          content="Writ Labs creates beautiful website experiences which are fast and robust, using the latest technology stacks like React, Next and Firebase"
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/web-development/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Web Developement"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <WebDevelopment />

      {/* <WorkProcess /> */}

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default WebDetails;
