var gg=t=>{throw TypeError(t)};var _d=(t,e,n)=>e.has(t)||gg("Cannot "+n);var D=(t,e,n)=>(_d(t,e,"read from private field"),n?n.call(t):e.get(t)),Ce=(t,e,n)=>e.has(t)?gg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),_e=(t,e,n,i)=>(_d(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Ge=(t,e,n)=>(_d(t,e,"access private method"),n);var Gl=(t,e,n,i)=>({set _(r){_e(t,e,r,n)},get _(){return D(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sv={exports:{}},Wc={},Mv={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),oM=Symbol.for("react.portal"),lM=Symbol.for("react.fragment"),uM=Symbol.for("react.strict_mode"),cM=Symbol.for("react.profiler"),dM=Symbol.for("react.provider"),fM=Symbol.for("react.context"),hM=Symbol.for("react.forward_ref"),pM=Symbol.for("react.suspense"),mM=Symbol.for("react.memo"),gM=Symbol.for("react.lazy"),_g=Symbol.iterator;function _M(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,Tv={};function mo(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=mo.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}var Bp=kp.prototype=new bv;Bp.constructor=kp;wv(Bp,mo.prototype);Bp.isPureReactComponent=!0;var vg=Array.isArray,Av=Object.prototype.hasOwnProperty,zp={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function Rv(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Av.call(e,i)&&!Cv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ll,type:t,key:s,ref:a,props:r,_owner:zp.current}}function vM(t,e){return{$$typeof:Ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ll}function xM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xg=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xM(""+t.key):e.toString(36)}function Bu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ll:case oM:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vd(a,0):i,vg(r)?(n="",t!=null&&(n=t.replace(xg,"$&/")+"/"),Bu(r,e,n,"",function(u){return u})):r!=null&&(Hp(r)&&(r=vM(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vd(s,o);a+=Bu(s,e,n,l,r)}else if(l=_M(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vd(s,o++),a+=Bu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function jl(t,e,n){if(t==null)return t;var i=[],r=0;return Bu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},zu={transition:null},SM={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:zu,ReactCurrentOwner:zp};function Pv(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:jl,forEach:function(t,e,n){jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jl(t,function(){e++}),e},toArray:function(t){return jl(t,function(e){return e})||[]},only:function(t){if(!Hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=mo;Ye.Fragment=lM;Ye.Profiler=cM;Ye.PureComponent=kp;Ye.StrictMode=uM;Ye.Suspense=pM;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SM;Ye.act=Pv;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wv({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=zp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Av.call(e,l)&&!Cv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ll,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:fM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dM,_context:t},t.Consumer=t};Ye.createElement=Rv;Ye.createFactory=function(t){var e=Rv.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:hM,render:t}};Ye.isValidElement=Hp;Ye.lazy=function(t){return{$$typeof:gM,_payload:{_status:-1,_result:t},_init:yM}};Ye.memo=function(t,e){return{$$typeof:mM,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=zu.transition;zu.transition={};try{t()}finally{zu.transition=e}};Ye.unstable_act=Pv;Ye.useCallback=function(t,e){return En.current.useCallback(t,e)};Ye.useContext=function(t){return En.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return En.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return En.current.useEffect(t,e)};Ye.useId=function(){return En.current.useId()};Ye.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return En.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};Ye.useRef=function(t){return En.current.useRef(t)};Ye.useState=function(t){return En.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return En.current.useTransition()};Ye.version="18.3.1";Mv.exports=Ye;var Pe=Mv.exports;const Dv=yv(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MM=Pe,EM=Symbol.for("react.element"),wM=Symbol.for("react.fragment"),TM=Object.prototype.hasOwnProperty,bM=MM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AM={key:!0,ref:!0,__self:!0,__source:!0};function Nv(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)TM.call(e,i)&&!AM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:EM,type:t,key:s,ref:a,props:r,_owner:bM.current}}Wc.Fragment=wM;Wc.jsx=Nv;Wc.jsxs=Nv;Sv.exports=Wc;var E=Sv.exports,Lf={},Lv={exports:{}},Yn={},Iv={exports:{}},Uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var ee=B.length;B.push(q);e:for(;0<ee;){var oe=ee-1>>>1,he=B[oe];if(0<r(he,q))B[oe]=q,B[ee]=he,ee=oe;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],ee=B.pop();if(ee!==q){B[0]=ee;e:for(var oe=0,he=B.length,Xe=he>>>1;oe<Xe;){var Ke=2*(oe+1)-1,Ue=B[Ke],Q=Ke+1,fe=B[Q];if(0>r(Ue,ee))Q<he&&0>r(fe,Ue)?(B[oe]=fe,B[Q]=ee,oe=Q):(B[oe]=Ue,B[Ke]=ee,oe=Ke);else if(Q<he&&0>r(fe,ee))B[oe]=fe,B[Q]=ee,oe=Q;else break e}}return q}function r(B,q){var ee=B.sortIndex-q.sortIndex;return ee!==0?ee:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,f=null,d=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=B)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function S(B){if(y=!1,v(B),!_)if(n(l)!==null)_=!0,j(b);else{var q=n(u);q!==null&&H(S,q.startTime-B)}}function b(B,q){_=!1,y&&(y=!1,c(x),x=-1),p=!0;var ee=d;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||B&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var he=oe(f.expirationTime<=q);q=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var Xe=!0;else{var Ke=n(u);Ke!==null&&H(S,Ke.startTime-q),Xe=!1}return Xe}finally{f=null,d=ee,p=!1}}var T=!1,R=null,x=-1,C=5,N=-1;function P(){return!(t.unstable_now()-N<C)}function k(){if(R!==null){var B=t.unstable_now();N=B;var q=!0;try{q=R(!0,B)}finally{q?X():(T=!1,R=null)}}else T=!1}var X;if(typeof m=="function")X=function(){m(k)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,I=Y.port2;Y.port1.onmessage=k,X=function(){I.postMessage(null)}}else X=function(){g(k,0)};function j(B){R=B,T||(T=!0,X())}function H(B,q){x=g(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,j(b))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var ee=d;d=q;try{return B()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=d;d=B;try{return q()}finally{d=ee}},t.unstable_scheduleCallback=function(B,q,ee){var oe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,B={id:h++,callback:q,priorityLevel:B,startTime:ee,expirationTime:he,sortIndex:-1},ee>oe?(B.sortIndex=ee,e(u,B),n(l)===null&&B===n(u)&&(y?(c(x),x=-1):y=!0,H(S,ee-oe))):(B.sortIndex=he,e(l,B),_||p||(_=!0,j(b))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var q=d;return function(){var ee=d;d=q;try{return B.apply(this,arguments)}finally{d=ee}}}})(Uv);Iv.exports=Uv;var CM=Iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RM=Pe,$n=CM;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fv=new Set,sl={};function Ws(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(sl[t]=e,t=0;t<e.length;t++)Fv.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=Object.prototype.hasOwnProperty,PM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},Sg={};function DM(t){return If.call(Sg,t)?!0:If.call(yg,t)?!1:PM.test(t)?Sg[t]=!0:(yg[t]=!0,!1)}function NM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LM(t,e,n,i){if(e===null||typeof e>"u"||NM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jp(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LM(e,n,r,i)&&(n=null),i||r===null?DM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=RM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),va=Symbol.for("react.portal"),xa=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),Mg=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,xd;function Bo(t){if(xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xd=e&&e[1]||""}return`
`+xd+t}var yd=!1;function Sd(t,e){if(!t||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function IM(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function kf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xa:return"Fragment";case va:return"Portal";case Uf:return"Profiler";case Wp:return"StrictMode";case Ff:return"Suspense";case Of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:kf(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return kf(t(e))}catch{}}return null}function UM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FM(t){var e=zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=FM(t))}function Hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=zv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bf(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vv(t,e){e=e.checked,e!=null&&jp(t,"checked",e,!1)}function zf(t,e){Vv(t,e);var n=ts(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Na(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(zo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function Gv(t,e){var n=ts(e.value),i=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ql,Wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OM=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){OM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function Xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kM=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(kM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function $p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,La=null,Ia=null;function Ag(t){if(t=Fl(t)){if(typeof qf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Kc(e),qf(t.stateNode,t.type,e))}}function $v(t){La?Ia?Ia.push(t):Ia=[t]:La=t}function Yv(){if(La){var t=La,e=Ia;if(Ia=La=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function Kv(t,e){return t(e)}function Qv(){}var Md=!1;function Zv(t,e,n){if(Md)return t(e,n);Md=!0;try{return Kv(t,e,n)}finally{Md=!1,(La!==null||Ia!==null)&&(Qv(),Yv())}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var $f=!1;if(cr)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){$f=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{$f=!1}function BM(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var $o=!1,uc=null,cc=!1,Yf=null,zM={onError:function(t){$o=!0,uc=t}};function HM(t,e,n,i,r,s,a,o,l){$o=!1,uc=null,BM.apply(zM,arguments)}function VM(t,e,n,i,r,s,a,o,l){if(HM.apply(this,arguments),$o){if($o){var u=uc;$o=!1,uc=null}else throw Error(ie(198));cc||(cc=!0,Yf=u)}}function Xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(Xs(t)!==t)throw Error(ie(188))}function GM(t){var e=t.alternate;if(!e){if(e=Xs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cg(r),t;if(s===i)return Cg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function ex(t){return t=GM(t),t!==null?tx(t):null}function tx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tx(t);if(e!==null)return e;t=t.sibling}return null}var nx=$n.unstable_scheduleCallback,Rg=$n.unstable_cancelCallback,jM=$n.unstable_shouldYield,WM=$n.unstable_requestPaint,kt=$n.unstable_now,XM=$n.unstable_getCurrentPriorityLevel,Yp=$n.unstable_ImmediatePriority,ix=$n.unstable_UserBlockingPriority,dc=$n.unstable_NormalPriority,qM=$n.unstable_LowPriority,rx=$n.unstable_IdlePriority,Xc=null,Fi=null;function $M(t){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:QM,YM=Math.log,KM=Math.LN2;function QM(t){return t>>>=0,t===0?32:31-(YM(t)/KM|0)|0}var $l=64,Yl=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ho(o):(s&=a,s!==0&&(i=Ho(s)))}else a=n&~r,a!==0?i=Ho(a):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-xi(e),r=1<<n,i|=t[n],e&=~r;return i}function ZM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-xi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ZM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sx(){var t=$l;return $l<<=1,!($l&4194240)&&($l=64),t}function Ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xi(e),t[e]=n}function eE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-xi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function ax(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ox,Qp,lx,ux,cx,Qf=!1,Kl=[],Xr=null,qr=null,$r=null,ll=new Map,ul=new Map,Dr=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function nE(t,e,n,i,r){switch(e){case"focusin":return Xr=Eo(Xr,t,e,n,i,r),!0;case"dragenter":return qr=Eo(qr,t,e,n,i,r),!0;case"mouseover":return $r=Eo($r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ll.set(s,Eo(ll.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ul.set(s,Eo(ul.get(s)||null,t,e,n,i,r)),!0}return!1}function dx(t){var e=ys(t.target);if(e!==null){var n=Xs(e);if(n!==null){if(e=n.tag,e===13){if(e=Jv(n),e!==null){t.blockedOn=e,cx(t.priority,function(){lx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xf=i,n.target.dispatchEvent(i),Xf=null}else return e=Fl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Dg(t,e,n){Hu(t)&&n.delete(e)}function iE(){Qf=!1,Xr!==null&&Hu(Xr)&&(Xr=null),qr!==null&&Hu(qr)&&(qr=null),$r!==null&&Hu($r)&&($r=null),ll.forEach(Dg),ul.forEach(Dg)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,iE)))}function cl(t){function e(r){return wo(r,t)}if(0<Kl.length){wo(Kl[0],t);for(var n=1;n<Kl.length;n++){var i=Kl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xr!==null&&wo(Xr,t),qr!==null&&wo(qr,t),$r!==null&&wo($r,t),ll.forEach(e),ul.forEach(e),n=0;n<Dr.length;n++)i=Dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)dx(n),n.blockedOn===null&&Dr.shift()}var Ua=gr.ReactCurrentBatchConfig,hc=!0;function rE(t,e,n,i){var r=ut,s=Ua.transition;Ua.transition=null;try{ut=1,Zp(t,e,n,i)}finally{ut=r,Ua.transition=s}}function sE(t,e,n,i){var r=ut,s=Ua.transition;Ua.transition=null;try{ut=4,Zp(t,e,n,i)}finally{ut=r,Ua.transition=s}}function Zp(t,e,n,i){if(hc){var r=Zf(t,e,n,i);if(r===null)Ld(t,e,i,pc,n),Pg(t,i);else if(nE(r,t,e,n,i))i.stopPropagation();else if(Pg(t,i),e&4&&-1<tE.indexOf(t)){for(;r!==null;){var s=Fl(r);if(s!==null&&ox(s),s=Zf(t,e,n,i),s===null&&Ld(t,e,i,pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ld(t,e,i,null,n)}}var pc=null;function Zf(t,e,n,i){if(pc=null,t=$p(i),t=ys(t),t!==null)if(e=Xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function fx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XM()){case Yp:return 1;case ix:return 4;case dc:case qM:return 16;case rx:return 536870912;default:return 16}default:return 16}}var Gr=null,Jp=null,Vu=null;function hx(){if(Vu)return Vu;var t,e=Jp,n=e.length,i,r="value"in Gr?Gr.value:Gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vu=r.slice(t,1<i?1-i:void 0)}function Gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ql(){return!0}function Ng(){return!1}function Kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ql:Ng,this.isPropagationStopped=Ng,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},em=Kn(go),Ul=Rt({},go,{view:0,detail:0}),aE=Kn(Ul),wd,Td,To,qc=Rt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(wd=t.screenX-To.screenX,Td=t.screenY-To.screenY):Td=wd=0,To=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Td}}),Lg=Kn(qc),oE=Rt({},qc,{dataTransfer:0}),lE=Kn(oE),uE=Rt({},Ul,{relatedTarget:0}),bd=Kn(uE),cE=Rt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),dE=Kn(cE),fE=Rt({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hE=Kn(fE),pE=Rt({},go,{data:0}),Ig=Kn(pE),mE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_E[t])?!!e[t]:!1}function tm(){return vE}var xE=Rt({},Ul,{key:function(t){if(t.key){var e=mE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tm,charCode:function(t){return t.type==="keypress"?Gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yE=Kn(xE),SE=Rt({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Kn(SE),ME=Rt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tm}),EE=Kn(ME),wE=Rt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),TE=Kn(wE),bE=Rt({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AE=Kn(bE),CE=[9,13,27,32],nm=cr&&"CompositionEvent"in window,Yo=null;cr&&"documentMode"in document&&(Yo=document.documentMode);var RE=cr&&"TextEvent"in window&&!Yo,px=cr&&(!nm||Yo&&8<Yo&&11>=Yo),Fg=" ",Og=!1;function mx(t,e){switch(t){case"keyup":return CE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ya=!1;function PE(t,e){switch(t){case"compositionend":return gx(e);case"keypress":return e.which!==32?null:(Og=!0,Fg);case"textInput":return t=e.data,t===Fg&&Og?null:t;default:return null}}function DE(t,e){if(ya)return t==="compositionend"||!nm&&mx(t,e)?(t=hx(),Vu=Jp=Gr=null,ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return px&&e.locale!=="ko"?null:e.data;default:return null}}var NE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NE[t.type]:e==="textarea"}function _x(t,e,n,i){$v(i),e=mc(e,"onChange"),0<e.length&&(n=new em("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ko=null,dl=null;function LE(t){Cx(t,0)}function $c(t){var e=Ea(t);if(Hv(e))return t}function IE(t,e){if(t==="change")return e}var vx=!1;if(cr){var Ad;if(cr){var Cd="oninput"in document;if(!Cd){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),Cd=typeof Bg.oninput=="function"}Ad=Cd}else Ad=!1;vx=Ad&&(!document.documentMode||9<document.documentMode)}function zg(){Ko&&(Ko.detachEvent("onpropertychange",xx),dl=Ko=null)}function xx(t){if(t.propertyName==="value"&&$c(dl)){var e=[];_x(e,dl,t,$p(t)),Zv(LE,e)}}function UE(t,e,n){t==="focusin"?(zg(),Ko=e,dl=n,Ko.attachEvent("onpropertychange",xx)):t==="focusout"&&zg()}function FE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(dl)}function OE(t,e){if(t==="click")return $c(e)}function kE(t,e){if(t==="input"||t==="change")return $c(e)}function BE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mi=typeof Object.is=="function"?Object.is:BE;function fl(t,e){if(Mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!If.call(e,r)||!Mi(t[r],e[r]))return!1}return!0}function Hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,e){var n=Hg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sx(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zE(t){var e=Sx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yx(n.ownerDocument.documentElement,n)){if(i!==null&&im(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vg(n,s);var a=Vg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HE=cr&&"documentMode"in document&&11>=document.documentMode,Sa=null,Jf=null,Qo=null,eh=!1;function Gg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eh||Sa==null||Sa!==lc(i)||(i=Sa,"selectionStart"in i&&im(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&fl(Qo,i)||(Qo=i,i=mc(Jf,"onSelect"),0<i.length&&(e=new em("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Sa)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ma={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Rd={},Mx={};cr&&(Mx=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Yc(t){if(Rd[t])return Rd[t];if(!Ma[t])return t;var e=Ma[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mx)return Rd[t]=e[n];return t}var Ex=Yc("animationend"),wx=Yc("animationiteration"),Tx=Yc("animationstart"),bx=Yc("transitionend"),Ax=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(t,e){Ax.set(t,e),Ws(e,[t])}for(var Pd=0;Pd<jg.length;Pd++){var Dd=jg[Pd],VE=Dd.toLowerCase(),GE=Dd[0].toUpperCase()+Dd.slice(1);as(VE,"on"+GE)}as(Ex,"onAnimationEnd");as(wx,"onAnimationIteration");as(Tx,"onAnimationStart");as("dblclick","onDoubleClick");as("focusin","onFocus");as("focusout","onBlur");as(bx,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Wg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,VM(i,e,void 0,t),t.currentTarget=null}function Cx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,o,u),s=l}}}if(cc)throw t=Yf,cc=!1,Yf=null,t}function St(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var i=t+"__bubble";n.has(i)||(Rx(e,t,2,!1),n.add(i))}function Nd(t,e,n){var i=0;e&&(i|=4),Rx(n,t,i,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function hl(t){if(!t[Jl]){t[Jl]=!0,Fv.forEach(function(n){n!=="selectionchange"&&(jE.has(n)||Nd(n,!1,t),Nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,Nd("selectionchange",!1,e))}}function Rx(t,e,n,i){switch(fx(e)){case 1:var r=rE;break;case 4:r=sE;break;default:r=Zp}n=r.bind(null,e,n,t),r=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ld(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ys(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Zv(function(){var u=s,h=$p(n),f=[];e:{var d=Ax.get(t);if(d!==void 0){var p=em,_=t;switch(t){case"keypress":if(Gu(n)===0)break e;case"keydown":case"keyup":p=yE;break;case"focusin":_="focus",p=bd;break;case"focusout":_="blur",p=bd;break;case"beforeblur":case"afterblur":p=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=EE;break;case Ex:case wx:case Tx:p=dE;break;case bx:p=TE;break;case"scroll":p=aE;break;case"wheel":p=AE;break;case"copy":case"cut":case"paste":p=hE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ug}var y=(e&4)!==0,g=!y&&t==="scroll",c=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,c!==null&&(S=ol(m,c),S!=null&&y.push(pl(m,S,v)))),g)break;m=m.return}0<y.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Xf&&(_=n.relatedTarget||n.fromElement)&&(ys(_)||_[dr]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?ys(_):null,_!==null&&(g=Xs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Lg,S="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ug,S="onPointerLeave",c="onPointerEnter",m="pointer"),g=p==null?d:Ea(p),v=_==null?d:Ea(_),d=new y(S,m+"leave",p,n,h),d.target=g,d.relatedTarget=v,S=null,ys(h)===u&&(y=new y(c,m+"enter",_,n,h),y.target=v,y.relatedTarget=g,S=y),g=S,p&&_)t:{for(y=p,c=_,m=0,v=y;v;v=Qs(v))m++;for(v=0,S=c;S;S=Qs(S))v++;for(;0<m-v;)y=Qs(y),m--;for(;0<v-m;)c=Qs(c),v--;for(;m--;){if(y===c||c!==null&&y===c.alternate)break t;y=Qs(y),c=Qs(c)}y=null}else y=null;p!==null&&Xg(f,d,p,y,!1),_!==null&&g!==null&&Xg(f,g,_,y,!0)}}e:{if(d=u?Ea(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=IE;else if(kg(d))if(vx)b=kE;else{b=FE;var T=UE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=OE);if(b&&(b=b(t,u))){_x(f,b,n,h);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Hf(d,"number",d.value)}switch(T=u?Ea(u):window,t){case"focusin":(kg(T)||T.contentEditable==="true")&&(Sa=T,Jf=u,Qo=null);break;case"focusout":Qo=Jf=Sa=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,Gg(f,n,h);break;case"selectionchange":if(HE)break;case"keydown":case"keyup":Gg(f,n,h)}var R;if(nm)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ya?mx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(px&&n.locale!=="ko"&&(ya||x!=="onCompositionStart"?x==="onCompositionEnd"&&ya&&(R=hx()):(Gr=h,Jp="value"in Gr?Gr.value:Gr.textContent,ya=!0)),T=mc(u,x),0<T.length&&(x=new Ig(x,t,null,n,h),f.push({event:x,listeners:T}),R?x.data=R:(R=gx(n),R!==null&&(x.data=R)))),(R=RE?PE(t,n):DE(t,n))&&(u=mc(u,"onBeforeInput"),0<u.length&&(h=new Ig("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=R))}Cx(f,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ol(t,n),s!=null&&i.unshift(pl(t,s,r)),s=ol(t,e),s!=null&&i.push(pl(t,s,r))),t=t.return}return i}function Qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ol(n,s),l!=null&&a.unshift(pl(n,l,o))):r||(l=ol(n,s),l!=null&&a.push(pl(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var WE=/\r\n?/g,XE=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(WE,`
`).replace(XE,"")}function eu(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(ie(425))}function gc(){}var th=null,nh=null;function ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,qE=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(YE)}:rh;function YE(t){setTimeout(function(){throw t})}function Id(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),cl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);cl(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Li="__reactFiber$"+_o,ml="__reactProps$"+_o,dr="__reactContainer$"+_o,sh="__reactEvents$"+_o,KE="__reactListeners$"+_o,QE="__reactHandles$"+_o;function ys(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yg(t);t!==null;){if(n=t[Li])return n;t=Yg(t)}return e}t=n,n=t.parentNode}return null}function Fl(t){return t=t[Li]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ea(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Kc(t){return t[ml]||null}var ah=[],wa=-1;function os(t){return{current:t}}function Mt(t){0>wa||(t.current=ah[wa],ah[wa]=null,wa--)}function xt(t,e){wa++,ah[wa]=t.current,t.current=e}var ns={},mn=os(ns),Dn=os(!1),Os=ns;function no(t,e){var n=t.type.contextTypes;if(!n)return ns;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function _c(){Mt(Dn),Mt(mn)}function Kg(t,e,n){if(mn.current!==ns)throw Error(ie(168));xt(mn,e),xt(Dn,n)}function Px(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,UM(t)||"Unknown",r));return Rt({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,Os=mn.current,xt(mn,t),xt(Dn,Dn.current),!0}function Qg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Px(t,e,Os),i.__reactInternalMemoizedMergedChildContext=t,Mt(Dn),Mt(mn),xt(mn,t)):Mt(Dn),xt(Dn,n)}var Ki=null,Qc=!1,Ud=!1;function Dx(t){Ki===null?Ki=[t]:Ki.push(t)}function ZE(t){Qc=!0,Dx(t)}function ls(){if(!Ud&&Ki!==null){Ud=!0;var t=0,e=ut;try{var n=Ki;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ki=null,Qc=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(t+1)),nx(Yp,ls),r}finally{ut=e,Ud=!1}}return null}var Ta=[],ba=0,xc=null,yc=0,ni=[],ii=0,ks=null,nr=1,ir="";function gs(t,e){Ta[ba++]=yc,Ta[ba++]=xc,xc=t,yc=e}function Nx(t,e,n){ni[ii++]=nr,ni[ii++]=ir,ni[ii++]=ks,ks=t;var i=nr;t=ir;var r=32-xi(i)-1;i&=~(1<<r),n+=1;var s=32-xi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,nr=1<<32-xi(e)+r|n<<r|i,ir=s+t}else nr=1<<s|n<<r|i,ir=t}function rm(t){t.return!==null&&(gs(t,1),Nx(t,1,0))}function sm(t){for(;t===xc;)xc=Ta[--ba],Ta[ba]=null,yc=Ta[--ba],Ta[ba]=null;for(;t===ks;)ks=ni[--ii],ni[ii]=null,ir=ni[--ii],ni[ii]=null,nr=ni[--ii],ni[ii]=null}var qn=null,Xn=null,Et=!1,gi=null;function Lx(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qn=t,Xn=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qn=t,Xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:nr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qn=t,Xn=null,!0):!1;default:return!1}}function oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lh(t){if(Et){var e=Xn;if(e){var n=e;if(!Zg(t,e)){if(oh(t))throw Error(ie(418));e=Yr(n.nextSibling);var i=qn;e&&Zg(t,e)?Lx(i,n):(t.flags=t.flags&-4097|2,Et=!1,qn=t)}}else{if(oh(t))throw Error(ie(418));t.flags=t.flags&-4097|2,Et=!1,qn=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function tu(t){if(t!==qn)return!1;if(!Et)return Jg(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ih(t.type,t.memoizedProps)),e&&(e=Xn)){if(oh(t))throw Ix(),Error(ie(418));for(;e;)Lx(t,e),e=Yr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xn=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xn=null}}else Xn=qn?Yr(t.stateNode.nextSibling):null;return!0}function Ix(){for(var t=Xn;t;)t=Yr(t.nextSibling)}function io(){Xn=qn=null,Et=!1}function am(t){gi===null?gi=[t]:gi.push(t)}var JE=gr.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e0(t){var e=t._init;return e(t._payload)}function Ux(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=Jr(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=2,m):v):(c.flags|=2,m)):(c.flags|=1048576,m)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,v,S){return m===null||m.tag!==6?(m=Vd(v,c.mode,S),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,S){var b=v.type;return b===xa?h(c,m,v.props.children,S,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&e0(b)===m.type)?(S=r(m,v.props),S.ref=bo(c,m,v),S.return=c,S):(S=Ku(v.type,v.key,v.props,null,c.mode,S),S.ref=bo(c,m,v),S.return=c,S)}function u(c,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Gd(v,c.mode,S),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function h(c,m,v,S,b){return m===null||m.tag!==7?(m=Fs(v,c.mode,S,b),m.return=c,m):(m=r(m,v),m.return=c,m)}function f(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vd(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wl:return v=Ku(m.type,m.key,m.props,null,c.mode,v),v.ref=bo(c,null,m),v.return=c,v;case va:return m=Gd(m,c.mode,v),m.return=c,m;case Cr:var S=m._init;return f(c,S(m._payload),v)}if(zo(m)||So(m))return m=Fs(m,c.mode,v,null),m.return=c,m;nu(c,m)}return null}function d(c,m,v,S){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(c,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:return v.key===b?l(c,m,v,S):null;case va:return v.key===b?u(c,m,v,S):null;case Cr:return b=v._init,d(c,m,b(v._payload),S)}if(zo(v)||So(v))return b!==null?null:h(c,m,v,S,null);nu(c,v)}return null}function p(c,m,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(v)||null,o(m,c,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:return c=c.get(S.key===null?v:S.key)||null,l(m,c,S,b);case va:return c=c.get(S.key===null?v:S.key)||null,u(m,c,S,b);case Cr:var T=S._init;return p(c,m,v,T(S._payload),b)}if(zo(S)||So(S))return c=c.get(v)||null,h(m,c,S,b,null);nu(m,S)}return null}function _(c,m,v,S){for(var b=null,T=null,R=m,x=m=0,C=null;R!==null&&x<v.length;x++){R.index>x?(C=R,R=null):C=R.sibling;var N=d(c,R,v[x],S);if(N===null){R===null&&(R=C);break}t&&R&&N.alternate===null&&e(c,R),m=s(N,m,x),T===null?b=N:T.sibling=N,T=N,R=C}if(x===v.length)return n(c,R),Et&&gs(c,x),b;if(R===null){for(;x<v.length;x++)R=f(c,v[x],S),R!==null&&(m=s(R,m,x),T===null?b=R:T.sibling=R,T=R);return Et&&gs(c,x),b}for(R=i(c,R);x<v.length;x++)C=p(R,c,x,v[x],S),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?x:C.key),m=s(C,m,x),T===null?b=C:T.sibling=C,T=C);return t&&R.forEach(function(P){return e(c,P)}),Et&&gs(c,x),b}function y(c,m,v,S){var b=So(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var T=b=null,R=m,x=m=0,C=null,N=v.next();R!==null&&!N.done;x++,N=v.next()){R.index>x?(C=R,R=null):C=R.sibling;var P=d(c,R,N.value,S);if(P===null){R===null&&(R=C);break}t&&R&&P.alternate===null&&e(c,R),m=s(P,m,x),T===null?b=P:T.sibling=P,T=P,R=C}if(N.done)return n(c,R),Et&&gs(c,x),b;if(R===null){for(;!N.done;x++,N=v.next())N=f(c,N.value,S),N!==null&&(m=s(N,m,x),T===null?b=N:T.sibling=N,T=N);return Et&&gs(c,x),b}for(R=i(c,R);!N.done;x++,N=v.next())N=p(R,c,x,N.value,S),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?x:N.key),m=s(N,m,x),T===null?b=N:T.sibling=N,T=N);return t&&R.forEach(function(k){return e(c,k)}),Et&&gs(c,x),b}function g(c,m,v,S){if(typeof v=="object"&&v!==null&&v.type===xa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:e:{for(var b=v.key,T=m;T!==null;){if(T.key===b){if(b=v.type,b===xa){if(T.tag===7){n(c,T.sibling),m=r(T,v.props.children),m.return=c,c=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&e0(b)===T.type){n(c,T.sibling),m=r(T,v.props),m.ref=bo(c,T,v),m.return=c,c=m;break e}n(c,T);break}else e(c,T);T=T.sibling}v.type===xa?(m=Fs(v.props.children,c.mode,S,v.key),m.return=c,c=m):(S=Ku(v.type,v.key,v.props,null,c.mode,S),S.ref=bo(c,m,v),S.return=c,c=S)}return a(c);case va:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=Gd(v,c.mode,S),m.return=c,c=m}return a(c);case Cr:return T=v._init,g(c,m,T(v._payload),S)}if(zo(v))return _(c,m,v,S);if(So(v))return y(c,m,v,S);nu(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,v),m.return=c,c=m):(n(c,m),m=Vd(v,c.mode,S),m.return=c,c=m),a(c)):n(c,m)}return g}var ro=Ux(!0),Fx=Ux(!1),Sc=os(null),Mc=null,Aa=null,om=null;function lm(){om=Aa=Mc=null}function um(t){var e=Sc.current;Mt(Sc),t._currentValue=e}function uh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fa(t,e){Mc=t,om=Aa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function oi(t){var e=t._currentValue;if(om!==t)if(t={context:t,memoizedValue:e,next:null},Aa===null){if(Mc===null)throw Error(ie(308));Aa=t,Mc.dependencies={lanes:0,firstContext:t}}else Aa=Aa.next=t;return e}var Ss=null;function cm(t){Ss===null?Ss=[t]:Ss.push(t)}function Ox(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cm(e)):(n.next=r.next,r.next=n),e.interleaved=n,fr(t,i)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fr(t,n)}return r=i.interleaved,r===null?(e.next=e,cm(i)):(e.next=r.next,r.next=e),i.interleaved=e,fr(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kp(t,n)}}function t0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,i){var r=t.updateQueue;Rr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=u=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Rt({},f,d);break e;case 2:Rr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=f):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zs|=a,t.lanes=a,t.memoizedState=f}}function n0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ol={},Oi=os(Ol),gl=os(Ol),_l=os(Ol);function Ms(t){if(t===Ol)throw Error(ie(174));return t}function fm(t,e){switch(xt(_l,e),xt(gl,t),xt(Oi,Ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gf(e,t)}Mt(Oi),xt(Oi,e)}function so(){Mt(Oi),Mt(gl),Mt(_l)}function Bx(t){Ms(_l.current);var e=Ms(Oi.current),n=Gf(e,t.type);e!==n&&(xt(gl,t),xt(Oi,n))}function hm(t){gl.current===t&&(Mt(Oi),Mt(gl))}var bt=os(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function pm(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Wu=gr.ReactCurrentDispatcher,Od=gr.ReactCurrentBatchConfig,Bs=0,At=null,jt=null,Zt=null,Tc=!1,Zo=!1,vl=0,e1=0;function on(){throw Error(ie(321))}function mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mi(t[n],e[n]))return!1;return!0}function gm(t,e,n,i,r,s){if(Bs=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wu.current=t===null||t.memoizedState===null?r1:s1,t=n(i,r),Zo){s=0;do{if(Zo=!1,vl=0,25<=s)throw Error(ie(301));s+=1,Zt=jt=null,e.updateQueue=null,Wu.current=a1,t=n(i,r)}while(Zo)}if(Wu.current=bc,e=jt!==null&&jt.next!==null,Bs=0,Zt=jt=At=null,Tc=!1,e)throw Error(ie(300));return t}function _m(){var t=vl!==0;return vl=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function li(){if(jt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Zt===null?At.memoizedState:Zt.next;if(e!==null)Zt=e,jt=t;else{if(t===null)throw Error(ie(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function xl(t,e){return typeof e=="function"?e(t):e}function kd(t){var e=li(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Bs&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,At.lanes|=h,zs|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Mi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,zs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bd(t){var e=li(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Mi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zx(){}function Hx(t,e){var n=At,i=li(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,vm(jx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,yl(9,Gx.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(ie(349));Bs&30||Vx(n,e,r)}return r}function Vx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gx(t,e,n,i){e.value=n,e.getSnapshot=i,Wx(e)&&Xx(t)}function jx(t,e,n){return n(function(){Wx(e)&&Xx(t)})}function Wx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mi(t,n)}catch{return!0}}function Xx(t){var e=fr(t,1);e!==null&&yi(e,t,1,-1)}function i0(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e.queue=t,t=t.dispatch=i1.bind(null,At,t),[e.memoizedState,t]}function yl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qx(){return li().memoizedState}function Xu(t,e,n,i){var r=Ci();At.flags|=t,r.memoizedState=yl(1|e,n,void 0,i===void 0?null:i)}function Zc(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(jt!==null){var a=jt.memoizedState;if(s=a.destroy,i!==null&&mm(i,a.deps)){r.memoizedState=yl(e,n,s,i);return}}At.flags|=t,r.memoizedState=yl(1|e,n,s,i)}function r0(t,e){return Xu(8390656,8,t,e)}function vm(t,e){return Zc(2048,8,t,e)}function $x(t,e){return Zc(4,2,t,e)}function Yx(t,e){return Zc(4,4,t,e)}function Kx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qx(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,Kx.bind(null,e,t),n)}function xm(){}function Zx(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jx(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ey(t,e,n){return Bs&21?(Mi(n,e)||(n=sx(),At.lanes|=n,zs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function t1(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Od.transition;Od.transition={};try{t(!1),e()}finally{ut=n,Od.transition=i}}function ty(){return li().memoizedState}function n1(t,e,n){var i=Zr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ny(t))iy(e,n);else if(n=Ox(t,e,n,i),n!==null){var r=Sn();yi(n,t,i,r),ry(n,e,i)}}function i1(t,e,n){var i=Zr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ny(t))iy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Mi(o,a)){var l=e.interleaved;l===null?(r.next=r,cm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ox(t,e,r,i),n!==null&&(r=Sn(),yi(n,t,i,r),ry(n,e,i))}}function ny(t){var e=t.alternate;return t===At||e!==null&&e===At}function iy(t,e){Zo=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ry(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kp(t,n)}}var bc={readContext:oi,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},r1={readContext:oi,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:oi,useEffect:r0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4194308,4,Kx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=n1.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:i0,useDebugValue:xm,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=i0(!1),e=t[0];return t=t1.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=Ci();if(Et){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Jt===null)throw Error(ie(349));Bs&30||Vx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,r0(jx.bind(null,i,s,t),[t]),i.flags|=2048,yl(9,Gx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=Jt.identifierPrefix;if(Et){var n=ir,i=nr;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s1={readContext:oi,useCallback:Zx,useContext:oi,useEffect:vm,useImperativeHandle:Qx,useInsertionEffect:$x,useLayoutEffect:Yx,useMemo:Jx,useReducer:kd,useRef:qx,useState:function(){return kd(xl)},useDebugValue:xm,useDeferredValue:function(t){var e=li();return ey(e,jt.memoizedState,t)},useTransition:function(){var t=kd(xl)[0],e=li().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Hx,useId:ty,unstable_isNewReconciler:!1},a1={readContext:oi,useCallback:Zx,useContext:oi,useEffect:vm,useImperativeHandle:Qx,useInsertionEffect:$x,useLayoutEffect:Yx,useMemo:Jx,useReducer:Bd,useRef:qx,useState:function(){return Bd(xl)},useDebugValue:xm,useDeferredValue:function(t){var e=li();return jt===null?e.memoizedState=t:ey(e,jt.memoizedState,t)},useTransition:function(){var t=Bd(xl)[0],e=li().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Hx,useId:ty,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ch(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?Xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Zr(t),s=sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(yi(e,t,r,i),ju(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Zr(t),s=sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(yi(e,t,r,i),ju(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=Zr(t),r=sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Kr(t,r,i),e!==null&&(yi(e,t,i,n),ju(e,t,i))}};function s0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fl(n,i)||!fl(r,s):!0}function sy(t,e,n){var i=!1,r=ns,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=Nn(e)?Os:mn.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):ns),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function a0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=Nn(e)?Os:mn.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ch(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=IM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var o1=typeof WeakMap=="function"?WeakMap:Map;function ay(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,Mh=i),fh(t,e)},n}function oy(t,e,n){n=sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fh(t,e),typeof i!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function o0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new o1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=S1.bind(null,t,e,n),e.then(t,t))}function l0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function u0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var l1=gr.ReactCurrentOwner,Pn=!1;function xn(t,e,n,i){e.child=t===null?Fx(e,null,n,i):ro(e,t.child,n,i)}function c0(t,e,n,i,r){n=n.render;var s=e.ref;return Fa(e,r),i=gm(t,e,n,i,s,r),n=_m(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Et&&n&&rm(e),e.flags|=1,xn(t,e,i,r),e.child)}function d0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ly(t,e,s,i,r)):(t=Ku(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(a,i)&&t.ref===e.ref)return hr(t,e,r)}return e.flags|=1,t=Jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ly(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fl(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,hr(t,e,r)}return hh(t,e,n,i,r)}function uy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Ra,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Ra,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Ra,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Ra,zn),zn|=i;return xn(t,e,r,n),e.child}function cy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,i,r){var s=Nn(n)?Os:mn.current;return s=no(e,s),Fa(e,r),n=gm(t,e,n,i,s,r),i=_m(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Et&&i&&rm(e),e.flags|=1,xn(t,e,n,r),e.child)}function f0(t,e,n,i,r){if(Nn(n)){var s=!0;vc(e)}else s=!1;if(Fa(e,r),e.stateNode===null)qu(t,e),sy(e,n,i),dh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=oi(u):(u=Nn(n)?Os:mn.current,u=no(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&a0(e,a,i,u),Rr=!1;var d=e.memoizedState;a.state=d,Ec(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Dn.current||Rr?(typeof h=="function"&&(ch(e,n,h,i),l=e.memoizedState),(o=Rr||s0(e,n,o,i,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kx(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:hi(e.type,o),a.props=u,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=Nn(n)?Os:mn.current,l=no(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&a0(e,a,i,l),Rr=!1,d=e.memoizedState,a.state=d,Ec(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||Dn.current||Rr?(typeof p=="function"&&(ch(e,n,p,i),_=e.memoizedState),(u=Rr||s0(e,n,u,i,d,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ph(t,e,n,i,s,r)}function ph(t,e,n,i,r,s){cy(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qg(e,n,!1),hr(t,e,s);i=e.stateNode,l1.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,o,s)):xn(t,e,o,s),e.memoizedState=i.state,r&&Qg(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?Kg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kg(t,e.context,!1),fm(t,e.containerInfo)}function h0(t,e,n,i,r){return io(),am(r),e.flags|=256,xn(t,e,n,i),e.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function fy(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(bt,r&1),t===null)return lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=nd(a,i,0,null),t=Fs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gh(n),e.memoizedState=mh,t):ym(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return u1(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Jr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Jr(o,s):(s=Fs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?gh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=mh,i}return s=t.child,t=s.sibling,i=Jr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ym(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function iu(t,e,n,i){return i!==null&&am(i),ro(e,t.child,null,n),t=ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zd(Error(ie(422))),iu(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nd({mode:"visible",children:i.children},r,0,null),s=Fs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,a),e.child.memoizedState=gh(a),e.memoizedState=mh,s);if(!(e.mode&1))return iu(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=zd(s,i,void 0),iu(t,e,a,i)}if(o=(a&t.childLanes)!==0,Pn||o){if(i=Jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fr(t,r),yi(i,t,r,-1))}return bm(),i=zd(Error(ie(421))),iu(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=M1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Xn=Yr(r.nextSibling),qn=e,Et=!0,gi=null,t!==null&&(ni[ii++]=nr,ni[ii++]=ir,ni[ii++]=ks,nr=t.id,ir=t.overflow,ks=e),e=ym(e,i.children),e.flags|=4096,e)}function p0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uh(t.return,e,n)}function Hd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,n,e);else if(t.tag===19)p0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hd(e,!0,n,null,s);break;case"together":Hd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c1(t,e,n){switch(e.tag){case 3:dy(e),io();break;case 5:Bx(e);break;case 1:Nn(e.type)&&vc(e);break;case 4:fm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?fy(t,e,n):(xt(bt,bt.current&1),t=hr(t,e,n),t!==null?t.sibling:null);xt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,uy(t,e,n)}return hr(t,e,n)}var py,_h,my,gy;py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};my=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ms(Oi.current);var s=null;switch(n){case"input":r=Bf(t,r),i=Bf(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Vf(t,r),i=Vf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gc)}jf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&St("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function d1(t,e,n){var i=e.pendingProps;switch(sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return Nn(e.type)&&_c(),ln(e),null;case 3:return i=e.stateNode,so(),Mt(Dn),Mt(mn),pm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(Th(gi),gi=null))),_h(t,e),ln(e),null;case 5:hm(e);var r=Ms(_l.current);if(n=e.type,t!==null&&e.stateNode!=null)my(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return ln(e),null}if(t=Ms(Oi.current),tu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[ml]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Eg(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Tg(i,s),St("invalid",i)}jf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&eu(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&eu(i.textContent,o,t),r=["children",""+o]):sl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":Xl(i),wg(i,s,!0);break;case"textarea":Xl(i),bg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Li]=e,t[ml]=i,py(t,e,!1,!1),e.stateNode=t;e:{switch(a=Wf(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Eg(t,i),r=Bf(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Tg(t,i),r=Vf(t,i),St("invalid",t);break;default:r=i}jf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?qv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&al(t,l):typeof l=="number"&&al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&jp(t,s,l,a))}switch(n){case"input":Xl(t),wg(t,i,!1);break;case"textarea":Xl(t),bg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ts(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Na(t,!!i.multiple,s,!1):i.defaultValue!=null&&Na(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)gy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Ms(_l.current),Ms(Oi.current),tu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=qn,t!==null))switch(t.tag){case 3:eu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return ln(e),null;case 13:if(Mt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Xn!==null&&e.mode&1&&!(e.flags&128))Ix(),io(),e.flags|=98560,s=!1;else if(s=tu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Li]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else gi!==null&&(Th(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Xt===0&&(Xt=3):bm())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return so(),_h(t,e),t===null&&hl(e.stateNode.containerInfo),ln(e),null;case 10:return um(e.type._context),ln(e),null;case 17:return Nn(e.type)&&_c(),ln(e),null;case 19:if(Mt(bt),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ao(s,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wc(t),a!==null){for(e.flags|=128,Ao(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>oo&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return ln(e),null}else 2*kt()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=bt.current,xt(bt,i?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return Tm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function f1(t,e){switch(sm(e),e.tag){case 1:return Nn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Mt(Dn),Mt(mn),pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Mt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(bt),null;case 4:return so(),null;case 10:return um(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var ru=!1,fn=!1,h1=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ca(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function vh(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var m0=!1;function p1(t,e){if(th=hc,t=Sx(),im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:t,selectionRange:n},hc=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:hi(e.type,y),g);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=m0,m0=!1,_}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vh(e,n,s)}r=r.next}while(r!==i)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _y(t){var e=t.alternate;e!==null&&(t.alternate=null,_y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[ml],delete e[sh],delete e[KE],delete e[QE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vy(t){return t.tag===5||t.tag===3||t.tag===4}function g0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(i!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}function Sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var tn=null,mi=!1;function yr(t,e,n){for(n=n.child;n!==null;)xy(t,e,n),n=n.sibling}function xy(t,e,n){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:fn||Ca(n,e);case 6:var i=tn,r=mi;tn=null,yr(t,e,n),tn=i,mi=r,tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?Id(t.parentNode,n):t.nodeType===1&&Id(t,n),cl(t)):Id(tn,n.stateNode));break;case 4:i=tn,r=mi,tn=n.stateNode.containerInfo,mi=!0,yr(t,e,n),tn=i,mi=r;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&vh(n,e,a),r=r.next}while(r!==i)}yr(t,e,n);break;case 1:if(!fn&&(Ca(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Lt(n,e,o)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,yr(t,e,n),fn=i):yr(t,e,n);break;default:yr(t,e,n)}}function _0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new h1),e.forEach(function(i){var r=E1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ui(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:tn=o.stateNode,mi=!1;break e;case 3:tn=o.stateNode.containerInfo,mi=!0;break e;case 4:tn=o.stateNode.containerInfo,mi=!0;break e}o=o.return}if(tn===null)throw Error(ie(160));xy(s,a,r),tn=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yy(e,t),e=e.sibling}function yy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(e,t),Ti(t),i&4){try{Jo(3,t,t.return),ed(3,t)}catch(y){Lt(t,t.return,y)}try{Jo(5,t,t.return)}catch(y){Lt(t,t.return,y)}}break;case 1:ui(e,t),Ti(t),i&512&&n!==null&&Ca(n,n.return);break;case 5:if(ui(e,t),Ti(t),i&512&&n!==null&&Ca(n,n.return),t.flags&32){var r=t.stateNode;try{al(r,"")}catch(y){Lt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Vv(r,s),Wf(o,a);var u=Wf(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?qv(r,f):h==="dangerouslySetInnerHTML"?Wv(r,f):h==="children"?al(r,f):jp(r,h,f,u)}switch(o){case"input":zf(r,s);break;case"textarea":Gv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Na(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Na(r,!!s.multiple,s.defaultValue,!0):Na(r,!!s.multiple,s.multiple?[]:"",!1))}r[ml]=s}catch(y){Lt(t,t.return,y)}}break;case 6:if(ui(e,t),Ti(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Lt(t,t.return,y)}}break;case 3:if(ui(e,t),Ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(y){Lt(t,t.return,y)}break;case 4:ui(e,t),Ti(t);break;case 13:ui(e,t),Ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Em=kt())),i&4&&_0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(u=fn)||h,ui(e,t),fn=u):ui(e,t),Ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(we=t,h=t.child;h!==null;){for(f=we=h;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jo(4,d,d.return);break;case 1:Ca(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Lt(i,n,y)}}break;case 5:Ca(d,d.return);break;case 22:if(d.memoizedState!==null){x0(f);continue}}p!==null?(p.return=d,we=p):x0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Xv("display",a))}catch(y){Lt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Lt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ui(e,t),Ti(t),i&4&&_0(t);break;case 21:break;default:ui(e,t),Ti(t)}}function Ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(al(r,""),i.flags&=-33);var s=g0(t);Sh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=g0(t);yh(t,o,a);break;default:throw Error(ie(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m1(t,e,n){we=t,Sy(t)}function Sy(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ru;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||fn;o=ru;var u=fn;if(ru=a,(fn=l)&&!u)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?y0(r):l!==null?(l.return=a,we=l):y0(r);for(;s!==null;)we=s,Sy(s),s=s.sibling;we=r,ru=o,fn=u}v0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):v0(t)}}function v0(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||ed(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&n0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}n0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&cl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}fn||e.flags&512&&xh(e)}catch(d){Lt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function x0(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function y0(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{xh(e)}catch(l){Lt(e,s,l)}break;case 5:var a=e.return;try{xh(e)}catch(l){Lt(e,a,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var g1=Math.ceil,Ac=gr.ReactCurrentDispatcher,Sm=gr.ReactCurrentOwner,ai=gr.ReactCurrentBatchConfig,it=0,Jt=null,zt=null,rn=0,zn=0,Ra=os(0),Xt=0,Sl=null,zs=0,td=0,Mm=0,el=null,Rn=null,Em=0,oo=1/0,Yi=null,Cc=!1,Mh=null,Qr=null,su=!1,jr=null,Rc=0,tl=0,Eh=null,$u=-1,Yu=0;function Sn(){return it&6?kt():$u!==-1?$u:$u=kt()}function Zr(t){return t.mode&1?it&2&&rn!==0?rn&-rn:JE.transition!==null?(Yu===0&&(Yu=sx()),Yu):(t=ut,t!==0||(t=window.event,t=t===void 0?16:fx(t.type)),t):1}function yi(t,e,n,i){if(50<tl)throw tl=0,Eh=null,Error(ie(185));Il(t,n,i),(!(it&2)||t!==Jt)&&(t===Jt&&(!(it&2)&&(td|=n),Xt===4&&Nr(t,rn)),Ln(t,i),n===1&&it===0&&!(e.mode&1)&&(oo=kt()+500,Qc&&ls()))}function Ln(t,e){var n=t.callbackNode;JM(t,e);var i=fc(t,t===Jt?rn:0);if(i===0)n!==null&&Rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rg(n),e===1)t.tag===0?ZE(S0.bind(null,t)):Dx(S0.bind(null,t)),$E(function(){!(it&6)&&ls()}),n=null;else{switch(ax(i)){case 1:n=Yp;break;case 4:n=ix;break;case 16:n=dc;break;case 536870912:n=rx;break;default:n=dc}n=Ry(n,My.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function My(t,e){if($u=-1,Yu=0,it&6)throw Error(ie(327));var n=t.callbackNode;if(Oa()&&t.callbackNode!==n)return null;var i=fc(t,t===Jt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pc(t,i);else{e=i;var r=it;it|=2;var s=wy();(Jt!==t||rn!==e)&&(Yi=null,oo=kt()+500,Us(t,e));do try{x1();break}catch(o){Ey(t,o)}while(!0);lm(),Ac.current=s,it=r,zt!==null?e=0:(Jt=null,rn=0,e=Xt)}if(e!==0){if(e===2&&(r=Kf(t),r!==0&&(i=r,e=wh(t,r))),e===1)throw n=Sl,Us(t,0),Nr(t,i),Ln(t,kt()),n;if(e===6)Nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!_1(r)&&(e=Pc(t,i),e===2&&(s=Kf(t),s!==0&&(i=s,e=wh(t,s))),e===1))throw n=Sl,Us(t,0),Nr(t,i),Ln(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:_s(t,Rn,Yi);break;case 3:if(Nr(t,i),(i&130023424)===i&&(e=Em+500-kt(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rh(_s.bind(null,t,Rn,Yi),e);break}_s(t,Rn,Yi);break;case 4:if(Nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-xi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g1(i/1960))-i,10<i){t.timeoutHandle=rh(_s.bind(null,t,Rn,Yi),i);break}_s(t,Rn,Yi);break;case 5:_s(t,Rn,Yi);break;default:throw Error(ie(329))}}}return Ln(t,kt()),t.callbackNode===n?My.bind(null,t):null}function wh(t,e){var n=el;return t.current.memoizedState.isDehydrated&&(Us(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&Th(e)),t}function Th(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function _1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Mm,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xi(e),i=1<<n;t[n]=-1,e&=~i}}function S0(t){if(it&6)throw Error(ie(327));Oa();var e=fc(t,0);if(!(e&1))return Ln(t,kt()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var i=Kf(t);i!==0&&(e=i,n=wh(t,i))}if(n===1)throw n=Sl,Us(t,0),Nr(t,e),Ln(t,kt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_s(t,Rn,Yi),Ln(t,kt()),null}function wm(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(oo=kt()+500,Qc&&ls())}}function Hs(t){jr!==null&&jr.tag===0&&!(it&6)&&Oa();var e=it;it|=1;var n=ai.transition,i=ut;try{if(ai.transition=null,ut=1,t)return t()}finally{ut=i,ai.transition=n,it=e,!(it&6)&&ls()}}function Tm(){zn=Ra.current,Mt(Ra)}function Us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qE(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(sm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_c();break;case 3:so(),Mt(Dn),Mt(mn),pm();break;case 5:hm(i);break;case 4:so();break;case 13:Mt(bt);break;case 19:Mt(bt);break;case 10:um(i.type._context);break;case 22:case 23:Tm()}n=n.return}if(Jt=t,zt=t=Jr(t.current,null),rn=zn=e,Xt=0,Sl=null,Mm=td=zs=0,Rn=el=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ss=null}return t}function Ey(t,e){do{var n=zt;try{if(lm(),Wu.current=bc,Tc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(Bs=0,Zt=jt=At=null,Zo=!1,vl=0,Sm.current=null,n===null||n.return===null){Xt=1,Sl=e,zt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=rn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=l0(a);if(p!==null){p.flags&=-257,u0(p,a,o,s,e),p.mode&1&&o0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){o0(s,u,e),bm();break e}l=Error(ie(426))}}else if(Et&&o.mode&1){var g=l0(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),u0(g,a,o,s,e),am(ao(l,o));break e}}s=l=ao(l,o),Xt!==4&&(Xt=2),el===null?el=[s]:el.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=ay(s,l,e);t0(s,c);break e;case 1:o=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qr===null||!Qr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=oy(s,o,e);t0(s,S);break e}}s=s.return}while(s!==null)}by(n)}catch(b){e=b,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function wy(){var t=Ac.current;return Ac.current=bc,t===null?bc:t}function bm(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Jt===null||!(zs&268435455)&&!(td&268435455)||Nr(Jt,rn)}function Pc(t,e){var n=it;it|=2;var i=wy();(Jt!==t||rn!==e)&&(Yi=null,Us(t,e));do try{v1();break}catch(r){Ey(t,r)}while(!0);if(lm(),it=n,Ac.current=i,zt!==null)throw Error(ie(261));return Jt=null,rn=0,Xt}function v1(){for(;zt!==null;)Ty(zt)}function x1(){for(;zt!==null&&!jM();)Ty(zt)}function Ty(t){var e=Cy(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?by(t):zt=e,Sm.current=null}function by(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=f1(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,zt=null;return}}else if(n=d1(n,e,zn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Xt===0&&(Xt=5)}function _s(t,e,n){var i=ut,r=ai.transition;try{ai.transition=null,ut=1,y1(t,e,n,i)}finally{ai.transition=r,ut=i}return null}function y1(t,e,n,i){do Oa();while(jr!==null);if(it&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eE(t,s),t===Jt&&(zt=Jt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,Ry(dc,function(){return Oa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ai.transition,ai.transition=null;var a=ut;ut=1;var o=it;it|=4,Sm.current=null,p1(t,n),yy(n,t),zE(nh),hc=!!th,nh=th=null,t.current=n,m1(n),WM(),it=o,ut=a,ai.transition=s}else t.current=n;if(su&&(su=!1,jr=t,Rc=r),s=t.pendingLanes,s===0&&(Qr=null),$M(n.stateNode),Ln(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=Mh,Mh=null,t;return Rc&1&&t.tag!==0&&Oa(),s=t.pendingLanes,s&1?t===Eh?tl++:(tl=0,Eh=t):tl=0,ls(),null}function Oa(){if(jr!==null){var t=ax(Rc),e=ai.transition,n=ut;try{if(ai.transition=null,ut=16>t?16:t,jr===null)var i=!1;else{if(t=jr,jr=null,Rc=0,it&6)throw Error(ie(331));var r=it;for(it|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(we=u;we!==null;){var h=we;switch(h.tag){case 0:case 11:case 15:Jo(8,h,s)}var f=h.child;if(f!==null)f.return=h,we=f;else for(;we!==null;){h=we;var d=h.sibling,p=h.return;if(_y(h),h===u){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,we=c;break e}we=s.return}}var m=t.current;for(we=m;we!==null;){a=we;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,we=v;else e:for(a=m;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ed(9,o)}}catch(b){Lt(o,o.return,b)}if(o===a){we=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,we=S;break e}we=o.return}}if(it=r,ls(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{ut=n,ai.transition=e}}return!1}function M0(t,e,n){e=ao(n,e),e=ay(t,e,1),t=Kr(t,e,1),e=Sn(),t!==null&&(Il(t,1,e),Ln(t,e))}function Lt(t,e,n){if(t.tag===3)M0(t,t,n);else for(;e!==null;){if(e.tag===3){M0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qr===null||!Qr.has(i))){t=ao(n,t),t=oy(e,t,1),e=Kr(e,t,1),t=Sn(),e!==null&&(Il(e,1,t),Ln(e,t));break}}e=e.return}}function S1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(rn&n)===n&&(Xt===4||Xt===3&&(rn&130023424)===rn&&500>kt()-Em?Us(t,0):Mm|=n),Ln(t,e)}function Ay(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=Sn();t=fr(t,e),t!==null&&(Il(t,e,n),Ln(t,n))}function M1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ay(t,n)}function E1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Ay(t,n)}var Cy;Cy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,c1(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Et&&e.flags&1048576&&Nx(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qu(t,e),t=e.pendingProps;var r=no(e,mn.current);Fa(e,n),r=gm(null,e,i,t,r,n);var s=_m();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dm(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,dh(e,i,t,n),e=ph(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&rm(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=T1(i),t=hi(i,t),r){case 0:e=hh(null,e,i,t,n);break e;case 1:e=f0(null,e,i,t,n);break e;case 11:e=c0(null,e,i,t,n);break e;case 14:e=d0(null,e,i,hi(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),hh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),f0(t,e,i,r,n);case 3:e:{if(dy(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kx(t,e),Ec(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ie(423)),e),e=h0(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ie(424)),e),e=h0(t,e,i,n,r);break e}else for(Xn=Yr(e.stateNode.containerInfo.firstChild),qn=e,Et=!0,gi=null,n=Fx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=hr(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return Bx(e),t===null&&lh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ih(i,r)?a=null:s!==null&&ih(i,s)&&(e.flags|=32),cy(t,e),xn(t,e,a,n),e.child;case 6:return t===null&&lh(e),null;case 13:return fy(t,e,n);case 4:return fm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),c0(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Sc,i._currentValue),i._currentValue=a,s!==null)if(Mi(s.value,a)){if(s.children===r.children&&!Dn.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),uh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fa(e,n),r=oi(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),d0(t,e,i,r,n);case 15:return ly(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),qu(t,e),e.tag=1,Nn(i)?(t=!0,vc(e)):t=!1,Fa(e,n),sy(e,i,r),dh(e,i,r,n),ph(null,e,i,!0,t,n);case 19:return hy(t,e,n);case 22:return uy(t,e,n)}throw Error(ie(156,e.tag))};function Ry(t,e){return nx(t,e)}function w1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new w1(t,e,n,i)}function Am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T1(t){if(typeof t=="function")return Am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===qp)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Am(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case xa:return Fs(n.children,r,s,e);case Wp:a=8,r|=8;break;case Uf:return t=si(12,n,e,r|2),t.elementType=Uf,t.lanes=s,t;case Ff:return t=si(13,n,e,r),t.elementType=Ff,t.lanes=s,t;case Of:return t=si(19,n,e,r),t.elementType=Of,t.lanes=s,t;case Bv:return nd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:a=10;break e;case kv:a=9;break e;case Xp:a=11;break e;case qp:a=14;break e;case Cr:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=si(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fs(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function nd(t,e,n,i){return t=si(22,t,i,e),t.elementType=Bv,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ed(0),this.expirationTimes=Ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ed(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cm(t,e,n,i,r,s,a,o,l){return t=new b1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dm(s),t}function A1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Py(t){if(!t)return ns;t=t._reactInternals;e:{if(Xs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Nn(n))return Px(t,n,e)}return e}function Dy(t,e,n,i,r,s,a,o,l){return t=Cm(n,i,!0,t,r,s,a,o,l),t.context=Py(null),n=t.current,i=Sn(),r=Zr(n),s=sr(i,r),s.callback=e??null,Kr(n,s,r),t.current.lanes=r,Il(t,r,i),Ln(t,i),t}function id(t,e,n,i){var r=e.current,s=Sn(),a=Zr(r);return n=Py(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Kr(r,e,a),t!==null&&(yi(t,r,a,s),ju(t,r,a)),a}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rm(t,e){E0(t,e),(t=t.alternate)&&E0(t,e)}function C1(){return null}var Ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}rd.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));id(t,e,null,null)};rd.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hs(function(){id(null,t,null,null)}),e[dr]=null}};function rd(t){this._internalRoot=t}rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&dx(t)}};function Dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function w0(){}function R1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Dc(a);s.call(u)}}var a=Dy(e,i,t,0,null,!1,!1,"",w0);return t._reactRootContainer=a,t[dr]=a.current,hl(t.nodeType===8?t.parentNode:t),Hs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Dc(l);o.call(u)}}var l=Cm(t,0,!1,null,null,!1,!1,"",w0);return t._reactRootContainer=l,t[dr]=l.current,hl(t.nodeType===8?t.parentNode:t),Hs(function(){id(e,l,n,i)}),l}function ad(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dc(a);o.call(l)}}id(e,a,t,r)}else a=R1(n,e,t,r,i);return Dc(a)}ox=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(Kp(e,n|1),Ln(e,kt()),!(it&6)&&(oo=kt()+500,ls()))}break;case 13:Hs(function(){var i=fr(t,1);if(i!==null){var r=Sn();yi(i,t,1,r)}}),Rm(t,1)}};Qp=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Sn();yi(e,t,134217728,n)}Rm(t,134217728)}};lx=function(t){if(t.tag===13){var e=Zr(t),n=fr(t,e);if(n!==null){var i=Sn();yi(n,t,e,i)}Rm(t,e)}};ux=function(){return ut};cx=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};qf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ie(90));Hv(i),zf(i,r)}}}break;case"textarea":Gv(t,n);break;case"select":e=n.value,e!=null&&Na(t,!!n.multiple,e,!1)}};Kv=wm;Qv=Hs;var P1={usingClientEntryPoint:!1,Events:[Fl,Ea,Kc,$v,Yv,wm]},Co={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ex(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Xc=au.inject(D1),Fi=au}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dm(e))throw Error(ie(200));return A1(t,e,null,n)};Yn.createRoot=function(t,e){if(!Dm(t))throw Error(ie(299));var n=!1,i="",r=Ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cm(t,1,!1,null,null,n,!1,i,r),t[dr]=e.current,hl(t.nodeType===8?t.parentNode:t),new Pm(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=ex(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return Hs(t)};Yn.hydrate=function(t,e,n){if(!sd(e))throw Error(ie(200));return ad(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!Dm(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ny;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Dy(e,null,t,1,n??null,r,!1,s,a),t[dr]=e.current,hl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rd(e)};Yn.render=function(t,e,n){if(!sd(e))throw Error(ie(200));return ad(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!sd(t))throw Error(ie(40));return t._reactRootContainer?(Hs(function(){ad(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Yn.unstable_batchedUpdates=wm;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sd(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ad(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(t){console.error(t)}}Ly(),Lv.exports=Yn;var N1=Lv.exports,T0=N1;Lf.createRoot=T0.createRoot,Lf.hydrateRoot=T0.hydrateRoot;var vo=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},bs,Ir,Va,uv,L1=(uv=class extends vo{constructor(){super();Ce(this,bs);Ce(this,Ir);Ce(this,Va);_e(this,Va,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){D(this,Ir)||this.setEventListener(D(this,Va))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,Ir))==null||e.call(this),_e(this,Ir,void 0))}setEventListener(e){var n;_e(this,Va,e),(n=D(this,Ir))==null||n.call(this),_e(this,Ir,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){D(this,bs)!==e&&(_e(this,bs,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof D(this,bs)=="boolean"?D(this,bs):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},bs=new WeakMap,Ir=new WeakMap,Va=new WeakMap,uv),Nm=new L1,I1={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},Ur,Op,cv,U1=(cv=class{constructor(){Ce(this,Ur,I1);Ce(this,Op,!1)}setTimeoutProvider(t){_e(this,Ur,t)}setTimeout(t,e){return D(this,Ur).setTimeout(t,e)}clearTimeout(t){D(this,Ur).clearTimeout(t)}setInterval(t,e){return D(this,Ur).setInterval(t,e)}clearInterval(t){D(this,Ur).clearInterval(t)}},Ur=new WeakMap,Op=new WeakMap,cv),Es=new U1;function F1(t){setTimeout(t,0)}var O1=typeof window>"u"||"Deno"in globalThis;function yn(){}function k1(t,e){return typeof t=="function"?t(e):t}function bh(t){return typeof t=="number"&&t>=0&&t!==1/0}function Iy(t,e){return Math.max(t+(e||0)-Date.now(),0)}function es(t,e){return typeof t=="function"?t(e):t}function Vn(t,e){return typeof t=="function"?t(e):t}function b0(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==Lm(a,e.options))return!1}else if(!Ml(e.queryKey,a))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof o=="boolean"&&e.isStale()!==o||r&&r!==e.state.fetchStatus||s&&!s(e))}function A0(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Vs(e.options.mutationKey)!==Vs(s))return!1}else if(!Ml(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Lm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Vs)(t)}function Vs(t){return JSON.stringify(t,(e,n)=>Ah(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Ml(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Ml(t[n],e[n])):!1}var B1=Object.prototype.hasOwnProperty;function Uy(t,e,n=0){if(t===e)return t;if(n>500)return e;const i=C0(t)&&C0(e);if(!i&&!(Ah(t)&&Ah(e)))return e;const s=(i?t:Object.keys(t)).length,a=i?e:Object.keys(e),o=a.length,l=i?new Array(o):{};let u=0;for(let h=0;h<o;h++){const f=i?h:a[h],d=t[f],p=e[f];if(d===p){l[f]=d,(i?h<s:B1.call(t,f))&&u++;continue}if(d===null||p===null||typeof d!="object"||typeof p!="object"){l[f]=p;continue}const _=Uy(d,p,n+1);l[f]=_,_===d&&u++}return s===o&&u===s?t:l}function Nc(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function C0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Ah(t){if(!R0(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!R0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function R0(t){return Object.prototype.toString.call(t)==="[object Object]"}function z1(t){return new Promise(e=>{Es.setTimeout(e,t)})}function Ch(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Uy(t,e):e}function H1(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function V1(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Im=Symbol();function Fy(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Im?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Um(t,e){return typeof t=="function"?t(...e):!!t}function G1(t,e,n){let i=!1,r;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(r??(r=e()),i||(i=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)}),t}var El=(()=>{let t=()=>O1;return{isServer(){return t()},setIsServer(e){t=e}}})();function Rh(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}var j1=F1;function W1(){let t=[],e=0,n=o=>{o()},i=o=>{o()},r=j1;const s=o=>{e?t.push(o):r(()=>{n(o)})},a=()=>{const o=t;t=[],o.length&&r(()=>{i(()=>{o.forEach(l=>{n(l)})})})};return{batch:o=>{let l;e++;try{l=o()}finally{e--,e||a()}return l},batchCalls:o=>(...l)=>{s(()=>{o(...l)})},schedule:s,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{i=o},setScheduler:o=>{r=o}}}var Wt=W1(),Ga,Fr,ja,dv,X1=(dv=class extends vo{constructor(){super();Ce(this,Ga,!0);Ce(this,Fr);Ce(this,ja);_e(this,ja,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){D(this,Fr)||this.setEventListener(D(this,ja))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,Fr))==null||e.call(this),_e(this,Fr,void 0))}setEventListener(e){var n;_e(this,ja,e),(n=D(this,Fr))==null||n.call(this),_e(this,Fr,e(this.setOnline.bind(this)))}setOnline(e){D(this,Ga)!==e&&(_e(this,Ga,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return D(this,Ga)}},Ga=new WeakMap,Fr=new WeakMap,ja=new WeakMap,dv),Lc=new X1;function q1(t){return Math.min(1e3*2**t,3e4)}function Oy(t){return(t??"online")==="online"?Lc.isOnline():!0}var Ph=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function ky(t){let e=!1,n=0,i;const r=Rh(),s=()=>r.status!=="pending",a=y=>{var g;if(!s()){const c=new Ph(y);d(c),(g=t.onCancel)==null||g.call(t,c)}},o=()=>{e=!0},l=()=>{e=!1},u=()=>Nm.isFocused()&&(t.networkMode==="always"||Lc.isOnline())&&t.canRun(),h=()=>Oy(t.networkMode)&&t.canRun(),f=y=>{s()||(i==null||i(),r.resolve(y))},d=y=>{s()||(i==null||i(),r.reject(y))},p=()=>new Promise(y=>{var g;i=c=>{(s()||u())&&y(c)},(g=t.onPause)==null||g.call(t)}).then(()=>{var y;i=void 0,s()||(y=t.onContinue)==null||y.call(t)}),_=()=>{if(s())return;let y;const g=n===0?t.initialPromise:void 0;try{y=g??t.fn()}catch(c){y=Promise.reject(c)}Promise.resolve(y).then(f).catch(c=>{var T;if(s())return;const m=t.retry??(El.isServer()?0:3),v=t.retryDelay??q1,S=typeof v=="function"?v(n,c):v,b=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,c);if(e||!b){d(c);return}n++,(T=t.onFail)==null||T.call(t,n,c),z1(S).then(()=>u()?void 0:p()).then(()=>{e?d(c):_()})})};return{promise:r,status:()=>r.status,cancel:a,continue:()=>(i==null||i(),r),cancelRetry:o,continueRetry:l,canStart:h,start:()=>(h()?_():p().then(_),r)}}var As,fv,By=(fv=class{constructor(){Ce(this,As)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bh(this.gcTime)&&_e(this,As,Es.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(El.isServer()?1/0:5*60*1e3))}clearGcTimeout(){D(this,As)!==void 0&&(Es.clearTimeout(D(this,As)),_e(this,As,void 0))}},As=new WeakMap,fv);function $1(t){return{onFetch:(e,n)=>{var h,f,d,p,_;const i=e.options,r=(d=(f=(h=e.fetchOptions)==null?void 0:h.meta)==null?void 0:f.fetchMore)==null?void 0:d.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],a=((_=e.state.data)==null?void 0:_.pageParams)||[];let o={pages:[],pageParams:[]},l=0;const u=async()=>{let y=!1;const g=v=>{G1(v,()=>e.signal,()=>y=!0)},c=Fy(e.options,e.fetchOptions),m=async(v,S,b)=>{if(y)return Promise.reject(e.signal.reason);if(S==null&&v.pages.length)return Promise.resolve(v);const R=(()=>{const P={client:e.client,queryKey:e.queryKey,pageParam:S,direction:b?"backward":"forward",meta:e.options.meta};return g(P),P})(),x=await c(R),{maxPages:C}=e.options,N=b?V1:H1;return{pages:N(v.pages,x,C),pageParams:N(v.pageParams,S,C)}};if(r&&s.length){const v=r==="backward",S=v?Y1:P0,b={pages:s,pageParams:a},T=S(i,b);o=await m(b,T,v)}else{const v=t??s.length;do{const S=l===0?a[0]??i.initialPageParam:P0(i,o);if(l>0&&S==null)break;o=await m(o,S),l++}while(l<v)}return o};e.options.persister?e.fetchFn=()=>{var y,g;return(g=(y=e.options).persister)==null?void 0:g.call(y,u,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=u}}}function P0(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function Y1(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Wa,Cs,Xa,ei,Rs,Qt,Cl,Ps,Hn,zy,$i,hv,K1=(hv=class extends By{constructor(e){super();Ce(this,Hn);Ce(this,Wa);Ce(this,Cs);Ce(this,Xa);Ce(this,ei);Ce(this,Rs);Ce(this,Qt);Ce(this,Cl);Ce(this,Ps);_e(this,Ps,!1),_e(this,Cl,e.defaultOptions),this.setOptions(e.options),this.observers=[],_e(this,Rs,e.client),_e(this,ei,D(this,Rs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,_e(this,Cs,N0(this.options)),this.state=e.state??D(this,Cs),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return D(this,Wa)}get promise(){var e;return(e=D(this,Qt))==null?void 0:e.promise}setOptions(e){if(this.options={...D(this,Cl),...e},e!=null&&e._type&&_e(this,Wa,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=N0(this.options);n.data!==void 0&&(this.setState(D0(n.data,n.dataUpdatedAt)),_e(this,Cs,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,ei).remove(this)}setData(e,n){const i=Ch(this.state.data,e,this.options);return Ge(this,Hn,$i).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e){Ge(this,Hn,$i).call(this,{type:"setState",state:e})}cancel(e){var i,r;const n=(i=D(this,Qt))==null?void 0:i.promise;return(r=D(this,Qt))==null||r.cancel(e),n?n.then(yn).catch(yn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return D(this,Cs)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>Vn(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Im||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>es(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Iy(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=D(this,Qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=D(this,Qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),D(this,ei).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(D(this,Qt)&&(D(this,Ps)||Ge(this,Hn,zy).call(this)?D(this,Qt).cancel({revert:!0}):D(this,Qt).cancelRetry()),this.scheduleGc()),D(this,ei).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ge(this,Hn,$i).call(this,{type:"invalidate"})}async fetch(e,n){var u,h,f,d,p,_,y,g,c,m,v;if(this.state.fetchStatus!=="idle"&&((u=D(this,Qt))==null?void 0:u.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(D(this,Qt))return D(this,Qt).continueRetry(),D(this,Qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const S=this.observers.find(b=>b.options.queryFn);S&&this.setOptions(S.options)}const i=new AbortController,r=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(_e(this,Ps,!0),i.signal)})},s=()=>{const S=Fy(this.options,n),T=(()=>{const R={client:D(this,Rs),queryKey:this.queryKey,meta:this.meta};return r(R),R})();return _e(this,Ps,!1),this.options.persister?this.options.persister(S,T,this):S(T)},o=(()=>{const S={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:D(this,Rs),state:this.state,fetchFn:s};return r(S),S})(),l=D(this,Wa)==="infinite"?$1(this.options.pages):this.options.behavior;l==null||l.onFetch(o,this),_e(this,Xa,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=o.fetchOptions)==null?void 0:h.meta))&&Ge(this,Hn,$i).call(this,{type:"fetch",meta:(f=o.fetchOptions)==null?void 0:f.meta}),_e(this,Qt,ky({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,onCancel:S=>{S instanceof Ph&&S.revert&&this.setState({...D(this,Xa),fetchStatus:"idle"}),i.abort()},onFail:(S,b)=>{Ge(this,Hn,$i).call(this,{type:"failed",failureCount:S,error:b})},onPause:()=>{Ge(this,Hn,$i).call(this,{type:"pause"})},onContinue:()=>{Ge(this,Hn,$i).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}));try{const S=await D(this,Qt).start();if(S===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(S),(p=(d=D(this,ei).config).onSuccess)==null||p.call(d,S,this),(y=(_=D(this,ei).config).onSettled)==null||y.call(_,S,this.state.error,this),S}catch(S){if(S instanceof Ph){if(S.silent)return D(this,Qt).promise;if(S.revert){if(this.state.data===void 0)throw S;return this.state.data}}throw Ge(this,Hn,$i).call(this,{type:"error",error:S}),(c=(g=D(this,ei).config).onError)==null||c.call(g,S,this),(v=(m=D(this,ei).config).onSettled)==null||v.call(m,this.state.data,S,this),S}finally{this.scheduleGc()}}},Wa=new WeakMap,Cs=new WeakMap,Xa=new WeakMap,ei=new WeakMap,Rs=new WeakMap,Qt=new WeakMap,Cl=new WeakMap,Ps=new WeakMap,Hn=new WeakSet,zy=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},$i=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Hy(i.data,this.options),fetchMeta:e.meta??null};case"success":const r={...i,...D0(e.data,e.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return _e(this,Xa,e.manual?r:void 0),r;case"error":const s=e.error;return{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Wt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),D(this,ei).notify({query:this,type:"updated",action:e})})},hv);function Hy(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Oy(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function D0(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function N0(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var An,Je,Rl,vn,Ds,qa,Qi,Or,Pl,$a,Ya,Ns,Ls,kr,Ka,at,Go,Dh,Nh,Lh,Ih,Uh,Fh,Oh,Vy,pv,Q1=(pv=class extends vo{constructor(e,n){super();Ce(this,at);Ce(this,An);Ce(this,Je);Ce(this,Rl);Ce(this,vn);Ce(this,Ds);Ce(this,qa);Ce(this,Qi);Ce(this,Or);Ce(this,Pl);Ce(this,$a);Ce(this,Ya);Ce(this,Ns);Ce(this,Ls);Ce(this,kr);Ce(this,Ka,new Set);this.options=n,_e(this,An,e),_e(this,Or,null),_e(this,Qi,Rh()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(D(this,Je).addObserver(this),L0(D(this,Je),this.options)?Ge(this,at,Go).call(this):this.updateResult(),Ge(this,at,Ih).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return kh(D(this,Je),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return kh(D(this,Je),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Ge(this,at,Uh).call(this),Ge(this,at,Fh).call(this),D(this,Je).removeObserver(this)}setOptions(e){const n=this.options,i=D(this,Je);if(this.options=D(this,An).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Vn(this.options.enabled,D(this,Je))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Ge(this,at,Oh).call(this),D(this,Je).setOptions(this.options),n._defaulted&&!Nc(this.options,n)&&D(this,An).getQueryCache().notify({type:"observerOptionsUpdated",query:D(this,Je),observer:this});const r=this.hasListeners();r&&I0(D(this,Je),i,this.options,n)&&Ge(this,at,Go).call(this),this.updateResult(),r&&(D(this,Je)!==i||Vn(this.options.enabled,D(this,Je))!==Vn(n.enabled,D(this,Je))||es(this.options.staleTime,D(this,Je))!==es(n.staleTime,D(this,Je)))&&Ge(this,at,Dh).call(this);const s=Ge(this,at,Nh).call(this);r&&(D(this,Je)!==i||Vn(this.options.enabled,D(this,Je))!==Vn(n.enabled,D(this,Je))||s!==D(this,kr))&&Ge(this,at,Lh).call(this,s)}getOptimisticResult(e){const n=D(this,An).getQueryCache().build(D(this,An),e),i=this.createResult(n,e);return J1(this,i)&&(_e(this,vn,i),_e(this,qa,this.options),_e(this,Ds,D(this,Je).state)),i}getCurrentResult(){return D(this,vn)}trackResult(e,n){return new Proxy(e,{get:(i,r)=>(this.trackProp(r),n==null||n(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&D(this,Qi).status==="pending"&&D(this,Qi).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(i,r))})}trackProp(e){D(this,Ka).add(e)}getCurrentQuery(){return D(this,Je)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=D(this,An).defaultQueryOptions(e),i=D(this,An).getQueryCache().build(D(this,An),n);return i.fetch().then(()=>this.createResult(i,n))}fetch(e){return Ge(this,at,Go).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),D(this,vn)))}createResult(e,n){var C;const i=D(this,Je),r=this.options,s=D(this,vn),a=D(this,Ds),o=D(this,qa),u=e!==i?e.state:D(this,Rl),{state:h}=e;let f={...h},d=!1,p;if(n._optimisticResults){const N=this.hasListeners(),P=!N&&L0(e,n),k=N&&I0(e,i,n,r);(P||k)&&(f={...f,...Hy(h.data,e.options)}),n._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:_,errorUpdatedAt:y,status:g}=f;p=f.data;let c=!1;if(n.placeholderData!==void 0&&p===void 0&&g==="pending"){let N;s!=null&&s.isPlaceholderData&&n.placeholderData===(o==null?void 0:o.placeholderData)?(N=s.data,c=!0):N=typeof n.placeholderData=="function"?n.placeholderData((C=D(this,Ya))==null?void 0:C.state.data,D(this,Ya)):n.placeholderData,N!==void 0&&(g="success",p=Ch(s==null?void 0:s.data,N,n),d=!0)}if(n.select&&p!==void 0&&!c)if(s&&p===(a==null?void 0:a.data)&&n.select===D(this,Pl))p=D(this,$a);else try{_e(this,Pl,n.select),p=n.select(p),p=Ch(s==null?void 0:s.data,p,n),_e(this,$a,p),_e(this,Or,null)}catch(N){_e(this,Or,N)}D(this,Or)&&(_=D(this,Or),p=D(this,$a),y=Date.now(),g="error");const m=f.fetchStatus==="fetching",v=g==="pending",S=g==="error",b=v&&m,T=p!==void 0,x={status:g,fetchStatus:f.fetchStatus,isPending:v,isSuccess:g==="success",isError:S,isInitialLoading:b,isLoading:b,data:p,dataUpdatedAt:f.dataUpdatedAt,error:_,errorUpdatedAt:y,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:f.dataUpdateCount>u.dataUpdateCount||f.errorUpdateCount>u.errorUpdateCount,isFetching:m,isRefetching:m&&!v,isLoadingError:S&&!T,isPaused:f.fetchStatus==="paused",isPlaceholderData:d,isRefetchError:S&&T,isStale:Fm(e,n),refetch:this.refetch,promise:D(this,Qi),isEnabled:Vn(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const N=x.data!==void 0,P=x.status==="error"&&!N,k=I=>{P?I.reject(x.error):N&&I.resolve(x.data)},X=()=>{const I=_e(this,Qi,x.promise=Rh());k(I)},Y=D(this,Qi);switch(Y.status){case"pending":e.queryHash===i.queryHash&&k(Y);break;case"fulfilled":(P||x.data!==Y.value)&&X();break;case"rejected":(!P||x.error!==Y.reason)&&X();break}}return x}updateResult(){const e=D(this,vn),n=this.createResult(D(this,Je),this.options);if(_e(this,Ds,D(this,Je).state),_e(this,qa,this.options),D(this,Ds).data!==void 0&&_e(this,Ya,D(this,Je)),Nc(n,e))return;_e(this,vn,n);const i=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,s=typeof r=="function"?r():r;if(s==="all"||!s&&!D(this,Ka).size)return!0;const a=new Set(s??D(this,Ka));return this.options.throwOnError&&a.add("error"),Object.keys(D(this,vn)).some(o=>{const l=o;return D(this,vn)[l]!==e[l]&&a.has(l)})};Ge(this,at,Vy).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Ge(this,at,Ih).call(this)}},An=new WeakMap,Je=new WeakMap,Rl=new WeakMap,vn=new WeakMap,Ds=new WeakMap,qa=new WeakMap,Qi=new WeakMap,Or=new WeakMap,Pl=new WeakMap,$a=new WeakMap,Ya=new WeakMap,Ns=new WeakMap,Ls=new WeakMap,kr=new WeakMap,Ka=new WeakMap,at=new WeakSet,Go=function(e){Ge(this,at,Oh).call(this);let n=D(this,Je).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(yn)),n},Dh=function(){Ge(this,at,Uh).call(this);const e=es(this.options.staleTime,D(this,Je));if(El.isServer()||D(this,vn).isStale||!bh(e))return;const i=Iy(D(this,vn).dataUpdatedAt,e)+1;_e(this,Ns,Es.setTimeout(()=>{D(this,vn).isStale||this.updateResult()},i))},Nh=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(D(this,Je)):this.options.refetchInterval)??!1},Lh=function(e){Ge(this,at,Fh).call(this),_e(this,kr,e),!(El.isServer()||Vn(this.options.enabled,D(this,Je))===!1||!bh(D(this,kr))||D(this,kr)===0)&&_e(this,Ls,Es.setInterval(()=>{(this.options.refetchIntervalInBackground||Nm.isFocused())&&Ge(this,at,Go).call(this)},D(this,kr)))},Ih=function(){Ge(this,at,Dh).call(this),Ge(this,at,Lh).call(this,Ge(this,at,Nh).call(this))},Uh=function(){D(this,Ns)!==void 0&&(Es.clearTimeout(D(this,Ns)),_e(this,Ns,void 0))},Fh=function(){D(this,Ls)!==void 0&&(Es.clearInterval(D(this,Ls)),_e(this,Ls,void 0))},Oh=function(){const e=D(this,An).getQueryCache().build(D(this,An),this.options);if(e===D(this,Je))return;const n=D(this,Je);_e(this,Je,e),_e(this,Rl,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},Vy=function(e){Wt.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(D(this,vn))}),D(this,An).getQueryCache().notify({query:D(this,Je),type:"observerResultsUpdated"})})},pv);function Z1(t,e){return Vn(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&Vn(e.retryOnMount,t)===!1)}function L0(t,e){return Z1(t,e)||t.state.data!==void 0&&kh(t,e,e.refetchOnMount)}function kh(t,e,n){if(Vn(e.enabled,t)!==!1&&es(e.staleTime,t)!=="static"){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Fm(t,e)}return!1}function I0(t,e,n,i){return(t!==e||Vn(i.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&Fm(t,n)}function Fm(t,e){return Vn(e.enabled,t)!==!1&&t.isStaleByTime(es(e.staleTime,t))}function J1(t,e){return!Nc(t.getCurrentResult(),e)}var Dl,Ri,dn,Is,Pi,Ar,mv,ew=(mv=class extends By{constructor(e){super();Ce(this,Pi);Ce(this,Dl);Ce(this,Ri);Ce(this,dn);Ce(this,Is);_e(this,Dl,e.client),this.mutationId=e.mutationId,_e(this,dn,e.mutationCache),_e(this,Ri,[]),this.state=e.state||Gy(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){D(this,Ri).includes(e)||(D(this,Ri).push(e),this.clearGcTimeout(),D(this,dn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){_e(this,Ri,D(this,Ri).filter(n=>n!==e)),this.scheduleGc(),D(this,dn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){D(this,Ri).length||(this.state.status==="pending"?this.scheduleGc():D(this,dn).remove(this))}continue(){var e;return((e=D(this,Is))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var a,o,l,u,h,f,d,p,_,y,g,c,m,v,S,b,T,R;const n=()=>{Ge(this,Pi,Ar).call(this,{type:"continue"})},i={client:D(this,Dl),meta:this.options.meta,mutationKey:this.options.mutationKey};_e(this,Is,ky({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(new Error("No mutationFn found")),onFail:(x,C)=>{Ge(this,Pi,Ar).call(this,{type:"failed",failureCount:x,error:C})},onPause:()=>{Ge(this,Pi,Ar).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,dn).canRun(this)}));const r=this.state.status==="pending",s=!D(this,Is).canStart();try{if(r)n();else{Ge(this,Pi,Ar).call(this,{type:"pending",variables:e,isPaused:s}),D(this,dn).config.onMutate&&await D(this,dn).config.onMutate(e,this,i);const C=await((o=(a=this.options).onMutate)==null?void 0:o.call(a,e,i));C!==this.state.context&&Ge(this,Pi,Ar).call(this,{type:"pending",context:C,variables:e,isPaused:s})}const x=await D(this,Is).start();return await((u=(l=D(this,dn).config).onSuccess)==null?void 0:u.call(l,x,e,this.state.context,this,i)),await((f=(h=this.options).onSuccess)==null?void 0:f.call(h,x,e,this.state.context,i)),await((p=(d=D(this,dn).config).onSettled)==null?void 0:p.call(d,x,null,this.state.variables,this.state.context,this,i)),await((y=(_=this.options).onSettled)==null?void 0:y.call(_,x,null,e,this.state.context,i)),Ge(this,Pi,Ar).call(this,{type:"success",data:x}),x}catch(x){try{await((c=(g=D(this,dn).config).onError)==null?void 0:c.call(g,x,e,this.state.context,this,i))}catch(C){Promise.reject(C)}try{await((v=(m=this.options).onError)==null?void 0:v.call(m,x,e,this.state.context,i))}catch(C){Promise.reject(C)}try{await((b=(S=D(this,dn).config).onSettled)==null?void 0:b.call(S,void 0,x,this.state.variables,this.state.context,this,i))}catch(C){Promise.reject(C)}try{await((R=(T=this.options).onSettled)==null?void 0:R.call(T,void 0,x,e,this.state.context,i))}catch(C){Promise.reject(C)}throw Ge(this,Pi,Ar).call(this,{type:"error",error:x}),x}finally{D(this,dn).runNext(this)}}},Dl=new WeakMap,Ri=new WeakMap,dn=new WeakMap,Is=new WeakMap,Pi=new WeakSet,Ar=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Wt.batch(()=>{D(this,Ri).forEach(i=>{i.onMutationUpdate(e)}),D(this,dn).notify({mutation:this,type:"updated",action:e})})},mv);function Gy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Zi,pi,Nl,gv,tw=(gv=class extends vo{constructor(e={}){super();Ce(this,Zi);Ce(this,pi);Ce(this,Nl);this.config=e,_e(this,Zi,new Set),_e(this,pi,new Map),_e(this,Nl,0)}build(e,n,i){const r=new ew({client:e,mutationCache:this,mutationId:++Gl(this,Nl)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){D(this,Zi).add(e);const n=ou(e);if(typeof n=="string"){const i=D(this,pi).get(n);i?i.push(e):D(this,pi).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(D(this,Zi).delete(e)){const n=ou(e);if(typeof n=="string"){const i=D(this,pi).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&D(this,pi).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=ou(e);if(typeof n=="string"){const i=D(this,pi).get(n),r=i==null?void 0:i.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=ou(e);if(typeof n=="string"){const r=(i=D(this,pi).get(n))==null?void 0:i.find(s=>s!==e&&s.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Wt.batch(()=>{D(this,Zi).forEach(e=>{this.notify({type:"removed",mutation:e})}),D(this,Zi).clear(),D(this,pi).clear()})}getAll(){return Array.from(D(this,Zi))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>A0(n,i))}findAll(e={}){return this.getAll().filter(n=>A0(e,n))}notify(e){Wt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Wt.batch(()=>Promise.all(e.map(n=>n.continue().catch(yn))))}},Zi=new WeakMap,pi=new WeakMap,Nl=new WeakMap,gv);function ou(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Ji,Br,Cn,er,ur,Qu,Bh,_v,nw=(_v=class extends vo{constructor(n,i){super();Ce(this,ur);Ce(this,Ji);Ce(this,Br);Ce(this,Cn);Ce(this,er);_e(this,Ji,n),this.setOptions(i),this.bindMethods(),Ge(this,ur,Qu).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var r;const i=this.options;this.options=D(this,Ji).defaultMutationOptions(n),Nc(this.options,i)||D(this,Ji).getMutationCache().notify({type:"observerOptionsUpdated",mutation:D(this,Cn),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&Vs(i.mutationKey)!==Vs(this.options.mutationKey)?this.reset():((r=D(this,Cn))==null?void 0:r.state.status)==="pending"&&D(this,Cn).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=D(this,Cn))==null||n.removeObserver(this)}onMutationUpdate(n){Ge(this,ur,Qu).call(this),Ge(this,ur,Bh).call(this,n)}getCurrentResult(){return D(this,Br)}reset(){var n;(n=D(this,Cn))==null||n.removeObserver(this),_e(this,Cn,void 0),Ge(this,ur,Qu).call(this),Ge(this,ur,Bh).call(this)}mutate(n,i){var r;return _e(this,er,i),(r=D(this,Cn))==null||r.removeObserver(this),_e(this,Cn,D(this,Ji).getMutationCache().build(D(this,Ji),this.options)),D(this,Cn).addObserver(this),D(this,Cn).execute(n)}},Ji=new WeakMap,Br=new WeakMap,Cn=new WeakMap,er=new WeakMap,ur=new WeakSet,Qu=function(){var i;const n=((i=D(this,Cn))==null?void 0:i.state)??Gy();_e(this,Br,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},Bh=function(n){Wt.batch(()=>{var i,r,s,a,o,l,u,h;if(D(this,er)&&this.hasListeners()){const f=D(this,Br).variables,d=D(this,Br).context,p={client:D(this,Ji),meta:this.options.meta,mutationKey:this.options.mutationKey};if((n==null?void 0:n.type)==="success"){try{(r=(i=D(this,er)).onSuccess)==null||r.call(i,n.data,f,d,p)}catch(_){Promise.reject(_)}try{(a=(s=D(this,er)).onSettled)==null||a.call(s,n.data,null,f,d,p)}catch(_){Promise.reject(_)}}else if((n==null?void 0:n.type)==="error"){try{(l=(o=D(this,er)).onError)==null||l.call(o,n.error,f,d,p)}catch(_){Promise.reject(_)}try{(h=(u=D(this,er)).onSettled)==null||h.call(u,void 0,n.error,f,d,p)}catch(_){Promise.reject(_)}}}this.listeners.forEach(f=>{f(D(this,Br))})})},_v),Di,vv,iw=(vv=class extends vo{constructor(e={}){super();Ce(this,Di);this.config=e,_e(this,Di,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Lm(r,n);let a=this.get(s);return a||(a=new K1({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){D(this,Di).has(e.queryHash)||(D(this,Di).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=D(this,Di).get(e.queryHash);n&&(e.destroy(),n===e&&D(this,Di).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Wt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return D(this,Di).get(e)}getAll(){return[...D(this,Di).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>b0(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>b0(e,i)):n}notify(e){Wt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Wt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Wt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Di=new WeakMap,vv),Nt,zr,Hr,Qa,Za,Vr,Ja,eo,xv,rw=(xv=class{constructor(t={}){Ce(this,Nt);Ce(this,zr);Ce(this,Hr);Ce(this,Qa);Ce(this,Za);Ce(this,Vr);Ce(this,Ja);Ce(this,eo);_e(this,Nt,t.queryCache||new iw),_e(this,zr,t.mutationCache||new tw),_e(this,Hr,t.defaultOptions||{}),_e(this,Qa,new Map),_e(this,Za,new Map),_e(this,Vr,0)}mount(){Gl(this,Vr)._++,D(this,Vr)===1&&(_e(this,Ja,Nm.subscribe(async t=>{t&&(await this.resumePausedMutations(),D(this,Nt).onFocus())})),_e(this,eo,Lc.subscribe(async t=>{t&&(await this.resumePausedMutations(),D(this,Nt).onOnline())})))}unmount(){var t,e;Gl(this,Vr)._--,D(this,Vr)===0&&((t=D(this,Ja))==null||t.call(this),_e(this,Ja,void 0),(e=D(this,eo))==null||e.call(this),_e(this,eo,void 0))}isFetching(t){return D(this,Nt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return D(this,zr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=D(this,Nt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=D(this,Nt).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(es(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return D(this,Nt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=D(this,Nt).get(i.queryHash),s=r==null?void 0:r.state.data,a=k1(e,s);if(a!==void 0)return D(this,Nt).build(this,i).setData(a,{...n,manual:!0})}setQueriesData(t,e,n){return Wt.batch(()=>D(this,Nt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=D(this,Nt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=D(this,Nt);Wt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=D(this,Nt);return Wt.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=Wt.batch(()=>D(this,Nt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(yn).catch(yn)}invalidateQueries(t,e={}){return Wt.batch(()=>(D(this,Nt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=Wt.batch(()=>D(this,Nt).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(yn)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(yn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=D(this,Nt).build(this,e);return n.isStaleByTime(es(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(yn).catch(yn)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(yn).catch(yn)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return Lc.isOnline()?D(this,zr).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,Nt)}getMutationCache(){return D(this,zr)}getDefaultOptions(){return D(this,Hr)}setDefaultOptions(t){_e(this,Hr,t)}setQueryDefaults(t,e){D(this,Qa).set(Vs(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...D(this,Qa).values()],n={};return e.forEach(i=>{Ml(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){D(this,Za).set(Vs(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...D(this,Za).values()],n={};return e.forEach(i=>{Ml(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...D(this,Hr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Lm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Im&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...D(this,Hr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){D(this,Nt).clear(),D(this,zr).clear()}},Nt=new WeakMap,zr=new WeakMap,Hr=new WeakMap,Qa=new WeakMap,Za=new WeakMap,Vr=new WeakMap,Ja=new WeakMap,eo=new WeakMap,xv),jy=Pe.createContext(void 0),Wy=t=>{const e=Pe.useContext(jy);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},sw=({client:t,children:e})=>(Pe.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),E.jsx(jy.Provider,{value:t,children:e})),Xy=Pe.createContext(!1),aw=()=>Pe.useContext(Xy);Xy.Provider;function ow(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var lw=Pe.createContext(ow()),uw=()=>Pe.useContext(lw),cw=(t,e,n)=>{const i=n!=null&&n.state.error&&typeof t.throwOnError=="function"?Um(t.throwOnError,[n.state.error,n]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||i)&&(e.isReset()||(t.retryOnMount=!1))},dw=t=>{Pe.useEffect(()=>{t.clearReset()},[t])},fw=({result:t,errorResetBoundary:e,throwOnError:n,query:i,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&(r&&t.data===void 0||Um(n,[t.error,i])),hw=t=>{if(t.suspense){const n=r=>r==="static"?r:Math.max(r??1e3,1e3),i=t.staleTime;t.staleTime=typeof i=="function"?(...r)=>n(i(...r)):n(i),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},pw=(t,e)=>t.isLoading&&t.isFetching&&!e,mw=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,U0=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function gw(t,e,n){var p,_,y,g;const i=aw(),r=uw(),s=Wy(),a=s.defaultQueryOptions(t);(_=(p=s.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||_.call(p,a);const o=s.getQueryCache().get(a.queryHash),l=t.subscribed!==!1;a._optimisticResults=i?"isRestoring":l?"optimistic":void 0,hw(a),cw(a,r,o),dw(r);const u=!s.getQueryCache().get(a.queryHash),[h]=Pe.useState(()=>new e(s,a)),f=h.getOptimisticResult(a),d=!i&&l;if(Pe.useSyncExternalStore(Pe.useCallback(c=>{const m=d?h.subscribe(Wt.batchCalls(c)):yn;return h.updateResult(),m},[h,d]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),Pe.useEffect(()=>{h.setOptions(a)},[a,h]),mw(a,f))throw U0(a,h,r);if(fw({result:f,errorResetBoundary:r,throwOnError:a.throwOnError,query:o,suspense:a.suspense}))throw f.error;if((g=(y=s.getDefaultOptions().queries)==null?void 0:y._experimental_afterQuery)==null||g.call(y,a,f),a.experimental_prefetchInRender&&!El.isServer()&&pw(f,i)){const c=u?U0(a,h,r):o==null?void 0:o.promise;c==null||c.catch(yn).finally(()=>{h.updateResult()})}return a.notifyOnChangeProps?f:h.trackResult(f)}function jd(t,e){return gw(t,Q1)}function Zu(t,e){const n=Wy(),[i]=Pe.useState(()=>new nw(n,t));Pe.useEffect(()=>{i.setOptions(t)},[i,t]);const r=Pe.useSyncExternalStore(Pe.useCallback(a=>i.subscribe(Wt.batchCalls(a)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=Pe.useCallback((a,o)=>{i.mutate(a,o).catch(yn)},[i]);if(r.error&&Um(i.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:s,mutateAsync:r.mutate}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Pe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Pe.createElement("svg",{ref:l,...vw,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:qy("lucide",r),...o},[...a.map(([u,h])=>Pe.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(t,e)=>{const n=Pe.forwardRef(({className:i,...r},s)=>Pe.createElement(xw,{ref:s,iconNode:e,className:qy(`lucide-${_w(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=gt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=gt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=gt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=gt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=gt("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=gt("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=gt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=gt("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=gt("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=gt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=gt("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=gt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=gt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=gt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=gt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=gt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=gt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=gt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=gt("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=gt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=gt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=gt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=gt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=gt("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=gt("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=gt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Fw={},k0=t=>{let e;const n=new Set,i=(h,f)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const p=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(_=>_(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Fw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},Ow=t=>t?k0(t):k0;var Jy={exports:{}},eS={},tS={exports:{}},nS={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Pe;function kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bw=typeof Object.is=="function"?Object.is:kw,zw=lo.useState,Hw=lo.useEffect,Vw=lo.useLayoutEffect,Gw=lo.useDebugValue;function jw(t,e){var n=e(),i=zw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Vw(function(){r.value=n,r.getSnapshot=e,Wd(r)&&s({inst:r})},[t,n,e]),Hw(function(){return Wd(r)&&s({inst:r}),t(function(){Wd(r)&&s({inst:r})})},[t]),Gw(n),n}function Wd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bw(t,n)}catch{return!0}}function Ww(t,e){return e()}var Xw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ww:jw;nS.useSyncExternalStore=lo.useSyncExternalStore!==void 0?lo.useSyncExternalStore:Xw;tS.exports=nS;var qw=tS.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=Pe,$w=qw;function Yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kw=typeof Object.is=="function"?Object.is:Yw,Qw=$w.useSyncExternalStore,Zw=ld.useRef,Jw=ld.useEffect,eT=ld.useMemo,tT=ld.useDebugValue;eS.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Zw(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=eT(function(){function l(p){if(!u){if(u=!0,h=p,p=i(p),r!==void 0&&a.hasValue){var _=a.value;if(r(_,p))return f=_}return f=p}if(_=f,Kw(h,p))return _;var y=i(p);return r!==void 0&&r(_,y)?(h=p,_):(h=p,f=y)}var u=!1,h,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=Qw(t,s[0],s[1]);return Jw(function(){a.hasValue=!0,a.value=o},[o]),tT(o),o};Jy.exports=eS;var nT=Jy.exports;const iT=yv(nT),iS={},{useDebugValue:rT}=Dv,{useSyncExternalStoreWithSelector:sT}=iT;let B0=!1;const aT=t=>t;function oT(t,e=aT,n){(iS?"production":void 0)!=="production"&&n&&!B0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),B0=!0);const i=sT(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return rT(i),i}const z0=t=>{(iS?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Ow(t):t,n=(i,r)=>oT(e,i,r);return Object.assign(n,e),n},lT=t=>t?z0(t):z0,st=lT(t=>({config:{family:"random",n_nodes:6,density:.6,weight_min:.5,weight_max:1.5,seed:42,optimize_geometry:!0},annealing:{omega_peak_mhz:2,rise_duration:1e3,hold_duration:1e3,fall_duration:26e3,delta_start_pi:1,delta_hold_pi:-.5,delta_end_pi:-1,sampling_rate:.05,n_roundings:32},enableAnimations:!1,randomizeSeed:!1,graph:null,job:null,hpcJob:null,hpcResources:{},setConfig:e=>t(n=>({config:{...n.config,...e}})),setAnnealing:e=>t(n=>({annealing:{...n.annealing,...e}})),setEnableAnimations:e=>t({enableAnimations:e}),setRandomizeSeed:e=>t({randomizeSeed:e}),setGraph:e=>t({graph:e}),setJob:e=>t({job:e}),setHpcJob:e=>t({hpcJob:e}),setHpcResources:e=>t(n=>({hpcResources:{...n.hpcResources,...e}}))}));function uT(){const t=st(s=>s.annealing),[e,n]=Pe.useState(null),i=Pe.useMemo(()=>cT(t),[t]),r=e??i.points[Math.floor(i.points.length*.58)]??null;return E.jsxs("section",{className:"rounded-md border border-border bg-muted/25 p-4",children:[E.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[E.jsxs("div",{children:[E.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"Annealing schedule"}),E.jsx("h2",{className:"text-lg font-semibold",children:"Pulse evolution over time"})]}),E.jsxs("div",{className:"grid grid-cols-3 gap-2 text-right",children:[E.jsx(ds,{label:"Total",value:`${Zn(i.totalTime,0)} ns`}),E.jsx(ds,{label:"Omega",value:`${Zn(t.omega_peak_mhz,2)} MHz`}),E.jsx(ds,{label:"Samples",value:String(i.samples)})]})]}),E.jsxs("div",{className:"grid gap-4",children:[E.jsx("div",{className:"relative overflow-hidden rounded-md border border-border bg-background/70",children:E.jsxs("svg",{viewBox:"0 0 920 330",className:"h-[360px] w-full",role:"img",onMouseLeave:()=>n(null),onMouseMove:s=>{const o=s.currentTarget.getBoundingClientRect(),l=(s.clientX-o.left)/o.width*920,u=i.xToTime(l);n(hT(i.points,u))},children:[E.jsxs("defs",{children:[E.jsxs("linearGradient",{id:"omegaFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[E.jsx("stop",{offset:"0%",stopColor:"#6ee7cf",stopOpacity:"0.36"}),E.jsx("stop",{offset:"100%",stopColor:"#6ee7cf",stopOpacity:"0.03"})]}),E.jsxs("linearGradient",{id:"deltaFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[E.jsx("stop",{offset:"0%",stopColor:"#8fb7ff",stopOpacity:"0.24"}),E.jsx("stop",{offset:"100%",stopColor:"#8fb7ff",stopOpacity:"0.02"})]}),E.jsxs("filter",{id:"lineGlow",children:[E.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"coloredBlur"}),E.jsxs("feMerge",{children:[E.jsx("feMergeNode",{in:"coloredBlur"}),E.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),E.jsx("rect",{x:"0",y:"0",width:"920",height:"330",fill:"transparent"}),i.gridY.map(s=>E.jsx("line",{x1:"56",x2:"884",y1:s,y2:s,stroke:"currentColor",className:"text-border",strokeOpacity:"0.5"},s)),i.boundaries.map(s=>E.jsxs("g",{children:[E.jsx("rect",{x:s.x0,y:"52",width:s.x1-s.x0,height:"222",fill:s.fill,opacity:"0.18"}),E.jsx("line",{x1:s.x1,x2:s.x1,y1:"52",y2:"274",stroke:"#32423f",strokeDasharray:"4 7"}),s.x1-s.x0>72?E.jsx("text",{x:(s.x0+s.x1)/2,y:"298",textAnchor:"middle",className:"fill-foreground/50 text-[11px] font-semibold uppercase",children:s.label}):null]},s.label)),E.jsx("text",{x:"56",y:"36",className:"fill-primary text-[12px] font-semibold",children:"Omega amplitude"}),E.jsx("text",{x:"884",y:"36",textAnchor:"end",className:"fill-[#9bbcff] text-[12px] font-semibold",children:"Detuning"}),E.jsx("text",{x:"56",y:"315",className:"fill-foreground/40 text-[11px]",children:"time ns"}),E.jsx("path",{d:i.omegaAreaPath,fill:"url(#omegaFill)"}),E.jsx("path",{d:i.deltaAreaPath,fill:"url(#deltaFill)"}),E.jsx("path",{d:i.omegaPath,fill:"none",stroke:"#6ee7cf",strokeWidth:"4",filter:"url(#lineGlow)",strokeLinecap:"round"}),E.jsx("path",{d:i.deltaPath,fill:"none",stroke:"#9bbcff",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"7 8"}),r?E.jsxs("g",{children:[E.jsx("line",{x1:i.x(r.t),x2:i.x(r.t),y1:"50",y2:"276",stroke:"#d6fff4",strokeOpacity:"0.48"}),E.jsx("circle",{cx:i.x(r.t),cy:i.yOmega(r.omega),r:"7",fill:"#6ee7cf",stroke:"#09231e",strokeWidth:"3"}),E.jsx("circle",{cx:i.x(r.t),cy:i.yDelta(r.delta),r:"6",fill:"#9bbcff",stroke:"#091327",strokeWidth:"3"})]}):null]})}),E.jsxs("aside",{className:"grid gap-3 xl:grid-cols-2",children:[E.jsx(Xd,{icon:E.jsx(od,{size:16}),label:"Rise",value:`${Zn(t.rise_duration,0)} ns`,detail:`Omega 0 to ${Zn(t.omega_peak_mhz,2)} MHz`}),E.jsx(Xd,{icon:E.jsx(Zy,{size:16}),label:"Sweep",value:`${Zn(t.hold_duration,0)} ns`,detail:`Delta ${Zn(t.delta_start_pi,2)} to ${Zn(t.delta_end_pi,2)} pi`}),E.jsx(Xd,{icon:E.jsx(Iw,{size:16}),label:"Fall",value:`${Zn(t.fall_duration,0)} ns`,detail:`Omega ${Zn(t.omega_peak_mhz,2)} MHz to 0`}),E.jsxs("div",{className:"rounded-md border border-border bg-background/70 p-3",children:[E.jsx("p",{className:"text-xs font-medium uppercase text-foreground/45",children:"Probe"}),E.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[E.jsx(ds,{label:"t",value:`${Zn((r==null?void 0:r.t)??0,0)} ns`}),E.jsx(ds,{label:"Phase",value:(r==null?void 0:r.phase)??"—"}),E.jsx(ds,{label:"Omega",value:`${Zn((r==null?void 0:r.omega)??0,2)} MHz`}),E.jsx(ds,{label:"Delta",value:`${Zn((r==null?void 0:r.delta)??0,2)} pi`})]})]})]})]})]})}function cT(t){const e={left:56,right:36,top:52,bottom:56},n=920-e.left-e.right,i=330-e.top-e.bottom,r=Math.max(1,t.rise_duration+t.hold_duration+t.fall_duration),s=Math.min(t.delta_start_pi,t.delta_hold_pi,t.delta_end_pi,-.1),a=Math.max(t.delta_start_pi,t.delta_hold_pi,t.delta_end_pi,.1),o=Math.max(a-s,.1),l=b=>e.left+b/r*n,u=b=>rS((b-e.left)/n*r,0,r),h=b=>e.top+i-b/Math.max(t.omega_peak_mhz,.1)*i,f=b=>e.top+i-(b-s)/o*i,d=[],p=(b,T,R,x)=>{for(let C=0;C<=x;C+=1){const N=x===0?0:C/x,P=R+T*N;d.push({t:P,omega:dT(t,P),delta:fT(t,P),phase:b})}};p("rise",t.rise_duration,0,24),p("sweep",t.hold_duration,t.rise_duration,36),p("fall",t.fall_duration,t.rise_duration+t.hold_duration,28);const _=zh(d,b=>l(b.t),b=>h(b.omega)),y=zh(d,b=>l(b.t),b=>f(b.delta)),g=H0(d,b=>l(b.t),b=>h(b.omega),e.top+i),c=H0(d,b=>l(b.t),b=>f(b.delta),e.top+i),m=t.rise_duration,v=t.rise_duration+t.hold_duration,S=[{label:"rise",x0:l(0),x1:l(m),fill:"#6ee7cf"},{label:"sweep",x0:l(m),x1:l(v),fill:"#9bbcff"},{label:"fall",x0:l(v),x1:l(r),fill:"#6ee7cf"}];return{totalTime:r,samples:Math.max(1,Math.round(r*t.sampling_rate)),points:d,x:l,xToTime:u,yOmega:h,yDelta:f,omegaPath:_,deltaPath:y,omegaAreaPath:g,deltaAreaPath:c,boundaries:S,gridY:[e.top,e.top+i*.25,e.top+i*.5,e.top+i*.75,e.top+i]}}function dT(t,e){const n=t.rise_duration,i=t.rise_duration+t.hold_duration;return e<=n?t.omega_peak_mhz*Hh(e,0,n):e<=i?t.omega_peak_mhz:t.omega_peak_mhz*(1-Hh(e,i,i+t.fall_duration))}function fT(t,e){const n=t.rise_duration,i=t.rise_duration+t.hold_duration;return e<=n?t.delta_start_pi:e<=i?pT(t.delta_start_pi,t.delta_end_pi,Hh(e,n,i)):t.delta_end_pi}function zh(t,e,n){return t.map((i,r)=>`${r===0?"M":"L"} ${e(i).toFixed(2)} ${n(i).toFixed(2)}`).join(" ")}function H0(t,e,n,i){if(t.length===0)return"";const r=t[0],s=t[t.length-1];return`${zh(t,e,n)} L ${e(s).toFixed(2)} ${i.toFixed(2)} L ${e(r).toFixed(2)} ${i.toFixed(2)} Z`}function hT(t,e){return t.reduce((n,i)=>Math.abs(i.t-e)<Math.abs(n.t-e)?i:n,t[0])}function Hh(t,e,n){return n<=e?1:rS((t-e)/(n-e),0,1)}function pT(t,e,n){return t+(e-t)*n}function rS(t,e,n){return Math.min(n,Math.max(e,t))}function Xd({icon:t,label:e,value:n,detail:i}){return E.jsxs("div",{className:"rounded-md border border-border bg-background/70 p-3",children:[E.jsxs("div",{className:"flex items-center justify-between gap-3",children:[E.jsxs("div",{className:"flex items-center gap-2 text-primary",children:[t,E.jsx("span",{className:"text-sm font-semibold text-foreground",children:e})]}),E.jsx("span",{className:"font-mono text-xs text-foreground/60",children:n})]}),E.jsx("p",{className:"mt-2 text-xs text-foreground/50",children:i})]})}function ds({label:t,value:e}){return E.jsxs("div",{className:"min-w-0 rounded-md border border-border bg-background/70 px-3 py-2",children:[E.jsx("p",{className:"text-[10px] font-medium uppercase text-foreground/45",children:t}),E.jsx("p",{className:"mt-1 truncate font-mono text-xs text-primary",children:e})]})}function Zn(t,e){return Number.isFinite(t)?t.toFixed(e):"—"}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Om="184",Ba={ROTATE:0,DOLLY:1,PAN:2},Pa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mT=0,V0=1,gT=2,Ju=1,sS=2,Wo=3,is=0,In=1,tr=2,ar=0,za=1,G0=2,j0=3,W0=4,_T=5,vs=100,vT=101,xT=102,yT=103,ST=104,MT=200,ET=201,wT=202,TT=203,Vh=204,Gh=205,bT=206,AT=207,CT=208,RT=209,PT=210,DT=211,NT=212,LT=213,IT=214,jh=0,Wh=1,Xh=2,uo=3,qh=4,$h=5,Yh=6,Kh=7,aS=0,UT=1,FT=2,ki=0,oS=1,lS=2,uS=3,cS=4,dS=5,fS=6,hS=7,pS=300,Gs=301,co=302,qd=303,$d=304,ud=306,Qh=1e3,rr=1001,Zh=1002,nn=1003,OT=1004,lu=1005,hn=1006,Yd=1007,ws=1008,Wn=1009,mS=1010,gS=1011,wl=1012,km=1013,zi=1014,Ii=1015,pr=1016,Bm=1017,zm=1018,Tl=1020,_S=35902,vS=35899,xS=1021,yS=1022,vi=1023,mr=1026,Ts=1027,SS=1028,Hm=1029,js=1030,Vm=1031,Gm=1033,ec=33776,tc=33777,nc=33778,ic=33779,Jh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,ap=37488,op=37489,Uc=37490,lp=37491,up=37808,cp=37809,dp=37810,fp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,Ep=36492,wp=36494,Tp=36495,bp=36283,Ap=36284,Fc=36285,Cp=36286,kT=3200,Rp=0,BT=1,Lr="",ti="srgb",Oc="srgb-linear",kc="linear",ot="srgb",Zs=7680,X0=519,zT=512,HT=513,VT=514,jm=515,GT=516,jT=517,Wm=518,WT=519,Pp=35044,q0="300 es",Ui=2e3,bl=2001;function XT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qT(){const t=Bc("canvas");return t.style.display="block",t}const $0={};function zc(...t){const e="THREE."+t.shift();console.log(e,...t)}function MS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=MS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=MS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Dp(...t){const e=t.join(" ");e in $0||($0[e]=!0,De(...t))}function $T(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const YT={[jh]:Wh,[Xh]:Yh,[qh]:Kh,[uo]:$h,[Wh]:jh,[Yh]:Xh,[Kh]:qh,[$h]:uo};class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y0=1234567;const nl=Math.PI/180,Al=180/Math.PI;function or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Xm(t,e){return(t%e+e)%e}function KT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function QT(t,e,n){return t!==e?(n-t)/(e-t):0}function il(t,e,n){return(1-n)*t+n*e}function ZT(t,e,n,i){return il(t,e,1-Math.exp(-n*i))}function JT(t,e=1){return e-Math.abs(Xm(t,e*2)-e)}function eb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ib(t,e){return t+Math.random()*(e-t)}function rb(t){return t*(.5-Math.random())}function sb(t){t!==void 0&&(Y0=t);let e=Y0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ab(t){return t*nl}function ob(t){return t*Al}function lb(t){return(t&t-1)===0&&t!==0}function ub(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function db(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*f,l*d,o*u);break;case"YZY":t.set(l*d,o*h,l*f,o*u);break;case"ZXZ":t.set(l*f,l*d,o*h,o*u);break;case"XZX":t.set(o*h,l*_,l*p,o*u);break;case"YXY":t.set(l*p,o*h,l*_,o*u);break;case"ZYZ":t.set(l*_,l*p,o*h,o*u);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function lt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ES={DEG2RAD:nl,RAD2DEG:Al,generateUUID:or,clamp:qe,euclideanModulo:Xm,mapLinear:KT,inverseLerp:QT,lerp:il,damp:ZT,pingpong:JT,smoothstep:eb,smootherstep:tb,randInt:nb,randFloat:ib,randFloatSpread:rb,seededRandom:sb,degToRad:ab,radToDeg:ob,isPowerOfTwo:lb,ceilPowerOfTwo:ub,floorPowerOfTwo:cb,setQuaternionFromProperEuler:db,normalize:lt,denormalize:_i},ig=class ig{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ig.prototype.isVector2=!0;let Le=ig;class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(f!==y||l!==d||u!==p||h!==_){let g=l*d+u*p+h*_+f*y;g<0&&(d=-d,p=-p,_=-_,y=-y,g=-g);let c=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);c=Math.sin(c*m)/v,o=Math.sin(o*m)/v,l=l*c+d*o,u=u*c+p*o,h=h*c+_*o,f=f*c+y*o}else{l=l*c+d*o,u=u*c+p*o,h=h*c+_*o,f=f*c+y*o;const m=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=m,u*=m,h*=m,f*=m}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+h*f+l*p-u*d,e[n+1]=l*_+h*d+u*f-o*p,e[n+2]=u*_+h*p+o*d-l*f,e[n+3]=h*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"YZX":this._x=d*h*f+u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f-d*p*_;break;case"XZY":this._x=d*h*f-u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f+d*p*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rg=class rg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(K0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(K0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*h,this.y=i+l*h+o*u-s*f,this.z=r+l*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rg.prototype.isVector3=!0;let F=rg;const Kd=new F,K0=new rs,sg=class sg{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],g=r[3],c=r[6],m=r[1],v=r[4],S=r[7],b=r[2],T=r[5],R=r[8];return s[0]=a*y+o*m+l*b,s[3]=a*g+o*v+l*T,s[6]=a*c+o*S+l*R,s[1]=u*y+h*m+f*b,s[4]=u*g+h*v+f*T,s[7]=u*c+h*S+f*R,s[2]=d*y+p*m+_*b,s[5]=d*g+p*v+_*T,s[8]=d*c+p*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*l-h*s,p=u*s-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Qd.makeScale(e,n)),this}rotate(e){return this.premultiply(Qd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sg.prototype.isMatrix3=!0;let ke=sg;const Qd=new ke,Q0=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fb(){const t={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Lr?kc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Dp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Dp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Oc]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:Q0,fromXYZ:Z0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Q0,fromXYZ:Z0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),t}const et=fb();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ha(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Js;class hb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=Bc("canvas")),Js.width=e.width,Js.height=e.height;const r=Js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pb=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zd(r[a].image)):s.push(Zd(r[a]))}else s=Zd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let mb=0;const Jd=new F;class pn extends us{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=rr,r=rr,s=hn,a=ws,o=vi,l=Wn,u=pn.DEFAULT_ANISOTROPY,h=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=or(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jd).x}get height(){return this.source.getSize(Jd).y}get depth(){return this.source.getSize(Jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=pS;pn.DEFAULT_ANISOTROPY=1;const ag=class ag{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],g=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,b=(c+1)/2,T=(h+d)/4,R=(f+y)/4,x=(_+g)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=R/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-y)/m,this.z=(d-h)/m,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ag.prototype.isVector4=!0;let It=ag;class gb extends us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new qm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends gb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class wS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,n,i,r,s,a,o,l,u,h,f,d,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,f,d,p,_,y,g)}set(e,n,i,r,s,a,o,l,u,h,f,d,p,_,y,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=h,c[10]=f,c[14]=d,c[3]=p,c[7]=_,c[11]=y,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),a=1/ea.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,_=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-y*u,n[9]=-o*l,n[2]=y-d*u,n[6]=_+p*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=u*h,y=u*f;n[0]=d+y*o,n[4]=_*o-p,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-_,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=u*h,y=u*f;n[0]=d-y*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*h,n[9]=y-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,_=o*h,y=o*f;n[0]=l*h,n[4]=_*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,y=o*u;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,y=o*u;n[0]=l*h,n[4]=-f,n[8]=u*h,n[1]=d*f+y,n[5]=a*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vb,e,xb)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Sr.crossVectors(i,On),Sr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Sr.crossVectors(i,On)),Sr.normalize(),uu.crossVectors(On,Sr),r[0]=Sr.x,r[4]=uu.x,r[8]=On.x,r[1]=Sr.y,r[5]=uu.y,r[9]=On.y,r[2]=Sr.z,r[6]=uu.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],g=i[10],c=i[14],m=i[3],v=i[7],S=i[11],b=i[15],T=r[0],R=r[4],x=r[8],C=r[12],N=r[1],P=r[5],k=r[9],X=r[13],Y=r[2],I=r[6],j=r[10],H=r[14],B=r[3],q=r[7],ee=r[11],oe=r[15];return s[0]=a*T+o*N+l*Y+u*B,s[4]=a*R+o*P+l*I+u*q,s[8]=a*x+o*k+l*j+u*ee,s[12]=a*C+o*X+l*H+u*oe,s[1]=h*T+f*N+d*Y+p*B,s[5]=h*R+f*P+d*I+p*q,s[9]=h*x+f*k+d*j+p*ee,s[13]=h*C+f*X+d*H+p*oe,s[2]=_*T+y*N+g*Y+c*B,s[6]=_*R+y*P+g*I+c*q,s[10]=_*x+y*k+g*j+c*ee,s[14]=_*C+y*X+g*H+c*oe,s[3]=m*T+v*N+S*Y+b*B,s[7]=m*R+v*P+S*I+b*q,s[11]=m*x+v*k+S*j+b*ee,s[15]=m*C+v*X+S*H+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],c=e[15],m=l*p-u*d,v=o*p-u*f,S=o*d-l*f,b=a*p-u*h,T=a*d-l*h,R=a*f-o*h;return n*(y*m-g*v+c*S)-i*(_*m-g*b+c*T)+r*(_*v-y*b+c*R)-s*(_*S-y*T+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],c=e[15],m=n*o-i*a,v=n*l-r*a,S=n*u-s*a,b=i*l-r*o,T=i*u-s*o,R=r*u-s*l,x=h*y-f*_,C=h*g-d*_,N=h*c-p*_,P=f*g-d*y,k=f*c-p*y,X=d*c-p*g,Y=m*X-v*k+S*P+b*N-T*C+R*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(o*X-l*k+u*P)*I,e[1]=(r*k-i*X-s*P)*I,e[2]=(y*R-g*T+c*b)*I,e[3]=(d*T-f*R-p*b)*I,e[4]=(l*N-a*X-u*C)*I,e[5]=(n*X-r*N+s*C)*I,e[6]=(g*S-_*R-c*v)*I,e[7]=(h*R-d*S+p*v)*I,e[8]=(a*k-o*N+u*x)*I,e[9]=(i*N-n*k-s*x)*I,e[10]=(_*T-y*S+c*m)*I,e[11]=(f*S-h*T-p*m)*I,e[12]=(o*C-a*P-l*x)*I,e[13]=(n*P-i*C+r*x)*I,e[14]=(y*v-_*b-g*m)*I,e[15]=(h*b-f*v+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,f=o+o,d=s*u,p=s*h,_=s*f,y=a*h,g=a*f,c=o*f,m=l*u,v=l*h,S=l*f,b=i.x,T=i.y,R=i.z;return r[0]=(1-(y+c))*b,r[1]=(p+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+c))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+v)*R,r[9]=(g-m)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ea.set(r[0],r[1],r[2]).length();const o=ea.set(r[4],r[5],r[6]).length(),l=ea.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ci.copy(this);const u=1/a,h=1/o,f=1/l;return ci.elements[0]*=u,ci.elements[1]*=u,ci.elements[2]*=u,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,n.setFromRotationMatrix(ci),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ui,l=!1){const u=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===Ui)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===bl)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ui,l=!1){const u=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===Ui)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===bl)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Ct=jc;const ea=new F,ci=new Ct,vb=new F(0,0,0),xb=new F(1,1,1),Sr=new F,uu=new F,On=new F,J0=new Ct,e_=new rs;class ss{constructor(e=0,n=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class TS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yb=0;const t_=new F,ta=new rs,Gi=new Ct,cu=new F,Ro=new F,Sb=new F,Mb=new rs,n_=new F(1,0,0),i_=new F(0,1,0),r_=new F(0,0,1),s_={type:"added"},Eb={type:"removed"},na={type:"childadded",child:null},ef={type:"childremoved",child:null};class en extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new F,n=new ss,i=new rs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ke}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ta.setFromAxisAngle(e,n),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,n){return ta.setFromAxisAngle(e,n),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,n){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cu.copy(e):cu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ro,cu,this.up):Gi.lookAt(cu,Ro,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),ta.setFromRotationMatrix(Gi),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),na.child=e,this.dispatchEvent(na),na.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Eb),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),c=this._getHandJoint(u,y);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},du={h:0,s:0,l:0};function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Xm(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nf(a,s,e+1/3),this.g=nf(a,s,e),this.b=nf(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=bS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return et.workingToColorSpace(cn.copy(this),e),Math.round(qe(cn.r*255,0,255))*65536+Math.round(qe(cn.g*255,0,255))*256+Math.round(qe(cn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ti){et.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(du);const i=il(Mr.h,du.h,n),r=il(Mr.s,du.s,n),s=il(Mr.l,du.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Be;Be.NAMES=bS;class Tb extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const di=new F,ji=new F,rf=new F,Wi=new F,ia=new F,ra=new F,a_=new F,sf=new F,af=new F,of=new F,lf=new It,uf=new It,cf=new It;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),ji.subVectors(i,n),rf.subVectors(e,n);const a=di.dot(di),o=di.dot(ji),l=di.dot(rf),u=ji.dot(ji),h=ji.dot(rf),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return lf.setScalar(0),uf.setScalar(0),cf.setScalar(0),lf.fromBufferAttribute(e,n),uf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lf,s.x),a.addScaledVector(uf,s.y),a.addScaledVector(cf,s.z),a}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),ji.subVectors(e,n),di.cross(ji).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),di.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ia.subVectors(r,i),ra.subVectors(s,i),sf.subVectors(e,i);const l=ia.dot(sf),u=ra.dot(sf);if(l<=0&&u<=0)return n.copy(i);af.subVectors(e,r);const h=ia.dot(af),f=ra.dot(af);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ia,a);of.subVectors(e,s);const p=ia.dot(of),_=ra.dot(of);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(ra,o);const g=h*_-p*f;if(g<=0&&f-h>=0&&p-_>=0)return a_.subVectors(s,r),o=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(a_,o);const c=1/(g+y+d);return a=y*c,o=d*c,n.copy(i).addScaledVector(ia,a).addScaledVector(ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fu.copy(i.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),hu.subVectors(this.max,Po),sa.subVectors(e.a,Po),aa.subVectors(e.b,Po),oa.subVectors(e.c,Po),Er.subVectors(aa,sa),wr.subVectors(oa,aa),fs.subVectors(sa,oa);let n=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-fs.z,fs.y,Er.z,0,-Er.x,wr.z,0,-wr.x,fs.z,0,-fs.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-fs.y,fs.x,0];return!df(n,sa,aa,oa,hu)||(n=[1,0,0,0,1,0,0,0,1],!df(n,sa,aa,oa,hu))?!1:(pu.crossVectors(Er,wr),n=[pu.x,pu.y,pu.z],df(n,sa,aa,oa,hu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new F,new F,new F,new F,new F,new F,new F,new F],fi=new F,fu=new xo,sa=new F,aa=new F,oa=new F,Er=new F,wr=new F,fs=new F,Po=new F,hu=new F,pu=new F,hs=new F;function df(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hs.fromArray(t,s);const o=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),l=e.dot(hs),u=n.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Bt=new F,mu=new Le;let bb=0;class Si extends us{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mu.fromBufferAttribute(this,n),mu.applyMatrix3(e),this.setXY(n,mu.x,mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_i(n,this.array)),n}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_i(n,this.array)),n}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_i(n,this.array)),n}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_i(n,this.array)),n}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class AS extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class CS extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Ab=new xo,Do=new F,ff=new F;class kl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ab.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(ff)),this.expandByPoint(Do.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cb=0;const Jn=new Ct,hf=new en,la=new F,kn=new xo,No=new xo,Kt=new F;class Tn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XT(e)?CS:AS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];No.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(kn.min,No.min),kn.expandByPoint(Kt),Kt.addVectors(kn.max,No.max),kn.expandByPoint(Kt)):(kn.expandByPoint(No.min),kn.expandByPoint(No.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Kt.fromBufferAttribute(o,u),l&&(la.fromBufferAttribute(e,u),Kt.add(la)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new F,l[x]=new F;const u=new F,h=new F,f=new F,d=new Le,p=new Le,_=new Le,y=new F,g=new F;function c(x,C,N){u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,N),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),h.sub(u),f.sub(u),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[x].add(y),o[C].add(y),o[N].add(y),l[x].add(g),l[C].add(g),l[N].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,C=m.length;x<C;++x){const N=m[x],P=N.start,k=N.count;for(let X=P,Y=P+k;X<Y;X+=3)c(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new F,S=new F,b=new F,T=new F;function R(x){b.fromBufferAttribute(r,x),T.copy(b);const C=o[x];v.copy(C),v.sub(b.multiplyScalar(b.dot(C))).normalize(),S.crossVectors(T,C);const P=S.dot(l[x])<0?-1:1;a.setXYZW(x,v.x,v.y,v.z,P)}for(let x=0,C=m.length;x<C;++x){const N=m[x],P=N.start,k=N.count;for(let X=P,Y=P+k;X<Y;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,u=new F,h=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(l.length*h);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let c=0;c<h;c++)d[_++]=u[p++]}return new Si(d,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Pp,this.updateRanges=[],this.version=0,this.uuid=or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new F;class Hc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=_i(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=_i(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=_i(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=_i(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){zc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Si(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Pb=0;class qs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=or(),this.name="",this.type="Material",this.blending=za,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==za&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class RS extends qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const Lo=new F,ca=new F,da=new F,fa=new Le,Io=new Le,PS=new Ct,gu=new F,Uo=new F,_u=new F,o_=new Le,pf=new Le,l_=new Le;class DS extends en{constructor(e=new RS){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new Tn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Rb(n,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new Hc(i,3,0,!1)),ua.setAttribute("uv",new Hc(i,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,n){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ca.setFromMatrixScale(this.matrixWorld),PS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ca.multiplyScalar(-da.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;vu(gu.set(-.5,-.5,0),da,a,ca,r,s),vu(Uo.set(.5,-.5,0),da,a,ca,r,s),vu(_u.set(.5,.5,0),da,a,ca,r,s),o_.set(0,0),pf.set(1,0),l_.set(1,1);let o=e.ray.intersectTriangle(gu,Uo,_u,!1,Lo);if(o===null&&(vu(Uo.set(-.5,.5,0),da,a,ca,r,s),pf.set(0,1),o=e.ray.intersectTriangle(gu,_u,Uo,!1,Lo),o===null))return;const l=e.ray.origin.distanceTo(Lo);l<e.near||l>e.far||n.push({distance:l,point:Lo.clone(),uv:ri.getInterpolation(Lo,gu,Uo,_u,o_,pf,l_,new Le),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vu(t,e,n,i,r,s){fa.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Io.x=s*fa.x-r*fa.y,Io.y=r*fa.x+s*fa.y):Io.copy(fa),t.copy(e),t.x+=Io.x,t.y+=Io.y,t.applyMatrix4(PS)}const qi=new F,mf=new F,xu=new F,Tr=new F,gf=new F,yu=new F,_f=new F;class $m{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,n),qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mf.copy(e).add(n).multiplyScalar(.5),xu.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(mf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xu),o=Tr.dot(this.direction),l=-Tr.dot(xu),u=Tr.lengthSq(),h=Math.abs(1-a*a);let f,d,p,_;if(h>0)if(f=a*l-o,d=a*o-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mf).addScaledVector(xu,d),p}intersectSphere(e,n){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,n,i,r,s){gf.subVectors(n,e),yu.subVectors(i,e),_f.crossVectors(gf,yu);let a=this.direction.dot(_f),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tr.subVectors(this.origin,e);const l=o*this.direction.dot(yu.crossVectors(Tr,yu));if(l<0)return null;const u=o*this.direction.dot(gf.cross(Tr));if(u<0||l+u>a)return null;const h=-o*Tr.dot(_f);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bl extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=aS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u_=new Ct,ps=new $m,Su=new kl,c_=new F,Mu=new F,Eu=new F,wu=new F,vf=new F,Tu=new F,d_=new F,bu=new F;class Mn extends en{constructor(e=new Tn,n=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],f=s[l];h!==0&&(vf.fromBufferAttribute(f,e),a?Tu.addScaledVector(vf,h):Tu.addScaledVector(vf.sub(n),h))}n.add(Tu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Su.copy(i.boundingSphere),Su.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(Su.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Su,c_)===null||ps.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(u_.copy(s).invert(),ps.copy(e.ray).applyMatrix4(u_),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const g=d[_],c=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,b=v;S<b;S+=3){const T=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);r=Au(this,c,e,i,u,h,f,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=_,c=y;g<c;g+=3){const m=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);r=Au(this,a,e,i,u,h,f,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const g=d[_],c=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,b=v;S<b;S+=3){const T=S,R=S+1,x=S+2;r=Au(this,c,e,i,u,h,f,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,c=y;g<c;g+=3){const m=g,v=g+1,S=g+2;r=Au(this,a,e,i,u,h,f,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Db(t,e,n,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===is,o),l===null)return null;bu.copy(o),bu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bu);return u<n.near||u>n.far?null:{distance:u,point:bu.clone(),object:t}}function Au(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Mu),t.getVertexPosition(l,Eu),t.getVertexPosition(u,wu);const h=Db(t,e,n,i,Mu,Eu,wu,d_);if(h){const f=new F;ri.getBarycoord(d_,Mu,Eu,wu,f),r&&(h.uv=ri.getInterpolatedAttribute(r,o,l,u,f,new Le)),s&&(h.uv1=ri.getInterpolatedAttribute(s,o,l,u,f,new Le)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,u,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new F,materialIndex:0};ri.getNormal(Mu,Eu,wu,d.normal),h.face=d,h.barycoord=f}return h}class Nb extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=nn,h=nn,f,d){super(null,a,o,l,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new F,Lb=new F,Ib=new ke;class Pr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xf.subVectors(i,n).cross(Lb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(xf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ib.getNormalMatrix(e),r=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new kl,Ub=new Le(.5,.5),Cu=new F;class Ym{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,a=new Pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],f=s[5],d=s[6],p=s[7],_=s[8],y=s[9],g=s[10],c=s[11],m=s[12],v=s[13],S=s[14],b=s[15];if(r[0].setComponents(u-a,p-h,c-_,b-m).normalize(),r[1].setComponents(u+a,p+h,c+_,b+m).normalize(),r[2].setComponents(u+o,p+f,c+y,b+v).normalize(),r[3].setComponents(u-o,p-f,c-y,b-v).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(u-l,p-d,c-g,b-S).normalize();else if(r[4].setComponents(u-l,p-d,c-g,b-S).normalize(),n===Ui)r[5].setComponents(u+l,p+d,c+g,b+S).normalize();else if(n===bl)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const n=Ub.distanceTo(e.center);return ms.radius=.7071067811865476+n,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cu.x=r.normal.x>0?e.max.x:e.min.x,Cu.y=r.normal.y>0?e.max.y:e.min.y,Cu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Km extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new F,Gc=new F,f_=new Ct,Fo=new $m,Ru=new kl,yf=new F,h_=new F;class Qm extends en{constructor(e=new Tn,n=new Km){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vc.fromBufferAttribute(n,r-1),Gc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new qt(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ru.copy(i.boundingSphere),Ru.applyMatrix4(r),Ru.radius+=s,e.ray.intersectsSphere(Ru)===!1)return;f_.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(f_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=p,g=_-1;y<g;y+=u){const c=h.getX(y),m=h.getX(y+1),v=Pu(this,e,Fo,l,c,m,y);v&&n.push(v)}if(this.isLineLoop){const y=h.getX(_-1),g=h.getX(p),c=Pu(this,e,Fo,l,y,g,_-1);c&&n.push(c)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=p,g=_-1;y<g;y+=u){const c=Pu(this,e,Fo,l,y,y+1,y);c&&n.push(c)}if(this.isLineLoop){const y=Pu(this,e,Fo,l,_-1,p,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Pu(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Vc.fromBufferAttribute(o,r),Gc.fromBufferAttribute(o,s),n.distanceSqToSegment(Vc,Gc,yf,h_)>i)return;yf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(yf);if(!(u<e.near||u>e.far))return{distance:u,point:h_.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const p_=new F,m_=new F;class Fb extends Qm{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)p_.fromBufferAttribute(n,r),m_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+p_.distanceTo(m_);e.setAttribute("lineDistance",new qt(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NS extends pn{constructor(e=[],n=Gs,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ob extends pn{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends pn{constructor(e,n,i=zi,r,s,a,o=nn,l=nn,u,h=mr,f=1){if(h!==mr&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kb extends fo{constructor(e,n=zi,i=Gs,r,s,a=nn,o=nn,l,u=mr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class LS extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function _(y,g,c,m,v,S,b,T,R,x,C){const N=S/R,P=b/x,k=S/2,X=b/2,Y=T/2,I=R+1,j=x+1;let H=0,B=0;const q=new F;for(let ee=0;ee<j;ee++){const oe=ee*P-X;for(let he=0;he<I;he++){const Xe=he*N-k;q[y]=Xe*m,q[g]=oe*v,q[c]=Y,u.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[c]=T>0?1:-1,h.push(q.x,q.y,q.z),f.push(he/R),f.push(1-ee/x),H+=1}}for(let ee=0;ee<x;ee++)for(let oe=0;oe<R;oe++){const he=d+oe+I*ee,Xe=d+oe+I*(ee+1),Ke=d+(oe+1)+I*(ee+1),Ue=d+(oe+1)+I*ee;l.push(he,Xe,Ue),l.push(Xe,Ke,Ue),B+=6}o.addGroup(p,B,C),p+=B,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cd extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,f=e/o,d=n/l,p=[],_=[],y=[],g=[];for(let c=0;c<h;c++){const m=c*d-a;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-m,0),y.push(0,0,1),g.push(v/o),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const v=m+u*c,S=m+u*(c+1),b=m+1+u*(c+1),T=m+1+u*c;p.push(v,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends Tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],f=new F,d=new F,p=[],_=[],y=[],g=[];for(let c=0;c<=i;c++){const m=[],v=c/i;let S=0;c===0&&a===0?S=.5/n:c===i&&l===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const T=b/n;f.x=-e*Math.cos(r+T*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+v*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(T+S,1-v),m.push(u++)}h.push(m)}for(let c=0;c<i;c++)for(let m=0;m<n;m++){const v=h[c][m+1],S=h[c][m],b=h[c+1][m],T=h[c+1][m+1];(c!==0||a>0)&&p.push(v,S,T),(c!==i-1||l<Math.PI)&&p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zm extends Tn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],h=[],f=[],d=new F,p=new F,_=new F;for(let y=0;y<=i;y++){const g=a+y/i*o;for(let c=0;c<=r;c++){const m=c/r*s;p.x=(e+n*Math.cos(g))*Math.cos(m),p.y=(e+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),u.push(p.x,p.y,p.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),_.subVectors(p,d).normalize(),h.push(_.x,_.y,_.z),f.push(c/r),f.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=r;g++){const c=(r+1)*y+g-1,m=(r+1)*(y-1)+g-1,v=(r+1)*(y-1)+g,S=(r+1)*y+g;l.push(c,m,S),l.push(m,v,S)}this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(g_(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(g_(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function g_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Bb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function IS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const zb={clone:po,merge:_n};var Hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=Bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gb extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class US extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jb extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wb extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jm extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Sf=new Ct,__=new F,v_=new F;class FS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ym,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;__.setFromMatrixPosition(e.matrixWorld),n.position.copy(__),v_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(v_),n.updateMatrixWorld(),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===bl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Du=new F,Nu=new rs,bi=new F;class OS extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Du,Nu,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Nu,bi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Du,Nu,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Nu,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new F,x_=new Le,y_=new Le;class Gn extends OS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,x_,y_),n.subVectors(y_,x_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xb extends FS{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class qb extends Jm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Xb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class eg extends OS{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $b extends FS{constructor(){super(new eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yb extends Jm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new $b}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Kb extends Jm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ha=-90,pa=1;class Qb extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ha,pa,e,n);r.layers=this.layers,this.add(r);const s=new Gn(ha,pa,e,n);s.layers=this.layers,this.add(s);const a=new Gn(ha,pa,e,n);a.layers=this.layers,this.add(a);const o=new Gn(ha,pa,e,n);o.layers=this.layers,this.add(o);const l=new Gn(ha,pa,e,n);l.layers=this.layers,this.add(l);const u=new Gn(ha,pa,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zb extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class S_{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const og=class og{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};og.prototype.isMatrix2=!0;let M_=og;class Jb extends Fb{constructor(e=10,n=10,i=4473924,r=8947848){i=new Be(i),r=new Be(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let d=0,p=0,_=-o;d<=n;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const y=d===s?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const h=new Tn;h.setAttribute("position",new qt(l,3)),h.setAttribute("color",new qt(u,3));const f=new Km({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class eA extends us{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function E_(t,e,n,i){const r=tA(i);switch(n){case xS:return t*e;case SS:return t*e/r.components*r.byteLength;case Hm:return t*e/r.components*r.byteLength;case js:return t*e*2/r.components*r.byteLength;case Vm:return t*e*2/r.components*r.byteLength;case yS:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case Gm:return t*e*4/r.components*r.byteLength;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(t,16)*Math.max(e,8)/4;case Jh:case tp:return Math.max(t,8)*Math.max(e,8)/2;case ip:case rp:case ap:case op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sp:case Uc:case lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ep:case wp:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bp:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fc:case Cp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tA(t){switch(t){case Wn:case mS:return{byteLength:1,components:1};case wl:case gS:case pr:return{byteLength:2,components:1};case Bm:case zm:return{byteLength:2,components:4};case zi:case km:case Ii:return{byteLength:4,components:1};case _S:case vS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kS(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nA(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const h=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var iA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LA="gl_FragColor = linearToOutputTexel( gl_FragColor );",IA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_C=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$C=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:iA,alphahash_pars_fragment:rA,alphamap_fragment:sA,alphamap_pars_fragment:aA,alphatest_fragment:oA,alphatest_pars_fragment:lA,aomap_fragment:uA,aomap_pars_fragment:cA,batching_pars_vertex:dA,batching_vertex:fA,begin_vertex:hA,beginnormal_vertex:pA,bsdfs:mA,iridescence_fragment:gA,bumpmap_pars_fragment:_A,clipping_planes_fragment:vA,clipping_planes_pars_fragment:xA,clipping_planes_pars_vertex:yA,clipping_planes_vertex:SA,color_fragment:MA,color_pars_fragment:EA,color_pars_vertex:wA,color_vertex:TA,common:bA,cube_uv_reflection_fragment:AA,defaultnormal_vertex:CA,displacementmap_pars_vertex:RA,displacementmap_vertex:PA,emissivemap_fragment:DA,emissivemap_pars_fragment:NA,colorspace_fragment:LA,colorspace_pars_fragment:IA,envmap_fragment:UA,envmap_common_pars_fragment:FA,envmap_pars_fragment:OA,envmap_pars_vertex:kA,envmap_physical_pars_fragment:YA,envmap_vertex:BA,fog_vertex:zA,fog_pars_vertex:HA,fog_fragment:VA,fog_pars_fragment:GA,gradientmap_pars_fragment:jA,lightmap_pars_fragment:WA,lights_lambert_fragment:XA,lights_lambert_pars_fragment:qA,lights_pars_begin:$A,lights_toon_fragment:KA,lights_toon_pars_fragment:QA,lights_phong_fragment:ZA,lights_phong_pars_fragment:JA,lights_physical_fragment:eC,lights_physical_pars_fragment:tC,lights_fragment_begin:nC,lights_fragment_maps:iC,lights_fragment_end:rC,lightprobes_pars_fragment:sC,logdepthbuf_fragment:aC,logdepthbuf_pars_fragment:oC,logdepthbuf_pars_vertex:lC,logdepthbuf_vertex:uC,map_fragment:cC,map_pars_fragment:dC,map_particle_fragment:fC,map_particle_pars_fragment:hC,metalnessmap_fragment:pC,metalnessmap_pars_fragment:mC,morphinstance_vertex:gC,morphcolor_vertex:_C,morphnormal_vertex:vC,morphtarget_pars_vertex:xC,morphtarget_vertex:yC,normal_fragment_begin:SC,normal_fragment_maps:MC,normal_pars_fragment:EC,normal_pars_vertex:wC,normal_vertex:TC,normalmap_pars_fragment:bC,clearcoat_normal_fragment_begin:AC,clearcoat_normal_fragment_maps:CC,clearcoat_pars_fragment:RC,iridescence_pars_fragment:PC,opaque_fragment:DC,packing:NC,premultiplied_alpha_fragment:LC,project_vertex:IC,dithering_fragment:UC,dithering_pars_fragment:FC,roughnessmap_fragment:OC,roughnessmap_pars_fragment:kC,shadowmap_pars_fragment:BC,shadowmap_pars_vertex:zC,shadowmap_vertex:HC,shadowmask_pars_fragment:VC,skinbase_vertex:GC,skinning_pars_vertex:jC,skinning_vertex:WC,skinnormal_vertex:XC,specularmap_fragment:qC,specularmap_pars_fragment:$C,tonemapping_fragment:YC,tonemapping_pars_fragment:KC,transmission_fragment:QC,transmission_pars_fragment:ZC,uv_pars_fragment:JC,uv_pars_vertex:eR,uv_vertex:tR,worldpos_vertex:nR,background_vert:iR,background_frag:rR,backgroundCube_vert:sR,backgroundCube_frag:aR,cube_vert:oR,cube_frag:lR,depth_vert:uR,depth_frag:cR,distance_vert:dR,distance_frag:fR,equirect_vert:hR,equirect_frag:pR,linedashed_vert:mR,linedashed_frag:gR,meshbasic_vert:_R,meshbasic_frag:vR,meshlambert_vert:xR,meshlambert_frag:yR,meshmatcap_vert:SR,meshmatcap_frag:MR,meshnormal_vert:ER,meshnormal_frag:wR,meshphong_vert:TR,meshphong_frag:bR,meshphysical_vert:AR,meshphysical_frag:CR,meshtoon_vert:RR,meshtoon_frag:PR,points_vert:DR,points_frag:NR,shadow_vert:LR,shadow_frag:IR,sprite_vert:UR,sprite_frag:FR},me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ni={basic:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:_n([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:_n([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:_n([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:_n([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:_n([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:_n([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:_n([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:_n([me.lights,me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ni.physical={uniforms:_n([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Lu={r:0,b:0,g:0},OR=new Ct,BS=new ke;BS.set(-1,0,0,0,1,0,0,0,1);function kR(t,e,n,i,r,s){const a=new Be(0);let o=r===!0?0:1,l,u,h=null,f=0,d=null;function p(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const S=m.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(m){let v=!1;const S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===ud)?(u===void 0&&(u=new Mn(new zl(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:po(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OR.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(BS),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,(h!==S||f!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Mn(new cd(2,2),new Hi({name:"BackgroundMaterial",uniforms:po(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(Lu,IS(t)),n.buffers.color.setClear(Lu.r,Lu.g,Lu.b,v,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:y,dispose:c}}function BR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,k,X,Y,I){let j=!1;const H=f(P,Y,X,k);s!==H&&(s=H,u(s.object)),j=p(P,Y,X,I),j&&_(P,Y,X,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(P,k,X,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function f(P,k,X,Y){const I=Y.wireframe===!0;let j=i[k.id];j===void 0&&(j={},i[k.id]=j);const H=P.isInstancedMesh===!0?P.id:0;let B=j[H];B===void 0&&(B={},j[H]=B);let q=B[X.id];q===void 0&&(q={},B[X.id]=q);let ee=q[I];return ee===void 0&&(ee=d(l()),q[I]=ee),ee}function d(P){const k=[],X=[],Y=[];for(let I=0;I<n;I++)k[I]=0,X[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,k,X,Y){const I=s.attributes,j=k.attributes;let H=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){const oe=I[q];let he=j[q];if(he===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==Y}function _(P,k,X,Y){const I={},j=k.attributes;let H=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){let oe=j[q];oe===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),I[q]=he,H++}s.attributes=I,s.attributesNum=H,s.index=Y}function y(){const P=s.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function g(P){c(P,0)}function c(P,k){const X=s.newAttributes,Y=s.enabledAttributes,I=s.attributeDivisors;X[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),I[P]!==k&&(t.vertexAttribDivisor(P,k),I[P]=k)}function m(){const P=s.newAttributes,k=s.enabledAttributes;for(let X=0,Y=k.length;X<Y;X++)k[X]!==P[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function v(P,k,X,Y,I,j,H){H===!0?t.vertexAttribIPointer(P,k,X,I,j):t.vertexAttribPointer(P,k,X,Y,I,j)}function S(P,k,X,Y){y();const I=Y.attributes,j=X.getAttributes(),H=k.defaultAttributeValues;for(const B in j){const q=j[B];if(q.location>=0){let ee=I[B];if(ee===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const oe=ee.normalized,he=ee.itemSize,Xe=e.get(ee);if(Xe===void 0)continue;const Ke=Xe.buffer,Ue=Xe.type,Q=Xe.bytesPerElement,fe=Ue===t.INT||Ue===t.UNSIGNED_INT||ee.gpuType===km;if(ee.isInterleavedBufferAttribute){const le=ee.data,Ne=le.stride,Oe=ee.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)c(q.location+Ie,le.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)g(q.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ie=0;Ie<q.locationSize;Ie++)v(q.location+Ie,he/q.locationSize,Ue,oe,Ne*Q,(Oe+he/q.locationSize*Ie)*Q,fe)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)c(q.location+le,ee.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<q.locationSize;le++)g(q.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let le=0;le<q.locationSize;le++)v(q.location+le,he/q.locationSize,Ue,oe,he*Q,he/q.locationSize*le*Q,fe)}}else if(H!==void 0){const oe=H[B];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(q.location,oe);break;case 3:t.vertexAttrib3fv(q.location,oe);break;case 4:t.vertexAttrib4fv(q.location,oe);break;default:t.vertexAttrib1fv(q.location,oe)}}}}m()}function b(){C();for(const P in i){const k=i[P];for(const X in k){const Y=k[X];for(const I in Y){const j=Y[I];for(const H in j)h(j[H].object),delete j[H];delete Y[I]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const X in k){const Y=k[X];for(const I in Y){const j=Y[I];for(const H in j)h(j[H].object),delete j[H];delete Y[I]}}delete i[P.id]}function R(P){for(const k in i){const X=i[k];for(const Y in X){const I=X[Y];if(I[P.id]===void 0)continue;const j=I[P.id];for(const H in j)h(j[H].object),delete j[H];delete I[P.id]}}}function x(P){for(const k in i){const X=i[k],Y=P.isInstancedMesh===!0?P.id:0,I=X[Y];if(I!==void 0){for(const j in I){const H=I[j];for(const B in H)h(H[B].object),delete H[B];delete I[j]}delete X[Y],Object.keys(X).length===0&&delete i[k]}}}function C(){N(),a=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function zR(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function HR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==vi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ii&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(De("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:T}}function VR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,c=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):u();else{const m=s?0:i,v=m*4;let S=c.clippingState||null;l.value=S,S=h(_,d,v,p);for(let b=0;b!==v;++b)S[b]=n[b];c.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const c=p+y*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let v=0,S=p;v!==y;++v,S+=4)a.copy(f[v]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Wr=4,w_=[.125,.215,.35,.446,.526,.582],xs=20,GR=256,Oo=new eg,T_=new Be;let Mf=null,Ef=0,wf=0,Tf=!1;const jR=new F;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jR}=s;Mf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf,Ef,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:pr,format:vi,colorSpace:Oc,depthBuffer:!1},r=A_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WR(s)),this._blurMaterial=qR(s,e,n),this._ggxMaterial=XR(s,e,n)}return r}_compileMaterial(e){const n=new Mn(new Tn,e);this._renderer.compile(n,Oo)}_sceneToCubeUV(e,n,i,r,s){const l=new Gn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(T_),f.toneMapping=ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new zl,new Bl({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let c=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,c=!0):(g.color.copy(T_),c=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):S===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const b=this._cubeSize;ma(r,S*b,v>2?b:0,b,b),f.setRenderTarget(r),c&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Oo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-h*h),d=0+u*1.25,p=f*d,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-Wr?i-_+Wr:0),c=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,ma(s,g,c,3*y,2*y),r.setRenderTarget(s),r.render(o,Oo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ma(e,g,c,3*y,2*y),r.setRenderTarget(e),r.render(o,Oo)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xs-1),y=s/_,g=isFinite(s)?1+Math.floor(h*y):xs;g>xs&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xs}`);const c=[];let m=0;for(let R=0;R<xs;++R){const x=R/y,C=Math.exp(-x*x/2);c.push(C),R===0?m+=C:R<g&&(m+=2*C)}for(let R=0;R<c.length;R++)c[R]=c[R]/m;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=c,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Wr?r-v+Wr:0),T=4*(this._cubeSize-S);ma(n,b,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Oo)}}function WR(t){const e=[],n=[],i=[];let r=t;const s=t-Wr+1+w_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Wr?l=w_[a-t+Wr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,y=3,g=2,c=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),S=new Float32Array(c*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,x=T>2?0:-1,C=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(C,y*_*T),v.set(d,g*_*T);const N=[T,T,T,T,T,T];S.set(N,c*_*T)}const b=new Tn;b.setAttribute("position",new Si(m,y)),b.setAttribute("uv",new Si(v,g)),b.setAttribute("faceIndex",new Si(S,c)),i.push(new Mn(b,null)),r>Wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function A_(t,e,n){const i=new Bi(t,e,n);return i.texture.mapping=ud,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XR(t,e,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qR(t,e,n){const i=new Float32Array(xs),r=new F(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function C_(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function R_(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zS extends Bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new NS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zl(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:ar});s.uniforms.tEquirect.value=n;const a=new Mn(r,s),o=n.minFilter;return n.minFilter===ws&&(n.minFilter=hn),new Qb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function $R(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===qd||p===$d)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const y=new zS(_.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===qd||p===$d,y=p===Gs||p===co;if(_||y){let g=n.get(d);const c=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==c)return i===null&&(i=new b_(t)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const m=d.image;return _&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new b_(t)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,p){return p===qd?d.mapping=Gs:p===$d&&(d.mapping=co),d}function l(d){let p=0;const _=6;for(let y=0;y<_;y++)d[y]!==void 0&&p++;return p===_}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function YR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dp("WebGLRenderer: "+i+" extension not supported."),r}}}function KR(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let v=0,S=m.length;v<S;v+=3){const b=m[v+0],T=m[v+1],R=m[v+2];d.push(b,T,T,R,R,b)}}else{const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const b=v+0,T=v+1,R=v+2;d.push(b,T,T,R,R,b)}}const g=new(_.count>=65535?CS:AS)(d,1);g.version=y;const c=s.get(f);c&&e.remove(c),s.set(f,g)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function QR(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function u(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*a,p),n.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];n.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function ZR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JR(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var p=N;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*T*4*f),x=new wS(R,b,T,f);x.type=Ii,x.needsUpdate=!0;const C=S*4;for(let P=0;P<f;P++){const k=c[P],X=m[P],Y=v[P],I=b*T*4*P;for(let j=0;j<k.count;j++){const H=j*C;_===!0&&(r.fromBufferAttribute(k,j),R[I+H+0]=r.x,R[I+H+1]=r.y,R[I+H+2]=r.z,R[I+H+3]=0),y===!0&&(r.fromBufferAttribute(X,j),R[I+H+4]=r.x,R[I+H+5]=r.y,R[I+H+6]=r.z,R[I+H+7]=0),g===!0&&(r.fromBufferAttribute(Y,j),R[I+H+8]=r.x,R[I+H+9]=r.y,R[I+H+10]=r.z,R[I+H+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new Le(b,T)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function e2(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const t2={[oS]:"LINEAR_TONE_MAPPING",[lS]:"REINHARD_TONE_MAPPING",[uS]:"CINEON_TONE_MAPPING",[cS]:"ACES_FILMIC_TONE_MAPPING",[fS]:"AGX_TONE_MAPPING",[hS]:"NEUTRAL_TONE_MAPPING",[dS]:"CUSTOM_TONE_MAPPING"};function n2(t,e,n,i,r){const s=new Bi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new fo(e,n):void 0}),a=new Bi(e,n,{type:pr,depthBuffer:!1,stencilBuffer:!1}),o=new Tn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new Gb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Mn(o,l),h=new eg(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,y=null,g=[],c=!1;this.setSize=function(m,v){s.setSize(m,v),a.setSize(m,v);for(let S=0;S<g.length;S++){const b=g[S];b.setSize&&b.setSize(m,v)}},this.setEffects=function(m){g=m,c=g.length>0&&g[0].isRenderPass===!0;const v=s.width,S=s.height;for(let b=0;b<g.length;b++){const T=g[b];T.setSize&&T.setSize(v,S)}},this.begin=function(m,v){if(p||m.toneMapping===ki&&g.length===0)return!1;if(y=v,v!==null){const S=v.width,b=v.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return c===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=ki,!0},this.hasRenderPass=function(){return c},this.end=function(m,v){m.toneMapping=_,p=!0;let S=s,b=a;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(m,b,S,v),R.needsSwap!==!1)){const x=S;S=b,b=x}}if(f!==m.outputColorSpace||d!==m.toneMapping){f=m.outputColorSpace,d=m.toneMapping,l.defines={},et.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");const T=t2[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(y),m.render(u,h),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const HS=new pn,Np=new fo(1,1),VS=new wS,GS=new _b,jS=new NS,P_=[],D_=[],N_=new Float32Array(16),L_=new Float32Array(9),I_=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=P_[r];if(s===void 0&&(s=new Float32Array(r),P_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fd(t,e){let n=D_[e];n===void 0&&(n=new Int32Array(e),D_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function i2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function o2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;I_.set(i),t.uniformMatrix2fv(this.addr,!1,I_),Yt(n,i)}}function l2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;L_.set(i),t.uniformMatrix3fv(this.addr,!1,L_),Yt(n,i)}}function u2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;N_.set(i),t.uniformMatrix4fv(this.addr,!1,N_),Yt(n,i)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function p2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?Wm:jm,s=Np):s=HS,n.setTexture2D(e||s,r)}function x2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||GS,r)}function y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jS,r)}function S2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||VS,r)}function M2(t){switch(t){case 5126:return i2;case 35664:return r2;case 35665:return s2;case 35666:return a2;case 35674:return o2;case 35675:return l2;case 35676:return u2;case 5124:case 35670:return c2;case 35667:case 35671:return d2;case 35668:case 35672:return f2;case 35669:case 35673:return h2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return S2}}function E2(t,e){t.uniform1fv(this.addr,e)}function w2(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function T2(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function b2(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function A2(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function C2(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function R2(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function P2(t,e){t.uniform1iv(this.addr,e)}function D2(t,e){t.uniform2iv(this.addr,e)}function N2(t,e){t.uniform3iv(this.addr,e)}function L2(t,e){t.uniform4iv(this.addr,e)}function I2(t,e){t.uniform1uiv(this.addr,e)}function U2(t,e){t.uniform2uiv(this.addr,e)}function F2(t,e){t.uniform3uiv(this.addr,e)}function O2(t,e){t.uniform4uiv(this.addr,e)}function k2(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Np:a=HS;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function B2(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||GS,s[a])}function z2(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jS,s[a])}function H2(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||VS,s[a])}function V2(t){switch(t){case 5126:return E2;case 35664:return w2;case 35665:return T2;case 35666:return b2;case 35674:return A2;case 35675:return C2;case 35676:return R2;case 5124:case 35670:return P2;case 35667:case 35671:return D2;case 35668:case 35672:return N2;case 35669:case 35673:return L2;case 5125:return I2;case 36294:return U2;case 36295:return F2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return z2;case 36289:case 36303:case 36311:case 36292:return H2}}class G2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=M2(n.type)}}class j2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=V2(n.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function U_(t,e){t.seq.push(e),t.map[e.id]=e}function X2(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),a=bf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){U_(n,u===void 0?new G2(o,t,e):new j2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new W2(o),U_(n,f)),n=f}}}class rc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);X2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function F_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const q2=37297;let $2=0;function Y2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const O_=new ke;function K2(t){et._getMatrix(O_,et.workingColorSpace,t);const e=`mat3( ${O_.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case kc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function k_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Y2(t.getShaderSource(e),o)}else return s}function Q2(t,e){const n=K2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Z2={[oS]:"Linear",[lS]:"Reinhard",[uS]:"Cineon",[cS]:"ACESFilmic",[fS]:"AgX",[hS]:"Neutral",[dS]:"Custom"};function J2(t,e){const n=Z2[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Iu=new F;function eP(){et.getLuminanceCoefficients(Iu);const t=Iu.x.toFixed(4),e=Iu.y.toFixed(4),n=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function nP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xo(t){return t!==""}function B_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(t){return t.replace(rP,aP)}const sP=new Map;function aP(t,e){let n=je[e];if(n===void 0){const i=sP.get(e);if(i!==void 0)n=je[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lp(n)}const oP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(t){return t.replace(oP,lP)}function lP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function V_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uP={[Ju]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function cP(t){return uP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dP={[Gs]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[ud]:"ENVMAP_TYPE_CUBE_UV"};function fP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":dP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const hP={[co]:"ENVMAP_MODE_REFRACTION"};function pP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":hP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mP={[aS]:"ENVMAP_BLENDING_MULTIPLY",[UT]:"ENVMAP_BLENDING_MIX",[FT]:"ENVMAP_BLENDING_ADD"};function gP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":mP[t.combine]||"ENVMAP_BLENDING_NONE"}function _P(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vP(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=cP(n),u=fP(n),h=pP(n),f=gP(n),d=_P(n),p=tP(n),_=nP(s),y=r.createProgram();let g,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),g.length>0&&(g+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),c.length>0&&(c+=`
`)):(g=[V_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),c=[V_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?je.tonemapping_pars_fragment:"",n.toneMapping!==ki?J2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Q2("linearToOutputTexel",n.outputColorSpace),eP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),a=Lp(a),a=B_(a,n),a=z_(a,n),o=Lp(o),o=B_(o,n),o=z_(o,n),a=H_(a),o=H_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=m+g+a,S=m+c+o,b=F_(r,r.VERTEX_SHADER,v),T=F_(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(P){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",X=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(T)||"",I=k.trim(),j=X.trim(),H=Y.trim();let B=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,T);else{const ee=k_(r,b,"vertex"),oe=k_(r,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+ee+`
`+oe)}else I!==""?De("WebGLProgram: Program Info Log:",I):(j===""||H==="")&&(q=!1);q&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:j,prefix:g},fragmentShader:{log:H,prefix:c}})}r.deleteShader(b),r.deleteShader(T),x=new rc(r,y),C=iP(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,q2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let xP=0;class yP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SP(e),n.set(e,i)),i}}class SP{constructor(e){this.id=xP++,this.code=e,this.usedTimes=0}}function MP(t){return t===js||t===Uc||t===Fc}function EP(t,e,n,i,r,s){const a=new TS,o=new yP,l=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,C,N,P,k,X){const Y=P.fog,I=k.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||j,H),q=B&&B.mapping===ud?B.image.height:null,ee=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,he=oe!==void 0?oe.length:0;let Xe=0;I.morphAttributes.position!==void 0&&(Xe=1),I.morphAttributes.normal!==void 0&&(Xe=2),I.morphAttributes.color!==void 0&&(Xe=3);let Ke,Ue,Q,fe;if(ee){const ze=Ni[ee];Ke=ze.vertexShader,Ue=ze.fragmentShader}else Ke=x.vertexShader,Ue=x.fragmentShader,o.update(x),Q=o.getVertexShaderID(x),fe=o.getFragmentShaderID(x);const le=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,wt=!!x.map,Qe=!!x.matcap,ct=!!B,yt=!!x.aoMap,$e=!!x.lightMap,Ht=!!x.bumpMap,Tt=!!x.normalMap,Un=!!x.displacementMap,U=!!x.emissiveMap,Vt=!!x.metalnessMap,Ze=!!x.roughnessMap,_t=x.anisotropy>0,pe=x.clearcoat>0,Pt=x.dispersion>0,A=x.iridescence>0,M=x.sheen>0,z=x.transmission>0,Z=_t&&!!x.anisotropyMap,ne=pe&&!!x.clearcoatMap,re=pe&&!!x.clearcoatNormalMap,de=pe&&!!x.clearcoatRoughnessMap,$=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,xe=M&&!!x.sheenColorMap,Me=M&&!!x.sheenRoughnessMap,ue=!!x.specularMap,se=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Ve=z&&!!x.transmissionMap,rt=z&&!!x.thicknessMap,L=!!x.gradientMap,ae=!!x.alphaMap,K=x.alphaTest>0,ye=!!x.alphaHash,ce=!!x.extensions;let te=ki;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const be={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Ue,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:Qe,envMap:ct,envMapMode:ct&&B.mapping,envMapCubeUVHeight:q,aoMap:yt,lightMap:$e,bumpMap:Ht,normalMap:Tt,displacementMap:Un,emissiveMap:U,normalMapObjectSpace:Tt&&x.normalMapType===BT,normalMapTangentSpace:Tt&&x.normalMapType===Rp,packedNormalMap:Tt&&x.normalMapType===Rp&&MP(x.normalMap.format),metalnessMap:Vt,roughnessMap:Ze,anisotropy:_t,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:Pt,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:J,sheen:M,sheenColorMap:xe,sheenRoughnessMap:Me,specularMap:ue,specularColorMap:se,specularIntensityMap:Fe,transmission:z,transmissionMap:Ve,thicknessMap:rt,gradientMap:L,opaque:x.transparent===!1&&x.blending===za&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:ye,combine:x.combine,mapUv:wt&&_(x.map.channel),aoMapUv:yt&&_(x.aoMap.channel),lightMapUv:$e&&_(x.lightMap.channel),bumpMapUv:Ht&&_(x.bumpMap.channel),normalMapUv:Tt&&_(x.normalMap.channel),displacementMapUv:Un&&_(x.displacementMap.channel),emissiveMapUv:U&&_(x.emissiveMap.channel),metalnessMapUv:Vt&&_(x.metalnessMap.channel),roughnessMapUv:Ze&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:ne&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:ue&&_(x.specularMap.channel),specularColorMapUv:se&&_(x.specularColorMap.channel),specularIntensityMapUv:Fe&&_(x.specularIntensityMap.channel),transmissionMapUv:Ve&&_(x.transmissionMap.channel),thicknessMapUv:rt&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Tt||_t),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(wt||ae),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ne,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tr,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(c(C,x),m(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function c(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function m(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function v(x){const C=p[x.type];let N;if(C){const P=Ni[C];N=zb.clone(P.uniforms)}else N=x.uniforms;return N}function S(x,C){let N=h.get(C);return N!==void 0?++N.usedTimes:(N=new vP(t,C,x,r),u.push(N),h.set(C,N)),N}function b(x){if(--x.usedTimes===0){const C=u.indexOf(x);u[C]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function wP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function G_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function j_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,y,g,c){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:c},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=_,m.materialVariant=a(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=g,m.group=c),e++,m}function l(d,p,_,y,g,c){const m=o(d,p,_,y,g,c);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function u(d,p,_,y,g,c){const m=o(d,p,_,y,g,c);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function h(d,p){n.length>1&&n.sort(d||TP),i.length>1&&i.sort(p||G_),r.length>1&&r.sort(p||G_)}function f(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:f,sort:h}}function bP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new j_,t.set(i,[a])):r>=s.length?(a=new j_,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function AP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Be};break;case"SpotLight":n={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function CP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RP=0;function PP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DP(t){const e=new AP,n=CP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new Ct,a=new Ct;function o(u){let h=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,_=0,y=0,g=0,c=0,m=0,v=0,S=0,b=0,T=0,R=0;u.sort(PP);for(let C=0,N=u.length;C<N;C++){const P=u[C],k=P.color,X=P.intensity,Y=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===js?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*X,f+=k.g*X,d+=k.b*X;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],X);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,B=n.get(P);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=j,p++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(k).multiplyScalar(X),j.distance=Y,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[y]=j;const H=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,H.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=H.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=I,S++}y++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(k).multiplyScalar(X),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=j,g++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const H=P.shadow,B=n.get(P);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=j,_++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(X),j.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[c]=j,c++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==c||x.numDirectionalShadows!==m||x.numPointShadows!==v||x.numSpotShadows!==S||x.numSpotMaps!==b||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=c,x.numDirectionalShadows=m,x.numPointShadows=v,x.numSpotShadows=S,x.numSpotMaps=b,x.numLightProbes=R,i.version=RP++)}function l(u,h){let f=0,d=0,p=0,_=0,y=0;const g=h.matrixWorldInverse;for(let c=0,m=u.length;c<m;c++){const v=u[c];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function W_(t){const e=new DP(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function NP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new W_(t),e.set(r,[o])):s>=a.length?(o=new W_(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const LP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UP=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],FP=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],X_=new Ct,ko=new F,Af=new F;function OP(t,e,n){let i=new Ym;const r=new Le,s=new Le,a=new It,o=new jb,l=new Wb,u={},h=n.maxTextureSize,f={[is]:In,[In]:is,[tr]:tr},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:LP,fragmentShader:IP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let c=this.type;this.render=function(T,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===sS&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ju);const C=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ar),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=c!==this.type;X&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=T.length;Y<I;Y++){const j=T[Y],H=j.shadow;if(H===void 0){De("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const B=H.getFrameExtents();r.multiply(B),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,H.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wo){if(j.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(r.x,r.y,{format:js,type:pr,minFilter:hn,magFilter:hn,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new fo(r.x,r.y,Ii),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=mr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn}else j.isPointLight?(H.map=new zS(r.x),H.map.depthTexture=new kb(r.x,zi)):(H.map=new Bi(r.x,r.y),H.map.depthTexture=new fo(r.x,r.y,zi)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=mr,this.type===Ju?(H.map.depthTexture.compareFunction=q?Wm:jm,H.map.depthTexture.minFilter=hn,H.map.depthTexture.magFilter=hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn);H.camera.updateProjectionMatrix()}const ee=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ee;oe++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(H.map),t.clear());const he=H.getViewport(oe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),k.viewport(a)}if(j.isPointLight){const he=H.camera,Xe=H.matrix,Ke=j.distance||he.far;Ke!==he.far&&(he.far=Ke,he.updateProjectionMatrix()),ko.setFromMatrixPosition(j.matrixWorld),he.position.copy(ko),Af.copy(he.position),Af.add(UP[oe]),he.up.copy(FP[oe]),he.lookAt(Af),he.updateMatrixWorld(),Xe.makeTranslation(-ko.x,-ko.y,-ko.z),X_.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(X_,he.coordinateSystem,he.reversedDepth)}else H.updateMatrices(j);i=H.getFrustum(),S(R,x,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Wo&&m(H,x),H.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(C,N,P)};function m(T,R){const x=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bi(r.x,r.y,{format:js,type:pr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,x,p,y,null)}function v(T,R,x,C){let N=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)N=P;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=N.uuid,X=R.uuid;let Y=u[k];Y===void 0&&(Y={},u[k]=Y);let I=Y[X];I===void 0&&(I=N.clone(),Y[X]=I,R.addEventListener("dispose",b)),N=I}if(N.visible=R.visible,N.wireframe=R.wireframe,C===Wo?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:f[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=t.properties.get(N);k.light=x}return N}function S(T,R,x,C,N){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Wo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const X=e.update(T),Y=T.material;if(Array.isArray(Y)){const I=X.groups;for(let j=0,H=I.length;j<H;j++){const B=I[j],q=Y[B.materialIndex];if(q&&q.visible){const ee=v(T,q,C,N);T.onBeforeShadow(t,T,R,x,X,ee,B),t.renderBufferDirect(x,null,X,ee,T,B),T.onAfterShadow(t,T,R,x,X,ee,B)}}}else if(Y.visible){const I=v(T,Y,C,N);T.onBeforeShadow(t,T,R,x,X,I,null),t.renderBufferDirect(x,null,X,I,T,null),T.onAfterShadow(t,T,R,x,X,I,null)}}const k=T.children;for(let X=0,Y=k.length;X<Y;X++)S(k[X],R,x,C,N)}function b(T){T.target.removeEventListener("dispose",b);for(const x in u){const C=u[x],N=T.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function kP(t,e){function n(){let L=!1;const ae=new It;let K=null;const ye=new It(0,0,0,0);return{setMask:function(ce){K!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,be,ze,Ut){Ut===!0&&(ce*=ze,te*=ze,be*=ze),ae.set(ce,te,be,ze),ye.equals(ae)===!1&&(t.clearColor(ce,te,be,ze),ye.copy(ae))},reset:function(){L=!1,K=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,K=null,ye=null,ce=null;return{setReversed:function(te){if(ae!==te){const be=e.get("EXT_clip_control");te?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const ze=ce;ce=null,this.setClear(ze)}},getReversed:function(){return ae},setTest:function(te){te?le(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(te){K!==te&&!L&&(t.depthMask(te),K=te)},setFunc:function(te){if(ae&&(te=YT[te]),ye!==te){switch(te){case jh:t.depthFunc(t.NEVER);break;case Wh:t.depthFunc(t.ALWAYS);break;case Xh:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case qh:t.depthFunc(t.EQUAL);break;case $h:t.depthFunc(t.GEQUAL);break;case Yh:t.depthFunc(t.GREATER);break;case Kh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(ce=te,ae&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,K=null,ye=null,ce=null,ae=!1}}}function r(){let L=!1,ae=null,K=null,ye=null,ce=null,te=null,be=null,ze=null,Ut=null;return{setTest:function(dt){L||(dt?le(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(dt){ae!==dt&&!L&&(t.stencilMask(dt),ae=dt)},setFunc:function(dt,Vi,Ei){(K!==dt||ye!==Vi||ce!==Ei)&&(t.stencilFunc(dt,Vi,Ei),K=dt,ye=Vi,ce=Ei)},setOp:function(dt,Vi,Ei){(te!==dt||be!==Vi||ze!==Ei)&&(t.stencilOp(dt,Vi,Ei),te=dt,be=Vi,ze=Ei)},setLocked:function(dt){L=dt},setClear:function(dt){Ut!==dt&&(t.clearStencil(dt),Ut=dt)},reset:function(){L=!1,ae=null,K=null,ye=null,ce=null,te=null,be=null,ze=null,Ut=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},f={},d={},p=new WeakMap,_=[],y=null,g=!1,c=null,m=null,v=null,S=null,b=null,T=null,R=null,x=new Be(0,0,0),C=0,N=!1,P=null,k=null,X=null,Y=null,I=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=B>=2);let ee=null,oe={};const he=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),Ke=new It().fromArray(he),Ue=new It().fromArray(Xe);function Q(L,ae,K,ye){const ce=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<K;be++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ae+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return te}const fe={};fe[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(uo),Ht(!1),Tt(V0),le(t.CULL_FACE),yt(ar);function le(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ne(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Oe(L,ae){return d[L]!==ae?(t.bindFramebuffer(L,ae),d[L]=ae,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(L,ae){let K=_,ye=!1;if(L){K=p.get(ae),K===void 0&&(K=[],p.set(ae,K));const ce=L.textures;if(K.length!==ce.length||K[0]!==t.COLOR_ATTACHMENT0){for(let te=0,be=ce.length;te<be;te++)K[te]=t.COLOR_ATTACHMENT0+te;K.length=ce.length,ye=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ye=!0);ye&&t.drawBuffers(K)}function wt(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const Qe={[vs]:t.FUNC_ADD,[vT]:t.FUNC_SUBTRACT,[xT]:t.FUNC_REVERSE_SUBTRACT};Qe[yT]=t.MIN,Qe[ST]=t.MAX;const ct={[MT]:t.ZERO,[ET]:t.ONE,[wT]:t.SRC_COLOR,[Vh]:t.SRC_ALPHA,[PT]:t.SRC_ALPHA_SATURATE,[CT]:t.DST_COLOR,[bT]:t.DST_ALPHA,[TT]:t.ONE_MINUS_SRC_COLOR,[Gh]:t.ONE_MINUS_SRC_ALPHA,[RT]:t.ONE_MINUS_DST_COLOR,[AT]:t.ONE_MINUS_DST_ALPHA,[DT]:t.CONSTANT_COLOR,[NT]:t.ONE_MINUS_CONSTANT_COLOR,[LT]:t.CONSTANT_ALPHA,[IT]:t.ONE_MINUS_CONSTANT_ALPHA};function yt(L,ae,K,ye,ce,te,be,ze,Ut,dt){if(L===ar){g===!0&&(Ne(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),L!==_T){if(L!==c||dt!==N){if((m!==vs||b!==vs)&&(t.blendEquation(t.FUNC_ADD),m=vs,b=vs),dt)switch(L){case za:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case G0:t.blendFunc(t.ONE,t.ONE);break;case j0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case W0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case za:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case G0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case j0:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}v=null,S=null,T=null,R=null,x.set(0,0,0),C=0,c=L,N=dt}return}ce=ce||ae,te=te||K,be=be||ye,(ae!==m||ce!==b)&&(t.blendEquationSeparate(Qe[ae],Qe[ce]),m=ae,b=ce),(K!==v||ye!==S||te!==T||be!==R)&&(t.blendFuncSeparate(ct[K],ct[ye],ct[te],ct[be]),v=K,S=ye,T=te,R=be),(ze.equals(x)===!1||Ut!==C)&&(t.blendColor(ze.r,ze.g,ze.b,Ut),x.copy(ze),C=Ut),c=L,N=!1}function $e(L,ae){L.side===tr?Ne(t.CULL_FACE):le(t.CULL_FACE);let K=L.side===In;ae&&(K=!K),Ht(K),L.blending===za&&L.transparent===!1?yt(ar):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function Tt(L){L!==mT?(le(t.CULL_FACE),L!==k&&(L===V0?t.cullFace(t.BACK):L===gT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),k=L}function Un(L){L!==X&&(H&&t.lineWidth(L),X=L)}function U(L,ae,K){L?(le(t.POLYGON_OFFSET_FILL),(Y!==ae||I!==K)&&(Y=ae,I=K,a.getReversed()&&(ae=-ae),t.polygonOffset(ae,K))):Ne(t.POLYGON_OFFSET_FILL)}function Vt(L){L?le(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=t.TEXTURE0+j-1),ee!==L&&(t.activeTexture(L),ee=L)}function _t(L,ae,K){K===void 0&&(ee===null?K=t.TEXTURE0+j-1:K=ee);let ye=oe[K];ye===void 0&&(ye={type:void 0,texture:void 0},oe[K]=ye),(ye.type!==L||ye.texture!==ae)&&(ee!==K&&(t.activeTexture(K),ee=K),t.bindTexture(L,ae||fe[L]),ye.type=L,ye.texture=ae)}function pe(){const L=oe[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Pt(){try{t.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function M(){try{t.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function z(){try{t.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function $(){try{t.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function xe(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function Me(L,ae){f[L]!==ae&&(t.pixelStorei(L,ae),f[L]=ae)}function ue(L){Ke.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function se(L){Ue.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function Fe(L,ae){let K=u.get(ae);K===void 0&&(K=new WeakMap,u.set(ae,K));let ye=K.get(L);ye===void 0&&(ye=t.getUniformBlockIndex(ae,L.name),K.set(L,ye))}function Ve(L,ae){const ye=u.get(ae).get(L);l.get(ae)!==ye&&(t.uniformBlockBinding(ae,ye,L.__bindingPointIndex),l.set(ae,ye))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,oe={},d={},p=new WeakMap,_=[],y=null,g=!1,c=null,m=null,v=null,S=null,b=null,T=null,R=null,x=new Be(0,0,0),C=0,N=!1,P=null,k=null,X=null,Y=null,I=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ne,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:wt,setBlending:yt,setMaterial:$e,setFlipSided:Ht,setCullFace:Tt,setLineWidth:Un,setPolygonOffset:U,setScissorTest:Vt,activeTexture:Ze,bindTexture:_t,unbindTexture:pe,compressedTexImage2D:Pt,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Me,getParameter:xe,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:re,texStorage3D:de,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:ue,viewport:se,reset:rt}}function BP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,h=new WeakMap,f=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return _?new OffscreenCanvas(A,M):Bc("canvas")}function g(A,M,z){let Z=1;const ne=Pt(A);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(Z*ne.width),de=Math.floor(Z*ne.height);d===void 0&&(d=y(re,de));const $=M?y(re,de):d;return $.width=re,$.height=de,$.getContext("2d").drawImage(A,0,0,re,de),De("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+de+")."),$}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function c(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,M,z,Z,ne,re=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;Z&&(de=e.get("EXT_texture_norm16"),de||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===t.RED&&(z===t.FLOAT&&($=t.R32F),z===t.HALF_FLOAT&&($=t.R16F),z===t.UNSIGNED_BYTE&&($=t.R8),z===t.UNSIGNED_SHORT&&de&&($=de.R16_EXT),z===t.SHORT&&de&&($=de.R16_SNORM_EXT)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.R8UI),z===t.UNSIGNED_SHORT&&($=t.R16UI),z===t.UNSIGNED_INT&&($=t.R32UI),z===t.BYTE&&($=t.R8I),z===t.SHORT&&($=t.R16I),z===t.INT&&($=t.R32I)),M===t.RG&&(z===t.FLOAT&&($=t.RG32F),z===t.HALF_FLOAT&&($=t.RG16F),z===t.UNSIGNED_BYTE&&($=t.RG8),z===t.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),z===t.SHORT&&de&&($=de.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RG8UI),z===t.UNSIGNED_SHORT&&($=t.RG16UI),z===t.UNSIGNED_INT&&($=t.RG32UI),z===t.BYTE&&($=t.RG8I),z===t.SHORT&&($=t.RG16I),z===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGB8UI),z===t.UNSIGNED_SHORT&&($=t.RGB16UI),z===t.UNSIGNED_INT&&($=t.RGB32UI),z===t.BYTE&&($=t.RGB8I),z===t.SHORT&&($=t.RGB16I),z===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGBA8UI),z===t.UNSIGNED_SHORT&&($=t.RGBA16UI),z===t.UNSIGNED_INT&&($=t.RGBA32UI),z===t.BYTE&&($=t.RGBA8I),z===t.SHORT&&($=t.RGBA16I),z===t.INT&&($=t.RGBA32I)),M===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),z===t.SHORT&&de&&($=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),M===t.RGBA){const J=re?kc:et.getTransfer(ne);z===t.FLOAT&&($=t.RGBA32F),z===t.HALF_FLOAT&&($=t.RGBA16F),z===t.UNSIGNED_BYTE&&($=J===ot?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),z===t.SHORT&&de&&($=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(A,M){let z;return A?M===null||M===zi||M===Tl?z=t.DEPTH24_STENCIL8:M===Ii?z=t.DEPTH32F_STENCIL8:M===wl&&(z=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===Tl?z=t.DEPTH_COMPONENT24:M===Ii?z=t.DEPTH_COMPONENT32F:M===wl&&(z=t.DEPTH_COMPONENT16),z}function T(A,M){return c(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function x(A){const M=A.target;M.removeEventListener("dispose",x),P(M)}function C(A){const M=i.get(A);if(M.__webglInit===void 0)return;const z=A.source,Z=p.get(z);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(A),Object.keys(Z).length===0&&p.delete(z)}i.remove(A)}function N(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const z=A.source,Z=p.get(z);delete Z[M.__cacheKey],a.memory.textures--}function P(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ne=0;ne<M.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=A.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const re=i.get(z[Z]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(A)}let k=0;function X(){k=0}function Y(){return k}function I(A){k=A}function j(){const A=k;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),k+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function B(A,M){const z=i.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const Z=A.image;if(Z===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(z,A,M);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function q(A,M){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ne(z,A,M);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function ee(A,M){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ne(z,A,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function oe(A,M){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Oe(z,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const he={[Qh]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},Xe={[nn]:t.NEAREST,[OT]:t.NEAREST_MIPMAP_NEAREST,[lu]:t.NEAREST_MIPMAP_LINEAR,[hn]:t.LINEAR,[Yd]:t.LINEAR_MIPMAP_NEAREST,[ws]:t.LINEAR_MIPMAP_LINEAR},Ke={[zT]:t.NEVER,[WT]:t.ALWAYS,[HT]:t.LESS,[jm]:t.LEQUAL,[VT]:t.EQUAL,[Wm]:t.GEQUAL,[GT]:t.GREATER,[jT]:t.NOTEQUAL};function Ue(A,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===Yd||M.magFilter===lu||M.magFilter===ws||M.minFilter===hn||M.minFilter===Yd||M.minFilter===lu||M.minFilter===ws)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,he[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,he[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,he[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Xe[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==lu&&M.minFilter!==ws||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Q(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let ne=p.get(Z);ne===void 0&&(ne={},p.set(Z,ne));const re=H(M);if(re!==A.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[re].usedTimes++;const de=ne[A.__cacheKey];de!==void 0&&(ne[A.__cacheKey].usedTimes--,de.usedTimes===0&&N(M)),A.__cacheKey=re,A.__webglTexture=ne[re].texture}return z}function fe(A,M,z){return Math.floor(Math.floor(A/z)/M)}function le(A,M,z,Z){const re=A.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,z,Z,M.data);else{re.sort((Me,ue)=>Me.start-ue.start);let de=0;for(let Me=1;Me<re.length;Me++){const ue=re[de],se=re[Me],Fe=ue.start+ue.count,Ve=fe(se.start,M.width,4),rt=fe(ue.start,M.width,4);se.start<=Fe+1&&Ve===rt&&fe(se.start+se.count-1,M.width,4)===Ve?ue.count=Math.max(ue.count,se.start+se.count-ue.start):(++de,re[de]=se)}re.length=de+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Me=0,ue=re.length;Me<ue;Me++){const se=re[Me],Fe=Math.floor(se.start/4),Ve=Math.ceil(se.count/4),rt=Fe%M.width,L=Math.floor(Fe/M.width),ae=Ve,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,rt,L,ae,K,z,Z,M.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function Ne(A,M,z){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=Q(A,M),re=M.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+z);const de=i.get(re);if(re.version!==de.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const K=et.getPrimaries(et.workingColorSpace),ye=M.colorSpace===Lr?null:et.getPrimaries(M.colorSpace),ce=M.colorSpace===Lr||K===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let J=g(M.image,!1,r.maxTextureSize);J=pe(M,J);const xe=s.convert(M.format,M.colorSpace),Me=s.convert(M.type);let ue=S(M.internalFormat,xe,Me,M.normalized,M.colorSpace,M.isVideoTexture);Ue(Z,M);let se;const Fe=M.mipmaps,Ve=M.isVideoTexture!==!0,rt=de.__version===void 0||ne===!0,L=re.dataReady,ae=T(M,J);if(M.isDepthTexture)ue=b(M.format===Ts,M.type),rt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ue,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,xe,Me,null));else if(M.isDataTexture)if(Fe.length>0){Ve&&rt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Fe[0].width,Fe[0].height);for(let K=0,ye=Fe.length;K<ye;K++)se=Fe[K],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,xe,Me,se.data):n.texImage2D(t.TEXTURE_2D,K,ue,se.width,se.height,0,xe,Me,se.data);M.generateMipmaps=!1}else Ve?(rt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,J.width,J.height),L&&le(M,J,xe,Me)):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,xe,Me,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,Fe[0].width,Fe[0].height,J.depth);for(let K=0,ye=Fe.length;K<ye;K++)if(se=Fe[K],M.format!==vi)if(xe!==null)if(Ve){if(L)if(M.layerUpdates.size>0){const ce=E_(se.width,se.height,M.format,M.type);for(const te of M.layerUpdates){const be=se.data.subarray(te*ce/se.data.BYTES_PER_ELEMENT,(te+1)*ce/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,te,se.width,se.height,1,xe,be)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,J.depth,xe,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ue,se.width,se.height,J.depth,0,se.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,J.depth,xe,Me,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ue,se.width,se.height,J.depth,0,xe,Me,se.data)}else{Ve&&rt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Fe[0].width,Fe[0].height);for(let K=0,ye=Fe.length;K<ye;K++)se=Fe[K],M.format!==vi?xe!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,xe,se.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ue,se.width,se.height,0,se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,xe,Me,se.data):n.texImage2D(t.TEXTURE_2D,K,ue,se.width,se.height,0,xe,Me,se.data)}else if(M.isDataArrayTexture)if(Ve){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,J.width,J.height,J.depth),L)if(M.layerUpdates.size>0){const K=E_(J.width,J.height,M.format,M.type);for(const ye of M.layerUpdates){const ce=J.data.subarray(ye*K/J.data.BYTES_PER_ELEMENT,(ye+1)*K/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,J.width,J.height,1,xe,Me,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,xe,Me,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,xe,Me,J.data);else if(M.isData3DTexture)Ve?(rt&&n.texStorage3D(t.TEXTURE_3D,ae,ue,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,xe,Me,J.data)):n.texImage3D(t.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,xe,Me,J.data);else if(M.isFramebufferTexture){if(rt)if(Ve)n.texStorage2D(t.TEXTURE_2D,ae,ue,J.width,J.height);else{let K=J.width,ye=J.height;for(let ce=0;ce<ae;ce++)n.texImage2D(t.TEXTURE_2D,ce,ue,K,ye,0,xe,Me,null),K>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),f.add(M),K.onpaint=ze=>{const Ut=ze.changedElements;for(const dt of f)Ut.includes(dt.image)&&(dt.needsUpdate=!0)},K.requestPaint();return}const ye=0,ce=t.RGBA,te=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ye,ce,te,be,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ve&&rt){const K=Pt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,ae,ue,K.width,K.height)}for(let K=0,ye=Fe.length;K<ye;K++)se=Fe[K],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe,Me,se):n.texImage2D(t.TEXTURE_2D,K,ue,xe,Me,se);M.generateMipmaps=!1}else if(Ve){if(rt){const K=Pt(J);n.texStorage2D(t.TEXTURE_2D,ae,ue,K.width,K.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Me,J)}else n.texImage2D(t.TEXTURE_2D,0,ue,xe,Me,J);c(M)&&m(Z),de.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Oe(A,M,z){if(M.image.length!==6)return;const Z=Q(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const re=i.get(ne);if(ne.version!==re.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const de=et.getPrimaries(et.workingColorSpace),$=M.colorSpace===Lr?null:et.getPrimaries(M.colorSpace),J=M.colorSpace===Lr||de===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!xe&&!Me?ue[te]=g(M.image[te],!0,r.maxCubemapSize):ue[te]=Me?M.image[te].image:M.image[te],ue[te]=pe(M,ue[te]);const se=ue[0],Fe=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),rt=S(M.internalFormat,Fe,Ve,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,ae=re.__version===void 0||Z===!0,K=ne.dataReady;let ye=T(M,se);Ue(t.TEXTURE_CUBE_MAP,M);let ce;if(xe){L&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,rt,se.width,se.height);for(let te=0;te<6;te++){ce=ue[te].mipmaps;for(let be=0;be<ce.length;be++){const ze=ce[be];M.format!==vi?Fe!==null?L?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,ze.width,ze.height,Fe,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,rt,ze.width,ze.height,0,ze.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,ze.width,ze.height,Fe,Ve,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,rt,ze.width,ze.height,0,Fe,Ve,ze.data)}}}else{if(ce=M.mipmaps,L&&ae){ce.length>0&&ye++;const te=Pt(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,rt,te.width,te.height)}for(let te=0;te<6;te++)if(Me){L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Fe,Ve,ue[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,ue[te].width,ue[te].height,0,Fe,Ve,ue[te].data);for(let be=0;be<ce.length;be++){const Ut=ce[be].image[te].image;L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Ut.width,Ut.height,Fe,Ve,Ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,rt,Ut.width,Ut.height,0,Fe,Ve,Ut.data)}}else{L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Ve,ue[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Fe,Ve,ue[te]);for(let be=0;be<ce.length;be++){const ze=ce[be];L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Fe,Ve,ze.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,rt,Fe,Ve,ze.image[te])}}}c(M)&&m(t.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ie(A,M,z,Z,ne,re){const de=s.convert(z.format,z.colorSpace),$=s.convert(z.type),J=S(z.internalFormat,de,$,z.normalized,z.colorSpace),xe=i.get(M),Me=i.get(z);if(Me.__renderTarget=M,!xe.__hasExternalTextures){const ue=Math.max(1,M.width>>re),se=Math.max(1,M.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,J,ue,se,M.depth,0,de,$,null):n.texImage2D(ne,re,J,ue,se,0,de,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,Me.__webglTexture,0,Vt(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,Me.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(A,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,re=b(M.stencilBuffer,ne),de=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Vt(M),re,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Vt(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,A)}else{const Z=M.textures;for(let ne=0;ne<Z.length;ne++){const re=Z[ne],de=s.convert(re.format,re.colorSpace),$=s.convert(re.type),J=S(re.internalFormat,de,$,re.normalized,re.colorSpace);Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Vt(M),J,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Vt(M),J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(A,M,z){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),Me=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===mr?ue=t.DEPTH_COMPONENT24:M.depthTexture.format===Ts&&(ue=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,M.width,M.height,0,xe,Me,null)}}else B(M.depthTexture,0);const re=ne.__webglTexture,de=Vt(M),$=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,J=M.depthTexture.format===Ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===mr)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else if(M.depthTexture.format===Ts)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else throw new Error("Unknown depthTexture format")}function ct(A){const M=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Qe(M.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?Qe(M.__webglFramebuffer[0],A,0):Qe(M.__webglFramebuffer,A,0)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),wt(M.__webglDepthbuffer[Z],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),wt(M.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(A,M,z){const Z=i.get(A);M!==void 0&&Ie(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ct(A)}function $e(A){const M=A.texture,z=i.get(A),Z=i.get(M);A.addEventListener("dispose",x);const ne=A.textures,re=A.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<M.mipmaps.length;J++)z.__webglFramebuffer[$][J]=t.createFramebuffer()}else z.__webglFramebuffer[$]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)z.__webglFramebuffer[$]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let $=0,J=ne.length;$<J;$++){const xe=i.get(ne[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Ze(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];z.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const xe=s.convert(J.format,J.colorSpace),Me=s.convert(J.type),ue=S(J.internalFormat,xe,Me,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),se=Vt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,z.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),wt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ie(z.__webglFramebuffer[$][J],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ie(z.__webglFramebuffer[$],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);c(M)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let $=0,J=ne.length;$<J;$++){const xe=ne[$],Me=i.get(xe);let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Me.__webglTexture),Ue(ue,xe),Ie(z.__webglFramebuffer,A,xe,t.COLOR_ATTACHMENT0+$,ue,0),c(xe)&&m(ue)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Z.__webglTexture),Ue($,M),M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ie(z.__webglFramebuffer[J],A,M,t.COLOR_ATTACHMENT0,$,J);else Ie(z.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,$,0);c(M)&&m($),n.unbindTexture()}A.depthBuffer&&ct(A)}function Ht(A){const M=A.textures;for(let z=0,Z=M.length;z<Z;z++){const ne=M[z];if(c(ne)){const re=v(A),de=i.get(ne).__webglTexture;n.bindTexture(re,de),m(re),n.unbindTexture()}}}const Tt=[],Un=[];function U(A){if(A.samples>0){if(Ze(A)===!1){const M=A.textures,z=A.width,Z=A.height;let ne=t.COLOR_BUFFER_BIT;const re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),$=M.length>1;if($)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const Me=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,t.NEAREST),l===!0&&(Tt.length=0,Un.length=0,Tt.push(t.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(re),Un.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Un)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const Me=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Vt(A){return Math.min(r.maxSamples,A.samples)}function Ze(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function pe(A,M){const z=A.colorSpace,Z=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Oc&&z!==Lr&&(et.getTransfer(z)===ot?(Z!==vi||ne!==Wn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),M}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=oe,this.rebindTextures=yt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zP(t,e){function n(i,r=Lr){let s;const a=et.getTransfer(r);if(i===Wn)return t.UNSIGNED_BYTE;if(i===Bm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===_S)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mS)return t.BYTE;if(i===gS)return t.SHORT;if(i===wl)return t.UNSIGNED_SHORT;if(i===km)return t.INT;if(i===zi)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===pr)return t.HALF_FLOAT;if(i===xS)return t.ALPHA;if(i===yS)return t.RGB;if(i===vi)return t.RGBA;if(i===mr)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===SS)return t.RED;if(i===Hm)return t.RED_INTEGER;if(i===js)return t.RG;if(i===Vm)return t.RG_INTEGER;if(i===Gm)return t.RGBA_INTEGER;if(i===ec||i===tc||i===nc||i===ic)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ip||i===rp||i===sp||i===ap||i===op||i===Uc||i===lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ip||i===rp)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ap)return s.COMPRESSED_R11_EAC;if(i===op)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return s.COMPRESSED_RG11_EAC;if(i===lp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===up||i===cp||i===dp||i===fp||i===hp||i===pp||i===mp||i===gp||i===_p||i===vp||i===xp||i===yp||i===Sp||i===Mp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===up)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_p)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ep||i===wp||i===Tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ep)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Ap||i===Fc||i===Cp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new LS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hi({vertexShader:HP,fragmentShader:VP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mn(new cd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jP extends us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new GP,c={},m=n.getContextAttributes();let v=null,S=null;const b=[],T=[],R=new Le;let x=null;const C=new Gn;C.viewport=new It;const N=new Gn;N.viewport=new It;const P=[C,N],k=new Zb;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=b[Q];return fe===void 0&&(fe=new tf,b[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=b[Q];return fe===void 0&&(fe=new tf,b[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=b[Q];return fe===void 0&&(fe=new tf,b[Q]=fe),fe.getHandSpace()};function I(Q){const fe=T.indexOf(Q.inputSource);if(fe===-1)return;const le=b[fe];le!==void 0&&(le.update(Q.inputSource,Q.frame,u||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let Q=0;Q<b.length;Q++){const fe=T[Q];fe!==null&&(T[Q]=null,b[Q].disconnect(fe))}X=null,Y=null,g.reset();for(const Q in c)delete c[Q];e.setRenderTarget(v),p=null,d=null,f=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ne=null,Oe=null;m.depth&&(Oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?Ts:mr,Ne=m.stencil?Tl:zi);const Ie={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bi(d.textureWidth,d.textureHeight,{format:vi,type:Wn,depthTexture:new fo(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Bi(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Q){for(let fe=0;fe<Q.removed.length;fe++){const le=Q.removed[fe],Ne=T.indexOf(le);Ne>=0&&(T[Ne]=null,b[Ne].disconnect(le))}for(let fe=0;fe<Q.added.length;fe++){const le=Q.added[fe];let Ne=T.indexOf(le);if(Ne===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=T.length){T.push(le),Ne=Ie;break}else if(T[Ie]===null){T[Ie]=le,Ne=Ie;break}if(Ne===-1)break}const Oe=b[Ne];Oe&&Oe.connect(le)}}const B=new F,q=new F;function ee(Q,fe,le){B.setFromMatrixPosition(fe.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const Ne=B.distanceTo(q),Oe=fe.projectionMatrix.elements,Ie=le.projectionMatrix.elements,wt=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),ct=(Oe[9]+1)/Oe[5],yt=(Oe[9]-1)/Oe[5],$e=(Oe[8]-1)/Oe[0],Ht=(Ie[8]+1)/Ie[0],Tt=wt*$e,Un=wt*Ht,U=Ne/(-$e+Ht),Vt=U*-$e;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Vt),Q.translateZ(U),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ze=wt+U,_t=Qe+U,pe=Tt-Vt,Pt=Un+(Ne-Vt),A=ct*Qe/_t*Ze,M=yt*Qe/_t*Ze;Q.projectionMatrix.makePerspective(pe,Pt,A,M,Ze,_t),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function oe(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let fe=Q.near,le=Q.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),k.near=N.near=C.near=fe,k.far=N.far=C.far=le,(X!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,Y=k.far),k.layers.mask=Q.layers.mask|6,C.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const Ne=Q.parent,Oe=k.cameras;oe(k,Ne);for(let Ie=0;Ie<Oe.length;Ie++)oe(Oe[Ie],Ne);Oe.length===2?ee(k,C,N):k.projectionMatrix.copy(C.projectionMatrix),he(Q,k,Ne)};function he(Q,fe,le){le===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Al*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Q){return c[Q]};let Xe=null;function Ke(Q,fe){if(h=fe.getViewerPose(u||a),_=fe,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let Qe=0;Qe<le.length;Qe++){const ct=le[Qe];let yt=null;if(p!==null)yt=p.getViewport(ct);else{const Ht=f.getViewSubImage(d,ct);yt=Ht.viewport,Qe===0&&(e.setRenderTargetTextures(S,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(S))}let $e=P[Qe];$e===void 0&&($e=new Gn,$e.layers.enable(Qe),$e.viewport=new It,P[Qe]=$e),$e.matrix.fromArray(ct.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ct.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(yt.x,yt.y,yt.width,yt.height),Qe===0&&(k.matrix.copy($e.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push($e)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Qe=f.getDepthInformation(le[0]);Qe&&Qe.isValid&&Qe.texture&&g.init(Qe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Qe=0;Qe<le.length;Qe++){const ct=le[Qe].camera;if(ct){let yt=c[ct];yt||(yt=new LS,c[ct]=yt);const $e=f.getCameraImage(ct);yt.sourceTexture=$e}}}}for(let le=0;le<b.length;le++){const Ne=T[le],Oe=b[le];Ne!==null&&Oe!==void 0&&Oe.update(Ne,fe,u||a)}Xe&&Xe(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Ue=new kS;Ue.setAnimationLoop(Ke),this.setAnimationLoop=function(Q){Xe=Q},this.dispose=function(){}}}const WP=new Ct,WS=new ke;WS.set(-1,0,0,0,1,0,0,0,1);function XP(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,IS(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,m,v,S){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?s(g,c):c.isMeshLambertMaterial?(s(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(g,c),f(g,c)):c.isMeshPhongMaterial?(s(g,c),h(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(g,c),d(g,c),c.isMeshPhysicalMaterial&&p(g,c,S)):c.isMeshMatcapMaterial?(s(g,c),_(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),y(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(a(g,c),c.isLineDashedMaterial&&o(g,c)):c.isPointsMaterial?l(g,c,m,v):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===In&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===In&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const m=e.get(c),v=m.envMap,S=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(WP.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(WS),g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function a(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function o(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,v){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=v*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function h(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function f(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function d(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,m){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===In&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,c){c.matcap&&(g.matcap.value=c.matcap)}function y(g,c){const m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function u(m,v){let S=r[m.id];S===void 0&&(_(m),S=h(m),r[m.id]=S,m.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function h(m){const v=f();m.__bindingPointIndex=v;const S=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const v=r[m.id],S=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,R=S.length;T<R;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,N=x.length;C<N;C++){const P=x[C];if(p(P,T,C,b)===!0){const k=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let I=0;I<X.length;I++){const j=X[I],H=y(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):ArrayBuffer.isView(j)?P.__data.set(new j.constructor(j.buffer,j.byteOffset,P.__data.length)):(j.toArray(P.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,S,b){const T=m.value,R=v+"_"+S;if(b[R]===void 0)return typeof T=="number"||typeof T=="boolean"?b[R]=T:ArrayBuffer.isView(T)?b[R]=T.slice():b[R]=T.clone(),!0;{const x=b[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return b[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(m){const v=m.uniforms;let S=0;const b=16;for(let R=0,x=v.length;R<x;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let N=0,P=C.length;N<P;N++){const k=C[N],X=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,I=X.length;Y<I;Y++){const j=X[Y],H=y(j),B=S%b,q=B%H.boundary,ee=B+q;S+=q,ee!==0&&b-ee<H.storage&&(S+=b-ee),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=H.storage}}}const T=S%b;return T>0&&(S+=b-T),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):De("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}const $P=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function YP(){return Ai===null&&(Ai=new Nb($P,16,16,js,pr),Ai.name="DFG_LUT",Ai.minFilter=hn,Ai.magFilter=hn,Ai.wrapS=rr,Ai.wrapT=rr,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class KP{constructor(e={}){const{canvas:n=qT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,g=new Set([Gm,Vm,Hm]),c=new Set([Wn,zi,wl,Tl,Bm,zm]),m=new Uint32Array(4),v=new Int32Array(4),S=new F;let b=null,T=null;const R=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,k=null;this._outputColorSpace=ti;let X=0,Y=0,I=null,j=-1,H=null;const B=new It,q=new It;let ee=null;const oe=new Be(0);let he=0,Xe=n.width,Ke=n.height,Ue=1,Q=null,fe=null;const le=new It(0,0,Xe,Ke),Ne=new It(0,0,Xe,Ke);let Oe=!1;const Ie=new Ym;let wt=!1,Qe=!1;const ct=new Ct,yt=new F,$e=new It,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Un(){return I===null?Ue:1}let U=i;function Vt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Om}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",ze,!1),U===null){const O="webgl2";if(U=Vt(O,w),U===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw tt("WebGLRenderer: "+w.message),w}let Ze,_t,pe,Pt,A,M,z,Z,ne,re,de,$,J,xe,Me,ue,se,Fe,Ve,rt,L,ae,K;function ye(){Ze=new YR(U),Ze.init(),L=new zP(U,Ze),_t=new HR(U,Ze,e,L),pe=new kP(U,Ze),_t.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Pt=new ZR(U),A=new wP,M=new BP(U,Ze,pe,A,_t,L,Pt),z=new $R(N),Z=new nA(U),ae=new BR(U,Z),ne=new KR(U,Z,Pt,ae),re=new e2(U,ne,Z,ae,Pt),Fe=new JR(U,_t,M),Me=new VR(A),de=new EP(N,z,Ze,_t,ae,Me),$=new XP(N,A),J=new bP,xe=new NP(Ze),se=new kR(N,z,pe,re,_,l),ue=new OP(N,re,_t),K=new qP(U,Pt,_t,pe),Ve=new zR(U,Ze,Pt),rt=new QR(U,Ze,Pt),Pt.programs=de.programs,N.capabilities=_t,N.extensions=Ze,N.properties=A,N.renderLists=J,N.shadowMap=ue,N.state=pe,N.info=Pt}ye(),y!==Wn&&(C=new n2(y,n.width,n.height,r,s));const ce=new jP(N,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(w){w!==void 0&&(Ue=w,this.setSize(Xe,Ke,!1))},this.getSize=function(w){return w.set(Xe,Ke)},this.setSize=function(w,O,W=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=w,Ke=O,n.width=Math.floor(w*Ue),n.height=Math.floor(O*Ue),W===!0&&(n.style.width=w+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Xe*Ue,Ke*Ue).floor()},this.setDrawingBufferSize=function(w,O,W){Xe=w,Ke=O,Ue=W,n.width=Math.floor(w*W),n.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(y===Wn){tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,O,W,V){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,O,W,V),pe.viewport(B.copy(le).multiplyScalar(Ue).round())},this.getScissor=function(w){return w.copy(Ne)},this.setScissor=function(w,O,W,V){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,O,W,V),pe.scissor(q.copy(Ne).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){pe.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let V=0;if(w){let G=!1;if(I!==null){const ve=I.texture.format;G=g.has(ve)}if(G){const ve=I.texture.type,Ee=c.has(ve),ge=se.getClearColor(),Te=se.getClearAlpha(),Ae=ge.r,He=ge.g,We=ge.b;Ee?(m[0]=Ae,m[1]=He,m[2]=We,m[3]=Te,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Ae,v[1]=He,v[2]=We,v[3]=Te,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),se.dispose(),J.dispose(),xe.dispose(),A.dispose(),z.dispose(),re.dispose(),ae.dispose(),K.dispose(),de.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",lg),ce.removeEventListener("sessionend",ug),cs.stop()};function te(w){w.preventDefault(),zc("WebGLRenderer: Context Lost."),P=!0}function be(){zc("WebGLRenderer: Context Restored."),P=!1;const w=Pt.autoReset,O=ue.enabled,W=ue.autoUpdate,V=ue.needsUpdate,G=ue.type;ye(),Pt.autoReset=w,ue.enabled=O,ue.autoUpdate=W,ue.needsUpdate=V,ue.type=G}function ze(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const O=w.target;O.removeEventListener("dispose",Ut),dt(O)}function dt(w){Vi(w),A.remove(w)}function Vi(w){const O=A.get(w).programs;O!==void 0&&(O.forEach(function(W){de.releaseProgram(W)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,V,G,ve){O===null&&(O=Ht);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,ge=tM(w,O,W,V,G);pe.setMaterial(V,Ee);let Te=W.index,Ae=1;if(V.wireframe===!0){if(Te=ne.getWireframeAttribute(W),Te===void 0)return;Ae=2}const He=W.drawRange,We=W.attributes.position;let Re=He.start*Ae,ft=(He.start+He.count)*Ae;ve!==null&&(Re=Math.max(Re,ve.start*Ae),ft=Math.min(ft,(ve.start+ve.count)*Ae)),Te!==null?(Re=Math.max(Re,0),ft=Math.min(ft,Te.count)):We!=null&&(Re=Math.max(Re,0),ft=Math.min(ft,We.count));const Ft=ft-Re;if(Ft<0||Ft===1/0)return;ae.setup(G,V,ge,W,Te);let Dt,pt=Ve;if(Te!==null&&(Dt=Z.get(Te),pt=rt,pt.setIndex(Dt)),G.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*Un()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(G.isLine){let an=V.linewidth;an===void 0&&(an=1),pe.setLineWidth(an*Un()),G.isLineSegments?pt.setMode(U.LINES):G.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else G.isPoints?pt.setMode(U.POINTS):G.isSprite&&pt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const an=G._multiDrawStarts,Se=G._multiDrawCounts,Fn=G._multiDrawCount,nt=Te?Z.get(Te).bytesPerElement:1,Qn=A.get(V).currentProgram.getUniforms();for(let wi=0;wi<Fn;wi++)Qn.setValue(U,"_gl_DrawID",wi),pt.render(an[wi]/nt,Se[wi])}else if(G.isInstancedMesh)pt.renderInstances(Re,Ft,G.count);else if(W.isInstancedBufferGeometry){const an=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,an);pt.renderInstances(Re,Ft,Se)}else pt.render(Re,Ft)};function Ei(w,O,W){w.transparent===!0&&w.side===tr&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,Vl(w,O,W),w.side=is,w.needsUpdate=!0,Vl(w,O,W),w.side=tr):Vl(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),T=xe.get(W),T.init(O),x.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const V=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const ge=ve[Ee];Ei(ge,W,G),V.add(ge)}else Ei(ve,W,G),V.add(ve)}),T=x.pop(),V},this.compileAsync=function(w,O,W=null){const V=this.compile(w,O,W);return new Promise(G=>{function ve(){if(V.forEach(function(Ee){A.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){G(w);return}setTimeout(ve,10)}Ze.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let md=null;function JS(w){md&&md(w)}function lg(){cs.stop()}function ug(){cs.start()}const cs=new kS;cs.setAnimationLoop(JS),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(w){md=w,ce.setAnimationLoop(w),w===null?cs.stop():cs.start()},ce.addEventListener("sessionstart",lg),ce.addEventListener("sessionend",ug),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(w,O);const W=ce.enabled===!0&&ce.isPresenting===!0,V=C!==null&&(I===null||W)&&C.begin(N,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,O,I),T=xe.get(w,x.length),T.init(O),T.state.textureUnits=M.getTextureUnits(),x.push(T),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(ct,Ui,O.reversedDepth),Qe=this.localClippingEnabled,wt=Me.init(this.clippingPlanes,Qe),b=J.get(w,R.length),b.init(),R.push(b),ce.enabled===!0&&ce.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&gd(Ee,O,-1/0,N.sortObjects)}gd(w,O,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Q,fe),Tt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Tt&&se.addToRenderList(b,w),this.info.render.frame++,wt===!0&&Me.beginShadows();const G=T.state.shadowsArray;if(ue.render(G,w,O),wt===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){const Ee=b.opaque,ge=b.transmissive;if(T.setupLights(),O.isArrayCamera){const Te=O.cameras;if(ge.length>0)for(let Ae=0,He=Te.length;Ae<He;Ae++){const We=Te[Ae];dg(Ee,ge,w,We)}Tt&&se.render(w);for(let Ae=0,He=Te.length;Ae<He;Ae++){const We=Te[Ae];cg(b,w,We,We.viewport)}}else ge.length>0&&dg(Ee,ge,w,O),Tt&&se.render(w),cg(b,w,O)}I!==null&&Y===0&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),V&&C.end(N),w.isScene===!0&&w.onAfterRender(N,w,O),ae.resetDefaultState(),j=-1,H=null,x.pop(),x.length>0?(T=x[x.length-1],M.setTextureUnits(T.state.textureUnits),wt===!0&&Me.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,k!==null&&k.renderEnd()};function gd(w,O,W,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){V&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const Ee=re.update(w),ge=w.material;ge.visible&&b.push(w,Ee,ge,W,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const Ee=re.update(w),ge=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),$e.copy(Ee.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(ge)){const Te=Ee.groups;for(let Ae=0,He=Te.length;Ae<He;Ae++){const We=Te[Ae],Re=ge[We.materialIndex];Re&&Re.visible&&b.push(w,Ee,Re,W,$e.z,We)}}else ge.visible&&b.push(w,Ee,ge,W,$e.z,null)}}const ve=w.children;for(let Ee=0,ge=ve.length;Ee<ge;Ee++)gd(ve[Ee],O,W,V)}function cg(w,O,W,V){const{opaque:G,transmissive:ve,transparent:Ee}=w;T.setupLightsView(W),wt===!0&&Me.setGlobalState(N.clippingPlanes,W),V&&pe.viewport(B.copy(V)),G.length>0&&Hl(G,O,W),ve.length>0&&Hl(ve,O,W),Ee.length>0&&Hl(Ee,O,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function dg(w,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Re=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Bi(1,1,{generateMipmaps:!0,type:Re?pr:Wn,minFilter:ws,samples:Math.max(4,_t.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ve=T.state.transmissionRenderTarget[V.id],Ee=V.viewport||B;ve.setSize(Ee.z*N.transmissionResolutionScale,Ee.w*N.transmissionResolutionScale);const ge=N.getRenderTarget(),Te=N.getActiveCubeFace(),Ae=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor(oe),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Tt&&se.render(W);const He=N.toneMapping;N.toneMapping=ki;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),wt===!0&&Me.setGlobalState(N.clippingPlanes,V),Hl(w,W,V),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ft=0,Ft=O.length;ft<Ft;ft++){const Dt=O[ft],{object:pt,geometry:an,material:Se,group:Fn}=Dt;if(Se.side===tr&&pt.layers.test(V.layers)){const nt=Se.side;Se.side=In,Se.needsUpdate=!0,fg(pt,W,V,an,Se,Fn),Se.side=nt,Se.needsUpdate=!0,Re=!0}}Re===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve))}N.setRenderTarget(ge,Te,Ae),N.setClearColor(oe,he),We!==void 0&&(V.viewport=We),N.toneMapping=He}function Hl(w,O,W){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ve=w.length;G<ve;G++){const Ee=w[G],{object:ge,geometry:Te,group:Ae}=Ee;let He=Ee.material;He.allowOverride===!0&&V!==null&&(He=V),ge.layers.test(W.layers)&&fg(ge,O,W,Te,He,Ae)}}function fg(w,O,W,V,G,ve){w.onBeforeRender(N,O,W,V,G,ve),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(N,O,W,V,w,ve),G.transparent===!0&&G.side===tr&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,N.renderBufferDirect(W,O,V,G,w,ve),G.side=is,G.needsUpdate=!0,N.renderBufferDirect(W,O,V,G,w,ve),G.side=tr):N.renderBufferDirect(W,O,V,G,w,ve),w.onAfterRender(N,O,W,V,G,ve)}function Vl(w,O,W){O.isScene!==!0&&(O=Ht);const V=A.get(w),G=T.state.lights,ve=T.state.shadowsArray,Ee=G.state.version,ge=de.getParameters(w,G.state,ve,O,W,T.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let Ae=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=z.get(w.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",Ut),Ae=new Map,V.programs=Ae);let We=Ae.get(Te);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===Ee)return pg(w,ge),We}else ge.uniforms=de.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,W,ge),w.onBeforeCompile(ge,N),We=de.acquireProgram(ge,Te),Ae.set(Te,We),V.uniforms=ge.uniforms;const Re=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Me.uniform),pg(w,ge),V.needsLights=iM(w),V.lightsStateVersion=Ee,V.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=We,V.uniformsList=null,We}function hg(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=rc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function pg(w,O){const W=A.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function eM(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let W=0,V=w.length;W<V;W++){const G=w[W];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function tM(w,O,W,V,G){O.isScene!==!0&&(O=Ht),M.resetTextureUnits();const ve=O.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ge=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:et.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=z.get(V.envMap||Ee,Te),He=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color;let Dt=ki;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,an=pt!==void 0?pt.length:0,Se=A.get(V),Fn=T.state.lights;if(wt===!0&&(Qe===!0||w!==H)){const vt=w===H&&V.id===j;Me.setState(V,w,vt)}let nt=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Fn.state.version||Se.outputColorSpace!==ge||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==Ae||V.fog===!0&&Se.fog!==ve||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Me.numPlanes||Se.numIntersection!==Me.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==We||Se.morphTargets!==Re||Se.morphNormals!==ft||Se.morphColors!==Ft||Se.toneMapping!==Dt||Se.morphTargetsCount!==an||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Se.__version=V.version);let Qn=Se.currentProgram;nt===!0&&(Qn=Vl(V,O,G),k&&V.isNodeMaterial&&k.onUpdateProgram(V,Qn,Se));let wi=!1,_r=!1,Ys=!1;const mt=Qn.getUniforms(),Ot=Se.uniforms;if(pe.useProgram(Qn.program)&&(wi=!0,_r=!0,Ys=!0),V.id!==j&&(j=V.id,_r=!0),Se.needsLights){const vt=eM(T.state.lightProbeGridArray,G);Se.lightProbeGrid!==vt&&(Se.lightProbeGrid=vt,_r=!0)}if(wi||H!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(U,"projectionMatrix",w.projectionMatrix),mt.setValue(U,"viewMatrix",w.matrixWorldInverse);const xr=mt.map.cameraPosition;xr!==void 0&&xr.setValue(U,yt.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,_r=!0,Ys=!0)}if(Se.needsLights&&(Fn.state.directionalShadowMap.length>0&&mt.setValue(U,"directionalShadowMap",Fn.state.directionalShadowMap,M),Fn.state.spotShadowMap.length>0&&mt.setValue(U,"spotShadowMap",Fn.state.spotShadowMap,M),Fn.state.pointShadowMap.length>0&&mt.setValue(U,"pointShadowMap",Fn.state.pointShadowMap,M)),G.isSkinnedMesh){mt.setOptional(U,G,"bindMatrix"),mt.setOptional(U,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(U,"boneTexture",vt.boneTexture,M))}G.isBatchedMesh&&(mt.setOptional(U,G,"batchingTexture"),mt.setValue(U,"batchingTexture",G._matricesTexture,M),mt.setOptional(U,G,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",G._indirectTexture,M),mt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",G._colorsTexture,M));const vr=W.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Fe.update(G,W,Qn),(_r||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,mt.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Ot.envMapIntensity.value=O.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=YP()),_r){if(mt.setValue(U,"toneMappingExposure",N.toneMappingExposure),Se.needsLights&&nM(Ot,Ys),ve&&V.fog===!0&&$.refreshFogUniforms(Ot,ve),$.refreshMaterialUniforms(Ot,V,Ue,Ke,T.state.transmissionRenderTarget[w.id]),Se.needsLights&&Se.lightProbeGrid){const vt=Se.lightProbeGrid;Ot.probesSH.value=vt.texture,Ot.probesMin.value.copy(vt.boundingBox.min),Ot.probesMax.value.copy(vt.boundingBox.max),Ot.probesResolution.value.copy(vt.resolution)}rc.upload(U,hg(Se),Ot,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rc.upload(U,hg(Se),Ot,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(U,"center",G.center),mt.setValue(U,"modelViewMatrix",G.modelViewMatrix),mt.setValue(U,"normalMatrix",G.normalMatrix),mt.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const vt=V.uniformsGroups;for(let xr=0,Ks=vt.length;xr<Ks;xr++){const mg=vt[xr];K.update(mg,Qn),K.bind(mg,Qn)}}return Qn}function nM(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function iM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,W){const V=A.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=O,A.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const W=A.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const rM=U.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){I=w,X=O,Y=W;let V=null,G=!1,ve=!1;if(w){const ge=A.get(w);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,ge.__webglFramebuffer),B.copy(w.viewport),q.copy(w.scissor),ee=w.scissorTest,pe.viewport(B),pe.scissor(q),pe.setScissorTest(ee),j=-1;return}else if(ge.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(ge.__hasExternalTextures)M.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&A.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ae=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?V=Ae[O][W]:V=Ae[O],G=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?V=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[W]:V=Ae,B.copy(w.viewport),q.copy(w.scissor),ee=w.scissorTest}else B.copy(le).multiplyScalar(Ue).floor(),q.copy(Ne).multiplyScalar(Ue).floor(),ee=Oe;if(W!==0&&(V=rM),pe.bindFramebuffer(U.FRAMEBUFFER,V)&&pe.drawBuffers(w,V),pe.viewport(B),pe.scissor(q),pe.setScissorTest(ee),G){const ge=A.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,W)}else if(ve){const ge=O;for(let Te=0;Te<w.textures.length;Te++){const Ae=A.get(w.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,W,ge)}}else if(w!==null&&W!==0){const ge=A.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,W)}j=-1},this.readRenderTargetPixels=function(w,O,W,V,G,ve,Ee,ge=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){pe.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ae=w.textures[ge],He=Ae.format,We=Ae.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!_t.textureFormatReadable(He)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(We)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&W>=0&&W<=w.height-G&&U.readPixels(O,W,V,G,L.convert(He),L.convert(We),ve)}finally{const Ae=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,V,G,ve,Ee,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(O>=0&&O<=w.width-V&&W>=0&&W<=w.height-G){pe.bindFramebuffer(U.FRAMEBUFFER,Te);const Ae=w.textures[ge],He=Ae.format,We=Ae.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!_t.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(O,W,V,G,L.convert(He),L.convert(We),0);const ft=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,ft);const Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $T(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(Re),U.deleteSync(Ft),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){const V=Math.pow(2,-W),G=Math.floor(w.image.width*V),ve=Math.floor(w.image.height*V),Ee=O!==null?O.x:0,ge=O!==null?O.y:0;M.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Ee,ge,G,ve),pe.unbindTexture()};const sM=U.createFramebuffer(),aM=U.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,V=null,G=0,ve=0){let Ee,ge,Te,Ae,He,We,Re,ft,Ft;const Dt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(W!==null)Ee=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,He=W.min.y,We=W.isBox3?W.min.z:0;else{const Ot=Math.pow(2,-G);Ee=Math.floor(Dt.width*Ot),ge=Math.floor(Dt.height*Ot),w.isDataArrayTexture?Te=Dt.depth:w.isData3DTexture?Te=Math.floor(Dt.depth*Ot):Te=1,Ae=0,He=0,We=0}V!==null?(Re=V.x,ft=V.y,Ft=V.z):(Re=0,ft=0,Ft=0);const pt=L.convert(O.format),an=L.convert(O.type);let Se;O.isData3DTexture?(M.setTexture3D(O,0),Se=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),Se=U.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),Se=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Fn=pe.getParameter(U.UNPACK_ROW_LENGTH),nt=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Qn=pe.getParameter(U.UNPACK_SKIP_PIXELS),wi=pe.getParameter(U.UNPACK_SKIP_ROWS),_r=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Dt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(U.UNPACK_SKIP_ROWS,He),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Ys=w.isDataArrayTexture||w.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Ot=A.get(w),vr=A.get(O),vt=A.get(Ot.__renderTarget),xr=A.get(vr.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Ks=0;Ks<Te;Ks++)Ys&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(w).__webglTexture,G,We+Ks),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(O).__webglTexture,ve,Ft+Ks)),U.blitFramebuffer(Ae,He,Ee,ge,Re,ft,Ee,ge,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||A.has(w)){const Ot=A.get(w),vr=A.get(O);pe.bindFramebuffer(U.READ_FRAMEBUFFER,sM),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,aM);for(let vt=0;vt<Te;vt++)Ys?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,G,We+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,G),mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vr.__webglTexture,ve,Ft+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vr.__webglTexture,ve),G!==0?U.blitFramebuffer(Ae,He,Ee,ge,Re,ft,Ee,ge,U.COLOR_BUFFER_BIT,U.NEAREST):mt?U.copyTexSubImage3D(Se,ve,Re,ft,Ft+vt,Ae,He,Ee,ge):U.copyTexSubImage2D(Se,ve,Re,ft,Ae,He,Ee,ge);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Se,ve,Re,ft,Ft,Ee,ge,Te,pt,an,Dt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,ve,Re,ft,Ft,Ee,ge,Te,pt,Dt.data):U.texSubImage3D(Se,ve,Re,ft,Ft,Ee,ge,Te,pt,an,Dt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Re,ft,Ee,ge,pt,an,Dt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Re,ft,Dt.width,Dt.height,pt,Dt.data):U.texSubImage2D(U.TEXTURE_2D,ve,Re,ft,Ee,ge,pt,an,Dt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Qn),pe.pixelStorei(U.UNPACK_SKIP_ROWS,wi),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,_r),ve===0&&O.generateMipmaps&&U.generateMipmap(Se),pe.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){X=0,Y=0,I=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const q_={type:"change"},tg={type:"start"},XS={type:"end"},Uu=new $m,$_=new Pr,QP=Math.cos(70*ES.DEG2RAD),Gt=new F,bn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cf=1e-6;class ZP extends eA{constructor(e,n=null){super(e,n),this.state=ht.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ba.ROTATE,MIDDLE:Ba.DOLLY,RIGHT:Ba.PAN},this.touches={ONE:Pa.ROTATE,TWO:Pa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new rs,this._lastTargetPosition=new F,this._quat=new rs().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S_,this._sphericalDelta=new S_,this._scale=1,this._panOffset=new F,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new F,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e3.bind(this),this._onPointerDown=JP.bind(this),this._onPointerUp=t3.bind(this),this._onContextMenu=l3.bind(this),this._onMouseWheel=r3.bind(this),this._onKeyDown=s3.bind(this),this._onTouchStart=a3.bind(this),this._onTouchMove=o3.bind(this),this._onMouseDown=n3.bind(this),this._onMouseMove=i3.bind(this),this._interceptControlDown=u3.bind(this),this._interceptControlUp=c3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(q_),this.update(),this.state=ht.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Gt.copy(n).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new F(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<QP?this.object.lookAt(this.target):($_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane($_,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Cf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cf||this._lastTargetPosition.distanceToSquared(this.target)>Cf?(this.dispatchEvent(q_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Gt.setFromMatrixColumn(n,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,n){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(n,1):(Gt.setFromMatrixColumn(n,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Gt.copy(r).sub(this.target);let s=Gt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Le,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function JP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function e3(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function t3(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(XS),this.state=ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function n3(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ht.DOLLY;break;case Ba.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ht.ROTATE}break;case Ba.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(tg)}function i3(t){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function r3(t){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(t.preventDefault(),this.dispatchEvent(tg),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(XS))}function s3(t){this.enabled!==!1&&this._handleKeyDown(t)}function a3(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Pa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ht.TOUCH_ROTATE;break;case Pa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Pa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ht.TOUCH_DOLLY_PAN;break;case Pa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(tg)}function o3(t){switch(this._trackPointer(t),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ht.NONE}}function l3(t){this.enabled!==!1&&t.preventDefault()}function u3(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c3(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const d3=3500,f3=new Be(16742981),Y_=new Be(9146263),h3=new Be(3135176),p3=new Be(3135176),m3=new Be(16742981),g3=new Be(7268303),K_=new Be(16769126);function _3(){var y,g;const t=st(c=>c.graph),e=st(c=>c.hpcJob),n=Pe.useRef(null),[i,r]=Pe.useState(null),s=Pe.useRef(new Map),a=Pe.useRef(new Map),o=Pe.useRef(()=>{}),l=Pe.useMemo(()=>{var c;return(c=e==null?void 0:e.progress)==null?void 0:c.phases.find(m=>m.phase==="pulser")},[(y=e==null?void 0:e.progress)==null?void 0:y.phases]),u=(l==null?void 0:l.magnetization_series)??null,h=((g=e==null?void 0:e.result)==null?void 0:g.cut_assignment)??null,[f,d]=Pe.useState(0),[p,_]=Pe.useState(!1);return Pe.useEffect(()=>{const c=n.current;if(!c)return;r(null);const m=new Tb;m.background=new Be(593171);const v=new Gn(45,1,.1,1e3);v.position.set(0,-8,7);let S;try{S=new KP({antialias:!0,alpha:!1})}catch{r("3D renderer unavailable in this browser context.");return}S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.shadowMap.enabled=!0,S.shadowMap.type=sS,S.domElement.style.display="block",S.domElement.style.height="100%",S.domElement.style.width="100%",c.appendChild(S.domElement);const b=new ZP(v,S.domElement);b.enableDamping=!1,b.enablePan=!0,b.minDistance=2.8,b.maxDistance=28,b.target.set(0,0,0),m.add(new Kb(12582128,.45));const T=new Yb(13107188,2.2);T.position.set(3,-5,8),T.castShadow=!0,m.add(T);const R=new qb(7268303,2.5,24);R.position.set(-5,4,5),m.add(R);const x=new Da;m.add(x);const C=new Jb(12,12,2376253,1517089);C.rotation.x=Math.PI/2,C.position.z=-1.35,m.add(C);const N=new Mn(new Zm(4.3,.012,16,160),new Bl({color:3497814,transparent:!0,opacity:.45}));N.rotation.x=Math.PI/2,N.position.z=-1.32,m.add(N),s.current.clear(),a.current.clear(),t?v3(x,t,s.current,a.current):x3(x);const P=new xo().setFromObject(x),k=()=>{S.render(m,v)};o.current=k;const X=()=>{const{width:I,height:j}=c.getBoundingClientRect(),H=Math.max(1,Math.floor(I)),B=Math.max(1,Math.floor(j));S.setSize(H,B),v.aspect=H/B,v.updateProjectionMatrix(),w3(v,b,P),k()},Y=new ResizeObserver(X);return Y.observe(c),X(),b.addEventListener("change",k),k(),()=>{Y.disconnect(),b.removeEventListener("change",k),b.dispose(),c.removeChild(S.domElement),o.current=()=>{},s.current.clear(),a.current.clear(),m.traverse(I=>{var j;if(I instanceof Mn||I instanceof Qm||I instanceof DS){(j=I.geometry)==null||j.dispose();const H=Array.isArray(I.material)?I.material:[I.material];for(const B of H)T3(B)}}),S.dispose()}},[t]),Pe.useEffect(()=>{if(!u||u.times.length===0)return;const{times:c,magnetization:m}=u,v=c[c.length-1]-c[0]||1,S=performance.now();let b;_(!0);const T=()=>{const R=Math.min(1,(performance.now()-S)/d3),x=c[0]+R*v;let C=0;for(;C<c.length-1&&c[C+1]<=x;)C+=1;const N=m[C];if(N){for(const[P,k]of s.current.entries()){const X=N[P];if(X===void 0)continue;const Y=X>=0?Y_.clone().lerp(h3,X):Y_.clone().lerp(f3,-X);k.color.copy(Y),k.emissive.copy(Y).multiplyScalar(.3)}o.current()}R<1?b=requestAnimationFrame(T):(_(!1),h&&(Q_(s.current,a.current,h),o.current()))};return b=requestAnimationFrame(T),()=>cancelAnimationFrame(b)},[u,h,f]),Pe.useEffect(()=>{u||!h||(Q_(s.current,a.current,h),o.current())},[h,u]),E.jsxs("section",{className:"relative h-[380px] min-h-[380px] overflow-hidden rounded-md border border-border bg-background shadow-panel sm:h-[620px] sm:min-h-[620px]",children:[E.jsxs("div",{className:"absolute left-3 top-3 z-10 sm:left-5 sm:top-5",children:[E.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"3D graph canvas"}),E.jsx("h2",{className:"text-lg font-semibold sm:text-2xl",children:t?`${t.family} / ${t.n_nodes} nodes`:"Generate a graph"})]}),E.jsxs("div",{className:"absolute right-3 top-3 z-10 grid grid-cols-2 gap-2 sm:right-5 sm:top-5 sm:grid-cols-4",children:[E.jsx(Fu,{icon:E.jsx(Rw,{size:14}),label:"Drag"}),E.jsx(Fu,{icon:E.jsx(Uw,{size:14}),label:"Zoom"}),E.jsx(Fu,{icon:E.jsx(bw,{size:14}),label:"Pan"}),E.jsx(Fu,{icon:E.jsx(ww,{size:14}),label:"Orbit"})]}),u?E.jsxs("button",{type:"button",onClick:()=>d(c=>c+1),disabled:p,className:"absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-md border border-primary/60 bg-background/80 px-3 py-2 text-xs font-semibold text-primary backdrop-blur transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50 sm:bottom-5 sm:left-5",children:[E.jsx(Sw,{size:14}),p?"Replaying…":"Replay magnetization"]}):null,E.jsx("div",{ref:n,className:"h-full w-full"}),i?E.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/90 p-8 text-center",children:E.jsxs("div",{className:"max-w-sm rounded-md border border-border bg-muted/45 p-5",children:[E.jsx("p",{className:"text-sm font-semibold text-foreground",children:"3D canvas unavailable"}),E.jsx("p",{className:"mt-2 text-sm text-foreground/60",children:i})]})}):null]})}function Q_(t,e,n){for(const[i,r]of t.entries()){const s=n[i];if(s===void 0)continue;const a=s===0?p3:m3;r.color.copy(a),r.emissive.copy(a).multiplyScalar(.35)}for(const[i,{line:r,bead:s}]of e.entries()){const[a,o]=i.split("-").map(Number),l=n[a],u=n[o];l===void 0||u===void 0||l===u||(r.color.copy(K_),s.color.copy(K_),r.opacity=Math.min(.95,r.opacity+.25))}}function v3(t,e,n,i){const r=y3(e),s=qS(e.edges);for(const a of e.edges){const o=r.get(a.i),l=r.get(a.j);if(!o||!l)continue;const{group:u,line:h,bead:f}=M3(o,l,a.w);t.add(u),i.set(`${a.i}-${a.j}`,{line:h,bead:f})}for(const a of e.positions){const o=r.get(a.id);if(!o)continue;const l=S3(o,a.id);l.userData.kind="node",l.userData.phase=a.id*.8,t.add(l),n.set(a.id,l.material);const u=E3(String(a.id));u.position.copy(o).add(new F(0,0,.38+(s.get(a.id)??0)*.01)),t.add(u)}}function x3(t){const e=new US({color:7268303,emissive:1391413,roughness:.38,metalness:.15,transparent:!0,opacity:.75});for(let n=0;n<6;n+=1){const i=Math.PI*2*n/6,r=new Mn(new ho(.2,32,32),e.clone());r.position.set(Math.cos(i)*2.1,Math.sin(i)*2.1,Math.sin(i*2)*.55),r.userData.kind="node",r.userData.phase=n,t.add(r)}}function y3(t){const e=t.positions.map(f=>f.x),n=t.positions.map(f=>f.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),a=Math.max(...n),o=Math.max(r-i,a-s,.001),l=qS(t.edges),u=Math.max(...Array.from(l.values()),1),h=new Map;for(const f of t.positions){const d=(f.x-(i+r)/2)/o*5.2,p=(f.y-(s+a)/2)/o*5.2,_=((l.get(f.id)??0)/u-.5)*1.15,y=Math.sin(f.id*1.618)*.35;h.set(f.id,new F(d,p,_+y))}return h}function qS(t){const e=new Map;for(const n of t)e.set(n.i,(e.get(n.i)??0)+1),e.set(n.j,(e.get(n.j)??0)+1);return e}function S3(t,e){const n=new ho(.22,40,40),i=new US({color:7922890,emissive:1325620,emissiveIntensity:.35,roughness:.22,metalness:.18}),r=new Mn(n,i);r.position.copy(t),r.castShadow=!0,r.receiveShadow=!0;const s=new Mn(new ho(.34,32,32),new Bl({color:7862234,transparent:!0,opacity:.1,depthWrite:!1}));return s.userData.phase=e*.8,r.add(s),r}function M3(t,e,n){const i=new Tn().setFromPoints([t,e]),r=new Km({color:g3,transparent:!0,opacity:Math.min(.92,.28+n/3.5)}),s=new Qm(i,r),a=t.clone().add(e).multiplyScalar(.5),o=new Bl({color:13172723,transparent:!0,opacity:.65}),l=new Mn(new ho(.035+Math.min(n,3)*.012,18,18),o);l.position.copy(a);const u=new Da;return u.add(s,l),{group:u,line:r,bead:o}}function E3(t){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n&&(n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(8, 13, 19, 0.72)",n.beginPath(),n.arc(64,64,42,0,Math.PI*2),n.fill(),n.fillStyle="#d6fff4",n.font="700 48px Inter, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,64,66));const i=new Ob(e),r=new RS({map:i,transparent:!0,depthWrite:!1}),s=new DS(r);return s.scale.set(.5,.5,.5),s}function w3(t,e,n){const i=n.getCenter(new F),r=n.getBoundingSphere(new kl),s=Number.isFinite(i.x)?i:new F(0,0,0),a=Math.max(Number.isFinite(r.radius)?r.radius:0,2.4),o=ES.degToRad(t.fov),l=2*Math.atan(Math.tan(o/2)*Math.max(t.aspect,.1)),u=Math.min(30,Math.max(7.5,Math.max(a/Math.sin(o/2),a/Math.sin(l/2))*1.18)),h=new F(0,-1,.82).normalize();t.position.copy(s).add(h.multiplyScalar(u)),t.near=Math.max(.1,u/100),t.far=Math.max(1e3,u*8),e.target.copy(s),e.update()}function T3(t){for(const e of Object.values(t))e&&typeof e=="object"&&"dispose"in e&&typeof e.dispose=="function"&&e.dispose();t.dispose()}function Fu({icon:t,label:e}){return E.jsxs("div",{className:"flex h-9 min-w-16 items-center justify-center gap-1 rounded-md border border-border bg-background/80 px-2 text-xs text-foreground/70 backdrop-blur",children:[E.jsx("span",{className:"text-primary",children:t}),E.jsx("span",{children:e})]})}const $S=new Map;function Z_(t){const e=N3(t.seed),n=b3(t,e),i=t.optimize_geometry?A3(t.n_nodes,n):YS(t.n_nodes),r=C3(t.n_nodes,n);return{family:t.family,n_nodes:t.n_nodes,edges:n,positions:i,mapping_error:t.optimize_geometry?P3(n,i):null,descriptors:r}}async function J_(t,e){await L3(260);const n=R3(t.n_nodes,t.edges),i=Math.log10(e.rise_duration+e.hold_duration+e.fall_duration+10),r=Math.min(.18,Math.sqrt(e.n_roundings)/55),s=1-Math.min(.38,Math.abs(e.delta_start_pi+e.delta_end_pi)*.09),a=tv(.54+i*.055+s*.06,.42,.86),o=tv(Math.max(a+r,.72+r),a,.98),l=n.bestCut*a,u=n.bestCut*o,h=`local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,f={job_id:h,status:"completed",progress:100,steps:[{id:"geometry",label:"Geometry embedding",status:"completed",metric_label:"Mapping error",metric_value:t.mapping_error},{id:"pulser",label:"Pulser",status:"completed",metric_label:"Ratio Pulser",metric_value:a},{id:"sdp",label:"SDP",status:"completed",metric_label:"Status",metric_value:"browser-simulated"},{id:"rounding",label:"Rounding",status:"completed",metric_label:"Ratio hybrid",metric_value:o}],result:{n:t.n_nodes,target_edges:t.edges,positions:t.positions.map(d=>[d.x,d.y]),mapping_error:t.mapping_error,ratio_proxy_exact:n.bestCut>0?l/n.bestCut:0,ratio_pulser:a,ratio_product_best:o,ratio_hybrid:o,winner:"rounding",best_seed:1234+n.bestMask,n_roundings:e.n_roundings,sdp_status:"browser-simulated",E_pulser_in_qmc:l,E_product_best_in_qmc:u,E_hybrid_in_qmc:u,gain_hybrid_vs_pulser:o-a,cut_value:u,exact_cut_value:n.bestCut,best_partition:n.partition,annealing:e},error:null};return $S.set(h,f),f}async function ev(t){const e=$S.get(t);if(!e)throw new Error("Local pipeline job not found.");return e}function b3(t,e){const n=()=>jn(t.weight_min+e()*(t.weight_max-t.weight_min)),i=[];if(t.family==="path"){for(let r=0;r<t.n_nodes-1;r+=1)i.push({i:r,j:r+1,w:n()});return i}if(t.family==="cycle"){for(let r=0;r<t.n_nodes;r+=1)i.push({i:r,j:(r+1)%t.n_nodes,w:n()});return i}if(t.family==="star"){for(let r=1;r<t.n_nodes;r+=1)i.push({i:0,j:r,w:n()});return i}for(let r=0;r<t.n_nodes;r+=1)for(let s=r+1;s<t.n_nodes;s+=1)(t.family==="complete"||e()<=t.density)&&i.push({i:r,j:s,w:n()});return i.length===0&&i.push({i:0,j:1,w:n()}),i}function YS(t){const e=1+t*.08;return Array.from({length:t},(n,i)=>({id:i,x:jn(e*Math.cos(2*Math.PI*i/t)),y:jn(e*Math.sin(2*Math.PI*i/t))}))}function A3(t,e){const n=YS(t),i=KS(t,e);for(let r=0;r<90;r+=1){const s=Array.from({length:t},()=>({x:0,y:0}));for(let a=0;a<t;a+=1)for(let o=a+1;o<t;o+=1){const l=n[a].x-n[o].x,u=n[a].y-n[o].y,f=.012/Math.max(l*l+u*u,.02);s[a].x+=l*f,s[a].y+=u*f,s[o].x-=l*f,s[o].y-=u*f}for(const a of e){const o=n[a.i],l=n[a.j],u=l.x-o.x,h=l.y-o.y,f=Math.max(Math.sqrt(u*u+h*h),.01),d=1/Math.cbrt(Math.max(a.w,.01)),p=(f-d)*.012;s[a.i].x+=u/f*p,s[a.i].y+=h/f*p,s[a.j].x-=u/f*p,s[a.j].y-=h/f*p}for(const a of n){const o=.002+i[a.id]*8e-4;a.x=jn(a.x+s[a.id].x-a.x*o),a.y=jn(a.y+s[a.id].y-a.y*o)}}return n}function C3(t,e){const n=KS(t,e),i=t*(t-1)/2,r=n.reduce((l,u)=>l+u,0)/t,s=Math.max(...n),a=n.reduce((l,u)=>l+(u-r)**2,0)/t,o=Math.max(2,Math.ceil(r+Math.sqrt(a)));return{n:t,n_edges:e.length,density:i?jn(e.length/i):0,avg_degree:jn(r),max_degree:s,degree_variance:jn(a),hub_degree_threshold:o,hub_count:n.filter(l=>l>=o).length,sparsity:jn(1-e.length/i),clustering_coeff_mean:jn(D3(t,e)),degree_centralization:jn(n.reduce((l,u)=>l+(s-u),0)/((t-1)*(t-2)||1))}}function R3(t,e){let n=-1/0,i=0;const r=1<<t;for(let s=0;s<r;s+=1){let a=0;for(const o of e)(s>>o.i&1)!==(s>>o.j&1)&&(a+=o.w);a>n&&(n=a,i=s)}return{bestCut:jn(n),bestMask:i,partition:Array.from({length:t},(s,a)=>i>>a&1)}}function P3(t,e){if(t.length===0)return 0;const n=t.reduce((r,s)=>{const a=e[s.i],o=e[s.j],u=1/Math.max(Math.hypot(a.x-o.x,a.y-o.y),.01)**3;return r+(u-s.w)**2},0),i=t.reduce((r,s)=>r+s.w**2,0);return jn(Math.sqrt(n/Math.max(i,.001)))}function D3(t,e){const n=Array.from({length:t},()=>new Set);for(const r of e)n[r.i].add(r.j),n[r.j].add(r.i);let i=0;for(let r=0;r<t;r+=1){const s=Array.from(n[r]),a=s.length*(s.length-1)/2;if(a===0)continue;let o=0;for(let l=0;l<s.length;l+=1)for(let u=l+1;u<s.length;u+=1)n[s[l]].has(s[u])&&(o+=1);i+=o/a}return i/t}function KS(t,e){const n=Array.from({length:t},()=>0);for(const i of e)n[i.i]+=1,n[i.j]+=1;return n}function N3(t){let e=t>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function L3(t){return new Promise(e=>{window.setTimeout(e,t)})}function tv(t,e,n){return Math.min(n,Math.max(e,t))}function jn(t){return Number(t.toFixed(6))}const QS="".trim().replace(/\/$/,""),ng=QS.length>0,hd="".trim().replace(/\/$/,"");function pd(){var e;let t=localStorage.getItem("hpc_bridge_token");return t||(t=((e=window.prompt("Jeton d'accès HPC :"))==null?void 0:e.trim())??"",t&&localStorage.setItem("hpc_bridge_token",t)),t}function I3(){var t;try{return!!((t=localStorage.getItem("hpc_bridge_token"))!=null&&t.trim())}catch{return!1}}async function $s(t,e){const{baseUrl:n=QS,...i}=e??{},r=await fetch(`${n}${t}`,{...i,headers:{"Content-Type":"application/json",...i.headers}});if(!r.ok){const s=await r.text();throw new Error(s||`Request failed with status ${r.status}`)}return r.json()}function nv(t){return ng?$s("/api/graph/generate",{method:"POST",body:JSON.stringify(t)}).catch(()=>Z_(t)):Promise.resolve(Z_(t))}function U3(t,e){return ng?$s("/api/pipeline/run",{method:"POST",body:JSON.stringify({graph:t,annealing:e,n_roundings:e.n_roundings,seed:1234})}).catch(()=>J_(t,e)):J_(t,e)}function F3(t){return ng?$s(`/api/pipeline/${t}/status`).catch(()=>ev(t)):ev(t)}async function O3(t,e,n,i){return $s("/api/jobs",{baseUrl:hd,method:"POST",headers:{Authorization:`Bearer ${pd()}`},body:JSON.stringify({kind:"hybrid_pipeline",graph:{family:t.family,n_nodes:t.n_nodes,density:t.density,weight_min:t.weight_min,weight_max:t.weight_max,seed:t.seed},annealing:e,seed:1234,enable_animations:n,resources:i})})}function k3(t){return $s(`/api/jobs/${t}`,{baseUrl:hd,headers:{Authorization:`Bearer ${pd()}`}})}function iv(t){return $s(`/api/jobs/${t}/cancel`,{baseUrl:hd,method:"POST",headers:{Authorization:`Bearer ${pd()}`}})}function B3(){return $s("/api/workers",{baseUrl:hd,headers:{Authorization:`Bearer ${pd()}`}})}const z3=["done","error","cancelled"];function Ip(t){return!z3.includes(t)}function H3(){const t=st(r=>r.config),e=st(r=>r.randomizeSeed),n=st(r=>r.setConfig),i=st(r=>r.setGraph);return Zu({mutationFn:()=>{if(e){const r=Math.floor(Math.random()*1e6);return n({seed:r}),nv({...t,seed:r})}return nv(t)},onSuccess:i})}function V3(){const t=st(y=>y.config),e=st(y=>y.graph),n=st(y=>y.job),i=st(y=>y.hpcJob),r=st(y=>y.annealing),s=st(y=>y.enableAnimations),a=st(y=>y.hpcResources),o=st(y=>y.setJob),l=st(y=>y.setHpcJob),u=Zu({mutationFn:()=>{if(!e)throw new Error("Generate a graph before running the pipeline.");return U3(e,r)},onSuccess:o}),h=jd({queryKey:["pipeline-status",n==null?void 0:n.job_id],queryFn:()=>F3((n==null?void 0:n.job_id)??""),enabled:!!(n!=null&&n.job_id)&&(n==null?void 0:n.status)!=="completed"&&(n==null?void 0:n.status)!=="failed",refetchInterval:1200}),f=Zu({mutationFn:async()=>(i&&Ip(i.status)&&await iv(i.job_id).catch(()=>{}),O3(t,r,s,a)),onMutate:()=>l(null),onSuccess:l}),d=jd({queryKey:["hpc-job-status",i==null?void 0:i.job_id],queryFn:()=>k3((i==null?void 0:i.job_id)??""),enabled:!!(i!=null&&i.job_id)&&!!(i&&Ip(i.status)),refetchInterval:3e3}),p=Zu({mutationFn:()=>{if(!i)throw new Error("No HPC job to stop.");return iv(i.job_id)},onSuccess:l}),_=jd({queryKey:["hpc-workers"],queryFn:B3,enabled:I3(),refetchInterval:5e3,retry:1});return Pe.useEffect(()=>{h.data&&h.data.job_id===(n==null?void 0:n.job_id)&&o(h.data)},[n==null?void 0:n.job_id,o,h.data]),Pe.useEffect(()=>{d.data&&d.data.job_id===(i==null?void 0:i.job_id)&&l(d.data)},[i==null?void 0:i.job_id,d.data,l]),{run:u,status:h,hpcRun:f,hpcStatus:d,hpcStop:p,workers:_}}const G3=["path","cycle","star","complete","random"],j3="/quantum-maxcut/media/brand/quantina-logo.png";function W3(){const t=st(u=>u.config),e=st(u=>u.annealing),n=st(u=>u.enableAnimations),i=st(u=>u.randomizeSeed),r=st(u=>u.setConfig),s=st(u=>u.setAnnealing),a=st(u=>u.setEnableAnimations),o=st(u=>u.setRandomizeSeed),l=H3();return E.jsxs("aside",{className:"flex min-h-0 flex-col overflow-y-auto overscroll-contain border-b border-border bg-muted/30 p-4 sm:p-5 lg:h-[100svh] lg:border-b-0 lg:border-r",children:[E.jsxs("div",{className:"mb-6 flex items-center gap-3",children:[E.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 bg-black/25 p-1 shadow-[0_0_28px_hsl(var(--primary)/0.18)]",children:E.jsx("img",{alt:"","aria-hidden":"true",className:"h-full w-full object-contain drop-shadow-[0_0_7px_rgba(255,79,116,0.3)]",src:j3})}),E.jsxs("div",{children:[E.jsx("h1",{className:"text-lg font-semibold",children:"QuantINA Lab"}),E.jsx("p",{className:"text-sm text-foreground/60",children:"Neutral-atom simulation"})]})]}),E.jsxs("div",{className:"space-y-5",children:[E.jsxs("button",{type:"button",onClick:()=>l.mutate(),disabled:l.isPending,className:"flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60",children:[l.isPending?E.jsx(Cw,{className:"animate-spin",size:16}):E.jsx(Aw,{size:16}),"Generate graph"]}),l.error?E.jsx("p",{className:"rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200",children:l.error.message}):null,E.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2",children:[E.jsxs("label",{className:"flex flex-1 items-center gap-2 text-sm",children:[E.jsx("span",{className:"text-foreground/60",children:"Seed"}),E.jsx("input",{type:"number",value:t.seed,disabled:i,onChange:u=>r({seed:Number(u.target.value)}),className:"w-full min-w-0 rounded-md border border-border bg-background px-2 py-1 font-mono text-sm outline-none focus:ring-2 focus:ring-primary disabled:opacity-45"})]}),E.jsxs("label",{className:"flex items-center gap-2 text-xs text-foreground/60",children:[E.jsx("input",{type:"checkbox",checked:i,onChange:u=>o(u.target.checked),className:"h-4 w-4 accent-primary"}),"Randomize"]})]}),E.jsxs("label",{className:"block",children:[E.jsx("span",{className:"text-sm font-medium text-foreground/80",children:"Graph family"}),E.jsx("select",{value:t.family,onChange:u=>r({family:u.target.value}),className:"mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary",children:G3.map(u=>E.jsx("option",{value:u,children:u},u))})]}),E.jsx(Bn,{label:"Nodes",value:t.n_nodes,min:2,max:12,step:1,onChange:u=>r({n_nodes:u})}),E.jsx(Bn,{label:"Density",value:t.density,min:.1,max:1,step:.05,disabled:t.family!=="random",onChange:u=>r({density:u})}),E.jsx(Bn,{label:"Min weight",value:t.weight_min,min:.1,max:3,step:.1,onChange:u=>r({weight_min:u})}),E.jsx(Bn,{label:"Max weight",value:t.weight_max,min:.2,max:4,step:.1,onChange:u=>r({weight_max:u})}),E.jsxs("label",{className:"flex items-center justify-between rounded-md border border-border bg-background/70 px-3 py-3 text-sm",children:[E.jsx("span",{children:"Optimize atom geometry"}),E.jsx("input",{type:"checkbox",checked:t.optimize_geometry,onChange:u=>r({optimize_geometry:u.target.checked}),className:"h-4 w-4 accent-primary"})]}),E.jsxs("label",{className:"flex items-center justify-between rounded-md border border-border bg-background/70 px-3 py-3 text-sm",children:[E.jsxs("div",{children:[E.jsx("span",{children:"HPC animations"}),E.jsx("p",{className:"text-xs text-foreground/50",children:"Magnetization replay & rounding search (HPC run only)"})]}),E.jsx("input",{type:"checkbox",checked:n,onChange:u=>a(u.target.checked),className:"h-4 w-4 accent-primary"})]}),E.jsxs("div",{className:"rounded-md border border-border bg-background/55 p-3",children:[E.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Dw,{size:17,className:"text-primary"}),E.jsxs("div",{children:[E.jsx("h2",{className:"text-sm font-semibold",children:"Annealing controls"}),E.jsx("p",{className:"text-xs text-foreground/50",children:"Dynamic pulse schedule"})]})]}),E.jsx("button",{type:"button",onClick:()=>s({omega_peak_mhz:2,rise_duration:1e3,hold_duration:1e3,fall_duration:26e3,delta_start_pi:1,delta_hold_pi:-.5,delta_end_pi:-1,sampling_rate:.05,n_roundings:32}),className:"rounded-md border border-border p-2 text-foreground/65 transition hover:bg-muted hover:text-foreground",title:"Reset annealing controls",children:E.jsx(Pw,{size:15})})]}),E.jsxs("div",{className:"space-y-4",children:[E.jsx(Bn,{label:"Omega peak",value:e.omega_peak_mhz,min:.5,max:5,step:.1,unit:"MHz",onChange:u=>s({omega_peak_mhz:u})}),E.jsx(Bn,{label:"Rise",value:e.rise_duration,min:100,max:5e3,step:100,unit:"ns",onChange:u=>s({rise_duration:u})}),E.jsx(Bn,{label:"Hold",value:e.hold_duration,min:0,max:6e3,step:100,unit:"ns",onChange:u=>s({hold_duration:u})}),E.jsx(Bn,{label:"Fall",value:e.fall_duration,min:1e3,max:4e4,step:500,unit:"ns",onChange:u=>s({fall_duration:u})}),E.jsx(Bn,{label:"Delta start",value:e.delta_start_pi,min:-2,max:2,step:.05,unit:"pi",onChange:u=>s({delta_start_pi:u})}),E.jsx(Bn,{label:"Delta hold",value:e.delta_hold_pi,min:-2,max:2,step:.05,unit:"pi",onChange:u=>s({delta_hold_pi:u})}),E.jsx(Bn,{label:"Delta end",value:e.delta_end_pi,min:-2,max:2,step:.05,unit:"pi",onChange:u=>s({delta_end_pi:u})}),E.jsx(Bn,{label:"Sampling",value:e.sampling_rate,min:.01,max:.2,step:.01,onChange:u=>s({sampling_rate:u})}),E.jsx(Bn,{label:"Roundings",value:e.n_roundings,min:8,max:128,step:8,onChange:u=>s({n_roundings:u})})]}),E.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2 rounded-md border border-border bg-muted/35 p-2",children:[E.jsx(Rf,{label:"Total",value:`${sc(e.rise_duration+e.hold_duration+e.fall_duration,0)} ns`}),E.jsx(Rf,{label:"Sweep",value:`${sc(e.delta_start_pi,2)}→${sc(e.delta_end_pi,2)} pi`}),E.jsx(Rf,{label:"Mode",value:E.jsx(Zy,{size:15})})]})]})]})]})}function Bn({label:t,value:e,min:n,max:i,step:r,unit:s,disabled:a=!1,onChange:o}){const l=(e-n)/(i-n)*100;return E.jsxs("label",{className:a?"block opacity-45":"block",children:[E.jsxs("div",{className:"flex items-center justify-between text-sm",children:[E.jsx("span",{className:"font-medium text-foreground/80",children:t}),E.jsxs("span",{className:"font-mono text-foreground/60",children:[sc(e,r<1?2:0),s?E.jsx("span",{className:"ml-1 text-foreground/40",children:s}):null]})]}),E.jsx("input",{type:"range",min:n,max:i,step:r,value:e,disabled:a,onChange:u=>o(Number(u.target.value)),className:"modern-slider mt-3 w-full",style:{"--slider-progress":`${l}%`}})]})}function Rf({label:t,value:e}){return E.jsxs("div",{className:"min-w-0",children:[E.jsx("p",{className:"text-[10px] font-medium uppercase text-foreground/45",children:t}),E.jsx("div",{className:"mt-1 flex min-h-5 items-center truncate font-mono text-xs text-primary",children:e})]})}function sc(t,e){return t.toFixed(e)}const rv={commitHash:"unknown",commitDate:"unknown",buildDate:"unknown"},ga=(()=>{try{return{...rv,...JSON.parse('{"commitHash":"92c10d87bf5a","commitDate":"2026-11-12T16:28:15+01:00","buildDate":"2026-11-12T15:28:56.468Z"}')}}catch{return rv}})();function Ou(t){if(t==="unknown")return"unknown";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}const X3={queued_slurm:"queued on SLURM"};function Up(t){const e=Math.round(t),n=Math.floor(e/(24*60)),i=Math.floor(e%(24*60)/60),r=e%60;return n>0?i>0?`${n}j ${i}h`:`${n}j`:i>0?r>0?`${i}h${String(r).padStart(2,"0")}`:`${i}h`:`${r}min`}function q3(t){const e=Math.max(0,Math.round(t)),n=Math.floor(e/(24*3600)),i=Math.floor(e%(24*3600)/3600),r=Math.floor(e%3600/60),s=e%60,a=`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(s).padStart(2,"0")}`;return n>0?`${n}j ${a}`:i>0?a:`${String(r).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function $3(t){const[e,n]=Pe.useState(()=>Date.now());return Pe.useEffect(()=>{if(!t)return;const i=setInterval(()=>n(Date.now()),1e3);return()=>clearInterval(i)},[t]),e}const sv={setup:"setup",positions:"geometry",pulser:"pulser",sdp:"sdp",rounding:"rounding"};function Y3(t){return t==="done"?"completed":t==="error"||t==="cancelled"?"failed":"running"}const K3=new Set(["queued","waiting_for_worker","dispatched","submitting","queued_slurm","cancelling"]);function Q3(t,e){return t?t==="done"?E.jsx(Ky,{size:16}):t==="error"||t==="cancelled"?E.jsx(Ic,{size:16}):K3.has(t)?E.jsx(ka,{className:"animate-spin",size:16}):E.jsx(Qy,{size:16}):e?E.jsx(Ic,{size:16}):E.jsx(od,{size:16})}function Z3(){var v,S,b;const[t,e]=Pe.useState(!1),n=st(T=>T.graph),i=st(T=>T.job),r=st(T=>T.hpcJob),s=st(T=>T.hpcResources),a=st(T=>T.setHpcResources),{run:o,hpcRun:l,hpcStop:u,workers:h}=V3(),f=(S=(v=h.data)==null?void 0:v[0])==null?void 0:S.capabilities,d=r&&Ip(r.status),p=d&&r.status!=="cancelling",_=r?Y3(r.status):l.error?"failed":"pending",y=h.isSuccess,g=((b=h.data)==null?void 0:b.length)??0,c=y&&g===0,m=Pe.useMemo(()=>{var T,R;return r?aD(((T=r.progress)==null?void 0:T.phases)??[],r.status,r.result,(R=r.progress)==null?void 0:R.current):(i==null?void 0:i.steps)??[]},[r,i==null?void 0:i.steps]);return E.jsxs("section",{className:"rounded-md border border-border bg-muted/25 p-4 shadow-panel",children:[E.jsxs("div",{className:"mb-4",children:[E.jsxs("div",{className:"min-w-0",children:[E.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-foreground/60",children:"Pipeline"}),E.jsx("p",{className:"text-xl font-semibold",children:"Neutral-atom experiment workflow"}),E.jsx("p",{className:"mt-1 font-mono text-[11px] text-foreground/40",title:`Build: ${Ou(ga.buildDate)}
Commit: ${ga.commitHash}
Commit date: ${Ou(ga.commitDate)}`,children:`build ${Ou(ga.buildDate)} · commit ${ga.commitHash} (${Ou(ga.commitDate)})`})]}),E.jsxs("div",{className:"mt-4 flex flex-wrap items-stretch gap-2",children:[E.jsxs("button",{type:"button",disabled:!n||o.isPending||(i==null?void 0:i.status)==="running"||(i==null?void 0:i.status)==="queued",onClick:()=>o.mutate(),className:"flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45",children:[o.isPending||(i==null?void 0:i.status)==="running"?E.jsx(ka,{className:"animate-spin",size:16}):E.jsx(od,{size:16}),"Run"]}),E.jsxs("div",{className:"flex items-stretch overflow-hidden rounded-md border border-primary/60",children:[E.jsxs("button",{type:"button",disabled:!n||l.isPending||c,onClick:()=>l.mutate(),className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-45",title:c?"No HPC worker connected to hpc-bridge — start hpc_worker.py on the cluster":d?"Cancel the running HPC job and submit this configuration instead":"Submit this configuration to hpc-bridge",children:[l.isPending?E.jsx(ka,{className:"animate-spin",size:16}):E.jsx(Qy,{size:16}),d?"Restart HPC":"Run HPC"]}),p?E.jsxs("button",{type:"button",disabled:u.isPending,onClick:()=>u.mutate(),className:"flex items-center gap-2 border-l border-primary/60 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45",title:"Stop the running HPC job without submitting a new one",children:[u.isPending?E.jsx(ka,{className:"animate-spin",size:16}):E.jsx(Nw,{size:16}),"Stop"]}):null]}),E.jsxs("button",{type:"button",disabled:!n,onClick:()=>e(!0),className:"flex items-center gap-2 rounded-md border border-cyan-300/45 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15 disabled:cursor-not-allowed disabled:opacity-40",title:n?"Prepare this configuration for quantum hardware":"Generate a graph before preparing a QPU run",children:[E.jsx(F0,{size:16}),"Run QPU"]})]})]}),y?E.jsx("p",{className:"mb-3 -mt-2 text-right text-[11px] text-foreground/40",children:g>0?`${g} HPC worker${g>1?"s":""} connected to hpc-bridge`:"No HPC worker connected to hpc-bridge"}):null,E.jsx(nD,{capabilities:f,resources:s,onChange:a}),t?E.jsx("div",{id:"qpu-integration-status",className:"mb-4 rounded-md border border-cyan-300/30 bg-cyan-300/[0.07] p-3 text-sm",role:"status",children:E.jsxs("div",{className:"flex items-start justify-between gap-4",children:[E.jsxs("div",{className:"flex min-w-0 items-start gap-3",children:[E.jsx(F0,{className:"mt-0.5 shrink-0 text-cyan-200",size:18}),E.jsxs("div",{children:[E.jsx("p",{className:"font-semibold text-cyan-100",children:"QPU pipeline ready for integration"}),E.jsx("p",{className:"mt-1 text-foreground/65",children:"The current graph and annealing configuration will be submitted to quantum hardware once the QPU provider connector is configured."}),E.jsx("p",{className:"mt-2 font-mono text-xs text-foreground/45",children:"Provider: not configured · Submission: unavailable"})]})]}),E.jsx("button",{type:"button",onClick:()=>e(!1),className:"shrink-0 rounded-md border border-cyan-300/25 p-1.5 text-cyan-100/70 transition hover:bg-cyan-300/10 hover:text-cyan-50",title:"Close QPU status",children:E.jsx(Ic,{size:15})})]})}):null,E.jsx("div",{className:"mb-4 h-2 overflow-hidden rounded-full bg-background",children:E.jsx("div",{className:"h-full bg-primary transition-all duration-500",style:{width:`${(i==null?void 0:i.progress)??0}%`}})}),E.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5",children:(m.length>0?m:ac).map(T=>E.jsx(lD,{step:T},T.id))}),o.error||i!=null&&i.error?E.jsx("p",{className:"mt-4 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200",children:o.error instanceof Error?o.error.message:i==null?void 0:i.error}):null,l.error||r?E.jsxs("div",{className:`mt-4 rounded-md border p-3 text-sm transition-colors duration-500 ${ZS[_]}`,children:[E.jsxs("div",{className:"flex items-center justify-between gap-3",children:[E.jsxs("span",{className:`flex items-center gap-2 font-semibold ${Fp[_]}`,children:[Q3(r==null?void 0:r.status,!!l.error),"HPC job"]}),E.jsx("span",{className:"font-mono text-xs text-foreground/60",children:(r==null?void 0:r.job_id)??"not submitted"})]}),l.error?E.jsx("p",{className:"mt-2 text-red-200",children:l.error.message}):null,u.error?E.jsx("p",{className:"mt-2 text-red-200",children:u.error.message}):null,r?E.jsxs("div",{className:"mt-2 flex items-center justify-between gap-3",children:[E.jsxs("p",{className:"text-foreground/70",children:["Status: ",E.jsx("span",{className:"font-medium text-foreground",children:X3[r.status]??r.status}),r.slurm_job_id?` · SLURM ${r.slurm_job_id}`:"",r.resources?` · ${r.resources.nodes} node${r.resources.nodes>1?"s":""} · ${r.resources.cpus_per_task} cores${r.resources.partition?` · partition ${r.resources.partition}`:""}${r.resources.mem_gb?` · ${r.resources.mem_gb}GB`:""}${r.resources.time_min_minutes?` · time-min ${Up(r.resources.time_min_minutes)}`:""}`:""]}),r.result?E.jsx(iD,{result:r.result}):null]}):null,(r==null?void 0:r.status)==="queued_slurm"&&r.queue_position!=null?E.jsx(tD,{position:r.queue_position,total:r.queue_total??null,estimatedStart:r.estimated_start??null,estimatedStartPending:r.estimated_start_pending??!1,queuedSince:r.queued_since??r.created_at??null}):null,r!=null&&r.error?E.jsx("p",{className:"mt-2 text-red-200",children:r.error}):null]}):null]})}const J3=[{afterMinutes:20,className:"text-red-400"},{afterMinutes:10,className:"text-orange-400"},{afterMinutes:5,className:"text-yellow-400"}];function eD(t){if(t==null)return"text-foreground/70";const e=J3.find(n=>t>=n.afterMinutes);return(e==null?void 0:e.className)??"text-foreground/70"}function tD({position:t,total:e,estimatedStart:n,estimatedStartPending:i,queuedSince:r}){const s=t<=1?"next in queue":e!=null?`#${t} of ${e} pending`:`#${t} in queue`,a=$3(n!=null||r!=null),o=n?new Date(n).getTime():null,l=o!=null?(o-a)/1e3:null,u=r?new Date(r).getTime():null,h=u!=null?(a-u)/6e4:null,f=l!=null?l/60:null,d=eD(f??h);return E.jsxs("div",{className:"mt-1 flex items-center justify-between gap-3 text-xs text-foreground/50",children:[E.jsxs("span",{className:"flex items-center gap-1.5",children:[E.jsxs("span",{title:"Rank among pending jobs on this partition — indicative, not a time estimate",children:["Queue position: ",s]}),n&&o!=null&&l!=null?E.jsxs("span",{className:d,title:"Estimated by SLURM's backfill scheduler — not a guarantee",children:["· estimated"," ",E.jsx("span",{className:"font-bold",children:l>0?`starting in ${q3(l)}`:"starting any moment"})]}):i?E.jsxs("span",{className:`inline-flex items-center gap-1 ${d}`,children:[E.jsx(ka,{className:"h-3 w-3 animate-spin"}),"estimating start time…"]}):null]}),o!=null?E.jsxs("span",{className:d,title:"Estimated by SLURM's backfill scheduler — not a guarantee",children:["est. ",new Date(o).toLocaleString()]}):null]})}function Pf({label:t,value:e,min:n,max:i,suffix:r="",formatValue:s,onChange:a}){return E.jsxs("label",{className:"flex flex-col gap-1 text-xs text-foreground/60",children:[E.jsxs("span",{className:"flex items-center justify-between",children:[E.jsx("span",{children:t}),E.jsx("span",{className:"font-mono text-foreground/80",children:s?s(e):`${e}${r}`})]}),E.jsx("input",{type:"range",min:n,max:i,value:Math.min(Math.max(e,n),i),onChange:o=>a(Number(o.target.value)),className:"accent-primary"})]})}function nD({capabilities:t,resources:e,onChange:n}){const i=Pe.useMemo(()=>t?Object.keys(t.partitions).sort():[],[t]),r=e.partition??(t==null?void 0:t.default_partition)??i[0],s=r?t==null?void 0:t.partitions[r]:void 0,a=(t==null?void 0:t.max_cpus)??32,o=(t==null?void 0:t.max_mem_gb)??0,l=o>0?o:128,u=(t==null?void 0:t.default_time_min_minutes)??20,h=(s==null?void 0:s.max_time_minutes)??1440;return E.jsxs("details",{className:"mb-4 rounded-md border border-border bg-background/60",children:[E.jsxs("summary",{className:"cursor-pointer select-none px-3 py-2 text-xs font-medium text-foreground/60 hover:text-foreground",children:["Job resources",r?` (${r})`:""]}),E.jsxs("div",{className:"grid gap-3 border-t border-border p-3 sm:grid-cols-2 lg:grid-cols-4",children:[E.jsxs("label",{className:"flex flex-col gap-1 text-xs text-foreground/60",children:["Partition",E.jsxs("select",{value:r??"",disabled:i.length===0,onChange:f=>n({partition:f.target.value}),className:"rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground disabled:opacity-50",children:[i.length===0?E.jsx("option",{value:"",children:"(none advertised)"}):null,i.map(f=>E.jsx("option",{value:f,children:f},f))]})]}),E.jsx(Pf,{label:"Cores",min:1,max:a,value:e.cpus??(t==null?void 0:t.default_cpus_per_task)??8,onChange:f=>n({cpus:f})}),E.jsx(Pf,{label:`Memory (0 = auto${o<=0?", no server-side cap":""})`,min:0,max:l,suffix:" GB",value:e.mem_gb??0,onChange:f=>n({mem_gb:f})}),E.jsx(Pf,{label:`Min time${(s==null?void 0:s.max_time_minutes)!=null?` (partition max ${Up(s.max_time_minutes)})`:""}`,min:1,max:h,formatValue:Up,value:e.time_min_minutes??u,onChange:f=>n({time_min_minutes:f})})]})]})}function iD({result:t}){return E.jsxs("details",{className:"shrink-0 rounded-md border border-border bg-background/60",children:[E.jsx("summary",{className:"cursor-pointer select-none px-2 py-1.5 text-xs font-medium text-foreground/60 hover:text-foreground",children:"Raw result JSON"}),E.jsx("pre",{className:"max-h-40 overflow-auto border-t border-border p-2 text-xs text-foreground/65",children:JSON.stringify(t,null,2)})]})}const ac=[{id:"setup",label:"Setup",status:"pending",metric_label:"Import duration",metric_value:null},{id:"geometry",label:"Geometry embedding",status:"pending",metric_label:"Mapping error",metric_value:null},{id:"pulser",label:"Pulser",status:"pending",metric_label:"Ratio Pulser",metric_value:null},{id:"sdp",label:"SDP",status:"pending",metric_label:"Status",metric_value:null},{id:"rounding",label:"Rounding",status:"pending",metric_label:"Ratio hybrid",metric_value:null}],rD={setup:"setup_duration_seconds",geometry:"mapping_error",pulser:"ratio_pulser",sdp:"sdp_status",rounding:"ratio_hybrid"},sD={setup:"duration_seconds",geometry:"mapping_error",pulser:"ratio_pulser",sdp:"sdp_status",rounding:"ratio_hybrid"};function aD(t,e,n,i){const r=new Set(t.map(f=>sv[f.phase])),s=e==="error"||e==="cancelled",a=e==="running",o=e==="done",l=n==null?void 0:n.phase_durations_seconds,u=o&&l&&typeof l=="object"?Object.keys(l):[],h=new Set(u.map(f=>f==="positions"?"geometry":f));return ac.map((f,d)=>{if(r.has(f.id)||h.has(f.id)){const y=t.find(b=>sv[b.phase]===f.id),g=sD[f.id],m=(y&&g?y[g]:void 0)??(n==null?void 0:n[rD[f.id]]),v=f.id==="geometry"?"positions":f.id,S=!y&&l?l[v]:void 0;return{...f,status:"completed",metric_value:typeof m=="number"||typeof m=="string"?m:null,duration_seconds:(y==null?void 0:y.duration_seconds)??(typeof S=="number"?S:void 0)}}const p=d===0||r.has(ac[d-1].id)||h.has(ac[d-1].id);if(s)return{...f,status:p?"failed":"pending"};const _=p&&a;return _&&f.id==="rounding"&&i&&i.total>0?{...f,status:"running",metric_label:"Rounding trials",metric_value:`${i.done}/${i.total}`}:{...f,status:_?"running":"pending"}})}const ZS={pending:"border-border bg-background/70",running:"border-primary/70 bg-primary/10 shadow-[0_0_0_1px_rgba(120,228,202,0.25)]",completed:"border-primary bg-primary/20",failed:"border-red-500/70 bg-red-500/10"},Fp={pending:"text-foreground/50",running:"text-primary",completed:"text-primary",failed:"text-red-300"};function oD(t,e=15){return{pending:E.jsx(od,{size:e}),running:E.jsx(ka,{className:"animate-spin",size:e}),completed:E.jsx(Ky,{size:e}),failed:E.jsx(Ic,{size:e})}[t]}function lD({step:t}){const e=oD(t.status);return E.jsxs("article",{className:`min-h-28 rounded-md border p-3 transition-colors duration-500 ${ZS[t.status]}`,children:[E.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[E.jsxs("span",{className:`text-xs font-medium uppercase ${Fp[t.status]}`,children:[t.status,t.duration_seconds!==void 0?` · ${t.duration_seconds.toFixed(2)}s`:""]}),E.jsx("span",{className:Fp[t.status],children:e})]}),E.jsx("h3",{className:"text-sm font-semibold leading-tight",children:t.label}),E.jsx("p",{className:"mt-2 text-xs text-foreground/55",children:t.metric_label}),E.jsx("p",{className:"mt-1 truncate font-mono text-sm text-primary",children:typeof t.metric_value=="number"?t.metric_value.toFixed(5):t.metric_value??"—"})]})}const uD=[["ratio_proxy_exact","Ratio Proxy"],["cut_value","Cut Value"],["mapping_error","Mapping Error"],["gain_hybrid_vs_pulser","Gain Hybrid"]];function cD(){const t=st(s=>s.job),e=st(s=>s.hpcJob),n=(t==null?void 0:t.result)??(e==null?void 0:e.result),i=Pe.useMemo(()=>n?[{name:"Pulser",ratio:Number(n.ratio_pulser??0)},{name:"Hybrid",ratio:Number(n.ratio_hybrid??0)}]:[{name:"Pulser",ratio:0},{name:"Hybrid",ratio:0}],[n]),r=Math.max(...i.map(s=>s.ratio),1);return E.jsxs("aside",{className:"flex min-h-0 flex-col gap-4 overflow-y-auto overscroll-contain border-t border-border bg-muted/30 p-4 sm:p-5 lg:h-[100svh] lg:border-t-0 lg:border-l",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{children:[E.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"Results"}),E.jsx("h2",{className:"text-xl font-semibold",children:"Live metrics"})]}),E.jsx("button",{type:"button",disabled:!n,onClick:()=>fD(n),className:"rounded-md border border-border p-2 text-foreground/75 transition hover:bg-background disabled:opacity-40",title:"Export JSON",children:E.jsx(Mw,{size:16})})]}),E.jsx("div",{className:"grid grid-cols-2 gap-3",children:uD.map(([s,a])=>E.jsx(dD,{label:a,value:n==null?void 0:n[s]},s))}),E.jsxs("div",{className:"min-h-64 rounded-md border border-border bg-background/70 p-4",children:[E.jsx("p",{className:"mb-4 text-sm font-semibold",children:"Pulser vs Hybrid"}),E.jsx("div",{className:"grid h-[210px] grid-cols-2 items-end gap-4 border-b border-l border-border/70 px-4 pb-6 pt-4",children:i.map(s=>E.jsxs("div",{className:"flex h-full min-w-0 flex-col items-center justify-end gap-3",children:[E.jsx("div",{className:"flex h-full w-full items-end justify-center",children:E.jsx("div",{className:"w-full max-w-[5rem] rounded-t-md bg-primary",style:{height:`${Math.max(4,s.ratio/r*100)}%`}})}),E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-xs font-medium text-foreground/60",children:s.name}),E.jsx("p",{className:"mt-1 font-mono text-xs text-primary",children:n?s.ratio.toFixed(5):"—"})]})]},s.name))})]})]})}function dD({label:t,value:e}){const n=typeof e=="number"?e.toFixed(5):"—";return E.jsxs("article",{className:"rounded-md border border-border bg-background/70 p-3",children:[E.jsx("p",{className:"text-xs text-foreground/55",children:t}),E.jsx("p",{className:"mt-2 font-mono text-lg font-semibold text-primary",children:n}),E.jsx("div",{className:"mt-3 h-8 rounded-sm bg-[linear-gradient(90deg,rgba(67,217,184,.1),rgba(67,217,184,.45),rgba(67,217,184,.08))]"})]})}function fD(t){if(!t)return;const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="quantum-maxcut-result.json",i.click(),URL.revokeObjectURL(n)}const hD=[{id:"maxcut",name:"MaxCut Case Study",description:"Compare quantum and classical approaches to graph optimization.",category:"Graph benchmark",status:"available",tags:["Pulser","Graphs","Benchmark"],route:"/simulations/maxcut",icon:yw,visual:"graph"},{id:"ald",name:"ALD Simulation",description:"Explore Atomic Layer Deposition for materials modelling.",category:"Quantum chemistry",status:"available",tags:["Chemistry","Materials","Simulation"],route:"https://karimelhoudaigui.github.io/quantum-ald-simulation/",icon:Ew,visual:"layers"}],ku="/quantum-maxcut/";function pD({onNavigate:t}){function e(n,i){n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||(n.preventDefault(),t(i))}return E.jsxs("main",{className:"quantina-landing simulation-hub",children:[E.jsx("a",{className:"quantina-skip-link",href:"#simulation-content",children:"Skip to simulations"}),E.jsxs("header",{className:"quantina-header quantina-container",children:[E.jsxs("a",{className:"quantina-wordmark",href:ku,onClick:n=>e(n,"/quantina"),"aria-label":"QuantINA home",children:[E.jsx("img",{src:`${ku}media/brand/quantina-logo.png`,alt:"",width:"36",height:"36"}),E.jsx("span",{children:"QuantINA"})]}),E.jsx("nav",{"aria-label":"Main navigation",children:E.jsxs("a",{href:ku,onClick:n=>e(n,"/quantina"),children:[E.jsx($y,{size:14,"aria-hidden":"true"})," Back to QuantINA"]})})]}),E.jsxs("section",{className:"simulation-workspace quantina-container",id:"simulation-content","aria-labelledby":"simulation-title",children:[E.jsxs("div",{className:"simulation-intro",children:[E.jsx("p",{className:"quantina-eyebrow",children:"The workspace"}),E.jsx("h1",{id:"simulation-title",children:"Explore simulations."}),E.jsx("p",{children:"Choose a tool to start exploring."})]}),E.jsx("ul",{className:"simulation-tools","aria-label":"Available simulations",children:hD.filter(n=>n.status==="available"&&n.route).map(n=>{const i=n.route,r=/^https?:\/\//.test(i),s=n.icon,a=r?jo:Yy;return E.jsx("li",{children:E.jsxs("a",{className:"simulation-tool",href:r?i:`${ku}?simulation=${encodeURIComponent(n.id)}`,onClick:r?void 0:o=>e(o,i),"aria-labelledby":`${n.id}-title ${n.id}-action`,"aria-describedby":`${n.id}-description`,children:[E.jsx(s,{className:"simulation-tool-icon",size:25,strokeWidth:1.5,"aria-hidden":"true"}),E.jsxs("div",{className:"simulation-tool-copy",children:[E.jsx("h2",{id:`${n.id}-title`,children:n.name}),E.jsx("p",{id:`${n.id}-description`,children:n.description})]}),E.jsxs("span",{className:"simulation-tool-action",id:`${n.id}-action`,children:["Open simulation ",E.jsx(a,{size:18,"aria-hidden":"true"}),r&&E.jsx("span",{className:"sr-only",children:"(external site)"})]})]})},n.id)})})]}),E.jsx("footer",{className:"quantina-footer quantina-container",children:E.jsx("p",{children:"A HYBQUANT research workspace."})})]})}const av="/quantum-maxcut/media",ov="mailto:yassine.hamoudi@labri.fr?subject=QuantINA%20%E2%80%94%20Industrial%20project",mD=[{name:"Yassine Hamoudi",role:"HYBQUANT Project Coordinator",affiliation:"LaBRI",email:"yassine.hamoudi@labri.fr"},{name:"Adrian Tanasa",role:"Deputy HYBQUANT Project Coordinator",affiliation:"LaBRI",email:"adrian.tanasa@labri.fr"},{name:"Karim El Houdaigui",role:"HYBQUANT Research Engineer",affiliation:"LaBRI",email:"karim.el-houdaigui@labri.fr"},{name:"Laurent Facq",role:"Research Engineer",affiliation:"IMB",email:"Laurent.Facq@math.u-bordeaux.fr"},{name:"Audrey Durand",role:"Regional Initiative Coordinator — Naquidis",affiliation:"Institut d'Optique",email:"audrey.durand@institutoptique.fr"}];function gD({onNavigate:t}){return E.jsxs("main",{className:"quantina-landing",id:"top",children:[E.jsx("a",{className:"quantina-skip-link",href:"#quantina-content",children:"Skip to content"}),E.jsxs("header",{className:"quantina-header quantina-container",children:[E.jsxs("a",{className:"quantina-wordmark",href:"#top","aria-label":"QuantINA home",children:[E.jsx("img",{src:`${av}/brand/quantina-logo.png`,alt:"",width:"36",height:"36"}),E.jsx("span",{children:"QuantINA"})]}),E.jsxs("nav",{"aria-label":"Main navigation",children:[E.jsx("a",{href:"#project",children:"About"}),E.jsxs("a",{href:"#join",children:["Contact ",E.jsx(jo,{size:14,"aria-hidden":"true"})]})]})]}),E.jsxs("section",{className:"quantina-hero quantina-container",id:"quantina-content","aria-labelledby":"quantina-title",children:[E.jsx("p",{className:"quantina-eyebrow",children:"HYBQUANT · Nouvelle-Aquitaine"}),E.jsxs("h1",{id:"quantina-title",children:["Quantum research.",E.jsx("span",{children:"Industrial challenges."})]}),E.jsx("p",{className:"quantina-hero-description",children:"Connecting companies, researchers and engineers to explore what quantum computing can bring to real industrial problems."}),E.jsxs("div",{className:"quantina-actions",children:[E.jsxs("a",{className:"quantina-primary-action",href:ov,children:["Discuss a project ",E.jsx(jo,{size:17,"aria-hidden":"true"})]}),E.jsxs("button",{className:"quantina-text-action",type:"button",onClick:()=>t("/simulations"),children:["Explore simulations ",E.jsx(Yy,{size:17,"aria-hidden":"true"})]})]})]}),E.jsxs("section",{className:"quantina-about quantina-container",id:"project","aria-labelledby":"quantina-about-title",children:[E.jsx("p",{className:"quantina-eyebrow",children:"The initiative"}),E.jsxs("div",{children:[E.jsx("h2",{id:"quantina-about-title",children:"A bridge between research and industry."}),E.jsx("p",{children:"Led by the Maison du Quantique de Nouvelle-Aquitaine, QuantINA turns industrial questions into focused quantum, hybrid and HPC experiments."}),E.jsxs("p",{id:"method",children:["We model the problem, compare approaches and share",E.jsx("span",{id:"outputs",children:" reproducible results."})]}),E.jsxs("ul",{className:"quantina-fields",id:"use-cases","aria-label":"Areas of exploration",children:[E.jsx("li",{children:"Materials"}),E.jsx("li",{children:"Aerospace"}),E.jsx("li",{children:"Energy"}),E.jsx("li",{children:"Optimization"})]})]})]}),E.jsxs("section",{className:"quantina-information quantina-container",id:"join","aria-label":"People and partners",children:[E.jsxs("details",{className:"quantina-detail",id:"team",children:[E.jsxs("summary",{children:[E.jsx("span",{children:"Meet the team"}),E.jsx(O0,{size:19,"aria-hidden":"true"})]}),E.jsx("div",{className:"quantina-team-list",children:mD.map(e=>E.jsxs("article",{className:"quantina-team-member",children:[E.jsxs("div",{children:[E.jsx("h3",{children:e.name}),E.jsxs("p",{children:[e.role," · ",e.affiliation]})]}),E.jsxs("a",{href:`mailto:${e.email}`,"aria-label":`Email ${e.name}`,children:["Get in touch ",E.jsx(jo,{size:15,"aria-hidden":"true"})]})]},e.email))})]}),E.jsxs("details",{className:"quantina-detail",id:"ecosystem",children:[E.jsxs("summary",{children:[E.jsx("span",{children:"Our research ecosystem"}),E.jsx(O0,{size:19,"aria-hidden":"true"})]}),E.jsx("p",{className:"quantina-partners-caption",children:"The Maison du Quantique partner network."}),E.jsx("img",{className:"quantina-partners-image",src:`${av}/brand/maison-du-quantique-partners.png`,alt:"Partner network of the Maison du Quantique de Nouvelle-Aquitaine.",loading:"lazy",decoding:"async"})]})]}),E.jsxs("footer",{className:"quantina-footer quantina-container",children:[E.jsx("p",{children:"Quantum Industrial Networks in Nouvelle-Aquitaine"}),E.jsxs("a",{href:ov,children:["Let’s talk ",E.jsx(jo,{size:14,"aria-hidden":"true"})]})]})]})}const oc="/simulations/maxcut",_a="/simulations",_D="/quantina",rl="/quantum-maxcut/".replace(/\/$/,""),Df=rl?`${rl}/`:"/";function Nf(t){return t.length>1?t.replace(/\/$/,""):t}function lv(t){const e=new URLSearchParams(window.location.search);if(e.get("simulation")==="maxcut")return oc;const i=e.get("page");if(i==="quantina")return _D;if(i==="simulations")return _a;const r=window.location.hash.replace(/^#/,"");return r.startsWith("/")?Nf(r):rl&&t.startsWith(rl)?Nf(t.slice(rl.length)||"/"):Nf(t)}function vD(){const[t,e]=Pe.useState(!0),[n,i]=Pe.useState(()=>lv(window.location.pathname));Pe.useEffect(()=>{document.documentElement.classList.toggle("dark",t)},[t]),Pe.useEffect(()=>{document.title=n===oc?"QuantINA | MaxCut Case Study":n===_a?"QuantINA | Scientific Computing Platform":"QuantINA - Quantum Industrial Networks in Nouvelle-Aquitaine"},[n]),Pe.useEffect(()=>{const s=()=>i(lv(window.location.pathname));return window.addEventListener("popstate",s),window.addEventListener("hashchange",s),()=>{window.removeEventListener("popstate",s),window.removeEventListener("hashchange",s)}},[]);const r=s=>{if(/^https?:\/\//.test(s)){window.location.assign(s);return}const a=s===oc?`${Df}?simulation=maxcut`:s===_a?`${Df}?page=simulations`:Df;window.history.pushState({},"",a),i(s),window.scrollTo({top:0,left:0,behavior:"auto"})};return n===_a?E.jsx(pD,{onNavigate:r}):n!==oc?E.jsx(gD,{onNavigate:r}):E.jsx("div",{className:"min-h-[100svh] bg-background text-foreground lg:h-[100svh] lg:overflow-hidden",children:E.jsxs("div",{className:"grid min-h-0 grid-cols-1 lg:h-full lg:grid-cols-[320px_minmax(0,1fr)_380px]",children:[E.jsx(W3,{}),E.jsxs("main",{className:"flex min-h-0 min-w-0 flex-col gap-5 overflow-y-auto overscroll-contain p-4 sm:p-5",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("button",{type:"button",onClick:()=>r(_a),className:"rounded-md border border-border p-2 text-foreground/70 transition hover:bg-muted hover:text-foreground",title:"Back to simulations",children:E.jsx($y,{size:18})}),E.jsxs("button",{type:"button",onClick:()=>r(_a),className:"min-w-0 rounded-md text-left transition hover:opacity-80",title:"Back to simulations",children:[E.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"QuantINA case study"}),E.jsx("h1",{className:"truncate text-xl font-semibold sm:text-3xl",children:"Neutral-atom simulation"})]})]}),E.jsx("button",{type:"button",onClick:()=>e(s=>!s),className:"rounded-md border border-border p-2 text-foreground/75 transition hover:bg-muted",title:"Toggle theme",children:t?E.jsx(Lw,{size:18}):E.jsx(Tw,{size:18})})]}),E.jsx(Z3,{}),E.jsx(_3,{}),E.jsx(uT,{})]}),E.jsx(cD,{})]})})}const xD=new rw;Lf.createRoot(document.getElementById("root")).render(E.jsx(Dv.StrictMode,{children:E.jsx(sw,{client:xD,children:E.jsx(vD,{})})}));
