import{g as p,V as u,h as m,o as _,j as v,w as x,q as w,u as h,T as S}from"./C296uaLE.js";const B=p({name:"OnExpandTransition",__name:"index",props:{disabled:{type:Boolean},x:{type:Boolean}},setup(a){const n=a,e=n.x?"width":"height",s=u(`offset-${e}`);function f(t){n.disabled||(t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[e]:t.style[e]})}function l(t){if(n.disabled)return;const o=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const c=`${t[s]}px`;t.style[e]="0",t.offsetHeight,t.style.transition=o.transition,requestAnimationFrame(()=>{t.style[e]=c})}function d(t){n.disabled||(t._initialStyle={transition:"",overflow:t.style.overflow,[e]:t.style[e]},t.style.overflow="hidden",t.style[e]=`${t[s]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[e]="0"))}function r(t){n.disabled||i(t)}function i(t){if(n.disabled)return;const o=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,o!=null&&(t.style[e]=o),delete t._initialStyle}const y=m(()=>n.disabled?"":n.x?"on-expand-x":"on-expand-y");return(t,o)=>(_(),v(S,{name:h(y),onBeforeEnter:f,onEnter:l,onLeave:d,onAfterLeave:r,onAfterEnter:i,onEnterCancelled:i,onLeaveCancelled:r},{default:x(()=>[w(t.$slots,"default")]),_:3},8,["name"]))}});export{B as _};