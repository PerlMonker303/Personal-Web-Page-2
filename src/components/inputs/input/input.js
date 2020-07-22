import React from "react";

import styles from "./input.module.css";

const input = (props) => {
  return (
    <div className={styles.Input}>
      <span className={styles.Label}>{props.label}</span>
      <br />
      {props.type === "textarea" ? (
        <textarea
          className={styles.Textarea}
          placeholder={props.placeholder}
          maxLength="500"
          value={props.value}
          onChange={(event) => props.changeValue(event, props.label)}
        />
      ) : (
        <input
          className={styles.Inp}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(event) => props.changeValue(event, props.label)}
        />
      )}
    </div>
  );
};

export default input;
