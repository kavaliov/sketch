import React, { CSSProperties } from "react";
import { AnswerType } from "duck/types";
import styles from "./Answer.module.css";

interface AnswerProps {
  answer: AnswerType;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const style: CSSProperties = {};
  if (answer.width) {
    style.width = `${answer.width}px`;
  }
  if (answer.height) {
    style.height = `${answer.height}px`;
  }
  if (answer.type === "textbox") {
    if (answer.options.fontSize) {
      style.fontSize = `${answer.options.fontSize}px`;
    }
    if (answer.options.fontFamily) {
      style.fontFamily = answer.options.fontFamily;
    }
    if (answer.options.fill) {
      style.color = answer.options.fill;
    }
  }

  const dragHandler = (dragEvent: any) => {
    const offset = dragEvent.target.getBoundingClientRect();

    dragEvent.dataTransfer.setData(
      "data",
      JSON.stringify({
        ...answer,
        ...{
          offsetLeft: dragEvent.clientX - offset.left,
          offsetTop: dragEvent.clientY - offset.top,
        },
      })
    );
  };

  return (
    <div
      draggable
      style={style}
      onDragStart={dragHandler}
      className={styles.answer}
    >
      {answer.type === "image" ? (
        <img
          src={answer.value}
          width={answer.width}
          height={answer.height}
          alt=""
        />
      ) : (
        <span dangerouslySetInnerHTML={{ __html: answer.value || "" }} />
      )}
    </div>
  );
};

export default Answer;
