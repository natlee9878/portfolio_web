import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/*<h4 className={styles.smalltext}>Hi, my name is</h4>*/}
                <h2 className={styles.title}>Hi, I'm Nathaniel</h2>
                <p className={styles.subtitle}>I build websites and software.</p>
                <p className={styles.description}>
                    Full-Stack Web Developer / Software Developer
                </p>
                <a href="mailto:natleejianyang@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/circlenat.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
