import{_ as i}from"./ApiDoc.vue.BBsrfSvH.js";import{E as l}from"./index.CqeEYO5W.js";import{_ as m,o as a,c as r,a as e,d as t,b as n,B as d,w as u,u as c}from"./entry._doioHTx.js";import{u as _}from"./vue.f36acd1f.BVcziSBg.js";const f="OnCopy",y="default",x="on-copy",O="",b={},C=[{name:"text",required:!0,type:{name:"string"}},{name:"timeout",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}}],h=[{name:"copy",description:"Иконка копирования"},{name:"feedback"}],g="components/on-copy/index.vue",k={name:f,exportName:y,displayName:x,description:O,tags:b,props:C,slots:h,sourceFile:g},F={};function v(p,s){const o=d;return a(),r("div",null,[e("p",null,[t("Some text "),n(o,{text:"Some text"})]),e("p",null,[t(" Green feedback "),n(o,{text:"Green feedback",class:"green-feedback"})]),e("p",null,[t(" Custom timeout "),n(o,{text:"Custom timeout",timeout:1e4})])])}const D=m(F,[["render",v],["__scopeId","data-v-7f0c701e"]]),L=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <p>Some text <on-copy text="Some text" /></p>
    <p>
      Green feedback <on-copy
        text="Green feedback"
        class="green-feedback"
      />
    </p>
    <p>
      Custom timeout <on-copy
        text="Custom timeout"
        :timeout="10000"
      />
    </p>
  </div>
</template>

<style scoped lang="scss">
.green-feedback {
  --feedback-color: #28cd28;
}
</style>
`,B={class:"markdown-body"},N=e("h1",null,"OnCopy",-1),w=e("p",null,"Простой компонент для копирования текста. Отображает иконку копирования, при нажатии на которую текст помещается в буфер обмена, а иконка копирования временно заменяется на иконку, сообщающую об успешном копировании.",-1),S=e("h2",null,"Примеры использования",-1),E=e("h3",null,"Basic",-1),G=e("p",null,[t("Используйте CSS-классы "),e("code",null,"--left"),t(" и "),e("code",null,"--right"),t(" для расположения компонента слева или справа.")],-1),V=e("h2",null,"API",-1),j="OnCopy | OnFrontLib Docs",z=[{property:"og:title",content:"OnCopy | OnFrontLib Docs"},{name:"twitter:title",content:"OnCopy | OnFrontLib Docs"}],J={__name:"on-copy",setup(p,{expose:s}){return s({frontmatter:{title:"OnCopy | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCopy | OnFrontLib Docs"},{name:"twitter:title",content:"OnCopy | OnFrontLib Docs"}]}}),_({title:"OnCopy | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCopy | OnFrontLib Docs"},{name:"twitter:title",content:"OnCopy | OnFrontLib Docs"}]}),(q,$)=>(a(),r("div",B,[N,w,S,E,G,n(l,{code:c(L)},{default:u(()=>[n(D)]),_:1},8,["code"]),V,n(i,{value:c(k)},null,8,["value"])]))}};export{J as default,z as meta,j as title};
