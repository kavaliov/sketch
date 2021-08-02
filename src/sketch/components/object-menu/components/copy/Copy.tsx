import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import copy from "./assets/copy.svg";

const Copy: React.FC = () => {
  const { canvas } = React.useContext(AppContext);

  const copyHandler = () => {
    const activeObject = canvas.getActiveObject();
    activeObject.clone((cloned: any) => {
      canvas.discardActiveObject();
      cloned.set({
        top: cloned.top + 8,
        left: cloned.left + 8,
        // @ts-ignore
        ...(activeObject.fromSVG ? { fromSVG: true } : {}),
      });

      if (cloned.type === "activeSelection") {
        cloned.canvas = canvas;
        cloned.forEachObject((obj: any, index: number) => {
          // @ts-ignore
          if (activeObject.getObjects()[index].fromSVG) {
            obj.set({
              fromSVG: true,
            });
          }
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
