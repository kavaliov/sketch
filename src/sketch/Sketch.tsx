import React from "react";
import classNames from "classnames";
import { getId } from "duck/utils";
import { AppContext } from "duck/context";
import appReducer from "duck/reducer";
import appState from "duck/state";
import { CANVAS_SETTINGS } from "duck/constants";
import { setSketchSettings } from "duck/operations";
import { setAnswers, setHeight, setUsedAnswers, setWidth } from "duck/actions";
import { AnswerType } from "duck/types";
import {
  ColorPickerPanel,
  ObjectMenu,
  RightControlPanel,
  LeftControlPanel,
  Answers,
} from "./components";
import styles from "./Sketch.module.css";

const { fabric } = window;

interface SketchProps {
  id?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  editable?: boolean;
  width?: number;
  height?: number;
  answers?: AnswerType[];
  hasCrop?: boolean;
}

const Sketch: React.FC<SketchProps> = ({
  id,
  onChange,
  initialValue,
  width,
  height,
  answers,
}) => {
  const [state, dispatch] = React.useReducer(appReducer, appState);
  const [init, setInit] = React.useState(false);
  const canvasIdRef = React.useRef<string>(id || getId());
  const sketchRef = React.useRef<any>(null);
  const answersRef = React.useRef<HTMLDivElement>(null);
  const { fullscreen } = state;

  React.useEffect(() => {
    if (canvasIdRef.current) {
      sketchRef.current = new fabric.Canvas(canvasIdRef.current, {
        ...CANVAS_SETTINGS,
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      });
      setSketchSettings(sketchRef.current, dispatch);
      setInit(true);

      if (initialValue) {
        const values = JSON.parse(initialValue);

        sketchRef.current.loadFromJSON(values, () => {
          sketchRef.current.renderAll();
        });

        const usedAnswers = values.objects.map(
          (answer: any) => answer.answerID
        );

        dispatch(setUsedAnswers({ usedAnswers }));
      }

      if (width) {
        dispatch(setWidth({ width }));
      }

      if (height) {
        dispatch(setHeight({ height }));
      }

      if (answers) {
        dispatch(setAnswers({ answers }));
      }

      sketchRef.current.on("state:changed", () => {
        if (typeof onChange === "function") {
          onChange(sketchRef.current.toJSON());
        }
      });
    }
  }, [onChange, initialValue, width, height, answers, dispatch]);

  return (
    <div
      className={styles.wrapper}
      style={{
        margin: "0 auto",
        width: width || CANVAS_SETTINGS.width,
        height: height || CANVAS_SETTINGS.height,
      }}
    >
      <div
        className={classNames(styles.canvasWrapper, {
          [styles.fullscreen]: fullscreen,
        })}
      >
        <canvas id={canvasIdRef.current} />
        {init && (
          <AppContext.Provider
            value={{ canvas: sketchRef.current, dispatch, state }}
          >
            <LeftControlPanel />
            <ColorPickerPanel />
            <RightControlPanel />
            <ObjectMenu />
            <Answers target={answersRef} />
          </AppContext.Provider>
        )}
      </div>
      <div ref={answersRef} className={styles.answers} />
    </div>
  );
};

export default Sketch;
