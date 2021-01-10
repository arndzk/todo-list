(()=>{"use strict";var t={55:(t,e,a)=>{a.d(e,{f:()=>st});const i=(t,e,a=null,i=null)=>{const n=document.createElement(t);return n.setAttribute("id",e),null!=a&&n.classList.add(a),null!=i&&(n.textContent=i),n},n=t=>document.getElementById(t),s=(t,e)=>{n(t).appendChild(e)},r=(t,e)=>{const a=n(t),i=n(e);a.removeChild(i)};function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var l=36e5,p={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,m=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,k=/^([+-])(\d{2})(?::?(\d{2}))?$/;function h(t){var e,a={},i=t.split(p.dateTimeDelimiter);if(i.length>2)return a;if(/:/.test(i[0])?(a.date=null,e=i[0]):(a.date=i[0],e=i[1],p.timeZoneDelimiter.test(a.date)&&(a.date=t.split(p.timeZoneDelimiter)[0],e=t.substr(a.date.length,t.length))),e){var n=p.timezone.exec(e);n?(a.time=e.replace(n[1],""),a.timezone=n[1]):a.time=e}return a}function v(t,e){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),i=t.match(a);if(!i)return{year:null};var n=i[1]&&parseInt(i[1]),s=i[2]&&parseInt(i[2]);return{year:null==s?n:100*s,restDateString:t.slice((i[1]||i[2]).length)}}function y(t,e){if(null===e)return null;var a=t.match(u);if(!a)return null;var i=!!a[4],n=g(a[1]),s=g(a[2])-1,r=g(a[3]),o=g(a[4]),d=g(a[5])-1;if(i)return function(t,e,a){return e>=1&&e<=53&&a>=0&&a<=6}(0,o,d)?function(t,e,a){var i=new Date(0);i.setUTCFullYear(t,0,4);var n=7*(e-1)+a+1-(i.getUTCDay()||7);return i.setUTCDate(i.getUTCDate()+n),i}(e,o,d):new Date(NaN);var c=new Date(0);return function(t,e,a){return e>=0&&e<=11&&a>=1&&a<=(L[e]||(T(t)?29:28))}(e,s,r)&&function(t,e){return e>=1&&e<=(T(t)?366:365)}(e,n)?(c.setUTCFullYear(e,s,Math.max(n,r)),c):new Date(NaN)}function g(t){return t?parseInt(t):1}function b(t){var e=t.match(m);if(!e)return null;var a=f(e[1]),i=f(e[2]),n=f(e[3]);return function(t,e,a){return 24===t?0===e&&0===a:a>=0&&a<60&&e>=0&&e<60&&t>=0&&t<25}(a,i,n)?a*l+6e4*i+1e3*n:NaN}function f(t){return t&&parseFloat(t.replace(",","."))||0}function j(t){if("Z"===t)return 0;var e=t.match(k);if(!e)return 0;var a="+"===e[1]?-1:1,i=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,n)?a*(i*l+6e4*n):NaN}var L=[31,null,31,30,31,30,31,31,30,31,30,31];function T(t){return t%400==0||t%4==0&&t%100}const E=(t,e)=>!!t.test(e.value),$=t=>""!==t.value&&!0!==function(t){return o(1,arguments),d(t).getTime()<Date.now()}(function(t,e){o(1,arguments);var a=e||{},i=null==a.additionalDigits?2:c(a.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var n,s=h(t);if(s.date){var r=v(s.date,i);n=y(r.restDateString,r.year)}if(isNaN(n)||!n)return new Date(NaN);var d,l=n.getTime(),p=0;if(s.time&&(p=b(s.time),isNaN(p)||null===p))return new Date(NaN);if(!s.timezone){var u=new Date(l+p),m=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds());return m.setFullYear(u.getUTCFullYear()),m}return d=j(s.timezone),isNaN(d)?new Date(NaN):new Date(l+p+d)}(t.value)),D=t=>"low"===t||"normal"===t||"high"===t,w=(t,e,a)=>{let i=a,n=t,s=e,r=!1;return{getProjectName:t=>n,getProjectDesc:t=>s,getProjectTasks:t=>i,getProjectFocus:t=>r,editProjectName:t=>{n=t},editProjectDesc:t=>{s=t},editProjectFocus:t=>{r=t},addProjectTask:t=>{i.push(t)},removeProjectTask:t=>i.splice(t,1)}},C=(t,e,a,i,n)=>{let s,r=t,o=e,d=a,c=i;return s=null!=n&&n,{getTaskName:t=>r,getTaskDesc:t=>o,getTaskDueDate:t=>d,getTaskPriority:t=>c,getIsDone:t=>s,editTaskName:t=>{r=t},editTaskDesc:t=>{o=t},editTaskDueDate:t=>{d=t},editTaskPriority:t=>{c=t},editIsDone:t=>{s=!s}}},N=()=>{localStorage.clear();const t=[];st.forEach((e=>{const a=e.getProjectTasks();t.push({name:e.getProjectName(),desc:e.getProjectDesc(),tasks:P(a)})})),localStorage.setItem("projects",JSON.stringify(t)),I()},I=()=>{st=[],JSON.parse(localStorage.getItem("projects")).forEach((t=>{const e=[];t.tasks.forEach((t=>{e.push(C(t.name,t.desc,t.dueDate,t.priority,t.isDone))})),st.push(w(t.name,t.desc,e))}))},P=t=>{const e=[];return t.forEach((t=>{e.push({name:t.getTaskName(),desc:t.getTaskDesc(),dueDate:t.getTaskDueDate(),priority:t.getTaskPriority(),isDone:t.getIsDone()})})),e},x=t=>{t.editIsDone(),N()},A=t=>{const e=[...document.getElementsByName("priority")];if(0!=e.length){const t=e.filter((t=>!0===t.checked));return 0!=t.length?t[0].value:"empty"}return"empty"},B=/^[.,:!?'-À-ÿ\w\s]{1,20}$/,F=/^[.,:!?'-À-ÿ\w\s]{1,60}$/,_=t=>{n("save-task-btn").onclick=function(e){e.preventDefault();const a=n("add-task-name-input"),i=n("add-task-desc-input"),s=n("add-task-date-input"),o=n("add-task-priority-input"),d=A(),c=n("add-task-err-msg");!0===E(B,a)&&!0===E(F,i)&&!0===$(s)&&!0===D(d)?(c.classList.add("hidden"),((t,e)=>{st[e].addProjectTask(t),N()})(C(a.value,i.value,s.value,d),t),(t=>{V(st,`task-list-item-${t+1}`),document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","add-task-container")})(t)):(c.classList.contains("hidden")&&c.classList.remove("hidden"),null!==a.value&&""!==a.value||a.classList.add("empty-input"),null!==i.value&&""!==i.value||i.classList.add("empty-input"),null!==s.value&&""!==s.value&&!1!==$(s)||s.classList.add("empty-input"),"empty"!==d&&!1!==D(d)||o.classList.add("empty-input"))}},S=t=>{(t=>{const e=i("div","add-task-container","form-container");s("main",e)})(),(t=>{const e=i("form","add-task-form","form-body");e.setAttribute("action",""),s("add-task-container",e)})(),(t=>{const e=i("div","add-task-header","form-header");s("add-task-form",e);const a=i("span","add-task-header-text","header-text","Add Task");s("add-task-header",a)})(),(t=>{const e=i("div","add-task-inputs","form-inputs");s("add-task-form",e);const a=i("div","add-task-name-field","task-name-input-field");s("add-task-inputs",a);const n=i("label","add-task-name-label",null,"Task Name");s("add-task-name-field",n),n.htmlFor="add-task-name-input";const r=i("textarea","add-task-name-input","form-input");s("add-task-name-field",r);const o=i("div","add-task-desc-field","task-desc-input-field");s("add-task-inputs",o);const d=i("label","add-task-desc-label",null,"Task Description");s("add-task-desc-field",d),d.htmlFor="add-task-desc-input";const c=i("textarea","add-task-desc-input","form-input");s("add-task-desc-field",c);const l=i("div","add-task-date-field","task-date-input-field");s("add-task-inputs",l);const p=i("label","add-task-date-label",null,"Due Date");s("add-task-date-field",p),p.htmlFor="add-task-date-input";const u=i("input","add-task-date-input");u.setAttribute("type","date"),s("add-task-date-field",u);const m=i("div","add-task-priority-field","task-priority-input-field");s("add-task-inputs",m);const k=i("label","add-task-priority-label",null,"Priority");s("add-task-priority-field",k),k.htmlFor="add-task-priority-input";const h=i("div","add-task-priority-input");s("add-task-priority-field",h);const v=i("div","priority-high-container","priority-container"),y=i("div","priority-normal-container","priority-container"),g=i("div","priority-low-container","priority-container");s("add-task-priority-input",g),s("add-task-priority-input",y),s("add-task-priority-input",v);const b=i("span","high-radio-input","radio__input"),f=i("span","normal-radio-input","radio__input"),j=i("span","low-radio-input","radio__input");s("priority-low-container",j),s("priority-normal-container",f),s("priority-high-container",b);const L=i("input","priority-high","priority-radio");L.setAttribute("type","radio"),L.setAttribute("name","priority"),L.setAttribute("value","high");const T=i("span","high-radio-control","radio__control"),E=i("span","normal-radio-control","radio__control"),$=i("span","low-radio-control","radio__control"),D=i("label","priority-high-label","priority-label","High");D.htmlFor="priority-high";const w=i("input","priority-normal","priority-radio");w.setAttribute("type","radio"),w.setAttribute("name","priority"),w.setAttribute("value","normal");const C=i("label","priority-normal-label","priority-label","Normal");C.htmlFor="priority-normal";const N=i("input","priority-low","priority-radio");N.setAttribute("type","radio"),N.setAttribute("name","priority"),N.setAttribute("value","low");const I=i("label","priority-low-label","priority-label","Low");I.htmlFor="priority-low",s("low-radio-input",N),s("low-radio-input",$),s("priority-low-container",I),s("normal-radio-input",w),s("normal-radio-input",E),s("priority-normal-container",C),s("high-radio-input",L),s("high-radio-input",T),s("priority-high-container",D);const P=i("div","add-task-err-msg","err-msg","Please fill out the empty field(s).");P.classList.add("hidden"),s("add-task-inputs",P)})(),(t=>{const e=i("div","add-task-controls","form-controls");s("add-task-form",e);const a=i("button","save-task-btn",null,"Save");s("add-task-controls",a);const n=i("button","cancel-task-btn",null,"Cancel");s("add-task-controls",n)})(),_(t),n("cancel-task-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","add-task-container")}))},M=t=>{const e=n("projects-list").getElementsByTagName("li");for(let t=0;t<e.length;t++)e[t].classList.remove("project-list-item-focused"),n(`delete-project-btn-${t+1}`).classList.add("hidden"),n(`edit-project-btn-${t+1}`).classList.add("hidden");const a=n(t);let i;a.classList.add("project-list-item-focused");for(let t=0;t<e.length;t++)a.textContent===e[t].textContent&&(i=t);const s=n("project-title");s.textContent="",s.textContent=st[i].getProjectName();const r=n("project-desc");r.textContent="",r.textContent=st[i].getProjectDesc();const o=n("add-task-btn");o.outerHTML=o.outerHTML,(t=>{n("add-task-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.add("inactive","blurred"),document.getElementById("center-panel").classList.add("inactive","blurred"),S(t)}))})(i);const d=n(`delete-project-btn-${i+1}`),c=n(`edit-project-btn-${i+1}`);d.classList.remove("hidden"),c.classList.remove("hidden"),V(st,t)},U=t=>{const e=n("project-title"),a=n("project-desc"),i=n("task-list");for(e.textContent="",a.textContent="";i.lastElementChild;)i.removeChild(i.lastElementChild)},H=t=>{n("delete-confirm-btn").addEventListener("click",(()=>{st.splice(t,1),N(),U(),Q(st,"project-list-item-1"),document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","delete-prompt-container")}),!1)},O=t=>{(t=>{const e=i("div","delete-prompt-container","form-container");s("main",e)})(),(t=>{const e=i("div","delete-prompt","form-body");s("delete-prompt-container",e)})(),(t=>{const e=i("div","delete-prompt-text","prompt-text","Are you sure you want to delete this project?");s("delete-prompt",e)})(),(t=>{const e=i("div","delete-prompt-controls","form-controls");s("delete-prompt",e);const a=i("button","delete-confirm-btn",null,"Confirm");s("delete-prompt-controls",a);const n=i("button","delete-cancel-btn",null,"Cancel");s("delete-prompt-controls",n)})(),H(t),n("delete-cancel-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","delete-prompt-container")}))},z=/^[.,:!?'-À-ÿ\w\s]{1,20}$/,Z=/^[.,:!?'-À-ÿ\w\s]{1,60}$/,Y=(t,e)=>{n("save-task-edit-btn").onclick=function(a){a.preventDefault();const i=n("edit-task-name-input"),s=n("edit-task-desc-input"),o=n("edit-task-date-input"),d=n("edit-task-priority-input"),c=A(),l=n("edit-task-err-msg");if(!0===E(z,i)&&!0===E(Z,s)&&!0===$(o)&&!0===D(c)){l.classList.add("hidden");let a=[];a=st[t].getProjectTasks(),a[e].editTaskName(i.value),a[e].editTaskDesc(s.value),a[e].editTaskDueDate(o.value),a[e].editTaskPriority(c),N(),(t=>{X(st,`task-list-item-${t}`),document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","edit-task-container")})(t)}else l.classList.contains("hidden")&&l.classList.remove("hidden"),null!==i.value&&""!==i.value||i.classList.add("empty-input"),null!==s.value&&""!==s.value||s.classList.add("empty-input"),null!==o.value&&""!==o.value&&!1!==$(o)||o.classList.add("empty-input"),"empty"!==c&&!1!==D(c)||d.classList.add("empty-input")}},J=(t,e)=>{(t=>{const e=i("div","edit-task-container","form-container");s("main",e)})(),(t=>{const e=i("form","edit-task-form","form-body");e.setAttribute("action",""),s("edit-task-container",e)})(),(t=>{const e=i("div","edit-task-header","form-header");s("edit-task-form",e);const a=i("span","edit-task-header-text","header-text","Edit Task");s("edit-task-header",a)})(),((t,e)=>{let a=[];a=st[t].getProjectTasks();const n=i("div","edit-task-inputs","form-inputs");s("edit-task-form",n);const r=i("div","edit-task-name-field","task-name-input-field");s("edit-task-inputs",r);const o=i("label","edit-task-name-label",null,"Task Name");s("edit-task-name-field",o),o.htmlFor="edit-task-name-input";const d=i("textarea","edit-task-name-input","form-input");d.textContent=a[e].getTaskName(),s("edit-task-name-field",d);const c=i("div","edit-task-desc-field","task-desc-input-field");s("edit-task-inputs",c);const l=i("label","edit-task-desc-label",null,"Task Description");s("edit-task-desc-field",l),l.htmlFor="edit-task-desc-input";const p=i("textarea","edit-task-desc-input","form-input");p.textContent=a[e].getTaskDesc(),s("edit-task-desc-field",p);const u=i("div","edit-task-date-field","task-date-input-field");s("edit-task-inputs",u);const m=i("label","edit-task-date-label",null,"Due Date");s("edit-task-date-field",m),m.htmlFor="edit-task-date-input";const k=i("input","edit-task-date-input");k.setAttribute("type","date"),k.setAttribute("value",a[e].getTaskDueDate()),s("edit-task-date-field",k);const h=i("div","edit-task-priority-field","task-priority-input-field");s("edit-task-inputs",h);const v=i("label","edit-task-priority-label",null,"Priority");s("edit-task-priority-field",v),v.htmlFor="edit-task-priority-input";const y=i("div","edit-task-priority-input");s("edit-task-priority-field",y);const g=i("div","priority-high-container","priority-container"),b=i("div","priority-normal-container","priority-container"),f=i("div","priority-low-container","priority-container");s("edit-task-priority-input",f),s("edit-task-priority-input",b),s("edit-task-priority-input",g);const j=i("span","high-radio-input","radio__input"),L=i("span","normal-radio-input","radio__input"),T=i("span","low-radio-input","radio__input");s("priority-low-container",T),s("priority-normal-container",L),s("priority-high-container",j);let E=a[e].getTaskPriority();const $=i("span","high-radio-control","radio__control"),D=i("span","normal-radio-control","radio__control"),w=i("span","low-radio-control","radio__control"),C=i("input","priority-high","priority-radio");C.setAttribute("type","radio"),C.setAttribute("name","priority"),C.setAttribute("value","high"),"high"===E&&(C.checked=!0);const N=i("label","priority-high-label","priority-label","High");N.htmlFor="priority-high";const I=i("input","priority-normal","priority-radio");I.setAttribute("type","radio"),I.setAttribute("name","priority"),I.setAttribute("value","normal"),"normal"===E&&(I.checked=!0);const P=i("label","priority-normal-label","priority-label","Normal");P.htmlFor="priority-normal";const x=i("input","priority-low","priority-radio");x.setAttribute("type","radio"),x.setAttribute("name","priority"),x.setAttribute("value","low"),"low"===E&&(x.checked=!0);const A=i("label","priority-low-label","priority-label","Low");A.htmlFor="priority-low",s("low-radio-input",x),s("low-radio-input",w),s("priority-low-container",A),s("normal-radio-input",I),s("normal-radio-input",D),s("priority-normal-container",P),s("high-radio-input",C),s("high-radio-input",$),s("priority-high-container",N);const B=i("div","edit-task-err-msg","err-msg","Please fill out the empty field(s).");B.classList.add("hidden"),s("edit-task-inputs",B)})(t,e),(t=>{const e=i("div","edit-task-controls","form-controls");s("edit-task-form",e);const a=i("button","save-task-edit-btn",null,"Save");s("edit-task-controls",a);const n=i("button","cancel-task-edit-btn",null,"Cancel");s("edit-task-controls",n)})(),Y(t,e),n("cancel-task-edit-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","edit-task-container")}))},R=(t,e,a)=>{n(t).addEventListener("click",(()=>{document.getElementById("side-panel").classList.add("inactive","blurred"),document.getElementById("center-panel").classList.add("inactive","blurred"),J(e,a)}))},q=(t,e)=>{n("task-delete-confirm-btn").addEventListener("click",(()=>{st[t].getProjectTasks().splice(e,1),N(),(t=>{X(st,`task-list-item-${t}`),document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","delete-prompt-container")})(t)}),!1)},W=(t,e)=>{(t=>{const e=i("div","delete-prompt-container","form-container");s("main",e)})(),(t=>{const e=i("div","delete-prompt","form-body");s("delete-prompt-container",e)})(),(t=>{const e=i("div","delete-prompt-text","prompt-text","Are you sure you want to delete this task?");s("delete-prompt",e)})(),(t=>{const e=i("div","delete-prompt-controls","form-controls");s("delete-prompt",e);const a=i("button","task-delete-confirm-btn",null,"Confirm");s("delete-prompt-controls",a);const n=i("button","task-delete-cancel-btn",null,"Cancel");s("delete-prompt-controls",n)})(),q(t,e),n("task-delete-cancel-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","delete-prompt-container")}))},G=(t,e,a)=>{n(t).addEventListener("click",(()=>{W(e,a)}),!1)},K=(t,e,a)=>{const i=n(t),s=document.getElementById(`task-input-${a}`),r=document.getElementById(`task-name-${a}`),o=document.getElementById(`task-desc-${a}`),d=document.getElementById(`task-due-date-${a}`);s.addEventListener("click",(()=>{let t=[];t=st[e].getProjectTasks();const n=t[a];i.classList.contains("material-icons")?(i.classList.remove("material-icons"),i.innerHTML="",r.classList.remove("checked"),o.classList.remove("checked"),d.classList.remove("checked"),"low"===n.getTaskPriority()?i.classList.add("low-check"):"normal"===n.getTaskPriority()?i.classList.add("normal-check"):"high"===n.getTaskPriority()&&i.classList.add("high-check"),x(n)):(i.classList.contains("low-check")?i.classList.remove("low-check"):i.classList.contains("normal-check")?i.classList.remove("normal-check"):i.classList.contains("high-check")&&i.classList.remove("high-check"),i.classList.add("material-icons"),i.innerHTML="check",r.classList.add("checked"),o.classList.add("checked"),d.classList.add("checked"),x(n))}))},Q=(t,e)=>{const a=n("projects-list");for(a.classList.add("no-click");a.lastElementChild;)a.removeChild(a.lastElementChild);let r=0;t.forEach((t=>{const e=i("li",`project-list-item-${r+1}`,"project-list-item"),a=i("span",`item-list-name-${r+1}`,"item-list-name",t.getProjectName()),o=i("div",`delete-project-btn-${r+1}`,"delete-project-btn"),d=i("span",`delete-project-icon-${r+1}`,"material-icons","delete");d.classList.add("delete-project-icon"),o.classList.add("hidden");const c=i("div",`edit-project-btn-${r+1}`,"edit-project-btn"),l=i("span",`edit-project-icon-${r+1}`,"material-icons","edit");var p,u;l.classList.add("edit-project-icon"),c.classList.add("hidden"),s("projects-list",e),s(`project-list-item-${r+1}`,a),s(`project-list-item-${r+1}`,c),s(`edit-project-btn-${r+1}`,l),s(`project-list-item-${r+1}`,o),s(`delete-project-btn-${r+1}`,d),(t=>{const e=n(t);e.addEventListener("click",(()=>{U();const t=e.getAttribute("id");M(t)}))})(`project-list-item-${r+1}`),p=`delete-project-btn-${r+1}`,u=r,n(p).addEventListener("click",(()=>{O(u)}),!1),R(`edit-project-btn-${r+1}`,r),r++})),null!=e&&a.getElementsByTagName("li").length>0&&M(e),a.classList.remove("no-click")},V=(t,e)=>{const a=n("task-list"),r=e.substr(e.length-1),o=parseInt(r)-1;for(;a.lastElementChild;)a.removeChild(a.lastElementChild);let d=[];d=t[o].getProjectTasks();let c=0;d.forEach((t=>{const e=i("li",`task-list-item-${c}`,"task-list-item"),a=i("span",`task-check-${c}`,"task-check"),n=i("span",`task-input-${c}`,"task-input"),r=t.getIsDone();s("task-list",e),s(`task-list-item-${c}`,n),s(`task-input-${c}`,a);const d=i("span",`task-name-${c}`,"task-name",t.getTaskName());s(`task-list-item-${c}`,d);const l=i("span",`task-desc-${c}`,"task-desc",t.getTaskDesc());s(`task-list-item-${c}`,l);const p=i("span",`task-due-date-${c}`,"task-due-date",`Due on: ${t.getTaskDueDate()}`);s(`task-list-item-${c}`,p),!1===r?"low"===t.getTaskPriority()?a.classList.add("low-check"):"normal"===t.getTaskPriority()?a.classList.add("normal-check"):"high"===t.getTaskPriority()&&a.classList.add("high-check"):!0===r&&(a.classList.add("material-icons"),a.innerHTML="check",d.classList.add("checked"),l.classList.add("checked"),p.classList.add("checked"));const u=i("div",`edit-task-btn-${c}`,"edit-task-btn"),m=i("span",`edit-task-icon-${c}`,"edit-task-icon","edit");m.classList.add("material-icons");const k=i("div",`delete-task-btn-${c}`,"delete-task-btn"),h=i("span",`delete-task-icon-${c}`,"delete-task-icon","delete");h.classList.add("material-icons"),s(`task-list-item-${c}`,u),s(`task-list-item-${c}`,k),s(`edit-task-btn-${c}`,m),s(`delete-task-btn-${c}`,h),R(`edit-task-btn-${c}`,o,c),G(`delete-task-btn-${c}`,o,c),K(`task-check-${c}`,o,c),c++}))},X=(t,e,a)=>{const r=n("task-list"),o=e.substr(e.length-1),d=parseInt(o);for(;r.lastElementChild;)r.removeChild(r.lastElementChild);let c=[];c=t[d].getProjectTasks();let l=0;c.forEach((t=>{const e=i("li",`task-list-item-${l}`,"task-list-item"),a=i("span",`task-check-${l}`,"task-check"),n=i("span",`task-input-${l}`,"task-input"),r=t.getIsDone();s("task-list",e),s(`task-list-item-${l}`,n),s(`task-input-${l}`,a);const o=i("span",`task-name-${l}`,"task-name",t.getTaskName());s(`task-list-item-${l}`,o);const c=i("span",`task-desc-${l}`,"task-desc",t.getTaskDesc());s(`task-list-item-${l}`,c);const p=i("span",`task-due-date-${l}`,"task-due-date",`Due on: ${t.getTaskDueDate()}`);s(`task-list-item-${l}`,p),!1===r?"low"===t.getTaskPriority()?a.classList.add("low-check"):"normal"===t.getTaskPriority()?a.classList.add("normal-check"):"high"===t.getTaskPriority()&&a.classList.add("high-check"):!0===r&&(a.classList.add("material-icons"),a.innerHTML="check",o.classList.add("checked"),c.classList.add("checked"),p.classList.add("checked"));const u=i("div",`edit-task-btn-${l}`,"edit-task-btn"),m=i("span",`edit-task-icon-${l}`,"edit-task-icon","edit");m.classList.add("material-icons");const k=i("div",`delete-task-btn-${l}`,"delete-task-btn"),h=i("span",`delete-task-icon-${l}`,"delete-task-icon","delete");h.classList.add("material-icons"),s(`task-list-item-${l}`,u),s(`task-list-item-${l}`,k),s(`edit-task-btn-${l}`,m),s(`delete-task-btn-${l}`,h),R(`edit-task-btn-${l}`,d,l),G(`delete-task-btn-${l}`,d,l),l++}))},tt=/^[.,:!?'-À-ÿ\w\s]{1,20}$/,et=/^[.,:!?'-À-ÿ\w\s]{1,60}$/,at=()=>{n("save-project-btn").addEventListener("click",(t=>{t.preventDefault(),n("add-project-form");const e=n("add-project-name-input"),a=n("add-project-desc-input"),i=n("add-project-err-msg");if(!0===E(tt,e)&&!0===E(et,a)){i.classList.add("hidden");let t=[];s=w(e.value,a.value,t),st.push(s),N(),(t=>{const e=n("projects-list").getElementsByTagName("li");Q(st,`project-list-item-${e.length+1}`),document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","add-project-container")})()}else i.classList.contains("hidden")&&i.classList.remove("hidden"),null!==e.value&&""!==e.value||e.classList.add("empty-input"),null!==a.value&&""!==a.value||a.classList.add("empty-input");var s}))},it=t=>{const e=n(t);e.addEventListener("input",(()=>{e.classList.contains("empty-input")&&e.classList.remove("empty-input")}))},nt=()=>{(t=>{const e=i("div","add-project-container","form-container");s("main",e)})(),(t=>{const e=i("form","add-project-form","form-body");e.setAttribute("action",""),s("add-project-container",e)})(),(t=>{const e=i("div","add-project-header","form-header");s("add-project-form",e);const a=i("span","add-project-header-text","header-text","Add Project");s("add-project-header",a)})(),(t=>{const e=i("div","add-project-inputs","form-inputs");s("add-project-form",e);const a=i("div","add-project-name-field","project-name-input-field");s("add-project-inputs",a);const n=i("label","add-project-name-label",null,"Project Name");s("add-project-name-field",n),n.htmlFor="add-project-name-input";const r=i("input","add-project-name-input","form-input");r.type="text",r.placeholder="Enter your new project's name",s("add-project-name-field",r);const o=i("div","add-project-desc-field","project-desc-input-field");s("add-project-inputs",o);const d=i("label","add-project-desc-label",null,"Project Description");s("add-project-desc-field",d),d.htmlFor="add-project-desc-textarea";const c=i("textarea","add-project-desc-input","form-textarea");c.placeholder="Enter your new project's description",s("add-project-desc-field",c);const l=i("div","add-project-err-msg","err-msg","Please fill out the empty field(s).");l.classList.add("hidden"),s("add-project-inputs",l)})(),(t=>{const e=i("div","add-project-controls","form-controls");s("add-project-form",e);const a=i("button","save-project-btn",null,"Save");s("add-project-controls",a);const n=i("button","cancel-project-btn",null,"Cancel");s("add-project-controls",n)})(),it("add-project-name-input"),it("add-project-desc-input"),at(),n("cancel-project-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.remove("inactive","blurred"),document.getElementById("center-panel").classList.remove("inactive","blurred"),r("main","add-project-container")}))};(t=>{const e=i("header","header");s("content",e);const a=i("span","header-icon",null,"✔️");s("header",a);const n=i("h1","header-content",null,"ToDo List");s("header",n)})(),(t=>{const e=i("main","main");s("content",e)})(),(t=>{const e=i("div","side-panel");s("main",e)})(),(t=>{const e=i("div","center-panel");s("main",e)})(),(t=>{const e=i("footer","footer");(t=>{const e=document.createElement("div");e.setAttribute("id","signature");const a=document.createElement("span");a.textContent="Made with ";const i=document.createElement("span");i.setAttribute("id","red-heart"),i.classList.add("emoji"),i.innerHTML="&#x2764";const n=document.createElement("span");n.textContent=" & ";const s=document.createElement("span");s.setAttribute("id","coffee-cup"),s.classList.add("emoji"),s.innerHTML="&#x2615";const r=document.createElement("span");r.textContent=" by ";const o=document.createElement("a");o.setAttribute("href","https://github.com/arndzk"),o.innerHTML="arndzk",e.appendChild(a),e.appendChild(i),e.appendChild(n),e.appendChild(s),e.appendChild(r),e.appendChild(o),t.appendChild(e)})(e),s("content",e)})(),(t=>{const e=i("div","projects-header",null,"Projects");s("side-panel",e)})(),(t=>{const e=i("div","projects-controls");s("projects-header",e);const a=i("button","add-project-btn","btn","Add Project");s("projects-controls",a)})(),(t=>{const e=i("div","projects-list-container");s("side-panel",e);const a=i("ul","projects-list");s("projects-list-container",a)})(),n("add-project-btn").addEventListener("click",(()=>{document.getElementById("side-panel").classList.add("inactive","blurred"),document.getElementById("center-panel").classList.add("inactive","blurred"),nt()})),(t=>{const e=i("div","project-header");s("center-panel",e);const a=i("div","project-data-container");s("project-header",a);const n=i("div","project-title");s("project-data-container",n);const r=i("div","project-desc");s("project-data-container",r)})(),(t=>{const e=i("div","task-list-container"),a=i("ul","task-list");s("center-panel",e),s("task-list-container",a)})(),(t=>{const e=i("div","task-list-controls"),a=i("button","add-task-btn","btn","Add Task");s("project-header",e),s("task-list-controls",a)})();let st=[];(t=>{const e=JSON.parse(localStorage.getItem("projects")||"[]");0===e.length?localStorage.setItem("projects",JSON.stringify(e)):e.forEach((e=>{const a=[];e.tasks.forEach((t=>{a.push(C(t.name,t.desc,t.dueDate,t.priority,t.isDone))})),t.push(w(e.name,e.desc,a))}))})(st),Q(st,"project-list-item-1")}},e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(55)})();