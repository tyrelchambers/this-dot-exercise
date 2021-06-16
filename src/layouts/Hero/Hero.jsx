import React from "react";
import "./Hero.css";
const Hero = (props) => {
  return <header className="hero mt-10">{props.children}</header>;
};

export default Hero;
