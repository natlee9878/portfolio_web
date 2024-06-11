import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Nathaniel</h1>
            <p className={styles.description}>
                I'm a full-stack web developer with 1 year experience bla bla
            </p>
            <a href="mailto:natleejianyang@gmail.com"
                className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}
            alt="Hero image of me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};
