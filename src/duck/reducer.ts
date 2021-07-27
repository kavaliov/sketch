import { createReducer, ActionType } from "typesafe-actions";
import initialState from "./state";
import * as actions from "./actions";
import * as Types from "./types";

type Action = ActionType<typeof actions>;

const appReducer = createReducer<Types.State, Action>(initialState)
  .handleAction(
    actions.setCurrentColor,
    (state, { payload: { currentColor } }) => ({
      ...state,
      currentColor,
    })
  )
  .handleAction(actions.setBrush, (state, { payload: { brushType } }) => ({
    ...state,
    brushType,
  }))
  .handleAction(actions.setMode, (state, { payload: { mode } }) => ({
    ...state,
    mode,
  }));

export default appReducer;
