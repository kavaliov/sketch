(this.webpackJsonpsketch=this.webpackJsonpsketch||[]).push([[0],{20:function(e,t,a){e.exports={wrapper:"Panel_wrapper__o97Tj",header:"Panel_header__1ho3T",close:"Panel_close__3SCzl",opened:"Panel_opened__1xDq5"}},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(83),i=a.n(r),s=a(4),o=a(11),l=a(16),u=a.n(l),d=a.p+"static/media/close.ae19aa75.svg",p=a(20),h=a.n(p),f=a(1),j=function(e){var t=e.opened,a=e.onClose,n=e.title,c=e.children;return Object(f.jsxs)("div",{className:u()(h.a.wrapper,Object(o.a)({},h.a.opened,t)),children:[Object(f.jsxs)("div",{className:h.a.header,children:[n,Object(f.jsx)(g,{onClick:a,className:h.a.close,children:Object(f.jsx)("img",{src:d,alt:""})})]}),c]})},b=a(53),v=a.n(b),g=function(e){var t=e.children,a=e.onClick,n=e.className,c=e.style,r=e.active,i=void 0!==r&&r;return Object(f.jsx)("button",{onClick:a,className:u()(v.a.wrapper,n,Object(o.a)({},v.a.active,i)),style:c,children:t})},m=a(91),O=518,x=970,_=8,w="circle",C="rgba(232, 248, 255, 0.1)",y="#cef0fe",k=1,S="#ff0000",A={height:O,width:x,backgroundColor:"#fff"},N=n.createContext(null),E=a(17),D=Object(E.createAction)("SKETCH/SET_CURRENT_COLOR")(),B=Object(E.createAction)("SKETCH/SET_MODE")(),T=Object(E.createAction)("SKETCH/SET_BRUSH")(),M=function(e){e.util.trimCanvas=function(e){for(var t=e.getContext("2d"),a=e.width,n=e.height,c=[],r=[],i=t.getImageData(0,0,a,n),s=function(e,t){return e-t},o=0;o<n;o++)for(var l=0;l<a;l++)0<i.data[4*(o*a+l)+3]&&(c.push(l),r.push(o));return c.sort(s),r.sort(s),a=c[n=c.length-1]-c[0],n=r[n]-r[0],i=t.getImageData(c[0],r[0],a,n),e.width=a,e.height=n,t.putImageData(i,0,0),{x:c[0],y:r[0]}},e.Point.prototype.normalize=function(e){null!==e&&void 0!==e||(e=1);var t=this.distanceFrom({x:0,y:0});return 0<t&&(this.x=this.x/t*e,this.y=this.y/t*e),this},e.BaseBrush.prototype.convertToImg=function(){var t=this.canvas.getRetinaScaling(),a=e.util.copyCanvasElement(this.canvas.upperCanvasEl),n=e.util.trimCanvas(a);a=new e.Image(a),this.canvas.add(a),a.set({left:n.x/t,top:n.y/t,scaleX:1/t,scaleY:1/t}).setCoords(),this.canvas.clearContext(this.canvas.contextTop)},e.util.getRandom=function(e,t){return t=t||0,Math.random()*((e||1)-t)+t},e.util.clamp=function(e,t,a){return"number"!==typeof a&&(a=0),e>t?t:e<a?a:e},e.CrayonBrush=e.util.createClass(e.BaseBrush,{color:"#000",opacity:.6,width:1,_baseWidth:1,_inkAmount:10,_latestStrokeLength:0,_point:null,_sep:5,_size:0,_latest:null,_drawn:!1,initialize:function(t,a){a=a||{},this.canvas=t,this.width=a.width||t.freeDrawingBrush.width,this.color=a.color||t.freeDrawingBrush.color,this.opacity=a.opacity||t.contextTop.globalAlpha,this._point=new e.Point(0,0)},onMouseDown:function(e){this.canvas.contextTop.globalAlpha=this.opacity,this._size=this.width/2+this._baseWidth,this._drawn=!1,this.set(e)},onMouseMove:function(e){this.update(e),this.draw(this.canvas.contextTop)},onMouseUp:function(){this._drawn&&this.convertToImg(),this._latest=null,this._latestStrokeLength=0,this.canvas.contextTop.globalAlpha=1},set:function(t){this._latest?this._latest.setFromPoint(this._point):this._latest=new e.Point(t.x,t.y),e.Point.prototype.setFromPoint.call(this._point,t)},update:function(e){this.set(e),this._latestStrokeLength=this._point.subtract(this._latest).distanceFrom({x:0,y:0})},draw:function(t){var a,n=this._point.subtract(this._latest),c=Math.ceil(this._size/2),r=Math.floor(n.distanceFrom({x:0,y:0})/c)+1;n.normalize(c);var i=this._sep*e.util.clamp(this._inkAmount/this._latestStrokeLength*3,1,.5),s=Math.ceil(this._size*this._sep),o=this._size/2;for(t.save(),t.fillStyle=this.color,t.beginPath(),c=0;c<s;c++)for(a=0;a<r;a++){var l=this._latest.add(n.multiply(a)),u=e.util.getRandom(o),d=e.util.getRandom(2*Math.PI),p=e.util.getRandom(i,i/2),h=e.util.getRandom(i,i/2),f=l.x+u*Math.sin(d)-p/2;l=l.y+u*Math.cos(d)-h/2,t.rect(f,l,p,h)}t.fill(),t.restore(),this._drawn=!0},_render:function(){}})},R=window.fabric,P=function(e,t){t&&"activeSelection"===t.type?t.forEachObject((function(t){e.remove(t)})):e.remove(t),e.discardActiveObject().requestRenderAll()},F=function(e,t){var a=e.getActiveObject();a&&("activeSelection"===a.type?a.forEachObject((function(e){I(e,t)})):I(a,t),e.renderAll())},I=function(e,t){"path"!==e.type||e.shadow||e.set({stroke:t}),("rect"===e.type||"circle"===e.type||"i-text"===e.type||e.fromSVG)&&e.set({fill:t}),"path"===e.type&&e.shadow&&(e.shadow.color=t),"image"===e.type&&(e.filters[0]=new R.Image.filters.BlendColor({color:t,mode:"tint"}),e.applyFilters())},z=a(6),L=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},V=function(){var e=x/2,t=O/2;return{top:L(t-180,t+70),left:L(e-350,e+50)}},W=window.fabric,H=function(e,t,a){var n,c,r,i=e.getContext().getImageData(Math.round((t+e.viewportTransform[4])*W.devicePixelRatio*e.getZoom()),Math.round((a+e.viewportTransform[5])*W.devicePixelRatio*e.getZoom()),1,1).data;return n=i[0],c=i[1],r=i[2],"#".concat(((1<<24)+(n<<16)+(c<<8)+r).toString(16).slice(1))},G=a.p+"static/media/dropper.69cb0ffd.svg",U=a(55),K=a.n(U),q=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useState(""),i=Object(s.a)(r,2),o=i[0],l=i[1],u=c.a.useState({top:460,left:260}),d=Object(s.a)(u,2),p=d[0],h=d[1],j=c.a.useContext(N),b=j.canvas,v=j.dispatch,m=function(e){var t=H(b,e.pointer.x,e.pointer.y);h({top:e.pointer.y-10,left:e.pointer.x+20}),l(t)},O=function(){n(!1),b.off("mouse:down",x),b.off("mouse:move",m),function(e){e.selection=!0,e.getObjects().forEach((function(e){e.set("selectable",!0),e.hoverCursor="move"}))}(b)},x=function(e){O();var t=H(b,e.pointer.x,e.pointer.y);v(D({currentColor:t}))};return Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsx)("div",{className:K.a.colorView,style:Object(z.a)({backgroundColor:o},p)}),Object(f.jsx)(g,{active:a,onClick:function(){a?O():(n(!0),function(e){e.selection=!1,e.getObjects().forEach((function(e){e.set("selectable",!1),e.hoverCursor="default"}))}(b),v(B({mode:"hand"})),b.on("mouse:down",x),b.on("mouse:move",m))},className:K.a.wrapper,children:Object(f.jsx)("img",{src:G,alt:""})})]})},Y=a(31),X=a.n(Y),J=function(){var e=c.a.useState(["",""]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N),i=r.state,o=r.dispatch,l=i.currentColor;c.a.useEffect((function(){n((function(e){return[l,e[0]]}))}),[l]);var u=function(e){o(D({currentColor:e}))};return Object(f.jsxs)("div",{className:X.a.wrapper,children:[Object(f.jsx)("button",{className:X.a.color,style:{backgroundColor:a[0]},onClick:function(){return u(a[0])}}),Object(f.jsx)("button",{className:X.a.color,style:{backgroundColor:a[1]||"white"},onClick:function(){return u(a[1]||"white")}})]})},Q=a(32),Z=a.n(Q),$=function(){var e=c.a.useState(S),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N),i=r.canvas,o=r.dispatch,l=r.state.currentColor;c.a.useEffect((function(){n(l),F(i,l)}),[l,i]);return Object(f.jsxs)("div",{className:Z.a.pickerWrapper,children:[Object(f.jsx)(q,{}),Object(f.jsx)(m.a,{className:Z.a.picker,color:a,onChange:function(e){n(e.hex)},onChangeComplete:function(e){o(D({currentColor:e.hex}))},pointer:function(){return Object(f.jsx)("div",{className:Z.a.pointer,style:{backgroundColor:a}})}}),Object(f.jsx)(J,{})]})},ee=a(52),te=[{type:"eraser",icon:a.p+"static/media/brush1.4bb3634c.svg"},{type:"marker",icon:a.p+"static/media/brush2.bd74d5cf.svg"},{type:"magic",icon:a.p+"static/media/brush3.38a28f48.svg"},{type:"pencil",icon:a.p+"static/media/brush4.4c238ed7.svg"},{type:"pen",icon:a.p+"static/media/brush5.b0040eae.svg"}],ae=a.p+"static/media/highlight.a5e0d7ce.svg",ne=window.fabric,ce=function(e,t,a,n){"marker"!==t&&"magic"!==t&&"pencil"!==t||(e.freeDrawingBrush=new ne.PencilBrush(e)),"eraser"===t?e.freeDrawingBrush=new ne.EraserBrush(e):e.freeDrawingBrush.color=n,"pen"===t&&(e.freeDrawingBrush=new ne.CrayonBrush(e)),"marker"===t&&(e.freeDrawingBrush.color=function(e,t){var a=e.replace("#",""),n=parseInt(a.substring(0,2),16),c=parseInt(a.substring(2,4),16),r=parseInt(a.substring(4,6),16);return"rgba(".concat(n,",").concat(c,",").concat(r,",").concat(t/100,")")}(n,20)),"magic"===t&&(e.freeDrawingBrush.color="#fff",e.freeDrawingBrush.shadow=new ne.Shadow({blur:30,affectStroke:!0,color:n})),e.freeDrawingBrush.width=a},re=a(8),ie=a.n(re),se=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useState(""),i=Object(s.a)(r,2),l=i[0],d=i[1],p=c.a.useState(10),h=Object(s.a)(p,2),b=h[0],v=h[1],m=c.a.useContext(N),O=m.state,x=m.canvas,_=m.dispatch,w=O.currentColor,C=O.mode;c.a.useEffect((function(){x.isDrawingMode="drawing"===C,"drawing"!==C&&d("")}),[C,x]),c.a.useEffect((function(){ce(x,l,b,w)}),[l,x,b,w]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{active:"drawing"===C,onClick:function(){return n(!0)},children:Object(f.jsx)("img",{src:ae,alt:""})}),Object(f.jsx)(j,{opened:a,onClose:function(){return n(!1)},children:Object(f.jsxs)("div",{className:ie.a.panel,children:[Object(f.jsxs)("div",{className:ie.a.brushSize,children:[Object(f.jsx)("div",{className:ie.a.exampleWrapper,children:Object(f.jsx)("div",{className:ie.a.example,style:{width:b,height:b,backgroundColor:w}})}),Object(f.jsx)(ee.a,{className:ie.a.slider,orientation:"vertical",defaultValue:b,renderThumb:function(e,t){return Object(f.jsx)("div",Object(z.a)(Object(z.a)({},e),{},{className:ie.a.thumb,children:Object(f.jsx)("div",{className:ie.a.value,children:t.valueNow})}))},invert:!0,min:1,max:60,onChange:function(e){v(e)}})]}),Object(f.jsx)("div",{className:ie.a.brushes,children:te.map((function(e){return Object(f.jsx)("button",{onClick:function(){return t=e.type,_(B({mode:"drawing"})),d(t),void n(!1);var t},className:u()(ie.a.brush,Object(o.a)({},ie.a.active,l===e.type)),children:Object(f.jsx)("img",{src:e.icon,alt:""})},e.type)}))})]})})]})},oe=a.p+"static/media/hand.cf210679.svg",le=function(){var e=c.a.useContext(N),t=e.state,a=e.dispatch;return Object(f.jsx)(g,{onClick:function(){a(B({mode:"hand"}))},active:"hand"===t.mode,children:Object(f.jsx)("img",{src:oe,alt:""})})},ue=a.p+"static/media/picture.b59a650c.svg",de=a.p+"static/media/circle.1be35666.svg",pe=a.p+"static/media/circle-outlined.55858944.svg",he=a.p+"static/media/rectangle.06a5077b.svg",fe=a.p+"static/media/rectangle-outlined.f492c7dd.svg",je=a.p+"static/media/star.9acb5ada.svg",be=a.p+"static/media/star-outlined.0daaff4a.svg",ve=a.p+"static/media/triangle.fbe306e2.svg",ge=a.p+"static/media/triangle-outlined.a25dd2aa.svg",me=a.p+"static/media/arrow-down.66902268.svg",Oe=a.p+"static/media/arrow-up.c13fee86.svg",xe=a.p+"static/media/arrow-left.6c52d128.svg",_e=[{title:"circle",src:de},{title:"circleOutlined",src:pe},{title:"rectangle",src:he},{title:"rectangleOutlined",src:fe},{title:"star",src:je},{title:"starOutlined",src:be},{title:"triangle",src:ve},{title:"triangleOutlined",src:ge},{title:"arrowDown",src:me},{title:"arrowRight",src:a.p+"static/media/arrow-right.545fd979.svg"},{title:"arrowLeft",src:xe},{title:"arrowUp",src:Oe},{title:"thunderOutlined",src:a.p+"static/media/thunder-outlined.96c0359a.svg"},{title:"thunder",src:a.p+"static/media/thunder.ddcd8d6d.svg"},{title:"cloudOutlined",src:a.p+"static/media/cloud-outlined.c144d388.svg"},{title:"cloud",src:a.p+"static/media/cloud.eda4a7bc.svg"}],we=window.fabric,Ce=a(56),ye=a.n(Ce),ke=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N),i=r.canvas,o=r.dispatch,l=function(e){o(B({mode:"hand"})),function(e,t){var a=V();we.loadSVGFromURL(t,(function(t){var n=we.util.groupSVGElements(t);n.set(Object(z.a)({},a)),e.add(n),e.setActiveObject(n),e.renderAll()}))}(i,e)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{onClick:function(){return n(!0)},children:Object(f.jsx)("img",{src:ue,alt:""})}),Object(f.jsx)(j,{opened:a,onClose:function(){return n(!1)},children:Object(f.jsx)("div",{className:ye.a.shapeList,children:_e.map((function(e){return Object(f.jsx)("button",{onClick:function(){return l(e.src)},className:ye.a.shape,children:Object(f.jsx)("img",{src:e.src,alt:""})},e.title)}))})})]})},Se=a.p+"static/media/text.fc450231.svg",Ae=window.fabric,Ne=function(){var e=c.a.useContext(N),t=e.state,a=e.canvas,n=e.dispatch,r=t.currentColor;return Object(f.jsx)(g,{onClick:function(){!function(e,t){var a=V(),n=new Ae.IText("",Object(z.a)(Object(z.a)({},a),{},{fontSize:28,lineHeight:.95,fill:t,fontFamily:"Tahoma",cursorColor:"black",textAlign:"center"}));n.enterEditing(),e.add(n),e.setActiveObject(n),e.renderAll()}(a,r),n(B({mode:"hand"}))},children:Object(f.jsx)("img",{src:Se,alt:""})})},Ee=a(88),De=a.n(Ee),Be=function(){return Object(f.jsxs)("div",{className:De.a.wrapper,children:[Object(f.jsx)(le,{}),Object(f.jsx)(se,{}),Object(f.jsx)(Ne,{}),Object(f.jsx)(ke,{})]})},Te=function(e){var t=e.getCenterPoint();return{top:15+t.y+e.height*e.scaleY/2,left:t.x}},Me=function(){var e=c.a.useContext(N),t=e.canvas,a=e.state.currentColor;return Object(f.jsx)(g,{onClick:function(){F(t,a)},style:{backgroundColor:a}})},Re=a.p+"static/media/delete.c022e131.svg",Pe=function(){var e=c.a.useContext(N).canvas;return Object(f.jsx)(g,{onClick:function(){var t=e.getActiveObject();P(e,t)},children:Object(f.jsx)("img",{src:Re,alt:""})})},Fe=a.p+"static/media/copy.15beb7fb.svg",Ie=function(){var e=c.a.useContext(N).canvas;return Object(f.jsx)(g,{onClick:function(){var t=e.getActiveObject();t.clone((function(a){e.discardActiveObject(),a.set(Object(z.a)({top:a.top+8,left:a.left+8},t.fromSVG?{fromSVG:!0}:{})),"activeSelection"===a.type?(a.canvas=e,a.forEachObject((function(a,n){t.getObjects()[n].fromSVG&&a.set({fromSVG:!0}),e.add(a)}))):e.add(a),e.setActiveObject(a),e.requestRenderAll()}))},children:Object(f.jsx)("img",{src:Fe,alt:""})})},ze=a.p+"static/media/bold.a0908168.svg",Le=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N).canvas;c.a.useEffect((function(){"bold"===r.getActiveObject().fontWeight&&n(!0)}),[r]);return Object(f.jsx)(g,{active:a,onClick:function(){var e=r.getActiveObject();a?(e.set({fontWeight:"normal"}),n(!1)):(e.set({fontWeight:"bold"}),n(!0)),r.renderAll()},children:Object(f.jsx)("img",{src:ze,alt:""})})},Ve=a.p+"static/media/italic.cf5cd34d.svg",We=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N).canvas;c.a.useEffect((function(){"italic"===r.getActiveObject().fontStyle&&n(!0)}),[r]);return Object(f.jsx)(g,{active:a,onClick:function(){var e=r.getActiveObject();a?(e.set({fontStyle:"normal"}),n(!1)):(e.set({fontStyle:"italic"}),n(!0)),r.renderAll()},children:Object(f.jsx)("img",{src:Ve,alt:""})})},He=a.p+"static/media/underline.c56bb0d2.svg",Ge=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N).canvas;c.a.useEffect((function(){r.getActiveObject().underline&&n(!0)}),[r]);return Object(f.jsx)(g,{active:a,onClick:function(){var e=r.getActiveObject();a?(e.set({underline:!1}),n(!1)):(e.set({underline:!0}),n(!0)),r.renderAll()},children:Object(f.jsx)("img",{src:He,alt:""})})},Ue=a.p+"static/media/align-left.277ba860.svg",Ke=a.p+"static/media/align-center.32449acd.svg",qe=a.p+"static/media/align-right.f9735e6a.svg",Ye=function(){var e=c.a.useState("center"),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useContext(N).canvas;c.a.useEffect((function(){n(r.getActiveObject().textAlign)}),[r]);var i=function(e){n(e),r.getActiveObject().set({textAlign:e}),r.renderAll()};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{active:"left"===a,onClick:function(){return i("left")},children:Object(f.jsx)("img",{src:Ue,alt:""})}),Object(f.jsx)(g,{active:"center"===a,onClick:function(){return i("center")},children:Object(f.jsx)("img",{src:Ke,alt:""})}),Object(f.jsx)(g,{active:"right"===a,onClick:function(){return i("right")},children:Object(f.jsx)("img",{src:qe,alt:""})})]})},Xe=a(89),Je=a.n(Xe),Qe=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useState(""),i=Object(s.a)(r,2),o=i[0],l=i[1],u=c.a.useState({top:0,left:0}),d=Object(s.a)(u,2),p=d[0],h=d[1],j=c.a.useContext(N).canvas;return c.a.useEffect((function(){var e=function(e){h(Te(e.transform.target))},t=function(t){var a=t.target;a&&(l(a.type),n(!0),h(Te(a)),a.on("moving",e),a.on("scaling",e),"i-text"===a.type&&a.on("changed",(function(){h(Te(a))})))};j.on("selection:created",t),j.on("selection:updated",t),j.on("selection:cleared",(function(t){n(!1),t.deselected&&(t.deselected[0].off("moving",e),t.deselected[0].off("scaling",e),"i-text"===t.deselected[0].type&&(j.defaultCursor="default",t.deselected[0].off("changed"),function(e,t){""===t.text&&(e.remove(t),e.renderAll())}(j,t.deselected[0])))}))}),[j]),Object(f.jsx)(f.Fragment,{children:a&&Object(f.jsxs)("div",{style:Object(z.a)({},p),className:Je.a.wrapper,children:[Object(f.jsx)(Me,{}),Object(f.jsx)(Pe,{}),Object(f.jsx)(Ie,{}),"i-text"===o&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Le,{}),Object(f.jsx)(We,{}),Object(f.jsx)(Ge,{}),Object(f.jsx)(Ye,{})]})]})})},Ze={currentColor:S,mode:"hand",brushType:"pencil"},$e=Object(E.createReducer)(Ze).handleAction(D,(function(e,t){var a=t.payload.currentColor;return Object(z.a)(Object(z.a)({},e),{},{currentColor:a})})).handleAction(T,(function(e,t){var a=t.payload.brushType;return Object(z.a)(Object(z.a)({},e),{},{brushType:a})})).handleAction(B,(function(e,t){var a=t.payload.mode;return Object(z.a)(Object(z.a)({},e),{},{mode:a})})),et=a(90),tt=a.n(et),at=window.fabric,nt=function(){var e=c.a.useReducer($e,Ze),t=Object(s.a)(e,2),a=t[0],n=t[1],r=c.a.useRef(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}()),i=c.a.useRef(null),o=c.a.useState(!1),l=Object(s.a)(o,2),u=l[0],d=l[1];return c.a.useEffect((function(){var e;r.current&&(i.current=new at.Canvas(r.current,A),(e=i.current)&&(R.Object.prototype.cornerStyle=w,R.Object.prototype.cornerSize=_,e.selectionColor=C,e.selectionBorderColor=y,e.selectionLineWidth=k,M(R),document.addEventListener("keydown",(function(t){if("Backspace"===t.key){var a=e.getActiveObject();a.isEditing||P(e,a)}}))),d(!0))}),[]),Object(f.jsxs)("div",{className:tt.a.wrapper,children:[Object(f.jsx)("canvas",{id:r.current}),u&&Object(f.jsxs)(N.Provider,{value:{canvas:i.current,dispatch:n,state:a},children:[Object(f.jsx)($,{}),Object(f.jsx)(Be,{}),Object(f.jsx)(Qe,{})]})]})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(nt,{})}),document.getElementById("root"))},31:function(e,t,a){e.exports={wrapper:"ColorHistory_wrapper__3urOk",color:"ColorHistory_color__3bXgN"}},32:function(e,t,a){e.exports={pickerWrapper:"ColorPicker_pickerWrapper__FIb-p",picker:"ColorPicker_picker__-UzkV",pointer:"ColorPicker_pointer__1Mkah"}},53:function(e,t,a){e.exports={wrapper:"Button_wrapper__1oiSI",active:"Button_active__1Qvou"}},55:function(e,t,a){e.exports={wrapper:"Eyedropper_wrapper__3cxt5",colorView:"Eyedropper_colorView__1be11"}},56:function(e,t,a){e.exports={shapeList:"Figures_shapeList__xB92s",shape:"Figures_shape__1p-K4"}},8:function(e,t,a){e.exports={panel:"Drawing_panel__2YMND",brushSize:"Drawing_brushSize__KfiI2",exampleWrapper:"Drawing_exampleWrapper__3Utvu",example:"Drawing_example__2HB4X",brushes:"Drawing_brushes__3-VLc",brush:"Drawing_brush__3ydnR",active:"Drawing_active__2CsHw",leaves:"Drawing_leaves__2eNQa",slider:"Drawing_slider__3Ygcy",thumb:"Drawing_thumb__1NL88",value:"Drawing_value__11aHN"}},88:function(e,t,a){e.exports={wrapper:"RightControlPanel_wrapper__3bH1D"}},89:function(e,t,a){e.exports={wrapper:"ObjectMenu_wrapper__7LOmj"}},90:function(e,t,a){e.exports={wrapper:"Sketch_wrapper__2qscz"}}},[[205,1,2]]]);
//# sourceMappingURL=main.64706223.chunk.js.map