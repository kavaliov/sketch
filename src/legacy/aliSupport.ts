// @ts-nocheck

const { fabric } = window;

const getImageUrlFromSvg = (html, width, height) => {
  const svgData = `<svg xmlns="http://www.w3.org/2000/svg" 
      width="${width}" 
      height="${height}"
      style="overflow: visible;">
      <foreignObject width="100%" height="100%">
        ${html}
      </foreignObject>
    </svg>`;

  const domUrl = window.URL || window.webkitURL || window;
  const svg = new Blob([svgData], { type: "image/svg+xml" });
  return domUrl.createObjectURL(svg);
};

export const aliSupport = (): void => {
  fabric.AnswerImage = fabric.util.createClass(fabric.Image, {
    type: "answerImage",

    initialize: function initialize(src, options = {}, fn) {
      const this$1 = this;

      options = Object.assign(
        {},
        {
          editable: false,
        },
        options
      );
      // Setup image object to pass along to `fabric.Image`.
      const image = new Image();

      image.onload = function () {
        this$1.setHeight(this$1.height || options.height || image.height);
        this$1.setWidth(this$1.width || options.width || image.width);
        this$1.setCoords();
        this$1.canvas.renderAll();
      };

      image.src = src;

      this.callSuper("initialize", image, {
        ...options,
        width: "",
        height: "",
      });
      this.scaleToHeight(options.height);
      this.scaleToWidth(options.width);

      this.setControlsVisibility({
        bl: true,
        br: true,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        tl: true,
        tr: true,
        mtr: false,
      });

      this.lockUniScaling = true;
      this.lockRotation = true;
      this.set("answerID", options.answerID || "");
      fn && fn(this);
    },

    toObject: function toObject() {
      return Object.assign(this.callSuper("toObject"), {
        answerID: this.get("answerID"),
      });
    },
  });

  fabric.AnswerImage.fromObject = function (object, callback) {
    return new fabric.AnswerImage(object.src, object, callback);
  };

  fabric.AnswerSvg = fabric.util.createClass(fabric.Image, {
    type: "answerSvg",

    initialize: function initialize(html: any, options = {}, fn: any) {
      const fontSize = options.fontSize ? options.fontSize + "px" : "initial";
      const span = `<span 
                      xmlns="http://www.w3.org/1999/xhtml"
                      style="display: inline-block; 
                             width: ${
                               options.width > 0 ? options.width + "px" : "auto"
                             };
                             line-height: 2; 
                             color: ${options.fill || "black"};
                             font-size: ${fontSize}; 
                             font-family: ${options.fontFamily || "Arial"};"
                    > 

                      ${html}
                    </span>`;

      document.getElementsByTagName("body")[0].append();
      const $tempAnswer = document.createElement("div");
      $tempAnswer.id = "alisketch-svg-answer";
      $tempAnswer.innerHTML = span;
      document.body.appendChild($tempAnswer);

      const tempAnswerRect = $tempAnswer
        .getElementsByTagName("span")[0]
        .getBoundingClientRect();
      const width = Math.ceil(tempAnswerRect.width);
      const height = Math.ceil(tempAnswerRect.height);
      $tempAnswer.remove();

      const this$1 = this;
      options = Object.assign(
        {},
        {
          editable: false,
        },
        options
      );
      const image = new Image();
      image.onload = function () {
        this$1.setWidth(this$1.width || options.width || image.width);
        this$1.setHeight(this$1.height || options.height || image.height);
        this$1.setCoords();
        this$1.canvas.renderAll();
      };
      image.src = getImageUrlFromSvg(span, width, height);
      this.callSuper("initialize", image, options);
      this.setControlsVisibility({
        bl: true,
        br: true,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        tl: true,
        tr: true,
        mtr: false,
      });

      this.lockUniScaling = true;
      this.lockRotation = true;
      this.set("answerID", options.answerID || "");
      this.set("html", html);
      fn && fn(this);
    },

    toObject: function toObject() {
      return Object.assign(this.callSuper("toObject"), {
        fontFamily: this.get("fontFamily"),
        answerID: this.get("answerID"),
        html: this.get("html"),
      });
    },
  });

  fabric.AnswerSvg.fromObject = function (object, callback) {
    return new fabric.AnswerSvg(object.html, object, callback);
  };

  fabric.AnswerTextbox = fabric.util.createClass(fabric.Textbox, {
    type: "answerTextbox",

    initialize: function initialize(object, options = {}) {
      options = {
        editable: false,
        fontSize: 16,
        fontFamily: "Arial",
        fill: "black",
        left: object.left,
        top: object.top,
        answerID: object.answerID,
        ...options,
      };

      if (typeof object !== "string") {
        object = object.text;
      }

      object = object.replace(/<br>/g, "\n");

      this.callSuper("initialize", object, options);

      this.setControlsVisibility({
        bl: false,
        br: false,
        mb: false,
        ml: true,
        mr: true,
        tl: false,
        tr: false,
        mtr: false,
      });

      this.lockRotation = true;

      this.set("answerID", options.answerID || "");
    },

    toObject: function toObject() {
      return Object.assign(this.callSuper("toObject"), {
        answerID: this.get("answerID"),
      });
    },
  });

  fabric.AnswerTextbox.fromObject = (object, callback, forceAsync) => {
    return new fabric.Object._fromObject(
      "AnswerTextbox",
      object,
      callback,
      forceAsync
    );
  };
};
