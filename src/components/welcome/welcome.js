import React, { useRef } from "react";

import styles from "./welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={styles.Welcome}>
      <h1>Hi, I'm Andrei-Robert Alexandrescu. I build software.</h1>
      <a className={styles.LearnMore} onClick={props.executeScroll} href="#">
        <br />
        <span>Learn more about me</span>
        <br />
        <strong>v</strong>
      </a>
    </div>
  );
};

export default Welcome;
