import{_ as S}from"./BI8L1cvd.js";import{E as D}from"./Cepu5Cdp.js";import{g as E,r as c,o as v,c as g,q as C,a as n,M as l,u as o,t as m,s as $,F as q,_ as k,b as f,w as p,d as O}from"./C296uaLE.js";import{u as w}from"./CNmpcN_a.js";const B="default",N="on-range-slider",M="",T={},I=[{name:"value",required:!0,type:{name:"number"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"radius",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"thumbRadius",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#00A2FB'"}},{name:"textColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#ddd'"}},{name:"thumbColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#fff'"}},{name:"backgroundColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#ddd'"}},{name:"marksColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#666'"}}],X=[{name:"change"},{name:"input"}],A=[{name:"title"},{name:"prefix"},{name:"suffix"}],H="components/on-range-slider/index.vue",z={exportName:B,displayName:N,description:M,tags:T,props:I,events:X,slots:A,sourceFile:H},P={class:"range-slider-container"},j=E({__name:"index",props:{value:{},min:{default:1},max:{default:24},step:{default:1},radius:{default:5},thumbRadius:{default:5},color:{default:"#00A2FB"},textColor:{default:"#ddd"},thumbColor:{default:"#fff"},backgroundColor:{default:"#ddd"},marksColor:{default:"#666"}},emits:["change","input"],setup(b,{emit:u}){const t=b,h=u,a=c(t.value),_=c(null),s=c(!1),i=c(!1),L=()=>{s.value||(i.value=!0)},V=()=>{s.value||(i.value=!1)},R=e=>{s.value=!0,r(e),document.addEventListener("mousemove",r),document.addEventListener("mouseup",d),document.addEventListener("touchmove",r),document.addEventListener("touchend",d)},d=()=>{s.value=!1,i.value=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",d)},r=e=>{const x=_.value.getBoundingClientRect();let y=(("touches"in e?e.touches[0].clientX:e.clientX)-x.left)/x.width;y=Math.max(0,Math.min(1,y));const F=t.min+(t.max-t.min)*y;a.value=Math.round(F/t.step)*t.step,h("change",a.value),h("input",a.value)};return(e,x)=>(v(),g(q,null,[C(e.$slots,"title",{},void 0,!0),n("div",P,[C(e.$slots,"prefix",{},void 0,!0),n("div",{ref_key:"slider",ref:_,class:"range-slider",style:l({backgroundColor:e.backgroundColor,borderRadius:`${e.radius}px`}),onMousedown:R,onTouchstart:R},[n("div",{class:"range-slider__track",style:l({width:`${(o(a)-e.min)/(e.max-e.min)*100}%`,backgroundColor:e.color,borderRadius:`${e.radius}px`})},null,4),n("div",{class:"range-slider__thumb",onMouseenter:L,onMouseleave:V,style:l({left:`${(o(a)-e.min)/(e.max-e.min)*100}%`,border:`2px solid ${e.color}`,backgroundColor:e.thumbColor,borderRadius:`${e.thumbRadius}px`})},[o(s)||o(i)?(v(),g("div",{key:0,style:l({backgroundColor:e.color,color:e.thumbColor}),class:"range-slider__tooltip"},m(o(a)),5)):$("",!0)],36),n("div",{class:"range-slider__marks",style:l({color:e.marksColor})},[n("div",null,m(e.min),1),n("div",null,m((e.min-1+e.max)/2),1),n("div",null,m(e.max),1)],4)],36),C(e.$slots,"suffix",{},void 0,!0)])],64))}}),G=k(j,[["__scopeId","data-v-4015fa59"]]),J={};function K(b,u){const t=G;return v(),g("div",null,[f(t,{value:10},{title:p(()=>[O(" Title ")]),prefix:p(()=>[O(" prefix ")]),suffix:p(()=>[O(" suffix suffix suffix suffix suffix ")]),_:1})])}const Q=k(J,[["render",K],["__scopeId","data-v-a9b9923c"]]),U=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-range-slider
      :value="10"
    >
      <template #title>
        Title
      </template>
      <template #prefix>
        prefix
      </template>
      <template #suffix>
        suffix suffix suffix suffix suffix
      </template>
    </on-range-slider>
  </div>
</template>

<style scoped lang="scss">
.green-feedback {
  --feedback-color: #28cd28;
}
</style>
`,W={class:"markdown-body"},Y=n("h1",null,"OnRangeSlider",-1),Z=n("h2",null,"Примеры использования",-1),ee=n("h3",null,"Basic",-1),ne=n("h2",null,"API",-1),le="OnRangeSlider | OnFrontLib Docs",ue=[{property:"og:title",content:"OnRangeSlider | OnFrontLib Docs"},{name:"twitter:title",content:"OnRangeSlider | OnFrontLib Docs"}],ie={__name:"on-range-slider",setup(b,{expose:u}){return u({frontmatter:{title:"OnRangeSlider | OnFrontLib Docs",meta:[{property:"og:title",content:"OnRangeSlider | OnFrontLib Docs"},{name:"twitter:title",content:"OnRangeSlider | OnFrontLib Docs"}]}}),w({title:"OnRangeSlider | OnFrontLib Docs",meta:[{property:"og:title",content:"OnRangeSlider | OnFrontLib Docs"},{name:"twitter:title",content:"OnRangeSlider | OnFrontLib Docs"}]}),(a,_)=>(v(),g("div",W,[Y,Z,ee,f(D,{code:o(U)},{default:p(()=>[f(Q)]),_:1},8,["code"]),ne,f(S,{value:o(z)},null,8,["value"])]))}};export{ie as default,ue as meta,le as title};
