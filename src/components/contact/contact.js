import React, { Component } from "react";

import styles from "./contact.module.css";
import Inputs from "../inputs/inputs";
import { MailSlurp } from "mailslurp-client";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const API_KEY =
  "fb36376584e9241df87ef96d011514fabd4aac2b55ddf24ddbd709782c270d71";
const mailSlurp = new MailSlurp({ apiKey: API_KEY });
const inboxId = "	2ccef3bf-ddfc-4c1a-ba98-72ab1314b8aa";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showSuccessMessage: false,
      showErrorMessage: false,
      messageContent: "",
    };
  }
  submitData = async (event) => {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({
        ...this.state,
        showSuccessMessage: false,
        showErrorMessage: true,
        messageContent: "Please fill all input fields.",
      });
      setTimeout(() => {
        this.setState({ ...this.state, showErrorMessage: false });
      }, 3000);
      return;
    }
    await mailSlurp
      .sendEmail(inboxId, {
        to: ["2ccef3bf-ddfc-4c1a-ba98-72ab1314b8aa@mailslurp.com"],
        subject: "PERSONAL WEB MAIL",
        body: `
      <h3>Name:</h3> <p>${this.state.name}<p>
      <h3>Address:</h3> <p>${this.state.email}</p>
      <h3>Message:</h3> <p>${this.state.message}</p>
      `,
      })
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          message: "",
          showSuccessMessage: true,
          showErrorMessage: false,
          messageContent: "Thanks!",
        });
        setTimeout(() => {
          this.setState({ ...this.state, showSuccessMessage: false });
        }, 3000);
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          showSuccessMessage: false,
          showErrorMessage: true,
          messageContent: "An error occured. Please try again.",
        });
        setTimeout(() => {
          this.setState({ ...this.state, showErrorMessage: false });
        }, 3000);
      });
  };

  changeValue = (event, type) => {
    switch (type) {
      case "Name":
        this.setState({
          ...this.state,
          name: event.target.value,
        });
        break;
      case "Email address":
        this.setState({
          ...this.state,
          email: event.target.value,
        });
        break;
      case "Message":
        this.setState({
          ...this.state,
          message: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    let message = null;
    let classes = styles.Message;
    if (this.state.showSuccessMessage) {
      classes += " " + styles.SuccessMessage;
    } else if (this.state.showErrorMessage) {
      classes += " " + styles.ErrorMessage;
    }
    if (this.state.showSuccessMessage || this.state.showErrorMessage) {
      message = (
        <div className={classes}>
          <p>{this.state.messageContent}</p>
        </div>
      );
    }

    return (
      <div className={styles.Contact} ref={this.props.contactRef}>
        <h1>Contact</h1>
        <h3>Thanks for taking the time. How can I help you today?</h3>
        <Inputs
          submitData={this.submitData}
          data={this.state}
          changed={this.changeValue}
        />
        {message}
        <a
          href="https://github.com/PerlMonker303"
          className={styles.Icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={styles.Icon} fontSize="large" />
        </a>

        <a
          href="https://ro.linkedin.com/in/andrei-robert-alexandrescu-189aa7192?challengeId=AQHMweIx14LFTAAAAXN3gxYW0B8ujAhQF6_vsRyXUEfORGzTxHWdWRQb0Od3_SduGbyQKP122b-h3TpEceJziNTDKEFAYDQ7aw&submissionId=81844ae9-5b22-2416-766d-e60dde1f8054"
          className={styles.Icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className={styles.Icon} fontSize="large" />
        </a>
      </div>
    );
  }
}

export default Contact;
