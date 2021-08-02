import React from "react";
import { ColorResult, HuePicker } from "react-color";
import { FABRIC_SETTINGS } from "duck/constants";
import { AppContext } from "duck/context";
import { setCurrentColor } from "duck/actions";
import { changeActiveObjectColor } from "duck/operations";
import { Eyedropper, ColorHistory } from "./components";
import styles from "./ColorPicker.module.css";

const ColorPickerPanel: React.FC = () => {
  const [localColor, setLocalColor] = React.useState<string>(
    FABRIC_SETTINGS.START_COLOR
  );
  const { canvas, dispatch, state } = React.useContext(AppContext);
  const { currentColor } = state;

  React.useEffect(() => {
    setLocalColor(currentColor);
    changeActiveObjectColor(canvas, currentColor);
  }, [currentColor, canvas]);

  const changeHandler = (color: ColorResult): void => {
    dispatch(setCurrentColor({ currentColor: color.hex }));
  };

  const changeLocalColor = (color: ColorResult): void => {
    setLocalColor(color.hex);
  };

  return (
    <div className={styles.pickerWrapper}>
      <Eyedropper />
      <HuePicker
        className={styles.picker}
        color={localColor}
        onChange={changeLocalColor}
        onChangeComplete={changeHandler}
        // @ts-ignore
        pointer={() => (
          <div
            className={styles.pointer}
            style={{ backgroundColor: localColor }}
          />
        )}
      />
      <ColorHistory />
    </div>
  );
};

export default ColorPickerPanel;
