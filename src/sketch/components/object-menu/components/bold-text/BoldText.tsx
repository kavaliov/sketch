import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import boldIcon from "./assets/bold.svg";

const BoldText: React.FC = () => {
  const [activated, setActivated] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    // @ts-ignore
    if (canvas.getActiveObject().fontWeight === "bold") {
      setActivated(true);
    }
  }, [canvas]);

  const setBoldHandler = () => {
    const activeObject = canvas.getActiveObject();

    if (activated) {
      // @ts-ignore
      activeObject.set({ fontWeight: "normal" });
      setActivated(false);
    } else {
      // @ts-ignore
      activeObject.set({ fontWeight: "bold" });
      setActivated(true);
    }
    canvas.renderAll();
  };

  return (
    <Button active={activated} onClick={setBoldHandler}>
      <img src={boldIcon} alt="" />
    </Button>
  );
};

export default BoldText;
