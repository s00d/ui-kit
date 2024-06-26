import{_ as E}from"./BI8L1cvd.js";import{E as L}from"./Cepu5Cdp.js";import{g as y,r as g,D as N,aj as U,Q as P,h as V,i as A,av as J,o as p,c as b,q as z,b as e,s as j,a as l,aq as M,u as d,l as F,I as W,p as I,f as S,_,F as $,J as H,a9 as R,S as Q,w as m,G as v,d as x,t as T,P as K}from"./C296uaLE.js";import{u as X}from"./CNmpcN_a.js";const Y="OnRadio",Z="default",ee="on-radio",ne="",ae={},le=[{name:"checked",description:`Отмечена ли радио-кнопка.
 Может использоваться в v-model:checked`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",description:"Значение, которое будет установлено при отмеченной радио-кнопке (только при использовании внутри OnRadioGroup)",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"name",description:"Значение атрибута name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"label",description:"Надпись рядом с радио-кнопкой (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelPosition",description:"Отображать надпись (label) перед радио-кнопкой (before) или после нее (after)",required:!1,type:{name:"union",elements:[{name:'"before"'},{name:'"after"'}]},defaultValue:{func:!1,value:"'after'"}},{name:"disabled",description:"Отключает радио-кнопку",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:'Режим "только просмотр"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],oe=[{name:"update:checked"}],te=[{name:"default"},{name:"check"}],se="components/on-radio/index.vue",de={name:Y,exportName:Z,displayName:ee,description:ne,tags:ae,props:le,events:oe,slots:te,sourceFile:se},ie="OnRadioGroup",ue="default",ce="group",re="",me={},pe=[{name:"modelValue",description:"Текущее значение. Используется в `v-model`.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Отключает все радио-кнопки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",description:"Имя, которое будет установлено каждой радио-кнопке",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",description:"Стиль отображения",required:!1,type:{name:"union",elements:[{name:'"radio"'},{name:'"button"'},{name:'"button-solid"'}]},defaultValue:{func:!1,value:"'radio'"}},{name:"size",description:"Размер кнопок (при type != radio).",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],be=[{name:"update:modelValue"}],ve=[{name:"default"}],_e="components/on-radio/group.vue",fe={name:ie,exportName:ue,displayName:ce,description:re,tags:me,props:pe,events:be,slots:ve,sourceFile:_e},Le=u=>(I("data-v-9afd2d88"),u=u(),S(),u),ge={key:0,class:"label"},ye={class:"box"},he=["name","value","checked","disabled"],Ve={class:"inner"},$e=Le(()=>l("i",{class:"check"},null,-1)),xe=y({name:"OnRadio",__name:"index",props:{checked:{type:Boolean,default:!1},value:{default:void 0},name:{default:void 0},label:{default:void 0},labelPosition:{default:"after"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},emits:["update:checked"],setup(u,{emit:a}){const o=u,s=a,n=g(),c=N(o,"checked",s,{passive:!0}),{focused:i}=U(n),t=P("on-radio-group",null),f=V(()=>o.disabled||(t==null?void 0:t.disabled)),D=V(()=>o.name||(t==null?void 0:t.name)),O=V({get(){return t?t.data===o.value:c.value},set(r){t?r&&(t.data=o.value):c.value=r}}),q=V(()=>({"on-radio":!0,[`--label-${o.labelPosition}`]:!0,[`--size-${t==null?void 0:t.size}`]:!!(t!=null&&t.size)&&t.type!=="radio","--focused":i.value&&!f.value,"--disabled":f.value,"--readonly":o.readonly,"--checked":O.value,"--button":(t==null?void 0:t.type)==="button"||(t==null?void 0:t.type)==="button-solid","--solid":(t==null?void 0:t.type)==="button-solid"})),B=g();function C(){var r;O.value||f.value||o.readonly||(r=B.value)==null||r.animate()}const G=r=>{f.value||(O.value=r.target.checked)};return A(()=>{J().modelValue!==void 0&&console.warn("[on-radio]: v-model detected. Use v-model:checked instead v-model.")}),(r,Vn)=>{const w=W;return p(),b("label",{class:F(d(q)),onClick:C},[r.$slots.default||r.label?(p(),b("span",ge,[z(r.$slots,"default",{},()=>[e(w,{path:r.label},null,8,["path"])],!0)])):j("",!0),l("span",ye,[e(M,{ref_key:"wave",ref:B},null,512),l("input",{ref_key:"inputEl",ref:n,type:"radio",name:d(D),value:o.value,checked:d(O),disabled:d(f),onChange:G},null,40,he),l("span",Ve,[z(r.$slots,"check",{},()=>[$e],!0)])])],2)}}}),h=_(xe,[["__scopeId","data-v-9afd2d88"]]),Oe={},Re={class:"demo"};function ke(u,a){const o=h;return p(),b("div",Re,[e(o,{label:"Label",checked:""}),e(o,{label:"Label"})])}const ze=_(Oe,[["render",ke],["__scopeId","data-v-47012910"]]),Be=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <on-radio
      label="Label"
      checked
    />
    <on-radio label="Label" />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  gap: 16px;
}
</style>
`,Ee={},Ne={class:"demo"},Fe={class:"demo"};function Ie(u,a){const o=h;return p(),b($,null,[l("div",Ne,[e(o,{label:"Label",checked:""}),e(o,{label:"Label"})]),l("div",Fe,[e(o,{label:"Label",checked:"",disabled:""}),e(o,{label:"Label",disabled:""})])],64)}const Se=_(Ee,[["render",Ie],["__scopeId","data-v-f14cdcbf"]]),De=`<template>
  <div class="demo">
    <on-radio
      label="Label"
      checked
    />
    <on-radio label="Label" />
  </div>
  <div class="demo">
    <on-radio
      label="Label"
      checked
      disabled
    />
    <on-radio
      label="Label"
      disabled
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
`,qe=y({name:"OnRadioGroup",__name:"group",props:{modelValue:{type:[String,Number,Boolean,null],default:null},disabled:{type:Boolean,default:!1},name:{default:void 0},type:{default:"radio"},size:{default:"md"}},emits:["update:modelValue"],setup(u,{emit:a}){const o=u,n=N(o,"modelValue",a,{passive:!0}),c=H({data:n,name:R(o,"name"),disabled:R(o,"disabled"),type:R(o,"type"),size:R(o,"size")});Q("on-radio-group",c);const i=V(()=>({"on-radio-group":!0,"--button":o.type!=="radio","--radio":o.type==="radio"}));return(t,f)=>(p(),b("div",{class:F(d(i))},[z(t.$slots,"default",{},void 0,!0)],2))}}),k=_(qe,[["__scopeId","data-v-619729bc"]]),Ce=u=>(I("data-v-5af3b162"),u=u(),S(),u),Ge={class:"demo"},we={class:"value"},Ue=Ce(()=>l("strong",null,"Value:",-1)),Pe=y({__name:"group",setup(u){const a=g(1);return(o,s)=>{const n=h,c=k;return p(),b($,null,[l("div",Ge,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[0]||(s[0]=i=>v(a)?a.value=i:null),name:"rg1"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3})]),_:1},8,["modelValue"])]),l("div",we,[Ue,x(" "+T(JSON.stringify(d(a))),1)])],64)}}}),Ae=_(Pe,[["__scopeId","data-v-5af3b162"]]),Je=`<script setup lang="ts">
const value = ref(1);
<\/script>

<template>
  <div class="demo">
    <on-radio-group
      v-model="value"
      name="rg1"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
    </on-radio-group>
  </div>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(value) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,je={class:"demo"},Me={class:"demo"},We=y({__name:"button",setup(u){const a=g(1);return(o,s)=>{const n=h,c=k;return p(),b($,null,[l("div",je,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[0]||(s[0]=i=>v(a)?a.value=i:null),name:"rg2",type:"button"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3,disabled:""}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])]),l("div",Me,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[1]||(s[1]=i=>v(a)?a.value=i:null),name:"rg3",type:"button",disabled:""},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])])],64)}}}),He=_(We,[["__scopeId","data-v-8d3b8156"]]),Qe=`<script setup lang="ts">
const value1 = ref(1);
<\/script>

<template>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg2"
      type="button"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
        disabled
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg3"
      type="button"
      disabled
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
</template>

<style scoped lang="scss">
.demo:first-child {
  margin-bottom: 16px;
}
</style>
`,Te={class:"demo"},Ke={class:"demo"},Xe=y({__name:"button-solid",setup(u){const a=g(1);return(o,s)=>{const n=h,c=k;return p(),b($,null,[l("div",Te,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[0]||(s[0]=i=>v(a)?a.value=i:null),name:"rg4",type:"button-solid"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3,disabled:""}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])]),l("div",Ke,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[1]||(s[1]=i=>v(a)?a.value=i:null),name:"rg5",type:"button-solid",disabled:""},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])])],64)}}}),Ye=_(Xe,[["__scopeId","data-v-e01475e1"]]),Ze=`<script setup lang="ts">
const value1 = ref(1);
<\/script>

<template>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg4"
      type="button-solid"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
        disabled
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg5"
      type="button-solid"
      disabled
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
</template>

<style scoped lang="scss">
.demo:first-child {
  margin-bottom: 16px;
}
</style>
`,en={class:"demo"},nn={class:"demo"},an={class:"demo"},ln=y({__name:"sizes",setup(u){const a=g(1);return(o,s)=>{const n=h,c=k;return p(),b($,null,[l("div",en,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[0]||(s[0]=i=>v(a)?a.value=i:null),name:"rg-size-1",type:"button",size:"sm"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])]),l("div",nn,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[1]||(s[1]=i=>v(a)?a.value=i:null),name:"rg-size-2",type:"button",size:"md"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])]),l("div",an,[e(c,{modelValue:d(a),"onUpdate:modelValue":s[2]||(s[2]=i=>v(a)?a.value=i:null),name:"rg-size-3",type:"button",size:"lg"},{default:m(()=>[e(n,{label:"Label (1)",value:1}),e(n,{label:"Label (2)",value:2}),e(n,{label:"Label (3)",value:3}),e(n,{label:"Label (4)",value:4})]),_:1},8,["modelValue"])])],64)}}}),on=_(ln,[["__scopeId","data-v-8cae44cc"]]),tn=`<script setup lang="ts">
const value1 = ref(1);
<\/script>

<template>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg-size-1"
      type="button"
      size="sm"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg-size-2"
      type="button"
      size="md"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
  <div class="demo">
    <on-radio-group
      v-model="value1"
      name="rg-size-3"
      type="button"
      size="lg"
    >
      <on-radio
        label="Label (1)"
        :value="1"
      />
      <on-radio
        label="Label (2)"
        :value="2"
      />
      <on-radio
        label="Label (3)"
        :value="3"
      />
      <on-radio
        label="Label (4)"
        :value="4"
      />
    </on-radio-group>
  </div>
</template>

<style scoped lang="scss">
.demo {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
`,sn={class:"markdown-body"},dn=l("h1",null,"OnRadio",-1),un=l("h2",null,"Примеры использования",-1),cn=l("h3",null,"Basic",-1),rn=l("p",null,"Простейший пример, демонстрирует лишь внешний вид. Переключение первой радио-кнопки не работает.",-1),mn=l("h3",null,"Disabled",-1),pn=l("p",null,"Отключенное состояние.",-1),bn=l("h3",null,"Group",-1),vn=l("p",null,[x("Рекомендуемый способ использования – помещение радио-кнопок в группу "),l("code",null,"OnRadioGroup")],-1),_n=l("h3",null,"Button",-1),fn=l("p",null,[x("Стиль кнопок. Доступен только при использовании "),l("code",null,"OnRadioGroup")],-1),Ln=l("h3",null,"Button solid",-1),gn=K("<h3>Sizes</h3><p>Доступно три размера: <code>sm</code> (24px), <code>md</code> (32px) и <code>lg</code> (40px).</p><p>Размеры применяются только при использовании группы <code>OnRadioGroup</code> со стилем <code>button</code> или <code>button-solid</code>.</p>",3),yn=l("h2",null,[l("code",null,"OnRadio"),x(" API")],-1),hn=l("h2",null,[l("code",null,"OnRadioGroup"),x(" API")],-1),kn="OnRadio | OnFrontLib Docs",zn=[{property:"og:title",content:"OnRadio | OnFrontLib Docs"},{name:"twitter:title",content:"OnRadio | OnFrontLib Docs"}],Bn={__name:"on-radio",setup(u,{expose:a}){return a({frontmatter:{title:"OnRadio | OnFrontLib Docs",meta:[{property:"og:title",content:"OnRadio | OnFrontLib Docs"},{name:"twitter:title",content:"OnRadio | OnFrontLib Docs"}]}}),X({title:"OnRadio | OnFrontLib Docs",meta:[{property:"og:title",content:"OnRadio | OnFrontLib Docs"},{name:"twitter:title",content:"OnRadio | OnFrontLib Docs"}]}),(n,c)=>(p(),b("div",sn,[dn,un,cn,rn,e(L,{code:d(Be)},{default:m(()=>[e(ze)]),_:1},8,["code"]),mn,pn,e(L,{code:d(De)},{default:m(()=>[e(Se)]),_:1},8,["code"]),bn,vn,e(L,{code:d(Je)},{default:m(()=>[e(Ae)]),_:1},8,["code"]),_n,fn,e(L,{code:d(Qe)},{default:m(()=>[e(He)]),_:1},8,["code"]),Ln,e(L,{code:d(Ze)},{default:m(()=>[e(Ye)]),_:1},8,["code"]),gn,e(L,{code:d(tn)},{default:m(()=>[e(on)]),_:1},8,["code"]),yn,e(E,{value:d(de)},null,8,["value"]),hn,e(E,{value:d(fe)},null,8,["value"])]))}};export{Bn as default,zn as meta,kn as title};
