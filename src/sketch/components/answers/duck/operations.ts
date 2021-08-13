import { fabric as FabricType } from "fabric";

const { fabric } = window;

export const renderAnswer = (
  canvas: FabricType.Canvas,
  answer: any,
  event: any
): void => {
  const options = {
    ...answer.options,
    answerID: answer.id,
    left: event.e.offsetX - answer.offsetLeft,
    top: event.e.offsetY - answer.offsetTop,
  };

  let type = answer.type;

  // Check if string contains HTML tags, and if so, change type to "svg"
  if (type === "textbox" && /<[a-z][\s\S]*>/i.test(answer.value)) {
    type = "svg";
  }

  if (type === "textbox") {
    // @ts-ignore
    const answerText = new fabric.AnswerTextbox(answer.value, options);
    canvas.add(answerText);
  }

  if (type === "image") {
    // @ts-ignore
    const answerImage = new fabric.AnswerImage(answer.value, {
      ...options,
    });
    canvas.add(answerImage);
  }

  if (type === "svg") {
    // @ts-ignore
    const answerImage = new fabric.AnswerSvg(answer.value, {
      ...options,
    });
    canvas.add(answerImage);
  }

  canvas.renderAll();
};
