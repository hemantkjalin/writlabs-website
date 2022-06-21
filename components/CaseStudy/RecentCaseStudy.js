import React from "react";
import Link from "next/link";

const RecentCaseStudy = () => {
  return (
    <>
      <div className="cases-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              We have been providing the best services in the industry for a
              long time. Here is a brief showcase of our exclusively completed
              projects.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="single-cases">
                <a href="/case-study-details-one">
                  <div className="cases-image">
                    <Link href="/case-study-details-one">
                      <a>
                        <img
                          src="/images/cases-study/case-1.webp"
                          alt="image"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="cases-content">
                    <div className="tags">
                      <Link href="/case-study-details-one">
                        <a>Branding</a>
                      </Link>
                      <Link href="/case-study-details-one">
                        <a>Development</a>
                      </Link>
                    </div>

                    <h3>
                      <Link href="/case-study-details-one">
                        <a>Web Development for A Non-Profit Organization</a>
                      </Link>
                    </h3>
                    <p>
                      One of our clients was a volunteer in a nonprofit
                      organization that has prepared and delivered daily
                      scratch-made meals to residents of their area and provided
                      training and education to help guide healthier.
                    </p>
                  </div>
                </a>
              </div>

              <div className="single-cases">
                <a href="/case-study-details-two">
                  <div className="cases-image">
                    <Link href="/case-study-details-two">
                      <a>
                        <img
                          src="/images/cases-study/case-2.webp"
                          alt="image"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="cases-content">
                    <div className="tags">
                      <Link href="/case-study-details-two">
                        <a>Business</a>
                      </Link>
                    </div>

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
                      fosters leadership and innovation in wood usage, and
                      expands markets for BC forest products in order to enhance
                      the BC forest sector.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-cases">
                <a href="/case-study-details-two">
                  <div className="cases-image">
                    <Link href="/case-study-details-three">
                      <a>
                        <img
                          src="/images/cases-study/case-3.webp"
                          alt="image"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="cases-content">
                    <div className="tags">
                      <Link href="/case-study-details-three">
                        <a>App Design</a>
                      </Link>
                    </div>

                    <h3>
                      <Link href="/case-study-details-three">
                        <a>Web Development for Travel and Tourism Project</a>
                      </Link>
                    </h3>
                    <p>
                      The firm was founded in order to assist spread the word
                      about the great career prospects and advantages of living
                      in the area.We were asked to assist a collection of
                      municipalities and tourism boards.
                    </p>
                  </div>
                </a>
              </div>

              <div className="single-cases">
                <a href="/case-study-details-two">
                  <div className="cases-image">
                    <Link href="/case-study-details-four">
                      <a>
                        <img
                          src="/images/cases-study/case-4.webp"
                          loading="lazy"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="cases-content">
                    <div className="tags">
                      <Link href="/case-study-details-four">
                        <a>App Design</a>
                      </Link>
                    </div>

                    <h3>
                      <Link href="/case-study-details-four">
                        <a>Mobile App Development for Medicare Startup</a>
                      </Link>
                    </h3>
                    <p>
                      The firm was a start-up that aimed to make healthcare more
                      accessible by increasing access to blood testing.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="cases-view-all-btn">
              <Link href="/projects">
                <a className="default-btn">
                  View All Projects
                  <i className="ri-briefcase-line"></i>
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="cases-shape-1">
          <img
            src="/images/cases-study/shape-1.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-2">
          <img
            src="/images/cases-study/shape-2.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-3">
          <img
            src="/images/cases-study/shape-3.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-4">
          <img
            src="/images/cases-study/shape-4.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-5">
          <img
            src="/images/cases-study/shape-5.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-6">
          <img
            src="/images/cases-study/shape-4.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="cases-shape-7">
          <img
            src="/images/cases-study/shape-5.png"
            alt="image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Recent Case Study Style */}
      <style jsx>{`
        .cases-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-cases {
          margin-bottom: 64px;
        }
        .single-cases .cases-image {
          overflow: hidden;
        }
        .single-cases .cases-image img {
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-cases .cases-content {
          margin-top: 30px;
        }
        .single-cases .cases-content .tags a {
          color: var(--main-color);
          padding: 5px 15px;
          display: inline-block;
          background-color: #eaf0ff;
          font-size: 14px;
          font-weight: 500;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          margin-right: 15px;
        }
        .single-cases .cases-content .tags a:last-child {
          margin-right: 0;
        }
        .single-cases .cases-content .tags a:hover {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-cases .cases-content h3 {
          font-size: 25px;
          margin-top: 25px;
          margin-bottom: 15px;
        }
        .single-cases .cases-content h3 a {
          position: relative;
        }
        .single-cases .cases-content h3 a::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 100%;
          left: 0;
          top: 0;
          border-bottom: 1px solid var(--main-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
          z-index: -1;
        }
        .single-cases:hover .cases-image img {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
        .single-cases:hover .cases-content h3 a {
          color: var(--main-color);
        }
        .single-cases:hover .cases-content h3 a::before {
          width: 100%;
        }

        // Cases View Button
        .cases-view-all-btn {
          text-align: center;
          margin-top: 15px;
        }
        .cases-view-all-btn .default-btn {
          color: var(--white-color);
          background-color: var(--optional-color);
        }
        .cases-view-all-btn .default-btn span {
          background-color: var(--main-color);
        }
        .cases-view-all-btn .default-btn:hover {
          color: var(--white-color);
        }

        // shape
        .cases-shape-1 {
          position: absolute;
          top: 5%;
          right: 18%;
          -webkit-transform: translateY(-5%) translateX(-18%);
          transform: translateY(-5%) translateX(-18%);
        }
        .cases-shape-2 {
          position: absolute;
          bottom: 8%;
          right: 12%;
          -webkit-transform: translateY(-8%) translateX(-12%);
          transform: translateY(-8%) translateX(-12%);
        }
        .cases-shape-3 {
          position: absolute;
          top: 45%;
          right: 0;
          -webkit-transform: translateY(-45%);
          transform: translateY(-45%);
        }
        .cases-shape-4 {
          position: absolute;
          top: 45%;
          left: 2%;
          -webkit-transform: translateY(-45%) translateX(-2%);
          transform: translateY(-45%) translateX(-2%);
          z-index: -1;
        }
        .cases-shape-5 {
          position: absolute;
          top: 48%;
          left: 2%;
          -webkit-transform: translateY(-48%) translateX(-2%);
          transform: translateY(-48%) translateX(-2%);
          z-index: -1;
        }
        .cases-shape-6 {
          position: absolute;
          top: 45%;
          left: 50%;
          -webkit-transform: translateY(-45%) translateX(-50%);
          transform: translateY(-45%) translateX(-50%);
          z-index: -1;
          opacity: 35%;
        }
        .cases-shape-7 {
          position: absolute;
          top: 46%;
          left: 52%;
          -webkit-transform: translateY(-46%) translateX(-52%);
          transform: translateY(-46%) translateX(-52%);
          z-index: -1;
          opacity: 35%;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-cases .cases-content h3 {
            font-size: 22px;
            margin-top: 20px;
            margin-bottom: 10px;
            line-height: 1.4;
          }
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-cases .cases-content h3 {
            font-size: 23px;
            margin-bottom: 15px;
          }
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default RecentCaseStudy;
