import React from "react";

import styles from "./project.module.css";

const project = (props) => {
  return (
    <div className={styles.Project}>
      <h2>{props.title}</h2>
      <span className={styles.Description}>{props.description}</span>
      <br />
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <span className={styles.AnchorText}>{props.linkText}</span>
      </a>
    </div>
  );
};

export default project;
