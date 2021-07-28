import React from "react";
import { Button, Panel } from "components";
import { AppContext } from "duck/context";
import pic from "./assets/picture.svg";
import { SHAPES } from "./shapes";
import { drawShape } from "./duck/operations";
import styles from "./Figures.module.css";

const Figures: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

  const shapeClickHandler = (src: string) => {
    drawShape(canvas, src);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>
        <img src={pic} alt="" />
      </Button>
      <Panel opened={opened} onClose={() => setOpened(false)}>
        <div className={styles.shapeList}>
          {SHAPES.map((shape: any) => (
            <button
              onClick={() => shapeClickHandler(shape.src)}
              key={shape.title}
              className={styles.shape}
            >
              <img src={shape.src} alt="" />
            </button>
          ))}
        </div>
      </Panel>
    </>
  );
};

export default Figures;
