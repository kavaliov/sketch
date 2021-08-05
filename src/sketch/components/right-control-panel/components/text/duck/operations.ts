import { fabric as FabricType } from "fabric";
import { randomPosition } from "duck/utils";

const { fabric } = window;

export const appendText = (canvas: FabricType.Canvas, color: string): void => {
  const position = randomPosition();
  const itext = new fabric.IText("", {
    ...position,
    fontSize: 28,
    lineHeight: 0.95,
    fill: color,
    fontFamily: "Tahoma",
    cursorColor: "black",
    textAlign: "center",
  });

  canvas.add(itext);
  canvas.setActiveObject(itext);
  itext.enterEditing();
  canvas.renderAll();
};
