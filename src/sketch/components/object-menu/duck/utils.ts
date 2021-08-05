export const getPosition = (
  target: any,
  zoom: number
): { top: number; left: number } => {
  const center = target.getCenterPoint();

  return {
    top: (15 + center.y + (target.height * target.scaleY) / 2) * zoom,
    left: center.x * zoom,
  };
};
