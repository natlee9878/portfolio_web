import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/circlenat.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>
          My venture into web development began with a spark ignited during my
          studies at the University of Adelaide, where I immersed myself in
          Computer Science. What began as a fascination quickly transformed into
          a passion for crafting intuitive web solutions and optimizing backend
          operations.
          <br /><br />
          Equipped with a robust skill set encompassing Ruby on Rails,
          JavaScript, HTML/CSS, and Node.js, I specialize in developing scalable
          web applications that harmonize user experience with business
          objectives. My proficiency extends to employing Agile methodologies to
          ensure timely project delivery and impeccable code quality.
          <br /><br />
          Beyond technical prowess, I thrive in collaborative settings where my
          adept communication skills bridge the gap between intricate concepts
          and executable solutions. A relentless pursuit of knowledge keeps me
          at the forefront of industry trends, continuously refining my
          abilities to tackle new challenges head-on.
          <br /><br />
          Outside the realm of coding, I actively contribute to community-driven
          initiatives and maintain proficiency in multimedia tools like
          Photoshop, Premier Pro, and Blender. I am eager to bring my blend of
          technical expertise and creative problem-solving to your team, driving
          impactful outcomes through innovative and data-driven solutions.
          <br /><br /> Let's connect and explore how I can elevate your next digital
          endeavor.
        </p>
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                Detail-oriented web developer with a computer science degree. Experienced in building responsive websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Expertise</h3>
              <p>
                Proficient in modern web technologies, database management, and implementing efficient solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Collaboration</h3>
              <p>
                Worked in Agile teams, contributing to meetings and collaborating with cross-functional teams.
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
