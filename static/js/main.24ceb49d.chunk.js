(this.webpackJsonpsketch=this.webpackJsonpsketch||[]).push([[0],{20:function(e,t,a){e.exports={wrapper:"Panel_wrapper__o97Tj",header:"Panel_header__1ho3T",close:"Panel_close__3SCzl",opened:"Panel_opened__1xDq5"}},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(80),c=a.n(i),s=a(14),o=a(10),l=a(16),u=a.n(l),h=a.p+"static/media/close.ae19aa75.svg",p=a(20),d=a.n(p),b=a(3),f=function(e){var t=e.opened,a=e.onClose,n=e.title,r=e.children;return Object(b.jsxs)("div",{className:u()(d.a.wrapper,Object(o.a)({},d.a.opened,t)),children:[Object(b.jsxs)("div",{className:d.a.header,children:[n,Object(b.jsx)(j,{onClick:a,className:d.a.close,children:Object(b.jsx)("img",{src:h,alt:""})})]}),r]})},_=a(51),v=a.n(_),j=function(e){var t=e.children,a=e.onClick,n=e.className,r=e.active,i=void 0!==r&&r;return Object(b.jsx)("button",{onClick:a,className:u()(v.a.wrapper,n,Object(o.a)({},v.a.active,i)),children:t})},m=a(87),g=n.createContext(null),w=a(17),x=Object(w.createAction)("SKETCH/SET_CURRENT_COLOR")(),O=Object(w.createAction)("SKETCH/SET_MODE")(),y=Object(w.createAction)("SKETCH/SET_BRUSH")(),C=6,k="circle",D="rgba(232, 248, 255, 0.1)",S="#cef0fe",B=1,N={height:518,width:970,backgroundColor:"#fff"},T=function(e){e.util.trimCanvas=function(e){for(var t=e.getContext("2d"),a=e.width,n=e.height,r=[],i=[],c=t.getImageData(0,0,a,n),s=function(e,t){return e-t},o=0;o<n;o++)for(var l=0;l<a;l++)0<c.data[4*(o*a+l)+3]&&(r.push(l),i.push(o));return r.sort(s),i.sort(s),a=r[n=r.length-1]-r[0],n=i[n]-i[0],c=t.getImageData(r[0],i[0],a,n),e.width=a,e.height=n,t.putImageData(c,0,0),{x:r[0],y:i[0]}},e.Point.prototype.normalize=function(e){null!==e&&void 0!==e||(e=1);var t=this.distanceFrom({x:0,y:0});return 0<t&&(this.x=this.x/t*e,this.y=this.y/t*e),this},e.BaseBrush.prototype.convertToImg=function(){var t=this.canvas.getRetinaScaling(),a=e.util.copyCanvasElement(this.canvas.upperCanvasEl),n=e.util.trimCanvas(a);a=new e.Image(a),this.canvas.add(a),a.set({left:n.x/t,top:n.y/t,scaleX:1/t,scaleY:1/t}).setCoords(),this.canvas.clearContext(this.canvas.contextTop)},e.util.getRandom=function(e,t){return t=t||0,Math.random()*((e||1)-t)+t},e.util.clamp=function(e,t,a){return"number"!==typeof a&&(a=0),e>t?t:e<a?a:e},e.CrayonBrush=e.util.createClass(e.BaseBrush,{color:"#000",opacity:.6,width:1,_baseWidth:1,_inkAmount:10,_latestStrokeLength:0,_point:null,_sep:5,_size:0,_latest:null,_drawn:!1,initialize:function(t,a){a=a||{},this.canvas=t,this.width=a.width||t.freeDrawingBrush.width,this.color=a.color||t.freeDrawingBrush.color,this.opacity=a.opacity||t.contextTop.globalAlpha,this._point=new e.Point(0,0)},onMouseDown:function(e){this.canvas.contextTop.globalAlpha=this.opacity,this._size=this.width/2+this._baseWidth,this._drawn=!1,this.set(e)},onMouseMove:function(e){this.update(e),this.draw(this.canvas.contextTop)},onMouseUp:function(){this._drawn&&this.convertToImg(),this._latest=null,this._latestStrokeLength=0,this.canvas.contextTop.globalAlpha=1},set:function(t){this._latest?this._latest.setFromPoint(this._point):this._latest=new e.Point(t.x,t.y),e.Point.prototype.setFromPoint.call(this._point,t)},update:function(e){this.set(e),this._latestStrokeLength=this._point.subtract(this._latest).distanceFrom({x:0,y:0})},draw:function(t){var a,n=this._point.subtract(this._latest),r=Math.ceil(this._size/2),i=Math.floor(n.distanceFrom({x:0,y:0})/r)+1;n.normalize(r);var c=this._sep*e.util.clamp(this._inkAmount/this._latestStrokeLength*3,1,.5),s=Math.ceil(this._size*this._sep),o=this._size/2;for(t.save(),t.fillStyle=this.color,t.beginPath(),r=0;r<s;r++)for(a=0;a<i;a++){var l=this._latest.add(n.multiply(a)),u=e.util.getRandom(o),h=e.util.getRandom(2*Math.PI),p=e.util.getRandom(c,c/2),d=e.util.getRandom(c,c/2),b=l.x+u*Math.sin(h)-p/2;l=l.y+u*Math.cos(h)-d/2,t.rect(b,l,p,d)}t.fill(),t.restore(),this._drawn=!0},_render:function(){}})},E=window.fabric,A=function(e){var t=e.getActiveObject();t&&"activeSelection"===t.type?t.forEachObject((function(t){e.remove(t)})):e.remove(t),e.discardActiveObject().requestRenderAll()},M=function(e,t){"path"===e.type&&e.set({stroke:t.hex}),"rect"!==e.type&&"circle"!==e.type||e.set({fill:t.hex})},P=a(53),R=a.n(P),z=function(){var e=r.a.useContext(g),t=e.canvas,a=e.dispatch,n=e.state.currentColor;return Object(b.jsx)("div",{className:R.a.pickerWrapper,children:Object(b.jsx)(m.a,{className:R.a.picker,color:n,onChange:function(e){a(x({currentColor:e.hex})),function(e,t){var a=e.getActiveObject();a&&("activeSelection"===a.type?a.forEachObject((function(e){M(e,t)})):M(a,t),e.renderAll())}(t,e)}})})},I=a(8),L=a(50),W=[{type:"eraser",icon:a.p+"static/media/brush1.4bb3634c.svg"},{type:"marker",icon:a.p+"static/media/brush2.bd74d5cf.svg"},{type:"magic",icon:a.p+"static/media/brush3.38a28f48.svg"},{type:"pencil",icon:a.p+"static/media/brush4.4c238ed7.svg"},{type:"pen",icon:a.p+"static/media/brush5.b0040eae.svg"}],H=a.p+"static/media/highlight.a5e0d7ce.svg",F=window.fabric,U=function(e,t,a,n){"marker"!==t&&"magic"!==t&&"pencil"!==t||(e.freeDrawingBrush=new F.PencilBrush(e)),"eraser"===t?e.freeDrawingBrush=new F.EraserBrush(e):e.freeDrawingBrush.color=n,"pen"===t&&(e.freeDrawingBrush=new F.CrayonBrush(e)),"marker"===t&&(e.freeDrawingBrush.color=function(e,t){var a=e.replace("#",""),n=parseInt(a.substring(0,2),16),r=parseInt(a.substring(2,4),16),i=parseInt(a.substring(4,6),16);return"rgba(".concat(n,",").concat(r,",").concat(i,",").concat(t/100,")")}(n,20)),"magic"===t&&(e.freeDrawingBrush.color="#fff",e.freeDrawingBrush.shadow=new F.Shadow({blur:30,affectStroke:!0,color:n})),e.freeDrawingBrush.width=a},K=a(6),q=a.n(K),V=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=r.a.useState(""),c=Object(s.a)(i,2),l=c[0],h=c[1],p=r.a.useState(10),d=Object(s.a)(p,2),_=d[0],v=d[1],m=r.a.useContext(g),w=m.state,x=m.canvas,y=m.dispatch,C=w.currentColor,k=w.mode;r.a.useEffect((function(){x.isDrawingMode="drawing"===k}),[k,x]),r.a.useEffect((function(){U(x,l,_,C)}),[l,x,_,C]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{active:"drawing"===k,onClick:function(){return n(!0)},children:Object(b.jsx)("img",{src:H,alt:""})}),Object(b.jsx)(f,{opened:a,onClose:function(){return n(!1)},children:Object(b.jsxs)("div",{className:q.a.panel,children:[Object(b.jsxs)("div",{className:q.a.brushSize,children:[Object(b.jsx)("div",{className:q.a.exampleWrapper,children:Object(b.jsx)("div",{className:q.a.example,style:{width:_,height:_,backgroundColor:C}})}),Object(b.jsx)(L.a,{className:q.a.slider,orientation:"vertical",defaultValue:_,renderThumb:function(e,t){return Object(b.jsx)("div",Object(I.a)(Object(I.a)({},e),{},{className:q.a.thumb,children:Object(b.jsx)("div",{className:q.a.value,children:t.valueNow})}))},invert:!0,min:1,max:60,onChange:function(e){v(e)}})]}),Object(b.jsx)("div",{className:q.a.brushes,children:W.map((function(e){return Object(b.jsx)("button",{onClick:function(){return t=e.type,y(O({mode:"drawing"})),h(t),void n(!1);var t},className:u()(q.a.brush,Object(o.a)({},q.a.active,l===e.type)),children:Object(b.jsx)("img",{src:e.icon,alt:""})},e.type)}))})]})})]})},Y=a.p+"static/media/hand.cf210679.svg",J=function(){var e=r.a.useContext(g),t=e.state,a=e.dispatch;return Object(b.jsx)(j,{onClick:function(){a(O({mode:"hand"}))},active:"hand"===t.mode,children:Object(b.jsx)("img",{src:Y,alt:""})})},Q=a(85),X=a.n(Q),G=function(){return Object(b.jsxs)("div",{className:X.a.wrapper,children:[Object(b.jsx)(J,{}),Object(b.jsx)(V,{})]})},Z={currentColor:"#ff0000",mode:"hand",brushType:"pencil"},$=Object(w.createReducer)(Z).handleAction(x,(function(e,t){var a=t.payload.currentColor;return Object(I.a)(Object(I.a)({},e),{},{currentColor:a})})).handleAction(y,(function(e,t){var a=t.payload.brushType;return Object(I.a)(Object(I.a)({},e),{},{brushType:a})})).handleAction(O,(function(e,t){var a=t.payload.mode;return Object(I.a)(Object(I.a)({},e),{},{mode:a})})),ee=a(86),te=a.n(ee),ae=window.fabric,ne=function(){var e=r.a.useReducer($,Z),t=Object(s.a)(e,2),a=t[0],n=t[1],i=r.a.useRef(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}()),c=r.a.useRef(null),o=r.a.useState(!1),l=Object(s.a)(o,2),u=l[0],h=l[1];return r.a.useEffect((function(){var e;i.current&&(c.current=new ae.Canvas(i.current,N),(e=c.current)&&(E.Object.prototype.cornerStyle=k,E.Object.prototype.cornerSize=C,e.selectionColor=D,e.selectionBorderColor=S,e.selectionLineWidth=B,e.selection=!1,T(E),document.addEventListener("keydown",(function(t){"Backspace"===t.key&&A(e)}))),h(!0))}),[]),Object(b.jsxs)("div",{className:te.a.wrapper,children:[Object(b.jsx)("canvas",{id:i.current}),u&&Object(b.jsxs)(g.Provider,{value:{canvas:c.current,dispatch:n,state:a},children:[Object(b.jsx)(z,{}),Object(b.jsx)(G,{})]})]})};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root"))},51:function(e,t,a){e.exports={wrapper:"Button_wrapper__1oiSI",active:"Button_active__1Qvou"}},53:function(e,t,a){e.exports={pickerWrapper:"ColorPicker_pickerWrapper__FIb-p",picker:"ColorPicker_picker__-UzkV"}},6:function(e,t,a){e.exports={panel:"Drawing_panel__2YMND",brushSize:"Drawing_brushSize__KfiI2",exampleWrapper:"Drawing_exampleWrapper__3Utvu",example:"Drawing_example__2HB4X",brushes:"Drawing_brushes__3-VLc",brush:"Drawing_brush__3ydnR",active:"Drawing_active__2CsHw",leaves:"Drawing_leaves__2eNQa",slider:"Drawing_slider__3Ygcy",thumb:"Drawing_thumb__1NL88",value:"Drawing_value__11aHN"}},85:function(e,t,a){e.exports={wrapper:"RightControlPanel_wrapper__3bH1D"}},86:function(e,t,a){e.exports={wrapper:"Sketch_wrapper__2qscz"}}},[[201,1,2]]]);
//# sourceMappingURL=main.24ceb49d.chunk.js.map