import React from "react";
import CTA from "../components/Common/CTA";
import PageBanner from "../components/Common/PageBanner";
import WorkProcess from "../components/Common/WorkProcess";
import WebDevelopment from "../components/ServicesDetails/WebDevelopment";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Head from "next/head";

const Services = () => {
  return (
    <div>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Services | Writ Labs | Mohali, India</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Writ Labs provides web design, development, and mobile development services using various tech stacks like React, Next, Flutter, and Firebase."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Services | Writ Labs | Mohali, India" />
        <meta
          itemProp="description"
          content="Writ Labs provides web design, development, and mobile development services using various tech stacks like React, Next, Flutter, and Firebase."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Services | Writ Labs | Mohali, India"
        />
        <meta
          name="twitter:description"
          content="Writ Labs provides web design, development, and mobile development services using various tech stacks like React, Next, Flutter, and Firebase."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Services | Writ Labs | Mohali, India" />
        <meta
          name="og:description"
          content="Writ Labs provides web design, development, and mobile development services using various tech stacks like React, Next, Flutter, and Firebase."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/services/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Services Details"
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
    </div>
  );
};

export default Services;
