import React from "react";
import { fabric } from "fabric";

export type AnyDispatch = React.Dispatch<any>;

export type Mode = "circle" | "drawing" | "hand" | "rect";

export type BrushType = "pencil";

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
