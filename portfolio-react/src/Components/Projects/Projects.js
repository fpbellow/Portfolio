import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className={"work-container"}>
      <div className={"projects-list"}>
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "0px",
            marginLeft: "48px",
            marginRight: "48px",
          }}
        >
          Projects
        </h1>
        <hr style={{ width: "28%", marginLeft: "0px" }} />
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}> Tapster</h1>
        <p style={{ marginBottom: "0px" }}>
          <strong>Description:</strong>
        </p>
        <p>
          This was my first project going into fullstack web development. It was
          also my first experience working with Javascript and its frameworks.
          Tapster provided users a way to search for mixers by their name or
          their required ingredients. The user would then be provided the recipe
          to make the drink.
        </p>
        <p style={{ marginBottom: "0px" }}>
          <strong>The Process:</strong>
        </p>
        <p>
          The app was developed between a four person team with Agile design in
          mind. The backend was built with NodeJs and Express. The database of
          drinks was stored on MongoDB. The front end was developed with ReactJs
          and the project itself was deployed with Heroku.
        </p>
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}>
          Discord C# Chat Bot
        </h1>
        <p>
          As an introduction to C# and .NET Core I wrote a chat bot for a
          Discord bot. I used this also as practice to further work with
          additional APIs such as additional features from Discord or external
          sites like Twitch or Youtube integration with the bot.
        </p>
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}>
          Paystar Admin Portal
        </h1>
      </div>
      <div>
        <h1
          style={{
            fontSize: "36px",
            marginTop: "51px",
            marginBottom: "0px",
            color: "deepskyblue",
          }}
        >
          Languages and Frameworks
        </h1>
        <hr />
        <ul className={"tech-list"}>
          <p>- Java</p>
          <p>- JavaScript</p>
          <p>- C / C++</p>
          <p>- C#</p>
          <p>- ReactJs</p>
          <p>- Redux</p>
          <p>- NodeJs</p>
          <p>- MongoDB</p>
          <p>- Entity Framework</p>
          <p>- EF Core / EF Core Identity</p>
          <p>- SQL</p>
          <p>- ASP.NET / .NET Core</p>
        </ul>
      </div>
    </div>
  );
};
export default Projects;
