webpackJsonp([1],{0:function(l,n,t){l.exports=t("cDNt")},cDNt:function(l,n,t){"use strict";function u(l){return p._19(0,[p._16(402653184,1,{fileInput:0}),(l()(),p._4(0,[[1,0],["file",1]],null,0,"input",[["tabindex","-1"],["type","file"]],[[1,"accept",0]],[[null,"change"]],function(l,n,t){var u=!0,e=l.component;if("change"===n){u=!1!==e.notifyFileSelected()&&u}return u},null,null)),(l()(),p._18(null,["\n"]))],null,function(l,n){l(n,1,0,n.component.accept)})}function e(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-file-picker",[],null,null,null,u,F)),p._2(49152,null,0,k,[],null,null)],null,null)}function i(l){return p._19(0,[p._16(402653184,1,{canvas:0}),(l()(),p._4(0,null,null,3,"div",[["class","sizer"]],[[4,"padding-bottom",null]],null,null,null,null)),(l()(),p._18(null,["\n  "])),(l()(),p._4(0,[[1,0],["canvas",1]],null,0,"canvas",[],[[8,"width",0],[8,"height",0]],null,null,null,null)),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n"]))],null,function(l,n){var t=n.component;l(n,1,0,t.height/t.width*100+"%"),l(n,3,0,t.width,t.height)})}function a(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-canvas",[],null,null,null,i,T)),p._2(49152,null,0,I,[],null,null)],null,null)}function r(l){return p._19(0,[(l()(),p._4(0,null,null,22,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.train()&&u}return u},null,null)),(l()(),p._18(null,["\n            Train >\n          "])),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,13,"div",[["class","mt-1"]],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,7,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),p._18(null,["\n            "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,20).open()&&u}return u},null,null)),(l()(),p._18(null,["\n              Load\n            "])),(l()(),p._18(null,["\n            "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.save()&&u}return u},null,null)),(l()(),p._18(null,["\n              Save\n            "])),(l()(),p._18(null,["\n          "])),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0,e=l.component;if("onFileSelected"===n){u=!1!==e.loadNetwork(t)&&u}return u},u,F)),p._2(49152,[["pickerNetwork",4]],0,k,[],{accept:[0,"accept"]},{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n      "]))],function(l,n){l(n,20,0,".json")},null)}function o(l){return p._19(0,[(l()(),p._4(0,null,null,17,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"p",[["class","mb-1 text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Training..."])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-outline-warning"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.stopTraining()&&u}return u},null,null)),(l()(),p._18(null,["\n          Stop\n        "])),(l()(),p._18(null,["\n\n        "])),(l()(),p._4(0,null,null,8,"div",[["class","mt-3 text-left w-75"]],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,5,"code",[],null,null,null,null,null)),(l()(),p._18(null,["Error: ","\n            "])),(l()(),p._4(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._18(null,["\n            Iterations: ","\n            "])),(l()(),p._4(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._18(null,["\n            Rate: ","\n          "])),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n      "]))],null,function(l,n){var t=n.component;l(n,11,0,t.error),l(n,13,0,t.iterations),l(n,15,0,t.rate)})}function c(l){return p._19(0,[p._16(402653184,1,{canvasInput:0}),p._16(402653184,2,{canvasOutput:0}),p._16(402653184,3,{canvasSource:0}),p._16(402653184,4,{canvasResult:0}),(l()(),p._4(0,null,null,1,"a",[["href","https://github.com/linktothapast/photo-manipulation-ml"]],null,null,null,null,null)),(l()(),p._4(0,null,null,0,"img",[["alt","Fork me on GitHub"],["data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"],["src","https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"],["style","position: absolute; top: 0; right: 0; border: 0;"]],null,null,null,null,null)),(l()(),p._18(null,["\n\n"])),(l()(),p._4(0,null,null,28,"div",[["class","bg-primary text-white"]],null,null,null,null,null)),(l()(),p._18(null,["\n  "])),(l()(),p._4(0,null,null,25,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),p._18(null,["Photo Manipulation with Machine Learning"])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,16,"p",[],null,null,null,null,null)),(l()(),p._18(null,["\n      Choose an "])),(l()(),p._4(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),p._18(null,["input"])),(l()(),p._18(null,[" photo and an "])),(l()(),p._4(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),p._18(null,["output"])),(l()(),p._18(null,[" photo, and press "])),(l()(),p._4(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),p._18(null,["Train"])),(l()(),p._18(null,[".\n      Once the neural network has finished training, select another "])),(l()(),p._4(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),p._18(null,["source"])),(l()(),p._18(null,[" photo and watch the app "])),(l()(),p._4(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),p._18(null,["generate"])),(l()(),p._18(null,[" a new photo based on what it learned!\n    "])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,1,"p",[["class","small mb-0"]],null,null,null,null,null)),(l()(),p._18(null,["For best results, apply an effect to the input photo (such as sepia or grayscale) and feed it to the network as the output photo."])),(l()(),p._18(null,["\n  "])),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n\n"])),(l()(),p._4(0,null,null,37,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),p._18(null,["\n\n  "])),(l()(),p._4(0,null,null,34,"div",[["class","row"]],null,null,null,null,null)),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Input"])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,50).open()&&u}return u},i,T)),p._2(49152,[[1,4],["canvasInput",4]],0,I,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,47).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerInput",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,7,"div",[["class","col-12 col-md-4 text-center align-self-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p.Y(16777216,null,null,1,null,r)),p._2(16384,null,0,O.c,[p.N,p.K],{ngIf:[0,"ngIf"]},null),(l()(),p._18(null,["\n      "])),(l()(),p.Y(16777216,null,null,1,null,o)),p._2(16384,null,0,O.c,[p.N,p.K],{ngIf:[0,"ngIf"]},null),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Output"])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,71).open()&&u}return u},i,T)),p._2(49152,[[2,4],["canvasOutput",4]],0,I,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,68).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerOutput",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n  "])),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n\n"])),(l()(),p._4(0,null,null,34,"div",[["class","bg-dark text-white"]],null,null,null,null,null)),(l()(),p._18(null,["\n  "])),(l()(),p._4(0,null,null,31,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Source"])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,91).open()&&u}return u},i,T)),p._2(49152,[[3,4],["canvasSource",4]],0,I,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,88).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerSource",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,4,"div",[["class","col-12 col-md-4 text-center align-self-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.generate()&&u}return u},null,null)),(l()(),p._18(null,["\n          Generate >\n        "])),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,7,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Result"])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-canvas",[],null,null,null,i,T)),p._2(49152,[[4,4],["canvasResult",4]],0,I,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n  "])),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n"]))],function(l,n){var t=n.component;l(n,47,0,t.canvasWidth,t.canvasHeight),l(n,56,0,!t.isTraining),l(n,59,0,t.isTraining),l(n,68,0,t.canvasWidth,t.canvasHeight),l(n,88,0,t.canvasWidth,t.canvasHeight),l(n,106,0,t.canvasWidth,t.canvasHeight)},null)}function s(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-root",[],null,null,null,c,D)),p._2(114688,null,0,m,[f,g.c],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var p=t("/oeL"),_={production:!0},h=function(){function l(){}return l}(),d=t("2bhY"),f=function(){function l(){this._isTrained=!1,this.network=new d.Architect.Perceptron(27,8,3)}return l.prototype.load=function(l){this.network=d.Architect.Perceptron.fromJSON(l),this._isTrained=!0},l.prototype.toJSON=function(){return this.network.toJSON()},l.prototype.train=function(l){var n=this,t=l.data,u=l.iterationCallback,e=void 0===u?null:u;return new d.Trainer(this.network).trainAsync(t,{rate:.1,iterations:2e4,error:.005,cost:d.Trainer.cost.COST_ENTROPY,schedule:{every:10,do:e}}).then(function(){n._isTrained=!0})},Object.defineProperty(l.prototype,"isTrained",{get:function(){return this._isTrained},enumerable:!0,configurable:!0}),l.prototype.activate=function(l){return this.network.activate(l)},l.ctorParameters=function(){return[]},l}(),g=t("XKz0"),v=t("M43J"),b=t.n(v),m=function(){function l(l,n){this.network=l,this.http=n,this.canvasWidth=600,this.canvasHeight=350,this.isTraining=!1}return l.prototype.ngOnInit=function(){this.canvasInput.drawImageFromUrl("/assets/car-beetle-red.png"),this.canvasOutput.drawImageFromUrl("/assets/car-beetle-blue.png"),this.canvasSource.drawImageFromUrl("/assets/car-jetta-red.png")},l.prototype.loadNetwork=function(l){var n=this;return new Promise(function(n){var t=new FileReader;t.onload=function(l){var t=l.target.result;n(t)},t.readAsDataURL(l)}).then(function(l){n.http.get(l).subscribe(function(l){n.network.load(l)})})},l.prototype.save=function(){var l=this.network.toJSON(),n=new Blob([JSON.stringify(l)],{type:"application/json;charset=utf-8"});b()(n,"network.json")},l.prototype.train=function(){var l=this,n=this.getTrainingData(),t=this,u=function(l){return t.error=l.error,t.iterations=l.iterations,t.rate=l.rate,!t.isTraining};this.isTraining=!0,this.network.train({data:n,iterationCallback:u}).then(function(){l.isTraining=!1,alert("Training done!")})},l.prototype.stopTraining=function(){this.isTraining=!1},l.prototype.getTrainingData=function(){for(var l=this.canvasInput.getImageData().data,n=this.canvasOutput.getImageData().data,t=[],u=0;u<this.canvasWidth;u++)for(var e=0;e<this.canvasHeight;e++){var i=[],a=[];i.push.apply(i,this.getPixel(l,u-1,e-1)),i.push.apply(i,this.getPixel(l,u+0,e-1)),i.push.apply(i,this.getPixel(l,u+1,e-1)),i.push.apply(i,this.getPixel(l,u-1,e+0)),i.push.apply(i,this.getPixel(l,u+0,e+0)),i.push.apply(i,this.getPixel(l,u+1,e+0)),i.push.apply(i,this.getPixel(l,u-1,e+1)),i.push.apply(i,this.getPixel(l,u+0,e+1)),i.push.apply(i,this.getPixel(l,u+1,e+1)),a.push.apply(a,this.getPixel(n,u,e)),t.push({input:i,output:a})}return t},l.prototype.getPixel=function(l,n,t){var u=4*(n+t*this.canvasWidth),e=l.slice(u,u+4);return 4===e.length?[e[0]/255,e[1]/255,e[2]/255]:[0,0,0]},l.prototype.generate=function(){if(!this.network.isTrained)return void alert("Train the neural network first :)");for(var l=this.canvasSource.getImageData(),n=this.canvasResult.getImageData(),t=0;t<this.canvasWidth;t++)for(var u=0;u<this.canvasHeight;u++){var e=[];e.push.apply(e,this.getPixel(l.data,t-1,u-1)),e.push.apply(e,this.getPixel(l.data,t+0,u-1)),e.push.apply(e,this.getPixel(l.data,t+1,u-1)),e.push.apply(e,this.getPixel(l.data,t-1,u+0)),e.push.apply(e,this.getPixel(l.data,t+0,u+0)),e.push.apply(e,this.getPixel(l.data,t+1,u+0)),e.push.apply(e,this.getPixel(l.data,t-1,u+1)),e.push.apply(e,this.getPixel(l.data,t+0,u+1)),e.push.apply(e,this.getPixel(l.data,t+1,u+1));var i=this.network.activate(e),a=4*(t+u*this.canvasWidth);n.data[a+0]=255*i[0],n.data[a+1]=255*i[1],n.data[a+2]=255*i[2],n.data[a+3]=255}this.canvasResult.putImageData(n)},l.ctorParameters=function(){return[{type:f},{type:g.c}]},l}(),y=[".clickable[_ngcontent-%COMP%]{cursor:pointer}"],w=["input[_ngcontent-%COMP%]{position:fixed;top:-9999px;left:-9999px}"],k=function(){function l(){this.accept="image/*",this.onFileSelected=new p.m}return l.prototype.open=function(){this.fileInput.nativeElement.click()},l.prototype.notifyFileSelected=function(){var l=this.fileInput.nativeElement.files[0];this.onFileSelected.emit(l)},l}(),x=[w],F=p._1({encapsulation:0,styles:x,data:{}}),S=(p.Z("app-file-picker",k,e,{accept:"accept"},{onFileSelected:"onFileSelected"},[]),["[_nghost-%COMP%]{display:block}.sizer[_ngcontent-%COMP%]{width:100%;height:0;position:relative}canvas[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:3px;overflow:hidden;border:1px solid #ccc;background:#fff}"]),I=function(){function l(){this.width=320,this.height=240}return l.prototype.getContext=function(){return this.canvas.nativeElement.getContext("2d")},l.prototype.drawImageFromFile=function(l){var n=this,t=new FileReader;t.onload=function(l){return n.drawImageFromUrl(l.target.result)},t.readAsDataURL(l)},l.prototype.drawImageFromUrl=function(l){var n=this,t=new Image;t.onload=function(){return n.getContext().drawImage(t,0,0,n.width,n.height)},t.src=l},l.prototype.getImageData=function(){return this.getContext().getImageData(0,0,this.width,this.height)},l.prototype.putImageData=function(l){return this.getContext().putImageData(l,0,0)},l}(),P=[S],T=p._1({encapsulation:0,styles:P,data:{}}),O=(p.Z("app-canvas",I,a,{width:"width",height:"height"},{},[]),t("qbdv")),C=[y],D=p._1({encapsulation:0,styles:C,data:{}}),N=p.Z("app-root",m,s,{},{},[]),R=t("fc+i"),j=p._0(h,[m],function(l){return p._13([p._14(512,p.i,p.W,[[8,[N]],[3,p.i],p.x]),p._14(5120,p.v,p._12,[[3,p.v]]),p._14(4608,O.e,O.d,[p.v]),p._14(4608,p.h,p.h,[]),p._14(5120,p.a,p._5,[]),p._14(5120,p.t,p._10,[]),p._14(5120,p.u,p._11,[]),p._14(4608,R.b,R.s,[O.b]),p._14(6144,p.H,null,[R.b]),p._14(4608,R.e,R.f,[]),p._14(5120,R.c,function(l,n,t,u){return[new R.k(l),new R.o(n),new R.n(t,u)]},[O.b,O.b,O.b,R.e]),p._14(4608,R.d,R.d,[R.c,p.z]),p._14(135680,R.m,R.m,[O.b]),p._14(4608,R.l,R.l,[R.d,R.m]),p._14(6144,p.F,null,[R.l]),p._14(6144,R.p,null,[R.m]),p._14(4608,p.L,p.L,[p.z]),p._14(4608,R.g,R.g,[O.b]),p._14(4608,R.i,R.i,[O.b]),p._14(4608,g.h,g.m,[O.b,p.B,g.k]),p._14(4608,g.n,g.n,[g.h,g.l]),p._14(5120,g.a,function(l){return[l]},[g.n]),p._14(4608,g.j,g.j,[]),p._14(6144,g.i,null,[g.j]),p._14(4608,g.g,g.g,[g.i]),p._14(6144,g.b,null,[g.g]),p._14(5120,g.f,g.o,[g.b,[2,g.a]]),p._14(4608,g.c,g.c,[g.f]),p._14(4608,f,f,[]),p._14(512,O.a,O.a,[]),p._14(1024,p.l,R.q,[]),p._14(1024,p.b,function(l,n){return[R.r(l,n)]},[[2,R.h],[2,p.y]]),p._14(512,p.c,p.c,[[2,p.b]]),p._14(131584,p._3,p._3,[p.z,p.X,p.r,p.l,p.i,p.c]),p._14(2048,p.e,null,[p._3]),p._14(512,p.d,p.d,[p.e]),p._14(512,R.a,R.a,[[3,R.a]]),p._14(512,g.e,g.e,[]),p._14(512,g.d,g.d,[]),p._14(512,h,h,[]),p._14(256,g.k,"XSRF-TOKEN",[]),p._14(256,g.l,"X-XSRF-TOKEN",[])])});_.production&&Object(p.R)(),Object(R.j)().bootstrapModuleFactory(j).catch(function(l){return console.log(l)})},gFIY:function(l,n){function t(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="gFIY"}},[0]);