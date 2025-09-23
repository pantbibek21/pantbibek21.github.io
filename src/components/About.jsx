import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.subHeading}>about me</h2>
      <div className={styles.content}>
        <p>
          I’m a Computer Science graduate currently pursuing my Master’s in
          Geospatial Technologies as Erasmus Scholar at the University of
          Münster, Germany. My academic journey has been marked by excellence,
          graduating as university topper and receiving the prestigious Erasmus
          Mundus Scholarship (2024) to study across three leading European
          universities: Universitat Jaume I (Spain), University of Münster
          (Germany), and Universidade Nova de Lisboa (Portugal).
        </p>
        <p>
          Previously, I worked as a Technical Writer at Programiz, where I
          created programming courses and articles on web technologies for
          millions of learners worldwide. Alongside academics and work, I’ve
          been actively engaged in tech communities, building developer
          networks, delivering workshops, and hosting national-level tech
          events. For this impact, I was recognized as one of two provincial
          tech leaders at GitHub Field Day Nepal 2022 and awarded as a Microsoft
          Tech Community South Asia Ambassador (2023).
        </p>
        <p>
          {" "}
          My expertise spans full-stack development, geospatial application
          development, and technical writing. I enjoy building meaningful tools
          and communities, and I’m now seeking opportunities to begin my
          professional journey as a Software Engineer or Web GIS Developer.
        </p>
      </div>
    </section>
  );
};

export default About;
