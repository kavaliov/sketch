export const getPosition = (target: any): { top: number; left: number } => {
  const center = target.getCenterPoint();

  return {
    top: 15 + center.y + (target.height * target.scaleY) / 2,
    left: center.x,
  };
};
