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
        <title>Front End | Technologies | Writ Labs</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use React JS and Next JS."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Front End | Technologies | Writ Labs" />
        <meta
          itemProp="description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use React JS and Next JS."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Front End | Technologies | Writ Labs"
        />
        <meta
          name="twitter:description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use React JS and Next JS."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Front End | Technologies | Writ Labs" />
        <meta
          name="og:description"
          content="At Writ Labs, we use the best frameworks to develop a fast and robust website. We use React JS and Next JS."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/frontend/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Front End"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Technologies"
      />

      <Technologies
        component_prop={<TechnologiesSidebar />}
        bg_image={"frontend.webp"}
        pageTitle={"Front End"}
        pageContent_one={
          "The front end of a website is the section that the user interacts with directly. It's also referred to as the application's 'client-side.' Everything that users see immediately is included: text colors and styles, photos, graphs and tables, buttons, colors, and the navigation menu. The Front End's key goals are responsiveness and performance. "
        }
        pageContent_two={
          "Any website or application's front end has programming that allows users to access particular features. A backend, on the other hand, is responsible for data processing and other background operations that are essential for the application to run. The major benefit of front-end programming is that it can be completed more quickly. Front-end development activities are made faster thanks to cutting-edge technological breakthroughs and frameworks. The developer at Writ Labs guarantees that the site is responsive, meaning that it works properly on devices of all sizes. We ensure that no component of the website should act inappropriately regardless of screen size."
        }
        pageContent_three={
          "There are now a plethora of web development frontend technologies to pick from, and figuring out which one best meets your needs may be a headache if you don't know where to start. At Writ Labs, we use the best frontend technologies to develop a fully functional website. Some of these frontend technologies are:"
        }
        bulletpoint_one={
          "React is a JavaScript library for creating user interfaces that are declarative, fast, and customizable. ReactJS is an open-source, component-based front-end library that is only responsible for the application's display layer. Facebook is in charge of keeping it up to date."
        }
        bulletpoint_two={
          "Next.js is a JavaScript framework that enables you to build superfast and extremely user-friendly static websites, as well as web applications using React.In fact, thanks to Automatic Static Optimization, “static” and “dynamic” become one now.This feature allows Next.js to build hybrid applications that contain both server-side rendered and statically generated pages."
        }
        bulletpoint_three={
          "Angular is a free and open-source framework for building single-page web apps. It may be used by developers to create animated menus for HTML websites. Developers may provide comparable experiences to applications by utilising cutting-edge platform capabilities. Angular is a high-performance framework that is very simple to set up."
        }
      />
    </>
  );
};

export default TechnologiesDetails;
