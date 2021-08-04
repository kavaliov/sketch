import React from "react";
import { UndoRedo } from "./components";
import styles from "./LeftControlPanel.module.css";

const LeftControlPanel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <UndoRedo />
    </div>
  );
};

export default LeftControlPanel;
