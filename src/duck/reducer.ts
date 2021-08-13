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
  }))
  .handleAction(
    actions.setFullscreen,
    (state, { payload: { fullscreen } }) => ({
      ...state,
      fullscreen,
    })
  )
  .handleAction(actions.setWidth, (state, { payload: { width } }) => ({
    ...state,
    width,
  }))
  .handleAction(actions.setHeight, (state, { payload: { height } }) => ({
    ...state,
    height,
  }))
  .handleAction(actions.setAnswers, (state, { payload: { answers } }) => ({
    ...state,
    answers,
  }))
  .handleAction(
    actions.setUsedAnswers,
    (state, { payload: { usedAnswers } }) => ({
      ...state,
      usedAnswers,
    })
  )
  .handleAction(
    actions.addUsedAnswer,
    (state, { payload: { usedAnswer } }) => ({
      ...state,
      usedAnswers: [...state.usedAnswers, usedAnswer],
    })
  )
  .handleAction(
    actions.removeUsedAnswer,
    (state, { payload: { usedAnswer } }) => ({
      ...state,
      usedAnswers: state.usedAnswers.filter(
        (answer: string) => answer !== usedAnswer
      ),
    })
  );

export default appReducer;
