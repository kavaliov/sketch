import { fabric as FabricType } from "fabric";

export const removeEmptyTextbox = (
  canvas: FabricType.Canvas,
  textbox: any
): any => {
  if (textbox.text === "") {
    canvas.remove(textbox);
    canvas.renderAll();
  }
};
