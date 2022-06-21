import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="contact-address">
                <h3>Contact Address:</h3>
                <p>
                  It's our passion to create beautiful experiences that combine
                  brilliant ideas with stunning execution.
                </p>

                <ul className="address-info">
                  {/* <li>
                                        <i className="ri-customer-service-line"></i>
                                        <a href="tel:3128959800">(312) 895-9800</a>
                                    </li> */}

                  <li>
                    <i className="ri-global-line"></i>
                    <a href="#">contact@writlabs.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://goo.gl/maps/RB276iwXZPG9CTfPA"
                    >
                      C-175, City Business Centre, Phase 8B, Mohali, Punjab,
                      India
                    </a>
                  </li>
                </ul>

                <ul className="address-social">
                  <li>
                    <a
                      href="https://www.facebook.com/Writ-Labs-100430799185905"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/writ_labs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/1writlabs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div id="map">
                <iframe
                  width="686"
                  height="500"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2796249935896!2d76.69230581494566!3d30.71053848164489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef8a3cc5ec9%3A0xcc3992290b9ed8a1!2sCity%20Business%20Center!5e0!3m2!1sen!2sin!4v1650648506548!5m2!1sen!2sin"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-address {
          background: rgb(57, 83, 121, 0.07);
          border: 1px solid #e6edf6;
          padding: 45px 35px;
          border-radius: 5px;
        }

        .contact-address h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .contact-address p {
          font-size: 15px;
        }

        .contact-address .address-info {
          padding-left: 0;
          margin-top: 30px;
          margin-bottom: 0;
        }

        .contact-address .address-info li {
          list-style-type: none;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 500;
          color: #4b4b61;
          position: relative;
          padding-left: 40px;
        }

        .contact-address .address-info li a {
          font-size: 15px;
          font-weight: 500;
          color: #4b4b61;
        }

        .contact-address .address-info li a:hover {
          color: var(--main-color);
        }

        .contact-address .address-info li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: var(--main-color);
          font-size: 30px;
        }

        .contact-address .address-info li .ri-global-line {
          color: #ff414b;
        }

        .contact-address .address-info li .ri-map-pin-line {
          color: #61baad;
        }

        .contact-address .address-info li:last-child {
          margin-bottom: 0;
        }

        .contact-address .address-social {
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 35px;
          text-align: center;
        }

        .contact-address .address-social li {
          display: inline-block;
          list-style-type: none;
          margin-bottom: 0;
          margin-right: 10px;
        }

        .contact-address .address-social li:last-child {
          margin-right: 0;
        }

        .contact-address .address-social li i {
          display: inline-block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          background-color: var(--white-color);
          color: var(--main-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          text-align: center;
          font-size: var(--font-size);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }

        .contact-address .address-social li i:hover {
          background-color: var(--main-color);
          color: var(--white-color);
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }

        #map iframe {
          width: 100%;
          height: 440px;
          border: 1px solid #e6edf6;
          border-radius: 5px;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .contact-address {
            padding: 35px 20px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .contact-address {
            padding: 35px 20px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default ContactInfo;
