var l=Object.defineProperty;var p=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(o,t,e)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,r=(o,t)=>{for(var e in t||(t={}))a.call(t,e)&&s(o,e,t[e]);if(p)for(var e of p(t))i.call(t,e)&&s(o,e,t[e]);return o};import{q as c,N as u,h as m}from"./vendor.f662e34d.js";const f={span:{type:Number,default:()=>0}};var g=c({name:"FCol",props:f,setup(){const o=u("gutter");return{computedColWidth:d=>100/24*d,gutter:o,computedColGutter:d=>{const n=d.length;if(n===1)return{paddingLeft:d[0]/2+"px",paddingRight:d[0]/2+"px"};if(n===2)return{paddingTop:d[1]/2+"px",paddingRight:d[0]/2+"px",paddingBottom:d[1]/2+"px",paddingLeft:d[0]/2+"px"}}}},render(){const{$slots:o,span:t,computedColWidth:e,computedColGutter:d,gutter:n}=this;return console.log(d(n)),m("div",{class:["f-col"],style:r({width:`${e(t)}%`},d(n))},[o.default&&o.default()])}});export{g as C};
