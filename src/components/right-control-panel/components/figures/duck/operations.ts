import { fabric as FabricType } from "fabric";
import { randomPosition } from "duck/utils";

const { fabric } = window;

export const drawImg = (
  canvas: FabricType.Canvas,
  src: string,
  type: string
) => {
  const position = randomPosition();
  fabric.loadSVGFromURL(src, (objects, options) => {
    let obj = fabric.util.groupSVGElements(objects, options);
    obj.set({
      ...position,
      ...(type !== "shapes" ? { fromImgShape: true } : {}),
    });
    obj.scaleToWidth(90);
    canvas.add(obj);
    canvas.setActiveObject(obj);
    canvas.renderAll();
  });
};
