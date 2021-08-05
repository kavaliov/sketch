import React from "react";
import classNames from "classnames";
import { AppContext } from "duck/context";
import { getPosition } from "./duck/utils";
import { removeEmptyTextbox } from "./duck/operations";
import {
  CurrentColor,
  RemoveObject,
  Copy,
  BoldText,
  ItalicText,
  UnderlineText,
  AlignText,
  FontText,
} from "./components";
import styles from "./ObjectMenu.module.css";

const ObjectMenu: React.FC = () => {
  const [selected, setSelected] = React.useState(false);
  const [fromImgShape, setFromImgShape] = React.useState(false);
  const [type, setType] = React.useState("");
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const { canvas, state } = React.useContext(AppContext);
  const { fullscreen } = state;

  React.useEffect(() => {
    const activeObject = canvas.getActiveObject();

    if (activeObject) {
      setPosition(getPosition(canvas.getActiveObject(), canvas.getZoom()));
    }
  }, [fullscreen, canvas]);

  React.useEffect(() => {
    const movingHandler = (e: any) => {
      setPosition(getPosition(e.transform.target, canvas.getZoom()));
    };

    const selectHandler = (e: any) => {
      const targetObject = e.target;

      if (targetObject) {
        setType(targetObject.type);
        setSelected(true);
        setPosition(getPosition(targetObject, canvas.getZoom()));
        targetObject.on("moving", movingHandler);
        targetObject.on("scaling", movingHandler);

        if (targetObject.fromImgShape) {
          setFromImgShape(true);
        }

        // resize fix for i-text
        if (targetObject.type === "i-text") {
          targetObject.on("changed", () => {
            setPosition(getPosition(targetObject, canvas.getZoom()));
          });
        }
      }
    };

    canvas.on("selection:created", selectHandler);
    canvas.on("selection:updated", selectHandler);
    canvas.on("selection:cleared", (e: any) => {
      setSelected(false);
      setFromImgShape(false);
      if (e.deselected) {
        e.deselected[0].off("moving", movingHandler);
        e.deselected[0].off("scaling", movingHandler);

        if (e.deselected[0].type === "i-text") {
          canvas.defaultCursor = "default";
          e.deselected[0].off("changed");
          removeEmptyTextbox(canvas, e.deselected[0]);
        }
      }
    });
  }, [canvas]);

  return (
    <>
      {selected && (
        <div
          style={{ ...position }}
          className={classNames(styles.wrapper, { [styles.img]: fromImgShape })}
        >
          {!fromImgShape && <CurrentColor />}
          <RemoveObject />
          <Copy />
          {type === "i-text" && (
            <>
              <BoldText />
              <ItalicText />
              <UnderlineText />
              <AlignText />
              <FontText />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ObjectMenu;
