import React from "react";
import Link from "next/link";

const Technology = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Use</h2>
            <p>
              To deliver the best and most fully functional apps and websites,
              we use top-notch technologies. It includes:
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="ri-quill-pen-line"></i>
                </div>
                <h3>
                  <Link href="/backend">
                    <a>Back End</a>
                  </Link>
                </h3>
                <p>
                  While Frontend Web Development is concerned with the designing
                  of the user interface of the website using web technologies
                  like Node JS, PHP, and Java, we ensure to deliver fully
                  responsive apps and websites.{" "}
                </p>

                <Link href="/backend">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-36CC72">
                  <i className="ri-pie-chart-line"></i>
                </div>
                <h3>
                  <Link href="/framework">
                    <a>Framework</a>
                  </Link>
                </h3>
                <p>
                  We understand the role of websites in creating a digital
                  identity. So for that, we use absolutely effective frameworks
                  like Laravel, Cake PHP, Struts, Spring, and a lot more to
                  ensure the website’s functionality.
                </p>

                <Link href="/framework">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FF414B">
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h3>
                  <Link href="/frontend">
                    <a>Front end</a>
                  </Link>
                </h3>
                <p>
                  We are committed to driving the success of every website and
                  app delivered. So for that, we use the best in class front-end
                  technologies like React JS, Next JS, etc to ensure you get a
                  fully automated website.
                </p>

                <Link href="/frontend">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FF6D3D">
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>
                  <Link href="/database">
                    <a>Database</a>
                  </Link>
                </h3>
                <p>
                  We ensure the stability, robustness, and maturity of the app
                  or website delivered. So for that, we use specified databases
                  like MongoDB, REDIS, Firestore, etc to ensure you get a full
                  stack bug-free website or app.
                </p>

                <Link href="/database">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-8932F8">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>
                  <Link href="/web-server">
                    <a>Web servers</a>
                  </Link>
                </h3>
                <p>
                  We ensure quick response to the client over the World Wide
                  Web. So for that, we use immensely adequate web servers like
                  Apache, Nginx, and HAProxy to ensure quick response to an
                  email, file transfer, and storage
                </p>

                <Link href="/web-server">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FFCA40">
                  <i className="ri-layout-row-line"></i>
                </div>
                <h3>
                  <Link href="/platform">
                    <a>Platforms </a>
                  </Link>
                </h3>
                <p>
                  We make sure that you can easily create, edit and update the
                  web pages without breaking a sweat. So for that, we use the
                  best in class platforms like AWS, EC2, ECS, SES, Lambda
                  Functions for a better coding experience.
                </p>

                <Link href="/platform">
                  <a className="services-btn">
                    Details <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/shape-1.png" alt="image" loading="lazy" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/shape-2.png" alt="image" loading="lazy" />
        </div>
        <div className="services-shape-3">
          <img src="/images/services/shape-3.png" alt="image" loading="lazy" />
        </div>
        <div className="services-shape-4">
          <img src="/images/services/shape-4.png" alt="image" loading="lazy" />
        </div>
      </div>

      {/* Services Card Style */}
      <style jsx>{`
        .services-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-services {
          margin-bottom: 30px;
          padding: 35px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          border: 1px solid #eeeeee;
        }
        .single-services .icon {
          margin-bottom: 25px;
        }
        .single-services .icon i {
          display: inline-block;
          height: 80px;
          width: 80px;
          line-height: 80px;
          background-color: #e5f0ff;
          color: var(--main-color);
          text-align: center;
          font-size: 45px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services .icon.bg-36CC72 i {
          background-color: #ebfaf1;
          color: #61baad;
        }
        .single-services .icon.bg-FF414B i {
          background-color: #ffeced;
          color: #ff414b;
        }
        .single-services .icon.bg-FF6D3D i {
          background-color: #fff0ec;
          color: #ff6d3d;
        }
        .single-services .icon.bg-8932F8 i {
          background-color: #f3ebfe;
          color: #8932f8;
        }
        .single-services .icon.bg-FFCA40 i {
          background-color: #fffaec;
          color: #ffca40;
        }
        .single-services h3 {
          margin-bottom: 15px;
        }
        .single-services h3 a {
          color: var(--black-color);
          font-size: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services p {
          margin-bottom: 15px;
          font-size: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services .services-btn {
          font-size: 15px;
          font-weight: 500;
          position: relative;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services .services-btn i {
          position: absolute;
          right: -20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 15px;
        }
        .single-services:hover {
          background-color: var(--white-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
        }
        .single-services:hover .icon i {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-services:hover .icon.bg-36CC72 i {
          background-color: #61baad;
        }
        .single-services:hover .icon.bg-FF414B i {
          background-color: #ff414b;
        }
        .single-services:hover .icon.bg-FF6D3D i {
          background-color: #ff6d3d;
        }
        .single-services:hover .icon.bg-8932F8 i {
          background-color: #8932f8;
        }
        .single-services:hover .icon.bg-FFCA40 i {
          background-color: #ffca40;
        }
        .single-services:hover h3 a {
          color: var(--main-color);
        }
        .single-services:hover .services-btn {
          color: var(--main-color);
          letter-spacing: 1px;
        }

        // shape
        .services-shape-1 {
          position: absolute;
          top: 20%;
          left: 45%;
          -webkit-transform: translateY(-20%) translateX(-45%);
          transform: translateY(-20%) translateX(-45%);
          z-index: 1;
        }
        .services-shape-2 {
          position: absolute;
          top: 15%;
          left: 45%;
          -webkit-transform: translateY(-15%) translateX(-45%);
          transform: translateY(-15%) translateX(-45%);
          z-index: 1;
        }
        .services-shape-3 {
          position: absolute;
          top: 45%;
          left: 2%;
          -webkit-transform: translateY(-45%) translateX(-2%);
          transform: translateY(-45%) translateX(-2%);
          z-index: -1;
        }
        .services-shape-4 {
          position: absolute;
          top: 45%;
          right: 0%;
          -webkit-transform: translateY(-45%) translateX(-5%);
          transform: translateY(-45%) translateX(-5%);
          z-index: -1;
        }
        .services-shape-5 {
          position: absolute;
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: 1;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-services {
            padding: 30px 15px;
            text-align: center;
          }
          .single-services .icon {
            margin-bottom: 30px;
          }
          .single-services h3 a {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-services {
            padding: 30px 20px;
          }
          .single-services .icon {
            margin-bottom: 30px;
          }
          .single-services h3 a {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-services {
            padding: 35px 20px;
          }
          .single-services h3 a {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .single-services {
            padding: 30px;
          }
          .single-services h3 a {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Technology;
