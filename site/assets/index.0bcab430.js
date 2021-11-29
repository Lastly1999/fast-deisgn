import{q as $,h as t,d as h,o as B,c as I,i as s,a as l,F as z,l as a}from"./vendor.f662e34d.js";import{I as m}from"./Icon.87baff07.js";import{A as S}from"./AppType.9c7eedfb.js";import{_ as w}from"./elevation.7bc18672.js";const T={type:{type:String,default:()=>"default"},size:{type:String,default:()=>"default"},radius:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#333"},disabled:{type:Boolean,default:()=>!1},ghost:{type:Boolean,default:()=>!1},Icon:{type:String,default:()=>""},prefixIcon:{type:String,default:()=>""},suffixIcon:{type:String,default:()=>""}};var y=$({name:"FButton",props:T,setup(d){return{buttonDefault:d.type==="text"?"f-button-text":"f-button",buttonSize:`f-button-size-${d.size}`,buttonRipple:d.type==="default"?"f-button-dark-ripple":"f-button-bg-ripple",buttonGhostRipple:`f-button-bg-${d.type}-ghost-ripple`,buttonType:`f-button-bg-${d.type}${d.ghost?"-ghost":""}`,buttonBorderType:`f-button-border-${d.radius?"radius":"default"}`,buttonDisabled:d.disabled?d.ghost?`f-button-bg-${d.type}-disabled-ghost`:`f-button-bg-${d.type}-disabled`:"",buttonIconColor:d.type==="default"?"#333":"#fff",buttonActiveOrHover:!d.disabled&&`f-button-bg-${d.type}-active-hover${d.ghost?"-ghost":""}`}},render(){const{$slots:d,buttonSize:i,buttonType:c,buttonBorderType:u,buttonDefault:_,buttonDisabled:p,type:o,color:e,buttonRipple:b,ghost:g,buttonGhostRipple:x,prefixIcon:f,suffixIcon:r,disabled:n,buttonActiveOrHover:v}=this;return t("button",{disabled:n,style:{color:o==="text"&&e},class:[_,g?!n&&x:!n&&b,p,o!=="text"&&i,o!=="text"&&c,o!=="text"&&u,v]},[f&&t("i",{class:[`f-button-icon-${o}`,`fa fa-${f}`,"f-prefixIcon-icon"],"aria-hidden":"true"},null),d.default&&t("span",{class:"f-button-text-slot"},[d.default()]),r&&t("i",{class:[`fa fa-${r}`,"f-suffixIcon-icon"],"aria-hidden":"true"},null)])}});const k={components:{[y.name]:y,[m.name]:m,AppType:S}},A=a("\u57FA\u672C\u4F7F\u7528"),j=a("\u70C2\u5927\u8857\u7684\u6309\u94AE"),C=a("\u9884\u8BBE(chaoxi)\u7684\u4E3B\u9898\u8272"),D=a("\u9884\u8BBE\u6309\u94AE"),R=a("\u6807\u51C6\u6309\u94AE"),F=a("\u6210\u529F\u6309\u94AE"),N=a("\u5931\u8D25\u6309\u94AE"),V=a("\u8B66\u544A\u6309\u94AE"),G=a("\u67F1\u72B6\u6309\u94AE(\u5E94\u8BE5\u53EB\u692D\u5706)"),H=a("\u9884\u8BBE\u6309\u94AE"),O=a("\u6807\u51C6\u6309\u94AE"),q=a("\u6210\u529F\u6309\u94AE"),E=a("\u5931\u8D25\u6309\u94AE"),P=a("\u8B66\u544A\u6309\u94AE"),J=a("\u7075\u9B42\u6309\u94AE(\u4E2D\u4E8C\u8D77\u6765\u4E86)"),K=a("\u7075\u9B42\u6309\u94AE"),L=a("\u7075\u9B42\u6309\u94AE"),M=a("\u7075\u9B42\u6309\u94AE"),Q=a("\u7075\u9B42\u6309\u94AE"),U=a("\u7075\u9B42\u6309\u94AE"),W=a("\u5185\u5D4C\u56FE\u6807"),X=a(" \u70B9\u8D5E "),Y=a(" \u547D\u4EE4\u884C "),Z=a(" \u8BBE\u7F6E "),tt=a(" \u89E3\u9501 "),et=a("\u72EC\u7ACB\u7684\u56FE\u6807\u6309\u94AE"),st=a("\u72EC\u7ACB\u7684\u67F1\u72B6\u56FE\u6807\u6309\u94AE"),at=a("\u7981\u7528\u6309\u94AE"),dt=a(" \u7981\u7528\u4E86 "),ot=a(" \u7981\u7528\u4E86 "),lt=a(" \u7981\u7528\u4E86 "),nt=a(" \u7981\u7528\u4E86 "),it=a(" \u7981\u7528\u4E86 "),ct={style:{"margin-top":"10px"}},ut=a(" \u7981\u7528\u4E86 "),_t=a(" \u7981\u7528\u4E86 "),pt=a(" \u7981\u7528\u4E86 "),ft=a(" \u7981\u7528\u4E86 "),rt=a(" \u7981\u7528\u4E86 "),ht=a("\u4E0D\u540C\u5C3A\u5BF8"),mt=a("\u8FF7\u4F60\u5C3A\u5BF8"),yt=a("\u9ED8\u8BA4\u5C3A\u5BF8"),bt=a("\u666E\u5C0F\u5C3A\u5BF8"),gt=a("\u5927\u676F\u5C3A\u5BF8");function xt(d,i,c,u,_,p){const o=h("app-type"),e=h("f-button");return B(),I(z,null,[t(o,null,{default:s(()=>[A]),_:1}),t(e,null,{default:s(()=>[j]),_:1}),t(o,null,{default:s(()=>[C]),_:1}),l("div",null,[t(e,{class:"pad-mad",type:"default"},{default:s(()=>[D]),_:1}),t(e,{class:"pad-mad",type:"primary"},{default:s(()=>[R]),_:1}),t(e,{class:"pad-mad",type:"success"},{default:s(()=>[F]),_:1}),t(e,{class:"pad-mad",type:"error"},{default:s(()=>[N]),_:1}),t(e,{class:"pad-mad",type:"warning"},{default:s(()=>[V]),_:1})]),t(o,null,{default:s(()=>[G]),_:1}),l("div",null,[t(e,{class:"pad-mad",radius:"",type:"default"},{default:s(()=>[H]),_:1}),t(e,{class:"pad-mad",radius:"",type:"primary"},{default:s(()=>[O]),_:1}),t(e,{class:"pad-mad",radius:"",type:"success"},{default:s(()=>[q]),_:1}),t(e,{class:"pad-mad",radius:"",type:"error"},{default:s(()=>[E]),_:1}),t(e,{class:"pad-mad",radius:"",type:"warning"},{default:s(()=>[P]),_:1})]),t(o,null,{default:s(()=>[J]),_:1}),l("div",null,[t(e,{class:"pad-mad",type:"default"},{default:s(()=>[K]),_:1}),t(e,{class:"pad-mad",ghost:"",type:"primary"},{default:s(()=>[L]),_:1}),t(e,{class:"pad-mad",ghost:"",type:"success"},{default:s(()=>[M]),_:1}),t(e,{class:"pad-mad",ghost:"",type:"error"},{default:s(()=>[Q]),_:1}),t(e,{class:"pad-mad",ghost:"",type:"warning"},{default:s(()=>[U]),_:1})]),t(o,null,{default:s(()=>[W]),_:1}),l("div",null,[t(e,{class:"pad-mad",type:"success","suffix-icon":"hand-o-right"},{default:s(()=>[X]),_:1}),t(e,{class:"pad-mad","suffix-icon":"terminal"},{default:s(()=>[Y]),_:1}),t(e,{class:"pad-mad",type:"primary","prefix-icon":"cog"},{default:s(()=>[Z]),_:1}),t(e,{class:"pad-mad",type:"error","prefix-icon":"unlock"},{default:s(()=>[tt]),_:1})]),t(o,null,{default:s(()=>[et]),_:1}),l("div",null,[t(e,{class:"pad-mad",type:"success","suffix-icon":"hand-o-right"}),t(e,{class:"pad-mad","suffix-icon":"terminal"}),t(e,{class:"pad-mad",type:"primary","prefix-icon":"cog"}),t(e,{class:"pad-mad",type:"error","prefix-icon":"unlock"})]),t(o,null,{default:s(()=>[st]),_:1}),l("div",null,[t(e,{class:"pad-mad",radius:"",type:"success","suffix-icon":"hand-o-right"}),t(e,{class:"pad-mad",radius:"","suffix-icon":"terminal"}),t(e,{class:"pad-mad",radius:"",type:"primary","prefix-icon":"cog"}),t(e,{class:"pad-mad",radius:"",type:"error","prefix-icon":"unlock"})]),t(o,null,{default:s(()=>[at]),_:1}),l("div",null,[t(e,{class:"pad-mad",disabled:"",radius:""},{default:s(()=>[dt]),_:1}),t(e,{class:"pad-mad",disabled:"",radius:"",type:"primary"},{default:s(()=>[ot]),_:1}),t(e,{class:"pad-mad",disabled:"",radius:"",type:"success"},{default:s(()=>[lt]),_:1}),t(e,{class:"pad-mad",disabled:"",radius:"",type:"warning"},{default:s(()=>[nt]),_:1}),t(e,{class:"pad-mad",disabled:"",radius:"",type:"error"},{default:s(()=>[it]),_:1})]),l("div",ct,[t(e,{class:"pad-mad",ghost:"",disabled:""},{default:s(()=>[ut]),_:1}),t(e,{class:"pad-mad",ghost:"",disabled:"",type:"primary"},{default:s(()=>[_t]),_:1}),t(e,{class:"pad-mad",ghost:"",disabled:"",type:"success"},{default:s(()=>[pt]),_:1}),t(e,{class:"pad-mad",ghost:"",disabled:"",type:"warning"},{default:s(()=>[ft]),_:1}),t(e,{class:"pad-mad",ghost:"",disabled:"",type:"error"},{default:s(()=>[rt]),_:1})]),t(o,null,{default:s(()=>[ht]),_:1}),l("div",null,[t(e,{class:"pad-mad",size:"mini",type:"default","suffix-icon":"hand-o-right"},{default:s(()=>[mt]),_:1}),t(e,{class:"pad-mad",size:"default",ghost:"",type:"primary","prefix-icon":"cog"},{default:s(()=>[yt]),_:1}),t(e,{class:"pad-mad",size:"small",ghost:"",type:"error","prefix-icon":"cog"},{default:s(()=>[bt]),_:1}),t(e,{class:"pad-mad",size:"big",ghost:"",type:"warning","prefix-icon":"cog"},{default:s(()=>[gt]),_:1})])],64)}var zt=w(k,[["render",xt]]);export{zt as default};
