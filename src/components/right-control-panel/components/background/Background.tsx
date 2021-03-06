import React from "react";
import { Button, Panel } from "components/general-components";
import { SketchContext } from "duck/context";
import { BACKGROUNDS, BACKGROUND_COLORS } from "./assets";
import starIcon from "./assets/picture.svg";
import styles from "./Background.module.css";

const { fabric } = window;

const Background: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  const { canvas, state } = React.useContext(SketchContext);
  const { width, height } = state;

  const backgroundHandler = (src: string): void => {
    fabric.Image.fromURL(src, (img: any) => {
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: width / img.width,
        scaleY: height / img.height,
        // @ts-ignore
        erasable: false,
      });
    });
  };

  const backgroundColorHandler = (color: string): void => {
    canvas.setBackgroundImage(
      new fabric.Image(""),
      canvas.renderAll.bind(canvas)
    );
    // @ts-ignore
    canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas), {
      erasable: false,
    });
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
