import { randomPosition } from "duck/utils";
import { fabric as FabricType } from "fabric";

const { fabric } = window;

export const insertFraction = (
  canvas: FabricType.Canvas,
  currentColor: string,
  numerator: string,
  denominator: string
): void => {
  if (numerator && denominator) {
    const length =
      numerator.length > denominator.length
        ? numerator.length
        : denominator.length;
    const viewBoxWidth = length * 12;
    const position = randomPosition();
    const svgContainer = `<svg viewBox="0 0 ${viewBoxWidth} 85">
            <line x1="0" y1="45" x2="${viewBoxWidth}" y2="45" stroke="${currentColor}" stroke-width="2" />
            <text text-anchor="middle" x="${
              viewBoxWidth / 2
            }" y="38" font-size="24px" fill="${currentColor}">${numerator}</text>
            <text text-anchor="middle" x="${
              viewBoxWidth / 2
            }" y="70" font-size="24px" fill="${currentColor}">${denominator}</text>
        </svg>`;

    fabric.loadSVGFromString(svgContainer, (objects, options) => {
      let obj = fabric.util.groupSVGElements(objects, options);
      obj.set({
        ...position,
      });
      canvas.add(obj);
      canvas.setActiveObject(obj);
      canvas.renderAll();
    });
  }
};
