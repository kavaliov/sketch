import React from "react";
import { Button, Panel, Select } from "components";
import { AppContext } from "duck/context";
import { setMode } from "duck/actions";
import starIcon from "./assets/star.svg";
import { SHAPES } from "./shapes";
import { FRUITS } from "./fruits";
import { drawImg } from "./duck/operations";
import styles from "./Figures.module.css";

const figures: any = {
  shapes: SHAPES,
  fruits: FRUITS,
};

const Figures: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const [figuresType, setFiguresType] = React.useState("shapes");
  const { canvas, dispatch } = React.useContext(AppContext);

  const shapeClickHandler = (src: string) => {
    dispatch(setMode({ mode: "hand" }));
    drawImg(canvas, src, figuresType);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>
        <img src={starIcon} alt="" />
      </Button>
      <Panel
        title="Image Library"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Select
          className={styles.select}
          onChange={(e: any) => setFiguresType(e.target.value)}
        >
          <option value="shapes">Shapes</option>
          <option value="fruits">Fruits</option>
        </Select>
        <div className={styles.shapeList}>
          {figures[figuresType].map((shape: any) => (
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
