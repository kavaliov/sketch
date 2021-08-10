export const calculateOffsetPosition = (
  wrapper: HTMLDivElement,
  clientX: number,
  width: number
): number => {
  const elemRect = wrapper.getBoundingClientRect();

  const offset = clientX - elemRect.left;
  if (offset < 0) {
    return 0;
  }

  if (offset > width) {
    return width;
  }

  return offset;
};
