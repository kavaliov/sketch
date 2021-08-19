import { fabric as FabricType } from "fabric";
import { HistoryConfig } from "./types";

export const updateCanvasState = (
  canvas: FabricType.Canvas,
  historyConfig: HistoryConfig,
  setDisabled: any
) => {
  if (!historyConfig.undoStatus && !historyConfig.redoStatus) {
    const canvasAsJson = canvas.toJSON();
    if (
      historyConfig.currentStateIndex !== 0 &&
      historyConfig.currentStateIndex < historyConfig.canvasState.length - 1
    ) {
      const indexToBeInserted = historyConfig.currentStateIndex + 1;
      const numberOfElementsToRetain = indexToBeInserted + 1;
      historyConfig.canvasState[indexToBeInserted] = canvasAsJson;
      historyConfig.canvasState = historyConfig.canvasState.splice(
        0,
        numberOfElementsToRetain
      );
    } else {
      // @ts-ignore
      if (canvasAsJson.objects.length > 0) {
        historyConfig.canvasState.push(canvasAsJson);
      }
    }
    historyConfig.currentStateIndex = historyConfig.canvasState.length - 1;

    if (historyConfig.currentStateIndex !== -1) {
      setDisabled(() => ({
        undo: historyConfig.canvasState.length === 0,
        redo: true,
      }));
    }
  }
};

export const undo = (
  canvas: FabricType.Canvas,
  historyConfig: HistoryConfig,
  setDisabled: any
): void => {
  if (historyConfig.undoFinishedStatus) {
    if (historyConfig.currentStateIndex === -1) {
      historyConfig.undoStatus = false;
    } else {
      if (historyConfig.canvasState.length >= 1) {
        historyConfig.undoFinishedStatus = 0;
        if (historyConfig.currentStateIndex !== 0) {
          historyConfig.undoStatus = true;
          canvas.loadFromJSON(
            historyConfig.canvasState[historyConfig.currentStateIndex - 1],
            () => {
              fireEvent(
                canvas,
                historyConfig.canvasState[historyConfig.currentStateIndex],
                historyConfig.canvasState[historyConfig.currentStateIndex - 1],
                "undo"
              );
              canvas.renderAll();
              historyConfig.undoStatus = false;
              historyConfig.currentStateIndex -= 1;
              historyConfig.undoFinishedStatus = 1;
              setDisabled(() => ({
                undo: false,
                redo:
                  historyConfig.currentStateIndex ===
                  historyConfig.canvasState.length - 1,
              }));
            }
          );
        } else if (historyConfig.currentStateIndex === 0) {
          fireEvent(
            canvas,
            historyConfig.canvasState[historyConfig.currentStateIndex],
            { ...historyConfig.canvasState[0], objects: [] },
            "undo"
          );
          historyConfig.undoFinishedStatus = 1;
          canvas.remove(...canvas.getObjects());
          setDisabled(() => ({
            undo: true,
            redo: false,
          }));
          historyConfig.currentStateIndex = -1;
        }
      }
    }
  }
};

export const redo = (
  canvas: FabricType.Canvas,
  historyConfig: HistoryConfig,
  setDisabled: any
): void => {
  if (historyConfig.redoFinishedStatus) {
    if (
      historyConfig.currentStateIndex ===
        historyConfig.canvasState.length - 1 &&
      historyConfig.currentStateIndex !== -1
    ) {
      setDisabled((disableState: any) => ({
        ...disableState,
        redo: true,
      }));
    } else {
      if (
        historyConfig.canvasState.length > historyConfig.currentStateIndex &&
        historyConfig.canvasState.length !== 0
      ) {
        historyConfig.redoFinishedStatus = 0;
        historyConfig.redoStatus = true;
        canvas.loadFromJSON(
          historyConfig.canvasState[historyConfig.currentStateIndex + 1],
          () => {
            fireEvent(
              canvas,
              historyConfig.canvasState[historyConfig.currentStateIndex],
              historyConfig.canvasState[historyConfig.currentStateIndex + 1],
              "redo"
            );
            canvas.renderAll();
            historyConfig.redoStatus = false;
            historyConfig.currentStateIndex += 1;
            setDisabled(() => ({
              undo: historyConfig.currentStateIndex === -1,
              redo:
                historyConfig.currentStateIndex ===
                  historyConfig.canvasState.length - 1 &&
                historyConfig.currentStateIndex !== -1,
            }));
            historyConfig.redoFinishedStatus = 1;
          }
        );
      }
    }
  }
};

const fireEvent = (
  canvas: FabricType.Canvas,
  prevState: any,
  newState: any,
  eventType: "redo" | "undo"
): void => {
  const delta: any = {};
  const prevObjects = prevState?.objects || [];
  const newObjects = newState.objects;

  if (newObjects.length > prevObjects.length) {
    delta.actionType = "added";

    delta.object = newObjects.filter(
      (newObject: any) =>
        !prevObjects.find(
          (prevObject: any) =>
            JSON.stringify(prevObject) === JSON.stringify(newObject)
        )
    )[0];
  }

  if (newObjects.length < prevObjects.length) {
    delta.actionType = "removed";

    delta.object = prevObjects.filter(
      (prevObject: any) =>
        !newObjects.find(
          (newObject: any) =>
            JSON.stringify(prevObject) === JSON.stringify(newObject)
        )
    )[0];
  }

  if (newObjects.length === prevObjects.length) {
    delta.actionType = "modified";

    newObjects.forEach((object: any, index: number) => {
      if (JSON.stringify(object) !== JSON.stringify(prevObjects[index])) {
        delta.object = object;
      }
    });
  }

  if (newObjects.length === 0) {
    delta.actionType = "removed";
    delta.object = prevObjects[0];
  }

  canvas.fire(`history:${eventType}`, { ...delta });
};
