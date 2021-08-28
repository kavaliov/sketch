import { createStandardAction } from "typesafe-actions";
import { Mode, BrushType, AnswerType } from "./types";

export const setCurrentColor = createStandardAction(
  "SKETCH/SET_CURRENT_COLOR"
)<{
  currentColor: string;
}>();

export const setMode = createStandardAction("SKETCH/SET_MODE")<{
  mode: Mode;
}>();

export const setBrush = createStandardAction("SKETCH/SET_BRUSH")<{
  brushType: BrushType;
}>();

export const setFullscreen = createStandardAction("SKETCH/SET_FULLSCREEN")<{
  fullscreen: boolean;
}>();

export const setWidth = createStandardAction("SKETCH/SET_WIDTH")<{
  width: number;
}>();

export const setHeight = createStandardAction("SKETCH/SET_HEIGHT")<{
  height: number;
}>();

export const setAnswers = createStandardAction("SKETCH/SET_ANSWERS")<{
  answers: AnswerType[];
}>();

export const setUsedAnswers = createStandardAction("SKETCH/SET_USED_ANSWERS")<{
  usedAnswers: string[];
}>();

export const addUsedAnswer = createStandardAction("SKETCH/ADD_USED_ANSWER")<{
  usedAnswer: string;
}>();

export const removeUsedAnswer = createStandardAction(
  "SKETCH/REMOVE_USED_ANSWER"
)<{
  usedAnswer: string;
}>();
