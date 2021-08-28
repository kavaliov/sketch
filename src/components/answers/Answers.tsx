import React from "react";
import ReactDOM from "react-dom";
import { addUsedAnswer, removeUsedAnswer } from "duck/actions";
import { AnswerType } from "duck/types";
import { SketchContext } from "duck/context";
import { Answer } from "./components";
import { renderAnswer } from "./duck/operations";

interface AnswersType {
  target: any;
}

const Answers: React.FC<AnswersType> = ({ target }) => {
  const { state, canvas, dispatch } = React.useContext(SketchContext);
  const { answers, usedAnswers } = state;

  React.useEffect(() => {
    const dropHandler = (event: any): void => {
      event.e.preventDefault();
      const answer = JSON.parse(event.e.dataTransfer.getData("data"));
      renderAnswer(canvas, answer, event);
      dispatch(addUsedAnswer({ usedAnswer: answer.id }));
    };

    const undoRedoHandler = (e: any) => {
      if (e.object?.answerID) {
        if (
          e.actionType === "added" &&
          !usedAnswers.includes(e.object.answerID)
        ) {
          dispatch(addUsedAnswer({ usedAnswer: e.object.answerID }));
        }

        if (e.actionType === "removed") {
          dispatch(removeUsedAnswer({ usedAnswer: e.object.answerID }));
        }
      }
    };

    canvas.on("drop", dropHandler);
    canvas.on("history:undo", undoRedoHandler);
    canvas.on("history:redo", undoRedoHandler);

    return () => {
      canvas.off("drop", dropHandler);
      canvas.off("history:redo", undoRedoHandler);
      canvas.off("history:undo", undoRedoHandler);
    };
  }, [canvas, dispatch, usedAnswers]);

  return ReactDOM.createPortal(
    <>
      {answers
        .sort((a, b) => a.sort - b.sort)
        .filter((answer: AnswerType) => !usedAnswers.includes(`${answer.id}`))
        .map((answer: AnswerType, index: number) => (
          <Answer key={answer.id || index} answer={answer} />
        ))}
    </>,
    target.current
  );
};

export default Answers;
