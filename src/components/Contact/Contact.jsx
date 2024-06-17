import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        {/* <h2 className={styles.heading}>Contact Me</h2> */}
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:natleejianyang@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          </a>
          {/* <a href="mailto:natleejianyang@gmail.com">natleejianyang@gmail.com</a> */}
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/nathaniel-lee-960b33208/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          </a>
          {/* <a href="https://www.linkedin.com/in/nathaniel-lee-960b33208/">linkedin.com/natlee</a> */}
        </li>
        <li className={styles.link}>
          <a href="https://github.com/natlee9878">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          </a>
          {/* <a href="https://github.com/natlee9878">github.com/natlee9878</a> */}
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
