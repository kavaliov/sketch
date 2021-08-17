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
    id: "57425",
    sort: 1,
    type: "textbox",
    width: 200,
    height: 0,
    value:
      "<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Animi aperiam aut autem consectetur ea excepturi explicabo facere hic illum inventore ipsam, nulla numquam, obcaecati, quam quas recusandae tenetur ut veritatis?</b>",
    options: {
      fontSize: 16,
      fontFamily: "Georgia",
      fill: "black",
      width: 300,
    },
  },
  {
    id: "57426",
    sort: 1,
    type: "image",
    width: 50,
    height: 50,
    value:
      "https://backend25-dev.acceleratelearning.com/system/part_type_graphic_organizer_answer/images/57426/original/pngtree-hand-drawn-little-girl-cartoon-lively-little-girl-cute-little-girl-png-image_491210.jpeg?1628770578",
    options: {
      width: 50,
      height: 50,
    },
  },
  {
    id: "57427",
    sort: 1,
    type: "textbox",
    width: 0,
    height: 0,
    value: "simple",
    options: {
      fontSize: 16,
      fontFamily: "Arial",
      fill: "black",
      width: 0,
      height: 0,
    },
  },
];
