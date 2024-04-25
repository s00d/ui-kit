import{E as T}from"./Cepu5Cdp.js";import{g as h,D as x,o as a,j as m,w as l,q as _,u as r,_ as v,K as w,r as O,O as C,c as g,b,d,k as u,x as D,p as L,f as $,a as f}from"./C296uaLE.js";import{_ as k}from"./DcAZa88H.js";import{u as B}from"./CNmpcN_a.js";import"./CwnFFlTy.js";const E=h({name:"OnTooltip",__name:"index",props:{placement:{default:"top"},active:{type:Boolean},lazy:{type:Boolean},trigger:{default:"hover"},popperClass:{default:void 0},interactive:{type:Boolean,default:!1},mouseMoveDebounce:{default:30},popperOptions:{default:()=>({})},transitionName:{default:"on-tooltip"},disabled:{type:Boolean},arrow:{type:Boolean,default:!0}},emits:["update:active"],setup(o,{emit:s}){const i=x(o,"active",s,{passive:!0});return(t,n)=>(a(),m(k,{placement:t.placement,active:r(i),trigger:t.trigger,"mouse-move-debounce":t.mouseMoveDebounce,interactive:t.interactive,"popper-class":["on-tooltip",t.popperClass],"popper-options":t.popperOptions,"transition-name":t.transitionName,disabled:t.disabled,arrow:t.arrow},{content:l(()=>[_(t.$slots,"content",{},void 0,!0)]),default:l(()=>[_(t.$slots,"default",{},void 0,!0)]),_:3},8,["placement","active","trigger","mouse-move-debounce","interactive","popper-class","popper-options","transition-name","disabled","arrow"]))}}),F=v(E,[["__scopeId","data-v-139308d6"]]),I={beforeMount(o,s){const e=document.createElement("div"),c=()=>{e.innerHTML=s.value,e.style.backgroundColor="#5e5e5e",e.style.color="white",e.style.position="absolute",e.style.padding="5px",e.style.borderRadius="5px",e.style.whiteSpace="nowrap",e.style.zIndex="9999",e.style.transition="opacity 0.2s",e.style.opacity="0";const t=document.createElement("div");t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.borderStyle="solid",t.style.borderWidth="5px",e.appendChild(t),document.body.appendChild(e);const n=o.getBoundingClientRect(),p=e.getBoundingClientRect();switch(s.arg){case"top":e.style.left=`${n.left+n.width/2-p.width/2}px`,e.style.top=`${n.top-p.height-10}px`,t.style.left="50%",t.style.top="100%",t.style.marginLeft="-5px",t.style.borderColor="black transparent transparent transparent";break;case"bottom":e.style.left=`${n.left+n.width/2-p.width/2}px`,e.style.top=`${n.bottom+10}px`,t.style.left="50%",t.style.bottom="100%",t.style.marginLeft="-5px",t.style.borderColor="transparent transparent black transparent";break;case"left":e.style.left=`${n.left-p.width-10}px`,e.style.top=`${n.top+n.height/2-p.height/2}px`,t.style.left="100%",t.style.top="50%",t.style.marginTop="-5px",t.style.borderColor="transparent transparent transparent black";break;case"right":e.style.left=`${n.right+10}px`,e.style.top=`${n.top+n.height/2-p.height/2}px`,t.style.right="100%",t.style.top="50%",t.style.marginTop="-5px",t.style.borderColor="transparent black transparent transparent";break}setTimeout(()=>{e.style.opacity="1"},0)},i=()=>{e.style.opacity="0",setTimeout(()=>{document.body.contains(e)&&document.body.removeChild(e)},500)};o.addEventListener("mouseenter",c),o.addEventListener("mouseleave",i),o._showTooltip=c,o._hideTooltip=i},beforeUnmount(o){o.removeEventListener("mouseenter",o._showTooltip),o.removeEventListener("mouseleave",o._hideTooltip)}};let y=!1;function N(){const o=w();y||(o.vueApp.directive("tooltip",I),y=!0)}const S=o=>(L("data-v-7030532f"),o=o(),$(),o),M={class:"demo"},R=S(()=>f("div",null,"message",-1)),A=h({__name:"basic",setup(o){const s=O("<b>Привет, мир!</b>");return N(),(e,c)=>{const i=D,t=F,n=C("tooltip");return a(),g("div",M,[b(t,null,{content:l(()=>[R]),default:l(()=>[b(i,null,{default:l(()=>[d(" Tooltip v2 ")]),_:1})]),_:1}),u((a(),m(i,null,{default:l(()=>[d(" top ")]),_:1})),[[n,r(s),"top"]]),u((a(),m(i,null,{default:l(()=>[d(" bottom ")]),_:1})),[[n,r(s),"bottom"]]),u((a(),m(i,null,{default:l(()=>[d(" left ")]),_:1})),[[n,r(s),"left"]]),u((a(),m(i,null,{default:l(()=>[d(" right ")]),_:1})),[[n,r(s),"right"]])])}}}),V=v(A,[["__scopeId","data-v-7030532f"]]),z=`<script setup lang="ts">
import useTooltip from "@onfl/composables/useTooltip";

const text = ref('<b>Привет, мир!</b>');
useTooltip();
<\/script>

<template>
  <div class="demo">
    <on-tooltip>
      <on-btn>
        Tooltip v2
      </on-btn>
      <template #content>
        <div>message</div>
      </template>
    </on-tooltip>

    <on-btn v-tooltip:top="text">
      top
    </on-btn>
    <on-btn v-tooltip:bottom="text">
      bottom
    </on-btn>
    <on-btn v-tooltip:left="text">
      left
    </on-btn>
    <on-btn v-tooltip:right="text">
      right
    </on-btn>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  gap: 16px;
}
</style>
`,H={class:"markdown-body"},j=f("h1",null,"OnTooltip",-1),q=f("p",null,"Composable для вывода подсказки по наведению на элемент.",-1),K=f("h3",null,"Basic",-1),Q="OnTooltip | OnFrontLib Docs",X=[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}],Y={__name:"on-tooltip",setup(o,{expose:s}){return s({frontmatter:{title:"OnTooltip | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}]}}),B({title:"OnTooltip | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}]}),(i,t)=>(a(),g("div",H,[j,q,K,b(T,{code:r(z)},{default:l(()=>[b(V)]),_:1},8,["code"])]))}};export{Y as default,X as meta,Q as title};
