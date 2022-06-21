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
        <title>Database | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use the best databases to develop a fully functional website. Some of these databases are MongoDB, Firebase, and, MySQL."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Database | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use the best databases to develop a fully functional website. Some of these databases are MongoDB, Firebase, and, MySQL."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Database | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use the best databases to develop a fully functional website. Some of these databases are MongoDB, Firebase, and, MySQL."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Database | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use the best databases to develop a fully functional website. Some of these databases are MongoDB, Firebase, and, MySQL."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/database/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Database"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />

      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"database.webp"}
        pageTitle={"Database"}
        pageContent_one={
          "Whether a small business or a major corporation, digital transformation has enabled firms to create information at every touchpoint. Every company, regardless of size, requires a database to organize and store its core data. The database management system software comes to the rescue in order to give such a service. "
        }
        pageContent_two={
          "A database may be thought of as a space within an office where all of the important data and reports are kept. Because the information that is kept is exceedingly sensitive, we must exercise utmost caution when accessing the database's contents. With the rise of Microservices, Cloud, Distributed Apps, Semi-Structured Data, Big Data, Low Latency Data, and other technologies, the traditional SQL list of most popular databases is now being supplemented by various NoSQL, NewSQL, and Cloud databases."
        }
        pageContent_three={
          "There are now a plethora of web development databases to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start. At Writ Labs, we use the best databases to develop a fully functional website. Some of these databases are:"
        }
        bulletpoint_one={
          "MySQL-  MySQL is one of the most widely used databases in the computing industry in 2021, particularly in web application development. The database's key goals are stability, robustness, and maturity. Web development solutions are the most prevalent use of this database. MySQL is a structured query language that is built in C and C++."
        }
        bulletpoint_two={
          "MongoDB-  There are a few things to consider when it comes to the most popular databases to utilize in 2021 using a NoSQL database. MongoDB is a document database management system that was initially launched in 2009. Using object-oriented programming languages to load and retrieve data in RDBMS is difficult, and it also necessitates additional application-level mapping."
        }
        bulletpoint_three={
          "DynamoDB-  Amazon's DynamoDB is a nonrelational best database. It's a serverless database for mobile apps that automatically scales up and down while storing up your data. Built-in security and in-memory caching, as well as constant latency, are all aspects of this database application."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
