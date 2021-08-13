import React from "react";
import { fabric as FabricType } from "fabric";

export type AnyDispatch = React.Dispatch<any>;

export type Mode = "drawing" | "hand";

export type BrushType = "eraser" | "marker" | "magic" | "pencil" | "pen" | "";

export interface AppContext {
  canvas: FabricType.Canvas;
  state: State;
  dispatch: AnyDispatch;
}

export interface AnswerType {
  id: number | string;
  sort: number;
  type: "image" | "textbox" | "svg";
  value?: string;
  width: number;
  height: number;
  options: {
    width?: number;
    height?: number;
    fontSize?: number;
    fontFamily?: string;
    fill?: string;
  };
  selected?: boolean;
}

export interface State {
  currentColor: string;
  mode: Mode;
  brushType: BrushType;
  fullscreen: boolean;
  width: number;
  height: number;
  answers: AnswerType[];
  usedAnswers: string[];
}

export interface Range {
  min: number;
  max: number;
}
