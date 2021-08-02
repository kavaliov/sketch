import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import icon from "./assets/hand.svg";

const Hand: React.FC = () => {
  const { state, dispatch } = React.useContext(AppContext);

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
