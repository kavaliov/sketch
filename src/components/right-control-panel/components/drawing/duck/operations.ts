// @ts-nocheck
import { fabric as FabricType } from "fabric";
import { BrushType } from "duck/types";
import { addOpacity } from "duck/utils";

const { fabric } = window;

export const changeCanvasBrush = (
  canvas: FabricType.Canvas,
  brush: BrushType,
  brushSize: number,
  color: string
) => {
  if (brush === "marker" || brush === "magic" || brush === "pencil") {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  }

  if (brush === "eraser") {
    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
  } else {
    canvas.freeDrawingBrush.color = color;
  }

  if (brush === "pen") {
    canvas.freeDrawingBrush = new fabric.CrayonBrush(canvas);
  }

  if (brush === "marker") {
    canvas.freeDrawingBrush.color = addOpacity(color, 20);
  }

  if (brush === "magic") {
    canvas.freeDrawingBrush.color = "#fff";
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: 30,
      affectStroke: true,
      color,
    });
  }

  canvas.freeDrawingBrush.width = brushSize;
};
