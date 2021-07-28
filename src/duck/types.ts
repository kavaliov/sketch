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

export interface State {
  currentColor: string;
  mode: Mode;
  brushType: BrushType;
}

export interface Range {
  min: number;
  max: number;
}