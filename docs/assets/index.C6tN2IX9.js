import{g as U,r as o,a6 as A,h as u,a7 as Q,a8 as W,o as n,c as r,a as m,b as C,w as X,l as V,u as s,j as Y,k as Z,J as ee,N as te,a9 as se,aa as ae,F as N,G as le,q as O,t as oe,s as b,d as ne,K as ie,n as ue,R as re,_ as de}from"./entry._doioHTx.js";import{v as ce,g as R,s as pe}from"./getPosition.C0X8YXSS.js";import{_ as fe}from"./arrow.vue.BALFL5yU.js";const ve={class:"on-input-border"},me={style:{height:"20px"}},xe=["onClick"],he=["textContent"],_e={key:1,style:{height:"30px","text-align":"center"},class:"input-select-list-block-empty"},ge=U({name:"OnInputList",__name:"index",props:{modelValue:{default:""},list:{},filter:{type:Function,default:(i,x)=>{if(x==="")return i;const a=[],c=new RegExp(x.replace(/\\/g,"").toLowerCase());for(const p in i)(c.test(i[p].val.toString().toLowerCase())||c.test(i[p].key.toString().toLowerCase()))&&a.push(i[p]);return a}},size:{default:"md"},disabled:{type:Boolean,default:!1},placeholder:{default:void 0},loading:{type:Boolean},prefix:{default:void 0},suffix:{default:void 0},status:{default:null}},emits:["update:modelValue","select"],setup(i,{emit:x}){const a=i,c=x,p=o(null),h=o(null),B=o(null),I=o(0),y=o(0),k=o(0),l=o(!1),f=o(""),{focused:T}=A(p),S=u(()=>a.filter(a.list,f.value)),w=u(()=>a.list.findIndex(t=>t.key===a.modelValue)??0),$=u(()=>a.list[w.value]),F=u(()=>($.value?$.value.val:"").toString()),{onBlur:L,onChange:j,id:D,status:E}=Q(),z=u(()=>a.status??s(E)),_=u(()=>S.value.length),K=u(()=>({"--focused":T.value,"--f-loading":a.loading,[`--status-${z.value}`]:!!z.value})),M=t=>{c("update:modelValue",t.key),c("select",t),l.value=!1,f.value="",j()},P=(t=0)=>{setTimeout(()=>{l.value&&(l.value=!1,h.value&&clearInterval(h.value),L())},t)},q=t=>{if(l.value)return P();const v=t.currentTarget,g=()=>{const d=R(v);(Math.abs(d.left-k.value)>10||Math.abs(d.top-y.value)>10)&&(l.value=!1,clearInterval(h.value))};l.value=!0;const e=R(v);y.value=e.top,k.value=e.left,I.value=e.width,h.value=pe(()=>g(),10),ue(()=>{var d;return(d=B.value)==null?void 0:d.focus()})},{list:G,containerProps:H,wrapperProps:J}=W(S,{itemHeight:22});return(t,v)=>{const g=re;return n(),r(N,null,[m("div",ve,[C(g,{id:s(D),class:V(["input",s(K)]),"aria-label":"list",prefix:t.prefix,suffix:t.suffix,loading:t.loading,disabled:t.disabled,readonly:!0,placeholder:t.placeholder,size:t.size,"model-value":s(F),onClick:q,onBlur:s(L)},{suffix:X(()=>[C(fe,{class:V(["arrow_down",{isOpen:l.value}])},null,8,["class"])]),_:1},8,["id","class","prefix","suffix","loading","disabled","placeholder","size","model-value","onBlur"])]),l.value?(n(),Y(ie,{key:0,to:"body"},[Z((n(),r("div",{class:"input-select-list",style:ee([{width:`${I.value}px`,top:`${y.value}px`,left:`${k.value}px`},{height:"300px"}])},[m("div",null,[m("div",me,[C(g,{ref_key:"searchRef",ref:B,modelValue:f.value,"onUpdate:modelValue":v[0]||(v[0]=e=>f.value=e),type:"text",class:"input-select-list-filter",placeholder:"Search...","allow-clear":""},null,8,["modelValue"])]),s(_)?(n(),r("div",te({key:0},s(H),{style:{height:"260px"}}),[m("div",se(ae(s(J))),[(n(!0),r(N,null,le(s(G),e=>(n(),r("div",{key:e.index,style:{width:"400px"}},[(n(),r("div",{key:e.index,class:V([{active:s(w)===e.index&&f.value==="",first:e.index===0,last:e.index===s(_)-1},"input-select-list-block-item"]),onClick:d=>M(e.data)},[O(t.$slots,"item",{item:e.data,item_id:e.index,item_key:e.index,first:e.index===0,last:e.index===s(_)-1,active:s(w)===e.index},()=>[m("span",{textContent:oe(e.data.val)},null,8,he)],!0)],10,xe))]))),128))],16)],16)):b("",!0),s(_)?b("",!0):(n(),r("div",_e,[O(t.$slots,"noitem",{},()=>[ne(" No matches found ")],!0)]))])],4)),[[s(ce),()=>P(10)]])])):b("",!0)],64)}}}),Ce=de(ge,[["__scopeId","data-v-08e4e0e1"]]);export{Ce as _};
