import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import { updateCanvasState, fireEvent } from "./duck/operations";
import undoIcon from "./assets/undo.svg";
import redoIcon from "./assets/redo.svg";

const UndoRedo: React.FC = () => {
  const allowedRef = React.useRef(true);
  const { canvas } = React.useContext(AppContext);
  const [history, setHistory] = React.useState<any[]>([canvas.toJSON()]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(0);

  React.useEffect(() => {
    // avoiding changing history while object resizing
    canvas.on("mouse:down", () => {
      allowedRef.current = false;
    });

    canvas.on("mouse:up", () => {
      allowedRef.current = true;
    });
  }, [canvas]);

  React.useEffect(() => {
    const canvasStateHandler = () => {
      if (allowedRef.current) {
        updateCanvasState(
          canvas,
          history,
          historyIndex,
          setHistory,
          setHistoryIndex
        );

        canvas.fire("state:changed", canvas.toJSON());
      }
    };

    canvas.on("after:render", canvasStateHandler);

    return () => {
      canvas.off("after:render", canvasStateHandler);
    };
  }, [canvas, history, setHistoryIndex, historyIndex]);

  const undoHandler = () => {
    allowedRef.current = false;
    canvas.loadFromJSON(history[historyIndex - 1], () => {
      setHistoryIndex(historyIndex - 1);
      canvas.renderAll();
      fireEvent(
        canvas,
        history[historyIndex],
        history[historyIndex - 1],
        "undo"
      );
      allowedRef.current = true;
    });
  };

  const redoHandler = () => {
    allowedRef.current = false;
    canvas.loadFromJSON(history[historyIndex + 1], () => {
      setHistoryIndex(historyIndex + 1);
      canvas.renderAll();
      fireEvent(
        canvas,
        history[historyIndex],
        history[historyIndex + 1],
        "redo"
      );
      allowedRef.current = true;
    });
  };

  return (
    <>
      <Button disabled={historyIndex === 0} onClick={undoHandler}>
        <img src={undoIcon} alt="" />
      </Button>
      <Button
        disabled={historyIndex === history.length - 1}
        onClick={redoHandler}
      >
        <img src={redoIcon} alt="" />
      </Button>
    </>
  );
};

export default UndoRedo;
