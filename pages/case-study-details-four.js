import React from "react";
import CaseStudyContent from "../components/CaseStudyDetails/CaseStudyContent";

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyContent
        pageTitle={"Mobile App Development for Medicare Startup"}
        bg_image={"case-4.webp"}
        pageContent_one={
          "The firm was a start-up that aimed to make healthcare more accessible by increasing access to blood testing. Individuals and doctors can better identify and manage long-term health disorders at home or in the hospital, lowering expenses and, most importantly, improving quality of life."
        }
        pageContent_two={
          "The Client approached us with a unique challenge: to develop an app for hospital patients that would allow them to scan the results of their self-performed blood pressure test and email them to the hospital rather than having the test done on-site by medical personnel. Because there was simply a concept on the table, everything had to be built from the ground up, including the whole design and development."
        }
        title={"Project Description"}
        pageContent_three={
          "Regular users, as well as elderly patients or patients with varied ailments, needed to be able to utilize the program without difficulty. It has to be as easy to use as possible, with a thoroughly polished UX to minimize the danger of users not utilizing it on a regular basis. In addition, the design required to incorporate Dynamic Text Size as well as native iOS and Android features, making the app development much more difficult."
        }
        pageContent_four={
          "Wireframes were created first, followed by the creation of a design system. The design required to incorporate Dynamic Text Size as well as native iOS and Android features, raising the bar even further. We created a type hierarchy with a hierarchical type hierarchy in which the Dynamic Text Size was tested. We built a backend for the app that allows users to save findings locally on their smartphones. We also chose to use a QR code scanner to make it easier to scan and send data from the blood pressure monitoring gadget to the hospital."
        }
      />
    </>
  );
};

export default CaseStudyDetails;
