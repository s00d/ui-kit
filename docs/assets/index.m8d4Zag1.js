import{g as h,r as c,i as I,n as E,y as w,h as m,o as y,c as T,l as L,u as d,a4 as O,a5 as n,_ as A}from"./entry._doioHTx.js";const R=["data-ssr","innerHTML"],b=h({name:"OnSvg",__name:"index",props:{name:{},icon:{type:Boolean},img:{type:Boolean},immediate:{type:Boolean},default:{},placeholder:{},width:{},height:{},noSsr:{type:Boolean}},async setup(_){const t=_,r=c("");async function v(s=!1){try{const a=Object.assign({"/assets/svg/_default.svg":()=>n(()=>import("./_default.BTp9I0q-.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/baseline-calendar-month.svg":()=>n(()=>import("./baseline-calendar-month.TIRCaQQZ.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/flags/cn.svg":()=>n(()=>import("./cn.BmlLAmN0.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/flags/de.svg":()=>n(()=>import("./de.CYLqoqvi.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/flags/ru.svg":()=>n(()=>import("./ru.BEJY0QwN.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/flags/ua.svg":()=>n(()=>import("./ua.CKPcUAYz.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/flags/us.svg":()=>n(()=>import("./us.BrUD1sTj.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/svg/round-image.svg":()=>n(()=>import("./round-image.B4YagRMs.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default)});if(s){const e=await a[`/assets/svg/${t.placeholder??t.default??"_default"}.svg`]();return e.default||e}if(a[`/assets/svg/${t.name}.svg`]){const e=await a[`/assets/svg/${t.name}.svg`]();return e.default||e}else{const e=await a[`/assets/svg/${t.default??"_default"}.svg`]();return e.default||e}}catch{console.error(`[on-svg] Icon '${t.name}' doesn't exist in 'assets/svg'`)}}async function l(s=!1){r.value=await v(s)}const i=c();let o=null;function u(){o==null||o(),o=O(i,([{isIntersecting:a}])=>{a&&(l(),o==null||o())}).stop}I(()=>{var s;if(!i.value||!i.value.hasAttribute("data-ssr"))!t.immediate&&window.IntersectionObserver?E(u):l();else if(!t.img)r.value=i.value.innerHTML;else{const a=(s=i.value.querySelector("img"))==null?void 0:s.getAttribute("src"),e=a==null?void 0:a.replace("data:image/svg+xml,","");r.value=e?decodeURIComponent(e):null}w([()=>t.name,()=>t.immediate,()=>t.img],()=>{!t.immediate&&window.IntersectionObserver?u():l()})});const g=m(()=>{if(!r.value)return"";const s=r.value.replace(/\s+/g," ").trim();return`data:image/svg+xml,${encodeURIComponent(s)}`}),f=m(()=>t.img?`<img src="${g.value}" alt="" style="width: ${t.width};height: ${t.height}" />`:r.value),p=!1;return(s,a)=>(y(),T("i",{ref_key:"el",ref:i,class:L(["on-svg",{"--icon":s.icon}]),"data-ssr":d(p)&&!s.noSsr||void 0,innerHTML:d(f)},null,10,R))}}),$=A(b,[["__scopeId","data-v-dbb88c5a"]]);export{$ as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}