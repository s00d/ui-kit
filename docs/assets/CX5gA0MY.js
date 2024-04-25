import{_ as h}from"./BI8L1cvd.js";import{E as v}from"./Cepu5Cdp.js";import{g as b,r as y,o as s,c as r,F as m,H as d,a as e,b as o,w as c,t as a,d as k,l as C,x as N,_ as $,u as _}from"./C296uaLE.js";import{_ as B}from"./DcAZa88H.js";import{u as w}from"./CNmpcN_a.js";import"./CwnFFlTy.js";const A="OnPopper",E="default",P="on-popper",F="",O={},U=[{name:"open"},{name:"close"},{name:"toggle"},{name:"targetNode"},{name:"contentRef"},{name:"arrowRef"},{name:"isContentMounted"}],I=[{name:"update:active",type:{names:["boolean"]}}],V=[{name:"default"},{name:"content"}],H="components/on-popper/index.vue",R={name:A,exportName:E,displayName:P,description:F,tags:O,expose:U,events:I,slots:V,sourceFile:H},j={class:"container"},z=b({__name:"basic",setup(u){y(0);const p=["top","right","bottom","left"],l=["start","","end"];return(f,g)=>{const i=N,x=B;return s(),r("div",j,[(s(),r(m,null,d(p,t=>e("div",{key:t,class:C(t)},[(s(),r(m,null,d(l,n=>o(x,{key:n,placement:`${t}${n?"-"+n:""}`,trigger:"click"},{content:c(()=>[e("div",null,a(t)+" "+a(n),1)]),default:c(()=>[o(i,null,{default:c(()=>[k(a(n?t.charAt(0).toUpperCase():t)+a(n?n.charAt(0).toUpperCase():""),1)]),_:2},1024)]),_:2},1032,["placement"])),64))],2)),64))])}}}),D=$(z,[["__scopeId","data-v-fc59cb64"]]),L=`<script setup lang="ts">
const counter = ref(0);
const sides = ['top', 'right', 'bottom', 'left'];
const placements = ['start', '', 'end'];

<\/script>

<template>
  <div class="container">
    <div
      v-for="side in sides"
      :key="side"
      :class="side"
    >
      <on-popper
        v-for="placement in placements"
        :key="placement"
        :placement="\`\${side}\${placement ? '-' + placement : ''}\`"
        trigger="click"
      >
        <on-btn>
          {{ placement ? side.charAt(0).toUpperCase() : side }}{{ placement ? placement.charAt(0).toUpperCase() : '' }}
        </on-btn>
        <template #content>
          <div>
            {{ side }} {{ placement }}
          </div>
        </template>
      </on-popper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: auto max-content auto;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    ". top ."
    "left . right"
    ". bottom .";
}
.top {
  grid-area: top;
}
.left {
  grid-area: left;
}
.bottom {
  grid-area: bottom;
}
.right {
  grid-area: right;
}

.top, .bottom {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.left, .right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.left {
  align-items: flex-end;
}
.right {
  align-items: flex-start;
}
.on-btn {
  flex: 0 0 auto;
}
</style>
`,M={class:"markdown-body"},S=e("h1",null,"OnPopper",-1),T=e("p",null,"Базовый компонент для создания всплывающих сообщений, выпадающих списков, тултипов и прочих компонентов, которые необходимо отображать рядом с указанным элементом.",-1),q=e("h2",null,"Примеры использования",-1),G=e("h3",null,"Basic",-1),J=e("h2",null,"API",-1),nn=[],en={__name:"on-popper",setup(u,{expose:p}){return p({frontmatter:{meta:[]}}),w({meta:[]}),(g,i)=>(s(),r("div",M,[S,T,q,G,o(v,{code:_(L)},{default:c(()=>[o(D)]),_:1},8,["code"]),J,o(h,{value:_(R)},null,8,["value"])]))}};export{en as default,nn as meta};
