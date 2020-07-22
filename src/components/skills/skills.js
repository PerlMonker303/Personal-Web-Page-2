import React from "react";

import styles from "./skills.module.css";

const skills = (props) => {
  const skillsListed = [
    { title: "Front-end", skills: "Javascript, ReactJs" },
    { title: "Back-end", skills: "NodeJs, Firebase" },
    { title: "Mobile", skills: "React, Ionic" },
    {
      title: "Other",
      skills: `Solid understanding of C++, Git, NPM, Bash, Python,
         Object-Oriented Programming, Data Structures and Algorithms`,
    },
  ];
  return (
    <div>
      {skillsListed.map((sk) => (
        <div className={styles.Skills} key={sk.title}>
          <strong>{sk.title}</strong>: <br />
          <span>{sk.skills}</span>
        </div>
      ))}
    </div>
  );
};

export default skills;
