// @ts-nocheck
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
        ...(activeObject.fromSVG ? { fromSVG: true } : {}),
        ...(activeObject.fromImgShape ? { fromImgShape: true } : {}),
        ...(activeObject.brushType
          ? { brushType: activeObject.brushType }
          : {}),
      });

      if (cloned.type === "activeSelection") {
        cloned.canvas = canvas;
        cloned.forEachObject((obj: any, index: number) => {
          const clonedObject = activeObject.getObjects()[index];

          if (clonedObject.fromSVG) {
            obj.set({
              fromSVG: true,
            });
          }
          if (clonedObject.brushType) {
            obj.set({
              brushType: clonedObject.brushType,
            });
          }
          if (clonedObject.fromImgShape) {
            obj.set({
              fromImgShape: true,
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
