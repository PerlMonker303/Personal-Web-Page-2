import React from "react";

import Input from "./input/input";
import styles from "./inputs.module.css";

const inputs = (props) => {
  const changeValue = (event, type) => {
    props.changed(event, type);
  };
  return (
    <form className={styles.Inputs} onSubmit={props.submitData}>
      <div className={styles.InputsTop}>
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          value={props.data.name}
          changeValue={changeValue}
        />
        <Input
          label="Email address"
          type="text"
          placeholder="Email"
          value={props.data.email}
          changeValue={changeValue}
        />
      </div>
      <div className={styles.InputsBottom}>
        <Input
          label="Message"
          type="textarea"
          placeholder="ex: You rock \m/"
          value={props.data.message}
          changeValue={changeValue}
        />
      </div>
      <button className={styles.Button} onClick={props.submitData}>
        Submit
      </button>
    </form>
  );
};

export default inputs;
