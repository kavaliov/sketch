import React from "react";
import { ColorResult, HuePicker } from "react-color";
import { AppContext } from "duck/context";
import { setCurrentColor } from "duck/actions";
import { changeActiveObjectColor } from "duck/operations";
import { Eyedropper, ColorHistory } from "./components";
import styles from "./ColorPicker.module.css";

const ColorPickerPanel: React.FC = () => {
  const { canvas, dispatch, state } = React.useContext(AppContext);
  const { currentColor } = state;

  const changeHandler = (color: ColorResult) => {
    dispatch(setCurrentColor({ currentColor: color.hex }));
    changeActiveObjectColor(canvas, color);
  };

  return (
    <div className={styles.pickerWrapper}>
      <Eyedropper />
      <HuePicker
        className={styles.picker}
        color={currentColor}
        onChange={changeHandler}
        // @ts-ignore
        pointer={() => (
          <div
            className={styles.pointer}
            style={{ backgroundColor: currentColor }}
          />
        )}
      />
      <ColorHistory />
    </div>
  );
};

export default ColorPickerPanel;
