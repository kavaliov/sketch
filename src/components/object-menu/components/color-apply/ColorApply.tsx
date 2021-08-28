import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import { changeActiveObjectColor } from "duck/operations";

const ColorApply: React.FC = () => {
  const { canvas, state } = React.useContext(SketchContext);
  const { currentColor } = state;

  const setColorHandler = () => {
    changeActiveObjectColor(canvas, currentColor);
  };

  return (
    <Button
      onClick={setColorHandler}
      style={{ backgroundColor: currentColor }}
    />
  );
};

export default ColorApply;
