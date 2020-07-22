import React from "react";

import styles from "./block.module.css";

const block = (props) => {
  let classes = styles.Block;
  if (props.align === "left") {
    classes += " " + styles.InternalLeft;
  } else {
    classes += " " + styles.InternalRight;
  }

  return (
    <div className={classes} ref={props.refference ?? null}>
      <h1>{props.title}</h1>
      {props.content.map((c) => (
        <p key={c}>{c}</p>
      ))}
      {props.inside}
    </div>
  );
};

export default block;
