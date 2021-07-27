import React from "react";
import { fabric } from "fabric";

export type AnyDispatch = React.Dispatch<any>;

export type Mode = "drawing" | "hand";

export type BrushType = "eraser" | "marker" | "magic" | "pencil" | "pen" | "";

export interface AppContext {
  canvas: fabric.Canvas;
  state: State;
  dispatch: AnyDispatch;
}

export interface State {
  currentColor: string;
  mode: Mode;
  brushType: BrushType;
}
