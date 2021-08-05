import React from "react";
import { Button } from "components";
import { setFullscreen } from "duck/actions";
import { CANVAS_SETTINGS } from "duck/constants";
import { AppContext } from "duck/context";
import fullscreenIcon from "./assets/fullscreen.svg";

const Fullscreen: React.FC = () => {
  const { canvas, state, dispatch } = React.useContext(AppContext);
  const { fullscreen } = state;

  const fullscreenHandler = () => {
    canvas.setDimensions({
      ...(!fullscreen
        ? {
            width: window.innerWidth,
            height: window.innerHeight,
          }
        : {
            width: CANVAS_SETTINGS.width,
            height: CANVAS_SETTINGS.height,
          }),
    });

    const zoom = window.innerWidth / CANVAS_SETTINGS.width;
    canvas.setZoom(!fullscreen ? zoom : 1);
    dispatch(setFullscreen({ fullscreen: !fullscreen }));
  };

  return (
    <Button active={fullscreen} onClick={fullscreenHandler}>
      <img src={fullscreenIcon} alt="" />
    </Button>
  );
};

export default Fullscreen;
