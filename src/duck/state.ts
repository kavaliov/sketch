import { State } from "./types";
import { CANVAS_SETTINGS, FABRIC_SETTINGS } from "./constants";

const appState: State = {
  currentColor: FABRIC_SETTINGS.START_COLOR,
  mode: "hand",
  brushType: "pencil",
  fullscreen: false,
  width: CANVAS_SETTINGS.width,
  height: CANVAS_SETTINGS.height,
  answers: [],
  usedAnswers: [],
};

export default appState;
