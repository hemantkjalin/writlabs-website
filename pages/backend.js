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
        <title>Back End | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use Back End technologies to develop a fully functional website and app, like PHP, Java, and, Node.JS"
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Back End | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use Back End technologies to develop a fully functional website and app, like PHP, Java, and, Node.JS"
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Back End | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use Back End technologies to develop a fully functional website and app, like PHP, Java, and, Node.JS"
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Back End | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use Back End technologies to develop a fully functional website and app, like PHP, Java, and, Node.JS"
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/backend/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Back End"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />

      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"backend.webp"}
        pageTitle={"Back End"}
        pageContent_one={
          "While software development processes have turned towards the user, with a focus on the customer's wants and visual choices, the product's Back End is what keeps it running. Web and mobile apps will lack scalability, functionality, and responsiveness if their Back End technologies aren't up to par. The Back End of a software solution is the behind the scenes component that focuses on the app architecture and serves as a link between the frontend and the database"
        }
        pageContent_two={
          "What exactly is a Back End and what does it do? The Back End of software is the server-side component that stores and analyses data while also ensuring that the program runs smoothly. Writing APIs, libraries, and dealing with system components, business processes, and data architecture are all responsibilities of Back End developers. Back End development is a process that delivers and receives data, connects with the frontend, and presents the data as a web page while remaining unseen to users. Writ Labs being the top web development company in Mohali ensure to use the best Back End technologies to deliver the best website. "
        }
        pageContent_three={
          "Our skilled and knowledgeable web and app developers use top-notch Back End technologies to help you outperform your competition. At Writ Labs, we use the following Back End technologies to develop a fully functional website or app."
        }
        bulletpoint_one={
          "PHP-  PHP is the best Back End technology on the list. According to W3Techs' analysis, PHP is used for the Back End of about 80% of all websites. PHP is mostly used for web development and is compatible with a variety of operating systems, including Windows, Linux, macOS, Unix, and others."
        }
        bulletpoint_two={
          "Java-  Java is a 25-year-old programming language used to create feature-rich web applications. The name of the functionality is self-explanatory since it suggests that Java removes unnecessary or superfluous objects automatically."
        }
        bulletpoint_three={
          "NodeJS-  Because of its single-threaded nature, Node. js is best suited for non-blocking, event-driven servers. It was created with real-time, push-based architectures in mind and is utilized for standard web pages and back-end API applications."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
