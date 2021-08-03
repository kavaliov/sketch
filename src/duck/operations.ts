import { fabric as FabricType } from "fabric";
import { FABRIC_SETTINGS } from "./constants";
import { addPencilBrush } from "./customBrushes";

const { fabric } = window;

export const setSketchSettings = (
  canvas: FabricType.Canvas | undefined
): void => {
  if (canvas) {
    // Initial canvas setup
    // @ts-ignore
    fabric.Object.prototype.cornerStyle = FABRIC_SETTINGS.CORNER_STYLE;
    fabric.Object.prototype.cornerSize = FABRIC_SETTINGS.CORNER_SIZE;
    canvas.selectionColor = FABRIC_SETTINGS.SELECTION_COLOR;
    canvas.selectionBorderColor = FABRIC_SETTINGS.SELECTION_BORDER_COLOR;
    canvas.selectionLineWidth = FABRIC_SETTINGS.SELECTION_LINE_WIDTH;
    addPencilBrush(fabric);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Backspace") {
        const selectedObject = canvas.getActiveObject();
        // @ts-ignore
        if (selectedObject && !selectedObject.isEditing) {
          removeSelectedObject(canvas, selectedObject);
        }
      }
    });
  }
};

export const removeSelectedObject = (
  canvas: FabricType.Canvas,
  selectedObject: any
) => {
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
  canvas: FabricType.Canvas,
  color: string
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

const changeObjectColor = (object: any, color: string) => {
  if (object.type === "path" && !object.shadow) {
    object.set({ stroke: color });
  }

  if (
    object.type === "rect" ||
    object.type === "circle" ||
    object.type === "i-text" ||
    object.fromSVG
  ) {
    object.set({ fill: color });
  }

  if (object.type === "path" && object.shadow) {
    object.shadow.color = color;
  }

  if (object.type === "image") {
    object.filters[0] = new fabric.Image.filters.BlendColor({
      color,
      mode: "tint",
    });
    object.applyFilters();
  }
};
