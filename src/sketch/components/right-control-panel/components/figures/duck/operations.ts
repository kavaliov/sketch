import { fabric as FabricType } from "fabric";
import { randomPosition } from "duck/utils";

const { fabric } = window;

export const drawImg = (canvas: FabricType.Canvas, src: string) => {
  const position = randomPosition();
  fabric.loadSVGFromURL(src, (objects) => {
    let obj = fabric.util.groupSVGElements(objects);
    obj.set({ ...position });
    canvas.add(obj);
    canvas.setActiveObject(obj);
    canvas.renderAll();
  });
};