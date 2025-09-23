import styles from "./Highlight.module.scss";
import { GrAchievement } from "react-icons/gr";
import { TbPodium } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import highlightJSON from "../data/highlights.json";
import Card from "./Card";
import { useEffect, useState } from "react";

const Highlight = () => {
  const [activeSection, setActiveSection] = useState("volunteering");

  const filteredData = highlightJSON.filter(
    (item) => item.type === activeSection
  );

  console.log(filteredData);

  return (
    <div className={styles.highlightSection}>
      <h2 className={styles.subHeading}>{activeSection}</h2>
      <div className={styles.sidebar}>
        <button
          className={`${activeSection === "volunteering" ? styles.active : ""}`}
          onClick={() => setActiveSection("volunteering")}
        >
          <div className={styles.iconWrapper}>
            <FaRegStar />
          </div>
          <span>volunteering</span>
        </button>
        <button
          className={`${activeSection === "events" ? styles.active : ""}`}
          onClick={() => setActiveSection("events")}
        >
          <div className={styles.iconWrapper}>
            <TbPodium />
          </div>
          <span>events</span>
        </button>
        <button
          className={`${activeSection === "awards" ? styles.active : ""}`}
          onClick={() => setActiveSection("awards")}
        >
          <div className={styles.iconWrapper}>
            <GrAchievement />
          </div>
          <span>awards</span>
        </button>
      </div>

      {filteredData.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};

export default Highlight;
