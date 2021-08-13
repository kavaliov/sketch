import { createAction } from "typesafe-actions";
import { Mode, BrushType, AnswerType } from "./types";

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

export const setWidth = createAction("SKETCH/SET_WIDTH")<{
  width: number;
}>();

export const setHeight = createAction("SKETCH/SET_HEIGHT")<{
  height: number;
}>();

export const setAnswers = createAction("SKETCH/SET_ANSWERS")<{
  answers: AnswerType[];
}>();

export const setUsedAnswers = createAction("SKETCH/SET_USED_ANSWERS")<{
  usedAnswers: string[];
}>();

export const addUsedAnswer = createAction("SKETCH/ADD_USED_ANSWER")<{
  usedAnswer: string;
}>();

export const removeUsedAnswer = createAction("SKETCH/REMOVE_USED_ANSWER")<{
  usedAnswer: string;
}>();
