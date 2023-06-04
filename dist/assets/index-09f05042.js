(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const We=()=>{const e=document.querySelector(".start__logo"),t=document.querySelector(".start__login"),n=document.querySelector(".start__btn"),r=document.getElementById("username"),s=document.getElementById("pin"),o="Arkadius",i="12345",a=()=>{t.classList.toggle("login-hidden")},d=()=>{if(r.value===""||i.value===""){r.placeholder="Enter username",r.classList.add("error"),s.placeholder="Enter pin",s.classList.add("error");return}r.value===o&&s.value===i?window.location.href="./home.html":r.value===o?(s.value="",s.placeholder="Invalid pin",s.classList.add("error")):(r.value="",s.value="",r.placeholder="Invalid username",r.classList.add("error"),s.placeholder="Invalid pin",s.classList.add("error"))},l=u=>{u.key==="Enter"&&d()};r.addEventListener("keyup",l),s.addEventListener("keyup",l),e.addEventListener("click",a),n.addEventListener("click",d)},$e=()=>{const e=document.querySelector(".lower-beam"),t=document.querySelector(".logo"),n=document.querySelector(".talks"),r=document.querySelector(".envelope__inside"),s=document.querySelector(".main-container"),o=document.querySelector(".nav__menu-settings"),i=document.querySelector(".nav__settings"),a=document.querySelector(".upper-beam__settings"),d=document.querySelector(".upper-beam__logout"),l=document.querySelector(".upper-beam__admin-avatar"),u=document.querySelector(".upper-beam__admin-menu"),f=document.querySelectorAll(".nav__menu-list li"),m=document.querySelectorAll(".nav__icon");m.forEach((_,L)=>{_.setAttribute("data-id",L)});const y=()=>{const _={};f.forEach((L,S)=>{_[S]=L.querySelector("input").checked}),localStorage.setItem("state",JSON.stringify(_))},p=()=>{const _=JSON.parse(localStorage.getItem("state"));_&&f.forEach((L,S)=>{const P=L.querySelector("input");P.checked=_[S],_[S]||m[S].classList.add("hidden-nav-icon")})};window.addEventListener("load",p),f.forEach((_,L)=>{const S=_.querySelector("input");S.addEventListener("change",()=>{S.checked?m[L].classList.remove("hidden-nav-icon"):m[L].classList.add("hidden-nav-icon"),y(),p()})}),f.forEach((_,L)=>{_.querySelector("input").checked||m[L].classList.add("hidden-nav-icon")}),p();const h=()=>{e.classList.toggle("beam-hidden"),s.classList.toggle("main-transform")},w=()=>{n.classList.toggle("talks-hidden")},b=()=>{o.classList.toggle("menu-settings-active")},O=()=>{d.classList.toggle("logout-active"),a.classList.remove("admin-menu-active")},A=()=>{a.classList.toggle("admin-menu-active"),d.classList.remove("logout-active")};t.addEventListener("click",h),r.addEventListener("click",w),i.addEventListener("click",b),l.addEventListener("click",O),u.addEventListener("click",A)};function be(e,t){return function(){return e.apply(t,arguments)}}const{toString:_e}=Object.prototype,{getPrototypeOf:ne}=Object,re=(e=>t=>{const n=_e.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>re(t)===e),$=e=>t=>typeof t===e,{isArray:D}=Array,q=$("undefined");function ze(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=T("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const Ve=$("string"),v=$("function"),Le=$("number"),se=e=>e!==null&&typeof e=="object",Ke=e=>e===!0||e===!1,U=e=>{if(re(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ge=T("Date"),Xe=T("File"),Qe=T("Blob"),Ye=T("FileList"),Ze=e=>se(e)&&v(e.pipe),et=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||_e.call(e)===t||v(e.toString)&&e.toString()===t)},tt=T("URLSearchParams"),nt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ae=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!q(e)&&e!==Ae;function Y(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Re(t,s)||s;U(t[o])&&U(r)?t[o]=Y(t[o],r):U(r)?t[o]=Y({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const rt=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,o)=>{n&&v(s)?e[o]=be(s,n):e[o]=s},{allOwnKeys:r}),e),st=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},it=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},at=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ct=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),ut=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},dt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ft=T("HTMLFormElement"),pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ht=T("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},mt=e=>{Te(e,(t,n)=>{if(v(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(v(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Et=()=>{},wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",fe="0123456789",xe={DIGIT:fe,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+fe},St=(e=16,t=xe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function gt(e){return!!(e&&v(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bt=e=>{const t=new Array(10),n=(r,s)=>{if(se(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return F(r,(i,a)=>{const d=n(i,s+1);!q(d)&&(o[a]=d)}),t[s]=void 0,o}}return r};return n(e,0)},c={isArray:D,isArrayBuffer:Oe,isBuffer:ze,isFormData:et,isArrayBufferView:Je,isString:Ve,isNumber:Le,isBoolean:Ke,isObject:se,isPlainObject:U,isUndefined:q,isDate:Ge,isFile:Xe,isBlob:Qe,isRegExp:ht,isFunction:v,isStream:Ze,isURLSearchParams:tt,isTypedArray:lt,isFileList:Ye,forEach:F,merge:Y,extend:rt,trim:nt,stripBOM:st,inherits:ot,toFlatObject:it,kindOf:re,kindOfTest:T,endsWith:at,toArray:ct,forEachEntry:ut,matchAll:dt,isHTMLForm:ft,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Te,freezeMethods:mt,toObjectSet:yt,toCamelCase:pt,noop:Et,toFiniteNumber:wt,findKey:Re,global:Ae,isContextDefined:Ce,ALPHABET:xe,generateString:St,isSpecCompliantForm:gt,toJSONObject:bt};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=E.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(E,ke);Object.defineProperty(ve,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return c.toFlatObject(e,i,function(d){return d!==Error.prototype},a=>a!=="isAxiosError"),E.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const _t=null;function Z(e){return c.isPlainObject(e)||c.isArray(e)}function Ne(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ne(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ot(e){return c.isArray(e)&&!e.some(Z)}const Lt=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!c.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(c.isDate(p))return p.toISOString();if(!d&&c.isBlob(p))throw new E("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(p)||c.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,w){let b=p;if(p&&!w&&typeof p=="object"){if(c.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(c.isArray(p)&&Ot(p)||(c.isFileList(p)||c.endsWith(h,"[]"))&&(b=c.toArray(p)))return h=Ne(h),b.forEach(function(A,_){!(c.isUndefined(A)||A===null)&&t.append(i===!0?pe([h],_,o):i===null?h:h+"[]",l(A))}),!1}return Z(p)?!0:(t.append(pe(w,h,o),l(p)),!1)}const f=[],m=Object.assign(Lt,{defaultVisitor:u,convertValue:l,isVisitable:Z});function y(p,h){if(!c.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(p),c.forEach(p,function(b,O){(!(c.isUndefined(b)||b===null)&&s.call(t,b,c.isString(O)?O.trim():O,h,m))===!0&&y(b,h?h.concat(O):[O])}),f.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&z(e,this,t)}const De=oe.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||Rt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=c.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=At,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ct=typeof URLSearchParams<"u"?URLSearchParams:oe,Tt=typeof FormData<"u"?FormData:null,xt=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Ct,FormData:Tt,Blob:xt},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:kt,protocols:["http","https","file","blob","url","data"]};function Nt(e,t){return z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Dt(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Pt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),d=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,d?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=Pt(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(Dt(r),s,n,0)}),n}return null}const Bt={"Content-Type":void 0};function qt(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:Be,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(qe(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nt(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return z(a?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),qt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?E.from(a,E.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){J.headers[t]={}});c.forEach(["post","put","patch"],function(t){J.headers[t]=c.merge(Bt)});const ie=J,Ft=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Ft[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:c.isArray(e)?e.map(M):String(e)}function Ut(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Mt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function G(e,t,n,r,s){if(c.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,d,l){const u=B(d);if(!u)throw new Error("header name must be a non-empty string");const f=c.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||d]=M(a))}const i=(a,d)=>c.forEach(a,(l,u)=>o(l,u,d));return c.isPlainObject(t)||t instanceof this.constructor?i(t,n):c.isString(t)&&(t=t.trim())&&!Mt(t)?i(It(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ut(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const a=c.findKey(r,i);a&&(!n||G(r,r[a],a,n))&&(delete r[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const a=t?jt(o):String(o).trim();a!==o&&delete n[o],n[a]=M(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=B(i);r[a]||(Ht(s,i),r[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.freezeMethods(V.prototype);c.freezeMethods(V);const C=V;function X(e,t){const n=this||ie,r=t||n,s=C.from(r.headers);let o=r.data;return c.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Fe(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(I,E,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $t=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const d=[];d.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),c.isString(o)&&d.push("path="+o),c.isString(i)&&d.push("domain="+i),a===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!zt(t)?Jt(e,t):t}const Vt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=c.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let f=o,m=0;for(;f!==s;)m+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(m*1e3/y):void 0}}function Ee(e,t){let n=0;const r=Gt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,d=r(a),l=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:d||void 0,estimated:d&&i&&l?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Xt=typeof XMLHttpRequest<"u",Qt=Xt&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let a;function d(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}c.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+p))}const u=Ie(e.baseURL,e.url);l.open(e.method.toUpperCase(),Pe(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const y=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Wt(function(b){n(b),d()},function(b){r(b),d()},h),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new E("Request aborted",E.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Be;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new E(p,h.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const y=(e.withCredentials||Vt(u))&&e.xsrfCookieName&&$t.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&c.forEach(o.toJSON(),function(p,h){l.setRequestHeader(h,p)}),c.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{l&&(r(!y||y.type?new I(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const m=Kt(u);if(m&&R.protocols.indexOf(m)===-1){r(new E("Unsupported protocol "+m+":",E.ERR_BAD_REQUEST,e));return}l.send(s||null)})},j={http:_t,xhr:Qt};c.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yt={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=c.isString(n)?j[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!c.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function we(e){return Q(e),e.headers=C.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yt.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Fe(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof C?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(l,u,f){return c.isPlainObject(l)&&c.isPlainObject(u)?c.merge.call({caseless:f},l,u):c.isPlainObject(u)?c.merge({},u):c.isArray(u)?u.slice():u}function s(l,u,f){if(c.isUndefined(u)){if(!c.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function o(l,u){if(!c.isUndefined(u))return r(void 0,u)}function i(l,u){if(c.isUndefined(u)){if(!c.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,u)=>s(Se(l),Se(u),!0)};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const f=d[u]||s,m=f(e[u],t[u],u);c.isUndefined(m)&&f!==a||(n[u]=m)}),n}const Ue="1.3.4",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ue+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function Zt(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],d=a===void 0||i(a,o,e);if(d!==!0)throw new E("option "+o+" must be "+d,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const ee={assertOptions:Zt,validators:ae},x=ee.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!==void 0&&ee.assertOptions(s,{encode:x.function,serialize:x.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&c.merge(o.common,o[n.method]),i&&c.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const a=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,a.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,f=0,m;if(!d){const p=[we.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),m=p.length,u=Promise.resolve(n);f<m;)u=u.then(p[f++],p[f++]);return u}m=a.length;let y=n;for(f=0;f<m;){const p=a[f++],h=a[f++];try{y=p(y)}catch(w){h.call(this,w);break}}try{u=we.call(this,y)}catch(p){return Promise.reject(p)}for(f=0,m=l.length;f<m;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=N(this.defaults,t);const n=Ie(t.baseURL,t.url);return Pe(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(N(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const H=W;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new I(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}const en=ce;function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return c.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const rn=te;function Me(e){const t=new H(e),n=be(H.prototype.request,t);return c.extend(n,H.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(N(e,s))},n}const g=Me(ie);g.Axios=H;g.CanceledError=I;g.CancelToken=en;g.isCancel=Fe;g.VERSION=Ue;g.toFormData=z;g.AxiosError=E;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=tn;g.isAxiosError=nn;g.mergeConfig=N;g.AxiosHeaders=C;g.formToJSON=e=>qe(c.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=rn;g.default=g;const sn=g,on=""+new URL("Clouds-e0a15d51.png",import.meta.url).href,an=""+new URL("Drizzle-ef5d4915.png",import.meta.url).href,cn=""+new URL("Snow-8204e697.png",import.meta.url).href,ln=""+new URL("Rain-89fb16f0.png",import.meta.url).href,un=""+new URL("Clear-c7db2cee.png",import.meta.url).href,dn=""+new URL("Thunderstorm-c93700c4.png",import.meta.url).href,fn={Clear:un,Clouds:on,Drizzle:an,Snow:cn,Rain:ln,Thunderstorm:dn},pn=()=>{const e=document.querySelector(".weather__days"),t=document.querySelector(".weather__city-input"),n=document.querySelector(".weather__button"),r=document.querySelector(".weather__localisation"),s=document.querySelector(".fa-location-dot"),o={month:"short",day:"numeric"},i=[],a=()=>{for(let f=0;f<5;f++){const m=document.createElement("div");m.classList.add("weather__day"),m.setAttribute("id",`weather__day-${f}`),m.innerHTML=`
        <p class="text-day"></p>
        <img src="" alt="weather icon" />
        <div class="weather__day-temperature">
          <p class="temp"></p>
        </div>
      `,e.appendChild(m),i.push(m)}},d=(f,m)=>{const{date:y,status:p,temp:h}=m;f.querySelector(".text-day").textContent=y,f.querySelector("img").setAttribute("src",fn[p]),f.querySelector(".temp").textContent=`${h}°C`},l=()=>{const m=`https://api.openweathermap.org/data/2.5/forecast?q=${t.value||"Katowice"}&appid=8ce19327be3e6730718f881dd238de8b&units=metric`;sn.get(m).then(y=>{r.textContent=y.data.city.name,r.style.color="#333f50",s.style.color="#333f50";for(let p=0;p<5;p++){const h=new Date;h.setDate(h.getDate()+p);const w=h.toLocaleDateString("en-US",o),b=Math.floor(y.data.list[p*8].main.temp),O=y.data.list[p*8].weather[0].main;d(i[p],{date:w,status:O,temp:b})}t.value=""}).catch(y=>{console.error(y),r.textContent="Valid name",r.style.color="#e43666",s.style.color="#e43666"})};a(),l();const u=f=>{f.key==="Enter"&&l()};t.addEventListener("keyup",u),n.addEventListener("click",l)},hn=()=>{const t=(i,a)=>new Date(i.getTime()+a*864e5),n=i=>{const a=i.getDay();return a===0?6:a-1},r=i=>`${i.getFullYear()}-${(i.getMonth()+1).toString().padStart(2,"0")}-${i.getDate().toString().padStart(2,"0")}`,s={VIEW:1,UPDATE:2,CREATE:3};class o{constructor(){this.weekStart=null,this.weekEnd=null,this.weekOffSet=0,this.mode=s.VIEW}setup(){this.setupTimes(),this.setupDays(),this.calculateCurrentWeek(),this.showWeek(),this.setupControls()}setupTimes(){const a=document.createElement("div"),d=document.createElement("div");a.classList.add("calendar__column-header"),d.classList.add("calendar__slots");for(let u=0;u<24;u++){const f=document.createElement("div");f.setAttribute("data-hour",u),f.classList.add("calendar__time"),f.textContent=`${u}:00 - ${u+1}:00`,d.appendChild(f)}const l=document.querySelector(".calendar__days-time");l.appendChild(a),l.appendChild(d)}setupDays(){document.querySelectorAll(".calendar__day").forEach(d=>{const l=parseInt(d.getAttribute("data-dayIndex"),10),u=d.getAttribute("data-name"),f=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div");f.classList.add("calendar__column-header"),f.textContent=u,m.classList.add("calendar__slots"),y.classList.add("dayDisplay");for(let p=0;p<24;p++){const h=this,w=document.createElement("div");w.setAttribute("data-hour",p),w.classList.add("calendar__slot"),w.addEventListener("click",()=>h.clickSlot(p,l)),w.addEventListener("mouseover",()=>h.hoverOver(p)),w.addEventListener("mouseout",()=>h.hoverOut()),m.appendChild(w)}d.appendChild(f),d.appendChild(m),f.appendChild(y)})}clickSlot(a,d){if(this.mode!==s.VIEW)return;this.mode=s.CREATE;const l=`${a.toString().padStart(2,"0")}:00`,u=a<23?`${(a+1).toString().padStart(2,"0")}:00`:`${a.toString().padStart(2,"0")}:59`,f=r(t(this.weekStart,d)),m={start:l,end:u,date:f,title:"",description:"",color:"red"};this.openModal(m)}openModal(a){const d=document.querySelector(".calendar__window"),l=document.querySelector(".event-modal"),u=document.querySelector(".event-modal__header"),f=document.querySelector(".event-modal__title"),m=document.querySelector(".event-modal__date"),y=document.querySelector(".event-modal__start"),p=document.querySelector(".event-modal__end"),h=document.querySelector(".event-modal__description"),w=document.querySelectorAll(".event-modal__color"),b=document.getElementById("submitButton"),O=document.getElementById("deleteButton"),A=document.getElementById("copyButton");f.value=a.title,m.value=a.date,y.value=a.start,p.value=a.end,h.value=a.description,w.dataset=a.color;const _=w[0];w.forEach(S=>{S&&(S.addEventListener("blur",()=>{S.classList.remove("active")}),S.addEventListener("focus",()=>{S.classList.add("active"),_.classList.remove("active")}))}),u.textContent=this.mode===s.CREATE?"Create a new event":"Update your event",l.style.display="block",this.mode===s.UPDATE?(b.value="Update",O.style.display="block",document.getElementById("deleteButton").addEventListener("click",()=>{console.log("delete event",a)}),A.addEventListener("click",()=>{console.log("copy event",a)})):this.mode===s.CREATE&&(b.value="Create",O.style.display="none",A.style.display="none"),((S,P)=>{const je=performance.now();S.style.opacity=0;const le=He=>{const ue=He-je;S.style.opacity=ue/P,ue<P&&requestAnimationFrame(le)};requestAnimationFrame(le)})(l,200),f.focus(),d.classList.add("opaque"),_.classList.add("active"),l.addEventListener("submit",S=>{S.preventDefault(),console.log("submit event",a)})}closeModal(){const a=document.querySelector(".calendar__window"),d=document.querySelector(".event-modal"),l=document.querySelector(".event-modal__errors");((f,m)=>{f.style.opacity="0",setTimeout(()=>{f.style.display="none"},m)})(d,200),l.textContent="",a.classList.remove("opaque"),this.mode=s.VIEW}hoverOver(a){document.querySelector(`.calendar__time[data-hour="${a}"]`).classList.add("currentTime")}hoverOut(){document.querySelector(".calendar__time.currentTime").classList.remove("currentTime")}calculateCurrentWeek(){const a=new Date;this.weekStart=t(a,-n(a)),this.weekEnd=t(this.weekStart,6)}showWeek(){const a={month:"2-digit",day:"2-digit",year:"numeric"};document.querySelector(".week__start-display").textContent=this.weekStart.toLocaleDateString(void 0,a),document.querySelector(".week__end-display").textContent=this.weekEnd.toLocaleDateString(void 0,a);for(let d=0;d<7;d++){const u=t(this.weekStart,d).toLocaleDateString(void 0,{month:"2-digit",day:"2-digit"}),f=document.querySelector(`.calendar__day[data-dayIndex="${d}"] .dayDisplay`);f.textContent=u}this.weekOffSet===0?this.setCurrentDay(!0):this.setCurrentDay(!1)}setupControls(){const a=document.querySelector(".week-controls__btn-next"),d=document.querySelector(".week-controls__btn-prev"),l=document.getElementById("cancelButton");a.addEventListener("click",()=>this.changeWeek(1)),d.addEventListener("click",()=>this.changeWeek(-1)),l.addEventListener("click",()=>this.closeModal())}changeWeek(a){this.weekOffSet+=a,this.weekStart=t(this.weekStart,7*a),this.weekEnd=t(this.weekEnd,7*a),this.showWeek()}setCurrentDay(a){const d=new Date,l=n(d),u=document.querySelector(`.calendar__day[data-dayIndex="${l}"]`);a?u.classList.add("currentDay"):u.classList.remove("currentDay")}}document.addEventListener("DOMContentLoaded",()=>{new o().setup()})},k=window.location.pathname;k.endsWith("/")||k.endsWith("index.html")||$e();k.endsWith("/")||k.endsWith("index.html")?We():k.endsWith("home.html")?pn():k.endsWith("calendar.html")&&hn();
