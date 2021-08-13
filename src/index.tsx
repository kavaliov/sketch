import React from "react";
import ReactDOM from "react-dom";
import Sketch from "./sketch";
import { answers, initialState } from "./duck/constants";

ReactDOM.render(
  <React.StrictMode>
    <Sketch
      width={700}
      height={600}
      initialValue={JSON.stringify(initialState)}
      onChange={(value) => console.log(value)}
      answers={answers}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
