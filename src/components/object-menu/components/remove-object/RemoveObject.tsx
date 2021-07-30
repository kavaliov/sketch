import React from "react";
import { Button } from "components";
import { removeSelectedObject } from "duck/operations";
import remove from "./assets/delete.svg";
import { AppContext } from "duck/context";

const RemoveObject: React.FC = () => {
  const { canvas } = React.useContext(AppContext);
  const removeHandler = () => {
    removeSelectedObject(canvas);
  };

  return (
    <Button onClick={removeHandler}>
      <img src={remove} alt="" />
    </Button>
  );
};

export default RemoveObject;
