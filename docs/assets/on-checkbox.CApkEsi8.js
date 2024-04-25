import{_ as C}from"./ApiDoc.vue.BBsrfSvH.js";import{E as b}from"./index.CqeEYO5W.js";import{g as k,r as x,o as m,c as p,a as o,b as e,u as t,O as f,d as u,t as v,F as y,V as _,h as O,p as S,f as N,_ as V,E as F,D as q,a0 as $,S as D,q as E,w as r,M as L}from"./entry._doioHTx.js";import{u as B}from"./vue.f36acd1f.BVcziSBg.js";const J="OnCheckbox",w="default",z="on-checkbox",A="",G={},P=[{name:"checked",description:`Отмечен ли чекбокс.
 Может использоваться в v-model:checked`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",description:"Неопределенное состояние.",required:!1,type:{name:"boolean"}},{name:"value",description:"Значение, которое будет установлено при отмеченном чекбоксе (только при использовании внутри OnCheckboxGroup)",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"true"}},{name:"name",description:"Значение атрибута name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"label",description:"Надпись рядом с чекбоксом (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelPosition",description:"Отображать надпись (label) перед чекбоксом (before) или после чекбокса (after)",required:!1,type:{name:"union",elements:[{name:'"before"'},{name:'"after"'}]},defaultValue:{func:!1,value:"'after'"}},{name:"size",description:"Размер чекбокса. Высота 22px для размера `md`, и 16px для размера `sm`",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",description:"Отключает чекбокс",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:'Режим "только просмотр"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"status",description:"Статус валидации",required:!1,type:{name:"union",elements:[{name:'"error"'},{name:'"warning"'},{name:'"success"'},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],R=[{name:"update:checked"}],M=[{name:"default"},{name:"check"}],U="components/on-checkbox/index.vue",W={name:J,exportName:w,displayName:z,description:A,tags:G,props:P,events:R,slots:M,sourceFile:U},H="OnCheckboxGroup",T="default",j="group",K="",Q={},X=[{name:"modelValue",description:"Текущее значение. Используется в `v-model`.",required:!1,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",description:"Отключает все чекбоксы",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",description:"Имя, которое будет установлено каждому чекбоксу",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],Y=[{name:"update:modelValue"}],Z=[{name:"default"}],ee="components/on-checkbox/group.vue",ne={name:H,exportName:T,displayName:j,description:K,tags:Q,props:X,events:Y,slots:Z,sourceFile:ee},le=o("strong",null,"Value: ",-1),oe=k({__name:"basic",setup(a){const n=x(!0);return(l,c)=>{const s=_;return m(),p(y,null,[o("div",null,[e(s,{checked:t(n),"onUpdate:checked":c[0]||(c[0]=d=>f(n)?n.value=d:null),label:"Label"},null,8,["checked"])]),o("div",null,[le,u(" "+v(JSON.stringify(t(n))),1)])],64)}}}),te=`<script setup lang="ts">
const model = ref(true);
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="model"
      label="Label"
    />
  </div>
  <div>
    <strong>Value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">

</style>
`;function ae(a,n,l){return O({get(){return a.value===t(n)},set(c){a.value=c?t(n):t(l)}})}const se=o("strong",null,"Bool value: ",-1),ce=o("strong",null,"Model value: ",-1),de=k({__name:"bool-proxy",setup(a){const n=x("off"),l=ae(n,"on","off");return(c,s)=>{const d=_;return m(),p(y,null,[o("div",null,[e(d,{checked:t(l),"onUpdate:checked":s[0]||(s[0]=i=>f(l)?l.value=i:null),label:"Label"},null,8,["checked"])]),o("div",null,[se,u(" "+v(JSON.stringify(t(l))),1)]),o("div",null,[ce,u(" "+v(JSON.stringify(t(n))),1)])],64)}}}),ie=`<script setup lang="ts">
const model = ref('off');
const boolValue = useBoolProxy(model, 'on', 'off');
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="boolValue"
      label="Label"
    />
  </div>
  <div>
    <strong>Bool value: </strong> {{ JSON.stringify(boolValue) }}
  </div>
  <div>
    <strong>Model value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">

</style>
`,I=a=>(S("data-v-94104ec4"),a=a(),N(),a),ue={class:"values"},re=I(()=>o("strong",null,"isAllChecked: ",-1)),me=I(()=>o("strong",null,"isIndeterminate: ",-1)),pe=k({__name:"indeterminate",setup(a){const n=x(!0),l=x(!1),c=O(()=>n.value!==l.value),s=O({get(){return n.value&&l.value},set(d){n.value=d,l.value=d}});return(d,i)=>{const g=_;return m(),p(y,null,[o("div",null,[e(g,{checked:t(s),"onUpdate:checked":i[0]||(i[0]=h=>f(s)?s.value=h:null),indeterminate:t(c),label:"Label"},null,8,["checked","indeterminate"])]),o("div",ue,[e(g,{checked:t(n),"onUpdate:checked":i[1]||(i[1]=h=>f(n)?n.value=h:null),label:"Value 1"},null,8,["checked"]),e(g,{checked:t(l),"onUpdate:checked":i[2]||(i[2]=h=>f(l)?l.value=h:null),label:"Value 2"},null,8,["checked"])]),o("div",null,[re,u(" "+v(JSON.stringify(t(s))),1)]),o("div",null,[me,u(" "+v(JSON.stringify(t(c))),1)])],64)}}}),be=V(pe,[["__scopeId","data-v-94104ec4"]]),fe=`<script setup lang="ts">
const val1 = ref(true);
const val2 = ref(false);

const isIndeterminate = computed(() => val1.value !== val2.value);

const isAllChecked = computed({
  get () { return val1.value && val2.value; },
  set (val: boolean) {
    val1.value = val;
    val2.value = val;
  },
});
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="isAllChecked"
      :indeterminate="isIndeterminate"
      label="Label"
    />
  </div>
  <div class="values">
    <on-checkbox
      v-model:checked="val1"
      label="Value 1"
    />
    <on-checkbox
      v-model:checked="val2"
      label="Value 2"
    />
  </div>
  <div>
    <strong>isAllChecked: </strong> {{ JSON.stringify(isAllChecked) }}
  </div>
  <div>
    <strong>isIndeterminate: </strong> {{ JSON.stringify(isIndeterminate) }}
  </div>
</template>

<style scoped lang="scss">
.values {
  padding: 8px 0;
  display: flex;
  gap: 16px;
}
</style>
`,ve={},_e={class:"items"};function he(a,n){const l=_;return m(),p("div",_e,[e(l,{disabled:"",label:"Label"}),e(l,{checked:"",disabled:"",label:"Label"}),e(l,{indeterminate:"",disabled:"",label:"Label"})])}const xe=V(ve,[["render",he],["__scopeId","data-v-7526f748"]]),ke=`<template>
  <div class="items">
    <on-checkbox
      disabled
      label="Label"
    />
    <on-checkbox
      checked
      disabled
      label="Label"
    />
    <on-checkbox
      indeterminate
      disabled
      label="Label"
    />
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
</style>
`,ge=k({name:"OnCheckboxGroup",__name:"group",props:{modelValue:{default:()=>[]},disabled:{type:Boolean,default:!1},name:{default:void 0}},emits:["update:modelValue"],setup(a,{emit:n}){const l=a,s=F(l,"modelValue",n,{passive:!0}),d=q({data:s,name:$(l,"name"),disabled:$(l,"disabled")});return D("on-checkbox-group",d),(i,g)=>E(i.$slots,"default")}}),ye=a=>(S("data-v-8aa971c1"),a=a(),N(),a),Ve={class:"items"},Oe=ye(()=>o("strong",null,"Value: ",-1)),Ce=k({__name:"group",setup(a){const n=x([1,2,4]);return(l,c)=>{const s=_,d=ge;return m(),p(y,null,[o("div",Ve,[e(d,{modelValue:t(n),"onUpdate:modelValue":c[0]||(c[0]=i=>f(n)?n.value=i:null),name:"cb-group"},{default:r(()=>[e(s,{value:1,label:"Value: 1"}),e(s,{value:2,label:"Value: 2"}),e(s,{value:3,label:"Value: 3"}),e(s,{value:4,label:"Value: 4"}),e(s,{value:1,label:"Value: 1 (duplicate)"})]),_:1},8,["modelValue"])]),o("div",null,[Oe,u(" "+v(JSON.stringify(t(n))),1)])],64)}}}),$e=V(Ce,[["__scopeId","data-v-8aa971c1"]]),Se=`<script setup lang="ts">
const model = ref([1, 2, 4]);
<\/script>

<template>
  <div class="items">
    <on-checkbox-group
      v-model="model"
      name="cb-group"
    >
      <on-checkbox
        :value="1"
        label="Value: 1"
      />
      <on-checkbox
        :value="2"
        label="Value: 2"
      />
      <on-checkbox
        :value="3"
        label="Value: 3"
      />
      <on-checkbox
        :value="4"
        label="Value: 4"
      />
      <on-checkbox
        :value="1"
        label="Value: 1 (duplicate)"
      />
    </on-checkbox-group>
  </div>
  <div>
    <strong>Value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
`,Ne={},Le={class:"items"};function Ie(a,n){const l=_;return m(),p("div",Le,[e(l,{size:"sm",label:"Small (sm)"}),e(l,{size:"md",label:"Medium (md)"}),e(l,{size:"lg",label:"Large (lg)"})])}const Fe=V(Ne,[["render",Ie],["__scopeId","data-v-1caf3c61"]]),qe=`<script setup lang="ts">
<\/script>

<template>
  <div class="items">
    <on-checkbox
      size="sm"
      label="Small (sm)"
    />
    <on-checkbox
      size="md"
      label="Medium (md)"
    />
    <on-checkbox
      size="lg"
      label="Large (lg)"
    />
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
</style>
`,De={class:"markdown-body"},Ee=L("<h1>OnCheckbox</h1><h2>Примеры использования</h2><h3>Basic</h3><p>Компонент принимает на вход <strong>булево</strong> значение в параметре <code>checked</code>. При изменении значения генерирует событие <code>update:checked</code>, что позволяет использовать сокращенный синтаксис <code>v-model:checked</code>.</p><p>Использование <code>v-model</code> без аргумента <code>checked</code> ошибочно и вызовет предупреждение в консоли.</p>",5),Be=L("<p>При необходимости использования значений типа <code>string | number | null</code> вместо <code>boolean</code>, можно воспользоваться функцией <code>useBoolProxy(value, trueVal, falseVal)</code>.</p><p>Эта функция возвращает <code>WritableComputedRef&lt;boolean&gt;</code>, который можно использовать в качестве значения параметра <code>checked</code>.<br><code>trueVal</code> и <code>falseVal</code> могут быть примитивами, <code>Ref</code> или <code>ComputedRef</code>.<br><code>value</code> может иметь тип <code>Ref</code> или <code>WritableComputedRef</code>.</p>",2),Je=o("h3",null,"Indeterminate",-1),we=o("p",null,"Неопределенное состояние.",-1),ze=o("h3",null,"Disabled",-1),Ae=o("h3",null,"Group",-1),Ge=o("p",null,[u("Используйте компонент "),o("code",null,"OnCheckboxGroup"),u(" в тех случаях, когда необходимо отобразить большое количество чекбоксов и собрать отмеченные значения в массив.")],-1),Pe=o("h3",null,"Sizes",-1),Re=o("h2",null,[o("code",null,"OnCheckbox"),u(" API")],-1),Me=o("h2",null,[o("code",null,"OnCheckboxGroup"),u(" API")],-1),je="OnCheckbox | OnFrontLib Docs",Ke=[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}],Qe={__name:"on-checkbox",setup(a,{expose:n}){return n({frontmatter:{title:"OnCheckbox | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}]}}),B({title:"OnCheckbox | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}]}),(s,d)=>(m(),p("div",De,[Ee,e(b,{code:t(te)},{default:r(()=>[e(oe)]),_:1},8,["code"]),Be,e(b,{code:t(ie)},{default:r(()=>[e(de)]),_:1},8,["code"]),Je,we,e(b,{code:t(fe)},{default:r(()=>[e(be)]),_:1},8,["code"]),ze,e(b,{code:t(ke)},{default:r(()=>[e(xe)]),_:1},8,["code"]),Ae,Ge,e(b,{code:t(Se)},{default:r(()=>[e($e)]),_:1},8,["code"]),Pe,e(b,{code:t(qe)},{default:r(()=>[e(Fe)]),_:1},8,["code"]),Re,e(C,{value:t(W)},null,8,["value"]),Me,e(C,{value:t(ne)},null,8,["value"])]))}};export{Qe as default,Ke as meta,je as title};
