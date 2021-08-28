import { Dispatch } from "react";
import { fabric as FabricType } from "fabric";
import { addPencilBrush } from "../legacy/customBrushes";
import { aliSupport } from "../legacy/aliSupport";
import { FABRIC_SETTINGS } from "./constants";
import { addOpacity } from "./utils";
import { removeUsedAnswer } from "./actions";

const { fabric } = window;

export const setSketchSettings = (
  canvas: FabricType.Canvas | undefined,
  dispatch: Dispatch<any>
): void => {
  if (canvas) {
    // Initial canvas setup
    // @ts-ignore
    fabric.Object.prototype.cornerStyle = FABRIC_SETTINGS.CORNER_STYLE;
    fabric.Object.prototype.cornerSize = FABRIC_SETTINGS.CORNER_SIZE;
    canvas.selectionColor = FABRIC_SETTINGS.SELECTION_COLOR;
    canvas.selectionBorderColor = FABRIC_SETTINGS.SELECTION_BORDER_COLOR;
    canvas.selectionLineWidth = FABRIC_SETTINGS.SELECTION_LINE_WIDTH;
    // @ts-ignore
    canvas.setBackgroundColor("white", canvas.renderAll.bind(canvas), {
      erasable: false,
    });
    addPencilBrush();
    aliSupport();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Backspace") {
        const selectedObject = canvas.getActiveObject();
        // @ts-ignore
        if (selectedObject && !selectedObject.isEditing) {
          removeSelectedObject(canvas, selectedObject, dispatch);
        }
      }
    });
  }
};

export const removeSelectedObject = (
  canvas: FabricType.Canvas,
  selectedObject: any,
  dispatch: Dispatch<any>
) => {
  if (selectedObject && selectedObject.type === "activeSelection") {
    (selectedObject as any).forEachObject((element: any) => {
      canvas.remove(element);

      if (element.answerID) {
        dispatch(removeUsedAnswer({ usedAnswer: element.answerID }));
      }
    });
  } else {
    canvas.remove(selectedObject);
    if (selectedObject.answerID) {
      dispatch(removeUsedAnswer({ usedAnswer: selectedObject.answerID }));
    }
  }

  canvas.discardActiveObject().requestRenderAll();
};

export const changeActiveObjectColor = (
  canvas: FabricType.Canvas,
  color: string
) => {
  const activeObject = canvas.getActiveObject();

  if (activeObject) {
    if (
      activeObject.type === "activeSelection" ||
      activeObject.type === "group"
    ) {
      (activeObject as any).forEachObject((element: any) => {
        changeObjectColor(element, color);
      });
    } else {
      changeObjectColor(activeObject, color);
    }

    canvas.renderAll();
  }
};

const changeObjectColor = (object: any, color: string) => {
  if (
    (object.type === "path" || object.type === "line") &&
    !object.shadow &&
    object.brushType !== "marker"
  ) {
    object.set({ stroke: color });
  }

  if (object.type === "path" && object.brushType === "marker") {
    object.set({ stroke: addOpacity(color, 20) });
  }

  if (
    object.type === "rect" ||
    object.type === "circle" ||
    object.type === "ellipse" ||
    object.type === "triangle" ||
    object.type === "text" ||
    object.type === "i-text" ||
    object.fromSVG
  ) {
    object.set({ fill: color });
  }

  if (object.type === "path" && object.shadow) {
    object.set({ shadow: { ...object.shadow, color } });
  }

  if (object.type === "image") {
    object.filters[0] = new fabric.Image.filters.BlendColor({
      color,
      mode: "tint",
    });

    object.applyFilters();
  }
};

export const insertChar = (canvas: FabricType.Canvas, char: string): void => {
  const activeObject: any = canvas.getActiveObject();

  if (
    activeObject &&
    activeObject.type === "i-text" &&
    activeObject.isEditing
  ) {
    const caretStart = activeObject.selectionStart;
    const caretEnd = activeObject.selectionEnd;
    activeObject.insertChars(char, null, caretStart, caretEnd);
    activeObject.set({
      selectionStart: caretStart + 1,
      selectionEnd: caretStart + 1,
    });
    activeObject.exitEditing();
    activeObject.enterEditing();
    activeObject.fire("changed");
    canvas.renderAll();
  }
};
