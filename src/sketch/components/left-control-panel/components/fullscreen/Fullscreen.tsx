import React from "react";
import { Button } from "components";
import { setFullscreen } from "duck/actions";
import { AppContext } from "duck/context";
import fullscreenIcon from "./assets/fullscreen.svg";
import minimizeIcon from "./assets/minimize.svg";

const Fullscreen: React.FC = () => {
  const { canvas, state, dispatch } = React.useContext(AppContext);
  const { fullscreen, width, height } = state;

  const fullscreenHandler = () => {
    canvas.setDimensions({
      ...(!fullscreen
        ? {
            width: window.innerWidth,
            height: window.innerHeight,
          }
        : {
            width,
            height,
          }),
    });

    const zoom = window.innerWidth / width;
    canvas.setZoom(!fullscreen ? zoom : 1);
    dispatch(setFullscreen({ fullscreen: !fullscreen }));
  };

  return (
    <Button active={fullscreen} onClick={fullscreenHandler}>
      <img src={fullscreen ? minimizeIcon : fullscreenIcon} alt="" />
    </Button>
  );
};

export default Fullscreen;
