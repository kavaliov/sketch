import { createReducer, ActionType } from "typesafe-actions";
import initialState from "./state";
import * as actions from "./actions";
import * as Types from "./types";

type Action = ActionType<typeof actions>;

const appReducer = createReducer<Types.State, Action>(
  initialState
).handleAction(
  actions.setCurrentColor,
  (state, { payload: { currentColor } }) => ({
    ...state,
    currentColor,
  })
);

export default appReducer;
