(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Kx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ag={exports:{}},Gu={},lg={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),iy=Symbol.for("react.context"),ry=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ay=Symbol.for("react.lazy"),Ip=Symbol.iterator;function ly(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cg=Object.assign,hg={};function ws(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||ug}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fg(){}fg.prototype=ws.prototype;function Xf(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||ug}var Zf=Xf.prototype=new fg;Zf.constructor=Xf;cg(Zf,ws.prototype);Zf.isPureReactComponent=!0;var Dp=Array.isArray,dg=Object.prototype.hasOwnProperty,jf={current:null},pg={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var i,o={},a=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(a=""+e.key),e)dg.call(e,i)&&!pg.hasOwnProperty(i)&&(o[i]=e[i]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var h=Array(c),d=0;d<c;d++)h[d]=arguments[d+2];o.children=h}if(t&&t.defaultProps)for(i in c=t.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:Ua,type:t,key:a,ref:l,props:o,_owner:jf.current}}function uy(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function cy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cy(""+t.key):e.toString(36)}function Ql(t,e,n,i,o){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Ua:case Qx:l=!0}}if(l)return l=t,o=o(l),t=i===""?"."+Oc(l,0):i,Dp(o)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),Ql(o,e,n,"",function(d){return d})):o!=null&&(qf(o)&&(o=uy(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Np,"$&/")+"/")+t)),e.push(o)),1;if(l=0,i=i===""?".":i+":",Dp(t))for(var c=0;c<t.length;c++){a=t[c];var h=i+Oc(a,c);l+=Ql(a,e,n,h,o)}else if(h=ly(t),typeof h=="function")for(t=h.call(t),c=0;!(a=t.next()).done;)a=a.value,h=i+Oc(a,c++),l+=Ql(a,e,n,h,o);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function cl(t,e,n){if(t==null)return t;var i=[],o=0;return Ql(t,i,"","",function(a){return e.call(n,a,o++)}),i}function hy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},Jl={transition:null},fy={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:jf};function _g(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:cl,forEach:function(t,e,n){cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cl(t,function(){e++}),e},toArray:function(t){return cl(t,function(e){return e})||[]},only:function(t){if(!qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=ws;at.Fragment=Jx;at.Profiler=ty;at.PureComponent=Xf;at.StrictMode=ey;at.Suspense=oy;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;at.act=_g;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=cg({},t.props),o=t.key,a=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,l=jf.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(h in e)dg.call(e,h)&&!pg.hasOwnProperty(h)&&(i[h]=e[h]===void 0&&c!==void 0?c[h]:e[h])}var h=arguments.length-2;if(h===1)i.children=n;else if(1<h){c=Array(h);for(var d=0;d<h;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:Ua,type:t.type,key:o,ref:a,props:i,_owner:l}};at.createContext=function(t){return t={$$typeof:iy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ny,_context:t},t.Consumer=t};at.createElement=mg;at.createFactory=function(t){var e=mg.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:ry,render:t}};at.isValidElement=qf;at.lazy=function(t){return{$$typeof:ay,_payload:{_status:-1,_result:t},_init:hy}};at.memo=function(t,e){return{$$typeof:sy,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};at.unstable_act=_g;at.useCallback=function(t,e){return xn.current.useCallback(t,e)};at.useContext=function(t){return xn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};at.useEffect=function(t,e){return xn.current.useEffect(t,e)};at.useId=function(){return xn.current.useId()};at.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return xn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};at.useRef=function(t){return xn.current.useRef(t)};at.useState=function(t){return xn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return xn.current.useTransition()};at.version="18.3.1";lg.exports=at;var nt=lg.exports;const hu=$x(nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy=nt,py=Symbol.for("react.element"),my=Symbol.for("react.fragment"),_y=Object.prototype.hasOwnProperty,gy=dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,o={},a=null,l=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)_y.call(e,i)&&!vy.hasOwnProperty(i)&&(o[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)o[i]===void 0&&(o[i]=e[i]);return{$$typeof:py,type:t,key:a,ref:l,props:o,_owner:gy.current}}Gu.Fragment=my;Gu.jsx=gg;Gu.jsxs=gg;ag.exports=Gu;var xe=ag.exports,Hh={},vg={exports:{}},Hn={},xg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,re){var j=U.length;U.push(re);e:for(;0<j;){var ce=j-1>>>1,Ce=U[ce];if(0<o(Ce,re))U[ce]=re,U[j]=Ce,j=ce;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var re=U[0],j=U.pop();if(j!==re){U[0]=j;e:for(var ce=0,Ce=U.length,He=Ce>>>1;ce<He;){var Y=2*(ce+1)-1,te=U[Y],le=Y+1,_e=U[le];if(0>o(te,j))le<Ce&&0>o(_e,te)?(U[ce]=_e,U[le]=j,ce=le):(U[ce]=te,U[Y]=j,ce=Y);else if(le<Ce&&0>o(_e,j))U[ce]=_e,U[le]=j,ce=le;else break e}}return re}function o(U,re){var j=U.sortIndex-re.sortIndex;return j!==0?j:U.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var h=[],d=[],m=1,g=null,_=3,x=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var re=n(d);re!==null;){if(re.callback===null)i(d);else if(re.startTime<=U)i(d),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(d)}}function R(U){if(w=!1,S(U),!E)if(n(h)!==null)E=!0,ee(k);else{var re=n(d);re!==null&&ae(R,re.startTime-U)}}function k(U,re){E=!1,w&&(w=!1,p(B),B=-1),x=!0;var j=_;try{for(S(re),g=n(h);g!==null&&(!(g.expirationTime>re)||U&&!F());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,_=g.priorityLevel;var Ce=ce(g.expirationTime<=re);re=t.unstable_now(),typeof Ce=="function"?g.callback=Ce:g===n(h)&&i(h),S(re)}else i(h);g=n(h)}if(g!==null)var He=!0;else{var Y=n(d);Y!==null&&ae(R,Y.startTime-re),He=!1}return He}finally{g=null,_=j,x=!1}}var D=!1,I=null,B=-1,b=5,A=-1;function F(){return!(t.unstable_now()-A<b)}function J(){if(I!==null){var U=t.unstable_now();A=U;var re=!0;try{re=I(!0,U)}finally{re?Q():(D=!1,I=null)}}else D=!1}var Q;if(typeof M=="function")Q=function(){M(J)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,se=ie.port2;ie.port1.onmessage=J,Q=function(){se.postMessage(null)}}else Q=function(){y(J,0)};function ee(U){I=U,D||(D=!0,Q())}function ae(U,re){B=y(function(){U(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){E||x||(E=!0,ee(k))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(U){switch(_){case 1:case 2:case 3:var re=3;break;default:re=_}var j=_;_=re;try{return U()}finally{_=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,re){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=_;_=U;try{return re()}finally{_=j}},t.unstable_scheduleCallback=function(U,re,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,U){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=j+Ce,U={id:m++,callback:re,priorityLevel:U,startTime:j,expirationTime:Ce,sortIndex:-1},j>ce?(U.sortIndex=j,e(d,U),n(h)===null&&U===n(d)&&(w?(p(B),B=-1):w=!0,ae(R,j-ce))):(U.sortIndex=Ce,e(h,U),E||x||(E=!0,ee(k))),U},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(U){var re=_;return function(){var j=_;_=re;try{return U.apply(this,arguments)}finally{_=j}}}})(yg);xg.exports=yg;var xy=xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=nt,Bn=xy;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,va={};function _o(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(va[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Op={};function My(t){return Vh.call(Op,t)?!0:Vh.call(Up,t)?!1:Sy.test(t)?Op[t]=!0:(Up[t]=!0,!1)}function Ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wy(t,e,n,i){if(e===null||typeof e>"u"||Ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,o,a,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=l}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function Kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,Kf);sn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,Kf);sn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,Kf);sn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function $f(t,e,n,i){var o=sn.hasOwnProperty(e)?sn[e]:null;(o!==null?o.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wy(e,n,o,i)&&(n=null),i||o===null?My(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,i=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Go=Symbol.for("react.portal"),Wo=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),Wh=Symbol.for("react.suspense"),Xh=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Fc;function ia(t){if(Fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+t}var kc=!1;function zc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),a=i.stack.split(`
`),l=o.length-1,c=a.length-1;1<=l&&0<=c&&o[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(o[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||o[l]!==a[c]){var h=`
`+o[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=c);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Ty(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wo:return"Fragment";case Go:return"Portal";case Gh:return"Profiler";case Qf:return"StrictMode";case Wh:return"Suspense";case Xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Eg:return(t.displayName||"Context")+".Consumer";case Mg:return(t._context.displayName||"Context")+".Provider";case Jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ed:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function Ay(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cy(t){var e=Tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(l){i=""+l,a.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fl(t){t._valueTracker||(t._valueTracker=Cy(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jh(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cg(t,e){e=e.checked,e!=null&&$f(t,"checked",e,!1)}function qh(t,e){Cg(t,e);var n=Pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yh(t,e,n){(e!=="number"||fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,i&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(ra(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function Pg(t,e){var n=Pr(e.value),i=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){Py.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function Ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,o):t[n]=o}}var Ry=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function Jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ef=null;function td(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tf=null,is=null,rs=null;function Vp(t){if(t=ka(t)){if(typeof tf!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=qu(e),tf(t.stateNode,t.type,e))}}function Dg(t){is?rs?rs.push(t):rs=[t]:is=t}function Ng(){if(is){var t=is,e=rs;if(rs=is=null,Vp(t),e)for(t=0;t<e.length;t++)Vp(e[t])}}function Ug(t,e){return t(e)}function Og(){}var Bc=!1;function Fg(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return Ug(t,e,n)}finally{Bc=!1,(is!==null||rs!==null)&&(Og(),Ng())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var i=qu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var nf=!1;if(qi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){nf=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{nf=!1}function Ly(t,e,n,i,o,a,l,c,h){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var ca=!1,du=null,pu=!1,rf=null,by={onError:function(t){ca=!0,du=t}};function Iy(t,e,n,i,o,a,l,c,h){ca=!1,du=null,Ly.apply(by,arguments)}function Dy(t,e,n,i,o,a,l,c,h){if(Iy.apply(this,arguments),ca){if(ca){var d=du;ca=!1,du=null}else throw Error(pe(198));pu||(pu=!0,rf=d)}}function go(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(go(t)!==t)throw Error(pe(188))}function Ny(t){var e=t.alternate;if(!e){if(e=go(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Gp(o),t;if(a===i)return Gp(o),e;a=a.sibling}throw Error(pe(188))}if(n.return!==i.return)n=o,i=a;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,i=a;break}if(c===i){l=!0,i=o,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,i=o;break}if(c===i){l=!0,i=a,n=o;break}c=c.sibling}if(!l)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function zg(t){return t=Ny(t),t!==null?Bg(t):null}function Bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bg(t);if(e!==null)return e;t=t.sibling}return null}var Hg=Bn.unstable_scheduleCallback,Wp=Bn.unstable_cancelCallback,Uy=Bn.unstable_shouldYield,Oy=Bn.unstable_requestPaint,zt=Bn.unstable_now,Fy=Bn.unstable_getCurrentPriorityLevel,nd=Bn.unstable_ImmediatePriority,Vg=Bn.unstable_UserBlockingPriority,mu=Bn.unstable_NormalPriority,ky=Bn.unstable_LowPriority,Gg=Bn.unstable_IdlePriority,Wu=null,Ai=null;function zy(t){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:Vy,By=Math.log,Hy=Math.LN2;function Vy(t){return t>>>=0,t===0?32:31-(By(t)/Hy|0)|0}var pl=64,ml=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _u(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,o=t.suspendedLanes,a=t.pingedLanes,l=n&268435455;if(l!==0){var c=l&~o;c!==0?i=oa(c):(a&=l,a!==0&&(i=oa(a)))}else l=n&~o,l!==0?i=oa(l):a!==0&&(i=oa(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&o)&&(o=i&-i,a=e&-e,o>=a||o===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-hi(e),o=1<<n,i|=t[n],e&=~o;return i}function Gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,o=t.expirationTimes,a=t.pendingLanes;0<a;){var l=31-hi(a),c=1<<l,h=o[l];h===-1?(!(c&n)||c&i)&&(o[l]=Gy(c,e)):h<=e&&(t.expiredLanes|=c),a&=~c}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=pl;return pl<<=1,!(pl&4194240)&&(pl=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hi(e),t[e]=n}function Xy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-hi(n),a=1<<o;e[o]=0,i[o]=-1,t[o]=-1,n&=~a}}function id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-hi(n),o=1<<i;o&e|t[i]&e&&(t[i]|=e),n&=~o}}var vt=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zg,rd,jg,qg,Yg,sf=!1,_l=[],vr=null,xr=null,yr=null,Sa=new Map,Ma=new Map,fr=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Zs(t,e,n,i,o,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},e!==null&&(e=ka(e),e!==null&&rd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function jy(t,e,n,i,o){switch(e){case"focusin":return vr=Zs(vr,t,e,n,i,o),!0;case"dragenter":return xr=Zs(xr,t,e,n,i,o),!0;case"mouseover":return yr=Zs(yr,t,e,n,i,o),!0;case"pointerover":var a=o.pointerId;return Sa.set(a,Zs(Sa.get(a)||null,t,e,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,Ma.set(a,Zs(Ma.get(a)||null,t,e,n,i,o)),!0}return!1}function Kg(t){var e=to(t.target);if(e!==null){var n=go(e);if(n!==null){if(e=n.tag,e===13){if(e=kg(n),e!==null){t.blockedOn=e,Yg(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ef=i,n.target.dispatchEvent(i),ef=null}else return e=ka(n),e!==null&&rd(e),t.blockedOn=n,!1;e.shift()}return!0}function Zp(t,e,n){eu(t)&&n.delete(e)}function qy(){sf=!1,vr!==null&&eu(vr)&&(vr=null),xr!==null&&eu(xr)&&(xr=null),yr!==null&&eu(yr)&&(yr=null),Sa.forEach(Zp),Ma.forEach(Zp)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,qy)))}function Ea(t){function e(o){return js(o,t)}if(0<_l.length){js(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&js(vr,t),xr!==null&&js(xr,t),yr!==null&&js(yr,t),Sa.forEach(e),Ma.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Kg(n),n.blockedOn===null&&fr.shift()}var os=Ji.ReactCurrentBatchConfig,gu=!0;function Yy(t,e,n,i){var o=vt,a=os.transition;os.transition=null;try{vt=1,od(t,e,n,i)}finally{vt=o,os.transition=a}}function Ky(t,e,n,i){var o=vt,a=os.transition;os.transition=null;try{vt=4,od(t,e,n,i)}finally{vt=o,os.transition=a}}function od(t,e,n,i){if(gu){var o=af(t,e,n,i);if(o===null)$c(t,e,i,vu,n),Xp(t,i);else if(jy(o,t,e,n,i))i.stopPropagation();else if(Xp(t,i),e&4&&-1<Zy.indexOf(t)){for(;o!==null;){var a=ka(o);if(a!==null&&Zg(a),a=af(t,e,n,i),a===null&&$c(t,e,i,vu,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var vu=null;function af(t,e,n,i){if(vu=null,t=td(i),t=to(t),t!==null)if(e=go(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vu=t,null}function $g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case nd:return 1;case Vg:return 4;case mu:case ky:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var mr=null,sd=null,tu=null;function Qg(){if(tu)return tu;var t,e=sd,n=e.length,i,o="value"in mr?mr.value:mr.textContent,a=o.length;for(t=0;t<n&&e[t]===o[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===o[a-i];i++);return tu=o.slice(t,1<i?1-i:void 0)}function nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function jp(){return!1}function Vn(t){function e(n,i,o,a,l){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?gl:jp,this.isPropagationStopped=jp,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=Vn(Ts),Fa=Nt({},Ts,{view:0,detail:0}),$y=Vn(Fa),Vc,Gc,qs,Xu=Nt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Vc=t.screenX-qs.screenX,Gc=t.screenY-qs.screenY):Gc=Vc=0,qs=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),qp=Vn(Xu),Qy=Nt({},Xu,{dataTransfer:0}),Jy=Vn(Qy),eS=Nt({},Fa,{relatedTarget:0}),Wc=Vn(eS),tS=Nt({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Vn(tS),iS=Nt({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Vn(iS),oS=Nt({},Ts,{data:0}),Yp=Vn(oS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lS[t])?!!e[t]:!1}function ld(){return uS}var cS=Nt({},Fa,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=Vn(cS),fS=Nt({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Vn(fS),dS=Nt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),pS=Vn(dS),mS=Nt({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Vn(mS),gS=Nt({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Vn(gS),xS=[9,13,27,32],ud=qi&&"CompositionEvent"in window,ha=null;qi&&"documentMode"in document&&(ha=document.documentMode);var yS=qi&&"TextEvent"in window&&!ha,Jg=qi&&(!ud||ha&&8<ha&&11>=ha),$p=" ",Qp=!1;function ev(t,e){switch(t){case"keyup":return xS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xo=!1;function SS(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Qp=!0,$p);case"textInput":return t=e.data,t===$p&&Qp?null:t;default:return null}}function MS(t,e){if(Xo)return t==="compositionend"||!ud&&ev(t,e)?(t=Qg(),tu=sd=mr=null,Xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ES[t.type]:e==="textarea"}function nv(t,e,n,i){Dg(i),e=xu(e,"onChange"),0<e.length&&(n=new ad("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,wa=null;function wS(t){dv(t,0)}function Zu(t){var e=qo(t);if(Ag(e))return t}function TS(t,e){if(t==="change")return e}var iv=!1;if(qi){var Xc;if(qi){var Zc="oninput"in document;if(!Zc){var em=document.createElement("div");em.setAttribute("oninput","return;"),Zc=typeof em.oninput=="function"}Xc=Zc}else Xc=!1;iv=Xc&&(!document.documentMode||9<document.documentMode)}function tm(){fa&&(fa.detachEvent("onpropertychange",rv),wa=fa=null)}function rv(t){if(t.propertyName==="value"&&Zu(wa)){var e=[];nv(e,wa,t,td(t)),Fg(wS,e)}}function AS(t,e,n){t==="focusin"?(tm(),fa=e,wa=n,fa.attachEvent("onpropertychange",rv)):t==="focusout"&&tm()}function CS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(wa)}function PS(t,e){if(t==="click")return Zu(e)}function RS(t,e){if(t==="input"||t==="change")return Zu(e)}function LS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:LS;function Ta(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Vh.call(e,o)||!di(t[o],e[o]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,e){var n=nm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sv(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fu(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bS(t){var e=sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(i!==null&&cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!t.extend&&a>i&&(o=i,i=a,a=o),o=im(n,a);var l=im(n,i);o&&l&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IS=qi&&"documentMode"in document&&11>=document.documentMode,Zo=null,lf=null,da=null,uf=!1;function rm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||Zo==null||Zo!==fu(i)||(i=Zo,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ta(da,i)||(da=i,i=xu(lf,"onSelect"),0<i.length&&(e=new ad("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zo)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jo={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},jc={},av={};qi&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function ju(t){if(jc[t])return jc[t];if(!jo[t])return t;var e=jo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return jc[t]=e[n];return t}var lv=ju("animationend"),uv=ju("animationiteration"),cv=ju("animationstart"),hv=ju("transitionend"),fv=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){fv.set(t,e),_o(e,[t])}for(var qc=0;qc<om.length;qc++){var Yc=om[qc],DS=Yc.toLowerCase(),NS=Yc[0].toUpperCase()+Yc.slice(1);Dr(DS,"on"+NS)}Dr(lv,"onAnimationEnd");Dr(uv,"onAnimationIteration");Dr(cv,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(hv,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function sm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Dy(i,e,void 0,t),t.currentTarget=null}function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],o=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var l=i.length-1;0<=l;l--){var c=i[l],h=c.instance,d=c.currentTarget;if(c=c.listener,h!==a&&o.isPropagationStopped())break e;sm(o,c,d),a=h}else for(l=0;l<i.length;l++){if(c=i[l],h=c.instance,d=c.currentTarget,c=c.listener,h!==a&&o.isPropagationStopped())break e;sm(o,c,d),a=h}}}if(pu)throw t=rf,pu=!1,rf=null,t}function At(t,e){var n=e[pf];n===void 0&&(n=e[pf]=new Set);var i=t+"__bubble";n.has(i)||(pv(e,t,2,!1),n.add(i))}function Kc(t,e,n){var i=0;e&&(i|=4),pv(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[xl]){t[xl]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,Kc("selectionchange",!1,e))}}function pv(t,e,n,i){switch($g(e)){case 1:var o=Yy;break;case 4:o=Ky;break;default:o=od}n=o.bind(null,e,n,t),o=void 0,!nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),i?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,o){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;l=l.return}for(;c!==null;){if(l=to(c),l===null)return;if(h=l.tag,h===5||h===6){i=a=l;continue e}c=c.parentNode}}i=i.return}Fg(function(){var d=a,m=td(n),g=[];e:{var _=fv.get(t);if(_!==void 0){var x=ad,E=t;switch(t){case"keypress":if(nu(n)===0)break e;case"keydown":case"keyup":x=hS;break;case"focusin":E="focus",x=Wc;break;case"focusout":E="blur",x=Wc;break;case"beforeblur":case"afterblur":x=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=pS;break;case lv:case uv:case cv:x=nS;break;case hv:x=_S;break;case"scroll":x=$y;break;case"wheel":x=vS;break;case"copy":case"cut":case"paste":x=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Kp}var w=(e&4)!==0,y=!w&&t==="scroll",p=w?_!==null?_+"Capture":null:_;w=[];for(var M=d,S;M!==null;){S=M;var R=S.stateNode;if(S.tag===5&&R!==null&&(S=R,p!==null&&(R=ya(M,p),R!=null&&w.push(Ca(M,R,S)))),y)break;M=M.return}0<w.length&&(_=new x(_,E,null,n,m),g.push({event:_,listeners:w}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==ef&&(E=n.relatedTarget||n.fromElement)&&(to(E)||E[Yi]))break e;if((x||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=d,E=E?to(E):null,E!==null&&(y=go(E),E!==y||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=d),x!==E)){if(w=qp,R="onMouseLeave",p="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(w=Kp,R="onPointerLeave",p="onPointerEnter",M="pointer"),y=x==null?_:qo(x),S=E==null?_:qo(E),_=new w(R,M+"leave",x,n,m),_.target=y,_.relatedTarget=S,R=null,to(m)===d&&(w=new w(p,M+"enter",E,n,m),w.target=S,w.relatedTarget=y,R=w),y=R,x&&E)t:{for(w=x,p=E,M=0,S=w;S;S=To(S))M++;for(S=0,R=p;R;R=To(R))S++;for(;0<M-S;)w=To(w),M--;for(;0<S-M;)p=To(p),S--;for(;M--;){if(w===p||p!==null&&w===p.alternate)break t;w=To(w),p=To(p)}w=null}else w=null;x!==null&&am(g,_,x,w,!1),E!==null&&y!==null&&am(g,y,E,w,!0)}}e:{if(_=d?qo(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var k=TS;else if(Jp(_))if(iv)k=RS;else{k=CS;var D=AS}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(k=PS);if(k&&(k=k(t,d))){nv(g,k,n,m);break e}D&&D(t,_,d),t==="focusout"&&(D=_._wrapperState)&&D.controlled&&_.type==="number"&&Yh(_,"number",_.value)}switch(D=d?qo(d):window,t){case"focusin":(Jp(D)||D.contentEditable==="true")&&(Zo=D,lf=d,da=null);break;case"focusout":da=lf=Zo=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,rm(g,n,m);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":rm(g,n,m)}var I;if(ud)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Xo?ev(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Jg&&n.locale!=="ko"&&(Xo||B!=="onCompositionStart"?B==="onCompositionEnd"&&Xo&&(I=Qg()):(mr=m,sd="value"in mr?mr.value:mr.textContent,Xo=!0)),D=xu(d,B),0<D.length&&(B=new Yp(B,t,null,n,m),g.push({event:B,listeners:D}),I?B.data=I:(I=tv(n),I!==null&&(B.data=I)))),(I=yS?SS(t,n):MS(t,n))&&(d=xu(d,"onBeforeInput"),0<d.length&&(m=new Yp("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=I))}dv(g,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xu(t,e){for(var n=e+"Capture",i=[];t!==null;){var o=t,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ya(t,n),a!=null&&i.unshift(Ca(t,a,o)),a=ya(t,e),a!=null&&i.push(Ca(t,a,o))),t=t.return}return i}function To(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,i,o){for(var a=e._reactName,l=[];n!==null&&n!==i;){var c=n,h=c.alternate,d=c.stateNode;if(h!==null&&h===i)break;c.tag===5&&d!==null&&(c=d,o?(h=ya(n,a),h!=null&&l.unshift(Ca(n,h,c))):o||(h=ya(n,a),h!=null&&l.push(Ca(n,h,c)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var OS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(FS,"")}function yl(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(pe(425))}function yu(){}var cf=null,hf=null;function ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(BS)}:df;function BS(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,i=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){t.removeChild(o),Ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Ea(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Mi="__reactFiber$"+As,Pa="__reactProps$"+As,Yi="__reactContainer$"+As,pf="__reactEvents$"+As,HS="__reactListeners$"+As,VS="__reactHandles$"+As;function to(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[Mi])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Mi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function qu(t){return t[Pa]||null}var mf=[],Yo=-1;function Nr(t){return{current:t}}function Pt(t){0>Yo||(t.current=mf[Yo],mf[Yo]=null,Yo--)}function Et(t,e){Yo++,mf[Yo]=t.current,t.current=e}var Rr={},dn=Nr(Rr),Rn=Nr(!1),uo=Rr;function fs(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Ln(t){return t=t.childContextTypes,t!=null}function Su(){Pt(Rn),Pt(dn)}function hm(t,e,n){if(dn.current!==Rr)throw Error(pe(168));Et(dn,e),Et(Rn,n)}function mv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in e))throw Error(pe(108,Ay(t)||"Unknown",o));return Nt({},n,i)}function Mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,uo=dn.current,Et(dn,t),Et(Rn,Rn.current),!0}function fm(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=mv(t,e,uo),i.__reactInternalMemoizedMergedChildContext=t,Pt(Rn),Pt(dn),Et(dn,t)):Pt(Rn),Et(Rn,n)}var Vi=null,Yu=!1,Jc=!1;function _v(t){Vi===null?Vi=[t]:Vi.push(t)}function GS(t){Yu=!0,_v(t)}function Ur(){if(!Jc&&Vi!==null){Jc=!0;var t=0,e=vt;try{var n=Vi;for(vt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,Yu=!1}catch(o){throw Vi!==null&&(Vi=Vi.slice(t+1)),Hg(nd,Ur),o}finally{vt=e,Jc=!1}}return null}var Ko=[],$o=0,Eu=null,wu=0,jn=[],qn=0,co=null,Wi=1,Xi="";function Yr(t,e){Ko[$o++]=wu,Ko[$o++]=Eu,Eu=t,wu=e}function gv(t,e,n){jn[qn++]=Wi,jn[qn++]=Xi,jn[qn++]=co,co=t;var i=Wi;t=Xi;var o=32-hi(i)-1;i&=~(1<<o),n+=1;var a=32-hi(e)+o;if(30<a){var l=o-o%5;a=(i&(1<<l)-1).toString(32),i>>=l,o-=l,Wi=1<<32-hi(e)+o|n<<o|i,Xi=a+t}else Wi=1<<a|n<<o|i,Xi=t}function hd(t){t.return!==null&&(Yr(t,1),gv(t,1,0))}function fd(t){for(;t===Eu;)Eu=Ko[--$o],Ko[$o]=null,wu=Ko[--$o],Ko[$o]=null;for(;t===co;)co=jn[--qn],jn[qn]=null,Xi=jn[--qn],jn[qn]=null,Wi=jn[--qn],jn[qn]=null}var kn=null,Fn=null,Lt=!1,ui=null;function vv(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Fn=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=co!==null?{id:Wi,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Fn=null,!0):!1;default:return!1}}function _f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(Lt){var e=Fn;if(e){var n=e;if(!dm(t,e)){if(_f(t))throw Error(pe(418));e=Sr(n.nextSibling);var i=kn;e&&dm(t,e)?vv(i,n):(t.flags=t.flags&-4097|2,Lt=!1,kn=t)}}else{if(_f(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Lt=!1,kn=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Sl(t){if(t!==kn)return!1;if(!Lt)return pm(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ff(t.type,t.memoizedProps)),e&&(e=Fn)){if(_f(t))throw xv(),Error(pe(418));for(;e;)vv(t,e),e=Sr(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=kn?Sr(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Fn;t;)t=Sr(t.nextSibling)}function ds(){Fn=kn=null,Lt=!1}function dd(t){ui===null?ui=[t]:ui.push(t)}var WS=Ji.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var o=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(l){var c=o.refs;l===null?delete c[a]:c[a]=l},e._stringRef=a,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function yv(t){function e(p,M){if(t){var S=p.deletions;S===null?(p.deletions=[M],p.flags|=16):S.push(M)}}function n(p,M){if(!t)return null;for(;M!==null;)e(p,M),M=M.sibling;return null}function i(p,M){for(p=new Map;M!==null;)M.key!==null?p.set(M.key,M):p.set(M.index,M),M=M.sibling;return p}function o(p,M){return p=Tr(p,M),p.index=0,p.sibling=null,p}function a(p,M,S){return p.index=S,t?(S=p.alternate,S!==null?(S=S.index,S<M?(p.flags|=2,M):S):(p.flags|=2,M)):(p.flags|=1048576,M)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function c(p,M,S,R){return M===null||M.tag!==6?(M=sh(S,p.mode,R),M.return=p,M):(M=o(M,S),M.return=p,M)}function h(p,M,S,R){var k=S.type;return k===Wo?m(p,M,S.props.children,R,S.key):M!==null&&(M.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cr&&mm(k)===M.type)?(R=o(M,S.props),R.ref=Ys(p,M,S),R.return=p,R):(R=uu(S.type,S.key,S.props,null,p.mode,R),R.ref=Ys(p,M,S),R.return=p,R)}function d(p,M,S,R){return M===null||M.tag!==4||M.stateNode.containerInfo!==S.containerInfo||M.stateNode.implementation!==S.implementation?(M=ah(S,p.mode,R),M.return=p,M):(M=o(M,S.children||[]),M.return=p,M)}function m(p,M,S,R,k){return M===null||M.tag!==7?(M=ao(S,p.mode,R,k),M.return=p,M):(M=o(M,S),M.return=p,M)}function g(p,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return M=sh(""+M,p.mode,S),M.return=p,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case hl:return S=uu(M.type,M.key,M.props,null,p.mode,S),S.ref=Ys(p,null,M),S.return=p,S;case Go:return M=ah(M,p.mode,S),M.return=p,M;case cr:var R=M._init;return g(p,R(M._payload),S)}if(ra(M)||Ws(M))return M=ao(M,p.mode,S,null),M.return=p,M;Ml(p,M)}return null}function _(p,M,S,R){var k=M!==null?M.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return k!==null?null:c(p,M,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return S.key===k?h(p,M,S,R):null;case Go:return S.key===k?d(p,M,S,R):null;case cr:return k=S._init,_(p,M,k(S._payload),R)}if(ra(S)||Ws(S))return k!==null?null:m(p,M,S,R,null);Ml(p,S)}return null}function x(p,M,S,R,k){if(typeof R=="string"&&R!==""||typeof R=="number")return p=p.get(S)||null,c(M,p,""+R,k);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case hl:return p=p.get(R.key===null?S:R.key)||null,h(M,p,R,k);case Go:return p=p.get(R.key===null?S:R.key)||null,d(M,p,R,k);case cr:var D=R._init;return x(p,M,S,D(R._payload),k)}if(ra(R)||Ws(R))return p=p.get(S)||null,m(M,p,R,k,null);Ml(M,R)}return null}function E(p,M,S,R){for(var k=null,D=null,I=M,B=M=0,b=null;I!==null&&B<S.length;B++){I.index>B?(b=I,I=null):b=I.sibling;var A=_(p,I,S[B],R);if(A===null){I===null&&(I=b);break}t&&I&&A.alternate===null&&e(p,I),M=a(A,M,B),D===null?k=A:D.sibling=A,D=A,I=b}if(B===S.length)return n(p,I),Lt&&Yr(p,B),k;if(I===null){for(;B<S.length;B++)I=g(p,S[B],R),I!==null&&(M=a(I,M,B),D===null?k=I:D.sibling=I,D=I);return Lt&&Yr(p,B),k}for(I=i(p,I);B<S.length;B++)b=x(I,p,B,S[B],R),b!==null&&(t&&b.alternate!==null&&I.delete(b.key===null?B:b.key),M=a(b,M,B),D===null?k=b:D.sibling=b,D=b);return t&&I.forEach(function(F){return e(p,F)}),Lt&&Yr(p,B),k}function w(p,M,S,R){var k=Ws(S);if(typeof k!="function")throw Error(pe(150));if(S=k.call(S),S==null)throw Error(pe(151));for(var D=k=null,I=M,B=M=0,b=null,A=S.next();I!==null&&!A.done;B++,A=S.next()){I.index>B?(b=I,I=null):b=I.sibling;var F=_(p,I,A.value,R);if(F===null){I===null&&(I=b);break}t&&I&&F.alternate===null&&e(p,I),M=a(F,M,B),D===null?k=F:D.sibling=F,D=F,I=b}if(A.done)return n(p,I),Lt&&Yr(p,B),k;if(I===null){for(;!A.done;B++,A=S.next())A=g(p,A.value,R),A!==null&&(M=a(A,M,B),D===null?k=A:D.sibling=A,D=A);return Lt&&Yr(p,B),k}for(I=i(p,I);!A.done;B++,A=S.next())A=x(I,p,B,A.value,R),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?B:A.key),M=a(A,M,B),D===null?k=A:D.sibling=A,D=A);return t&&I.forEach(function(J){return e(p,J)}),Lt&&Yr(p,B),k}function y(p,M,S,R){if(typeof S=="object"&&S!==null&&S.type===Wo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:e:{for(var k=S.key,D=M;D!==null;){if(D.key===k){if(k=S.type,k===Wo){if(D.tag===7){n(p,D.sibling),M=o(D,S.props.children),M.return=p,p=M;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cr&&mm(k)===D.type){n(p,D.sibling),M=o(D,S.props),M.ref=Ys(p,D,S),M.return=p,p=M;break e}n(p,D);break}else e(p,D);D=D.sibling}S.type===Wo?(M=ao(S.props.children,p.mode,R,S.key),M.return=p,p=M):(R=uu(S.type,S.key,S.props,null,p.mode,R),R.ref=Ys(p,M,S),R.return=p,p=R)}return l(p);case Go:e:{for(D=S.key;M!==null;){if(M.key===D)if(M.tag===4&&M.stateNode.containerInfo===S.containerInfo&&M.stateNode.implementation===S.implementation){n(p,M.sibling),M=o(M,S.children||[]),M.return=p,p=M;break e}else{n(p,M);break}else e(p,M);M=M.sibling}M=ah(S,p.mode,R),M.return=p,p=M}return l(p);case cr:return D=S._init,y(p,M,D(S._payload),R)}if(ra(S))return E(p,M,S,R);if(Ws(S))return w(p,M,S,R);Ml(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,M!==null&&M.tag===6?(n(p,M.sibling),M=o(M,S),M.return=p,p=M):(n(p,M),M=sh(S,p.mode,R),M.return=p,p=M),l(p)):n(p,M)}return y}var ps=yv(!0),Sv=yv(!1),Tu=Nr(null),Au=null,Qo=null,pd=null;function md(){pd=Qo=Au=null}function _d(t){var e=Tu.current;Pt(Tu),t._currentValue=e}function vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){Au=t,pd=Qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(pd!==t)if(t={context:t,memoizedValue:e,next:null},Qo===null){if(Au===null)throw Error(pe(308));Qo=t,Au.dependencies={lanes:0,firstContext:t}}else Qo=Qo.next=t;return e}var no=null;function gd(t){no===null?no=[t]:no.push(t)}function Mv(t,e,n,i){var o=e.interleaved;return o===null?(n.next=n,gd(e)):(n.next=o.next,o.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var o=i.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e,Ki(t,n)}return o=i.interleaved,o===null?(e.next=e,gd(i)):(e.next=o.next,o.next=e),i.interleaved=e,Ki(t,n)}function iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,id(t,n)}}function _m(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=e:a=a.next=e}else o=a=e;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cu(t,e,n,i){var o=t.updateQueue;hr=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var h=c,d=h.next;h.next=null,l===null?a=d:l.next=d,l=h;var m=t.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==l&&(c===null?m.firstBaseUpdate=d:c.next=d,m.lastBaseUpdate=h))}if(a!==null){var g=o.baseState;l=0,m=d=h=null,c=a;do{var _=c.lane,x=c.eventTime;if((i&_)===_){m!==null&&(m=m.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var E=t,w=c;switch(_=e,x=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){g=E.call(x,g,_);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,_=typeof E=="function"?E.call(x,g,_):E,_==null)break e;g=Nt({},g,_);break e;case 2:hr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,_=o.effects,_===null?o.effects=[c]:_.push(c))}else x={eventTime:x,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(d=m=x,h=g):m=m.next=x,l|=_;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;_=c,c=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(m===null&&(h=g),o.baseState=h,o.firstBaseUpdate=d,o.lastBaseUpdate=m,e=o.shared.interleaved,e!==null){o=e;do l|=o.lane,o=o.next;while(o!==e)}else a===null&&(o.shared.lanes=0);fo|=l,t.lanes=l,t.memoizedState=g}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(pe(191,o));o.call(i)}}}var za={},Ci=Nr(za),Ra=Nr(za),La=Nr(za);function io(t){if(t===za)throw Error(pe(174));return t}function xd(t,e){switch(Et(La,e),Et(Ra,t),Et(Ci,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$h(e,t)}Pt(Ci),Et(Ci,e)}function ms(){Pt(Ci),Pt(Ra),Pt(La)}function wv(t){io(La.current);var e=io(Ci.current),n=$h(e,t.type);e!==n&&(Et(Ra,t),Et(Ci,n))}function yd(t){Ra.current===t&&(Pt(Ci),Pt(Ra))}var It=Nr(0);function Pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function Sd(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var ru=Ji.ReactCurrentDispatcher,th=Ji.ReactCurrentBatchConfig,ho=0,Dt=null,Zt=null,Jt=null,Ru=!1,pa=!1,ba=0,XS=0;function ln(){throw Error(pe(321))}function Md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function Ed(t,e,n,i,o,a){if(ho=a,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ru.current=t===null||t.memoizedState===null?YS:KS,t=n(i,o),pa){a=0;do{if(pa=!1,ba=0,25<=a)throw Error(pe(301));a+=1,Jt=Zt=null,e.updateQueue=null,ru.current=$S,t=n(i,o)}while(pa)}if(ru.current=Lu,e=Zt!==null&&Zt.next!==null,ho=0,Jt=Zt=Dt=null,Ru=!1,e)throw Error(pe(300));return t}function wd(){var t=ba!==0;return ba=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Dt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function ei(){if(Zt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=Jt===null?Dt.memoizedState:Jt.next;if(e!==null)Jt=e,Zt=t;else{if(t===null)throw Error(pe(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Jt===null?Dt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Ia(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=ei(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Zt,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var c=l=null,h=null,d=a;do{var m=d.lane;if((ho&m)===m)h!==null&&(h=h.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};h===null?(c=h=g,l=i):h=h.next=g,Dt.lanes|=m,fo|=m}d=d.next}while(d!==null&&d!==a);h===null?l=i:h.next=c,di(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=h,n.lastRenderedState=i}if(t=n.interleaved,t!==null){o=t;do a=o.lane,Dt.lanes|=a,fo|=a,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ih(t){var e=ei(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,o=n.pending,a=e.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=t(a,l.action),l=l.next;while(l!==o);di(a,e.memoizedState)||(Pn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function Tv(){}function Av(t,e){var n=Dt,i=ei(),o=e(),a=!di(i.memoizedState,o);if(a&&(i.memoizedState=o,Pn=!0),i=i.queue,Td(Rv.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Pv.bind(null,n,i,o,e),void 0,null),en===null)throw Error(pe(349));ho&30||Cv(n,e,o)}return o}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&bv(t)}function Rv(t,e,n){return n(function(){Lv(e)&&bv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function bv(t){var e=Ki(t,1);e!==null&&fi(e,t,1,-1)}function vm(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=qS.bind(null,Dt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Iv(){return ei().memoizedState}function ou(t,e,n,i){var o=xi();Dt.flags|=t,o.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Ku(t,e,n,i){var o=ei();i=i===void 0?null:i;var a=void 0;if(Zt!==null){var l=Zt.memoizedState;if(a=l.destroy,i!==null&&Md(i,l.deps)){o.memoizedState=Da(e,n,a,i);return}}Dt.flags|=t,o.memoizedState=Da(1|e,n,a,i)}function xm(t,e){return ou(8390656,8,t,e)}function Td(t,e){return Ku(2048,8,t,e)}function Dv(t,e){return Ku(4,2,t,e)}function Nv(t,e){return Ku(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ov(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,Uv.bind(null,e,t),n)}function Ad(){}function Fv(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kv(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return ho&21?(di(n,e)||(n=Wg(),Dt.lanes|=n,fo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function ZS(t,e){var n=vt;vt=n!==0&&4>n?n:4,t(!0);var i=th.transition;th.transition={};try{t(!1),e()}finally{vt=n,th.transition=i}}function Bv(){return ei().memoizedState}function jS(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))Vv(e,n);else if(n=Mv(t,e,n,i),n!==null){var o=vn();fi(n,t,i,o),Gv(n,e,i)}}function qS(t,e,n){var i=wr(t),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))Vv(e,o);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var l=e.lastRenderedState,c=a(l,n);if(o.hasEagerState=!0,o.eagerState=c,di(c,l)){var h=e.interleaved;h===null?(o.next=o,gd(e)):(o.next=h.next,h.next=o),e.interleaved=o;return}}catch{}finally{}n=Mv(t,e,o,i),n!==null&&(o=vn(),fi(n,t,i,o),Gv(n,e,i))}}function Hv(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function Vv(t,e){pa=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,id(t,n)}}var Lu={readContext:Jn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},YS={readContext:Jn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ou(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return ou(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jS.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:vm,useDebugValue:Ad,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=vm(!1),e=t[0];return t=ZS.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,o=xi();if(Lt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),en===null)throw Error(pe(349));ho&30||Cv(i,e,n)}o.memoizedState=n;var a={value:n,getSnapshot:e};return o.queue=a,xm(Rv.bind(null,i,a,t),[t]),i.flags|=2048,Da(9,Pv.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=xi(),e=en.identifierPrefix;if(Lt){var n=Xi,i=Wi;n=(i&~(1<<32-hi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:Jn,useCallback:Fv,useContext:Jn,useEffect:Td,useImperativeHandle:Ov,useInsertionEffect:Dv,useLayoutEffect:Nv,useMemo:kv,useReducer:nh,useRef:Iv,useState:function(){return nh(Ia)},useDebugValue:Ad,useDeferredValue:function(t){var e=ei();return zv(e,Zt.memoizedState,t)},useTransition:function(){var t=nh(Ia)[0],e=ei().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:Bv,unstable_isNewReconciler:!1},$S={readContext:Jn,useCallback:Fv,useContext:Jn,useEffect:Td,useImperativeHandle:Ov,useInsertionEffect:Dv,useLayoutEffect:Nv,useMemo:kv,useReducer:ih,useRef:Iv,useState:function(){return ih(Ia)},useDebugValue:Ad,useDeferredValue:function(t){var e=ei();return Zt===null?e.memoizedState=t:zv(e,Zt.memoizedState,t)},useTransition:function(){var t=ih(Ia)[0],e=ei().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:Bv,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $u={isMounted:function(t){return(t=t._reactInternals)?go(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),o=wr(t),a=ji(i,o);a.payload=e,n!=null&&(a.callback=n),e=Mr(t,a,o),e!==null&&(fi(e,t,o,i),iu(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),o=wr(t),a=ji(i,o);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Mr(t,a,o),e!==null&&(fi(e,t,o,i),iu(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=wr(t),o=ji(n,i);o.tag=2,e!=null&&(o.callback=e),e=Mr(t,o,i),e!==null&&(fi(e,t,i,n),iu(e,t,i))}};function ym(t,e,n,i,o,a,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,l):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(o,a):!0}function Wv(t,e,n){var i=!1,o=Rr,a=e.contextType;return typeof a=="object"&&a!==null?a=Jn(a):(o=Ln(e)?uo:dn.current,i=e.contextTypes,a=(i=i!=null)?fs(t,o):Rr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=a),e}function Sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function yf(t,e,n,i){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs={},vd(t);var a=e.contextType;typeof a=="object"&&a!==null?o.context=Jn(a):(a=Ln(e)?uo:dn.current,o.context=fs(t,a)),o.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(xf(t,e,a,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&$u.enqueueReplaceState(o,o.state,null),Cu(t,n,o,i),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=Ty(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:o,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Iu||(Iu=!0,bf=i),Sf(t,e)},n}function Zv(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var o=e.value;n.payload=function(){return i(o)},n.callback=function(){Sf(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Mm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QS;var o=new Set;i.set(e,o)}else o=i.get(e),o===void 0&&(o=new Set,i.set(e,o));o.has(n)||(o.add(n),t=fM.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,i,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var JS=Ji.ReactCurrentOwner,Pn=!1;function gn(t,e,n,i){e.child=t===null?Sv(e,null,n,i):ps(e,t.child,n,i)}function Tm(t,e,n,i,o){n=n.render;var a=e.ref;return ss(e,o),i=Ed(t,e,n,i,a,o),n=wd(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,$i(t,e,o)):(Lt&&n&&hd(e),e.flags|=1,gn(t,e,i,o),e.child)}function Am(t,e,n,i,o){if(t===null){var a=n.type;return typeof a=="function"&&!Nd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,jv(t,e,a,i,o)):(t=uu(n.type,null,i,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&o)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(l,i)&&t.ref===e.ref)return $i(t,e,o)}return e.flags|=1,t=Tr(a,i),t.ref=e.ref,t.return=e,e.child=t}function jv(t,e,n,i,o){if(t!==null){var a=t.memoizedProps;if(Ta(a,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=a,(t.lanes&o)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,$i(t,e,o)}return Mf(t,e,n,i,o)}function qv(t,e,n){var i=e.pendingProps,o=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(es,On),On|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Et(es,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,Et(es,On),On|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,Et(es,On),On|=i;return gn(t,e,o,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,i,o){var a=Ln(n)?uo:dn.current;return a=fs(e,a),ss(e,o),n=Ed(t,e,n,i,a,o),i=wd(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,$i(t,e,o)):(Lt&&i&&hd(e),e.flags|=1,gn(t,e,n,o),e.child)}function Cm(t,e,n,i,o){if(Ln(n)){var a=!0;Mu(e)}else a=!1;if(ss(e,o),e.stateNode===null)su(t,e),Wv(e,n,i),yf(e,n,i,o),i=!0;else if(t===null){var l=e.stateNode,c=e.memoizedProps;l.props=c;var h=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Jn(d):(d=Ln(n)?uo:dn.current,d=fs(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==i||h!==d)&&Sm(e,l,i,d),hr=!1;var _=e.memoizedState;l.state=_,Cu(e,i,l,o),h=e.memoizedState,c!==i||_!==h||Rn.current||hr?(typeof m=="function"&&(xf(e,n,m,i),h=e.memoizedState),(c=hr||ym(e,n,c,i,_,h,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=d,i=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Ev(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:ai(e.type,c),l.props=d,g=e.pendingProps,_=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=Jn(h):(h=Ln(n)?uo:dn.current,h=fs(e,h));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==g||_!==h)&&Sm(e,l,i,h),hr=!1,_=e.memoizedState,l.state=_,Cu(e,i,l,o);var E=e.memoizedState;c!==g||_!==E||Rn.current||hr?(typeof x=="function"&&(xf(e,n,x,i),E=e.memoizedState),(d=hr||ym(e,n,d,i,_,E,h)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=h,i=d):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return Ef(t,e,n,i,a,o)}function Ef(t,e,n,i,o,a){Yv(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return o&&fm(e,n,!1),$i(t,e,a);i=e.stateNode,JS.current=e;var c=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ps(e,t.child,null,a),e.child=ps(e,null,c,a)):gn(t,e,c,a),e.memoizedState=i.state,o&&fm(e,n,!0),e.child}function Kv(t){var e=t.stateNode;e.pendingContext?hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(t,e.context,!1),xd(t,e.containerInfo)}function Pm(t,e,n,i,o){return ds(),dd(o),e.flags|=256,gn(t,e,n,i),e.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function $v(t,e,n){var i=e.pendingProps,o=It.current,a=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(o&2)!==0),c?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),Et(It,o&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,a?(i=e.mode,a=e.child,l={mode:"hidden",children:l},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=ec(l,i,0,null),t=ao(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Tf(n),e.memoizedState=wf,t):Cd(e,l));if(o=t.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return eM(t,e,l,i,c,o,n);if(a){a=i.fallback,l=e.mode,o=t.child,c=o.sibling;var h={mode:"hidden",children:i.children};return!(l&1)&&e.child!==o?(i=e.child,i.childLanes=0,i.pendingProps=h,e.deletions=null):(i=Tr(o,h),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=Tr(c,a):(a=ao(a,l,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,l=t.child.memoizedState,l=l===null?Tf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=t.childLanes&~n,e.memoizedState=wf,i}return a=t.child,t=a.sibling,i=Tr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,i){return i!==null&&dd(i),ps(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eM(t,e,n,i,o,a,l){if(n)return e.flags&256?(e.flags&=-257,i=rh(Error(pe(422))),El(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,o=e.mode,i=ec({mode:"visible",children:i.children},o,0,null),a=ao(a,o,l,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&ps(e,t.child,null,l),e.child.memoizedState=Tf(l),e.memoizedState=wf,a);if(!(e.mode&1))return El(t,e,l,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,a=Error(pe(419)),i=rh(a,i,void 0),El(t,e,l,i)}if(c=(l&t.childLanes)!==0,Pn||c){if(i=en,i!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ki(t,o),fi(i,t,o,-1))}return Dd(),i=rh(Error(pe(421))),El(t,e,l,i)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=dM.bind(null,t),o._reactRetry=e,null):(t=a.treeContext,Fn=Sr(o.nextSibling),kn=e,Lt=!0,ui=null,t!==null&&(jn[qn++]=Wi,jn[qn++]=Xi,jn[qn++]=co,Wi=t.id,Xi=t.overflow,co=e),e=Cd(e,i.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vf(t.return,e,n)}function oh(t,e,n,i,o){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function Qv(t,e,n){var i=e.pendingProps,o=i.revealOrder,a=i.tail;if(gn(t,e,i.children,n),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Et(It,i),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Pu(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),oh(e,!1,o,n,a);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Pu(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}oh(e,!0,n,null,a);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tM(t,e,n){switch(e.tag){case 3:Kv(e),ds();break;case 5:wv(e);break;case 1:Ln(e.type)&&Mu(e);break;case 4:xd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,o=e.memoizedProps.value;Et(Tu,i._currentValue),i._currentValue=o;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(It,It.current&1),e.flags|=128,null):n&e.child.childLanes?$v(t,e,n):(Et(It,It.current&1),t=$i(t,e,n),t!==null?t.sibling:null);Et(It,It.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qv(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Et(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,qv(t,e,n)}return $i(t,e,n)}var Jv,Af,e0,t0;Jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};e0=function(t,e,n,i){var o=t.memoizedProps;if(o!==i){t=e.stateNode,io(Ci.current);var a=null;switch(n){case"input":o=jh(t,o),i=jh(t,i),a=[];break;case"select":o=Nt({},o,{value:void 0}),i=Nt({},i,{value:void 0}),a=[];break;case"textarea":o=Kh(t,o),i=Kh(t,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yu)}Qh(n,i);var l;n=null;for(d in o)if(!i.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var c=o[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(va.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var h=i[d];if(c=o!=null?o[d]:void 0,i.hasOwnProperty(d)&&h!==c&&(h!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&c[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(a||(a=[]),a.push(d,n)),n=h;else d==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,c=c?c.__html:void 0,h!=null&&c!==h&&(a=a||[]).push(d,h)):d==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(d,""+h):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(va.hasOwnProperty(d)?(h!=null&&d==="onScroll"&&At("scroll",t),a||c===h||(a=[])):(a=a||[]).push(d,h))}n&&(a=a||[]).push("style",n);var d=a;(e.updateQueue=d)&&(e.flags|=4)}};t0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nM(t,e,n){var i=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Ln(e.type)&&Su(),un(e),null;case 3:return i=e.stateNode,ms(),Pt(Rn),Pt(dn),Sd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(Nf(ui),ui=null))),Af(t,e),un(e),null;case 5:yd(e);var o=io(La.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,i,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return un(e),null}if(t=io(Ci.current),Sl(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Mi]=e,i[Pa]=a,t=(e.mode&1)!==0,n){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(o=0;o<sa.length;o++)At(sa[o],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":kp(i,a),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},At("invalid",i);break;case"textarea":Bp(i,a),At("invalid",i)}Qh(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?i.textContent!==c&&(a.suppressHydrationWarning!==!0&&yl(i.textContent,c,t),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&yl(i.textContent,c,t),o=["children",""+c]):va.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&At("scroll",i)}switch(n){case"input":fl(i),zp(i,a,!0);break;case"textarea":fl(i),Hp(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=yu)}i=o,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Mi]=e,t[Pa]=i,Jv(t,e,!1,!1),e.stateNode=t;e:{switch(l=Jh(n,i),n){case"dialog":At("cancel",t),At("close",t),o=i;break;case"iframe":case"object":case"embed":At("load",t),o=i;break;case"video":case"audio":for(o=0;o<sa.length;o++)At(sa[o],t);o=i;break;case"source":At("error",t),o=i;break;case"img":case"image":case"link":At("error",t),At("load",t),o=i;break;case"details":At("toggle",t),o=i;break;case"input":kp(t,i),o=jh(t,i),At("invalid",t);break;case"option":o=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},o=Nt({},i,{value:void 0}),At("invalid",t);break;case"textarea":Bp(t,i),o=Kh(t,i),At("invalid",t);break;default:o=i}Qh(n,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var h=c[a];a==="style"?Ig(t,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Lg(t,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&xa(t,h):typeof h=="number"&&xa(t,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(va.hasOwnProperty(a)?h!=null&&a==="onScroll"&&At("scroll",t):h!=null&&$f(t,a,h,l))}switch(n){case"input":fl(t),zp(t,i,!1);break;case"textarea":fl(t),Hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Pr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ns(t,!!i.multiple,a,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=yu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=io(La.current),io(Ci.current),Sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(a=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:yl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return un(e),null;case 13:if(Pt(It),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Fn!==null&&e.mode&1&&!(e.flags&128))xv(),ds(),e.flags|=98560,a=!1;else if(a=Sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(pe(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(pe(317));a[Mi]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),a=!1}else ui!==null&&(Nf(ui),ui=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||It.current&1?jt===0&&(jt=3):Dd())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return ms(),Af(t,e),t===null&&Aa(e.stateNode.containerInfo),un(e),null;case 10:return _d(e.type._context),un(e),null;case 17:return Ln(e.type)&&Su(),un(e),null;case 19:if(Pt(It),a=e.memoizedState,a===null)return un(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)Ks(a,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Pu(t),l!==null){for(e.flags|=128,Ks(a,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Et(It,It.current&1|2),e.child}t=t.sibling}a.tail!==null&&zt()>gs&&(e.flags|=128,i=!0,Ks(a,!1),e.lanes=4194304)}else{if(!i)if(t=Pu(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Lt)return un(e),null}else 2*zt()-a.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Ks(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=zt(),e.sibling=null,n=It.current,Et(It,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function iM(t,e){switch(fd(e),e.tag){case 1:return Ln(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),Pt(Rn),Pt(dn),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yd(e),null;case 13:if(Pt(It),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pt(It),null;case 4:return ms(),null;case 10:return _d(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var wl=!1,fn=!1,rM=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Jo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ft(t,e,i)}else n.current=null}function Cf(t,e,n){try{n()}catch(i){Ft(t,e,i)}}var Lm=!1;function oM(t,e){if(cf=gu,t=sv(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,h=-1,d=0,m=0,g=t,_=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(c=l+o),g!==a||i!==0&&g.nodeType!==3||(h=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)_=g,g=x;for(;;){if(g===t)break t;if(_===n&&++d===o&&(c=l),_===a&&++m===i&&(h=l),(x=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=x}n=c===-1||h===-1?null:{start:c,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},gu=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,y=E.memoizedState,p=e.stateNode,M=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ai(e.type,w),y);p.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(R){Ft(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return E=Lm,Lm=!1,E}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.destroy;o.destroy=void 0,a!==void 0&&Cf(e,n,a)}o=o.next}while(o!==i)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[Pa],delete e[pf],delete e[HS],delete e[VS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yu));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var nn=null,li=!1;function ir(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:fn||Jo(n,e);case 6:var i=nn,o=li;nn=null,ir(t,e,n),nn=i,li=o,nn!==null&&(li?(t=nn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nn.removeChild(n.stateNode));break;case 18:nn!==null&&(li?(t=nn,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Ea(t)):Qc(nn,n.stateNode));break;case 4:i=nn,o=li,nn=n.stateNode.containerInfo,li=!0,ir(t,e,n),nn=i,li=o;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Cf(n,e,l),o=o.next}while(o!==i)}ir(t,e,n);break;case 1:if(!fn&&(Jo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){Ft(n,e,c)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,ir(t,e,n),fn=i):ir(t,e,n);break;default:ir(t,e,n)}}function Im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rM),e.forEach(function(i){var o=pM.bind(null,t,i);n.has(i)||(n.add(i),i.then(o,o))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=t,l=e,c=l;e:for(;c!==null;){switch(c.tag){case 5:nn=c.stateNode,li=!1;break e;case 3:nn=c.stateNode.containerInfo,li=!0;break e;case 4:nn=c.stateNode.containerInfo,li=!0;break e}c=c.return}if(nn===null)throw Error(pe(160));r0(a,l,o),nn=null,li=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(d){Ft(o,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),vi(t),i&4){try{ma(3,t,t.return),Qu(3,t)}catch(w){Ft(t,t.return,w)}try{ma(5,t,t.return)}catch(w){Ft(t,t.return,w)}}break;case 1:ii(e,t),vi(t),i&512&&n!==null&&Jo(n,n.return);break;case 5:if(ii(e,t),vi(t),i&512&&n!==null&&Jo(n,n.return),t.flags&32){var o=t.stateNode;try{xa(o,"")}catch(w){Ft(t,t.return,w)}}if(i&4&&(o=t.stateNode,o!=null)){var a=t.memoizedProps,l=n!==null?n.memoizedProps:a,c=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Cg(o,a),Jh(c,l);var d=Jh(c,a);for(l=0;l<h.length;l+=2){var m=h[l],g=h[l+1];m==="style"?Ig(o,g):m==="dangerouslySetInnerHTML"?Lg(o,g):m==="children"?xa(o,g):$f(o,m,g,d)}switch(c){case"input":qh(o,a);break;case"textarea":Pg(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?ns(o,!!a.multiple,x,!1):_!==!!a.multiple&&(a.defaultValue!=null?ns(o,!!a.multiple,a.defaultValue,!0):ns(o,!!a.multiple,a.multiple?[]:"",!1))}o[Pa]=a}catch(w){Ft(t,t.return,w)}}break;case 6:if(ii(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(pe(162));o=t.stateNode,a=t.memoizedProps;try{o.nodeValue=a}catch(w){Ft(t,t.return,w)}}break;case 3:if(ii(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(w){Ft(t,t.return,w)}break;case 4:ii(e,t),vi(t);break;case 13:ii(e,t),vi(t),o=t.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ld=zt())),i&4&&Im(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(d=fn)||m,ii(e,t),fn=d):ii(e,t),vi(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(Pe=t,m=t.child;m!==null;){for(g=Pe=m;Pe!==null;){switch(_=Pe,x=_.child,_.tag){case 0:case 11:case 14:case 15:ma(4,_,_.return);break;case 1:Jo(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(w){Ft(i,n,w)}}break;case 5:Jo(_,_.return);break;case 22:if(_.memoizedState!==null){Nm(g);continue}}x!==null?(x.return=_,Pe=x):Nm(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{o=g.stateNode,d?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=g.stateNode,h=g.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,c.style.display=bg("display",l))}catch(w){Ft(t,t.return,w)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){Ft(t,t.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ii(e,t),vi(t),i&4&&Im(t);break;case 21:break;default:ii(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(xa(o,""),i.flags&=-33);var a=bm(t);Lf(t,a,o);break;case 3:case 4:var l=i.stateNode.containerInfo,c=bm(t);Rf(t,c,l);break;default:throw Error(pe(161))}}catch(h){Ft(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sM(t,e,n){Pe=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var o=Pe,a=o.child;if(o.tag===22&&i){var l=o.memoizedState!==null||wl;if(!l){var c=o.alternate,h=c!==null&&c.memoizedState!==null||fn;c=wl;var d=fn;if(wl=l,(fn=h)&&!d)for(Pe=o;Pe!==null;)l=Pe,h=l.child,l.tag===22&&l.memoizedState!==null?Um(o):h!==null?(h.return=l,Pe=h):Um(o);for(;a!==null;)Pe=a,s0(a),a=a.sibling;Pe=o,wl=c,fn=d}Dm(t)}else o.subtreeFlags&8772&&a!==null?(a.return=o,Pe=a):Dm(t)}}function Dm(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||Qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&gm(e,a,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,l,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ea(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}fn||e.flags&512&&Pf(e)}catch(_){Ft(e,e.return,_)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Nm(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Um(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(h){Ft(e,n,h)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var o=e.return;try{i.componentDidMount()}catch(h){Ft(e,o,h)}}var a=e.return;try{Pf(e)}catch(h){Ft(e,a,h)}break;case 5:var l=e.return;try{Pf(e)}catch(h){Ft(e,l,h)}}}catch(h){Ft(e,e.return,h)}if(e===t){Pe=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Pe=c;break}Pe=e.return}}var aM=Math.ceil,bu=Ji.ReactCurrentDispatcher,Pd=Ji.ReactCurrentOwner,Qn=Ji.ReactCurrentBatchConfig,ft=0,en=null,Wt=null,on=0,On=0,es=Nr(0),jt=0,Na=null,fo=0,Ju=0,Rd=0,_a=null,An=null,Ld=0,gs=1/0,Hi=null,Iu=!1,bf=null,Er=null,Tl=!1,_r=null,Du=0,ga=0,If=null,au=-1,lu=0;function vn(){return ft&6?zt():au!==-1?au:au=zt()}function wr(t){return t.mode&1?ft&2&&on!==0?on&-on:WS.transition!==null?(lu===0&&(lu=Wg()),lu):(t=vt,t!==0||(t=window.event,t=t===void 0?16:$g(t.type)),t):1}function fi(t,e,n,i){if(50<ga)throw ga=0,If=null,Error(pe(185));Oa(t,n,i),(!(ft&2)||t!==en)&&(t===en&&(!(ft&2)&&(Ju|=n),jt===4&&dr(t,on)),bn(t,i),n===1&&ft===0&&!(e.mode&1)&&(gs=zt()+500,Yu&&Ur()))}function bn(t,e){var n=t.callbackNode;Wy(t,e);var i=_u(t,t===en?on:0);if(i===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?GS(Om.bind(null,t)):_v(Om.bind(null,t)),zS(function(){!(ft&6)&&Ur()}),n=null;else{switch(Xg(i)){case 1:n=nd;break;case 4:n=Vg;break;case 16:n=mu;break;case 536870912:n=Gg;break;default:n=mu}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(au=-1,lu=0,ft&6)throw Error(pe(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var i=_u(t,t===en?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nu(t,i);else{e=i;var o=ft;ft|=2;var a=u0();(en!==t||on!==e)&&(Hi=null,gs=zt()+500,so(t,e));do try{cM();break}catch(c){l0(t,c)}while(!0);md(),bu.current=a,ft=o,Wt!==null?e=0:(en=null,on=0,e=jt)}if(e!==0){if(e===2&&(o=of(t),o!==0&&(i=o,e=Df(t,o))),e===1)throw n=Na,so(t,0),dr(t,i),bn(t,zt()),n;if(e===6)dr(t,i);else{if(o=t.current.alternate,!(i&30)&&!lM(o)&&(e=Nu(t,i),e===2&&(a=of(t),a!==0&&(i=a,e=Df(t,a))),e===1))throw n=Na,so(t,0),dr(t,i),bn(t,zt()),n;switch(t.finishedWork=o,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Kr(t,An,Hi);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Ld+500-zt(),10<e)){if(_u(t,0)!==0)break;if(o=t.suspendedLanes,(o&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=df(Kr.bind(null,t,An,Hi),e);break}Kr(t,An,Hi);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,o=-1;0<i;){var l=31-hi(i);a=1<<l,l=e[l],l>o&&(o=l),i&=~a}if(i=o,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aM(i/1960))-i,10<i){t.timeoutHandle=df(Kr.bind(null,t,An,Hi),i);break}Kr(t,An,Hi);break;case 5:Kr(t,An,Hi);break;default:throw Error(pe(329))}}}return bn(t,zt()),t.callbackNode===n?a0.bind(null,t):null}function Df(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(so(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=An,An=n,e!==null&&Nf(e)),t}function Nf(t){An===null?An=t:An.push.apply(An,t)}function lM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!di(a(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Rd,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hi(e),i=1<<n;t[n]=-1,e&=~i}}function Om(t){if(ft&6)throw Error(pe(327));as();var e=_u(t,0);if(!(e&1))return bn(t,zt()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=Na,so(t,0),dr(t,e),bn(t,zt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,An,Hi),bn(t,zt()),null}function bd(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(gs=zt()+500,Yu&&Ur())}}function po(t){_r!==null&&_r.tag===0&&!(ft&6)&&as();var e=ft;ft|=1;var n=Qn.transition,i=vt;try{if(Qn.transition=null,vt=1,t)return t()}finally{vt=i,Qn.transition=n,ft=e,!(ft&6)&&Ur()}}function Id(){On=es.current,Pt(es)}function so(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kS(n)),Wt!==null)for(n=Wt.return;n!==null;){var i=n;switch(fd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Su();break;case 3:ms(),Pt(Rn),Pt(dn),Sd();break;case 5:yd(i);break;case 4:ms();break;case 13:Pt(It);break;case 19:Pt(It);break;case 10:_d(i.type._context);break;case 22:case 23:Id()}n=n.return}if(en=t,Wt=t=Tr(t.current,null),on=On=e,jt=0,Na=null,Rd=Ju=fo=0,An=_a=null,no!==null){for(e=0;e<no.length;e++)if(n=no[e],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,i.next=l}n.pending=i}no=null}return t}function l0(t,e){do{var n=Wt;try{if(md(),ru.current=Lu,Ru){for(var i=Dt.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ru=!1}if(ho=0,Jt=Zt=Dt=null,pa=!1,ba=0,Pd.current=null,n===null||n.return===null){jt=1,Na=e,Wt=null;break}e:{var a=t,l=n.return,c=n,h=e;if(e=on,c.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var d=h,m=c,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Em(l);if(x!==null){x.flags&=-257,wm(x,l,c,a,e),x.mode&1&&Mm(a,d,e),e=x,h=d;var E=e.updateQueue;if(E===null){var w=new Set;w.add(h),e.updateQueue=w}else E.add(h);break e}else{if(!(e&1)){Mm(a,d,e),Dd();break e}h=Error(pe(426))}}else if(Lt&&c.mode&1){var y=Em(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),wm(y,l,c,a,e),dd(_s(h,c));break e}}a=h=_s(h,c),jt!==4&&(jt=2),_a===null?_a=[a]:_a.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=Xv(a,h,e);_m(a,p);break e;case 1:c=h;var M=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof M.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Er===null||!Er.has(S)))){a.flags|=65536,e&=-e,a.lanes|=e;var R=Zv(a,c,e);_m(a,R);break e}}a=a.return}while(a!==null)}h0(n)}catch(k){e=k,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function u0(){var t=bu.current;return bu.current=Lu,t===null?Lu:t}function Dd(){(jt===0||jt===3||jt===2)&&(jt=4),en===null||!(fo&268435455)&&!(Ju&268435455)||dr(en,on)}function Nu(t,e){var n=ft;ft|=2;var i=u0();(en!==t||on!==e)&&(Hi=null,so(t,e));do try{uM();break}catch(o){l0(t,o)}while(!0);if(md(),ft=n,bu.current=i,Wt!==null)throw Error(pe(261));return en=null,on=0,jt}function uM(){for(;Wt!==null;)c0(Wt)}function cM(){for(;Wt!==null&&!Uy();)c0(Wt)}function c0(t){var e=d0(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?h0(t):Wt=e,Pd.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iM(n,e),n!==null){n.flags&=32767,Wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Wt=null;return}}else if(n=nM(n,e,On),n!==null){Wt=n;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=t}while(e!==null);jt===0&&(jt=5)}function Kr(t,e,n){var i=vt,o=Qn.transition;try{Qn.transition=null,vt=1,hM(t,e,n,i)}finally{Qn.transition=o,vt=i}return null}function hM(t,e,n,i){do as();while(_r!==null);if(ft&6)throw Error(pe(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(Xy(t,a),t===en&&(Wt=en=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,p0(mu,function(){return as(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qn.transition,Qn.transition=null;var l=vt;vt=1;var c=ft;ft|=4,Pd.current=null,oM(t,n),o0(n,t),bS(hf),gu=!!cf,hf=cf=null,t.current=n,sM(n),Oy(),ft=c,vt=l,Qn.transition=a}else t.current=n;if(Tl&&(Tl=!1,_r=t,Du=o),a=t.pendingLanes,a===0&&(Er=null),zy(n.stateNode),bn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Iu)throw Iu=!1,t=bf,bf=null,t;return Du&1&&t.tag!==0&&as(),a=t.pendingLanes,a&1?t===If?ga++:(ga=0,If=t):ga=0,Ur(),null}function as(){if(_r!==null){var t=Xg(Du),e=Qn.transition,n=vt;try{if(Qn.transition=null,vt=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,Du=0,ft&6)throw Error(pe(331));var o=ft;for(ft|=4,Pe=t.current;Pe!==null;){var a=Pe,l=a.child;if(Pe.flags&16){var c=a.deletions;if(c!==null){for(var h=0;h<c.length;h++){var d=c[h];for(Pe=d;Pe!==null;){var m=Pe;switch(m.tag){case 0:case 11:case 15:ma(8,m,a)}var g=m.child;if(g!==null)g.return=m,Pe=g;else for(;Pe!==null;){m=Pe;var _=m.sibling,x=m.return;if(n0(m),m===d){Pe=null;break}if(_!==null){_.return=x,Pe=_;break}Pe=x}}}var E=a.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}Pe=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,Pe=l;else e:for(;Pe!==null;){if(a=Pe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ma(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,Pe=p;break e}Pe=a.return}}var M=t.current;for(Pe=M;Pe!==null;){l=Pe;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Pe=S;else e:for(l=M;Pe!==null;){if(c=Pe,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Qu(9,c)}}catch(k){Ft(c,c.return,k)}if(c===l){Pe=null;break e}var R=c.sibling;if(R!==null){R.return=c.return,Pe=R;break e}Pe=c.return}}if(ft=o,Ur(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(Wu,t)}catch{}i=!0}return i}finally{vt=n,Qn.transition=e}}return!1}function Fm(t,e,n){e=_s(n,e),e=Xv(t,e,1),t=Mr(t,e,1),e=vn(),t!==null&&(Oa(t,1,e),bn(t,e))}function Ft(t,e,n){if(t.tag===3)Fm(t,t,n);else for(;e!==null;){if(e.tag===3){Fm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=_s(n,t),t=Zv(e,t,1),e=Mr(e,t,1),t=vn(),e!==null&&(Oa(e,1,t),bn(e,t));break}}e=e.return}}function fM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(on&n)===n&&(jt===4||jt===3&&(on&130023424)===on&&500>zt()-Ld?so(t,0):Rd|=n),bn(t,e)}function f0(t,e){e===0&&(t.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var n=vn();t=Ki(t,e),t!==null&&(Oa(t,e,n),bn(t,n))}function dM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f0(t,n)}function pM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),f0(t,n)}var d0;d0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,tM(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Lt&&e.flags&1048576&&gv(e,wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;su(t,e),t=e.pendingProps;var o=fs(e,dn.current);ss(e,n),o=Ed(null,e,i,t,o,n);var a=wd();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(a=!0,Mu(e)):a=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vd(e),o.updater=$u,e.stateNode=o,o._reactInternals=e,yf(e,i,t,n),e=Ef(null,e,i,!0,a,n)):(e.tag=0,Lt&&a&&hd(e),gn(null,e,o,n),e=e.child),e;case 16:i=e.elementType;e:{switch(su(t,e),t=e.pendingProps,o=i._init,i=o(i._payload),e.type=i,o=e.tag=_M(i),t=ai(i,t),o){case 0:e=Mf(null,e,i,t,n);break e;case 1:e=Cm(null,e,i,t,n);break e;case 11:e=Tm(null,e,i,t,n);break e;case 14:e=Am(null,e,i,ai(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:ai(i,o),Mf(t,e,i,o,n);case 1:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:ai(i,o),Cm(t,e,i,o,n);case 3:e:{if(Kv(e),t===null)throw Error(pe(387));i=e.pendingProps,a=e.memoizedState,o=a.element,Ev(t,e),Cu(e,i,null,n);var l=e.memoizedState;if(i=l.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){o=_s(Error(pe(423)),e),e=Pm(t,e,i,n,o);break e}else if(i!==o){o=_s(Error(pe(424)),e),e=Pm(t,e,i,n,o);break e}else for(Fn=Sr(e.stateNode.containerInfo.firstChild),kn=e,Lt=!0,ui=null,n=Sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),i===o){e=$i(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return wv(e),t===null&&gf(e),i=e.type,o=e.pendingProps,a=t!==null?t.memoizedProps:null,l=o.children,ff(i,o)?l=null:a!==null&&ff(i,a)&&(e.flags|=32),Yv(t,e),gn(t,e,l,n),e.child;case 6:return t===null&&gf(e),null;case 13:return $v(t,e,n);case 4:return xd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:ai(i,o),Tm(t,e,i,o,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,o=e.pendingProps,a=e.memoizedProps,l=o.value,Et(Tu,i._currentValue),i._currentValue=l,a!==null)if(di(a.value,l)){if(a.children===o.children&&!Rn.current){e=$i(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var h=c.firstContext;h!==null;){if(h.context===i){if(a.tag===1){h=ji(-1,n&-n),h.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?h.next=h:(h.next=m.next,m.next=h),d.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),vf(a.return,n,e),c.lanes|=n;break}h=h.next}}else if(a.tag===10)l=a.type===e.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(pe(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),vf(l,n,e),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===e){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}gn(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,i=e.pendingProps.children,ss(e,n),o=Jn(o),i=i(o),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,o=ai(i,e.pendingProps),o=ai(i.type,o),Am(t,e,i,o,n);case 15:return jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:ai(i,o),su(t,e),e.tag=1,Ln(i)?(t=!0,Mu(e)):t=!1,ss(e,n),Wv(e,i,o),yf(e,i,o,n),Ef(null,e,i,!0,t,n);case 19:return Qv(t,e,n);case 22:return qv(t,e,n)}throw Error(pe(156,e.tag))};function p0(t,e){return Hg(t,e)}function mM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new mM(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _M(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jf)return 11;if(t===ed)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,i,o,a){var l=2;if(i=t,typeof t=="function")Nd(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Wo:return ao(n.children,o,a,e);case Qf:l=8,o|=8;break;case Gh:return t=Kn(12,n,e,o|2),t.elementType=Gh,t.lanes=a,t;case Wh:return t=Kn(13,n,e,o),t.elementType=Wh,t.lanes=a,t;case Xh:return t=Kn(19,n,e,o),t.elementType=Xh,t.lanes=a,t;case wg:return ec(n,o,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mg:l=10;break e;case Eg:l=9;break e;case Jf:l=11;break e;case ed:l=14;break e;case cr:l=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Kn(l,n,e,o),e.elementType=t,e.type=i,e.lanes=a,e}function ao(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=wg,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gM(t,e,n,i,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,o,a,l,c,h){return t=new gM(t,e,n,c,h),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Kn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(a),t}function vM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return Rr;t=t._reactInternals;e:{if(go(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Ln(n))return mv(t,n,e)}return e}function _0(t,e,n,i,o,a,l,c,h){return t=Ud(n,i,!0,t,o,a,l,c,h),t.context=m0(null),n=t.current,i=vn(),o=wr(n),a=ji(i,o),a.callback=e??null,Mr(n,a,o),t.current.lanes=o,Oa(t,o,i),bn(t,i),t}function tc(t,e,n,i){var o=e.current,a=vn(),l=wr(o);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(a,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(o,e,l),t!==null&&(fi(t,o,l,a),iu(t,o,l)),l}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){km(t,e),(t=t.alternate)&&km(t,e)}function xM(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}nc.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));tc(t,e,null,null)};nc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;po(function(){tc(null,t,null,null)}),e[Yi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Kg(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zm(){}function yM(t,e,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var d=Uu(l);a.call(d)}}var l=_0(e,i,t,0,null,!1,!1,"",zm);return t._reactRootContainer=l,t[Yi]=l.current,Aa(t.nodeType===8?t.parentNode:t),po(),l}for(;o=t.lastChild;)t.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var d=Uu(h);c.call(d)}}var h=Ud(t,0,!1,null,null,!1,!1,"",zm);return t._reactRootContainer=h,t[Yi]=h.current,Aa(t.nodeType===8?t.parentNode:t),po(function(){tc(e,h,n,i)}),h}function rc(t,e,n,i,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var c=o;o=function(){var h=Uu(l);c.call(h)}}tc(e,l,t,o)}else l=yM(n,e,t,o,i);return Uu(l)}Zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(id(e,n|1),bn(e,zt()),!(ft&6)&&(gs=zt()+500,Ur()))}break;case 13:po(function(){var i=Ki(t,1);if(i!==null){var o=vn();fi(i,t,1,o)}}),Od(t,1)}};rd=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=vn();fi(e,t,134217728,n)}Od(t,134217728)}};jg=function(t){if(t.tag===13){var e=wr(t),n=Ki(t,e);if(n!==null){var i=vn();fi(n,t,e,i)}Od(t,e)}};qg=function(){return vt};Yg=function(t,e){var n=vt;try{return vt=t,e()}finally{vt=n}};tf=function(t,e,n){switch(e){case"input":if(qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var o=qu(i);if(!o)throw Error(pe(90));Ag(i),qh(i,o)}}}break;case"textarea":Pg(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};Ug=bd;Og=po;var SM={usingClientEntryPoint:!1,Events:[ka,qo,qu,Dg,Ng,bd]},$s={findFiberByHostInstance:to,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MM={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||xM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Wu=Al.inject(MM),Ai=Al}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SM;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(pe(200));return vM(t,e,null,n)};Hn.createRoot=function(t,e){if(!kd(t))throw Error(pe(299));var n=!1,i="",o=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,o),t[Yi]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Fd(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return po(t)};Hn.hydrate=function(t,e,n){if(!ic(e))throw Error(pe(200));return rc(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",l=g0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=_0(e,null,t,1,n??null,o,!1,a,l),t[Yi]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new nc(e)};Hn.render=function(t,e,n){if(!ic(e))throw Error(pe(200));return rc(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(pe(40));return t._reactRootContainer?(po(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Hn.unstable_batchedUpdates=bd;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return rc(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),vg.exports=Hn;var x0=vg.exports,Bm=x0;Hh.createRoot=Bm.createRoot,Hh.hydrateRoot=Bm.hydrateRoot;const EM=()=>xe.jsx(xe.Fragment,{children:xe.jsx("div",{className:"bg-gradient-to-t from-transparent to-black p-4 md:p-8",children:xe.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[xe.jsx("div",{className:"md:w-1/2 mb-4 md:mb-0",children:xe.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png",alt:"Profile Picture",className:"w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-full shadow-lg mx-auto"})}),xe.jsxs("div",{className:"md:w-1/2 text-center md:text-left p-4 md:p-8",children:[xe.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl text-white mb-4",children:"Collaborate with us"}),xe.jsx("p",{className:"text-white mb-4 text-sm md:text-base lg:text-lg",children:"Looking for a skilled contract software engineer to drive your project forward? With extensive experience in Application support, .NET desktop development, Web development and pipeline deployments I offer a proven track record in developing high-performance software solutions and optimizing deployment processes. I bring a collaborative approach to ensure seamless integration with your team and effective communication throughout the project. Committed to delivering timely and high-quality results, I focus on understanding your unique business needs and aligning solutions to achieve your goals. Let's discuss how we can work together to bring your vision to life."}),xe.jsx("button",{className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition",children:"Contact Me"})]})]})})}),wM=()=>xe.jsx("footer",{className:"bg-gray-800 text-white text-center p-4",children:xe.jsx("p",{children:" All rights reserved 2024 ©"})}),TM=()=>{const[t,e]=nt.useState(new Date().toLocaleTimeString());nt.useEffect(()=>{const i=setInterval(()=>{e(new Date().toLocaleTimeString())},1e3);return()=>{clearInterval(i)}},[]);const n=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return xe.jsxs("div",{className:"flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500",children:[xe.jsx("div",{className:"absolute top-0 right-0 p-4 text-white text-l sm:text-s md:text-xl lg:text-xl xl:text-xl font-bold animate-fadeIn",children:n}),xe.jsx("div",{className:"absolute top-6 right-0 p-4 text-white text-l sm:text-s md:text-xl lg:text-xl xl:text-xl font-bold animate-fadeIn",children:t}),xe.jsxs("div",{className:"flex flex-col justify-center items-center h-90vh w-full",children:[xe.jsx("h1",{className:"text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-bounce",style:{fontFamily:"Arial, sans-serif"},children:"Hello Mate,"}),xe.jsx("h2",{className:"text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 animate-slideIn",style:{fontFamily:"Verdana, sans-serif"},children:"You are welcome here"}),xe.jsx("button",{className:"px-6 py-3 bg-white text-purple-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-pulse sm:text-base md:text-lg lg:text-xl xl:text-2xl",children:"Get Started"})]})]})},Cl=[{id:1,title:"Deploy aws Infrastructure as Code",description:" This project is a simple infrastructure as code project that deploys a VPC, Subnets, Security Groups, EC2 Instances, and an S3 bucket using Terraform. The project is built using BOTO3 and AWS.",image:"https://encore.dev/assets/resources/pulumi_cover.png",link:"https://github.com/Gani-23/Monitoring"},{id:2,title:"Weather App",description:"The Weather App is a React application that allows users to check the weather forecast for different locations. It utilizes the WeatherAPI and Axios for fetching weather data. The app is built using React and styled with Tailwind CSS",image:"https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png",link:"https://forecast-app-sigma.vercel.app/"},{id:3,title:"Config Manager",description:"A online platform for managing your configurations. It is a full stack application built with Django, Flask, Tailwindcss. It allows users to create, update, delete and view configurations. The app uses Axios for fetching data from the backend.",image:"https://cdn3d.iconscout.com/3d/free/thumb/free-apple-configuration-10112364-8219390.png",link:"https://vaultify-six.vercel.app/"}],AM=()=>{const[t,e]=nt.useState(0),[n,i]=nt.useState(!1),[o,a]=nt.useState(null),l=3,c=()=>{e(x=>(x-l+Cl.length)%Cl.length),i(!1),a(null)},h=()=>{e(x=>(x+l)%Cl.length),i(!1),a(null)},d=x=>{i(E=>!E),a(x)},m=x=>{a(x)},g=()=>{a(null)},_=Cl.slice(t,t+l);return xe.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-black text-white relative py-20",children:[xe.jsx("h1",{className:"text-2xl md:text-5xl sm:text-2xl lg:text-5xl font-bold mb-4 md:mb-6",children:"Projects"}),xe.jsx("div",{className:"w-full h-5/6 md:h-4/5 lg:h-3/4 overflow-hidden",children:xe.jsx("div",{className:"flex items-center justify-around w-full h-full transition-transform duration-500 ease-in-out",children:_.map((x,E)=>xe.jsxs("div",{className:"relative w-full h-full cursor-pointer",onClick:()=>d(E),onMouseEnter:()=>m(E),onMouseLeave:g,children:[xe.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-contain"}),n&&o===E&&xe.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-8 bg-black bg-opacity-75",children:xe.jsxs("div",{className:"bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg max-w-md transform transition-all duration-300 hover:scale-105",children:[xe.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white",children:x.title}),xe.jsx("p",{className:"mb-4 md:mb-6 text-white",children:x.description}),xe.jsx("a",{href:x.link,target:"_blank",rel:"noopener noreferrer",className:"bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300",children:"View Project"})]})})]},x.id))})}),xe.jsxs("div",{className:"mt-6 flex justify-center",children:[xe.jsx("button",{onClick:c,className:"bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md mr-4 hover:bg-red-700 transition duration-300",children:"Previous"}),xe.jsx("button",{onClick:h,className:"bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300",children:"Next"})]})]})},Pl=[{name:"Saiganesh Angadi",designation:"Software Developer",profilePicture:"https://avatars.githubusercontent.com/u/47131861?v=4",github:"https://www.github.com/gani-23",email:"saiganesh7989@gmail.com",degree:"Major in Computer Science and Engineering"}],CM=()=>xe.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-500 animate-gradient h-80vh flex justify-center items-center",children:xe.jsxs("div",{className:"text-center",children:[xe.jsx("div",{className:"p-2 mb-6",children:xe.jsx("img",{src:Pl[0].profilePicture,alt:"Profile Picture",className:"w-64 h-auto md:w-96 lg:w-1/2 rounded-full shadow-lg mx-auto hover:transform-gyroscope"})}),xe.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2",children:Pl[0].name}),xe.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4",children:Pl[0].designation}),xe.jsx("p",{className:"text-base md:text-lg lg:text-xl text-gray-300",children:Pl[0].degree}),xe.jsx("div",{className:"p-4",children:xe.jsx("button",{className:"bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300",children:xe.jsx("a",{href:"https://github.com/Gani-23",children:"Get started"})})})]})}),PM=()=>{const t=["JavaScript","Python","Java","C#","SQL","Bash Scripting","React JS","NodeJS","Angular","Next.js","Flask","Django","Spring Boot","Hibernate","Tailwind CSS","HTML","CSS","Avalonia UI","Reactive UI",".NET",".NET Core MVVM","WPF","XAML","Entity Framework","LINQ","AWS","AWS Lambda","Docker","Jenkins","Kubernetes","Nginx","Git","GitHub","SourceTree","Fork","GitHub CI","Cake Build (CMake)","CI/CD","Figma","Adobe Photoshop","Adobe Illustrator","Canva","Unreal Engine 5","Burp Suite","SQL Injection","Maltego","Security Implementation","Monitoring and Alerting","Logging","MySQL","PostgreSQL","Microsoft SQL","MongoDB","Agile Methodologies","Software Design","Unit Testing","Debugging","Automated Deployment","Backup and Recovery Procedure","Cloud Support Services"];return xe.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex justify-center items-center",children:xe.jsx("div",{className:"container mx-auto p-4 md:py-12",children:xe.jsxs("div",{className:"text-center",children:[xe.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8",children:"SKILLS"}),xe.jsx("div",{className:"flex flex-wrap justify-center gap-2 sm:gap-4",children:t.map((e,n)=>xe.jsx("div",{className:"bg-white text-indigo-500 font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full shadow-md transition transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg animate-bounce",children:e},n))})]})})})};function y0(t,e){const n=nt.useRef(e);nt.useEffect(function(){e!==n.current&&t.attributionControl!=null&&(n.current!=null&&t.attributionControl.removeAttribution(n.current),e!=null&&t.attributionControl.addAttribution(e)),n.current=e},[t,e])}const RM=1;function LM(t){return Object.freeze({__version:RM,map:t})}function S0(t,e){return Object.freeze({...t,...e})}const M0=nt.createContext(null),E0=M0.Provider;function zd(){const t=nt.useContext(M0);if(t==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function w0(t){function e(n,i){const{instance:o,context:a}=t(n).current;return nt.useImperativeHandle(i,()=>o),n.children==null?null:hu.createElement(E0,{value:a},n.children)}return nt.forwardRef(e)}function bM(t){function e(n,i){const[o,a]=nt.useState(!1),{instance:l}=t(n,a).current;nt.useImperativeHandle(i,()=>l),nt.useEffect(function(){o&&l.update()},[l,o,n.children]);const c=l._contentNode;return c?x0.createPortal(n.children,c):null}return nt.forwardRef(e)}function IM(t){function e(n,i){const{instance:o}=t(n).current;return nt.useImperativeHandle(i,()=>o),null}return nt.forwardRef(e)}function Bd(t,e){const n=nt.useRef();nt.useEffect(function(){return e!=null&&t.instance.on(e),n.current=e,function(){n.current!=null&&t.instance.off(n.current),n.current=null}},[t,e])}function oc(t,e){const n=t.pane??e.pane;return n?{...t,pane:n}:t}function DM(t,e){return function(i,o){const a=zd(),l=t(oc(i,a),a);return y0(a.map,i.attribution),Bd(l.current,i.eventHandlers),e(l.current,a,i,o),l}}var Uf={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(t,e){(function(n,i){i(e)})(Kx,function(n){var i="1.9.4";function o(r){var s,u,f,v;for(u=1,f=arguments.length;u<f;u++){v=arguments[u];for(s in v)r[s]=v[s]}return r}var a=Object.create||function(){function r(){}return function(s){return r.prototype=s,new r}}();function l(r,s){var u=Array.prototype.slice;if(r.bind)return r.bind.apply(r,u.call(arguments,1));var f=u.call(arguments,2);return function(){return r.apply(s,f.length?f.concat(u.call(arguments)):arguments)}}var c=0;function h(r){return"_leaflet_id"in r||(r._leaflet_id=++c),r._leaflet_id}function d(r,s,u){var f,v,T,O;return O=function(){f=!1,v&&(T.apply(u,v),v=!1)},T=function(){f?v=arguments:(r.apply(u,arguments),setTimeout(O,s),f=!0)},T}function m(r,s,u){var f=s[1],v=s[0],T=f-v;return r===f&&u?r:((r-v)%T+T)%T+v}function g(){return!1}function _(r,s){if(s===!1)return r;var u=Math.pow(10,s===void 0?6:s);return Math.round(r*u)/u}function x(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function E(r){return x(r).split(/\s+/)}function w(r,s){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?a(r.options):{});for(var u in s)r.options[u]=s[u];return r.options}function y(r,s,u){var f=[];for(var v in r)f.push(encodeURIComponent(u?v.toUpperCase():v)+"="+encodeURIComponent(r[v]));return(!s||s.indexOf("?")===-1?"?":"&")+f.join("&")}var p=/\{ *([\w_ -]+) *\}/g;function M(r,s){return r.replace(p,function(u,f){var v=s[f];if(v===void 0)throw new Error("No value provided for variable "+u);return typeof v=="function"&&(v=v(s)),v})}var S=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function R(r,s){for(var u=0;u<r.length;u++)if(r[u]===s)return u;return-1}var k="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function D(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var I=0;function B(r){var s=+new Date,u=Math.max(0,16-(s-I));return I=s+u,window.setTimeout(r,u)}var b=window.requestAnimationFrame||D("RequestAnimationFrame")||B,A=window.cancelAnimationFrame||D("CancelAnimationFrame")||D("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function F(r,s,u){if(u&&b===B)r.call(s);else return b.call(window,l(r,s))}function J(r){r&&A.call(window,r)}var Q={__proto__:null,extend:o,create:a,bind:l,get lastId(){return c},stamp:h,throttle:d,wrapNum:m,falseFn:g,formatNum:_,trim:x,splitWords:E,setOptions:w,getParamString:y,template:M,isArray:S,indexOf:R,emptyImageUrl:k,requestFn:b,cancelFn:A,requestAnimFrame:F,cancelAnimFrame:J};function ie(){}ie.extend=function(r){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,f=a(u);f.constructor=s,s.prototype=f;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return r.statics&&o(s,r.statics),r.includes&&(se(r.includes),o.apply(null,[f].concat(r.includes))),o(f,r),delete f.statics,delete f.includes,f.options&&(f.options=u.options?a(u.options):{},o(f.options,r.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,O=f._initHooks.length;T<O;T++)f._initHooks[T].call(this)}},s},ie.include=function(r){var s=this.prototype.options;return o(this.prototype,r),r.options&&(this.prototype.options=s,this.mergeOptions(r.options)),this},ie.mergeOptions=function(r){return o(this.prototype.options,r),this},ie.addInitHook=function(r){var s=Array.prototype.slice.call(arguments,1),u=typeof r=="function"?r:function(){this[r].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function se(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=S(r)?r:[r];for(var s=0;s<r.length;s++)r[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ee={on:function(r,s,u){if(typeof r=="object")for(var f in r)this._on(f,r[f],s);else{r=E(r);for(var v=0,T=r.length;v<T;v++)this._on(r[v],s,u)}return this},off:function(r,s,u){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var f in r)this._off(f,r[f],s);else{r=E(r);for(var v=arguments.length===1,T=0,O=r.length;T<O;T++)v?this._off(r[T]):this._off(r[T],s,u)}return this},_on:function(r,s,u,f){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(r,s,u)===!1){u===this&&(u=void 0);var v={fn:s,ctx:u};f&&(v.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(v)}},_off:function(r,s,u){var f,v,T;if(this._events&&(f=this._events[r],!!f)){if(arguments.length===1){if(this._firingCount)for(v=0,T=f.length;v<T;v++)f[v].fn=g;delete this._events[r];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var O=this._listens(r,s,u);if(O!==!1){var W=f[O];this._firingCount&&(W.fn=g,this._events[r]=f=f.slice()),f.splice(O,1)}}},fire:function(r,s,u){if(!this.listens(r,u))return this;var f=o({},s,{type:r,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[r];if(v){this._firingCount=this._firingCount+1||1;for(var T=0,O=v.length;T<O;T++){var W=v[T],q=W.fn;W.once&&this.off(r,q,W.ctx),q.call(W.ctx||this,f)}this._firingCount--}}return u&&this._propagateEvent(f),this},listens:function(r,s,u,f){typeof r!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(f=!!s,v=void 0,u=void 0);var T=this._events&&this._events[r];if(T&&T.length&&this._listens(r,v,u)!==!1)return!0;if(f){for(var O in this._eventParents)if(this._eventParents[O].listens(r,s,u,f))return!0}return!1},_listens:function(r,s,u){if(!this._events)return!1;var f=this._events[r]||[];if(!s)return!!f.length;u===this&&(u=void 0);for(var v=0,T=f.length;v<T;v++)if(f[v].fn===s&&f[v].ctx===u)return v;return!1},once:function(r,s,u){if(typeof r=="object")for(var f in r)this._on(f,r[f],s,!0);else{r=E(r);for(var v=0,T=r.length;v<T;v++)this._on(r[v],s,u,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[h(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[h(r)],this},_propagateEvent:function(r){for(var s in this._eventParents)this._eventParents[s].fire(r.type,o({layer:r.target,propagatedFrom:r.target},r),!0)}};ee.addEventListener=ee.on,ee.removeEventListener=ee.clearAllEventListeners=ee.off,ee.addOneTimeEventListener=ee.once,ee.fireEvent=ee.fire,ee.hasEventListeners=ee.listens;var ae=ie.extend(ee);function U(r,s,u){this.x=u?Math.round(r):r,this.y=u?Math.round(s):s}var re=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};U.prototype={clone:function(){return new U(this.x,this.y)},add:function(r){return this.clone()._add(j(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(j(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new U(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new U(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=re(this.x),this.y=re(this.y),this},distanceTo:function(r){r=j(r);var s=r.x-this.x,u=r.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(r){return r=j(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=j(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function j(r,s,u){return r instanceof U?r:S(r)?new U(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new U(r.x,r.y):new U(r,s,u)}function ce(r,s){if(r)for(var u=s?[r,s]:r,f=0,v=u.length;f<v;f++)this.extend(u[f])}ce.prototype={extend:function(r){var s,u;if(!r)return this;if(r instanceof U||typeof r[0]=="number"||"x"in r)s=u=j(r);else if(r=Ce(r),s=r.min,u=r.max,!s||!u)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=u.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(r){return j((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return j(this.min.x,this.max.y)},getTopRight:function(){return j(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var s,u;return typeof r[0]=="number"||r instanceof U?r=j(r):r=Ce(r),r instanceof ce?(s=r.min,u=r.max):s=u=r,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(r){r=Ce(r);var s=this.min,u=this.max,f=r.min,v=r.max,T=v.x>=s.x&&f.x<=u.x,O=v.y>=s.y&&f.y<=u.y;return T&&O},overlaps:function(r){r=Ce(r);var s=this.min,u=this.max,f=r.min,v=r.max,T=v.x>s.x&&f.x<u.x,O=v.y>s.y&&f.y<u.y;return T&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var s=this.min,u=this.max,f=Math.abs(s.x-u.x)*r,v=Math.abs(s.y-u.y)*r;return Ce(j(s.x-f,s.y-v),j(u.x+f,u.y+v))},equals:function(r){return r?(r=Ce(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function Ce(r,s){return!r||r instanceof ce?r:new ce(r,s)}function He(r,s){if(r)for(var u=s?[r,s]:r,f=0,v=u.length;f<v;f++)this.extend(u[f])}He.prototype={extend:function(r){var s=this._southWest,u=this._northEast,f,v;if(r instanceof te)f=r,v=r;else if(r instanceof He){if(f=r._southWest,v=r._northEast,!f||!v)return this}else return r?this.extend(le(r)||Y(r)):this;return!s&&!u?(this._southWest=new te(f.lat,f.lng),this._northEast=new te(v.lat,v.lng)):(s.lat=Math.min(f.lat,s.lat),s.lng=Math.min(f.lng,s.lng),u.lat=Math.max(v.lat,u.lat),u.lng=Math.max(v.lng,u.lng)),this},pad:function(r){var s=this._southWest,u=this._northEast,f=Math.abs(s.lat-u.lat)*r,v=Math.abs(s.lng-u.lng)*r;return new He(new te(s.lat-f,s.lng-v),new te(u.lat+f,u.lng+v))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof te||"lat"in r?r=le(r):r=Y(r);var s=this._southWest,u=this._northEast,f,v;return r instanceof He?(f=r.getSouthWest(),v=r.getNorthEast()):f=v=r,f.lat>=s.lat&&v.lat<=u.lat&&f.lng>=s.lng&&v.lng<=u.lng},intersects:function(r){r=Y(r);var s=this._southWest,u=this._northEast,f=r.getSouthWest(),v=r.getNorthEast(),T=v.lat>=s.lat&&f.lat<=u.lat,O=v.lng>=s.lng&&f.lng<=u.lng;return T&&O},overlaps:function(r){r=Y(r);var s=this._southWest,u=this._northEast,f=r.getSouthWest(),v=r.getNorthEast(),T=v.lat>s.lat&&f.lat<u.lat,O=v.lng>s.lng&&f.lng<u.lng;return T&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,s){return r?(r=Y(r),this._southWest.equals(r.getSouthWest(),s)&&this._northEast.equals(r.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Y(r,s){return r instanceof He?r:new He(r,s)}function te(r,s,u){if(isNaN(r)||isNaN(s))throw new Error("Invalid LatLng object: ("+r+", "+s+")");this.lat=+r,this.lng=+s,u!==void 0&&(this.alt=+u)}te.prototype={equals:function(r,s){if(!r)return!1;r=le(r);var u=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return u<=(s===void 0?1e-9:s)},toString:function(r){return"LatLng("+_(this.lat,r)+", "+_(this.lng,r)+")"},distanceTo:function(r){return Xe.distance(this,le(r))},wrap:function(){return Xe.wrapLatLng(this)},toBounds:function(r){var s=180*r/40075017,u=s/Math.cos(Math.PI/180*this.lat);return Y([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function le(r,s,u){return r instanceof te?r:S(r)&&typeof r[0]!="object"?r.length===3?new te(r[0],r[1],r[2]):r.length===2?new te(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new te(r.lat,"lng"in r?r.lng:r.lon,r.alt):s===void 0?null:new te(r,s,u)}var _e={latLngToPoint:function(r,s){var u=this.projection.project(r),f=this.scale(s);return this.transformation._transform(u,f)},pointToLatLng:function(r,s){var u=this.scale(s),f=this.transformation.untransform(r,u);return this.projection.unproject(f)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(r),f=this.transformation.transform(s.min,u),v=this.transformation.transform(s.max,u);return new ce(f,v)},infinite:!1,wrapLatLng:function(r){var s=this.wrapLng?m(r.lng,this.wrapLng,!0):r.lng,u=this.wrapLat?m(r.lat,this.wrapLat,!0):r.lat,f=r.alt;return new te(u,s,f)},wrapLatLngBounds:function(r){var s=r.getCenter(),u=this.wrapLatLng(s),f=s.lat-u.lat,v=s.lng-u.lng;if(f===0&&v===0)return r;var T=r.getSouthWest(),O=r.getNorthEast(),W=new te(T.lat-f,T.lng-v),q=new te(O.lat-f,O.lng-v);return new He(W,q)}},Xe=o({},_e,{wrapLng:[-180,180],R:6371e3,distance:function(r,s){var u=Math.PI/180,f=r.lat*u,v=s.lat*u,T=Math.sin((s.lat-r.lat)*u/2),O=Math.sin((s.lng-r.lng)*u/2),W=T*T+Math.cos(f)*Math.cos(v)*O*O,q=2*Math.atan2(Math.sqrt(W),Math.sqrt(1-W));return this.R*q}}),je=6378137,ot={R:je,MAX_LATITUDE:85.0511287798,project:function(r){var s=Math.PI/180,u=this.MAX_LATITUDE,f=Math.max(Math.min(u,r.lat),-u),v=Math.sin(f*s);return new U(this.R*r.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(r){var s=180/Math.PI;return new te((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*s,r.x*s/this.R)},bounds:function(){var r=je*Math.PI;return new ce([-r,-r],[r,r])}()};function H(r,s,u,f){if(S(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=s,this._c=u,this._d=f}H.prototype={transform:function(r,s){return this._transform(r.clone(),s)},_transform:function(r,s){return s=s||1,r.x=s*(this._a*r.x+this._b),r.y=s*(this._c*r.y+this._d),r},untransform:function(r,s){return s=s||1,new U((r.x/s-this._b)/this._a,(r.y/s-this._d)/this._c)}};function Qe(r,s,u,f){return new H(r,s,u,f)}var tt=o({},Xe,{code:"EPSG:3857",projection:ot,transformation:function(){var r=.5/(Math.PI*ot.R);return Qe(r,.5,-r,.5)}()}),wt=o({},tt,{code:"EPSG:900913"});function Fe(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function lt(r,s){var u="",f,v,T,O,W,q;for(f=0,T=r.length;f<T;f++){for(W=r[f],v=0,O=W.length;v<O;v++)q=W[v],u+=(v?"L":"M")+q.x+" "+q.y;u+=s?De.svg?"z":"x":""}return u||"M0 0"}var Ke=document.documentElement.style,Ze="ActiveXObject"in window,Ut=Ze&&!document.addEventListener,N="msLaunchUri"in navigator&&!("documentMode"in document),C=pn("webkit"),K=pn("android"),he=pn("android 2")||pn("android 3"),fe=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),de=K&&pn("Google")&&fe<537&&!("AudioNode"in window),Ue=!!window.opera,ye=!N&&pn("chrome"),Se=pn("gecko")&&!C&&!Ue&&!Ze,$e=!ye&&pn("safari"),me=pn("phantom"),Ie="OTransition"in Ke,it=navigator.platform.indexOf("Win")===0,Ve=Ze&&"transition"in Ke,Ee="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!he,qe="MozPerspective"in Ke,st=!window.L_DISABLE_3D&&(Ve||Ee||qe)&&!Ie&&!me,yt=typeof orientation<"u"||pn("mobile"),z=yt&&C,Te=yt&&Ee,ne=!window.PointerEvent&&window.MSPointerEvent,oe=!!(window.PointerEvent||ne),ge="ontouchstart"in window||!!window.TouchEvent,We=!window.L_NO_TOUCH&&(ge||oe),ct=yt&&Ue,bt=yt&&Se,Bt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,mt=function(){var r=!1;try{var s=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",g,s),window.removeEventListener("testPassiveEventSupport",g,s)}catch{}return r}(),Gn=function(){return!!document.createElement("canvas").getContext}(),Sn=!!(document.createElementNS&&Fe("svg").createSVGRect),Ri=!!Sn&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ls=!Sn&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var s=r.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Wa=navigator.platform.indexOf("Mac")===0,Xa=navigator.platform.indexOf("Linux")===0;function pn(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var De={ie:Ze,ielt9:Ut,edge:N,webkit:C,android:K,android23:he,androidStock:de,opera:Ue,chrome:ye,gecko:Se,safari:$e,phantom:me,opera12:Ie,win:it,ie3d:Ve,webkit3d:Ee,gecko3d:qe,any3d:st,mobile:yt,mobileWebkit:z,mobileWebkit3d:Te,msPointer:ne,pointer:oe,touch:We,touchNative:ge,mobileOpera:ct,mobileGecko:bt,retina:Bt,passiveEvents:mt,canvas:Gn,svg:Sn,vml:Ls,inlineSvg:Ri,mac:Wa,linux:Xa},Fr=De.msPointer?"MSPointerDown":"pointerdown",bs=De.msPointer?"MSPointerMove":"pointermove",Is=De.msPointer?"MSPointerUp":"pointerup",Za=De.msPointer?"MSPointerCancel":"pointercancel",Ds={touchstart:Fr,touchmove:bs,touchend:Is,touchcancel:Za},ja={touchstart:ke,touchmove:Le,touchend:Le,touchcancel:Le},P={},V=!1;function X(r,s,u){return s==="touchstart"&&Re(),ja[s]?(u=ja[s].bind(this,u),r.addEventListener(Ds[s],u,!1),u):(console.warn("wrong event specified:",s),g)}function Z(r,s,u){if(!Ds[s]){console.warn("wrong event specified:",s);return}r.removeEventListener(Ds[s],u,!1)}function G(r){P[r.pointerId]=r}function ve(r){P[r.pointerId]&&(P[r.pointerId]=r)}function we(r){delete P[r.pointerId]}function Re(){V||(document.addEventListener(Fr,G,!0),document.addEventListener(bs,ve,!0),document.addEventListener(Is,we,!0),document.addEventListener(Za,we,!0),V=!0)}function Le(r,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var u in P)s.touches.push(P[u]);s.changedTouches=[s],r(s)}}function ke(r,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&tn(s),Le(r,s)}function Ge(r){var s={},u,f;for(f in r)u=r[f],s[f]=u&&u.bind?u.bind(r):u;return r=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Oe=200;function dt(r,s){r.addEventListener("dblclick",s);var u=0,f;function v(T){if(T.detail!==1){f=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var O=qd(T);if(!(O.some(function(q){return q instanceof HTMLLabelElement&&q.attributes.for})&&!O.some(function(q){return q instanceof HTMLInputElement||q instanceof HTMLSelectElement}))){var W=Date.now();W-u<=Oe?(f++,f===2&&s(Ge(T))):f=1,u=W}}}return r.addEventListener("click",v),{dblclick:s,simDblclick:v}}function Rt(r,s){r.removeEventListener("dblclick",s.dblclick),r.removeEventListener("click",s.simDblclick)}var St=Ya(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Xt=Ya(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),pt=Xt==="webkitTransition"||Xt==="OTransition"?Xt+"End":"transitionend";function Ne(r){return typeof r=="string"?document.getElementById(r):r}function kt(r,s){var u=r.style[s]||r.currentStyle&&r.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(r,null);u=f?f[s]:null}return u==="auto"?null:u}function be(r,s,u){var f=document.createElement(r);return f.className=s||"",u&&u.appendChild(f),f}function ht(r){var s=r.parentNode;s&&s.removeChild(r)}function Li(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function Mn(r){var s=r.parentNode;s&&s.lastChild!==r&&s.appendChild(r)}function pi(r){var s=r.parentNode;s&&s.firstChild!==r&&s.insertBefore(r,s.firstChild)}function Ot(r,s){if(r.classList!==void 0)return r.classList.contains(s);var u=er(r);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function ze(r,s){if(r.classList!==void 0)for(var u=E(s),f=0,v=u.length;f<v;f++)r.classList.add(u[f]);else if(!Ot(r,s)){var T=er(r);an(r,(T?T+" ":"")+s)}}function Tt(r,s){r.classList!==void 0?r.classList.remove(s):an(r,x((" "+er(r)+" ").replace(" "+s+" "," ")))}function an(r,s){r.className.baseVal===void 0?r.className=s:r.className.baseVal=s}function er(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function En(r,s){"opacity"in r.style?r.style.opacity=s:"filter"in r.style&&qa(r,s)}function qa(r,s){var u=!1,f="DXImageTransform.Microsoft.Alpha";try{u=r.filters.item(f)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):r.style.filter+=" progid:"+f+"(opacity="+s+")"}function Ya(r){for(var s=document.documentElement.style,u=0;u<r.length;u++)if(r[u]in s)return r[u];return!1}function kr(r,s,u){var f=s||new U(0,0);r.style[St]=(De.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(u?" scale("+u+")":"")}function Ht(r,s){r._leaflet_pos=s,De.any3d?kr(r,s):(r.style.left=s.x+"px",r.style.top=s.y+"px")}function zr(r){return r._leaflet_pos||new U(0,0)}var Ns,Us,pc;if("onselectstart"in document)Ns=function(){Ye(window,"selectstart",tn)},Us=function(){Mt(window,"selectstart",tn)};else{var Os=Ya(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ns=function(){if(Os){var r=document.documentElement.style;pc=r[Os],r[Os]="none"}},Us=function(){Os&&(document.documentElement.style[Os]=pc,pc=void 0)}}function mc(){Ye(window,"dragstart",tn)}function _c(){Mt(window,"dragstart",tn)}var Ka,gc;function vc(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&($a(),Ka=r,gc=r.style.outlineStyle,r.style.outlineStyle="none",Ye(window,"keydown",$a))}function $a(){Ka&&(Ka.style.outlineStyle=gc,Ka=void 0,gc=void 0,Mt(window,"keydown",$a))}function Zd(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function xc(r){var s=r.getBoundingClientRect();return{x:s.width/r.offsetWidth||1,y:s.height/r.offsetHeight||1,boundingClientRect:s}}var nx={__proto__:null,TRANSFORM:St,TRANSITION:Xt,TRANSITION_END:pt,get:Ne,getStyle:kt,create:be,remove:ht,empty:Li,toFront:Mn,toBack:pi,hasClass:Ot,addClass:ze,removeClass:Tt,setClass:an,getClass:er,setOpacity:En,testProp:Ya,setTransform:kr,setPosition:Ht,getPosition:zr,get disableTextSelection(){return Ns},get enableTextSelection(){return Us},disableImageDrag:mc,enableImageDrag:_c,preventOutline:vc,restoreOutline:$a,getSizedParentNode:Zd,getScale:xc};function Ye(r,s,u,f){if(s&&typeof s=="object")for(var v in s)Sc(r,v,s[v],u);else{s=E(s);for(var T=0,O=s.length;T<O;T++)Sc(r,s[T],u,f)}return this}var mi="_leaflet_events";function Mt(r,s,u,f){if(arguments.length===1)jd(r),delete r[mi];else if(s&&typeof s=="object")for(var v in s)Mc(r,v,s[v],u);else if(s=E(s),arguments.length===2)jd(r,function(W){return R(s,W)!==-1});else for(var T=0,O=s.length;T<O;T++)Mc(r,s[T],u,f);return this}function jd(r,s){for(var u in r[mi]){var f=u.split(/\d/)[0];(!s||s(f))&&Mc(r,f,null,null,u)}}var yc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Sc(r,s,u,f){var v=s+h(u)+(f?"_"+h(f):"");if(r[mi]&&r[mi][v])return this;var T=function(W){return u.call(f||r,W||window.event)},O=T;!De.touchNative&&De.pointer&&s.indexOf("touch")===0?T=X(r,s,T):De.touch&&s==="dblclick"?T=dt(r,T):"addEventListener"in r?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?r.addEventListener(yc[s]||s,T,De.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(T=function(W){W=W||window.event,wc(r,W)&&O(W)},r.addEventListener(yc[s],T,!1)):r.addEventListener(s,O,!1):r.attachEvent("on"+s,T),r[mi]=r[mi]||{},r[mi][v]=T}function Mc(r,s,u,f,v){v=v||s+h(u)+(f?"_"+h(f):"");var T=r[mi]&&r[mi][v];if(!T)return this;!De.touchNative&&De.pointer&&s.indexOf("touch")===0?Z(r,s,T):De.touch&&s==="dblclick"?Rt(r,T):"removeEventListener"in r?r.removeEventListener(yc[s]||s,T,!1):r.detachEvent("on"+s,T),r[mi][v]=null}function Br(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function Ec(r){return Sc(r,"wheel",Br),this}function Fs(r){return Ye(r,"mousedown touchstart dblclick contextmenu",Br),r._leaflet_disable_click=!0,this}function tn(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Hr(r){return tn(r),Br(r),this}function qd(r){if(r.composedPath)return r.composedPath();for(var s=[],u=r.target;u;)s.push(u),u=u.parentNode;return s}function Yd(r,s){if(!s)return new U(r.clientX,r.clientY);var u=xc(s),f=u.boundingClientRect;return new U((r.clientX-f.left)/u.x-s.clientLeft,(r.clientY-f.top)/u.y-s.clientTop)}var ix=De.linux&&De.chrome?window.devicePixelRatio:De.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Kd(r){return De.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/ix:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function wc(r,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==r;)u=u.parentNode}catch{return!1}return u!==r}var rx={__proto__:null,on:Ye,off:Mt,stopPropagation:Br,disableScrollPropagation:Ec,disableClickPropagation:Fs,preventDefault:tn,stop:Hr,getPropagationPath:qd,getMousePosition:Yd,getWheelDelta:Kd,isExternalTarget:wc,addListener:Ye,removeListener:Mt},$d=ae.extend({run:function(r,s,u,f){this.stop(),this._el=r,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=zr(r),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(r){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),r):(this._runFrame(1),this._complete())},_runFrame:function(r,s){var u=this._startPos.add(this._offset.multiplyBy(r));s&&u._round(),Ht(this._el,u),this.fire("step")},_complete:function(){J(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),ut=ae.extend({options:{crs:tt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(le(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Xt&&De.any3d&&!De.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ye(this._proxy,pt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),r=this._limitCenter(le(r),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=o({animate:u.animate},u.zoom),u.pan=o({animate:u.animate,duration:u.duration},u.pan));var f=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,s,u.zoom):this._tryAnimatedPan(r,u.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(r,s,u.pan&&u.pan.noMoveStart),this},setZoom:function(r,s){return this._loaded?this.setView(this.getCenter(),r,{zoom:s}):(this._zoom=r,this)},zoomIn:function(r,s){return r=r||(De.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,s)},zoomOut:function(r,s){return r=r||(De.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,s)},setZoomAround:function(r,s,u){var f=this.getZoomScale(s),v=this.getSize().divideBy(2),T=r instanceof U?r:this.latLngToContainerPoint(r),O=T.subtract(v).multiplyBy(1-1/f),W=this.containerPointToLatLng(v.add(O));return this.setView(W,s,{zoom:u})},_getBoundsCenterZoom:function(r,s){s=s||{},r=r.getBounds?r.getBounds():Y(r);var u=j(s.paddingTopLeft||s.padding||[0,0]),f=j(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(r,!1,u.add(f));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:r.getCenter(),zoom:v};var T=f.subtract(u).divideBy(2),O=this.project(r.getSouthWest(),v),W=this.project(r.getNorthEast(),v),q=this.unproject(O.add(W).divideBy(2).add(T),v);return{center:q,zoom:v}},fitBounds:function(r,s){if(r=Y(r),!r.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(r,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,s){return this.setView(r,this._zoom,{pan:s})},panBy:function(r,s){if(r=j(r).round(),s=s||{},!r.x&&!r.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new $d,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){ze(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,s,u){if(u=u||{},u.animate===!1||!De.any3d)return this.setView(r,s,u);this._stop();var f=this.project(this.getCenter()),v=this.project(r),T=this.getSize(),O=this._zoom;r=le(r),s=s===void 0?O:s;var W=Math.max(T.x,T.y),q=W*this.getZoomScale(O,s),ue=v.distanceTo(f)||1,Ae=1.42,Be=Ae*Ae;function rt(Vt){var ul=Vt?-1:1,Zx=Vt?q:W,jx=q*q-W*W+ul*Be*Be*ue*ue,qx=2*Zx*Be*ue,Uc=jx/qx,bp=Math.sqrt(Uc*Uc+1)-Uc,Yx=bp<1e-9?-18:Math.log(bp);return Yx}function mn(Vt){return(Math.exp(Vt)-Math.exp(-Vt))/2}function $t(Vt){return(Math.exp(Vt)+Math.exp(-Vt))/2}function Xn(Vt){return mn(Vt)/$t(Vt)}var wn=rt(0);function wo(Vt){return W*($t(wn)/$t(wn+Ae*Vt))}function Vx(Vt){return W*($t(wn)*Xn(wn+Ae*Vt)-mn(wn))/Be}function Gx(Vt){return 1-Math.pow(1-Vt,1.5)}var Wx=Date.now(),Rp=(rt(1)-wn)/Ae,Xx=u.duration?1e3*u.duration:1e3*Rp*.8;function Lp(){var Vt=(Date.now()-Wx)/Xx,ul=Gx(Vt)*Rp;Vt<=1?(this._flyToFrame=F(Lp,this),this._move(this.unproject(f.add(v.subtract(f).multiplyBy(Vx(ul)/ue)),O),this.getScaleZoom(W/wo(ul),O),{flyTo:!0})):this._move(r,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Lp.call(this),this},flyToBounds:function(r,s){var u=this._getBoundsCenterZoom(r,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(r){return r=Y(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var s=this.options.minZoom;return this.options.minZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var s=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,s){this._enforcingBounds=!0;var u=this.getCenter(),f=this._limitCenter(u,this._zoom,Y(r));return u.equals(f)||this.panTo(f,s),this._enforcingBounds=!1,this},panInside:function(r,s){s=s||{};var u=j(s.paddingTopLeft||s.padding||[0,0]),f=j(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),T=this.project(r),O=this.getPixelBounds(),W=Ce([O.min.add(u),O.max.subtract(f)]),q=W.getSize();if(!W.contains(T)){this._enforcingBounds=!0;var ue=T.subtract(W.getCenter()),Ae=W.extend(T).getSize().subtract(q);v.x+=ue.x<0?-Ae.x:Ae.x,v.y+=ue.y<0?-Ae.y:Ae.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=o({animate:!1,pan:!0},r===!0?{animate:!0}:r);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),f=s.divideBy(2).round(),v=u.divideBy(2).round(),T=f.subtract(v);return!T.x&&!T.y?this:(r.animate&&r.pan?this.panBy(T):(r.pan&&this._rawPanBy(T),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=o({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,r):navigator.geolocation.getCurrentPosition(s,u,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var s=r.code,u=r.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var s=r.coords.latitude,u=r.coords.longitude,f=new te(s,u),v=f.toBounds(r.coords.accuracy*2),T=this._locateOptions;if(T.setView){var O=this.getBoundsZoom(v);this.setView(f,T.maxZoom?Math.min(O,T.maxZoom):O)}var W={latlng:f,bounds:v,timestamp:r.timestamp};for(var q in r.coords)typeof r.coords[q]=="number"&&(W[q]=r.coords[q]);this.fire("locationfound",W)}},addHandler:function(r,s){if(!s)return this;var u=this[r]=new s(this);return this._handlers.push(u),this.options[r]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ht(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(J(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)ht(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,s){var u="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),f=be("div",u,s||this._mapPane);return r&&(this._panes[r]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),s=this.unproject(r.getBottomLeft()),u=this.unproject(r.getTopRight());return new He(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,s,u){r=Y(r),u=j(u||[0,0]);var f=this.getZoom()||0,v=this.getMinZoom(),T=this.getMaxZoom(),O=r.getNorthWest(),W=r.getSouthEast(),q=this.getSize().subtract(u),ue=Ce(this.project(W,f),this.project(O,f)).getSize(),Ae=De.any3d?this.options.zoomSnap:1,Be=q.x/ue.x,rt=q.y/ue.y,mn=s?Math.max(Be,rt):Math.min(Be,rt);return f=this.getScaleZoom(mn,f),Ae&&(f=Math.round(f/(Ae/100))*(Ae/100),f=s?Math.ceil(f/Ae)*Ae:Math.floor(f/Ae)*Ae),Math.max(v,Math.min(T,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new U(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,s){var u=this._getTopLeftPoint(r,s);return new ce(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(r)/u.scale(s)},getScaleZoom:function(r,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var f=u.zoom(r*u.scale(s));return isNaN(f)?1/0:f},project:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(le(r),s)},unproject:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(j(r),s)},layerPointToLatLng:function(r){var s=j(r).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(r){var s=this.project(le(r))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(le(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(Y(r))},distance:function(r,s){return this.options.crs.distance(le(r),le(s))},containerPointToLayerPoint:function(r){return j(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return j(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var s=this.containerPointToLayerPoint(j(r));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(le(r)))},mouseEventToContainerPoint:function(r){return Yd(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var s=this._container=Ne(r);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ye(s,"scroll",this._onScroll,this),this._containerId=h(s)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&De.any3d,ze(r,"leaflet-container"+(De.touch?" leaflet-touch":"")+(De.retina?" leaflet-retina":"")+(De.ielt9?" leaflet-oldie":"")+(De.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=kt(r,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ht(this._mapPane,new U(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ze(r.markerPane,"leaflet-zoom-hide"),ze(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,s,u){Ht(this._mapPane,new U(0,0));var f=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,u)._move(r,s)._moveEnd(v),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(r,s){return r&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(r,s,u,f){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),f?u&&u.pinch&&this.fire("zoom",u):((v||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return J(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){Ht(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[h(this._container)]=this;var s=r?Mt:Ye;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),De.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){J(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,s){for(var u=[],f,v=s==="mouseout"||s==="mouseover",T=r.target||r.srcElement,O=!1;T;){if(f=this._targets[h(T)],f&&(s==="click"||s==="preclick")&&this._draggableMoved(f)){O=!0;break}if(f&&f.listens(s,!0)&&(v&&!wc(T,r)||(u.push(f),v))||T===this._container)break;T=T.parentNode}return!u.length&&!O&&!v&&this.listens(s,!0)&&(u=[this]),u},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var s=r.target||r.srcElement;if(!(!this._loaded||s._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(s))){var u=r.type;u==="mousedown"&&vc(s),this._fireDOMEvent(r,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,s,u){if(r.type==="click"){var f=o({},r);f.type="preclick",this._fireDOMEvent(f,f.type,u)}var v=this._findEventTargets(r,s);if(u){for(var T=[],O=0;O<u.length;O++)u[O].listens(s,!0)&&T.push(u[O]);v=T.concat(v)}if(v.length){s==="contextmenu"&&tn(r);var W=v[0],q={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var ue=W.getLatLng&&(!W._radius||W._radius<=10);q.containerPoint=ue?this.latLngToContainerPoint(W.getLatLng()):this.mouseEventToContainerPoint(r),q.layerPoint=this.containerPointToLayerPoint(q.containerPoint),q.latlng=ue?W.getLatLng():this.layerPointToLatLng(q.layerPoint)}for(O=0;O<v.length;O++)if(v[O].fire(s,q,!0),q.originalEvent._stopped||v[O].options.bubblingMouseEvents===!1&&R(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,s=this._handlers.length;r<s;r++)this._handlers[r].disable()},whenReady:function(r,s){return this._loaded?r.call(s||this,{target:this}):this.on("load",r,s),this},_getMapPanePos:function(){return zr(this._mapPane)||new U(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,s){var u=r&&s!==void 0?this._getNewPixelOrigin(r,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,s){var u=this.getSize()._divideBy(2);return this.project(r,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,s,u){var f=this._getNewPixelOrigin(u,s);return this.project(r,s)._subtract(f)},_latLngBoundsToNewLayerBounds:function(r,s,u){var f=this._getNewPixelOrigin(u,s);return Ce([this.project(r.getSouthWest(),s)._subtract(f),this.project(r.getNorthWest(),s)._subtract(f),this.project(r.getSouthEast(),s)._subtract(f),this.project(r.getNorthEast(),s)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,s,u){if(!u)return r;var f=this.project(r,s),v=this.getSize().divideBy(2),T=new ce(f.subtract(v),f.add(v)),O=this._getBoundsOffset(T,u,s);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?r:this.unproject(f.add(O),s)},_limitOffset:function(r,s){if(!s)return r;var u=this.getPixelBounds(),f=new ce(u.min.add(r),u.max.add(r));return r.add(this._getBoundsOffset(f,s))},_getBoundsOffset:function(r,s,u){var f=Ce(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),v=f.min.subtract(r.min),T=f.max.subtract(r.max),O=this._rebound(v.x,-T.x),W=this._rebound(v.y,-T.y);return new U(O,W)},_rebound:function(r,s){return r+s>0?Math.round(r-s)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(s))},_limitZoom:function(r){var s=this.getMinZoom(),u=this.getMaxZoom(),f=De.any3d?this.options.zoomSnap:1;return f&&(r=Math.round(r/f)*f),Math.max(s,Math.min(u,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,s){var u=this._getCenterOffset(r)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var r=this._proxy=be("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(s){var u=St,f=this._proxy.style[u];kr(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),f===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ht(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),s=this.getZoom();kr(this._proxy,this.project(r,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(s),v=this._getCenterOffset(r)._divideBy(1-1/f);return u.animate!==!0&&!this.getSize().contains(v)?!1:(F(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(r,s,!0)},this),!0)},_animateZoom:function(r,s,u,f){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=s,ze(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:s,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ox(r,s){return new ut(r,s)}var ti=ie.extend({options:{position:"topright"},initialize:function(r){w(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var s=this._map;return s&&s.removeControl(this),this.options.position=r,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var s=this._container=this.onAdd(r),u=this.getPosition(),f=r._controlCorners[u];return ze(s,"leaflet-control"),u.indexOf("bottom")!==-1?f.insertBefore(s,f.firstChild):f.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ht(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),ks=function(r){return new ti(r)};ut.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},s="leaflet-",u=this._controlContainer=be("div",s+"control-container",this._container);function f(v,T){var O=s+v+" "+s+T;r[v+T]=be("div",O,u)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)ht(this._controlCorners[r]);ht(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Qd=ti.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,s,u,f){return u<f?-1:f<u?1:0}},initialize:function(r,s,u){w(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in r)this._addLayer(r[f],f);for(f in s)this._addLayer(s[f],f,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return ti.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,s){return this._addLayer(r,s),this._map?this._update():this},addOverlay:function(r,s){return this._addLayer(r,s,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var s=this._getLayer(h(r));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){ze(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(ze(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):Tt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",s=this._container=be("div",r),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Fs(s),Ec(s);var f=this._section=be("section",r+"-list");u&&(this._map.on("click",this.collapse,this),Ye(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=be("a",r+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),Ye(v,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){tn(T),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=be("div",r+"-base",f),this._separator=be("div",r+"-separator",f),this._overlaysList=be("div",r+"-overlays",f),s.appendChild(f)},_getLayer:function(r){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&h(this._layers[s].layer)===r)return this._layers[s]},_addLayer:function(r,s,u){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(f,v){return this.options.sortFunction(f.layer,v.layer,f.name,v.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Li(this._baseLayersList),Li(this._overlaysList),this._layerControlInputs=[];var r,s,u,f,v=0;for(u=0;u<this._layers.length;u++)f=this._layers[u],this._addItem(f),s=s||f.overlay,r=r||!f.overlay,v+=f.overlay?0:1;return this.options.hideSingleBase&&(r=r&&v>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=s&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var s=this._getLayer(h(r.target)),u=s.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(r,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(s?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=u,f.firstChild},_addItem:function(r){var s=document.createElement("label"),u=this._map.hasLayer(r.layer),f;r.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=u):f=this._createRadioElement("leaflet-base-layers_"+h(this),u),this._layerControlInputs.push(f),f.layerId=h(r.layer),Ye(f,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+r.name;var T=document.createElement("span");s.appendChild(T),T.appendChild(f),T.appendChild(v);var O=r.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,s,u,f=[],v=[];this._handlingClick=!0;for(var T=r.length-1;T>=0;T--)s=r[T],u=this._getLayer(s.layerId).layer,s.checked?f.push(u):s.checked||v.push(u);for(T=0;T<v.length;T++)this._map.hasLayer(v[T])&&this._map.removeLayer(v[T]);for(T=0;T<f.length;T++)this._map.hasLayer(f[T])||this._map.addLayer(f[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,s,u,f=this._map.getZoom(),v=r.length-1;v>=0;v--)s=r[v],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&f<u.options.minZoom||u.options.maxZoom!==void 0&&f>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,Ye(r,"click",tn),this.expand();var s=this;setTimeout(function(){Mt(r,"click",tn),s._preventClick=!1})}}),sx=function(r,s,u){return new Qd(r,s,u)},Tc=ti.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var s="leaflet-control-zoom",u=be("div",s+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,s,u,f,v){var T=be("a",u,f);return T.innerHTML=r,T.href="#",T.title=s,T.setAttribute("role","button"),T.setAttribute("aria-label",s),Fs(T),Ye(T,"click",Hr),Ye(T,"click",v,this),Ye(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var r=this._map,s="leaflet-disabled";Tt(this._zoomInButton,s),Tt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(ze(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(ze(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ut.mergeOptions({zoomControl:!0}),ut.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Tc,this.addControl(this.zoomControl))});var ax=function(r){return new Tc(r)},Jd=ti.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var s="leaflet-control-scale",u=be("div",s),f=this.options;return this._addScales(f,s+"-line",u),r.on(f.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),u},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,s,u){r.metric&&(this._mScale=be("div",s,u)),r.imperial&&(this._iScale=be("div",s,u))},_update:function(){var r=this._map,s=r.getSize().y/2,u=r.distance(r.containerPointToLatLng([0,s]),r.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var s=this._getRoundNum(r),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/r)},_updateImperial:function(r){var s=r*3.2808399,u,f,v;s>5280?(u=s/5280,f=this._getRoundNum(u),this._updateScale(this._iScale,f+" mi",f/u)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(r,s,u){r.style.width=Math.round(this.options.maxWidth*u)+"px",r.innerHTML=s},_getRoundNum:function(r){var s=Math.pow(10,(Math.floor(r)+"").length-1),u=r/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),lx=function(r){return new Jd(r)},ux='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Ac=ti.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(De.inlineSvg?ux+" ":"")+"Leaflet</a>"},initialize:function(r){w(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=be("div","leaflet-control-attribution"),Fs(this._container);for(var s in r._layers)r._layers[s].getAttribution&&this.addAttribution(r._layers[s].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var s in this._attributions)this._attributions[s]&&r.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),r.length&&u.push(r.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});ut.mergeOptions({attributionControl:!0}),ut.addInitHook(function(){this.options.attributionControl&&new Ac().addTo(this)});var cx=function(r){return new Ac(r)};ti.Layers=Qd,ti.Zoom=Tc,ti.Scale=Jd,ti.Attribution=Ac,ks.layers=sx,ks.zoom=ax,ks.scale=lx,ks.attribution=cx;var _i=ie.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});_i.addTo=function(r,s){return r.addHandler(s,this),this};var hx={Events:ee},ep=De.touch?"touchstart mousedown":"mousedown",tr=ae.extend({options:{clickTolerance:3},initialize:function(r,s,u,f){w(this,f),this._element=r,this._dragStartTarget=s||r,this._preventOutline=u},enable:function(){this._enabled||(Ye(this._dragStartTarget,ep,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(tr._dragging===this&&this.finishDrag(!0),Mt(this._dragStartTarget,ep,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!Ot(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){tr._dragging===this&&this.finishDrag();return}if(!(tr._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(tr._dragging=this,this._preventOutline&&vc(this._element),mc(),Ns(),!this._moving)){this.fire("down");var s=r.touches?r.touches[0]:r,u=Zd(this._element);this._startPoint=new U(s.clientX,s.clientY),this._startPos=zr(this._element),this._parentScale=xc(u);var f=r.type==="mousedown";Ye(document,f?"mousemove":"touchmove",this._onMove,this),Ye(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var s=r.touches&&r.touches.length===1?r.touches[0]:r,u=new U(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,tn(r),this._moved||(this.fire("dragstart"),this._moved=!0,ze(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ze(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),Ht(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){Tt(document.body,"leaflet-dragging"),this._lastTarget&&(Tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Mt(document,"mousemove touchmove",this._onMove,this),Mt(document,"mouseup touchend touchcancel",this._onUp,this),_c(),Us();var s=this._moved&&this._moving;this._moving=!1,tr._dragging=!1,s&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function tp(r,s,u){var f,v=[1,4,2,8],T,O,W,q,ue,Ae,Be,rt;for(T=0,Ae=r.length;T<Ae;T++)r[T]._code=Vr(r[T],s);for(W=0;W<4;W++){for(Be=v[W],f=[],T=0,Ae=r.length,O=Ae-1;T<Ae;O=T++)q=r[T],ue=r[O],q._code&Be?ue._code&Be||(rt=Qa(ue,q,Be,s,u),rt._code=Vr(rt,s),f.push(rt)):(ue._code&Be&&(rt=Qa(ue,q,Be,s,u),rt._code=Vr(rt,s),f.push(rt)),f.push(q));r=f}return r}function np(r,s){var u,f,v,T,O,W,q,ue,Ae;if(!r||r.length===0)throw new Error("latlngs not passed");Wn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Be=le([0,0]),rt=Y(r),mn=rt.getNorthWest().distanceTo(rt.getSouthWest())*rt.getNorthEast().distanceTo(rt.getNorthWest());mn<1700&&(Be=Cc(r));var $t=r.length,Xn=[];for(u=0;u<$t;u++){var wn=le(r[u]);Xn.push(s.project(le([wn.lat-Be.lat,wn.lng-Be.lng])))}for(W=q=ue=0,u=0,f=$t-1;u<$t;f=u++)v=Xn[u],T=Xn[f],O=v.y*T.x-T.y*v.x,q+=(v.x+T.x)*O,ue+=(v.y+T.y)*O,W+=O*3;W===0?Ae=Xn[0]:Ae=[q/W,ue/W];var wo=s.unproject(j(Ae));return le([wo.lat+Be.lat,wo.lng+Be.lng])}function Cc(r){for(var s=0,u=0,f=0,v=0;v<r.length;v++){var T=le(r[v]);s+=T.lat,u+=T.lng,f++}return le([s/f,u/f])}var fx={__proto__:null,clipPolygon:tp,polygonCenter:np,centroid:Cc};function ip(r,s){if(!s||!r.length)return r.slice();var u=s*s;return r=mx(r,u),r=px(r,u),r}function rp(r,s,u){return Math.sqrt(zs(r,s,u,!0))}function dx(r,s,u){return zs(r,s,u)}function px(r,s){var u=r.length,f=typeof Uint8Array<"u"?Uint8Array:Array,v=new f(u);v[0]=v[u-1]=1,Pc(r,v,s,0,u-1);var T,O=[];for(T=0;T<u;T++)v[T]&&O.push(r[T]);return O}function Pc(r,s,u,f,v){var T=0,O,W,q;for(W=f+1;W<=v-1;W++)q=zs(r[W],r[f],r[v],!0),q>T&&(O=W,T=q);T>u&&(s[O]=1,Pc(r,s,u,f,O),Pc(r,s,u,O,v))}function mx(r,s){for(var u=[r[0]],f=1,v=0,T=r.length;f<T;f++)_x(r[f],r[v])>s&&(u.push(r[f]),v=f);return v<T-1&&u.push(r[T-1]),u}var op;function sp(r,s,u,f,v){var T=f?op:Vr(r,u),O=Vr(s,u),W,q,ue;for(op=O;;){if(!(T|O))return[r,s];if(T&O)return!1;W=T||O,q=Qa(r,s,W,u,v),ue=Vr(q,u),W===T?(r=q,T=ue):(s=q,O=ue)}}function Qa(r,s,u,f,v){var T=s.x-r.x,O=s.y-r.y,W=f.min,q=f.max,ue,Ae;return u&8?(ue=r.x+T*(q.y-r.y)/O,Ae=q.y):u&4?(ue=r.x+T*(W.y-r.y)/O,Ae=W.y):u&2?(ue=q.x,Ae=r.y+O*(q.x-r.x)/T):u&1&&(ue=W.x,Ae=r.y+O*(W.x-r.x)/T),new U(ue,Ae,v)}function Vr(r,s){var u=0;return r.x<s.min.x?u|=1:r.x>s.max.x&&(u|=2),r.y<s.min.y?u|=4:r.y>s.max.y&&(u|=8),u}function _x(r,s){var u=s.x-r.x,f=s.y-r.y;return u*u+f*f}function zs(r,s,u,f){var v=s.x,T=s.y,O=u.x-v,W=u.y-T,q=O*O+W*W,ue;return q>0&&(ue=((r.x-v)*O+(r.y-T)*W)/q,ue>1?(v=u.x,T=u.y):ue>0&&(v+=O*ue,T+=W*ue)),O=r.x-v,W=r.y-T,f?O*O+W*W:new U(v,T)}function Wn(r){return!S(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function ap(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Wn(r)}function lp(r,s){var u,f,v,T,O,W,q,ue;if(!r||r.length===0)throw new Error("latlngs not passed");Wn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Ae=le([0,0]),Be=Y(r),rt=Be.getNorthWest().distanceTo(Be.getSouthWest())*Be.getNorthEast().distanceTo(Be.getNorthWest());rt<1700&&(Ae=Cc(r));var mn=r.length,$t=[];for(u=0;u<mn;u++){var Xn=le(r[u]);$t.push(s.project(le([Xn.lat-Ae.lat,Xn.lng-Ae.lng])))}for(u=0,f=0;u<mn-1;u++)f+=$t[u].distanceTo($t[u+1])/2;if(f===0)ue=$t[0];else for(u=0,T=0;u<mn-1;u++)if(O=$t[u],W=$t[u+1],v=O.distanceTo(W),T+=v,T>f){q=(T-f)/v,ue=[W.x-q*(W.x-O.x),W.y-q*(W.y-O.y)];break}var wn=s.unproject(j(ue));return le([wn.lat+Ae.lat,wn.lng+Ae.lng])}var gx={__proto__:null,simplify:ip,pointToSegmentDistance:rp,closestPointOnSegment:dx,clipSegment:sp,_getEdgeIntersection:Qa,_getBitCode:Vr,_sqClosestPointOnSegment:zs,isFlat:Wn,_flat:ap,polylineCenter:lp},Rc={project:function(r){return new U(r.lng,r.lat)},unproject:function(r){return new te(r.y,r.x)},bounds:new ce([-180,-90],[180,90])},Lc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ce([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var s=Math.PI/180,u=this.R,f=r.lat*s,v=this.R_MINOR/u,T=Math.sqrt(1-v*v),O=T*Math.sin(f),W=Math.tan(Math.PI/4-f/2)/Math.pow((1-O)/(1+O),T/2);return f=-u*Math.log(Math.max(W,1e-10)),new U(r.lng*s*u,f)},unproject:function(r){for(var s=180/Math.PI,u=this.R,f=this.R_MINOR/u,v=Math.sqrt(1-f*f),T=Math.exp(-r.y/u),O=Math.PI/2-2*Math.atan(T),W=0,q=.1,ue;W<15&&Math.abs(q)>1e-7;W++)ue=v*Math.sin(O),ue=Math.pow((1-ue)/(1+ue),v/2),q=Math.PI/2-2*Math.atan(T*ue)-O,O+=q;return new te(O*s,r.x*s/u)}},vx={__proto__:null,LonLat:Rc,Mercator:Lc,SphericalMercator:ot},xx=o({},Xe,{code:"EPSG:3395",projection:Lc,transformation:function(){var r=.5/(Math.PI*Lc.R);return Qe(r,.5,-r,.5)}()}),up=o({},Xe,{code:"EPSG:4326",projection:Rc,transformation:Qe(1/180,1,-1/180,.5)}),yx=o({},_e,{projection:Rc,transformation:Qe(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,s){var u=s.lng-r.lng,f=s.lat-r.lat;return Math.sqrt(u*u+f*f)},infinite:!0});_e.Earth=Xe,_e.EPSG3395=xx,_e.EPSG3857=tt,_e.EPSG900913=wt,_e.EPSG4326=up,_e.Simple=yx;var ni=ae.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[h(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[h(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var s=r.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ut.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var s=h(r);return this._layers[s]?this:(this._layers[s]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var s=h(r);return this._layers[s]?(this._loaded&&r.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return h(r)in this._layers},eachLayer:function(r,s){for(var u in this._layers)r.call(s,this._layers[u]);return this},_addLayers:function(r){r=r?S(r)?r:[r]:[];for(var s=0,u=r.length;s<u;s++)this.addLayer(r[s])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[h(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var s=h(r);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,s=-1/0,u=this._getZoomSpan();for(var f in this._zoomBoundLayers){var v=this._zoomBoundLayers[f].options;r=v.minZoom===void 0?r:Math.min(r,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=r===1/0?void 0:r,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var xo=ni.extend({initialize:function(r,s){w(this,s),this._layers={};var u,f;if(r)for(u=0,f=r.length;u<f;u++)this.addLayer(r[u])},addLayer:function(r){var s=this.getLayerId(r);return this._layers[s]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var s=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(r){var s=typeof r=="number"?r:this.getLayerId(r);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var s=Array.prototype.slice.call(arguments,1),u,f;for(u in this._layers)f=this._layers[u],f[r]&&f[r].apply(f,s);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,s){for(var u in this._layers)r.call(s,this._layers[u]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return h(r)}}),Sx=function(r,s){return new xo(r,s)},bi=xo.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),xo.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),xo.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new He;for(var s in this._layers){var u=this._layers[s];r.extend(u.getBounds?u.getBounds():u.getLatLng())}return r}}),Mx=function(r,s){return new bi(r,s)},yo=ie.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){w(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,s){var u=this._getIconUrl(r);if(!u){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(f,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(r,s){var u=this.options,f=u[s+"Size"];typeof f=="number"&&(f=[f,f]);var v=j(f),T=j(s==="shadow"&&u.shadowAnchor||u.iconAnchor||v&&v.divideBy(2,!0));r.className="leaflet-marker-"+s+" "+(u.className||""),T&&(r.style.marginLeft=-T.x+"px",r.style.marginTop=-T.y+"px"),v&&(r.style.width=v.x+"px",r.style.height=v.y+"px")},_createImg:function(r,s){return s=s||document.createElement("img"),s.src=r,s},_getIconUrl:function(r){return De.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function Ex(r){return new yo(r)}var Bs=yo.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof Bs.imagePath!="string"&&(Bs.imagePath=this._detectIconPath()),(this.options.imagePath||Bs.imagePath)+yo.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var s=function(u,f,v){var T=f.exec(u);return T&&T[v]};return r=s(r,/^url\((['"])?(.+)\1\)$/,2),r&&s(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=be("div","leaflet-default-icon-path",document.body),s=kt(r,"background-image")||kt(r,"backgroundImage");if(document.body.removeChild(r),s=this._stripUrl(s),s)return s;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),cp=_i.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new tr(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ze(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var s=this._marker,u=s._map,f=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,T=zr(s._icon),O=u.getPixelBounds(),W=u.getPixelOrigin(),q=Ce(O.min._subtract(W).add(v),O.max._subtract(W).subtract(v));if(!q.contains(T)){var ue=j((Math.max(q.max.x,T.x)-q.max.x)/(O.max.x-q.max.x)-(Math.min(q.min.x,T.x)-q.min.x)/(O.min.x-q.min.x),(Math.max(q.max.y,T.y)-q.max.y)/(O.max.y-q.max.y)-(Math.min(q.min.y,T.y)-q.min.y)/(O.min.y-q.min.y)).multiplyBy(f);u.panBy(ue,{animate:!1}),this._draggable._newPos._add(ue),this._draggable._startPos._add(ue),Ht(s._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=F(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(J(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,r)))},_onDrag:function(r){var s=this._marker,u=s._shadow,f=zr(s._icon),v=s._map.layerPointToLatLng(f);u&&Ht(u,f),s._latlng=v,r.latlng=v,r.oldLatLng=this._oldLatLng,s.fire("move",r).fire("drag",r)},_onDragEnd:function(r){J(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),Ja=ni.extend({options:{icon:new Bs,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,s){w(this,s),this._latlng=le(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var s=this._latlng;return this._latlng=le(r),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=r.icon.createIcon(this._icon),f=!1;u!==this._icon&&(this._icon&&this._removeIcon(),f=!0,r.title&&(u.title=r.title),u.tagName==="IMG"&&(u.alt=r.alt||"")),ze(u,s),r.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ye(u,"focus",this._panOnFocus,this);var v=r.icon.createShadow(this._shadow),T=!1;v!==this._shadow&&(this._removeShadow(),T=!0),v&&(ze(v,s),v.alt=""),this._shadow=v,r.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&T&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Mt(this._icon,"focus",this._panOnFocus,this),ht(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ht(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&Ht(this._icon,r),this._shadow&&Ht(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(ze(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),cp)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new cp(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&En(this._icon,r),this._shadow&&En(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var s=this.options.icon.options,u=s.iconSize?j(s.iconSize):j(0,0),f=s.iconAnchor?j(s.iconAnchor):j(0,0);r.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:u.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function wx(r,s){return new Ja(r,s)}var nr=ni.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return w(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),el=nr.extend({options:{fill:!0,radius:10},initialize:function(r,s){w(this,s),this._latlng=le(r),this._radius=this.options.radius},setLatLng:function(r){var s=this._latlng;return this._latlng=le(r),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var s=r&&r.radius||this._radius;return nr.prototype.setStyle.call(this,r),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,s=this._radiusY||r,u=this._clickTolerance(),f=[r+u,s+u];this._pxBounds=new ce(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Tx(r,s){return new el(r,s)}var bc=el.extend({initialize:function(r,s,u){if(typeof s=="number"&&(s=o({},u,{radius:s})),w(this,s),this._latlng=le(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new He(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:nr.prototype.setStyle,_project:function(){var r=this._latlng.lng,s=this._latlng.lat,u=this._map,f=u.options.crs;if(f.distance===Xe.distance){var v=Math.PI/180,T=this._mRadius/Xe.R/v,O=u.project([s+T,r]),W=u.project([s-T,r]),q=O.add(W).divideBy(2),ue=u.unproject(q).lat,Ae=Math.acos((Math.cos(T*v)-Math.sin(s*v)*Math.sin(ue*v))/(Math.cos(s*v)*Math.cos(ue*v)))/v;(isNaN(Ae)||Ae===0)&&(Ae=T/Math.cos(Math.PI/180*s)),this._point=q.subtract(u.getPixelOrigin()),this._radius=isNaN(Ae)?0:q.x-u.project([ue,r-Ae]).x,this._radiusY=q.y-O.y}else{var Be=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(Be).x}this._updateBounds()}});function Ax(r,s,u){return new bc(r,s,u)}var Ii=nr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,s){w(this,s),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var s=1/0,u=null,f=zs,v,T,O=0,W=this._parts.length;O<W;O++)for(var q=this._parts[O],ue=1,Ae=q.length;ue<Ae;ue++){v=q[ue-1],T=q[ue];var Be=f(r,v,T,!0);Be<s&&(s=Be,u=f(r,v,T))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return lp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,s){return s=s||this._defaultShape(),r=le(r),s.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new He,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return Wn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var s=[],u=Wn(r),f=0,v=r.length;f<v;f++)u?(s[f]=le(r[f]),this._bounds.extend(s[f])):s[f]=this._convertLatLngs(r[f]);return s},_project:function(){var r=new ce;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),s=new U(r,r);this._rawPxBounds&&(this._pxBounds=new ce([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(r,s,u){var f=r[0]instanceof te,v=r.length,T,O;if(f){for(O=[],T=0;T<v;T++)O[T]=this._map.latLngToLayerPoint(r[T]),u.extend(O[T]);s.push(O)}else for(T=0;T<v;T++)this._projectLatlngs(r[T],s,u)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,f,v,T,O,W,q;for(u=0,v=0,T=this._rings.length;u<T;u++)for(q=this._rings[u],f=0,O=q.length;f<O-1;f++)W=sp(q[f],q[f+1],r,f,!0),W&&(s[v]=s[v]||[],s[v].push(W[0]),(W[1]!==q[f+1]||f===O-2)&&(s[v].push(W[1]),v++))}},_simplifyPoints:function(){for(var r=this._parts,s=this.options.smoothFactor,u=0,f=r.length;u<f;u++)r[u]=ip(r[u],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,s){var u,f,v,T,O,W,q=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(u=0,T=this._parts.length;u<T;u++)for(W=this._parts[u],f=0,O=W.length,v=O-1;f<O;v=f++)if(!(!s&&f===0)&&rp(r,W[v],W[f])<=q)return!0;return!1}});function Cx(r,s){return new Ii(r,s)}Ii._flat=ap;var So=Ii.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return np(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var s=Ii.prototype._convertLatLngs.call(this,r),u=s.length;return u>=2&&s[0]instanceof te&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(r){Ii.prototype._setLatLngs.call(this,r),Wn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Wn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,s=this.options.weight,u=new U(s,s);if(r=new ce(r.min.subtract(u),r.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,v=this._rings.length,T;f<v;f++)T=tp(this._rings[f],r,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var s=!1,u,f,v,T,O,W,q,ue;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(T=0,q=this._parts.length;T<q;T++)for(u=this._parts[T],O=0,ue=u.length,W=ue-1;O<ue;W=O++)f=u[O],v=u[W],f.y>r.y!=v.y>r.y&&r.x<(v.x-f.x)*(r.y-f.y)/(v.y-f.y)+f.x&&(s=!s);return s||Ii.prototype._containsPoint.call(this,r,!0)}});function Px(r,s){return new So(r,s)}var Di=bi.extend({initialize:function(r,s){w(this,s),this._layers={},r&&this.addData(r)},addData:function(r){var s=S(r)?r:r.features,u,f,v;if(s){for(u=0,f=s.length;u<f;u++)v=s[u],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var T=this.options;if(T.filter&&!T.filter(r))return this;var O=tl(r,T);return O?(O.feature=rl(r),O.defaultOptions=O.options,this.resetStyle(O),T.onEachFeature&&T.onEachFeature(r,O),this.addLayer(O)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=o({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(s){this._setLayerStyle(s,r)},this)},_setLayerStyle:function(r,s){r.setStyle&&(typeof s=="function"&&(s=s(r.feature)),r.setStyle(s))}});function tl(r,s){var u=r.type==="Feature"?r.geometry:r,f=u?u.coordinates:null,v=[],T=s&&s.pointToLayer,O=s&&s.coordsToLatLng||Ic,W,q,ue,Ae;if(!f&&!u)return null;switch(u.type){case"Point":return W=O(f),hp(T,r,W,s);case"MultiPoint":for(ue=0,Ae=f.length;ue<Ae;ue++)W=O(f[ue]),v.push(hp(T,r,W,s));return new bi(v);case"LineString":case"MultiLineString":return q=nl(f,u.type==="LineString"?0:1,O),new Ii(q,s);case"Polygon":case"MultiPolygon":return q=nl(f,u.type==="Polygon"?1:2,O),new So(q,s);case"GeometryCollection":for(ue=0,Ae=u.geometries.length;ue<Ae;ue++){var Be=tl({geometry:u.geometries[ue],type:"Feature",properties:r.properties},s);Be&&v.push(Be)}return new bi(v);case"FeatureCollection":for(ue=0,Ae=u.features.length;ue<Ae;ue++){var rt=tl(u.features[ue],s);rt&&v.push(rt)}return new bi(v);default:throw new Error("Invalid GeoJSON object.")}}function hp(r,s,u,f){return r?r(s,u):new Ja(u,f&&f.markersInheritOptions&&f)}function Ic(r){return new te(r[1],r[0],r[2])}function nl(r,s,u){for(var f=[],v=0,T=r.length,O;v<T;v++)O=s?nl(r[v],s-1,u):(u||Ic)(r[v]),f.push(O);return f}function Dc(r,s){return r=le(r),r.alt!==void 0?[_(r.lng,s),_(r.lat,s),_(r.alt,s)]:[_(r.lng,s),_(r.lat,s)]}function il(r,s,u,f){for(var v=[],T=0,O=r.length;T<O;T++)v.push(s?il(r[T],Wn(r[T])?0:s-1,u,f):Dc(r[T],f));return!s&&u&&v.length>0&&v.push(v[0].slice()),v}function Mo(r,s){return r.feature?o({},r.feature,{geometry:s}):rl(s)}function rl(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Nc={toGeoJSON:function(r){return Mo(this,{type:"Point",coordinates:Dc(this.getLatLng(),r)})}};Ja.include(Nc),bc.include(Nc),el.include(Nc),Ii.include({toGeoJSON:function(r){var s=!Wn(this._latlngs),u=il(this._latlngs,s?1:0,!1,r);return Mo(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),So.include({toGeoJSON:function(r){var s=!Wn(this._latlngs),u=s&&!Wn(this._latlngs[0]),f=il(this._latlngs,u?2:s?1:0,!0,r);return s||(f=[f]),Mo(this,{type:(u?"Multi":"")+"Polygon",coordinates:f})}}),xo.include({toMultiPoint:function(r){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(r).geometry.coordinates)}),Mo(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(r){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(r);var u=s==="GeometryCollection",f=[];return this.eachLayer(function(v){if(v.toGeoJSON){var T=v.toGeoJSON(r);if(u)f.push(T.geometry);else{var O=rl(T);O.type==="FeatureCollection"?f.push.apply(f,O.features):f.push(O)}}}),u?Mo(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function fp(r,s){return new Di(r,s)}var Rx=fp,ol=ni.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,s,u){this._url=r,this._bounds=Y(s),w(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ze(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ht(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&Mn(this._image),this},bringToBack:function(){return this._map&&pi(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=Y(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",s=this._image=r?this._url:be("img");if(ze(s,"leaflet-image-layer"),this._zoomAnimated&&ze(s,"leaflet-zoom-animated"),this.options.className&&ze(s,this.options.className),s.onselectstart=g,s.onmousemove=g,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(r){var s=this._map.getZoomScale(r.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;kr(this._image,u,s)},_reset:function(){var r=this._image,s=new ce(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();Ht(r,s.min),r.style.width=u.x+"px",r.style.height=u.y+"px"},_updateOpacity:function(){En(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),Lx=function(r,s,u){return new ol(r,s,u)},dp=ol.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",s=this._image=r?this._url:be("video");if(ze(s,"leaflet-image-layer"),this._zoomAnimated&&ze(s,"leaflet-zoom-animated"),this.options.className&&ze(s,this.options.className),s.onselectstart=g,s.onmousemove=g,s.onloadeddata=l(this.fire,this,"load"),r){for(var u=s.getElementsByTagName("source"),f=[],v=0;v<u.length;v++)f.push(u[v].src);this._url=u.length>0?f:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var O=be("source");O.src=this._url[T],s.appendChild(O)}}});function bx(r,s,u){return new dp(r,s,u)}var pp=ol.extend({_initImage:function(){var r=this._image=this._url;ze(r,"leaflet-image-layer"),this._zoomAnimated&&ze(r,"leaflet-zoom-animated"),this.options.className&&ze(r,this.options.className),r.onselectstart=g,r.onmousemove=g}});function Ix(r,s,u){return new pp(r,s,u)}var gi=ni.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,s){r&&(r instanceof te||S(r))?(this._latlng=le(r),w(this,s)):(w(this,r),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&En(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&En(this._container,1),this.bringToFront(),this.options.interactive&&(ze(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(En(this._container,0),this._removeTimeout=setTimeout(l(ht,void 0,this._container),200)):ht(this._container),this.options.interactive&&(Tt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=le(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Mn(this._container),this},bringToBack:function(){return this._map&&pi(this._container),this},_prepareOpen:function(r){var s=this._source;if(!s._map)return!1;if(s instanceof bi){s=null;var u=this._source._layers;for(var f in u)if(u[f]._map){s=u[f];break}if(!s)return!1;this._source=s}if(!r)if(s.getCenter)r=s.getCenter();else if(s.getLatLng)r=s.getLatLng();else if(s.getBounds)r=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")r.innerHTML=s;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),s=j(this.options.offset),u=this._getAnchor();this._zoomAnimated?Ht(this._container,r.add(u)):s=s.add(r).add(u);var f=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=f+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});ut.include({_initOverlay:function(r,s,u,f){var v=s;return v instanceof r||(v=new r(f).setContent(s)),u&&v.setLatLng(u),v}}),ni.include({_initOverlay:function(r,s,u,f){var v=u;return v instanceof r?(w(v,f),v._source=this):(v=s&&!f?s:new r(f,this),v.setContent(u)),v}});var sl=gi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,gi.prototype.openOn.call(this,r)},onAdd:function(r){gi.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof nr||this._source.on("preclick",Br))},onRemove:function(r){gi.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof nr||this._source.off("preclick",Br))},getEvents:function(){var r=gi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",s=this._container=be("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=be("div",r+"-content-wrapper",s);if(this._contentNode=be("div",r+"-content",u),Fs(s),Ec(this._contentNode),Ye(s,"contextmenu",Br),this._tipContainer=be("div",r+"-tip-container",s),this._tip=be("div",r+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=be("a",r+"-close-button",s);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',Ye(f,"click",function(v){tn(v),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,s=r.style;s.width="",s.whiteSpace="nowrap";var u=r.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var f=r.offsetHeight,v=this.options.maxHeight,T="leaflet-popup-scrolled";v&&f>v?(s.height=v+"px",ze(r,T)):Tt(r,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),u=this._getAnchor();Ht(this._container,s.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,s=parseInt(kt(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+s,f=this._containerWidth,v=new U(this._containerLeft,-u-this._containerBottom);v._add(zr(this._container));var T=r.layerPointToContainerPoint(v),O=j(this.options.autoPanPadding),W=j(this.options.autoPanPaddingTopLeft||O),q=j(this.options.autoPanPaddingBottomRight||O),ue=r.getSize(),Ae=0,Be=0;T.x+f+q.x>ue.x&&(Ae=T.x+f-ue.x+q.x),T.x-Ae-W.x<0&&(Ae=T.x-W.x),T.y+u+q.y>ue.y&&(Be=T.y+u-ue.y+q.y),T.y-Be-W.y<0&&(Be=T.y-W.y),(Ae||Be)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([Ae,Be]))}},_getAnchor:function(){return j(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Dx=function(r,s){return new sl(r,s)};ut.mergeOptions({closePopupOnClick:!0}),ut.include({openPopup:function(r,s,u){return this._initOverlay(sl,r,s,u).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),ni.include({bindPopup:function(r,s){return this._popup=this._initOverlay(sl,this._popup,r,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof bi||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Hr(r);var s=r.layer||r.target;if(this._popup._source===s&&!(s instanceof nr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=s,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var al=gi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){gi.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){gi.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=gi.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",s=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=be("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var s,u,f=this._map,v=this._container,T=f.latLngToContainerPoint(f.getCenter()),O=f.layerPointToContainerPoint(r),W=this.options.direction,q=v.offsetWidth,ue=v.offsetHeight,Ae=j(this.options.offset),Be=this._getAnchor();W==="top"?(s=q/2,u=ue):W==="bottom"?(s=q/2,u=0):W==="center"?(s=q/2,u=ue/2):W==="right"?(s=0,u=ue/2):W==="left"?(s=q,u=ue/2):O.x<T.x?(W="right",s=0,u=ue/2):(W="left",s=q+(Ae.x+Be.x)*2,u=ue/2),r=r.subtract(j(s,u,!0)).add(Ae).add(Be),Tt(v,"leaflet-tooltip-right"),Tt(v,"leaflet-tooltip-left"),Tt(v,"leaflet-tooltip-top"),Tt(v,"leaflet-tooltip-bottom"),ze(v,"leaflet-tooltip-"+W),Ht(v,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&En(this._container,r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(s)},_getAnchor:function(){return j(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Nx=function(r,s){return new al(r,s)};ut.include({openTooltip:function(r,s,u){return this._initOverlay(al,r,s,u).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),ni.include({bindTooltip:function(r,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(al,this._tooltip,r,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var s=r?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[s](u),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof bi||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&(Ye(s,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),Ye(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var s=r.latlng,u,f;this._tooltip.options.sticky&&r.originalEvent&&(u=this._map.mouseEventToContainerPoint(r.originalEvent),f=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(s)}});var mp=yo.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var s=r&&r.tagName==="DIV"?r:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Li(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var f=j(u.bgPos);s.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Ux(r){return new mp(r)}yo.Default=Bs;var Hs=ni.extend({options:{tileSize:256,opacity:1,updateWhenIdle:De.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){w(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),ht(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Mn(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(pi(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof U?r:new U(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var s=this.getPane().children,u=-r(-1/0,1/0),f=0,v=s.length,T;f<v;f++)T=s[f].style.zIndex,s[f]!==this._container&&T&&(u=r(u,+T));isFinite(u)&&(this.options.zIndex=u+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!De.ielt9){En(this._container,this.options.opacity);var r=+new Date,s=!1,u=!1;for(var f in this._tiles){var v=this._tiles[f];if(!(!v.current||!v.loaded)){var T=Math.min(1,(r-v.loaded)/200);En(v.el,T),T<1?s=!0:(v.active?u=!0:this._onOpaqueTile(v),v.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(J(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=be("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,s=this.options.maxZoom;if(r!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===r?(this._levels[u].el.style.zIndex=s-Math.abs(r-u),this._onUpdateLevel(u)):(ht(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var f=this._levels[r],v=this._map;return f||(f=this._levels[r]={},f.el=be("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=s,f.origin=v.project(v.unproject(v.getPixelOrigin()),r).round(),f.zoom=r,this._setZoomTransform(f,v.getCenter(),v.getZoom()),g(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var r,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)s=this._tiles[r],s.retain=s.current;for(r in this._tiles)if(s=this._tiles[r],s.current&&!s.active){var f=s.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var s in this._tiles)this._tiles[s].coords.z===r&&this._removeTile(s)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)ht(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,s,u,f){var v=Math.floor(r/2),T=Math.floor(s/2),O=u-1,W=new U(+v,+T);W.z=+O;var q=this._tileCoordsToKey(W),ue=this._tiles[q];return ue&&ue.active?(ue.retain=!0,!0):(ue&&ue.loaded&&(ue.retain=!0),O>f?this._retainParent(v,T,O,f):!1)},_retainChildren:function(r,s,u,f){for(var v=2*r;v<2*r+2;v++)for(var T=2*s;T<2*s+2;T++){var O=new U(v,T);O.z=u+1;var W=this._tileCoordsToKey(O),q=this._tiles[W];if(q&&q.active){q.retain=!0;continue}else q&&q.loaded&&(q.retain=!0);u+1<f&&this._retainChildren(v,T,u+1,f)}},_resetView:function(r){var s=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var s=this.options;return s.minNativeZoom!==void 0&&r<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<r?s.maxNativeZoom:r},_setView:function(r,s,u,f){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var T=this.options.updateWhenZooming&&v!==this._tileZoom;(!f||T)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(r),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(r,s)},_setZoomTransforms:function(r,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],r,s)},_setZoomTransform:function(r,s,u){var f=this._map.getZoomScale(u,r.zoom),v=r.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(s,u)).round();De.any3d?kr(r.el,v,f):Ht(r.el,v)},_resetGrid:function(){var r=this._map,s=r.options.crs,u=this._tileSize=this.getTileSize(),f=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,s.wrapLng[0]],f).x/u.x),Math.ceil(r.project([0,s.wrapLng[1]],f).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([s.wrapLat[0],0],f).y/u.x),Math.ceil(r.project([s.wrapLat[1],0],f).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),f=s.getZoomScale(u,this._tileZoom),v=s.project(r,this._tileZoom).floor(),T=s.getSize().divideBy(f*2);return new ce(v.subtract(T),v.add(T))},_update:function(r){var s=this._map;if(s){var u=this._clampZoom(s.getZoom());if(r===void 0&&(r=s.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(r),v=this._pxBoundsToTileRange(f),T=v.getCenter(),O=[],W=this.options.keepBuffer,q=new ce(v.getBottomLeft().subtract([W,-W]),v.getTopRight().add([W,-W]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ue in this._tiles){var Ae=this._tiles[ue].coords;(Ae.z!==this._tileZoom||!q.contains(new U(Ae.x,Ae.y)))&&(this._tiles[ue].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(r,u);return}for(var Be=v.min.y;Be<=v.max.y;Be++)for(var rt=v.min.x;rt<=v.max.x;rt++){var mn=new U(rt,Be);if(mn.z=this._tileZoom,!!this._isValidTile(mn)){var $t=this._tiles[this._tileCoordsToKey(mn)];$t?$t.current=!0:O.push(mn)}}if(O.sort(function(wn,wo){return wn.distanceTo(T)-wo.distanceTo(T)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Xn=document.createDocumentFragment();for(rt=0;rt<O.length;rt++)this._addTile(O[rt],Xn);this._level.el.appendChild(Xn)}}}},_isValidTile:function(r){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(r.x<u.min.x||r.x>u.max.x)||!s.wrapLat&&(r.y<u.min.y||r.y>u.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(r);return Y(this.options.bounds).overlaps(f)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var s=this._map,u=this.getTileSize(),f=r.scaleBy(u),v=f.add(u),T=s.unproject(f,r.z),O=s.unproject(v,r.z);return[T,O]},_tileCoordsToBounds:function(r){var s=this._tileCoordsToNwSe(r),u=new He(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var s=r.split(":"),u=new U(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(r){var s=this._tiles[r];s&&(ht(s.el),delete this._tiles[r],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){ze(r,"leaflet-tile");var s=this.getTileSize();r.style.width=s.x+"px",r.style.height=s.y+"px",r.onselectstart=g,r.onmousemove=g,De.ielt9&&this.options.opacity<1&&En(r,this.options.opacity)},_addTile:function(r,s){var u=this._getTilePos(r),f=this._tileCoordsToKey(r),v=this.createTile(this._wrapCoords(r),l(this._tileReady,this,r));this._initTile(v),this.createTile.length<2&&F(l(this._tileReady,this,r,null,v)),Ht(v,u),this._tiles[f]={el:v,coords:r,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:r})},_tileReady:function(r,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:r});var f=this._tileCoordsToKey(r);u=this._tiles[f],u&&(u.loaded=+new Date,this._map._fadeAnimated?(En(u.el,0),J(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(ze(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),De.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var s=new U(this._wrapX?m(r.x,this._wrapX):r.x,this._wrapY?m(r.y,this._wrapY):r.y);return s.z=r.z,s},_pxBoundsToTileRange:function(r){var s=this.getTileSize();return new ce(r.min.unscaleBy(s).floor(),r.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function Ox(r){return new Hs(r)}var Eo=Hs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,s){this._url=r,s=w(this,s),s.detectRetina&&De.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,s){return this._url===r&&s===void 0&&(s=!0),this._url=r,s||this.redraw(),this},createTile:function(r,s){var u=document.createElement("img");return Ye(u,"load",l(this._tileOnLoad,this,s,u)),Ye(u,"error",l(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(r),u},getTileUrl:function(r){var s={r:De.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-r.y;this.options.tms&&(s.y=u),s["-y"]=u}return M(this._url,o(s,this.options))},_tileOnLoad:function(r,s){De.ielt9?setTimeout(l(r,this,null,s),0):r(null,s)},_tileOnError:function(r,s,u){var f=this.options.errorTileUrl;f&&s.getAttribute("src")!==f&&(s.src=f),r(u,s)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,f=this.options.zoomOffset;return u&&(r=s-r),r+f},_getSubdomain:function(r){var s=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var r,s;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(s=this._tiles[r].el,s.onload=g,s.onerror=g,!s.complete)){s.src=k;var u=this._tiles[r].coords;ht(s),delete this._tiles[r],this.fire("tileabort",{tile:s,coords:u})}},_removeTile:function(r){var s=this._tiles[r];if(s)return s.el.setAttribute("src",k),Hs.prototype._removeTile.call(this,r)},_tileReady:function(r,s,u){if(!(!this._map||u&&u.getAttribute("src")===k))return Hs.prototype._tileReady.call(this,r,s,u)}});function _p(r,s){return new Eo(r,s)}var gp=Eo.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,s){this._url=r;var u=o({},this.defaultWmsParams);for(var f in s)f in this.options||(u[f]=s[f]);s=w(this,s);var v=s.detectRetina&&De.retina?2:1,T=this.getTileSize();u.width=T.x*v,u.height=T.y*v,this.wmsParams=u},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Eo.prototype.onAdd.call(this,r)},getTileUrl:function(r){var s=this._tileCoordsToNwSe(r),u=this._crs,f=Ce(u.project(s[0]),u.project(s[1])),v=f.min,T=f.max,O=(this._wmsVersion>=1.3&&this._crs===up?[v.y,v.x,T.y,T.x]:[v.x,v.y,T.x,T.y]).join(","),W=Eo.prototype.getTileUrl.call(this,r);return W+y(this.wmsParams,W,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(r,s){return o(this.wmsParams,r),s||this.redraw(),this}});function Fx(r,s){return new gp(r,s)}Eo.WMS=gp,_p.wms=Fx;var Ni=ni.extend({options:{padding:.1},initialize:function(r){w(this,r),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ze(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,s){var u=this._map.getZoomScale(s,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),T=f.multiplyBy(-u).add(v).subtract(this._map._getNewPixelOrigin(r,s));De.any3d?kr(this._container,T,u):Ht(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-r)).round();this._bounds=new ce(u,u.add(s.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),vp=Ni.extend({options:{tolerance:0},getEvents:function(){var r=Ni.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ni.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");Ye(r,"mousemove",this._onMouseMove,this),Ye(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ye(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){J(this._redrawRequest),delete this._ctx,ht(this._container),Mt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var s in this._layers)r=this._layers[s],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ni.prototype._update.call(this);var r=this._bounds,s=this._container,u=r.getSize(),f=De.retina?2:1;Ht(s,r.min),s.width=f*u.x,s.height=f*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",De.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){Ni.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[h(r)]=r;var s=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var s=r._order,u=s.next,f=s.prev;u?u.prev=f:this._drawLast=f,f?f.next=u:this._drawFirst=u,delete r._order,delete this._layers[h(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var s=r.options.dashArray.split(/[, ]+/),u=[],f,v;for(v=0;v<s.length;v++){if(f=Number(s[v]),isNaN(f))return;u.push(f)}r.options._dashArray=u}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var s=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ce,this._redrawBounds.extend(r._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(r._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var s=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)r=f.layer,(!s||r._pxBounds&&r._pxBounds.intersects(s))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,s){if(this._drawing){var u,f,v,T,O=r._parts,W=O.length,q=this._ctx;if(W){for(q.beginPath(),u=0;u<W;u++){for(f=0,v=O[u].length;f<v;f++)T=O[u][f],q[f?"lineTo":"moveTo"](T.x,T.y);s&&q.closePath()}this._fillStroke(q,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var s=r._point,u=this._ctx,f=Math.max(Math.round(r._radius),1),v=(Math.max(Math.round(r._radiusY),1)||f)/f;v!==1&&(u.save(),u.scale(1,v)),u.beginPath(),u.arc(s.x,s.y/v,f,0,Math.PI*2,!1),v!==1&&u.restore(),this._fillStroke(u,r)}},_fillStroke:function(r,s){var u=s.options;u.fill&&(r.globalAlpha=u.fillOpacity,r.fillStyle=u.fillColor||u.color,r.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(r.setLineDash&&r.setLineDash(s.options&&s.options._dashArray||[]),r.globalAlpha=u.opacity,r.lineWidth=u.weight,r.strokeStyle=u.color,r.lineCap=u.lineCap,r.lineJoin=u.lineJoin,r.stroke())},_onClick:function(r){for(var s=this._map.mouseEventToLayerPoint(r),u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(s)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(u))&&(f=u);this._fireEvent(f?[f]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,s)}},_handleMouseOut:function(r){var s=this._hoveredLayer;s&&(Tt(this._container,"leaflet-interactive"),this._fireEvent([s],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,s){if(!this._mouseHoverThrottled){for(var u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(s)&&(f=u);f!==this._hoveredLayer&&(this._handleMouseOut(r),f&&(ze(this._container,"leaflet-interactive"),this._fireEvent([f],r,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,s,u){this._map._fireDOMEvent(s,u||s.type,r)},_bringToFront:function(r){var s=r._order;if(s){var u=s.next,f=s.prev;if(u)u.prev=f;else return;f?f.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(r)}},_bringToBack:function(r){var s=r._order;if(s){var u=s.next,f=s.prev;if(f)f.next=u;else return;u?u.prev=f:f&&(this._drawLast=f),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(r)}}});function xp(r){return De.canvas?new vp(r):null}var Vs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),kx={_initContainer:function(){this._container=be("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ni.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var s=r._container=Vs("shape");ze(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",r._path=Vs("path"),s.appendChild(r._path),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){var s=r._container;this._container.appendChild(s),r.options.interactive&&r.addInteractiveTarget(s)},_removePath:function(r){var s=r._container;ht(s),r.removeInteractiveTarget(s),delete this._layers[h(r)]},_updateStyle:function(r){var s=r._stroke,u=r._fill,f=r.options,v=r._container;v.stroked=!!f.stroke,v.filled=!!f.fill,f.stroke?(s||(s=r._stroke=Vs("stroke")),v.appendChild(s),s.weight=f.weight+"px",s.color=f.color,s.opacity=f.opacity,f.dashArray?s.dashStyle=S(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=f.lineCap.replace("butt","flat"),s.joinstyle=f.lineJoin):s&&(v.removeChild(s),r._stroke=null),f.fill?(u||(u=r._fill=Vs("fill")),v.appendChild(u),u.color=f.fillColor||f.color,u.opacity=f.fillOpacity):u&&(v.removeChild(u),r._fill=null)},_updateCircle:function(r){var s=r._point.round(),u=Math.round(r._radius),f=Math.round(r._radiusY||u);this._setPath(r,r._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+f+" 0,"+65535*360)},_setPath:function(r,s){r._path.v=s},_bringToFront:function(r){Mn(r._container)},_bringToBack:function(r){pi(r._container)}},ll=De.vml?Vs:Fe,Gs=Ni.extend({_initContainer:function(){this._container=ll("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ll("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ht(this._container),Mt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ni.prototype._update.call(this);var r=this._bounds,s=r.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),Ht(u,r.min),u.setAttribute("viewBox",[r.min.x,r.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(r){var s=r._path=ll("path");r.options.className&&ze(s,r.options.className),r.options.interactive&&ze(s,"leaflet-interactive"),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){ht(r._path),r.removeInteractiveTarget(r._path),delete this._layers[h(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var s=r._path,u=r.options;s&&(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(r,s){this._setPath(r,lt(r._parts,s))},_updateCircle:function(r){var s=r._point,u=Math.max(Math.round(r._radius),1),f=Math.max(Math.round(r._radiusY),1)||u,v="a"+u+","+f+" 0 1,0 ",T=r._empty()?"M0 0":"M"+(s.x-u)+","+s.y+v+u*2+",0 "+v+-u*2+",0 ";this._setPath(r,T)},_setPath:function(r,s){r._path.setAttribute("d",s)},_bringToFront:function(r){Mn(r._path)},_bringToBack:function(r){pi(r._path)}});De.vml&&Gs.include(kx);function yp(r){return De.svg||De.vml?new Gs(r):null}ut.include({getRenderer:function(r){var s=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var s=this._paneRenderers[r];return s===void 0&&(s=this._createRenderer({pane:r}),this._paneRenderers[r]=s),s},_createRenderer:function(r){return this.options.preferCanvas&&xp(r)||yp(r)}});var Sp=So.extend({initialize:function(r,s){So.prototype.initialize.call(this,this._boundsToLatLngs(r),s)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=Y(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function zx(r,s){return new Sp(r,s)}Gs.create=ll,Gs.pointsToPath=lt,Di.geometryToLayer=tl,Di.coordsToLatLng=Ic,Di.coordsToLatLngs=nl,Di.latLngToCoords=Dc,Di.latLngsToCoords=il,Di.getFeature=Mo,Di.asFeature=rl,ut.mergeOptions({boxZoom:!0});var Mp=_i.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){Ye(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Mt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ht(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ns(),mc(),this._startPoint=this._map.mouseEventToContainerPoint(r),Ye(document,{contextmenu:Hr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=be("div","leaflet-zoom-box",this._container),ze(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var s=new ce(this._point,this._startPoint),u=s.getSize();Ht(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(ht(this._box),Tt(this._container,"leaflet-crosshair")),Us(),_c(),Mt(document,{contextmenu:Hr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new He(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ut.addInitHook("addHandler","boxZoom",Mp),ut.mergeOptions({doubleClickZoom:!0});var Ep=_i.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var s=this._map,u=s.getZoom(),f=s.options.zoomDelta,v=r.originalEvent.shiftKey?u-f:u+f;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(r.containerPoint,v)}});ut.addInitHook("addHandler","doubleClickZoom",Ep),ut.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var wp=_i.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new tr(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}ze(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Tt(this._map._container,"leaflet-grab"),Tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Y(this._map.options.maxBounds);this._offsetLimit=Ce(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,s){return r-(r-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;r.x<s.min.x&&(r.x=this._viscousLimit(r.x,s.min.x)),r.y<s.min.y&&(r.y=this._viscousLimit(r.y,s.min.y)),r.x>s.max.x&&(r.x=this._viscousLimit(r.x,s.max.x)),r.y>s.max.y&&(r.y=this._viscousLimit(r.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,s=Math.round(r/2),u=this._initialWorldOffset,f=this._draggable._newPos.x,v=(f-s+u)%r+s-u,T=(f+s+u)%r-s-u,O=Math.abs(v+u)<Math.abs(T+u)?v:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(r){var s=this._map,u=s.options,f=!u.inertia||r.noInertia||this._times.length<2;if(s.fire("dragend",r),f)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,O=u.easeLinearity,W=v.multiplyBy(O/T),q=W.distanceTo([0,0]),ue=Math.min(u.inertiaMaxSpeed,q),Ae=W.multiplyBy(ue/q),Be=ue/(u.inertiaDeceleration*O),rt=Ae.multiplyBy(-Be/2).round();!rt.x&&!rt.y?s.fire("moveend"):(rt=s._limitOffset(rt,s.options.maxBounds),F(function(){s.panBy(rt,{duration:Be,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});ut.addInitHook("addHandler","dragging",wp),ut.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Tp=_i.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),Ye(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Mt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,s=document.documentElement,u=r.scrollTop||s.scrollTop,f=r.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(f,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var s=this._panKeys={},u=this.keyCodes,f,v;for(f=0,v=u.left.length;f<v;f++)s[u.left[f]]=[-1*r,0];for(f=0,v=u.right.length;f<v;f++)s[u.right[f]]=[r,0];for(f=0,v=u.down.length;f<v;f++)s[u.down[f]]=[0,r];for(f=0,v=u.up.length;f<v;f++)s[u.up[f]]=[0,-1*r]},_setZoomDelta:function(r){var s=this._zoomKeys={},u=this.keyCodes,f,v;for(f=0,v=u.zoomIn.length;f<v;f++)s[u.zoomIn[f]]=r;for(f=0,v=u.zoomOut.length;f<v;f++)s[u.zoomOut[f]]=-r},_addHooks:function(){Ye(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Mt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var s=r.keyCode,u=this._map,f;if(s in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(f=this._panKeys[s],r.shiftKey&&(f=j(f).multiplyBy(3)),u.options.maxBounds&&(f=u._limitOffset(j(f),u.options.maxBounds)),u.options.worldCopyJump){var v=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(f)));u.panTo(v)}else u.panBy(f)}else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;Hr(r)}}});ut.addInitHook("addHandler","keyboard",Tp),ut.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ap=_i.extend({addHooks:function(){Ye(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Mt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var s=Kd(r),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var f=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),Hr(r)},_performZoom:function(){var r=this._map,s=r.getZoom(),u=this._map.options.zoomSnap||0;r._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,T=u?Math.ceil(v/u)*u:v,O=r._limitZoom(s+(this._delta>0?T:-T))-s;this._delta=0,this._startTime=null,O&&(r.options.scrollWheelZoom==="center"?r.setZoom(s+O):r.setZoomAround(this._lastMousePos,s+O))}});ut.addInitHook("addHandler","scrollWheelZoom",Ap);var Bx=600;ut.mergeOptions({tapHold:De.touchNative&&De.safari&&De.mobile,tapTolerance:15});var Cp=_i.extend({addHooks:function(){Ye(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Mt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var s=r.touches[0];this._startPos=this._newPos=new U(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(Ye(document,"touchend",tn),Ye(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Bx),Ye(document,"touchend touchcancel contextmenu",this._cancel,this),Ye(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){Mt(document,"touchend",tn),Mt(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),Mt(document,"touchend touchcancel contextmenu",this._cancel,this),Mt(document,"touchmove",this._onMove,this)},_onMove:function(r){var s=r.touches[0];this._newPos=new U(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,s){var u=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});u._simulated=!0,s.target.dispatchEvent(u)}});ut.addInitHook("addHandler","tapHold",Cp),ut.mergeOptions({touchZoom:De.touch,bounceAtZoomLimits:!0});var Pp=_i.extend({addHooks:function(){ze(this._map._container,"leaflet-touch-zoom"),Ye(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Tt(this._map._container,"leaflet-touch-zoom"),Mt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var s=this._map;if(!(!r.touches||r.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(r.touches[0]),f=s.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(f)._divideBy(2))),this._startDist=u.distanceTo(f),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),Ye(document,"touchmove",this._onTouchMove,this),Ye(document,"touchend touchcancel",this._onTouchEnd,this),tn(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(r.touches[0]),f=s.mouseEventToContainerPoint(r.touches[1]),v=u.distanceTo(f)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var T=u._add(f)._divideBy(2)._subtract(this._centerPoint);if(v===1&&T.x===0&&T.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),J(this._animRequest);var O=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(O,this,!0),tn(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,J(this._animRequest),Mt(document,"touchmove",this._onTouchMove,this),Mt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ut.addInitHook("addHandler","touchZoom",Pp),ut.BoxZoom=Mp,ut.DoubleClickZoom=Ep,ut.Drag=wp,ut.Keyboard=Tp,ut.ScrollWheelZoom=Ap,ut.TapHold=Cp,ut.TouchZoom=Pp,n.Bounds=ce,n.Browser=De,n.CRS=_e,n.Canvas=vp,n.Circle=bc,n.CircleMarker=el,n.Class=ie,n.Control=ti,n.DivIcon=mp,n.DivOverlay=gi,n.DomEvent=rx,n.DomUtil=nx,n.Draggable=tr,n.Evented=ae,n.FeatureGroup=bi,n.GeoJSON=Di,n.GridLayer=Hs,n.Handler=_i,n.Icon=yo,n.ImageOverlay=ol,n.LatLng=te,n.LatLngBounds=He,n.Layer=ni,n.LayerGroup=xo,n.LineUtil=gx,n.Map=ut,n.Marker=Ja,n.Mixin=hx,n.Path=nr,n.Point=U,n.PolyUtil=fx,n.Polygon=So,n.Polyline=Ii,n.Popup=sl,n.PosAnimation=$d,n.Projection=vx,n.Rectangle=Sp,n.Renderer=Ni,n.SVG=Gs,n.SVGOverlay=pp,n.TileLayer=Eo,n.Tooltip=al,n.Transformation=H,n.Util=Q,n.VideoOverlay=dp,n.bind=l,n.bounds=Ce,n.canvas=xp,n.circle=Ax,n.circleMarker=Tx,n.control=ks,n.divIcon=Ux,n.extend=o,n.featureGroup=Mx,n.geoJSON=fp,n.geoJson=Rx,n.gridLayer=Ox,n.icon=Ex,n.imageOverlay=Lx,n.latLng=le,n.latLngBounds=Y,n.layerGroup=Sx,n.map=ox,n.marker=wx,n.point=j,n.polygon=Px,n.polyline=Cx,n.popup=Dx,n.rectangle=zx,n.setOptions=w,n.stamp=h,n.svg=yp,n.svgOverlay=Ix,n.tileLayer=_p,n.tooltip=Nx,n.transformation=Qe,n.version=i,n.videoOverlay=bx;var Hx=window.L;n.noConflict=function(){return window.L=Hx,this},window.L=n})})(Uf,Uf.exports);var Ba=Uf.exports;function sc(t,e,n){return Object.freeze({instance:t,context:e,container:n})}function ac(t,e){return e==null?function(i,o){const a=nt.useRef();return a.current||(a.current=t(i,o)),a}:function(i,o){const a=nt.useRef();a.current||(a.current=t(i,o));const l=nt.useRef(i),{instance:c}=a.current;return nt.useEffect(function(){l.current!==i&&(e(c,i,l.current),l.current=i)},[c,i,o]),a}}function T0(t,e){nt.useEffect(function(){return(e.layerContainer??e.map).addLayer(t.instance),function(){var a;(a=e.layerContainer)==null||a.removeLayer(t.instance),e.map.removeLayer(t.instance)}},[e,t])}function A0(t){return function(n){const i=zd(),o=t(oc(n,i),i);return y0(i.map,n.attribution),Bd(o.current,n.eventHandlers),T0(o.current,i),o}}function NM(t,e){const n=nt.useRef();nt.useEffect(function(){if(e.pathOptions!==n.current){const o=e.pathOptions??{};t.instance.setStyle(o),n.current=o}},[t,e])}function UM(t){return function(n){const i=zd(),o=t(oc(n,i),i);return Bd(o.current,n.eventHandlers),T0(o.current,i),NM(o.current,n),o}}function OM(t,e){const n=ac(t,e),i=A0(n);return w0(i)}function FM(t,e){const n=ac(t),i=DM(n,e);return bM(i)}function kM(t,e){const n=ac(t,e),i=UM(n);return w0(i)}function zM(t,e){const n=ac(t,e),i=A0(n);return IM(i)}function BM(t,e,n){const{opacity:i,zIndex:o}=e;i!=null&&i!==n.opacity&&t.setOpacity(i),o!=null&&o!==n.zIndex&&t.setZIndex(o)}function Of(){return Of=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Of.apply(this,arguments)}function HM({bounds:t,boundsOptions:e,center:n,children:i,className:o,id:a,placeholder:l,style:c,whenReady:h,zoom:d,...m},g){const[_]=nt.useState({className:o,id:a,style:c}),[x,E]=nt.useState(null);nt.useImperativeHandle(g,()=>(x==null?void 0:x.map)??null,[x]);const w=nt.useCallback(p=>{if(p!==null&&x===null){const M=new Ba.Map(p,m);n!=null&&d!=null?M.setView(n,d):t!=null&&M.fitBounds(t,e),h!=null&&M.whenReady(h),E(LM(M))}},[]);nt.useEffect(()=>()=>{x==null||x.map.remove()},[x]);const y=x?hu.createElement(E0,{value:x},i):l??null;return hu.createElement("div",Of({},_,{ref:w}),y)}const VM=nt.forwardRef(HM),GM=OM(function({position:e,...n},i){const o=new Ba.Marker(e,n);return sc(o,S0(i,{overlayContainer:o}))},function(e,n,i){n.position!==i.position&&e.setLatLng(n.position),n.icon!=null&&n.icon!==i.icon&&e.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==i.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==i.opacity&&e.setOpacity(n.opacity),e.dragging!=null&&n.draggable!==i.draggable&&(n.draggable===!0?e.dragging.enable():e.dragging.disable())}),WM=kM(function({positions:e,...n},i){const o=new Ba.Polyline(e,n);return sc(o,S0(i,{overlayContainer:o}))},function(e,n,i){n.positions!==i.positions&&e.setLatLngs(n.positions)}),XM=FM(function(e,n){const i=new Ba.Popup(e,n.overlayContainer);return sc(i,n)},function(e,n,{position:i},o){nt.useEffect(function(){const{instance:l}=e;function c(d){d.popup===l&&(l.update(),o(!0))}function h(d){d.popup===l&&o(!1)}return n.map.on({popupopen:c,popupclose:h}),n.overlayContainer==null?(i!=null&&l.setLatLng(i),l.openOn(n.map)):n.overlayContainer.bindPopup(l),function(){var m;n.map.off({popupopen:c,popupclose:h}),(m=n.overlayContainer)==null||m.unbindPopup(),n.map.removeLayer(l)}},[e,n,o,i])}),ZM=zM(function({url:e,...n},i){const o=new Ba.TileLayer(e,oc(n,i));return sc(o,i)},function(e,n,i){BM(e,n,i);const{url:o}=n;o!=null&&o!==i.url&&e.setUrl(o)}),aa=[{id:1,name:"Contract Software Engineer",position:[12.9292731,77.5824229],info:"Designed and developed high-performance cross-platform applications, optimizing responsiveness and user experience. Collaborated with clients to gather requirements and translate business needs into effective technical solutions. Developed and integrated RESTful APIs to enhance functionality and system interoperability. Utilized Git for project management and collaboration, ensuring seamless version control and code integrity. Conducted code reviews, providing feedback to maintain high-quality standards and foster continuous improvement."},{id:2,name:"Software Development Engineer",position:[12.924695,77.6012962],info:"Supported and enhanced multi-platform applications (desktop, Android, iOS) using .NET and MVVM architecture, improving maintainability and user experience for a diverse client base. Developed a cross-platform tool using dependency injection, which reduced project switching time by 30% and boosted developer productivity. Performed bug fixes and feature updates in .NET applications to enhance system stability and performance. Collaborated with UI/UX teams to integrate new design assets using XAML, localization, and data binding within the MVVM framework. Optimized Cake build scripts for automated binary deployments into private containers, improving release efficiency. Resolved 4-5 critical issues and numerous bug fixes during reduced team availability, ensuring continued progress and adherence to project timelines."},{id:3,name:"AI Engineering Intern",position:[43.0826188,-73.7853522],info:`
      - **Developed and Optimized AI Models**: Contributed to the development and fine-tuning of machine learning models, achieving up to 84.5% accuracy in predictive tasks.
      - **Enhanced Data Handling**: Utilized Python for data preprocessing and analysis, significantly improving data quality and model performance with a reduction in data processing time by X%.
      - **Implemented Model Deployment**: Assisted in deploying machine learning models using AWS and Docker, facilitating scalable and efficient solutions with minimal downtime.
      - **Algorithm Improvement**: Optimized algorithms, leading to performance enhancements and achieving model accuracy improvements ranging between 85% to 100%.
      - **Collaborative Agile Environment**: Actively participated in Agile sprints and team meetings, contributing to timely project delivery and fostering effective cross-functional collaboration.
    `}],jM=[[aa[0].position,aa[1].position],[aa[1].position,aa[2].position]],qM=()=>{const[t,e]=nt.useState(null);return xe.jsx("div",{className:"relative flex flex-col min-h-screen bg-black rounded",children:xe.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50",children:[xe.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-bold text-center p-4 md:p-8 text-white",children:"WORK EXPERIENCE"}),xe.jsx("div",{className:"flex-1",children:xe.jsxs(VM,{center:[12.924695,77.6012962],zoom:50,style:{height:"calc(100vh - 80px)",width:"100%"},children:[xe.jsx(ZM,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),aa.map(n=>xe.jsx(GM,{position:n.position,eventHandlers:{click:()=>{e(n)}},children:xe.jsxs(XM,{children:[xe.jsx("h2",{className:"text-xl font-semibold",children:n.name}),xe.jsxs("div",{className:"bg-white p-2 rounded-lg shadow-md",children:[xe.jsx("p",{className:"text-sm",children:n.info}),xe.jsx("p",{className:"text-xs text-gray-600",children:"Contact me to know more."})]})]})},n.id)),jM.map((n,i)=>xe.jsx(WM,{positions:n,color:"blue"},i))]})}),t&&xe.jsxs("div",{className:"absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg md:max-w-lg md:left-1/2 md:-translate-x-1/2 rounded-t-lg",children:[xe.jsx("h2",{className:"text-xl font-semibold",children:t.name}),xe.jsxs("div",{className:"bg-gray-100 p-2 rounded-lg shadow-md",children:[xe.jsx("p",{className:"text-sm",children:t.info}),xe.jsx("p",{className:"text-xs text-gray-600",children:"Click on the map to explore more"})]})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="165",YM=0,Hm=1,KM=2,C0=1,$M=2,Bi=3,Lr=0,In=1,Gi=2,Ar=0,ls=1,Vm=2,Gm=3,Wm=4,QM=5,Jr=100,JM=101,eE=102,tE=103,nE=104,iE=200,rE=201,oE=202,sE=203,Ff=204,kf=205,aE=206,lE=207,uE=208,cE=209,hE=210,fE=211,dE=212,pE=213,mE=214,_E=0,gE=1,vE=2,Ou=3,xE=4,yE=5,SE=6,ME=7,P0=0,EE=1,wE=2,Cr=0,TE=1,AE=2,CE=3,PE=4,RE=5,LE=6,bE=7,R0=300,vs=301,xs=302,zf=303,Bf=304,lc=306,Hf=1e3,ro=1001,Vf=1002,$n=1003,IE=1004,Rl=1005,ci=1006,lh=1007,oo=1008,br=1009,DE=1010,NE=1011,Fu=1012,L0=1013,ys=1014,gr=1015,uc=1016,b0=1017,I0=1018,Ss=1020,UE=35902,OE=1021,FE=1022,wi=1023,kE=1024,zE=1025,us=1026,Ms=1027,BE=1028,D0=1029,HE=1030,N0=1031,U0=1033,uh=33776,ch=33777,hh=33778,fh=33779,Xm=35840,Zm=35841,jm=35842,qm=35843,Ym=36196,Km=37492,$m=37496,Qm=37808,Jm=37809,e_=37810,t_=37811,n_=37812,i_=37813,r_=37814,o_=37815,s_=37816,a_=37817,l_=37818,u_=37819,c_=37820,h_=37821,dh=36492,f_=36494,d_=36495,VE=36283,p_=36284,m_=36285,__=36286,GE=3200,WE=3201,XE=0,ZE=1,pr="",yi="srgb",Or="srgb-linear",Vd="display-p3",cc="display-p3-linear",ku="linear",Ct="srgb",zu="rec709",Bu="p3",Ao=7680,g_=519,jE=512,qE=513,YE=514,O0=515,KE=516,$E=517,QE=518,JE=519,v_=35044,x_="300 es",Zi=2e3,Hu=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,l=o.length;a<l;a++)o[a].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Gf=180/Math.PI;function Ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Cn(t,e,n){return Math.max(e,Math.min(n,t))}function ew(t,e){return(t%e+e)%e}function mh(t,e,n){return(1-n)*t+n*e}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6],this.y=o[1]*n+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),o=Math.sin(n),a=this.x-e.x,l=this.y-e.y;return this.x=a*i-l*o+e.x,this.y=a*o+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,o,a,l,c,h,d){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,o,a,l,c,h,d)}set(e,n,i,o,a,l,c,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=n,m[4]=a,m[5]=h,m[6]=i,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,o=n.elements,a=this.elements,l=i[0],c=i[3],h=i[6],d=i[1],m=i[4],g=i[7],_=i[2],x=i[5],E=i[8],w=o[0],y=o[3],p=o[6],M=o[1],S=o[4],R=o[7],k=o[2],D=o[5],I=o[8];return a[0]=l*w+c*M+h*k,a[3]=l*y+c*S+h*D,a[6]=l*p+c*R+h*I,a[1]=d*w+m*M+g*k,a[4]=d*y+m*S+g*D,a[7]=d*p+m*R+g*I,a[2]=_*w+x*M+E*k,a[5]=_*y+x*S+E*D,a[8]=_*p+x*R+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8];return n*l*m-n*c*d-i*a*m+i*c*h+o*a*d-o*l*h}invert(){const e=this.elements,n=e[0],i=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],g=m*l-c*d,_=c*h-m*a,x=d*a-l*h,E=n*g+i*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(o*d-m*i)*w,e[2]=(c*i-o*l)*w,e[3]=_*w,e[4]=(m*n-o*h)*w,e[5]=(o*a-c*n)*w,e[6]=x*w,e[7]=(i*h-d*n)*w,e[8]=(l*n-i*a)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,o,a,l,c){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*l+d*c)+l+e,-o*d,o*h,-o*(-d*l+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(_h.makeScale(e,n)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,n){return this.premultiply(_h.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let o=0;o<9;o++)if(n[o]!==i[o])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new et;function F0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tw(){const t=Vu("canvas");return t.style.display="block",t}const y_={};function k0(t){t in y_||(y_[t]=!0,console.warn(t))}function nw(t,e,n){return new Promise(function(i,o){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const S_=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),M_=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[Or]:{transfer:ku,primaries:zu,toReference:t=>t,fromReference:t=>t},[yi]:{transfer:Ct,primaries:zu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cc]:{transfer:ku,primaries:Bu,toReference:t=>t.applyMatrix3(M_),fromReference:t=>t.applyMatrix3(S_)},[Vd]:{transfer:Ct,primaries:Bu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(M_),fromReference:t=>t.applyMatrix3(S_).convertLinearToSRGB()}},iw=new Set([Or,cc]),gt={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ll[e].toReference,o=Ll[n].fromReference;return o(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ll[t].primaries},getTransfer:function(t){return t===pr?ku:Ll[t].transfer}};function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Co;class rw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Co===void 0&&(Co=Vu("canvas")),Co.width=e.width,Co.height=e.height;const i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Co}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let l=0;l<a.length;l++)a[l]=cs(a[l]/255)*255;return i.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ow=0;class z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let l=0,c=o.length;l<c;l++)o[l].isDataTexture?a.push(vh(o[l].image)):a.push(vh(o[l]))}else a=vh(o);i.url=a}return n||(e.images[this.uuid]=i),i}}function vh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sw=0;class Dn extends Cs{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,i=ro,o=ro,a=ci,l=oo,c=wi,h=br,d=Dn.DEFAULT_ANISOTROPY,m=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Ha(),this.name="",this.source=new z0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hf:e.x=e.x-Math.floor(e.x);break;case ro:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hf:e.y=e.y-Math.floor(e.y);break;case ro:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=R0;Dn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,i=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,o){return this.x=e,this.y=n,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,o=this.z,a=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*o+l[12]*a,this.y=l[1]*n+l[5]*i+l[9]*o+l[13]*a,this.z=l[2]*n+l[6]*i+l[10]*o+l[14]*a,this.w=l[3]*n+l[7]*i+l[11]*o+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,o,a;const h=e.elements,d=h[0],m=h[4],g=h[8],_=h[1],x=h[5],E=h[9],w=h[2],y=h[6],p=h[10];if(Math.abs(m-_)<.01&&Math.abs(g-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+w)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,R=(x+1)/2,k=(p+1)/2,D=(m+_)/4,I=(g+w)/4,B=(E+y)/4;return S>R&&S>k?S<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(S),o=D/i,a=I/i):R>k?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=D/o,a=B/o):k<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(k),i=I/a,o=B/a),this.set(i,o,a,n),this}let M=Math.sqrt((y-E)*(y-E)+(g-w)*(g-w)+(_-m)*(_-m));return Math.abs(M)<.001&&(M=1),this.x=(y-E)/M,this.y=(g-w)/M,this.z=(_-m)/M,this.w=Math.acos((d+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aw extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const o={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Dn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new z0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends aw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B0 extends Dn{constructor(e=null,n=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ro,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lw extends Dn{constructor(e=null,n=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ro,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,n=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=o}static slerpFlat(e,n,i,o,a,l,c){let h=i[o+0],d=i[o+1],m=i[o+2],g=i[o+3];const _=a[l+0],x=a[l+1],E=a[l+2],w=a[l+3];if(c===0){e[n+0]=h,e[n+1]=d,e[n+2]=m,e[n+3]=g;return}if(c===1){e[n+0]=_,e[n+1]=x,e[n+2]=E,e[n+3]=w;return}if(g!==w||h!==_||d!==x||m!==E){let y=1-c;const p=h*_+d*x+m*E+g*w,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const k=Math.sqrt(S),D=Math.atan2(k,p*M);y=Math.sin(y*D)/k,c=Math.sin(c*D)/k}const R=c*M;if(h=h*y+_*R,d=d*y+x*R,m=m*y+E*R,g=g*y+w*R,y===1-c){const k=1/Math.sqrt(h*h+d*d+m*m+g*g);h*=k,d*=k,m*=k,g*=k}}e[n]=h,e[n+1]=d,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,o,a,l){const c=i[o],h=i[o+1],d=i[o+2],m=i[o+3],g=a[l],_=a[l+1],x=a[l+2],E=a[l+3];return e[n]=c*E+m*g+h*x-d*_,e[n+1]=h*E+m*_+d*g-c*x,e[n+2]=d*E+m*x+c*_-h*g,e[n+3]=m*E-c*g-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,o){return this._x=e,this._y=n,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,o=e._y,a=e._z,l=e._order,c=Math.cos,h=Math.sin,d=c(i/2),m=c(o/2),g=c(a/2),_=h(i/2),x=h(o/2),E=h(a/2);switch(l){case"XYZ":this._x=_*m*g+d*x*E,this._y=d*x*g-_*m*E,this._z=d*m*E+_*x*g,this._w=d*m*g-_*x*E;break;case"YXZ":this._x=_*m*g+d*x*E,this._y=d*x*g-_*m*E,this._z=d*m*E-_*x*g,this._w=d*m*g+_*x*E;break;case"ZXY":this._x=_*m*g-d*x*E,this._y=d*x*g+_*m*E,this._z=d*m*E+_*x*g,this._w=d*m*g-_*x*E;break;case"ZYX":this._x=_*m*g-d*x*E,this._y=d*x*g+_*m*E,this._z=d*m*E-_*x*g,this._w=d*m*g+_*x*E;break;case"YZX":this._x=_*m*g+d*x*E,this._y=d*x*g+_*m*E,this._z=d*m*E-_*x*g,this._w=d*m*g-_*x*E;break;case"XZY":this._x=_*m*g-d*x*E,this._y=d*x*g-_*m*E,this._z=d*m*E+_*x*g,this._w=d*m*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],m=n[6],g=n[10],_=i+c+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-h)*x,this._y=(a-d)*x,this._z=(l-o)*x}else if(i>c&&i>g){const x=2*Math.sqrt(1+i-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(o+l)/x,this._z=(a+d)/x}else if(c>g){const x=2*Math.sqrt(1+c-i-g);this._w=(a-d)/x,this._x=(o+l)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-i-c);this._w=(l-o)/x,this._x=(a+d)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,n/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,o=e._y,a=e._z,l=e._w,c=n._x,h=n._y,d=n._z,m=n._w;return this._x=i*m+l*c+o*d-a*h,this._y=o*m+l*h+a*c-i*d,this._z=a*m+l*d+i*h-o*c,this._w=l*m-i*c-o*h-a*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,l=this._w;let c=l*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=i,this._y=o,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*o+n*this._y,this._z=x*a+n*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,c),g=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=o*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(E_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(E_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*o,this.y=a[1]*n+a[4]*i+a[7]*o,this.z=a[2]*n+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,o=this.z,a=e.elements,l=1/(a[3]*n+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*o+a[12])*l,this.y=(a[1]*n+a[5]*i+a[9]*o+a[13])*l,this.z=(a[2]*n+a[6]*i+a[10]*o+a[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,o=this.z,a=e.x,l=e.y,c=e.z,h=e.w,d=2*(l*o-c*i),m=2*(c*n-a*o),g=2*(a*i-l*n);return this.x=n+h*d+l*g-c*m,this.y=i+h*m+c*d-a*g,this.z=o+h*g+a*m-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*o,this.y=a[1]*n+a[5]*i+a[9]*o,this.z=a[2]*n+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,o=e.y,a=e.z,l=n.x,c=n.y,h=n.z;return this.x=o*h-a*c,this.y=a*l-i*h,this.z=i*c-o*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return n*n+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const o=Math.sin(n)*e;return this.x=o*Math.sin(i),this.y=Math.cos(n)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new $,E_=new Va;class Ga{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,ri):ri.fromBufferAttribute(a,l),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let a=0,l=o.length;a<l;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Il.subVectors(this.max,Js),Po.subVectors(e.a,Js),Ro.subVectors(e.b,Js),Lo.subVectors(e.c,Js),rr.subVectors(Ro,Po),or.subVectors(Lo,Ro),Gr.subVectors(Po,Lo);let n=[0,-rr.z,rr.y,0,-or.z,or.y,0,-Gr.z,Gr.y,rr.z,0,-rr.x,or.z,0,-or.x,Gr.z,0,-Gr.x,-rr.y,rr.x,0,-or.y,or.x,0,-Gr.y,Gr.x,0];return!yh(n,Po,Ro,Lo,Il)||(n=[1,0,0,0,1,0,0,0,1],!yh(n,Po,Ro,Lo,Il))?!1:(Dl.crossVectors(rr,or),n=[Dl.x,Dl.y,Dl.z],yh(n,Po,Ro,Lo,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,bl=new Ga,Po=new $,Ro=new $,Lo=new $,rr=new $,or=new $,Gr=new $,Js=new $,Il=new $,Dl=new $,Wr=new $;function yh(t,e,n,i,o){for(let a=0,l=t.length-3;a<=l;a+=3){Wr.fromArray(t,a);const c=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),h=e.dot(Wr),d=n.dot(Wr),m=i.dot(Wr);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>c)return!1}return!0}const uw=new Ga,ea=new $,Sh=new $;class Gd{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uw.setFromPoints(e).getCenter(i);let o=0;for(let a=0,l=e.length;a<l;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),o=(i-this.radius)*.5;this.center.addScaledVector(ea,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Sh)),this.expandByPoint(ea.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new $,Mh=new $,Nl=new $,sr=new $,Eh=new $,Ul=new $,wh=new $;class cw{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,o){Mh.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Mh);const a=e.distanceTo(n)*.5,l=-this.direction.dot(Nl),c=sr.dot(this.direction),h=-sr.dot(Nl),d=sr.lengthSq(),m=Math.abs(1-l*l);let g,_,x,E;if(m>0)if(g=l*h-c,_=l*c-h,E=a*m,g>=0)if(_>=-E)if(_<=E){const w=1/m;g*=w,_*=w,x=g*(g+l*_+2*c)+_*(l*g+_+2*h)+d}else _=a,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;else _=-a,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;else _<=-E?(g=Math.max(0,-(-l*a+c)),_=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+_*(_+2*h)+d):_<=E?(g=0,_=Math.min(Math.max(-a,-h),a),x=_*(_+2*h)+d):(g=Math.max(0,-(l*a+c)),_=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+_*(_+2*h)+d);else _=l>0?-a:a,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Mh).addScaledVector(Nl,_),x}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),o=Oi.dot(Oi)-i*i,a=e.radius*e.radius;if(o>a)return null;const l=Math.sqrt(a-o),c=i-l,h=i+l;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,o,a,l,c,h;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,o=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,o=(e.min.x-_.x)*d),m>=0?(a=(e.min.y-_.y)*m,l=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,l=(e.min.y-_.y)*m),i>l||a>o||((a>i||isNaN(i))&&(i=a),(l<o||isNaN(o))&&(o=l),g>=0?(c=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),i>h||c>o)||((c>i||i!==i)&&(i=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,o,a){Eh.subVectors(n,e),Ul.subVectors(i,e),wh.crossVectors(Eh,Ul);let l=this.direction.dot(wh),c;if(l>0){if(o)return null;c=1}else if(l<0)c=-1,l=-l;else return null;sr.subVectors(this.origin,e);const h=c*this.direction.dot(Ul.crossVectors(sr,Ul));if(h<0)return null;const d=c*this.direction.dot(Eh.cross(sr));if(d<0||h+d>l)return null;const m=-c*sr.dot(wh);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,o,a,l,c,h,d,m,g,_,x,E,w,y){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,o,a,l,c,h,d,m,g,_,x,E,w,y)}set(e,n,i,o,a,l,c,h,d,m,g,_,x,E,w,y){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=o,p[1]=a,p[5]=l,p[9]=c,p[13]=h,p[2]=d,p[6]=m,p[10]=g,p[14]=_,p[3]=x,p[7]=E,p[11]=w,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,o=1/bo.setFromMatrixColumn(e,0).length(),a=1/bo.setFromMatrixColumn(e,1).length(),l=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*o,n[1]=i[1]*o,n[2]=i[2]*o,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,o=e.y,a=e.z,l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=l*m,x=l*g,E=c*m,w=c*g;n[0]=h*m,n[4]=-h*g,n[8]=d,n[1]=x+E*d,n[5]=_-w*d,n[9]=-c*h,n[2]=w-_*d,n[6]=E+x*d,n[10]=l*h}else if(e.order==="YXZ"){const _=h*m,x=h*g,E=d*m,w=d*g;n[0]=_+w*c,n[4]=E*c-x,n[8]=l*d,n[1]=l*g,n[5]=l*m,n[9]=-c,n[2]=x*c-E,n[6]=w+_*c,n[10]=l*h}else if(e.order==="ZXY"){const _=h*m,x=h*g,E=d*m,w=d*g;n[0]=_-w*c,n[4]=-l*g,n[8]=E+x*c,n[1]=x+E*c,n[5]=l*m,n[9]=w-_*c,n[2]=-l*d,n[6]=c,n[10]=l*h}else if(e.order==="ZYX"){const _=l*m,x=l*g,E=c*m,w=c*g;n[0]=h*m,n[4]=E*d-x,n[8]=_*d+w,n[1]=h*g,n[5]=w*d+_,n[9]=x*d-E,n[2]=-d,n[6]=c*h,n[10]=l*h}else if(e.order==="YZX"){const _=l*h,x=l*d,E=c*h,w=c*d;n[0]=h*m,n[4]=w-_*g,n[8]=E*g+x,n[1]=g,n[5]=l*m,n[9]=-c*m,n[2]=-d*m,n[6]=x*g+E,n[10]=_-w*g}else if(e.order==="XZY"){const _=l*h,x=l*d,E=c*h,w=c*d;n[0]=h*m,n[4]=-g,n[8]=d*m,n[1]=_*g+w,n[5]=l*m,n[9]=x*g-E,n[2]=E*g-x,n[6]=c*m,n[10]=w*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hw,e,fw)}lookAt(e,n,i){const o=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ar.crossVectors(i,Nn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ar.crossVectors(i,Nn)),ar.normalize(),Ol.crossVectors(Nn,ar),o[0]=ar.x,o[4]=Ol.x,o[8]=Nn.x,o[1]=ar.y,o[5]=Ol.y,o[9]=Nn.y,o[2]=ar.z,o[6]=Ol.z,o[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,o=n.elements,a=this.elements,l=i[0],c=i[4],h=i[8],d=i[12],m=i[1],g=i[5],_=i[9],x=i[13],E=i[2],w=i[6],y=i[10],p=i[14],M=i[3],S=i[7],R=i[11],k=i[15],D=o[0],I=o[4],B=o[8],b=o[12],A=o[1],F=o[5],J=o[9],Q=o[13],ie=o[2],se=o[6],ee=o[10],ae=o[14],U=o[3],re=o[7],j=o[11],ce=o[15];return a[0]=l*D+c*A+h*ie+d*U,a[4]=l*I+c*F+h*se+d*re,a[8]=l*B+c*J+h*ee+d*j,a[12]=l*b+c*Q+h*ae+d*ce,a[1]=m*D+g*A+_*ie+x*U,a[5]=m*I+g*F+_*se+x*re,a[9]=m*B+g*J+_*ee+x*j,a[13]=m*b+g*Q+_*ae+x*ce,a[2]=E*D+w*A+y*ie+p*U,a[6]=E*I+w*F+y*se+p*re,a[10]=E*B+w*J+y*ee+p*j,a[14]=E*b+w*Q+y*ae+p*ce,a[3]=M*D+S*A+R*ie+k*U,a[7]=M*I+S*F+R*se+k*re,a[11]=M*B+S*J+R*ee+k*j,a[15]=M*b+S*Q+R*ae+k*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],o=e[8],a=e[12],l=e[1],c=e[5],h=e[9],d=e[13],m=e[2],g=e[6],_=e[10],x=e[14],E=e[3],w=e[7],y=e[11],p=e[15];return E*(+a*h*g-o*d*g-a*c*_+i*d*_+o*c*x-i*h*x)+w*(+n*h*x-n*d*_+a*l*_-o*l*x+o*d*m-a*h*m)+y*(+n*d*g-n*c*x-a*l*g+i*l*x+a*c*m-i*d*m)+p*(-o*c*m-n*h*g+n*c*_+o*l*g-i*l*_+i*h*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],g=e[9],_=e[10],x=e[11],E=e[12],w=e[13],y=e[14],p=e[15],M=g*y*d-w*_*d+w*h*x-c*y*x-g*h*p+c*_*p,S=E*_*d-m*y*d-E*h*x+l*y*x+m*h*p-l*_*p,R=m*w*d-E*g*d+E*c*x-l*w*x-m*c*p+l*g*p,k=E*g*h-m*w*h-E*c*_+l*w*_+m*c*y-l*g*y,D=n*M+i*S+o*R+a*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=M*I,e[1]=(w*_*a-g*y*a-w*o*x+i*y*x+g*o*p-i*_*p)*I,e[2]=(c*y*a-w*h*a+w*o*d-i*y*d-c*o*p+i*h*p)*I,e[3]=(g*h*a-c*_*a-g*o*d+i*_*d+c*o*x-i*h*x)*I,e[4]=S*I,e[5]=(m*y*a-E*_*a+E*o*x-n*y*x-m*o*p+n*_*p)*I,e[6]=(E*h*a-l*y*a-E*o*d+n*y*d+l*o*p-n*h*p)*I,e[7]=(l*_*a-m*h*a+m*o*d-n*_*d-l*o*x+n*h*x)*I,e[8]=R*I,e[9]=(E*g*a-m*w*a-E*i*x+n*w*x+m*i*p-n*g*p)*I,e[10]=(l*w*a-E*c*a+E*i*d-n*w*d-l*i*p+n*c*p)*I,e[11]=(m*c*a-l*g*a-m*i*d+n*g*d+l*i*x-n*c*x)*I,e[12]=k*I,e[13]=(m*w*o-E*g*o+E*i*_-n*w*_-m*i*y+n*g*y)*I,e[14]=(E*c*o-l*w*o-E*i*h+n*w*h+l*i*y-n*c*y)*I,e[15]=(l*g*o-m*c*o+m*i*h-n*g*h-l*i*_+n*c*_)*I,this}scale(e){const n=this.elements,i=e.x,o=e.y,a=e.z;return n[0]*=i,n[4]*=o,n[8]*=a,n[1]*=i,n[5]*=o,n[9]*=a,n[2]*=i,n[6]*=o,n[10]*=a,n[3]*=i,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,o))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),o=Math.sin(n),a=1-i,l=e.x,c=e.y,h=e.z,d=a*l,m=a*c;return this.set(d*l+i,d*c-o*h,d*h+o*c,0,d*c+o*h,m*c+i,m*h-o*l,0,d*h-o*c,m*h+o*l,a*h*h+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,o,a,l){return this.set(1,i,a,0,e,1,l,0,n,o,1,0,0,0,0,1),this}compose(e,n,i){const o=this.elements,a=n._x,l=n._y,c=n._z,h=n._w,d=a+a,m=l+l,g=c+c,_=a*d,x=a*m,E=a*g,w=l*m,y=l*g,p=c*g,M=h*d,S=h*m,R=h*g,k=i.x,D=i.y,I=i.z;return o[0]=(1-(w+p))*k,o[1]=(x+R)*k,o[2]=(E-S)*k,o[3]=0,o[4]=(x-R)*D,o[5]=(1-(_+p))*D,o[6]=(y+M)*D,o[7]=0,o[8]=(E+S)*I,o[9]=(y-M)*I,o[10]=(1-(_+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,i){const o=this.elements;let a=bo.set(o[0],o[1],o[2]).length();const l=bo.set(o[4],o[5],o[6]).length(),c=bo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const d=1/a,m=1/l,g=1/c;return oi.elements[0]*=d,oi.elements[1]*=d,oi.elements[2]*=d,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,n.setFromRotationMatrix(oi),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,o,a,l,c=Zi){const h=this.elements,d=2*a/(n-e),m=2*a/(i-o),g=(n+e)/(n-e),_=(i+o)/(i-o);let x,E;if(c===Zi)x=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===Hu)x=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,i,o,a,l,c=Zi){const h=this.elements,d=1/(n-e),m=1/(i-o),g=1/(l-a),_=(n+e)*d,x=(i+o)*m;let E,w;if(c===Zi)E=(l+a)*g,w=-2*g;else if(c===Hu)E=a*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let o=0;o<16;o++)if(n[o]!==i[o])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new $,oi=new qt,hw=new $(0,0,0),fw=new $(1,1,1),ar=new $,Ol=new $,Nn=new $,w_=new qt,T_=new Va;class Qi{constructor(e=0,n=0,i=0,o=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,o=this._order){return this._x=e,this._y=n,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const o=e.elements,a=o[0],l=o[4],c=o[8],h=o[1],d=o[5],m=o[9],g=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Cn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return w_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T_.setFromEuler(this),this.setFromQuaternion(T_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dw=0;const A_=new $,Io=new Va,Fi=new qt,Fl=new $,ta=new $,pw=new $,mw=new Va,C_=new $(1,0,0),P_=new $(0,1,0),R_=new $(0,0,1),L_={type:"added"},_w={type:"removed"},Do={type:"childadded",child:null},Th={type:"childremoved",child:null};class zn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new $,n=new Qi,i=new Va,o=new $(1,1,1);function a(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new et}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Io.setFromAxisAngle(e,n),this.quaternion.multiply(Io),this}rotateOnWorldAxis(e,n){return Io.setFromAxisAngle(e,n),this.quaternion.premultiply(Io),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,n){return A_.copy(e).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ta,Fl,this.up):Fi.lookAt(Fl,ta,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),Io.setFromRotationMatrix(Fi),this.quaternion.premultiply(Io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_w),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,o=this.children.length;i<o;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const o=this.children;for(let a=0,l=o.length;a<l;a++)o[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,pw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,o=n.length;i<o;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let a=0,l=o.length;a<l;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(a(e.materials,this.material[h]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(a(e.animations,h))}}if(n){const c=l(e.geometries),h=l(e.materials),d=l(e.textures),m=l(e.images),g=l(e.shapes),_=l(e.skeletons),x=l(e.animations),E=l(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}zn.DEFAULT_UP=new $(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new $,ki=new $,Ah=new $,zi=new $,No=new $,Uo=new $,b_=new $,Ch=new $,Ph=new $,Rh=new $;class Ei{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,o){o.subVectors(i,n),si.subVectors(e,n),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,i,o,a){si.subVectors(o,n),ki.subVectors(i,n),Ah.subVectors(e,n);const l=si.dot(si),c=si.dot(ki),h=si.dot(Ah),d=ki.dot(ki),m=ki.dot(Ah),g=l*d-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(d*h-c*m)*_,E=(l*m-c*h)*_;return a.set(1-x-E,E,x)}static containsPoint(e,n,i,o){return this.getBarycoord(e,n,i,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,o,a,l,c,h){return this.getBarycoord(e,n,i,o,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,zi.x),h.addScaledVector(l,zi.y),h.addScaledVector(c,zi.z),h)}static isFrontFacing(e,n,i,o){return si.subVectors(i,n),ki.subVectors(e,n),si.cross(ki).dot(o)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,o){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,i,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,o,a){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,o,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,o=this.b,a=this.c;let l,c;No.subVectors(o,i),Uo.subVectors(a,i),Ch.subVectors(e,i);const h=No.dot(Ch),d=Uo.dot(Ch);if(h<=0&&d<=0)return n.copy(i);Ph.subVectors(e,o);const m=No.dot(Ph),g=Uo.dot(Ph);if(m>=0&&g<=m)return n.copy(o);const _=h*g-m*d;if(_<=0&&h>=0&&m<=0)return l=h/(h-m),n.copy(i).addScaledVector(No,l);Rh.subVectors(e,a);const x=No.dot(Rh),E=Uo.dot(Rh);if(E>=0&&x<=E)return n.copy(a);const w=x*d-h*E;if(w<=0&&d>=0&&E<=0)return c=d/(d-E),n.copy(i).addScaledVector(Uo,c);const y=m*E-x*g;if(y<=0&&g-m>=0&&x-E>=0)return b_.subVectors(a,o),c=(g-m)/(g-m+(x-E)),n.copy(o).addScaledVector(b_,c);const p=1/(y+w+_);return l=w*p,c=_*p,n.copy(i).addScaledVector(No,l).addScaledVector(Uo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Lh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class xt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,o=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,o),this}setHSL(e,n,i,o=gt.workingColorSpace){if(e=ew(e,1),n=Cn(n,0,1),i=Cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,l=2*i-a;this.r=Lh(l,a,e+1/3),this.g=Lh(l,a,e),this.b=Lh(l,a,e-1/3)}return gt.toWorkingColorSpace(this,o),this}setStyle(e,n=yi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=o[1],c=o[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yi){const i=V0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=gh(e.r),this.g=gh(e.g),this.b=gh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return gt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Cn(hn.r*255,0,255))*65536+Math.round(Cn(hn.g*255,0,255))*256+Math.round(Cn(hn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(hn.copy(this),n);const i=hn.r,o=hn.g,a=hn.b,l=Math.max(i,o,a),c=Math.min(i,o,a);let h,d;const m=(c+l)/2;if(c===l)h=0,d=0;else{const g=l-c;switch(d=m<=.5?g/(l+c):g/(2-l-c),l){case i:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-i)/g+2;break;case a:h=(i-o)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=yi){gt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,o=hn.b;return e!==yi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(kl);const i=mh(lr.h,kl.h,n),o=mh(lr.s,kl.s,n),a=mh(lr.l,kl.l,n);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*o,this.g=a[1]*n+a[4]*i+a[7]*o,this.b=a[2]*n+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new xt;xt.NAMES=V0;let gw=0;class hc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=ls,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=kf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ou,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==kf&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ou&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(n){const a=o(e.textures),l=o(e.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const o=n.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wd extends hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new $,zl=new _t;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=v_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return k0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zl.fromBufferAttribute(this,n),zl.applyMatrix3(e),this.setXY(n,zl.x,zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,o){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),o=Tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,n,i,o,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),o=Tn(o,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v_&&(e.usage=this.usage),e}}class G0 extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W0 extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lo extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vw=0;const Zn=new qt,bh=new zn,Oo=new $,Un=new Ga,na=new Ga,Qt=new $;class vo extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F0(e)?W0:G0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new et().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const n=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new lo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,o=n.length;i<o;i++){const a=n[i];Un.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];na.setFromBufferAttribute(c),this.morphTargetsRelative?(Qt.addVectors(Un.min,na.min),Un.expandByPoint(Qt),Qt.addVectors(Un.max,na.max),Un.expandByPoint(Qt)):(Un.expandByPoint(na.min),Un.expandByPoint(na.max))}Un.getCenter(i);let o=0;for(let a=0,l=e.count;a<l;a++)Qt.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(Qt));if(n)for(let a=0,l=n.length;a<l;a++){const c=n[a],h=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)Qt.fromBufferAttribute(c,d),h&&(Oo.fromBufferAttribute(e,d),Qt.add(Oo)),o=Math.max(o,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,o=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let B=0;B<i.count;B++)c[B]=new $,h[B]=new $;const d=new $,m=new $,g=new $,_=new _t,x=new _t,E=new _t,w=new $,y=new $;function p(B,b,A){d.fromBufferAttribute(i,B),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,A),_.fromBufferAttribute(a,B),x.fromBufferAttribute(a,b),E.fromBufferAttribute(a,A),m.sub(d),g.sub(d),x.sub(_),E.sub(_);const F=1/(x.x*E.y-E.x*x.y);isFinite(F)&&(w.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(F),y.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(F),c[B].add(w),c[b].add(w),c[A].add(w),h[B].add(y),h[b].add(y),h[A].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,b=M.length;B<b;++B){const A=M[B],F=A.start,J=A.count;for(let Q=F,ie=F+J;Q<ie;Q+=3)p(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const S=new $,R=new $,k=new $,D=new $;function I(B){k.fromBufferAttribute(o,B),D.copy(k);const b=c[B];S.copy(b),S.sub(k.multiplyScalar(k.dot(b))).normalize(),R.crossVectors(D,b);const F=R.dot(h[B])<0?-1:1;l.setXYZW(B,S.x,S.y,S.z,F)}for(let B=0,b=M.length;B<b;++B){const A=M[B],F=A.start,J=A.count;for(let Q=F,ie=F+J;Q<ie;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const o=new $,a=new $,l=new $,c=new $,h=new $,d=new $,m=new $,g=new $;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,E),a.fromBufferAttribute(n,w),l.fromBufferAttribute(n,y),m.subVectors(l,a),g.subVectors(o,a),m.cross(g),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),c.add(m),h.add(m),d.add(m),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),a.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),m.subVectors(l,a),g.subVectors(o,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(c,h){const d=c.array,m=c.itemSize,g=c.normalized,_=new d.constructor(h.length*m);let x=0,E=0;for(let w=0,y=h.length;w<y;w++){c.isInterleavedBufferAttribute?x=h[w]*c.data.stride+c.offset:x=h[w]*m;for(let p=0;p<m;p++)_[E++]=d[x++]}return new Pi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vo,i=this.index.array,o=this.attributes;for(const c in o){const h=o[c],d=e(h,i);n.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const h=[],d=a[c];for(let m=0,g=d.length;m<g;m++){const _=d[m],x=e(_,i);h.push(x)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const d=l[c];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(n))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,m=l.length;d<m;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new qt,Xr=new cw,Bl=new Gd,D_=new $,Fo=new $,ko=new $,zo=new $,Ih=new $,Hl=new $,Vl=new _t,Gl=new _t,Wl=new _t,N_=new $,U_=new $,O_=new $,Xl=new $,Zl=new $;class Ti extends zn{constructor(e=new vo,n=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const o=n[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=o.length;a<l;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,n){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Hl.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const m=c[h],g=a[h];m!==0&&(Ih.fromBufferAttribute(g,e),l?Hl.addScaledVector(Ih,m):Hl.addScaledVector(Ih.sub(n),m))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(a),Xr.copy(e.ray).recast(e.near),!(Bl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Bl,D_)===null||Xr.origin.distanceToSquared(D_)>(e.far-e.near)**2))&&(I_.copy(a).invert(),Xr.copy(e.ray).applyMatrix4(I_),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let o;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,w=_.length;E<w;E++){const y=_[E],p=l[y.materialIndex],M=Math.max(y.start,x.start),S=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let R=M,k=S;R<k;R+=3){const D=c.getX(R),I=c.getX(R+1),B=c.getX(R+2);o=jl(this,p,e,i,d,m,g,D,I,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let y=E,p=w;y<p;y+=3){const M=c.getX(y),S=c.getX(y+1),R=c.getX(y+2);o=jl(this,l,e,i,d,m,g,M,S,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(l))for(let E=0,w=_.length;E<w;E++){const y=_[E],p=l[y.materialIndex],M=Math.max(y.start,x.start),S=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=M,k=S;R<k;R+=3){const D=R,I=R+1,B=R+2;o=jl(this,p,e,i,d,m,g,D,I,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=E,p=w;y<p;y+=3){const M=y,S=y+1,R=y+2;o=jl(this,l,e,i,d,m,g,M,S,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function xw(t,e,n,i,o,a,l,c){let h;if(e.side===In?h=i.intersectTriangle(l,a,o,!0,c):h=i.intersectTriangle(o,a,l,e.side===Lr,c),h===null)return null;Zl.copy(c),Zl.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Zl);return d<n.near||d>n.far?null:{distance:d,point:Zl.clone(),object:t}}function jl(t,e,n,i,o,a,l,c,h,d){t.getVertexPosition(c,Fo),t.getVertexPosition(h,ko),t.getVertexPosition(d,zo);const m=xw(t,e,n,i,Fo,ko,zo,Xl);if(m){o&&(Vl.fromBufferAttribute(o,c),Gl.fromBufferAttribute(o,h),Wl.fromBufferAttribute(o,d),m.uv=Ei.getInterpolation(Xl,Fo,ko,zo,Vl,Gl,Wl,new _t)),a&&(Vl.fromBufferAttribute(a,c),Gl.fromBufferAttribute(a,h),Wl.fromBufferAttribute(a,d),m.uv1=Ei.getInterpolation(Xl,Fo,ko,zo,Vl,Gl,Wl,new _t)),l&&(N_.fromBufferAttribute(l,c),U_.fromBufferAttribute(l,h),O_.fromBufferAttribute(l,d),m.normal=Ei.getInterpolation(Xl,Fo,ko,zo,N_,U_,O_,new $),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:h,c:d,normal:new $,materialIndex:0};Ei.getNormal(Fo,ko,zo,g.normal),m.face=g}return m}class Ps extends vo{constructor(e=1,n=1,i=1,o=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:o,heightSegments:a,depthSegments:l};const c=this;o=Math.floor(o),a=Math.floor(a),l=Math.floor(l);const h=[],d=[],m=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,i,n,e,l,a,0),E("z","y","x",1,-1,i,n,-e,l,a,1),E("x","z","y",1,1,e,i,n,o,l,2),E("x","z","y",1,-1,e,i,-n,o,l,3),E("x","y","z",1,-1,e,n,i,o,a,4),E("x","y","z",-1,-1,e,n,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new lo(d,3)),this.setAttribute("normal",new lo(m,3)),this.setAttribute("uv",new lo(g,2));function E(w,y,p,M,S,R,k,D,I,B,b){const A=R/I,F=k/B,J=R/2,Q=k/2,ie=D/2,se=I+1,ee=B+1;let ae=0,U=0;const re=new $;for(let j=0;j<ee;j++){const ce=j*F-Q;for(let Ce=0;Ce<se;Ce++){const He=Ce*A-J;re[w]=He*M,re[y]=ce*S,re[p]=ie,d.push(re.x,re.y,re.z),re[w]=0,re[y]=0,re[p]=D>0?1:-1,m.push(re.x,re.y,re.z),g.push(Ce/I),g.push(1-j/B),ae+=1}}for(let j=0;j<B;j++)for(let ce=0;ce<I;ce++){const Ce=_+ce+se*j,He=_+ce+se*(j+1),Y=_+(ce+1)+se*(j+1),te=_+(ce+1)+se*j;h.push(Ce,He,te),h.push(He,Y,te),U+=6}c.addGroup(x,U,b),x+=U,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const o=t[n][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=o.clone():Array.isArray(o)?e[n][i]=o.slice():e[n][i]=o}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Es(t[n]);for(const o in i)e[o]=i[o]}return e}function yw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function X0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Sw={clone:Es,merge:_n};var Mw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mw,this.fragmentShader=Ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=yw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const l=this.uniforms[o].value;l&&l.isTexture?n.uniforms[o]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[o]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[o]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[o]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[o]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[o]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[o]={type:"m4",value:l.toArray()}:n.uniforms[o]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Z0 extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new $,F_=new _t,k_=new _t;class Yn extends Z0{constructor(e=50,n=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,F_,k_),n.subVectors(k_,F_)}setViewOffset(e,n,i,o,a,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ph*.5*this.fov)/this.zoom,i=2*n,o=this.aspect*i,a=-.5*o;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;a+=l.offsetX*o/h,n-=l.offsetY*i/d,o*=l.width/h,i*=l.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bo=-90,Ho=1;class ww extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Bo,Ho,e,n);o.layers=this.layers,this.add(o);const a=new Yn(Bo,Ho,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Bo,Ho,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Bo,Ho,e,n);c.layers=this.layers,this.add(c);const h=new Yn(Bo,Ho,e,n);h.layers=this.layers,this.add(h);const d=new Yn(Bo,Ho,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,o,a,l,c,h]=n;for(const d of n)this.remove(d);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,d,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(n,a),e.setRenderTarget(i,1,o),e.render(n,l),e.setRenderTarget(i,2,o),e.render(n,c),e.setRenderTarget(i,3,o),e.render(n,h),e.setRenderTarget(i,4,o),e.render(n,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(n,m),e.setRenderTarget(g,_,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class j0 extends Dn{constructor(e,n,i,o,a,l,c,h,d,m){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,o,a,l,c,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tw extends mo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new j0(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ps(5,5,5),a=new Ir({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ar});a.uniforms.tEquirect.value=n;const l=new Ti(o,a),c=n.minFilter;return n.minFilter===oo&&(n.minFilter=ci),new ww(1,10,this).update(e,l),n.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,o){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,o);e.setRenderTarget(a)}}const Dh=new $,Aw=new $,Cw=new et;class $r{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,o){return this.normal.set(e,n,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const o=Dh.subVectors(i,n).cross(Aw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Cw.getNormalMatrix(e),o=this.coplanarPoint(Dh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Gd,ql=new $;class q0{constructor(e=new $r,n=new $r,i=new $r,o=new $r,a=new $r,l=new $r){this.planes=[e,n,i,o,a,l]}set(e,n,i,o,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zi){const i=this.planes,o=e.elements,a=o[0],l=o[1],c=o[2],h=o[3],d=o[4],m=o[5],g=o[6],_=o[7],x=o[8],E=o[9],w=o[10],y=o[11],p=o[12],M=o[13],S=o[14],R=o[15];if(i[0].setComponents(h-a,_-d,y-x,R-p).normalize(),i[1].setComponents(h+a,_+d,y+x,R+p).normalize(),i[2].setComponents(h+l,_+m,y+E,R+M).normalize(),i[3].setComponents(h-l,_-m,y-E,R-M).normalize(),i[4].setComponents(h-c,_-g,y-w,R-S).normalize(),n===Zi)i[5].setComponents(h+c,_+g,y+w,R+S).normalize();else if(n===Hu)i[5].setComponents(c,g,w,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const o=n[i];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y0(){let t=null,e=!1,n=null,i=null;function o(a,l){n(a,l),i=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Pw(t){const e=new WeakMap;function n(c,h){const d=c.array,m=c.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,d,m),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,h,d){const m=h.array,g=h._updateRange,_=h.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&_.length===0&&t.bufferSubData(d,0,m),_.length!==0){for(let x=0,E=_.length;x<E;x++){const w=_[x];t.bufferSubData(d,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}h.clearUpdateRanges()}g.count!==-1&&(t.bufferSubData(d,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(t.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);if(d===void 0)e.set(c,n(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class fc extends vo{constructor(e=1,n=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:o};const a=e/2,l=n/2,c=Math.floor(i),h=Math.floor(o),d=c+1,m=h+1,g=e/c,_=n/h,x=[],E=[],w=[],y=[];for(let p=0;p<m;p++){const M=p*_-l;for(let S=0;S<d;S++){const R=S*g-a;E.push(R,-M,0),w.push(0,0,1),y.push(S/c),y.push(1-p/h)}}for(let p=0;p<h;p++)for(let M=0;M<c;M++){const S=M+d*p,R=M+d*(p+1),k=M+1+d*(p+1),D=M+1+d*p;x.push(S,R,D),x.push(R,k,D)}this.setIndex(x),this.setAttribute("position",new lo(E,3)),this.setAttribute("normal",new lo(w,3)),this.setAttribute("uv",new lo(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lw=`#ifdef USE_ALPHAHASH
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
#endif`,bw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uw=`#ifdef USE_AOMAP
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
#endif`,Ow=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vw=`#ifdef USE_IRIDESCENCE
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
#endif`,Gw=`#ifdef USE_BUMPMAP
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
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qw=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eT=`vec3 transformedNormal = objectNormal;
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
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_T=`#ifdef USE_GRADIENTMAP
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
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
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
#endif`,ST=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,MT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,CT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,zT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
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
#endif`,XT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,d1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Z1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K1=`#define PHONG
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
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,eA=`#define TOON
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
}`,tA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nA=`uniform float size;
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
}`,iA=`uniform vec3 diffuse;
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
}`,rA=`#include <common>
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
}`,oA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,aA=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Rw,alphahash_pars_fragment:Lw,alphamap_fragment:bw,alphamap_pars_fragment:Iw,alphatest_fragment:Dw,alphatest_pars_fragment:Nw,aomap_fragment:Uw,aomap_pars_fragment:Ow,batching_pars_vertex:Fw,batching_vertex:kw,begin_vertex:zw,beginnormal_vertex:Bw,bsdfs:Hw,iridescence_fragment:Vw,bumpmap_pars_fragment:Gw,clipping_planes_fragment:Ww,clipping_planes_pars_fragment:Xw,clipping_planes_pars_vertex:Zw,clipping_planes_vertex:jw,color_fragment:qw,color_pars_fragment:Yw,color_pars_vertex:Kw,color_vertex:$w,common:Qw,cube_uv_reflection_fragment:Jw,defaultnormal_vertex:eT,displacementmap_pars_vertex:tT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:rT,colorspace_fragment:oT,colorspace_pars_fragment:sT,envmap_fragment:aT,envmap_common_pars_fragment:lT,envmap_pars_fragment:uT,envmap_pars_vertex:cT,envmap_physical_pars_fragment:ST,envmap_vertex:hT,fog_vertex:fT,fog_pars_vertex:dT,fog_fragment:pT,fog_pars_fragment:mT,gradientmap_pars_fragment:_T,lightmap_pars_fragment:gT,lights_lambert_fragment:vT,lights_lambert_pars_fragment:xT,lights_pars_begin:yT,lights_toon_fragment:MT,lights_toon_pars_fragment:ET,lights_phong_fragment:wT,lights_phong_pars_fragment:TT,lights_physical_fragment:AT,lights_physical_pars_fragment:CT,lights_fragment_begin:PT,lights_fragment_maps:RT,lights_fragment_end:LT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:DT,logdepthbuf_vertex:NT,map_fragment:UT,map_pars_fragment:OT,map_particle_fragment:FT,map_particle_pars_fragment:kT,metalnessmap_fragment:zT,metalnessmap_pars_fragment:BT,morphinstance_vertex:HT,morphcolor_vertex:VT,morphnormal_vertex:GT,morphtarget_pars_vertex:WT,morphtarget_vertex:XT,normal_fragment_begin:ZT,normal_fragment_maps:jT,normal_pars_fragment:qT,normal_pars_vertex:YT,normal_vertex:KT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:e1,iridescence_pars_fragment:t1,opaque_fragment:n1,packing:i1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:s1,dithering_pars_fragment:a1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:h1,shadowmap_vertex:f1,shadowmask_pars_fragment:d1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:_1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:x1,tonemapping_fragment:y1,tonemapping_pars_fragment:S1,transmission_fragment:M1,transmission_pars_fragment:E1,uv_pars_fragment:w1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:C1,background_vert:P1,background_frag:R1,backgroundCube_vert:L1,backgroundCube_frag:b1,cube_vert:I1,cube_frag:D1,depth_vert:N1,depth_frag:U1,distanceRGBA_vert:O1,distanceRGBA_frag:F1,equirect_vert:k1,equirect_frag:z1,linedashed_vert:B1,linedashed_frag:H1,meshbasic_vert:V1,meshbasic_frag:G1,meshlambert_vert:W1,meshlambert_frag:X1,meshmatcap_vert:Z1,meshmatcap_frag:j1,meshnormal_vert:q1,meshnormal_frag:Y1,meshphong_vert:K1,meshphong_frag:$1,meshphysical_vert:Q1,meshphysical_frag:J1,meshtoon_vert:eA,meshtoon_frag:tA,points_vert:nA,points_frag:iA,shadow_vert:rA,shadow_frag:oA,sprite_vert:sA,sprite_frag:aA},Me={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Si={basic:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:_n([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:_n([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new xt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:_n([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:_n([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:_n([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:_n([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:_n([Me.common,Me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:_n([Me.lights,Me.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Si.physical={uniforms:_n([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yl={r:0,b:0,g:0},jr=new Qi,lA=new qt;function uA(t,e,n,i,o,a,l){const c=new xt(0);let h=a===!0?0:1,d,m,g=null,_=0,x=null;function E(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?n:e).get(S)),S}function w(M){let S=!1;const R=E(M);R===null?p(c,h):R&&R.isColor&&(p(R,1),S=!0);const k=t.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(M,S){const R=E(S);R&&(R.isCubeTexture||R.mapping===lc)?(m===void 0&&(m=new Ti(new Ps(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Es(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),jr.copy(S.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(jr)),m.material.toneMapped=gt.getTransfer(R.colorSpace)!==Ct,(g!==R||_!==R.version||x!==t.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,x=t.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Ti(new fc(2,2),new Ir({name:"BackgroundMaterial",uniforms:Es(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=gt.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,g=R,_=R.version,x=t.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function p(M,S){M.getRGB(Yl,X0(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,S,l)}return{getClearColor:function(){return c},setClearColor:function(M,S=1){c.set(M),h=S,p(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,p(c,h)},render:w,addToRenderList:y}}function cA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},o=_(null);let a=o,l=!1;function c(A,F,J,Q,ie){let se=!1;const ee=g(Q,J,F);a!==ee&&(a=ee,d(a.object)),se=x(A,Q,J,ie),se&&E(A,Q,J,ie),ie!==null&&e.update(ie,t.ELEMENT_ARRAY_BUFFER),(se||l)&&(l=!1,R(A,F,J,Q),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return t.createVertexArray()}function d(A){return t.bindVertexArray(A)}function m(A){return t.deleteVertexArray(A)}function g(A,F,J){const Q=J.wireframe===!0;let ie=i[A.id];ie===void 0&&(ie={},i[A.id]=ie);let se=ie[F.id];se===void 0&&(se={},ie[F.id]=se);let ee=se[Q];return ee===void 0&&(ee=_(h()),se[Q]=ee),ee}function _(A){const F=[],J=[],Q=[];for(let ie=0;ie<n;ie++)F[ie]=0,J[ie]=0,Q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:Q,object:A,attributes:{},index:null}}function x(A,F,J,Q){const ie=a.attributes,se=F.attributes;let ee=0;const ae=J.getAttributes();for(const U in ae)if(ae[U].location>=0){const j=ie[U];let ce=se[U];if(ce===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;ee++}return a.attributesNum!==ee||a.index!==Q}function E(A,F,J,Q){const ie={},se=F.attributes;let ee=0;const ae=J.getAttributes();for(const U in ae)if(ae[U].location>=0){let j=se[U];j===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),ie[U]=ce,ee++}a.attributes=ie,a.attributesNum=ee,a.index=Q}function w(){const A=a.newAttributes;for(let F=0,J=A.length;F<J;F++)A[F]=0}function y(A){p(A,0)}function p(A,F){const J=a.newAttributes,Q=a.enabledAttributes,ie=a.attributeDivisors;J[A]=1,Q[A]===0&&(t.enableVertexAttribArray(A),Q[A]=1),ie[A]!==F&&(t.vertexAttribDivisor(A,F),ie[A]=F)}function M(){const A=a.newAttributes,F=a.enabledAttributes;for(let J=0,Q=F.length;J<Q;J++)F[J]!==A[J]&&(t.disableVertexAttribArray(J),F[J]=0)}function S(A,F,J,Q,ie,se,ee){ee===!0?t.vertexAttribIPointer(A,F,J,ie,se):t.vertexAttribPointer(A,F,J,Q,ie,se)}function R(A,F,J,Q){w();const ie=Q.attributes,se=J.getAttributes(),ee=F.defaultAttributeValues;for(const ae in se){const U=se[ae];if(U.location>=0){let re=ie[ae];if(re===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){const j=re.normalized,ce=re.itemSize,Ce=e.get(re);if(Ce===void 0)continue;const He=Ce.buffer,Y=Ce.type,te=Ce.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||re.gpuType===L0;if(re.isInterleavedBufferAttribute){const _e=re.data,Xe=_e.stride,je=re.offset;if(_e.isInstancedInterleavedBuffer){for(let ot=0;ot<U.locationSize;ot++)p(U.location+ot,_e.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ot=0;ot<U.locationSize;ot++)y(U.location+ot);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ot=0;ot<U.locationSize;ot++)S(U.location+ot,ce/U.locationSize,Y,j,Xe*te,(je+ce/U.locationSize*ot)*te,le)}else{if(re.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)p(U.location+_e,re.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<U.locationSize;_e++)y(U.location+_e);t.bindBuffer(t.ARRAY_BUFFER,He);for(let _e=0;_e<U.locationSize;_e++)S(U.location+_e,ce/U.locationSize,Y,j,ce*te,ce/U.locationSize*_e*te,le)}}else if(ee!==void 0){const j=ee[ae];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(U.location,j);break;case 3:t.vertexAttrib3fv(U.location,j);break;case 4:t.vertexAttrib4fv(U.location,j);break;default:t.vertexAttrib1fv(U.location,j)}}}}M()}function k(){B();for(const A in i){const F=i[A];for(const J in F){const Q=F[J];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete F[J]}delete i[A]}}function D(A){if(i[A.id]===void 0)return;const F=i[A.id];for(const J in F){const Q=F[J];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete F[J]}delete i[A.id]}function I(A){for(const F in i){const J=i[F];if(J[A.id]===void 0)continue;const Q=J[A.id];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete J[A.id]}}function B(){b(),l=!0,a!==o&&(a=o,d(a.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:B,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:M}}function hA(t,e,n){let i;function o(d){i=d}function a(d,m){t.drawArrays(i,d,m),n.update(m,i,1)}function l(d,m,g){g!==0&&(t.drawArraysInstanced(i,d,m,g),n.update(m,i,g))}function c(d,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<g;x++)this.render(d[x],m[x]);else{_.multiDrawArraysWEBGL(i,d,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];n.update(x,i,1)}}function h(d,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)l(d[E],m[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,g);let E=0;for(let w=0;w<g;w++)E+=m[w];for(let w=0;w<_.length;w++)n.update(E,i,_[w])}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function fA(t,e,n,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function l(D){return!(D!==wi&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const I=D===uc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==br&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==gr&&!I)}function h(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=n.logarithmicDepthBuffer===!0,_=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),w=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,k=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:k}}function dA(t){const e=this;let n=null,i=0,o=!1,a=!1;const l=new $r,c=new et,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||o;return o=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){n=m(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,p=t.get(g);if(!o||E===null||E.length===0||a&&!y)a?m(null):d();else{const M=a?0:i,S=M*4;let R=p.clippingState||null;h.value=R,R=m(E,_,S,x);for(let k=0;k!==S;++k)R[k]=n[k];p.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=M}};function d(){h.value!==n&&(h.value=n,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,E){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const p=x+w*4,M=_.matrixWorldInverse;c.getNormalMatrix(M),(y===null||y.length<p)&&(y=new Float32Array(p));for(let S=0,R=x;S!==w;++S,R+=4)l.copy(g[S]).applyMatrix4(M,c),l.normal.toArray(y,R),y[R+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function pA(t){let e=new WeakMap;function n(l,c){return c===zf?l.mapping=vs:c===Bf&&(l.mapping=xs),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===zf||c===Bf)if(e.has(l)){const h=e.get(l).texture;return n(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new Tw(h.height);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",o),n(d.texture,l.mapping)}else return null}}return l}function o(l){const c=l.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class mA extends Z0{constructor(e=-1,n=1,i=1,o=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=o,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,o,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,l=i+e,c=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,z_=[.125,.215,.35,.446,.526,.582],eo=20,Nh=new mA,B_=new xt;let Uh=null,Oh=0,Fh=0,kh=!1;const Qr=(1+Math.sqrt(5))/2,Vo=1/Qr,H_=[new $(-Qr,Vo,0),new $(Qr,Vo,0),new $(-Vo,0,Qr),new $(Vo,0,Qr),new $(0,Qr,-Vo),new $(0,Qr,Vo),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class V_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,o=100){Uh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Oh,Fh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:uc,format:wi,colorSpace:Or,depthBuffer:!1},o=G_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_A(a)),this._blurMaterial=gA(a,e,n)}return o}_compileMaterial(e){const n=new Ti(this._lodPlanes[0],e);this._renderer.compile(n,Nh)}_sceneToCubeUV(e,n,i,o){const c=new Yn(90,1,n,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(B_),m.toneMapping=Cr,m.autoClear=!1;const x=new Wd({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new Ti(new Ps,x);let w=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,w=!0):(x.color.copy(B_),w=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(c.up.set(0,h[p],0),c.lookAt(d[p],0,0)):M===1?(c.up.set(0,0,h[p]),c.lookAt(0,d[p],0)):(c.up.set(0,h[p],0),c.lookAt(0,0,d[p]));const S=this._cubeSize;Kl(o,M*S,p>2?S:0,S,S),m.setRenderTarget(o),w&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,o=e.mapping===vs||e.mapping===xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const a=o?this._cubemapMaterial:this._equirectMaterial,l=new Ti(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Kl(n,0,0,3*h,2*h),i.setRenderTarget(n),i.render(l,Nh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=H_[(o-a-1)%H_.length];this._blur(e,a-1,a,l,c)}n.autoClear=i}_blur(e,n,i,o,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,o,"latitudinal",a),this._halfBlur(l,e,i,i,o,"longitudinal",a)}_halfBlur(e,n,i,o,a,l,c){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ti(this._lodPlanes[o],d),_=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*eo-1),w=a/E,y=isFinite(a)?1+Math.floor(m*w):eo;y>eo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${eo}`);const p=[];let M=0;for(let I=0;I<eo;++I){const B=I/w,b=Math.exp(-B*B/2);p.push(b),I===0?M+=b:I<y&&(M+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=p,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:S}=this;_.dTheta.value=E,_.mipInt.value=S-i;const R=this._sizeLods[o],k=3*R*(o>S-ts?o-S+ts:0),D=4*(this._cubeSize-R);Kl(n,k,D,3*R,2*R),h.setRenderTarget(n),h.render(g,Nh)}}function _A(t){const e=[],n=[],i=[];let o=t;const a=t-ts+1+z_.length;for(let l=0;l<a;l++){const c=Math.pow(2,o);n.push(c);let h=1/c;l>t-ts?h=z_[l-t+ts-1]:l===0&&(h=0),i.push(h);const d=1/(c-2),m=-d,g=1+d,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,w=3,y=2,p=1,M=new Float32Array(w*E*x),S=new Float32Array(y*E*x),R=new Float32Array(p*E*x);for(let D=0;D<x;D++){const I=D%3*2/3-1,B=D>2?0:-1,b=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];M.set(b,w*E*D),S.set(_,y*E*D);const A=[D,D,D,D,D,D];R.set(A,p*E*D)}const k=new vo;k.setAttribute("position",new Pi(M,w)),k.setAttribute("uv",new Pi(S,y)),k.setAttribute("faceIndex",new Pi(R,p)),e.push(k),o>ts&&o--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function G_(t,e,n){const i=new mo(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(t,e,n,i,o){t.viewport.set(e,n,i,o),t.scissor.set(e,n,i,o)}function gA(t,e,n){const i=new Float32Array(eo),o=new $(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function W_(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function X_(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function vA(t){let e=new WeakMap,n=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===zf||h===Bf,m=h===vs||h===xs;if(d||m){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return n===null&&(n=new V_(t)),g=d?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return d&&x&&x.height>0||m&&x&&o(x)?(n===null&&(n=new V_(t)),g=d?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let h=0;const d=6;for(let m=0;m<d;m++)c[m]!==void 0&&h++;return h===d}function a(c){const h=c.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function xA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(i)}return e[i]=o,o}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const o=n(i);return o===null&&k0("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function yA(t,e,n,i){const o={},a=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const w=_.morphAttributes[E];for(let y=0,p=w.length;y<p;y++)e.remove(w[y])}_.removeEventListener("dispose",l),delete o[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(g,_){return o[_.id]===!0||(_.addEventListener("dispose",l),o[_.id]=!0,n.memory.geometries++),_}function h(g){const _=g.attributes;for(const E in _)e.update(_[E],t.ARRAY_BUFFER);const x=g.morphAttributes;for(const E in x){const w=x[E];for(let y=0,p=w.length;y<p;y++)e.update(w[y],t.ARRAY_BUFFER)}}function d(g){const _=[],x=g.index,E=g.attributes.position;let w=0;if(x!==null){const M=x.array;w=x.version;for(let S=0,R=M.length;S<R;S+=3){const k=M[S+0],D=M[S+1],I=M[S+2];_.push(k,D,D,I,I,k)}}else if(E!==void 0){const M=E.array;w=E.version;for(let S=0,R=M.length/3-1;S<R;S+=3){const k=S+0,D=S+1,I=S+2;_.push(k,D,D,I,I,k)}}else return;const y=new(F0(_)?W0:G0)(_,1);y.version=w;const p=a.get(g);p&&e.remove(p),a.set(g,y)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function SA(t,e,n){let i;function o(_){i=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function h(_,x){t.drawElements(i,x,a,_*l),n.update(x,i,1)}function d(_,x,E){E!==0&&(t.drawElementsInstanced(i,x,a,_*l,E),n.update(x,i,E))}function m(_,x,E){if(E===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let y=0;y<E;y++)this.render(_[y]/l,x[y]);else{w.multiDrawElementsWEBGL(i,x,0,a,_,0,E);let y=0;for(let p=0;p<E;p++)y+=x[p];n.update(y,i,1)}}function g(_,x,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let p=0;p<_.length;p++)d(_[p]/l,x[p],w[p]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,w,0,E);let p=0;for(let M=0;M<E;M++)p+=x[M];for(let M=0;M<w.length;M++)n.update(p,i,w[M])}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function MA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,c){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=c*(a/3);break;case t.LINES:n.lines+=c*(a/2);break;case t.LINE_STRIP:n.lines+=c*(a-1);break;case t.LINE_LOOP:n.lines+=c*a;break;case t.POINTS:n.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:i}}function EA(t,e,n){const i=new WeakMap,o=new rn;function a(l,c,h){const d=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let A=function(){B.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var x=A;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let k=c.attributes.position.count*R,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const I=new Float32Array(k*D*4*g),B=new B0(I,k,D,g);B.type=gr,B.needsUpdate=!0;const b=R*4;for(let F=0;F<g;F++){const J=p[F],Q=M[F],ie=S[F],se=k*D*4*F;for(let ee=0;ee<J.count;ee++){const ae=ee*b;E===!0&&(o.fromBufferAttribute(J,ee),I[se+ae+0]=o.x,I[se+ae+1]=o.y,I[se+ae+2]=o.z,I[se+ae+3]=0),w===!0&&(o.fromBufferAttribute(Q,ee),I[se+ae+4]=o.x,I[se+ae+5]=o.y,I[se+ae+6]=o.z,I[se+ae+7]=0),y===!0&&(o.fromBufferAttribute(ie,ee),I[se+ae+8]=o.x,I[se+ae+9]=o.y,I[se+ae+10]=o.z,I[se+ae+11]=ie.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new _t(k,D)},i.set(c,_),c.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const w=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(t,"morphTargetBaseInfluence",w),h.getUniforms().setValue(t,"morphTargetInfluences",d)}h.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}return{update:a}}function wA(t,e,n,i){let o=new WeakMap;function a(h){const d=i.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==d&&(n.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,t.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return g}function l(){o=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:l}}class K0 extends Dn{constructor(e,n,i,o,a,l,c,h,d,m=us){if(m!==us&&m!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===us&&(i=ys),i===void 0&&m===Ms&&(i=Ss),super(null,o,a,l,c,h,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:$n,this.minFilter=h!==void 0?h:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $0=new Dn,Q0=new K0(1,1);Q0.compareFunction=O0;const J0=new B0,ex=new lw,tx=new j0,Z_=[],j_=[],q_=new Float32Array(16),Y_=new Float32Array(9),K_=new Float32Array(4);function Rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const o=e*n;let a=Z_[o];if(a===void 0&&(a=new Float32Array(o),Z_[o]=a),e!==0){i.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=n,t[l].toArray(a,c)}return a}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=j_[e];n===void 0&&(n=new Int32Array(e),j_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function RA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;K_.set(i),t.uniformMatrix2fv(this.addr,!1,K_),Kt(n,i)}}function LA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;Y_.set(i),t.uniformMatrix3fv(this.addr,!1,Y_),Kt(n,i)}}function bA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;q_.set(i),t.uniformMatrix4fv(this.addr,!1,q_),Kt(n,i)}}function IA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function OA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function BA(t,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(t.uniform1i(this.addr,o),i[0]=o);const a=this.type===t.SAMPLER_2D_SHADOW?Q0:$0;n.setTexture2D(e||a,o)}function HA(t,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(t.uniform1i(this.addr,o),i[0]=o),n.setTexture3D(e||ex,o)}function VA(t,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(t.uniform1i(this.addr,o),i[0]=o),n.setTextureCube(e||tx,o)}function GA(t,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(t.uniform1i(this.addr,o),i[0]=o),n.setTexture2DArray(e||J0,o)}function WA(t){switch(t){case 5126:return TA;case 35664:return AA;case 35665:return CA;case 35666:return PA;case 35674:return RA;case 35675:return LA;case 35676:return bA;case 5124:case 35670:return IA;case 35667:case 35671:return DA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return OA;case 36294:return FA;case 36295:return kA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return GA}}function XA(t,e){t.uniform1fv(this.addr,e)}function ZA(t,e){const n=Rs(e,this.size,2);t.uniform2fv(this.addr,n)}function jA(t,e){const n=Rs(e,this.size,3);t.uniform3fv(this.addr,n)}function qA(t,e){const n=Rs(e,this.size,4);t.uniform4fv(this.addr,n)}function YA(t,e){const n=Rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KA(t,e){const n=Rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $A(t,e){const n=Rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QA(t,e){t.uniform1iv(this.addr,e)}function JA(t,e){t.uniform2iv(this.addr,e)}function eC(t,e){t.uniform3iv(this.addr,e)}function tC(t,e){t.uniform4iv(this.addr,e)}function nC(t,e){t.uniform1uiv(this.addr,e)}function iC(t,e){t.uniform2uiv(this.addr,e)}function rC(t,e){t.uniform3uiv(this.addr,e)}function oC(t,e){t.uniform4uiv(this.addr,e)}function sC(t,e,n){const i=this.cache,o=e.length,a=dc(n,o);Yt(i,a)||(t.uniform1iv(this.addr,a),Kt(i,a));for(let l=0;l!==o;++l)n.setTexture2D(e[l]||$0,a[l])}function aC(t,e,n){const i=this.cache,o=e.length,a=dc(n,o);Yt(i,a)||(t.uniform1iv(this.addr,a),Kt(i,a));for(let l=0;l!==o;++l)n.setTexture3D(e[l]||ex,a[l])}function lC(t,e,n){const i=this.cache,o=e.length,a=dc(n,o);Yt(i,a)||(t.uniform1iv(this.addr,a),Kt(i,a));for(let l=0;l!==o;++l)n.setTextureCube(e[l]||tx,a[l])}function uC(t,e,n){const i=this.cache,o=e.length,a=dc(n,o);Yt(i,a)||(t.uniform1iv(this.addr,a),Kt(i,a));for(let l=0;l!==o;++l)n.setTexture2DArray(e[l]||J0,a[l])}function cC(t){switch(t){case 5126:return XA;case 35664:return ZA;case 35665:return jA;case 35666:return qA;case 35674:return YA;case 35675:return KA;case 35676:return $A;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return eC;case 35669:case 35673:return tC;case 5125:return nC;case 36294:return iC;case 36295:return rC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return aC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return uC}}class hC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=WA(n.type)}}class fC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cC(n.type)}}class dC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const o=this.seq;for(let a=0,l=o.length;a!==l;++a){const c=o[a];c.setValue(e,n[c.id],i)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function $_(t,e){t.seq.push(e),t.map[e.id]=e}function pC(t,e,n){const i=t.name,o=i.length;for(zh.lastIndex=0;;){const a=zh.exec(i),l=zh.lastIndex;let c=a[1];const h=a[2]==="]",d=a[3];if(h&&(c=c|0),d===void 0||d==="["&&l+2===o){$_(n,d===void 0?new hC(c,t,e):new fC(c,t,e));break}else{let g=n.map[c];g===void 0&&(g=new dC(c),$_(n,g)),n=g}}}class cu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);pC(a,l,this)}}setValue(e,n,i,o){const a=this.map[n];a!==void 0&&a.setValue(e,i,o)}setOptional(e,n,i){const o=n[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,n,i,o){for(let a=0,l=n.length;a!==l;++a){const c=n[a],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,n){const i=[];for(let o=0,a=e.length;o!==a;++o){const l=e[o];l.id in n&&i.push(l)}return i}}function Q_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mC=37297;let _C=0;function gC(t,e){const n=t.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let l=o;l<a;l++){const c=l+1;i.push(`${c===e?">":" "} ${c}: ${n[l]}`)}return i.join(`
`)}function vC(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===Bu&&n===zu?i="LinearDisplayP3ToLinearSRGB":e===zu&&n===Bu&&(i="LinearSRGBToLinearDisplayP3"),t){case Or:case cc:return[i,"LinearTransferOETF"];case yi:case Vd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function J_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+gC(t.getShaderSource(e),l)}else return o}function xC(t,e){const n=vC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yC(t,e){let n;switch(e){case TE:n="Linear";break;case AE:n="Reinhard";break;case CE:n="OptimizedCineon";break;case PE:n="ACESFilmic";break;case LE:n="AgX";break;case bE:n="Neutral";break;case RE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function MC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=t.getActiveAttrib(e,o),l=a.name;let c=1;a.type===t.FLOAT_MAT2&&(c=2),a.type===t.FLOAT_MAT3&&(c=3),a.type===t.FLOAT_MAT4&&(c=4),n[l]={type:a.type,location:t.getAttribLocation(e,l),locationSize:c}}return n}function la(t){return t!==""}function eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(t){return t.replace(wC,AC)}const TC=new Map;function AC(t,e){let n=Je[e];if(n===void 0){const i=TC.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(t){return t.replace(CC,PC)}function PC(t,e,n,i){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function ig(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function RC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function LC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function IC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case EE:e="ENVMAP_BLENDING_MIX";break;case wE:e="ENVMAP_BLENDING_ADD";break}return e}function DC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NC(t,e,n,i){const o=t.getContext(),a=n.defines;let l=n.vertexShader,c=n.fragmentShader;const h=RC(n),d=LC(n),m=bC(n),g=IC(n),_=DC(n),x=SC(n),E=MC(a),w=o.createProgram();let y,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(la).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(la).join(`
`),p.length>0&&(p+=`
`)):(y=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?Je.tonemapping_pars_fragment:"",n.toneMapping!==Cr?yC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,xC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),l=Wf(l),l=eg(l,n),l=tg(l,n),c=Wf(c),c=eg(c,n),c=tg(c,n),l=ng(l),c=ng(c),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",n.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+y+l,R=M+p+c,k=Q_(o,o.VERTEX_SHADER,S),D=Q_(o,o.FRAGMENT_SHADER,R);o.attachShader(w,k),o.attachShader(w,D),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(F){if(t.debug.checkShaderErrors){const J=o.getProgramInfoLog(w).trim(),Q=o.getShaderInfoLog(k).trim(),ie=o.getShaderInfoLog(D).trim();let se=!0,ee=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,w,k,D);else{const ae=J_(o,k,"vertex"),U=J_(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+ae+`
`+U)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||ie==="")&&(ee=!1);ee&&(F.diagnostics={runnable:se,programLog:J,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ie,prefix:p}})}o.deleteShader(k),o.deleteShader(D),B=new cu(o,w),b=EC(o,w)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,mC)),A},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_C++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=D,this}let UC=0;class OC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(o)===!1&&(l.add(o),o.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FC(e),n.set(e,i)),i}}class FC{constructor(e){this.id=UC++,this.code=e,this.usedTimes=0}}function kC(t,e,n,i,o,a,l){const c=new H0,h=new OC,d=new Set,m=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return d.add(b),b===0?"uv":`uv${b}`}function y(b,A,F,J,Q){const ie=J.fog,se=Q.geometry,ee=b.isMeshStandardMaterial?J.environment:null,ae=(b.isMeshStandardMaterial?n:e).get(b.envMap||ee),U=ae&&ae.mapping===lc?ae.image.height:null,re=E[b.type];b.precision!==null&&(x=o.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const j=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ce=j!==void 0?j.length:0;let Ce=0;se.morphAttributes.position!==void 0&&(Ce=1),se.morphAttributes.normal!==void 0&&(Ce=2),se.morphAttributes.color!==void 0&&(Ce=3);let He,Y,te,le;if(re){const mt=Si[re];He=mt.vertexShader,Y=mt.fragmentShader}else He=b.vertexShader,Y=b.fragmentShader,h.update(b),te=h.getVertexShaderID(b),le=h.getFragmentShaderID(b);const _e=t.getRenderTarget(),Xe=Q.isInstancedMesh===!0,je=Q.isBatchedMesh===!0,ot=!!b.map,H=!!b.matcap,Qe=!!ae,tt=!!b.aoMap,wt=!!b.lightMap,Fe=!!b.bumpMap,lt=!!b.normalMap,Ke=!!b.displacementMap,Ze=!!b.emissiveMap,Ut=!!b.metalnessMap,N=!!b.roughnessMap,C=b.anisotropy>0,K=b.clearcoat>0,he=b.dispersion>0,fe=b.iridescence>0,de=b.sheen>0,Ue=b.transmission>0,ye=C&&!!b.anisotropyMap,Se=K&&!!b.clearcoatMap,$e=K&&!!b.clearcoatNormalMap,me=K&&!!b.clearcoatRoughnessMap,Ie=fe&&!!b.iridescenceMap,it=fe&&!!b.iridescenceThicknessMap,Ve=de&&!!b.sheenColorMap,Ee=de&&!!b.sheenRoughnessMap,qe=!!b.specularMap,st=!!b.specularColorMap,yt=!!b.specularIntensityMap,z=Ue&&!!b.transmissionMap,Te=Ue&&!!b.thicknessMap,ne=!!b.gradientMap,oe=!!b.alphaMap,ge=b.alphaTest>0,We=!!b.alphaHash,ct=!!b.extensions;let bt=Cr;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(bt=t.toneMapping);const Bt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Y,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:je,batchingColor:je&&Q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Q.instanceColor!==null,instancingMorph:Xe&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:H,envMap:Qe,envMapMode:Qe&&ae.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:wt,bumpMap:Fe,normalMap:lt,displacementMap:_&&Ke,emissiveMap:Ze,normalMapObjectSpace:lt&&b.normalMapType===ZE,normalMapTangentSpace:lt&&b.normalMapType===XE,metalnessMap:Ut,roughnessMap:N,anisotropy:C,anisotropyMap:ye,clearcoat:K,clearcoatMap:Se,clearcoatNormalMap:$e,clearcoatRoughnessMap:me,dispersion:he,iridescence:fe,iridescenceMap:Ie,iridescenceThicknessMap:it,sheen:de,sheenColorMap:Ve,sheenRoughnessMap:Ee,specularMap:qe,specularColorMap:st,specularIntensityMap:yt,transmission:Ue,transmissionMap:z,thicknessMap:Te,gradientMap:ne,opaque:b.transparent===!1&&b.blending===ls&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:ge,alphaHash:We,combine:b.combine,mapUv:ot&&w(b.map.channel),aoMapUv:tt&&w(b.aoMap.channel),lightMapUv:wt&&w(b.lightMap.channel),bumpMapUv:Fe&&w(b.bumpMap.channel),normalMapUv:lt&&w(b.normalMap.channel),displacementMapUv:Ke&&w(b.displacementMap.channel),emissiveMapUv:Ze&&w(b.emissiveMap.channel),metalnessMapUv:Ut&&w(b.metalnessMap.channel),roughnessMapUv:N&&w(b.roughnessMap.channel),anisotropyMapUv:ye&&w(b.anisotropyMap.channel),clearcoatMapUv:Se&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&w(b.sheenRoughnessMap.channel),specularMapUv:qe&&w(b.specularMap.channel),specularColorMapUv:st&&w(b.specularColorMap.channel),specularIntensityMapUv:yt&&w(b.specularIntensityMap.channel),transmissionMapUv:z&&w(b.transmissionMap.channel),thicknessMapUv:Te&&w(b.thicknessMap.channel),alphaMapUv:oe&&w(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(lt||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!se.attributes.uv&&(ot||oe),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:Q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===Ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gi,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ct&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Bt.vertexUv1s=d.has(1),Bt.vertexUv2s=d.has(2),Bt.vertexUv3s=d.has(3),d.clear(),Bt}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)A.push(F),A.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(M(A,b),S(A,b),A.push(t.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function M(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function S(b,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.skinning&&c.enable(4),A.morphTargets&&c.enable(5),A.morphNormals&&c.enable(6),A.morphColors&&c.enable(7),A.premultipliedAlpha&&c.enable(8),A.shadowMapEnabled&&c.enable(9),A.doubleSided&&c.enable(10),A.flipSided&&c.enable(11),A.useDepthPacking&&c.enable(12),A.dithering&&c.enable(13),A.transmission&&c.enable(14),A.sheen&&c.enable(15),A.opaque&&c.enable(16),A.pointsUvs&&c.enable(17),A.decodeVideoTexture&&c.enable(18),A.alphaToCoverage&&c.enable(19),b.push(c.mask)}function R(b){const A=E[b.type];let F;if(A){const J=Si[A];F=Sw.clone(J.uniforms)}else F=b.uniforms;return F}function k(b,A){let F;for(let J=0,Q=m.length;J<Q;J++){const ie=m[J];if(ie.cacheKey===A){F=ie,++F.usedTimes;break}}return F===void 0&&(F=new NC(t,A,b,a),m.push(F)),F}function D(b){if(--b.usedTimes===0){const A=m.indexOf(b);m[A]=m[m.length-1],m.pop(),b.destroy()}}function I(b){h.remove(b)}function B(){h.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:R,acquireProgram:k,releaseProgram:D,releaseShaderCache:I,programs:m,dispose:B}}function zC(){let t=new WeakMap;function e(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function n(a){t.delete(a)}function i(a,l,c){t.get(a)[l]=c}function o(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:o}}function BC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function og(){const t=[];let e=0;const n=[],i=[],o=[];function a(){e=0,n.length=0,i.length=0,o.length=0}function l(g,_,x,E,w,y){let p=t[e];return p===void 0?(p={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:w,group:y},t[e]=p):(p.id=g.id,p.object=g,p.geometry=_,p.material=x,p.groupOrder=E,p.renderOrder=g.renderOrder,p.z=w,p.group=y),e++,p}function c(g,_,x,E,w,y){const p=l(g,_,x,E,w,y);x.transmission>0?i.push(p):x.transparent===!0?o.push(p):n.push(p)}function h(g,_,x,E,w,y){const p=l(g,_,x,E,w,y);x.transmission>0?i.unshift(p):x.transparent===!0?o.unshift(p):n.unshift(p)}function d(g,_){n.length>1&&n.sort(g||BC),i.length>1&&i.sort(_||rg),o.length>1&&o.sort(_||rg)}function m(){for(let g=e,_=t.length;g<_;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:o,init:a,push:c,unshift:h,finish:m,sort:d}}function HC(){let t=new WeakMap;function e(i,o){const a=t.get(i);let l;return a===void 0?(l=new og,t.set(i,[l])):o>=a.length?(l=new og,a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function VC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new xt};break;case"SpotLight":n={position:new $,direction:new $,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function GC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WC=0;function XC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZC(t){const e=new VC,n=GC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new $);const o=new $,a=new qt,l=new qt;function c(d){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let x=0,E=0,w=0,y=0,p=0,M=0,S=0,R=0,k=0,D=0,I=0;d.sort(XC);for(let b=0,A=d.length;b<A;b++){const F=d[b],J=F.color,Q=F.intensity,ie=F.distance,se=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=J.r*Q,g+=J.g*Q,_+=J.b*Q;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],Q);I++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ae=F.shadow,U=n.get(F);U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,i.directionalShadow[x]=U,i.directionalShadowMap[x]=se,i.directionalShadowMatrix[x]=F.shadow.matrix,M++}i.directional[x]=ee,x++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(J).multiplyScalar(Q),ee.distance=ie,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[w]=ee;const ae=F.shadow;if(F.map&&(i.spotLightMap[k]=F.map,k++,ae.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[w]=ae.matrix,F.castShadow){const U=n.get(F);U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=se,R++}w++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(J).multiplyScalar(Q),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=ee,y++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const ae=F.shadow,U=n.get(F);U.shadowBias=ae.bias,U.shadowNormalBias=ae.normalBias,U.shadowRadius=ae.radius,U.shadowMapSize=ae.mapSize,U.shadowCameraNear=ae.camera.near,U.shadowCameraFar=ae.camera.far,i.pointShadow[E]=U,i.pointShadowMap[E]=se,i.pointShadowMatrix[E]=F.shadow.matrix,S++}i.point[E]=ee,E++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(Q),ee.groundColor.copy(F.groundColor).multiplyScalar(Q),i.hemi[p]=ee,p++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const B=i.hash;(B.directionalLength!==x||B.pointLength!==E||B.spotLength!==w||B.rectAreaLength!==y||B.hemiLength!==p||B.numDirectionalShadows!==M||B.numPointShadows!==S||B.numSpotShadows!==R||B.numSpotMaps!==k||B.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=w,i.rectArea.length=y,i.point.length=E,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=R+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,B.directionalLength=x,B.pointLength=E,B.spotLength=w,B.rectAreaLength=y,B.hemiLength=p,B.numDirectionalShadows=M,B.numPointShadows=S,B.numSpotShadows=R,B.numSpotMaps=k,B.numLightProbes=I,i.version=WC++)}function h(d,m){let g=0,_=0,x=0,E=0,w=0;const y=m.matrixWorldInverse;for(let p=0,M=d.length;p<M;p++){const S=d[p];if(S.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),g++}else if(S.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(S.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),l.identity(),a.copy(S.matrixWorld),a.premultiply(y),l.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),E++}else if(S.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),_++}else if(S.isHemisphereLight){const R=i.hemi[w];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:c,setupView:h,state:i}}function sg(t){const e=new ZC(t),n=[],i=[];function o(m){d.camera=m,n.length=0,i.length=0}function a(m){n.push(m)}function l(m){i.push(m)}function c(){e.setup(n)}function h(m){e.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function jC(t){let e=new WeakMap;function n(o,a=0){const l=e.get(o);let c;return l===void 0?(c=new sg(t),e.set(o,[c])):a>=l.length?(c=new sg(t),l.push(c)):c=l[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class qC extends hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YC extends hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$C=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QC(t,e,n){let i=new q0;const o=new _t,a=new _t,l=new rn,c=new qC({depthPacking:WE}),h=new YC,d={},m=n.maxTextureSize,g={[Lr]:In,[In]:Lr,[Gi]:Gi},_=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:KC,fragmentShader:$C}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new vo;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ti(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let p=this.type;this.render=function(D,I,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const b=t.getRenderTarget(),A=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),J=t.state;J.setBlending(Ar),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=p!==Bi&&this.type===Bi,ie=p===Bi&&this.type!==Bi;for(let se=0,ee=D.length;se<ee;se++){const ae=D[se],U=ae.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;o.copy(U.mapSize);const re=U.getFrameExtents();if(o.multiply(re),a.copy(U.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/re.x),o.x=a.x*re.x,U.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/re.y),o.y=a.y*re.y,U.mapSize.y=a.y)),U.map===null||Q===!0||ie===!0){const ce=this.type!==Bi?{minFilter:$n,magFilter:$n}:{};U.map!==null&&U.map.dispose(),U.map=new mo(o.x,o.y,ce),U.map.texture.name=ae.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const j=U.getViewportCount();for(let ce=0;ce<j;ce++){const Ce=U.getViewport(ce);l.set(a.x*Ce.x,a.y*Ce.y,a.x*Ce.z,a.y*Ce.w),J.viewport(l),U.updateMatrices(ae,ce),i=U.getFrustum(),R(I,B,U.camera,ae,this.type)}U.isPointLightShadow!==!0&&this.type===Bi&&M(U,B),U.needsUpdate=!1}p=this.type,y.needsUpdate=!1,t.setRenderTarget(b,A,F)};function M(D,I){const B=e.update(w);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new mo(o.x,o.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(I,null,B,_,w,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(I,null,B,x,w,null)}function S(D,I,B,b){let A=null;const F=B.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)A=F;else if(A=B.isPointLight===!0?h:c,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=A.uuid,Q=I.uuid;let ie=d[J];ie===void 0&&(ie={},d[J]=ie);let se=ie[Q];se===void 0&&(se=A.clone(),ie[Q]=se,I.addEventListener("dispose",k)),A=se}if(A.visible=I.visible,A.wireframe=I.wireframe,b===Bi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:g[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=t.properties.get(A);J.light=B}return A}function R(D,I,B,b,A){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&A===Bi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,D.matrixWorld);const Q=e.update(D),ie=D.material;if(Array.isArray(ie)){const se=Q.groups;for(let ee=0,ae=se.length;ee<ae;ee++){const U=se[ee],re=ie[U.materialIndex];if(re&&re.visible){const j=S(D,re,b,A);D.onBeforeShadow(t,D,I,B,Q,j,U),t.renderBufferDirect(B,null,Q,j,D,U),D.onAfterShadow(t,D,I,B,Q,j,U)}}}else if(ie.visible){const se=S(D,ie,b,A);D.onBeforeShadow(t,D,I,B,Q,se,null),t.renderBufferDirect(B,null,Q,se,D,null),D.onAfterShadow(t,D,I,B,Q,se,null)}}const J=D.children;for(let Q=0,ie=J.length;Q<ie;Q++)R(J[Q],I,B,b,A)}function k(D){D.target.removeEventListener("dispose",k);for(const B in d){const b=d[B],A=D.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function JC(t){function e(){let z=!1;const Te=new rn;let ne=null;const oe=new rn(0,0,0,0);return{setMask:function(ge){ne!==ge&&!z&&(t.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){z=ge},setClear:function(ge,We,ct,bt,Bt){Bt===!0&&(ge*=bt,We*=bt,ct*=bt),Te.set(ge,We,ct,bt),oe.equals(Te)===!1&&(t.clearColor(ge,We,ct,bt),oe.copy(Te))},reset:function(){z=!1,ne=null,oe.set(-1,0,0,0)}}}function n(){let z=!1,Te=null,ne=null,oe=null;return{setTest:function(ge){ge?le(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(ge){Te!==ge&&!z&&(t.depthMask(ge),Te=ge)},setFunc:function(ge){if(ne!==ge){switch(ge){case _E:t.depthFunc(t.NEVER);break;case gE:t.depthFunc(t.ALWAYS);break;case vE:t.depthFunc(t.LESS);break;case Ou:t.depthFunc(t.LEQUAL);break;case xE:t.depthFunc(t.EQUAL);break;case yE:t.depthFunc(t.GEQUAL);break;case SE:t.depthFunc(t.GREATER);break;case ME:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ge}},setLocked:function(ge){z=ge},setClear:function(ge){oe!==ge&&(t.clearDepth(ge),oe=ge)},reset:function(){z=!1,Te=null,ne=null,oe=null}}}function i(){let z=!1,Te=null,ne=null,oe=null,ge=null,We=null,ct=null,bt=null,Bt=null;return{setTest:function(mt){z||(mt?le(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!z&&(t.stencilMask(mt),Te=mt)},setFunc:function(mt,Gn,Sn){(ne!==mt||oe!==Gn||ge!==Sn)&&(t.stencilFunc(mt,Gn,Sn),ne=mt,oe=Gn,ge=Sn)},setOp:function(mt,Gn,Sn){(We!==mt||ct!==Gn||bt!==Sn)&&(t.stencilOp(mt,Gn,Sn),We=mt,ct=Gn,bt=Sn)},setLocked:function(mt){z=mt},setClear:function(mt){Bt!==mt&&(t.clearStencil(mt),Bt=mt)},reset:function(){z=!1,Te=null,ne=null,oe=null,ge=null,We=null,ct=null,bt=null,Bt=null}}}const o=new e,a=new n,l=new i,c=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],x=null,E=!1,w=null,y=null,p=null,M=null,S=null,R=null,k=null,D=new xt(0,0,0),I=0,B=!1,b=null,A=null,F=null,J=null,Q=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ee=0;const ae=t.getParameter(t.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),se=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),se=ee>=2);let U=null,re={};const j=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Ce=new rn().fromArray(j),He=new rn().fromArray(ce);function Y(z,Te,ne,oe){const ge=new Uint8Array(4),We=t.createTexture();t.bindTexture(z,We),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<ne;ct++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(Te+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return We}const te={};te[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),le(t.DEPTH_TEST),a.setFunc(Ou),Fe(!1),lt(Hm),le(t.CULL_FACE),tt(Ar);function le(z){d[z]!==!0&&(t.enable(z),d[z]=!0)}function _e(z){d[z]!==!1&&(t.disable(z),d[z]=!1)}function Xe(z,Te){return m[z]!==Te?(t.bindFramebuffer(z,Te),m[z]=Te,z===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Te),z===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function je(z,Te){let ne=_,oe=!1;if(z){ne=g.get(Te),ne===void 0&&(ne=[],g.set(Te,ne));const ge=z.textures;if(ne.length!==ge.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let We=0,ct=ge.length;We<ct;We++)ne[We]=t.COLOR_ATTACHMENT0+We;ne.length=ge.length,oe=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,oe=!0);oe&&t.drawBuffers(ne)}function ot(z){return x!==z?(t.useProgram(z),x=z,!0):!1}const H={[Jr]:t.FUNC_ADD,[JM]:t.FUNC_SUBTRACT,[eE]:t.FUNC_REVERSE_SUBTRACT};H[tE]=t.MIN,H[nE]=t.MAX;const Qe={[iE]:t.ZERO,[rE]:t.ONE,[oE]:t.SRC_COLOR,[Ff]:t.SRC_ALPHA,[hE]:t.SRC_ALPHA_SATURATE,[uE]:t.DST_COLOR,[aE]:t.DST_ALPHA,[sE]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[cE]:t.ONE_MINUS_DST_COLOR,[lE]:t.ONE_MINUS_DST_ALPHA,[fE]:t.CONSTANT_COLOR,[dE]:t.ONE_MINUS_CONSTANT_COLOR,[pE]:t.CONSTANT_ALPHA,[mE]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(z,Te,ne,oe,ge,We,ct,bt,Bt,mt){if(z===Ar){E===!0&&(_e(t.BLEND),E=!1);return}if(E===!1&&(le(t.BLEND),E=!0),z!==QM){if(z!==w||mt!==B){if((y!==Jr||S!==Jr)&&(t.blendEquation(t.FUNC_ADD),y=Jr,S=Jr),mt)switch(z){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.ONE,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,M=null,R=null,k=null,D.set(0,0,0),I=0,w=z,B=mt}return}ge=ge||Te,We=We||ne,ct=ct||oe,(Te!==y||ge!==S)&&(t.blendEquationSeparate(H[Te],H[ge]),y=Te,S=ge),(ne!==p||oe!==M||We!==R||ct!==k)&&(t.blendFuncSeparate(Qe[ne],Qe[oe],Qe[We],Qe[ct]),p=ne,M=oe,R=We,k=ct),(bt.equals(D)===!1||Bt!==I)&&(t.blendColor(bt.r,bt.g,bt.b,Bt),D.copy(bt),I=Bt),w=z,B=!1}function wt(z,Te){z.side===Gi?_e(t.CULL_FACE):le(t.CULL_FACE);let ne=z.side===In;Te&&(ne=!ne),Fe(ne),z.blending===ls&&z.transparent===!1?tt(Ar):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const oe=z.stencilWrite;l.setTest(oe),oe&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ze(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(z){b!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),b=z)}function lt(z){z!==YM?(le(t.CULL_FACE),z!==A&&(z===Hm?t.cullFace(t.BACK):z===KM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),A=z}function Ke(z){z!==F&&(se&&t.lineWidth(z),F=z)}function Ze(z,Te,ne){z?(le(t.POLYGON_OFFSET_FILL),(J!==Te||Q!==ne)&&(t.polygonOffset(Te,ne),J=Te,Q=ne)):_e(t.POLYGON_OFFSET_FILL)}function Ut(z){z?le(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function N(z){z===void 0&&(z=t.TEXTURE0+ie-1),U!==z&&(t.activeTexture(z),U=z)}function C(z,Te,ne){ne===void 0&&(U===null?ne=t.TEXTURE0+ie-1:ne=U);let oe=re[ne];oe===void 0&&(oe={type:void 0,texture:void 0},re[ne]=oe),(oe.type!==z||oe.texture!==Te)&&(U!==ne&&(t.activeTexture(ne),U=ne),t.bindTexture(z,Te||te[z]),oe.type=z,oe.texture=Te)}function K(){const z=re[U];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(z){Ce.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Ce.copy(z))}function Ee(z){He.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),He.copy(z))}function qe(z,Te){let ne=h.get(Te);ne===void 0&&(ne=new WeakMap,h.set(Te,ne));let oe=ne.get(z);oe===void 0&&(oe=t.getUniformBlockIndex(Te,z.name),ne.set(z,oe))}function st(z,Te){const oe=h.get(Te).get(z);c.get(Te)!==oe&&(t.uniformBlockBinding(Te,oe,z.__bindingPointIndex),c.set(Te,oe))}function yt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},U=null,re={},m={},g=new WeakMap,_=[],x=null,E=!1,w=null,y=null,p=null,M=null,S=null,R=null,k=null,D=new xt(0,0,0),I=0,B=!1,b=null,A=null,F=null,J=null,Q=null,Ce.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:le,disable:_e,bindFramebuffer:Xe,drawBuffers:je,useProgram:ot,setBlending:tt,setMaterial:wt,setFlipSided:Fe,setCullFace:lt,setLineWidth:Ke,setPolygonOffset:Ze,setScissorTest:Ut,activeTexture:N,bindTexture:C,unbindTexture:K,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:Ie,texImage3D:it,updateUBOMapping:qe,uniformBlockBinding:st,texStorage2D:$e,texStorage3D:me,texSubImage2D:de,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:Se,scissor:Ve,viewport:Ee,reset:yt}}function eP(t,e,n,i,o,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new _t,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,C){return x?new OffscreenCanvas(N,C):Vu("canvas")}function w(N,C,K){let he=1;const fe=Ut(N);if((fe.width>K||fe.height>K)&&(he=K/Math.max(fe.width,fe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(he*fe.width),Ue=Math.floor(he*fe.height);g===void 0&&(g=E(de,Ue));const ye=C?E(de,Ue):g;return ye.width=de,ye.height=Ue,ye.getContext("2d").drawImage(N,0,0,de,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+de+"x"+Ue+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function y(N){return N.generateMipmaps&&N.minFilter!==$n&&N.minFilter!==ci}function p(N){t.generateMipmap(N)}function M(N,C,K,he,fe=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=C;if(C===t.RED&&(K===t.FLOAT&&(de=t.R32F),K===t.HALF_FLOAT&&(de=t.R16F),K===t.UNSIGNED_BYTE&&(de=t.R8)),C===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.R8UI),K===t.UNSIGNED_SHORT&&(de=t.R16UI),K===t.UNSIGNED_INT&&(de=t.R32UI),K===t.BYTE&&(de=t.R8I),K===t.SHORT&&(de=t.R16I),K===t.INT&&(de=t.R32I)),C===t.RG&&(K===t.FLOAT&&(de=t.RG32F),K===t.HALF_FLOAT&&(de=t.RG16F),K===t.UNSIGNED_BYTE&&(de=t.RG8)),C===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.RG8UI),K===t.UNSIGNED_SHORT&&(de=t.RG16UI),K===t.UNSIGNED_INT&&(de=t.RG32UI),K===t.BYTE&&(de=t.RG8I),K===t.SHORT&&(de=t.RG16I),K===t.INT&&(de=t.RG32I)),C===t.RGB&&K===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),C===t.RGBA){const Ue=fe?ku:gt.getTransfer(he);K===t.FLOAT&&(de=t.RGBA32F),K===t.HALF_FLOAT&&(de=t.RGBA16F),K===t.UNSIGNED_BYTE&&(de=Ue===Ct?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function S(N,C){let K;return N?C===null||C===ys||C===Ss?K=t.DEPTH24_STENCIL8:C===gr?K=t.DEPTH32F_STENCIL8:C===Fu&&(K=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ys||C===Ss?K=t.DEPTH_COMPONENT24:C===gr?K=t.DEPTH_COMPONENT32F:C===Fu&&(K=t.DEPTH_COMPONENT16),K}function R(N,C){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==$n&&N.minFilter!==ci?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function k(N){const C=N.target;C.removeEventListener("dispose",k),I(C),C.isVideoTexture&&m.delete(C)}function D(N){const C=N.target;C.removeEventListener("dispose",D),b(C)}function I(N){const C=i.get(N);if(C.__webglInit===void 0)return;const K=N.source,he=_.get(K);if(he){const fe=he[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&B(N),Object.keys(he).length===0&&_.delete(K)}i.remove(N)}function B(N){const C=i.get(N);t.deleteTexture(C.__webglTexture);const K=N.source,he=_.get(K);delete he[C.__cacheKey],l.memory.textures--}function b(N){const C=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(C.__webglFramebuffer[he]))for(let fe=0;fe<C.__webglFramebuffer[he].length;fe++)t.deleteFramebuffer(C.__webglFramebuffer[he][fe]);else t.deleteFramebuffer(C.__webglFramebuffer[he]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[he])}else{if(Array.isArray(C.__webglFramebuffer))for(let he=0;he<C.__webglFramebuffer.length;he++)t.deleteFramebuffer(C.__webglFramebuffer[he]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let he=0;he<C.__webglColorRenderbuffer.length;he++)C.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[he]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const K=N.textures;for(let he=0,fe=K.length;he<fe;he++){const de=i.get(K[he]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),l.memory.textures--),i.remove(K[he])}i.remove(N)}let A=0;function F(){A=0}function J(){const N=A;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),A+=1,N}function Q(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function ie(N,C){const K=i.get(N);if(N.isVideoTexture&&Ke(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,N,C);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+C)}function se(N,C){const K=i.get(N);if(N.version>0&&K.__version!==N.version){He(K,N,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+C)}function ee(N,C){const K=i.get(N);if(N.version>0&&K.__version!==N.version){He(K,N,C);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+C)}function ae(N,C){const K=i.get(N);if(N.version>0&&K.__version!==N.version){Y(K,N,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+C)}const U={[Hf]:t.REPEAT,[ro]:t.CLAMP_TO_EDGE,[Vf]:t.MIRRORED_REPEAT},re={[$n]:t.NEAREST,[IE]:t.NEAREST_MIPMAP_NEAREST,[Rl]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[lh]:t.LINEAR_MIPMAP_NEAREST,[oo]:t.LINEAR_MIPMAP_LINEAR},j={[jE]:t.NEVER,[JE]:t.ALWAYS,[qE]:t.LESS,[O0]:t.LEQUAL,[YE]:t.EQUAL,[QE]:t.GEQUAL,[KE]:t.GREATER,[$E]:t.NOTEQUAL};function ce(N,C){if(C.type===gr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ci||C.magFilter===lh||C.magFilter===Rl||C.magFilter===oo||C.minFilter===ci||C.minFilter===lh||C.minFilter===Rl||C.minFilter===oo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,U[C.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,U[C.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,U[C.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,re[C.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,re[C.minFilter]),C.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,j[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===$n||C.minFilter!==Rl&&C.minFilter!==oo||C.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ce(N,C){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",k));const he=C.source;let fe=_.get(he);fe===void 0&&(fe={},_.set(he,fe));const de=Q(C);if(de!==N.__cacheKey){fe[de]===void 0&&(fe[de]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,K=!0),fe[de].usedTimes++;const Ue=fe[N.__cacheKey];Ue!==void 0&&(fe[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&B(C)),N.__cacheKey=de,N.__webglTexture=fe[de].texture}return K}function He(N,C,K){let he=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(he=t.TEXTURE_3D);const fe=Ce(N,C),de=C.source;n.bindTexture(he,N.__webglTexture,t.TEXTURE0+K);const Ue=i.get(de);if(de.version!==Ue.__version||fe===!0){n.activeTexture(t.TEXTURE0+K);const ye=gt.getPrimaries(gt.workingColorSpace),Se=C.colorSpace===pr?null:gt.getPrimaries(C.colorSpace),$e=C.colorSpace===pr||ye===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let me=w(C.image,!1,o.maxTextureSize);me=Ze(C,me);const Ie=a.convert(C.format,C.colorSpace),it=a.convert(C.type);let Ve=M(C.internalFormat,Ie,it,C.colorSpace,C.isVideoTexture);ce(he,C);let Ee;const qe=C.mipmaps,st=C.isVideoTexture!==!0,yt=Ue.__version===void 0||fe===!0,z=de.dataReady,Te=R(C,me);if(C.isDepthTexture)Ve=S(C.format===Ms,C.type),yt&&(st?n.texStorage2D(t.TEXTURE_2D,1,Ve,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Ve,me.width,me.height,0,Ie,it,null));else if(C.isDataTexture)if(qe.length>0){st&&yt&&n.texStorage2D(t.TEXTURE_2D,Te,Ve,qe[0].width,qe[0].height);for(let ne=0,oe=qe.length;ne<oe;ne++)Ee=qe[ne],st?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Ie,it,Ee.data):n.texImage2D(t.TEXTURE_2D,ne,Ve,Ee.width,Ee.height,0,Ie,it,Ee.data);C.generateMipmaps=!1}else st?(yt&&n.texStorage2D(t.TEXTURE_2D,Te,Ve,me.width,me.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Ie,it,me.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,me.width,me.height,0,Ie,it,me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){st&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ve,qe[0].width,qe[0].height,me.depth);for(let ne=0,oe=qe.length;ne<oe;ne++)if(Ee=qe[ne],C.format!==wi)if(Ie!==null)if(st){if(z)if(C.layerUpdates.size>0){for(const ge of C.layerUpdates){const We=Ee.width*Ee.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ge,Ee.width,Ee.height,1,Ie,Ee.data.slice(We*ge,We*(ge+1)),0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,me.depth,Ie,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ve,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,me.depth,Ie,it,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ve,Ee.width,Ee.height,me.depth,0,Ie,it,Ee.data)}else{st&&yt&&n.texStorage2D(t.TEXTURE_2D,Te,Ve,qe[0].width,qe[0].height);for(let ne=0,oe=qe.length;ne<oe;ne++)Ee=qe[ne],C.format!==wi?Ie!==null?st?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Ie,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Ie,it,Ee.data):n.texImage2D(t.TEXTURE_2D,ne,Ve,Ee.width,Ee.height,0,Ie,it,Ee.data)}else if(C.isDataArrayTexture)if(st){if(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ve,me.width,me.height,me.depth),z)if(C.layerUpdates.size>0){let ne;switch(it){case t.UNSIGNED_BYTE:switch(Ie){case t.ALPHA:ne=1;break;case t.LUMINANCE:ne=1;break;case t.LUMINANCE_ALPHA:ne=2;break;case t.RGB:ne=3;break;case t.RGBA:ne=4;break;default:throw new Error(`Unknown texel size for format ${Ie}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:ne=1;break;default:throw new Error(`Unknown texel size for type ${it}.`)}const oe=me.width*me.height*ne;for(const ge of C.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,me.width,me.height,1,Ie,it,me.data.slice(oe*ge,oe*(ge+1)));C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ie,it,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,me.width,me.height,me.depth,0,Ie,it,me.data);else if(C.isData3DTexture)st?(yt&&n.texStorage3D(t.TEXTURE_3D,Te,Ve,me.width,me.height,me.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ie,it,me.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,me.width,me.height,me.depth,0,Ie,it,me.data);else if(C.isFramebufferTexture){if(yt)if(st)n.texStorage2D(t.TEXTURE_2D,Te,Ve,me.width,me.height);else{let ne=me.width,oe=me.height;for(let ge=0;ge<Te;ge++)n.texImage2D(t.TEXTURE_2D,ge,Ve,ne,oe,0,Ie,it,null),ne>>=1,oe>>=1}}else if(qe.length>0){if(st&&yt){const ne=Ut(qe[0]);n.texStorage2D(t.TEXTURE_2D,Te,Ve,ne.width,ne.height)}for(let ne=0,oe=qe.length;ne<oe;ne++)Ee=qe[ne],st?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ie,it,Ee):n.texImage2D(t.TEXTURE_2D,ne,Ve,Ie,it,Ee);C.generateMipmaps=!1}else if(st){if(yt){const ne=Ut(me);n.texStorage2D(t.TEXTURE_2D,Te,Ve,ne.width,ne.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,it,me)}else n.texImage2D(t.TEXTURE_2D,0,Ve,Ie,it,me);y(C)&&p(he),Ue.__version=de.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Y(N,C,K){if(C.image.length!==6)return;const he=Ce(N,C),fe=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+K);const de=i.get(fe);if(fe.version!==de.__version||he===!0){n.activeTexture(t.TEXTURE0+K);const Ue=gt.getPrimaries(gt.workingColorSpace),ye=C.colorSpace===pr?null:gt.getPrimaries(C.colorSpace),Se=C.colorSpace===pr||Ue===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const $e=C.isCompressedTexture||C.image[0].isCompressedTexture,me=C.image[0]&&C.image[0].isDataTexture,Ie=[];for(let oe=0;oe<6;oe++)!$e&&!me?Ie[oe]=w(C.image[oe],!0,o.maxCubemapSize):Ie[oe]=me?C.image[oe].image:C.image[oe],Ie[oe]=Ze(C,Ie[oe]);const it=Ie[0],Ve=a.convert(C.format,C.colorSpace),Ee=a.convert(C.type),qe=M(C.internalFormat,Ve,Ee,C.colorSpace),st=C.isVideoTexture!==!0,yt=de.__version===void 0||he===!0,z=fe.dataReady;let Te=R(C,it);ce(t.TEXTURE_CUBE_MAP,C);let ne;if($e){st&&yt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,qe,it.width,it.height);for(let oe=0;oe<6;oe++){ne=Ie[oe].mipmaps;for(let ge=0;ge<ne.length;ge++){const We=ne[ge];C.format!==wi?Ve!==null?st?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,We.width,We.height,Ve,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,We.width,We.height,Ve,Ee,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,qe,We.width,We.height,0,Ve,Ee,We.data)}}}else{if(ne=C.mipmaps,st&&yt){ne.length>0&&Te++;const oe=Ut(Ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){st?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie[oe].width,Ie[oe].height,Ve,Ee,Ie[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Ie[oe].width,Ie[oe].height,0,Ve,Ee,Ie[oe].data);for(let ge=0;ge<ne.length;ge++){const ct=ne[ge].image[oe].image;st?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,ct.width,ct.height,Ve,Ee,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,qe,ct.width,ct.height,0,Ve,Ee,ct.data)}}else{st?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ve,Ee,Ie[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Ve,Ee,Ie[oe]);for(let ge=0;ge<ne.length;ge++){const We=ne[ge];st?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,Ve,Ee,We.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,qe,Ve,Ee,We.image[oe])}}}y(C)&&p(t.TEXTURE_CUBE_MAP),de.__version=fe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function te(N,C,K,he,fe,de){const Ue=a.convert(K.format,K.colorSpace),ye=a.convert(K.type),Se=M(K.internalFormat,Ue,ye,K.colorSpace);if(!i.get(C).__hasExternalTextures){const me=Math.max(1,C.width>>de),Ie=Math.max(1,C.height>>de);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,de,Se,me,Ie,C.depth,0,Ue,ye,null):n.texImage2D(fe,de,Se,me,Ie,0,Ue,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,fe,i.get(K).__webglTexture,0,Fe(C)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,fe,i.get(K).__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(N,C,K){if(t.bindRenderbuffer(t.RENDERBUFFER,N),C.depthBuffer){const he=C.depthTexture,fe=he&&he.isDepthTexture?he.type:null,de=S(C.stencilBuffer,fe),Ue=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=Fe(C);lt(C)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,de,C.width,C.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,de,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,N)}else{const he=C.textures;for(let fe=0;fe<he.length;fe++){const de=he[fe],Ue=a.convert(de.format,de.colorSpace),ye=a.convert(de.type),Se=M(de.internalFormat,Ue,ye,de.colorSpace),$e=Fe(C);K&&lt(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Se,C.width,C.height):lt(C)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Se,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,Se,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ie(C.depthTexture,0);const he=i.get(C.depthTexture).__webglTexture,fe=Fe(C);if(C.depthTexture.format===us)lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,he,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,he,0);else if(C.depthTexture.format===Ms)lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,he,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Xe(N){const C=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");_e(C.__webglFramebuffer,N)}else if(K){C.__webglDepthbuffer=[];for(let he=0;he<6;he++)n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[he]),C.__webglDepthbuffer[he]=t.createRenderbuffer(),le(C.__webglDepthbuffer[he],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=t.createRenderbuffer(),le(C.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(N,C,K){const he=i.get(N);C!==void 0&&te(he.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&Xe(N)}function ot(N){const C=N.texture,K=i.get(N),he=i.get(C);N.addEventListener("dispose",D);const fe=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=C.version,l.memory.textures++),de){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let Se=0;Se<C.mipmaps.length;Se++)K.__webglFramebuffer[ye][Se]=t.createFramebuffer()}else K.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<C.mipmaps.length;ye++)K.__webglFramebuffer[ye]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let ye=0,Se=fe.length;ye<Se;ye++){const $e=i.get(fe[ye]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),l.memory.textures++)}if(N.samples>0&&lt(N)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const Se=fe[ye];K.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[ye]);const $e=a.convert(Se.format,Se.colorSpace),me=a.convert(Se.type),Ie=M(Se.internalFormat,$e,me,Se.colorSpace,N.isXRRenderTarget===!0),it=Fe(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Ie,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,K.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),le(K.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),ce(t.TEXTURE_CUBE_MAP,C);for(let ye=0;ye<6;ye++)if(C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)te(K.__webglFramebuffer[ye][Se],N,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Se);else te(K.__webglFramebuffer[ye],N,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(C)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ye=0,Se=fe.length;ye<Se;ye++){const $e=fe[ye],me=i.get($e);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),ce(t.TEXTURE_2D,$e),te(K.__webglFramebuffer,N,$e,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),y($e)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,he.__webglTexture),ce(ye,C),C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)te(K.__webglFramebuffer[Se],N,C,t.COLOR_ATTACHMENT0,ye,Se);else te(K.__webglFramebuffer,N,C,t.COLOR_ATTACHMENT0,ye,0);y(C)&&p(ye),n.unbindTexture()}N.depthBuffer&&Xe(N)}function H(N){const C=N.textures;for(let K=0,he=C.length;K<he;K++){const fe=C[K];if(y(fe)){const de=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ue=i.get(fe).__webglTexture;n.bindTexture(de,Ue),p(de),n.unbindTexture()}}}const Qe=[],tt=[];function wt(N){if(N.samples>0){if(lt(N)===!1){const C=N.textures,K=N.width,he=N.height;let fe=t.COLOR_BUFFER_BIT;const de=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(N),ye=C.length>1;if(ye)for(let Se=0;Se<C.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Se=0;Se<C.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);const $e=i.get(C[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,K,he,0,0,K,he,fe,t.NEAREST),h===!0&&(Qe.length=0,tt.length=0,Qe.push(t.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qe.push(de),tt.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Se=0;Se<C.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);const $e=i.get(C[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const C=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function Fe(N){return Math.min(o.maxSamples,N.samples)}function lt(N){const C=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ke(N){const C=l.render.frame;m.get(N)!==C&&(m.set(N,C),N.update())}function Ze(N,C){const K=N.colorSpace,he=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Or&&K!==pr&&(gt.getTransfer(K)===Ct?(he!==wi||fe!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=ee,this.setTextureCube=ae,this.rebindTextures=je,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=lt}function tP(t,e){function n(i,o=pr){let a;const l=gt.getTransfer(o);if(i===br)return t.UNSIGNED_BYTE;if(i===b0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===I0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===UE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===DE)return t.BYTE;if(i===NE)return t.SHORT;if(i===Fu)return t.UNSIGNED_SHORT;if(i===L0)return t.INT;if(i===ys)return t.UNSIGNED_INT;if(i===gr)return t.FLOAT;if(i===uc)return t.HALF_FLOAT;if(i===OE)return t.ALPHA;if(i===FE)return t.RGB;if(i===wi)return t.RGBA;if(i===kE)return t.LUMINANCE;if(i===zE)return t.LUMINANCE_ALPHA;if(i===us)return t.DEPTH_COMPONENT;if(i===Ms)return t.DEPTH_STENCIL;if(i===BE)return t.RED;if(i===D0)return t.RED_INTEGER;if(i===HE)return t.RG;if(i===N0)return t.RG_INTEGER;if(i===U0)return t.RGBA_INTEGER;if(i===uh||i===ch||i===hh||i===fh)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ch)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xm||i===Zm||i===jm||i===qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Xm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ym||i===Km||i===$m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ym||i===Km)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===$m)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qm||i===Jm||i===e_||i===t_||i===n_||i===i_||i===r_||i===o_||i===s_||i===a_||i===l_||i===u_||i===c_||i===h_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Qm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===e_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===t_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===n_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===i_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===r_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===o_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===s_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===a_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===l_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===u_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===c_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===h_)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===f_||i===d_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===dh)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===f_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===d_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===VE||i===p_||i===m_||i===__)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===dh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===p_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===m_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===__)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nP extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $l extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iP={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let o=null,a=null,l=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,i),p=this._getHandJoint(d,w);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(iP)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $l;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oP=`
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

}`;class sP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const o=new Dn,a=e.properties.get(o);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ir({vertexShader:rP,fragmentShader:oP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ti(new fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class aP extends Cs{constructor(e,n){super();const i=this;let o=null,a=1,l=null,c="local-floor",h=1,d=null,m=null,g=null,_=null,x=null,E=null;const w=new sP,y=n.getContextAttributes();let p=null,M=null;const S=[],R=[],k=new _t;let D=null;const I=new Yn;I.layers.enable(1),I.viewport=new rn;const B=new Yn;B.layers.enable(2),B.viewport=new rn;const b=[I,B],A=new nP;A.layers.enable(1),A.layers.enable(2);let F=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=S[Y];return te===void 0&&(te=new Bh,S[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=S[Y];return te===void 0&&(te=new Bh,S[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=S[Y];return te===void 0&&(te=new Bh,S[Y]=te),te.getHandSpace()};function Q(Y){const te=R.indexOf(Y.inputSource);if(te===-1)return;const le=S[te];le!==void 0&&(le.update(Y.inputSource,Y.frame,d||l),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ie(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",se);for(let Y=0;Y<S.length;Y++){const te=R[Y];te!==null&&(R[Y]=null,S[Y].disconnect(te))}F=null,J=null,w.reset(),e.setRenderTarget(p),x=null,_=null,g=null,o=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Y){d=Y},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,n,te),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new mo(x.framebufferWidth,x.framebufferHeight,{format:wi,type:br,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let te=null,le=null,_e=null;y.depth&&(_e=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=y.stencil?Ms:us,le=y.stencil?Ss:ys);const Xe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:a};g=new XRWebGLBinding(o,n),_=g.createProjectionLayer(Xe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),M=new mo(_.textureWidth,_.textureHeight,{format:wi,type:br,depthTexture:new K0(_.textureWidth,_.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await o.requestReferenceSpace(c),He.setContext(o),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Y){for(let te=0;te<Y.removed.length;te++){const le=Y.removed[te],_e=R.indexOf(le);_e>=0&&(R[_e]=null,S[_e].disconnect(le))}for(let te=0;te<Y.added.length;te++){const le=Y.added[te];let _e=R.indexOf(le);if(_e===-1){for(let je=0;je<S.length;je++)if(je>=R.length){R.push(le),_e=je;break}else if(R[je]===null){R[je]=le,_e=je;break}if(_e===-1)break}const Xe=S[_e];Xe&&Xe.connect(le)}}const ee=new $,ae=new $;function U(Y,te,le){ee.setFromMatrixPosition(te.matrixWorld),ae.setFromMatrixPosition(le.matrixWorld);const _e=ee.distanceTo(ae),Xe=te.projectionMatrix.elements,je=le.projectionMatrix.elements,ot=Xe[14]/(Xe[10]-1),H=Xe[14]/(Xe[10]+1),Qe=(Xe[9]+1)/Xe[5],tt=(Xe[9]-1)/Xe[5],wt=(Xe[8]-1)/Xe[0],Fe=(je[8]+1)/je[0],lt=ot*wt,Ke=ot*Fe,Ze=_e/(-wt+Fe),Ut=Ze*-wt;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(Ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const N=ot+Ze,C=H+Ze,K=lt-Ut,he=Ke+(_e-Ut),fe=Qe*H/C*N,de=tt*H/C*N;Y.projectionMatrix.makePerspective(K,he,fe,de,N,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function re(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;w.texture!==null&&(Y.near=w.depthNear,Y.far=w.depthFar),A.near=B.near=I.near=Y.near,A.far=B.far=I.far=Y.far,(F!==A.near||J!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,J=A.far,I.near=F,I.far=J,B.near=F,B.far=J,I.updateProjectionMatrix(),B.updateProjectionMatrix(),Y.updateProjectionMatrix());const te=Y.parent,le=A.cameras;re(A,te);for(let _e=0;_e<le.length;_e++)re(le[_e],te);le.length===2?U(A,I,B):A.projectionMatrix.copy(I.projectionMatrix),j(Y,A,te)};function j(Y,te,le){le===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(Y){h=Y,_!==null&&(_.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let ce=null;function Ce(Y,te){if(m=te.getViewerPose(d||l),E=te,m!==null){const le=m.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let _e=!1;le.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let je=0;je<le.length;je++){const ot=le[je];let H=null;if(x!==null)H=x.getViewport(ot);else{const tt=g.getViewSubImage(_,ot);H=tt.viewport,je===0&&(e.setRenderTargetTextures(M,tt.colorTexture,_.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(M))}let Qe=b[je];Qe===void 0&&(Qe=new Yn,Qe.layers.enable(je),Qe.viewport=new rn,b[je]=Qe),Qe.matrix.fromArray(ot.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ot.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(H.x,H.y,H.width,H.height),je===0&&(A.matrix.copy(Qe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(Qe)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const je=g.getDepthInformation(le[0]);je&&je.isValid&&je.texture&&w.init(e,je,o.renderState)}}for(let le=0;le<S.length;le++){const _e=R[le],Xe=S[le];_e!==null&&Xe!==void 0&&Xe.update(_e,te,d||l)}ce&&ce(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),E=null}const He=new Y0;He.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){ce=Y},this.dispose=function(){}}}const qr=new Qi,lP=new qt;function uP(t,e){function n(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function i(y,p){p.color.getRGB(y.fogColor.value,X0(t)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function o(y,p,M,S,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(y,p):p.isMeshToonMaterial?(a(y,p),g(y,p)):p.isMeshPhongMaterial?(a(y,p),m(y,p)):p.isMeshStandardMaterial?(a(y,p),_(y,p),p.isMeshPhysicalMaterial&&x(y,p,R)):p.isMeshMatcapMaterial?(a(y,p),E(y,p)):p.isMeshDepthMaterial?a(y,p):p.isMeshDistanceMaterial?(a(y,p),w(y,p)):p.isMeshNormalMaterial?a(y,p):p.isLineBasicMaterial?(l(y,p),p.isLineDashedMaterial&&c(y,p)):p.isPointsMaterial?h(y,p,M,S):p.isSpriteMaterial?d(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,n(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,n(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===In&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,n(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===In&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,n(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,n(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,R=M.envMapRotation;S&&(y.envMap.value=S,qr.copy(R),qr.x*=-1,qr.y*=-1,qr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(lP.makeRotationFromEuler(qr)),y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,y.aoMapTransform))}function l(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,n(p.map,y.mapTransform))}function c(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function h(y,p,M,S){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*M,y.scale.value=S*.5,p.map&&(y.map.value=p.map,n(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function d(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,n(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function m(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function g(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function _(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function x(y,p,M){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=M.texture,y.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,p){p.matcap&&(y.matcap.value=p.matcap)}function w(y,p){const M=e.get(p).light;y.referencePosition.value.setFromMatrixPosition(M.matrixWorld),y.nearDistance.value=M.shadow.camera.near,y.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function cP(t,e,n,i){let o={},a={},l=[];const c=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function h(M,S){const R=S.program;i.uniformBlockBinding(M,R)}function d(M,S){let R=o[M.id];R===void 0&&(E(M),R=m(M),o[M.id]=R,M.addEventListener("dispose",y));const k=S.program;i.updateUBOMapping(M,k);const D=e.render.frame;a[M.id]!==D&&(_(M),a[M.id]=D)}function m(M){const S=g();M.__bindingPointIndex=S;const R=t.createBuffer(),k=M.__size,D=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,k,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,R),R}function g(){for(let M=0;M<c;M++)if(l.indexOf(M)===-1)return l.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(M){const S=o[M.id],R=M.uniforms,k=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let D=0,I=R.length;D<I;D++){const B=Array.isArray(R[D])?R[D]:[R[D]];for(let b=0,A=B.length;b<A;b++){const F=B[b];if(x(F,D,b,k)===!0){const J=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let se=0;se<Q.length;se++){const ee=Q[se],ae=w(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,J+ie,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,ie),ie+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(M,S,R,k){const D=M.value,I=S+"_"+R;if(k[I]===void 0)return typeof D=="number"||typeof D=="boolean"?k[I]=D:k[I]=D.clone(),!0;{const B=k[I];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return k[I]=D,!0}else if(B.equals(D)===!1)return B.copy(D),!0}return!1}function E(M){const S=M.uniforms;let R=0;const k=16;for(let I=0,B=S.length;I<B;I++){const b=Array.isArray(S[I])?S[I]:[S[I]];for(let A=0,F=b.length;A<F;A++){const J=b[A],Q=Array.isArray(J.value)?J.value:[J.value];for(let ie=0,se=Q.length;ie<se;ie++){const ee=Q[ie],ae=w(ee),U=R%k;U!==0&&k-U<ae.boundary&&(R+=k-U),J.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=R,R+=ae.storage}}}const D=R%k;return D>0&&(R+=k-D),M.__size=R,M.__cache={},this}function w(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function y(M){const S=M.target;S.removeEventListener("dispose",y);const R=l.indexOf(S.__bindingPointIndex);l.splice(R,1),t.deleteBuffer(o[S.id]),delete o[S.id],delete a[S.id]}function p(){for(const M in o)t.deleteBuffer(o[M]);l=[],o={},a={}}return{bind:h,update:d,dispose:p}}class hP{constructor(e={}){const{canvas:n=tw(),context:i=null,depth:o=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=l;const x=new Uint32Array(4),E=new Int32Array(4);let w=null,y=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=Cr,this.toneMappingExposure=1;const S=this;let R=!1,k=0,D=0,I=null,B=-1,b=null;const A=new rn,F=new rn;let J=null;const Q=new xt(0);let ie=0,se=n.width,ee=n.height,ae=1,U=null,re=null;const j=new rn(0,0,se,ee),ce=new rn(0,0,se,ee);let Ce=!1;const He=new q0;let Y=!1,te=!1;const le=new qt,_e=new $,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function ot(){return I===null?ae:1}let H=i;function Qe(P,V){return n.getContext(P,V)}try{const P={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hd}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",oe,!1),H===null){const V="webgl2";if(H=Qe(V,P),H===null)throw Qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let tt,wt,Fe,lt,Ke,Ze,Ut,N,C,K,he,fe,de,Ue,ye,Se,$e,me,Ie,it,Ve,Ee,qe,st;function yt(){tt=new xA(H),tt.init(),Ee=new tP(H,tt),wt=new fA(H,tt,e,Ee),Fe=new JC(H),lt=new MA(H),Ke=new zC,Ze=new eP(H,tt,Fe,Ke,wt,Ee,lt),Ut=new pA(S),N=new vA(S),C=new Pw(H),qe=new cA(H,C),K=new yA(H,C,lt,qe),he=new wA(H,K,C,lt),Ie=new EA(H,wt,Ze),Se=new dA(Ke),fe=new kC(S,Ut,N,tt,wt,qe,Se),de=new uP(S,Ke),Ue=new HC,ye=new jC(tt),me=new uA(S,Ut,N,Fe,he,_,h),$e=new QC(S,he,wt),st=new cP(H,lt,wt,Fe),it=new hA(H,tt,lt),Ve=new SA(H,tt,lt),lt.programs=fe.programs,S.capabilities=wt,S.extensions=tt,S.properties=Ke,S.renderLists=Ue,S.shadowMap=$e,S.state=Fe,S.info=lt}yt();const z=new aP(S,H);this.xr=z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(P){P!==void 0&&(ae=P,this.setSize(se,ee,!1))},this.getSize=function(P){return P.set(se,ee)},this.setSize=function(P,V,X=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=P,ee=V,n.width=Math.floor(P*ae),n.height=Math.floor(V*ae),X===!0&&(n.style.width=P+"px",n.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(se*ae,ee*ae).floor()},this.setDrawingBufferSize=function(P,V,X){se=P,ee=V,ae=X,n.width=Math.floor(P*X),n.height=Math.floor(V*X),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,V,X,Z){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,V,X,Z),Fe.viewport(A.copy(j).multiplyScalar(ae).round())},this.getScissor=function(P){return P.copy(ce)},this.setScissor=function(P,V,X,Z){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,V,X,Z),Fe.scissor(F.copy(ce).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(P){Fe.setScissorTest(Ce=P)},this.setOpaqueSort=function(P){U=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(P=!0,V=!0,X=!0){let Z=0;if(P){let G=!1;if(I!==null){const ve=I.texture.format;G=ve===U0||ve===N0||ve===D0}if(G){const ve=I.texture.type,we=ve===br||ve===ys||ve===Fu||ve===Ss||ve===b0||ve===I0,Re=me.getClearColor(),Le=me.getClearAlpha(),ke=Re.r,Ge=Re.g,Oe=Re.b;we?(x[0]=ke,x[1]=Ge,x[2]=Oe,x[3]=Le,H.clearBufferuiv(H.COLOR,0,x)):(E[0]=ke,E[1]=Ge,E[2]=Oe,E[3]=Le,H.clearBufferiv(H.COLOR,0,E))}else Z|=H.COLOR_BUFFER_BIT}V&&(Z|=H.DEPTH_BUFFER_BIT),X&&(Z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),Ue.dispose(),ye.dispose(),Ke.dispose(),Ut.dispose(),N.dispose(),he.dispose(),qe.dispose(),st.dispose(),fe.dispose(),z.dispose(),z.removeEventListener("sessionstart",Gn),z.removeEventListener("sessionend",Sn),Ri.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=lt.autoReset,V=$e.enabled,X=$e.autoUpdate,Z=$e.needsUpdate,G=$e.type;yt(),lt.autoReset=P,$e.enabled=V,$e.autoUpdate=X,$e.needsUpdate=Z,$e.type=G}function oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){const V=P.target;V.removeEventListener("dispose",ge),We(V)}function We(P){ct(P),Ke.remove(P)}function ct(P){const V=Ke.get(P).programs;V!==void 0&&(V.forEach(function(X){fe.releaseProgram(X)}),P.isShaderMaterial&&fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,X,Z,G,ve){V===null&&(V=Xe);const we=G.isMesh&&G.matrixWorld.determinant()<0,Re=Za(P,V,X,Z,G);Fe.setMaterial(Z,we);let Le=X.index,ke=1;if(Z.wireframe===!0){if(Le=K.getWireframeAttribute(X),Le===void 0)return;ke=2}const Ge=X.drawRange,Oe=X.attributes.position;let dt=Ge.start*ke,Rt=(Ge.start+Ge.count)*ke;ve!==null&&(dt=Math.max(dt,ve.start*ke),Rt=Math.min(Rt,(ve.start+ve.count)*ke)),Le!==null?(dt=Math.max(dt,0),Rt=Math.min(Rt,Le.count)):Oe!=null&&(dt=Math.max(dt,0),Rt=Math.min(Rt,Oe.count));const St=Rt-dt;if(St<0||St===1/0)return;qe.setup(G,Z,Re,X,Le);let Xt,pt=it;if(Le!==null&&(Xt=C.get(Le),pt=Ve,pt.setIndex(Xt)),G.isMesh)Z.wireframe===!0?(Fe.setLineWidth(Z.wireframeLinewidth*ot()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(G.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),Fe.setLineWidth(Ne*ot()),G.isLineSegments?pt.setMode(H.LINES):G.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else G.isPoints?pt.setMode(H.POINTS):G.isSprite&&pt.setMode(H.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pt.renderInstances(dt,St,G.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,kt=Math.min(X.instanceCount,Ne);pt.renderInstances(dt,St,kt)}else pt.render(dt,St)};function bt(P,V,X){P.transparent===!0&&P.side===Gi&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,Fr(P,V,X),P.side=Lr,P.needsUpdate=!0,Fr(P,V,X),P.side=Gi):Fr(P,V,X)}this.compile=function(P,V,X=null){X===null&&(X=P),y=ye.get(X),y.init(V),M.push(y),X.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),P!==X&&P.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const Z=new Set;return P.traverse(function(G){const ve=G.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Re=ve[we];bt(Re,X,G),Z.add(Re)}else bt(ve,X,G),Z.add(ve)}),M.pop(),y=null,Z},this.compileAsync=function(P,V,X=null){const Z=this.compile(P,V,X);return new Promise(G=>{function ve(){if(Z.forEach(function(we){Ke.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){G(P);return}setTimeout(ve,10)}tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Bt=null;function mt(P){Bt&&Bt(P)}function Gn(){Ri.stop()}function Sn(){Ri.start()}const Ri=new Y0;Ri.setAnimationLoop(mt),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(P){Bt=P,z.setAnimationLoop(P),P===null?Ri.stop():Ri.start()},z.addEventListener("sessionstart",Gn),z.addEventListener("sessionend",Sn),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,V,I),y=ye.get(P,M.length),y.init(V),M.push(y),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),He.setFromProjectionMatrix(le),te=this.localClippingEnabled,Y=Se.init(this.clippingPlanes,te),w=Ue.get(P,p.length),w.init(),p.push(w),z.enabled===!0&&z.isPresenting===!0){const ve=S.xr.getDepthSensingMesh();ve!==null&&Ls(ve,V,-1/0,S.sortObjects)}Ls(P,V,0,S.sortObjects),w.finish(),S.sortObjects===!0&&w.sort(U,re),je=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,je&&me.addToRenderList(w,P),this.info.render.frame++,Y===!0&&Se.beginShadows();const X=y.state.shadowsArray;$e.render(X,P,V),Y===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=w.opaque,G=w.transmissive;if(y.setupLights(),V.isArrayCamera){const ve=V.cameras;if(G.length>0)for(let we=0,Re=ve.length;we<Re;we++){const Le=ve[we];Xa(Z,G,P,Le)}je&&me.render(P);for(let we=0,Re=ve.length;we<Re;we++){const Le=ve[we];Wa(w,P,Le,Le.viewport)}}else G.length>0&&Xa(Z,G,P,V),je&&me.render(P),Wa(w,P,V);I!==null&&(Ze.updateMultisampleRenderTarget(I),Ze.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(S,P,V),qe.resetDefaultState(),B=-1,b=null,M.pop(),M.length>0?(y=M[M.length-1],Y===!0&&Se.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,p.pop(),p.length>0?w=p[p.length-1]:w=null};function Ls(P,V,X,Z){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||He.intersectsSprite(P)){Z&&_e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(le);const we=he.update(P),Re=P.material;Re.visible&&w.push(P,we,Re,X,_e.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||He.intersectsObject(P))){const we=he.update(P),Re=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),_e.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(P.matrixWorld).applyMatrix4(le)),Array.isArray(Re)){const Le=we.groups;for(let ke=0,Ge=Le.length;ke<Ge;ke++){const Oe=Le[ke],dt=Re[Oe.materialIndex];dt&&dt.visible&&w.push(P,we,dt,X,_e.z,Oe)}}else Re.visible&&w.push(P,we,Re,X,_e.z,null)}}const ve=P.children;for(let we=0,Re=ve.length;we<Re;we++)Ls(ve[we],V,X,Z)}function Wa(P,V,X,Z){const G=P.opaque,ve=P.transmissive,we=P.transparent;y.setupLightsView(X),Y===!0&&Se.setGlobalState(S.clippingPlanes,X),Z&&Fe.viewport(A.copy(Z)),G.length>0&&pn(G,V,X),ve.length>0&&pn(ve,V,X),we.length>0&&pn(we,V,X),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Xa(P,V,X,Z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[Z.id]===void 0&&(y.state.transmissionRenderTarget[Z.id]=new mo(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?uc:br,minFilter:oo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ve=y.state.transmissionRenderTarget[Z.id],we=Z.viewport||A;ve.setSize(we.z,we.w);const Re=S.getRenderTarget();S.setRenderTarget(ve),S.getClearColor(Q),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),je?me.render(X):S.clear();const Le=S.toneMapping;S.toneMapping=Cr;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),y.setupLightsView(Z),Y===!0&&Se.setGlobalState(S.clippingPlanes,Z),pn(P,X,Z),Ze.updateMultisampleRenderTarget(ve),Ze.updateRenderTargetMipmap(ve),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Oe=0,dt=V.length;Oe<dt;Oe++){const Rt=V[Oe],St=Rt.object,Xt=Rt.geometry,pt=Rt.material,Ne=Rt.group;if(pt.side===Gi&&St.layers.test(Z.layers)){const kt=pt.side;pt.side=In,pt.needsUpdate=!0,De(St,X,Z,Xt,pt,Ne),pt.side=kt,pt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ze.updateMultisampleRenderTarget(ve),Ze.updateRenderTargetMipmap(ve))}S.setRenderTarget(Re),S.setClearColor(Q,ie),ke!==void 0&&(Z.viewport=ke),S.toneMapping=Le}function pn(P,V,X){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=P.length;G<ve;G++){const we=P[G],Re=we.object,Le=we.geometry,ke=Z===null?we.material:Z,Ge=we.group;Re.layers.test(X.layers)&&De(Re,V,X,Le,ke,Ge)}}function De(P,V,X,Z,G,ve){P.onBeforeRender(S,V,X,Z,G,ve),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(S,V,X,Z,P,ve),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,S.renderBufferDirect(X,V,Z,G,P,ve),G.side=Lr,G.needsUpdate=!0,S.renderBufferDirect(X,V,Z,G,P,ve),G.side=Gi):S.renderBufferDirect(X,V,Z,G,P,ve),P.onAfterRender(S,V,X,Z,G,ve)}function Fr(P,V,X){V.isScene!==!0&&(V=Xe);const Z=Ke.get(P),G=y.state.lights,ve=y.state.shadowsArray,we=G.state.version,Re=fe.getParameters(P,G.state,ve,V,X),Le=fe.getProgramCacheKey(Re);let ke=Z.programs;Z.environment=P.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(P.isMeshStandardMaterial?N:Ut).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,ke===void 0&&(P.addEventListener("dispose",ge),ke=new Map,Z.programs=ke);let Ge=ke.get(Le);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===we)return Is(P,Re),Ge}else Re.uniforms=fe.getUniforms(P),P.onBuild(X,Re,S),P.onBeforeCompile(Re,S),Ge=fe.acquireProgram(Re,Le),ke.set(Le,Ge),Z.uniforms=Re.uniforms;const Oe=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Oe.clippingPlanes=Se.uniform),Is(P,Re),Z.needsLights=ja(P),Z.lightsStateVersion=we,Z.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function bs(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=cu.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Is(P,V){const X=Ke.get(P);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function Za(P,V,X,Z,G){V.isScene!==!0&&(V=Xe),Ze.resetTextureUnits();const ve=V.fog,we=Z.isMeshStandardMaterial?V.environment:null,Re=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Or,Le=(Z.isMeshStandardMaterial?N:Ut).get(Z.envMap||we),ke=Z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Rt=!!X.morphAttributes.color;let St=Cr;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(St=S.toneMapping);const Xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=Xt!==void 0?Xt.length:0,Ne=Ke.get(Z),kt=y.state.lights;if(Y===!0&&(te===!0||P!==b)){const an=P===b&&Z.id===B;Se.setState(Z,P,an)}let be=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==kt.state.version||Ne.outputColorSpace!==Re||G.isBatchedMesh&&Ne.batching===!1||!G.isBatchedMesh&&Ne.batching===!0||G.isBatchedMesh&&Ne.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ne.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ne.instancing===!1||!G.isInstancedMesh&&Ne.instancing===!0||G.isSkinnedMesh&&Ne.skinning===!1||!G.isSkinnedMesh&&Ne.skinning===!0||G.isInstancedMesh&&Ne.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ne.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ne.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ne.instancingMorph===!1&&G.morphTexture!==null||Ne.envMap!==Le||Z.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Se.numPlanes||Ne.numIntersection!==Se.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ge||Ne.morphTargets!==Oe||Ne.morphNormals!==dt||Ne.morphColors!==Rt||Ne.toneMapping!==St||Ne.morphTargetsCount!==pt)&&(be=!0):(be=!0,Ne.__version=Z.version);let ht=Ne.currentProgram;be===!0&&(ht=Fr(Z,V,G));let Li=!1,Mn=!1,pi=!1;const Ot=ht.getUniforms(),ze=Ne.uniforms;if(Fe.useProgram(ht.program)&&(Li=!0,Mn=!0,pi=!0),Z.id!==B&&(B=Z.id,Mn=!0),Li||b!==P){Ot.setValue(H,"projectionMatrix",P.projectionMatrix),Ot.setValue(H,"viewMatrix",P.matrixWorldInverse);const an=Ot.map.cameraPosition;an!==void 0&&an.setValue(H,_e.setFromMatrixPosition(P.matrixWorld)),wt.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Mn=!0,pi=!0)}if(G.isSkinnedMesh){Ot.setOptional(H,G,"bindMatrix"),Ot.setOptional(H,G,"bindMatrixInverse");const an=G.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ot.setValue(H,"boneTexture",an.boneTexture,Ze))}G.isBatchedMesh&&(Ot.setOptional(H,G,"batchingTexture"),Ot.setValue(H,"batchingTexture",G._matricesTexture,Ze),Ot.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Ot.setValue(H,"batchingColorTexture",G._colorsTexture,Ze));const Tt=X.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&Ie.update(G,X,ht),(Mn||Ne.receiveShadow!==G.receiveShadow)&&(Ne.receiveShadow=G.receiveShadow,Ot.setValue(H,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ze.envMap.value=Le,ze.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(ze.envMapIntensity.value=V.environmentIntensity),Mn&&(Ot.setValue(H,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&Ds(ze,pi),ve&&Z.fog===!0&&de.refreshFogUniforms(ze,ve),de.refreshMaterialUniforms(ze,Z,ae,ee,y.state.transmissionRenderTarget[P.id]),cu.upload(H,bs(Ne),ze,Ze)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cu.upload(H,bs(Ne),ze,Ze),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(H,"center",G.center),Ot.setValue(H,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(H,"normalMatrix",G.normalMatrix),Ot.setValue(H,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const an=Z.uniformsGroups;for(let er=0,En=an.length;er<En;er++){const qa=an[er];st.update(qa,ht),st.bind(qa,ht)}}return ht}function Ds(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function ja(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,V,X){Ke.get(P.texture).__webglTexture=V,Ke.get(P.depthTexture).__webglTexture=X;const Z=Ke.get(P);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=X===void 0,Z.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const X=Ke.get(P);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,X=0){I=P,k=V,D=X;let Z=!0,G=null,ve=!1,we=!1;if(P){const Le=Ke.get(P);Le.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(H.FRAMEBUFFER,null),Z=!1):Le.__webglFramebuffer===void 0?Ze.setupRenderTarget(P):Le.__hasExternalTextures&&Ze.rebindTextures(P,Ke.get(P.texture).__webglTexture,Ke.get(P.depthTexture).__webglTexture);const ke=P.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ge=Ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?G=Ge[V][X]:G=Ge[V],ve=!0):P.samples>0&&Ze.useMultisampledRTT(P)===!1?G=Ke.get(P).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[X]:G=Ge,A.copy(P.viewport),F.copy(P.scissor),J=P.scissorTest}else A.copy(j).multiplyScalar(ae).floor(),F.copy(ce).multiplyScalar(ae).floor(),J=Ce;if(Fe.bindFramebuffer(H.FRAMEBUFFER,G)&&Z&&Fe.drawBuffers(P,G),Fe.viewport(A),Fe.scissor(F),Fe.setScissorTest(J),ve){const Le=Ke.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,X)}else if(we){const Le=Ke.get(P.texture),ke=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,ke)}B=-1},this.readRenderTargetPixels=function(P,V,X,Z,G,ve,we){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Fe.bindFramebuffer(H.FRAMEBUFFER,Re);try{const Le=P.texture,ke=Le.format,Ge=Le.type;if(!wt.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-Z&&X>=0&&X<=P.height-G&&H.readPixels(V,X,Z,G,Ee.convert(ke),Ee.convert(Ge),ve)}finally{const Le=I!==null?Ke.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(P,V,X,Z,G,ve,we){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Fe.bindFramebuffer(H.FRAMEBUFFER,Re);try{const Le=P.texture,ke=Le.format,Ge=Le.type;if(!wt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-Z&&X>=0&&X<=P.height-G){const Oe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Oe),H.bufferData(H.PIXEL_PACK_BUFFER,ve.byteLength,H.STREAM_READ),H.readPixels(V,X,Z,G,Ee.convert(ke),Ee.convert(Ge),0),H.flush();const dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await nw(H,dt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Oe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ve)}finally{H.deleteBuffer(Oe),H.deleteSync(dt)}return ve}}finally{const Le=I!==null?Ke.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(P,V=null,X=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const Z=Math.pow(2,-X),G=Math.floor(P.image.width*Z),ve=Math.floor(P.image.height*Z),we=V!==null?V.x:0,Re=V!==null?V.y:0;Ze.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,we,Re,G,ve),Fe.unbindTexture()},this.copyTextureToTexture=function(P,V,X=null,Z=null,G=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1],V=arguments[2],G=arguments[3]||0,X=null);let ve,we,Re,Le,ke,Ge;X!==null?(ve=X.max.x-X.min.x,we=X.max.y-X.min.y,Re=X.min.x,Le=X.min.y):(ve=P.image.width,we=P.image.height,Re=0,Le=0),Z!==null?(ke=Z.x,Ge=Z.y):(ke=0,Ge=0);const Oe=Ee.convert(V.format),dt=Ee.convert(V.type);Ze.setTexture2D(V,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const Rt=H.getParameter(H.UNPACK_ROW_LENGTH),St=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xt=H.getParameter(H.UNPACK_SKIP_PIXELS),pt=H.getParameter(H.UNPACK_SKIP_ROWS),Ne=H.getParameter(H.UNPACK_SKIP_IMAGES),kt=P.isCompressedTexture?P.mipmaps[G]:P.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,kt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),H.pixelStorei(H.UNPACK_SKIP_ROWS,Le),P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,ke,Ge,ve,we,Oe,dt,kt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,ke,Ge,kt.width,kt.height,Oe,kt.data):H.texSubImage2D(H.TEXTURE_2D,G,ke,Ge,Oe,dt,kt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Rt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),H.pixelStorei(H.UNPACK_SKIP_ROWS,pt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ne),G===0&&V.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(P,V,X=null,Z=null,G=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Z=arguments[1]||null,P=arguments[2],V=arguments[3],G=arguments[4]||0);let ve,we,Re,Le,ke,Ge,Oe,dt,Rt;const St=P.isCompressedTexture?P.mipmaps[G]:P.image;X!==null?(ve=X.max.x-X.min.x,we=X.max.y-X.min.y,Re=X.max.z-X.min.z,Le=X.min.x,ke=X.min.y,Ge=X.min.z):(ve=St.width,we=St.height,Re=St.depth,Le=0,ke=0,Ge=0),Z!==null?(Oe=Z.x,dt=Z.y,Rt=Z.z):(Oe=0,dt=0,Rt=0);const Xt=Ee.convert(V.format),pt=Ee.convert(V.type);let Ne;if(V.isData3DTexture)Ze.setTexture3D(V,0),Ne=H.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Ze.setTexture2DArray(V,0),Ne=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const kt=H.getParameter(H.UNPACK_ROW_LENGTH),be=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ht=H.getParameter(H.UNPACK_SKIP_PIXELS),Li=H.getParameter(H.UNPACK_SKIP_ROWS),Mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ge),P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Ne,G,Oe,dt,Rt,ve,we,Re,Xt,pt,St.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ne,G,Oe,dt,Rt,ve,we,Re,Xt,St.data):H.texSubImage3D(Ne,G,Oe,dt,Rt,ve,we,Re,Xt,pt,St),H.pixelStorei(H.UNPACK_ROW_LENGTH,kt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ht),H.pixelStorei(H.UNPACK_SKIP_ROWS,Li),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mn),G===0&&V.generateMipmaps&&H.generateMipmap(Ne),Fe.unbindTexture()},this.initRenderTarget=function(P){Ke.get(P).__webglFramebuffer===void 0&&Ze.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ze.setTextureCube(P,0):P.isData3DTexture?Ze.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ze.setTexture2DArray(P,0):Ze.setTexture2D(P,0),Fe.unbindTexture()},this.resetState=function(){k=0,D=0,I=null,Fe.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vd?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===cc?"display-p3":"srgb"}}class fP extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);const dP=()=>{const t=nt.useRef();return nt.useEffect(()=>{const e=new fP,n=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const i=new hP({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);const o=new Ps,a=new Wd({color:65280}),l=new Ti(o,a);e.add(l);const c=()=>{requestAnimationFrame(c),l.rotation.x+=.01,l.rotation.y+=.01,i.render(e,n)};return c(),()=>{t.current.removeChild(i.domElement)}},[]),xe.jsx("div",{ref:t})};function pP(){return xe.jsxs(xe.Fragment,{children:[xe.jsx(TM,{}),xe.jsx(CM,{}),xe.jsx(PM,{}),xe.jsx(dP,{}),xe.jsx(qM,{}),xe.jsx(AM,{}),xe.jsx(EM,{}),xe.jsx(wM,{})]})}Hh.createRoot(document.getElementById("root")).render(xe.jsx(hu.StrictMode,{children:xe.jsx(pP,{})}));
