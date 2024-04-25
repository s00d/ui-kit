import{_ as B}from"./BI8L1cvd.js";import{E as v}from"./Cepu5Cdp.js";import{g,J as p,o as _,c as b,b as n,w as l,u as o,a as m,d as u,t as V,F as x,Y as y,ar as O,a0 as h,as as F,p as I,f as S,_ as w,r as A,a2 as C,n as J,x as U}from"./C296uaLE.js";import{u as L}from"./CNmpcN_a.js";const M="OnForm",k="default",D="on-form",H="",q={},T=[{name:"state"},{name:"validate"},{name:"validateField"},{name:"resetValidation"}],W=[{name:"model",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rules",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"Array",elements:[{name:"IValidationRule"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"trigger",required:!1,type:{name:"union",elements:[{name:'"blur"'},{name:'"change"'}]},defaultValue:{func:!1,value:"'blur'"}},{name:"watchRules",required:!1,type:{name:"boolean"}},{name:"touchOnRulesChange",required:!1,type:{name:"boolean"}}],z=[{name:"validate",type:{names:["boolean"]}},{name:"change",type:{names:["Record"],elements:[{name:"string"},{name:"IValidationField"}]}}],P=[{name:"default"}],Y="components/on-form/index.vue",j={name:M,exportName:k,displayName:D,description:H,tags:q,expose:T,props:W,events:z,slots:P,sourceFile:Y},G=t=>(I("data-v-d361d91b"),t=t(),S(),t),K={class:"value"},Q=G(()=>m("strong",null,"Value:",-1)),X=g({__name:"basic",setup(t){const e=p({foo:"test",bar:""});return(f,a)=>{const c=y,d=O,s=h,i=F;return _(),b(x,null,[n(i,{model:o(e)},{default:l(()=>[n(d,{name:"foo",label:"Item A"},{default:l(()=>[n(c,{modelValue:o(e).foo,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).foo=r)},null,8,["modelValue"])]),_:1}),n(d,{name:"bar",label:"Item B"},{default:l(()=>[n(s,{modelValue:o(e).bar,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).bar=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m("div",K,[Q,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),Z=w(X,[["__scopeId","data-v-d361d91b"]]),nn=`<script setup lang="ts">
const form = reactive({
  foo: 'test',
  bar: '',
});
<\/script>

<template>
  <on-form :model="form">
    <on-form-item
      name="foo"
      label="Item A"
    >
      <on-input v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
    >
      <on-textarea v-model="form.bar" />
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,en=t=>(I("data-v-a1953098"),t=t(),S(),t),on={class:"value"},tn=en(()=>m("strong",null,"Value:",-1)),an=g({__name:"vertical",setup(t){const e=p({foo:"test",bar:""});return(f,a)=>{const c=y,d=O,s=h,i=F;return _(),b(x,null,[n(i,{model:o(e),layout:"vertical",name:"onf-vertical"},{default:l(()=>[n(d,{name:"foo",label:"Item A"},{default:l(()=>[n(c,{modelValue:o(e).foo,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).foo=r)},null,8,["modelValue"])]),_:1}),n(d,{name:"bar",label:"Item B"},{default:l(()=>[n(s,{modelValue:o(e).bar,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).bar=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m("div",on,[tn,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),ln=w(an,[["__scopeId","data-v-a1953098"]]),sn=`<script setup lang="ts">
const form = reactive({
  foo: 'test',
  bar: '',
});
<\/script>

<template>
  <on-form
    :model="form"
    layout="vertical"
    name="onf-vertical"
  >
    <on-form-item
      name="foo"
      label="Item A"
    >
      <on-input v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
    >
      <on-textarea v-model="form.bar" />
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,rn=t=>(I("data-v-de22e4fc"),t=t(),S(),t),mn={class:"value"},dn=rn(()=>m("strong",null,"Value:",-1)),cn=g({__name:"hint",setup(t){const e=p({foo:"test",bar:""});return(f,a)=>{const c=y,d=O,s=h,i=F;return _(),b(x,null,[n(i,{model:o(e),name:"onf-hint"},{default:l(()=>[n(d,{name:"foo",label:"Item A",hint:"Hint message"},{default:l(()=>[n(c,{modelValue:o(e).foo,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).foo=r)},null,8,["modelValue"])]),_:1}),n(d,{name:"bar",label:"Item B"},{default:l(()=>[n(s,{modelValue:o(e).bar,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).bar=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m("div",mn,[dn,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),un=w(cn,[["__scopeId","data-v-de22e4fc"]]),fn=`<script setup lang="ts">
const form = reactive({
  foo: 'test',
  bar: '',
});
<\/script>

<template>
  <on-form
    :model="form"
    name="onf-hint"
  >
    <on-form-item
      name="foo"
      label="Item A"
      hint="Hint message"
    >
      <on-input v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
    >
      <on-textarea v-model="form.bar" />
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,pn=t=>(I("data-v-4bdb5551"),t=t(),S(),t),_n={class:"value"},bn=pn(()=>m("strong",null,"Value:",-1)),vn=g({__name:"error",setup(t){const e=p({foo:"test",bar:""});return(f,a)=>{const c=y,d=O,s=h,i=F;return _(),b(x,null,[n(i,{model:o(e),name:"onf-error"},{default:l(()=>[n(d,{name:"foo",label:"Item A",error:"Error message",status:"error"},{default:l(()=>[n(c,{modelValue:o(e).foo,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).foo=r)},null,8,["modelValue"])]),_:1}),n(d,{name:"bar",label:"Item B",status:"error"},{message:l(()=>[u(" Message in slot ")]),default:l(()=>[n(s,{modelValue:o(e).bar,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).bar=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m("div",_n,[bn,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),gn=w(vn,[["__scopeId","data-v-4bdb5551"]]),Vn=`<script setup lang="ts">
const form = reactive({
  foo: 'test',
  bar: '',
});
<\/script>

<template>
  <on-form
    :model="form"
    name="onf-error"
  >
    <on-form-item
      name="foo"
      label="Item A"
      error="Error message"
      status="error"
    >
      <on-input v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
      status="error"
    >
      <on-textarea v-model="form.bar" />
      <template #message>
        Message in slot
      </template>
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,xn=t=>(I("data-v-e28c27f7"),t=t(),S(),t),yn={class:"value"},On=xn(()=>m("strong",null,"Value:",-1)),hn=g({__name:"warning",setup(t){const e=p({foo:"test",bar:""});return(f,a)=>{const c=y,d=O,s=h,i=F;return _(),b(x,null,[n(i,{model:o(e),name:"onf-warning"},{default:l(()=>[n(d,{name:"foo",label:"Item A",error:"Error",hint:"Hint",status:"warning"},{default:l(()=>[n(c,{modelValue:o(e).foo,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).foo=r)},null,8,["modelValue"])]),_:1}),n(d,{name:"bar",label:"Item B",status:"warning"},{message:l(()=>[u(" Message in slot ")]),default:l(()=>[n(s,{modelValue:o(e).bar,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).bar=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m("div",yn,[On,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),Fn=w(hn,[["__scopeId","data-v-e28c27f7"]]),In=`<script setup lang="ts">
const form = reactive({
  foo: 'test',
  bar: '',
});
<\/script>

<template>
  <on-form
    :model="form"
    name="onf-warning"
  >
    <on-form-item
      name="foo"
      label="Item A"
      error="Error"
      hint="Hint"
      status="warning"
    >
      <on-input v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
      status="warning"
    >
      <on-textarea v-model="form.bar" />
      <template #message>
        Message in slot
      </template>
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,Sn=t=>(I("data-v-f603cee3"),t=t(),S(),t),wn={class:"value"},En=Sn(()=>m("strong",null,"Value:",-1)),$n=g({__name:"rules",setup(t){const e=p({foo:"test",bar:""}),f=p({foo:[s=>s.length>=3||"Minimum length is 3",s=>s.toLowerCase().includes("a")||'Must includes character "a"'],bar:[s=>s.length<=3||"Maximum length is 3"]}),a=A(),c=()=>{var i;const s=(i=a.value)==null?void 0:i.validate();if(console.dir(s),!s){console.log("Validation error");return}console.log("Form is valid")},d=()=>{e.foo="",e.bar="",J(()=>{var s;(s=a.value)==null||s.resetValidation()})};return(s,i)=>{const r=h,E=O,N=y,R=U;return _(),b(x,null,[n(F,{ref_key:"formRef",ref:a,model:o(e),rules:o(f),name:"onf-rules",class:"demo-form",onSubmit:i[2]||(i[2]=C(()=>{},["prevent"]))},{default:l(()=>[n(E,{name:"foo",label:"Item A"},{default:l(()=>[n(r,{modelValue:o(e).foo,"onUpdate:modelValue":i[0]||(i[0]=$=>o(e).foo=$)},null,8,["modelValue"])]),_:1}),n(E,{name:"bar",label:"Item B"},{default:l(()=>[n(N,{modelValue:o(e).bar,"onUpdate:modelValue":i[1]||(i[1]=$=>o(e).bar=$)},null,8,["modelValue"])]),_:1}),n(E,{class:"actions"},{default:l(()=>[n(R,{type:"primary",onClick:c},{default:l(()=>[u(" Submit ")]),_:1}),n(R,{type:"default",onClick:d},{default:l(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1},8,["model","rules"]),m("div",wn,[En,u(" "+V(JSON.stringify(o(e))),1)])],64)}}}),Rn=w($n,[["__scopeId","data-v-f603cee3"]]),Nn=`<script setup lang="ts">
import OnForm from '@onfl/components/on-form/index.vue';
import type { IOnFormExposed } from '@onfl/components/on-form/types';

const form = reactive({
  foo: 'test',
  bar: '',
});

const rules = reactive({
  foo: [
    (val: string) => val.length >= 3 || 'Minimum length is 3',
    (val: string) => val.toLowerCase().includes('a') || 'Must includes character "a"',
  ],
  bar: [
    (val: string) => val.length <= 3 || 'Maximum length is 3',
  ],
});

const formRef = ref<IOnFormExposed>();

const onSubmit = () => {
  const res = formRef.value?.validate();
  console.dir(res);
  if (!res) {
    console.log('Validation error');
    return;
  }
  console.log('Form is valid');
};

const onReset = () => {
  form.foo = '';
  form.bar = '';
  nextTick(() => {
    formRef.value?.resetValidation();
  });
};
<\/script>

<template>
  <on-form
    ref="formRef"
    :model="form"
    :rules="rules"
    name="onf-rules"
    class="demo-form"
    @submit.prevent
  >
    <on-form-item
      name="foo"
      label="Item A"
    >
      <on-textarea v-model="form.foo" />
    </on-form-item>
    <on-form-item
      name="bar"
      label="Item B"
    >
      <on-input v-model="form.bar" />
    </on-form-item>
    <on-form-item class="actions">
      <on-btn
        type="primary"
        @click="onSubmit"
      >
        Submit
      </on-btn>
      <on-btn
        type="default"
        @click="onReset"
      >
        Reset
      </on-btn>
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
.demo-form {
  :deep(.label-wrap) {
    width: 70px;
  }
}
.actions {
  padding-left: 70px;
  :deep(.input-wrap) {
    display: flex;
    gap:16px;
  }
}
</style>
`,Bn={class:"markdown-body"},An=m("h1",null,"OnForm",-1),Cn=m("h2",null,"Примеры использования",-1),Jn=m("h3",null,"Basic",-1),Un=m("h3",null,"Vertical layout",-1),Ln=m("h3",null,"Hint",-1),Mn=m("h3",null,"Error",-1),kn=m("h3",null,"Warning",-1),Dn=m("h3",null,"Rules",-1),Hn=m("h2",null,"API",-1),Pn="OnForm | OnFrontLib Docs",Yn=[{property:"og:title",content:"OnForm | OnFrontLib Docs"},{name:"twitter:title",content:"OnForm | OnFrontLib Docs"}],jn={__name:"on-form",setup(t,{expose:e}){return e({frontmatter:{title:"OnForm | OnFrontLib Docs",meta:[{property:"og:title",content:"OnForm | OnFrontLib Docs"},{name:"twitter:title",content:"OnForm | OnFrontLib Docs"}]}}),L({title:"OnForm | OnFrontLib Docs",meta:[{property:"og:title",content:"OnForm | OnFrontLib Docs"},{name:"twitter:title",content:"OnForm | OnFrontLib Docs"}]}),(c,d)=>(_(),b("div",Bn,[An,Cn,Jn,n(v,{code:o(nn)},{default:l(()=>[n(Z)]),_:1},8,["code"]),Un,n(v,{code:o(sn)},{default:l(()=>[n(ln)]),_:1},8,["code"]),Ln,n(v,{code:o(fn)},{default:l(()=>[n(un)]),_:1},8,["code"]),Mn,n(v,{code:o(Vn)},{default:l(()=>[n(gn)]),_:1},8,["code"]),kn,n(v,{code:o(In)},{default:l(()=>[n(Fn)]),_:1},8,["code"]),Dn,n(v,{code:o(Nn)},{default:l(()=>[n(Rn)]),_:1},8,["code"]),Hn,n(B,{value:o(j)},null,8,["value"])]))}};export{jn as default,Yn as meta,Pn as title};
