import React from "react";

const ServicesDetailsContent = ({
  pageTitle,
  pageContent_one,
  pageContent_two,
  pageContent_three,
  bulletpoint_one,
  bulletpoint_two,
  bulletpoint_three,
  bulletpoint_four,
  component_prop,
  bg_image,
}) => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">{component_prop}</div>

            <div className="col-lg-9 col-md-12">
              <div className="services-details-overview-content">
                <h3>{pageTitle}</h3>
                <p>{pageContent_one}</p>
                <p>{pageContent_two}</p>
                <p>{pageContent_three}</p>

                <ul className="overview-list">
                  <li>
                    <i className="ri-check-line"></i> {bulletpoint_one}
                  </li>
                  <li>
                    <i className="ri-check-line"></i> {bulletpoint_two}
                  </li>
                  <li>
                    <i className="ri-check-line"></i> {bulletpoint_three}
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    {bulletpoint_four}
                  </li>
                </ul>

                <div className="overview-image">
                  <img
                    src={`/images/services-details/${bg_image}`}
                    alt="image"
                    loading="lazy"
                  />

                  {/* Shape Images */}
                  <div className="shape-1">
                    <img
                      src="/images/services-details/shape-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="shape-2">
                    <img
                      src="/images/services-details/shape-2.png"
                      alt="image"
                    />
                  </div>
                  <div className="shape-3">
                    <img
                      src="/images/services-details/shape-3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-details-overview-content {
          padding-left: 15px;
        }
        .services-details-overview-content h3 {
          font-size: 30px;
          margin-bottom: 20px;
        }
        .services-details-overview-content p {
          font-size: 15px;
        }
        .services-details-overview-content .overview-list {
          padding-left: 20px;
          margin-top: 30px;
          margin-bottom: 0;
        }
        .services-details-overview-content .overview-list li {
          list-style-type: none;
          font-size: 15px;
          color: var(--paragraph-color);
          position: relative;
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .services-details-overview-content .overview-list li:last-child {
          margin-bottom: 0;
        }
        .services-details-overview-content .overview-list li i {
          font-size: 15px;
          color: #61baad;
          position: absolute;
          left: 0;
          top: 2px;
        }
        .services-details-overview-content .overview-image {
          margin-top: 45px;
          position: relative;
          overflow: hidden;
          cursor: -webkit-zoom-in;
          cursor: zoom-in;
        }
        .services-details-overview-content .overview-image img {
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .services-details-overview-content .overview-image .shape-1 {
          position: absolute;
          top: 10%;
          left: 15%;
          -webkit-transform: translateY(-10%) translateX(-15%);
          transform: translateY(-10%) translateX(-15%);
        }
        .services-details-overview-content .overview-image .shape-2 {
          position: absolute;
          top: 20%;
          left: 10%;
          -webkit-transform: translateY(-20%) translateX(-10%);
          transform: translateY(-20%) translateX(-10%);
        }
        .services-details-overview-content .overview-image .shape-3 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          -webkit-transform: translateY(-10%) translateX(-5%);
          transform: translateY(-10%) translateX(-5%);
        }
        .services-details-overview-content .overview-image:hover img {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .services-details-overview-content {
            margin-top: 30px;
          }
          .services-details-overview-content h3 {
            font-size: 22px;
            margin-bottom: 15px;
          }
          .services-details-overview-content .overview-list {
            padding-left: 0;
          }
          .services-details-overview-content {
            padding-left: 0;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .services-details-overview-content {
            margin-top: 30px;
          }
          .services-details-overview-content h3 {
            font-size: 25px;
          }
          .services-details-overview-content .overview-list {
            padding-left: 0;
          }
          .services-details-overview-content {
            padding-left: 0;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .services-details-overview-content {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesDetailsContent;
