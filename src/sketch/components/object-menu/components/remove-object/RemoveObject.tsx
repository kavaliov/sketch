import React from "react";
import { Button } from "components";
import { removeSelectedObject } from "duck/operations";
import remove from "./assets/delete.svg";
import { AppContext } from "duck/context";

const RemoveObject: React.FC = () => {
  const { canvas, dispatch } = React.useContext(AppContext);

  const removeHandler = () => {
    const activeObject = canvas.getActiveObject();
    removeSelectedObject(canvas, activeObject, dispatch);
  };

  return (
    <Button onClick={removeHandler}>
      <img src={remove} alt="" />
    </Button>
  );
};

export default RemoveObject;
