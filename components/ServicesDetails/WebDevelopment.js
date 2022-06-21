import React from "react";
import OurServicesSidebar from "./OurServicesSidebar";
import ServicesDetailsContent from "./ServicesDetailsContent";

const WebDevelopment = () => {
  return (
    <>
      <ServicesDetailsContent
        component_prop={<OurServicesSidebar />}
        bg_image={"webdev.jpg"}
        pageTitle={"Web Development"}
        pageContent_one={
          "When it comes to web development, web application development, web portals, and custom-built websites, Writ Labs is the Indian industry leader. We use innovative technology for long-lasting online solutions, with creativity and experimentation as our primary priorities. Our creative web development team is eager to come up with unique ideas to help you get the most out of your brand's online presence."
        }
        pageContent_two={
          "Writ Labs is the top Website Development Company in Mohali, and it has made a name for itself by providing high-quality web design solutions and ensuring 100% client satisfaction. We specialize in developing functional websites that are suitable for all types of devices. We use the most up-to-date and innovative tools and technologies, such as HTML5, CSS3, Photoshop, and others. With its wide reach, the internet-oriented virtual world has piqued the interest of people, and India provides a plethora of web development services in Mohali. In addition, web development services have expanded at a quicker rate than other software-related vocations, and it may assist in gaining a better grip on the local market. "
        }
        pageContent_three={
          "Writ Labs is dedicated to providing an innovative and comprehensive variety of Web Development services under one roof in today's fast-paced environment. As a firm, Writ Labs promises to assist its clients all around the world by focusing on the proper customer segment. So far, thousands of projects have been successfully turned over to clients by using the following approach:"
        }
        bulletpoint_one={
          "We look at your company, goods, and services to get a clear picture of your brand and provide you with an estimate."
        }
        bulletpoint_two={
          "We build designs with a futuristic perspective in mind, concentrating on the target demographic and stressing the greatest possible representation of your business."
        }
        bulletpoint_three={
          "To turn the accepted drawings into a functioning model, our professional developers use the Scrum technique. This level involves both frontend and backend development."
        }
        bulletpoint_four={
          "A multitude of tests, including functionality tests, compatibility tests, performance tests, and others, are conducted before the website is released to guarantee that it is bug-free and operates as expected."
        }
      />
    </>
  );
};

export default WebDevelopment;
