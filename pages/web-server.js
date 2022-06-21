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
        <title>Web Server | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use the best web servers to develop a fully functional website. "
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Web Server | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use the best web servers to develop a fully functional website. "
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Web Server | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use the best web servers to develop a fully functional website. "
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Web Server | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use the best web servers to develop a fully functional website. "
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/web-server/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Web Server"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />

      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"server.webp"}
        pageTitle={"Web Servers"}
        pageContent_one={
          "Every website is hosted on a Web server, which is a computer. This server is connected to the internet at all times. Every Web server connected to the Internet is assigned a unique address consisting of four digits ranging from 0 to 255 separated by periods. 68.178.157.132 or 68.122.35.127, for example."
        }
        pageContent_two={
          "You must give the IP address of the Web server that will host the site when registering a web address, also known as a domain name, such as tutorialspoint.com. You may get Dedicated Servers to help you with your web-based activities. The bulk of online apps and websites run on open-source web servers. Since the first web server was launched in 1991, open-source web server technology has gone a long way. Today, developers have a wide range of options from which to pick."
        }
        pageContent_three={
          "There are now a plethora of web servers to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start. At Writ Labs, we use the best web servers to develop a fully functional website. Some of these web servers are:"
        }
        bulletpoint_one={
          "Apache-  The Apache Software Foundation has produced the world's most popular web server. The Apache web server is free software that may be installed on a wide range of operating systems, including Linux, Unix, Windows, FreeBSD, Mac OS X, and others. The Apache Web Server is used by about 60% of web server computers."
        }
        bulletpoint_two={
          "NGINX-  NGINX is the second most popular open-source web server, with little over 30% of all websites operating on it. To achieve its aim of supporting huge concurrent sessions, NGINX depends on an asynchronous event-driven architecture. Because of its low resource consumption and ease of scaling, it has become a highly popular web server among administrators."
        }
        bulletpoint_three={
          "HAProxy-  HAProxy (High Availability Proxy) is a load balancing and proxy server that is open source. It improves speed and performance by dividing workload over numerous servers at the network (TCP) and application (HTTP/S) layers, providing high availability at both the network and application layers."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
