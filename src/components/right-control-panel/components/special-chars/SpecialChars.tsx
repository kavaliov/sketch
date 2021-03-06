import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import { insertChar } from "duck/operations";
import charIcon from "./assets/char.svg";
import { CHARS } from "./duck/constants";
import styles from "./SpecialChars.module.css";

const SpecialChars: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas } = React.useContext(SketchContext);

  const openHandler = () => {
    setOpened(!opened);
  };

  return (
    <>
      {opened && (
        <div className={styles.charList}>
          {CHARS.map((char: string) => (
            <Button
              onClick={() => insertChar(canvas, char)}
              key={char}
              className={styles.char}
            >
              {char}
            </Button>
          ))}
        </div>
      )}
      <Button active={opened} onClick={openHandler}>
        <img src={charIcon} alt="" />
      </Button>
    </>
  );
};

export default SpecialChars;
