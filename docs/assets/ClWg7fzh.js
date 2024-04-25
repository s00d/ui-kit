import{_ as f}from"./BI8L1cvd.js";import{E as p}from"./Cepu5Cdp.js";import{_ as r,o as c,c as i,b as e,a3 as _,a as n,g as x,r as k,w as l,d as a,u as s,G as v,F as w,P as S}from"./C296uaLE.js";import{_ as O}from"./D9cpl7au.js";import{u as b}from"./CNmpcN_a.js";const y="default",q="on-skeleton",$="",L={},E=[{name:"width",description:"Ширина элемента",tags:{example:[{description:"'100%', 'auto', '42px', 42",title:"example"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"height",description:"Высота элемента",tags:{example:[{description:"'100%', 'auto', '42px', 42",title:"example"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"shape",description:"Форма - круг, квадрат или прямоугольник",required:!1,type:{name:"union",elements:[{name:'"circle"'},{name:'"default"'},{name:'"square"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"loading",description:"Анимация загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tag",description:"Используемый тег",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"light",description:"Светлая версия компонента, для использования на тёмном фоне",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],F="components/on-skeleton/index.vue",V={exportName:y,displayName:q,description:$,tags:L,props:E,sourceFile:F},C={},D={class:"demo"};function N(d,o){const t=_;return c(),i("div",D,[e(t)])}const B=r(C,[["render",N]]),I=`<template>
  <div class="demo">
    <on-skeleton />
  </div>
</template>
`,z={},A={class:"demo"};function P(d,o){const t=_;return c(),i("div",A,[e(t,{shape:"circle",width:"40"}),e(t,{shape:"square",width:"40"})])}const G=r(z,[["render",P],["__scopeId","data-v-e4d4e646"]]),H=`<template>
  <div class="demo">
    <on-skeleton
      shape="circle"
      width="40"
    />
    <on-skeleton
      shape="square"
      width="40"
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.on-ph {
  flex: 0 0 auto;
}
</style>
`,R={},T={class:"demo"};function U(d,o){const t=_;return c(),i("div",T,[e(t,{height:"2rem",width:"100px"}),e(t,{height:"16px",width:200}),e(t,{height:"16px"}),e(t,{shape:"circle",width:"45px"}),e(t,{shape:"square",height:"3rem"}),e(t,{shape:"square",class:"css-square"})])}const j=r(R,[["render",U],["__scopeId","data-v-08755056"]]),J=`<template>
  <div class="demo">
    <on-skeleton
      height="2rem"
      width="100px"
    />
    <on-skeleton
      height="16px"
      :width="200"
    />
    <on-skeleton height="16px" />
    <on-skeleton
      shape="circle"
      width="45px"
    />
    <on-skeleton
      shape="square"
      height="3rem"
    />
    <on-skeleton
      shape="square"
      class="css-square"
    />
  </div>
</template>

<style scoped lang="scss">
.on-ph {
  margin-bottom: 8px;
}
.css-square {
  width: 65px;
}
</style>
`,K={},M={class:"demo"},Q={class:"col"},W={class:"col"};function X(d,o){const t=_;return c(),i("div",M,[n("div",Q,[e(t,{loading:"",shape:"circle",width:"45"})]),n("div",W,[e(t,{loading:"",height:"20",width:"150"}),e(t,{loading:""}),e(t,{loading:""})])])}const Y=r(K,[["render",X],["__scopeId","data-v-87ca4532"]]),Z=`<template>
  <div class="demo">
    <div class="col">
      <on-skeleton
        loading
        shape="circle"
        width="45"
      />
    </div>
    <div class="col">
      <on-skeleton
        loading
        height="20"
        width="150"
      />
      <on-skeleton loading />
      <on-skeleton loading />
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: flex-start;
}
.col {
  flex: 1 1 auto;
  &:first-child {
    flex: 0 0 auto;
    margin-inline-end: 16px;
  }
}
.on-ph {
  margin-bottom: 8px;
}
</style>
`,ee={class:"bg"},ne=x({__name:"light",setup(d){const o=k(!1);return(t,m)=>{const u=O,h=_;return c(),i(w,null,[e(u,{modelValue:s(o),"onUpdate:modelValue":m[0]||(m[0]=g=>v(o)?o.value=g:null)},{default:l(()=>[a(" Animate ")]),_:1},8,["modelValue"]),n("div",ee,[e(h,{light:"",loading:s(o),width:"120",height:"24"},null,8,["loading"]),e(h,{light:"",loading:s(o)},null,8,["loading"]),e(h,{light:"",loading:s(o),width:"40px",shape:"circle"},null,8,["loading"])])],64)}}}),te=r(ne,[["__scopeId","data-v-f3e15b96"]]),oe=`<script setup lang="ts">
const loading = ref(false);
<\/script>

<template>
  <on-switch v-model="loading">
    Animate
  </on-switch>
  <div class="bg">
    <on-skeleton
      light
      :loading="loading"
      width="120"
      height="24"
    />
    <on-skeleton
      light
      :loading="loading"
    />
    <on-skeleton
      light
      :loading="loading"
      width="40px"
      shape="circle"
    />
  </div>
</template>

<style scoped lang="scss">
.bg {
  padding: 20px;
  background: #26374d;
}
.on-ph {
  margin-bottom: 10px;
}
.on-switch {
  margin-bottom: 12px;
}
</style>
`,se={class:"markdown-body"},le=n("h1",null,"OnSkeleton",-1),ae=n("p",null,"Компонент-заполнитель для отображения вместо реального контента (например, на время загрузки данных).",-1),ce=n("h2",null,"Примеры использования",-1),ie=n("h3",null,"Basic",-1),de=n("p",null,"Простейший пример использования",-1),pe=n("h3",null,"Shapes",-1),re=n("p",null,"Доступно три варианта формы:",-1),_e=n("ul",null,[n("li",null,[n("code",null,"default"),a(" – прямоугольник (по умолчанию)")]),n("li",null,[n("code",null,"circle"),a(" – круг")]),n("li",null,[n("code",null,"square"),a(" – квадрат")])],-1),he=S("<h3>Sizes</h3><p>По умолчанию, для стандартной формы (прямоугольник) установлена высота, равная текущему размеру шрифта (<code>1em</code>).</p><p>Для задания размеров можно использовать параметры <code>width</code> и <code>height</code> или использовать CSS.</p><p>Параметры могут принимать как числовое значение (будет интерпретировано как значение в пикселях), так и строку, содержащую валидное CSS-значение. Примеры: <code>42</code>, <code>&#39;42px&#39;</code>, <code>&#39;100%&#39;</code>, <code>&#39;auto&#39;</code>, <code>&#39;2rem&#39;</code></p><p>При использовании формы <code>circle</code> или <code>square</code> достаточно задать только один размер (не важно какой): <code>width</code> или <code>height</code>. Если ни один из размеров не задан, ширина будет вычислена автоматически, а высота будет равна ширине.</p>",5),me=n("h3",null,"Loading",-1),ue=n("p",null,[a("Для проигрывания анимации загрузки передайте параметр "),n("code",null,"loading"),a(".")],-1),ge=n("h3",null,"Light",-1),fe=n("p",null,"Светлая версия компонента, для использования на тёмном фоне.",-1),xe=n("h2",null,"API",-1),be="OnSkeleton | OnFrontLib Docs",ye=[{property:"og:title",content:"OnSkeleton | OnFrontLib Docs"},{name:"twitter:title",content:"OnSkeleton | OnFrontLib Docs"}],qe={__name:"on-skeleton",setup(d,{expose:o}){return o({frontmatter:{title:"OnSkeleton | OnFrontLib Docs",meta:[{property:"og:title",content:"OnSkeleton | OnFrontLib Docs"},{name:"twitter:title",content:"OnSkeleton | OnFrontLib Docs"}]}}),b({title:"OnSkeleton | OnFrontLib Docs",meta:[{property:"og:title",content:"OnSkeleton | OnFrontLib Docs"},{name:"twitter:title",content:"OnSkeleton | OnFrontLib Docs"}]}),(u,h)=>(c(),i("div",se,[le,ae,ce,ie,de,e(p,{code:s(I)},{default:l(()=>[e(B)]),_:1},8,["code"]),pe,re,_e,e(p,{code:s(H)},{default:l(()=>[e(G)]),_:1},8,["code"]),he,e(p,{code:s(J)},{default:l(()=>[e(j)]),_:1},8,["code"]),me,ue,e(p,{code:s(Z)},{default:l(()=>[e(Y)]),_:1},8,["code"]),ge,fe,e(p,{code:s(oe)},{default:l(()=>[e(te)]),_:1},8,["code"]),xe,e(f,{value:s(V)},null,8,["value"])]))}};export{qe as default,ye as meta,be as title};
