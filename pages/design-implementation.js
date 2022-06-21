import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import WorkProcess from "../components/Common/WorkProcess";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";
import DesignImplementation from "../components/ServicesDetails/DesignImplementation";
import Head from "next/head";

const DesignDetails = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <title>Design Implementation | Services | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Writ Labs creates beautiful designs which are simple and user-friendly, using the latest tools like Figma, Adobe Illustrator, and Photoshop."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta
          itemProp="name"
          content="Design Implementation | Services | Writ Labs"
        />
        <meta
          itemProp="description"
          content="Writ Labs creates beautiful designs which are simple and user-friendly, using the latest tools like Figma, Adobe Illustrator, and Photoshop."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Design Implementation | Services | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="Writ Labs creates beautiful designs which are simple and user-friendly, using the latest tools like Figma, Adobe Illustrator, and Photoshop."
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
          content="Design Implementation | Services | Writ Labs"
        />
        <meta
          name="og:description"
          content="Writ Labs creates beautiful designs which are simple and user-friendly, using the latest tools like Figma, Adobe Illustrator, and Photoshop."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/web-development/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Design Implementation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <DesignImplementation />

      {/* <WorkProcess /> */}

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default DesignDetails;
