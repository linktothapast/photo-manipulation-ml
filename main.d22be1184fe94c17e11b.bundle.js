webpackJsonp([1],{0:function(l,n,t){l.exports=t("cDNt")},cDNt:function(l,n,t){"use strict";function u(l){return p._19(0,[p._16(402653184,1,{fileInput:0}),(l()(),p._4(0,[[1,0],["file",1]],null,0,"input",[["tabindex","-1"],["type","file"]],[[1,"accept",0]],[[null,"change"]],function(l,n,t){var u=!0,e=l.component;if("change"===n){u=!1!==e.notifyFileSelected()&&u}return u},null,null)),(l()(),p._18(null,["\n"]))],null,function(l,n){l(n,1,0,n.component.accept)})}function e(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-file-picker",[],null,null,null,u,F)),p._2(49152,null,0,k,[],null,null)],null,null)}function i(l){return p._19(0,[p._16(402653184,1,{canvas:0}),(l()(),p._4(0,null,null,3,"div",[["class","sizer"]],[[4,"padding-bottom",null]],null,null,null,null)),(l()(),p._18(null,["\n  "])),(l()(),p._4(0,[[1,0],["canvas",1]],null,0,"canvas",[],[[8,"width",0],[8,"height",0]],null,null,null,null)),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n"]))],null,function(l,n){var t=n.component;l(n,1,0,t.height/t.width*100+"%"),l(n,3,0,t.width,t.height)})}function a(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-canvas",[],null,null,null,i,O)),p._2(49152,null,0,P,[],null,null)],null,null)}function c(l){return p._19(0,[(l()(),p._4(0,null,null,22,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.train()&&u}return u},null,null)),(l()(),p._18(null,["\n            Train >\n          "])),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,13,"div",[["class","mt-1"]],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,7,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),p._18(null,["\n            "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,20).open()&&u}return u},null,null)),(l()(),p._18(null,["\n              Load\n            "])),(l()(),p._18(null,["\n            "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.save()&&u}return u},null,null)),(l()(),p._18(null,["\n              Save\n            "])),(l()(),p._18(null,["\n          "])),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0,e=l.component;if("onFileSelected"===n){u=!1!==e.loadNetwork(t)&&u}return u},u,F)),p._2(49152,[["pickerNetwork",4]],0,k,[],{accept:[0,"accept"]},{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n      "]))],function(l,n){l(n,20,0,".json")},null)}function o(l){return p._19(0,[(l()(),p._4(0,null,null,17,"div",[],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"p",[["class","mb-1 text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Training..."])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-outline-warning"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.stopTraining()&&u}return u},null,null)),(l()(),p._18(null,["\n          Stop\n        "])),(l()(),p._18(null,["\n\n        "])),(l()(),p._4(0,null,null,8,"div",[["class","mt-3 text-left w-75"]],null,null,null,null,null)),(l()(),p._18(null,["\n          "])),(l()(),p._4(0,null,null,5,"code",[],null,null,null,null,null)),(l()(),p._18(null,["Error: ","\n            "])),(l()(),p._4(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._18(null,["\n            Iterations: ","\n            "])),(l()(),p._4(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._18(null,["\n            Rate: ","\n          "])),(l()(),p._18(null,["\n        "])),(l()(),p._18(null,["\n      "]))],null,function(l,n){var t=n.component;l(n,11,0,t.error),l(n,13,0,t.iterations),l(n,15,0,t.rate)})}function r(l){return p._19(0,[p._16(402653184,1,{canvasInput:0}),p._16(402653184,2,{canvasOutput:0}),p._16(402653184,3,{canvasSource:0}),p._16(402653184,4,{canvasResult:0}),(l()(),p._4(0,null,null,37,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),p._18(null,["\n\n  "])),(l()(),p._4(0,null,null,34,"div",[["class","row"]],null,null,null,null,null)),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Input"])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,17).open()&&u}return u},i,O)),p._2(49152,[[1,4],["canvasInput",4]],0,P,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,14).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerInput",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,7,"div",[["class","col-12 col-md-4 text-center align-self-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p.Y(16777216,null,null,1,null,c)),p._2(16384,null,0,T.c,[p.N,p.K],{ngIf:[0,"ngIf"]},null),(l()(),p._18(null,["\n      "])),(l()(),p.Y(16777216,null,null,1,null,o)),p._2(16384,null,0,T.c,[p.N,p.K],{ngIf:[0,"ngIf"]},null),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Output"])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,38).open()&&u}return u},i,O)),p._2(49152,[[2,4],["canvasOutput",4]],0,P,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,35).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerOutput",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n  "])),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n\n"])),(l()(),p._4(0,null,null,34,"div",[["class","bg-dark text-white"]],null,null,null,null,null)),(l()(),p._18(null,["\n  "])),(l()(),p._4(0,null,null,31,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),p._18(null,["\n    "])),(l()(),p._4(0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,10,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Source"])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-canvas",[["class","clickable"]],null,[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==p._15(l,58).open()&&u}return u},i,O)),p._2(49152,[[3,4],["canvasSource",4]],0,P,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-file-picker",[],null,[[null,"onFileSelected"]],function(l,n,t){var u=!0;if("onFileSelected"===n){u=!1!==p._15(l,55).drawImageFromFile(t)&&u}return u},u,F)),p._2(49152,[["pickerSource",4]],0,k,[],null,{onFileSelected:"onFileSelected"}),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,4,"div",[["class","col-12 col-md-4 text-center align-self-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.generate()&&u}return u},null,null)),(l()(),p._18(null,["\n          Generate >\n        "])),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n      "])),(l()(),p._4(0,null,null,7,"div",[["class","col-12 col-md-4 text-center"]],null,null,null,null,null)),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"label",[["class","text-muted"]],null,null,null,null,null)),(l()(),p._18(null,["Result"])),(l()(),p._18(null,["\n        "])),(l()(),p._4(0,null,null,1,"app-canvas",[],null,null,null,i,O)),p._2(49152,[[4,4],["canvasResult",4]],0,P,[],{width:[0,"width"],height:[1,"height"]},null),(l()(),p._18(null,["\n      "])),(l()(),p._18(null,["\n    "])),(l()(),p._18(null,["\n  "])),(l()(),p._18(null,["\n"])),(l()(),p._18(null,["\n"]))],function(l,n){var t=n.component;l(n,14,0,t.canvasWidth,t.canvasHeight),l(n,23,0,!t.isTraining),l(n,26,0,t.isTraining),l(n,35,0,t.canvasWidth,t.canvasHeight),l(n,55,0,t.canvasWidth,t.canvasHeight),l(n,73,0,t.canvasWidth,t.canvasHeight)},null)}function s(l){return p._19(0,[(l()(),p._4(0,null,null,1,"app-root",[],null,null,null,r,N)),p._2(49152,null,0,m,[f,g.c],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var p=t("/oeL"),_={production:!0},h=function(){function l(){}return l}(),d=t("2bhY"),f=function(){function l(){this.network=new d.Architect.Perceptron(27,8,3)}return l.prototype.load=function(l){this.network=d.Architect.Perceptron.fromJSON(l)},l.prototype.toJSON=function(){return this.network.toJSON()},l.prototype.train=function(l){var n=l.data,t=l.iterationCallback,u=void 0===t?null:t;return new d.Trainer(this.network).trainAsync(n,{rate:.1,iterations:2e4,error:.005,cost:d.Trainer.cost.COST_ENTROPY,schedule:{every:10,do:u}})},l.prototype.activate=function(l){return this.network.activate(l)},l.ctorParameters=function(){return[]},l}(),g=t("XKz0"),v=t("M43J"),b=t.n(v),m=function(){function l(l,n){this.network=l,this.http=n,this.canvasWidth=320,this.canvasHeight=240,this.isTraining=!1}return l.prototype.loadNetwork=function(l){var n=this;return new Promise(function(n){var t=new FileReader;t.onload=function(l){var t=l.target.result;n(t)},t.readAsDataURL(l)}).then(function(l){n.http.get(l).subscribe(function(l){n.network.load(l)})})},l.prototype.save=function(){var l=this.network.toJSON(),n=new Blob([JSON.stringify(l)],{type:"application/json;charset=utf-8"});b()(n,"network.json")},l.prototype.train=function(){var l=this,n=this.getTrainingData(),t=this,u=function(l){return t.error=l.error,t.iterations=l.iterations,t.rate=l.rate,!t.isTraining};this.isTraining=!0,this.network.train({data:n,iterationCallback:u}).then(function(){l.isTraining=!1,alert("Training done!")})},l.prototype.stopTraining=function(){this.isTraining=!1},l.prototype.getTrainingData=function(){for(var l=this.canvasInput.getImageData().data,n=this.canvasOutput.getImageData().data,t=[],u=0;u<this.canvasWidth;u++)for(var e=0;e<this.canvasHeight;e++){var i=[],a=[];i.push.apply(i,this.getPixel(l,u-1,e-1)),i.push.apply(i,this.getPixel(l,u+0,e-1)),i.push.apply(i,this.getPixel(l,u+1,e-1)),i.push.apply(i,this.getPixel(l,u-1,e+0)),i.push.apply(i,this.getPixel(l,u+0,e+0)),i.push.apply(i,this.getPixel(l,u+1,e+0)),i.push.apply(i,this.getPixel(l,u-1,e+1)),i.push.apply(i,this.getPixel(l,u+0,e+1)),i.push.apply(i,this.getPixel(l,u+1,e+1)),a.push.apply(a,this.getPixel(n,u,e)),t.push({input:i,output:a})}return t},l.prototype.getPixel=function(l,n,t){var u=4*(n+t*this.canvasWidth),e=l.slice(u,u+4);return 4===e.length?[e[0]/255,e[1]/255,e[2]/255]:[0,0,0]},l.prototype.generate=function(){for(var l=this.canvasSource.getImageData(),n=this.canvasResult.getImageData(),t=0;t<this.canvasWidth;t++)for(var u=0;u<this.canvasHeight;u++){var e=[];e.push.apply(e,this.getPixel(l.data,t-1,u-1)),e.push.apply(e,this.getPixel(l.data,t+0,u-1)),e.push.apply(e,this.getPixel(l.data,t+1,u-1)),e.push.apply(e,this.getPixel(l.data,t-1,u+0)),e.push.apply(e,this.getPixel(l.data,t+0,u+0)),e.push.apply(e,this.getPixel(l.data,t+1,u+0)),e.push.apply(e,this.getPixel(l.data,t-1,u+1)),e.push.apply(e,this.getPixel(l.data,t+0,u+1)),e.push.apply(e,this.getPixel(l.data,t+1,u+1));var i=this.network.activate(e),a=4*(t+u*this.canvasWidth);n.data[a+0]=255*i[0],n.data[a+1]=255*i[1],n.data[a+2]=255*i[2],n.data[a+3]=255}this.canvasResult.putImageData(n)},l.ctorParameters=function(){return[{type:f},{type:g.c}]},l}(),y=[".clickable[_ngcontent-%COMP%]{cursor:pointer}"],w=["input[_ngcontent-%COMP%]{position:fixed;top:-9999px;left:-9999px}"],k=function(){function l(){this.accept="image/*",this.onFileSelected=new p.m}return l.prototype.open=function(){this.fileInput.nativeElement.click()},l.prototype.notifyFileSelected=function(){var l=this.fileInput.nativeElement.files[0];this.onFileSelected.emit(l)},l}(),x=[w],F=p._1({encapsulation:0,styles:x,data:{}}),S=(p.Z("app-file-picker",k,e,{accept:"accept"},{onFileSelected:"onFileSelected"},[]),["[_nghost-%COMP%]{display:block}.sizer[_ngcontent-%COMP%]{width:100%;height:0;position:relative;border:1px solid #ccc}canvas[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}"]),P=function(){function l(){this.width=320,this.height=240}return l.prototype.getContext=function(){return this.canvas.nativeElement.getContext("2d")},l.prototype.drawImageFromFile=function(l){var n=this,t=new FileReader;t.onload=function(l){var t=l.target.result,u=new Image;u.onload=function(){n.getContext().drawImage(u,0,0,n.width,n.height)},u.src=t},t.readAsDataURL(l)},l.prototype.getImageData=function(){return this.getContext().getImageData(0,0,this.width,this.height)},l.prototype.putImageData=function(l){return this.getContext().putImageData(l,0,0)},l}(),I=[S],O=p._1({encapsulation:0,styles:I,data:{}}),T=(p.Z("app-canvas",P,a,{width:"width",height:"height"},{},[]),t("qbdv")),D=[y],N=p._1({encapsulation:0,styles:D,data:{}}),C=p.Z("app-root",m,s,{},{},[]),R=t("fc+i"),j=p._0(h,[m],function(l){return p._13([p._14(512,p.i,p.W,[[8,[C]],[3,p.i],p.x]),p._14(5120,p.v,p._12,[[3,p.v]]),p._14(4608,T.e,T.d,[p.v]),p._14(4608,p.h,p.h,[]),p._14(5120,p.a,p._5,[]),p._14(5120,p.t,p._10,[]),p._14(5120,p.u,p._11,[]),p._14(4608,R.b,R.s,[T.b]),p._14(6144,p.H,null,[R.b]),p._14(4608,R.e,R.f,[]),p._14(5120,R.c,function(l,n,t,u){return[new R.k(l),new R.o(n),new R.n(t,u)]},[T.b,T.b,T.b,R.e]),p._14(4608,R.d,R.d,[R.c,p.z]),p._14(135680,R.m,R.m,[T.b]),p._14(4608,R.l,R.l,[R.d,R.m]),p._14(6144,p.F,null,[R.l]),p._14(6144,R.p,null,[R.m]),p._14(4608,p.L,p.L,[p.z]),p._14(4608,R.g,R.g,[T.b]),p._14(4608,R.i,R.i,[T.b]),p._14(4608,g.h,g.m,[T.b,p.B,g.k]),p._14(4608,g.n,g.n,[g.h,g.l]),p._14(5120,g.a,function(l){return[l]},[g.n]),p._14(4608,g.j,g.j,[]),p._14(6144,g.i,null,[g.j]),p._14(4608,g.g,g.g,[g.i]),p._14(6144,g.b,null,[g.g]),p._14(5120,g.f,g.o,[g.b,[2,g.a]]),p._14(4608,g.c,g.c,[g.f]),p._14(4608,f,f,[]),p._14(512,T.a,T.a,[]),p._14(1024,p.l,R.q,[]),p._14(1024,p.b,function(l,n){return[R.r(l,n)]},[[2,R.h],[2,p.y]]),p._14(512,p.c,p.c,[[2,p.b]]),p._14(131584,p._3,p._3,[p.z,p.X,p.r,p.l,p.i,p.c]),p._14(2048,p.e,null,[p._3]),p._14(512,p.d,p.d,[p.e]),p._14(512,R.a,R.a,[[3,R.a]]),p._14(512,g.e,g.e,[]),p._14(512,g.d,g.d,[]),p._14(512,h,h,[]),p._14(256,g.k,"XSRF-TOKEN",[]),p._14(256,g.l,"X-XSRF-TOKEN",[])])});_.production&&Object(p.R)(),Object(R.j)().bootstrapModuleFactory(j).catch(function(l){return console.log(l)})},gFIY:function(l,n){function t(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="gFIY"}},[0]);