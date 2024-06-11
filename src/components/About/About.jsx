import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end developer</h3>
              <p>
                I'm a back-end developer with experience in building responsive
                websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI-designer </h3>
              <p>
                I'm a back-end developer with experience in building responsive
                websites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
