import{ab as L,ac as g,ad as E,r as C,y as O,ae as S,af as h,ag as P,ah as W,h as D,ai as I}from"./entry._doioHTx.js";const H=window.setInterval;function p(e){var t;const o=h(e);return(t=o==null?void 0:o.$el)!=null?t:o}const T=I?window:void 0;function y(...e){let t,o,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,i]=e,t=T):[t,o,n,i]=e,!t)return g;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const u=[],d=()=>{u.forEach(a=>a()),u.length=0},s=(a,v,r,l)=>(a.addEventListener(v,r,l),()=>a.removeEventListener(v,r,l)),c=O(()=>[p(t),h(i)],([a,v])=>{if(d(),!a)return;const r=S(v)?{...v}:v;u.push(...o.flatMap(l=>n.map(f=>s(a,l,f,r))))},{immediate:!0,flush:"post"}),m=()=>{c(),d()};return P(m),m}let _=!1;function A(e,t,o={}){const{window:n=T,ignore:i=[],capture:u=!0,detectIframe:d=!1}=o;if(!n)return g;E&&!_&&(_=!0,Array.from(n.document.body.children).forEach(r=>r.addEventListener("click",g)),n.document.documentElement.addEventListener("click",g));let s=!0;const c=r=>i.some(l=>{if(typeof l=="string")return Array.from(n.document.querySelectorAll(l)).some(f=>f===r.target||r.composedPath().includes(f));{const f=p(l);return f&&(r.target===f||r.composedPath().includes(f))}}),a=[y(n,"click",r=>{const l=p(e);if(!(!l||l===r.target||r.composedPath().includes(l))){if(r.detail===0&&(s=!c(r)),!s){s=!0;return}t(r)}},{passive:!0,capture:u}),y(n,"pointerdown",r=>{const l=p(e);s=!c(r)&&!!(l&&!r.composedPath().includes(l))},{passive:!0}),d&&y(n,"blur",r=>{setTimeout(()=>{var l;const f=p(e);((l=n.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(f!=null&&f.contains(n.document.activeElement))&&t(r)},0)})].filter(Boolean);return()=>a.forEach(r=>r())}const N={[L.mounted](e,t){const o=!t.modifiers.bubble;if(typeof t.value=="function")e.__onClickOutside_stop=A(e,t.value,{capture:o});else{const[n,i]=t.value;e.__onClickOutside_stop=A(e,n,Object.assign({capture:o},i))}},[L.unmounted](e){e.__onClickOutside_stop()}};function k(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function b(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const o=e.parentNode;return!o||o.tagName==="BODY"?!1:b(o)}}function R(e){const t=e||window.event,o=t.target;return b(o)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const w=new WeakMap;function M(e,t=!1){const o=C(t);let n=null,i;O(W(e),s=>{const c=k(h(s));if(c){const m=c;w.get(m)||w.set(m,i),o.value&&(m.style.overflow="hidden")}},{immediate:!0});const u=()=>{const s=k(h(e));!s||o.value||(E&&(n=y(s,"touchmove",c=>{R(c)},{passive:!1})),s.style.overflow="hidden",o.value=!0)},d=()=>{var s;const c=k(h(e));!c||!o.value||(E&&(n==null||n()),c.style.overflow=(s=w.get(c))!=null?s:"",w.delete(c),o.value=!1)};return P(d),D({get(){return o.value},set(s){s?u():d()}})}function Y(){let e=!1;const t=C(!1);return(o,n)=>{if(t.value=n.value,e)return;e=!0;const i=M(o,n.value);O(t,u=>i.value=u)}}Y();const X=e=>{const{top:t,left:o,height:n,width:i}=e.getBoundingClientRect(),u=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,d=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0,s=t+u+n,c=o+d,m=s+n,a=c+i;return{top:s,left:c,bottom:m,right:a,width:i,height:n}};export{X as g,H as s,N as v};