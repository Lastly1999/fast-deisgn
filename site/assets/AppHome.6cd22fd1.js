import{_ as H,c as r,d as V,h as z,i as F,e as I}from"./elevation.7bc18672.js";import{r as o,p as L,u as P,d as N,e as T,o as _,c as j,a,t as p,F as A,j as q,w as E,k as M,i as D,h as R,l as S}from"./vendor.f662e34d.js";const G={name:"AppHome",setup(){var i,f,g,x,C,k,w,y,b,B;const m=o((f=(i=r)==null?void 0:i.title)!=null?f:""),d=o((x=(g=r)==null?void 0:g.logo)!=null?x:""),v=o((w=(k=(C=r)==null?void 0:C.mobile)==null?void 0:k.title)!=null?w:{}),u=o((B=(b=(y=r)==null?void 0:y.pc)==null?void 0:b.menu)!=null?B:[]).value.filter(e=>e.type===2),h=L(u),s=o("zh-CN"),n=o("mobile"),l=P();return V(e=>{s.value=e}),z(e=>{n.value=e}),{components:h,lang:s,toComponent:e=>{l.push({path:`/${e.doc}`,query:{language:s.value,platform:n.value,replace:e.doc}}),!F()&&I()&&window.top.scrollToMenu(e.doc)},logo:d,title:m,description:v}}},J={class:"logo"},K={class:"varlet-home__title"},O=["src"],Q={class:"varlet-home__desc"};function U(m,d,v,t,u,h){const s=N("var-site-icon"),n=N("var-site-cell"),l=T("ripple");return _(),j(A,null,[a("div",J,[a("h1",K,[a("img",{class:"varlet-home__image",src:t.logo},null,8,O),a("span",null,p(t.title),1)]),a("h2",Q,p(t.description[t.lang]),1)]),(_(!0),j(A,null,q(t.components,c=>E((_(),M(n,{key:c.text,onClick:i=>t.toComponent(c)},{extra:D(()=>[R(s,{name:"chevron-right",size:"14"})]),default:D(()=>[S(p(c.text[t.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var Y=H(G,[["render",U],["__scopeId","data-v-7f91be68"]]);export{Y as default};
