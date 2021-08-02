import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import alignLeftIcon from "./assets/align-left.svg";
import alignCenterIcon from "./assets/align-center.svg";
import alignRightIcon from "./assets/align-right.svg";

const AlignText: React.FC = () => {
  const [align, setAlign] = React.useState("center");
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    // @ts-ignore
    setAlign(canvas.getActiveObject().textAlign);
  }, [canvas]);

  const alignHandler = (newAlign: string) => {
    setAlign(newAlign);
    // @ts-ignore
    canvas.getActiveObject().set({ textAlign: newAlign });
    canvas.renderAll();
  };

  return (
    <>
      <Button active={align === "left"} onClick={() => alignHandler("left")}>
        <img src={alignLeftIcon} alt="" />
      </Button>
      <Button
        active={align === "center"}
        onClick={() => alignHandler("center")}
      >
        <img src={alignCenterIcon} alt="" />
      </Button>
      <Button active={align === "right"} onClick={() => alignHandler("right")}>
        <img src={alignRightIcon} alt="" />
      </Button>
    </>
  );
};

export default AlignText;
