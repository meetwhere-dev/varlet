var J=Object.defineProperty;var z=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var E=(e,n,t)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))R.call(n,t)&&E(e,t,n[t]);if(z)for(var t of z(n))Z.call(n,t)&&E(e,t,n[t]);return e};import{d as T,r as Q,b as _,y as A,x as W,e as g,w as X,v as ee,o as v,c as ne,a as C,p as j,G as b,l as h,h as V,n as N,m as L,t as B,i as y,j as S,H as w,T as te,I as ae,q as O,J as oe,K as se}from"./vendor.8243c41e.js";import{p as P,L as ie}from"./index.b4c2ba7d.js";import{I as re}from"./index.c26bcc8d.js";import{u as ce}from"./zIndex.a9a0aa57.js";import{p as q,u as le,m as de}from"./components.d08fc2fc.js";import{_ as F,H as U,n as G}from"./elevation.6f2b205f.js";import{c as ue}from"./index.15644cea.js";import{u as fe}from"./lock.cbce9ccd.js";function pe(e){return["top","center","bottom"].includes(e)}function me(e){return $.includes(e)}const D={type:{type:String,validator:me},position:{type:String,default:"top",validator:pe},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:q(P,"type"),loadingSize:q(P,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};const ve={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},be=T({name:"VarSnackbarCore",components:{VarLoading:ie,VarIcon:re},props:D,setup(e){const n=Q(null),{zIndex:t}=ce(()=>e.show,1);fe(e,"show","lockScroll");const a=_(()=>{const{position:o,vertical:l,type:d}=e,x=`var-snackbar__wrapper var-snackbar__wrapper-${o} var-elevation--4`,K=l?" var-snackbar__vertical":"",Y=d&&$.includes(d)?` var-snackbar__wrapper-${d}`:"";return`${x}${K}${Y}`}),s=_(()=>e.type==="loading"||e.forbidClick),i=_(()=>e.type?ve[e.type]:""),r=()=>{n.value=setTimeout(()=>{var o;e.type!=="loading"&&((o=e["onUpdate:show"])==null||o.call(e,!1))},e.duration)};return A(()=>e.show,o=>{var l,d;o?((l=e.onOpen)==null||l.call(e),r()):o===!1&&(clearTimeout(n.value),(d=e.onClose)==null||d.call(e))}),A(()=>e._update,()=>{clearTimeout(n.value),r()}),W(()=>{var o;e.show&&((o=e.onOpen)==null||o.call(e),r())}),{zIndex:t,snackbarClass:a,iconName:i,isForbidClick:s}}}),ye={class:"var-snackbar__action"};function ke(e,n,t,a,s,i){const r=g("var-icon"),o=g("var-loading");return X((v(),ne("div",{class:"var-snackbar",style:N({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[C("div",{class:j(e.snackbarClass),style:N({zIndex:e.zIndex})},[C("div",{class:j(["var-snackbar__content",[e.contentClass]])},[b(e.$slots,"default",{},()=>[L(B(e.content),1)])],2),C("div",ye,[e.iconName?(v(),h(r,{key:0,name:e.iconName},null,8,["name"])):V("v-if",!0),e.type==="loading"?(v(),h(o,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):V("v-if",!0),b(e.$slots,"action")])],6)],4)),[[ee,e.show]])}var M=F(be,[["render",ke]]);const _e=T({name:"VarSnackbar",components:{VarSnackbarCore:M},props:D,setup(){const{disabled:e}=le();return{disabled:e}}});function ge(e,n,t,a,s,i){const r=g("var-snackbar-core");return v(),h(ae,{to:e.teleport,disabled:e.disabled},[y(te,{name:"var-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:S(()=>[y(r,w(e.$props,{class:"var-snackbar-transition"}),{action:S(()=>[b(e.$slots,"action")]),default:S(()=>[b(e.$slots,"default",{},()=>[L(B(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var f=F(_e,[["render",ge]]);function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const $=["loading","success","warning","info","error"];let H=0,I=!1,k,p=!1,c=O([]);const he={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},Se={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},we={setup(){return()=>{const e=c.map(({id:t,reactiveSnackOptions:a,_update:s})=>{const i=document.querySelector(".var-transition-group");a.forbidClick||a.type==="loading"?i.classList.add("var-pointer-auto"):i.classList.remove("var-pointer-auto"),p&&(a.position="top");const o=u({position:p?"relative":"absolute"},Ee(a.position));return y(M,w(a,{key:t,style:o,"data-id":t,_update:s,show:a.show,"onUpdate:show":l=>a.show=l}),null)}),n=ue.zIndex;return y(se,w(Se,{style:{zIndex:n},onAfterEnter:Oe,onAfterLeave:$e}),Ce(e)?e:{default:()=>[e]})}}},m=function(e){const n=U(e)?e:{content:e},t=O(u(u({},he),n));t.show=!0,I||(I=!0,k=de(we).unmountInstance);const{length:a}=c,s={id:H++,reactiveSnackOptions:t};if(a===0||p)Ie(s);else{const i=`update-${H}`;ze(t,i)}return{clear(){!p&&c.length?c[0].reactiveSnackOptions.show=!1:t.show=!1}}};$.forEach(e=>{m[e]=n=>(U(n)?n.type=e:n={content:n,type:e},m(n))});m.install=function(e){e.component(f.name,f)};m.allowMultiple=function(e=!1){e!==p&&(c.forEach(n=>{n.reactiveSnackOptions.show=!1}),p=e)};m.clear=function(){c.forEach(e=>{e.reactiveSnackOptions.show=!1})};m.Component=f;function Oe(e){var a,s;const n=e.getAttribute("data-id"),t=c.find(i=>i.id===G(n));t&&((s=(a=t.reactiveSnackOptions).onOpened)==null||s.call(a))}function $e(e){var s,i;e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const n=e.getAttribute("data-id"),t=c.find(r=>r.id===G(n));t&&(t.animationEnd=!0,(i=(s=t.reactiveSnackOptions).onClosed)==null||i.call(s)),c.every(r=>r.animationEnd)&&(k==null||k(),c=O([]),I=!1)}function Ie(e){c.push(e)}function ze(e,n){const[t]=c;t.reactiveSnackOptions=u(u({},t.reactiveSnackOptions),e),t._update=n}function Ee(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}f.install=function(e){e.component(f.name,f)};export{m as S};
