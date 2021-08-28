export interface HistoryConfig {
  canvasState: any[];
  currentStateIndex: number;
  undoStatus: boolean;
  redoStatus: boolean;
  undoFinishedStatus: number;
  redoFinishedStatus: number;
}
