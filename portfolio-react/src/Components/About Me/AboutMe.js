import React from "react";
import "./AboutMe.css";
import portrait from "../../Resources/8x10IMG_2487f.jpg";

const AboutMe = () => {
  return (
    <div className={"content-container"}>
      <h1 style={{ fontSize: "48px" }}>Welcome</h1>
      <img className={"portrait"} src={portrait} />
      <div style={{ maxWidth: "1200px" }}>
        <h1>About Me</h1>
        <p>
          I am a recent graduate from Southeastern Louisiana University with a
          Bachelor's of Science in Computer Science and a Minor in Mathematics.
        </p>
        <p>
          I make it a personal goal to challenge myself to continually improve
          and progress my abilities. I am constantly searching for ways or
          opportunities to learn methods for writing better code and be more
          efficient in my work. I am currently seeking job opportunities that
          help me achieve this goal.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
