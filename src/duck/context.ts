import * as React from "react";
import { SketchContext as SketchContextType } from "./types";

export const SketchContext = React.createContext<SketchContextType>(
  null as any
);
