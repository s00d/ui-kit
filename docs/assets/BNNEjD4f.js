import{g as $,r as o,h as k,o as r,c as u,a as c,b as g,w as M,l as w,u as l,j as N,k as H,M as L,F as C,H as S,q as D,t as F,N as P,s as j,x as q,_ as x}from"./C296uaLE.js";import{v as E,g as B,s as K}from"./D12PdOEx.js";import{_ as A}from"./DiFNyx3A.js";const G={class:"dropdown-border"},J=["innerHTML"],Q={class:"dropdown-list-block"},R=["onClick"],U=["textContent"],W=$({__name:"index",props:{modelValue:{},list:{default:()=>[]},tag:{default:"button"},type:{default:"default"},size:{default:"md"},ghost:{type:Boolean,default:!1},htmlType:{default:"button"},loaderOverlay:{type:Boolean,default:!1},loaderClickable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},shape:{default:"default"}},emits:["update:modelValue","select"],setup(T,{emit:V}){const i=T,v=V,a=o(!1),d=o(null),O=o(null),y=o(0),p=o(0),f=o(0),h=k(()=>i.list.findIndex(e=>e.key===i.modelValue)??0),_=k(()=>i.list.length),b=(e=0)=>{setTimeout(()=>{a.value&&(a.value=!1,d.value&&clearInterval(d.value))},e)},z=e=>{if(a.value)return b();const n=e.currentTarget,m=()=>{const t=B(n);(Math.abs(t.left-f.value)>10||Math.abs(t.top-p.value)>10)&&(a.value=!1,clearInterval(d.value))};a.value=!0;const s=B(n);p.value=s.top,f.value=s.left,y.value=s.width,d.value=K(()=>m(),10)},I=(e,n)=>{v("update:modelValue",e.key),v("select",e,n),a.value=!1};return(e,n)=>{const m=q;return r(),u(C,null,[c("div",G,[g(m,{ref_key:"btn",ref:O,class:"dropdown",tag:e.tag,type:e.type,block:e.block,danger:e.danger,disabled:e.disabled,ghost:e.ghost,"html-type":e.htmlType,"loader-clickable":e.loaderClickable,"loader-overlay":e.loaderOverlay,shape:e.shape,size:e.size,onClick:z},{default:M(()=>[c("span",{class:"text",innerHTML:e.modelValue},null,8,J),g(A,{class:w(["arrow_down",{isOpen:l(a)}])},null,8,["class"])]),_:1},8,["tag","type","block","danger","disabled","ghost","html-type","loader-clickable","loader-overlay","shape","size"])]),l(a)?(r(),N(P,{key:0,to:"body"},[H((r(),u("div",{class:"dropdown-list",style:L({width:`${l(y)}px`,top:`${l(p)}px`,left:`${l(f)}px`})},[c("ul",Q,[(r(!0),u(C,null,S(e.list,(s,t)=>(r(),u("li",{key:t,class:w([{active:l(h)===t,first:t===0,last:t===l(_)-1},"dropdown-list-block-item"]),onClick:X=>I(s,t)},[D(e.$slots,"item",{item:s,item_id:t,item_key:t,first:t===0,last:t===l(_)-1,active:l(h)===t},()=>[c("span",{textContent:F(s.val)},null,8,U)],!0)],10,R))),128))])],4)),[[l(E),()=>b(10)]])])):j("",!0)],64)}}}),te=x(W,[["__scopeId","data-v-6db3d197"]]);export{te as _};