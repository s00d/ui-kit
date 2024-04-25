import{_ as le}from"./BI8L1cvd.js";import{E as M}from"./Cepu5Cdp.js";import{_ as ne}from"./DcAZa88H.js";import{g as O,h as R,r as h,o as d,c as y,l as F,u as s,t as q,s as T,F as G,H as W,j as J,w as A,d as Q,a as b,_ as te,D as U,y as L,b as _,G as P,a2 as ae,n as z}from"./C296uaLE.js";import{_ as se}from"./DDo6wilQ.js";import{_ as oe}from"./CE8SZToR.js";import{u as ue}from"./CNmpcN_a.js";import"./CwnFFlTy.js";import"./Dt696U6n.js";const re="OnSelect",ce="default",ie="on-select",pe="",fe={},de=[{name:"modelValue",required:!1,type:{name:"OnSelectModelValue"},defaultValue:{func:!1,value:"undefined"}},{name:"searchValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"object"}]},defaultValue:{func:!1,value:"() => ([])"}},{name:"withSearch",required:!1,type:{name:"boolean"}},{name:"labelKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"valueKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'value'"}},{name:"multiple",required:!1,type:{name:"boolean"}}],ve=[{name:"update:searchValue",type:{names:["string"]}},{name:"update:modelValue",type:{names:["OnSelectModelValue"]}}],me="components/on-select/index.vue",he={name:re,exportName:ce,displayName:ie,description:pe,tags:fe,props:de,events:ve,sourceFile:me},_e={key:0,class:"search"},ye=["value"],be={class:"input-mirror"},we={key:2,class:"search"},ge=["value"],Ve=O({__name:"selector-inner",props:{allowSearch:{type:Boolean},focused:{type:Boolean},multiple:{type:Boolean},searchValue:{},value:{},labelKey:{},valueKey:{},options:{},open:{type:Boolean}},emits:["update:searchValue"],setup(k,{expose:f,emit:n}){const t=k,u=n,c=l=>{u("update:searchValue",l.target.value)},K=R(()=>{if(t.multiple)return null;const l=t.options.find(v=>v[t.valueKey]===t.value);return(l==null?void 0:l[t.labelKey])??""});R(()=>!t.multiple||!Array.isArray(t.value)?null:t.value.map(l=>{const v=t.options.find(V=>V[t.valueKey]===l);return v==null?void 0:v[t.labelKey]}).filter(l=>l!==void 0).join(", "));const $=h(),C=()=>{var l;(l=$.value)==null||l.focus()},g=R(()=>({"--single":!t.multiple,"--multi":t.multiple,"--focused":t.focused,"--open":t.open})),i=R(()=>{var l;return t.allowSearch&&(((l=t.searchValue)==null?void 0:l.length)||0)>0}),S=R(()=>t.multiple?Array.isArray(t.value)?t.value.map(l=>{const v=t.options.find(V=>V[t.valueKey]===l);return{key:l,label:(v==null?void 0:v[t.labelKey])??l}}):[]:[]);function r(l){console.log(l)}const B=h();return f({elRef:B,searchRef:$}),(l,v)=>(d(),y("div",{ref_key:"elRef",ref:B,class:F(["selector",s(g)]),tabindex:"0",onFocus:C,onKeydown:r},[l.multiple?T("",!0):(d(),y("span",{key:0,class:F(["value",{"--hidden":s(i)}])},q(s(K)),3)),l.multiple?(d(),y("span",{key:1,class:F(["values",{"--hidden":s(i)}])},[(d(!0),y(G,null,W(s(S),V=>(d(),J(se,{key:V.key,closeable:""},{default:A(()=>[Q(q(V.label),1)]),_:2},1024))),128)),l.allowSearch&&l.multiple?(d(),y("span",_e,[b("input",{ref_key:"searchRef",ref:$,value:l.searchValue,onInput:c},null,40,ye),b("span",be,q(l.searchValue||" "),1)])):T("",!0)],2)):T("",!0),l.allowSearch&&!l.multiple?(d(),y("span",we,[b("input",{ref_key:"searchRef",ref:$,value:l.searchValue,onInput:c},null,40,ge)])):T("",!0)],34))}}),Se=te(Ve,[["__scopeId","data-v-9a943269"]]),N=O({name:"OnSelect",__name:"index",props:{modelValue:{default:void 0},searchValue:{default:void 0},options:{default:()=>[]},withSearch:{type:Boolean},labelKey:{default:"label"},valueKey:{default:"value"},multiple:{type:Boolean}},emits:["update:searchValue","update:modelValue"],setup(k,{emit:f}){const n=k,t=f,u=U(n,"searchValue",t,{passive:!0}),c=U(n,"modelValue",t,{passive:!0}),K=h(),$=h(),C=h(!1),g=h(),i=h(-1),S=h(!1),r=h(!1),B=e=>{console.log("focus"),C.value=!0,r.value=!0},l=e=>{var w,m,x;const a=s((w=K.value)==null?void 0:w.elRef),p=s((m=$.value)==null?void 0:m.contentRef),o=e.relatedTarget;o===p||o===a||p!=null&&p.contains(o)||a!=null&&a.contains(o)||((x=e.target)==null||x.blur(),u.value="",r.value=!1,C.value=!1)},v=R(()=>({"--focused":C.value})),V=e=>n.multiple?Array.isArray(c.value)&&c.value.includes(e):c.value===e,X=e=>{S.value=!1,i.value=I.value.findIndex(a=>a[n.valueKey]===e),j(e)},j=e=>{var p,o,w;const a=V(e);if(n.multiple)a?c.value=Array.isArray(c.value)?c.value.filter(m=>m!==e):[]:Array.isArray(c.value)?c.value.push(e):c.value=[e];else{const m=s((p=K.value)==null?void 0:p.elRef);u.value="",m==null||m.focus(),c.value=e,r.value=!1}n.multiple&&n.withSearch&&(u.value="",(w=(o=K.value)==null?void 0:o.searchRef)==null||w.focus())},Y=()=>{var p;console.log("selector click");const e=r.value,a=s((p=K.value)==null?void 0:p.elRef);a==null||a.focus(),e===r.value&&(r.value=!r.value)},I=R(()=>!n.withSearch||!u.value?n.options:n.options.filter(e=>(e[n.labelKey]||"").toString().toLowerCase().includes(u.value.toLowerCase())));L(I,()=>{i.value=-1}),L(r,e=>{e||(i.value=-1)});function H(e){if(e.key!=="Escape"&&(r.value=!0),e.key==="ArrowDown"){e.preventDefault();const a=i.value===I.value.length-1?0:i.value+1;S.value=!0,z(()=>{E(a)})}else if(e.key==="ArrowUp"){e.preventDefault();const a=i.value===0?I.value.length-1:i.value-1;S.value=!0,z(()=>{E(a)})}else if(e.key==="Enter"){if(e.preventDefault(),!S.value)return;if(i.value!==-1&&i.value<=I.value.length-1){const a=I.value[i.value][n.valueKey];j(a)}}else e.key==="Escape"&&(e.preventDefault(),r.value=!1)}function E(e){var a,p,o,w,m,x;if(i.value=e,e!==-1){const D=(a=g.value)==null?void 0:a.querySelector(`.on-list-item:nth-child(${e+1})`);if(!D)return;const Z=D.offsetTop+D.offsetHeight>(((p=g.value)==null?void 0:p.clientHeight)||0)+(((o=g.value)==null?void 0:o.scrollTop)||0),ee=D.offsetTop<(((w=g.value)==null?void 0:w.scrollTop)||0);(Z||ee)&&((x=g.value)==null||x.scrollTo({top:D.offsetTop*2-((m=g.value)==null?void 0:m.clientHeight),left:0}))}else S.value=!1}return(e,a)=>{const p=ne;return d(),y("div",{class:F(["on-select",s(v)])},[_(p,{ref_key:"popperRef",ref:$,active:s(r),"onUpdate:active":a[1]||(a[1]=o=>P(r)?r.value=o:null),"popper-class":"on-select-popper","transition-name":"on-select",interactive:"",placement:"bottom-start","transition-props":{duration:200},arrow:!1,offset:4,"full-width":"","tab-index":-1,onFocusout:l,onFocusin:B,onKeydown:H},{content:A(()=>[b("div",{ref_key:"scrollerRef",ref:g,class:"on-select-scroller"},[(d(!0),y(G,null,W(s(I),(o,w)=>(d(),J(oe,{key:o[e.valueKey],tag:"div",class:F({"--selected":V(o[e.valueKey]),"--active":s(S)&&s(i)===w}),onClick:m=>X(o[e.valueKey])},{default:A(()=>[Q(q(o[e.labelKey]),1)]),_:2},1032,["class","onClick"]))),128))],512)]),default:A(()=>[_(Se,{ref_key:"selectorRef",ref:K,"search-value":s(u),"onUpdate:searchValue":a[0]||(a[0]=o=>P(u)?u.value=o:null),"allow-search":e.withSearch,value:s(c),multiple:e.multiple,focused:s(C),"label-key":e.labelKey,"value-key":e.valueKey,options:e.options,open:s(r),onFocusin:B,onFocusout:l,onMousedown:ae(Y,["prevent"]),onKeydown:H},null,8,["search-value","allow-search","value","multiple","focused","label-key","value-key","options","open"])]),_:1},8,["active"])],2)}}}),ke=O({__name:"basic",setup(k){const f=h([]);for(let n=1;n<=15;n++)f.value.push({label:`Item ${n}`,value:n});return(n,t)=>{const u=N;return d(),y("div",null,[_(u,{options:s(f)},null,8,["options"])])}}}),Ke=`<script setup lang="ts">
const options = ref<object[]>([]);

for (let i = 1; i <= 15; i++) {
  options.value.push({
    label: \`Item \${i}\`,
    value: i,
  });
}
<\/script>

<template>
  <div>
    <on-select
      :options="options"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,$e=O({__name:"search",setup(k){const f=h([]);for(let n=1;n<=15;n++)f.value.push({label:`Item ${n}`,value:n});return(n,t)=>{const u=N;return d(),y("div",null,[_(u,{"with-search":"",options:s(f)},null,8,["options"])])}}}),Ie=`<script setup lang="ts">
const options = ref<object[]>([]);

for (let i = 1; i <= 15; i++) {
  options.value.push({
    label: \`Item \${i}\`,
    value: i,
  });
}
<\/script>

<template>
  <div>
    <on-select
      with-search
      :options="options"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,Re=O({__name:"multiple",setup(k){const f=h([]);for(let n=1;n<=15;n++)f.value.push({label:`Item ${n}`,value:n});return(n,t)=>{const u=N;return d(),y("div",null,[_(u,{"with-search":"",multiple:"",options:s(f)},null,8,["options"])])}}}),Ae=`<script setup lang="ts">
const options = ref<object[]>([]);

for (let i = 1; i <= 15; i++) {
  options.value.push({
    label: \`Item \${i}\`,
    value: i,
  });
}
<\/script>

<template>
  <div>
    <on-select
      with-search
      multiple
      :options="options"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,Ce={class:"markdown-body"},Be=b("h1",null,"OnSelect",-1),xe=b("p",null,"Простой компонент для вывода on-select",-1),De=b("h2",null,"Примеры использования",-1),Fe=b("h3",null,"Basic",-1),Oe=b("h3",null,"With search",-1),Te=b("h3",null,"Multiple",-1),qe=b("h2",null,"API",-1),Ge=[],We={__name:"on-select",setup(k,{expose:f}){return f({frontmatter:{meta:[]}}),ue({meta:[]}),(u,c)=>(d(),y("div",Ce,[Be,xe,De,Fe,_(M,{code:s(Ke)},{default:A(()=>[_(ke)]),_:1},8,["code"]),Oe,_(M,{code:s(Ie)},{default:A(()=>[_($e)]),_:1},8,["code"]),Te,_(M,{code:s(Ae)},{default:A(()=>[_(Re)]),_:1},8,["code"]),qe,_(le,{value:s(he)},null,8,["value"])]))}};export{We as default,Ge as meta};
