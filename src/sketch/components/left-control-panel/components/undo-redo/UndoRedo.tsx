import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import { updateCanvasState, undo, redo } from "./duck/operations";
import { initialConfig } from "./duck/constants";
import { HistoryConfig } from "./duck/types";
import undoIcon from "./assets/undo.svg";
import redoIcon from "./assets/redo.svg";

const UndoRedo: React.FC = () => {
  const configRef = React.useRef<HistoryConfig>(initialConfig);
  const [disabled, setDisabled] = React.useState<any>({
    undo: true,
    redo: true,
  });
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    const canvasStateHandler = () =>
      updateCanvasState(canvas, configRef.current, setDisabled);

    canvas.on("object:erased", canvasStateHandler);
    canvas.on("object:modified", canvasStateHandler);
    canvas.on("object:added", canvasStateHandler);
    canvas.on("object:removed", canvasStateHandler);

    return () => {
      canvas.off("object:erased", canvasStateHandler);
      canvas.off("object:modified", canvasStateHandler);
      canvas.off("object:added", canvasStateHandler);
      canvas.off("object:removed", canvasStateHandler);
    };
  }, [canvas]);

  return (
    <>
      <Button
        disabled={disabled.undo}
        onClick={() => undo(canvas, configRef.current, setDisabled)}
      >
        <img src={undoIcon} alt="" />
      </Button>
      <Button
        disabled={disabled.redo}
        onClick={() => redo(canvas, configRef.current, setDisabled)}
      >
        <img src={redoIcon} alt="" />
      </Button>
    </>
  );
};

export default UndoRedo;
