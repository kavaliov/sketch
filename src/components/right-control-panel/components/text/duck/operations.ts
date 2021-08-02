import { fabric as FabricType } from "fabric";
import { randomPosition } from "duck/utils";

const { fabric } = window;

export const appendText = (canvas: FabricType.Canvas, color: string): void => {
  const position = randomPosition();
  const textBox = new fabric.Textbox("", {
    ...position,
    fontSize: 28,
    lineHeight: 0.8,
    width: 150,
    height: 40,
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
