import React from "react";
import { useState } from "react";
import addContact from "../firebase/firebase";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email, phone, subject, message });
    setSubmitted(true);
    window.scroll(0, 180);
  };
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="contact-form">
            {submitted ? (
              <h3>Thank you for contacting us!</h3>
            ) : (
              <h3>Get in Touch</h3>
            )}

            <form id="contactForm" onSubmit={(e) => handleSubmit(e)}>
              {submitted && (
                // SUCCESS ALERT
                <div
                  className="alert alert-success alert-dismissible fade show alertAlign"
                  role="alert"
                >
                  <div>
                    <strong>Submitted!</strong>&nbsp; We will reach out to you
                    shortly
                  </div>
                  <i
                    className="ri-close-fill messageClose"
                    onClick={() => setSubmitted(false)}
                  />
                </div>
              )}

              <div className={submitted ? "row blur" : "row"}>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      placeholder="Name*"
                      onChange={(e) => setName(e.target.value)}
                      disabled={submitted}
                      pattern="[a-zA-Z ]*"
                      maxLength={46}
                      minLength={3}
                      value={submitted ? "" : null}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      placeholder="Email*"
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={submitted}
                      value={submitted ? "" : null}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required
                      className="form-control"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={submitted}
                      minLength={9}
                      maxLength={13}
                      value={submitted ? "" : null}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      required
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={submitted}
                      maxLength={100}
                      value={submitted ? "" : null}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      required
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={submitted}
                      minLength={10}
                      maxLength={2000}
                      value={submitted ? "" : null}
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button
                    type="submit"
                    className={submitted ? "disabled-btn" : "default-btn"}
                    disabled={submitted}
                  >
                    Send Message
                    <i className="ri-arrow-right-line" />
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          text-align: center;
          max-width: 1050px;
          margin: auto;
        }
        .blur {
          filter: blur(2px);
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

        .alertAlign {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-form h3 {
          font-size: 28px;
          margin-bottom: 45px;
        }

        .contact-form .form-group {
          margin-bottom: 20px;
        }

        .contact-form .form-group .form-control {
          display: block;
          width: 100%;
          height: 60px;
          outline: 0;
          background-color: rgb(57, 83, 121, 0.07);
          border: 1px solid #e6edf6;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
        }

        .contact-form .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:focus {
          outline: 0;
          background-color: var(--white-color);
          border-color: var(--optional-color);
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .contact-form
          .form-group
          .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::placeholder {
          color: transparent;
        }

        .contact-form .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }

        .contact-form .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }

        .contact-form .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }

        .contact-form #msgSubmit {
          margin: 0;
          font-size: 1.3rem;
        }

        .contact-form #msgSubmit.text-danger,
        .contact-form #msgSubmit.text-success {
          margin-top: 25px;
          font-size: 18px;
          font-weight: 500;
        }

        .contact-form .default-btn {
          margin-top: 10px;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default ContactForm;
