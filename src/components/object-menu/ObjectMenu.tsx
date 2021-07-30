import React from "react";
import { AppContext } from "duck/context";
import { getPosition } from "./duck/utils";
import { CurrentColor, RemoveObject, Copy } from "./components";
import styles from "./ObjectMenu.module.css";

const ObjectMenu: React.FC = () => {
  const [selected, setSelected] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const { canvas } = React.useContext(AppContext);

  React.useEffect(() => {
    const movingHandler = (e: any) => {
      setPosition(getPosition(e.transform.target));
    };

    const selectHandler = (e: any) => {
      if (e.target) {
        setSelected(true);
        setPosition(getPosition(e.target));
        e.target.on("moving", movingHandler);
        e.target.on("scaling", movingHandler);
      }
    };

    canvas.on("selection:created", selectHandler);
    canvas.on("selection:updated", selectHandler);

    canvas.on("selection:cleared", (e: any) => {
      setSelected(false);
      if (e.deselected) {
        e.deselected[0].off("moving", movingHandler);
        e.deselected[0].off("scaling", movingHandler);
      }
    });
  }, [canvas]);

  return (
    <>
      {selected && (
        <div style={{ ...position }} className={styles.wrapper}>
          <CurrentColor />
          <RemoveObject />
          <Copy />
        </div>
      )}
    </>
  );
};

export default ObjectMenu;
