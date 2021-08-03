import React from "react";
import { Button, Panel } from "components";
import { AppContext } from "duck/context";
import { BACKGROUNDS, BACKGROUND_COLORS } from "./assets";
import starIcon from "./assets/picture.svg";
import styles from "./Background.module.css";

const { fabric } = window;

const Background: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas } = React.useContext(AppContext);

  const backgroundHandler = (src: string): void => {
    fabric.Image.fromURL(src, (img: any) => {
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.getWidth() / img.width,
        scaleY: canvas.getHeight() / img.height,
      });
    });
  };

  const backgroundColorHandler = (color: string): void => {
    canvas.setBackgroundImage(
      new fabric.Image(""),
      canvas.renderAll.bind(canvas)
    );
    canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>
        <img src={starIcon} alt="" />
      </Button>
      <Panel
        title="Background"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <div className={styles.backgroundList}>
          {BACKGROUNDS.map((background: string) => (
            <button
              onClick={() => backgroundHandler(background)}
              key={background}
              className={styles.background}
            >
              <img src={background} alt="" />
            </button>
          ))}
        </div>
        <div className={styles.backgroundList}>
          {BACKGROUND_COLORS.map((color: string) => (
            <button
              onClick={() => backgroundColorHandler(color)}
              key={color}
              className={styles.backgroundColor}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </Panel>
    </>
  );
};

export default Background;
