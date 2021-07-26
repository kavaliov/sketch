import { createAction } from "typesafe-actions";
import { Mode } from "./types";

export const setCurrentColor = createAction("SKETCH/SET_CURRENT_COLOR")<{
  currentColor: string;
}>();

export const setMode = createAction("SKETCH/SET_MODE")<{
  mode: Mode;
}>();
