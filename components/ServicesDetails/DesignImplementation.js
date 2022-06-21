import React from "react";
import OurServicesSidebar from "./OurServicesSidebar";
import ServicesDetailsContent from "./ServicesDetailsContent";

const DesignImplementation = () => {
  return (
    <>
      <ServicesDetailsContent
        component_prop={<OurServicesSidebar />}
        bg_image={"design.jpg"}
        pageTitle={"Design & Implementation"}
        pageContent_one={
          "The No. 1 Web Design Company in Mohali is Writ Labs. We provide services to various countries like India, the UK, Canada, Australia, the USA, etc. We strive to give a service that is 100 percent client satisfaction, excellent in quality and delivered on time. We welcome projects from all around the world to improve their business offers by incorporating more creativity and uniqueness."
        }
        pageContent_two={
          "We give comprehensive and tailored web design services to our clients as the top website design company in Mohali. If you're seeking web designing services in Mohali, go no further than Writ Labs. We offer comprehensive web design services that fit your budget and assist you in achieving the desired search engine results. Despite this, we have a staff of highly qualified professionals who make us one of the industry's finest. Our team of dedicated experts has established itself as one of the top Web Design firms in Mohali. Our objective is to create websites that are visually appealing, easy to navigate, and practical in the real world. We thoroughly comprehend a client's imagination and aims for their internet presence by discussing the notion of their business."
        }
        pageContent_three={
          " Are you interested in reaching out to your potential customers? If you answered yes, you'll need a professional website. However, having a website is insufficient. A quality website is required if you truly want to develop your company into a brand. Our Website Design Company in Mohali can assist you in creating a website that will work wonders for your company. Because no one beats Writ Labs when it comes to the top web design company in Mohali."
        }
        bulletpoint_one={
          "Among the website design companies in Mohali, Writ Labs stands out for its originality and innovation. Our extensive portfolio distinguishes us as the premier website design firm in Mohali."
        }
        bulletpoint_two={
          "Writ Labs, being a world-class website design company in Mohali, provides the ideal solutions for all of your digital requirements. The first prerequisite for new company start-ups is a visually appealing, fully functional website platform."
        }
        bulletpoint_three={
          "It's an online representation of your setup that includes many elements, modules, and other relevant information about the goods or services you're dealing with."
        }
        bulletpoint_four={
          "We provide the ideal and long-lasting solutions for you at Writ Labs. Similarly, our services will be your one-stop-shop for delivering great digital services at affordable rates."
        }
      />
    </>
  );
};

export default DesignImplementation;
