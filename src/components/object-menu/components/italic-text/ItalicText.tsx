import React from "react";
import { Button } from "components/general-components";
import { SketchContext } from "duck/context";
import italicIcon from "./assets/italic.svg";

const ItalicText: React.FC = () => {
  const [activated, setActivated] = React.useState(false);
  const { canvas } = React.useContext(SketchContext);

  React.useEffect(() => {
    // @ts-ignore
    if (canvas.getActiveObject().fontStyle === "italic") {
      setActivated(true);
    }
  }, [canvas]);

  const setItalicHandler = () => {
    const activeObject = canvas.getActiveObject();

    if (activated) {
      // @ts-ignore
      activeObject.set({ fontStyle: "normal" });
      setActivated(false);
    } else {
      // @ts-ignore
      activeObject.set({ fontStyle: "italic" });
      setActivated(true);
    }
    canvas.renderAll();
  };

  return (
    <Button active={activated} onClick={setItalicHandler}>
      <img src={italicIcon} alt="" />
    </Button>
  );
};

export default ItalicText;
