import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">experience</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
