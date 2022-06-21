import React from "react";
import PageBanner from "../components/Common/PageBanner";
import TechnologiesSidebar from "../components/Technology/TechnologiesSidebar";
import Navbar from "../components/_App/Navbar";
import Technologies from "./technologies";
import Head from "next/head";

const TechnologiesDetails = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <title>Platforms | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use the best web platforms to develop a fully functional website. Some of these web platforms are Load Balancer, Route 53, and Cloudwatch."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Platforms | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use the best web platforms to develop a fully functional website. Some of these web platforms are Load Balancer, Route 53, and Cloudwatch."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Platforms | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use the best web platforms to develop a fully functional website. Some of these web platforms are Load Balancer, Route 53, and Cloudwatch."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Platforms | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use the best web platforms to develop a fully functional website. Some of these web platforms are Load Balancer, Route 53, and Cloudwatch."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/platform/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Platforms"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />
      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"platform.webp"}
        pageTitle={"Platforms"}
        pageContent_one={
          "The operating system and computer hardware are referred to as a platform. The platform is a collection of guidelines that allow programmers to create software applications using the appropriate technological stack. These standards enable business owners and managers to obtain the right software and hardware."
        }
        pageContent_two={
          "A new project's budget, regardless of whether it's a startup or an established corporation, is rarely substantial enough to produce a product for all current platforms without reluctance in order to acquire larger market penetration. Even if you have a budget, you should think about whether you really need to cover all of the platforms and which platform is appropriate for your project development."
        }
        pageContent_three={
          "There are now a plethora of web platforms to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start. At Writ Labs, we use the best web platforms to develop a fully functional website. Some of these web platforms are:"
        }
        bulletpoint_one={
          "Load Balancer-  Administrators use software load balancing to redirect network traffic to multiple servers. Client requests are evaluated by load balancers by looking at application-level attributes (the IP address, the HTTP header, and the contents of the request)."
        }
        bulletpoint_two={
          "Route 53-  Route 53 is a cloud Domain Name System (DNS) web service that is highly accessible and scalable. Its purpose is to provide developers and enterprises with a highly dependable and cost-effective method of routing end users to Internet applications by translating names."
        }
        bulletpoint_three={
          "CloudWatch-  The requirement for visibility into application performance is critical when providing software as a service (SaaS). To meet this demand, cloud infrastructure providers such as Amazon Web Services (AWS) offer real-time data analytics solutions, such as Amazon CloudWatch."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
