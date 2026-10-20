var Cg=t=>{throw TypeError(t)};var yd=(t,e,n)=>e.has(t)||Cg("Cannot "+n);var N=(t,e,n)=>(yd(t,e,"read from private field"),n?n.call(t):e.get(t)),Re=(t,e,n)=>e.has(t)?Cg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),xe=(t,e,n,i)=>(yd(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Ge=(t,e,n)=>(yd(t,e,"access private method"),n);var Xl=(t,e,n,i)=>({set _(r){xe(t,e,r,n)},get _(){return N(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function D_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L_={exports:{}},$u={},I_={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=Symbol.for("react.element"),SS=Symbol.for("react.portal"),MS=Symbol.for("react.fragment"),ES=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),wS=Symbol.for("react.provider"),TS=Symbol.for("react.context"),AS=Symbol.for("react.forward_ref"),CS=Symbol.for("react.suspense"),RS=Symbol.for("react.memo"),PS=Symbol.for("react.lazy"),Rg=Symbol.iterator;function NS(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,O_={};function go(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||U_}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=go.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||U_}var Xp=Wp.prototype=new k_;Xp.constructor=Wp;F_(Xp,go.prototype);Xp.isPureReactComponent=!0;var Pg=Array.isArray,B_=Object.prototype.hasOwnProperty,qp={current:null},z_={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)B_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Il,type:t,key:s,ref:a,props:r,_owner:qp.current}}function DS(t,e){return{$$typeof:Il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Il}function LS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LS(""+t.key):e.toString(36)}function Hc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Il:case SS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Sd(a,0):i,Pg(r)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),Hc(r,e,n,"",function(c){return c})):r!=null&&($p(r)&&(r=DS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ng,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Pg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Sd(s,o);a+=Hc(s,e,n,l,r)}else if(l=NS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Sd(s,o++),a+=Hc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ql(t,e,n){if(t==null)return t;var i=[],r=0;return Hc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function IS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},Vc={transition:null},US={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:qp};function H_(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:ql,forEach:function(t,e,n){ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ql(t,function(){e++}),e},toArray:function(t){return ql(t,function(e){return e})||[]},only:function(t){if(!$p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=go;Ke.Fragment=MS;Ke.Profiler=bS;Ke.PureComponent=Wp;Ke.StrictMode=ES;Ke.Suspense=CS;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=US;Ke.act=H_;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=F_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=qp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)B_.call(e,l)&&!z_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Il,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:TS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wS,_context:t},t.Consumer=t};Ke.createElement=j_;Ke.createFactory=function(t){var e=j_.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:AS,render:t}};Ke.isValidElement=$p;Ke.lazy=function(t){return{$$typeof:PS,_payload:{_status:-1,_result:t},_init:IS}};Ke.memo=function(t,e){return{$$typeof:RS,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Vc.transition;Vc.transition={};try{t()}finally{Vc.transition=e}};Ke.unstable_act=H_;Ke.useCallback=function(t,e){return En.current.useCallback(t,e)};Ke.useContext=function(t){return En.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return En.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return En.current.useEffect(t,e)};Ke.useId=function(){return En.current.useId()};Ke.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return En.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};Ke.useRef=function(t){return En.current.useRef(t)};Ke.useState=function(t){return En.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return En.current.useTransition()};Ke.version="18.3.1";I_.exports=Ke;var we=I_.exports;const V_=D_(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FS=we,OS=Symbol.for("react.element"),kS=Symbol.for("react.fragment"),BS=Object.prototype.hasOwnProperty,zS=FS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jS={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)BS.call(e,i)&&!jS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:OS,type:t,key:s,ref:a,props:r,_owner:zS.current}}$u.Fragment=kS;$u.jsx=G_;$u.jsxs=G_;L_.exports=$u;var h=L_.exports,Oh={},W_={exports:{}},Yn={},X_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var ee=B.length;B.push(q);e:for(;0<ee;){var oe=ee-1>>>1,fe=B[oe];if(0<r(fe,q))B[oe]=q,B[ee]=fe,ee=oe;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],ee=B.pop();if(ee!==q){B[0]=ee;e:for(var oe=0,fe=B.length,qe=fe>>>1;oe<qe;){var Qe=2*(oe+1)-1,Fe=B[Qe],Q=Qe+1,he=B[Q];if(0>r(Fe,ee))Q<fe&&0>r(he,Fe)?(B[oe]=he,B[Q]=ee,oe=Q):(B[oe]=Fe,B[Qe]=ee,oe=Qe);else if(Q<fe&&0>r(he,ee))B[oe]=he,B[Q]=ee,oe=Q;else break e}}return q}function r(B,q){var ee=B.sortIndex-q.sortIndex;return ee!==0?ee:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,f=null,d=3,m=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=B)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function M(B){if(S=!1,v(B),!_)if(n(l)!==null)_=!0,G(T);else{var q=n(c);q!==null&&j(M,q.startTime-B)}}function T(B,q){_=!1,S&&(S=!1,u(y),y=-1),m=!0;var ee=d;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||B&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var fe=oe(f.expirationTime<=q);q=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var qe=!0;else{var Qe=n(c);Qe!==null&&j(M,Qe.startTime-q),qe=!1}return qe}finally{f=null,d=ee,m=!1}}var w=!1,R=null,y=-1,C=5,D=-1;function P(){return!(t.unstable_now()-D<C)}function k(){if(R!==null){var B=t.unstable_now();D=B;var q=!0;try{q=R(!0,B)}finally{q?X():(w=!1,R=null)}}else w=!1}var X;if(typeof g=="function")X=function(){g(k)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,I=Y.port2;Y.port1.onmessage=k,X=function(){I.postMessage(null)}}else X=function(){x(k,0)};function G(B){R=B,w||(w=!0,X())}function j(B,q){y=x(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(T))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var ee=d;d=q;try{return B()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=d;d=B;try{return q()}finally{d=ee}},t.unstable_scheduleCallback=function(B,q,ee){var oe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ee+fe,B={id:p++,callback:q,priorityLevel:B,startTime:ee,expirationTime:fe,sortIndex:-1},ee>oe?(B.sortIndex=ee,e(c,B),n(l)===null&&B===n(c)&&(S?(u(y),y=-1):S=!0,j(M,ee-oe))):(B.sortIndex=fe,e(l,B),_||m||(_=!0,G(T))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var q=d;return function(){var ee=d;d=q;try{return B.apply(this,arguments)}finally{d=ee}}}})(q_);X_.exports=q_;var HS=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VS=we,$n=HS;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,sl={};function Xs(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(sl[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,GS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dg={},Lg={};function WS(t){return kh.call(Lg,t)?!0:kh.call(Dg,t)?!1:GS.test(t)?Lg[t]=!0:(Dg[t]=!0,!1)}function XS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qS(t,e,n,i){if(e===null||typeof e>"u"||XS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yp,Kp);sn[e]=new bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yp,Kp);sn[e]=new bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yp,Kp);sn[e]=new bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new bn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qS(e,n,r,i)&&(n=null),i||r===null?WS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=VS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$l=Symbol.for("react.element"),va=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),K_=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),zh=Symbol.for("react.suspense"),jh=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Md;function zo(t){if(Md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Md=e&&e[1]||""}return`
`+Md+t}var Ed=!1;function bd(t,e){if(!t||Ed)return"";Ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ed=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function $S(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=bd(t.type,!1),t;case 11:return t=bd(t.type.render,!1),t;case 1:return t=bd(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ya:return"Fragment";case va:return"Portal";case Bh:return"Profiler";case Zp:return"StrictMode";case zh:return"Suspense";case jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function YS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KS(t){var e=Z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){t._valueTracker||(t._valueTracker=KS(t))}function J_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Z_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vh(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ev(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function Gh(t,e){ev(t,e);var n=ts(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wh(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wh(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function La(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(jo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function tv(t,e){var n=ts(e.value),i=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QS=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){QS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function rv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ZS=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $h(t,e){if(e){if(ZS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,Ia=null,Ua=null;function Bg(t){if(t=Ol(t)){if(typeof Qh!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Ju(e),Qh(t.stateNode,t.type,e))}}function av(t){Ia?Ua?Ua.push(t):Ua=[t]:Ia=t}function ov(){if(Ia){var t=Ia,e=Ua;if(Ua=Ia=null,Bg(t),e)for(t=0;t<e.length;t++)Bg(e[t])}}function lv(t,e){return t(e)}function cv(){}var wd=!1;function uv(t,e,n){if(wd)return t(e,n);wd=!0;try{return lv(t,e,n)}finally{wd=!1,(Ia!==null||Ua!==null)&&(cv(),ov())}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var i=Ju(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Zh=!1;if(ur)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Zh=!1}function JS(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var $o=!1,hu=null,fu=!1,Jh=null,eM={onError:function(t){$o=!0,hu=t}};function tM(t,e,n,i,r,s,a,o,l){$o=!1,hu=null,JS.apply(eM,arguments)}function nM(t,e,n,i,r,s,a,o,l){if(tM.apply(this,arguments),$o){if($o){var c=hu;$o=!1,hu=null}else throw Error(ie(198));fu||(fu=!0,Jh=c)}}function qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zg(t){if(qs(t)!==t)throw Error(ie(188))}function iM(t){var e=t.alternate;if(!e){if(e=qs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zg(r),t;if(s===i)return zg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function hv(t){return t=iM(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var pv=$n.unstable_scheduleCallback,jg=$n.unstable_cancelCallback,rM=$n.unstable_shouldYield,sM=$n.unstable_requestPaint,kt=$n.unstable_now,aM=$n.unstable_getCurrentPriorityLevel,nm=$n.unstable_ImmediatePriority,mv=$n.unstable_UserBlockingPriority,pu=$n.unstable_NormalPriority,oM=$n.unstable_LowPriority,gv=$n.unstable_IdlePriority,Yu=null,Fi=null;function lM(t){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(Yu,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:dM,cM=Math.log,uM=Math.LN2;function dM(t){return t>>>=0,t===0?32:31-(cM(t)/uM|0)|0}var Ql=64,Zl=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ho(o):(s&=a,s!==0&&(i=Ho(s)))}else a=n&~r,a!==0?i=Ho(a):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function hM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-vi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=hM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xv(){var t=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),t}function Td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function pM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function im(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vv,rm,yv,Sv,Mv,tf=!1,Jl=[],Xr=null,qr=null,$r=null,ll=new Map,cl=new Map,Nr=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ol(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gM(t,e,n,i,r){switch(e){case"focusin":return Xr=bo(Xr,t,e,n,i,r),!0;case"dragenter":return qr=bo(qr,t,e,n,i,r),!0;case"mouseover":return $r=bo($r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ll.set(s,bo(ll.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,cl.set(s,bo(cl.get(s)||null,t,e,n,i,r)),!0}return!1}function Ev(t){var e=ys(t.target);if(e!==null){var n=qs(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kh=i,n.target.dispatchEvent(i),Kh=null}else return e=Ol(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function Vg(t,e,n){Gc(t)&&n.delete(e)}function xM(){tf=!1,Xr!==null&&Gc(Xr)&&(Xr=null),qr!==null&&Gc(qr)&&(qr=null),$r!==null&&Gc($r)&&($r=null),ll.forEach(Vg),cl.forEach(Vg)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,xM)))}function ul(t){function e(r){return wo(r,t)}if(0<Jl.length){wo(Jl[0],t);for(var n=1;n<Jl.length;n++){var i=Jl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xr!==null&&wo(Xr,t),qr!==null&&wo(qr,t),$r!==null&&wo($r,t),ll.forEach(e),cl.forEach(e),n=0;n<Nr.length;n++)i=Nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&Nr.shift()}var Fa=gr.ReactCurrentBatchConfig,gu=!0;function _M(t,e,n,i){var r=ut,s=Fa.transition;Fa.transition=null;try{ut=1,sm(t,e,n,i)}finally{ut=r,Fa.transition=s}}function vM(t,e,n,i){var r=ut,s=Fa.transition;Fa.transition=null;try{ut=4,sm(t,e,n,i)}finally{ut=r,Fa.transition=s}}function sm(t,e,n,i){if(gu){var r=nf(t,e,n,i);if(r===null)Fd(t,e,i,xu,n),Hg(t,i);else if(gM(r,t,e,n,i))i.stopPropagation();else if(Hg(t,i),e&4&&-1<mM.indexOf(t)){for(;r!==null;){var s=Ol(r);if(s!==null&&vv(s),s=nf(t,e,n,i),s===null&&Fd(t,e,i,xu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fd(t,e,i,null,n)}}var xu=null;function nf(t,e,n,i){if(xu=null,t=tm(i),t=ys(t),t!==null)if(e=qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xu=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aM()){case nm:return 1;case mv:return 4;case pu:case oM:return 16;case gv:return 536870912;default:return 16}default:return 16}}var Vr=null,am=null,Wc=null;function wv(){if(Wc)return Wc;var t,e=am,n=e.length,i,r="value"in Vr?Vr.value:Vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wc=r.slice(t,1<i?1-i:void 0)}function Xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function Gg(){return!1}function Kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ec:Gg,this.isPropagationStopped=Gg,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=Kn(xo),Fl=Rt({},xo,{view:0,detail:0}),yM=Kn(Fl),Ad,Cd,To,Ku=Rt({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Ad=t.screenX-To.screenX,Cd=t.screenY-To.screenY):Cd=Ad=0,To=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),Wg=Kn(Ku),SM=Rt({},Ku,{dataTransfer:0}),MM=Kn(SM),EM=Rt({},Fl,{relatedTarget:0}),Rd=Kn(EM),bM=Rt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),wM=Kn(bM),TM=Rt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AM=Kn(TM),CM=Rt({},xo,{data:0}),Xg=Kn(CM),RM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NM[t])?!!e[t]:!1}function lm(){return DM}var LM=Rt({},Fl,{key:function(t){if(t.key){var e=RM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?Xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IM=Kn(LM),UM=Rt({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=Kn(UM),FM=Rt({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),OM=Kn(FM),kM=Rt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BM=Kn(kM),zM=Rt({},Ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jM=Kn(zM),HM=[9,13,27,32],cm=ur&&"CompositionEvent"in window,Yo=null;ur&&"documentMode"in document&&(Yo=document.documentMode);var VM=ur&&"TextEvent"in window&&!Yo,Tv=ur&&(!cm||Yo&&8<Yo&&11>=Yo),$g=" ",Yg=!1;function Av(t,e){switch(t){case"keyup":return HM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sa=!1;function GM(t,e){switch(t){case"compositionend":return Cv(e);case"keypress":return e.which!==32?null:(Yg=!0,$g);case"textInput":return t=e.data,t===$g&&Yg?null:t;default:return null}}function WM(t,e){if(Sa)return t==="compositionend"||!cm&&Av(t,e)?(t=wv(),Wc=am=Vr=null,Sa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var XM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XM[t.type]:e==="textarea"}function Rv(t,e,n,i){av(i),e=_u(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ko=null,dl=null;function qM(t){zv(t,0)}function Qu(t){var e=ba(t);if(J_(e))return t}function $M(t,e){if(t==="change")return e}var Pv=!1;if(ur){var Pd;if(ur){var Nd="oninput"in document;if(!Nd){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),Nd=typeof Qg.oninput=="function"}Pd=Nd}else Pd=!1;Pv=Pd&&(!document.documentMode||9<document.documentMode)}function Zg(){Ko&&(Ko.detachEvent("onpropertychange",Nv),dl=Ko=null)}function Nv(t){if(t.propertyName==="value"&&Qu(dl)){var e=[];Rv(e,dl,t,tm(t)),uv(qM,e)}}function YM(t,e,n){t==="focusin"?(Zg(),Ko=e,dl=n,Ko.attachEvent("onpropertychange",Nv)):t==="focusout"&&Zg()}function KM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(dl)}function QM(t,e){if(t==="click")return Qu(e)}function ZM(t,e){if(t==="input"||t==="change")return Qu(e)}function JM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mi=typeof Object.is=="function"?Object.is:JM;function hl(t,e){if(Mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kh.call(e,r)||!Mi(t[r],e[r]))return!1}return!0}function Jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e0(t,e){var n=Jg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jg(n)}}function Dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eE(t){var e=Lv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dv(n.ownerDocument.documentElement,n)){if(i!==null&&um(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=e0(n,s);var a=e0(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tE=ur&&"documentMode"in document&&11>=document.documentMode,Ma=null,rf=null,Qo=null,sf=!1;function t0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||Ma==null||Ma!==du(i)||(i=Ma,"selectionStart"in i&&um(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&hl(Qo,i)||(Qo=i,i=_u(rf,"onSelect"),0<i.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ma)))}function tc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ea={animationend:tc("Animation","AnimationEnd"),animationiteration:tc("Animation","AnimationIteration"),animationstart:tc("Animation","AnimationStart"),transitionend:tc("Transition","TransitionEnd")},Dd={},Iv={};ur&&(Iv=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Zu(t){if(Dd[t])return Dd[t];if(!Ea[t])return t;var e=Ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iv)return Dd[t]=e[n];return t}var Uv=Zu("animationend"),Fv=Zu("animationiteration"),Ov=Zu("animationstart"),kv=Zu("transitionend"),Bv=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(t,e){Bv.set(t,e),Xs(e,[t])}for(var Ld=0;Ld<n0.length;Ld++){var Id=n0[Ld],nE=Id.toLowerCase(),iE=Id[0].toUpperCase()+Id.slice(1);as(nE,"on"+iE)}as(Uv,"onAnimationEnd");as(Fv,"onAnimationIteration");as(Ov,"onAnimationStart");as("dblclick","onDoubleClick");as("focusin","onFocus");as("focusout","onBlur");as(kv,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);Xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function i0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nM(i,e,void 0,t),t.currentTarget=null}function zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;i0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;i0(r,o,c),s=l}}}if(fu)throw t=Jh,fu=!1,Jh=null,t}function St(t,e){var n=e[uf];n===void 0&&(n=e[uf]=new Set);var i=t+"__bubble";n.has(i)||(jv(e,t,2,!1),n.add(i))}function Ud(t,e,n){var i=0;e&&(i|=4),jv(n,t,i,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[nc]){t[nc]=!0,$_.forEach(function(n){n!=="selectionchange"&&(rE.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,Ud("selectionchange",!1,e))}}function jv(t,e,n,i){switch(bv(e)){case 1:var r=_M;break;case 4:r=vM;break;default:r=sm}n=r.bind(null,e,n,t),r=void 0,!Zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ys(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}uv(function(){var c=s,p=tm(n),f=[];e:{var d=Bv.get(t);if(d!==void 0){var m=om,_=t;switch(t){case"keypress":if(Xc(n)===0)break e;case"keydown":case"keyup":m=IM;break;case"focusin":_="focus",m=Rd;break;case"focusout":_="blur",m=Rd;break;case"beforeblur":case"afterblur":m=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=MM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=OM;break;case Uv:case Fv:case Ov:m=wM;break;case kv:m=BM;break;case"scroll":m=yM;break;case"wheel":m=jM;break;case"copy":case"cut":case"paste":m=AM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qg}var S=(e&4)!==0,x=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ol(g,u),M!=null&&S.push(pl(g,M,v)))),x)break;g=g.return}0<S.length&&(d=new m(d,_,null,n,p),f.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Kh&&(_=n.relatedTarget||n.fromElement)&&(ys(_)||_[dr]))break e;if((m||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ys(_):null,_!==null&&(x=qs(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Wg,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=qg,M="onPointerLeave",u="onPointerEnter",g="pointer"),x=m==null?d:ba(m),v=_==null?d:ba(_),d=new S(M,g+"leave",m,n,p),d.target=x,d.relatedTarget=v,M=null,ys(p)===c&&(S=new S(u,g+"enter",_,n,p),S.target=v,S.relatedTarget=x,M=S),x=M,m&&_)t:{for(S=m,u=_,g=0,v=S;v;v=Zs(v))g++;for(v=0,M=u;M;M=Zs(M))v++;for(;0<g-v;)S=Zs(S),g--;for(;0<v-g;)u=Zs(u),v--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=Zs(S),u=Zs(u)}S=null}else S=null;m!==null&&r0(f,d,m,S,!1),_!==null&&x!==null&&r0(f,x,_,S,!0)}}e:{if(d=c?ba(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=$M;else if(Kg(d))if(Pv)T=ZM;else{T=KM;var w=YM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=QM);if(T&&(T=T(t,c))){Rv(f,T,n,p);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Wh(d,"number",d.value)}switch(w=c?ba(c):window,t){case"focusin":(Kg(w)||w.contentEditable==="true")&&(Ma=w,rf=c,Qo=null);break;case"focusout":Qo=rf=Ma=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,t0(f,n,p);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":t0(f,n,p)}var R;if(cm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Sa?Av(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Tv&&n.locale!=="ko"&&(Sa||y!=="onCompositionStart"?y==="onCompositionEnd"&&Sa&&(R=wv()):(Vr=p,am="value"in Vr?Vr.value:Vr.textContent,Sa=!0)),w=_u(c,y),0<w.length&&(y=new Xg(y,t,null,n,p),f.push({event:y,listeners:w}),R?y.data=R:(R=Cv(n),R!==null&&(y.data=R)))),(R=VM?GM(t,n):WM(t,n))&&(c=_u(c,"onBeforeInput"),0<c.length&&(p=new Xg("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:c}),p.data=R))}zv(f,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ol(t,n),s!=null&&i.unshift(pl(t,s,r)),s=ol(t,e),s!=null&&i.push(pl(t,s,r))),t=t.return}return i}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ol(n,s),l!=null&&a.unshift(pl(n,l,o))):r||(l=ol(n,s),l!=null&&a.push(pl(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var sE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(sE,`
`).replace(aE,"")}function ic(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(ie(425))}function vu(){}var af=null,of=null;function lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,oE=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,lE=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(cE)}:cf;function cE(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ul(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ul(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Li="__reactFiber$"+_o,ml="__reactProps$"+_o,dr="__reactContainer$"+_o,uf="__reactEvents$"+_o,uE="__reactListeners$"+_o,dE="__reactHandles$"+_o;function ys(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o0(t);t!==null;){if(n=t[Li])return n;t=o0(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[Li]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ba(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Ju(t){return t[ml]||null}var df=[],wa=-1;function os(t){return{current:t}}function Mt(t){0>wa||(t.current=df[wa],df[wa]=null,wa--)}function vt(t,e){wa++,df[wa]=t.current,t.current=e}var ns={},mn=os(ns),Nn=os(!1),ks=ns;function io(t,e){var n=t.type.contextTypes;if(!n)return ns;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function yu(){Mt(Nn),Mt(mn)}function l0(t,e,n){if(mn.current!==ns)throw Error(ie(168));vt(mn,e),vt(Nn,n)}function Hv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,YS(t)||"Unknown",r));return Rt({},n,i)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,ks=mn.current,vt(mn,t),vt(Nn,Nn.current),!0}function c0(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Hv(t,e,ks),i.__reactInternalMemoizedMergedChildContext=t,Mt(Nn),Mt(mn),vt(mn,t)):Mt(Nn),vt(Nn,n)}var Ki=null,ed=!1,kd=!1;function Vv(t){Ki===null?Ki=[t]:Ki.push(t)}function hE(t){ed=!0,Vv(t)}function ls(){if(!kd&&Ki!==null){kd=!0;var t=0,e=ut;try{var n=Ki;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ki=null,ed=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(t+1)),pv(nm,ls),r}finally{ut=e,kd=!1}}return null}var Ta=[],Aa=0,Mu=null,Eu=0,ni=[],ii=0,Bs=null,nr=1,ir="";function gs(t,e){Ta[Aa++]=Eu,Ta[Aa++]=Mu,Mu=t,Eu=e}function Gv(t,e,n){ni[ii++]=nr,ni[ii++]=ir,ni[ii++]=Bs,Bs=t;var i=nr;t=ir;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,nr=1<<32-vi(e)+r|n<<r|i,ir=s+t}else nr=1<<s|n<<r|i,ir=t}function dm(t){t.return!==null&&(gs(t,1),Gv(t,1,0))}function hm(t){for(;t===Mu;)Mu=Ta[--Aa],Ta[Aa]=null,Eu=Ta[--Aa],Ta[Aa]=null;for(;t===Bs;)Bs=ni[--ii],ni[ii]=null,ir=ni[--ii],ni[ii]=null,nr=ni[--ii],ni[ii]=null}var qn=null,Xn=null,Et=!1,gi=null;function Wv(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function u0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qn=t,Xn=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qn=t,Xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bs!==null?{id:nr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qn=t,Xn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ff(t){if(Et){var e=Xn;if(e){var n=e;if(!u0(t,e)){if(hf(t))throw Error(ie(418));e=Yr(n.nextSibling);var i=qn;e&&u0(t,e)?Wv(i,n):(t.flags=t.flags&-4097|2,Et=!1,qn=t)}}else{if(hf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,Et=!1,qn=t}}}function d0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function rc(t){if(t!==qn)return!1;if(!Et)return d0(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lf(t.type,t.memoizedProps)),e&&(e=Xn)){if(hf(t))throw Xv(),Error(ie(418));for(;e;)Wv(t,e),e=Yr(e.nextSibling)}if(d0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xn=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xn=null}}else Xn=qn?Yr(t.stateNode.nextSibling):null;return!0}function Xv(){for(var t=Xn;t;)t=Yr(t.nextSibling)}function ro(){Xn=qn=null,Et=!1}function fm(t){gi===null?gi=[t]:gi.push(t)}var fE=gr.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function sc(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function qv(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Jr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=Wd(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var T=v.type;return T===ya?p(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&h0(T)===g.type)?(M=r(g,v.props),M.ref=Ao(u,g,v),M.return=u,M):(M=Jc(v.type,v.key,v.props,null,u.mode,M),M.ref=Ao(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Xd(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function p(u,g,v,M,T){return g===null||g.tag!==7?(g=Os(v,u.mode,M,T),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Wd(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $l:return v=Jc(g.type,g.key,g.props,null,u.mode,v),v.ref=Ao(u,null,g),v.return=u,v;case va:return g=Xd(g,u.mode,v),g.return=u,g;case Cr:var M=g._init;return f(u,M(g._payload),v)}if(jo(g)||Mo(g))return g=Os(g,u.mode,v,null),g.return=u,g;sc(u,g)}return null}function d(u,g,v,M){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $l:return v.key===T?l(u,g,v,M):null;case va:return v.key===T?c(u,g,v,M):null;case Cr:return T=v._init,d(u,g,T(v._payload),M)}if(jo(v)||Mo(v))return T!==null?null:p(u,g,v,M,null);sc(u,v)}return null}function m(u,g,v,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $l:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,T);case va:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,T);case Cr:var w=M._init;return m(u,g,v,w(M._payload),T)}if(jo(M)||Mo(M))return u=u.get(v)||null,p(g,u,M,T,null);sc(g,M)}return null}function _(u,g,v,M){for(var T=null,w=null,R=g,y=g=0,C=null;R!==null&&y<v.length;y++){R.index>y?(C=R,R=null):C=R.sibling;var D=d(u,R,v[y],M);if(D===null){R===null&&(R=C);break}t&&R&&D.alternate===null&&e(u,R),g=s(D,g,y),w===null?T=D:w.sibling=D,w=D,R=C}if(y===v.length)return n(u,R),Et&&gs(u,y),T;if(R===null){for(;y<v.length;y++)R=f(u,v[y],M),R!==null&&(g=s(R,g,y),w===null?T=R:w.sibling=R,w=R);return Et&&gs(u,y),T}for(R=i(u,R);y<v.length;y++)C=m(R,u,y,v[y],M),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?y:C.key),g=s(C,g,y),w===null?T=C:w.sibling=C,w=C);return t&&R.forEach(function(P){return e(u,P)}),Et&&gs(u,y),T}function S(u,g,v,M){var T=Mo(v);if(typeof T!="function")throw Error(ie(150));if(v=T.call(v),v==null)throw Error(ie(151));for(var w=T=null,R=g,y=g=0,C=null,D=v.next();R!==null&&!D.done;y++,D=v.next()){R.index>y?(C=R,R=null):C=R.sibling;var P=d(u,R,D.value,M);if(P===null){R===null&&(R=C);break}t&&R&&P.alternate===null&&e(u,R),g=s(P,g,y),w===null?T=P:w.sibling=P,w=P,R=C}if(D.done)return n(u,R),Et&&gs(u,y),T;if(R===null){for(;!D.done;y++,D=v.next())D=f(u,D.value,M),D!==null&&(g=s(D,g,y),w===null?T=D:w.sibling=D,w=D);return Et&&gs(u,y),T}for(R=i(u,R);!D.done;y++,D=v.next())D=m(R,u,y,D.value,M),D!==null&&(t&&D.alternate!==null&&R.delete(D.key===null?y:D.key),g=s(D,g,y),w===null?T=D:w.sibling=D,w=D);return t&&R.forEach(function(k){return e(u,k)}),Et&&gs(u,y),T}function x(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===ya&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $l:e:{for(var T=v.key,w=g;w!==null;){if(w.key===T){if(T=v.type,T===ya){if(w.tag===7){n(u,w.sibling),g=r(w,v.props.children),g.return=u,u=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&h0(T)===w.type){n(u,w.sibling),g=r(w,v.props),g.ref=Ao(u,w,v),g.return=u,u=g;break e}n(u,w);break}else e(u,w);w=w.sibling}v.type===ya?(g=Os(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=Jc(v.type,v.key,v.props,null,u.mode,M),M.ref=Ao(u,g,v),M.return=u,u=M)}return a(u);case va:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Xd(v,u.mode,M),g.return=u,u=g}return a(u);case Cr:return w=v._init,x(u,g,w(v._payload),M)}if(jo(v))return _(u,g,v,M);if(Mo(v))return S(u,g,v,M);sc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Wd(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return x}var so=qv(!0),$v=qv(!1),bu=os(null),wu=null,Ca=null,pm=null;function mm(){pm=Ca=wu=null}function gm(t){var e=bu.current;Mt(bu),t._currentValue=e}function pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Oa(t,e){wu=t,pm=Ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function oi(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},Ca===null){if(wu===null)throw Error(ie(308));Ca=t,wu.dependencies={lanes:0,firstContext:t}}else Ca=Ca.next=t;return e}var Ss=null;function xm(t){Ss===null?Ss=[t]:Ss.push(t)}function Yv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xm(e)):(n.next=r.next,r.next=n),e.interleaved=n,hr(t,i)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hr(t,n)}return r=i.interleaved,r===null?(e.next=e,xm(i)):(e.next=r.next,r.next=e),i.interleaved=e,hr(t,n)}function qc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,im(t,n)}}function f0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,i){var r=t.updateQueue;Rr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,p=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(d=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=Rt({},f,d);break e;case 2:Rr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=m,l=f):p=p.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(p===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);js|=a,t.lanes=a,t.memoizedState=f}}function p0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var kl={},Oi=os(kl),gl=os(kl),xl=os(kl);function Ms(t){if(t===kl)throw Error(ie(174));return t}function vm(t,e){switch(vt(xl,e),vt(gl,t),vt(Oi,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qh(e,t)}Mt(Oi),vt(Oi,e)}function ao(){Mt(Oi),Mt(gl),Mt(xl)}function Qv(t){Ms(xl.current);var e=Ms(Oi.current),n=qh(e,t.type);e!==n&&(vt(gl,t),vt(Oi,n))}function ym(t){gl.current===t&&(Mt(Oi),Mt(gl))}var Tt=os(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function Sm(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var $c=gr.ReactCurrentDispatcher,zd=gr.ReactCurrentBatchConfig,zs=0,At=null,Gt=null,Zt=null,Cu=!1,Zo=!1,_l=0,pE=0;function on(){throw Error(ie(321))}function Mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mi(t[n],e[n]))return!1;return!0}function Em(t,e,n,i,r,s){if(zs=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$c.current=t===null||t.memoizedState===null?_E:vE,t=n(i,r),Zo){s=0;do{if(Zo=!1,_l=0,25<=s)throw Error(ie(301));s+=1,Zt=Gt=null,e.updateQueue=null,$c.current=yE,t=n(i,r)}while(Zo)}if($c.current=Ru,e=Gt!==null&&Gt.next!==null,zs=0,Zt=Gt=At=null,Cu=!1,e)throw Error(ie(300));return t}function bm(){var t=_l!==0;return _l=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function li(){if(Gt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=Zt===null?At.memoizedState:Zt.next;if(e!==null)Zt=e,Gt=t;else{if(t===null)throw Error(ie(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function vl(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=li(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((zs&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,At.lanes|=p,js|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Mi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,js|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=li(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Mi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zv(){}function Jv(t,e){var n=At,i=li(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,wm(ny.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,yl(9,ty.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(ie(349));zs&30||ey(n,e,r)}return r}function ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ty(t,e,n,i){e.value=n,e.getSnapshot=i,iy(e)&&ry(t)}function ny(t,e,n){return n(function(){iy(e)&&ry(t)})}function iy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mi(t,n)}catch{return!0}}function ry(t){var e=hr(t,1);e!==null&&yi(e,t,1,-1)}function m0(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:t},e.queue=t,t=t.dispatch=xE.bind(null,At,t),[e.memoizedState,t]}function yl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sy(){return li().memoizedState}function Yc(t,e,n,i){var r=Ci();At.flags|=t,r.memoizedState=yl(1|e,n,void 0,i===void 0?null:i)}function td(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,i!==null&&Mm(i,a.deps)){r.memoizedState=yl(e,n,s,i);return}}At.flags|=t,r.memoizedState=yl(1|e,n,s,i)}function g0(t,e){return Yc(8390656,8,t,e)}function wm(t,e){return td(2048,8,t,e)}function ay(t,e){return td(4,2,t,e)}function oy(t,e){return td(4,4,t,e)}function ly(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cy(t,e,n){return n=n!=null?n.concat([t]):null,td(4,4,ly.bind(null,e,t),n)}function Tm(){}function uy(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dy(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hy(t,e,n){return zs&21?(Mi(n,e)||(n=xv(),At.lanes|=n,js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function mE(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=zd.transition;zd.transition={};try{t(!1),e()}finally{ut=n,zd.transition=i}}function fy(){return li().memoizedState}function gE(t,e,n){var i=Zr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},py(t))my(e,n);else if(n=Yv(t,e,n,i),n!==null){var r=Sn();yi(n,t,i,r),gy(n,e,i)}}function xE(t,e,n){var i=Zr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(py(t))my(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Mi(o,a)){var l=e.interleaved;l===null?(r.next=r,xm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yv(t,e,r,i),n!==null&&(r=Sn(),yi(n,t,i,r),gy(n,e,i))}}function py(t){var e=t.alternate;return t===At||e!==null&&e===At}function my(t,e){Zo=Cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,im(t,n)}}var Ru={readContext:oi,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},_E={readContext:oi,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:oi,useEffect:g0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4194308,4,ly.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yc(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=gE.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:m0,useDebugValue:Tm,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=m0(!1),e=t[0];return t=mE.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=Ci();if(Et){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Jt===null)throw Error(ie(349));zs&30||ey(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,g0(ny.bind(null,i,s,t),[t]),i.flags|=2048,yl(9,ty.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=Jt.identifierPrefix;if(Et){var n=ir,i=nr;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vE={readContext:oi,useCallback:uy,useContext:oi,useEffect:wm,useImperativeHandle:cy,useInsertionEffect:ay,useLayoutEffect:oy,useMemo:dy,useReducer:jd,useRef:sy,useState:function(){return jd(vl)},useDebugValue:Tm,useDeferredValue:function(t){var e=li();return hy(e,Gt.memoizedState,t)},useTransition:function(){var t=jd(vl)[0],e=li().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:Jv,useId:fy,unstable_isNewReconciler:!1},yE={readContext:oi,useCallback:uy,useContext:oi,useEffect:wm,useImperativeHandle:cy,useInsertionEffect:ay,useLayoutEffect:oy,useMemo:dy,useReducer:Hd,useRef:sy,useState:function(){return Hd(vl)},useDebugValue:Tm,useDeferredValue:function(t){var e=li();return Gt===null?e.memoizedState=t:hy(e,Gt.memoizedState,t)},useTransition:function(){var t=Hd(vl)[0],e=li().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:Jv,useId:fy,unstable_isNewReconciler:!1};function fi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nd={isMounted:function(t){return(t=t._reactInternals)?qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Zr(t),s=sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(yi(e,t,r,i),qc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Zr(t),s=sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(yi(e,t,r,i),qc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=Zr(t),r=sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Kr(t,r,i),e!==null&&(yi(e,t,i,n),qc(e,t,i))}};function x0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!hl(n,i)||!hl(r,s):!0}function xy(t,e,n){var i=!1,r=ns,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=Dn(e)?ks:mn.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):ns),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nd.enqueueReplaceState(e,e.state,null)}function gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_m(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=Dn(e)?ks:mn.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nd.enqueueReplaceState(r,r.state,null),Tu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=$S(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function _y(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nu||(Nu=!0,Af=i),xf(t,e)},n}function vy(t,e,n){n=sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function v0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new SE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=UE.bind(null,t,e,n),e.then(t,t))}function y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function S0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var ME=gr.ReactCurrentOwner,Pn=!1;function vn(t,e,n,i){e.child=t===null?$v(e,null,n,i):so(e,t.child,n,i)}function M0(t,e,n,i,r){n=n.render;var s=e.ref;return Oa(e,r),i=Em(t,e,n,i,s,r),n=bm(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Et&&n&&dm(e),e.flags|=1,vn(t,e,i,r),e.child)}function E0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yy(t,e,s,i,r)):(t=Jc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(a,i)&&t.ref===e.ref)return fr(t,e,r)}return e.flags|=1,t=Jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function yy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(hl(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,fr(t,e,r)}return _f(t,e,n,i,r)}function Sy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Pa,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Pa,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Pa,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Pa,zn),zn|=i;return vn(t,e,r,n),e.child}function My(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var s=Dn(n)?ks:mn.current;return s=io(e,s),Oa(e,r),n=Em(t,e,n,i,s,r),i=bm(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Et&&i&&dm(e),e.flags|=1,vn(t,e,n,r),e.child)}function b0(t,e,n,i,r){if(Dn(n)){var s=!0;Su(e)}else s=!1;if(Oa(e,r),e.stateNode===null)Kc(t,e),xy(e,n,i),gf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=oi(c):(c=Dn(n)?ks:mn.current,c=io(e,c));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_0(e,a,i,c),Rr=!1;var d=e.memoizedState;a.state=d,Tu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Nn.current||Rr?(typeof p=="function"&&(mf(e,n,p,i),l=e.memoizedState),(o=Rr||x0(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Kv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:fi(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=Dn(n)?ks:mn.current,l=io(e,l));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&_0(e,a,i,l),Rr=!1,d=e.memoizedState,a.state=d,Tu(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||Nn.current||Rr?(typeof m=="function"&&(mf(e,n,m,i),_=e.memoizedState),(c=Rr||x0(e,n,c,i,d,_,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vf(t,e,n,i,s,r)}function vf(t,e,n,i,r,s){My(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&c0(e,n,!1),fr(t,e,s);i=e.stateNode,ME.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=so(e,t.child,null,s),e.child=so(e,null,o,s)):vn(t,e,o,s),e.memoizedState=i.state,r&&c0(e,n,!0),e.child}function Ey(t){var e=t.stateNode;e.pendingContext?l0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(t,e.context,!1),vm(t,e.containerInfo)}function w0(t,e,n,i,r){return ro(),fm(r),e.flags|=256,vn(t,e,n,i),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function by(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Tt,r&1),t===null)return ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=sd(a,i,0,null),t=Os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=yf,t):Am(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return EE(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Jr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Jr(o,s):(s=Os(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Sf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yf,i}return s=t.child,t=s.sibling,i=Jr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Am(t,e){return e=sd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,i){return i!==null&&fm(i),so(e,t.child,null,n),t=Am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EE(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vd(Error(ie(422))),ac(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sd({mode:"visible",children:i.children},r,0,null),s=Os(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,a),e.child.memoizedState=Sf(a),e.memoizedState=yf,s);if(!(e.mode&1))return ac(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Vd(s,i,void 0),ac(t,e,a,i)}if(o=(a&t.childLanes)!==0,Pn||o){if(i=Jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hr(t,r),yi(i,t,r,-1))}return Lm(),i=Vd(Error(ie(421))),ac(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=FE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Xn=Yr(r.nextSibling),qn=e,Et=!0,gi=null,t!==null&&(ni[ii++]=nr,ni[ii++]=ir,ni[ii++]=Bs,nr=t.id,ir=t.overflow,Bs=e),e=Am(e,i.children),e.flags|=4096,e)}function T0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pf(t.return,e,n)}function Gd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function wy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,n,e);else if(t.tag===19)T0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Au(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bE(t,e,n){switch(e.tag){case 3:Ey(e),ro();break;case 5:Qv(e);break;case 1:Dn(e.type)&&Su(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(bu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?by(t,e,n):(vt(Tt,Tt.current&1),t=fr(t,e,n),t!==null?t.sibling:null);vt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return wy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sy(t,e,n)}return fr(t,e,n)}var Ty,Mf,Ay,Cy;Ty=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};Ay=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ms(Oi.current);var s=null;switch(n){case"input":r=Vh(t,r),i=Vh(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Xh(t,r),i=Xh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vu)}$h(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wE(t,e,n){var i=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return Dn(e.type)&&yu(),ln(e),null;case 3:return i=e.stateNode,ao(),Mt(Nn),Mt(mn),Sm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(Pf(gi),gi=null))),Mf(t,e),ln(e),null;case 5:ym(e);var r=Ms(xl.current);if(n=e.type,t!==null&&e.stateNode!=null)Ay(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return ln(e),null}if(t=Ms(Oi.current),rc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[ml]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Ug(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Og(i,s),St("invalid",i)}$h(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ic(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ic(i.textContent,o,t),r=["children",""+o]):sl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":Yl(i),Fg(i,s,!0);break;case"textarea":Yl(i),kg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Li]=e,t[ml]=i,Ty(t,e,!1,!1),e.stateNode=t;e:{switch(a=Yh(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Ug(t,i),r=Vh(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Og(t,i),r=Xh(t,i),St("invalid",t);break;default:r=i}$h(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?sv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&al(t,l):typeof l=="number"&&al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&Qp(t,s,l,a))}switch(n){case"input":Yl(t),Fg(t,i,!1);break;case"textarea":Yl(t),kg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ts(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?La(t,!!i.multiple,s,!1):i.defaultValue!=null&&La(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)Cy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Ms(xl.current),Ms(Oi.current),rc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=qn,t!==null))switch(t.tag){case 3:ic(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ic(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return ln(e),null;case 13:if(Mt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Xn!==null&&e.mode&1&&!(e.flags&128))Xv(),ro(),e.flags|=98560,s=!1;else if(s=rc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Li]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else gi!==null&&(Pf(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Xt===0&&(Xt=3):Lm())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return ao(),Mf(t,e),t===null&&fl(e.stateNode.containerInfo),ln(e),null;case 10:return gm(e.type._context),ln(e),null;case 17:return Dn(e.type)&&yu(),ln(e),null;case 19:if(Mt(Tt),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Co(s,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Au(t),a!==null){for(e.flags|=128,Co(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>lo&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Au(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return ln(e),null}else 2*kt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Tt.current,vt(Tt,i?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return Dm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function TE(t,e){switch(hm(e),e.tag){case 1:return Dn(e.type)&&yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Mt(Nn),Mt(mn),Sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ym(e),null;case 13:if(Mt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Tt),null;case 4:return ao(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Dm(),null;case 24:return null;default:return null}}var oc=!1,hn=!1,AE=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ra(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Ef(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var A0=!1;function CE(t,e){if(af=gu,t=Lv(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++p===i&&(l=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(of={focusedElem:t,selectionRange:n},gu=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,x=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:fi(e.type,S),x);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){Lt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=A0,A0=!1,_}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ef(e,n,s)}r=r.next}while(r!==i)}}function id(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ry(t){var e=t.alternate;e!==null&&(t.alternate=null,Ry(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[ml],delete e[uf],delete e[uE],delete e[dE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Py(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Py(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}var tn=null,mi=!1;function yr(t,e,n){for(n=n.child;n!==null;)Ny(t,e,n),n=n.sibling}function Ny(t,e,n){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(Yu,n)}catch{}switch(n.tag){case 5:hn||Ra(n,e);case 6:var i=tn,r=mi;tn=null,yr(t,e,n),tn=i,mi=r,tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),ul(t)):Od(tn,n.stateNode));break;case 4:i=tn,r=mi,tn=n.stateNode.containerInfo,mi=!0,yr(t,e,n),tn=i,mi=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ef(n,e,a),r=r.next}while(r!==i)}yr(t,e,n);break;case 1:if(!hn&&(Ra(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Lt(n,e,o)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,yr(t,e,n),hn=i):yr(t,e,n);break;default:yr(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AE),e.forEach(function(i){var r=OE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:tn=o.stateNode,mi=!1;break e;case 3:tn=o.stateNode.containerInfo,mi=!0;break e;case 4:tn=o.stateNode.containerInfo,mi=!0;break e}o=o.return}if(tn===null)throw Error(ie(160));Ny(s,a,r),tn=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dy(e,t),e=e.sibling}function Dy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),wi(t),i&4){try{Jo(3,t,t.return),id(3,t)}catch(S){Lt(t,t.return,S)}try{Jo(5,t,t.return)}catch(S){Lt(t,t.return,S)}}break;case 1:ci(e,t),wi(t),i&512&&n!==null&&Ra(n,n.return);break;case 5:if(ci(e,t),wi(t),i&512&&n!==null&&Ra(n,n.return),t.flags&32){var r=t.stateNode;try{al(r,"")}catch(S){Lt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ev(r,s),Yh(o,a);var c=Yh(o,s);for(a=0;a<l.length;a+=2){var p=l[a],f=l[a+1];p==="style"?sv(r,f):p==="dangerouslySetInnerHTML"?iv(r,f):p==="children"?al(r,f):Qp(r,p,f,c)}switch(o){case"input":Gh(r,s);break;case"textarea":tv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?La(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[ml]=s}catch(S){Lt(t,t.return,S)}}break;case 6:if(ci(e,t),wi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Lt(t,t.return,S)}}break;case 3:if(ci(e,t),wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ul(e.containerInfo)}catch(S){Lt(t,t.return,S)}break;case 4:ci(e,t),wi(t);break;case 13:ci(e,t),wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pm=kt())),i&4&&R0(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(c=hn)||p,ci(e,t),hn=c):ci(e,t),wi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(be=t,p=t.child;p!==null;){for(f=be=p;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:Jo(4,d,d.return);break;case 1:Ra(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Lt(i,n,S)}}break;case 5:Ra(d,d.return);break;case 22:if(d.memoizedState!==null){N0(f);continue}}m!==null?(m.return=d,be=m):N0(f)}p=p.sibling}e:for(p=null,f=t;;){if(f.tag===5){if(p===null){p=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=rv("display",a))}catch(S){Lt(t,t.return,S)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Lt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ci(e,t),wi(t),i&4&&R0(t);break;case 21:break;default:ci(e,t),wi(t)}}function wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Py(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(al(r,""),i.flags&=-33);var s=C0(t);Tf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=C0(t);wf(t,o,a);break;default:throw Error(ie(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RE(t,e,n){be=t,Ly(t)}function Ly(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||oc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||hn;o=oc;var c=hn;if(oc=a,(hn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?D0(r):l!==null?(l.return=a,be=l):D0(r);for(;s!==null;)be=s,Ly(s),s=s.sibling;be=r,oc=o,hn=c}P0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):P0(t)}}function P0(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||id(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&ul(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}hn||e.flags&512&&bf(e)}catch(d){Lt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function N0(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function D0(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{id(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{bf(e)}catch(l){Lt(e,s,l)}break;case 5:var a=e.return;try{bf(e)}catch(l){Lt(e,a,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var PE=Math.ceil,Pu=gr.ReactCurrentDispatcher,Cm=gr.ReactCurrentOwner,ai=gr.ReactCurrentBatchConfig,rt=0,Jt=null,zt=null,rn=0,zn=0,Pa=os(0),Xt=0,Sl=null,js=0,rd=0,Rm=0,el=null,Rn=null,Pm=0,lo=1/0,Yi=null,Nu=!1,Af=null,Qr=null,lc=!1,Gr=null,Du=0,tl=0,Cf=null,Qc=-1,Zc=0;function Sn(){return rt&6?kt():Qc!==-1?Qc:Qc=kt()}function Zr(t){return t.mode&1?rt&2&&rn!==0?rn&-rn:fE.transition!==null?(Zc===0&&(Zc=xv()),Zc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function yi(t,e,n,i){if(50<tl)throw tl=0,Cf=null,Error(ie(185));Ul(t,n,i),(!(rt&2)||t!==Jt)&&(t===Jt&&(!(rt&2)&&(rd|=n),Xt===4&&Dr(t,rn)),Ln(t,i),n===1&&rt===0&&!(e.mode&1)&&(lo=kt()+500,ed&&ls()))}function Ln(t,e){var n=t.callbackNode;fM(t,e);var i=mu(t,t===Jt?rn:0);if(i===0)n!==null&&jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jg(n),e===1)t.tag===0?hE(L0.bind(null,t)):Vv(L0.bind(null,t)),lE(function(){!(rt&6)&&ls()}),n=null;else{switch(_v(i)){case 1:n=nm;break;case 4:n=mv;break;case 16:n=pu;break;case 536870912:n=gv;break;default:n=pu}n=jy(n,Iy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iy(t,e){if(Qc=-1,Zc=0,rt&6)throw Error(ie(327));var n=t.callbackNode;if(ka()&&t.callbackNode!==n)return null;var i=mu(t,t===Jt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Lu(t,i);else{e=i;var r=rt;rt|=2;var s=Fy();(Jt!==t||rn!==e)&&(Yi=null,lo=kt()+500,Fs(t,e));do try{LE();break}catch(o){Uy(t,o)}while(!0);mm(),Pu.current=s,rt=r,zt!==null?e=0:(Jt=null,rn=0,e=Xt)}if(e!==0){if(e===2&&(r=ef(t),r!==0&&(i=r,e=Rf(t,r))),e===1)throw n=Sl,Fs(t,0),Dr(t,i),Ln(t,kt()),n;if(e===6)Dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!NE(r)&&(e=Lu(t,i),e===2&&(s=ef(t),s!==0&&(i=s,e=Rf(t,s))),e===1))throw n=Sl,Fs(t,0),Dr(t,i),Ln(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:xs(t,Rn,Yi);break;case 3:if(Dr(t,i),(i&130023424)===i&&(e=Pm+500-kt(),10<e)){if(mu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(xs.bind(null,t,Rn,Yi),e);break}xs(t,Rn,Yi);break;case 4:if(Dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-vi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*PE(i/1960))-i,10<i){t.timeoutHandle=cf(xs.bind(null,t,Rn,Yi),i);break}xs(t,Rn,Yi);break;case 5:xs(t,Rn,Yi);break;default:throw Error(ie(329))}}}return Ln(t,kt()),t.callbackNode===n?Iy.bind(null,t):null}function Rf(t,e){var n=el;return t.current.memoizedState.isDehydrated&&(Fs(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&Pf(e)),t}function Pf(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function NE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Rm,e&=~rd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function L0(t){if(rt&6)throw Error(ie(327));ka();var e=mu(t,0);if(!(e&1))return Ln(t,kt()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var i=ef(t);i!==0&&(e=i,n=Rf(t,i))}if(n===1)throw n=Sl,Fs(t,0),Dr(t,e),Ln(t,kt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xs(t,Rn,Yi),Ln(t,kt()),null}function Nm(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(lo=kt()+500,ed&&ls())}}function Hs(t){Gr!==null&&Gr.tag===0&&!(rt&6)&&ka();var e=rt;rt|=1;var n=ai.transition,i=ut;try{if(ai.transition=null,ut=1,t)return t()}finally{ut=i,ai.transition=n,rt=e,!(rt&6)&&ls()}}function Dm(){zn=Pa.current,Mt(Pa)}function Fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oE(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(hm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yu();break;case 3:ao(),Mt(Nn),Mt(mn),Sm();break;case 5:ym(i);break;case 4:ao();break;case 13:Mt(Tt);break;case 19:Mt(Tt);break;case 10:gm(i.type._context);break;case 22:case 23:Dm()}n=n.return}if(Jt=t,zt=t=Jr(t.current,null),rn=zn=e,Xt=0,Sl=null,Rm=rd=js=0,Rn=el=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ss=null}return t}function Uy(t,e){do{var n=zt;try{if(mm(),$c.current=Ru,Cu){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cu=!1}if(zs=0,Zt=Gt=At=null,Zo=!1,_l=0,Cm.current=null,n===null||n.return===null){Xt=1,Sl=e,zt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=rn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=y0(a);if(m!==null){m.flags&=-257,S0(m,a,o,s,e),m.mode&1&&v0(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){v0(s,c,e),Lm();break e}l=Error(ie(426))}}else if(Et&&o.mode&1){var x=y0(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),S0(x,a,o,s,e),fm(oo(l,o));break e}}s=l=oo(l,o),Xt!==4&&(Xt=2),el===null?el=[s]:el.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=_y(s,l,e);f0(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qr===null||!Qr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=vy(s,o,e);f0(s,M);break e}}s=s.return}while(s!==null)}ky(n)}catch(T){e=T,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Fy(){var t=Pu.current;return Pu.current=Ru,t===null?Ru:t}function Lm(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Jt===null||!(js&268435455)&&!(rd&268435455)||Dr(Jt,rn)}function Lu(t,e){var n=rt;rt|=2;var i=Fy();(Jt!==t||rn!==e)&&(Yi=null,Fs(t,e));do try{DE();break}catch(r){Uy(t,r)}while(!0);if(mm(),rt=n,Pu.current=i,zt!==null)throw Error(ie(261));return Jt=null,rn=0,Xt}function DE(){for(;zt!==null;)Oy(zt)}function LE(){for(;zt!==null&&!rM();)Oy(zt)}function Oy(t){var e=zy(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?ky(t):zt=e,Cm.current=null}function ky(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TE(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,zt=null;return}}else if(n=wE(n,e,zn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Xt===0&&(Xt=5)}function xs(t,e,n){var i=ut,r=ai.transition;try{ai.transition=null,ut=1,IE(t,e,n,i)}finally{ai.transition=r,ut=i}return null}function IE(t,e,n,i){do ka();while(Gr!==null);if(rt&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pM(t,s),t===Jt&&(zt=Jt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lc||(lc=!0,jy(pu,function(){return ka(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ai.transition,ai.transition=null;var a=ut;ut=1;var o=rt;rt|=4,Cm.current=null,CE(t,n),Dy(n,t),eE(of),gu=!!af,of=af=null,t.current=n,RE(n),sM(),rt=o,ut=a,ai.transition=s}else t.current=n;if(lc&&(lc=!1,Gr=t,Du=r),s=t.pendingLanes,s===0&&(Qr=null),lM(n.stateNode),Ln(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nu)throw Nu=!1,t=Af,Af=null,t;return Du&1&&t.tag!==0&&ka(),s=t.pendingLanes,s&1?t===Cf?tl++:(tl=0,Cf=t):tl=0,ls(),null}function ka(){if(Gr!==null){var t=_v(Du),e=ai.transition,n=ut;try{if(ai.transition=null,ut=16>t?16:t,Gr===null)var i=!1;else{if(t=Gr,Gr=null,Du=0,rt&6)throw Error(ie(331));var r=rt;for(rt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var p=be;switch(p.tag){case 0:case 11:case 15:Jo(8,p,s)}var f=p.child;if(f!==null)f.return=p,be=f;else for(;be!==null;){p=be;var d=p.sibling,m=p.return;if(Ry(p),p===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var g=t.current;for(be=g;be!==null;){a=be;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,be=v;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:id(9,o)}}catch(T){Lt(o,o.return,T)}if(o===a){be=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,be=M;break e}be=o.return}}if(rt=r,ls(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(Yu,t)}catch{}i=!0}return i}finally{ut=n,ai.transition=e}}return!1}function I0(t,e,n){e=oo(n,e),e=_y(t,e,1),t=Kr(t,e,1),e=Sn(),t!==null&&(Ul(t,1,e),Ln(t,e))}function Lt(t,e,n){if(t.tag===3)I0(t,t,n);else for(;e!==null;){if(e.tag===3){I0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qr===null||!Qr.has(i))){t=oo(n,t),t=vy(e,t,1),e=Kr(e,t,1),t=Sn(),e!==null&&(Ul(e,1,t),Ln(e,t));break}}e=e.return}}function UE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(rn&n)===n&&(Xt===4||Xt===3&&(rn&130023424)===rn&&500>kt()-Pm?Fs(t,0):Rm|=n),Ln(t,e)}function By(t,e){e===0&&(t.mode&1?(e=Zl,Zl<<=1,!(Zl&130023424)&&(Zl=4194304)):e=1);var n=Sn();t=hr(t,e),t!==null&&(Ul(t,e,n),Ln(t,n))}function FE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),By(t,n)}function OE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),By(t,n)}var zy;zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,bE(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Et&&e.flags&1048576&&Gv(e,Eu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kc(t,e),t=e.pendingProps;var r=io(e,mn.current);Oa(e,n),r=Em(null,e,i,t,r,n);var s=bm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Su(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_m(e),r.updater=nd,e.stateNode=r,r._reactInternals=e,gf(e,i,t,n),e=vf(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&dm(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=BE(i),t=fi(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=b0(null,e,i,t,n);break e;case 11:e=M0(null,e,i,t,n);break e;case 14:e=E0(null,e,i,fi(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),b0(t,e,i,r,n);case 3:e:{if(Ey(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kv(t,e),Tu(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(ie(423)),e),e=w0(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(ie(424)),e),e=w0(t,e,i,n,r);break e}else for(Xn=Yr(e.stateNode.containerInfo.firstChild),qn=e,Et=!0,gi=null,n=$v(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=fr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return Qv(e),t===null&&ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,lf(i,r)?a=null:s!==null&&lf(i,s)&&(e.flags|=32),My(t,e),vn(t,e,a,n),e.child;case 6:return t===null&&ff(e),null;case 13:return by(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),M0(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(bu,i._currentValue),i._currentValue=a,s!==null)if(Mi(s.value,a)){if(s.children===r.children&&!Nn.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),pf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Oa(e,n),r=oi(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),E0(t,e,i,r,n);case 15:return yy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Kc(t,e),e.tag=1,Dn(i)?(t=!0,Su(e)):t=!1,Oa(e,n),xy(e,i,r),gf(e,i,r,n),vf(null,e,i,!0,t,n);case 19:return wy(t,e,n);case 22:return Sy(t,e,n)}throw Error(ie(156,e.tag))};function jy(t,e){return pv(t,e)}function kE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new kE(t,e,n,i)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BE(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===em)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Im(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ya:return Os(n.children,r,s,e);case Zp:a=8,r|=8;break;case Bh:return t=si(12,n,e,r|2),t.elementType=Bh,t.lanes=s,t;case zh:return t=si(13,n,e,r),t.elementType=zh,t.lanes=s,t;case jh:return t=si(19,n,e,r),t.elementType=jh,t.lanes=s,t;case Q_:return sd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:a=10;break e;case K_:a=9;break e;case Jp:a=11;break e;case em:a=14;break e;case Cr:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=si(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Os(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function sd(t,e,n,i){return t=si(22,t,i,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Wd(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function Xd(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Td(0),this.expirationTimes=Td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Td(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,i,r,s,a,o,l){return t=new zE(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function jE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Hy(t){if(!t)return ns;t=t._reactInternals;e:{if(qs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Dn(n))return Hv(t,n,e)}return e}function Vy(t,e,n,i,r,s,a,o,l){return t=Um(n,i,!0,t,r,s,a,o,l),t.context=Hy(null),n=t.current,i=Sn(),r=Zr(n),s=sr(i,r),s.callback=e??null,Kr(n,s,r),t.current.lanes=r,Ul(t,r,i),Ln(t,i),t}function ad(t,e,n,i){var r=e.current,s=Sn(),a=Zr(r);return n=Hy(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Kr(r,e,a),t!==null&&(yi(t,r,a,s),qc(t,r,a)),a}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fm(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}function HE(){return null}var Gy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Om(t){this._internalRoot=t}od.prototype.render=Om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));ad(t,e,null,null)};od.prototype.unmount=Om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hs(function(){ad(null,t,null,null)}),e[dr]=null}};function od(t){this._internalRoot=t}od.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Ev(t)}};function km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F0(){}function VE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Iu(a);s.call(c)}}var a=Vy(e,i,t,0,null,!1,!1,"",F0);return t._reactRootContainer=a,t[dr]=a.current,fl(t.nodeType===8?t.parentNode:t),Hs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Iu(l);o.call(c)}}var l=Um(t,0,!1,null,null,!1,!1,"",F0);return t._reactRootContainer=l,t[dr]=l.current,fl(t.nodeType===8?t.parentNode:t),Hs(function(){ad(e,l,n,i)}),l}function cd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Iu(a);o.call(l)}}ad(e,a,t,r)}else a=VE(n,e,t,r,i);return Iu(a)}vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(im(e,n|1),Ln(e,kt()),!(rt&6)&&(lo=kt()+500,ls()))}break;case 13:Hs(function(){var i=hr(t,1);if(i!==null){var r=Sn();yi(i,t,1,r)}}),Fm(t,1)}};rm=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Sn();yi(e,t,134217728,n)}Fm(t,134217728)}};yv=function(t){if(t.tag===13){var e=Zr(t),n=hr(t,e);if(n!==null){var i=Sn();yi(n,t,e,i)}Fm(t,e)}};Sv=function(){return ut};Mv=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Qh=function(t,e,n){switch(e){case"input":if(Gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ju(i);if(!r)throw Error(ie(90));J_(i),Gh(i,r)}}}break;case"textarea":tv(t,n);break;case"select":e=n.value,e!=null&&La(t,!!n.multiple,e,!1)}};lv=Nm;cv=Hs;var GE={usingClientEntryPoint:!1,Events:[Ol,ba,Ju,av,ov,Nm]},Ro={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WE={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||HE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Yu=cc.inject(WE),Fi=cc}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!km(e))throw Error(ie(200));return jE(t,e,null,n)};Yn.createRoot=function(t,e){if(!km(t))throw Error(ie(299));var n=!1,i="",r=Gy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,i,r),t[dr]=e.current,fl(t.nodeType===8?t.parentNode:t),new Om(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=hv(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return Hs(t)};Yn.hydrate=function(t,e,n){if(!ld(e))throw Error(ie(200));return cd(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!km(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Gy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Vy(e,null,t,1,n??null,r,!1,s,a),t[dr]=e.current,fl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new od(e)};Yn.render=function(t,e,n){if(!ld(e))throw Error(ie(200));return cd(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!ld(t))throw Error(ie(40));return t._reactRootContainer?(Hs(function(){cd(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Yn.unstable_batchedUpdates=Nm;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ld(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return cd(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function Wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wy)}catch(t){console.error(t)}}Wy(),W_.exports=Yn;var XE=W_.exports,O0=XE;Oh.createRoot=O0.createRoot,Oh.hydrateRoot=O0.hydrateRoot;var vo=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},As,Ir,Va,S_,qE=(S_=class extends vo{constructor(){super();Re(this,As);Re(this,Ir);Re(this,Va);xe(this,Va,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){N(this,Ir)||this.setEventListener(N(this,Va))}onUnsubscribe(){var e;this.hasListeners()||((e=N(this,Ir))==null||e.call(this),xe(this,Ir,void 0))}setEventListener(e){var n;xe(this,Va,e),(n=N(this,Ir))==null||n.call(this),xe(this,Ir,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){N(this,As)!==e&&(xe(this,As,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof N(this,As)=="boolean"?N(this,As):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},As=new WeakMap,Ir=new WeakMap,Va=new WeakMap,S_),Bm=new qE,$E={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},Ur,Gp,M_,YE=(M_=class{constructor(){Re(this,Ur,$E);Re(this,Gp,!1)}setTimeoutProvider(t){xe(this,Ur,t)}setTimeout(t,e){return N(this,Ur).setTimeout(t,e)}clearTimeout(t){N(this,Ur).clearTimeout(t)}setInterval(t,e){return N(this,Ur).setInterval(t,e)}clearInterval(t){N(this,Ur).clearInterval(t)}},Ur=new WeakMap,Gp=new WeakMap,M_),Es=new YE;function KE(t){setTimeout(t,0)}var QE=typeof window>"u"||"Deno"in globalThis;function yn(){}function ZE(t,e){return typeof t=="function"?t(e):t}function Nf(t){return typeof t=="number"&&t>=0&&t!==1/0}function Xy(t,e){return Math.max(t+(e||0)-Date.now(),0)}function es(t,e){return typeof t=="function"?t(e):t}function Hn(t,e){return typeof t=="function"?t(e):t}function k0(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==zm(a,e.options))return!1}else if(!Ml(e.queryKey,a))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof o=="boolean"&&e.isStale()!==o||r&&r!==e.state.fetchStatus||s&&!s(e))}function B0(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Vs(e.options.mutationKey)!==Vs(s))return!1}else if(!Ml(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function zm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Vs)(t)}function Vs(t){return JSON.stringify(t,(e,n)=>Df(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Ml(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Ml(t[n],e[n])):!1}var JE=Object.prototype.hasOwnProperty;function qy(t,e,n=0){if(t===e)return t;if(n>500)return e;const i=z0(t)&&z0(e);if(!i&&!(Df(t)&&Df(e)))return e;const s=(i?t:Object.keys(t)).length,a=i?e:Object.keys(e),o=a.length,l=i?new Array(o):{};let c=0;for(let p=0;p<o;p++){const f=i?p:a[p],d=t[f],m=e[f];if(d===m){l[f]=d,(i?p<s:JE.call(t,f))&&c++;continue}if(d===null||m===null||typeof d!="object"||typeof m!="object"){l[f]=m;continue}const _=qy(d,m,n+1);l[f]=_,_===d&&c++}return s===o&&c===s?t:l}function Uu(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function z0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Df(t){if(!j0(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!j0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function j0(t){return Object.prototype.toString.call(t)==="[object Object]"}function eb(t){return new Promise(e=>{Es.setTimeout(e,t)})}function Lf(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?qy(t,e):e}function tb(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function nb(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var jm=Symbol();function $y(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===jm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Hm(t,e){return typeof t=="function"?t(...e):!!t}function ib(t,e,n){let i=!1,r;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(r??(r=e()),i||(i=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)}),t}var El=(()=>{let t=()=>QE;return{isServer(){return t()},setIsServer(e){t=e}}})();function If(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}var rb=KE;function sb(){let t=[],e=0,n=o=>{o()},i=o=>{o()},r=rb;const s=o=>{e?t.push(o):r(()=>{n(o)})},a=()=>{const o=t;t=[],o.length&&r(()=>{i(()=>{o.forEach(l=>{n(l)})})})};return{batch:o=>{let l;e++;try{l=o()}finally{e--,e||a()}return l},batchCalls:o=>(...l)=>{s(()=>{o(...l)})},schedule:s,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{i=o},setScheduler:o=>{r=o}}}var Wt=sb(),Ga,Fr,Wa,E_,ab=(E_=class extends vo{constructor(){super();Re(this,Ga,!0);Re(this,Fr);Re(this,Wa);xe(this,Wa,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){N(this,Fr)||this.setEventListener(N(this,Wa))}onUnsubscribe(){var e;this.hasListeners()||((e=N(this,Fr))==null||e.call(this),xe(this,Fr,void 0))}setEventListener(e){var n;xe(this,Wa,e),(n=N(this,Fr))==null||n.call(this),xe(this,Fr,e(this.setOnline.bind(this)))}setOnline(e){N(this,Ga)!==e&&(xe(this,Ga,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return N(this,Ga)}},Ga=new WeakMap,Fr=new WeakMap,Wa=new WeakMap,E_),Fu=new ab;function ob(t){return Math.min(1e3*2**t,3e4)}function Yy(t){return(t??"online")==="online"?Fu.isOnline():!0}var Uf=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Ky(t){let e=!1,n=0,i;const r=If(),s=()=>r.status!=="pending",a=S=>{var x;if(!s()){const u=new Uf(S);d(u),(x=t.onCancel)==null||x.call(t,u)}},o=()=>{e=!0},l=()=>{e=!1},c=()=>Bm.isFocused()&&(t.networkMode==="always"||Fu.isOnline())&&t.canRun(),p=()=>Yy(t.networkMode)&&t.canRun(),f=S=>{s()||(i==null||i(),r.resolve(S))},d=S=>{s()||(i==null||i(),r.reject(S))},m=()=>new Promise(S=>{var x;i=u=>{(s()||c())&&S(u)},(x=t.onPause)==null||x.call(t)}).then(()=>{var S;i=void 0,s()||(S=t.onContinue)==null||S.call(t)}),_=()=>{if(s())return;let S;const x=n===0?t.initialPromise:void 0;try{S=x??t.fn()}catch(u){S=Promise.reject(u)}Promise.resolve(S).then(f).catch(u=>{var w;if(s())return;const g=t.retry??(El.isServer()?0:3),v=t.retryDelay??ob,M=typeof v=="function"?v(n,u):v,T=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,u);if(e||!T){d(u);return}n++,(w=t.onFail)==null||w.call(t,n,u),eb(M).then(()=>c()?void 0:m()).then(()=>{e?d(u):_()})})};return{promise:r,status:()=>r.status,cancel:a,continue:()=>(i==null||i(),r),cancelRetry:o,continueRetry:l,canStart:p,start:()=>(p()?_():m().then(_),r)}}var Cs,b_,Qy=(b_=class{constructor(){Re(this,Cs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Nf(this.gcTime)&&xe(this,Cs,Es.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(El.isServer()?1/0:5*60*1e3))}clearGcTimeout(){N(this,Cs)!==void 0&&(Es.clearTimeout(N(this,Cs)),xe(this,Cs,void 0))}},Cs=new WeakMap,b_);function lb(t){return{onFetch:(e,n)=>{var p,f,d,m,_;const i=e.options,r=(d=(f=(p=e.fetchOptions)==null?void 0:p.meta)==null?void 0:f.fetchMore)==null?void 0:d.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],a=((_=e.state.data)==null?void 0:_.pageParams)||[];let o={pages:[],pageParams:[]},l=0;const c=async()=>{let S=!1;const x=v=>{ib(v,()=>e.signal,()=>S=!0)},u=$y(e.options,e.fetchOptions),g=async(v,M,T)=>{if(S)return Promise.reject(e.signal.reason);if(M==null&&v.pages.length)return Promise.resolve(v);const R=(()=>{const P={client:e.client,queryKey:e.queryKey,pageParam:M,direction:T?"backward":"forward",meta:e.options.meta};return x(P),P})(),y=await u(R),{maxPages:C}=e.options,D=T?nb:tb;return{pages:D(v.pages,y,C),pageParams:D(v.pageParams,M,C)}};if(r&&s.length){const v=r==="backward",M=v?cb:H0,T={pages:s,pageParams:a},w=M(i,T);o=await g(T,w,v)}else{const v=t??s.length;do{const M=l===0?a[0]??i.initialPageParam:H0(i,o);if(l>0&&M==null)break;o=await g(o,M),l++}while(l<v)}return o};e.options.persister?e.fetchFn=()=>{var S,x;return(x=(S=e.options).persister)==null?void 0:x.call(S,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function H0(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function cb(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Xa,Rs,qa,ei,Ps,Qt,Rl,Ns,jn,Zy,$i,w_,ub=(w_=class extends Qy{constructor(e){super();Re(this,jn);Re(this,Xa);Re(this,Rs);Re(this,qa);Re(this,ei);Re(this,Ps);Re(this,Qt);Re(this,Rl);Re(this,Ns);xe(this,Ns,!1),xe(this,Rl,e.defaultOptions),this.setOptions(e.options),this.observers=[],xe(this,Ps,e.client),xe(this,ei,N(this,Ps).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,xe(this,Rs,G0(this.options)),this.state=e.state??N(this,Rs),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return N(this,Xa)}get promise(){var e;return(e=N(this,Qt))==null?void 0:e.promise}setOptions(e){if(this.options={...N(this,Rl),...e},e!=null&&e._type&&xe(this,Xa,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=G0(this.options);n.data!==void 0&&(this.setState(V0(n.data,n.dataUpdatedAt)),xe(this,Rs,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&N(this,ei).remove(this)}setData(e,n){const i=Lf(this.state.data,e,this.options);return Ge(this,jn,$i).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e){Ge(this,jn,$i).call(this,{type:"setState",state:e})}cancel(e){var i,r;const n=(i=N(this,Qt))==null?void 0:i.promise;return(r=N(this,Qt))==null||r.cancel(e),n?n.then(yn).catch(yn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return N(this,Rs)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>Hn(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===jm||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>es(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Xy(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=N(this,Qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=N(this,Qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),N(this,ei).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(N(this,Qt)&&(N(this,Ns)||Ge(this,jn,Zy).call(this)?N(this,Qt).cancel({revert:!0}):N(this,Qt).cancelRetry()),this.scheduleGc()),N(this,ei).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ge(this,jn,$i).call(this,{type:"invalidate"})}async fetch(e,n){var c,p,f,d,m,_,S,x,u,g,v;if(this.state.fetchStatus!=="idle"&&((c=N(this,Qt))==null?void 0:c.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(N(this,Qt))return N(this,Qt).continueRetry(),N(this,Qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const M=this.observers.find(T=>T.options.queryFn);M&&this.setOptions(M.options)}const i=new AbortController,r=M=>{Object.defineProperty(M,"signal",{enumerable:!0,get:()=>(xe(this,Ns,!0),i.signal)})},s=()=>{const M=$y(this.options,n),w=(()=>{const R={client:N(this,Ps),queryKey:this.queryKey,meta:this.meta};return r(R),R})();return xe(this,Ns,!1),this.options.persister?this.options.persister(M,w,this):M(w)},o=(()=>{const M={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:N(this,Ps),state:this.state,fetchFn:s};return r(M),M})(),l=N(this,Xa)==="infinite"?lb(this.options.pages):this.options.behavior;l==null||l.onFetch(o,this),xe(this,qa,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((p=o.fetchOptions)==null?void 0:p.meta))&&Ge(this,jn,$i).call(this,{type:"fetch",meta:(f=o.fetchOptions)==null?void 0:f.meta}),xe(this,Qt,Ky({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,onCancel:M=>{M instanceof Uf&&M.revert&&this.setState({...N(this,qa),fetchStatus:"idle"}),i.abort()},onFail:(M,T)=>{Ge(this,jn,$i).call(this,{type:"failed",failureCount:M,error:T})},onPause:()=>{Ge(this,jn,$i).call(this,{type:"pause"})},onContinue:()=>{Ge(this,jn,$i).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}));try{const M=await N(this,Qt).start();if(M===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(M),(m=(d=N(this,ei).config).onSuccess)==null||m.call(d,M,this),(S=(_=N(this,ei).config).onSettled)==null||S.call(_,M,this.state.error,this),M}catch(M){if(M instanceof Uf){if(M.silent)return N(this,Qt).promise;if(M.revert){if(this.state.data===void 0)throw M;return this.state.data}}throw Ge(this,jn,$i).call(this,{type:"error",error:M}),(u=(x=N(this,ei).config).onError)==null||u.call(x,M,this),(v=(g=N(this,ei).config).onSettled)==null||v.call(g,this.state.data,M,this),M}finally{this.scheduleGc()}}},Xa=new WeakMap,Rs=new WeakMap,qa=new WeakMap,ei=new WeakMap,Ps=new WeakMap,Qt=new WeakMap,Rl=new WeakMap,Ns=new WeakMap,jn=new WeakSet,Zy=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},$i=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Jy(i.data,this.options),fetchMeta:e.meta??null};case"success":const r={...i,...V0(e.data,e.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return xe(this,qa,e.manual?r:void 0),r;case"error":const s=e.error;return{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Wt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),N(this,ei).notify({query:this,type:"updated",action:e})})},w_);function Jy(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Yy(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function V0(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function G0(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var An,et,Pl,_n,Ds,$a,Qi,Or,Nl,Ya,Ka,Ls,Is,kr,Qa,ot,Go,Ff,Of,kf,Bf,zf,jf,Hf,e1,T_,db=(T_=class extends vo{constructor(e,n){super();Re(this,ot);Re(this,An);Re(this,et);Re(this,Pl);Re(this,_n);Re(this,Ds);Re(this,$a);Re(this,Qi);Re(this,Or);Re(this,Nl);Re(this,Ya);Re(this,Ka);Re(this,Ls);Re(this,Is);Re(this,kr);Re(this,Qa,new Set);this.options=n,xe(this,An,e),xe(this,Or,null),xe(this,Qi,If()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(N(this,et).addObserver(this),W0(N(this,et),this.options)?Ge(this,ot,Go).call(this):this.updateResult(),Ge(this,ot,Bf).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Vf(N(this,et),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Vf(N(this,et),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Ge(this,ot,zf).call(this),Ge(this,ot,jf).call(this),N(this,et).removeObserver(this)}setOptions(e){const n=this.options,i=N(this,et);if(this.options=N(this,An).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Hn(this.options.enabled,N(this,et))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Ge(this,ot,Hf).call(this),N(this,et).setOptions(this.options),n._defaulted&&!Uu(this.options,n)&&N(this,An).getQueryCache().notify({type:"observerOptionsUpdated",query:N(this,et),observer:this});const r=this.hasListeners();r&&X0(N(this,et),i,this.options,n)&&Ge(this,ot,Go).call(this),this.updateResult(),r&&(N(this,et)!==i||Hn(this.options.enabled,N(this,et))!==Hn(n.enabled,N(this,et))||es(this.options.staleTime,N(this,et))!==es(n.staleTime,N(this,et)))&&Ge(this,ot,Ff).call(this);const s=Ge(this,ot,Of).call(this);r&&(N(this,et)!==i||Hn(this.options.enabled,N(this,et))!==Hn(n.enabled,N(this,et))||s!==N(this,kr))&&Ge(this,ot,kf).call(this,s)}getOptimisticResult(e){const n=N(this,An).getQueryCache().build(N(this,An),e),i=this.createResult(n,e);return fb(this,i)&&(xe(this,_n,i),xe(this,$a,this.options),xe(this,Ds,N(this,et).state)),i}getCurrentResult(){return N(this,_n)}trackResult(e,n){return new Proxy(e,{get:(i,r)=>(this.trackProp(r),n==null||n(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&N(this,Qi).status==="pending"&&N(this,Qi).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(i,r))})}trackProp(e){N(this,Qa).add(e)}getCurrentQuery(){return N(this,et)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=N(this,An).defaultQueryOptions(e),i=N(this,An).getQueryCache().build(N(this,An),n);return i.fetch().then(()=>this.createResult(i,n))}fetch(e){return Ge(this,ot,Go).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),N(this,_n)))}createResult(e,n){var C;const i=N(this,et),r=this.options,s=N(this,_n),a=N(this,Ds),o=N(this,$a),c=e!==i?e.state:N(this,Pl),{state:p}=e;let f={...p},d=!1,m;if(n._optimisticResults){const D=this.hasListeners(),P=!D&&W0(e,n),k=D&&X0(e,i,n,r);(P||k)&&(f={...f,...Jy(p.data,e.options)}),n._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:_,errorUpdatedAt:S,status:x}=f;m=f.data;let u=!1;if(n.placeholderData!==void 0&&m===void 0&&x==="pending"){let D;s!=null&&s.isPlaceholderData&&n.placeholderData===(o==null?void 0:o.placeholderData)?(D=s.data,u=!0):D=typeof n.placeholderData=="function"?n.placeholderData((C=N(this,Ka))==null?void 0:C.state.data,N(this,Ka)):n.placeholderData,D!==void 0&&(x="success",m=Lf(s==null?void 0:s.data,D,n),d=!0)}if(n.select&&m!==void 0&&!u)if(s&&m===(a==null?void 0:a.data)&&n.select===N(this,Nl))m=N(this,Ya);else try{xe(this,Nl,n.select),m=n.select(m),m=Lf(s==null?void 0:s.data,m,n),xe(this,Ya,m),xe(this,Or,null)}catch(D){xe(this,Or,D)}N(this,Or)&&(_=N(this,Or),m=N(this,Ya),S=Date.now(),x="error");const g=f.fetchStatus==="fetching",v=x==="pending",M=x==="error",T=v&&g,w=m!==void 0,y={status:x,fetchStatus:f.fetchStatus,isPending:v,isSuccess:x==="success",isError:M,isInitialLoading:T,isLoading:T,data:m,dataUpdatedAt:f.dataUpdatedAt,error:_,errorUpdatedAt:S,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:g,isRefetching:g&&!v,isLoadingError:M&&!w,isPaused:f.fetchStatus==="paused",isPlaceholderData:d,isRefetchError:M&&w,isStale:Vm(e,n),refetch:this.refetch,promise:N(this,Qi),isEnabled:Hn(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const D=y.data!==void 0,P=y.status==="error"&&!D,k=I=>{P?I.reject(y.error):D&&I.resolve(y.data)},X=()=>{const I=xe(this,Qi,y.promise=If());k(I)},Y=N(this,Qi);switch(Y.status){case"pending":e.queryHash===i.queryHash&&k(Y);break;case"fulfilled":(P||y.data!==Y.value)&&X();break;case"rejected":(!P||y.error!==Y.reason)&&X();break}}return y}updateResult(){const e=N(this,_n),n=this.createResult(N(this,et),this.options);if(xe(this,Ds,N(this,et).state),xe(this,$a,this.options),N(this,Ds).data!==void 0&&xe(this,Ka,N(this,et)),Uu(n,e))return;xe(this,_n,n);const i=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,s=typeof r=="function"?r():r;if(s==="all"||!s&&!N(this,Qa).size)return!0;const a=new Set(s??N(this,Qa));return this.options.throwOnError&&a.add("error"),Object.keys(N(this,_n)).some(o=>{const l=o;return N(this,_n)[l]!==e[l]&&a.has(l)})};Ge(this,ot,e1).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Ge(this,ot,Bf).call(this)}},An=new WeakMap,et=new WeakMap,Pl=new WeakMap,_n=new WeakMap,Ds=new WeakMap,$a=new WeakMap,Qi=new WeakMap,Or=new WeakMap,Nl=new WeakMap,Ya=new WeakMap,Ka=new WeakMap,Ls=new WeakMap,Is=new WeakMap,kr=new WeakMap,Qa=new WeakMap,ot=new WeakSet,Go=function(e){Ge(this,ot,Hf).call(this);let n=N(this,et).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(yn)),n},Ff=function(){Ge(this,ot,zf).call(this);const e=es(this.options.staleTime,N(this,et));if(El.isServer()||N(this,_n).isStale||!Nf(e))return;const i=Xy(N(this,_n).dataUpdatedAt,e)+1;xe(this,Ls,Es.setTimeout(()=>{N(this,_n).isStale||this.updateResult()},i))},Of=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(N(this,et)):this.options.refetchInterval)??!1},kf=function(e){Ge(this,ot,jf).call(this),xe(this,kr,e),!(El.isServer()||Hn(this.options.enabled,N(this,et))===!1||!Nf(N(this,kr))||N(this,kr)===0)&&xe(this,Is,Es.setInterval(()=>{(this.options.refetchIntervalInBackground||Bm.isFocused())&&Ge(this,ot,Go).call(this)},N(this,kr)))},Bf=function(){Ge(this,ot,Ff).call(this),Ge(this,ot,kf).call(this,Ge(this,ot,Of).call(this))},zf=function(){N(this,Ls)!==void 0&&(Es.clearTimeout(N(this,Ls)),xe(this,Ls,void 0))},jf=function(){N(this,Is)!==void 0&&(Es.clearInterval(N(this,Is)),xe(this,Is,void 0))},Hf=function(){const e=N(this,An).getQueryCache().build(N(this,An),this.options);if(e===N(this,et))return;const n=N(this,et);xe(this,et,e),xe(this,Pl,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},e1=function(e){Wt.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(N(this,_n))}),N(this,An).getQueryCache().notify({query:N(this,et),type:"observerResultsUpdated"})})},T_);function hb(t,e){return Hn(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&Hn(e.retryOnMount,t)===!1)}function W0(t,e){return hb(t,e)||t.state.data!==void 0&&Vf(t,e,e.refetchOnMount)}function Vf(t,e,n){if(Hn(e.enabled,t)!==!1&&es(e.staleTime,t)!=="static"){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Vm(t,e)}return!1}function X0(t,e,n,i){return(t!==e||Hn(i.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&Vm(t,n)}function Vm(t,e){return Hn(e.enabled,t)!==!1&&t.isStaleByTime(es(e.staleTime,t))}function fb(t,e){return!Uu(t.getCurrentResult(),e)}var Dl,Ri,dn,Us,Pi,Ar,A_,pb=(A_=class extends Qy{constructor(e){super();Re(this,Pi);Re(this,Dl);Re(this,Ri);Re(this,dn);Re(this,Us);xe(this,Dl,e.client),this.mutationId=e.mutationId,xe(this,dn,e.mutationCache),xe(this,Ri,[]),this.state=e.state||t1(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){N(this,Ri).includes(e)||(N(this,Ri).push(e),this.clearGcTimeout(),N(this,dn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){xe(this,Ri,N(this,Ri).filter(n=>n!==e)),this.scheduleGc(),N(this,dn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){N(this,Ri).length||(this.state.status==="pending"?this.scheduleGc():N(this,dn).remove(this))}continue(){var e;return((e=N(this,Us))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var a,o,l,c,p,f,d,m,_,S,x,u,g,v,M,T,w,R;const n=()=>{Ge(this,Pi,Ar).call(this,{type:"continue"})},i={client:N(this,Dl),meta:this.options.meta,mutationKey:this.options.mutationKey};xe(this,Us,Ky({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(new Error("No mutationFn found")),onFail:(y,C)=>{Ge(this,Pi,Ar).call(this,{type:"failed",failureCount:y,error:C})},onPause:()=>{Ge(this,Pi,Ar).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>N(this,dn).canRun(this)}));const r=this.state.status==="pending",s=!N(this,Us).canStart();try{if(r)n();else{Ge(this,Pi,Ar).call(this,{type:"pending",variables:e,isPaused:s}),N(this,dn).config.onMutate&&await N(this,dn).config.onMutate(e,this,i);const C=await((o=(a=this.options).onMutate)==null?void 0:o.call(a,e,i));C!==this.state.context&&Ge(this,Pi,Ar).call(this,{type:"pending",context:C,variables:e,isPaused:s})}const y=await N(this,Us).start();return await((c=(l=N(this,dn).config).onSuccess)==null?void 0:c.call(l,y,e,this.state.context,this,i)),await((f=(p=this.options).onSuccess)==null?void 0:f.call(p,y,e,this.state.context,i)),await((m=(d=N(this,dn).config).onSettled)==null?void 0:m.call(d,y,null,this.state.variables,this.state.context,this,i)),await((S=(_=this.options).onSettled)==null?void 0:S.call(_,y,null,e,this.state.context,i)),Ge(this,Pi,Ar).call(this,{type:"success",data:y}),y}catch(y){try{await((u=(x=N(this,dn).config).onError)==null?void 0:u.call(x,y,e,this.state.context,this,i))}catch(C){Promise.reject(C)}try{await((v=(g=this.options).onError)==null?void 0:v.call(g,y,e,this.state.context,i))}catch(C){Promise.reject(C)}try{await((T=(M=N(this,dn).config).onSettled)==null?void 0:T.call(M,void 0,y,this.state.variables,this.state.context,this,i))}catch(C){Promise.reject(C)}try{await((R=(w=this.options).onSettled)==null?void 0:R.call(w,void 0,y,e,this.state.context,i))}catch(C){Promise.reject(C)}throw Ge(this,Pi,Ar).call(this,{type:"error",error:y}),y}finally{N(this,dn).runNext(this)}}},Dl=new WeakMap,Ri=new WeakMap,dn=new WeakMap,Us=new WeakMap,Pi=new WeakSet,Ar=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Wt.batch(()=>{N(this,Ri).forEach(i=>{i.onMutationUpdate(e)}),N(this,dn).notify({mutation:this,type:"updated",action:e})})},A_);function t1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Zi,pi,Ll,C_,mb=(C_=class extends vo{constructor(e={}){super();Re(this,Zi);Re(this,pi);Re(this,Ll);this.config=e,xe(this,Zi,new Set),xe(this,pi,new Map),xe(this,Ll,0)}build(e,n,i){const r=new pb({client:e,mutationCache:this,mutationId:++Xl(this,Ll)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){N(this,Zi).add(e);const n=uc(e);if(typeof n=="string"){const i=N(this,pi).get(n);i?i.push(e):N(this,pi).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(N(this,Zi).delete(e)){const n=uc(e);if(typeof n=="string"){const i=N(this,pi).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&N(this,pi).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=uc(e);if(typeof n=="string"){const i=N(this,pi).get(n),r=i==null?void 0:i.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=uc(e);if(typeof n=="string"){const r=(i=N(this,pi).get(n))==null?void 0:i.find(s=>s!==e&&s.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Wt.batch(()=>{N(this,Zi).forEach(e=>{this.notify({type:"removed",mutation:e})}),N(this,Zi).clear(),N(this,pi).clear()})}getAll(){return Array.from(N(this,Zi))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>B0(n,i))}findAll(e={}){return this.getAll().filter(n=>B0(e,n))}notify(e){Wt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Wt.batch(()=>Promise.all(e.map(n=>n.continue().catch(yn))))}},Zi=new WeakMap,pi=new WeakMap,Ll=new WeakMap,C_);function uc(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Ji,Br,Cn,er,cr,eu,Gf,R_,gb=(R_=class extends vo{constructor(n,i){super();Re(this,cr);Re(this,Ji);Re(this,Br);Re(this,Cn);Re(this,er);xe(this,Ji,n),this.setOptions(i),this.bindMethods(),Ge(this,cr,eu).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var r;const i=this.options;this.options=N(this,Ji).defaultMutationOptions(n),Uu(this.options,i)||N(this,Ji).getMutationCache().notify({type:"observerOptionsUpdated",mutation:N(this,Cn),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&Vs(i.mutationKey)!==Vs(this.options.mutationKey)?this.reset():((r=N(this,Cn))==null?void 0:r.state.status)==="pending"&&N(this,Cn).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=N(this,Cn))==null||n.removeObserver(this)}onMutationUpdate(n){Ge(this,cr,eu).call(this),Ge(this,cr,Gf).call(this,n)}getCurrentResult(){return N(this,Br)}reset(){var n;(n=N(this,Cn))==null||n.removeObserver(this),xe(this,Cn,void 0),Ge(this,cr,eu).call(this),Ge(this,cr,Gf).call(this)}mutate(n,i){var r;return xe(this,er,i),(r=N(this,Cn))==null||r.removeObserver(this),xe(this,Cn,N(this,Ji).getMutationCache().build(N(this,Ji),this.options)),N(this,Cn).addObserver(this),N(this,Cn).execute(n)}},Ji=new WeakMap,Br=new WeakMap,Cn=new WeakMap,er=new WeakMap,cr=new WeakSet,eu=function(){var i;const n=((i=N(this,Cn))==null?void 0:i.state)??t1();xe(this,Br,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},Gf=function(n){Wt.batch(()=>{var i,r,s,a,o,l,c,p;if(N(this,er)&&this.hasListeners()){const f=N(this,Br).variables,d=N(this,Br).context,m={client:N(this,Ji),meta:this.options.meta,mutationKey:this.options.mutationKey};if((n==null?void 0:n.type)==="success"){try{(r=(i=N(this,er)).onSuccess)==null||r.call(i,n.data,f,d,m)}catch(_){Promise.reject(_)}try{(a=(s=N(this,er)).onSettled)==null||a.call(s,n.data,null,f,d,m)}catch(_){Promise.reject(_)}}else if((n==null?void 0:n.type)==="error"){try{(l=(o=N(this,er)).onError)==null||l.call(o,n.error,f,d,m)}catch(_){Promise.reject(_)}try{(p=(c=N(this,er)).onSettled)==null||p.call(c,void 0,n.error,f,d,m)}catch(_){Promise.reject(_)}}}this.listeners.forEach(f=>{f(N(this,Br))})})},R_),Ni,P_,xb=(P_=class extends vo{constructor(e={}){super();Re(this,Ni);this.config=e,xe(this,Ni,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??zm(r,n);let a=this.get(s);return a||(a=new ub({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){N(this,Ni).has(e.queryHash)||(N(this,Ni).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=N(this,Ni).get(e.queryHash);n&&(e.destroy(),n===e&&N(this,Ni).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Wt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return N(this,Ni).get(e)}getAll(){return[...N(this,Ni).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>k0(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>k0(e,i)):n}notify(e){Wt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Wt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Wt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Ni=new WeakMap,P_),Dt,zr,jr,Za,Ja,Hr,eo,to,N_,_b=(N_=class{constructor(t={}){Re(this,Dt);Re(this,zr);Re(this,jr);Re(this,Za);Re(this,Ja);Re(this,Hr);Re(this,eo);Re(this,to);xe(this,Dt,t.queryCache||new xb),xe(this,zr,t.mutationCache||new mb),xe(this,jr,t.defaultOptions||{}),xe(this,Za,new Map),xe(this,Ja,new Map),xe(this,Hr,0)}mount(){Xl(this,Hr)._++,N(this,Hr)===1&&(xe(this,eo,Bm.subscribe(async t=>{t&&(await this.resumePausedMutations(),N(this,Dt).onFocus())})),xe(this,to,Fu.subscribe(async t=>{t&&(await this.resumePausedMutations(),N(this,Dt).onOnline())})))}unmount(){var t,e;Xl(this,Hr)._--,N(this,Hr)===0&&((t=N(this,eo))==null||t.call(this),xe(this,eo,void 0),(e=N(this,to))==null||e.call(this),xe(this,to,void 0))}isFetching(t){return N(this,Dt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return N(this,zr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=N(this,Dt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=N(this,Dt).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(es(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return N(this,Dt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=N(this,Dt).get(i.queryHash),s=r==null?void 0:r.state.data,a=ZE(e,s);if(a!==void 0)return N(this,Dt).build(this,i).setData(a,{...n,manual:!0})}setQueriesData(t,e,n){return Wt.batch(()=>N(this,Dt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=N(this,Dt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=N(this,Dt);Wt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=N(this,Dt);return Wt.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=Wt.batch(()=>N(this,Dt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(yn).catch(yn)}invalidateQueries(t,e={}){return Wt.batch(()=>(N(this,Dt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=Wt.batch(()=>N(this,Dt).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(yn)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(yn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=N(this,Dt).build(this,e);return n.isStaleByTime(es(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(yn).catch(yn)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(yn).catch(yn)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return Fu.isOnline()?N(this,zr).resumePausedMutations():Promise.resolve()}getQueryCache(){return N(this,Dt)}getMutationCache(){return N(this,zr)}getDefaultOptions(){return N(this,jr)}setDefaultOptions(t){xe(this,jr,t)}setQueryDefaults(t,e){N(this,Za).set(Vs(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...N(this,Za).values()],n={};return e.forEach(i=>{Ml(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){N(this,Ja).set(Vs(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...N(this,Ja).values()],n={};return e.forEach(i=>{Ml(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...N(this,jr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=zm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===jm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...N(this,jr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){N(this,Dt).clear(),N(this,zr).clear()}},Dt=new WeakMap,zr=new WeakMap,jr=new WeakMap,Za=new WeakMap,Ja=new WeakMap,Hr=new WeakMap,eo=new WeakMap,to=new WeakMap,N_),n1=we.createContext(void 0),i1=t=>{const e=we.useContext(n1);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},vb=({client:t,children:e})=>(we.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),h.jsx(n1.Provider,{value:t,children:e})),r1=we.createContext(!1),yb=()=>we.useContext(r1);r1.Provider;function Sb(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Mb=we.createContext(Sb()),Eb=()=>we.useContext(Mb),bb=(t,e,n)=>{const i=n!=null&&n.state.error&&typeof t.throwOnError=="function"?Hm(t.throwOnError,[n.state.error,n]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||i)&&(e.isReset()||(t.retryOnMount=!1))},wb=t=>{we.useEffect(()=>{t.clearReset()},[t])},Tb=({result:t,errorResetBoundary:e,throwOnError:n,query:i,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&(r&&t.data===void 0||Hm(n,[t.error,i])),Ab=t=>{if(t.suspense){const n=r=>r==="static"?r:Math.max(r??1e3,1e3),i=t.staleTime;t.staleTime=typeof i=="function"?(...r)=>n(i(...r)):n(i),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},Cb=(t,e)=>t.isLoading&&t.isFetching&&!e,Rb=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,q0=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function Pb(t,e,n){var m,_,S,x;const i=yb(),r=Eb(),s=i1(),a=s.defaultQueryOptions(t);(_=(m=s.getDefaultOptions().queries)==null?void 0:m._experimental_beforeQuery)==null||_.call(m,a);const o=s.getQueryCache().get(a.queryHash),l=t.subscribed!==!1;a._optimisticResults=i?"isRestoring":l?"optimistic":void 0,Ab(a),bb(a,r,o),wb(r);const c=!s.getQueryCache().get(a.queryHash),[p]=we.useState(()=>new e(s,a)),f=p.getOptimisticResult(a),d=!i&&l;if(we.useSyncExternalStore(we.useCallback(u=>{const g=d?p.subscribe(Wt.batchCalls(u)):yn;return p.updateResult(),g},[p,d]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),we.useEffect(()=>{p.setOptions(a)},[a,p]),Rb(a,f))throw q0(a,p,r);if(Tb({result:f,errorResetBoundary:r,throwOnError:a.throwOnError,query:o,suspense:a.suspense}))throw f.error;if((x=(S=s.getDefaultOptions().queries)==null?void 0:S._experimental_afterQuery)==null||x.call(S,a,f),a.experimental_prefetchInRender&&!El.isServer()&&Cb(f,i)){const u=c?q0(a,p,r):o==null?void 0:o.promise;u==null||u.catch(yn).finally(()=>{p.updateResult()})}return a.notifyOnChangeProps?f:p.trackResult(f)}function qd(t,e){return Pb(t,db)}function tu(t,e){const n=i1(),[i]=we.useState(()=>new gb(n,t));we.useEffect(()=>{i.setOptions(t)},[i,t]);const r=we.useSyncExternalStore(we.useCallback(a=>i.subscribe(Wt.batchCalls(a)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=we.useCallback((a,o)=>{i.mutate(a,o).catch(yn)},[i]);if(r.error&&Hm(i.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:s,mutateAsync:r.mutate}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s1=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=we.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>we.createElement("svg",{ref:l,...Db,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:s1("lucide",r),...o},[...a.map(([c,p])=>we.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(t,e)=>{const n=we.forwardRef(({className:i,...r},s)=>we.createElement(Lb,{ref:s,iconNode:e,className:s1(`lucide-${Nb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=De("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=De("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=De("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=De("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=De("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=De("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=De("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=De("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=De("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=De("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=De("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=De("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=De("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=De("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=De("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=De("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=De("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=De("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=De("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=De("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=De("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=De("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=De("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=De("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=De("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=De("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=De("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=De("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=De("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=De("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=De("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=De("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=De("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=De("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=De("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=De("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=De("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=De("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=De("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=De("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=De("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=De("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=De("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=De("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=De("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=De("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=De("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=De("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),fw={},Y0=t=>{let e;const n=new Set,i=(p,f)=>{const d=typeof p=="function"?p(e):p;if(!Object.is(d,e)){const m=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(_=>_(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(fw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},pw=t=>t?Y0(t):Y0;var h1={exports:{}},f1={},p1={exports:{}},m1={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=we;function mw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gw=typeof Object.is=="function"?Object.is:mw,xw=co.useState,_w=co.useEffect,vw=co.useLayoutEffect,yw=co.useDebugValue;function Sw(t,e){var n=e(),i=xw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return vw(function(){r.value=n,r.getSnapshot=e,$d(r)&&s({inst:r})},[t,n,e]),_w(function(){return $d(r)&&s({inst:r}),t(function(){$d(r)&&s({inst:r})})},[t]),yw(n),n}function $d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gw(t,n)}catch{return!0}}function Mw(t,e){return e()}var Ew=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Mw:Sw;m1.useSyncExternalStore=co.useSyncExternalStore!==void 0?co.useSyncExternalStore:Ew;p1.exports=m1;var bw=p1.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=we,ww=bw;function Tw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Aw=typeof Object.is=="function"?Object.is:Tw,Cw=ww.useSyncExternalStore,Rw=dd.useRef,Pw=dd.useEffect,Nw=dd.useMemo,Dw=dd.useDebugValue;f1.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Rw(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Nw(function(){function l(m){if(!c){if(c=!0,p=m,m=i(m),r!==void 0&&a.hasValue){var _=a.value;if(r(_,m))return f=_}return f=m}if(_=f,Aw(p,m))return _;var S=i(m);return r!==void 0&&r(_,S)?(p=m,_):(p=m,f=S)}var c=!1,p,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=Cw(t,s[0],s[1]);return Pw(function(){a.hasValue=!0,a.value=o},[o]),Dw(o),o};h1.exports=f1;var Lw=h1.exports;const Iw=D_(Lw),g1={},{useDebugValue:Uw}=V_,{useSyncExternalStoreWithSelector:Fw}=Iw;let K0=!1;const Ow=t=>t;function kw(t,e=Ow,n){(g1?"production":void 0)!=="production"&&n&&!K0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),K0=!0);const i=Fw(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Uw(i),i}const Q0=t=>{(g1?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?pw(t):t,n=(i,r)=>kw(e,i,r);return Object.assign(n,e),n},Bw=t=>t?Q0(t):Q0,at=Bw(t=>({config:{family:"random",n_nodes:6,density:.6,weight_min:.5,weight_max:1.5,seed:42,optimize_geometry:!0},annealing:{omega_peak_mhz:2,rise_duration:1e3,hold_duration:1e3,fall_duration:26e3,delta_start_pi:1,delta_hold_pi:-.5,delta_end_pi:-1,sampling_rate:.05,n_roundings:32},enableAnimations:!1,randomizeSeed:!1,graph:null,job:null,hpcJob:null,hpcResources:{},setConfig:e=>t(n=>({config:{...n.config,...e}})),setAnnealing:e=>t(n=>({annealing:{...n.annealing,...e}})),setEnableAnimations:e=>t({enableAnimations:e}),setRandomizeSeed:e=>t({randomizeSeed:e}),setGraph:e=>t({graph:e}),setJob:e=>t({job:e}),setHpcJob:e=>t({hpcJob:e}),setHpcResources:e=>t(n=>({hpcResources:{...n.hpcResources,...e}}))}));function zw(){const t=at(s=>s.annealing),[e,n]=we.useState(null),i=we.useMemo(()=>jw(t),[t]),r=e??i.points[Math.floor(i.points.length*.58)]??null;return h.jsxs("section",{className:"rounded-md border border-border bg-muted/25 p-4",children:[h.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"Annealing schedule"}),h.jsx("h2",{className:"text-lg font-semibold",children:"Pulse evolution over time"})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 text-right",children:[h.jsx(ds,{label:"Total",value:`${Zn(i.totalTime,0)} ns`}),h.jsx(ds,{label:"Omega",value:`${Zn(t.omega_peak_mhz,2)} MHz`}),h.jsx(ds,{label:"Samples",value:String(i.samples)})]})]}),h.jsxs("div",{className:"grid gap-4",children:[h.jsx("div",{className:"relative overflow-hidden rounded-md border border-border bg-background/70",children:h.jsxs("svg",{viewBox:"0 0 920 330",className:"h-[360px] w-full",role:"img",onMouseLeave:()=>n(null),onMouseMove:s=>{const o=s.currentTarget.getBoundingClientRect(),l=(s.clientX-o.left)/o.width*920,c=i.xToTime(l);n(Gw(i.points,c))},children:[h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"omegaFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[h.jsx("stop",{offset:"0%",stopColor:"#6ee7cf",stopOpacity:"0.36"}),h.jsx("stop",{offset:"100%",stopColor:"#6ee7cf",stopOpacity:"0.03"})]}),h.jsxs("linearGradient",{id:"deltaFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[h.jsx("stop",{offset:"0%",stopColor:"#8fb7ff",stopOpacity:"0.24"}),h.jsx("stop",{offset:"100%",stopColor:"#8fb7ff",stopOpacity:"0.02"})]}),h.jsxs("filter",{id:"lineGlow",children:[h.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"coloredBlur"}),h.jsxs("feMerge",{children:[h.jsx("feMergeNode",{in:"coloredBlur"}),h.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),h.jsx("rect",{x:"0",y:"0",width:"920",height:"330",fill:"transparent"}),i.gridY.map(s=>h.jsx("line",{x1:"56",x2:"884",y1:s,y2:s,stroke:"currentColor",className:"text-border",strokeOpacity:"0.5"},s)),i.boundaries.map(s=>h.jsxs("g",{children:[h.jsx("rect",{x:s.x0,y:"52",width:s.x1-s.x0,height:"222",fill:s.fill,opacity:"0.18"}),h.jsx("line",{x1:s.x1,x2:s.x1,y1:"52",y2:"274",stroke:"#32423f",strokeDasharray:"4 7"}),s.x1-s.x0>72?h.jsx("text",{x:(s.x0+s.x1)/2,y:"298",textAnchor:"middle",className:"fill-foreground/50 text-[11px] font-semibold uppercase",children:s.label}):null]},s.label)),h.jsx("text",{x:"56",y:"36",className:"fill-primary text-[12px] font-semibold",children:"Omega amplitude"}),h.jsx("text",{x:"884",y:"36",textAnchor:"end",className:"fill-[#9bbcff] text-[12px] font-semibold",children:"Detuning"}),h.jsx("text",{x:"56",y:"315",className:"fill-foreground/40 text-[11px]",children:"time ns"}),h.jsx("path",{d:i.omegaAreaPath,fill:"url(#omegaFill)"}),h.jsx("path",{d:i.deltaAreaPath,fill:"url(#deltaFill)"}),h.jsx("path",{d:i.omegaPath,fill:"none",stroke:"#6ee7cf",strokeWidth:"4",filter:"url(#lineGlow)",strokeLinecap:"round"}),h.jsx("path",{d:i.deltaPath,fill:"none",stroke:"#9bbcff",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"7 8"}),r?h.jsxs("g",{children:[h.jsx("line",{x1:i.x(r.t),x2:i.x(r.t),y1:"50",y2:"276",stroke:"#d6fff4",strokeOpacity:"0.48"}),h.jsx("circle",{cx:i.x(r.t),cy:i.yOmega(r.omega),r:"7",fill:"#6ee7cf",stroke:"#09231e",strokeWidth:"3"}),h.jsx("circle",{cx:i.x(r.t),cy:i.yDelta(r.delta),r:"6",fill:"#9bbcff",stroke:"#091327",strokeWidth:"3"})]}):null]})}),h.jsxs("aside",{className:"grid gap-3 xl:grid-cols-2",children:[h.jsx(Yd,{icon:h.jsx(ud,{size:16}),label:"Rise",value:`${Zn(t.rise_duration,0)} ns`,detail:`Omega 0 to ${Zn(t.omega_peak_mhz,2)} MHz`}),h.jsx(Yd,{icon:h.jsx(qm,{size:16}),label:"Sweep",value:`${Zn(t.hold_duration,0)} ns`,detail:`Delta ${Zn(t.delta_start_pi,2)} to ${Zn(t.delta_end_pi,2)} pi`}),h.jsx(Yd,{icon:h.jsx(uw,{size:16}),label:"Fall",value:`${Zn(t.fall_duration,0)} ns`,detail:`Omega ${Zn(t.omega_peak_mhz,2)} MHz to 0`}),h.jsxs("div",{className:"rounded-md border border-border bg-background/70 p-3",children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/45",children:"Probe"}),h.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[h.jsx(ds,{label:"t",value:`${Zn((r==null?void 0:r.t)??0,0)} ns`}),h.jsx(ds,{label:"Phase",value:(r==null?void 0:r.phase)??"—"}),h.jsx(ds,{label:"Omega",value:`${Zn((r==null?void 0:r.omega)??0,2)} MHz`}),h.jsx(ds,{label:"Delta",value:`${Zn((r==null?void 0:r.delta)??0,2)} pi`})]})]})]})]})]})}function jw(t){const e={left:56,right:36,top:52,bottom:56},n=920-e.left-e.right,i=330-e.top-e.bottom,r=Math.max(1,t.rise_duration+t.hold_duration+t.fall_duration),s=Math.min(t.delta_start_pi,t.delta_hold_pi,t.delta_end_pi,-.1),a=Math.max(t.delta_start_pi,t.delta_hold_pi,t.delta_end_pi,.1),o=Math.max(a-s,.1),l=T=>e.left+T/r*n,c=T=>x1((T-e.left)/n*r,0,r),p=T=>e.top+i-T/Math.max(t.omega_peak_mhz,.1)*i,f=T=>e.top+i-(T-s)/o*i,d=[],m=(T,w,R,y)=>{for(let C=0;C<=y;C+=1){const D=y===0?0:C/y,P=R+w*D;d.push({t:P,omega:Hw(t,P),delta:Vw(t,P),phase:T})}};m("rise",t.rise_duration,0,24),m("sweep",t.hold_duration,t.rise_duration,36),m("fall",t.fall_duration,t.rise_duration+t.hold_duration,28);const _=Xf(d,T=>l(T.t),T=>p(T.omega)),S=Xf(d,T=>l(T.t),T=>f(T.delta)),x=Z0(d,T=>l(T.t),T=>p(T.omega),e.top+i),u=Z0(d,T=>l(T.t),T=>f(T.delta),e.top+i),g=t.rise_duration,v=t.rise_duration+t.hold_duration,M=[{label:"rise",x0:l(0),x1:l(g),fill:"#6ee7cf"},{label:"sweep",x0:l(g),x1:l(v),fill:"#9bbcff"},{label:"fall",x0:l(v),x1:l(r),fill:"#6ee7cf"}];return{totalTime:r,samples:Math.max(1,Math.round(r*t.sampling_rate)),points:d,x:l,xToTime:c,yOmega:p,yDelta:f,omegaPath:_,deltaPath:S,omegaAreaPath:x,deltaAreaPath:u,boundaries:M,gridY:[e.top,e.top+i*.25,e.top+i*.5,e.top+i*.75,e.top+i]}}function Hw(t,e){const n=t.rise_duration,i=t.rise_duration+t.hold_duration;return e<=n?t.omega_peak_mhz*qf(e,0,n):e<=i?t.omega_peak_mhz:t.omega_peak_mhz*(1-qf(e,i,i+t.fall_duration))}function Vw(t,e){const n=t.rise_duration,i=t.rise_duration+t.hold_duration;return e<=n?t.delta_start_pi:e<=i?Ww(t.delta_start_pi,t.delta_end_pi,qf(e,n,i)):t.delta_end_pi}function Xf(t,e,n){return t.map((i,r)=>`${r===0?"M":"L"} ${e(i).toFixed(2)} ${n(i).toFixed(2)}`).join(" ")}function Z0(t,e,n,i){if(t.length===0)return"";const r=t[0],s=t[t.length-1];return`${Xf(t,e,n)} L ${e(s).toFixed(2)} ${i.toFixed(2)} L ${e(r).toFixed(2)} ${i.toFixed(2)} Z`}function Gw(t,e){return t.reduce((n,i)=>Math.abs(i.t-e)<Math.abs(n.t-e)?i:n,t[0])}function qf(t,e,n){return n<=e?1:x1((t-e)/(n-e),0,1)}function Ww(t,e,n){return t+(e-t)*n}function x1(t,e,n){return Math.min(n,Math.max(e,t))}function Yd({icon:t,label:e,value:n,detail:i}){return h.jsxs("div",{className:"rounded-md border border-border bg-background/70 p-3",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2 text-primary",children:[t,h.jsx("span",{className:"text-sm font-semibold text-foreground",children:e})]}),h.jsx("span",{className:"font-mono text-xs text-foreground/60",children:n})]}),h.jsx("p",{className:"mt-2 text-xs text-foreground/50",children:i})]})}function ds({label:t,value:e}){return h.jsxs("div",{className:"min-w-0 rounded-md border border-border bg-background/70 px-3 py-2",children:[h.jsx("p",{className:"text-[10px] font-medium uppercase text-foreground/45",children:t}),h.jsx("p",{className:"mt-1 truncate font-mono text-xs text-primary",children:e})]})}function Zn(t,e){return Number.isFinite(t)?t.toFixed(e):"—"}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $m="184",za={ROTATE:0,DOLLY:1,PAN:2},Na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xw=0,J0=1,qw=2,nu=1,_1=2,Wo=3,is=0,In=1,tr=2,ar=0,ja=1,ex=2,tx=3,nx=4,$w=5,_s=100,Yw=101,Kw=102,Qw=103,Zw=104,Jw=200,eT=201,tT=202,nT=203,$f=204,Yf=205,iT=206,rT=207,sT=208,aT=209,oT=210,lT=211,cT=212,uT=213,dT=214,Kf=0,Qf=1,Zf=2,uo=3,Jf=4,ep=5,tp=6,np=7,v1=0,hT=1,fT=2,ki=0,y1=1,S1=2,M1=3,E1=4,b1=5,w1=6,T1=7,A1=300,Gs=301,ho=302,Kd=303,Qd=304,hd=306,ip=1e3,rr=1001,rp=1002,nn=1003,pT=1004,dc=1005,fn=1006,Zd=1007,bs=1008,Wn=1009,C1=1010,R1=1011,wl=1012,Ym=1013,zi=1014,Ii=1015,pr=1016,Km=1017,Qm=1018,Tl=1020,P1=35902,N1=35899,D1=1021,L1=1022,_i=1023,mr=1026,ws=1027,I1=1028,Zm=1029,Ws=1030,Jm=1031,eg=1033,iu=33776,ru=33777,su=33778,au=33779,sp=35840,ap=35841,op=35842,lp=35843,cp=36196,up=37492,dp=37496,hp=37488,fp=37489,ku=37490,pp=37491,mp=37808,gp=37809,xp=37810,_p=37811,vp=37812,yp=37813,Sp=37814,Mp=37815,Ep=37816,bp=37817,wp=37818,Tp=37819,Ap=37820,Cp=37821,Rp=36492,Pp=36494,Np=36495,Dp=36283,Lp=36284,Bu=36285,Ip=36286,mT=3200,Up=0,gT=1,Lr="",ti="srgb",zu="srgb-linear",ju="linear",lt="srgb",Js=7680,ix=519,xT=512,_T=513,vT=514,tg=515,yT=516,ST=517,ng=518,MT=519,Fp=35044,rx="300 es",Ui=2e3,Al=2001;function ET(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bT(){const t=Hu("canvas");return t.style.display="block",t}const sx={};function Vu(...t){const e="THREE."+t.shift();console.log(e,...t)}function U1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=U1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=U1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Op(...t){const e=t.join(" ");e in sx||(sx[e]=!0,Ne(...t))}function wT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const TT={[Kf]:Qf,[Zf]:tp,[Jf]:np,[uo]:ep,[Qf]:Kf,[tp]:Zf,[np]:Jf,[ep]:uo};class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ax=1234567;const nl=Math.PI/180,Cl=180/Math.PI;function or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function ig(t,e){return(t%e+e)%e}function AT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function CT(t,e,n){return t!==e?(n-t)/(e-t):0}function il(t,e,n){return(1-n)*t+n*e}function RT(t,e,n,i){return il(t,e,1-Math.exp(-n*i))}function PT(t,e=1){return e-Math.abs(ig(t,e*2)-e)}function NT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function DT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function LT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function IT(t,e){return t+Math.random()*(e-t)}function UT(t){return t*(.5-Math.random())}function FT(t){t!==void 0&&(ax=t);let e=ax+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OT(t){return t*nl}function kT(t){return t*Cl}function BT(t){return(t&t-1)===0&&t!==0}function zT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function jT(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function HT(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),p=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*p,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*p,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*p,o*c);break;case"XZX":t.set(o*p,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*p,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*p,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const F1={DEG2RAD:nl,RAD2DEG:Cl,generateUUID:or,clamp:$e,euclideanModulo:ig,mapLinear:AT,inverseLerp:CT,lerp:il,damp:RT,pingpong:PT,smoothstep:NT,smootherstep:DT,randInt:LT,randFloat:IT,randFloatSpread:UT,seededRandom:FT,degToRad:OT,radToDeg:kT,isPowerOfTwo:BT,ceilPowerOfTwo:zT,floorPowerOfTwo:jT,setQuaternionFromProperEuler:HT,normalize:ct,denormalize:xi},mg=class mg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mg.prototype.isVector2=!0;let Ie=mg;class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||l!==d||c!==m||p!==_){let x=l*d+c*m+p*_+f*S;x<0&&(d=-d,m=-m,_=-_,S=-S,x=-x);let u=1-o;if(x<.9995){const g=Math.acos(x),v=Math.sin(g);u=Math.sin(u*g)/v,o=Math.sin(o*g)/v,l=l*u+d*o,c=c*u+m*o,p=p*u+_*o,f=f*u+S*o}else{l=l*u+d*o,c=c*u+m*o,p=p*u+_*o,f=f*u+S*o;const g=1/Math.sqrt(l*l+c*c+p*p+f*f);l*=g,c*=g,p*=g,f*=g}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+p*f+l*m-c*d,e[n+1]=l*_+p*d+c*f-o*m,e[n+2]=c*_+p*m+o*d-l*f,e[n+3]=p*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"YXZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"ZXY":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"ZYX":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"YZX":this._x=d*p*f+c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f-d*m*_;break;case"XZY":this._x=d*p*f-c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f+d*m*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],f=n[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(p-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gg=class gg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ox.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ox.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*p,this.y=i+l*p+o*c-s*f,this.z=r+l*f+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gg.prototype.isVector3=!0;let F=gg;const Jd=new F,ox=new rs,xg=class xg{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],f=i[7],d=i[2],m=i[5],_=i[8],S=r[0],x=r[3],u=r[6],g=r[1],v=r[4],M=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*S+o*g+l*T,s[3]=a*x+o*v+l*w,s[6]=a*u+o*M+l*R,s[1]=c*S+p*g+f*T,s[4]=c*x+p*v+f*w,s[7]=c*u+p*M+f*R,s[2]=d*S+m*g+_*T,s[5]=d*x+m*v+_*w,s[8]=d*u+m*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=p*a-o*c,d=o*l-p*s,m=c*s-a*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-p*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(p*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(eh.makeScale(e,n)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,n){return this.premultiply(eh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xg.prototype.isMatrix3=!0;let Be=xg;const eh=new Be,lx=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cx=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VT(){const t={enabled:!0,workingColorSpace:zu,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Lr?ju:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Op("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Op("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zu]:{primaries:e,whitePoint:i,transfer:ju,toXYZ:lx,fromXYZ:cx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:lx,fromXYZ:cx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),t}const tt=VT();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ha(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ea;class GT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ea===void 0&&(ea=Hu("canvas")),ea.width=e.width,ea.height=e.height;const r=ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ea}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WT=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(th(r[a].image)):s.push(th(r[a]))}else s=th(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function th(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let XT=0;const nh=new F;class pn extends cs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=rr,r=rr,s=fn,a=bs,o=_i,l=Wn,c=pn.DEFAULT_ANISOTROPY,p=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=or(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=A1;pn.DEFAULT_ANISOTROPY=1;const _g=class _g{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],f=l[8],d=l[1],m=l[5],_=l[9],S=l[2],x=l[6],u=l[10];if(Math.abs(p-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-x)<.01){if(Math.abs(p+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,T=(u+1)/2,w=(p+d)/4,R=(f+S)/4,y=(_+x)/4;return v>M&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-_)*(x-_)+(f-S)*(f-S)+(d-p)*(d-p));return Math.abs(g)<.001&&(g=1),this.x=(x-_)/g,this.y=(f-S)/g,this.z=(d-p)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_g.prototype.isVector4=!0;let It=_g;class qT extends cs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends qT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $T extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=class qu{constructor(e,n,i,r,s,a,o,l,c,p,f,d,m,_,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,f,d,m,_,S,x)}set(e,n,i,r,s,a,o,l,c,p,f,d,m,_,S,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=p,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=S,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),a=1/ta.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*p,m=a*f,_=o*p,S=o*f;n[0]=l*p,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*p,m=l*f,_=c*p,S=c*f;n[0]=d+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*p,n[9]=-o,n[2]=m*o-_,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*p,m=l*f,_=c*p,S=c*f;n[0]=d-S*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*p,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*p,m=a*f,_=o*p,S=o*f;n[0]=l*p,n[4]=_*c-m,n[8]=d*c+S,n[1]=l*f,n[5]=S*c+d,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*p,n[4]=S-d*f,n[8]=_*f+m,n[1]=f,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=m*f+_,n[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*p,n[4]=-f,n[8]=c*p,n[1]=d*f+S,n[5]=a*p,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*p,n[10]=S*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YT,e,KT)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Sr.crossVectors(i,On),Sr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Sr.crossVectors(i,On)),Sr.normalize(),hc.crossVectors(On,Sr),r[0]=Sr.x,r[4]=hc.x,r[8]=On.x,r[1]=Sr.y,r[5]=hc.y,r[9]=On.y,r[2]=Sr.z,r[6]=hc.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],f=i[5],d=i[9],m=i[13],_=i[2],S=i[6],x=i[10],u=i[14],g=i[3],v=i[7],M=i[11],T=i[15],w=r[0],R=r[4],y=r[8],C=r[12],D=r[1],P=r[5],k=r[9],X=r[13],Y=r[2],I=r[6],G=r[10],j=r[14],B=r[3],q=r[7],ee=r[11],oe=r[15];return s[0]=a*w+o*D+l*Y+c*B,s[4]=a*R+o*P+l*I+c*q,s[8]=a*y+o*k+l*G+c*ee,s[12]=a*C+o*X+l*j+c*oe,s[1]=p*w+f*D+d*Y+m*B,s[5]=p*R+f*P+d*I+m*q,s[9]=p*y+f*k+d*G+m*ee,s[13]=p*C+f*X+d*j+m*oe,s[2]=_*w+S*D+x*Y+u*B,s[6]=_*R+S*P+x*I+u*q,s[10]=_*y+S*k+x*G+u*ee,s[14]=_*C+S*X+x*j+u*oe,s[3]=g*w+v*D+M*Y+T*B,s[7]=g*R+v*P+M*I+T*q,s[11]=g*y+v*k+M*G+T*ee,s[15]=g*C+v*X+M*j+T*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],f=e[6],d=e[10],m=e[14],_=e[3],S=e[7],x=e[11],u=e[15],g=l*m-c*d,v=o*m-c*f,M=o*d-l*f,T=a*m-c*p,w=a*d-l*p,R=a*f-o*p;return n*(S*g-x*v+u*M)-i*(_*g-x*T+u*w)+r*(_*v-S*T+u*R)-s*(_*M-S*w+x*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=e[9],d=e[10],m=e[11],_=e[12],S=e[13],x=e[14],u=e[15],g=n*o-i*a,v=n*l-r*a,M=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,y=p*S-f*_,C=p*x-d*_,D=p*u-m*_,P=f*x-d*S,k=f*u-m*S,X=d*u-m*x,Y=g*X-v*k+M*P+T*D-w*C+R*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(o*X-l*k+c*P)*I,e[1]=(r*k-i*X-s*P)*I,e[2]=(S*R-x*w+u*T)*I,e[3]=(d*w-f*R-m*T)*I,e[4]=(l*D-a*X-c*C)*I,e[5]=(n*X-r*D+s*C)*I,e[6]=(x*M-_*R-u*v)*I,e[7]=(p*R-d*M+m*v)*I,e[8]=(a*k-o*D+c*y)*I,e[9]=(i*D-n*k-s*y)*I,e[10]=(_*w-S*M+u*g)*I,e[11]=(f*M-p*w-m*g)*I,e[12]=(o*C-a*P-l*y)*I,e[13]=(n*P-i*C+r*y)*I,e[14]=(S*v-_*T-x*g)*I,e[15]=(p*T-f*v+d*g)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,f=o+o,d=s*c,m=s*p,_=s*f,S=a*p,x=a*f,u=o*f,g=l*c,v=l*p,M=l*f,T=i.x,w=i.y,R=i.z;return r[0]=(1-(S+u))*T,r[1]=(m+M)*T,r[2]=(_-v)*T,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(d+u))*w,r[6]=(x+g)*w,r[7]=0,r[8]=(_+v)*R,r[9]=(x-g)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ta.set(r[0],r[1],r[2]).length();const o=ta.set(r[4],r[5],r[6]).length(),l=ta.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ui.copy(this);const c=1/a,p=1/o,f=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=p,ui.elements[5]*=p,ui.elements[6]*=p,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,n.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ui,l=!1){const c=this.elements,p=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===Ui)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Al)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ui,l=!1){const c=this.elements,p=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===Ui)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Al)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};qu.prototype.isMatrix4=!0;let Ct=qu;const ta=new F,ui=new Ct,YT=new F(0,0,0),KT=new F(1,1,1),Sr=new F,hc=new F,On=new F,ux=new Ct,dx=new rs;class ss{constructor(e=0,n=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ux,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dx.setFromEuler(this),this.setFromQuaternion(dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class k1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QT=0;const hx=new F,na=new rs,Vi=new Ct,fc=new F,Po=new F,ZT=new F,JT=new rs,fx=new F(1,0,0),px=new F(0,1,0),mx=new F(0,0,1),gx={type:"added"},e2={type:"removed"},ia={type:"childadded",child:null},ih={type:"childremoved",child:null};class en extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new F,n=new ss,i=new rs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Be}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return na.setFromAxisAngle(e,n),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,n){return na.setFromAxisAngle(e,n),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(fx,e)}rotateY(e){return this.rotateOnAxis(px,e)}rotateZ(e){return this.rotateOnAxis(mx,e)}translateOnAxis(e,n){return hx.copy(e).applyQuaternion(this.quaternion),this.position.add(hx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fx,e)}translateY(e){return this.translateOnAxis(px,e)}translateZ(e){return this.translateOnAxis(mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fc.copy(e):fc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Po,fc,this.up):Vi.lookAt(fc,Po,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),na.setFromRotationMatrix(Vi),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gx),ia.child=e,this.dispatchEvent(ia),ia.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(e2),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gx),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,ZT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,JT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t2={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),u=this._getHandJoint(c,S);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const p=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=p.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const B1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function sh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=ig(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=sh(a,s,e+1/3),this.g=sh(a,s,e),this.b=sh(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=B1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return tt.workingToColorSpace(un.copy(this),e),Math.round($e(un.r*255,0,255))*65536+Math.round($e(un.g*255,0,255))*256+Math.round($e(un.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(un.copy(this),n);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=p<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ti){tt.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,r=un.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(pc);const i=il(Mr.h,pc.h,n),r=il(Mr.s,pc.s,n),s=il(Mr.l,pc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ze;ze.NAMES=B1;class n2 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const di=new F,Gi=new F,ah=new F,Wi=new F,ra=new F,sa=new F,xx=new F,oh=new F,lh=new F,ch=new F,uh=new It,dh=new It,hh=new It;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),Gi.subVectors(i,n),ah.subVectors(e,n);const a=di.dot(di),o=di.dot(Gi),l=di.dot(ah),c=Gi.dot(Gi),p=Gi.dot(ah),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*p)*d,_=(a*p-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return uh.setScalar(0),dh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,n),dh.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uh,s.x),a.addScaledVector(dh,s.y),a.addScaledVector(hh,s.z),a}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),Gi.subVectors(e,n),di.cross(Gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),di.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ra.subVectors(r,i),sa.subVectors(s,i),oh.subVectors(e,i);const l=ra.dot(oh),c=sa.dot(oh);if(l<=0&&c<=0)return n.copy(i);lh.subVectors(e,r);const p=ra.dot(lh),f=sa.dot(lh);if(p>=0&&f<=p)return n.copy(r);const d=l*f-p*c;if(d<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(ra,a);ch.subVectors(e,s);const m=ra.dot(ch),_=sa.dot(ch);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(sa,o);const x=p*_-m*f;if(x<=0&&f-p>=0&&m-_>=0)return xx.subVectors(s,r),o=(f-p)/(f-p+(m-_)),n.copy(r).addScaledVector(xx,o);const u=1/(x+S+d);return a=S*u,o=d*u,n.copy(i).addScaledVector(ra,a).addScaledVector(sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),gc.subVectors(this.max,No),aa.subVectors(e.a,No),oa.subVectors(e.b,No),la.subVectors(e.c,No),Er.subVectors(oa,aa),br.subVectors(la,oa),hs.subVectors(aa,la);let n=[0,-Er.z,Er.y,0,-br.z,br.y,0,-hs.z,hs.y,Er.z,0,-Er.x,br.z,0,-br.x,hs.z,0,-hs.x,-Er.y,Er.x,0,-br.y,br.x,0,-hs.y,hs.x,0];return!fh(n,aa,oa,la,gc)||(n=[1,0,0,0,1,0,0,0,1],!fh(n,aa,oa,la,gc))?!1:(xc.crossVectors(Er,br),n=[xc.x,xc.y,xc.z],fh(n,aa,oa,la,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,mc=new yo,aa=new F,oa=new F,la=new F,Er=new F,br=new F,hs=new F,No=new F,gc=new F,xc=new F,fs=new F;function fh(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){fs.fromArray(t,s);const o=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),l=e.dot(fs),c=n.dot(fs),p=i.dot(fs);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Bt=new F,_c=new Ie;let i2=0;class Si extends cs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_c.fromBufferAttribute(this,n),_c.applyMatrix3(e),this.setXY(n,_c.x,_c.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class z1 extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class j1 extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const r2=new yo,Do=new F,ph=new F;class zl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):r2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(ph)),this.expandByPoint(Do.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let s2=0;const Jn=new Ct,mh=new en,ca=new F,kn=new yo,Lo=new yo,Kt=new F;class wn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ET(e)?j1:z1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Lo.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(kn.min,Lo.min),kn.expandByPoint(Kt),Kt.addVectors(kn.max,Lo.max),kn.expandByPoint(Kt)):(kn.expandByPoint(Lo.min),kn.expandByPoint(Lo.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Kt.fromBufferAttribute(o,c),l&&(ca.fromBufferAttribute(e,c),Kt.add(ca)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new F,l[y]=new F;const c=new F,p=new F,f=new F,d=new Ie,m=new Ie,_=new Ie,S=new F,x=new F;function u(y,C,D){c.fromBufferAttribute(i,y),p.fromBufferAttribute(i,C),f.fromBufferAttribute(i,D),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,D),p.sub(c),f.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(S.copy(p).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),x.copy(f).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(P),o[y].add(S),o[C].add(S),o[D].add(S),l[y].add(x),l[C].add(x),l[D].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,C=g.length;y<C;++y){const D=g[y],P=D.start,k=D.count;for(let X=P,Y=P+k;X<Y;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new F,M=new F,T=new F,w=new F;function R(y){T.fromBufferAttribute(r,y),w.copy(T);const C=o[y];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(w,C);const P=M.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,P)}for(let y=0,C=g.length;y<C;++y){const D=g[y],P=D.start,k=D.count;for(let X=P,Y=P+k;X<Y;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,p=new F,f=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),S=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),o.add(p),l.add(p),c.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,f=o.normalized,d=new c.constructor(l.length*p);let m=0,_=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*p;for(let u=0;u<p;u++)d[_++]=c[m++]}return new Si(d,p,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,f=c.length;p<f;p++){const d=c[p],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];p.push(m.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],f=s[c];for(let d=0,m=f.length;d<m;d++)p.push(f[d].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Fp,this.updateRanges=[],this.version=0,this.uuid=or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new F;class Gu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Si(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let o2=0;class $s extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=or(),this.name="",this.type="Material",this.blending=ja,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Yf,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ix&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class H1 extends $s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const Io=new F,da=new F,ha=new F,fa=new Ie,Uo=new Ie,V1=new Ct,vc=new F,Fo=new F,yc=new F,_x=new Ie,gh=new Ie,vx=new Ie;class G1 extends en{constructor(e=new H1){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new wn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new a2(n,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new Gu(i,3,0,!1)),ua.setAttribute("uv",new Gu(i,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,n){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),da.setFromMatrixScale(this.matrixWorld),V1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ha.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&da.multiplyScalar(-ha.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Sc(vc.set(-.5,-.5,0),ha,a,da,r,s),Sc(Fo.set(.5,-.5,0),ha,a,da,r,s),Sc(yc.set(.5,.5,0),ha,a,da,r,s),_x.set(0,0),gh.set(1,0),vx.set(1,1);let o=e.ray.intersectTriangle(vc,Fo,yc,!1,Io);if(o===null&&(Sc(Fo.set(-.5,.5,0),ha,a,da,r,s),gh.set(0,1),o=e.ray.intersectTriangle(vc,yc,Fo,!1,Io),o===null))return;const l=e.ray.origin.distanceTo(Io);l<e.near||l>e.far||n.push({distance:l,point:Io.clone(),uv:ri.getInterpolation(Io,vc,Fo,yc,_x,gh,vx,new Ie),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sc(t,e,n,i,r,s){fa.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Uo.x=s*fa.x-r*fa.y,Uo.y=r*fa.x+s*fa.y):Uo.copy(fa),t.copy(e),t.x+=Uo.x,t.y+=Uo.y,t.applyMatrix4(V1)}const qi=new F,xh=new F,Mc=new F,wr=new F,_h=new F,Ec=new F,vh=new F;class sg{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,n),qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xh.copy(e).add(n).multiplyScalar(.5),Mc.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(xh);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Mc),o=wr.dot(this.direction),l=-wr.dot(Mc),c=wr.lengthSq(),p=Math.abs(1-a*a);let f,d,m,_;if(p>0)if(f=a*l-o,d=a*o-l,_=s*p,f>=0)if(d>=-_)if(d<=_){const S=1/p;f*=S,d*=S,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xh).addScaledVector(Mc,d),m}intersectSphere(e,n){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),p>=0?(s=(e.min.y-d.y)*p,a=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,a=(e.min.y-d.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,n,i,r,s){_h.subVectors(n,e),Ec.subVectors(i,e),vh.crossVectors(_h,Ec);let a=this.direction.dot(vh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wr.subVectors(this.origin,e);const l=o*this.direction.dot(Ec.crossVectors(wr,Ec));if(l<0)return null;const c=o*this.direction.dot(_h.cross(wr));if(c<0||l+c>a)return null;const p=-o*wr.dot(vh);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jl extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=v1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yx=new Ct,ps=new sg,bc=new zl,Sx=new F,wc=new F,Tc=new F,Ac=new F,yh=new F,Cc=new F,Mx=new F,Rc=new F;class Mn extends en{constructor(e=new wn,n=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],f=s[l];p!==0&&(yh.fromBufferAttribute(f,e),a?Cc.addScaledVector(yh,p):Cc.addScaledVector(yh.sub(n),p))}n.add(Cc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(bc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(bc,Sx)===null||ps.origin.distanceToSquared(Sx)>(e.far-e.near)**2))&&(yx.copy(s).invert(),ps.copy(e.ray).applyMatrix4(yx),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const x=d[_],u=a[x.materialIndex],g=Math.max(x.start,m.start),v=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,T=v;M<T;M+=3){const w=o.getX(M),R=o.getX(M+1),y=o.getX(M+2);r=Pc(this,u,e,i,c,p,f,w,R,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let x=_,u=S;x<u;x+=3){const g=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);r=Pc(this,a,e,i,c,p,f,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const x=d[_],u=a[x.materialIndex],g=Math.max(x.start,m.start),v=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,T=v;M<T;M+=3){const w=M,R=M+1,y=M+2;r=Pc(this,u,e,i,c,p,f,w,R,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let x=_,u=S;x<u;x+=3){const g=x,v=x+1,M=x+2;r=Pc(this,a,e,i,c,p,f,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function l2(t,e,n,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===is,o),l===null)return null;Rc.copy(o),Rc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Rc);return c<n.near||c>n.far?null:{distance:c,point:Rc.clone(),object:t}}function Pc(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wc),t.getVertexPosition(l,Tc),t.getVertexPosition(c,Ac);const p=l2(t,e,n,i,wc,Tc,Ac,Mx);if(p){const f=new F;ri.getBarycoord(Mx,wc,Tc,Ac,f),r&&(p.uv=ri.getInterpolatedAttribute(r,o,l,c,f,new Ie)),s&&(p.uv1=ri.getInterpolatedAttribute(s,o,l,c,f,new Ie)),a&&(p.normal=ri.getInterpolatedAttribute(a,o,l,c,f,new F),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};ri.getNormal(wc,Tc,Ac,d.normal),p.face=d,p.barycoord=f}return p}class c2 extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=nn,p=nn,f,d){super(null,a,o,l,c,p,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new F,u2=new F,d2=new Be;class Pr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sh.subVectors(i,n).cross(u2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Sh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||d2.getNormalMatrix(e),r=this.coplanarPoint(Sh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new zl,h2=new Ie(.5,.5),Nc=new F;class ag{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,a=new Pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],f=s[5],d=s[6],m=s[7],_=s[8],S=s[9],x=s[10],u=s[11],g=s[12],v=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,m-p,u-_,T-g).normalize(),r[1].setComponents(c+a,m+p,u+_,T+g).normalize(),r[2].setComponents(c+o,m+f,u+S,T+v).normalize(),r[3].setComponents(c-o,m-f,u-S,T-v).normalize(),i)r[4].setComponents(l,d,x,M).normalize(),r[5].setComponents(c-l,m-d,u-x,T-M).normalize();else if(r[4].setComponents(c-l,m-d,u-x,T-M).normalize(),n===Ui)r[5].setComponents(c+l,m+d,u+x,T+M).normalize();else if(n===Al)r[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const n=h2.distanceTo(e.center);return ms.radius=.7071067811865476+n,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nc.x=r.normal.x>0?e.max.x:e.min.x,Nc.y=r.normal.y>0?e.max.y:e.min.y,Nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class og extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new F,Xu=new F,Ex=new Ct,Oo=new sg,Dc=new zl,Mh=new F,bx=new F;class lg extends en{constructor(e=new wn,n=new og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wu.fromBufferAttribute(n,r-1),Xu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wu.distanceTo(Xu);e.setAttribute("lineDistance",new qt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(r),Dc.radius+=s,e.ray.intersectsSphere(Dc)===!1)return;Ex.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(Ex);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=i.index,d=i.attributes.position;if(p!==null){const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let S=m,x=_-1;S<x;S+=c){const u=p.getX(S),g=p.getX(S+1),v=Lc(this,e,Oo,l,u,g,S);v&&n.push(v)}if(this.isLineLoop){const S=p.getX(_-1),x=p.getX(m),u=Lc(this,e,Oo,l,S,x,_-1);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=m,x=_-1;S<x;S+=c){const u=Lc(this,e,Oo,l,S,S+1,S);u&&n.push(u)}if(this.isLineLoop){const S=Lc(this,e,Oo,l,_-1,m,_-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lc(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Wu.fromBufferAttribute(o,r),Xu.fromBufferAttribute(o,s),n.distanceSqToSegment(Wu,Xu,Mh,bx)>i)return;Mh.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Mh);if(!(c<e.near||c>e.far))return{distance:c,point:bx.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const wx=new F,Tx=new F;class f2 extends lg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)wx.fromBufferAttribute(n,r),Tx.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wx.distanceTo(Tx);e.setAttribute("lineDistance",new qt(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W1 extends pn{constructor(e=[],n=Gs,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p2 extends pn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends pn{constructor(e,n,i=zi,r,s,a,o=nn,l=nn,c,p=mr,f=1){if(p!==mr&&p!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class m2 extends fo{constructor(e,n=zi,i=Gs,r,s,a=nn,o=nn,l,c=mr){const p={width:e,height:e,depth:1},f=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class X1 extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hl extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(f,2));function _(S,x,u,g,v,M,T,w,R,y,C){const D=M/R,P=T/y,k=M/2,X=T/2,Y=w/2,I=R+1,G=y+1;let j=0,B=0;const q=new F;for(let ee=0;ee<G;ee++){const oe=ee*P-X;for(let fe=0;fe<I;fe++){const qe=fe*D-k;q[S]=qe*g,q[x]=oe*v,q[u]=Y,c.push(q.x,q.y,q.z),q[S]=0,q[x]=0,q[u]=w>0?1:-1,p.push(q.x,q.y,q.z),f.push(fe/R),f.push(1-ee/y),j+=1}}for(let ee=0;ee<y;ee++)for(let oe=0;oe<R;oe++){const fe=d+oe+I*ee,qe=d+oe+I*(ee+1),Qe=d+(oe+1)+I*(ee+1),Fe=d+(oe+1)+I*ee;l.push(fe,qe,Fe),l.push(qe,Qe,Fe),B+=6}o.addGroup(m,B,C),m+=B,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fd extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,f=e/o,d=n/l,m=[],_=[],S=[],x=[];for(let u=0;u<p;u++){const g=u*d-a;for(let v=0;v<c;v++){const M=v*f-s;_.push(M,-g,0),S.push(0,0,1),x.push(v/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),T=g+1+c*(u+1),w=g+1+c*u;m.push(v,M,w),m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(S,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const p=[],f=new F,d=new F,m=[],_=[],S=[],x=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let T=0;T<=n;T++){const w=T/n;f.x=-e*Math.cos(r+w*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+v*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),x.push(w+M,1-v),g.push(c++)}p.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=p[u][g+1],M=p[u][g],T=p[u+1][g],w=p[u+1][g+1];(u!==0||a>0)&&m.push(v,M,w),(u!==i-1||l<Math.PI)&&m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(S,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cg extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],p=[],f=[],d=new F,m=new F,_=new F;for(let S=0;S<=i;S++){const x=a+S/i*o;for(let u=0;u<=r;u++){const g=u/r*s;m.x=(e+n*Math.cos(x))*Math.cos(g),m.y=(e+n*Math.cos(x))*Math.sin(g),m.z=n*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),_.subVectors(m,d).normalize(),p.push(_.x,_.y,_.z),f.push(u/r),f.push(S/i)}}for(let S=1;S<=i;S++)for(let x=1;x<=r;x++){const u=(r+1)*S+x-1,g=(r+1)*(S-1)+x-1,v=(r+1)*(S-1)+x,M=(r+1)*S+x;l.push(u,g,M),l.push(g,v,M)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Ax(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ax(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function Ax(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function g2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function q1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const x2={clone:mo,merge:xn};var _2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_2,this.fragmentShader=v2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=g2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class y2 extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $1 extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S2 extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M2 extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ug extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Eh=new Ct,Cx=new F,Rx=new F;class Y1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ag,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Cx.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cx),Rx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rx),n.updateMatrixWorld(),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Al||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ic=new F,Uc=new rs,Ti=new F;class K1 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,Uc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ic,Uc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new F,Px=new Ie,Nx=new Ie;class Vn extends K1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,Px,Nx),n.subVectors(Nx,Px)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class E2 extends Y1{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0}}class b2 extends ug{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class dg extends K1{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class w2 extends Y1{constructor(){super(new dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T2 extends ug{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new w2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class A2 extends ug{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const pa=-90,ma=1;class C2 extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(pa,ma,e,n);r.layers=this.layers,this.add(r);const s=new Vn(pa,ma,e,n);s.layers=this.layers,this.add(s);const a=new Vn(pa,ma,e,n);a.layers=this.layers,this.add(a);const o=new Vn(pa,ma,e,n);o.layers=this.layers,this.add(o);const l=new Vn(pa,ma,e,n);l.layers=this.layers,this.add(l);const c=new Vn(pa,ma,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class R2 extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dx{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vg=class vg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};vg.prototype.isMatrix2=!0;let Lx=vg;class P2 extends f2{constructor(e=10,n=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let d=0,m=0,_=-o;d<=n;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=d===s?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const p=new wn;p.setAttribute("position",new qt(l,3)),p.setAttribute("color",new qt(c,3));const f=new og({vertexColors:!0,toneMapped:!1});super(p,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class N2 extends cs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ix(t,e,n,i){const r=D2(i);switch(n){case D1:return t*e;case I1:return t*e/r.components*r.byteLength;case Zm:return t*e/r.components*r.byteLength;case Ws:return t*e*2/r.components*r.byteLength;case Jm:return t*e*2/r.components*r.byteLength;case L1:return t*e*3/r.components*r.byteLength;case _i:return t*e*4/r.components*r.byteLength;case eg:return t*e*4/r.components*r.byteLength;case iu:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case su:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ap:case lp:return Math.max(t,16)*Math.max(e,8)/4;case sp:case op:return Math.max(t,8)*Math.max(e,8)/2;case cp:case up:case hp:case fp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dp:case ku:case pp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Pp:case Np:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dp:case Lp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bu:case Ip:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function D2(t){switch(t){case Wn:case C1:return{byteLength:1,components:1};case wl:case R1:case pr:return{byteLength:2,components:1};case Km:case Qm:return{byteLength:2,components:4};case zi:case Ym:case Ii:return{byteLength:4,components:1};case P1:case N1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$m}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$m);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q1(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function L2(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,p),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const p=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,p);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],S=f[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const S=f[m];t.bufferSubData(c,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var I2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U2=`#ifdef USE_ALPHAHASH
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
#endif`,F2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z2=`#ifdef USE_AOMAP
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
#endif`,j2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H2=`#ifdef USE_BATCHING
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
#endif`,V2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q2=`#ifdef USE_IRIDESCENCE
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
#endif`,$2=`#ifdef USE_BUMPMAP
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
#endif`,Y2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iA=`#define PI 3.141592653589793
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
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sA=`vec3 transformedNormal = objectNormal;
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
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uA="gl_FragColor = linearToOutputTexel( gl_FragColor );",dA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SA=`#ifdef USE_GRADIENTMAP
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
}`,MA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,TA=`#ifdef USE_ENVMAP
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
#endif`,AA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NA=`PhysicalMaterial material;
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
#endif`,DA=`uniform sampler2D dfgLUT;
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
}`,LA=`
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
#endif`,IA=`#if defined( RE_IndirectDiffuse )
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
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,OA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GA=`#if defined( USE_POINTS_UV )
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
#endif`,WA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
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
#endif`,QA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iC=`#ifdef USE_NORMALMAP
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
#endif`,rC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_C=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vC=`float getShadowMask() {
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
}`,yC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SC=`#ifdef USE_SKINNING
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
#endif`,MC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EC=`#ifdef USE_SKINNING
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
#endif`,bC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CC=`#ifdef USE_TRANSMISSION
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
#endif`,RC=`#ifdef USE_TRANSMISSION
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
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UC=`uniform sampler2D t2D;
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
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
}`,jC=`#if DEPTH_PACKING == 3200
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
}`,HC=`#define DISTANCE
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
}`,VC=`#define DISTANCE
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
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XC=`uniform float scale;
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
}`,qC=`uniform vec3 diffuse;
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
}`,$C=`#include <common>
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
}`,YC=`uniform vec3 diffuse;
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
}`,KC=`#define LAMBERT
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
}`,QC=`#define LAMBERT
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
}`,ZC=`#define MATCAP
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
}`,JC=`#define MATCAP
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
}`,e3=`#define NORMAL
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
}`,t3=`#define NORMAL
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
}`,n3=`#define PHONG
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
}`,i3=`#define PHONG
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
}`,r3=`#define STANDARD
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
}`,s3=`#define STANDARD
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
}`,a3=`#define TOON
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
}`,o3=`#define TOON
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
}`,l3=`uniform float size;
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,d3=`uniform vec3 color;
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
}`,h3=`uniform float rotation;
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
}`,f3=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:I2,alphahash_pars_fragment:U2,alphamap_fragment:F2,alphamap_pars_fragment:O2,alphatest_fragment:k2,alphatest_pars_fragment:B2,aomap_fragment:z2,aomap_pars_fragment:j2,batching_pars_vertex:H2,batching_vertex:V2,begin_vertex:G2,beginnormal_vertex:W2,bsdfs:X2,iridescence_fragment:q2,bumpmap_pars_fragment:$2,clipping_planes_fragment:Y2,clipping_planes_pars_fragment:K2,clipping_planes_pars_vertex:Q2,clipping_planes_vertex:Z2,color_fragment:J2,color_pars_fragment:eA,color_pars_vertex:tA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:sA,displacementmap_pars_vertex:aA,displacementmap_vertex:oA,emissivemap_fragment:lA,emissivemap_pars_fragment:cA,colorspace_fragment:uA,colorspace_pars_fragment:dA,envmap_fragment:hA,envmap_common_pars_fragment:fA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:TA,envmap_vertex:gA,fog_vertex:xA,fog_pars_vertex:_A,fog_fragment:vA,fog_pars_fragment:yA,gradientmap_pars_fragment:SA,lightmap_pars_fragment:MA,lights_lambert_fragment:EA,lights_lambert_pars_fragment:bA,lights_pars_begin:wA,lights_toon_fragment:AA,lights_toon_pars_fragment:CA,lights_phong_fragment:RA,lights_phong_pars_fragment:PA,lights_physical_fragment:NA,lights_physical_pars_fragment:DA,lights_fragment_begin:LA,lights_fragment_maps:IA,lights_fragment_end:UA,lightprobes_pars_fragment:FA,logdepthbuf_fragment:OA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:zA,map_fragment:jA,map_pars_fragment:HA,map_particle_fragment:VA,map_particle_pars_fragment:GA,metalnessmap_fragment:WA,metalnessmap_pars_fragment:XA,morphinstance_vertex:qA,morphcolor_vertex:$A,morphnormal_vertex:YA,morphtarget_pars_vertex:KA,morphtarget_vertex:QA,normal_fragment_begin:ZA,normal_fragment_maps:JA,normal_pars_fragment:eC,normal_pars_vertex:tC,normal_vertex:nC,normalmap_pars_fragment:iC,clearcoat_normal_fragment_begin:rC,clearcoat_normal_fragment_maps:sC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:oC,opaque_fragment:lC,packing:cC,premultiplied_alpha_fragment:uC,project_vertex:dC,dithering_fragment:hC,dithering_pars_fragment:fC,roughnessmap_fragment:pC,roughnessmap_pars_fragment:mC,shadowmap_pars_fragment:gC,shadowmap_pars_vertex:xC,shadowmap_vertex:_C,shadowmask_pars_fragment:vC,skinbase_vertex:yC,skinning_pars_vertex:SC,skinning_vertex:MC,skinnormal_vertex:EC,specularmap_fragment:bC,specularmap_pars_fragment:wC,tonemapping_fragment:TC,tonemapping_pars_fragment:AC,transmission_fragment:CC,transmission_pars_fragment:RC,uv_pars_fragment:PC,uv_pars_vertex:NC,uv_vertex:DC,worldpos_vertex:LC,background_vert:IC,background_frag:UC,backgroundCube_vert:FC,backgroundCube_frag:OC,cube_vert:kC,cube_frag:BC,depth_vert:zC,depth_frag:jC,distance_vert:HC,distance_frag:VC,equirect_vert:GC,equirect_frag:WC,linedashed_vert:XC,linedashed_frag:qC,meshbasic_vert:$C,meshbasic_frag:YC,meshlambert_vert:KC,meshlambert_frag:QC,meshmatcap_vert:ZC,meshmatcap_frag:JC,meshnormal_vert:e3,meshnormal_frag:t3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:r3,meshphysical_frag:s3,meshtoon_vert:a3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:d3,sprite_vert:h3,sprite_frag:f3},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Di={basic:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:xn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:xn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:xn([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:xn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:xn([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:xn([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:xn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:xn([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Di.physical={uniforms:xn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Fc={r:0,b:0,g:0},p3=new Ct,Z1=new Be;Z1.set(-1,0,0,0,1,0,0,0,1);function m3(t,e,n,i,r,s){const a=new ze(0);let o=r===!0?0:1,l,c,p=null,f=0,d=null;function m(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const M=g.backgroundBlurriness>0;v=e.get(v,M)}return v}function _(g){let v=!1;const M=m(g);M===null?x(a,o):M&&M.isColor&&(x(M,1),v=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,v){const M=m(v);M&&(M.isCubeTexture||M.mapping===hd)?(c===void 0&&(c=new Mn(new Hl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:mo(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z1),c.material.toneMapped=tt.getTransfer(M.colorSpace)!==lt,(p!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Mn(new fd(2,2),new ji({name:"BackgroundMaterial",uniforms:mo(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=tt.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,p=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,v){g.getRGB(Fc,q1(t)),n.buffers.color.setClear(Fc.r,Fc.g,Fc.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:_,addToRenderList:S,dispose:u}}function g3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,k,X,Y,I){let G=!1;const j=f(P,Y,X,k);s!==j&&(s=j,c(s.object)),G=m(P,Y,X,I),G&&_(P,Y,X,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(P,k,X,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function p(P){return t.deleteVertexArray(P)}function f(P,k,X,Y){const I=Y.wireframe===!0;let G=i[k.id];G===void 0&&(G={},i[k.id]=G);const j=P.isInstancedMesh===!0?P.id:0;let B=G[j];B===void 0&&(B={},G[j]=B);let q=B[X.id];q===void 0&&(q={},B[X.id]=q);let ee=q[I];return ee===void 0&&(ee=d(l()),q[I]=ee),ee}function d(P){const k=[],X=[],Y=[];for(let I=0;I<n;I++)k[I]=0,X[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function m(P,k,X,Y){const I=s.attributes,G=k.attributes;let j=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){const oe=I[q];let fe=G[q];if(fe===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;j++}return s.attributesNum!==j||s.index!==Y}function _(P,k,X,Y){const I={},G=k.attributes;let j=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){let oe=G[q];oe===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),I[q]=fe,j++}s.attributes=I,s.attributesNum=j,s.index=Y}function S(){const P=s.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function x(P){u(P,0)}function u(P,k){const X=s.newAttributes,Y=s.enabledAttributes,I=s.attributeDivisors;X[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),I[P]!==k&&(t.vertexAttribDivisor(P,k),I[P]=k)}function g(){const P=s.newAttributes,k=s.enabledAttributes;for(let X=0,Y=k.length;X<Y;X++)k[X]!==P[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function v(P,k,X,Y,I,G,j){j===!0?t.vertexAttribIPointer(P,k,X,I,G):t.vertexAttribPointer(P,k,X,Y,I,G)}function M(P,k,X,Y){S();const I=Y.attributes,G=X.getAttributes(),j=k.defaultAttributeValues;for(const B in G){const q=G[B];if(q.location>=0){let ee=I[B];if(ee===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const oe=ee.normalized,fe=ee.itemSize,qe=e.get(ee);if(qe===void 0)continue;const Qe=qe.buffer,Fe=qe.type,Q=qe.bytesPerElement,he=Fe===t.INT||Fe===t.UNSIGNED_INT||ee.gpuType===Ym;if(ee.isInterleavedBufferAttribute){const le=ee.data,Le=le.stride,ke=ee.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)u(q.location+Ue,le.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)x(q.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Ue=0;Ue<q.locationSize;Ue++)v(q.location+Ue,fe/q.locationSize,Fe,oe,Le*Q,(ke+fe/q.locationSize*Ue)*Q,he)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)u(q.location+le,ee.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<q.locationSize;le++)x(q.location+le);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let le=0;le<q.locationSize;le++)v(q.location+le,fe/q.locationSize,Fe,oe,fe*Q,fe/q.locationSize*le*Q,he)}}else if(j!==void 0){const oe=j[B];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(q.location,oe);break;case 3:t.vertexAttrib3fv(q.location,oe);break;case 4:t.vertexAttrib4fv(q.location,oe);break;default:t.vertexAttrib1fv(q.location,oe)}}}}g()}function T(){C();for(const P in i){const k=i[P];for(const X in k){const Y=k[X];for(const I in Y){const G=Y[I];for(const j in G)p(G[j].object),delete G[j];delete Y[I]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const X in k){const Y=k[X];for(const I in Y){const G=Y[I];for(const j in G)p(G[j].object),delete G[j];delete Y[I]}}delete i[P.id]}function R(P){for(const k in i){const X=i[k];for(const Y in X){const I=X[Y];if(I[P.id]===void 0)continue;const G=I[P.id];for(const j in G)p(G[j].object),delete G[j];delete I[P.id]}}}function y(P){for(const k in i){const X=i[k],Y=P.isInstancedMesh===!0?P.id:0,I=X[Y];if(I!==void 0){for(const G in I){const j=I[G];for(const B in j)p(j[B].object),delete j[B];delete I[G]}delete X[Y],Object.keys(X).length===0&&delete i[k]}}}function C(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:x,disableUnusedAttributes:g}}function x3(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let d=0;for(let m=0;m<p;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==_i&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ii&&!y)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ne("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,maxSamples:T,samples:w}}function v3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pr,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=p(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,S=f.clipIntersection,x=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!x)s?p(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=p(_,d,v,m);for(let T=0;T!==v;++T)M[T]=n[T];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(f,d,m,_){const S=f!==null?f.length:0;let x=null;if(S!==0){if(x=l.value,_!==!0||x===null){const u=m+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<u)&&(x=new Float32Array(u));for(let v=0,M=m;v!==S;++v,M+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}const Wr=4,Ux=[.125,.215,.35,.446,.526,.582],vs=20,y3=256,ko=new dg,Fx=new ze;let bh=null,wh=0,Th=0,Ah=!1;const S3=new F;class Ox{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=S3}=s;bh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,wh,Th),this._renderer.xr.enabled=Ah,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pr,format:_i,colorSpace:zu,depthBuffer:!1},r=kx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=M3(s)),this._blurMaterial=b3(s,e,n),this._ggxMaterial=E3(s,e,n)}return r}_compileMaterial(e){const n=new Mn(new wn,e);this._renderer.compile(n,ko)}_sceneToCubeUV(e,n,i,r,s){const l=new Vn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Fx),f.toneMapping=ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Hl,new jl({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,x=S.material;let u=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,u=!0):(x.color.copy(Fx),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[v]));const T=this._cubeSize;ga(r,M*T,v>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(S,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bx());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-p*p),d=0+c*1.25,m=f*d,{_lodMax:_}=this,S=this._sizeLods[i],x=3*S*(i>_-Wr?i-_+Wr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,ga(s,x,u,3*S,2*S),r.setRenderTarget(s),r.render(o,ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ga(e,x,u,3*S,2*S),r.setRenderTarget(e),r.render(o,ko)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const p=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vs-1),S=s/_,x=isFinite(s)?1+Math.floor(p*S):vs;x>vs&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vs}`);const u=[];let g=0;for(let R=0;R<vs;++R){const y=R/S,C=Math.exp(-y*y/2);u.push(C),R===0?g+=C:R<x&&(g+=2*C)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const M=this._sizeLods[r],T=3*M*(r>v-Wr?r-v+Wr:0),w=4*(this._cubeSize-M);ga(n,T,w,3*M,2*M),l.setRenderTarget(n),l.render(f,ko)}}function M3(t){const e=[],n=[],i=[];let r=t;const s=t-Wr+1+Ux.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Wr?l=Ux[a-t+Wr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,f=1+c,d=[p,p,f,p,f,f,p,p,f,f,p,f],m=6,_=6,S=3,x=2,u=1,g=new Float32Array(S*_*m),v=new Float32Array(x*_*m),M=new Float32Array(u*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,y=w>2?0:-1,C=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];g.set(C,S*_*w),v.set(d,x*_*w);const D=[w,w,w,w,w,w];M.set(D,u*_*w)}const T=new wn;T.setAttribute("position",new Si(g,S)),T.setAttribute("uv",new Si(v,x)),T.setAttribute("faceIndex",new Si(M,u)),i.push(new Mn(T,null)),r>Wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function kx(t,e,n){const i=new Bi(t,e,n);return i.texture.mapping=hd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function E3(t,e,n){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pd(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function b3(t,e,n){const i=new Float32Array(vs),r=new F(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pd(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Bx(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function zx(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}class J1 extends Bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hl(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:ar});s.uniforms.tEquirect.value=n;const a=new Mn(r,s),o=n.minFilter;return n.minFilter===bs&&(n.minFilter=fn),new C2(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function w3(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Kd||m===Qd)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new J1(_.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,_=m===Kd||m===Qd,S=m===Gs||m===ho;if(_||S){let x=n.get(d);const u=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Ox(t)),x=_?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return _&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new Ox(t)),x=_?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",p),x.texture):null}}}return d}function o(d,m){return m===Kd?d.mapping=Gs:m===Qd&&(d.mapping=ho),d}function l(d){let m=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&m++;return m===_}function c(d){const m=d.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(d){const m=d.target;m.removeEventListener("dispose",p);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function T3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Op("WebGLRenderer: "+i+" extension not supported."),r}}}function A3(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const g=m.array;S=m.version;for(let v=0,M=g.length;v<M;v+=3){const T=g[v+0],w=g[v+1],R=g[v+2];d.push(T,w,w,R,R,T)}}else{const g=_.array;S=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const T=v+0,w=v+1,R=v+2;d.push(T,w,w,R,R,T)}}const x=new(_.count>=65535?j1:z1)(d,1);x.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,x)}function p(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:p}}function C3(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,f*a,m),n.update(d,i,m))}function p(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let S=0;for(let x=0;x<m;x++)S+=d[x];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function R3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function P3(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=p!==void 0?p.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var m=D;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),x===!0&&(M=3);let T=o.attributes.position.count*M,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*f),y=new O1(R,T,w,f);y.type=Ii,y.needsUpdate=!0;const C=M*4;for(let P=0;P<f;P++){const k=u[P],X=g[P],Y=v[P],I=T*w*4*P;for(let G=0;G<k.count;G++){const j=G*C;_===!0&&(r.fromBufferAttribute(k,G),R[I+j+0]=r.x,R[I+j+1]=r.y,R[I+j+2]=r.z,R[I+j+3]=0),S===!0&&(r.fromBufferAttribute(X,G),R[I+j+4]=r.x,R[I+j+5]=r.y,R[I+j+6]=r.z,R[I+j+7]=0),x===!0&&(r.fromBufferAttribute(Y,G),R[I+j+8]=r.x,R[I+j+9]=r.y,R[I+j+10]=r.z,R[I+j+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new Ie(T,w)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function N3(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==p&&(e.update(d),s.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return d}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const D3={[y1]:"LINEAR_TONE_MAPPING",[S1]:"REINHARD_TONE_MAPPING",[M1]:"CINEON_TONE_MAPPING",[E1]:"ACES_FILMIC_TONE_MAPPING",[w1]:"AGX_TONE_MAPPING",[T1]:"NEUTRAL_TONE_MAPPING",[b1]:"CUSTOM_TONE_MAPPING"};function L3(t,e,n,i,r){const s=new Bi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new fo(e,n):void 0}),a=new Bi(e,n,{type:pr,depthBuffer:!1,stencilBuffer:!1}),o=new wn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new y2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(o,l),p=new dg(-1,1,1,-1,0,1);let f=null,d=null,m=!1,_,S=null,x=[],u=!1;this.setSize=function(g,v){s.setSize(g,v),a.setSize(g,v);for(let M=0;M<x.length;M++){const T=x[M];T.setSize&&T.setSize(g,v)}},this.setEffects=function(g){x=g,u=x.length>0&&x[0].isRenderPass===!0;const v=s.width,M=s.height;for(let T=0;T<x.length;T++){const w=x[T];w.setSize&&w.setSize(v,M)}},this.begin=function(g,v){if(m||g.toneMapping===ki&&x.length===0)return!1;if(S=v,v!==null){const M=v.width,T=v.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return u===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=ki,!0},this.hasRenderPass=function(){return u},this.end=function(g,v){g.toneMapping=_,m=!0;let M=s,T=a;for(let w=0;w<x.length;w++){const R=x[w];if(R.enabled!==!1&&(R.render(g,T,M,v),R.needsSwap!==!1)){const y=M;M=T,T=y}}if(f!==g.outputColorSpace||d!==g.toneMapping){f=g.outputColorSpace,d=g.toneMapping,l.defines={},tt.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const w=D3[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(S),g.render(c,p),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const eS=new pn,kp=new fo(1,1),tS=new O1,nS=new $T,iS=new W1,jx=[],Hx=[],Vx=new Float32Array(16),Gx=new Float32Array(9),Wx=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jx[r];if(s===void 0&&(s=new Float32Array(r),jx[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function md(t,e){let n=Hx[e];n===void 0&&(n=new Int32Array(e),Hx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function I3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function U3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function F3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function O3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function k3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;Wx.set(i),t.uniformMatrix2fv(this.addr,!1,Wx),Yt(n,i)}}function B3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;Gx.set(i),t.uniformMatrix3fv(this.addr,!1,Gx),Yt(n,i)}}function z3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;Vx.set(i),t.uniformMatrix4fv(this.addr,!1,Vx),Yt(n,i)}}function j3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function H3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function V3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function G3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function W3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function Y3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kp.compareFunction=n.isReversedDepthBuffer()?ng:tg,s=kp):s=eS,n.setTexture2D(e||s,r)}function K3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nS,r)}function Q3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iS,r)}function Z3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tS,r)}function J3(t){switch(t){case 5126:return I3;case 35664:return U3;case 35665:return F3;case 35666:return O3;case 35674:return k3;case 35675:return B3;case 35676:return z3;case 5124:case 35670:return j3;case 35667:case 35671:return H3;case 35668:case 35672:return V3;case 35669:case 35673:return G3;case 5125:return W3;case 36294:return X3;case 36295:return q3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return Z3}}function eR(t,e){t.uniform1fv(this.addr,e)}function tR(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function nR(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function iR(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function rR(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sR(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aR(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oR(t,e){t.uniform1iv(this.addr,e)}function lR(t,e){t.uniform2iv(this.addr,e)}function cR(t,e){t.uniform3iv(this.addr,e)}function uR(t,e){t.uniform4iv(this.addr,e)}function dR(t,e){t.uniform1uiv(this.addr,e)}function hR(t,e){t.uniform2uiv(this.addr,e)}function fR(t,e){t.uniform3uiv(this.addr,e)}function pR(t,e){t.uniform4uiv(this.addr,e)}function mR(t,e,n){const i=this.cache,r=e.length,s=md(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=kp:a=eS;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function gR(t,e,n){const i=this.cache,r=e.length,s=md(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||nS,s[a])}function xR(t,e,n){const i=this.cache,r=e.length,s=md(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||iS,s[a])}function _R(t,e,n){const i=this.cache,r=e.length,s=md(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||tS,s[a])}function vR(t){switch(t){case 5126:return eR;case 35664:return tR;case 35665:return nR;case 35666:return iR;case 35674:return rR;case 35675:return sR;case 35676:return aR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return cR;case 35669:case 35673:return uR;case 5125:return dR;case 36294:return hR;case 36295:return fR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return _R}}class yR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=J3(n.type)}}class SR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vR(n.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function Xx(t,e){t.seq.push(e),t.map[e.id]=e}function ER(t,e,n){const i=t.name,r=i.length;for(Ch.lastIndex=0;;){const s=Ch.exec(i),a=Ch.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xx(n,c===void 0?new yR(o,t,e):new SR(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new MR(o),Xx(n,f)),n=f}}}class ou{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);ER(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function qx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bR=37297;let wR=0;function TR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const $x=new Be;function AR(t){tt._getMatrix($x,tt.workingColorSpace,t);const e=`mat3( ${$x.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case ju:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+TR(t.getShaderSource(e),o)}else return s}function CR(t,e){const n=AR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const RR={[y1]:"Linear",[S1]:"Reinhard",[M1]:"Cineon",[E1]:"ACESFilmic",[w1]:"AgX",[T1]:"Neutral",[b1]:"Custom"};function PR(t,e){const n=RR[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oc=new F;function NR(){tt.getLuminanceCoefficients(Oc);const t=Oc.x.toFixed(4),e=Oc.y.toFixed(4),n=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function LR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xo(t){return t!==""}function Kx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(t){return t.replace(UR,OR)}const FR=new Map;function OR(t,e){let n=We[e];if(n===void 0){const i=FR.get(e);if(i!==void 0)n=We[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bp(n)}const kR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zx(t){return t.replace(kR,BR)}function BR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jx(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const zR={[nu]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function jR(t){return zR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HR={[Gs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[hd]:"ENVMAP_TYPE_CUBE_UV"};function VR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":HR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const GR={[ho]:"ENVMAP_MODE_REFRACTION"};function WR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":GR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XR={[v1]:"ENVMAP_BLENDING_MULTIPLY",[hT]:"ENVMAP_BLENDING_MIX",[fT]:"ENVMAP_BLENDING_ADD"};function qR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":XR[t.combine]||"ENVMAP_BLENDING_NONE"}function $R(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function YR(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=jR(n),c=VR(n),p=WR(n),f=qR(n),d=$R(n),m=DR(n),_=LR(s),S=r.createProgram();let x,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),u.length>0&&(u+=`
`)):(x=[Jx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),u=[Jx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?We.tonemapping_pars_fragment:"",n.toneMapping!==ki?PR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,CR("linearToOutputTexel",n.outputColorSpace),NR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),a=Bp(a),a=Kx(a,n),a=Qx(a,n),o=Bp(o),o=Kx(o,n),o=Qx(o,n),a=Zx(a),o=Zx(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+x+a,M=g+u+o,T=qx(r,r.VERTEX_SHADER,v),w=qx(r,r.FRAGMENT_SHADER,M);r.attachShader(S,T),r.attachShader(S,w),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(P){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(S)||"",X=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(w)||"",I=k.trim(),G=X.trim(),j=Y.trim();let B=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,T,w);else{const ee=Yx(r,T,"vertex"),oe=Yx(r,w,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+ee+`
`+oe)}else I!==""?Ne("WebGLProgram: Program Info Log:",I):(G===""||j==="")&&(q=!1);q&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:G,prefix:x},fragmentShader:{log:j,prefix:u}})}r.deleteShader(T),r.deleteShader(w),y=new ou(r,S),C=IR(r,S)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,bR)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=w,this}let KR=0;class QR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZR(e),n.set(e,i)),i}}class ZR{constructor(e){this.id=KR++,this.code=e,this.usedTimes=0}}function JR(t){return t===Ws||t===ku||t===Bu}function eP(t,e,n,i,r,s){const a=new k1,o=new QR,l=new Set,c=[],p=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,C,D,P,k,X){const Y=P.fog,I=k.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||G,j),q=B&&B.mapping===hd?B.image.height:null,ee=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=oe!==void 0?oe.length:0;let qe=0;I.morphAttributes.position!==void 0&&(qe=1),I.morphAttributes.normal!==void 0&&(qe=2),I.morphAttributes.color!==void 0&&(qe=3);let Qe,Fe,Q,he;if(ee){const je=Di[ee];Qe=je.vertexShader,Fe=je.fragmentShader}else Qe=y.vertexShader,Fe=y.fragmentShader,o.update(y),Q=o.getVertexShaderID(y),he=o.getFragmentShaderID(y);const le=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),ke=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,bt=!!y.map,Ze=!!y.matcap,dt=!!B,yt=!!y.aoMap,Ye=!!y.lightMap,jt=!!y.bumpMap,wt=!!y.normalMap,Un=!!y.displacementMap,U=!!y.emissiveMap,Ht=!!y.metalnessMap,Je=!!y.roughnessMap,xt=y.anisotropy>0,pe=y.clearcoat>0,Pt=y.dispersion>0,A=y.iridescence>0,E=y.sheen>0,z=y.transmission>0,Z=xt&&!!y.anisotropyMap,ne=pe&&!!y.clearcoatMap,re=pe&&!!y.clearcoatNormalMap,de=pe&&!!y.clearcoatRoughnessMap,$=A&&!!y.iridescenceMap,J=A&&!!y.iridescenceThicknessMap,ve=E&&!!y.sheenColorMap,Me=E&&!!y.sheenRoughnessMap,ce=!!y.specularMap,se=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ve=z&&!!y.transmissionMap,st=z&&!!y.thicknessMap,L=!!y.gradientMap,ae=!!y.alphaMap,K=y.alphaTest>0,ye=!!y.alphaHash,ue=!!y.extensions;let te=ki;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const Ae={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:Ze,envMap:dt,envMapMode:dt&&B.mapping,envMapCubeUVHeight:q,aoMap:yt,lightMap:Ye,bumpMap:jt,normalMap:wt,displacementMap:Un,emissiveMap:U,normalMapObjectSpace:wt&&y.normalMapType===gT,normalMapTangentSpace:wt&&y.normalMapType===Up,packedNormalMap:wt&&y.normalMapType===Up&&JR(y.normalMap.format),metalnessMap:Ht,roughnessMap:Je,anisotropy:xt,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:Pt,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:J,sheen:E,sheenColorMap:ve,sheenRoughnessMap:Me,specularMap:ce,specularColorMap:se,specularIntensityMap:Oe,transmission:z,transmissionMap:Ve,thicknessMap:st,gradientMap:L,opaque:y.transparent===!1&&y.blending===ja&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:ye,combine:y.combine,mapUv:bt&&_(y.map.channel),aoMapUv:yt&&_(y.aoMap.channel),lightMapUv:Ye&&_(y.lightMap.channel),bumpMapUv:jt&&_(y.bumpMap.channel),normalMapUv:wt&&_(y.normalMap.channel),displacementMapUv:Un&&_(y.displacementMap.channel),emissiveMapUv:U&&_(y.emissiveMap.channel),metalnessMapUv:Ht&&_(y.metalnessMap.channel),roughnessMapUv:Je&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(y.sheenRoughnessMap.channel),specularMapUv:ce&&_(y.specularMap.channel),specularColorMapUv:se&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:Ve&&_(y.transmissionMap.channel),thicknessMapUv:st&&_(y.thicknessMap.channel),alphaMapUv:ae&&_(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(wt||xt),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(bt||ae),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:qe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tr,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ue&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function x(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)C.push(D),C.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(u(C,y),g(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function u(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function g(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function v(y){const C=m[y.type];let D;if(C){const P=Di[C];D=x2.clone(P.uniforms)}else D=y.uniforms;return D}function M(y,C){let D=p.get(C);return D!==void 0?++D.usedTimes:(D=new YR(t,C,y,r),c.push(D),p.set(C,D)),D}function T(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),p.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function tP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function nP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function e_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function t_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,S,x,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:x,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=_,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=x,g.group=u),e++,g}function l(d,m,_,S,x,u){const g=o(d,m,_,S,x,u);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function c(d,m,_,S,x,u){const g=o(d,m,_,S,x,u);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function p(d,m){n.length>1&&n.sort(d||nP),i.length>1&&i.sort(m||e_),r.length>1&&r.sort(m||e_)}function f(){for(let d=e,m=t.length;d<m;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:p}}function iP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new t_,t.set(i,[a])):r>=s.length?(a=new t_,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function rP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new ze};break;case"SpotLight":n={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function sP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aP=0;function oP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lP(t){const e=new rP,n=sP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Ct,a=new Ct;function o(c){let p=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,_=0,S=0,x=0,u=0,g=0,v=0,M=0,T=0,w=0,R=0;c.sort(oP);for(let C=0,D=c.length;C<D;C++){const P=c[C],k=P.color,X=P.intensity,Y=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ws?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=k.r*X,f+=k.g*X,d+=k.b*X;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],X);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,B=n.get(P);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(X),G.distance=Y,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[S]=G;const j=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[S]=j.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[S]=B,i.spotShadowMap[S]=I,M++}S++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(k).multiplyScalar(X),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=G,x++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const j=P.shadow,B=n.get(P);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(X),G.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[u]=G,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==S||y.rectAreaLength!==x||y.hemiLength!==u||y.numDirectionalShadows!==g||y.numPointShadows!==v||y.numSpotShadows!==M||y.numSpotMaps!==T||y.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=x,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,y.directionalLength=m,y.pointLength=_,y.spotLength=S,y.rectAreaLength=x,y.hemiLength=u,y.numDirectionalShadows=g,y.numPointShadows=v,y.numSpotShadows=M,y.numSpotMaps=T,y.numLightProbes=R,i.version=aP++)}function l(c,p){let f=0,d=0,m=0,_=0,S=0;const x=p.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(v.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(v.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(x),S++}}}return{setup:o,setupView:l,state:i}}function n_(t){const e=new lP(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function p(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new n_(t),e.set(r,[o])):s>=a.length?(o=new n_(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const uP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dP=`uniform sampler2D shadow_pass;
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
}`,hP=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],fP=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],i_=new Ct,Bo=new F,Rh=new F;function pP(t,e,n){let i=new ag;const r=new Ie,s=new Ie,a=new It,o=new S2,l=new M2,c={},p=n.maxTextureSize,f={[is]:In,[In]:is,[tr]:tr},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:uP,fragmentShader:dP}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mn(_,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let u=this.type;this.render=function(w,R,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===_1&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nu);const C=t.getRenderTarget(),D=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ar),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=u!==this.type;X&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=w.length;Y<I;Y++){const G=w[Y],j=G.shadow;if(j===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const B=j.getFrameExtents();r.multiply(B),s.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/B.x),r.x=s.x*B.x,j.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/B.y),r.y=s.y*B.y,j.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=q,j.map===null||X===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Wo){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Bi(r.x,r.y,{format:Ws,type:pr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),j.map.texture.name=G.name+".shadowMap",j.map.depthTexture=new fo(r.x,r.y,Ii),j.map.depthTexture.name=G.name+".shadowMapDepth",j.map.depthTexture.format=mr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=nn,j.map.depthTexture.magFilter=nn}else G.isPointLight?(j.map=new J1(r.x),j.map.depthTexture=new m2(r.x,zi)):(j.map=new Bi(r.x,r.y),j.map.depthTexture=new fo(r.x,r.y,zi)),j.map.depthTexture.name=G.name+".shadowMap",j.map.depthTexture.format=mr,this.type===nu?(j.map.depthTexture.compareFunction=q?ng:tg,j.map.depthTexture.minFilter=fn,j.map.depthTexture.magFilter=fn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=nn,j.map.depthTexture.magFilter=nn);j.camera.updateProjectionMatrix()}const ee=j.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ee;oe++){if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(j.map),t.clear());const fe=j.getViewport(oe);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),k.viewport(a)}if(G.isPointLight){const fe=j.camera,qe=j.matrix,Qe=G.distance||fe.far;Qe!==fe.far&&(fe.far=Qe,fe.updateProjectionMatrix()),Bo.setFromMatrixPosition(G.matrixWorld),fe.position.copy(Bo),Rh.copy(fe.position),Rh.add(hP[oe]),fe.up.copy(fP[oe]),fe.lookAt(Rh),fe.updateMatrixWorld(),qe.makeTranslation(-Bo.x,-Bo.y,-Bo.z),i_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(i_,fe.coordinateSystem,fe.reversedDepth)}else j.updateMatrices(G);i=j.getFrustum(),M(R,y,j.camera,G,this.type)}j.isPointLightShadow!==!0&&this.type===Wo&&g(j,y),j.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(C,D,P)};function g(w,R){const y=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bi(r.x,r.y,{format:Ws,type:pr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,y,d,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,y,m,S,null)}function v(w,R,y,C){let D=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)D=P;else if(D=y.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=D.uuid,X=R.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let I=Y[X];I===void 0&&(I=D.clone(),Y[X]=I,R.addEventListener("dispose",T)),D=I}if(D.visible=R.visible,D.wireframe=R.wireframe,C===Wo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:f[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=t.properties.get(D);k.light=y}return D}function M(w,R,y,C,D){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Wo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const X=e.update(w),Y=w.material;if(Array.isArray(Y)){const I=X.groups;for(let G=0,j=I.length;G<j;G++){const B=I[G],q=Y[B.materialIndex];if(q&&q.visible){const ee=v(w,q,C,D);w.onBeforeShadow(t,w,R,y,X,ee,B),t.renderBufferDirect(y,null,X,ee,w,B),w.onAfterShadow(t,w,R,y,X,ee,B)}}}else if(Y.visible){const I=v(w,Y,C,D);w.onBeforeShadow(t,w,R,y,X,I,null),t.renderBufferDirect(y,null,X,I,w,null),w.onAfterShadow(t,w,R,y,X,I,null)}}const k=w.children;for(let X=0,Y=k.length;X<Y;X++)M(k[X],R,y,C,D)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const C=c[y],D=w.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function mP(t,e){function n(){let L=!1;const ae=new It;let K=null;const ye=new It(0,0,0,0);return{setMask:function(ue){K!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){L=ue},setClear:function(ue,te,Ae,je,Ut){Ut===!0&&(ue*=je,te*=je,Ae*=je),ae.set(ue,te,Ae,je),ye.equals(ae)===!1&&(t.clearColor(ue,te,Ae,je),ye.copy(ae))},reset:function(){L=!1,K=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,K=null,ye=null,ue=null;return{setReversed:function(te){if(ae!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return ae},setTest:function(te){te?le(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(te){K!==te&&!L&&(t.depthMask(te),K=te)},setFunc:function(te){if(ae&&(te=TT[te]),ye!==te){switch(te){case Kf:t.depthFunc(t.NEVER);break;case Qf:t.depthFunc(t.ALWAYS);break;case Zf:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case Jf:t.depthFunc(t.EQUAL);break;case ep:t.depthFunc(t.GEQUAL);break;case tp:t.depthFunc(t.GREATER);break;case np:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=te}},setLocked:function(te){L=te},setClear:function(te){ue!==te&&(ue=te,ae&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,K=null,ye=null,ue=null,ae=!1}}}function r(){let L=!1,ae=null,K=null,ye=null,ue=null,te=null,Ae=null,je=null,Ut=null;return{setTest:function(ht){L||(ht?le(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ht){ae!==ht&&!L&&(t.stencilMask(ht),ae=ht)},setFunc:function(ht,Hi,Ei){(K!==ht||ye!==Hi||ue!==Ei)&&(t.stencilFunc(ht,Hi,Ei),K=ht,ye=Hi,ue=Ei)},setOp:function(ht,Hi,Ei){(te!==ht||Ae!==Hi||je!==Ei)&&(t.stencilOp(ht,Hi,Ei),te=ht,Ae=Hi,je=Ei)},setLocked:function(ht){L=ht},setClear:function(ht){Ut!==ht&&(t.clearStencil(ht),Ut=ht)},reset:function(){L=!1,ae=null,K=null,ye=null,ue=null,te=null,Ae=null,je=null,Ut=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},f={},d={},m=new WeakMap,_=[],S=null,x=!1,u=null,g=null,v=null,M=null,T=null,w=null,R=null,y=new ze(0,0,0),C=0,D=!1,P=null,k=null,X=null,Y=null,I=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=B>=2);let ee=null,oe={};const fe=t.getParameter(t.SCISSOR_BOX),qe=t.getParameter(t.VIEWPORT),Qe=new It().fromArray(fe),Fe=new It().fromArray(qe);function Q(L,ae,K,ye){const ue=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<K;Ae++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ae+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return te}const he={};he[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(uo),jt(!1),wt(J0),le(t.CULL_FACE),yt(ar);function le(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Le(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function ke(L,ae){return d[L]!==ae?(t.bindFramebuffer(L,ae),d[L]=ae,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ue(L,ae){let K=_,ye=!1;if(L){K=m.get(ae),K===void 0&&(K=[],m.set(ae,K));const ue=L.textures;if(K.length!==ue.length||K[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ae=ue.length;te<Ae;te++)K[te]=t.COLOR_ATTACHMENT0+te;K.length=ue.length,ye=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ye=!0);ye&&t.drawBuffers(K)}function bt(L){return S!==L?(t.useProgram(L),S=L,!0):!1}const Ze={[_s]:t.FUNC_ADD,[Yw]:t.FUNC_SUBTRACT,[Kw]:t.FUNC_REVERSE_SUBTRACT};Ze[Qw]=t.MIN,Ze[Zw]=t.MAX;const dt={[Jw]:t.ZERO,[eT]:t.ONE,[tT]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[oT]:t.SRC_ALPHA_SATURATE,[sT]:t.DST_COLOR,[iT]:t.DST_ALPHA,[nT]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[aT]:t.ONE_MINUS_DST_COLOR,[rT]:t.ONE_MINUS_DST_ALPHA,[lT]:t.CONSTANT_COLOR,[cT]:t.ONE_MINUS_CONSTANT_COLOR,[uT]:t.CONSTANT_ALPHA,[dT]:t.ONE_MINUS_CONSTANT_ALPHA};function yt(L,ae,K,ye,ue,te,Ae,je,Ut,ht){if(L===ar){x===!0&&(Le(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),L!==$w){if(L!==u||ht!==D){if((g!==_s||T!==_s)&&(t.blendEquation(t.FUNC_ADD),g=_s,T=_s),ht)switch(L){case ja:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ex:t.blendFunc(t.ONE,t.ONE);break;case tx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",L);break}else switch(L){case ja:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ex:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tx:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",L);break}v=null,M=null,w=null,R=null,y.set(0,0,0),C=0,u=L,D=ht}return}ue=ue||ae,te=te||K,Ae=Ae||ye,(ae!==g||ue!==T)&&(t.blendEquationSeparate(Ze[ae],Ze[ue]),g=ae,T=ue),(K!==v||ye!==M||te!==w||Ae!==R)&&(t.blendFuncSeparate(dt[K],dt[ye],dt[te],dt[Ae]),v=K,M=ye,w=te,R=Ae),(je.equals(y)===!1||Ut!==C)&&(t.blendColor(je.r,je.g,je.b,Ut),y.copy(je),C=Ut),u=L,D=!1}function Ye(L,ae){L.side===tr?Le(t.CULL_FACE):le(t.CULL_FACE);let K=L.side===In;ae&&(K=!K),jt(K),L.blending===ja&&L.transparent===!1?yt(ar):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function jt(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function wt(L){L!==Xw?(le(t.CULL_FACE),L!==k&&(L===J0?t.cullFace(t.BACK):L===qw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),k=L}function Un(L){L!==X&&(j&&t.lineWidth(L),X=L)}function U(L,ae,K){L?(le(t.POLYGON_OFFSET_FILL),(Y!==ae||I!==K)&&(Y=ae,I=K,a.getReversed()&&(ae=-ae),t.polygonOffset(ae,K))):Le(t.POLYGON_OFFSET_FILL)}function Ht(L){L?le(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Je(L){L===void 0&&(L=t.TEXTURE0+G-1),ee!==L&&(t.activeTexture(L),ee=L)}function xt(L,ae,K){K===void 0&&(ee===null?K=t.TEXTURE0+G-1:K=ee);let ye=oe[K];ye===void 0&&(ye={type:void 0,texture:void 0},oe[K]=ye),(ye.type!==L||ye.texture!==ae)&&(ee!==K&&(t.activeTexture(K),ee=K),t.bindTexture(L,ae||he[L]),ye.type=L,ye.texture=ae)}function pe(){const L=oe[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Pt(){try{t.compressedTexImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function E(){try{t.texSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function z(){try{t.texSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function $(){try{t.texImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function ve(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function Me(L,ae){f[L]!==ae&&(t.pixelStorei(L,ae),f[L]=ae)}function ce(L){Qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function se(L){Fe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function Oe(L,ae){let K=c.get(ae);K===void 0&&(K=new WeakMap,c.set(ae,K));let ye=K.get(L);ye===void 0&&(ye=t.getUniformBlockIndex(ae,L.name),K.set(L,ye))}function Ve(L,ae){const ye=c.get(ae).get(L);l.get(ae)!==ye&&(t.uniformBlockBinding(ae,ye,L.__bindingPointIndex),l.set(ae,ye))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},f={},ee=null,oe={},d={},m=new WeakMap,_=[],S=null,x=!1,u=null,g=null,v=null,M=null,T=null,w=null,R=null,y=new ze(0,0,0),C=0,D=!1,P=null,k=null,X=null,Y=null,I=null,Qe.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Le,bindFramebuffer:ke,drawBuffers:Ue,useProgram:bt,setBlending:yt,setMaterial:Ye,setFlipSided:jt,setCullFace:wt,setLineWidth:Un,setPolygonOffset:U,setScissorTest:Ht,activeTexture:Je,bindTexture:xt,unbindTexture:pe,compressedTexImage2D:Pt,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Me,getParameter:ve,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:re,texStorage3D:de,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:ce,viewport:se,reset:st}}function gP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,p=new WeakMap,f=new Set;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,E){return _?new OffscreenCanvas(A,E):Hu("canvas")}function x(A,E,z){let Z=1;const ne=Pt(A);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(Z*ne.width),de=Math.floor(Z*ne.height);d===void 0&&(d=S(re,de));const $=E?S(re,de):d;return $.width=re,$.height=de,$.getContext("2d").drawImage(A,0,0,re,de),Ne("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+de+")."),$}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function u(A){return A.generateMipmaps}function g(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,E,z,Z,ne,re=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;Z&&(de=e.get("EXT_texture_norm16"),de||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===t.RED&&(z===t.FLOAT&&($=t.R32F),z===t.HALF_FLOAT&&($=t.R16F),z===t.UNSIGNED_BYTE&&($=t.R8),z===t.UNSIGNED_SHORT&&de&&($=de.R16_EXT),z===t.SHORT&&de&&($=de.R16_SNORM_EXT)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.R8UI),z===t.UNSIGNED_SHORT&&($=t.R16UI),z===t.UNSIGNED_INT&&($=t.R32UI),z===t.BYTE&&($=t.R8I),z===t.SHORT&&($=t.R16I),z===t.INT&&($=t.R32I)),E===t.RG&&(z===t.FLOAT&&($=t.RG32F),z===t.HALF_FLOAT&&($=t.RG16F),z===t.UNSIGNED_BYTE&&($=t.RG8),z===t.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),z===t.SHORT&&de&&($=de.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RG8UI),z===t.UNSIGNED_SHORT&&($=t.RG16UI),z===t.UNSIGNED_INT&&($=t.RG32UI),z===t.BYTE&&($=t.RG8I),z===t.SHORT&&($=t.RG16I),z===t.INT&&($=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGB8UI),z===t.UNSIGNED_SHORT&&($=t.RGB16UI),z===t.UNSIGNED_INT&&($=t.RGB32UI),z===t.BYTE&&($=t.RGB8I),z===t.SHORT&&($=t.RGB16I),z===t.INT&&($=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGBA8UI),z===t.UNSIGNED_SHORT&&($=t.RGBA16UI),z===t.UNSIGNED_INT&&($=t.RGBA32UI),z===t.BYTE&&($=t.RGBA8I),z===t.SHORT&&($=t.RGBA16I),z===t.INT&&($=t.RGBA32I)),E===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),z===t.SHORT&&de&&($=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),E===t.RGBA){const J=re?ju:tt.getTransfer(ne);z===t.FLOAT&&($=t.RGBA32F),z===t.HALF_FLOAT&&($=t.RGBA16F),z===t.UNSIGNED_BYTE&&($=J===lt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),z===t.SHORT&&de&&($=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(A,E){let z;return A?E===null||E===zi||E===Tl?z=t.DEPTH24_STENCIL8:E===Ii?z=t.DEPTH32F_STENCIL8:E===wl&&(z=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===Tl?z=t.DEPTH_COMPONENT24:E===Ii?z=t.DEPTH_COMPONENT32F:E===wl&&(z=t.DEPTH_COMPONENT16),z}function w(A,E){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function R(A){const E=A.target;E.removeEventListener("dispose",R),C(E),E.isVideoTexture&&p.delete(E),E.isHTMLTexture&&f.delete(E)}function y(A){const E=A.target;E.removeEventListener("dispose",y),P(E)}function C(A){const E=i.get(A);if(E.__webglInit===void 0)return;const z=A.source,Z=m.get(z);if(Z){const ne=Z[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(A),Object.keys(Z).length===0&&m.delete(z)}i.remove(A)}function D(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const z=A.source,Z=m.get(z);delete Z[E.__cacheKey],a.memory.textures--}function P(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ne=0;ne<E.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=A.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const re=i.get(z[Z]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(A)}let k=0;function X(){k=0}function Y(){return k}function I(A){k=A}function G(){const A=k;return A>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),k+=1,A}function j(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){const z=i.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const Z=A.image;if(Z===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(z,A,E);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function q(A,E){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Le(z,A,E);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function ee(A,E){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Le(z,A,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function oe(A,E){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){ke(z,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const fe={[ip]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[rp]:t.MIRRORED_REPEAT},qe={[nn]:t.NEAREST,[pT]:t.NEAREST_MIPMAP_NEAREST,[dc]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[Zd]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},Qe={[xT]:t.NEVER,[MT]:t.ALWAYS,[_T]:t.LESS,[tg]:t.LEQUAL,[vT]:t.EQUAL,[ng]:t.GEQUAL,[yT]:t.GREATER,[ST]:t.NOTEQUAL};function Fe(A,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===Zd||E.magFilter===dc||E.magFilter===bs||E.minFilter===fn||E.minFilter===Zd||E.minFilter===dc||E.minFilter===bs)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,fe[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,fe[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,fe[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,qe[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,qe[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Qe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==dc&&E.minFilter!==bs||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Q(A,E){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));const Z=E.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const re=j(E);if(re!==A.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[re].usedTimes++;const de=ne[A.__cacheKey];de!==void 0&&(ne[A.__cacheKey].usedTimes--,de.usedTimes===0&&D(E)),A.__cacheKey=re,A.__webglTexture=ne[re].texture}return z}function he(A,E,z){return Math.floor(Math.floor(A/z)/E)}function le(A,E,z,Z){const re=A.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,Z,E.data);else{re.sort((Me,ce)=>Me.start-ce.start);let de=0;for(let Me=1;Me<re.length;Me++){const ce=re[de],se=re[Me],Oe=ce.start+ce.count,Ve=he(se.start,E.width,4),st=he(ce.start,E.width,4);se.start<=Oe+1&&Ve===st&&he(se.start+se.count-1,E.width,4)===Ve?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++de,re[de]=se)}re.length=de+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Me=0,ce=re.length;Me<ce;Me++){const se=re[Me],Oe=Math.floor(se.start/4),Ve=Math.ceil(se.count/4),st=Oe%E.width,L=Math.floor(Oe/E.width),ae=Ve,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,st),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,st,L,ae,K,z,Z,E.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Le(A,E,z){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=Q(A,E),re=E.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+z);const de=i.get(re);if(re.version!==de.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const K=tt.getPrimaries(tt.workingColorSpace),ye=E.colorSpace===Lr?null:tt.getPrimaries(E.colorSpace),ue=E.colorSpace===Lr||K===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=x(E.image,!1,r.maxTextureSize);J=pe(E,J);const ve=s.convert(E.format,E.colorSpace),Me=s.convert(E.type);let ce=M(E.internalFormat,ve,Me,E.normalized,E.colorSpace,E.isVideoTexture);Fe(Z,E);let se;const Oe=E.mipmaps,Ve=E.isVideoTexture!==!0,st=de.__version===void 0||ne===!0,L=re.dataReady,ae=w(E,J);if(E.isDepthTexture)ce=T(E.format===ws,E.type),st&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ve,Me,null));else if(E.isDataTexture)if(Oe.length>0){Ve&&st&&n.texStorage2D(t.TEXTURE_2D,ae,ce,Oe[0].width,Oe[0].height);for(let K=0,ye=Oe.length;K<ye;K++)se=Oe[K],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,ve,Me,se.data):n.texImage2D(t.TEXTURE_2D,K,ce,se.width,se.height,0,ve,Me,se.data);E.generateMipmaps=!1}else Ve?(st&&n.texStorage2D(t.TEXTURE_2D,ae,ce,J.width,J.height),L&&le(E,J,ve,Me)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ve,Me,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ce,Oe[0].width,Oe[0].height,J.depth);for(let K=0,ye=Oe.length;K<ye;K++)if(se=Oe[K],E.format!==_i)if(ve!==null)if(Ve){if(L)if(E.layerUpdates.size>0){const ue=Ix(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const Ae=se.data.subarray(te*ue/se.data.BYTES_PER_ELEMENT,(te+1)*ue/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,te,se.width,se.height,1,ve,Ae)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,J.depth,ve,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,J.depth,0,se.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,J.depth,ve,Me,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,J.depth,0,ve,Me,se.data)}else{Ve&&st&&n.texStorage2D(t.TEXTURE_2D,ae,ce,Oe[0].width,Oe[0].height);for(let K=0,ye=Oe.length;K<ye;K++)se=Oe[K],E.format!==_i?ve!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,ve,se.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ce,se.width,se.height,0,se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,se.width,se.height,ve,Me,se.data):n.texImage2D(t.TEXTURE_2D,K,ce,se.width,se.height,0,ve,Me,se.data)}else if(E.isDataArrayTexture)if(Ve){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ce,J.width,J.height,J.depth),L)if(E.layerUpdates.size>0){const K=Ix(J.width,J.height,E.format,E.type);for(const ye of E.layerUpdates){const ue=J.data.subarray(ye*K/J.data.BYTES_PER_ELEMENT,(ye+1)*K/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,J.width,J.height,1,ve,Me,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,Me,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,ve,Me,J.data);else if(E.isData3DTexture)Ve?(st&&n.texStorage3D(t.TEXTURE_3D,ae,ce,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,Me,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,ve,Me,J.data);else if(E.isFramebufferTexture){if(st)if(Ve)n.texStorage2D(t.TEXTURE_2D,ae,ce,J.width,J.height);else{let K=J.width,ye=J.height;for(let ue=0;ue<ae;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,K,ye,0,ve,Me,null),K>>=1,ye>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),f.add(E),K.onpaint=je=>{const Ut=je.changedElements;for(const ht of f)Ut.includes(ht.image)&&(ht.needsUpdate=!0)},K.requestPaint();return}const ye=0,ue=t.RGBA,te=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ye,ue,te,Ae,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ve&&st){const K=Pt(Oe[0]);n.texStorage2D(t.TEXTURE_2D,ae,ce,K.width,K.height)}for(let K=0,ye=Oe.length;K<ye;K++)se=Oe[K],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve,Me,se):n.texImage2D(t.TEXTURE_2D,K,ce,ve,Me,se);E.generateMipmaps=!1}else if(Ve){if(st){const K=Pt(J);n.texStorage2D(t.TEXTURE_2D,ae,ce,K.width,K.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Me,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,ve,Me,J);u(E)&&g(Z),de.__version=re.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ke(A,E,z){if(E.image.length!==6)return;const Z=Q(A,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const re=i.get(ne);if(ne.version!==re.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const de=tt.getPrimaries(tt.workingColorSpace),$=E.colorSpace===Lr?null:tt.getPrimaries(E.colorSpace),J=E.colorSpace===Lr||de===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!ve&&!Me?ce[te]=x(E.image[te],!0,r.maxCubemapSize):ce[te]=Me?E.image[te].image:E.image[te],ce[te]=pe(E,ce[te]);const se=ce[0],Oe=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type),st=M(E.internalFormat,Oe,Ve,E.normalized,E.colorSpace),L=E.isVideoTexture!==!0,ae=re.__version===void 0||Z===!0,K=ne.dataReady;let ye=w(E,se);Fe(t.TEXTURE_CUBE_MAP,E);let ue;if(ve){L&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,st,se.width,se.height);for(let te=0;te<6;te++){ue=ce[te].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const je=ue[Ae];E.format!==_i?Oe!==null?L?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,je.width,je.height,Oe,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,st,je.width,je.height,0,je.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,je.width,je.height,Oe,Ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,st,je.width,je.height,0,Oe,Ve,je.data)}}}else{if(ue=E.mipmaps,L&&ae){ue.length>0&&ye++;const te=Pt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,st,te.width,te.height)}for(let te=0;te<6;te++)if(Me){L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Oe,Ve,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,ce[te].width,ce[te].height,0,Oe,Ve,ce[te].data);for(let Ae=0;Ae<ue.length;Ae++){const Ut=ue[Ae].image[te].image;L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Ut.width,Ut.height,Oe,Ve,Ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,st,Ut.width,Ut.height,0,Oe,Ve,Ut.data)}}else{L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,Ve,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,Oe,Ve,ce[te]);for(let Ae=0;Ae<ue.length;Ae++){const je=ue[Ae];L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Oe,Ve,je.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,st,Oe,Ve,je.image[te])}}}u(E)&&g(t.TEXTURE_CUBE_MAP),re.__version=ne.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ue(A,E,z,Z,ne,re){const de=s.convert(z.format,z.colorSpace),$=s.convert(z.type),J=M(z.internalFormat,de,$,z.normalized,z.colorSpace),ve=i.get(E),Me=i.get(z);if(Me.__renderTarget=E,!ve.__hasExternalTextures){const ce=Math.max(1,E.width>>re),se=Math.max(1,E.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,J,ce,se,E.depth,0,de,$,null):n.texImage2D(ne,re,J,ce,se,0,de,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,Me.__webglTexture,0,Ht(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,Me.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function bt(A,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const Z=E.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,re=T(E.stencilBuffer,ne),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ht(E),re,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ht(E),re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,A)}else{const Z=E.textures;for(let ne=0;ne<Z.length;ne++){const re=Z[ne],de=s.convert(re.format,re.colorSpace),$=s.convert(re.type),J=M(re.internalFormat,de,$,re.normalized,re.colorSpace);Je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ht(E),J,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ht(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ze(A,E,z){const Z=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,E.depthTexture);const ve=s.convert(E.depthTexture.format),Me=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===mr?ce=t.DEPTH_COMPONENT24:E.depthTexture.format===ws&&(ce=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,E.width,E.height,0,ve,Me,null)}}else B(E.depthTexture,0);const re=ne.__webglTexture,de=Ht(E),$=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,J=E.depthTexture.format===ws?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===mr)Je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else if(E.depthTexture.format===ws)Je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else throw new Error("Unknown depthTexture format")}function dt(A){const E=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Z}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Ze(E.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?Ze(E.__webglFramebuffer[0],A,0):Ze(E.__webglFramebuffer,A,0)}else if(z){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),bt(E.__webglDepthbuffer[Z],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),bt(E.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(A,E,z){const Z=i.get(A);E!==void 0&&Ue(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&dt(A)}function Ye(A){const E=A.texture,z=i.get(A),Z=i.get(E);A.addEventListener("dispose",y);const ne=A.textures,re=A.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<E.mipmaps.length;J++)z.__webglFramebuffer[$][J]=t.createFramebuffer()}else z.__webglFramebuffer[$]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)z.__webglFramebuffer[$]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let $=0,J=ne.length;$<J;$++){const ve=i.get(ne[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];z.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const ve=s.convert(J.format,J.colorSpace),Me=s.convert(J.type),ce=M(J.internalFormat,ve,Me,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),se=Ht(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,z.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),bt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Ue(z.__webglFramebuffer[$][J],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ue(z.__webglFramebuffer[$],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);u(E)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let $=0,J=ne.length;$<J;$++){const ve=ne[$],Me=i.get(ve);let ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Me.__webglTexture),Fe(ce,ve),Ue(z.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+$,ce,0),u(ve)&&g(ce)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Z.__webglTexture),Fe($,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Ue(z.__webglFramebuffer[J],A,E,t.COLOR_ATTACHMENT0,$,J);else Ue(z.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,$,0);u(E)&&g($),n.unbindTexture()}A.depthBuffer&&dt(A)}function jt(A){const E=A.textures;for(let z=0,Z=E.length;z<Z;z++){const ne=E[z];if(u(ne)){const re=v(A),de=i.get(ne).__webglTexture;n.bindTexture(re,de),g(re),n.unbindTexture()}}}const wt=[],Un=[];function U(A){if(A.samples>0){if(Je(A)===!1){const E=A.textures,z=A.width,Z=A.height;let ne=t.COLOR_BUFFER_BIT;const re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),$=E.length>1;if($)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Me=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,t.NEAREST),l===!0&&(wt.length=0,Un.length=0,wt.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(wt.push(re),Un.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Un)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Me=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ht(A){return Math.min(r.maxSamples,A.samples)}function Je(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(A){const E=a.render.frame;p.get(A)!==E&&(p.set(A,E),A.update())}function pe(A,E){const z=A.colorSpace,Z=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==zu&&z!==Lr&&(tt.getTransfer(z)===lt?(Z!==_i||ne!==Wn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",z)),E}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=oe,this.rebindTextures=yt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xP(t,e){function n(i,r=Lr){let s;const a=tt.getTransfer(r);if(i===Wn)return t.UNSIGNED_BYTE;if(i===Km)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===N1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===C1)return t.BYTE;if(i===R1)return t.SHORT;if(i===wl)return t.UNSIGNED_SHORT;if(i===Ym)return t.INT;if(i===zi)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===pr)return t.HALF_FLOAT;if(i===D1)return t.ALPHA;if(i===L1)return t.RGB;if(i===_i)return t.RGBA;if(i===mr)return t.DEPTH_COMPONENT;if(i===ws)return t.DEPTH_STENCIL;if(i===I1)return t.RED;if(i===Zm)return t.RED_INTEGER;if(i===Ws)return t.RG;if(i===Jm)return t.RG_INTEGER;if(i===eg)return t.RGBA_INTEGER;if(i===iu||i===ru||i===su||i===au)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sp||i===ap||i===op||i===lp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ap)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===op)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cp||i===up||i===dp||i===hp||i===fp||i===ku||i===pp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cp||i===up)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===hp)return s.COMPRESSED_R11_EAC;if(i===fp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ku)return s.COMPRESSED_RG11_EAC;if(i===pp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mp||i===gp||i===xp||i===_p||i===vp||i===yp||i===Sp||i===Mp||i===Ep||i===bp||i===wp||i===Tp||i===Ap||i===Cp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_p)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ep)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ap)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rp||i===Pp||i===Np)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rp)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Np)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dp||i===Lp||i===Bu||i===Ip)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ip)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _P=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vP=`
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

}`;class yP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new X1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:_P,fragmentShader:vP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mn(new fd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SP extends cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,f=null,d=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",x=new yP,u={},g=n.getContextAttributes();let v=null,M=null;const T=[],w=[],R=new Ie;let y=null;const C=new Vn;C.viewport=new It;const D=new Vn;D.viewport=new It;const P=[C,D],k=new R2;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=T[Q];return he===void 0&&(he=new rh,T[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=T[Q];return he===void 0&&(he=new rh,T[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=T[Q];return he===void 0&&(he=new rh,T[Q]=he),he.getHandSpace()};function I(Q){const he=w.indexOf(Q.inputSource);if(he===-1)return;const le=T[he];le!==void 0&&(le.update(Q.inputSource,Q.frame,c||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let Q=0;Q<T.length;Q++){const he=w[Q];he!==null&&(w[Q]=null,T[Q].disconnect(he))}X=null,Y=null,x.reset();for(const Q in u)delete u[Q];e.setRenderTarget(v),m=null,d=null,f=null,r=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Le=null,ke=null;g.depth&&(ke=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?ws:mr,Le=g.stencil?Tl:zi);const Ue={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Bi(d.textureWidth,d.textureHeight,{format:_i,type:Wn,depthTexture:new fo(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bi(m.framebufferWidth,m.framebufferHeight,{format:_i,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Q){for(let he=0;he<Q.removed.length;he++){const le=Q.removed[he],Le=w.indexOf(le);Le>=0&&(w[Le]=null,T[Le].disconnect(le))}for(let he=0;he<Q.added.length;he++){const le=Q.added[he];let Le=w.indexOf(le);if(Le===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=w.length){w.push(le),Le=Ue;break}else if(w[Ue]===null){w[Ue]=le,Le=Ue;break}if(Le===-1)break}const ke=T[Le];ke&&ke.connect(le)}}const B=new F,q=new F;function ee(Q,he,le){B.setFromMatrixPosition(he.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const Le=B.distanceTo(q),ke=he.projectionMatrix.elements,Ue=le.projectionMatrix.elements,bt=ke[14]/(ke[10]-1),Ze=ke[14]/(ke[10]+1),dt=(ke[9]+1)/ke[5],yt=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],jt=(Ue[8]+1)/Ue[0],wt=bt*Ye,Un=bt*jt,U=Le/(-Ye+jt),Ht=U*-Ye;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(U),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Je=bt+U,xt=Ze+U,pe=wt-Ht,Pt=Un+(Le-Ht),A=dt*Ze/xt*Je,E=yt*Ze/xt*Je;Q.projectionMatrix.makePerspective(pe,Pt,A,E,Je,xt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function oe(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let he=Q.near,le=Q.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(le=x.depthFar)),k.near=D.near=C.near=he,k.far=D.far=C.far=le,(X!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,Y=k.far),k.layers.mask=Q.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const Le=Q.parent,ke=k.cameras;oe(k,Le);for(let Ue=0;Ue<ke.length;Ue++)oe(ke[Ue],Le);ke.length===2?ee(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),fe(Q,k,Le)};function fe(Q,he,le){le===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(Q){return u[Q]};let qe=null;function Qe(Q,he){if(p=he.getViewerPose(c||a),_=he,p!==null){const le=p.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Le=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Le=!0);for(let Ze=0;Ze<le.length;Ze++){const dt=le[Ze];let yt=null;if(m!==null)yt=m.getViewport(dt);else{const jt=f.getViewSubImage(d,dt);yt=jt.viewport,Ze===0&&(e.setRenderTargetTextures(M,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(M))}let Ye=P[Ze];Ye===void 0&&(Ye=new Vn,Ye.layers.enable(Ze),Ye.viewport=new It,P[Ze]=Ye),Ye.matrix.fromArray(dt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(dt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(yt.x,yt.y,yt.width,yt.height),Ze===0&&(k.matrix.copy(Ye.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Le===!0&&k.cameras.push(Ye)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const Ze=f.getDepthInformation(le[0]);Ze&&Ze.isValid&&Ze.texture&&x.init(Ze,r.renderState)}if(ke&&ke.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let Ze=0;Ze<le.length;Ze++){const dt=le[Ze].camera;if(dt){let yt=u[dt];yt||(yt=new X1,u[dt]=yt);const Ye=f.getCameraImage(dt);yt.sourceTexture=Ye}}}}for(let le=0;le<T.length;le++){const Le=w[le],ke=T[le];Le!==null&&ke!==void 0&&ke.update(Le,he,c||a)}qe&&qe(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Fe=new Q1;Fe.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){qe=Q},this.dispose=function(){}}}const MP=new Ct,rS=new Be;rS.set(-1,0,0,0,1,0,0,0,1);function EP(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,q1(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,g,v,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(x,u):u.isMeshLambertMaterial?(s(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(x,u),f(x,u)):u.isMeshPhongMaterial?(s(x,u),p(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(x,u),d(x,u),u.isMeshPhysicalMaterial&&m(x,u,M)):u.isMeshMatcapMaterial?(s(x,u),_(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),S(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,g,v):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===In&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===In&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(x.envMap.value=v,x.envMapRotation.value.setFromMatrix4(MP.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(rS),x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,g,v){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*g,x.scale.value=v*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function p(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function f(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function d(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,g){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===In&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,u){u.matcap&&(x.matcap.value=u.matcap)}function S(x,u){const g=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=p(g),r[g.id]=M,g.addEventListener("dispose",x));const T=v.program;i.updateUBOMapping(g,T);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function p(g){const v=f();g.__bindingPointIndex=v;const M=t.createBuffer(),T=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,R=M.length;w<R;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let C=0,D=y.length;C<D;C++){const P=y[C];if(m(P,w,C,T)===!0){const k=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let I=0;I<X.length;I++){const G=X[I],j=S(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):ArrayBuffer.isView(G)?P.__data.set(new G.constructor(G.buffer,G.byteOffset,P.__data.length)):(G.toArray(P.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,T){const w=g.value,R=v+"_"+M;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:ArrayBuffer.isView(w)?T[R]=w.slice():T[R]=w.clone(),!0;{const y=T[R];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return T[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function _(g){const v=g.uniforms;let M=0;const T=16;for(let R=0,y=v.length;R<y;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let D=0,P=C.length;D<P;D++){const k=C[D],X=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,I=X.length;Y<I;Y++){const G=X[Y],j=S(G),B=M%T,q=B%j.boundary,ee=B+q;M+=q,ee!==0&&T-ee<j.storage&&(M+=T-ee),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=j.storage}}}const w=M%T;return w>0&&(M+=T-w),g.__size=M,g.__cache={},this}function S(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",g),v}function x(g){const v=g.target;v.removeEventListener("dispose",x);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const wP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function TP(){return Ai===null&&(Ai=new c2(wP,16,16,Ws,pr),Ai.name="DFG_LUT",Ai.minFilter=fn,Ai.magFilter=fn,Ai.wrapS=rr,Ai.wrapT=rr,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class AP{constructor(e={}){const{canvas:n=bT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,x=new Set([eg,Jm,Zm]),u=new Set([Wn,zi,wl,Tl,Km,Qm]),g=new Uint32Array(4),v=new Int32Array(4),M=new F;let T=null,w=null;const R=[],y=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,k=null;this._outputColorSpace=ti;let X=0,Y=0,I=null,G=-1,j=null;const B=new It,q=new It;let ee=null;const oe=new ze(0);let fe=0,qe=n.width,Qe=n.height,Fe=1,Q=null,he=null;const le=new It(0,0,qe,Qe),Le=new It(0,0,qe,Qe);let ke=!1;const Ue=new ag;let bt=!1,Ze=!1;const dt=new Ct,yt=new F,Ye=new It,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Un(){return I===null?Fe:1}let U=i;function Ht(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$m}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",je,!1),U===null){const O="webgl2";if(U=Ht(O,b),U===null)throw Ht(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw nt("WebGLRenderer: "+b.message),b}let Je,xt,pe,Pt,A,E,z,Z,ne,re,de,$,J,ve,Me,ce,se,Oe,Ve,st,L,ae,K;function ye(){Je=new T3(U),Je.init(),L=new xP(U,Je),xt=new _3(U,Je,e,L),pe=new mP(U,Je),xt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Pt=new R3(U),A=new tP,E=new gP(U,Je,pe,A,xt,L,Pt),z=new w3(D),Z=new L2(U),ae=new g3(U,Z),ne=new A3(U,Z,Pt,ae),re=new N3(U,ne,Z,ae,Pt),Oe=new P3(U,xt,E),Me=new v3(A),de=new eP(D,z,Je,xt,ae,Me),$=new EP(D,A),J=new iP,ve=new cP(Je),se=new m3(D,z,pe,re,_,l),ce=new pP(D,re,xt),K=new bP(U,Pt,xt,pe),Ve=new x3(U,Je,Pt),st=new C3(U,Je,Pt),Pt.programs=de.programs,D.capabilities=xt,D.extensions=Je,D.properties=A,D.renderLists=J,D.shadowMap=ce,D.state=pe,D.info=Pt}ye(),S!==Wn&&(C=new L3(S,n.width,n.height,r,s));const ue=new SP(D,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(b){b!==void 0&&(Fe=b,this.setSize(qe,Qe,!1))},this.getSize=function(b){return b.set(qe,Qe)},this.setSize=function(b,O,W=!0){if(ue.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=b,Qe=O,n.width=Math.floor(b*Fe),n.height=Math.floor(O*Fe),W===!0&&(n.style.width=b+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(qe*Fe,Qe*Fe).floor()},this.setDrawingBufferSize=function(b,O,W){qe=b,Qe=O,Fe=W,n.width=Math.floor(b*W),n.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(S===Wn){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,O,W,H){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,O,W,H),pe.viewport(B.copy(le).multiplyScalar(Fe).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,O,W,H){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,W,H),pe.scissor(q.copy(Le).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){pe.setScissorTest(ke=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,W=!0){let H=0;if(b){let V=!1;if(I!==null){const _e=I.texture.format;V=x.has(_e)}if(V){const _e=I.texture.type,Ee=u.has(_e),ge=se.getClearColor(),Te=se.getClearAlpha(),Ce=ge.r,He=ge.g,Xe=ge.b;Ee?(g[0]=Ce,g[1]=He,g[2]=Xe,g[3]=Te,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Ce,v[1]=He,v[2]=Xe,v[3]=Te,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",je,!1),se.dispose(),J.dispose(),ve.dispose(),A.dispose(),z.dispose(),re.dispose(),ae.dispose(),K.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",yg),ue.removeEventListener("sessionend",Sg),us.stop()};function te(b){b.preventDefault(),Vu("WebGLRenderer: Context Lost."),P=!0}function Ae(){Vu("WebGLRenderer: Context Restored."),P=!1;const b=Pt.autoReset,O=ce.enabled,W=ce.autoUpdate,H=ce.needsUpdate,V=ce.type;ye(),Pt.autoReset=b,ce.enabled=O,ce.autoUpdate=W,ce.needsUpdate=H,ce.type=V}function je(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const O=b.target;O.removeEventListener("dispose",Ut),ht(O)}function ht(b){Hi(b),A.remove(b)}function Hi(b){const O=A.get(b).programs;O!==void 0&&(O.forEach(function(W){de.releaseProgram(W)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,H,V,_e){O===null&&(O=jt);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,ge=mS(b,O,W,H,V);pe.setMaterial(H,Ee);let Te=W.index,Ce=1;if(H.wireframe===!0){if(Te=ne.getWireframeAttribute(W),Te===void 0)return;Ce=2}const He=W.drawRange,Xe=W.attributes.position;let Pe=He.start*Ce,ft=(He.start+He.count)*Ce;_e!==null&&(Pe=Math.max(Pe,_e.start*Ce),ft=Math.min(ft,(_e.start+_e.count)*Ce)),Te!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Te.count)):Xe!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,Xe.count));const Ft=ft-Pe;if(Ft<0||Ft===1/0)return;ae.setup(V,H,ge,W,Te);let Nt,mt=Ve;if(Te!==null&&(Nt=Z.get(Te),mt=st,mt.setIndex(Nt)),V.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*Un()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(V.isLine){let an=H.linewidth;an===void 0&&(an=1),pe.setLineWidth(an*Un()),V.isLineSegments?mt.setMode(U.LINES):V.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else V.isPoints?mt.setMode(U.POINTS):V.isSprite&&mt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const an=V._multiDrawStarts,Se=V._multiDrawCounts,Fn=V._multiDrawCount,it=Te?Z.get(Te).bytesPerElement:1,Qn=A.get(H).currentProgram.getUniforms();for(let bi=0;bi<Fn;bi++)Qn.setValue(U,"_gl_DrawID",bi),mt.render(an[bi]/it,Se[bi])}else if(V.isInstancedMesh)mt.renderInstances(Pe,Ft,V.count);else if(W.isInstancedBufferGeometry){const an=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,an);mt.renderInstances(Pe,Ft,Se)}else mt.render(Pe,Ft)};function Ei(b,O,W){b.transparent===!0&&b.side===tr&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Wl(b,O,W),b.side=is,b.needsUpdate=!0,Wl(b,O,W),b.side=tr):Wl(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),w=ve.get(W),w.init(O),y.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const ge=_e[Ee];Ei(ge,W,V),H.add(ge)}else Ei(_e,W,V),H.add(_e)}),w=y.pop(),H},this.compileAsync=function(b,O,W=null){const H=this.compile(b,O,W);return new Promise(V=>{function _e(){if(H.forEach(function(Ee){A.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){V(b);return}setTimeout(_e,10)}Je.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let _d=null;function fS(b){_d&&_d(b)}function yg(){us.stop()}function Sg(){us.start()}const us=new Q1;us.setAnimationLoop(fS),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(b){_d=b,ue.setAnimationLoop(b),b===null?us.stop():us.start()},ue.addEventListener("sessionstart",yg),ue.addEventListener("sessionend",Sg),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(b,O);const W=ue.enabled===!0&&ue.isPresenting===!0,H=C!==null&&(I===null||W)&&C.begin(D,I);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,O,I),w=ve.get(b,y.length),w.init(O),w.state.textureUnits=E.getTextureUnits(),y.push(w),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(dt,Ui,O.reversedDepth),Ze=this.localClippingEnabled,bt=Me.init(this.clippingPlanes,Ze),T=J.get(b,R.length),T.init(),R.push(T),ue.enabled===!0&&ue.isPresenting===!0){const Ee=D.xr.getDepthSensingMesh();Ee!==null&&vd(Ee,O,-1/0,D.sortObjects)}vd(b,O,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(Q,he),wt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,wt&&se.addToRenderList(T,b),this.info.render.frame++,bt===!0&&Me.beginShadows();const V=w.state.shadowsArray;if(ce.render(V,b,O),bt===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&C.hasRenderPass())===!1){const Ee=T.opaque,ge=T.transmissive;if(w.setupLights(),O.isArrayCamera){const Te=O.cameras;if(ge.length>0)for(let Ce=0,He=Te.length;Ce<He;Ce++){const Xe=Te[Ce];Eg(Ee,ge,b,Xe)}wt&&se.render(b);for(let Ce=0,He=Te.length;Ce<He;Ce++){const Xe=Te[Ce];Mg(T,b,Xe,Xe.viewport)}}else ge.length>0&&Eg(Ee,ge,b,O),wt&&se.render(b),Mg(T,b,O)}I!==null&&Y===0&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),H&&C.end(D),b.isScene===!0&&b.onAfterRender(D,b,O),ae.resetDefaultState(),G=-1,j=null,y.pop(),y.length>0?(w=y[y.length-1],E.setTextureUnits(w.state.textureUnits),bt===!0&&Me.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,k!==null&&k.renderEnd()};function vd(b,O,W,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){H&&Ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const Ee=re.update(b),ge=b.material;ge.visible&&T.push(b,Ee,ge,W,Ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Ee=re.update(b),ge=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ye.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ye.copy(Ee.boundingSphere.center)),Ye.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(ge)){const Te=Ee.groups;for(let Ce=0,He=Te.length;Ce<He;Ce++){const Xe=Te[Ce],Pe=ge[Xe.materialIndex];Pe&&Pe.visible&&T.push(b,Ee,Pe,W,Ye.z,Xe)}}else ge.visible&&T.push(b,Ee,ge,W,Ye.z,null)}}const _e=b.children;for(let Ee=0,ge=_e.length;Ee<ge;Ee++)vd(_e[Ee],O,W,H)}function Mg(b,O,W,H){const{opaque:V,transmissive:_e,transparent:Ee}=b;w.setupLightsView(W),bt===!0&&Me.setGlobalState(D.clippingPlanes,W),H&&pe.viewport(B.copy(H)),V.length>0&&Gl(V,O,W),_e.length>0&&Gl(_e,O,W),Ee.length>0&&Gl(Ee,O,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Eg(b,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Pe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Bi(1,1,{generateMipmaps:!0,type:Pe?pr:Wn,minFilter:bs,samples:Math.max(4,xt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const _e=w.state.transmissionRenderTarget[H.id],Ee=H.viewport||B;_e.setSize(Ee.z*D.transmissionResolutionScale,Ee.w*D.transmissionResolutionScale);const ge=D.getRenderTarget(),Te=D.getActiveCubeFace(),Ce=D.getActiveMipmapLevel();D.setRenderTarget(_e),D.getClearColor(oe),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),wt&&se.render(W);const He=D.toneMapping;D.toneMapping=ki;const Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),bt===!0&&Me.setGlobalState(D.clippingPlanes,H),Gl(b,W,H),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,Ft=O.length;ft<Ft;ft++){const Nt=O[ft],{object:mt,geometry:an,material:Se,group:Fn}=Nt;if(Se.side===tr&&mt.layers.test(H.layers)){const it=Se.side;Se.side=In,Se.needsUpdate=!0,bg(mt,W,H,an,Se,Fn),Se.side=it,Se.needsUpdate=!0,Pe=!0}}Pe===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e))}D.setRenderTarget(ge,Te,Ce),D.setClearColor(oe,fe),Xe!==void 0&&(H.viewport=Xe),D.toneMapping=He}function Gl(b,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=b.length;V<_e;V++){const Ee=b[V],{object:ge,geometry:Te,group:Ce}=Ee;let He=Ee.material;He.allowOverride===!0&&H!==null&&(He=H),ge.layers.test(W.layers)&&bg(ge,O,W,Te,He,Ce)}}function bg(b,O,W,H,V,_e){b.onBeforeRender(D,O,W,H,V,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(D,O,W,H,b,_e),V.transparent===!0&&V.side===tr&&V.forceSinglePass===!1?(V.side=In,V.needsUpdate=!0,D.renderBufferDirect(W,O,H,V,b,_e),V.side=is,V.needsUpdate=!0,D.renderBufferDirect(W,O,H,V,b,_e),V.side=tr):D.renderBufferDirect(W,O,H,V,b,_e),b.onAfterRender(D,O,W,H,V,_e)}function Wl(b,O,W){O.isScene!==!0&&(O=jt);const H=A.get(b),V=w.state.lights,_e=w.state.shadowsArray,Ee=V.state.version,ge=de.getParameters(b,V.state,_e,O,W,w.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let Ce=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=z.get(b.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",Ut),Ce=new Map,H.programs=Ce);let Xe=Ce.get(Te);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===Ee)return Tg(b,ge),Xe}else ge.uniforms=de.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,W,ge),b.onBeforeCompile(ge,D),Xe=de.acquireProgram(ge,Te),Ce.set(Te,Xe),H.uniforms=ge.uniforms;const Pe=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=Me.uniform),Tg(b,ge),H.needsLights=xS(b),H.lightsStateVersion=Ee,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Xe,H.uniformsList=null,Xe}function wg(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ou.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Tg(b,O){const W=A.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function pS(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let W=0,H=b.length;W<H;W++){const V=b[W];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function mS(b,O,W,H,V){O.isScene!==!0&&(O=jt),E.resetTextureUnits();const _e=O.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ge=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tt.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ce=z.get(H.envMap||Ee,Te),He=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color;let Nt=ki;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=D.toneMapping);const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,an=mt!==void 0?mt.length:0,Se=A.get(H),Fn=w.state.lights;if(bt===!0&&(Ze===!0||b!==j)){const _t=b===j&&H.id===G;Me.setState(H,b,_t)}let it=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Fn.state.version||Se.outputColorSpace!==ge||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Ce||H.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Me.numPlanes||Se.numIntersection!==Me.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==Xe||Se.morphTargets!==Pe||Se.morphNormals!==ft||Se.morphColors!==Ft||Se.toneMapping!==Nt||Se.morphTargetsCount!==an||!!Se.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Se.__version=H.version);let Qn=Se.currentProgram;it===!0&&(Qn=Wl(H,O,V),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Qn,Se));let bi=!1,xr=!1,Ks=!1;const gt=Qn.getUniforms(),Ot=Se.uniforms;if(pe.useProgram(Qn.program)&&(bi=!0,xr=!0,Ks=!0),H.id!==G&&(G=H.id,xr=!0),Se.needsLights){const _t=pS(w.state.lightProbeGridArray,V);Se.lightProbeGrid!==_t&&(Se.lightProbeGrid=_t,xr=!0)}if(bi||j!==b){pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),gt.setValue(U,"projectionMatrix",b.projectionMatrix),gt.setValue(U,"viewMatrix",b.matrixWorldInverse);const vr=gt.map.cameraPosition;vr!==void 0&&vr.setValue(U,yt.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,xr=!0,Ks=!0)}if(Se.needsLights&&(Fn.state.directionalShadowMap.length>0&&gt.setValue(U,"directionalShadowMap",Fn.state.directionalShadowMap,E),Fn.state.spotShadowMap.length>0&&gt.setValue(U,"spotShadowMap",Fn.state.spotShadowMap,E),Fn.state.pointShadowMap.length>0&&gt.setValue(U,"pointShadowMap",Fn.state.pointShadowMap,E)),V.isSkinnedMesh){gt.setOptional(U,V,"bindMatrix"),gt.setOptional(U,V,"bindMatrixInverse");const _t=V.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),gt.setValue(U,"boneTexture",_t.boneTexture,E))}V.isBatchedMesh&&(gt.setOptional(U,V,"batchingTexture"),gt.setValue(U,"batchingTexture",V._matricesTexture,E),gt.setOptional(U,V,"batchingIdTexture"),gt.setValue(U,"batchingIdTexture",V._indirectTexture,E),gt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(U,"batchingColorTexture",V._colorsTexture,E));const _r=W.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Oe.update(V,W,Qn),(xr||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,gt.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ot.envMapIntensity.value=O.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=TP()),xr){if(gt.setValue(U,"toneMappingExposure",D.toneMappingExposure),Se.needsLights&&gS(Ot,Ks),_e&&H.fog===!0&&$.refreshFogUniforms(Ot,_e),$.refreshMaterialUniforms(Ot,H,Fe,Qe,w.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.lightProbeGrid){const _t=Se.lightProbeGrid;Ot.probesSH.value=_t.texture,Ot.probesMin.value.copy(_t.boundingBox.min),Ot.probesMax.value.copy(_t.boundingBox.max),Ot.probesResolution.value.copy(_t.resolution)}ou.upload(U,wg(Se),Ot,E)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ou.upload(U,wg(Se),Ot,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(U,"center",V.center),gt.setValue(U,"modelViewMatrix",V.modelViewMatrix),gt.setValue(U,"normalMatrix",V.normalMatrix),gt.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const _t=H.uniformsGroups;for(let vr=0,Qs=_t.length;vr<Qs;vr++){const Ag=_t[vr];K.update(Ag,Qn),K.bind(Ag,Qn)}}return Qn}function gS(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function xS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,W){const H=A.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),A.get(b.texture).__webglTexture=O,A.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const W=A.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const _S=U.createFramebuffer();this.setRenderTarget=function(b,O=0,W=0){I=b,X=O,Y=W;let H=null,V=!1,_e=!1;if(b){const ge=A.get(b);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,ge.__webglFramebuffer),B.copy(b.viewport),q.copy(b.scissor),ee=b.scissorTest,pe.viewport(B),pe.scissor(q),pe.setScissorTest(ee),G=-1;return}else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(ge.__hasExternalTextures)E.rebindTextures(b,A.get(b.texture).__webglTexture,A.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&A.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Ce=A.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?H=Ce[O][W]:H=Ce[O],V=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?H=A.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[W]:H=Ce,B.copy(b.viewport),q.copy(b.scissor),ee=b.scissorTest}else B.copy(le).multiplyScalar(Fe).floor(),q.copy(Le).multiplyScalar(Fe).floor(),ee=ke;if(W!==0&&(H=_S),pe.bindFramebuffer(U.FRAMEBUFFER,H)&&pe.drawBuffers(b,H),pe.viewport(B),pe.scissor(q),pe.setScissorTest(ee),V){const ge=A.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,W)}else if(_e){const ge=O;for(let Te=0;Te<b.textures.length;Te++){const Ce=A.get(b.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,W,ge)}}else if(b!==null&&W!==0){const ge=A.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(b,O,W,H,V,_e,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){pe.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=b.textures[ge],He=Ce.format,Xe=Ce.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!xt.textureFormatReadable(He)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Xe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&W>=0&&W<=b.height-V&&U.readPixels(O,W,H,V,L.convert(He),L.convert(Xe),_e)}finally{const Ce=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,H,V,_e,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(O>=0&&O<=b.width-H&&W>=0&&W<=b.height-V){pe.bindFramebuffer(U.FRAMEBUFFER,Te);const Ce=b.textures[ge],He=Ce.format,Xe=Ce.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!xt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),U.readPixels(O,W,H,V,L.convert(He),L.convert(Xe),0);const ft=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,ft);const Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wT(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e),U.deleteBuffer(Pe),U.deleteSync(Ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,W=0){const H=Math.pow(2,-W),V=Math.floor(b.image.width*H),_e=Math.floor(b.image.height*H),Ee=O!==null?O.x:0,ge=O!==null?O.y:0;E.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Ee,ge,V,_e),pe.unbindTexture()};const vS=U.createFramebuffer(),yS=U.createFramebuffer();this.copyTextureToTexture=function(b,O,W=null,H=null,V=0,_e=0){let Ee,ge,Te,Ce,He,Xe,Pe,ft,Ft;const Nt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(W!==null)Ee=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,He=W.min.y,Xe=W.isBox3?W.min.z:0;else{const Ot=Math.pow(2,-V);Ee=Math.floor(Nt.width*Ot),ge=Math.floor(Nt.height*Ot),b.isDataArrayTexture?Te=Nt.depth:b.isData3DTexture?Te=Math.floor(Nt.depth*Ot):Te=1,Ce=0,He=0,Xe=0}H!==null?(Pe=H.x,ft=H.y,Ft=H.z):(Pe=0,ft=0,Ft=0);const mt=L.convert(O.format),an=L.convert(O.type);let Se;O.isData3DTexture?(E.setTexture3D(O,0),Se=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Se=U.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Se=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Fn=pe.getParameter(U.UNPACK_ROW_LENGTH),it=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Qn=pe.getParameter(U.UNPACK_SKIP_PIXELS),bi=pe.getParameter(U.UNPACK_SKIP_ROWS),xr=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),pe.pixelStorei(U.UNPACK_SKIP_ROWS,He),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe);const Ks=b.isDataArrayTexture||b.isData3DTexture,gt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Ot=A.get(b),_r=A.get(O),_t=A.get(Ot.__renderTarget),vr=A.get(_r.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,_t.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Qs=0;Qs<Te;Qs++)Ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(b).__webglTexture,V,Xe+Qs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(O).__webglTexture,_e,Ft+Qs)),U.blitFramebuffer(Ce,He,Ee,ge,Pe,ft,Ee,ge,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||A.has(b)){const Ot=A.get(b),_r=A.get(O);pe.bindFramebuffer(U.READ_FRAMEBUFFER,vS),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,yS);for(let _t=0;_t<Te;_t++)Ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,V,Xe+_t):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,V),gt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_r.__webglTexture,_e,Ft+_t):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_r.__webglTexture,_e),V!==0?U.blitFramebuffer(Ce,He,Ee,ge,Pe,ft,Ee,ge,U.COLOR_BUFFER_BIT,U.NEAREST):gt?U.copyTexSubImage3D(Se,_e,Pe,ft,Ft+_t,Ce,He,Ee,ge):U.copyTexSubImage2D(Se,_e,Pe,ft,Ce,He,Ee,ge);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Se,_e,Pe,ft,Ft,Ee,ge,Te,mt,an,Nt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,_e,Pe,ft,Ft,Ee,ge,Te,mt,Nt.data):U.texSubImage3D(Se,_e,Pe,ft,Ft,Ee,ge,Te,mt,an,Nt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_e,Pe,ft,Ee,ge,mt,an,Nt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_e,Pe,ft,Nt.width,Nt.height,mt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,_e,Pe,ft,Ee,ge,mt,an,Nt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Qn),pe.pixelStorei(U.UNPACK_SKIP_ROWS,bi),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,xr),_e===0&&O.generateMipmaps&&U.generateMipmap(Se),pe.unbindTexture()},this.initRenderTarget=function(b){A.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){X=0,Y=0,I=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const r_={type:"change"},hg={type:"start"},sS={type:"end"},kc=new sg,s_=new Pr,CP=Math.cos(70*F1.DEG2RAD),Vt=new F,Tn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6;class RP extends N2{constructor(e,n=null){super(e,n),this.state=pt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:za.ROTATE,MIDDLE:za.DOLLY,RIGHT:za.PAN},this.touches={ONE:Na.ROTATE,TWO:Na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new rs,this._lastTargetPosition=new F,this._quat=new rs().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dx,this._sphericalDelta=new Dx,this._scale=1,this._panOffset=new F,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new F,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NP.bind(this),this._onPointerDown=PP.bind(this),this._onPointerUp=DP.bind(this),this._onContextMenu=BP.bind(this),this._onMouseWheel=UP.bind(this),this._onKeyDown=FP.bind(this),this._onTouchStart=OP.bind(this),this._onTouchMove=kP.bind(this),this._onMouseDown=LP.bind(this),this._onMouseMove=IP.bind(this),this._interceptControlDown=zP.bind(this),this._interceptControlUp=jP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r_),this.update(),this.state=pt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Vt.copy(n).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Vt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<CP?this.object.lookAt(this.target):(s_.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(s_,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(r_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Vt.setFromMatrixColumn(n,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,n){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(n,1):(Vt.setFromMatrixColumn(n,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ie,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function PP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function NP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function DP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sS),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function LP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case za.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=pt.DOLLY;break;case za.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}break;case za.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(hg)}function IP(t){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UP(t){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(t.preventDefault(),this.dispatchEvent(hg),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(sS))}function FP(t){this.enabled!==!1&&this._handleKeyDown(t)}function OP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Na.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=pt.TOUCH_ROTATE;break;case Na.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Na.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=pt.TOUCH_DOLLY_PAN;break;case Na.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(hg)}function kP(t){switch(this._trackPointer(t),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=pt.NONE}}function BP(t){this.enabled!==!1&&t.preventDefault()}function zP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HP=3500,VP=new ze(16742981),a_=new ze(9146263),GP=new ze(3135176),WP=new ze(3135176),XP=new ze(16742981),qP=new ze(7268303),o_=new ze(16769126);function $P(){var S,x;const t=at(u=>u.graph),e=at(u=>u.hpcJob),n=we.useRef(null),[i,r]=we.useState(null),s=we.useRef(new Map),a=we.useRef(new Map),o=we.useRef(()=>{}),l=we.useMemo(()=>{var u;return(u=e==null?void 0:e.progress)==null?void 0:u.phases.find(g=>g.phase==="pulser")},[(S=e==null?void 0:e.progress)==null?void 0:S.phases]),c=(l==null?void 0:l.magnetization_series)??null,p=((x=e==null?void 0:e.result)==null?void 0:x.cut_assignment)??null,[f,d]=we.useState(0),[m,_]=we.useState(!1);return we.useEffect(()=>{const u=n.current;if(!u)return;r(null);const g=new n2;g.background=new ze(593171);const v=new Vn(45,1,.1,1e3);v.position.set(0,-8,7);let M;try{M=new AP({antialias:!0,alpha:!1})}catch{r("3D renderer unavailable in this browser context.");return}M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=_1,M.domElement.style.display="block",M.domElement.style.height="100%",M.domElement.style.width="100%",u.appendChild(M.domElement);const T=new RP(v,M.domElement);T.enableDamping=!1,T.enablePan=!0,T.minDistance=2.8,T.maxDistance=28,T.target.set(0,0,0),g.add(new A2(12582128,.45));const w=new T2(13107188,2.2);w.position.set(3,-5,8),w.castShadow=!0,g.add(w);const R=new b2(7268303,2.5,24);R.position.set(-5,4,5),g.add(R);const y=new Da;g.add(y);const C=new P2(12,12,2376253,1517089);C.rotation.x=Math.PI/2,C.position.z=-1.35,g.add(C);const D=new Mn(new cg(4.3,.012,16,160),new jl({color:3497814,transparent:!0,opacity:.45}));D.rotation.x=Math.PI/2,D.position.z=-1.32,g.add(D),s.current.clear(),a.current.clear(),t?YP(y,t,s.current,a.current):KP(y);const P=new yo().setFromObject(y),k=()=>{M.render(g,v)};o.current=k;const X=()=>{const{width:I,height:G}=u.getBoundingClientRect(),j=Math.max(1,Math.floor(I)),B=Math.max(1,Math.floor(G));M.setSize(j,B),v.aspect=j/B,v.updateProjectionMatrix(),tN(v,T,P),k()},Y=new ResizeObserver(X);return Y.observe(u),X(),T.addEventListener("change",k),k(),()=>{Y.disconnect(),T.removeEventListener("change",k),T.dispose(),u.removeChild(M.domElement),o.current=()=>{},s.current.clear(),a.current.clear(),g.traverse(I=>{var G;if(I instanceof Mn||I instanceof lg||I instanceof G1){(G=I.geometry)==null||G.dispose();const j=Array.isArray(I.material)?I.material:[I.material];for(const B of j)nN(B)}}),M.dispose()}},[t]),we.useEffect(()=>{if(!c||c.times.length===0)return;const{times:u,magnetization:g}=c,v=u[u.length-1]-u[0]||1,M=performance.now();let T;_(!0);const w=()=>{const R=Math.min(1,(performance.now()-M)/HP),y=u[0]+R*v;let C=0;for(;C<u.length-1&&u[C+1]<=y;)C+=1;const D=g[C];if(D){for(const[P,k]of s.current.entries()){const X=D[P];if(X===void 0)continue;const Y=X>=0?a_.clone().lerp(GP,X):a_.clone().lerp(VP,-X);k.color.copy(Y),k.emissive.copy(Y).multiplyScalar(.3)}o.current()}R<1?T=requestAnimationFrame(w):(_(!1),p&&(l_(s.current,a.current,p),o.current()))};return T=requestAnimationFrame(w),()=>cancelAnimationFrame(T)},[c,p,f]),we.useEffect(()=>{c||!p||(l_(s.current,a.current,p),o.current())},[p,c]),h.jsxs("section",{className:"relative h-[380px] min-h-[380px] overflow-hidden rounded-md border border-border bg-background shadow-panel sm:h-[620px] sm:min-h-[620px]",children:[h.jsxs("div",{className:"absolute left-3 top-3 z-10 sm:left-5 sm:top-5",children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"3D graph canvas"}),h.jsx("h2",{className:"text-lg font-semibold sm:text-2xl",children:t?`${t.family} / ${t.n_nodes} nodes`:"Generate a graph"})]}),h.jsxs("div",{className:"absolute right-3 top-3 z-10 grid grid-cols-2 gap-2 sm:right-5 sm:top-5 sm:grid-cols-4",children:[h.jsx(Bc,{icon:h.jsx(ew,{size:14}),label:"Drag"}),h.jsx(Bc,{icon:h.jsx(hw,{size:14}),label:"Zoom"}),h.jsx(Bc,{icon:h.jsx(Kb,{size:14}),label:"Pan"}),h.jsx(Bc,{icon:h.jsx($b,{size:14}),label:"Orbit"})]}),c?h.jsxs("button",{type:"button",onClick:()=>d(u=>u+1),disabled:m,className:"absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-md border border-primary/60 bg-background/80 px-3 py-2 text-xs font-semibold text-primary backdrop-blur transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50 sm:bottom-5 sm:left-5",children:[h.jsx(Bb,{size:14}),m?"Replaying…":"Replay magnetization"]}):null,h.jsx("div",{ref:n,className:"h-full w-full"}),i?h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/90 p-8 text-center",children:h.jsxs("div",{className:"max-w-sm rounded-md border border-border bg-muted/45 p-5",children:[h.jsx("p",{className:"text-sm font-semibold text-foreground",children:"3D canvas unavailable"}),h.jsx("p",{className:"mt-2 text-sm text-foreground/60",children:i})]})}):null]})}function l_(t,e,n){for(const[i,r]of t.entries()){const s=n[i];if(s===void 0)continue;const a=s===0?WP:XP;r.color.copy(a),r.emissive.copy(a).multiplyScalar(.35)}for(const[i,{line:r,bead:s}]of e.entries()){const[a,o]=i.split("-").map(Number),l=n[a],c=n[o];l===void 0||c===void 0||l===c||(r.color.copy(o_),s.color.copy(o_),r.opacity=Math.min(.95,r.opacity+.25))}}function YP(t,e,n,i){const r=QP(e),s=aS(e.edges);for(const a of e.edges){const o=r.get(a.i),l=r.get(a.j);if(!o||!l)continue;const{group:c,line:p,bead:f}=JP(o,l,a.w);t.add(c),i.set(`${a.i}-${a.j}`,{line:p,bead:f})}for(const a of e.positions){const o=r.get(a.id);if(!o)continue;const l=ZP(o,a.id);l.userData.kind="node",l.userData.phase=a.id*.8,t.add(l),n.set(a.id,l.material);const c=eN(String(a.id));c.position.copy(o).add(new F(0,0,.38+(s.get(a.id)??0)*.01)),t.add(c)}}function KP(t){const e=new $1({color:7268303,emissive:1391413,roughness:.38,metalness:.15,transparent:!0,opacity:.75});for(let n=0;n<6;n+=1){const i=Math.PI*2*n/6,r=new Mn(new po(.2,32,32),e.clone());r.position.set(Math.cos(i)*2.1,Math.sin(i)*2.1,Math.sin(i*2)*.55),r.userData.kind="node",r.userData.phase=n,t.add(r)}}function QP(t){const e=t.positions.map(f=>f.x),n=t.positions.map(f=>f.y),i=Math.min(...e),r=Math.max(...e),s=Math.min(...n),a=Math.max(...n),o=Math.max(r-i,a-s,.001),l=aS(t.edges),c=Math.max(...Array.from(l.values()),1),p=new Map;for(const f of t.positions){const d=(f.x-(i+r)/2)/o*5.2,m=(f.y-(s+a)/2)/o*5.2,_=((l.get(f.id)??0)/c-.5)*1.15,S=Math.sin(f.id*1.618)*.35;p.set(f.id,new F(d,m,_+S))}return p}function aS(t){const e=new Map;for(const n of t)e.set(n.i,(e.get(n.i)??0)+1),e.set(n.j,(e.get(n.j)??0)+1);return e}function ZP(t,e){const n=new po(.22,40,40),i=new $1({color:7922890,emissive:1325620,emissiveIntensity:.35,roughness:.22,metalness:.18}),r=new Mn(n,i);r.position.copy(t),r.castShadow=!0,r.receiveShadow=!0;const s=new Mn(new po(.34,32,32),new jl({color:7862234,transparent:!0,opacity:.1,depthWrite:!1}));return s.userData.phase=e*.8,r.add(s),r}function JP(t,e,n){const i=new wn().setFromPoints([t,e]),r=new og({color:qP,transparent:!0,opacity:Math.min(.92,.28+n/3.5)}),s=new lg(i,r),a=t.clone().add(e).multiplyScalar(.5),o=new jl({color:13172723,transparent:!0,opacity:.65}),l=new Mn(new po(.035+Math.min(n,3)*.012,18,18),o);l.position.copy(a);const c=new Da;return c.add(s,l),{group:c,line:r,bead:o}}function eN(t){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n&&(n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(8, 13, 19, 0.72)",n.beginPath(),n.arc(64,64,42,0,Math.PI*2),n.fill(),n.fillStyle="#d6fff4",n.font="700 48px Inter, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,64,66));const i=new p2(e),r=new H1({map:i,transparent:!0,depthWrite:!1}),s=new G1(r);return s.scale.set(.5,.5,.5),s}function tN(t,e,n){const i=n.getCenter(new F),r=n.getBoundingSphere(new zl),s=Number.isFinite(i.x)?i:new F(0,0,0),a=Math.max(Number.isFinite(r.radius)?r.radius:0,2.4),o=F1.degToRad(t.fov),l=2*Math.atan(Math.tan(o/2)*Math.max(t.aspect,.1)),c=Math.min(30,Math.max(7.5,Math.max(a/Math.sin(o/2),a/Math.sin(l/2))*1.18)),p=new F(0,-1,.82).normalize();t.position.copy(s).add(p.multiplyScalar(c)),t.near=Math.max(.1,c/100),t.far=Math.max(1e3,c*8),e.target.copy(s),e.update()}function nN(t){for(const e of Object.values(t))e&&typeof e=="object"&&"dispose"in e&&typeof e.dispose=="function"&&e.dispose();t.dispose()}function Bc({icon:t,label:e}){return h.jsxs("div",{className:"flex h-9 min-w-16 items-center justify-center gap-1 rounded-md border border-border bg-background/80 px-2 text-xs text-foreground/70 backdrop-blur",children:[h.jsx("span",{className:"text-primary",children:t}),h.jsx("span",{children:e})]})}const oS=new Map;function c_(t){const e=cN(t.seed),n=iN(t,e),i=t.optimize_geometry?rN(t.n_nodes,n):lS(t.n_nodes),r=sN(t.n_nodes,n);return{family:t.family,n_nodes:t.n_nodes,edges:n,positions:i,mapping_error:t.optimize_geometry?oN(n,i):null,descriptors:r}}async function u_(t,e){await uN(260);const n=aN(t.n_nodes,t.edges),i=Math.log10(e.rise_duration+e.hold_duration+e.fall_duration+10),r=Math.min(.18,Math.sqrt(e.n_roundings)/55),s=1-Math.min(.38,Math.abs(e.delta_start_pi+e.delta_end_pi)*.09),a=h_(.54+i*.055+s*.06,.42,.86),o=h_(Math.max(a+r,.72+r),a,.98),l=n.bestCut*a,c=n.bestCut*o,p=`local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,f={job_id:p,status:"completed",progress:100,steps:[{id:"geometry",label:"Geometry embedding",status:"completed",metric_label:"Mapping error",metric_value:t.mapping_error},{id:"pulser",label:"Pulser",status:"completed",metric_label:"Ratio Pulser",metric_value:a},{id:"sdp",label:"SDP",status:"completed",metric_label:"Status",metric_value:"browser-simulated"},{id:"rounding",label:"Rounding",status:"completed",metric_label:"Ratio hybrid",metric_value:o}],result:{n:t.n_nodes,target_edges:t.edges,positions:t.positions.map(d=>[d.x,d.y]),mapping_error:t.mapping_error,ratio_proxy_exact:n.bestCut>0?l/n.bestCut:0,ratio_pulser:a,ratio_product_best:o,ratio_hybrid:o,winner:"rounding",best_seed:1234+n.bestMask,n_roundings:e.n_roundings,sdp_status:"browser-simulated",E_pulser_in_qmc:l,E_product_best_in_qmc:c,E_hybrid_in_qmc:c,gain_hybrid_vs_pulser:o-a,cut_value:c,exact_cut_value:n.bestCut,best_partition:n.partition,annealing:e},error:null};return oS.set(p,f),f}async function d_(t){const e=oS.get(t);if(!e)throw new Error("Local pipeline job not found.");return e}function iN(t,e){const n=()=>Gn(t.weight_min+e()*(t.weight_max-t.weight_min)),i=[];if(t.family==="path"){for(let r=0;r<t.n_nodes-1;r+=1)i.push({i:r,j:r+1,w:n()});return i}if(t.family==="cycle"){for(let r=0;r<t.n_nodes;r+=1)i.push({i:r,j:(r+1)%t.n_nodes,w:n()});return i}if(t.family==="star"){for(let r=1;r<t.n_nodes;r+=1)i.push({i:0,j:r,w:n()});return i}for(let r=0;r<t.n_nodes;r+=1)for(let s=r+1;s<t.n_nodes;s+=1)(t.family==="complete"||e()<=t.density)&&i.push({i:r,j:s,w:n()});return i.length===0&&i.push({i:0,j:1,w:n()}),i}function lS(t){const e=1+t*.08;return Array.from({length:t},(n,i)=>({id:i,x:Gn(e*Math.cos(2*Math.PI*i/t)),y:Gn(e*Math.sin(2*Math.PI*i/t))}))}function rN(t,e){const n=lS(t),i=cS(t,e);for(let r=0;r<90;r+=1){const s=Array.from({length:t},()=>({x:0,y:0}));for(let a=0;a<t;a+=1)for(let o=a+1;o<t;o+=1){const l=n[a].x-n[o].x,c=n[a].y-n[o].y,f=.012/Math.max(l*l+c*c,.02);s[a].x+=l*f,s[a].y+=c*f,s[o].x-=l*f,s[o].y-=c*f}for(const a of e){const o=n[a.i],l=n[a.j],c=l.x-o.x,p=l.y-o.y,f=Math.max(Math.sqrt(c*c+p*p),.01),d=1/Math.cbrt(Math.max(a.w,.01)),m=(f-d)*.012;s[a.i].x+=c/f*m,s[a.i].y+=p/f*m,s[a.j].x-=c/f*m,s[a.j].y-=p/f*m}for(const a of n){const o=.002+i[a.id]*8e-4;a.x=Gn(a.x+s[a.id].x-a.x*o),a.y=Gn(a.y+s[a.id].y-a.y*o)}}return n}function sN(t,e){const n=cS(t,e),i=t*(t-1)/2,r=n.reduce((l,c)=>l+c,0)/t,s=Math.max(...n),a=n.reduce((l,c)=>l+(c-r)**2,0)/t,o=Math.max(2,Math.ceil(r+Math.sqrt(a)));return{n:t,n_edges:e.length,density:i?Gn(e.length/i):0,avg_degree:Gn(r),max_degree:s,degree_variance:Gn(a),hub_degree_threshold:o,hub_count:n.filter(l=>l>=o).length,sparsity:Gn(1-e.length/i),clustering_coeff_mean:Gn(lN(t,e)),degree_centralization:Gn(n.reduce((l,c)=>l+(s-c),0)/((t-1)*(t-2)||1))}}function aN(t,e){let n=-1/0,i=0;const r=1<<t;for(let s=0;s<r;s+=1){let a=0;for(const o of e)(s>>o.i&1)!==(s>>o.j&1)&&(a+=o.w);a>n&&(n=a,i=s)}return{bestCut:Gn(n),bestMask:i,partition:Array.from({length:t},(s,a)=>i>>a&1)}}function oN(t,e){if(t.length===0)return 0;const n=t.reduce((r,s)=>{const a=e[s.i],o=e[s.j],c=1/Math.max(Math.hypot(a.x-o.x,a.y-o.y),.01)**3;return r+(c-s.w)**2},0),i=t.reduce((r,s)=>r+s.w**2,0);return Gn(Math.sqrt(n/Math.max(i,.001)))}function lN(t,e){const n=Array.from({length:t},()=>new Set);for(const r of e)n[r.i].add(r.j),n[r.j].add(r.i);let i=0;for(let r=0;r<t;r+=1){const s=Array.from(n[r]),a=s.length*(s.length-1)/2;if(a===0)continue;let o=0;for(let l=0;l<s.length;l+=1)for(let c=l+1;c<s.length;c+=1)n[s[l]].has(s[c])&&(o+=1);i+=o/a}return i/t}function cS(t,e){const n=Array.from({length:t},()=>0);for(const i of e)n[i.i]+=1,n[i.j]+=1;return n}function cN(t){let e=t>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function uN(t){return new Promise(e=>{window.setTimeout(e,t)})}function h_(t,e,n){return Math.min(n,Math.max(e,t))}function Gn(t){return Number(t.toFixed(6))}const uS="".trim().replace(/\/$/,""),fg=uS.length>0,gd="".trim().replace(/\/$/,"");function xd(){var e;let t=localStorage.getItem("hpc_bridge_token");return t||(t=((e=window.prompt("Jeton d'accès HPC :"))==null?void 0:e.trim())??"",t&&localStorage.setItem("hpc_bridge_token",t)),t}function dN(){var t;try{return!!((t=localStorage.getItem("hpc_bridge_token"))!=null&&t.trim())}catch{return!1}}async function Ys(t,e){const{baseUrl:n=uS,...i}=e??{},r=await fetch(`${n}${t}`,{...i,headers:{"Content-Type":"application/json",...i.headers}});if(!r.ok){const s=await r.text();throw new Error(s||`Request failed with status ${r.status}`)}return r.json()}function f_(t){return fg?Ys("/api/graph/generate",{method:"POST",body:JSON.stringify(t)}).catch(()=>c_(t)):Promise.resolve(c_(t))}function hN(t,e){return fg?Ys("/api/pipeline/run",{method:"POST",body:JSON.stringify({graph:t,annealing:e,n_roundings:e.n_roundings,seed:1234})}).catch(()=>u_(t,e)):u_(t,e)}function fN(t){return fg?Ys(`/api/pipeline/${t}/status`).catch(()=>d_(t)):d_(t)}async function pN(t,e,n,i){return Ys("/api/jobs",{baseUrl:gd,method:"POST",headers:{Authorization:`Bearer ${xd()}`},body:JSON.stringify({kind:"hybrid_pipeline",graph:{family:t.family,n_nodes:t.n_nodes,density:t.density,weight_min:t.weight_min,weight_max:t.weight_max,seed:t.seed},annealing:e,seed:1234,enable_animations:n,resources:i})})}function mN(t){return Ys(`/api/jobs/${t}`,{baseUrl:gd,headers:{Authorization:`Bearer ${xd()}`}})}function p_(t){return Ys(`/api/jobs/${t}/cancel`,{baseUrl:gd,method:"POST",headers:{Authorization:`Bearer ${xd()}`}})}function gN(){return Ys("/api/workers",{baseUrl:gd,headers:{Authorization:`Bearer ${xd()}`}})}const xN=["done","error","cancelled"];function zp(t){return!xN.includes(t)}function _N(){const t=at(r=>r.config),e=at(r=>r.randomizeSeed),n=at(r=>r.setConfig),i=at(r=>r.setGraph);return tu({mutationFn:()=>{if(e){const r=Math.floor(Math.random()*1e6);return n({seed:r}),f_({...t,seed:r})}return f_(t)},onSuccess:i})}function vN(){const t=at(S=>S.config),e=at(S=>S.graph),n=at(S=>S.job),i=at(S=>S.hpcJob),r=at(S=>S.annealing),s=at(S=>S.enableAnimations),a=at(S=>S.hpcResources),o=at(S=>S.setJob),l=at(S=>S.setHpcJob),c=tu({mutationFn:()=>{if(!e)throw new Error("Generate a graph before running the pipeline.");return hN(e,r)},onSuccess:o}),p=qd({queryKey:["pipeline-status",n==null?void 0:n.job_id],queryFn:()=>fN((n==null?void 0:n.job_id)??""),enabled:!!(n!=null&&n.job_id)&&(n==null?void 0:n.status)!=="completed"&&(n==null?void 0:n.status)!=="failed",refetchInterval:1200}),f=tu({mutationFn:async()=>(i&&zp(i.status)&&await p_(i.job_id).catch(()=>{}),pN(t,r,s,a)),onMutate:()=>l(null),onSuccess:l}),d=qd({queryKey:["hpc-job-status",i==null?void 0:i.job_id],queryFn:()=>mN((i==null?void 0:i.job_id)??""),enabled:!!(i!=null&&i.job_id)&&!!(i&&zp(i.status)),refetchInterval:3e3}),m=tu({mutationFn:()=>{if(!i)throw new Error("No HPC job to stop.");return p_(i.job_id)},onSuccess:l}),_=qd({queryKey:["hpc-workers"],queryFn:gN,enabled:dN(),refetchInterval:5e3,retry:1});return we.useEffect(()=>{p.data&&p.data.job_id===(n==null?void 0:n.job_id)&&o(p.data)},[n==null?void 0:n.job_id,o,p.data]),we.useEffect(()=>{d.data&&d.data.job_id===(i==null?void 0:i.job_id)&&l(d.data)},[i==null?void 0:i.job_id,d.data,l]),{run:c,status:p,hpcRun:f,hpcStatus:d,hpcStop:m,workers:_}}const yN=["path","cycle","star","complete","random"],SN="/quantina/media/brand/quantina-logo.png";function MN(){const t=at(c=>c.config),e=at(c=>c.annealing),n=at(c=>c.enableAnimations),i=at(c=>c.randomizeSeed),r=at(c=>c.setConfig),s=at(c=>c.setAnnealing),a=at(c=>c.setEnableAnimations),o=at(c=>c.setRandomizeSeed),l=_N();return h.jsxs("aside",{className:"flex min-h-0 flex-col overflow-y-auto overscroll-contain border-b border-border bg-muted/30 p-4 sm:p-5 lg:h-[100svh] lg:border-b-0 lg:border-r",children:[h.jsxs("div",{className:"mb-6 flex items-center gap-3",children:[h.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 bg-black/25 p-1 shadow-[0_0_28px_hsl(var(--primary)/0.18)]",children:h.jsx("img",{alt:"","aria-hidden":"true",className:"h-full w-full object-contain drop-shadow-[0_0_7px_rgba(255,79,116,0.3)]",src:SN})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-lg font-semibold",children:"QuantINA Lab"}),h.jsx("p",{className:"text-sm text-foreground/60",children:"Neutral-atom simulation"})]})]}),h.jsxs("div",{className:"space-y-5",children:[h.jsxs("button",{type:"button",onClick:()=>l.mutate(),disabled:l.isPending,className:"flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60",children:[l.isPending?h.jsx(Jb,{className:"animate-spin",size:16}):h.jsx(Zb,{size:16}),"Generate graph"]}),l.error?h.jsx("p",{className:"rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200",children:l.error.message}):null,h.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2",children:[h.jsxs("label",{className:"flex flex-1 items-center gap-2 text-sm",children:[h.jsx("span",{className:"text-foreground/60",children:"Seed"}),h.jsx("input",{type:"number",value:t.seed,disabled:i,onChange:c=>r({seed:Number(c.target.value)}),className:"w-full min-w-0 rounded-md border border-border bg-background px-2 py-1 font-mono text-sm outline-none focus:ring-2 focus:ring-primary disabled:opacity-45"})]}),h.jsxs("label",{className:"flex items-center gap-2 text-xs text-foreground/60",children:[h.jsx("input",{type:"checkbox",checked:i,onChange:c=>o(c.target.checked),className:"h-4 w-4 accent-primary"}),"Randomize"]})]}),h.jsxs("label",{className:"block",children:[h.jsx("span",{className:"text-sm font-medium text-foreground/80",children:"Graph family"}),h.jsx("select",{value:t.family,onChange:c=>r({family:c.target.value}),className:"mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary",children:yN.map(c=>h.jsx("option",{value:c,children:c},c))})]}),h.jsx(Bn,{label:"Nodes",value:t.n_nodes,min:2,max:12,step:1,onChange:c=>r({n_nodes:c})}),h.jsx(Bn,{label:"Density",value:t.density,min:.1,max:1,step:.05,disabled:t.family!=="random",onChange:c=>r({density:c})}),h.jsx(Bn,{label:"Min weight",value:t.weight_min,min:.1,max:3,step:.1,onChange:c=>r({weight_min:c})}),h.jsx(Bn,{label:"Max weight",value:t.weight_max,min:.2,max:4,step:.1,onChange:c=>r({weight_max:c})}),h.jsxs("label",{className:"flex items-center justify-between rounded-md border border-border bg-background/70 px-3 py-3 text-sm",children:[h.jsx("span",{children:"Optimize atom geometry"}),h.jsx("input",{type:"checkbox",checked:t.optimize_geometry,onChange:c=>r({optimize_geometry:c.target.checked}),className:"h-4 w-4 accent-primary"})]}),h.jsxs("label",{className:"flex items-center justify-between rounded-md border border-border bg-background/70 px-3 py-3 text-sm",children:[h.jsxs("div",{children:[h.jsx("span",{children:"HPC animations"}),h.jsx("p",{className:"text-xs text-foreground/50",children:"Magnetization replay & rounding search (HPC run only)"})]}),h.jsx("input",{type:"checkbox",checked:n,onChange:c=>a(c.target.checked),className:"h-4 w-4 accent-primary"})]}),h.jsxs("div",{className:"rounded-md border border-border bg-background/55 p-3",children:[h.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(sw,{size:17,className:"text-primary"}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-sm font-semibold",children:"Annealing controls"}),h.jsx("p",{className:"text-xs text-foreground/50",children:"Dynamic pulse schedule"})]})]}),h.jsx("button",{type:"button",onClick:()=>s({omega_peak_mhz:2,rise_duration:1e3,hold_duration:1e3,fall_duration:26e3,delta_start_pi:1,delta_hold_pi:-.5,delta_end_pi:-1,sampling_rate:.05,n_roundings:32}),className:"rounded-md border border-border p-2 text-foreground/65 transition hover:bg-muted hover:text-foreground",title:"Reset annealing controls",children:h.jsx(tw,{size:15})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx(Bn,{label:"Omega peak",value:e.omega_peak_mhz,min:.5,max:5,step:.1,unit:"MHz",onChange:c=>s({omega_peak_mhz:c})}),h.jsx(Bn,{label:"Rise",value:e.rise_duration,min:100,max:5e3,step:100,unit:"ns",onChange:c=>s({rise_duration:c})}),h.jsx(Bn,{label:"Hold",value:e.hold_duration,min:0,max:6e3,step:100,unit:"ns",onChange:c=>s({hold_duration:c})}),h.jsx(Bn,{label:"Fall",value:e.fall_duration,min:1e3,max:4e4,step:500,unit:"ns",onChange:c=>s({fall_duration:c})}),h.jsx(Bn,{label:"Delta start",value:e.delta_start_pi,min:-2,max:2,step:.05,unit:"pi",onChange:c=>s({delta_start_pi:c})}),h.jsx(Bn,{label:"Delta hold",value:e.delta_hold_pi,min:-2,max:2,step:.05,unit:"pi",onChange:c=>s({delta_hold_pi:c})}),h.jsx(Bn,{label:"Delta end",value:e.delta_end_pi,min:-2,max:2,step:.05,unit:"pi",onChange:c=>s({delta_end_pi:c})}),h.jsx(Bn,{label:"Sampling",value:e.sampling_rate,min:.01,max:.2,step:.01,onChange:c=>s({sampling_rate:c})}),h.jsx(Bn,{label:"Roundings",value:e.n_roundings,min:8,max:128,step:8,onChange:c=>s({n_roundings:c})})]}),h.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2 rounded-md border border-border bg-muted/35 p-2",children:[h.jsx(Nh,{label:"Total",value:`${lu(e.rise_duration+e.hold_duration+e.fall_duration,0)} ns`}),h.jsx(Nh,{label:"Sweep",value:`${lu(e.delta_start_pi,2)}→${lu(e.delta_end_pi,2)} pi`}),h.jsx(Nh,{label:"Mode",value:h.jsx(qm,{size:15})})]})]})]})]})}function Bn({label:t,value:e,min:n,max:i,step:r,unit:s,disabled:a=!1,onChange:o}){const l=(e-n)/(i-n)*100;return h.jsxs("label",{className:a?"block opacity-45":"block",children:[h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsx("span",{className:"font-medium text-foreground/80",children:t}),h.jsxs("span",{className:"font-mono text-foreground/60",children:[lu(e,r<1?2:0),s?h.jsx("span",{className:"ml-1 text-foreground/40",children:s}):null]})]}),h.jsx("input",{type:"range",min:n,max:i,step:r,value:e,disabled:a,onChange:c=>o(Number(c.target.value)),className:"modern-slider mt-3 w-full",style:{"--slider-progress":`${l}%`}})]})}function Nh({label:t,value:e}){return h.jsxs("div",{className:"min-w-0",children:[h.jsx("p",{className:"text-[10px] font-medium uppercase text-foreground/45",children:t}),h.jsx("div",{className:"mt-1 flex min-h-5 items-center truncate font-mono text-xs text-primary",children:e})]})}function lu(t,e){return t.toFixed(e)}const m_={commitHash:"unknown",commitDate:"unknown",buildDate:"unknown"},xa=(()=>{try{return{...m_,...JSON.parse('{"commitHash":"74bfcc3a6379","commitDate":"2026-10-20T15:42:24+02:00","buildDate":"2026-10-20T13:42:55.156Z"}')}}catch{return m_}})();function zc(t){if(t==="unknown")return"unknown";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}const EN={queued_slurm:"queued on SLURM"};function jp(t){const e=Math.round(t),n=Math.floor(e/(24*60)),i=Math.floor(e%(24*60)/60),r=e%60;return n>0?i>0?`${n}j ${i}h`:`${n}j`:i>0?r>0?`${i}h${String(r).padStart(2,"0")}`:`${i}h`:`${r}min`}function bN(t){const e=Math.max(0,Math.round(t)),n=Math.floor(e/(24*3600)),i=Math.floor(e%(24*3600)/3600),r=Math.floor(e%3600/60),s=e%60,a=`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(s).padStart(2,"0")}`;return n>0?`${n}j ${a}`:i>0?a:`${String(r).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function wN(t){const[e,n]=we.useState(()=>Date.now());return we.useEffect(()=>{if(!t)return;const i=setInterval(()=>n(Date.now()),1e3);return()=>clearInterval(i)},[t]),e}const g_={setup:"setup",positions:"geometry",pulser:"pulser",sdp:"sdp",rounding:"rounding"};function TN(t){return t==="done"?"completed":t==="error"||t==="cancelled"?"failed":"running"}const AN=new Set(["queued","waiting_for_worker","dispatched","submitting","queued_slurm","cancelling"]);function CN(t,e){return t?t==="done"?h.jsx(a1,{size:16}):t==="error"||t==="cancelled"?h.jsx(Ou,{size:16}):AN.has(t)?h.jsx(Ba,{className:"animate-spin",size:16}):h.jsx(l1,{size:16}):e?h.jsx(Ou,{size:16}):h.jsx(ud,{size:16})}function RN(){var v,M,T;const[t,e]=we.useState(!1),n=at(w=>w.graph),i=at(w=>w.job),r=at(w=>w.hpcJob),s=at(w=>w.hpcResources),a=at(w=>w.setHpcResources),{run:o,hpcRun:l,hpcStop:c,workers:p}=vN(),f=(M=(v=p.data)==null?void 0:v[0])==null?void 0:M.capabilities,d=r&&zp(r.status),m=d&&r.status!=="cancelling",_=r?TN(r.status):l.error?"failed":"pending",S=p.isSuccess,x=((T=p.data)==null?void 0:T.length)??0,u=S&&x===0,g=we.useMemo(()=>{var w,R;return r?ON(((w=r.progress)==null?void 0:w.phases)??[],r.status,r.result,(R=r.progress)==null?void 0:R.current):(i==null?void 0:i.steps)??[]},[r,i==null?void 0:i.steps]);return h.jsxs("section",{className:"rounded-md border border-border bg-muted/25 p-4 shadow-panel",children:[h.jsxs("div",{className:"mb-4",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-foreground/60",children:"Pipeline"}),h.jsx("p",{className:"text-xl font-semibold",children:"Neutral-atom experiment workflow"}),h.jsx("p",{className:"mt-1 font-mono text-[11px] text-foreground/40",title:`Build: ${zc(xa.buildDate)}
Commit: ${xa.commitHash}
Commit date: ${zc(xa.commitDate)}`,children:`build ${zc(xa.buildDate)} · commit ${xa.commitHash} (${zc(xa.commitDate)})`})]}),h.jsxs("div",{className:"mt-4 flex flex-wrap items-stretch gap-2",children:[h.jsxs("button",{type:"button",disabled:!n||o.isPending||(i==null?void 0:i.status)==="running"||(i==null?void 0:i.status)==="queued",onClick:()=>o.mutate(),className:"flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45",children:[o.isPending||(i==null?void 0:i.status)==="running"?h.jsx(Ba,{className:"animate-spin",size:16}):h.jsx(ud,{size:16}),"Run"]}),h.jsxs("div",{className:"flex items-stretch overflow-hidden rounded-md border border-primary/60",children:[h.jsxs("button",{type:"button",disabled:!n||l.isPending||u,onClick:()=>l.mutate(),className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-45",title:u?"No HPC worker connected to hpc-bridge — start hpc_worker.py on the cluster":d?"Cancel the running HPC job and submit this configuration instead":"Submit this configuration to hpc-bridge",children:[l.isPending?h.jsx(Ba,{className:"animate-spin",size:16}):h.jsx(l1,{size:16}),d?"Restart HPC":"Run HPC"]}),m?h.jsxs("button",{type:"button",disabled:c.isPending,onClick:()=>c.mutate(),className:"flex items-center gap-2 border-l border-primary/60 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45",title:"Stop the running HPC job without submitting a new one",children:[c.isPending?h.jsx(Ba,{className:"animate-spin",size:16}):h.jsx(ow,{size:16}),"Stop"]}):null]}),h.jsxs("button",{type:"button",disabled:!n,onClick:()=>e(!0),className:"flex items-center gap-2 rounded-md border border-cyan-300/45 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15 disabled:cursor-not-allowed disabled:opacity-40",title:n?"Prepare this configuration for quantum hardware":"Generate a graph before preparing a QPU run",children:[h.jsx(Wf,{size:16}),"Run QPU"]})]})]}),S?h.jsx("p",{className:"mb-3 -mt-2 text-right text-[11px] text-foreground/40",children:x>0?`${x} HPC worker${x>1?"s":""} connected to hpc-bridge`:"No HPC worker connected to hpc-bridge"}):null,h.jsx(LN,{capabilities:f,resources:s,onChange:a}),t?h.jsx("div",{id:"qpu-integration-status",className:"mb-4 rounded-md border border-cyan-300/30 bg-cyan-300/[0.07] p-3 text-sm",role:"status",children:h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[h.jsxs("div",{className:"flex min-w-0 items-start gap-3",children:[h.jsx(Wf,{className:"mt-0.5 shrink-0 text-cyan-200",size:18}),h.jsxs("div",{children:[h.jsx("p",{className:"font-semibold text-cyan-100",children:"QPU pipeline ready for integration"}),h.jsx("p",{className:"mt-1 text-foreground/65",children:"The current graph and annealing configuration will be submitted to quantum hardware once the QPU provider connector is configured."}),h.jsx("p",{className:"mt-2 font-mono text-xs text-foreground/45",children:"Provider: not configured · Submission: unavailable"})]})]}),h.jsx("button",{type:"button",onClick:()=>e(!1),className:"shrink-0 rounded-md border border-cyan-300/25 p-1.5 text-cyan-100/70 transition hover:bg-cyan-300/10 hover:text-cyan-50",title:"Close QPU status",children:h.jsx(Ou,{size:15})})]})}):null,h.jsx("div",{className:"mb-4 h-2 overflow-hidden rounded-full bg-background",children:h.jsx("div",{className:"h-full bg-primary transition-all duration-500",style:{width:`${(i==null?void 0:i.progress)??0}%`}})}),h.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5",children:(g.length>0?g:cu).map(w=>h.jsx(BN,{step:w},w.id))}),o.error||i!=null&&i.error?h.jsx("p",{className:"mt-4 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200",children:o.error instanceof Error?o.error.message:i==null?void 0:i.error}):null,l.error||r?h.jsxs("div",{className:`mt-4 rounded-md border p-3 text-sm transition-colors duration-500 ${dS[_]}`,children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsxs("span",{className:`flex items-center gap-2 font-semibold ${Hp[_]}`,children:[CN(r==null?void 0:r.status,!!l.error),"HPC job"]}),h.jsx("span",{className:"font-mono text-xs text-foreground/60",children:(r==null?void 0:r.job_id)??"not submitted"})]}),l.error?h.jsx("p",{className:"mt-2 text-red-200",children:l.error.message}):null,c.error?h.jsx("p",{className:"mt-2 text-red-200",children:c.error.message}):null,r?h.jsxs("div",{className:"mt-2 flex items-center justify-between gap-3",children:[h.jsxs("p",{className:"text-foreground/70",children:["Status: ",h.jsx("span",{className:"font-medium text-foreground",children:EN[r.status]??r.status}),r.slurm_job_id?` · SLURM ${r.slurm_job_id}`:"",r.resources?` · ${r.resources.nodes} node${r.resources.nodes>1?"s":""} · ${r.resources.cpus_per_task} cores${r.resources.partition?` · partition ${r.resources.partition}`:""}${r.resources.mem_gb?` · ${r.resources.mem_gb}GB`:""}${r.resources.time_min_minutes?` · time-min ${jp(r.resources.time_min_minutes)}`:""}`:""]}),r.result?h.jsx(IN,{result:r.result}):null]}):null,(r==null?void 0:r.status)==="queued_slurm"&&r.queue_position!=null?h.jsx(DN,{position:r.queue_position,total:r.queue_total??null,estimatedStart:r.estimated_start??null,estimatedStartPending:r.estimated_start_pending??!1,queuedSince:r.queued_since??r.created_at??null}):null,r!=null&&r.error?h.jsx("p",{className:"mt-2 text-red-200",children:r.error}):null]}):null]})}const PN=[{afterMinutes:20,className:"text-red-400"},{afterMinutes:10,className:"text-orange-400"},{afterMinutes:5,className:"text-yellow-400"}];function NN(t){if(t==null)return"text-foreground/70";const e=PN.find(n=>t>=n.afterMinutes);return(e==null?void 0:e.className)??"text-foreground/70"}function DN({position:t,total:e,estimatedStart:n,estimatedStartPending:i,queuedSince:r}){const s=t<=1?"next in queue":e!=null?`#${t} of ${e} pending`:`#${t} in queue`,a=wN(n!=null||r!=null),o=n?new Date(n).getTime():null,l=o!=null?(o-a)/1e3:null,c=r?new Date(r).getTime():null,p=c!=null?(a-c)/6e4:null,f=l!=null?l/60:null,d=NN(f??p);return h.jsxs("div",{className:"mt-1 flex items-center justify-between gap-3 text-xs text-foreground/50",children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsxs("span",{title:"Rank among pending jobs on this partition — indicative, not a time estimate",children:["Queue position: ",s]}),n&&o!=null&&l!=null?h.jsxs("span",{className:d,title:"Estimated by SLURM's backfill scheduler — not a guarantee",children:["· estimated"," ",h.jsx("span",{className:"font-bold",children:l>0?`starting in ${bN(l)}`:"starting any moment"})]}):i?h.jsxs("span",{className:`inline-flex items-center gap-1 ${d}`,children:[h.jsx(Ba,{className:"h-3 w-3 animate-spin"}),"estimating start time…"]}):null]}),o!=null?h.jsxs("span",{className:d,title:"Estimated by SLURM's backfill scheduler — not a guarantee",children:["est. ",new Date(o).toLocaleString()]}):null]})}function Dh({label:t,value:e,min:n,max:i,suffix:r="",formatValue:s,onChange:a}){return h.jsxs("label",{className:"flex flex-col gap-1 text-xs text-foreground/60",children:[h.jsxs("span",{className:"flex items-center justify-between",children:[h.jsx("span",{children:t}),h.jsx("span",{className:"font-mono text-foreground/80",children:s?s(e):`${e}${r}`})]}),h.jsx("input",{type:"range",min:n,max:i,value:Math.min(Math.max(e,n),i),onChange:o=>a(Number(o.target.value)),className:"accent-primary"})]})}function LN({capabilities:t,resources:e,onChange:n}){const i=we.useMemo(()=>t?Object.keys(t.partitions).sort():[],[t]),r=e.partition??(t==null?void 0:t.default_partition)??i[0],s=r?t==null?void 0:t.partitions[r]:void 0,a=(t==null?void 0:t.max_cpus)??32,o=(t==null?void 0:t.max_mem_gb)??0,l=o>0?o:128,c=(t==null?void 0:t.default_time_min_minutes)??20,p=(s==null?void 0:s.max_time_minutes)??1440;return h.jsxs("details",{className:"mb-4 rounded-md border border-border bg-background/60",children:[h.jsxs("summary",{className:"cursor-pointer select-none px-3 py-2 text-xs font-medium text-foreground/60 hover:text-foreground",children:["Job resources",r?` (${r})`:""]}),h.jsxs("div",{className:"grid gap-3 border-t border-border p-3 sm:grid-cols-2 lg:grid-cols-4",children:[h.jsxs("label",{className:"flex flex-col gap-1 text-xs text-foreground/60",children:["Partition",h.jsxs("select",{value:r??"",disabled:i.length===0,onChange:f=>n({partition:f.target.value}),className:"rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground disabled:opacity-50",children:[i.length===0?h.jsx("option",{value:"",children:"(none advertised)"}):null,i.map(f=>h.jsx("option",{value:f,children:f},f))]})]}),h.jsx(Dh,{label:"Cores",min:1,max:a,value:e.cpus??(t==null?void 0:t.default_cpus_per_task)??8,onChange:f=>n({cpus:f})}),h.jsx(Dh,{label:`Memory (0 = auto${o<=0?", no server-side cap":""})`,min:0,max:l,suffix:" GB",value:e.mem_gb??0,onChange:f=>n({mem_gb:f})}),h.jsx(Dh,{label:`Min time${(s==null?void 0:s.max_time_minutes)!=null?` (partition max ${jp(s.max_time_minutes)})`:""}`,min:1,max:p,formatValue:jp,value:e.time_min_minutes??c,onChange:f=>n({time_min_minutes:f})})]})]})}function IN({result:t}){return h.jsxs("details",{className:"shrink-0 rounded-md border border-border bg-background/60",children:[h.jsx("summary",{className:"cursor-pointer select-none px-2 py-1.5 text-xs font-medium text-foreground/60 hover:text-foreground",children:"Raw result JSON"}),h.jsx("pre",{className:"max-h-40 overflow-auto border-t border-border p-2 text-xs text-foreground/65",children:JSON.stringify(t,null,2)})]})}const cu=[{id:"setup",label:"Setup",status:"pending",metric_label:"Import duration",metric_value:null},{id:"geometry",label:"Geometry embedding",status:"pending",metric_label:"Mapping error",metric_value:null},{id:"pulser",label:"Pulser",status:"pending",metric_label:"Ratio Pulser",metric_value:null},{id:"sdp",label:"SDP",status:"pending",metric_label:"Status",metric_value:null},{id:"rounding",label:"Rounding",status:"pending",metric_label:"Ratio hybrid",metric_value:null}],UN={setup:"setup_duration_seconds",geometry:"mapping_error",pulser:"ratio_pulser",sdp:"sdp_status",rounding:"ratio_hybrid"},FN={setup:"duration_seconds",geometry:"mapping_error",pulser:"ratio_pulser",sdp:"sdp_status",rounding:"ratio_hybrid"};function ON(t,e,n,i){const r=new Set(t.map(f=>g_[f.phase])),s=e==="error"||e==="cancelled",a=e==="running",o=e==="done",l=n==null?void 0:n.phase_durations_seconds,c=o&&l&&typeof l=="object"?Object.keys(l):[],p=new Set(c.map(f=>f==="positions"?"geometry":f));return cu.map((f,d)=>{if(r.has(f.id)||p.has(f.id)){const S=t.find(T=>g_[T.phase]===f.id),x=FN[f.id],g=(S&&x?S[x]:void 0)??(n==null?void 0:n[UN[f.id]]),v=f.id==="geometry"?"positions":f.id,M=!S&&l?l[v]:void 0;return{...f,status:"completed",metric_value:typeof g=="number"||typeof g=="string"?g:null,duration_seconds:(S==null?void 0:S.duration_seconds)??(typeof M=="number"?M:void 0)}}const m=d===0||r.has(cu[d-1].id)||p.has(cu[d-1].id);if(s)return{...f,status:m?"failed":"pending"};const _=m&&a;return _&&f.id==="rounding"&&i&&i.total>0?{...f,status:"running",metric_label:"Rounding trials",metric_value:`${i.done}/${i.total}`}:{...f,status:_?"running":"pending"}})}const dS={pending:"border-border bg-background/70",running:"border-primary/70 bg-primary/10 shadow-[0_0_0_1px_rgba(120,228,202,0.25)]",completed:"border-primary bg-primary/20",failed:"border-red-500/70 bg-red-500/10"},Hp={pending:"text-foreground/50",running:"text-primary",completed:"text-primary",failed:"text-red-300"};function kN(t,e=15){return{pending:h.jsx(ud,{size:e}),running:h.jsx(Ba,{className:"animate-spin",size:e}),completed:h.jsx(a1,{size:e}),failed:h.jsx(Ou,{size:e})}[t]}function BN({step:t}){const e=kN(t.status);return h.jsxs("article",{className:`min-h-28 rounded-md border p-3 transition-colors duration-500 ${dS[t.status]}`,children:[h.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[h.jsxs("span",{className:`text-xs font-medium uppercase ${Hp[t.status]}`,children:[t.status,t.duration_seconds!==void 0?` · ${t.duration_seconds.toFixed(2)}s`:""]}),h.jsx("span",{className:Hp[t.status],children:e})]}),h.jsx("h3",{className:"text-sm font-semibold leading-tight",children:t.label}),h.jsx("p",{className:"mt-2 text-xs text-foreground/55",children:t.metric_label}),h.jsx("p",{className:"mt-1 truncate font-mono text-sm text-primary",children:typeof t.metric_value=="number"?t.metric_value.toFixed(5):t.metric_value??"—"})]})}const zN=[["ratio_proxy_exact","Ratio Proxy"],["cut_value","Cut Value"],["mapping_error","Mapping Error"],["gain_hybrid_vs_pulser","Gain Hybrid"]];function jN(){const t=at(s=>s.job),e=at(s=>s.hpcJob),n=(t==null?void 0:t.result)??(e==null?void 0:e.result),i=we.useMemo(()=>n?[{name:"Pulser",ratio:Number(n.ratio_pulser??0)},{name:"Hybrid",ratio:Number(n.ratio_hybrid??0)}]:[{name:"Pulser",ratio:0},{name:"Hybrid",ratio:0}],[n]),r=Math.max(...i.map(s=>s.ratio),1);return h.jsxs("aside",{className:"flex min-h-0 flex-col gap-4 overflow-y-auto overscroll-contain border-t border-border bg-muted/30 p-4 sm:p-5 lg:h-[100svh] lg:border-t-0 lg:border-l",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"Results"}),h.jsx("h2",{className:"text-xl font-semibold",children:"Live metrics"})]}),h.jsx("button",{type:"button",disabled:!n,onClick:()=>VN(n),className:"rounded-md border border-border p-2 text-foreground/75 transition hover:bg-background disabled:opacity-40",title:"Export JSON",children:h.jsx(jb,{size:16})})]}),h.jsx("div",{className:"grid grid-cols-2 gap-3",children:zN.map(([s,a])=>h.jsx(HN,{label:a,value:n==null?void 0:n[s]},s))}),h.jsxs("div",{className:"min-h-64 rounded-md border border-border bg-background/70 p-4",children:[h.jsx("p",{className:"mb-4 text-sm font-semibold",children:"Pulser vs Hybrid"}),h.jsx("div",{className:"grid h-[210px] grid-cols-2 items-end gap-4 border-b border-l border-border/70 px-4 pb-6 pt-4",children:i.map(s=>h.jsxs("div",{className:"flex h-full min-w-0 flex-col items-center justify-end gap-3",children:[h.jsx("div",{className:"flex h-full w-full items-end justify-center",children:h.jsx("div",{className:"w-full max-w-[5rem] rounded-t-md bg-primary",style:{height:`${Math.max(4,s.ratio/r*100)}%`}})}),h.jsxs("div",{className:"text-center",children:[h.jsx("p",{className:"text-xs font-medium text-foreground/60",children:s.name}),h.jsx("p",{className:"mt-1 font-mono text-xs text-primary",children:n?s.ratio.toFixed(5):"—"})]})]},s.name))})]})]})}function HN({label:t,value:e}){const n=typeof e=="number"?e.toFixed(5):"—";return h.jsxs("article",{className:"rounded-md border border-border bg-background/70 p-3",children:[h.jsx("p",{className:"text-xs text-foreground/55",children:t}),h.jsx("p",{className:"mt-2 font-mono text-lg font-semibold text-primary",children:n}),h.jsx("div",{className:"mt-3 h-8 rounded-sm bg-[linear-gradient(90deg,rgba(67,217,184,.1),rgba(67,217,184,.45),rgba(67,217,184,.08))]"})]})}function VN(t){if(!t)return;const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="quantum-maxcut-result.json",i.click(),URL.revokeObjectURL(n)}const GN=[{id:"maxcut",name:"MaxCut Case Study",description:"Explore graph benchmarks with neutral-atom simulation and classical comparison methods.",category:"Graph benchmark",status:"available",tags:["Pulser","Graphs","Benchmark"],route:"/simulations/maxcut",icon:bl,visual:"graph"},{id:"ald",name:"ALD Simulation",description:"Simulate Atomic Layer Deposition processes and explore quantum-enhanced modelling approaches.",category:"Quantum chemistry",status:"available",tags:["Chemistry","Materials","Simulation"],route:"https://karimelhoudaigui.github.io/quantum-ald-simulation/",icon:u1,visual:"layers"}],WN=[{name:"Portfolio Optimization",icon:$0},{name:"Travelling Salesman Problem",icon:bl},{name:"Molecular Simulation",icon:u1},{name:"PDE Simulation",icon:$0},{name:"Machine Learning",icon:bl},{name:"Custom Hamiltonian",icon:Wf}],XN="/quantina/media/simulation-stack-4k.mp4",qN="/quantina/media/simulation-stack-4k.mov",x_="/quantina/media/simulation-stack-poster.png";function $N({onNavigate:t}){const e=YN();return h.jsx("main",{className:"min-h-[100svh] overflow-x-clip bg-platform text-foreground",children:h.jsxs("section",{className:"relative overflow-x-clip px-5 py-6 sm:px-8 lg:px-10",children:[h.jsx(QN,{}),h.jsxs("div",{className:"relative z-10 mx-auto w-full min-w-0 max-w-7xl",children:[h.jsxs("header",{className:"flex items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[h.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-primary/[0.12] text-primary shadow-[0_0_28px_hsl(var(--primary)/0.18)]",children:h.jsx(o1,{size:21})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("p",{className:"truncate text-sm font-semibold",children:"QuantINA"}),h.jsx("p",{className:"hidden truncate text-xs text-foreground/50 sm:block",children:"Scientific computing workspace · Created by HYBQUANT"})]})]}),h.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[h.jsx("button",{type:"button",onClick:()=>t("/quantina"),className:"rounded-md border border-primary/25 bg-primary/10 px-2.5 py-2 text-xs font-semibold text-primary transition hover:border-primary/45 sm:px-3",children:"QuantINA"}),h.jsxs("div",{className:"hidden items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-foreground/60 backdrop-blur md:flex",children:[h.jsx("span",{className:"h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]"}),"Research environment"]})]})]}),h.jsxs("div",{className:"grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-12 py-14 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:py-12",children:[h.jsxs("div",{className:"platform-hero-copy min-w-0",children:[h.jsxs("div",{className:"mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-xs text-primary sm:text-sm",children:[h.jsx(aw,{size:16,className:"shrink-0"}),h.jsx("span",{className:"min-w-0",children:"Quantum simulation, hybrid computing, HPC"})]}),h.jsx("h1",{className:"max-w-full text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl",children:"QuantINA"}),h.jsx("p",{className:"mt-4 text-2xl font-medium text-white sm:text-3xl",children:"Scientific Computing Platform"}),h.jsxs("p",{className:"mt-6 max-w-full text-lg leading-8 text-foreground/70 sm:max-w-2xl sm:text-xl",children:["Explore, simulate and analyze",h.jsx("br",{className:"sm:hidden"})," quantum algorithms through an",h.jsx("br",{className:"sm:hidden"})," interactive scientific environment."]}),h.jsx("p",{className:"mt-4 text-base font-medium text-foreground/60",children:"Choose a problem to start your simulation."}),h.jsxs("div",{className:"mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3",children:[h.jsx(Lh,{icon:c1,label:"Compute",value:"Hybrid"}),h.jsx(Lh,{icon:Xm,label:"Models",value:"Modular"}),h.jsx(Lh,{icon:Wm,label:"Analysis",value:"Live"})]})]}),h.jsx("div",{className:"platform-hero-visual relative min-h-[420px] min-w-0 lg:min-h-[520px]",children:h.jsx(ZN,{showVideo:e})})]}),h.jsxs("section",{className:"pb-12",children:[h.jsxs("div",{className:"mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium uppercase text-primary/75",children:"Choose a simulation"}),h.jsx("h2",{className:"mt-1 text-2xl font-semibold text-white",children:"Select a scientific problem"})]}),h.jsx("p",{className:"max-w-xl text-sm leading-6 text-foreground/50",children:"Each module packages configuration, execution and result analysis inside the same research-grade interface."})]}),h.jsx("div",{className:"grid gap-4 lg:grid-cols-2",children:GN.map(n=>h.jsx(KN,{module:n,onNavigate:t},n.id))}),h.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:WN.map(({name:n,icon:i})=>h.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-foreground/50",children:[h.jsx(i,{size:14}),n]},n))})]})]})]})})}function YN(){const[t,e]=we.useState(!1);return we.useEffect(()=>{const n=window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)"),i=()=>e(n.matches);return i(),n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}function KN({module:t,onNavigate:e}){const n=t.status==="available",i=t.icon;return h.jsxs("article",{className:["group relative min-h-[320px] overflow-hidden rounded-lg border p-5 transition duration-300",n?"cursor-pointer border-primary/25 bg-card-premium shadow-[0_24px_90px_rgba(0,0,0,0.28)] hover:border-primary/45":"border-white/10 bg-white/[0.035] opacity-[0.68]"].join(" "),onClick:()=>{n&&t.route&&e(t.route)},children:[h.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100",children:h.jsx("div",{className:"absolute right-0 top-0 h-40 w-40 bg-primary/10 blur-3xl"})}),h.jsxs("div",{className:"relative z-10 flex h-full flex-col justify-between gap-8",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"mb-5 flex items-start justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary",children:h.jsx(i,{size:22})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/40",children:t.category}),h.jsx("h3",{className:"mt-1 text-2xl font-semibold text-white",children:t.name})]})]}),h.jsx("span",{className:["shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold",n?"border-primary/35 bg-primary/[0.12] text-primary":"border-white/10 bg-white/[0.055] text-foreground/50"].join(" "),children:n?"Available":"Coming Soon"})]}),h.jsx("p",{className:"max-w-xl text-sm leading-6 text-foreground/60",children:t.description}),h.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.map(r=>h.jsx("span",{className:"rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs text-foreground/60",children:r},r))})]}),h.jsxs("div",{className:"grid items-end gap-5 sm:grid-cols-[1fr_auto]",children:[h.jsx(JN,{type:t.visual}),n?h.jsxs("button",{type:"button",className:"inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90",onClick:r=>{r.stopPropagation(),t.route&&e(t.route)},children:["Open simulation",h.jsx(Bl,{size:16})]}):h.jsxs("button",{type:"button",disabled:!0,className:"inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm font-semibold text-foreground/35",children:[h.jsx(Xb,{size:15}),"Coming Soon"]})]})]})]})}function Lh({icon:t,label:e,value:n}){return h.jsxs("div",{className:"rounded-md border border-white/10 bg-white/[0.045] p-3 backdrop-blur",children:[h.jsx(t,{size:17,className:"text-primary"}),h.jsx("p",{className:"mt-3 text-xs text-foreground/40",children:e}),h.jsx("p",{className:"mt-1 text-sm font-semibold text-white",children:n})]})}function QN(){return h.jsxs("div",{"aria-hidden":"true",className:"absolute inset-0",children:[h.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.16),transparent_27%),radial-gradient(circle_at_80%_12%,rgba(125,211,252,0.11),transparent_24%),linear-gradient(135deg,#060914_0%,#0b1221_45%,#081017_100%)]"}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35"}),h.jsx("div",{className:"absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#05070d] to-transparent"})]})}function ZN({showVideo:t}){const e=we.useRef(null),n=we.useRef(null),i=we.useRef(!1),[r,s]=we.useState(!1);we.useEffect(()=>{if(!t){i.current=!1,s(!1);return}const o=e.current;if(!o||!("IntersectionObserver"in window)){i.current=!0,s(!0);return}const l=new IntersectionObserver(([c])=>{let p=i.current;c.isIntersecting&&c.intersectionRatio>=.78&&(p=!0),(!c.isIntersecting||c.intersectionRatio<=.6)&&(p=!1),p!==i.current&&(i.current=p,s(p))},{threshold:[0,.6,.78,1]});return l.observe(o),()=>l.disconnect()},[t]),we.useEffect(()=>{const o=n.current;if(o){if(!r){o.pause();return}o.playbackRate=.72,o.play().catch(()=>{})}},[r]);const a=t&&r;return h.jsxs("div",{ref:e,className:"absolute inset-0",children:[h.jsx("div",{className:"absolute inset-0 rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.09),rgba(255,255,255,0.015))] shadow-[0_32px_120px_rgba(0,0,0,0.42)]"}),h.jsxs("div",{className:"absolute left-6 right-6 top-6 flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-4 py-3",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs uppercase text-foreground/40",children:"Simulation stack"}),h.jsx("p",{className:"mt-1 text-sm font-semibold text-white",children:"Hamiltonian pipeline"})]}),h.jsx(Fb,{className:"text-primary",size:20})]}),h.jsx("div",{className:"absolute inset-x-8 bottom-8 top-24",children:h.jsxs("div",{className:"relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/20",children:[h.jsx("img",{"aria-hidden":"true",alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-45",decoding:"async",fetchPriority:"high",src:x_}),a?h.jsxs("video",{ref:n,"aria-hidden":"true",autoPlay:!0,className:"simulation-stack-video absolute inset-0 h-full w-full object-cover opacity-45",loop:!0,muted:!0,onLoadedMetadata:o=>{o.currentTarget.playbackRate=.72},playsInline:!0,poster:x_,preload:"metadata",children:[h.jsx("source",{src:XN,type:"video/mp4"}),h.jsx("source",{src:qN,type:"video/quicktime"})]}):null,h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.1),rgba(5,7,13,0.62)),radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.13),transparent_56%)]"}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.08),transparent)]"}),h.jsx("div",{className:"absolute left-[10%] top-[15%] h-3 w-3 rounded-full bg-primary shadow-[0_0_28px_hsl(var(--primary))]"}),h.jsx("div",{className:"absolute left-[36%] top-[32%] h-4 w-4 rounded-full border border-primary bg-primary/30 shadow-[0_0_28px_hsl(var(--primary)/0.7)]"}),h.jsx("div",{className:"absolute left-[72%] top-[18%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_26px_rgba(125,211,252,0.9)]"}),h.jsx("div",{className:"absolute left-[22%] top-[68%] h-4 w-4 rounded-full border border-sky-200 bg-sky-300/25 shadow-[0_0_28px_rgba(125,211,252,0.7)]"}),h.jsx("div",{className:"absolute left-[64%] top-[72%] h-3 w-3 rounded-full bg-primary shadow-[0_0_28px_hsl(var(--primary))]"}),h.jsx("div",{className:"absolute left-[12%] top-[17%] h-px w-[28%] rotate-[20deg] bg-primary/60"}),h.jsx("div",{className:"absolute left-[38%] top-[35%] h-px w-[34%] -rotate-[13deg] bg-sky-200/40"}),h.jsx("div",{className:"absolute left-[24%] top-[68%] h-px w-[40%] rotate-[4deg] bg-primary/50"}),h.jsx("div",{className:"absolute left-[66%] top-[22%] h-px w-[26%] rotate-[99deg] bg-sky-200/35"}),h.jsx("div",{className:"absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3",children:["Embed","Anneal","Analyze"].map((o,l)=>h.jsxs("div",{className:"rounded-md border border-white/10 bg-white/[0.045] p-3",children:[h.jsxs("p",{className:"font-mono text-xs text-primary",children:["0",l+1]}),h.jsx("p",{className:"mt-2 text-sm font-semibold text-white",children:o})]},o))})]})})]})}function JN({type:t}){return t==="layers"?h.jsxs("div",{className:"relative h-24 min-w-56 overflow-hidden rounded-md border border-white/10 bg-black/20",children:[[0,1,2,3].map(e=>h.jsx("div",{className:"absolute left-5 right-5 h-3 rounded-full border border-sky-200/25 bg-sky-200/10",style:{top:18+e*16}},e)),h.jsx("div",{className:"absolute left-8 top-4 h-16 w-1 rounded-full bg-primary/40"}),h.jsx("div",{className:"absolute right-10 top-7 h-11 w-1 rounded-full bg-sky-300/40"})]}):h.jsxs("div",{className:"relative h-24 min-w-56 overflow-hidden rounded-md border border-white/10 bg-black/20",children:[h.jsx("div",{className:"absolute left-7 top-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]"}),h.jsx("div",{className:"absolute left-24 top-5 h-4 w-4 rounded-full border border-primary bg-primary/30"}),h.jsx("div",{className:"absolute left-36 top-14 h-3 w-3 rounded-full bg-sky-300"}),h.jsx("div",{className:"absolute right-9 top-9 h-4 w-4 rounded-full border border-sky-200 bg-sky-300/25"}),h.jsx("div",{className:"absolute left-8 top-9 h-px w-20 -rotate-12 bg-primary/50"}),h.jsx("div",{className:"absolute left-28 top-9 h-px w-20 rotate-[24deg] bg-sky-200/40"}),h.jsx("div",{className:"absolute left-40 top-16 h-px w-24 -rotate-[22deg] bg-primary/40"})]})}const pg="/quantina/media/brand/quantina-logo.png",eD="/quantina/media/brand/maison-du-quantique-partners.png",Vp=[{id:"project",label:"Overview"},{id:"use-cases",label:"Use cases"},{id:"method",label:"Method"},{id:"ecosystem",label:"Ecosystem"},{id:"outputs",label:"Outputs"},{id:"join",label:"Team"}],__=[{title:"Batteries & materials",problem:"Battery calibration, materials screening and parameter spaces with costly experimental feedback.",approach:"Hybrid optimization, surrogate modelling and quantum-inspired search over constrained design spaces.",partners:"Industrial R&D teams + materials and modelling laboratories",status:"Scoping",icon:Ub,accent:"text-emerald-300"},{title:"Space & satellites",problem:"Scheduling, resource allocation and mission planning under orbital and operational constraints.",approach:"Combinatorial formulations, HPC baselines, QAOA-style prototypes and benchmark-driven selection.",partners:"Aerospace companies + applied mathematics teams",status:"Candidate track",icon:nw,accent:"text-sky-300"},{title:"Rail energy systems",problem:"Energy-aware planning, network constraints and infrastructure-level optimization.",approach:"Mixed optimization, decomposition strategies and quantum-inspired heuristics compared to classical solvers.",partners:"Transport operators + optimization researchers",status:"Use-case framing",icon:dw,accent:"text-amber-300"},{title:"Aeronautics / CFD",problem:"Simulation-heavy engineering loops where each evaluation is expensive and high-dimensional.",approach:"HPC baselines, linear-solver analysis, reduced-order models and quantum algorithm feasibility studies.",partners:"Engineering teams + numerical analysis laboratories",status:"Research stage",icon:Qb,accent:"text-cyan-300"},{title:"Combinatorial optimization",problem:"Graph, routing, allocation and partitioning problems that must be solved under real industrial constraints.",approach:"Exact baselines, approximation ratios, QAOA, annealing-inspired methods and hybrid rounding.",partners:"Industry owners + HybQuant engineers",status:"Demo available",icon:bl,accent:"text-teal-300"},{title:"Physical simulation",problem:"Physics models that require reliable numerical experiments before any industrial decision.",approach:"Hamiltonian modelling, classical simulation, variational workflows and benchmark reports.",partners:"LOMA, XLIM, IMB, LaBRI and partner ecosystems",status:"Methodology",icon:qm,accent:"text-sky-300"},{title:"Post-quantum cryptography",problem:"Anticipating quantum-era cryptographic risks and migration requirements for industrial systems.",approach:"Risk mapping, algorithmic review, implementation audits and transition strategy.",partners:"Security teams + cryptography researchers",status:"Exploratory",icon:rw,accent:"text-rose-300"}],tD=[{title:"Technology transfer",text:"QuantINA turns industrial pain points into applied research projects around quantum, hybrid and HPC computing.",icon:Wb},{title:"Scientific discipline",text:"The program does not promise quantum advantage. It measures when quantum, hybrid or quantum-inspired methods are relevant.",icon:d1},{title:"Regional ecosystem",text:"The initiative connects companies, laboratories, engineers, students and shared compute resources in Nouvelle-Aquitaine.",icon:Xm}],nD=["Identify","Formalize","Recruit","Simulate","Benchmark","Publish","Industrialize"],iD=[{title:"Technical reports",text:"Clear benchmark notes, modelling assumptions, limits and recommendations for each industrial use case.",icon:Vb},{title:"Scientific publications",text:"Research outputs when a case exposes a meaningful algorithmic, modelling or benchmarking contribution.",icon:Ob},{title:"Open demonstrators",text:"Reusable software prototypes that make the methodology inspectable, testable and shareable.",icon:zb}],rD=[{name:"Yassine Hamoudi",role:"HYBQUANT Project Coordinator",affiliation:"LaBRI",email:"yassine.hamoudi@labri.fr",photo:"/quantina/media/team/yassine-hamoudi.jpg"},{name:"Adrian Tanasa",role:"Deputy HYBQUANT Project Coordinator",affiliation:"LaBRI",email:"adrian.tanasa@labri.fr",photo:"/quantina/media/team/adrian-tanasa.jpg"},{name:"Karim El Houdaigui",role:"HYBQUANT Research Engineer",affiliation:"LaBRI",email:"karim.el-houdaigui@labri.fr",photo:"/quantina/media/team/karim-el-houdaigui.jpg"},{name:"Laurent Facq",role:"Research Engineer",affiliation:"IMB",email:"Laurent.Facq@math.u-bordeaux.fr",photo:"/quantina/media/team/laurent-facq.jpg"},{name:"Audrey Durand",role:"Regional Initiative Coordinator - Naquidis",affiliation:"Institut d'Optique",email:"audrey.durand@institutoptique.fr",photo:"/quantina/media/team/audrey-durand.jpg"}];function sD({onNavigate:t}){return h.jsxs("main",{className:"quantina-theme min-h-[100svh] overflow-x-clip bg-[#0E1116] text-foreground",children:[h.jsx(lD,{onNavigate:t}),h.jsx(cD,{onNavigate:t}),h.jsx(aD,{}),h.jsx(pD,{}),h.jsx(mD,{}),h.jsx(gD,{}),h.jsx(xD,{}),h.jsx(_D,{}),h.jsx(vD,{}),h.jsx(yD,{})]})}function aD(){const t=oD();return h.jsx("div",{className:"sticky top-[65px] z-40 border-y border-[#D0D6DC] bg-[#FAFAFA] px-3 py-2.5 text-[#111318] sm:px-8",children:h.jsxs("nav",{"aria-label":"QuantINA sections",className:"mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto",children:[h.jsxs("a",{href:"#top",className:"mr-2 flex shrink-0 items-center gap-2 px-2 py-2 text-sm font-semibold text-[#111318]",children:[h.jsx("img",{alt:"","aria-hidden":"true",className:"h-6 w-6 object-contain",src:pg}),h.jsx("span",{className:"hidden sm:inline",children:"QuantINA"})]}),Vp.map(e=>{const n=t===e.id;return h.jsx("a",{href:`#${e.id}`,"aria-current":n?"location":void 0,className:["shrink-0 rounded-md px-3 py-2 text-xs font-semibold transition",n?"bg-[#41D8BA] text-[#0E1116]":"text-[#5F6873] hover:bg-[#E7EBEE] hover:text-[#111318]"].join(" "),children:e.label},e.id)}),h.jsxs("a",{href:"#join",className:"ml-auto hidden shrink-0 items-center gap-2 rounded-sm border border-[#32B3A2] px-3 py-2 text-xs font-semibold text-[#238E82] transition hover:bg-[#41D8BA] hover:text-[#0E1116] md:inline-flex",children:["Start a project",h.jsx(Bl,{size:14})]})]})})}function oD(){const[t,e]=we.useState(Vp[0].id);return we.useEffect(()=>{const n=Vp.map(({id:s})=>document.getElementById(s)).filter(s=>!!s);if(n.length===0)return;let i=0;const r=()=>{window.cancelAnimationFrame(i),i=window.requestAnimationFrame(()=>{const s=n[0];if(window.scrollY<s.offsetTop-window.innerHeight*.2){e(s.id);return}const a=window.scrollY+180,o=n.reduce((l,c)=>c.offsetTop<=a?c.id:l,s.id);e(o)})};return r(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),()=>{window.cancelAnimationFrame(i),window.removeEventListener("scroll",r),window.removeEventListener("resize",r)}},[]),t}function lD({onNavigate:t}){return h.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-[#29323D] bg-[#0E1116] px-5 sm:px-8 lg:px-12",children:h.jsxs("div",{className:"relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4",children:[h.jsxs("a",{href:"#top",className:"flex min-w-0 items-center gap-3",children:[h.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#41D8BA] bg-[#FAFAFA] p-1",children:h.jsx("img",{alt:"","aria-hidden":"true",className:"h-full w-full object-contain",src:pg})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("p",{className:"text-sm font-semibold text-white",children:"QuantINA"}),h.jsx("p",{className:"hidden truncate text-xs text-foreground/50 sm:block",children:"Quantum Industrial Networks in Nouvelle-Aquitaine"})]})]}),h.jsx("a",{href:"#project",className:"absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-[#29323D] text-white/70 transition hover:border-[#41D8BA] hover:bg-[#41D8BA] hover:text-[#0E1116] xl:hidden",title:"Program brief",children:h.jsx(kb,{size:18,strokeWidth:1.5})}),h.jsxs("nav",{className:"hidden items-center gap-6 text-xs font-medium text-white/65 xl:flex",children:[h.jsx("a",{className:"transition hover:text-primary",href:"#project",children:"Project"}),h.jsx("a",{className:"transition hover:text-primary",href:"#use-cases",children:"Use cases"}),h.jsx("a",{className:"transition hover:text-primary",href:"#method",children:"Method"}),h.jsx("a",{className:"transition hover:text-primary",href:"#ecosystem",children:"Ecosystem"}),h.jsx("a",{className:"transition hover:text-primary",href:"#join",children:"Join"})]}),h.jsxs("div",{className:"flex shrink-0 items-center justify-end gap-3",children:[h.jsxs("div",{className:"hidden text-right md:block",children:[h.jsx("p",{className:"text-sm font-semibold text-white",children:"HYBQUANT"}),h.jsx("p",{className:"text-xs text-foreground/48",children:"Applied quantum transfer"})]}),h.jsx("button",{type:"button",onClick:()=>t("/simulations"),className:"inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#29323D] text-white/75 transition hover:border-[#41D8BA] hover:bg-[#41D8BA] hover:text-[#0E1116]",title:"Open simulation platform",children:h.jsx(Hb,{size:16})})]})]})})}function cD({onNavigate:t}){return h.jsxs("section",{id:"top",className:"relative min-h-[92svh] overflow-hidden bg-[#0E1116] px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-12 xl:min-h-[94svh]",children:[h.jsx(uD,{}),h.jsx("div",{className:"relative z-10 mx-auto flex min-h-[calc(92svh-8rem)] w-full max-w-7xl flex-col justify-end xl:min-h-[calc(94svh-9rem)]",children:h.jsxs("div",{className:"grid min-w-0 gap-7 xl:grid-cols-[minmax(0,0.92fr)_minmax(480px,0.78fr)] xl:items-end",children:[h.jsxs("div",{className:"min-w-0",children:[h.jsx(Ts,{direction:"down",delay:120,children:h.jsxs("div",{className:"mb-6 inline-flex max-w-full items-center gap-2 rounded-sm border border-[#41D8BA] bg-[#181D25] px-3 py-2 text-xs font-semibold text-[#41D8BA] sm:text-sm",children:[h.jsx(o1,{size:16,className:"shrink-0"}),"Regional quantum technology transfer program"]})}),h.jsx(Ts,{direction:"up",delay:260,className:"min-w-0 max-w-full",children:h.jsxs("h1",{className:"max-w-[22rem] break-words text-4xl font-semibold leading-[0.98] text-white sm:max-w-5xl sm:text-7xl lg:text-[92px]",children:["QuantINA",h.jsxs("span",{className:"mt-3 block max-w-4xl text-3xl leading-[1.04] text-[#ECF4F4]/82 sm:text-5xl lg:text-[58px]",children:["Quantum Industrial ",h.jsx("span",{className:"block sm:inline",children:"Networks"}),h.jsx("span",{className:"block",children:"in Nouvelle-Aquitaine"})]})]})}),h.jsxs(Ts,{direction:"up",delay:430,className:"min-w-0 max-w-full",children:[h.jsx("p",{className:"mt-7 max-w-[22rem] text-2xl font-medium leading-9 text-[#41D8BA] sm:max-w-3xl sm:text-3xl",children:"From industrial use cases to quantum experimentation."}),h.jsx("p",{className:"mt-5 max-w-[22rem] text-base leading-8 text-white/68 sm:max-w-3xl sm:text-lg",children:"A program led by the Maison du Quantique de Nouvelle-Aquitaine to connect companies, researchers and engineers around concrete industrial use cases in quantum, hybrid and HPC computing."})]}),h.jsx(Ts,{direction:"up",delay:620,children:h.jsxs("div",{className:"mt-8 flex flex-col gap-3 sm:flex-row",children:[h.jsxs("a",{href:"#use-cases",className:"inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#41D8BA] px-5 py-3 text-sm font-semibold text-[#0E1116] transition hover:bg-[#58DCC3] sm:w-auto",children:["Explore use cases",h.jsx(Bl,{size:16})]}),h.jsx("a",{href:"#join",className:"inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#29323D] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#41D8BA] hover:text-[#41D8BA] sm:w-auto",children:"Submit an industrial challenge"})]})}),h.jsx(fD,{})]}),h.jsxs("div",{className:"hidden min-w-0 gap-4 md:grid xl:max-w-xl xl:justify-self-end",children:[h.jsx(dD,{}),h.jsx(hD,{onNavigate:t})]})]})})]})}function uD(){const t=[[108,172],[238,172],[368,172],[498,172],[628,172],[108,342],[238,342],[368,342],[498,342],[628,342],[108,512],[238,512],[368,512],[498,512],[628,512]];return h.jsxs(h.Fragment,{children:[h.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 bg-[#0E1116]"}),h.jsxs("svg",{"aria-hidden":"true",className:"quantina-quantum-field absolute -right-[22rem] top-12 h-[86%] w-auto min-w-[760px] sm:-right-64 lg:-right-20 xl:right-2",viewBox:"0 0 760 680",children:[h.jsxs("g",{fill:"none",stroke:"#29323D",strokeWidth:"1",children:[h.jsx("path",{d:"M108 172H628M108 342H628M108 512H628"}),h.jsx("path",{d:"M108 172V512M238 172V512M368 172V512M498 172V512M628 172V512"}),h.jsx("circle",{cx:"368",cy:"342",r:"242"}),h.jsx("circle",{cx:"368",cy:"342",r:"178"}),h.jsx("path",{d:"M126 342C194 210 286 138 368 138C450 138 542 210 610 342C542 474 450 546 368 546C286 546 194 474 126 342Z"})]}),h.jsx("path",{className:"quantina-phase-path",d:"M70 262C170 82 276 590 382 262C472 -16 566 528 690 220"}),h.jsx("path",{className:"quantina-phase-path quantina-phase-path-delayed",d:"M70 426C186 650 280 124 388 426C492 716 570 196 690 470"}),h.jsx("g",{children:t.map(([e,n],i)=>h.jsxs("g",{className:`quantina-qubit quantina-qubit-${i%5+1}`,children:[h.jsx("circle",{cx:e,cy:n,r:"12",fill:"#0E1116",stroke:"#41D8BA",strokeWidth:"2"}),h.jsx("circle",{cx:e,cy:n,r:"4",fill:i%4===0?"#7DD3FC":"#41D8BA"})]},`${e}-${n}`))}),h.jsxs("g",{className:"quantina-state-ring",fill:"none",stroke:"#58DCC3",strokeWidth:"2",children:[h.jsx("ellipse",{cx:"368",cy:"342",rx:"86",ry:"196",transform:"rotate(28 368 342)"}),h.jsx("ellipse",{cx:"368",cy:"342",rx:"86",ry:"196",transform:"rotate(-28 368 342)"})]}),h.jsxs("g",{className:"quantina-measurement",fontFamily:"ui-monospace, SFMono-Regular, monospace",fontSize:"14",fontWeight:"700",children:[h.jsx("rect",{x:"344",y:"318",width:"48",height:"48",fill:"#181D25",stroke:"#7DD3FC"}),h.jsx("text",{x:"368",y:"348",fill:"#ECF4F4",textAnchor:"middle",children:"H"}),h.jsx("text",{x:"92",y:"145",fill:"#58DCC3",children:"|0>"}),h.jsx("text",{x:"612",y:"548",fill:"#7DD3FC",children:"|1>"})]})]}),h.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 left-0 h-1.5 w-[52%] bg-[#41D8BA]"}),h.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 left-[52%] h-1.5 w-[30%] bg-[#7DD3FC]"}),h.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 right-0 h-1.5 w-[18%] bg-[#FF5A6F]"})]})}function dD(){const e=["Challenge","Model","Baseline","Quantum","Decision"];return h.jsx(Ts,{direction:"right",delay:520,children:h.jsx("div",{className:"relative h-[300px] overflow-hidden rounded-sm border border-[#29323D] bg-[#181D25]",children:h.jsxs("div",{className:"relative z-10 flex h-full flex-col justify-between p-5",children:[h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-semibold uppercase text-foreground/42",children:"Transfer engine"}),h.jsx("h2",{className:"mt-2 text-xl font-semibold text-white",children:"Industrial readiness map"})]}),h.jsx("span",{className:"rounded-sm bg-[#34D399] px-3 py-1.5 text-xs font-semibold text-[#0E1116]",children:"Live method"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-end gap-4",children:[h.jsx("p",{className:"font-mono text-[78px] font-semibold leading-[0.82] text-[#41D8BA] tabular-nums",children:5}),h.jsxs("p",{className:"pb-2 text-xs font-semibold uppercase leading-5 text-foreground/55",children:["industrial",h.jsx("br",{}),"tracks"]})]}),h.jsx("p",{className:"mt-2 max-w-md text-sm leading-6 text-foreground/62",children:"Companies bring constraints. The ecosystem turns them into models, baselines, prototypes and documented decisions."})]}),h.jsx("div",{className:"grid grid-cols-5 gap-2",children:e.map((n,i)=>h.jsxs("div",{className:"min-w-0 border-t border-white/25 pt-2",children:[h.jsx("p",{className:"font-mono text-xs font-semibold text-[#7DD3FC]",children:String(i+1).padStart(2,"0")}),h.jsx("p",{className:"mt-2 truncate text-xs font-semibold text-white",children:n})]},n))})]})})})}function hD({onNavigate:t}){const[e,n]=we.useState(!1);return h.jsx(Ts,{direction:"right",delay:680,children:h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsx(v_,{icon:Gm,title:"Use-case intake",value:"5 tracks",note:"Industrial problems"}),h.jsx(v_,{icon:Xm,title:"Research network",value:"4 labs",note:"Regional ecosystem"}),h.jsxs("button",{type:"button",className:["group min-h-[132px] rounded-sm border-2 p-4 text-left transition-all duration-300",e?"border-[#FBBF24] bg-[#FBBF24] text-[#0E1116]":"border-[#29323D] bg-[#181D25] text-white hover:border-[#FBBF24]"].join(" "),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>n(i=>!i),children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-base font-semibold",children:"Benchmark discipline"}),h.jsx("p",{className:["mt-1 text-xs",e?"text-[#0E1116]/65":"text-white/55"].join(" "),children:"Evidence first"})]}),h.jsx("span",{className:["flex h-8 w-8 items-center justify-center rounded-sm",e?"bg-[#0E1116] text-[#FBBF24]":"bg-[#29323D] text-[#7DD3FC]"].join(" "),children:h.jsx(Wm,{size:15})})]}),e?h.jsx("p",{className:"mt-4 text-sm leading-6 text-[#0E1116]/72",children:"No quantum advantage claim before baselines and benchmark evidence are explicit."}):null]}),h.jsxs("button",{type:"button",onClick:()=>t("/simulations"),className:"group min-h-[132px] rounded-sm border border-[#41D8BA] bg-[#41D8BA] p-4 text-left text-[#0E1116] transition hover:bg-[#58DCC3]",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-base font-semibold",children:"Simulation platform"}),h.jsx("p",{className:"mt-1 text-xs text-[#0E1116]/65",children:"All simulations and demonstrators"})]}),h.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-sm bg-[#0E1116] text-[#41D8BA]",children:h.jsx(Bl,{size:15})})]}),h.jsx("p",{className:"mt-4 text-sm leading-6 text-[#0E1116]/70",children:"Open the first working module."})]})]})})}function v_({icon:t,title:e,value:n,note:i}){return h.jsxs("article",{className:"min-h-[132px] rounded-sm border border-[#29323D] bg-[#181D25] p-4 text-[#ECF4F4] transition hover:-translate-y-0.5 hover:border-[#41D8BA]",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-base font-semibold",children:e}),h.jsx("p",{className:"mt-1 text-xs text-[#ECF4F4]/55",children:i})]}),h.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-sm bg-[#29323D] text-[#41D8BA]",children:h.jsx(t,{size:15})})]}),h.jsx("p",{className:"mt-6 text-2xl font-semibold leading-none",children:n})]})}function fD(){const t=["Identify","Formalize","Recruit","Simulate","Benchmark","Publish","Industrialize"];return h.jsxs(Ts,{direction:"up",delay:860,className:"mt-9 hidden max-w-3xl sm:block",children:[h.jsx("div",{className:"inline-flex items-center rounded-sm border border-[#29323D] px-4 py-2 text-xs font-semibold tracking-wide text-[#41D8BA]",children:"Evidence-first quantum transfer"}),h.jsx("div",{className:"mt-4 flex flex-wrap items-center gap-x-5 gap-y-3",children:t.map((e,n)=>h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"h-1.5 w-1.5 bg-[#7DD3FC]"}),h.jsx("span",{className:"whitespace-nowrap text-xs font-semibold uppercase text-white/58",children:e})]},`${e}-${n}`))})]})}function Ts({children:t,className:e="",delay:n=0,direction:i="up"}){return h.jsx("div",{className:`quantina-enter quantina-enter-${i} ${e}`,style:{animationDelay:`${n}ms`},children:t})}function pD(){const t=[{title:"Industrial challenge",icon:Gm},{title:"Mathematical modelling",icon:cw},{title:"Classical / HPC baseline",icon:iw},{title:"Quantum / hybrid algorithm",icon:bl},{title:"Benchmark & decision",icon:Wm}];return h.jsx("section",{className:"border-y border-[#32B3A2] bg-[#41D8BA] px-5 py-12 text-[#0E1116] sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium uppercase text-[#155E56]",children:"Operating logic"}),h.jsx("h2",{className:"mt-2 text-3xl font-semibold text-[#0E1116]",children:"From industrial challenges to quantum experiments."})]}),h.jsx("div",{className:"grid border-t border-black/25 md:grid-cols-5 md:border-l md:border-t-0",children:t.map(({title:e,icon:n},i)=>h.jsxs("div",{className:"relative border-b border-black/25 p-4 md:border-b-0 md:border-r",children:[h.jsx(n,{size:18,className:"text-[#155E56]"}),h.jsx("p",{className:"mt-4 text-sm font-semibold leading-5 text-[#0E1116]",children:e}),i<t.length-1?h.jsx(Bl,{className:"absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 bg-[#41D8BA] text-[#155E56] md:block",size:18}):null]},e))})]})})}function mD(){return h.jsx("section",{id:"project",className:"scroll-mt-40 bg-[#FAFAFA] px-5 py-24 text-[#111318] sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start",children:[h.jsx(Vl,{tone:"light",eyebrow:"The project",title:"A regional experimentation program for quantum technologies in industry.",text:"QuantINA exists to test real industrial problems with research-grade methodology, strong classical baselines and clear decisions about what quantum, hybrid or quantum-inspired methods can actually bring."}),h.jsx("div",{className:"grid gap-4",children:tD.map(t=>h.jsx(hS,{item:t,tone:"light"},t.title))})]})})}function gD(){const[t,e]=we.useState(0),n=__[t],i=n.icon;return h.jsx("section",{id:"use-cases",className:"scroll-mt-40 bg-[#0E1116] px-5 py-24 sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto max-w-7xl",children:[h.jsxs("div",{className:"mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end",children:[h.jsx(Vl,{eyebrow:"Use cases",title:"Industrial problems studied through a rigorous quantum and HPC lens.",text:"Each case starts with the industrial constraint, then moves through modelling, baseline selection, algorithmic exploration and documented benchmarking."}),h.jsx("div",{className:"rounded-sm bg-[#FBBF24] px-4 py-3 text-sm font-semibold text-[#0E1116]",children:"No quantum advantage claim. Evidence first."})]}),h.jsxs("div",{className:"grid overflow-hidden rounded-sm border border-[#29323D] bg-[#181D25] lg:grid-cols-[0.38fr_0.62fr]",children:[h.jsx("div",{className:"border-b border-white/15 p-2 lg:border-b-0 lg:border-r",children:h.jsx("div",{className:"flex gap-2 overflow-x-auto lg:grid",children:__.map((r,s)=>{const a=r.icon,o=t===s;return h.jsxs("button",{type:"button",onClick:()=>e(s),className:["flex min-w-[210px] items-center gap-3 rounded-sm border-l-4 px-4 py-3 text-left transition lg:min-w-0",o?"border-[#41D8BA] bg-[#29323D] text-white":"border-transparent text-white/55 hover:border-white/30 hover:bg-white/[0.035] hover:text-white"].join(" "),children:[h.jsx("span",{className:o?"text-[#41D8BA]":r.accent,children:h.jsx(a,{size:18})}),h.jsxs("span",{className:"min-w-0",children:[h.jsx("span",{className:"block truncate text-sm font-semibold",children:r.title}),h.jsx("span",{className:"mt-1 block text-xs opacity-60",children:r.status})]})]},r.title)})})}),h.jsx("article",{className:"relative min-h-[430px] overflow-hidden border-t-4 border-[#41D8BA] p-6 sm:p-8 lg:p-10",children:h.jsxs("div",{className:"flex h-full flex-col",children:[h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[h.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-sm bg-[#41D8BA] text-[#0E1116]",children:h.jsx(i,{size:23})}),h.jsx("span",{className:"rounded-sm bg-[#FBBF24] px-3 py-1.5 text-xs font-semibold text-[#0E1116]",children:n.status})]}),h.jsx("p",{className:"mt-8 text-xs font-semibold uppercase text-foreground/38",children:"Selected industrial track"}),h.jsx("h3",{className:"mt-2 text-3xl font-semibold text-white sm:text-4xl",children:n.title}),h.jsxs("div",{className:"mt-8 grid gap-5 sm:grid-cols-2",children:[h.jsx(Ih,{label:"Industrial problem",value:n.problem}),h.jsx(Ih,{label:"Research approach",value:n.approach})]}),h.jsx("div",{className:"mt-auto border-t border-white/10 pt-6",children:h.jsx(Ih,{label:"Potential partners",value:n.partners})})]})})]})]})})}function xD(){return h.jsx("section",{id:"method",className:"scroll-mt-40 border-y border-[#29323D] bg-[#181D25] px-5 py-24 sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto max-w-7xl",children:[h.jsxs("div",{className:"grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start",children:[h.jsx(Vl,{eyebrow:"How it works",title:"A repeatable path from problem owner to benchmarked prototype.",text:"The first phase can use internships as an operational mechanism, but the program is built for a wider transfer pipeline: software, publications, CIFRE projects, collaborative grants and long-term partnerships."}),h.jsx("div",{className:"grid gap-3",children:nD.map((t,e)=>h.jsxs("div",{className:"grid grid-cols-[3.25rem_1fr] items-center gap-4",children:[h.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-sm bg-[#41D8BA] font-mono text-sm font-semibold text-[#0E1116]",children:String(e+1).padStart(2,"0")}),h.jsx("div",{className:"border-b border-white/35 px-4 py-3",children:h.jsx("p",{className:"font-semibold text-white",children:t})})]},t))})]}),h.jsxs("div",{className:"mt-10 grid gap-4 md:grid-cols-4",children:[h.jsx(jc,{icon:Gm,title:"Company",text:"Industrial problem, constraints and success criteria"}),h.jsx(jc,{icon:d1,title:"Researcher",text:"Scientific framing, modelling and methods"}),h.jsx(jc,{icon:c1,title:"HybQuant engineer",text:"Software, simulation, HPC and benchmarks"}),h.jsx(jc,{icon:Gb,title:"Student / intern",text:"Focused execution during the first research tracks"})]})]})})}function _D(){return h.jsx("section",{id:"ecosystem",className:"scroll-mt-40 border-y border-[#D0D6DC] bg-[#E7EBEE] px-5 py-24 text-[#111318] sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto max-w-7xl",children:[h.jsxs("div",{className:"grid gap-10 border-b border-black/15 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end",children:[h.jsxs("div",{className:"max-w-4xl",children:[h.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[h.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-sm border border-[#41D8BA] bg-white p-1.5",children:h.jsx("img",{className:"h-full w-full object-contain",src:pg,alt:"QuantINA"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-semibold uppercase text-[#FF5A6F]",children:"Led by the Maison du Quantique"}),h.jsx("p",{className:"mt-1 text-sm font-medium text-[#5f5b68]",children:"Nouvelle-Aquitaine quantum ecosystem"})]})]}),h.jsx("h2",{className:"max-w-4xl text-4xl font-semibold leading-tight text-[#111318] sm:text-5xl",children:"QuantINA is carried by a regional network built for research, transfer and execution."})]}),h.jsx("p",{className:"max-w-xl text-base leading-8 text-[#5f5b68] lg:justify-self-end",children:"The Maison du Quantique brings together universities, national research organisations, laboratories, innovation networks and computing infrastructures to turn industrial challenges into rigorous quantum and HPC projects."})]}),h.jsx("div",{className:"grid gap-5 border-b border-black/15 py-8 sm:grid-cols-3",children:[["15","institutions and research networks"],["1","regional coordination hub"],["Research → industry","a shared transfer pathway"]].map(([t,e])=>h.jsxs("div",{className:"border-l-2 border-[#FF5A6F] pl-4",children:[h.jsx("p",{className:"text-xl font-semibold text-[#111318]",children:t}),h.jsx("p",{className:"mt-1 text-sm text-[#5f5b68]",children:e})]},e))}),h.jsxs("div",{className:"pt-10",children:[h.jsxs("div",{className:"mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end",children:[h.jsx("p",{className:"text-xs font-semibold uppercase text-[#5f5b68]",children:"The Maison du Quantique partner network"}),h.jsx("p",{className:"text-xs text-[#5f5b68]",children:"Research · innovation · infrastructure · transfer"})]}),h.jsx("div",{className:"overflow-hidden rounded-sm border border-black/15 bg-white p-4 sm:p-8",children:h.jsx("img",{alt:"Maison du Quantique partner institutions",className:"mx-auto block h-auto w-full max-w-[1120px] object-contain",decoding:"async",loading:"lazy",src:eD})})]})]})})}function vD(){return h.jsx("section",{id:"outputs",className:"scroll-mt-40 bg-[#0E1116] px-5 py-24 sm:px-8 lg:px-10",children:h.jsxs("div",{className:"mx-auto max-w-7xl",children:[h.jsx(Vl,{eyebrow:"Results and deliverables",title:"Every track should leave a decision-ready output.",text:"A QuantINA project is useful only if it produces something inspectable: a benchmark, a technical report, a publication path, a software prototype or a reasoned decision not to use a quantum approach."}),h.jsx("div",{className:"mt-8 grid gap-4 lg:grid-cols-3",children:iD.map(t=>h.jsx(hS,{item:t},t.title))})]})})}function yD(){return h.jsx("section",{id:"join",className:"scroll-mt-40 bg-[#FAFAFA] px-5 py-24 text-[#111318] sm:px-8 lg:px-10",children:h.jsx("div",{className:"mx-auto max-w-7xl",children:h.jsxs("div",{className:"grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start",children:[h.jsx(Vl,{tone:"light",eyebrow:"Join QuantINA",title:"Connect with the QuantINA coordination team.",text:"Companies, researchers and students can enter the program through a coordinated HYBQUANT and regional initiative team."}),h.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:rD.map(t=>h.jsx(SD,{member:t},t.email))})]})})})}function Vl({eyebrow:t,title:e,text:n,tone:i="dark"}){const r=i==="light";return h.jsxs("div",{className:"max-w-3xl",children:[h.jsx("p",{className:r?"text-sm font-medium uppercase text-[#238E82]":"text-sm font-medium uppercase text-[#41D8BA]",children:t}),h.jsx("h2",{className:r?"mt-2 text-3xl font-semibold leading-tight text-[#111318] sm:text-4xl":"mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl",children:e}),h.jsx("p",{className:r?"mt-4 text-sm leading-7 text-[#5f5b68] sm:text-base":"mt-4 text-sm leading-7 text-white/62 sm:text-base",children:n})]})}function hS({item:t,tone:e="dark"}){const n=t.icon,i=e==="light";return h.jsxs("article",{className:i?"border-t border-black/20 py-5":"border-t border-white/20 py-5",children:[h.jsx(n,{size:20,className:i?"text-[#238E82]":"text-[#7DD3FC]"}),h.jsx("h3",{className:i?"mt-5 text-lg font-semibold text-[#111318]":"mt-5 text-lg font-semibold text-white",children:t.title}),h.jsx("p",{className:i?"mt-3 text-sm leading-6 text-[#5f5b68]":"mt-3 text-sm leading-6 text-white/58",children:t.text})]})}function SD({member:t}){return h.jsxs("article",{className:"group overflow-hidden rounded-sm border border-[#D0D6DC] bg-white transition hover:-translate-y-0.5 hover:border-[#41D8BA]",children:[h.jsxs("div",{className:"relative aspect-[1.18] overflow-hidden bg-[#E7EBEE]",children:[h.jsx("img",{alt:`${t.name} portrait`,className:"h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]",decoding:"async",loading:"lazy",src:t.photo}),h.jsx("span",{className:"absolute bottom-4 left-4 rounded-sm bg-[#41D8BA] px-3 py-1 text-xs font-semibold text-[#0E1116]",children:t.affiliation})]}),h.jsxs("div",{className:"p-5",children:[h.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-[#238E82]",children:t.role}),h.jsx("h3",{className:"mt-2 text-xl font-semibold text-[#111318]",children:t.name}),h.jsxs("a",{href:`mailto:${t.email}`,className:"mt-4 inline-flex max-w-full items-center gap-2 rounded-sm border border-[#D0D6DC] px-3 py-2 text-sm font-medium text-[#5F6873] transition hover:border-[#41D8BA] hover:text-[#238E82]",children:[h.jsx(qb,{size:15,className:"shrink-0"}),h.jsx("span",{className:"truncate",children:t.email})]})]})]})}function Ih({label:t,value:e}){return h.jsxs("div",{className:"border-t border-white/10 py-3 first:border-t-0 first:pt-0",children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/38",children:t}),h.jsx("p",{className:"mt-1 text-sm leading-6 text-foreground/62",children:e})]})}function jc({icon:t,title:e,text:n}){return h.jsxs("div",{className:"border-t border-white/40 py-4",children:[h.jsx(t,{size:18,className:"text-[#7DD3FC]"}),h.jsx("h3",{className:"mt-4 text-sm font-semibold text-white",children:e}),h.jsx("p",{className:"mt-2 text-xs leading-5 text-white/60",children:n})]})}const uu="/simulations/maxcut",_a="/simulations",MD="/quantina",rl="/quantina/".replace(/\/$/,""),Uh=rl?`${rl}/`:"/";function Fh(t){return t.length>1?t.replace(/\/$/,""):t}function y_(t){const e=new URLSearchParams(window.location.search);if(e.get("simulation")==="maxcut")return uu;const i=e.get("page");if(i==="quantina")return MD;if(i==="simulations")return _a;const r=window.location.hash.replace(/^#/,"");return r.startsWith("/")?Fh(r):rl&&t.startsWith(rl)?Fh(t.slice(rl.length)||"/"):Fh(t)}function ED(){const[t,e]=we.useState(!0),[n,i]=we.useState(()=>y_(window.location.pathname));we.useEffect(()=>{document.documentElement.classList.toggle("dark",t)},[t]),we.useEffect(()=>{document.title=n===uu?"QuantINA | MaxCut Case Study":n===_a?"QuantINA | Scientific Computing Platform":"QuantINA - Quantum Industrial Networks in Nouvelle-Aquitaine"},[n]),we.useEffect(()=>{const s=()=>i(y_(window.location.pathname));return window.addEventListener("popstate",s),window.addEventListener("hashchange",s),()=>{window.removeEventListener("popstate",s),window.removeEventListener("hashchange",s)}},[]);const r=s=>{if(/^https?:\/\//.test(s)){window.location.assign(s);return}const a=s===uu?`${Uh}?simulation=maxcut`:s===_a?`${Uh}?page=simulations`:Uh;window.history.pushState({},"",a),i(s),window.scrollTo({top:0,left:0,behavior:"auto"})};return n===_a?h.jsx($N,{onNavigate:r}):n!==uu?h.jsx(sD,{onNavigate:r}):h.jsx("div",{className:"min-h-[100svh] bg-background text-foreground lg:h-[100svh] lg:overflow-hidden",children:h.jsxs("div",{className:"grid min-h-0 grid-cols-1 lg:h-full lg:grid-cols-[320px_minmax(0,1fr)_380px]",children:[h.jsx(MN,{}),h.jsxs("main",{className:"flex min-h-0 min-w-0 flex-col gap-5 overflow-y-auto overscroll-contain p-4 sm:p-5",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("button",{type:"button",onClick:()=>r(_a),className:"rounded-md border border-border p-2 text-foreground/70 transition hover:bg-muted hover:text-foreground",title:"Back to simulations",children:h.jsx(Ib,{size:18})}),h.jsxs("button",{type:"button",onClick:()=>r(_a),className:"min-w-0 rounded-md text-left transition hover:opacity-80",title:"Back to simulations",children:[h.jsx("p",{className:"text-xs font-medium uppercase text-foreground/50",children:"QuantINA case study"}),h.jsx("h1",{className:"truncate text-xl font-semibold sm:text-3xl",children:"Neutral-atom simulation"})]})]}),h.jsx("button",{type:"button",onClick:()=>e(s=>!s),className:"rounded-md border border-border p-2 text-foreground/75 transition hover:bg-muted",title:"Toggle theme",children:t?h.jsx(lw,{size:18}):h.jsx(Yb,{size:18})})]}),h.jsx(RN,{}),h.jsx($P,{}),h.jsx(zw,{})]}),h.jsx(jN,{})]})})}const bD=new _b;Oh.createRoot(document.getElementById("root")).render(h.jsx(V_.StrictMode,{children:h.jsx(vb,{client:bD,children:h.jsx(ED,{})})}));
