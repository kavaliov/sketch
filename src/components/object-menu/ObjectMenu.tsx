import React from "react";
import { SketchContext } from "../../duck/context";
import { getPosition } from "./duck/utils";
import { removeEmptyTextbox } from "./duck/operations";
import {
  ColorApply,
  RemoveObject,
  Copy,
  BoldText,
  ItalicText,
  UnderlineText,
  AlignText,
  FontText,
  LineBreak,
} from "./components";
import styles from "./ObjectMenu.module.css";

const ObjectMenu: React.FC = () => {
  const [selected, setSelected] = React.useState(false);
  const [fromImgShape, setFromImgShape] = React.useState(false);
  const [type, setType] = React.useState("");
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const { canvas, state } = React.useContext(SketchContext);
  const { fullscreen } = state;

  const withColorApply =
    !fromImgShape &&
    type !== "answerTextbox" &&
    type !== "answerImage" &&
    type !== "answerSvg";

  const withCopy =
    type !== "answerTextbox" && type !== "answerImage" && type !== "answerSvg";

  React.useEffect(() => {
    const activeObject = canvas.getActiveObject();

    if (activeObject) {
      setPosition(getPosition(canvas.getActiveObject(), canvas));
    }
  }, [fullscreen, canvas]);

  React.useEffect(() => {
    const movingHandler = (e: any) => {
      setPosition(getPosition(e.transform.target, canvas));
    };

    const selectHandler = (e: any) => {
      const targetObject = e.target;

      if (targetObject) {
        setType(targetObject.type);
        setSelected(true);
        setPosition(getPosition(targetObject, canvas));
        targetObject.on("moving", movingHandler);
        targetObject.on("scaling", movingHandler);

        if (targetObject.fromImgShape) {
          setFromImgShape(true);
        }

        // resize for i-text
        if (targetObject.type === "i-text") {
          targetObject.on("changed", () => {
            setPosition(getPosition(targetObject, canvas));
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

  if (!selected) {
    return null;
  }

  return (
    <div style={{ ...position }} className={styles.wrapper}>
      <div className={styles.headLine}>
        {withColorApply && <ColorApply />}
        <RemoveObject />
        {withCopy && <Copy />}
        {type === "i-text" && <LineBreak />}
      </div>
      {type === "i-text" && (
        <div className={styles.textSettings}>
          <BoldText />
          <ItalicText />
          <UnderlineText />
          <AlignText />
          <FontText />
        </div>
      )}
    </div>
  );
};

export default ObjectMenu;
