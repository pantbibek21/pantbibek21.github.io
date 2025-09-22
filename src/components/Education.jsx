import Card from "./Card";
import styles from "./Experience.module.scss";
import EducationJSON from "../data/education.json";

const Education = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.subHeading}>education</h2>
      <div className={styles.content}>
        {EducationJSON.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </section>
  );
};

export default Education;
