import React from "react";
import classNames from "classnames";
import ReactSlider from "react-slider";
import { Panel, Button } from "components";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import { BrushType } from "duck/types";
import { TOOLS } from "./duck/constants";
import highlight from "./assets/highlight.svg";
import { changeCanvasBrush } from "./duck/operations";
import styles from "./Drawing.module.css";

const Drawing: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const [brush, setBrush] = React.useState<BrushType>("");
  const [brushSize, setBrushSize] = React.useState<number>(10);
  const { state, canvas, dispatch } = React.useContext(AppContext);
  const { currentColor, mode } = state;

  React.useEffect(() => {
    canvas.isDrawingMode = mode === "drawing";
    if (mode !== "drawing") {
      setBrush("");
    }
  }, [mode, canvas]);

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
      <Button active={mode === "drawing"} onClick={() => setOpened(true)}>
        <img src={highlight} alt="" />
      </Button>
      <Panel opened={opened} onClose={() => setOpened(false)}>
        <div className={styles.panel}>
          <div className={styles.brushSize}>
            <div className={styles.exampleWrapper}>
              <div
                className={styles.example}
                style={{
                  width: brushSize,
                  height: brushSize,
                  backgroundColor: currentColor,
                }}
              />
            </div>
            <ReactSlider
              className={styles.slider}
              orientation="vertical"
              defaultValue={brushSize}
              renderThumb={(props, state) => (
                <div {...props} className={styles.thumb}>
                  <div className={styles.value}>{state.valueNow}</div>
                </div>
              )}
              invert
              min={1}
              max={60}
              onChange={sizeHandler}
            />
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
