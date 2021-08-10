import React from "react";
import { AppContext } from "duck/context";
import { setCurrentColor } from "duck/actions";
import { changeActiveObjectColor } from "duck/operations";
import { Eyedropper, ColorHistory, ColorPicker } from "./components";
import styles from "./ColorPicker.module.css";

const ColorPickerPanel: React.FC = () => {
  const { canvas, dispatch, state } = React.useContext(AppContext);
  const { currentColor } = state;

  React.useEffect(() => {
    changeActiveObjectColor(canvas, currentColor);
  }, [currentColor, canvas]);

  const changeHandler = (color: string): void => {
    dispatch(setCurrentColor({ currentColor: color }));
  };

  return (
    <div className={styles.pickerWrapper}>
      <Eyedropper />
      <ColorPicker width={430} height={24} onChange={changeHandler} />
      <ColorHistory />
    </div>
  );
};

export default ColorPickerPanel;
