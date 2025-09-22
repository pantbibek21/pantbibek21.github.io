import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className="content">
        <h1 className={styles.heading}>
          Hi, I am <span>Bibek</span> 👋
        </h1>
        <p className={styles.title}>Software Engineer</p>
        <p className={styles.bio}>
          Computer Science graduate specializing in web development, geospatial
          app development, and technical writing.
        </p>
        <button>
          <a href="https://www.linkedin.com/in/pantbibek21/" target="_blank">
            Say Hello
          </a>
        </button>
      </div>

      <div className={styles.profileWrapper}>
        <img src="../assets/profile.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
