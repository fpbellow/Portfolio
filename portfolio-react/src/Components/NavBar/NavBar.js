import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

const TopNav = () => {
  const history = useHistory();

  return (
    <div className={"main-bar"}>
      <h1 style={{ marginTop: 0 }}> Faustin Bellow </h1>
      <div className={"nav-groups"}>
        <div className={"btn-group-cont"}>
          <div
            className={"hvr-under-left"}
            onClick={() => {
              history.push("/AboutMe");
            }}
          >
            About Me
          </div>
          <div
            className={"hvr-under-left"}
            onClick={() => {
              history.push("/Resume");
            }}
          >
            Resume
          </div>
          <div
            className={"hvr-under-left"}
            onClick={() => {
              history.push("/Projects");
            }}
          >
            Projects
          </div>
        </div>
        <div className={"ext-nav-group"}>
          <a href={"https://github.com/fpbellow"} target={"_blank"}>
            GitHub
          </a>
          <a
            href={"https://www.linkedin.com/in/faustin-bellow-048019188/"}
            target={"_blank"}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
