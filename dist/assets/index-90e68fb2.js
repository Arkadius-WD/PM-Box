(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Be=()=>{const e=document.querySelector(".lower-beam"),t=document.querySelector(".logo"),n=document.querySelector(".talks"),r=document.querySelector(".envelope__inside"),o=document.querySelector(".main-container"),s=()=>{e.classList.toggle("beam-hidden"),o.classList.toggle("main-transform")},i=()=>{n.classList.toggle("talks-hidden")};t.addEventListener("click",s),r.addEventListener("click",i)};function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:me}=Object.prototype,{getPrototypeOf:Q}=Object,Y=(e=>t=>{const n=me.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Y(t)===e),q=e=>t=>typeof t===e,{isArray:P}=Array,D=q("undefined");function je(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=A("ArrayBuffer");function ke(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const Ie=q("string"),T=q("function"),we=q("number"),Z=e=>e!==null&&typeof e=="object",qe=e=>e===!0||e===!1,U=e=>{if(Y(e)!=="object")return!1;const t=Q(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},He=A("Date"),Me=A("File"),ze=A("Blob"),Je=A("FileList"),Ve=e=>Z(e)&&T(e.pipe),$e=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||me.call(e)===t||T(e.toString)&&e.toString()===t)},We=A("URLSearchParams"),Ke=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],t.call(null,e[u],u,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Se=e=>!D(e)&&e!==be;function K(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ee(t,o)||o;U(t[s])&&U(r)?t[s]=K(t[s],r):U(r)?t[s]=K({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&L(arguments[r],n);return t}const ve=(e,t,n,{allOwnKeys:r}={})=>(L(t,(o,s)=>{n&&T(o)?e[s]=he(o,n):e[s]=o},{allOwnKeys:r}),e),Ge=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xe=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qe=(e,t,n,r)=>{let o,s,i;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&Q(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ye=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ze=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!we(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Q(Uint8Array)),tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rt=A("HTMLFormElement"),ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),st=A("RegExp"),Oe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},it=e=>{Oe(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},at=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},ct=()=>{},ut=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",se="0123456789",Re={DIGIT:se,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+se},lt=(e=16,t=Re.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ft(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const dt=e=>{const t=new Array(10),n=(r,o)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return L(r,(i,u)=>{const d=n(i,o+1);!D(d)&&(s[u]=d)}),t[o]=void 0,s}}return r};return n(e,0)},a={isArray:P,isArrayBuffer:ye,isBuffer:je,isFormData:$e,isArrayBufferView:ke,isString:Ie,isNumber:we,isBoolean:qe,isObject:Z,isPlainObject:U,isUndefined:D,isDate:He,isFile:Me,isBlob:ze,isRegExp:st,isFunction:T,isStream:Ve,isURLSearchParams:We,isTypedArray:et,isFileList:Je,forEach:L,merge:K,extend:ve,trim:Ke,stripBOM:Ge,inherits:Xe,toFlatObject:Qe,kindOf:Y,kindOfTest:A,endsWith:Ye,toArray:Ze,forEachEntry:tt,matchAll:nt,isHTMLForm:rt,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Oe,freezeMethods:it,toObjectSet:at,toCamelCase:ot,noop:ct,toFiniteNumber:ut,findKey:Ee,global:be,isContextDefined:Se,ALPHABET:Re,generateString:lt,isSpecCompliantForm:ft,toJSONObject:dt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=m.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ge[e]={value:e}});Object.defineProperties(m,ge);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Ae);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const pt=null;function v(e){return a.isPlainObject(e)||a.isArray(e)}function Te(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(o,s){return o=Te(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function ht(e){return a.isArray(e)&&!e.some(v)}const mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function H(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,O){let b=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&ht(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(b=a.toArray(f)))return h=Te(h),b.forEach(function(F,Ue){!(a.isUndefined(F)||F===null)&&t.append(i===!0?ie([h],Ue,s):i===null?h:h+"[]",c(F))}),!1}return v(f)?!0:(t.append(ie(O,h,s),c(f)),!1)}const p=[],E=Object.assign(mt,{defaultVisitor:l,convertValue:c,isVisitable:v});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(b,N){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(N)?N.trim():N,h,E))===!0&&y(b,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&H(e,this,t)}const Ne=ee.prototype;Ne.append=function(t,n){this._pairs.push([t,n])};Ne.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function yt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,n){if(!t)return e;const r=n&&n.encode||yt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=wt,Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Et=typeof URLSearchParams<"u"?URLSearchParams:ee,bt=typeof FormData<"u"?FormData:null,St=typeof Blob<"u"?Blob:null,Ot=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Rt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Et,FormData:bt,Blob:St},isStandardBrowserEnv:Ot,isStandardBrowserWebWorkerEnv:Rt,protocols:["http","https","file","blob","url","data"]};function At(e,t){return H(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Tt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ce(e){function t(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Tt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(gt(r),o,n,0)}),n}return null}const Nt={"Content-Type":void 0};function xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:Pe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ce(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return At(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return H(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),xt(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){M.headers[t]={}});a.forEach(["post","put","patch"],function(t){M.headers[t]=a.merge(Nt)});const te=M,Pt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ct=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Pt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ue=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function B(e){return e===!1||e==null?e:a.isArray(e)?e.map(B):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Lt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function V(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function _t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ft(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(u,d,c){const l=C(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(o,l);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=B(u))}const i=(u,d)=>a.forEach(u,(c,l)=>s(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Lt(t)?i(Ct(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Dt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||V(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=C(i),i){const u=a.findKey(r,i);u&&(!n||V(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||V(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=B(o),delete n[s];return}const u=t?_t(s):String(s).trim();u!==s&&delete n[s],n[u]=B(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ue]=this[ue]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=C(i);r[u]||(Ft(o,i),r[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const R=z;function $(e,t){const n=this||te,r=t||n,o=R.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function De(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});function Ut(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Bt=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!jt(t)?kt(e,t):t}const It=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,E=0;for(;p!==o;)E+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(E*1e3/y):void 0}}function le(e,t){let n=0;const r=Ht(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,d=r(u),c=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Mt=typeof XMLHttpRequest<"u",zt=Mt&&function(e){return new Promise(function(n,r){let o=e.data;const s=R.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const l=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),xe(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Ut(function(b){n(b),d()},function(b){r(b),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Pe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||It(l))&&e.xsrfCookieName&&Bt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new _(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=qt(l);if(E&&S.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},j={http:pt,xhr:zt};a.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Jt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?j[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function fe(e){return W(e),e.headers=R.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Jt.getAdapter(e.adapter||te.adapter)(e).then(function(r){return W(e),r.data=$.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return De(r)||(W(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const de=e=>e instanceof R?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function s(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>o(de(c),de(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||o,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==u||(n[l]=E)}),n}const _e="1.3.4",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pe={};ne.transitional=function(t,n,r){function o(s,i){return"[Axios v"+_e+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!pe[i]&&(pe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,u):!0}};function Vt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const u=e[s],d=u===void 0||i(u,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const G={assertOptions:Vt,validators:ne},g=G.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&G.assertOptions(r,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1),o!==void 0&&G.assertOptions(o,{encode:g.function,serialize:g.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=R.concat(i,s);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,E;if(!d){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),E=f.length,l=Promise.resolve(n);p<E;)l=l.then(f[p++],f[p++]);return l}E=u.length;let y=n;for(p=0;p<E;){const f=u[p++],h=u[p++];try{y=f(y)}catch(O){h.call(this,O);break}}try{l=fe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=c.length;p<E;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=x(this.defaults,t);const n=Le(t.baseURL,t.url);return xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,u){return this.request(x(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const k=I;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,u){r.reason||(r.reason=new _(s,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(o){t=o}),cancel:t}}}const $t=re;function Wt(e){return function(n){return e.apply(null,n)}}function Kt(e){return a.isObject(e)&&e.isAxiosError===!0}const X={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(X).forEach(([e,t])=>{X[t]=e});const vt=X;function Fe(e){const t=new k(e),n=he(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Fe(x(e,o))},n}const w=Fe(te);w.Axios=k;w.CanceledError=_;w.CancelToken=$t;w.isCancel=De;w.VERSION=_e;w.toFormData=H;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Wt;w.isAxiosError=Kt;w.mergeConfig=x;w.AxiosHeaders=R;w.formToJSON=e=>Ce(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=vt;w.default=w;const Gt=w,Xt=()=>{function e(){const n=new Date,r={month:"short",day:"numeric"},o=new Date;o.setDate(n.getDate()+1);const s=new Date;s.setDate(n.getDate()+2);const i=n.toLocaleDateString("en-US",r),u=o.toLocaleDateString("en-US",r),d=s.toLocaleDateString("en-US",r);document.querySelector(".text-today").textContent=i,document.querySelector(".text-tomorrow").textContent=u,document.querySelector(".text-after").textContent=d}const t=()=>{const n=document.querySelector(".weather__city-input"),r="https://api.openweathermap.org/data/2.5/forecast?q=",o="&appid=8ce19327be3e6730718f881dd238de8b",s="&units=metric";(()=>{const u=n.value||"London",d=r+u+o+s;Gt.get(d).then(c=>console.log(c))})()};e(),t()};window.location.pathname==="dist/home.html"&&(Be(),Xt());