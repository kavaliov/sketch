import React from "react";
import { Fullscreen, UndoRedo } from "./components";
import styles from "./LeftControlPanel.module.css";

const LeftControlPanel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Fullscreen />
      <UndoRedo />
    </div>
  );
};

export default LeftControlPanel;
