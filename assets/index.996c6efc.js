import{n as C,_ as z,X as B,a3 as N}from"./elevation.6f2b205f.js";import{d as H,r as t,b as c,y as I,D as j,E as D,x as P,C as R,o as V,c as A,a as G,G as O,n as M,p as U}from"./vendor.8243c41e.js";const X={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const q=H({name:"VarSticky",props:X,setup(e){const d=t(null),l=t(null),n=t(!1),r=t("0px"),f=t("0px"),m=t("auto"),b=t("auto"),y=t("auto"),h=t("auto"),k=c(()=>!e.disabled&&e.cssMode),$=c(()=>!e.disabled&&n.value),i=c(()=>B(e.offsetTop));let o;const s=()=>{const{onScroll:a,cssMode:E,disabled:F}=e;if(F)return;let p=0;if(o!==window){const{top:T}=o.getBoundingClientRect();p=T}const g=l.value,u=d.value,{top:W,left:L}=u.getBoundingClientRect(),S=W-p;S<=i.value?(E||(m.value=`${u.offsetWidth}px`,b.value=`${u.offsetHeight}px`,r.value=`${p+i.value}px`,f.value=`${L}px`,y.value=`${g.offsetWidth}px`,h.value=`${g.offsetHeight}px`,n.value=!0),a==null||a(i.value,!0)):(n.value=!1,a==null||a(S,!1))},x=()=>{o=N(d.value),o!==window&&o.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},w=()=>{o!==window&&o.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return I(()=>e.disabled,s),j(x),D(w),P(x),R(w),{stickyEl:d,wrapperEl:l,isFixed:n,offsetTop:i,fixedTop:r,fixedLeft:f,fixedWidth:m,fixedHeight:b,fixedWrapperWidth:y,fixedWrapperHeight:h,enableCSSMode:k,enableFixedMode:$,toNumber:C}}});function J(e,d,l,n,r,f){return V(),A("div",{class:U(["var-sticky",[e.enableCSSMode?"var-sticky--css-mode":null]]),ref:"stickyEl",style:M({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[G("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:M({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[O(e.$slots,"default")],4)],6)}var v=z(q,[["render",J]]);v.install=function(e){e.component(v.name,v)};export{v as S,X as p};
