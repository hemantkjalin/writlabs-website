import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";
import Head from "next/head";
const CaseStudyTwo = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
      />

      <>
        <div className="projects-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-one">
                    <div
                      style={{ position: "relative" }}
                      className="projects-image"
                    >
                      <Link href="/case-study-details-one">
                        <a>
                          <img
                            src="/images/projects/TrackerPlay.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                      <div className="ribbon ribbon-top-left">
                        <span>Coming Soon</span>
                      </div>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-one">
                          <a>Tracking and Productivity App</a>
                        </Link>
                      </h3>
                      <p>
                        Our own user productivity and project management
                        application with an admin client....
                      </p>

                      <Link href="/case-study-details-one">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-two">
                    <div className="projects-image">
                      <Link href="/case-study-details-two">
                        <a>
                          <img
                            src="/images/projects/case-2.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-two">
                          <a>
                            Web Development for Industrial and Construction
                            Project
                          </a>
                        </Link>
                      </h3>
                      <p>
                        The firm promotes the benefits of wood and BC forests,
                        fosters leadership and innovation in wood usage,....
                      </p>

                      <Link href="/case-study-details-two">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-three">
                    <div className="projects-image">
                      <Link href="/case-study-details-three">
                        <a>
                          <img
                            src="/images/projects/case-3.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-three">
                          <a>Web Development for Travel and Tourism Project</a>
                        </Link>
                      </h3>
                      <p>
                        The firm was founded in order to assist spread the word
                        about the great career prospects and advantages of
                        living in the area. We....
                      </p>

                      <Link href="/case-study-details-three">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-four">
                    <div className="projects-image">
                      <Link href="/case-study-details-four">
                        <a>
                          <img
                            src="/images/projects/case-4.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-four">
                          <a>Mobile App Development for Medicare Startup</a>
                        </Link>
                      </h3>
                      <p>
                        The firm was a start-up that aimed to make healthcare
                        more accessible by increasing access to blood
                        testing....
                      </p>

                      <Link href="/case-study-details-four">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-five">
                    <div className="projects-image">
                      <Link href="/case-study-details-five">
                        <a>
                          <img
                            src="/images/projects/case-5.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-five">
                          <a>Web Development for Tourist Project</a>
                        </Link>
                      </h3>
                      <p>
                        The organization provides tourists and residents with a
                        variety of useful information about the thrilling
                        experiences,....
                      </p>

                      <Link href="/case-study-details-five">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                  <a href="/case-study-details-six">
                    <div className="projects-image">
                      <Link href="/case-study-details-six">
                        <a>
                          <img
                            src="/images/projects/case-6.webp"
                            alt="image"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="projects-content">
                      <h3>
                        <Link href="/case-study-details-six">
                          <a>
                            App Development for Digital Transformation Project
                          </a>
                        </Link>
                      </h3>
                      <p>
                        The startup aspires to revolutionize the funeral
                        industry by streamlining funeral homes' day-to-day
                        operations....
                      </p>

                      <Link href="/case-study-details-six">
                        <a className="projects-btn">
                          Details <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </a>
                </div>
              </div> */}

              {/* <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <a href="#" className="prev page-numbers">
                    <i className="ri-arrow-left-line"></i>
                  </a>
                  <span className="page-numbers current" aria-current="page">
                    1
                  </span>
                  <a href="#" className="page-numbers">
                    2
                  </a>
                  <a href="#" className="page-numbers">
                    3
                  </a>
                  <a href="#" className="page-numbers">
                    4
                  </a>
                  <a href="#" className="next page-numbers">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Shape Images */}
          <div className="projects-shape-1">
            <img
              src="/images/projects/shape-1.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="projects-shape-2">
            <img
              src="/images/projects/shape-2.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="projects-shape-3">
            <img
              src="/images/projects/shape-3.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="projects-shape-4">
            <img
              src="/images/projects/shape-4.png"
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="projects-shape-5">
            <img
              src="/images/projects/shape-5.png"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>

        <style jsx>{`
          .projects-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-projects-box {
            margin-bottom: 64px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-projects-box .projects-image {
            overflow: hidden;
          }
          .single-projects-box .projects-image img {
            -webkit-transition: var(--transition);
            transition: var(--transition);
            display: inline-block;
          }
          .single-projects-box .projects-content {
            margin-top: 25px;
          }
          .single-projects-box .projects-content h3 {
            font-size: 25px;
            margin-bottom: 15px;
          }
          .single-projects-box .projects-content h3 a {
            color: var(--black-color);
          }
          .single-projects-box .projects-content p {
            margin-bottom: 15px;
          }
          .single-projects-box .projects-content .projects-btn {
            color: var(--paragraph-color);
            position: relative;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            font-weight: 500;
          }
          .single-projects-box .projects-content .projects-btn i {
            position: absolute;
            right: -20px;
            top: 58%;
            -webkit-transform: translateY(-58%);
            transform: translateY(-58%);
            font-size: 14px;
          }
          .single-projects-box:hover {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          .single-projects-box:hover .projects-image img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          .single-projects-box:hover .projects-content h3 a {
            color: var(--main-color);
          }
          .single-projects-box:hover .projects-content .projects-btn {
            letter-spacing: 1px;
            color: var(--main-color);
          }

          // Projects shape
          .projects-shape-1 {
            position: absolute;
            top: 25%;
            left: 0;
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
          }
          .projects-shape-2 {
            position: absolute;
            top: 20%;
            left: 30%;
            -webkit-transform: translateY(-20%) translateX(-30%);
            transform: translateY(-20%) translateX(-30%);
            z-index: -1;
          }
          .projects-shape-3 {
            position: absolute;
            top: 10%;
            right: 15%;
            -webkit-transform: translateY(-10%) translateX(-15%);
            transform: translateY(-10%) translateX(-15%);
          }
          .projects-shape-4 {
            position: absolute;
            bottom: 15%;
            right: 15%;
            -webkit-transform: translateY(-15%) translateX(-15%);
            transform: translateY(-15%) translateX(-15%);
          }
          .projects-shape-5 {
            position: absolute;
            bottom: 10%;
            right: 12%;
            -webkit-transform: translateY(-10%) translateX(-12%);
            transform: translateY(-10%) translateX(-12%);
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
            padding: 10px 0px;
            background-color: #61baad;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            color: #fff;
            font: 700 15px/1 "Lato", sans-serif;
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
            top: 40px;
            transform: rotate(-45deg);
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 21px;
              margin-bottom: 15px;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 22px;
              margin-bottom: 15px;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 20px;
              margin-bottom: 15px;
            }
          }
        `}</style>
      </>

      <div className="pb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default CaseStudyTwo;
