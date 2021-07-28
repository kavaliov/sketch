import React from "react";
import { Drawing, Hand, Figures } from "./components";
import styles from "./RightControlPanel.module.css";

const RightControlPanel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Hand />
      <Drawing />
      <Figures />
    </div>
  );
};

export default RightControlPanel;
