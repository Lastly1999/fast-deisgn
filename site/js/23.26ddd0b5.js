"use strict";(self.webpackChunkfast_design=self.webpackChunkfast_design||[]).push([[23],{8402:(n,t,o)=>{o.d(t,{Z:()=>e});const e=(0,o(6229).aZ)({name:"AppType"})},5652:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(456),a=o(9494);const r={components:{[e.Z.name]:e.Z,AppType:a.Z}}},3902:(n,t,o)=>{o.d(t,{s:()=>r});var e=o(6229),a={class:"app-type"};function r(n,t,o,r,s,i){return(0,e.wg)(),(0,e.j4)("div",a,[(0,e.WI)(n.$slots,"default")])}},85:(n,t,o)=>{o.d(t,{s:()=>Z});var e=o(6229),a=(0,e.Uk)("基本使用"),r=(0,e.Uk)("烂大街的按钮"),s=(0,e.Uk)("预设(chaoxi)的主题色"),i=(0,e.Uk)("预设按钮"),d=(0,e.Uk)("标准按钮"),l=(0,e.Uk)("成功按钮"),p=(0,e.Uk)("失败按钮"),c=(0,e.Uk)("警告按钮"),u=(0,e.Uk)("柱状按钮(应该叫椭圆)"),f=(0,e.Uk)("预设按钮"),b=(0,e.Uk)("标准按钮"),g=(0,e.Uk)("成功按钮"),m=(0,e.Uk)("失败按钮"),k=(0,e.Uk)("警告按钮"),y=(0,e.Uk)("灵魂按钮(中二起来了)"),h=(0,e.Uk)("灵魂按钮"),v=(0,e.Uk)("灵魂按钮"),w=(0,e.Uk)("灵魂按钮"),x=(0,e.Uk)("灵魂按钮"),W=(0,e.Uk)("灵魂按钮");function Z(n,t,o,Z,_,U){var z=(0,e.up)("app-type"),B=(0,e.up)("f-button");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)(z,null,{default:(0,e.w5)((()=>[a])),_:1}),(0,e.Wm)(B,null,{default:(0,e.w5)((()=>[r])),_:1}),(0,e.Wm)(z,null,{default:(0,e.w5)((()=>[s])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(B,{class:"pad-mad",type:"default"},{default:(0,e.w5)((()=>[i])),_:1}),(0,e.Wm)(B,{class:"pad-mad",type:"primary"},{default:(0,e.w5)((()=>[d])),_:1}),(0,e.Wm)(B,{class:"pad-mad",type:"success"},{default:(0,e.w5)((()=>[l])),_:1}),(0,e.Wm)(B,{class:"pad-mad",type:"error"},{default:(0,e.w5)((()=>[p])),_:1}),(0,e.Wm)(B,{class:"pad-mad",type:"warning"},{default:(0,e.w5)((()=>[c])),_:1})]),(0,e.Wm)(z,null,{default:(0,e.w5)((()=>[u])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"default"},{default:(0,e.w5)((()=>[f])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"primary"},{default:(0,e.w5)((()=>[b])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"success"},{default:(0,e.w5)((()=>[g])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"error"},{default:(0,e.w5)((()=>[m])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"warning"},{default:(0,e.w5)((()=>[k])),_:1})]),(0,e.Wm)(z,null,{default:(0,e.w5)((()=>[y])),_:1}),(0,e.Wm)("div",null,[(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"default"},{default:(0,e.w5)((()=>[h])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"primary"},{default:(0,e.w5)((()=>[v])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"success"},{default:(0,e.w5)((()=>[w])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"error"},{default:(0,e.w5)((()=>[x])),_:1}),(0,e.Wm)(B,{class:"pad-mad",radius:"",type:"warning"},{default:(0,e.w5)((()=>[W])),_:1})])],64)}},456:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(6229),a=(o(5722),{type:{type:String,default:()=>"default"},size:{type:String,default:()=>"default"},radius:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#333"},disabled:{type:Boolean,default:()=>!1},ghost:{type:Boolean,default:()=>!1}});const r=(0,e.aZ)({name:"FButton",props:a,setup:n=>({buttonDefault:"text"===n.type?"f-button-text":"f-button",buttonSize:"f-button-size-".concat(n.size),buttonRipple:"default"===n.type?"f-button-dark-ripple":"f-button-bg-ripple",buttonGhostRipple:"f-button-bg-".concat(n.type,"-ghost-ripple"),buttonType:"f-button-bg-".concat(n.type).concat(n.ghost?"-ghost":""),buttonBorderType:"f-button-border-".concat(n.radius?"radius":"default"),buttonDisabled:"f-button-disabled"}),render(){var{$slots:n,buttonSize:t,buttonType:o,buttonBorderType:a,buttonDefault:r,buttonDisabled:s,type:i,color:d,disabled:l,buttonRipple:p,ghost:c,buttonGhostRipple:u}=this;return(0,e.Wm)("div",{style:{color:"text"===i&&d},class:[r,c?u:p,l&&s,"text"!==i&&t,"text"!==i&&o,"text"!==i&&a]},[n.default&&n.default(),(0,e.Wm)("span",null,[(0,e.Uk)(" "),n.icon&&n.icon()])])}})},8164:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(7705),a=o.n(e)()((function(n){return n[1]}));a.push([n.id,"/**\n * @author lastly\n * @deprecated f-button 组件样式\n * @date 2021年9月13日15:03:38\n */\n.f-button {\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 6px 1em;\n  border-radius: 4px;\n  font-family: inherit;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  text-align: center;\n}\n.f-button.pure {\n  border: 1px solid #ccc;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n}\n.f-button.pure::after {\n  background-image: radial-gradient(circle, #ccc 10%, transparent 11%);\n}\n.f-button.circle {\n  border-radius: 1.5em;\n}\n.f-button.block {\n  display: block;\n}\n/***************** button 点触水波纹（亮色） **************/\n.f-button-dark-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-dark-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #333 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-dark-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-primary-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-primary-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #007bff 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-primary-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-warning-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-warning-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #f3ab40 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-warning-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-error-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-error-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #eb1c30 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-error-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.f-button-bg-success-ghost-ripple {\n  position: relative;\n  overflow: hidden;\n}\n.f-button-bg-success-ghost-ripple::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #28a745 10%, transparent 11%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(12, 12);\n  opacity: 0;\n  transition: transform 0.6s, opacity 0.6s;\n}\n.f-button-bg-success-ghost-ripple:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n/***************** button尺寸类型 *******************/\n.f-button-size-mini {\n  padding: 3px 10px;\n  font-size: 15px;\n}\n.f-button-size-default {\n  padding: 5px 20px;\n}\n.f-button-size-small {\n  padding: 7px 25px;\n}\n.f-button-size-big {\n  padding: 9px 30px;\n}\n/***************** button边框类型 *******************/\n.f-button-border-default {\n  border-radius: 3px;\n}\n.f-button-border-radius {\n  border-radius: 20px;\n}\n/***************** button type类型 ***************/\n.f-button-bg-default {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  border: 1px solid #eee;\n}\n.f-button-bg-primary {\n  color: #fff;\n  background-color: #007bff;\n  transition: 0.1s ease;\n}\n.f-button-bg-primary:active {\n  background-color: #0062cc;\n  box-shadow: 0 0 5px 1px #3c90eb;\n}\n.f-button-bg-primary:hover {\n  background-color: #0364ccde;\n}\n.f-button-bg-error {\n  color: #fff;\n  background-color: #eb1c30;\n  transition: 0.1s ease;\n}\n.f-button-bg-error:active {\n  background-color: #e24d5c;\n  box-shadow: 0 0 5px 1px #fc293ed0;\n}\n.f-button-bg-error:hover {\n  background-color: #f30018d7;\n}\n.f-button-bg-success {\n  color: #fff;\n  background-color: #28a745;\n  transition: 0.1s ease;\n}\n.f-button-bg-success:active {\n  background-color: #0ba12e;\n  box-shadow: 0 0 5px 1px #4fc76b;\n}\n.f-button-bg-success:hover {\n  background-color: #0a992c;\n}\n.f-button-bg-warning {\n  color: #fff;\n  background-color: #f3ab40;\n  transition: 0.1s ease;\n}\n.f-button-bg-warning:active {\n  background-color: #ffb443;\n  box-shadow: 0 0 5px 1px #e9ae57;\n}\n.f-button-bg-warning:hover {\n  background-color: #e79e30;\n}\n.f-button-text {\n  box-sizing: border-box;\n  display: inline-block;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.f-button-text:hover {\n  cursor: pointer;\n}\n/***************** Ghost类型 ******************/\n.f-button-bg-primary-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #4ba2ff;\n  border: 1px solid #4ba2ff;\n}\n.f-button-bg-error-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #ff4357d0;\n  border: 1px solid #ff4357d0;\n}\n.f-button-bg-warning-ghost {\n  color: #fff;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #f3ab40;\n  border: 1px solid #f3ab40;\n}\n.f-button-bg-success-ghost {\n  color: #202325;\n  background-color: #fff;\n  transition: 0.1s ease;\n  color: #28a745;\n  border: 1px solid #28a745;\n}\n/*************** button禁用类型 ****************/\n.f-button-bg-default-disabled {\n  pointer-events: none;\n  color: #fff;\n  background-color: #fff;\n  transition: 0.1s ease;\n}\n",""]);const r=a},8798:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(7705),a=o.n(e)()((function(n){return n[1]}));a.push([n.id,"\n.pad-mad {\n  margin: 0 7px;\n}\n",""]);const r=a},8956:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(7705),a=o.n(e)()((function(n){return n[1]}));a.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const r=a},5722:(n,t,o)=>{var e=o(3379),a=o.n(e),r=o(8164);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},9561:(n,t,o)=>{var e=o(3379),a=o.n(e),r=o(8798);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},5440:(n,t,o)=>{var e=o(3379),a=o.n(e),r=o(8956);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},9494:(n,t,o)=>{o.d(t,{Z:()=>r});var e=o(4102),a=o(775);o(6465),a.Z.render=e.s;const r=a.Z},9023:(n,t,o)=>{o.r(t),o.d(t,{default:()=>r});var e=o(85),a=o(1330);o(4318),a.Z.render=e.s;const r=a.Z},775:(n,t,o)=>{o.d(t,{Z:()=>e.Z});var e=o(8402)},1330:(n,t,o)=>{o.d(t,{Z:()=>e.Z});var e=o(5652)},4102:(n,t,o)=>{o.d(t,{s:()=>e.s});var e=o(3902)},4318:(n,t,o)=>{o(9561)},6465:(n,t,o)=>{o(5440)}}]);