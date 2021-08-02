import * as React from "react";
import { AppContext as AppContextType } from "./types";

export const AppContext = React.createContext<AppContextType>(null as any);
