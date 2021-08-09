// @ts-nocheck
import { fabric } from "fabric";

export const insertChar = (canvas: fabric.Canvas, char: string): void => {
  const activeObject = canvas.getActiveObject();

  if (
    activeObject &&
    activeObject.type === "i-text" &&
    activeObject.isEditing
  ) {
    const caretStart = activeObject.selectionStart;
    const caretEnd = activeObject.selectionEnd;
    activeObject.insertChars(char, null, caretStart, caretEnd);
    activeObject.selectionStart = caretStart + 1;
    activeObject.selectionEnd = caretStart + 1;
    canvas.renderAll();
  }
};
