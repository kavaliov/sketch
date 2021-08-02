import React from "react";
import { Button, Panel } from "components";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import pic from "./assets/picture.svg";
import { SHAPES } from "./shapes";
import { drawImg } from "./duck/operations";
import styles from "./Figures.module.css";

const Figures: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas, dispatch } = React.useContext(AppContext);

  const shapeClickHandler = (src: string) => {
    dispatch(setMode({ mode: "hand" }));
    drawImg(canvas, src);
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
