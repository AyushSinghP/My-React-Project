import React from "react";
import Common from "./Common";
import web2 from "../src/images/img3.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        btn="Contact Now"
        visit="/contact"
        image={web2}
      />
    </>
  );
};
export default About;
