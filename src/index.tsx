import React from "react";
import ReactDOM from "react-dom";
import Sketch from "./sketch";

ReactDOM.render(
  <React.StrictMode>
    <Sketch
      width={800}
      height={550}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
