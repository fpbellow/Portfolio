import "./App.css";
import React from "react";
import TopNav from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AboutMe from "./Components/About Me/AboutMe";
import background from "./Resources/adobestockrocket.png";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div
      className={"main-background"}
      style={{ backgroundImage: `url(${background}` }}
    >
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Redirect to={"/aboutMe"} />
          </Route>
          <Route exact path={"/aboutMe"} component={AboutMe} />
          <Route exact path={"/Resume"} component={Resume} />
          <Route exact path={"/Projects"} component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
