import React from "react";
import {
  Drawing,
  Hand,
  Figures,
  Text,
  Background,
  SpecialChars,
} from "./components";
import styles from "./RightControlPanel.module.css";

const RightControlPanel: React.FC = () => (
  <div className={styles.wrapper}>
    <Hand />
    <Drawing />
    <Text />
    <SpecialChars />
    <Background />
    <Figures />
  </div>
);

export default RightControlPanel;
