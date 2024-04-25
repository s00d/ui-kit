import{_ as h}from"./BI8L1cvd.js";import{E as b}from"./Cepu5Cdp.js";import{g as E,r as m,o as s,c,a as o,q as i,u as a,j as _,s as f,b as l,l as x,I as y,_ as v,w as p,d as O}from"./C296uaLE.js";import{_ as P}from"./DiFNyx3A.js";import{u as F}from"./CNmpcN_a.js";const $="OnExpansionPanel",D="default",L="on-expansion-panel",k="",w={},B=[{name:"translateMode",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"openText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'landing3.global.expansion_panel.open'"}},{name:"closeText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'landing3.global.expansion_panel.close'"}}],N=[{name:"title"},{name:"default"},{name:"footer"}],T="components/on-expansion-panel/index.vue",V={name:$,exportName:D,displayName:L,description:k,tags:w,props:B,slots:N,sourceFile:T},C=E({name:"OnExpansionPanel",__name:"index",props:{translateMode:{type:Boolean,default:!1},openText:{default:"landing3.global.expansion_panel.open"},closeText:{default:"landing3.global.expansion_panel.close"}},setup(r){const n=m(!1),t=m(),d=()=>{n.value=!n.value,t.value&&(t.value.style.height=n.value?`${t.value.scrollHeight}px`:"143px")};return(e,g)=>{const u=y;return s(),c("div",{class:x(["expansion-panel",{"--is-active":a(n)}])},[o("div",{ref_key:"expansionPanelRef",ref:t,class:"body"},[i(e.$slots,"title",{},void 0,!0),i(e.$slots,"default",{},void 0,!0),i(e.$slots,"footer",{},void 0,!0)],512),o("button",{class:"btn",onClick:d},[!a(n)||e.translateMode?(s(),_(u,{key:0,path:`${e.openText}`},null,8,["path"])):f("",!0),a(n)||e.translateMode?(s(),_(u,{key:1,path:`${e.closeText}`},null,8,["path"])):f("",!0),l(P,{class:x(["arrow_down",{isOpen:a(n)}])},null,8,["class"])])],2)}}}),q=v(C,[["__scopeId","data-v-7a32d81c"]]),I={};function M(r,n){const t=q;return s(),c("div",null,[l(t,null,{title:p(()=>[O(" title ")]),default:p(()=>[O(" body ")]),_:1})])}const H=v(I,[["render",M]]),R=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-expansion-panel>
      <template #title>
        title
      </template>
      body
    </on-expansion-panel>
  </div>
</template>

<style scoped lang="scss">

</style>
`,j={class:"markdown-body"},z=o("h1",null,"OnExpansionPanel",-1),A=o("h2",null,"Примеры использования",-1),S=o("h3",null,"Basic",-1),G=o("h2",null,"API",-1),X="OnExpansionPanel | OnFrontLib Docs",Y=[{property:"og:title",content:"OnExpansionPanel | OnFrontLib Docs"},{name:"twitter:title",content:"OnExpansionPanel | OnFrontLib Docs"}],Z={__name:"on-expansion-panel",setup(r,{expose:n}){return n({frontmatter:{title:"OnExpansionPanel | OnFrontLib Docs",meta:[{property:"og:title",content:"OnExpansionPanel | OnFrontLib Docs"},{name:"twitter:title",content:"OnExpansionPanel | OnFrontLib Docs"}]}}),F({title:"OnExpansionPanel | OnFrontLib Docs",meta:[{property:"og:title",content:"OnExpansionPanel | OnFrontLib Docs"},{name:"twitter:title",content:"OnExpansionPanel | OnFrontLib Docs"}]}),(e,g)=>(s(),c("div",j,[z,A,S,l(b,{code:a(R)},{default:p(()=>[l(H)]),_:1},8,["code"]),G,l(h,{value:a(V)},null,8,["value"])]))}};export{Z as default,Y as meta,X as title};
