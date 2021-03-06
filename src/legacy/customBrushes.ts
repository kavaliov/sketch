// @ts-nocheck
/* eslint-disable */

// https://github.com/av01d/fabric-brushes/blob/main/dist/fabric.brushes.min.js

const { fabric } = window;

export const addPencilBrush = () => {
  fabric.util.trimCanvas = function (a) {
    for (
      var b = a.getContext("2d"),
        c = a.width,
        e = a.height,
        g = [],
        h = [],
        l = b.getImageData(0, 0, c, e),
        m = function (p, q) {
          return p - q;
        },
        k = 0;
      k < e;
      k++
    )
      for (var n = 0; n < c; n++)
        0 < l.data[4 * (k * c + n) + 3] && (g.push(n), h.push(k));
    g.sort(m);
    h.sort(m);
    e = g.length - 1;
    c = g[e] - g[0];
    e = h[e] - h[0];
    l = b.getImageData(g[0], h[0], c, e);
    a.width = c;
    a.height = e;
    b.putImageData(l, 0, 0);
    return { x: g[0], y: h[0] };
  };
  fabric.Point.prototype.normalize = function (a) {
    if (null === a || void 0 === a) a = 1;
    var b = this.distanceFrom({ x: 0, y: 0 });
    0 < b && ((this.x = (this.x / b) * a), (this.y = (this.y / b) * a));
    return this;
  };
  fabric.BaseBrush.prototype.convertToImg = function () {
    const zoom = this.canvas.getZoom();
    var a = this.canvas.getRetinaScaling(),
      b = fabric.util.copyCanvasElement(this.canvas.upperCanvasEl),
      c = fabric.util.trimCanvas(b);
    b = new fabric.Image(b, {
      left: c.x / a / zoom,
      top: c.y / a / zoom,
      scaleX: 1 / a / zoom,
      scaleY: 1 / a / zoom,
    });
    b.crossOrigin = "Anonymous";
    this.canvas.add(b);
    this.canvas.clearContext(this.canvas.contextTop);
  };
  fabric.util.getRandom = function (a, b) {
    b = b ? b : 0;
    return Math.random() * ((a ? a : 1) - b) + b;
  };
  fabric.util.clamp = function (a, b, c) {
    "number" !== typeof c && (c = 0);
    return a > b ? b : a < c ? c : a;
  };
  fabric.CrayonBrush = fabric.util.createClass(fabric.BaseBrush, {
    color: "#000",
    opacity: 0.6,
    width: 1,
    _baseWidth: 1,
    _inkAmount: 10,
    _latestStrokeLength: 0,
    _point: null,
    _sep: 5,
    _size: 0,
    _latest: null,
    _drawn: !1,
    initialize: function (a, b) {
      b = b || {};
      this.canvas = a;
      this.width = b.width || a.freeDrawingBrush.width;
      this.color = b.color || a.freeDrawingBrush.color;
      this.opacity = b.opacity || a.contextTop.globalAlpha;
      this._point = new fabric.Point(0, 0);
    },
    onMouseDown: function (a) {
      this.canvas.contextTop.globalAlpha = this.opacity;
      this._size = this.width / 2 + this._baseWidth;
      this._drawn = !1;
      this.set(a);
    },
    onMouseMove: function (a) {
      this.update(a);
      this.draw(this.canvas.contextTop);
    },
    onMouseUp: function () {
      this._drawn && this.convertToImg();
      this._latest = null;
      this._latestStrokeLength = 0;
      this.canvas.contextTop.globalAlpha = 1;
    },
    set: function (a) {
      this._latest
        ? this._latest.setFromPoint(this._point)
        : (this._latest = new fabric.Point(a.x, a.y));
      fabric.Point.prototype.setFromPoint.call(this._point, a);
    },
    update: function (a) {
      this.set(a);
      this._latestStrokeLength = this._point
        .subtract(this._latest)
        .distanceFrom({ x: 0, y: 0 });
    },
    draw: function (a) {
      var zoom = this.canvas.getZoom();
      var b;
      var c = this._point.subtract(this._latest);
      var e = Math.ceil(this._size / 2);
      var g = Math.floor(c.distanceFrom({ x: 0, y: 0 }) / e) + 1;
      c.normalize(e);
      var h =
        this._sep *
        fabric.util.clamp(
          (this._inkAmount / this._latestStrokeLength) * 3,
          1,
          0.5
        );
      var l = Math.ceil(this._size * this._sep);
      var m = this._size / 2;
      a.save();
      a.fillStyle = this.color;
      a.beginPath();
      for (e = 0; e < l; e++)
        for (b = 0; b < g; b++) {
          var k = this._latest.add(c.multiply(b));
          var n = fabric.util.getRandom(m);
          var p = fabric.util.getRandom(2 * Math.PI);
          var q = fabric.util.getRandom(h, h / 2);
          var r = fabric.util.getRandom(h, h / 2);
          var t = k.x + n * Math.sin(p) - q / 2;
          k = k.y + n * Math.cos(p) - r / 2;
          a.rect(t * zoom, k * zoom, q, r);
        }
      a.fill();
      a.restore();
      this._drawn = !0;
    },
    _render: function () {},
  });
};
