import React from "react";
import Common from "./Common";
import web from "../src/images/img2.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        btn="Get Started"
        visit="/service"
        image={web}
      />
    </>
  );
};
export default Home;
