import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import { setMode } from "duck/actions";
import icon from "./assets/hand.svg";

const Hand: React.FC = () => {
  const { state, dispatch } = React.useContext(SketchContext);

  const clickHandler = () => {
    dispatch(setMode({ mode: "hand" }));
  };

  return (
    <Button onClick={clickHandler} active={state.mode === "hand"}>
      <img src={icon} alt="" />
    </Button>
  );
};

export default Hand;
