import React from "react";
import Link from "next/link";

const FeaturesCard = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features">
                <Link href="/web-development">
                  <a>
                    <img
                      src="/images/features/features-1.png"
                      alt="image"
                      loading="lazy"
                    />
                  </a>
                </Link>

                <h3>
                  <Link href="/web-development">
                    <a>Web Development</a>
                  </Link>
                </h3>
                <p>
                  You can see beyond the insights and stand on the eye stand
                  with us. We will soak ourselves in your idea, till the time we
                  are ready with the perfectly developed website for your
                  business.{" "}
                </p>

                <div className="features-btn">
                  <Link href="/web-development">
                    <a className="default-btn">
                      Details
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features">
                <Link href="/mobile-app-development">
                  <a>
                    <img
                      src="/images/features/features-2.png"
                      alt="image"
                      loading="lazy"
                    />
                  </a>
                </Link>

                <h3>
                  <Link href="/mobile-app-development">
                    <a>Mobile App Development</a>
                  </Link>
                </h3>
                <p>
                  We are highly dedicated to achieving a better customer
                  experience. No matter what your requirements are, our app
                  development services are designed to offer top edge customized
                  solutions.
                </p>

                <div className="features-btn">
                  <Link href="/mobile-app-development">
                    <a className="default-btn">
                      Details
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features">
                <Link href="/design-implementation">
                  <a>
                    <img
                      src="/images/features/features-3.png"
                      alt="image"
                      loading="lazy"
                    />
                  </a>
                </Link>

                <h3>
                  <Link href="/design-implementation">
                    <a>Design & Implimentation</a>
                  </Link>
                </h3>
                <p>
                  As a multifaceted development and designing company, we craft
                  beautiful websites that outdo business goals and inspire,
                  engage and deliver the best results. We are the ultimate
                  medium to convey your business idea.
                </p>

                <div className="features-btn">
                  <Link href="/design-implementation">
                    <a className="default-btn">
                      Details
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-shape-1">
          <img src="/images/features/shape-1.png" alt="image" loading="lazy" />
        </div>
        <div className="features-shape-2">
          <img src="/images/features/shape-2.png" alt="image" loading="lazy" />
        </div>
        <div className="features-shape-3">
          <img src="/images/features/shape-3.png" alt="image" loading="lazy" />
        </div>
        <div className="features-shape-4">
          <img src="/images/features/shape-4.png" alt="image" loading="lazy" />
        </div>
      </div>

      {/* Features Card Style */}
      <style jsx>{`
        .features-area {
          position: relative;
          z-index: 1;
        }
        .single-features {
          text-align: center;
          margin-bottom: 30px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-features img {
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-features h3 {
          font-size: 25px;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .single-features h3 a {
          color: var(--black-color);
        }
        .single-features h3 a:hover {
          color: var(--main-color);
        }
        .single-features p {
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-features .features-btn {
          margin-top: 25px;
        }
        .single-features .features-btn .default-btn {
          background-color: #eaf0ff;
          color: var(--main-color);
        }
        .single-features:hover .features-btn .default-btn {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-features:hover .features-btn .default-btn span {
          background-color: var(--optional-color);
        }
        .features-inner-box {
          background-color: rgb(57, 83, 121, 0.07);
          border: 1px solid #e6edf6;
          padding-top: 80px;
          padding-bottom: 50px;
          padding-left: 45px;
          padding-right: 45px;
          border-radius: 5px;
        }
        .features-shape-1 {
          position: absolute;
          top: 15%;
          left: 40%;
          -webkit-transform: translateY(-15%) translateX(-40%);
          transform: translateY(-15%) translateX(-40%);
          z-index: 1;
        }
        .features-shape-2 {
          position: absolute;
          top: 20%;
          right: 40%;
          -webkit-transform: translateY(-20%) translateX(-40%);
          transform: translateY(-20%) translateX(-40%);
          z-index: 1;
        }
        .features-shape-3 {
          position: absolute;
          top: 8%;
          right: 50%;
          -webkit-transform: translateY(-8%) translateX(-50%);
          transform: translateY(-8%) translateX(-50%);
          z-index: 1;
        }
        .features-shape-4 {
          position: absolute;
          top: 10%;
          right: 48%;
          -webkit-transform: translateY(-10%) translateX(-48%);
          transform: translateY(-10%) translateX(-48%);
          z-index: 1;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-features h3 {
            font-size: 22px;
          }
          .single-features p {
            font-size: 15px;
          }
          .features-shape-1 {
            display: none;
          }
          .features-shape-2 {
            display: none;
          }
          .features-shape-3 {
            display: none;
          }
          .features-shape-4 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-features p {
            font-size: 15px;
          }
          .features-shape-1 {
            display: none;
          }
          .features-shape-2 {
            display: none;
          }
          .features-shape-3 {
            display: none;
          }
          .features-shape-4 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-features h3 {
            font-size: 23px;
          }
          .single-features p {
            font-size: 15px;
          }
          .features-shape-1 {
            display: none;
          }
          .features-shape-2 {
            display: none;
          }
          .features-shape-3 {
            display: none;
          }
          .features-shape-4 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default FeaturesCard;
