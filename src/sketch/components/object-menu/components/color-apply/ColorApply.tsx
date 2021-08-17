import React from "react";
import { AppContext } from "duck/context";
import { changeActiveObjectColor } from "duck/operations";
import { Button } from "components";

const ColorApply: React.FC = () => {
  const { canvas, state } = React.useContext(AppContext);
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
