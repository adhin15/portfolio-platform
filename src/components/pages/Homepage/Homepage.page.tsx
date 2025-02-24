"use client";

import AboutMe from "./components/AboutMe/AboutMe";
import Circles from "./components/Circles/Circles";
import PlayGround from "./components/Playground/PlayGround";
import Portfolio from "./components/Portfolio/Portfolio";
import useHomePage from "./Homepage.hook";

const Homepage = () => {
  return (
    <>
      <Circles />
      <AboutMe />
      <PlayGround />
      <Portfolio />
    </>
  );
};

export default Homepage;
