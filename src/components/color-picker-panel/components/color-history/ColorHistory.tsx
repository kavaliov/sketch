import React from "react";
import { SketchContext } from "duck/context";
import { setCurrentColor } from "duck/actions";
import styles from "./ColorHistory.module.css";

const ColorHistory: React.FC = () => {
  const [history, setHistory] = React.useState(["", ""]);
  const { state, dispatch } = React.useContext(SketchContext);
  const { currentColor } = state;

  React.useEffect(() => {
    setHistory((state) => [currentColor, state[0]]);
  }, [currentColor]);

  const setColorHandler = (color: string) => {
    dispatch(setCurrentColor({ currentColor: color }));
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.color}
        style={{ backgroundColor: history[0] }}
        onClick={() => setColorHandler(history[0])}
      />
      <button
        className={styles.color}
        style={{ backgroundColor: history[1] || "white" }}
        onClick={() => setColorHandler(history[1] || "white")}
      />
    </div>
  );
};

export default ColorHistory;
