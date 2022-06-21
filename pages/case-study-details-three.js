import React from "react";
import CaseStudyContent from "../components/CaseStudyDetails/CaseStudyContent";

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyContent
        pageTitle={"Web Development for Travel and Tourism Project"}
        bg_image={"case-3.webp"}
        pageContent_one={
          "The firm was founded in order to assist spread the word about the great career prospects and advantages of living in the area. We were asked to assist a collection of municipalities and tourism boards in the development of a brand new website to increase interest in work and life."
        }
        pageContent_two={
          "The goal was to represent the region and its people, as well as provide a geographic and visual knowledge of Northwest British Columbia. Showcase the region's lifestyle, activities, community culture, and environment as vital components. Opportunities for employment and/or training, as well as facilities and important sites of interest, are all available now. Connect potential employees with local employers. In order to build email lists, collect inbound contact information. Important information, such as forthcoming events, things to do, critical services, and transportation, should be provided."
        }
        title={"Project Description"}
        pageContent_three={
          "The site's purpose was to act as a portal for companies, present and future employees, and citizens. This web design project's purpose was to develop an interesting and dynamic visitor experience that highlighted both jobs and area attractions. The site has to be visually appealing to visitors and easy to update on a regular basis. Because this site already had fantastic branding, our job was to transform their brand requirements into a friendly and visually engaging website. "
        }
        pageContent_four={
          "To create a natural, outdoorsy feel, we used a playful, original graphic style in combination with their earthy palette and great images. The content story focuses on important aspects of work, living, and leisure in the areas. It offers easy-to-find contact information for persons considering a move, companies wanting to hire, and locals who want to share their own tales. It also has the integration of a great map that allows guests to explore their favorite features and learn about what's available up north."
        }
      />
    </>
  );
};

export default CaseStudyDetails;
