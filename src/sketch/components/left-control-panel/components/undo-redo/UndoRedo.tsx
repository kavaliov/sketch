// @ts-nocheck
import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import undoIcon from "./assets/undo.svg";
import redoIcon from "./assets/redo.svg";

const UndoRedo: React.FC = () => {
  const [redoActive, setRedoActive] = React.useState(false);
  const [undoActive, setUndoActive] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

  const activeCheck = React.useCallback(() => {
    setUndoActive(!!canvas.historyUndo.length);
    setRedoActive(!!canvas.historyRedo.length);
  }, [canvas]);

  React.useEffect(() => {
    canvas.on("history:append", activeCheck);
  }, [canvas, activeCheck]);

  const undoHandler = (): void => {
    canvas.discardActiveObject();
    canvas.undo();
    activeCheck();
  };

  const redoHandler = (): void => {
    canvas.discardActiveObject();
    canvas.redo();
    activeCheck();
  };

  return (
    <>
      <Button disabled={!undoActive} onClick={undoHandler}>
        <img src={undoIcon} alt="" />
      </Button>
      <Button disabled={!redoActive} onClick={redoHandler}>
        <img src={redoIcon} alt="" />
      </Button>
    </>
  );
};

export default UndoRedo;
