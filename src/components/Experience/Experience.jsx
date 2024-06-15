import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}></h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/*    SKILLS     */}
          <h2>My Skills</h2>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <p className={styles.retainer}>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/*    EXPERIENCE     */}
        <ul className={styles.history}>
          <h2>My Experience</h2>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {historyItem.role},{" "}
                    <span className={styles.organization}>
                      {historyItem.organisation}
                    </span>
                  </h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
