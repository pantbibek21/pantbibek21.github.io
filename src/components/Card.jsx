import { useState } from "react";
import styles from "./Card.module.scss";
import { FaAngleDown } from "react-icons/fa6";

const Card = ({ data }) => {
  const [isCardActive, setIsCardActive] = useState(false);

  return (
    <div className={styles.card} onClick={() => setIsCardActive(!isCardActive)}>
      <div className={styles.content}>
        <h2 className={styles.title}>{data.role}</h2>
        <p className={styles.organization}>{data.organization}</p>
        <p className={styles.date}>{data.date}</p>
        <ul
          className={`${styles.list} ${isCardActive ? styles.listActive : ""}`}
        >
          <li>{data.detail}</li>
        </ul>
      </div>

      <div className={styles.logoWrapper}>
        <img src={data.logo} alt="" />
      </div>

      <div
        className={`${styles.angleIcon} ${isCardActive ? styles.active : ""}`}
      >
        <FaAngleDown />
      </div>
    </div>
  );
};

export default Card;
