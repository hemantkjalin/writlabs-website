import React from "react";
import CaseStudyContent from "../components/CaseStudyDetails/CaseStudyContent";

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyContent
        pageTitle={"Web Development for Tourist Project"}
        bg_image={"case-5.webp"}
        pageContent_one={
          "The organization provides tourists and residents with a variety of useful information about the thrilling experiences, job possibilities, and way of life available in the area. The municipality's stunning natural beauty was not promoted on the previous tourist website. A new site design was required to include a greater visual narrative into a rebrand."
        }
        pageContent_two={
          "The goal was to improve the site's overall design and user experience while also making it more interesting. Improve the site's architecture and navigation to make surfing easier and more seamless. Promote the conversion of site visitors, job seekers, and residents into contacts. To enhance search engine traffic and fuel future growth, build on SEO foundations."
        }
        title={"Project Description"}
        pageContent_three={
          "We like assisting towns with their workforce and resident recruitment initiatives. The goal of this website makeover was to highlight their eye-catching photo and video content while also providing a highly searchable user experience for a wide range of visitors."
        }
        pageContent_four={
          "Rebranding is exciting because it allows us to create a whole new appearance and feel. We created this site with large photographs and compelling CTAs in mind to encourage individuals to look into vacation or relocation alternatives. Their narrative of travels in an unspoiled environment is echoed by the cold earth tones. The new website is so intriguing that it can make virtually anyone's surroundings seem boring - it did for our team when we were working on it. It includes tempting navigation choices to assist visitors in finding information regarding travel, jobs, relocation, and even the cultural history of the area."
        }
      />
    </>
  );
};

export default CaseStudyDetails;
