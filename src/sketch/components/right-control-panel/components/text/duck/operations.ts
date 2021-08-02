import { fabric as FabricType } from "fabric";
import { randomPosition } from "duck/utils";

const { fabric } = window;

export const appendText = (canvas: FabricType.Canvas, color: string): void => {
  const position = randomPosition();
  const textBox = new fabric.IText("", {
    ...position,
    fontSize: 28,
    lineHeight: 0.95,
    fill: color,
    fontFamily: "Tahoma",
    cursorColor: "black",
    textAlign: "center",
  });

  textBox.enterEditing();
  canvas.add(textBox);
  canvas.setActiveObject(textBox);
  canvas.renderAll();
};
