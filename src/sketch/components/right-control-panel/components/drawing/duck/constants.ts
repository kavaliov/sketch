import eraser from "../assets/brush1.svg";
import marker from "../assets/brush2.svg";
import magic from "../assets/brush3.svg";
import pencil from "../assets/brush4.svg";
import pen from "../assets/brush5.svg";

export const TOOLS = [
  {
    type: "eraser",
    icon: eraser,
  },
  {
    type: "marker",
    icon: marker,
  },
  {
    type: "magic",
    icon: magic,
  },
  {
    type: "pencil",
    icon: pencil,
  },
  {
    type: "pen",
    icon: pen,
  },
];

export const BRUSH_SIZE = {
  eraser: {
    min: 1,
    max: 90
  },
  marker: {
    min: 20,
    max: 90
  },
  magic: {
    min: 10,
    max: 60
  },
  pencil: {
    min: 1,
    max: 60
  },
  pen: {
    min: 5,
    max: 20
  },
}