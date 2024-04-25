import{_ as y}from"./ApiDoc.vue.BBsrfSvH.js";import{E as T}from"./index.CqeEYO5W.js";import{_ as f}from"./index.K-o-6l0c.js";import{g as p,Z as u,h as x,$ as h,o as m,j as b,c as _,a as n,b as s,u as c,d as r,w as O,F as g}from"./entry._doioHTx.js";import{u as F}from"./vue.f36acd1f.BVcziSBg.js";const v="OnTranslatorOnly",D="default",L="on-translator-only",w="",S={},B=[{name:"translator",required:!1,type:{name:"boolean"}}],N="components/on-translator-only/index.vue",E={name:v,exportName:D,displayName:L,description:w,tags:S,props:B,sourceFile:N},M=p({name:"OnTranslatorOnly",__name:"index",props:{translator:{type:Boolean}},setup(i){const t=i,d=u(),e=x(()=>t.translator||d.translateMode),o=h(),l=()=>{var a;return e.value?((a=o.default)==null?void 0:a.call(o))??null:null};return(a,P)=>(m(),b(l))}}),V={class:"toggle"},$=p({__name:"basic",setup(i){const t=u();return(d,e)=>{const o=f,l=M;return m(),_(g,null,[n("div",V,[s(o,{modelValue:c(t).translateMode,"onUpdate:modelValue":e[0]||(e[0]=a=>c(t).translateMode=a),label:"Edit mode"},null,8,["modelValue"])]),n("div",null,[r(" Text"),s(l,null,{default:O(()=>[r("Translator-only text")]),_:1})])],64)}}}),k=`<script setup lang="ts">
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
`,C={class:"markdown-body"},I=n("h1",null,"OnTranslatorOnly",-1),j=n("p",null,[r("Компонент, содержимое которого рендерится только при включенном "),n("code",null,"translateMode"),r(" или переданном параметре "),n("code",null,"translator"),r(".")],-1),q=n("h2",null,"Примеры использования",-1),A=n("h3",null,"Basic",-1),H=n("h2",null,"API",-1),K="OnTranslatorOnly | OnFrontLib Docs",Q=[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}],R={__name:"on-translator-only",setup(i,{expose:t}){return t({frontmatter:{title:"OnTranslatorOnly | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}]}}),F({title:"OnTranslatorOnly | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorOnly | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorOnly | OnFrontLib Docs"}]}),(o,l)=>(m(),_("div",C,[I,j,q,A,s(T,{code:c(k)},{default:O(()=>[s($)]),_:1},8,["code"]),H,s(y,{value:c(E)},null,8,["value"])]))}};export{R as default,Q as meta,K as title};
