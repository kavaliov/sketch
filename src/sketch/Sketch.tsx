import React from "react";
import { getId } from "duck/utils";
import { AppContext } from "duck/context";
import appReducer from "duck/reducer";
import appState from "duck/state";
import { CANVAS_SETTINGS } from "duck/constants";
import { setSketchSettings } from "duck/operations";
import { ColorPickerPanel, ObjectMenu, RightControlPanel } from "./components";
import styles from "./Sketch.module.css";

const { fabric } = window;

const Sketch: React.FC = () => {
  const [state, dispatch] = React.useReducer(appReducer, appState);
  const canvasIdRef = React.useRef<string>(getId());
  const sketchRef = React.useRef<any>(null);
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (canvasIdRef.current) {
      sketchRef.current = new fabric.Canvas(
        canvasIdRef.current,
        CANVAS_SETTINGS
      );
      setSketchSettings(sketchRef.current);
      setInit(true);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas id={canvasIdRef.current} />
      {init && (
        <AppContext.Provider
          value={{ canvas: sketchRef.current, dispatch, state }}
        >
          <ColorPickerPanel />
          <RightControlPanel />
          <ObjectMenu />
        </AppContext.Provider>
      )}
    </div>
  );
};

export default Sketch;