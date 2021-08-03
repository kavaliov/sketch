import React from "react";
import { Drawing, Hand, Figures, Text, Background } from "./components";
import styles from "./RightControlPanel.module.css";

const RightControlPanel: React.FC = () => (
  <div className={styles.wrapper}>
    <Hand />
    <Drawing />
    <Text />
    <Background />
    <Figures />
  </div>
);

export default RightControlPanel;
