import{_ as u}from"./BI8L1cvd.js";import{E as p}from"./Cepu5Cdp.js";import{_ as i}from"./DDo6wilQ.js";import{_ as m,o as c,c as d,b as e,w as a,d as o,p as _,f,a as t,u as r}from"./C296uaLE.js";import{u as g}from"./CNmpcN_a.js";import"./Dt696U6n.js";const h="OnTag",x="default",b="on-tag",v="",y={},T=[{name:"closeable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}}],w=[{name:"close",type:{names:["MouseEvent"]}}],B=[{name:"icon"},{name:"default"},{name:"close"}],E="components/on-tag/index.vue",k={name:h,exportName:x,displayName:b,description:v,tags:y,props:T,events:w,slots:B,sourceFile:E},I={},N=s=>(_("data-v-bf057e6b"),s=s(),f(),s),V={class:"demo"},S=N(()=>t("a",{href:"https://google.com",target:"_blank"},"Link",-1));function q(s,l){const n=i;return c(),d("div",V,[e(n,null,{default:a(()=>[o("Tag")]),_:1}),e(n,null,{default:a(()=>[S]),_:1}),e(n,{borderless:""},{default:a(()=>[o(" Borderless ")]),_:1}),e(n,{color:"primary",closeable:""},{default:a(()=>[o(" Primary ")]),_:1}),e(n,{color:"success"},{default:a(()=>[o(" Success ")]),_:1}),e(n,{color:"warning"},{default:a(()=>[o(" Warning ")]),_:1}),e(n,{color:"error"},{default:a(()=>[o(" Error ")]),_:1})])}const O=m(I,[["render",q],["__scopeId","data-v-bf057e6b"]]),$=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <on-tag>Tag</on-tag>
    <on-tag>
      <a
        href="https://google.com"
        target="_blank"
      >Link</a>
    </on-tag>
    <on-tag borderless>
      Borderless
    </on-tag>

    <on-tag color="primary" closeable>
      Primary
    </on-tag>
    <on-tag color="success">
      Success
    </on-tag>
    <on-tag color="warning">
      Warning
    </on-tag>
    <on-tag color="error">
      Error
    </on-tag>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
`,P={class:"markdown-body"},A=t("h1",null,"OnTag",-1),C=t("p",null,"Простой компонент для вывода on-tag",-1),F=t("h2",null,"Примеры использования",-1),L=t("h3",null,"Basic",-1),W=t("h2",null,"API",-1),R=[],U={__name:"on-tag",setup(s,{expose:l}){return l({frontmatter:{meta:[]}}),g({meta:[]}),(M,j)=>(c(),d("div",P,[A,C,F,L,e(p,{code:r($)},{default:a(()=>[e(O)]),_:1},8,["code"]),W,e(u,{value:r(k)},null,8,["value"])]))}};export{U as default,R as meta};
