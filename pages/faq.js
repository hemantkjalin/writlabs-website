import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";
import Head from "next/head";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FAQs = () => {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        <meta charSet="utf-8" />
        <title>FAQs| Writ Labs | Mohali</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="At Writ Labs, we believe in working together with the client throughout the development process to guarantee end result satisfaction."
        />
        <meta name="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="FAQs| Writ Labs | Mohali" />
        <meta
          itemProp="description"
          content="At Writ Labs, we believe in working together with the client throughout the development process to guarantee end result satisfaction."
        />
        <meta itemProp="image" content="https://writlabs.com/images/logo.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQs| Writ Labs | Mohali" />
        <meta
          name="twitter:description"
          content="At Writ Labs, we believe in working together with the client throughout the development process to guarantee end result satisfaction."
        />
        <meta name="twitter:site" content="@writ_labs" />
        <meta name="twitter:creator" content="@writ_labs" />
        <meta
          name="twitter:image:src"
          content="https://writlabs.com/images/logo.png"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="FAQs| Writ Labs | Mohali" />
        <meta
          name="og:description"
          content="At Writ Labs, we believe in working together with the client throughout the development process to guarantee end result satisfaction."
        />
        <meta name="og:image" content="https://writlabs.com/images/logo.png" />
        <meta name="og:url" content="https://writlabs.com/faq/" />
        <meta name="og:site_name" content="Writ Labs" />
        <meta name="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQs"
      />

      <div className="faq-area ptb-100">
        <div className="container">
          <div className="faq-accordion accordion-box">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why should we use Writ Labs over another agency?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Because of our vast expertise in delivering difficult app
                    and web portal development projects, our clients choose us.
                    We have over 12 years of experience solving a wide range of
                    problems, including collaborating with existing development
                    teams, and bringing systems, processes, and applications
                    together in a seamless manner. We can assist you whether you
                    have large ideas, difficult challenges, or simply want the
                    best from an agency.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is it possible to build iOS and Android apps?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    In most cases, we create apps that work on both iOS and
                    Android devices. Typically, our customers want their apps to
                    work on both mobile and desktop devices, so we use React
                    Native and React and React as development frameworks to
                    support both platforms rapidly.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you build web applications also?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    We need a web-based application to operate behind the scenes
                    for practically every mobile app we build. Are you familiar
                    with the login process? There is a web server running in the
                    background sending data to the app to determine if you are
                    authorized to log in or not.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Throughout the development process, will you provide any
                    support?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Throughout the development process, you will be allocated a
                    professional project manager who will be your primary point
                    of contact. Our support portal processes every request and
                    inquiry, ensuring that you receive prompt responses and that
                    your work is correctly prioritized. We also provide a
                    variety of support and maintenance solutions to guarantee
                    that we are available to respond to your demands beyond the
                    first launch.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I make changes once the app or website is launched?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    We offer a few choices for making adjustments to your app or
                    website in the future. You may either hire us to upgrade
                    your app or website on a project-by-project basis, in which
                    case we'll specify, estimate, schedule, and deliver a set of
                    needs as and when you need them. Alternatively, we may use
                    an AGILE strategy, in which we schedule a set amount of
                    developer time each month to ensure that things are always
                    getting better for you. Both tactics have value, and you'll
                    probably know which is best for you after reading this
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Which programming language and framework do you use?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    With HTML, CSS, and JavaScript on the front end and
                    JavaScript or PHP on the back end, we prefer to employ
                    open-source languages whenever feasible. For most mobile app
                    projects, we utilize React Native, although we will
                    occasionally use Cordova or PhoneGap if we are on a limited
                    budget or need to support web, Android, and iOS rapidly.We
                    employ front-end layout frameworks like bootstrap, design,
                    and material design for web projects, as well as front-end
                    coding frameworks like React or Angular. We commonly employ
                    a PHP framework like Laravel or Yii2 on the backend or
                    JavaScript with NodeJS.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="ticket-box">
            <h3>Have Any Question in Mind Please Call or Mail Us</h3>

            <div className="box-one">
              <div>
                <i className="ri-customer-service-line"></i>
              </div>
              <i className="ri-phone-fill" />
              <a href="#">&nbsp;+91-7508243357</a>
              <div></div>
              <i className="ri-phone-fill" />
              <a href="#">&nbsp;+91-9017794910</a>
            </div>

            <div className="box-two">
              <i className="ri-earth-line"></i>
              <a href="#">contact@writlabs.com</a>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="faq-shape-1">
          <img src="/images/faq/shape-1.png" alt="image" loading="lazy" />
        </div>
        <div className="faq-shape-2">
          <img src="/images/faq/shape-2.png" alt="image" loading="lazy" />
        </div>
        <div className="faq-shape-3">
          <img src="/images/faq/shape-3.png" alt="image" loading="lazy" />
        </div>
        <div className="faq-shape-4">
          <img src="/images/faq/shape-4.png" alt="image" loading="lazy" />
        </div>
        <div className="faq-shape-5">
          <img src="/images/faq/shape-5.png" alt="image" loading="lazy" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQs;
