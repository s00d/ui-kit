import{_ as y}from"./BI8L1cvd.js";import{E as T}from"./Cepu5Cdp.js";import{_ as f}from"./D9cpl7au.js";import{g as p,ab as u,h as x,U as h,o as m,j as b,c as _,a as n,b as s,u as c,d as r,w as O,F as g}from"./C296uaLE.js";import{u as F}from"./CNmpcN_a.js";const v="OnTranslatorOnly",D="default",L="on-translator-only",w="",S={},B=[{name:"translator",required:!1,type:{name:"boolean"}}],N="components/on-translator-only/index.vue",E={name:v,exportName:D,displayName:L,description:w,tags:S,props:B,sourceFile:N},M=p({name:"OnTranslatorOnly",__name:"index",props:{translator:{type:Boolean}},setup(i){const t=i,d=u(),e=x(()=>t.translator||d.translateMode),o=h(),l=()=>{var a;return e.value?((a=o.default)==null?void 0:a.call(o))??null:null};return(a,H)=>(m(),b(l))}}),V={class:"toggle"},k=p({__name:"basic",setup(i){const t=u();return(d,e)=>{const o=f,l=M;return m(),_(g,null,[n("div",V,[s(o,{modelValue:c(t).translateMode,"onUpdate:modelValue":e[0]||(e[0]=a=>c(t).translateMode=a),label:"Edit mode"},null,8,["modelValue"])]),n("div",null,[r(" Text"),s(l,null,{default:O(()=>[r("Translator-only text")]),_:1})])],64)}}}),$=`<script setup lang="ts">
import useOnTranslateStore from 'on-front-lib/store/on-translate-store';

const onTranslateStore = useOnTranslateStore();
<\/script>

<template>
  <div class="toggle">
    <on-switch
      v-model="onTranslateStore.translateMode"
      label="Edit mode"
    />
  </div>
  <div>
    Text<on-translator-only>Translator-only text</on-translator-only>
  </div>
</template>

<style scoped lang="scss">

</style>
`,C={class:"markdown-body"},I=n("h1",null,"OnTranslatorOnly",-1),U=n("p",null,[r("Компонент, содержимое которого рендерится только при включенном "),n("code",null,"translateMode"),r(" или переданном параметре "),n("code",null,"translator"),r(".")],-1),j=n("h2",null,"Примеры использования",-1),q=n("h3",null,"Basic",-1),A=n("h2",null,"API",-1),Q="OnTranslatorOnly | OnFrontLib Docs",R=[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}],W={__name:"on-translator-only",setup(i,{expose:t}){return t({frontmatter:{title:"OnTranslatorOnly | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}]}}),F({title:"OnTranslatorOnly | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}]}),(o,l)=>(m(),_("div",C,[I,U,j,q,s(T,{code:c($)},{default:O(()=>[s(k)]),_:1},8,["code"]),A,s(y,{value:c(E)},null,8,["value"])]))}};export{W as default,R as meta,Q as title};
