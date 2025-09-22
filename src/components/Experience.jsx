import Card from "./Card";
import styles from "./Experience.module.scss";
import ExperienceJSON from "../data/experience.json";

const Experience = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.subHeading}>experience</h2>
      <div className={styles.content}>
        {ExperienceJSON.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
