import{c as M,e as Y,b as O,f as R}from"./components.d08fc2fc.js";import{_ as B}from"./elevation.6f2b205f.js";import{d as I,b as f,o as u,c as S,G as N,n as E,r as C,y as G,e as h,a as y,p as k,l as P,t as c,h as W,i as a,j as i,F as q,m as r}from"./vendor.8243c41e.js";import{I as x}from"./index.c26bcc8d.js";import{B as H}from"./index.c4813cf9.js";import{A as J}from"./AppType.84afabc3.js";import{d as Q}from"./index.77fe3760.js";import{u as X,a as j,_ as Z,b as ee,c as te}from"./en-US.fd4fd1d9.js";import{w as ne,a as ae}from"./utils.43b02c52.js";import"./index.b947dc5d.js";import"./index.15644cea.js";import"./index.b4c2ba7d.js";const T=Symbol("STEPS_BIND_STEP_KEY"),V=Symbol("STEPS_COUNT_STEP_KEY");function ie(){const{bindChildren:e,childProviders:o}=M(T),{length:s}=Y(V);return{length:s,step:o,bindStep:e}}function oe(e){return["horizontal","vertical"].includes(e)}const ce={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:oe},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const re=I({name:"VarSteps",props:ce,setup(e){const o=f(()=>e.active),s=f(()=>e.activeColor),t=f(()=>e.inactiveColor),d=f(()=>e.direction),{length:p,bindStep:l}=ie();l({active:o,length:p,direction:d,activeColor:s,inactiveColor:t,clickStep:m=>{var _;(_=e.onClickStep)==null||_.call(e,m)}})}});function se(e,o,s,t,d,p){return u(),S("div",{class:"var-steps",style:E({flexDirection:e.direction==="horizontal"?"row":"column"})},[N(e.$slots,"default")],4)}var g=B(re,[["render",se]]);g.install=function(e){e.component(g.name,g)};const le={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function ue(){const{parentProvider:e,bindParent:o}=O(T),{index:s}=R(V);if(!e||!o||!s)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:s,steps:e,bindSteps:o}}const de=I({name:"VarStep",components:{VarIcon:x},props:le,setup(){const e=C(null),o=C(""),s=C(!1),{index:t,steps:d,bindSteps:p}=ue(),{active:l,length:n,activeColor:v,inactiveColor:m,direction:_,clickStep:U}=d,z=f(()=>l.value===t.value),$=f(()=>t.value!==-1&&l.value>t.value),w={index:t},D=()=>U(t.value),K=b=>{_.value==="horizontal"&&(e.value=b)};return p(w),G(n,b=>{if(s.value=b-1===t.value,e.value){const L=e.value.offsetWidth/2-14;o.value=`0 -${L}px`}}),{main:e,index:t,isActive:$,isCurrent:z,direction:_,lineMargin:o,activeColor:v,inactiveColor:m,isLastChild:s,click:D,getRef:K}}}),pe={class:"var-step"},ve={key:3};function fe(e,o,s,t,d,p){const l=h("var-icon");return u(),S("div",pe,[y("div",{class:k(`var-step-${e.direction}`)},[y("div",{class:k(`var-step-${e.direction}__main`),ref:e.getRef},[y("div",{class:k({[`var-step-${e.direction}__tag`]:!0,[`var-step-${e.direction}__tag--active`]:e.isActive||e.isCurrent}),style:E({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(u(),P(l,{key:0,class:"var-step__icon","var-step-cover":"",name:e.activeIcon},null,8,["name"])):e.isCurrent&&e.currentIcon?(u(),P(l,{key:1,class:"var-step__icon","var-step-cover":"",name:e.currentIcon},null,8,["name"])):e.inactiveIcon?(u(),P(l,{key:2,class:"var-step__icon","var-step-cover":"",name:e.inactiveIcon},null,8,["name"])):(u(),S("span",ve,c(e.index+1),1))],6),y("div",{class:k({[`var-step-${e.direction}__content`]:!0,[`var-step-${e.direction}__content--active`]:e.isActive||e.isCurrent}),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[N(e.$slots,"default")],2)],2),e.isLastChild?W("v-if",!0):(u(),S("div",{key:0,class:k(`var-step-${e.direction}__line`),style:E({margin:e.lineMargin})},null,6))],2)])}var A=B(de,[["render",fe]]);A.install=function(e){e.component(A.name,A)};var me={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},_e={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:F,use:Se,pack:he,packs:Ue,merge:ze}=X(),ke=e=>{te(e),Se(e)};j("zh-CN",Z);j("en-US",ee);F("zh-CN",me);F("en-US",_e);const Ce={name:"StepsExample",components:{VarSteps:g,VarStep:A,VarButton:H,AppType:J},setup(){const e=C(0),o=()=>{e.value=(e.value+1)%4};return ne(ke),ae(Q),{pack:he,next:o,active:e}}};function ye(e,o,s,t,d,p){const l=h("app-type"),n=h("var-step"),v=h("var-steps"),m=h("var-button");return u(),S(q,null,[a(l,null,{default:i(()=>[r(c(t.pack.basicUsage),1)]),_:1}),a(v,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[r(c(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[r(c(t.pack.customStyle),1)]),_:1}),a(v,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[r(c(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[r(c(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[r(c(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[r(c(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[r(c(t.pack.vertical),1)]),_:1}),a(v,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[r(c(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[r(c(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(m,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[r(c(t.pack.next),1)]),_:1},8,["onClick"])],64)}var $e=B(Ce,[["render",ye]]);export{$e as default};
