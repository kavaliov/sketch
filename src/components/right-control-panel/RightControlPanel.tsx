import React from "react";
import { Drawing, Hand } from "./components";
import styles from "./RightControlPanel.module.css";

const RightControlPanel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Hand />
      <Drawing />
    </div>
  );
};

export default RightControlPanel;
