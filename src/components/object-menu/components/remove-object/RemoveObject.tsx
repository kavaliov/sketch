import React from "react";
import { Button } from "components/general-components";
import { removeSelectedObject } from "duck/operations";
import { SketchContext } from "duck/context";
import remove from "./assets/delete.svg";

const RemoveObject: React.FC = () => {
  const { canvas, dispatch } = React.useContext(SketchContext);

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
