import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Nathaniel</h2>
        <p className={styles.subtitle}>I build websites and software.</p>
        <p className={styles.description}>
          Full-Stack Web Developer / Software Developer
        </p>
        <a href="mailto:natleejianyang@gmail.com" className={styles.contactBtn}>
          Let's talk
        </a>
      </div>
    </section>
    </div>
  );
};
