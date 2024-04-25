import{_}from"./ApiDoc.vue.BBsrfSvH.js";import{E as k}from"./index.CqeEYO5W.js";import{g as v,o as s,j as L,w as o,b as t,N as u,q as h,e as p,_ as O,c as m,a as n,d as l,F as x,u as f}from"./entry._doioHTx.js";import{u as g}from"./vue.f36acd1f.BVcziSBg.js";const b="OnLink",y="default",F="on-link",B="",w={},N=[{name:"prefetch",defaultValue:{func:!1,value:"undefined"}},{name:"noPrefetch",defaultValue:{func:!1,value:"undefined"}},{name:"noRel",defaultValue:{func:!1,value:"undefined"}},{name:"replace",defaultValue:{func:!1,value:"undefined"}},{name:"external",defaultValue:{func:!1,value:"undefined"}}],D=[{name:"default"}],V="components/on-link/index.vue",C={name:b,exportName:y,displayName:F,description:B,tags:w,props:N,slots:D,sourceFile:V},$=v({name:"OnLink",__name:"index",props:{to:{},href:{},external:{type:Boolean,default:void 0},target:{},rel:{},noRel:{type:Boolean,default:void 0},prefetchedClass:{},prefetch:{type:Boolean,default:void 0},noPrefetch:{type:Boolean,default:void 0},activeClass:{},exactActiveClass:{},ariaCurrentValue:{},replace:{type:Boolean,default:void 0}},setup(i){return(e,a)=>{const c=p,r=p;return s(),L(r,u({custom:""},e.$props),{default:o(({isActive:d})=>[t(c,u({...e.$props,...e.$attrs},{rel:d?"nofollow":e.rel}),{default:o(()=>[h(e.$slots,"default")]),_:2},1040,["rel"])]),_:3},16)}}}),E={};function P(i,e){const a=$;return s(),m(x,null,[n("div",null,[t(a,{to:"/on-link"},{default:o(()=>[l(' Активная ссылка с rel="nofollow" ')]),_:1})]),n("div",null,[t(a,{to:"/on-btn"},{default:o(()=>[l(" Неактивная ссылка ")]),_:1})]),n("div",null,[t(a,{to:"https://google.com"},{default:o(()=>[l(" Внешняя ссылка ")]),_:1})])],64)}const A=O(E,[["render",P]]),I=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-link to="/on-link">
      Активная ссылка с rel="nofollow"
    </on-link>
  </div>
  <div>
    <on-link to="/on-btn">
      Неактивная ссылка
    </on-link>
  </div>
  <div>
    <on-link to="https://google.com">
      Внешняя ссылка
    </on-link>
  </div>
</template>

<style scoped lang="scss">

</style>
`,R={class:"markdown-body"},j=n("h1",null,"OnLink",-1),q=n("p",null,[l("Замена компоненту "),n("code",null,"NuxtLink"),l(". Единственное отличие - на активных (текущих) ссылках устанавливается аттрибут "),n("code",null,'rel="nofollow'),l(".")],-1),H=n("h2",null,"Примеры использования",-1),S=n("h3",null,"Basic",-1),T=n("h2",null,"API",-1),M="OnLink | OnFrontLib Docs",Q=[{property:"og:title",content:"OnLink | OnFrontLib Docs"},{name:"twitter:title",content:"OnLink | OnFrontLib Docs"}],U={__name:"on-link",setup(i,{expose:e}){return e({frontmatter:{title:"OnLink | OnFrontLib Docs",meta:[{property:"og:title",content:"OnLink | OnFrontLib Docs"},{name:"twitter:title",content:"OnLink | OnFrontLib Docs"}]}}),g({title:"OnLink | OnFrontLib Docs",meta:[{property:"og:title",content:"OnLink | OnFrontLib Docs"},{name:"twitter:title",content:"OnLink | OnFrontLib Docs"}]}),(r,d)=>(s(),m("div",R,[j,q,H,S,t(k,{code:f(I)},{default:o(()=>[t(A)]),_:1},8,["code"]),T,t(_,{value:f(C)},null,8,["value"])]))}};export{U as default,Q as meta,M as title};
