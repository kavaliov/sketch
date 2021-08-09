import { fabric as FabricType } from "fabric";

export const getPosition = (
  target: any,
  canvas: FabricType.Canvas
): { top: number; left: number } => {
  const center = target.getCenterPoint();
  const zoom = canvas.getZoom();
  const canvasHeight = canvas.getHeight();
  let top = (15 + center.y + (target.height * target.scaleY) / 2) * zoom;

  // change menu position from bottom to top
  if (top + 30 > canvasHeight) {
    top = (center.y - 95 - (target.height * target.scaleY) / 2) * zoom;
  }

  return {
    top,
    left: center.x * zoom,
  };
};
