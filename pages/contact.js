import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/_App/Footer";
import Head from "next/head";
const ContactPage = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Contact Us | Writ Labs | Mohali, India</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Writ Labs is located in Mohali, India. Our team of experienced developers is ready to take care of your business needs."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta
          itemProp="name"
          content="Contact Us | Writ Labs | Mohali, India"
        />
        <meta
          itemProp="description"
          content="Writ Labs is located in Mohali, India. Our team of experienced developers is ready to take care of your business needs."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact Us | Writ Labs | Mohali, India"
        />
        <meta
          name="twitter:description"
          content="Writ Labs is located in Mohali, India. Our team of experienced developers is ready to take care of your business needs."
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
          content="Contact Us | Writ Labs | Mohali, India"
        />
        <meta
          name="og:description"
          content="Writ Labs is located in Mohali, India. Our team of experienced developers is ready to take care of your business needs."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/contact/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactForm />

      <ContactInfo />

      <Footer />
    </>
  );
};

export default ContactPage;
