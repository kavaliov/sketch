import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import { CHARS } from "./duck/constants";
import charIcon from "./assets/char.svg";
import styles from "./SpecialChars.module.css";
import { insertChar } from "./duck/operations";

const SpecialChars: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

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
