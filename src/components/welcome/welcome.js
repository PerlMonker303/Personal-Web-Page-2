import React from "react";

import styles from "./welcome.module.css";
import globalStyles from "../../App.module.css";

const Welcome = (props) => {
  return (
    <div className={styles.Welcome}>
      <button className={styles.ContactButton} onClick={props.contactScroll}>
        Contact
      </button>
      <h1>
        Hi, I'm Andrei-Robert Alexandrescu. I build
        <span className={globalStyles.Special}> software</span>.
      </h1>
      <span className={styles.LearnMore} onClick={props.firstScroll}>
        <br />
        <span>Learn more about me</span>
        <br />
        <strong>v</strong>
      </span>
    </div>
  );
};

export default Welcome;
