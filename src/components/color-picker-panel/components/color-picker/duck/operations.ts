import { GRADIENT_COLORS } from "./constants";
import { rgbToHex } from "duck/utils";

export const renderGradient = (
  canvas: HTMLCanvasElement | null,
  width: number,
  height: number
): void => {
  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, 0);

      GRADIENT_COLORS.forEach((color: string, index: number) => {
        if (index < GRADIENT_COLORS.length - 1) {
          gradient.addColorStop(index / (GRADIENT_COLORS.length - 1), color);
        } else {
          gradient.addColorStop(1, color);
        }
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
  }
};

export const getColor = (canvas: HTMLCanvasElement | null, left: number) => {
  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const { data } = ctx.getImageData(left, 10, 1, 1);
      return rgbToHex(data[0], data[1], data[2]);
    }
  }

  return "#000";
};
