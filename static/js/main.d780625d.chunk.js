(this.webpackJsonpsketch=this.webpackJsonpsketch||[]).push([[0],{20:function(e,t,a){e.exports={wrapper:"Panel_wrapper__o97Tj",header:"Panel_header__1ho3T",close:"Panel_close__3SCzl",opened:"Panel_opened__1xDq5"}},205:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(83),i=a.n(c),s=a(5),o=a(11),l=a(16),u=a.n(l),d=a.p+"static/media/close.ae19aa75.svg",p=a(20),h=a.n(p),f=a(3),b=function(e){var t=e.opened,a=e.onClose,r=e.title,n=e.children;return Object(f.jsxs)("div",{className:u()(h.a.wrapper,Object(o.a)({},h.a.opened,t)),children:[Object(f.jsxs)("div",{className:h.a.header,children:[r,Object(f.jsx)(g,{onClick:a,className:h.a.close,children:Object(f.jsx)("img",{src:d,alt:""})})]}),n]})},j=a(53),v=a.n(j),g=function(e){var t=e.children,a=e.onClick,r=e.className,n=e.style,c=e.active,i=void 0!==c&&c;return Object(f.jsx)("button",{onClick:a,className:u()(v.a.wrapper,r,Object(o.a)({},v.a.active,i)),style:n,children:t})},m=a(91),_=518,O=970,x=8,w="circle",C="rgba(232, 248, 255, 0.1)",y="#cef0fe",k=1,S="#ff0000",N={height:_,width:O,backgroundColor:"#fff"},D=r.createContext(null),E=a(17),B=Object(E.createAction)("SKETCH/SET_CURRENT_COLOR")(),A=Object(E.createAction)("SKETCH/SET_MODE")(),M=Object(E.createAction)("SKETCH/SET_BRUSH")(),R=function(e){e.util.trimCanvas=function(e){for(var t=e.getContext("2d"),a=e.width,r=e.height,n=[],c=[],i=t.getImageData(0,0,a,r),s=function(e,t){return e-t},o=0;o<r;o++)for(var l=0;l<a;l++)0<i.data[4*(o*a+l)+3]&&(n.push(l),c.push(o));return n.sort(s),c.sort(s),a=n[r=n.length-1]-n[0],r=c[r]-c[0],i=t.getImageData(n[0],c[0],a,r),e.width=a,e.height=r,t.putImageData(i,0,0),{x:n[0],y:c[0]}},e.Point.prototype.normalize=function(e){null!==e&&void 0!==e||(e=1);var t=this.distanceFrom({x:0,y:0});return 0<t&&(this.x=this.x/t*e,this.y=this.y/t*e),this},e.BaseBrush.prototype.convertToImg=function(){var t=this.canvas.getRetinaScaling(),a=e.util.copyCanvasElement(this.canvas.upperCanvasEl),r=e.util.trimCanvas(a);a=new e.Image(a),this.canvas.add(a),a.set({left:r.x/t,top:r.y/t,scaleX:1/t,scaleY:1/t}).setCoords(),this.canvas.clearContext(this.canvas.contextTop)},e.util.getRandom=function(e,t){return t=t||0,Math.random()*((e||1)-t)+t},e.util.clamp=function(e,t,a){return"number"!==typeof a&&(a=0),e>t?t:e<a?a:e},e.CrayonBrush=e.util.createClass(e.BaseBrush,{color:"#000",opacity:.6,width:1,_baseWidth:1,_inkAmount:10,_latestStrokeLength:0,_point:null,_sep:5,_size:0,_latest:null,_drawn:!1,initialize:function(t,a){a=a||{},this.canvas=t,this.width=a.width||t.freeDrawingBrush.width,this.color=a.color||t.freeDrawingBrush.color,this.opacity=a.opacity||t.contextTop.globalAlpha,this._point=new e.Point(0,0)},onMouseDown:function(e){this.canvas.contextTop.globalAlpha=this.opacity,this._size=this.width/2+this._baseWidth,this._drawn=!1,this.set(e)},onMouseMove:function(e){this.update(e),this.draw(this.canvas.contextTop)},onMouseUp:function(){this._drawn&&this.convertToImg(),this._latest=null,this._latestStrokeLength=0,this.canvas.contextTop.globalAlpha=1},set:function(t){this._latest?this._latest.setFromPoint(this._point):this._latest=new e.Point(t.x,t.y),e.Point.prototype.setFromPoint.call(this._point,t)},update:function(e){this.set(e),this._latestStrokeLength=this._point.subtract(this._latest).distanceFrom({x:0,y:0})},draw:function(t){var a,r=this._point.subtract(this._latest),n=Math.ceil(this._size/2),c=Math.floor(r.distanceFrom({x:0,y:0})/n)+1;r.normalize(n);var i=this._sep*e.util.clamp(this._inkAmount/this._latestStrokeLength*3,1,.5),s=Math.ceil(this._size*this._sep),o=this._size/2;for(t.save(),t.fillStyle=this.color,t.beginPath(),n=0;n<s;n++)for(a=0;a<c;a++){var l=this._latest.add(r.multiply(a)),u=e.util.getRandom(o),d=e.util.getRandom(2*Math.PI),p=e.util.getRandom(i,i/2),h=e.util.getRandom(i,i/2),f=l.x+u*Math.sin(d)-p/2;l=l.y+u*Math.cos(d)-h/2,t.rect(f,l,p,h)}t.fill(),t.restore(),this._drawn=!0},_render:function(){}})},T=window.fabric,P=function(e){var t=e.getActiveObject();t&&"activeSelection"===t.type?t.forEachObject((function(t){e.remove(t)})):e.remove(t),e.discardActiveObject().requestRenderAll()},z=function(e,t){var a=e.getActiveObject();a&&("activeSelection"===a.type?a.forEachObject((function(e){I(e,t)})):I(a,t),e.renderAll())},I=function(e,t){"path"!==e.type||e.shadow||e.set({stroke:t}),("rect"===e.type||"circle"===e.type||e.fromSVG)&&e.set({fill:t}),"path"===e.type&&e.shadow&&(e.shadow.color=t)},L=a(6),F=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},V=window.fabric,H=function(e,t,a){var r,n,c,i=e.getContext().getImageData(Math.round((t+e.viewportTransform[4])*V.devicePixelRatio*e.getZoom()),Math.round((a+e.viewportTransform[5])*V.devicePixelRatio*e.getZoom()),1,1).data;return r=i[0],n=i[1],c=i[2],"#".concat(((1<<24)+(r<<16)+(n<<8)+c).toString(16).slice(1))},W=a.p+"static/media/dropper.69cb0ffd.svg",G=a(55),U=a.n(G),K=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useState(""),i=Object(s.a)(c,2),o=i[0],l=i[1],u=n.a.useState({top:460,left:260}),d=Object(s.a)(u,2),p=d[0],h=d[1],b=n.a.useContext(D),j=b.canvas,v=b.dispatch,m=function(e){var t=H(j,e.pointer.x,e.pointer.y);h({top:e.pointer.y-10,left:e.pointer.x+20}),l(t)},_=function(){r(!1),j.off("mouse:down",O),j.off("mouse:move",m),function(e){e.selection=!0,e.getObjects().forEach((function(e){e.set("selectable",!0),e.hoverCursor="move"}))}(j)},O=function(e){_();var t=H(j,e.pointer.x,e.pointer.y);v(B({currentColor:t}))};return Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsx)("div",{className:U.a.colorView,style:Object(L.a)({backgroundColor:o},p)}),Object(f.jsx)(g,{active:a,onClick:function(){a?_():(r(!0),function(e){e.selection=!1,e.getObjects().forEach((function(e){e.set("selectable",!1),e.hoverCursor="default"}))}(j),v(A({mode:"hand"})),j.on("mouse:down",O),j.on("mouse:move",m))},className:U.a.wrapper,children:Object(f.jsx)("img",{src:W,alt:""})})]})},q=a(31),Y=a.n(q),X=function(){var e=n.a.useState(["",""]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useContext(D),i=c.state,o=c.dispatch,l=i.currentColor;n.a.useEffect((function(){r((function(e){return[l,e[0]]}))}),[l]);var u=function(e){o(B({currentColor:e}))};return Object(f.jsxs)("div",{className:Y.a.wrapper,children:[Object(f.jsx)("button",{className:Y.a.color,style:{backgroundColor:a[0]},onClick:function(){return u(a[0])}}),Object(f.jsx)("button",{className:Y.a.color,style:{backgroundColor:a[1]||"white"},onClick:function(){return u(a[1]||"white")}})]})},J=a(32),Q=a.n(J),Z=function(){var e=n.a.useState(S),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useContext(D),i=c.canvas,o=c.dispatch,l=c.state.currentColor;n.a.useEffect((function(){r(l),z(i,l)}),[l,i]);return Object(f.jsxs)("div",{className:Q.a.pickerWrapper,children:[Object(f.jsx)(K,{}),Object(f.jsx)(m.a,{className:Q.a.picker,color:a,onChange:function(e){r(e.hex)},onChangeComplete:function(e){o(B({currentColor:e.hex}))},pointer:function(){return Object(f.jsx)("div",{className:Q.a.pointer,style:{backgroundColor:a}})}}),Object(f.jsx)(X,{})]})},$=a(52),ee=[{type:"eraser",icon:a.p+"static/media/brush1.4bb3634c.svg"},{type:"marker",icon:a.p+"static/media/brush2.bd74d5cf.svg"},{type:"magic",icon:a.p+"static/media/brush3.38a28f48.svg"},{type:"pencil",icon:a.p+"static/media/brush4.4c238ed7.svg"},{type:"pen",icon:a.p+"static/media/brush5.b0040eae.svg"}],te=a.p+"static/media/highlight.a5e0d7ce.svg",ae=window.fabric,re=function(e,t,a,r){"marker"!==t&&"magic"!==t&&"pencil"!==t||(e.freeDrawingBrush=new ae.PencilBrush(e)),"eraser"===t?e.freeDrawingBrush=new ae.EraserBrush(e):e.freeDrawingBrush.color=r,"pen"===t&&(e.freeDrawingBrush=new ae.CrayonBrush(e)),"marker"===t&&(e.freeDrawingBrush.color=function(e,t){var a=e.replace("#",""),r=parseInt(a.substring(0,2),16),n=parseInt(a.substring(2,4),16),c=parseInt(a.substring(4,6),16);return"rgba(".concat(r,",").concat(n,",").concat(c,",").concat(t/100,")")}(r,20)),"magic"===t&&(e.freeDrawingBrush.color="#fff",e.freeDrawingBrush.shadow=new ae.Shadow({blur:30,affectStroke:!0,color:r})),e.freeDrawingBrush.width=a},ne=a(8),ce=a.n(ne),ie=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useState(""),i=Object(s.a)(c,2),l=i[0],d=i[1],p=n.a.useState(10),h=Object(s.a)(p,2),j=h[0],v=h[1],m=n.a.useContext(D),_=m.state,O=m.canvas,x=m.dispatch,w=_.currentColor,C=_.mode;n.a.useEffect((function(){O.isDrawingMode="drawing"===C,"drawing"!==C&&d("")}),[C,O]),n.a.useEffect((function(){re(O,l,j,w)}),[l,O,j,w]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{active:"drawing"===C,onClick:function(){return r(!0)},children:Object(f.jsx)("img",{src:te,alt:""})}),Object(f.jsx)(b,{opened:a,onClose:function(){return r(!1)},children:Object(f.jsxs)("div",{className:ce.a.panel,children:[Object(f.jsxs)("div",{className:ce.a.brushSize,children:[Object(f.jsx)("div",{className:ce.a.exampleWrapper,children:Object(f.jsx)("div",{className:ce.a.example,style:{width:j,height:j,backgroundColor:w}})}),Object(f.jsx)($.a,{className:ce.a.slider,orientation:"vertical",defaultValue:j,renderThumb:function(e,t){return Object(f.jsx)("div",Object(L.a)(Object(L.a)({},e),{},{className:ce.a.thumb,children:Object(f.jsx)("div",{className:ce.a.value,children:t.valueNow})}))},invert:!0,min:1,max:60,onChange:function(e){v(e)}})]}),Object(f.jsx)("div",{className:ce.a.brushes,children:ee.map((function(e){return Object(f.jsx)("button",{onClick:function(){return t=e.type,x(A({mode:"drawing"})),d(t),void r(!1);var t},className:u()(ce.a.brush,Object(o.a)({},ce.a.active,l===e.type)),children:Object(f.jsx)("img",{src:e.icon,alt:""})},e.type)}))})]})})]})},se=a.p+"static/media/hand.cf210679.svg",oe=function(){var e=n.a.useContext(D),t=e.state,a=e.dispatch;return Object(f.jsx)(g,{onClick:function(){a(A({mode:"hand"}))},active:"hand"===t.mode,children:Object(f.jsx)("img",{src:se,alt:""})})},le=a.p+"static/media/picture.b59a650c.svg",ue=a.p+"static/media/circle.1be35666.svg",de=a.p+"static/media/circle-outlined.55858944.svg",pe=a.p+"static/media/rectangle.06a5077b.svg",he=a.p+"static/media/rectangle-outlined.f492c7dd.svg",fe=a.p+"static/media/star.9acb5ada.svg",be=a.p+"static/media/star-outlined.0daaff4a.svg",je=a.p+"static/media/triangle.fbe306e2.svg",ve=a.p+"static/media/triangle-outlined.a25dd2aa.svg",ge=a.p+"static/media/arrow-down.66902268.svg",me=a.p+"static/media/arrow-up.c13fee86.svg",_e=a.p+"static/media/arrow-left.6c52d128.svg",Oe=[{title:"circle",src:ue},{title:"circleOutlined",src:de},{title:"rectangle",src:pe},{title:"rectangleOutlined",src:he},{title:"star",src:fe},{title:"starOutlined",src:be},{title:"triangle",src:je},{title:"triangleOutlined",src:ve},{title:"arrowDown",src:ge},{title:"arrowRight",src:a.p+"static/media/arrow-right.545fd979.svg"},{title:"arrowLeft",src:_e},{title:"arrowUp",src:me},{title:"thunderOutlined",src:a.p+"static/media/thunder-outlined.96c0359a.svg"},{title:"thunder",src:a.p+"static/media/thunder.ddcd8d6d.svg"},{title:"cloudOutlined",src:a.p+"static/media/cloud-outlined.c144d388.svg"},{title:"cloud",src:a.p+"static/media/cloud.eda4a7bc.svg"}],xe=window.fabric,we=function(e,t){var a=function(){var e=O/2,t=_/2;return{top:F(t-180,t+120),left:F(e-400,e+150)}}();xe.loadSVGFromURL(t,(function(t){var r=xe.util.groupSVGElements(t);r.set(Object(L.a)({},a)),e.add(r),e.setActiveObject(r),e.renderAll()}))},Ce=a(56),ye=a.n(Ce),ke=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useContext(D),i=c.canvas,o=c.dispatch;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{onClick:function(){return r(!0)},children:Object(f.jsx)("img",{src:le,alt:""})}),Object(f.jsx)(b,{opened:a,onClose:function(){return r(!1)},children:Object(f.jsx)("div",{className:ye.a.shapeList,children:Oe.map((function(e){return Object(f.jsx)("button",{onClick:function(){return t=e.src,o(A({mode:"hand"})),void we(i,t);var t},className:ye.a.shape,children:Object(f.jsx)("img",{src:e.src,alt:""})},e.title)}))})})]})},Se=a(88),Ne=a.n(Se),De=function(){return Object(f.jsxs)("div",{className:Ne.a.wrapper,children:[Object(f.jsx)(oe,{}),Object(f.jsx)(ie,{}),Object(f.jsx)(ke,{})]})},Ee=function(e){var t=e.getCenterPoint();return{top:15+t.y+e.height*e.scaleY/2,left:t.x}},Be=function(){var e=n.a.useContext(D),t=e.canvas,a=e.state.currentColor;return Object(f.jsx)(g,{onClick:function(){z(t,a)},style:{backgroundColor:a}})},Ae=a.p+"static/media/delete.c022e131.svg",Me=function(){var e=n.a.useContext(D).canvas;return Object(f.jsx)(g,{onClick:function(){P(e)},children:Object(f.jsx)("img",{src:Ae,alt:""})})},Re=a.p+"static/media/copy.15beb7fb.svg",Te=function(){var e=n.a.useContext(D).canvas;return Object(f.jsx)(g,{onClick:function(){var t=e.getActiveObject();t.clone((function(a){e.discardActiveObject(),a.set(Object(L.a)({top:a.top+8,left:a.left+8},t.fromSVG?{fromSVG:!0}:{})),"activeSelection"===a.type?(a.canvas=e,a.forEachObject((function(a,r){t.getObjects()[r].fromSVG&&a.set({fromSVG:!0}),e.add(a)}))):e.add(a),e.setActiveObject(a),e.requestRenderAll()}))},children:Object(f.jsx)("img",{src:Re,alt:""})})},Pe=a(89),ze=a.n(Pe),Ie=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useState({top:0,left:0}),i=Object(s.a)(c,2),o=i[0],l=i[1],u=n.a.useContext(D).canvas;return n.a.useEffect((function(){var e=function(e){l(Ee(e.transform.target))},t=function(t){t.target&&(r(!0),l(Ee(t.target)),t.target.on("moving",e),t.target.on("scaling",e))};u.on("selection:created",t),u.on("selection:updated",t),u.on("selection:cleared",(function(t){r(!1),t.deselected&&(t.deselected[0].off("moving",e),t.deselected[0].off("scaling",e))}))}),[u]),Object(f.jsx)(f.Fragment,{children:a&&Object(f.jsxs)("div",{style:Object(L.a)({},o),className:ze.a.wrapper,children:[Object(f.jsx)(Be,{}),Object(f.jsx)(Me,{}),Object(f.jsx)(Te,{})]})})},Le={currentColor:S,mode:"hand",brushType:"pencil"},Fe=Object(E.createReducer)(Le).handleAction(B,(function(e,t){var a=t.payload.currentColor;return Object(L.a)(Object(L.a)({},e),{},{currentColor:a})})).handleAction(M,(function(e,t){var a=t.payload.brushType;return Object(L.a)(Object(L.a)({},e),{},{brushType:a})})).handleAction(A,(function(e,t){var a=t.payload.mode;return Object(L.a)(Object(L.a)({},e),{},{mode:a})})),Ve=a(90),He=a.n(Ve),We=window.fabric,Ge=function(){var e=n.a.useReducer(Fe,Le),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useRef(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}()),i=n.a.useRef(null),o=n.a.useState(!1),l=Object(s.a)(o,2),u=l[0],d=l[1];return n.a.useEffect((function(){var e;c.current&&(i.current=new We.Canvas(c.current,N),(e=i.current)&&(T.Object.prototype.cornerStyle=w,T.Object.prototype.cornerSize=x,e.selectionColor=C,e.selectionBorderColor=y,e.selectionLineWidth=k,R(T),document.addEventListener("keydown",(function(t){"Backspace"===t.key&&P(e)}))),d(!0))}),[]),Object(f.jsxs)("div",{className:He.a.wrapper,children:[Object(f.jsx)("canvas",{id:c.current}),u&&Object(f.jsxs)(D.Provider,{value:{canvas:i.current,dispatch:r,state:a},children:[Object(f.jsx)(Z,{}),Object(f.jsx)(De,{}),Object(f.jsx)(Ie,{})]})]})};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(Ge,{})}),document.getElementById("root"))},31:function(e,t,a){e.exports={wrapper:"ColorHistory_wrapper__3urOk",color:"ColorHistory_color__3bXgN"}},32:function(e,t,a){e.exports={pickerWrapper:"ColorPicker_pickerWrapper__FIb-p",picker:"ColorPicker_picker__-UzkV",pointer:"ColorPicker_pointer__1Mkah"}},53:function(e,t,a){e.exports={wrapper:"Button_wrapper__1oiSI",active:"Button_active__1Qvou"}},55:function(e,t,a){e.exports={wrapper:"Eyedropper_wrapper__3cxt5",colorView:"Eyedropper_colorView__1be11"}},56:function(e,t,a){e.exports={shapeList:"Figures_shapeList__xB92s",shape:"Figures_shape__1p-K4"}},8:function(e,t,a){e.exports={panel:"Drawing_panel__2YMND",brushSize:"Drawing_brushSize__KfiI2",exampleWrapper:"Drawing_exampleWrapper__3Utvu",example:"Drawing_example__2HB4X",brushes:"Drawing_brushes__3-VLc",brush:"Drawing_brush__3ydnR",active:"Drawing_active__2CsHw",leaves:"Drawing_leaves__2eNQa",slider:"Drawing_slider__3Ygcy",thumb:"Drawing_thumb__1NL88",value:"Drawing_value__11aHN"}},88:function(e,t,a){e.exports={wrapper:"RightControlPanel_wrapper__3bH1D"}},89:function(e,t,a){e.exports={wrapper:"ObjectMenu_wrapper__7LOmj"}},90:function(e,t,a){e.exports={wrapper:"Sketch_wrapper__2qscz"}}},[[205,1,2]]]);
//# sourceMappingURL=main.d780625d.chunk.js.map