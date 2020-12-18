import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";


const TopNav = () => {
  const history = useHistory;

  return (
    <div className={"main-nav"}>
      <h1 style={{ marginTop: 0 }}> Faustin Bellow </h1>
    </div>
  );
};
export default TopNav;
