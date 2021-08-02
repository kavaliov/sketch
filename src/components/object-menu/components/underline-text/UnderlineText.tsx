import React from "react";
import { Button } from "components";
import { AppContext } from "duck/context";
import underlineIcon from "./assets/underline.svg";

const UnderlineText: React.FC = () => {
  const [activated, setActivated] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    // @ts-ignore
    if (canvas.getActiveObject().underline) {
      setActivated(true);
    }
  }, [canvas]);

  const setUnderlineHandler = () => {
    const activeObject = canvas.getActiveObject();

    if (activated) {
      // @ts-ignore
      activeObject.set({ underline: false });
      setActivated(false);
    } else {
      // @ts-ignore
      activeObject.set({ underline: true });
      setActivated(true);
    }
    canvas.renderAll();
  };

  return (
    <Button active={activated} onClick={setUnderlineHandler}>
      <img src={underlineIcon} alt="" />
    </Button>
  );
};

export default UnderlineText;
