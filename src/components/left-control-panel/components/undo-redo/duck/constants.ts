import { HistoryConfig } from "./types";

export const initialConfig: HistoryConfig = {
  canvasState: [],
  currentStateIndex: -1,
  undoStatus: false,
  redoStatus: false,
  undoFinishedStatus: 1,
  redoFinishedStatus: 1,
};
