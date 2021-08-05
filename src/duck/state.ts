import { State } from "./types";
import { FABRIC_SETTINGS } from "./constants";

const appState: State = {
  currentColor: FABRIC_SETTINGS.START_COLOR,
  mode: "hand",
  brushType: "pencil",
  fullscreen: false,
};

export default appState;
