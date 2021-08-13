import { AnswerType } from "./types";

export const FABRIC_SETTINGS = {
  CANVAS_HEIGHT: 518,
  CANVAS_WIDTH: 970,
  CANVAS_BACKGROUND: "#fff",
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

// test data

export const initialState = {
  version: "4.4.0",
  objects: [
    {
      type: "answerTextbox",
      version: "4.4.0",
      originX: "left",
      originY: "top",
      left: 382.5,
      top: 262,
      width: 46.23,
      height: 18.08,
      fill: "black",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      erasable: true,
      text: "simple",
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: "Arial",
      fontStyle: "normal",
      lineHeight: 1.16,
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: "left",
      textBackgroundColor: "",
      charSpacing: 0,
      path: null,
      minWidth: 20,
      splitByGrapheme: false,
      styles: {},
      answerID: "57427",
    },
  ],
  background: {
    type: "rect",
    version: "4.4.0",
    originX: "left",
    originY: "top",
    left: 0,
    top: 0,
    width: 700,
    height: 518,
    fill: "white",
    stroke: null,
    strokeWidth: 1,
    strokeDashArray: null,
    strokeLineCap: "butt",
    strokeDashOffset: 0,
    strokeLineJoin: "miter",
    strokeUniform: false,
    strokeMiterLimit: 4,
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    flipX: false,
    flipY: false,
    opacity: 1,
    shadow: null,
    visible: true,
    backgroundColor: "",
    fillRule: "nonzero",
    paintFirst: "fill",
    globalCompositeOperation: "source-over",
    skewX: 0,
    skewY: 0,
    erasable: false,
    rx: 0,
    ry: 0,
  },
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
