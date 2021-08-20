import { AnswerType } from "./types";

export const FABRIC_SETTINGS = {
  CANVAS_HEIGHT: 518,
  CANVAS_WIDTH: 970,
  CANVAS_BACKGROUND: "#fffff",
  CORNER_SIZE: 8,
  CORNER_STYLE: "circle",
  SELECTION_COLOR: "rgba(232, 248, 255, 0.1)",
  SELECTION_BORDER_COLOR: "#cef0fe",
  SELECTION_LINE_WIDTH: 1,
  START_COLOR: "#ff0000",
};

export const CANVAS_SETTINGS = {
  height: FABRIC_SETTINGS.CANVAS_HEIGHT,
  width: FABRIC_SETTINGS.CANVAS_WIDTH,
  backgroundColor: FABRIC_SETTINGS.CANVAS_BACKGROUND,
};

export const answers: AnswerType[] = [
         {
           id: "57518",
           sort: 1,
           type: "textbox",
           width: 300,
           height: 0,
           value:
             "<b>Answer Answer Answer Answer Answer <br /> Answer Answer Answer Answer Answer Answer <br /> Answer Answer Answer Answer Answer Answer Answer Answer <br /> Answer Answer Answer Answer Answer Answer Answer </b>",
           options: {
             fontSize: 16,
             fontFamily: "Georgia",
             fill: "black",
           },
         },
         {
           id: "57519",
           sort: 1,
           type: "textbox",
           width: 0,
           height: 0,
           value: "123123",
           options: {
             fontSize: 16,
             fontFamily: "Arial",
             fill: "black",
           },
         },
         {
           id: "57520",
           sort: 1,
           type: "image",
           width: 70,
           height: 70,
           value:
             "https://backend25-qa.acceleratelearning.com/system/part_type_graphic_organizer_answer/images/57520/original/pngtree-hand-drawn-little-girl-cartoon-lively-little-girl-cute-little-girl-png-image_491210.jpeg?1628895006",
           options: { width: 70, height: 70 },
         },
       ];
