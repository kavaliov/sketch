import { fabric as FabricType } from "fabric";

export const updateCanvasState = (
  canvas: FabricType.Canvas,
  history: any[],
  historyIndex: number,
  setHistory: any,
  setHistoryIndex: any
) => {
  if (historyIndex < history.length - 1) {
    setHistory([...history.slice(0, historyIndex + 1), canvas.toJSON()]);
    setHistoryIndex(historyIndex + 1);
  } else if (
    JSON.stringify(canvas.toJSON()) !==
    JSON.stringify(history[history.length - 1])
  ) {
    setHistory([...history, canvas.toJSON()]);
    setHistoryIndex(historyIndex + 1);
  }
};

export const fireEvent = (
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

  canvas.fire(`history:${eventType}`, delta);
};
