import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import copy from "./assets/copy.svg";

const Copy: React.FC = () => {
  const { canvas } = React.useContext(AppContext);

  const copyHandler = () => {
    canvas.getActiveObject().clone((cloned: any) => {
      canvas.discardActiveObject();
      cloned.set({
        top: cloned.top + 8,
        left: cloned.left + 8,
      });
      if (cloned.type === "activeSelection") {
        cloned.canvas = canvas;
        cloned.forEachObject((obj: any) => {
          canvas.add(obj);
        });
      } else {
        canvas.add(cloned);
      }
      canvas.setActiveObject(cloned);
      canvas.requestRenderAll();
    });
  };

  return (
    <Button onClick={copyHandler}>
      <img src={copy} alt="" />
    </Button>
  );
};

export default Copy;
