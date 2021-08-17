import React from "react";
import classNames from "classnames";
import ReactSlider from "react-slider";
import { Panel, Button } from "components";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import { BrushType } from "duck/types";
import { TOOLS, BRUSH_SIZE } from "./duck/constants";
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
    const pathCreateHandler = (e: any) => {
      e.path.brushType = brush;

      if (brush === "eraser") {
        canvas.fire("object:erased");
      }
    };

    canvas.on("path:created", pathCreateHandler);

    canvas.isDrawingMode = mode === "drawing";
    if (mode !== "drawing") {
      setBrush("");
    }

    return () => {
      canvas.off("path:created", pathCreateHandler);
    };
  }, [mode, canvas, brush]);

  React.useEffect(() => {
    changeCanvasBrush(canvas, brush, brushSize, currentColor);
    if (brush && brushSize < BRUSH_SIZE[brush].min) {
      setBrushSize(BRUSH_SIZE[brush].min);
    }

    if (brush && brushSize > BRUSH_SIZE[brush].max) {
      setBrushSize(BRUSH_SIZE[brush].max);
    }
  }, [brush, canvas, brushSize, currentColor]);

  const brushHandler = (brushType: BrushType): void => {
    dispatch(setMode({ mode: "drawing" }));
    setBrush(brushType);
  };

  const sizeHandler = (size: number): void => {
    setBrushSize(size);
  };

  return (
    <>
      <Button active={mode === "drawing"} onClick={() => setOpened(true)}>
        <img src={highlight} alt="" />
      </Button>
      <Panel title="Brushes" opened={opened} onClose={() => setOpened(false)}>
        <div className={styles.panel}>
          <div className={styles.brushSize}>
            <div className={styles.exampleWrapper}>
              {brush === "marker" && (
                <span className={styles.exampleText}>text</span>
              )}
              <div
                className={styles.example}
                style={{
                  width: brushSize,
                  height: brushSize,
                  border: brush === "eraser" ? "1px solid #c3d0e4" : "none",
                  backgroundColor:
                    brush !== "magic" && brush !== "eraser"
                      ? currentColor
                      : "white",
                  opacity: brush === "marker" ? 0.2 : 1,
                  boxShadow:
                    brush === "magic" ? `0 0 30px ${currentColor}` : "none",
                }}
              />
            </div>
            <ReactSlider
              className={styles.slider}
              orientation="vertical"
              value={brushSize}
              renderThumb={(props, state) => (
                <div {...props} className={styles.thumb}>
                  <div className={styles.value}>{state.valueNow}</div>
                </div>
              )}
              invert
              min={brush ? BRUSH_SIZE[brush].min : 1}
              max={brush ? BRUSH_SIZE[brush].max : 60}
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
