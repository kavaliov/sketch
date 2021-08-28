import React from "react";
import { Button, Panel } from "components/general-components";
import { SketchContext } from "duck/context";
import { insertFraction } from "./duck/operations";
import fractionIcon from "./assets/fraction.svg";
import styles from "./Fraction.module.css";

const Fraction: React.FC = () => {
  const [fraction, setFraction] = React.useState({
    numerator: "",
    denominator: "",
  });
  const [opened, setOpened] = React.useState(false);
  const { canvas, state } = React.useContext(SketchContext);
  const focusInputRef = React.useRef<HTMLInputElement>(null);
  const { currentColor } = state;

  const handlerInsert = (): void => {
    insertFraction(
      canvas,
      currentColor,
      fraction.numerator,
      fraction.denominator
    );
  };

  const handleClose = (): void => {
    setOpened(false);
    setFraction({ numerator: "", denominator: "" });
  };

  const openPanelHandler = (): void => {
    setOpened(true);
  };

  const transitionEndHandler = (): void => {
    if (opened) {
      focusInputRef.current?.focus();
    }
  };

  return (
    <>
      <Button>
        <img src={fractionIcon} alt="" onClick={openPanelHandler} />
      </Button>
      <Panel
        title="Insert Fraction"
        opened={opened}
        onClose={handleClose}
        onTransitionEnd={transitionEndHandler}
      >
        <div className={styles.wrapper}>
          <input
            ref={focusInputRef}
            value={fraction.numerator}
            style={{ color: currentColor }}
            onChange={(e) =>
              setFraction({ ...fraction, numerator: e.target.value })
            }
          />
          <div
            className={styles.separator}
            style={{ backgroundColor: currentColor }}
          />
          <input
            value={fraction.denominator}
            style={{ color: currentColor }}
            onChange={(e) =>
              setFraction({ ...fraction, denominator: e.target.value })
            }
          />
          <Button onClick={handlerInsert} className={styles.insertButton}>
            Insert
          </Button>
        </div>
      </Panel>
    </>
  );
};

export default Fraction;
