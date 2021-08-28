import React from "react";
import { Button } from "components/general-components";
import { insertChar } from "duck/operations";
import { SketchContext } from "duck/context";
import enterIcon from "./assets/enter.svg";

const LineBreak: React.FC = () => {
  const { canvas } = React.useContext(SketchContext);

  const breakHandler = (): void => {
    insertChar(canvas, '\n');
  };

  return (
    <Button onClick={breakHandler}>
      <img src={enterIcon} alt="" />
    </Button>
  );
};

export default LineBreak;
