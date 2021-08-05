import { createAction } from "typesafe-actions";
import { Mode, BrushType } from "./types";

export const setCurrentColor = createAction("SKETCH/SET_CURRENT_COLOR")<{
  currentColor: string;
}>();

export const setMode = createAction("SKETCH/SET_MODE")<{
  mode: Mode;
}>();

export const setBrush = createAction("SKETCH/SET_BRUSH")<{
  brushType: BrushType;
}>();

export const setFullscreen = createAction("SKETCH/SET_FULLSCREEN")<{
  fullscreen: boolean;
}>();
