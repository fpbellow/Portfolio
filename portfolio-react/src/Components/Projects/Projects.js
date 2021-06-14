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
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}>
          Paystar Admin Portal
        </h1>
        <p style={{ marginBottom: "0px" }}>
          <strong>Description:</strong>
        </p>
        <p>
          As my Senior Capstone project I worked in a group of six over the
          course of three months with two week sprints to build a prototype
          admin portal for Paystar. This was my first experience working in
          Entity Framework Core and Identity.
        </p>
        <p style={{ marginBottom: "0px" }}>
          <strong>The Client:</strong>
        </p>
        <p>
          Our Client for this project was Brandon Cornett, CEO of Elevator3 and
          CTO of Paystar. The focus of this project was to make a Admin Portal
          CRM for Paystar, which handles payment processing for utilities,
          government, businesses and offers custom payment integrations and
          software development.
        </p>
        <p style={{ marginBottom: "0px" }}>
          <strong>The Process:</strong>
        </p>
        <p>
          The main goal for this project was to incorporate as many working
          aspects that Paystar uses into the admin portal to offer its users a
          central place to manage their operations. For example for contact
          management and upkeep Paystar uses Hubspot and some of its features.
          Therefore using Hubspots API, users would be able to gain a quick
          summary of any Hubspot actions on the admin portal without having to
          go to hubspot directly.
        </p>
        <p>
          Most of my commitment to the project was a majority of the frontend
          development and integrating external APIs including Hubspot and one
          provided to us by Paystar including example clients to test payment
          handling for the portal.
        </p>
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}>
          Discord C# Chat Bot
        </h1>
        <p style={{ marginBottom: "0px" }}>
          <strong>Description:</strong>
        </p>
        <p>
          As an introduction to C# and .NET Core I wrote a chat bot for a
          Discord bot. I used this also as practice to further work with
          additional APIs such as additional features from Discord or external
          sites like Twitch or Youtube integration with the bot.
        </p>
        <p style={{ marginBottom: "0px" }}>
          <strong>The Process:</strong>
        </p>
        <p>
          The bot was mostly built with the Discord.NET library to make calls
          with the Discord API. The bot handles various commands differing from
          entertainment to server management. The bot has Twitch.tv integration
          using the TwitchLib C# library.
        </p>
        <h1 style={{ color: "deepskyblue", marginTop: "36px" }}> Tapster</h1>
        <p style={{ marginBottom: "0px" }}>
          <strong>Description:</strong>
        </p>
        <p>
          Created for my Sophmore Software Engineering course, this was my first
          project in fullstack web development. It was also my first experience
          working with Javascript and its frameworks. Tapster provided users a
          way to search for mixers by their name or their required ingredients.
          The user would then be provided the recipe to make the drink.
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
      </div>
      <div>
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
            <p>- Jira Project Board & Issue Management</p>
            <p>- Amazon Web Services</p>
          </ul>
        </div>
        <div style={{ maxWidth: "457px" }}>
          <h1
            style={{
              fontSize: "36px",
              marginTop: "51px",
              marginBottom: "0px",
              color: "deepskyblue",
            }}
          >
            Certifications
          </h1>
          <hr style={{ marginBottom: "25px" }} />
          <div style={{ marginLeft: "30px" }}>
            <strong>AWS Academy Cloud Foundations:</strong>
            <p>
              - Completed Amazon Web Services course on Cloud Foundations and
              currently aiming for the Cloud Practitioner Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
