import "./App.css";
import React from "react";
import TopNav from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AboutMe from "./Components/About Me/AboutMe";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className={"main-background"}>
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Redirect to={"/aboutMe"} />
          </Route>
          <Route exact path={"/aboutMe"} component={AboutMe} />
          <Route exact path={"/Resume"} render={()=> <PDFViewer backend = {PDJSBackend} src='./Resources/FBresume.pdf'/> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
