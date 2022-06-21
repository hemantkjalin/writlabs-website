import React from "react";
import Navbar from "../_App/Navbar";
import PageBanner from "../Common/PageBanner";
import CaseStudySidebar from "./CaseStudySidebar";
import Footer from "../_App/Footer";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel3"));
const options = {
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 400,
  margin: 10,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='ri-arrow-left-line'></i>",
    "<i class='ri-arrow-right-line'></i>",
  ],
  responsive: {
    1200: {
      items: 1,
    },
  },
};

const CaseStudyContent = ({
  pageTitle,
  pageContent_one,
  pageContent_two,
  pageContent_three,
  pageContent_four,
  title,
  bg_image,
}) => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={pageTitle}
        homePageUrl="/"
        homePageText="Home"
        activePageText={pageTitle}
        subNavigate={"projects"}
      />

      <>
        <div className="case-details-area ptb-100">
          <div className="container">
            {display ? (
              <div style={{ position: "relative" }}>
                <OwlCarousel
                  className="partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="case-details-image">
                    <img
                      src={`/images/cases-details/${bg_image}`}
                      alt="image"
                      loading="lazy"
                    />
                  </div>

                  <div className="case-details-image">
                    <img
                      src={`/images/cases-details/LoginPage.webp`}
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="case-details-image">
                    <img
                      src={`/images/cases-details/WebLogin.webp`}
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="case-details-image">
                    <img
                      src={`/images/cases-details/Dashboard.webp`}
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                </OwlCarousel>
                <div className="ribbon ribbon-top-left">
                  <span>Coming Soon</span>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="case-details-content">
                  <h3>{pageTitle}</h3>

                  <p>{pageContent_one}</p>

                  <p>{pageContent_two}</p>

                  <br />

                  <h3>{title}</h3>

                  <p>{pageContent_three}</p>

                  <p>{pageContent_four}</p>
                </div>
                {bg_image === "TrackerPlay.webp" && (
                  <div className="case-details-overview-image">
                    <img
                      src="/images/cases-details/projectHorizontal.webp"
                      alt="image"
                    />
                    <div style={{ marginTop: "2rem" }}>
                      <h3>Demo</h3>
                      <p>
                        For demo and more details, contact us{" "}
                        <a href="/contact">
                          <u>here</u>.
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* <div className="case-details-overview-image">
                  <img
                    src="/images/cases-details/cases-details-3.jpg"
                    alt="image"
                  />
                </div> */}
              </div>

              <div className="col-lg-3 col-md-12">
                <CaseStudySidebar />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .case-details-image {
            text-align: center;
            margin-bottom: 40px;
          }
          .case-details-content {
            margin-right: 50px;
          }
          .case-details-content h3 {
            font-size: 28px;
            margin-bottom: 15px;
          }
          .case-details-content p {
            font-size: 15px;
          }
          .case-details-overview-image {
            margin-top: 35px;
          }
          .ribbon {
            width: 150px;
            height: 150px;
            overflow: hidden;
            position: absolute;
            z-index: 2;
          }
          .ribbon::before,
          .ribbon::after {
            position: absolute;
            z-index: -1;
            content: "";
            display: block;
            border: 5px solid #61baad;
          }
          .ribbon span {
            position: absolute;
            display: block;
            width: 225px;
            padding: 15px 0;
            background-color: #61baad;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            color: #fff;
            font: 700 18px/1 "Lato", sans-serif;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
            text-align: center;
          }

          /* top left*/
          .ribbon-top-left {
            top: -10px;
            left: -10px;
          }
          .ribbon-top-left::before,
          .ribbon-top-left::after {
            border-top-color: transparent;
            border-left-color: transparent;
          }
          .ribbon-top-left::before {
            top: 0;
            right: 0;
          }
          .ribbon-top-left::after {
            bottom: 0;
            left: 0;
          }
          .ribbon-top-left span {
            right: -25px;
            top: 30px;
            transform: rotate(-45deg);
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .case-details-image {
              margin-bottom: 25px;
            }
            .case-details-content {
              margin-right: 0;
            }
            .case-details-content h3 {
              font-size: 22px;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .case-details-content {
              margin-right: 0;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .case-details-content {
              margin-right: 0;
            }
          }
        `}</style>
      </>
      <Footer />
    </>
  );
};

export default CaseStudyContent;
