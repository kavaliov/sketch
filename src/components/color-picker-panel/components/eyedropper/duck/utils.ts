// @ts-nocheck
import { rgbToHex } from "duck/utils";
import { fabric as FabricType } from "fabric";

const { fabric } = window;

export const getColorOfThePointOnTheCanvas = (
  canvas: FabricType.Canvas,
  x: number,
  y: number
) => {
  let ctx = canvas.getContext();
  const { data } = ctx.getImageData(
    Math.round(
      (x + canvas.viewportTransform[4]) *
        fabric.devicePixelRatio *
        canvas.getZoom()
    ),
    Math.round(
      (y + canvas.viewportTransform[5]) *
        fabric.devicePixelRatio *
        canvas.getZoom()
    ),
    1,
    1
  );

  return rgbToHex(data[0], data[1], data[2]);
};
