import React from "react";
import ReactDOM from "react-dom";
import Sketch from "./sketch";
import { answers } from "./duck/constants";

ReactDOM.render(
  <React.StrictMode>
    <Sketch
      width={800}
      height={550}
      answers={answers}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
