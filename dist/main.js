(()=>{"use strict";const t=(t,e,n=null,o=null)=>{const a=document.createElement(t);return a.setAttribute("id",e),null!=n&&a.classList.add(n),null!=o&&(a.textContent=o),a},e=(t,e)=>{document.getElementById(t).appendChild(e)};(n=>{(n=>{const o=t("header","header");e("content",o)})(),(n=>{const o=t("div","side-panel");e("content",o)})(),(n=>{const o=t("main","main-panel");e("content",o)})(),(n=>{const o=t("footer","footer");(t=>{const e=document.createElement("div");e.setAttribute("id","signature");const n=document.createElement("span");n.textContent="Made with ";const o=document.createElement("span");o.setAttribute("id","red-heart"),o.classList.add("emoji"),o.innerHTML="&#x2764";const a=document.createElement("span");a.textContent=" & ";const c=document.createElement("span");c.setAttribute("id","coffee-cup"),c.classList.add("emoji"),c.innerHTML="&#x2615";const d=document.createElement("span");d.textContent=" by ";const s=document.createElement("a");s.setAttribute("href","https://github.com/arndzk"),s.innerHTML="arndzk",e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(c),e.appendChild(d),e.appendChild(s),t.appendChild(e)})(o),e("content",o)})()})(),"projects-array"in localStorage||window.localStorage.setItem("projects-array",JSON.stringify([])),JSON.parse(window.localStorage.getItem("projects-array")),console.log("This is the ToDo List!")})();