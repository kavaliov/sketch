import React from "react";
import ReactDOM from "react-dom";
import { addUsedAnswer } from "duck/actions";
import { AnswerType } from "duck/types";
import { AppContext } from "duck/context";
import { Answer } from "./components";
import { renderAnswer } from "./duck/operations";

interface AnswersType {
  target: any;
}

const Answers: React.FC<AnswersType> = ({ target }) => {
  const { state, canvas, dispatch } = React.useContext(AppContext);
  const { answers, usedAnswers } = state;

  React.useEffect(() => {
    canvas.on("drop", (event: any) => {
      event.e.preventDefault();
      const answer = JSON.parse(event.e.dataTransfer.getData("data"));
      renderAnswer(canvas, answer, event);
      dispatch(addUsedAnswer({ usedAnswer: answer.id }));
    });
  }, [canvas, dispatch]);

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
