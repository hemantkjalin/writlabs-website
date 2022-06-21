import React from "react";
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
    0: {
      items: 2,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 8,
    },
  },
};

const PartnerStyleOne = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-area">
        <div className="container">
          <div className="partner-box">
            {display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-1.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                {/* <div className="single-partner">
                  <img
                    src="/images/partner/partner-2.png"
                    alt="image"
                    loading="lazy"
                  />
                </div> */}

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-3.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-4.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-5.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-6.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-17.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-7.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-8.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-9.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-10.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-11.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-12.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-13.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-14.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-15.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="single-partner">
                  <img
                    src="/images/partner/partner-16.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                <div className="single-partner">
                  <img
                    src="/images/partner/partner-18.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>

                {/* <div className="single-partner">
                                <img src="/images/partner/partner-5.png" alt="image" />
                            </div>
        
                            <div className="single-partner">
                                <img src="/images/partner/partner-2.png" alt="image" />
                            </div>
                            <div className="single-partner">
                                <img src="/images/partner/partner-7.png" alt="image" />
                            </div> */}
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Shape Images */}
        <div className="partner-shape-1">
          <img src="/images/partner/shape-1.png" alt="image" />
        </div>
        <div className="partner-shape-2">
          <img src="/images/partner/shape-2.png" alt="image" loading="lazy" />
        </div>
      </div>

      {/* Partner Style */}
      <style jsx>{`
        .partner-area .single-partner img {
          max-width: 125px;
        }
        .partner-area {
          position: relative;
          z-index: 1;
        }
        .partner-box {
          align-items: center;
          background-color: rgb(244, 248, 252, 0.4);
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        }
        .single-partner {
          transform: scale(0.7);
          text-align: center;
        }
        .single-partner img {
          height: auto !important;
          width: auto !important;
          display: inline-block !important;
        }
        .partner-shape-1 {
          position: absolute;
          top: -20%;
          left: 15%;
          -webkit-transform: translateY(-20%) translateX(-20%);
          transform: translateY(-20%) translateX(-20%);
          z-index: -1;
        }
        .partner-shape-2 {
          position: absolute;
          bottom: -50%;
          right: 10%;
          -webkit-transform: translateY(-28%) translateX(-10%);
          transform: translateY(-28%) translateX(-10%);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .partner-box {
            transform: scale(0.85);
            padding-top: 1px;
            padding-bottom: 1px;
            padding-left: 10px;
            padding-right: 10px;
          }
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .partner-box {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default PartnerStyleOne;
