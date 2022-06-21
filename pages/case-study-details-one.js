import React from "react";
import CaseStudyContent from "../components/CaseStudyDetails/CaseStudyContent";

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyContent
        pageTitle={"Tracking and Productivity App "}
        bg_image={"TrackerPlay.webp"}
        pageContent_one={
          "One of our requirements was an application that would help our team in tracking and managing their workloads effectively.   "
        }
        pageContent_two={
          "In the current world scenario, where most of IT professionals are working from home, this product is a great all in one solution for teams and organizations that want to monitor and increase their business output."
        }
        title={"Project Description"}
        pageContent_three={
          "This product consists of a desktop app that tracks your work-hours and generates screenshots at random intervals, sending them to the backend. The web app consists of important analytics and reports generated on a daily and weekly basis. The team managers can create and update the projects/tasks assigned to the members. "
        }
        pageContent_four={
          "It is a lightweight and effective solution for project management and boosts productivity by providing meaningful reports and statistics, guiding the users to better results."
        }
      />
    </>
  );
};

export default CaseStudyDetails;
