import { fabric as fabricType } from "fabric";
import { FABRIC_SETTINGS } from "./constants";
import { ColorResult } from "react-color";

const { fabric } = window as any;

export const setSketchSettings = (
  canvas: fabricType.Canvas | undefined
): void => {
  if (canvas) {
    // Initial canvas setup
    fabric.Object.prototype.cornerStyle = FABRIC_SETTINGS.CORNER_STYLE;
    fabric.Object.prototype.cornerSize = FABRIC_SETTINGS.CORNER_SIZE;
    canvas.selectionColor = FABRIC_SETTINGS.SELECTION_COLOR;
    canvas.selectionBorderColor = FABRIC_SETTINGS.SELECTION_BORDER_COLOR;
    canvas.selectionLineWidth = FABRIC_SETTINGS.SELECTION_LINE_WIDTH;

    document.addEventListener("keydown", (event) => {
      if (event.key === "Backspace") {
        removeSelectedObject(canvas);
      }
    });
  }
};

const removeSelectedObject = (canvas: fabricType.Canvas) => {
  const selectedObject = canvas.getActiveObject();

  if (selectedObject && selectedObject.type === "activeSelection") {
    (selectedObject as any).forEachObject((element: any) => {
      canvas.remove(element);
    });
  } else {
    canvas.remove(selectedObject);
  }

  canvas.discardActiveObject().requestRenderAll();
};

export const changeActiveObjectColor = (
  canvas: fabricType.Canvas,
  color: ColorResult
) => {
  const activeObject = canvas.getActiveObject();

  if (activeObject) {
    if (activeObject.type === "activeSelection") {
      (activeObject as any).forEachObject((element: any) => {
        changeObjectColor(element, color);
      });
    } else {
      changeObjectColor(activeObject, color);
    }

    canvas.renderAll();
  }
};

const changeObjectColor = (object: any, color: ColorResult) => {
  if (object.type === "path") {
    object.set({ stroke: color.hex });
  }

  if (object.type === "rect" || object.type === "circle") {
    object.set({ fill: color.hex });
  }
};

export const lockAllObjects = (canvas: fabricType.Canvas): void => {
  canvas
    .getObjects()
    .map((object: fabricType.Object) => object.set("selectable", false));
};

export const unLockAllObjects = (canvas: fabricType.Canvas): void => {
  canvas
    .getObjects()
    .map((object: fabricType.Object) => object.set("selectable", true));
};
