import React from "react";
import { insertChar } from "duck/operations";
import { AppContext } from "duck/context";
import { Button } from "components";
import enterIcon from "./assets/enter.svg";

const LineBreak: React.FC = () => {
  const { canvas } = React.useContext(AppContext);

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
