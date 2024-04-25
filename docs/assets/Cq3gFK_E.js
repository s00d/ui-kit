import{_ as b}from"./BI8L1cvd.js";import{E as O}from"./Cepu5Cdp.js";import{g as h,r as u,i as L,z as x,o as d,c as _,b as o,a,q as F,s as w,A as v,a1 as P,_ as y,w as l,d as p,F as D,x as k,u as f}from"./C296uaLE.js";import{u as B}from"./CNmpcN_a.js";const N="default",C="on-page-loader",E="",$={},T=[{name:"timeout",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10000"}}],V=[{name:"default"}],I="components/on-page-loader/index.vue",q={exportName:N,displayName:C,description:E,tags:$,props:T,slots:V,sourceFile:I},A={key:0,class:"loader-container"},S={class:"loader-slot"},z=h({__name:"index",props:{timeout:{default:1e4}},setup(i){const s=i,e=u(0),r=v("loader"),c=u(null),t=u(null);return L(()=>{c.value=r.on(n=>{t.value&&clearTimeout(t.value),n==="inc"&&(t.value=setTimeout(()=>{e.value=0},s.timeout),e.value++),n==="dec"&&e.value>0&&e.value--})}),x(()=>{c.value&&(c.value(),c.value=null),t.value&&clearTimeout(t.value),e.value=0}),(n,m)=>{const g=P;return e.value?(d(),_("div",A,[o(g,{active:"",width:100,height:100}),a("div",S,[F(n.$slots,"default",{},void 0,!0)])])):w("",!0)}}}),H=y(z,[["__scopeId","data-v-69a24ca4"]]),M=h({__name:"basic",setup(i){const s=v("loader"),e=()=>{s.emit("inc")},r=()=>{s.emit("dec")};return(c,t)=>{const n=k,m=H;return d(),_(D,null,[a("div",null,[o(n,{onClick:e},{default:l(()=>[p(" show ")]),_:1})]),o(m,{timeout:1e10},{default:l(()=>[o(n,{onClick:r},{default:l(()=>[p(" hide ")]),_:1})]),_:1})],64)}}}),U=`<script setup lang="ts">
const bus = useEventBus('loader');
const show = () => {
  bus.emit('inc');
};
const hide = () => {
  bus.emit('dec');
};
<\/script>

<template>
  <div>
    <on-btn @click="show">
      show
    </on-btn>
  </div>
  <on-page-loader :timeout="10000000000">
    <on-btn @click="hide">
      hide
    </on-btn>
  </on-page-loader>
</template>

<style scoped lang="scss">

</style>
`,j={class:"markdown-body"},G=a("h1",null,"OnPageLoader",-1),J=a("p",null,"Глобальный загрузчик на страницу, работает через шину",-1),K=a("h2",null,"Примеры использования",-1),Q=a("h3",null,"Basic",-1),R=a("h2",null,"API",-1),ee="OnPageLoader | OnFrontLib Docs",te=[{property:"og:title",content:"OnPageLoader | OnFrontLib Docs"},{name:"twitter:title",content:"OnPageLoader | OnFrontLib Docs"}],ne={__name:"on-page-loader",setup(i,{expose:s}){return s({frontmatter:{title:"OnPageLoader | OnFrontLib Docs",meta:[{property:"og:title",content:"OnPageLoader | OnFrontLib Docs"},{name:"twitter:title",content:"OnPageLoader | OnFrontLib Docs"}]}}),B({title:"OnPageLoader | OnFrontLib Docs",meta:[{property:"og:title",content:"OnPageLoader | OnFrontLib Docs"},{name:"twitter:title",content:"OnPageLoader | OnFrontLib Docs"}]}),(c,t)=>(d(),_("div",j,[G,J,K,Q,o(O,{code:f(U)},{default:l(()=>[o(M)]),_:1},8,["code"]),R,o(b,{value:f(q)},null,8,["value"])]))}};export{ne as default,te as meta,ee as title};
