import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import { setCurrentColor, setMode } from "duck/actions";
import { lockAllObjects, unLockAllObjects } from "duck/utils";
import { getColorOfThePointOnTheCanvas } from "./duck/utils";
import icon from "./assets/dropper.svg";
import styles from "./Eyedropper.module.css";

const Eyedropper: React.FC = () => {
  const [activated, setActivated] = React.useState<boolean>(false);
  const [previewColor, setPreviewColor] = React.useState<string>("");
  const [previewPosition, setPreviewPosition] = React.useState({
    top: 460,
    left: 260,
  });
  const { canvas, dispatch } = React.useContext(SketchContext);

  const canvasMove = (e: any): void => {
    const selectedColor = getColorOfThePointOnTheCanvas(
      canvas,
      e.pointer.x,
      e.pointer.y
    );
    setPreviewPosition({ top: e.pointer.y - 10, left: e.pointer.x + 20 });
    setPreviewColor(selectedColor);
  };

  const defaultCanvasState = (): void => {
    setActivated(false);
    canvas.off("mouse:down", canvasClick);
    canvas.off("mouse:move", canvasMove);
    unLockAllObjects(canvas);
  };

  const canvasClick = (e: any) => {
    defaultCanvasState();
    const selectedColor = getColorOfThePointOnTheCanvas(
      canvas,
      e.pointer.x,
      e.pointer.y
    );
    dispatch(setCurrentColor({ currentColor: selectedColor }));
  };

  const eyeDropperHandler = () => {
    if (!activated) {
      setActivated(true);
      lockAllObjects(canvas);
      dispatch(setMode({ mode: "hand" }));
      canvas.on("mouse:down", canvasClick);
      canvas.on("mouse:move", canvasMove);
    } else {
      defaultCanvasState();
    }
  };

  return (
    <>
      {activated && (
        <div
          className={styles.colorView}
          style={{ backgroundColor: previewColor, ...previewPosition }}
        />
      )}
      <Button
        active={activated}
        onClick={eyeDropperHandler}
        className={styles.wrapper}
      >
        <img src={icon} alt="" />
      </Button>
    </>
  );
};

export default Eyedropper;
