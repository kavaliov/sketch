import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import { setMode } from "duck/actions";
import icon from "./assets/text.svg";
import { appendText } from "./duck/operations";

const Text: React.FC = () => {
  const { state, canvas, dispatch } = React.useContext(SketchContext);
  const { currentColor } = state;

  const textHandler = () => {
    appendText(canvas, currentColor);
    dispatch(setMode({ mode: "hand" }));
  };

  return (
    <Button onClick={textHandler}>
      <img src={icon} alt="" />
    </Button>
  );
};

export default Text;
