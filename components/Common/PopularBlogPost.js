import React from "react";
import Link from "next/link";

const PopularBlogPost = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Popular Blog Post</h2>
            <p>We keep you updated with the latest trends in the industry.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link href="/small-business">
                    <a>
                      <img
                        src="/images/blog/blog-1.webp"
                        alt="image"
                        loading="lazy"
                      />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/small-business">
                        <a className="tag">SEO</a>
                      </Link>
                    </li>
                    <li className="dark">
                      <i className="ri-time-line"></i>
                      March 14, 2021
                    </li>
                    <li className="dark">
                      <i className="ri-message-2-line"></i>
                      (2) Comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/small-business">
                      <a>Time Saving Tips for Small Business Websites</a>
                    </Link>
                  </h3>

                  <Link href="/small-business">
                    <a className="blog-btn">
                      Details <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link href="/no-code-mobileapp">
                    <a>
                      <img
                        src="/images/blog/blog-2.webp"
                        alt="image"
                        loading="lazy"
                      />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/no-code-mobileapp">
                        <a className="tag">Mobile</a>
                      </Link>
                    </li>
                    <li className="dark">
                      <i className="ri-time-line"></i>
                      March 16, 2021
                    </li>
                    <li className="dark">
                      <i className="ri-message-2-line"></i>
                      (2) Comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/no-code-mobileapp">
                      <a>Is It Possible to Build A App Without Coding?</a>
                    </Link>
                  </h3>

                  <Link href="/no-code-mobileapp">
                    <a className="blog-btn">
                      Details <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link href="/blog-details-3">
                    <a>
                      <img
                        src="/images/blog/blog-3.webp"
                        alt="image"
                        loading="lazy"
                      />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/devops">
                        <a className="tag">DevOps</a>
                      </Link>
                    </li>
                    <li className="dark">
                      <i className="ri-time-line"></i>
                      March 17, 2021
                    </li>
                    <li className="dark">
                      <i className="ri-message-2-line"></i>
                      (2) Comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/devops">
                      <a>Is DevOps Important for Mobile App Development?</a>
                    </Link>
                  </h3>

                  <Link href="/devops">
                    <a className="blog-btn">
                      Details <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="blog-shape-1">
          <img src="/images/blog/shape-1.png" alt="image" loading="lazy" />
        </div>
        <div className="blog-shape-2">
          <img src="/images/blog/shape-2.png" alt="image" loading="lazy" />
        </div>
      </div>

      {/* Blog Card Style */}
      <style jsx>{`
        .blog-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-blog {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          margin-bottom: 30px;
        }
        .single-blog .blog-content {
          margin-top: 30px;
        }
        .single-blog .blog-content .entry-meta {
          padding-left: 0;
          margin-bottom: 0;
        }
        .single-blog .blog-content .entry-meta .tag {
          display: inline-block;
          background-color: #eaf0ff;
          color: var(--main-color);
          font-size: 14px;
          font-weight: 500;
          padding: 5px 15px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-blog .blog-content .entry-meta .tag:hover,
        .single-blog .blog-content .entry-meta .tag a:hover {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-blog .blog-content .entry-meta li {
          list-style-type: none;
          display: inline-block;
          color: #79798d;
          font-size: 14px;
          font-weight: 400;
          margin-right: 15px;
          position: relative;
          padding-left: 18px;
        }
        .single-blog .blog-content .entry-meta li:last-child {
          margin-right: 0;
        }
        .single-blog .blog-content .entry-meta li:first-child {
          padding-left: 0;
        }
        .single-blog .blog-content .entry-meta li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: #61baad;
          font-size: 14px;
        }
        .single-blog .blog-content h3 {
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 15px;
          line-height: 1.5;
        }
        .single-blog .blog-content h3 a {
          color: var(--black-color);
        }
        .single-blog .blog-content .blog-btn {
          font-size: var(--font-size);
          font-weight: 500;
          position: relative;
          -webkit-transition: 0.2s ease all;
          transition: 0.2s ease all;
        }
        .single-blog .blog-content .blog-btn i {
          position: absolute;
          right: -20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 15px;
        }
        .single-blog:hover .blog-content h3 a {
          color: var(--main-color);
        }

        .single-blog:hover .blog-content .blog-btn {
          transform: translateY(-5px);
        }
        .blog-shape-1 {
          position: absolute;
          top: 10%;
          right: 2%;
          -webkit-transform: translateY(-10%) translateX(-2%);
          transform: translateY(-10%) translateX(-2%);
        }
        .blog-shape-2 {
          position: absolute;
          top: 10%;
          left: 2%;
          -webkit-transform: translateY(-10%) translateX(-2%);
          transform: translateY(-10%) translateX(-2%);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-blog .blog-content {
            margin-top: 20px;
          }
          .single-blog .blog-content h3 {
            font-size: 20px;
            margin-top: 15px;
            margin-bottom: 10px;
          }
          .single-blog .blog-content .blog-btn {
            font-size: 14px;
          }
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
          .blog-shape-1 {
            display: none;
          }
          .blog-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
          .blog-shape-1 {
            display: none;
          }
          .blog-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default PopularBlogPost;
