import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Let’s see what most of the people ask us</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="faq-image">
                <img src="/images/faq/faq-1.png" alt="image" loading="lazy" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why should we use Writ Labs over another agency?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Because of our vast expertise in delivering difficult
                        app and web portal development projects, our clients
                        choose us. We have over 12 years of experience solving a
                        wide range of problems, including collaborating with
                        existing development teams, and bringing systems,
                        processes, and applications together in a seamless
                        manner. We can assist you whether you have large ideas,
                        difficult challenges, or simply want the best from an
                        agency.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to build iOS and Android apps?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        In most cases, we create apps that work on both iOS and
                        Android devices. Typically, our customers want their
                        apps to work on both mobile and desktop devices, so we
                        use React Native and React and React as development
                        frameworks to support both platforms rapidly.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you build web applications also?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        We need a web-based application to operate behind the
                        scenes for practically every mobile app we build. Are
                        you familiar with the login process? There is a web
                        server running in the background sending data to the app
                        to determine if you are authorized to log in or not.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Throughout the development process, will you provide any
                        support?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Throughout the development process, you will be
                        allocated a professional project manager who will be
                        your primary point of contact. Our support portal
                        processes every request and inquiry, ensuring that you
                        receive prompt responses and that your work is correctly
                        prioritized. We also provide a variety of support and
                        maintenance solutions to guarantee that we are available
                        to respond to your demands beyond the first launch.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I make changes once the app or website is launched?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        We offer a few choices for making adjustments to your
                        app or website in the future. You may either hire us to
                        upgrade your app or website on a project-by-project
                        basis, in which case we'll specify, estimate, schedule,
                        and deliver a set of needs as and when you need them.
                        Alternatively, we may use an AGILE strategy, in which we
                        schedule a set amount of developer time each month to
                        ensure that things are always getting better for you.
                        Both tactics have value, and you'll probably know which
                        is best for you after reading this.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Which programming language and framework do you use?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        With HTML, CSS, and JavaScript on the front end and
                        JavaScript or PHP on the back end, we prefer to employ
                        open-source languages whenever feasible. For most mobile
                        app projects, we utilize React Native, although we will
                        occasionally use Cordova or PhoneGap if we are on a
                        limited budget or need to support web, Android, and iOS
                        rapidly.We employ front-end layout frameworks like
                        bootstrap, design, and material design for web projects,
                        as well as front-end coding frameworks like React or
                        Angular. We commonly employ a PHP framework like Laravel
                        or Yii2 on the backend or JavaScript with NodeJS.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
