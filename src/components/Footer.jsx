import styles from "./Footer.module.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <a href="https://github.com/pantbibek21/" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.linkedin.com/in/pantbibek21/" target="_blank">
            <CiLinkedin />
          </a>
        </div>
      </div>
      <p className={styles.email}>pantbibek21[at]gmail[dot]com</p>
      <p className={styles.address}>Münster, Germany</p>
      <p className={styles.copyright}>&copy; Bibek Pant 2025 </p>
    </footer>
  );
};

export default Footer;
