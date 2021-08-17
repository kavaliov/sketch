import React from "react";
import { FABRIC_SETTINGS } from "duck/constants";
import { getColor, renderGradient } from "./duck/operations";
import { calculateOffsetPosition } from "./duck/utils";
import styles from "./ColorPicker.module.css";

interface ColorPickerType {
  width: number;
  height: number;
  onChange?: (color: string) => any;
}

const ColorPicker: React.FC<ColorPickerType> = ({
  width,
  height,
  onChange,
}) => {
  const [color, setColor] = React.useState<string>(FABRIC_SETTINGS.START_COLOR);
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [positionX, setPositionX] = React.useState<number>(0);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    renderGradient(canvasRef.current, width, height);
    setColor(getColor(canvasRef.current, positionX));
  }, [height, positionX, width]);

  React.useEffect(() => {
    setColor(getColor(canvasRef.current, positionX));
  }, [positionX]);

  const mouseMoveHandler = (e: any) => {
    if (dragging && wrapperRef.current) {
      setPositionX(
        calculateOffsetPosition(wrapperRef.current, e.clientX, width)
      );
    }
  };

  const mouseUpHandler = (): void => {
    setDragging(false);
    if (typeof onChange === "function") {
      onChange(color);
    }
  };

  const canvasMouseDownHandler = (e: any): void => {
    setDragging(true);
    if (wrapperRef.current) {
      setPositionX(
        calculateOffsetPosition(wrapperRef.current, e.clientX, width)
      );
    }
  };

  const canvasMouseLeaveHandler = (e: any): void => {
    if (dragging) {
      setDragging(false);
      if (typeof onChange === "function") {
        onChange(color);
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={canvasMouseLeaveHandler}
      className={styles.wrapper}
      style={{ width, height }}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={canvasMouseDownHandler}
        width={width}
        height={height}
      />
      <button
        onMouseDown={() => setDragging(true)}
        onMouseUp={mouseUpHandler}
        className={styles.pointer}
        style={{ left: positionX, backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;
