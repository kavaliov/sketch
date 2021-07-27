import React from "react";
import { AppContext } from "../../../../duck/context";
import { setMode } from "../../../../duck/actions";
import { BrushType } from "../../../../duck/types";
import { Panel, Button } from "../../../index";
import { TOOLS } from "./duck/constants";
import highlight from "./assets/highlight.svg";
import styles from "./Drawing.module.css";
import classNames from "classnames";
import { changeCanvasBrush } from "./duck/operations";

const BRUSH_SIZE = [10, 20, 30, 40, 50];

const Drawing: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const [brush, setBrush] = React.useState<BrushType>("");
  const [brushSize, setBrushSize] = React.useState<number>(10);
  const { state, canvas, dispatch } = React.useContext(AppContext);
  const { currentColor, mode } = state;

  React.useEffect(() => {
    canvas.isDrawingMode = mode === "drawing";
  }, [mode]);

  React.useEffect(() => {
    changeCanvasBrush(canvas, brush, brushSize, currentColor);
  }, [brush, canvas, brushSize, currentColor]);

  const brushHandler = (brushType: BrushType): void => {
    dispatch(setMode({ mode: "drawing" }));
    setBrush(brushType);
    setOpened(false);
  };

  const sizeHandler = (size: number): void => {
    setBrushSize(size);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>
        <img src={highlight} alt="" />
      </Button>
      <Panel opened={opened} onClose={() => setOpened(false)}>
        <div className={styles.panel}>
          <div className={styles.brushSize}>
            {BRUSH_SIZE.map((size: number) => (
              <Button key={size} onClick={() => sizeHandler(size)}>
                {size}
              </Button>
            ))}
          </div>
          <div className={styles.brushes}>
            {TOOLS.map((tool: any) => (
              <button
                onClick={() => brushHandler(tool.type)}
                key={tool.type}
                className={classNames(styles.brush, {
                  [styles.active]: brush === tool.type,
                })}
              >
                <img src={tool.icon} alt="" />
              </button>
            ))}
          </div>
        </div>
      </Panel>
    </>
  );
};

export default Drawing;
