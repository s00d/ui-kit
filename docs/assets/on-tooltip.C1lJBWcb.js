import{E as f}from"./index.CqeEYO5W.js";import{H as x,g,r as v,L as T,o as r,c as _,k as d,u as p,j as m,w as a,d as b,x as w,_ as O,b as y,a as u}from"./entry._doioHTx.js";import{u as L}from"./vue.f36acd1f.BVcziSBg.js";const k={beforeMount(o,s){const e=document.createElement("div"),c=()=>{e.innerHTML=s.value,e.style.backgroundColor="#5e5e5e",e.style.color="white",e.style.position="absolute",e.style.padding="5px",e.style.borderRadius="5px",e.style.whiteSpace="nowrap",e.style.zIndex="9999",e.style.transition="opacity 0.2s",e.style.opacity="0";const t=document.createElement("div");t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.borderStyle="solid",t.style.borderWidth="5px",e.appendChild(t),document.body.appendChild(e);const n=o.getBoundingClientRect(),i=e.getBoundingClientRect();switch(s.arg){case"top":e.style.left=`${n.left+n.width/2-i.width/2}px`,e.style.top=`${n.top-i.height-10}px`,t.style.left="50%",t.style.top="100%",t.style.marginLeft="-5px",t.style.borderColor="black transparent transparent transparent";break;case"bottom":e.style.left=`${n.left+n.width/2-i.width/2}px`,e.style.top=`${n.bottom+10}px`,t.style.left="50%",t.style.bottom="100%",t.style.marginLeft="-5px",t.style.borderColor="transparent transparent black transparent";break;case"left":e.style.left=`${n.left-i.width-10}px`,e.style.top=`${n.top+n.height/2-i.height/2}px`,t.style.left="100%",t.style.top="50%",t.style.marginTop="-5px",t.style.borderColor="transparent transparent transparent black";break;case"right":e.style.left=`${n.right+10}px`,e.style.top=`${n.top+n.height/2-i.height/2}px`,t.style.right="100%",t.style.top="50%",t.style.marginTop="-5px",t.style.borderColor="transparent black transparent transparent";break}setTimeout(()=>{e.style.opacity="1"},0)},l=()=>{e.style.opacity="0",setTimeout(()=>{document.body.contains(e)&&document.body.removeChild(e)},500)};o.addEventListener("mouseenter",c),o.addEventListener("mouseleave",l),o._showTooltip=c,o._hideTooltip=l},beforeUnmount(o){o.removeEventListener("mouseenter",o._showTooltip),o.removeEventListener("mouseleave",o._hideTooltip)}};let h=!1;function C(){const o=x();h||(o.vueApp.directive("tooltip",k),h=!0)}const D={class:"demo"},E=g({__name:"basic",setup(o){const s=v("<b>Привет, мир!</b>");return C(),(e,c)=>{const l=w,t=T("tooltip");return r(),_("div",D,[d((r(),m(l,null,{default:a(()=>[b(" top ")]),_:1})),[[t,p(s),"top"]]),d((r(),m(l,null,{default:a(()=>[b(" bottom ")]),_:1})),[[t,p(s),"bottom"]]),d((r(),m(l,null,{default:a(()=>[b(" left ")]),_:1})),[[t,p(s),"left"]]),d((r(),m(l,null,{default:a(()=>[b(" right ")]),_:1})),[[t,p(s),"right"]])])}}}),$=O(E,[["__scopeId","data-v-0568cf49"]]),B=`<script setup lang="ts">
import useTooltip from "@onfl/composables/useTooltip";

const text = ref('<b>Привет, мир!</b>');

useTooltip();
<\/script>

<template>
  <div class="demo">
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
`,F={class:"markdown-body"},R=u("h1",null,"OnTooltip",-1),N=u("p",null,"Composable для вывода подсказки по наведению на элемент.",-1),A=u("h3",null,"Basic",-1),M="OnTooltip | OnFrontLib Docs",S=[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}],j={__name:"on-tooltip",setup(o,{expose:s}){return s({frontmatter:{title:"OnTooltip | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}]}}),L({title:"OnTooltip | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTooltip | OnFrontLib Docs"},{name:"twitter:title",content:"OnTooltip | OnFrontLib Docs"}]}),(l,t)=>(r(),_("div",F,[R,N,A,y(f,{code:p(B)},{default:a(()=>[y($)]),_:1},8,["code"])]))}};export{j as default,S as meta,M as title};
