import{_ as U}from"./BI8L1cvd.js";import{E as B}from"./Cepu5Cdp.js";import{g as $,h as s,r as E,y as h,n as C,i as F,z as A,o as w,c as v,A as V,_ as R,b as u,w as T,u as q,a as _}from"./C296uaLE.js";import{u as N}from"./CNmpcN_a.js";const K="OnChatwoot",M="default",P="on-chatwoot",j="",G={},Q=[{name:"token",required:!0,type:{name:"string"}},{name:"identifier",required:!0,type:{name:"string"}},{name:"hash",required:!0,type:{name:"string"}},{name:"locale",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'ru'"}},{name:"hashId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"userId",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"email",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"balance",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"spent",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"income",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"incomeUsd",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"profileLink",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"customAttrs",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]},defaultValue:{func:!1,value:"undefined"}}],z="components/on-chatwoot/index.vue",H={name:K,exportName:M,displayName:P,description:j,tags:G,props:Q,sourceFile:z},J={id:"support-chatwoot",style:{display:"none"}},S="chatwoot-widget:",k="https://chatwoot.on-mail.ru",W=$({name:"OnChatwoot",__name:"index",props:{token:{},identifier:{},hash:{},locale:{default:"ru"},hashId:{default:null},userId:{default:null},name:{default:""},email:{default:""},balance:{default:0},spent:{default:0},income:{default:0},incomeUsd:{default:0},profileLink:{default:""},customAttrs:{default:void 0}},setup(c){const t=c,o=s(()=>t.locale==="ru"?"ru":"en"),i=s(()=>t.userId),n=s(()=>!!t.userId),d=V("chatwoot"),l=E(null),r=E(t.email);h(()=>t.email,e=>{r.value=e??""}),h(o,e=>{var a;(a=window.$chatwoot)==null||a.setLocale(e)});const y=s(()=>{const e=n.value?`${t.name}(${i.value})`:t.name??"";return{name:e,email:n.value?r.value:"",avatar_url:`https://ui-avatars.com/api/?name=${encodeURIComponent(e||"guest")}`,identifier_hash:t.hash}}),g=s(()=>({domain:window.location.host,accountId:n.value?i.value:"",balance:n.value?t.balance+"USD":"",spent:n.value?t.spent+"USD":"",income:n.value&&t.income!==void 0?t.income+"RUB":"",incomeUsd:n.value&&t.incomeUsd!==void 0?t.incomeUsd+"USD":"",hash_id:n.value?t.hashId:"",profile:n.value?t.profileLink:"",...t.customAttrs??{}}));h([i,g,y],([e],[a])=>{C(async()=>{var f;e!==a&&await((f=window==null?void 0:window.$chatwoot)==null?void 0:f.reset()),m()})},{deep:!0});const x=()=>{var e;(e=window.$chatwoot)==null||e.toggle("open"),window.chatwootLITESDK.run(!0)},b=e=>{var L;if(r.value!==t.email||!(typeof e.data=="string"&&e.data.indexOf(S)===0))return;const p=JSON.parse(e.data.replace(S,""));p.event==="error"&&p.errorType==="SET_USER_ERROR"&&((L=p.data)==null?void 0:L.message)==="Email has already been taken"&&(r.value=`${t.email}_`,m())},m=()=>{window.$chatwoot&&(window.$chatwoot.setLocale(o.value),window.$chatwoot.setUser(t.identifier,y.value),window.$chatwoot.setCustomAttributes(g.value),d.emit("loaded-support"))},D=()=>{const e=document.createElement("script"),a=document.getElementsByTagName("script")[0];e.src=`${k}/lite_sdk.js?v14`,e.defer=!0,e.async=!0,e.id="chatwoot-lite-sdk",a?a.parentNode.insertBefore(e,a):document.documentElement.firstChild.appendChild(e),e.onload=()=>{window.chatwootLITESDK.BASE_URL=k,window.chatwootLITESDK.websiteToken=t.token,window.chatwootLITESDK.locale=o.value,window.chatwootLITESDK.run()}},I=()=>{const e=o.value==="ru"?"Поддержка":"Support";window.chatwootSettings={hideMessageBubble:!1,showPopoutButton:!0,useBrowserLanguage:!1,position:"right",locale:o.value,type:"expanded_bubble",darkMode:"auto",launcherTitle:e}},O=()=>{C(()=>{m()})};return F(()=>{document.querySelector("#chatwoot-lite-sdk")||(I(),window.addEventListener("message",b),window.addEventListener("chatwoot:ready",O),D(),l.value=d.on(e=>{e==="openSupport"&&x()}))}),A(()=>{const e=document.querySelector("#chatwoot-lite-sdk");e==null||e.remove(),l.value&&(l.value(),l.value=null),window.removeEventListener("message",b),window.removeEventListener("chatwoot:ready",O)}),(e,a)=>(w(),v("div",J))}}),X={},Y={class:"demo"};function Z(c,t){const o=W;return w(),v("div",Y,[u(o,{identifier:"11111",token:"q1R15GaiyBUC8FuQNKLqkq9i",hash:"11111",locale:"ru","is-io":!1,"hash-id":"1111","user-id":1,"user-name":"username",name:"name",email:"name@mail.com",balance:0,spent:0,income:0})])}const ee=R(X,[["render",Z],["__scopeId","data-v-264ce688"]]),te=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <on-chatwoot
      identifier="11111"
      token="q1R15GaiyBUC8FuQNKLqkq9i"
      hash="11111"
      locale="ru"
      :is-io="false"
      hash-id="1111"
      :user-id="1"
      user-name="username"
      name="name"
      email="name@mail.com"
      :balance="0"
      :spent="0"
      :income="0"
    />
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,ne={class:"markdown-body"},ae=_("h1",null,"OnChatwoot",-1),oe=_("p",null,"Простой компонент для вывода чата поддержки",-1),se=_("h2",null,"API",-1),ce="OnChatwoot | OnFrontLib Docs",de=[{property:"og:title",content:"OnChatwoot | OnFrontLib Docs"},{name:"twitter:title",content:"OnChatwoot | OnFrontLib Docs"}],me={__name:"on-chatwoot",setup(c,{expose:t}){return t({frontmatter:{title:"OnChatwoot | OnFrontLib Docs",meta:[{property:"og:title",content:"OnChatwoot | OnFrontLib Docs"},{name:"twitter:title",content:"OnChatwoot | OnFrontLib Docs"}]}}),N({title:"OnChatwoot | OnFrontLib Docs",meta:[{property:"og:title",content:"OnChatwoot | OnFrontLib Docs"},{name:"twitter:title",content:"OnChatwoot | OnFrontLib Docs"}]}),(n,d)=>(w(),v("div",ne,[ae,oe,u(B,{code:q(te)},{default:T(()=>[u(ee)]),_:1},8,["code"]),se,u(U,{value:q(H)},null,8,["value"])]))}};export{me as default,de as meta,ce as title};
