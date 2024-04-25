import{_ as r}from"./BI8L1cvd.js";import{E as d}from"./Cepu5Cdp.js";import{_}from"./CE8SZToR.js";import{_ as p,o as m,c,b as t,w as e,d as o,u as a,a as n}from"./C296uaLE.js";import{u}from"./CNmpcN_a.js";import"./Dt696U6n.js";const f="OnListItem",x="default",h="on-list-item",L="",g={},v=[{name:"modelValue",description:"Содержимое поля ввода",required:!1,type:{name:"string"}}],N="components/on-list-item/index.vue",y={name:f,exportName:x,displayName:h,description:L,tags:g,props:v,sourceFile:N},B={};function I(l,i){const s=_;return m(),c("div",null,[t(s,null,{default:e(()=>[o(" List item ")]),_:1}),t(s,{icon:"round-image"},{default:e(()=>[o(" List item ")]),_:1}),t(s,{icon:"round-image"},{suffix:e(()=>[o(" suffix ")]),default:e(()=>[o(" List item ")]),_:1})])}const E=p(B,[["render",I]]),O=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-list-item>
      List item
    </on-list-item>
    <on-list-item icon="round-image">
      List item
    </on-list-item>
    <on-list-item icon="round-image">
      List item
      <template #suffix>
        suffix
      </template>
    </on-list-item>
  </div>
</template>

<style scoped lang="scss">

</style>
`,V={class:"markdown-body"},k=n("h1",null,"OnListItem",-1),w=n("p",null,"Простой компонент для вывода on-list-item",-1),$=n("h2",null,"Примеры использования",-1),b=n("h3",null,"Basic",-1),C=n("h2",null,"API",-1),G=[],J={__name:"on-list-item",setup(l,{expose:i}){return i({frontmatter:{meta:[]}}),u({meta:[]}),(q,A)=>(m(),c("div",V,[k,w,$,b,t(d,{code:a(O)},{default:e(()=>[t(E)]),_:1},8,["code"]),C,t(r,{value:a(y)},null,8,["value"])]))}};export{J as default,G as meta};
