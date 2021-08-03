import React from "react";
import { Select } from "components";
import { AppContext } from "duck/context";
import { FONTS } from "./duck/constants";
import styles from "./FontText.module.css";

interface FontTextType {}

const FontText: React.FC<FontTextType> = () => {
  const [currentFont, setCurrentFont] = React.useState("");
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    // @ts-ignore
    setCurrentFont(canvas.getActiveObject().fontFamily);
  }, [canvas]);

  const changeFontHandler = (e: any): void => {
    setCurrentFont(e.target.value);
    const activeObject = canvas.getActiveObject();
    // @ts-ignore
    activeObject.set({ fontFamily: e.target.value });
    canvas.renderAll();
  };

  return (
    <Select
      onChange={changeFontHandler}
      value={currentFont}
      className={styles.wrapper}
    >
      {FONTS.map((font: string) => (
        <option value={font} key={font}>
          {font}
        </option>
      ))}
    </Select>
  );
};

export default FontText;
