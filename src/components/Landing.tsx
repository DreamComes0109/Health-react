import React from "react";
import Enhance from "./layouts/Enhance";
import Affinity from "./layouts/Affinity";
import Serve from "./layouts/Serve";
import About from "./layouts/About";

const Landing = () => {
  return (
    <>
      <Enhance />
      <Affinity />
      <Serve />
      <About />
    </>
  );
};

export default Landing;
