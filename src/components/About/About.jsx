import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        <span>01.About me </span>
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/circlenat.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>
          My venture into web development began with a spark ignited during my
          studies at the <b>University of Adelaide</b>, where I immersed myself in
          Computer Science. What began as a fascination quickly transformed into
          a passion for crafting intuitive web solutions and optimizing backend
          operations. 
          <br />
          <br /> 
          I specialize in developing scalable web applications that
          seamlessly blend user experience with business objectives. At a <b>web
          development company</b>, I've had the privilege to focus on building
          robust web solutions that are not only functional but also drive
          measurable results.
          <br />
          <br /> 
          My proficiency extends to employing <b>Agile methodologies</b> to
          ensure timely project delivery and maintain impeccable code quality.
          Beyond technical prowess, I thrive in collaborative settings where my
          adept communication skills bridge the gap between intricate concepts
          and executable solutions. A relentless pursuit of knowledge keeps me
          at the forefront of industry trends, continuously refining my
          abilities to tackle new challenges head-on.
          <br />
          <br />
          Outside the realm of coding, I actively contribute to community-driven
          initiatives and maintain proficiency in <b>Multimedia tools</b> like
          Photoshop, Premier Pro, and Blender. I am eager to bring my blend of
          technical expertise and creative problem-solving to your team, driving
          impactful outcomes through innovative and data-driven solutions.
        </p>
      </div>
    </section>
  );
};
