import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-sm-8">
              <ul className="top-header-content">
                <li>
                  <i className="ri-customer-service-line" />
                  <a href="#">&nbsp;+91-7508243357</a>
                  <div></div>
                  <a href="#">&nbsp;+91-9017794910</a>
                </li>

                <li>
                  <i className="ri-earth-line" />
                  <a href="#">contact@writlabs.com</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-sm-4">
              <ul className="top-header-optional">
                <li>
                  <a
                    href="https://www.facebook.com/Writ-Labs-100430799185905"
                    target="_blank"
                    rel="noreferrer"
                    alt="facebook"
                  >
                    <i className="ri-facebook-fill" alt="facebook" />
                  </a>
                  <a
                    href="https://twitter.com/writ_labs"
                    target="_blank"
                    rel="noreferrer"
                    alt="twitter"
                  >
                    <i className="ri-twitter-fill" alt="twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/1writlabs"
                    target="_blank"
                    rel="noreferrer"
                    alt="twitter"
                  >
                    <i className="ri-linkedin-fill" alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Top Header Style */}
      <style jsx>{`
        .top-header-area {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .top-header-content {
          padding-left: 0;
          list-style-type: none;
          margin-bottom: 0;
        }
        .top-header-content li {
          display: inline-block;
          position: relative;
          padding-left: 22px;
          font-size: 15px;
          font-weight: 500;
          color: var(--white-color);
          margin-right: 18px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .top-header-content li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: var(--white-color);
          font-size: var(--font-size);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .top-header-content li a {
          color: var(--white-color);
        }
        .top-header-content li a:hover {
          color: var(--main-color);
        }
        .top-header-content li:last-child {
          margin-right: 0;
        }
        .top-header-optional {
          padding-left: 0;
          margin-bottom: 0;
          text-align: right;
        }
        .top-header-optional li {
          list-style-type: none;
          display: inline-block;
        }
        .top-header-optional li a {
          margin-right: 15px;
        }
        .top-header-optional li a:last-child {
          margin-right: 0;
        }
        .top-header-optional li a i {
          display: inline-block;
          font-size: var(--font-size);
          font-weight: 500;
          color: var(--white-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .top-header-optional li a i:hover {
          color: var(--main-color);
          -webkit-transform: translateY(-2px);
          transform: translateY(-2px);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .top-header-area {
            text-align: center;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .top-header-optional {
            text-align: center;
          }
          .top-header-content li {
            padding-left: 20px;
            font-size: 13px;
            margin-right: 10px;
          }
        }

        @media only screen and (max-width: 575px) {
          .top-header-optional {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default TopHeader;
