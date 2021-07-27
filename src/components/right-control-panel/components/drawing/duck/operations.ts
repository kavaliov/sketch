import { fabric } from "fabric";
import { BrushType } from "../../../../../duck/types";
import { addOpacity } from "../../../../../duck/utils";

export const changeCanvasBrush = (
  canvas: fabric.Canvas,
  brush: BrushType,
  brushSize: number,
  color: string
) => {
  if (brush === "marker" || brush === "magic" || brush === "pencil") {
    // @ts-ignore
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  }

  canvas.freeDrawingBrush.color = color;
  canvas.freeDrawingBrush.width = brushSize;

  if (brush === "marker") {
    canvas.freeDrawingBrush.color = addOpacity(color, 20);
  }

  if (brush === "magic") {
    canvas.freeDrawingBrush.color = "#fff";
    // @ts-ignore
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: 30,
      affectStroke: true,
      color,
    });
  }
};
