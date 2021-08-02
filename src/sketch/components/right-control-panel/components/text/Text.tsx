import React from "react";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import { Button } from "components";
import icon from "./assets/text.svg";
import { appendText } from "./duck/operations";

const Text: React.FC = () => {
  const { state, canvas, dispatch } = React.useContext(AppContext);
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
