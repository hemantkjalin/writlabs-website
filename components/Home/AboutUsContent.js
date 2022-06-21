import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="experiences-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="experiences-item">
                <div className="experiences-content">
                  <div className="tag">
                    <img
                      src="/images/experiences/tag-icon.png"
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <h3>Our Professional Expertise</h3>
                  <p>
                    With over 12 years of experience in the field, we are
                    committed to providing an innovative business framework that
                    is faster, superior, and tested to unlock the business
                    possibilities. It's our passion to create beautiful
                    experiences that combine brilliant ideas with stunning
                    execution.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    src="/images/experiences/img1.png"
                    alt="image"
                    loading="lazy"
                  />
                  <p>
                    We are a full-stack web and app development company that
                    hustles hard to make users happy while infusing everything
                    we do with the heart.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    src="/images/experiences/img2.png"
                    alt="image"
                    loading="lazy"
                  />
                  <p>
                    Since we have supported many business solutions and
                    revolutions over the past decade, we have the knowledge,
                    tools, and experience to support your business needs.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    src="/images/experiences/img3.png"
                    alt="image"
                    loading="lazy"
                  />
                  <p>
                    Being a multifaceted designing agency, we craft your
                    business ideas into beautiful websites that inspire, engage,
                    and deliver absolutely amazing outcomes.
                  </p>
                </div>

                <div className="experiences-btn">
                  <Link href="/about-us">
                    <a className="default-btn">
                      Details
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experiences-image">
                <img
                  src="/images/experiences/experiences-1.png"
                  alt="image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div
          className="experiences-shape-1"
          data-speed="0.08"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-1.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-2"
          data-speed="0.06"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-2.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-3"
          data-speed="0.08"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-3.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-4"
          data-speed="0.06"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-2.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-5"
          data-speed="0.08"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-3.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-6"
          data-speed="0.06"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-4.png"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          className="experiences-shape-7"
          data-speed="0.08"
          data-revert="true"
        >
          <img
            src="/images/experiences/shape-5.png"
            alt="image"
            loading="lazy"
          />
        </div>
      </div>

      {/* About Us Content Style */}
      <style jsx>{`
        .experiences-area {
          position: relative;
          z-index: 1;
        }
        .experiences-area::before {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: rgb(57, 83, 121, 0.07);
          left: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-area::after {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: var(--white-color);
          right: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-item {
          padding-top: 80px;
          padding-bottom: 80px;
          padding-right: 30px;
        }
        .experiences-item .experiences-content .tag {
          display: inline-block;
          height: 50px;
          width: 50px;
          line-height: 50px;
          background-color: var(--white-color);
          text-align: center;
          border-radius: 50px;
          -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
        }
        .experiences-item .experiences-content h3 {
          font-size: 40px;
          margin-top: 25px;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .experiences-item .experiences-inner-content {
          position: relative;
          margin-top: 30px;
          padding-left: 80px;
        }
        .experiences-item .experiences-inner-content img {
          position: absolute;
          left: 0;
          top: 0;
        }
        .experiences-item .experiences-btn {
          margin-top: 30px;
          padding-left: 85px;
        }
        .experiences-image {
          text-align: right;
        }
        .experiences-shape-1 {
          position: absolute;
          top: 8%;
          left: 40%;
          -webkit-transform: translateY(-8%) translateX(-40%);
          transform: translateY(-8%) translateX(-40%);
          z-index: -1;
        }
        .experiences-shape-2 {
          position: absolute;
          top: 50%;
          left: 2%;
          -webkit-transform: translateY(-50%) translateX(-2%);
          transform: translateY(-50%) translateX(-2%);
          z-index: -1;
        }
        .experiences-shape-3 {
          position: absolute;
          top: 52%;
          left: 5%;
          -webkit-transform: translateY(-52%) translateX(-5%);
          transform: translateY(-52%) translateX(-5%);
          z-index: -1;
        }
        .experiences-shape-4 {
          position: absolute;
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: -1;
        }
        .experiences-shape-5 {
          position: absolute;
          bottom: 8%;
          left: 36%;
          -webkit-transform: translateY(-8%) translateX(-36%);
          transform: translateY(-8%) translateX(-36%);
          z-index: -1;
        }
        .experiences-shape-6 {
          position: absolute;
          bottom: 10%;
          left: 48%;
          -webkit-transform: translateY(-10%) translateX(-48%);
          transform: translateY(-10%) translateX(-48%);
          z-index: 1;
        }
        .experiences-shape-7 {
          position: absolute;
          bottom: 2%;
          left: 48%;
          -webkit-transform: translateY(-2%) translateX(-48%);
          transform: translateY(-2%) translateX(-48%);
          z-index: 1;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: rgb(57, 83, 121, 0.07);
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-item .experiences-content h3 {
            font-size: 24px;
          }
          .experiences-item .experiences-content p {
            font-size: 15px;
          }
          .experiences-item .experiences-inner-content {
            padding-left: 0;
            text-align: center;
          }
          .experiences-item .experiences-inner-content img {
            position: relative;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-btn {
            padding-left: 0;
            text-align: center;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: rgb(57, 83, 121, 0.07);
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .experiences-item .experiences-content h3 {
            font-size: 30px;
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-content p {
            font-size: 14px;
          }
          .experiences-item .experiences-inner-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsContent;
