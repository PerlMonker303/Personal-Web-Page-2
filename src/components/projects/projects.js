import React from "react";

import styles from "./projects.module.css";
import Project from "./project/project";

const projects = (props) => {
  const prj = [
    {
      title: "Social Bisquit",
      description: "A simple social networking platform",
      image: "img1",
      link: "https://github.com/PerlMonker303/SocialBisquit1.0",
      linkText: "Repository",
    },
    {
      title: "React Weather App",
      description: "Display weather data related to a given location",
      image: "img2",
      link: "https://github.com/PerlMonker303/ReactWeather",
      linkText: "Repository",
    },
    {
      title: "Personal Web Page",
      description: "Made with VueJs",
      image: "img3",
      link: "https://fir-hosting-personal.firebaseapp.com",
      linkText: "Website",
    },
    {
      title: "ProducTimer",
      description:
        "Timer web app made with React and Styled-components library",
      image: "img4",
      link: "https://github.com/PerlMonker303/ReactTimer",
      linkText: "Repository",
    },
  ];
  return (
    <div className={styles.Projects}>
      {prj.map((p) => {
        return (
          <Project
            key={p.title}
            title={p.title}
            description={p.description}
            image={p.image}
            link={p.link}
            linkText={p.linkText}
          />
        );
      })}
      <a
        href="https://github.com/PerlMonker303/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.AnchorText}>More on Github</span>
      </a>
    </div>
  );
};

export default projects;
