import{ap as o,r as u,aq as f,y as d,z as v,ar as l,as as i,at as h,au as p}from"./entry._doioHTx.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:p(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};