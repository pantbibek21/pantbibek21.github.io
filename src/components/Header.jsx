import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuActive, isMobileMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={`${mobileMenuActive ? styles.active : ""}`}>
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
      <div
        className={` ${styles.mobileMenu} ${
          !mobileMenuActive ? styles.menuActive : ""
        }`}
        onClick={() => isMobileMenuActive(!mobileMenuActive)}
      >
        <RxHamburgerMenu />
      </div>
      <div
        className={` ${styles.mobileClose} ${
          mobileMenuActive ? styles.menuCloseActive : ""
        }`}
        onClick={() => isMobileMenuActive(!mobileMenuActive)}
      >
        <CgClose />
      </div>
    </header>
  );
};

export default Header;
