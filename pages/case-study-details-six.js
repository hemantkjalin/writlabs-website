import React from "react";
import CaseStudyContent from "../components/CaseStudyDetails/CaseStudyContent";

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyContent
        pageTitle={"App Development for Digital Transformation Project"}
        bg_image={"case-6.webp"}
        pageContent_one={
          "The startup aspires to revolutionize the funeral industry by streamlining funeral homes' day-to-day operations. From pen and paper, phone, and e-mail to a cutting-edge system that assists their customers in planning funerals, managing customer and partner interactions, and all other aspects that funeral homes employees must deal with on a daily basis."
        }
        pageContent_two={
          "They already had a development team in place, but they wanted to speed up their development process, which at the time entailed switching from Ruby on Rails to React and adding new features to both apps."
        }
        title={"Project Description"}
        pageContent_three={
          "During the two-month development period, we not only rewrote the whole frontend app from scratch but also revamped it. We gave it a fresh, modern style that enhanced the user experience while adhering to React best practices. Together with the company's internal development team, developers assisted in improving the quality of work, methods, and technical understanding during our collaboration. The firm could not only get their product to market faster, but it could also do so with higher-quality code and designs. It also enabled the customer to get a second round of funding from their investor."
        }
        pageContent_four={
          "We helped their internal development team migrate from Trello, their former project management solution, to Jira, which we utilized throughout our collaboration. They also learned a lot about React frontend programming. We've been quite happy with the results. We collaborate with a number of companies, however, they are our primary supplier due to the high quality of their work."
        }
      />
    </>
  );
};

export default CaseStudyDetails;
