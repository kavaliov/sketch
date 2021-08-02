import React from "react";
import { AppContext } from "duck/context";
import { Button } from "components";
import icon from "./assets/text.svg";
import { appendText } from "./duck/operations";

const Text: React.FC = () => {
  const { state, canvas } = React.useContext(AppContext);
  const { currentColor } = state;

  const textHandler = () => {
    appendText(canvas, currentColor);
  };

  return (
    <Button onClick={textHandler}>
      <img src={icon} alt="" />
    </Button>
  );
};

export default Text;
