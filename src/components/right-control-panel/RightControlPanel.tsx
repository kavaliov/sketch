import React from "react";
import { Drawing } from "./components";
import styles from "./RightControlPanel.module.css";

const RightControlPanel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Drawing />
    </div>
  );
};

export default RightControlPanel;
