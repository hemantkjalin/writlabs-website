import React from "react";
import { useState } from "react";
import Link from "next/link";
import { addLetter } from "../firebase/firebase";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [letter, setLetter] = useState(" ");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ letter });
    setSubmitted(true);
  };

  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="widget-logo">
            <Link href="/">
              <a>
                <img
                  height="100"
                  width="100"
                  src="/images/logo.png"
                  alt="image"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>
                {/* <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img
                        height="70"
                        width="70"
                        src="/images/logo.png"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div> */}
                <p>
                  It's our passion to create beautiful experiences that combine
                  brilliant ideas with stunning execution.
                </p>

                <ul className="widget-info">
                  {/* <li>
                                        <i className="ri-customer-service-line"></i>
                                        <a href="tel:3128959800">(312) 895-9800</a>
                                    </li> */}

                  <li>
                    <i className="ri-global-line" />
                    <a href="#">contact@writlabs.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line" />
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/RB276iwXZPG9CTfPA"
                      rel="noreferrer"
                    >
                      C-175, City Business Centre, Phase 8B, Mohali, Punjab,
                      India
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-2 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <h3>Quick Link</h3>

                                <ul className="footer-links-list">
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-study">
                                            <a>Case Study</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery">
                                            <a>Gallery</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

            <div className="col-lg-2 col-sm-6 col-md-3">
              <div className="single-footer-widget">
                <h3>About Us</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-business">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>

                <div className="widget-newsletter">
                  <div className="newsletter-content">
                    {!submitted && <p>Sign-up for our newsletter</p>}
                  </div>

                  <form
                    className="newsletter-form"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    {!submitted ? (
                      <>
                        <input
                          type="email"
                          className="input-newsletter"
                          placeholder="Enter email"
                          name="EMAIL"
                          required
                          onChange={(e) => setLetter(e.target.value)}
                          disabled={submitted}
                        />
                        <button
                          className="newsletterButton"
                          type="submit"
                          disabled={submitted}
                        >
                          <span className="submitText">Submit</span>
                          <i className="ri-send-plane-2-line submitIcon" />
                        </button>
                      </>
                    ) : (
                      // <div>Thank you for signing-up!</div>
                      <div
                        className="alert alert-success alert-dismissible fade show alertAlign"
                        role="alert"
                      >
                        <div>
                          <strong>Submitted!</strong>&nbsp;Thank you for joining
                          us
                        </div>
                        <i
                          className="ri-close-fill messageClose"
                          onClick={() => setSubmitted(false)}
                        />
                      </div>
                    )}
                  </form>
                </div>

                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/Writ-Labs-100430799185905"
                      target="_blank"
                      rel="noreferrer"
                      alt="facebook"
                    >
                      <i className="ri-facebook-line" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/writ_labs"
                      target="_blank"
                      rel="noreferrer"
                      alt="twitter"
                    >
                      <i className="ri-twitter-fill" alt="twitter" />
                    </a>
                  </li>
                  <li>
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

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>Copyright © {currentYear} Writ Labs. All Rights Reserved.</p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="/images/footer/shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/footer/shape-2.png" alt="image" loading="lazy" />
        </div>
        <div className="footer-shape-3">
          <img src="/images/footer/shape-3.png" alt="image" loading="lazy" />
        </div>
        <div className="footer-shape-4">
          <img src="/images/footer/shape-4.png" alt="image" loading="lazy" />
        </div>
        <div className="footer-shape-5">
          <img src="/images/footer/shape-5.png" alt="image" loading="lazy" />
        </div>
      </footer>

      {/* Footer Style */}
      <style jsx>{`
        .footer-area {
          background-color: rgb(57, 83, 121, 0.07);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-footer-widget {
          margin-bottom: 30px;
        }
        .widget-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
        }
        .single-footer-widget p {
          margin-bottom: 0;
        }
        .single-footer-widget .widget-info {
          padding-left: 0;
          margin-top: 20px;
          margin-bottom: 0;
        }
        .single-footer-widget .widget-info li {
          list-style-type: none;
          margin-bottom: 15px;
          position: relative;
          padding-left: 22px;
        }

        .single-footer-widget .widget-info li i {
          position: absolute;
          left: 0;
          top: 4px;
          color: var(--main-color);
        }
        .single-footer-widget .widget-info li .ri-global-line {
          color: #ff414b;
        }
        .single-footer-widget .widget-info li .ri-map-pin-line {
          color: #61baad;
        }
        .single-footer-widget .widget-info li:last-child {
          margin-bottom: 0;
        }
        .single-footer-widget h3 {
          margin-bottom: 25px;
          font-size: 22px;
        }
        .single-footer-widget .footer-links-list {
          padding-left: 0;
          margin-bottom: 0;
          list-style-type: none;
        }
        .single-footer-widget .footer-links-list li {
          margin-bottom: 10px;
        }
        .single-footer-widget .footer-links-list li a {
          color: var(--paragraph-color);
          display: inline-block;
        }
        .single-footer-widget .footer-links-list li a:hover {
          color: var(--main-color);
        }
        .single-footer-widget .footer-links-list li:last-child {
          margin-bottom: 0;
        }
        .single-footer-widget .widget-newsletter .newsletter-content {
          margin-bottom: 20px;
        }
        .single-footer-widget .widget-newsletter .newsletter-content p {
          font-size: var(--font-size);
          margin-bottom: 0;
        }
        .single-footer-widget .widget-newsletter .newsletter-form {
          margin-top: 30px;
          position: relative;
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter {
          display: block;
          width: 100%;
          background-color: var(--white-color);
          border: 1px solid var(--main-color);
          height: 60px;
          padding: 15px;
          border-radius: 5px;
          outline: 0;
          color: var(--black-color);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::-webkit-input-placeholder {
          color: transparent;
          -webkit-transition: 0.2s ease all;
          transition: 0.2s ease all;
        }

        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus:-ms-input-placeholder {
          color: transparent;
          -webkit-transition: 0.2s ease all;
          transition: 0.2s ease all;
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::-ms-input-placeholder {
          color: transparent;
          -webkit-transition: 0.2s ease all;
          transition: 0.2s ease all;
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::placeholder {
          color: transparent;
          -webkit-transition: 0.2s ease all;
          transition: 0.2s ease all;
        }
        .single-footer-widget .widget-newsletter .newsletter-form button {
          position: absolute;
          right: 0;
          top: 0;
          height: 60px;
          width: 70px;
          line-height: 65px;
          background-color: var(--main-color);
          border: none;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--white-color);
          border-radius: 0 5px 5px 0;
          font-size: 25px;
        }
        .single-footer-widget .widget-newsletter .newsletter-form button:hover,
        .single-footer-widget .widget-newsletter .newsletter-form button:focus {
          background-color: var(--optional-color);
          color: var(--white-color);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          #validator-newsletter {
          color: red;
          margin-top: 10px;
          font-weight: 400;
          font-size: 15px;
        }
        .single-footer-widget .widget-social {
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 30px;
        }
        .single-footer-widget .widget-social li {
          display: inline-block;
          list-style-type: none;
          margin-bottom: 0;
          margin-right: 10px;
        }
        .single-footer-widget .widget-social li:last-child {
          margin-right: 0;
        }

        .single-footer-widget .widget-social li i {
          display: inline-block;
          height: 40px;
          width: 40px;
          line-height: 40px;
          background-color: var(--white-color);
          color: var(--main-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          text-align: center;
          font-size: 18px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-footer-widget .widget-social li i:hover {
          background-color: var(--main-color);
          color: var(--white-color);
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }
        .alertAlign {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .messageClose {
          font-size: 1.5rem;
          justify-self: flex-end;
          cursor: pointer;
          transition: 0.2s ease all;
        }
        .messageClose:hover {
          transform: scale(1.2);
        }

        // Shape Images
        .footer-shape-1 {
          position: absolute;
          top: 40%;
          left: 5%;
          -webkit-transform: translateY(-40%) translateX(-5%);
          transform: translateY(-40%) translateX(-5%);
          z-index: -1;
          opacity: 50%;
        }
        .footer-shape-2 {
          position: absolute;
          top: 45%;
          left: 10%;
          -webkit-transform: translateY(-45%) translateX(-10%);
          transform: translateY(-45%) translateX(-10%);
          z-index: -1;
          opacity: 50%;
        }
        .footer-shape-3 {
          position: absolute;
          bottom: 25%;
          left: 40%;
          -webkit-transform: translateY(-25%) translateX(-40%);
          transform: translateY(-25%) translateX(-40%);
          z-index: -1;
        }
        .footer-shape-4 {
          position: absolute;
          bottom: 23%;
          right: 20%;
          -webkit-transform: translateY(-23%) translateX(-23%);
          transform: translateY(-23%) translateX(-23%);
          z-index: -1;
        }
        .footer-shape-5 {
          position: absolute;
          top: 10%;
          right: 5%;
          -webkit-transform: translateY(-10%) translateX(-5%);
          transform: translateY(-10%) translateX(-5%);
          z-index: -1;
        }

        // copyright-area
        .copyright-area {
          margin-top: 70px;
          padding-bottom: 35px;
        }
        .copyright-area .copyright-area-content {
          text-align: center;
          background-color: rgb(57, 83, 121, 0.1);
          padding: 30px;
          border-radius: 5px;
        }
        .copyright-area .copyright-area-content p a {
          display: inline-block;
          font-weight: 600;
          color: var(--main-color);
        }
        .copyright-area .copyright-area-content p a:hover {
          color: var(--optional-color);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-footer-widget h3 {
            margin-bottom: 15px;
          }
          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
          .copyright-area {
            margin-top: 20px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-footer-widget p {
            margin-bottom: 0;
            font-size: 15px;
          }
          .single-footer-widget .widget-info li {
            font-size: 15px;
          }
          .single-footer-widget .footer-links-list li {
            font-size: 15px;
          }
          .single-footer-widget .widget-newsletter .newsletter-content p {
            font-size: 15px;
          }

          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
