import{c as r,u as i,t as c,j as t,N as a}from"./index-6uQLnXvX.js";import m from"./index-vEWxZ2Nx.js";import d from"./index-Dey-_z-R.js";const e={Wrapper:r.div`
        min-height: 100vh;
        background: var(--color-bg);
        padding: 24px 16px 40px;
    `,Inner:r.div`
        max-width: 1200px;
        margin: 0 auto;
    `},x={EventLoop:m,JavascriptVarLetConst:d},f=()=>{const{slug:p}=i(),o=c.find(s=>s.path.replace("/","")===p);if(!o)return t.jsx(a,{});const n=x[o.componentName];return n?t.jsx(e.Wrapper,{children:t.jsx(e.Inner,{children:t.jsx(n,{})})}):t.jsx(a,{})};export{f as default};
