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
        <title>Frameworks | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use CakePHP, Spring, and Laravel."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Frameworks | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use CakePHP, Spring, and Laravel."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Frameworks | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use CakePHP, Spring, and Laravel."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Frameworks | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use CakePHP, Spring, and Laravel."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/framework/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Frameworks"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />

      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"framework.webp"}
        pageTitle={"Frameworks"}
        pageContent_one={
          "Websites are an essential component of a company's digital identity. Before making a final purchasing choice, 70-80% of individuals undertake fast internet research and check for the company's website, online reviews, and other similar information. If the complexity of website building has intimidated you, you've come to the perfect place since we'll be discussing many areas of website development on this blog."
        }
        pageContent_two={
          "When you create a website, you not only appear more professional, but you also appear more genuine to potential customers. Developing a website from the ground up often costs a lot of money and effort. However, if your budget is restricted (as it is for most small enterprises), Writ Labs's no-code website builder is the ideal option. You won't have to worry about the technical side of website building, and you'll have total control over the final appearance of your site. There are a plethora of web development frameworks to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start."
        }
        pageContent_three={
          "There are now a plethora of web development frameworks to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start. At Writ Labs, we use the best frameworks to develop a fully functional website. Some of these frameworks are:"
        }
        bulletpoint_one={
          "Cake PHP-  CakePHP is a popular framework based on the MCV (Paradigm-Controller-View) model. CakePHP is particularly appealing since it allows you to reuse the code from all of your previous projects. As a result, the developers save a significant amount of time and money by speeding up the entire web development process."
        }
        bulletpoint_two={
          "Laravel-  Laravel is an open-source PHP framework created with the goal of producing only the highest-quality apps. The framework provides a system with specialized dependency management, a syntactic sugar preference, and assistance with application maintenance and deployment."
        }
        bulletpoint_three={
          "Spring-  Spring is the most widely used corporate Java app development framework. The framework is used by a large number of developers throughout the world to create high-performance and robust web applications. The framework is especially well-known for its ability to create JVM-based systems and applications that are simple, portable, quick, and adaptable."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
