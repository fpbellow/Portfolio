import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

const TopNav = () => {
  const history = useHistory();

  return (
    <div className={"main-nav"}>
      <h1 style={{ marginTop: 0 }}> Faustin Bellow </h1>
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
    </div>
  );
};
export default TopNav;
