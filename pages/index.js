import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Home/MainBanner";
import PartnerStyleOne from "../components/Common/PartnerStyleOne";
import FeaturesCard from "../components/Home/FeaturesCard";
import AboutUsContent from "../components/Home/AboutUsContent";
// import Services from '../components/Home/Services';
import TechSupport from "../components/Common/TechSupport";
import RecentCaseStudy from "../components/CaseStudy/RecentCaseStudy";
// import OurRespectiveClients from "../components/Common/OurRespectiveClients";
import PopularBlogPost from "../components/Common/PopularBlogPost";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";
import WorkProcess from "../components/Common/WorkProcess";
import Technology from "../components/Home/Technology";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Writ Labs | Expert Software Consultants</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Writ Labs is the leading business website and app development software consultant company in Mohali, specializing in React, Next, Flutter, and Firebase."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta
          itemProp="name"
          content="Writ Labs | Expert Software Consultants"
        />
        <meta
          itemProp="description"
          content="Writ Labs is the leading business website and app development software consultant company in Mohali, specializing in React, Next, Flutter, and Firebase."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Writ Labs | Expert Software Consultants"
        />
        <meta
          name="twitter:description"
          content="Writ Labs is the leading business website and app development software consultant company in Mohali, specializing in React, Next, Flutter, and Firebase."
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
          content="Writ Labs | Expert Software Consultants"
        />
        <meta
          name="og:description"
          content="Writ Labs is the leading business website and app development software consultant company in Mohali, specializing in React, Next, Flutter, and Firebase."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
      </Head>
      <Navbar />

      <MainBanner />

      <PartnerStyleOne />

      <FeaturesCard />

      <AboutUsContent />

      <WorkProcess />

      <Technology />

      <TechSupport />

      {/* <RecentCaseStudy /> */}

      {/* <OurRespectiveClients /> */}

      <PopularBlogPost />
      <div className="pb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
