(this.webpackJsonpsketch=this.webpackJsonpsketch||[]).push([[0],{20:function(e,t,a){e.exports={wrapper:"Panel_wrapper__o97Tj",header:"Panel_header__1ho3T",close:"Panel_close__3SCzl",opened:"Panel_opened__1xDq5"}},202:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(81),c=a.n(i),s=a(10),o=a(11),l=a(16),u=a.n(l),d=a.p+"static/media/close.ae19aa75.svg",h=a(20),p=a.n(h),b=a(3),f=function(e){var t=e.opened,a=e.onClose,r=e.title,n=e.children;return Object(b.jsxs)("div",{className:u()(p.a.wrapper,Object(o.a)({},p.a.opened,t)),children:[Object(b.jsxs)("div",{className:p.a.header,children:[r,Object(b.jsx)(m,{onClick:a,className:p.a.close,children:Object(b.jsx)("img",{src:d,alt:""})})]}),n]})},v=a(51),g=a.n(v),m=function(e){var t=e.children,a=e.onClick,r=e.className,n=e.active,i=void 0!==n&&n;return Object(b.jsx)("button",{onClick:a,className:u()(g.a.wrapper,r,Object(o.a)({},g.a.active,i)),children:t})},j=a(88),_=r.createContext(null),w=a(17),x=Object(w.createAction)("SKETCH/SET_CURRENT_COLOR")(),O=Object(w.createAction)("SKETCH/SET_MODE")(),y=Object(w.createAction)("SKETCH/SET_BRUSH")(),C=518,k=970,S=6,D="circle",B="rgba(232, 248, 255, 0.1)",N="#cef0fe",T=1,E={height:C,width:k,backgroundColor:"#fff"},M=function(e){e.util.trimCanvas=function(e){for(var t=e.getContext("2d"),a=e.width,r=e.height,n=[],i=[],c=t.getImageData(0,0,a,r),s=function(e,t){return e-t},o=0;o<r;o++)for(var l=0;l<a;l++)0<c.data[4*(o*a+l)+3]&&(n.push(l),i.push(o));return n.sort(s),i.sort(s),a=n[r=n.length-1]-n[0],r=i[r]-i[0],c=t.getImageData(n[0],i[0],a,r),e.width=a,e.height=r,t.putImageData(c,0,0),{x:n[0],y:i[0]}},e.Point.prototype.normalize=function(e){null!==e&&void 0!==e||(e=1);var t=this.distanceFrom({x:0,y:0});return 0<t&&(this.x=this.x/t*e,this.y=this.y/t*e),this},e.BaseBrush.prototype.convertToImg=function(){var t=this.canvas.getRetinaScaling(),a=e.util.copyCanvasElement(this.canvas.upperCanvasEl),r=e.util.trimCanvas(a);a=new e.Image(a),this.canvas.add(a),a.set({left:r.x/t,top:r.y/t,scaleX:1/t,scaleY:1/t}).setCoords(),this.canvas.clearContext(this.canvas.contextTop)},e.util.getRandom=function(e,t){return t=t||0,Math.random()*((e||1)-t)+t},e.util.clamp=function(e,t,a){return"number"!==typeof a&&(a=0),e>t?t:e<a?a:e},e.CrayonBrush=e.util.createClass(e.BaseBrush,{color:"#000",opacity:.6,width:1,_baseWidth:1,_inkAmount:10,_latestStrokeLength:0,_point:null,_sep:5,_size:0,_latest:null,_drawn:!1,initialize:function(t,a){a=a||{},this.canvas=t,this.width=a.width||t.freeDrawingBrush.width,this.color=a.color||t.freeDrawingBrush.color,this.opacity=a.opacity||t.contextTop.globalAlpha,this._point=new e.Point(0,0)},onMouseDown:function(e){this.canvas.contextTop.globalAlpha=this.opacity,this._size=this.width/2+this._baseWidth,this._drawn=!1,this.set(e)},onMouseMove:function(e){this.update(e),this.draw(this.canvas.contextTop)},onMouseUp:function(){this._drawn&&this.convertToImg(),this._latest=null,this._latestStrokeLength=0,this.canvas.contextTop.globalAlpha=1},set:function(t){this._latest?this._latest.setFromPoint(this._point):this._latest=new e.Point(t.x,t.y),e.Point.prototype.setFromPoint.call(this._point,t)},update:function(e){this.set(e),this._latestStrokeLength=this._point.subtract(this._latest).distanceFrom({x:0,y:0})},draw:function(t){var a,r=this._point.subtract(this._latest),n=Math.ceil(this._size/2),i=Math.floor(r.distanceFrom({x:0,y:0})/n)+1;r.normalize(n);var c=this._sep*e.util.clamp(this._inkAmount/this._latestStrokeLength*3,1,.5),s=Math.ceil(this._size*this._sep),o=this._size/2;for(t.save(),t.fillStyle=this.color,t.beginPath(),n=0;n<s;n++)for(a=0;a<i;a++){var l=this._latest.add(r.multiply(a)),u=e.util.getRandom(o),d=e.util.getRandom(2*Math.PI),h=e.util.getRandom(c,c/2),p=e.util.getRandom(c,c/2),b=l.x+u*Math.sin(d)-h/2;l=l.y+u*Math.cos(d)-p/2,t.rect(b,l,h,p)}t.fill(),t.restore(),this._drawn=!0},_render:function(){}})},R=window.fabric,A=function(e){var t=e.getActiveObject();t&&"activeSelection"===t.type?t.forEachObject((function(t){e.remove(t)})):e.remove(t),e.discardActiveObject().requestRenderAll()},P=function(e,t){"path"===e.type&&e.set({stroke:t.hex}),("rect"===e.type||"circle"===e.type||e.fromSVG)&&e.set({fill:t.hex})},z=a(53),I=a.n(z),L=function(){var e=n.a.useContext(_),t=e.canvas,a=e.dispatch,r=e.state.currentColor;return Object(b.jsx)("div",{className:I.a.pickerWrapper,children:Object(b.jsx)(j.a,{className:I.a.picker,color:r,onChange:function(e){a(x({currentColor:e.hex})),function(e,t){var a=e.getActiveObject();a&&("activeSelection"===a.type?a.forEachObject((function(e){P(e,t)})):P(a,t),e.renderAll())}(t,e)}})})},F=a(5),W=a(50),H=[{type:"eraser",icon:a.p+"static/media/brush1.4bb3634c.svg"},{type:"marker",icon:a.p+"static/media/brush2.bd74d5cf.svg"},{type:"magic",icon:a.p+"static/media/brush3.38a28f48.svg"},{type:"pencil",icon:a.p+"static/media/brush4.4c238ed7.svg"},{type:"pen",icon:a.p+"static/media/brush5.b0040eae.svg"}],U=a.p+"static/media/highlight.a5e0d7ce.svg",V=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},K=window.fabric,q=function(e,t,a,r){"marker"!==t&&"magic"!==t&&"pencil"!==t||(e.freeDrawingBrush=new K.PencilBrush(e)),"eraser"===t?e.freeDrawingBrush=new K.EraserBrush(e):e.freeDrawingBrush.color=r,"pen"===t&&(e.freeDrawingBrush=new K.CrayonBrush(e)),"marker"===t&&(e.freeDrawingBrush.color=function(e,t){var a=e.replace("#",""),r=parseInt(a.substring(0,2),16),n=parseInt(a.substring(2,4),16),i=parseInt(a.substring(4,6),16);return"rgba(".concat(r,",").concat(n,",").concat(i,",").concat(t/100,")")}(r,20)),"magic"===t&&(e.freeDrawingBrush.color="#fff",e.freeDrawingBrush.shadow=new K.Shadow({blur:30,affectStroke:!0,color:r})),e.freeDrawingBrush.width=a},G=a(7),Y=a.n(G),J=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=n.a.useState(""),c=Object(s.a)(i,2),l=c[0],d=c[1],h=n.a.useState(10),p=Object(s.a)(h,2),v=p[0],g=p[1],j=n.a.useContext(_),w=j.state,x=j.canvas,y=j.dispatch,C=w.currentColor,k=w.mode;n.a.useEffect((function(){x.isDrawingMode="drawing"===k,"drawing"!==k&&d("")}),[k,x]),n.a.useEffect((function(){q(x,l,v,C)}),[l,x,v,C]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{active:"drawing"===k,onClick:function(){return r(!0)},children:Object(b.jsx)("img",{src:U,alt:""})}),Object(b.jsx)(f,{opened:a,onClose:function(){return r(!1)},children:Object(b.jsxs)("div",{className:Y.a.panel,children:[Object(b.jsxs)("div",{className:Y.a.brushSize,children:[Object(b.jsx)("div",{className:Y.a.exampleWrapper,children:Object(b.jsx)("div",{className:Y.a.example,style:{width:v,height:v,backgroundColor:C}})}),Object(b.jsx)(W.a,{className:Y.a.slider,orientation:"vertical",defaultValue:v,renderThumb:function(e,t){return Object(b.jsx)("div",Object(F.a)(Object(F.a)({},e),{},{className:Y.a.thumb,children:Object(b.jsx)("div",{className:Y.a.value,children:t.valueNow})}))},invert:!0,min:1,max:60,onChange:function(e){g(e)}})]}),Object(b.jsx)("div",{className:Y.a.brushes,children:H.map((function(e){return Object(b.jsx)("button",{onClick:function(){return t=e.type,y(O({mode:"drawing"})),d(t),void r(!1);var t},className:u()(Y.a.brush,Object(o.a)({},Y.a.active,l===e.type)),children:Object(b.jsx)("img",{src:e.icon,alt:""})},e.type)}))})]})})]})},Q=a.p+"static/media/hand.cf210679.svg",X=function(){var e=n.a.useContext(_),t=e.state,a=e.dispatch;return Object(b.jsx)(m,{onClick:function(){a(O({mode:"hand"}))},active:"hand"===t.mode,children:Object(b.jsx)("img",{src:Q,alt:""})})},Z=a.p+"static/media/picture.b59a650c.svg",$=a.p+"static/media/circle.1be35666.svg",ee=a.p+"static/media/circle-outlined.55858944.svg",te=a.p+"static/media/rectangle.06a5077b.svg",ae=a.p+"static/media/rectangle-outlined.f492c7dd.svg",re=a.p+"static/media/star.9acb5ada.svg",ne=a.p+"static/media/star-outlined.0daaff4a.svg",ie=a.p+"static/media/triangle.fbe306e2.svg",ce=a.p+"static/media/triangle-outlined.a25dd2aa.svg",se=a.p+"static/media/arrow-down.66902268.svg",oe=a.p+"static/media/arrow-up.c13fee86.svg",le=a.p+"static/media/arrow-left.6c52d128.svg",ue=[{title:"circle",src:$},{title:"circleOutlined",src:ee},{title:"rectangle",src:te},{title:"rectangleOutlined",src:ae},{title:"star",src:re},{title:"starOutlined",src:ne},{title:"triangle",src:ie},{title:"triangleOutlined",src:ce},{title:"arrowDown",src:se},{title:"arrowRight",src:a.p+"static/media/arrow-right.545fd979.svg"},{title:"arrowLeft",src:le},{title:"arrowUp",src:oe},{title:"thunderOutlined",src:a.p+"static/media/thunder-outlined.96c0359a.svg"},{title:"thunder",src:a.p+"static/media/thunder.ddcd8d6d.svg"},{title:"cloudOutlined",src:a.p+"static/media/cloud-outlined.c144d388.svg"},{title:"cloud",src:a.p+"static/media/cloud.eda4a7bc.svg"}],de=window.fabric,he=function(e,t){var a=function(){var e=k/2,t=C/2;return{top:V(t-180,t+120),left:V(e-400,e+150)}}();de.loadSVGFromURL(t,(function(t){var r=de.util.groupSVGElements(t);r.set(Object(F.a)({},a)),e.add(r),e.renderAll()}))},pe=a(54),be=a.n(pe),fe=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=n.a.useContext(_).canvas;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{onClick:function(){return r(!0)},children:Object(b.jsx)("img",{src:Z,alt:""})}),Object(b.jsx)(f,{opened:a,onClose:function(){return r(!1)},children:Object(b.jsx)("div",{className:be.a.shapeList,children:ue.map((function(e){return Object(b.jsx)("button",{onClick:function(){return t=e.src,void he(i,t);var t},className:be.a.shape,children:Object(b.jsx)("img",{src:e.src,alt:""})},e.title)}))})})]})},ve=a(86),ge=a.n(ve),me=function(){return Object(b.jsxs)("div",{className:ge.a.wrapper,children:[Object(b.jsx)(X,{}),Object(b.jsx)(J,{}),Object(b.jsx)(fe,{})]})},je={currentColor:"#ff0000",mode:"hand",brushType:"pencil"},_e=Object(w.createReducer)(je).handleAction(x,(function(e,t){var a=t.payload.currentColor;return Object(F.a)(Object(F.a)({},e),{},{currentColor:a})})).handleAction(y,(function(e,t){var a=t.payload.brushType;return Object(F.a)(Object(F.a)({},e),{},{brushType:a})})).handleAction(O,(function(e,t){var a=t.payload.mode;return Object(F.a)(Object(F.a)({},e),{},{mode:a})})),we=a(87),xe=a.n(we),Oe=window.fabric,ye=function(){var e=n.a.useReducer(_e,je),t=Object(s.a)(e,2),a=t[0],r=t[1],i=n.a.useRef(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}()),c=n.a.useRef(null),o=n.a.useState(!1),l=Object(s.a)(o,2),u=l[0],d=l[1];return n.a.useEffect((function(){var e;i.current&&(c.current=new Oe.Canvas(i.current,E),(e=c.current)&&(R.Object.prototype.cornerStyle=D,R.Object.prototype.cornerSize=S,e.selectionColor=B,e.selectionBorderColor=N,e.selectionLineWidth=T,e.selection=!1,M(R),document.addEventListener("keydown",(function(t){"Backspace"===t.key&&A(e)}))),d(!0))}),[]),Object(b.jsxs)("div",{className:xe.a.wrapper,children:[Object(b.jsx)("canvas",{id:i.current}),u&&Object(b.jsxs)(_.Provider,{value:{canvas:c.current,dispatch:r,state:a},children:[Object(b.jsx)(L,{}),Object(b.jsx)(me,{})]})]})};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(ye,{})}),document.getElementById("root"))},51:function(e,t,a){e.exports={wrapper:"Button_wrapper__1oiSI",active:"Button_active__1Qvou"}},53:function(e,t,a){e.exports={pickerWrapper:"ColorPicker_pickerWrapper__FIb-p",picker:"ColorPicker_picker__-UzkV"}},54:function(e,t,a){e.exports={shapeList:"Figures_shapeList__xB92s",shape:"Figures_shape__1p-K4"}},7:function(e,t,a){e.exports={panel:"Drawing_panel__2YMND",brushSize:"Drawing_brushSize__KfiI2",exampleWrapper:"Drawing_exampleWrapper__3Utvu",example:"Drawing_example__2HB4X",brushes:"Drawing_brushes__3-VLc",brush:"Drawing_brush__3ydnR",active:"Drawing_active__2CsHw",leaves:"Drawing_leaves__2eNQa",slider:"Drawing_slider__3Ygcy",thumb:"Drawing_thumb__1NL88",value:"Drawing_value__11aHN"}},86:function(e,t,a){e.exports={wrapper:"RightControlPanel_wrapper__3bH1D"}},87:function(e,t,a){e.exports={wrapper:"Sketch_wrapper__2qscz"}}},[[202,1,2]]]);
//# sourceMappingURL=main.ddefc27a.chunk.js.map