(()=>{"use strict";const t=(t,e,n=null,d=null)=>{const o=document.createElement(t);return o.setAttribute("id",e),null!=n&&o.classList.add(n),null!=d&&(o.textContent=d),o},e=(t,e)=>{document.getElementById(t).appendChild(e)};(n=>{const d=t("header","header");e("content",d)})(),(n=>{const d=t("div","side-panel");e("content",d)})(),(n=>{const d=t("main","main-panel");e("content",d)})(),(n=>{const d=t("footer","footer");(t=>{const e=document.createElement("div");e.setAttribute("id","signature");const n=document.createElement("span");n.textContent="Made with ";const d=document.createElement("span");d.setAttribute("id","red-heart"),d.classList.add("emoji"),d.innerHTML="&#x2764";const o=document.createElement("span");o.textContent=" & ";const c=document.createElement("span");c.setAttribute("id","coffee-cup"),c.classList.add("emoji"),c.innerHTML="&#x2615";const s=document.createElement("span");s.textContent=" by ";const a=document.createElement("a");a.setAttribute("href","https://github.com/arndzk"),a.innerHTML="arndzk",e.appendChild(n),e.appendChild(d),e.appendChild(o),e.appendChild(c),e.appendChild(s),e.appendChild(a),t.appendChild(e)})(d),e("content",d)})(),console.log("This is the ToDo List!")})();