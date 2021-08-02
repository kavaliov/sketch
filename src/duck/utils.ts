import { fabric as FabricType } from "fabric";
import { FABRIC_SETTINGS } from "./constants";

export const getId = (length = 10): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const addOpacity = (hex: string, opacity: number) => {
  const tempHex = hex.replace("#", "");
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomPosition = () => {
  const center = {
    x: FABRIC_SETTINGS.CANVAS_WIDTH / 2,
    y: FABRIC_SETTINGS.CANVAS_HEIGHT / 2,
  };

  return {
    top: randomInt(center.y - 180, center.y + 70),
    left: randomInt(center.x - 350, center.x + 50),
  };
};

export const rgbToHex = (r: number, g: number, b: number): string =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

export const lockAllObjects = (canvas: FabricType.Canvas): void => {
  canvas.selection = false;
  canvas.getObjects().forEach((object: FabricType.Object) => {
    object.set("selectable", false);
    object.hoverCursor = "default";
  });
};

export const unLockAllObjects = (canvas: FabricType.Canvas): void => {
  canvas.selection = true;
  canvas.getObjects().forEach((object: FabricType.Object) => {
    object.set("selectable", true);
    object.hoverCursor = "move";
  });
};
