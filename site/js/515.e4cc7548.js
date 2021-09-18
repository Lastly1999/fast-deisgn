"use strict";(self.webpackChunkfast_design=self.webpackChunkfast_design||[]).push([[515],{8164:(n,t,o)=>{o.d(t,{Z:()=>a});var e=o(7705),r=o.n(e)()((function(n){return n[1]}));r.push([n.id,"/**\n * @author lastly\n * @deprecated f-button 组件样式\n * @date 2021年9月13日15:03:38\n */\n.f-button {\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 6px 1em;\n  border-radius: 4px;\n  font-family: inherit;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  text-align: center;\n}\n.f-button.pure {\n  border: 1px solid #ccc;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n}\n.f-button.pure::after {\n  background-image: radial-gradient(circle, #ccc 10%, transparent 11%);\n}\n.f-button.circle {\n  border-radius: 1.5em;\n}\n.f-button.block {\n  display: block;\n}\n/***************** button 点触水波纹（亮色） **************/\n.f-button-dark-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-dark-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #333 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-dark-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-primary-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-primary-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #007bff 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-primary-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-warning-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-warning-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #f3ab40 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-warning-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-error-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-error-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #eb1c30 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-error-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-success-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-success-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #28a745 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-success-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n/***************** button尺寸类型 *******************/\n.f-button-size-mini {\n  padding: 3px 10px;\n  font-size: 15px;\n}\n.f-button-size-default {\n  padding: 5px 20px;\n}\n.f-button-size-small {\n  padding: 7px 25px;\n}\n.f-button-size-big {\n  padding: 9px 30px;\n}\n/***************** button边框类型 *******************/\n.f-button-border-default {\n  border-radius: 3px;\n}\n.f-button-border-radius {\n  border-radius: 20px;\n}\n/***************** button type类型 ***************/\n.f-button-bg-default {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  border: 1px solid #eee;\n}\n.f-button-bg-primary {\n  color: #fff;\n  background-color: #007bff;\n  transition: 0.1s ease;\n}\n.f-button-bg-primary:active {\n  background-color: #0062cc;\n  box-shadow: 0 0 5px 1px #3c90eb;\n}\n.f-button-bg-primary:hover {\n  background-color: #0364ccde;\n}\n.f-button-bg-error {\n  color: #fff;\n  background-color: #eb1c30;\n  transition: 0.1s ease;\n}\n.f-button-bg-error:active {\n  background-color: #e24d5c;\n  box-shadow: 0 0 5px 1px #fc293ed0;\n}\n.f-button-bg-error:hover {\n  background-color: #f30018d7;\n}\n.f-button-bg-success {\n  color: #fff;\n  background-color: #28a745;\n  transition: 0.1s ease;\n}\n.f-button-bg-success:active {\n  background-color: #0ba12e;\n  box-shadow: 0 0 5px 1px #4fc76b;\n}\n.f-button-bg-success:hover {\n  background-color: #0a992c;\n}\n.f-button-bg-warning {\n  color: #fff;\n  background-color: #f3ab40;\n  transition: 0.1s ease;\n}\n.f-button-bg-warning:active {\n  background-color: #ffb443;\n  box-shadow: 0 0 5px 1px #e9ae57;\n}\n.f-button-bg-warning:hover {\n  background-color: #e79e30;\n}\n.f-button-text {\n  box-sizing: border-box;\n  display: inline-block;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.f-button-text:hover {\n  cursor: pointer;\n}\n/***************** Ghost类型 ******************/\n.f-button-bg-primary-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #4ba2ff;\n  border: 1px solid #4ba2ff;\n}\n.f-button-bg-error-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #ff4357d0;\n  border: 1px solid #ff4357d0;\n}\n.f-button-bg-warning-ghost {\n  color: #fff;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #f3ab40;\n  border: 1px solid #f3ab40;\n}\n.f-button-bg-success-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #28a745;\n  border: 1px solid #28a745;\n}\n/*************** button禁用类型 ****************/\n.f-button-bg-default-disabled {\n  pointer-events: none;\n  color: #fff;\n  background-color: #fff;\n  transition: 0.1s ease;\n}\n",""]);const a=r},9168:(n,t,o)=>{o.d(t,{Z:()=>a});var e=o(7705),r=o.n(e)()((function(n){return n[1]}));r.push([n.id,"\n.pad-mad {\n  margin: 0 7px;\n}\n",""]);const a=r},8956:(n,t,o)=>{o.d(t,{Z:()=>a});var e=o(7705),r=o.n(e)()((function(n){return n[1]}));r.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const a=r},7515:(n,t,o)=>{o.r(t),o.d(t,{default:()=>S});var e=o(6229),r=(0,e.Uk)("基本使用"),a=(0,e.Uk)("烂大街的按钮"),i=(0,e.Uk)("预设(chaoxi)的主题色"),s=(0,e.Uk)("预设按钮"),l=(0,e.Uk)("标准按钮"),p=(0,e.Uk)("成功按钮"),c=(0,e.Uk)("失败按钮"),d=(0,e.Uk)("警告按钮"),u=(0,e.Uk)("柱状按钮(应该叫椭圆)"),b=(0,e.Uk)("标准按钮"),f=(0,e.Uk)("成功按钮"),g=(0,e.Uk)("灵魂按钮(中二起来了)"),m=(0,e.Uk)("灵魂按钮"),h=(0,e.Uk)("灵魂按钮"),k=(0,e.Uk)("灵魂按钮"),y=o(3379),v=o.n(y),x=o(8164);v()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;var w={type:{type:String,default:()=>"default"},size:{type:String,default:()=>"default"},radius:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#333"},disabled:{type:Boolean,default:()=>!1},ghost:{type:Boolean,default:()=>!1}};const W=(0,e.aZ)({name:"FButton",props:w,setup:n=>({buttonDefault:"text"===n.type?"f-button-text":"f-button",buttonSize:"f-button-size-".concat(n.size),buttonRipple:"default"===n.type?"f-button-dark-ripple":"f-button-bg-ripple",buttonGhostRipple:"f-button-bg-".concat(n.type,"-ghost-ripple"),buttonType:"f-button-bg-".concat(n.type).concat(n.ghost?"-ghost":""),buttonBorderType:"f-button-border-".concat(n.radius?"radius":"default"),buttonDisabled:"f-button-disabled"}),render(){var{$slots:n,buttonSize:t,buttonType:o,buttonBorderType:r,buttonDefault:a,buttonDisabled:i,type:s,color:l,disabled:p,buttonRipple:c,ghost:d,buttonGhostRipple:u}=this;return(0,e.Wm)("div",{style:{color:"text"===s&&l},class:[a,d?u:c,p&&i,"text"!==s&&t,"text"!==s&&o,"text"!==s&&r]},[n.default&&n.default(),(0,e.Wm)("span",null,[(0,e.Uk)(" "),n.icon&&n.icon()])])}});var _={class:"app-type"};const U=(0,e.aZ)({name:"AppType"});var z=o(8956);v()(z.Z,{insert:"head",singleton:!1}),z.Z.locals,U.render=function(n,t,o,r,a,i){return(0,e.wg)(),(0,e.j4)("div",_,[(0,e.WI)(n.$slots,"default")])};const Z=U,B={components:{[W.name]:W,AppType:Z}};var T=o(9168);v()(T.Z,{insert:"head",singleton:!1}),T.Z.locals,B.render=function(n,t,o,y,v,x){var w=(0,e.up)("app-type"),W=(0,e.up)("f-button");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[r])),_:1}),(0,e.Wm)(W,null,{default:(0,e.w5)((()=>[a])),_:1}),(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[i])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(W,{class:"pad-mad",type:"default"},{default:(0,e.w5)((()=>[s])),_:1}),(0,e.Wm)(W,{class:"pad-mad",type:"primary"},{default:(0,e.w5)((()=>[l])),_:1})]),(0,e.Wm)("div",null,[(0,e.Wm)(W,{class:"pad-mad",type:"success"},{default:(0,e.w5)((()=>[p])),_:1}),(0,e.Wm)(W,{class:"pad-mad",type:"error"},{default:(0,e.w5)((()=>[c])),_:1})]),(0,e.Wm)("div",null,[(0,e.Wm)(W,{class:"pad-mad",type:"warning"},{default:(0,e.w5)((()=>[d])),_:1})]),(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[u])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(W,{class:"pad-mad",radius:"",type:"primary"},{default:(0,e.w5)((()=>[b])),_:1}),(0,e.Wm)(W,{class:"pad-mad",radius:"",type:"success"},{default:(0,e.w5)((()=>[f])),_:1})]),(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[g])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(W,{class:"pad-mad",ghost:"",type:"primary"},{default:(0,e.w5)((()=>[m])),_:1}),(0,e.Wm)(W,{class:"pad-mad",ghost:"",type:"success"},{default:(0,e.w5)((()=>[h])),_:1}),(0,e.Wm)(W,{class:"pad-mad",ghost:"",type:"error"},{default:(0,e.w5)((()=>[k])),_:1})])],64)};const S=B}}]);