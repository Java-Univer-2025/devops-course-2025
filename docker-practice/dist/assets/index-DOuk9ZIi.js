(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))f(C);new MutationObserver(C=>{for(const H of C)if(H.type==="childList")for(const q of H.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&f(q)}).observe(document,{childList:!0,subtree:!0});function A(C){const H={};return C.integrity&&(H.integrity=C.integrity),C.referrerPolicy&&(H.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?H.credentials="include":C.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function f(C){if(C.ep)return;C.ep=!0;const H=A(C);fetch(C.href,H)}})();function Tx(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var cd={exports:{}},ja={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function lf(){if(gx)return ja;gx=1;var y=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function A(f,C,H){var q=null;if(H!==void 0&&(q=""+H),C.key!==void 0&&(q=""+C.key),"key"in C){H={};for(var le in C)le!=="key"&&(H[le]=C[le])}else H=C;return C=H.ref,{$$typeof:y,type:f,key:q,ref:C!==void 0?C:null,props:H}}return ja.Fragment=w,ja.jsx=A,ja.jsxs=A,ja}var bx;function tf(){return bx||(bx=1,cd.exports=lf()),cd.exports}var t=tf(),rd={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function sf(){if(vx)return G;vx=1;var y=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),me=Symbol.iterator;function Je(u){return u===null||typeof u!="object"?null:(u=me&&u[me]||u["@@iterator"],typeof u=="function"?u:null)}var Ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,Tl={};function We(u,S,k){this.props=u,this.context=S,this.refs=Tl,this.updater=k||Ce}We.prototype.isReactComponent={},We.prototype.setState=function(u,S){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,S,"setState")},We.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function $l(){}$l.prototype=We.prototype;function Re(u,S,k){this.props=u,this.context=S,this.refs=Tl,this.updater=k||Ce}var cl=Re.prototype=new $l;cl.constructor=Re,Me(cl,We.prototype),cl.isPureReactComponent=!0;var Nl=Array.isArray;function He(){}var W={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function yl(u,S,k){var T=k.ref;return{$$typeof:y,type:u,key:S,ref:T!==void 0?T:null,props:k}}function Lt(u,S){return yl(u.type,S,u.props)}function Sl(u){return typeof u=="object"&&u!==null&&u.$$typeof===y}function Ge(u){var S={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(k){return S[k]})}var yt=/\/+/g;function Ol(u,S){return typeof u=="object"&&u!==null&&u.key!=null?Ge(""+u.key):S.toString(36)}function gl(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(He,He):(u.status="pending",u.then(function(S){u.status==="pending"&&(u.status="fulfilled",u.value=S)},function(S){u.status==="pending"&&(u.status="rejected",u.reason=S)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function v(u,S,k,T,Y){var Q=typeof u;(Q==="undefined"||Q==="boolean")&&(u=null);var te=!1;if(u===null)te=!0;else switch(Q){case"bigint":case"string":case"number":te=!0;break;case"object":switch(u.$$typeof){case y:case w:te=!0;break;case F:return te=u._init,v(te(u._payload),S,k,T,Y)}}if(te)return Y=Y(u),te=T===""?"."+Ol(u,0):T,Nl(Y)?(k="",te!=null&&(k=te.replace(yt,"$&/")+"/"),v(Y,S,k,"",function(As){return As})):Y!=null&&(Sl(Y)&&(Y=Lt(Y,k+(Y.key==null||u&&u.key===Y.key?"":(""+Y.key).replace(yt,"$&/")+"/")+te)),S.push(Y)),1;te=0;var Ue=T===""?".":T+":";if(Nl(u))for(var ge=0;ge<u.length;ge++)T=u[ge],Q=Ue+Ol(T,ge),te+=v(T,S,k,Q,Y);else if(ge=Je(u),typeof ge=="function")for(u=ge.call(u),ge=0;!(T=u.next()).done;)T=T.value,Q=Ue+Ol(T,ge++),te+=v(T,S,k,Q,Y);else if(Q==="object"){if(typeof u.then=="function")return v(gl(u),S,k,T,Y);throw S=String(u),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return te}function E(u,S,k){if(u==null)return u;var T=[],Y=0;return v(u,T,"","",function(Q){return S.call(k,Q,Y++)}),T}function B(u){if(u._status===-1){var S=u._result;S=S(),S.then(function(k){(u._status===0||u._status===-1)&&(u._status=1,u._result=k)},function(k){(u._status===0||u._status===-1)&&(u._status=2,u._result=k)}),u._status===-1&&(u._status=0,u._result=S)}if(u._status===1)return u._result.default;throw u._result}var ne=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},ie={map:E,forEach:function(u,S,k){E(u,function(){S.apply(this,arguments)},k)},count:function(u){var S=0;return E(u,function(){S++}),S},toArray:function(u){return E(u,function(S){return S})||[]},only:function(u){if(!Sl(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return G.Activity=U,G.Children=ie,G.Component=We,G.Fragment=A,G.Profiler=C,G.PureComponent=Re,G.StrictMode=f,G.Suspense=R,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,G.__COMPILER_RUNTIME={__proto__:null,c:function(u){return W.H.useMemoCache(u)}},G.cache=function(u){return function(){return u.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(u,S,k){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var T=Me({},u.props),Y=u.key;if(S!=null)for(Q in S.key!==void 0&&(Y=""+S.key),S)!qe.call(S,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&S.ref===void 0||(T[Q]=S[Q]);var Q=arguments.length-2;if(Q===1)T.children=k;else if(1<Q){for(var te=Array(Q),Ue=0;Ue<Q;Ue++)te[Ue]=arguments[Ue+2];T.children=te}return yl(u.type,Y,T)},G.createContext=function(u){return u={$$typeof:q,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:H,_context:u},u},G.createElement=function(u,S,k){var T,Y={},Q=null;if(S!=null)for(T in S.key!==void 0&&(Q=""+S.key),S)qe.call(S,T)&&T!=="key"&&T!=="__self"&&T!=="__source"&&(Y[T]=S[T]);var te=arguments.length-2;if(te===1)Y.children=k;else if(1<te){for(var Ue=Array(te),ge=0;ge<te;ge++)Ue[ge]=arguments[ge+2];Y.children=Ue}if(u&&u.defaultProps)for(T in te=u.defaultProps,te)Y[T]===void 0&&(Y[T]=te[T]);return yl(u,Q,Y)},G.createRef=function(){return{current:null}},G.forwardRef=function(u){return{$$typeof:le,render:u}},G.isValidElement=Sl,G.lazy=function(u){return{$$typeof:F,_payload:{_status:-1,_result:u},_init:B}},G.memo=function(u,S){return{$$typeof:_,type:u,compare:S===void 0?null:S}},G.startTransition=function(u){var S=W.T,k={};W.T=k;try{var T=u(),Y=W.S;Y!==null&&Y(k,T),typeof T=="object"&&T!==null&&typeof T.then=="function"&&T.then(He,ne)}catch(Q){ne(Q)}finally{S!==null&&k.types!==null&&(S.types=k.types),W.T=S}},G.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},G.use=function(u){return W.H.use(u)},G.useActionState=function(u,S,k){return W.H.useActionState(u,S,k)},G.useCallback=function(u,S){return W.H.useCallback(u,S)},G.useContext=function(u){return W.H.useContext(u)},G.useDebugValue=function(){},G.useDeferredValue=function(u,S){return W.H.useDeferredValue(u,S)},G.useEffect=function(u,S){return W.H.useEffect(u,S)},G.useEffectEvent=function(u){return W.H.useEffectEvent(u)},G.useId=function(){return W.H.useId()},G.useImperativeHandle=function(u,S,k){return W.H.useImperativeHandle(u,S,k)},G.useInsertionEffect=function(u,S){return W.H.useInsertionEffect(u,S)},G.useLayoutEffect=function(u,S){return W.H.useLayoutEffect(u,S)},G.useMemo=function(u,S){return W.H.useMemo(u,S)},G.useOptimistic=function(u,S){return W.H.useOptimistic(u,S)},G.useReducer=function(u,S,k){return W.H.useReducer(u,S,k)},G.useRef=function(u){return W.H.useRef(u)},G.useState=function(u){return W.H.useState(u)},G.useSyncExternalStore=function(u,S,k){return W.H.useSyncExternalStore(u,S,k)},G.useTransition=function(){return W.H.useTransition()},G.version="19.2.0",G}var jx;function xd(){return jx||(jx=1,rd.exports=sf()),rd.exports}var Dl=xd();const af=Tx(Dl);var dd={exports:{}},Na={},id={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx;function nf(){return Nx||(Nx=1,(function(y){function w(v,E){var B=v.length;v.push(E);e:for(;0<B;){var ne=B-1>>>1,ie=v[ne];if(0<C(ie,E))v[ne]=E,v[B]=ie,B=ne;else break e}}function A(v){return v.length===0?null:v[0]}function f(v){if(v.length===0)return null;var E=v[0],B=v.pop();if(B!==E){v[0]=B;e:for(var ne=0,ie=v.length,u=ie>>>1;ne<u;){var S=2*(ne+1)-1,k=v[S],T=S+1,Y=v[T];if(0>C(k,B))T<ie&&0>C(Y,k)?(v[ne]=Y,v[T]=B,ne=T):(v[ne]=k,v[S]=B,ne=S);else if(T<ie&&0>C(Y,B))v[ne]=Y,v[T]=B,ne=T;else break e}}return E}function C(v,E){var B=v.sortIndex-E.sortIndex;return B!==0?B:v.id-E.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;y.unstable_now=function(){return H.now()}}else{var q=Date,le=q.now();y.unstable_now=function(){return q.now()-le}}var R=[],_=[],F=1,U=null,me=3,Je=!1,Ce=!1,Me=!1,Tl=!1,We=typeof setTimeout=="function"?setTimeout:null,$l=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function cl(v){for(var E=A(_);E!==null;){if(E.callback===null)f(_);else if(E.startTime<=v)f(_),E.sortIndex=E.expirationTime,w(R,E);else break;E=A(_)}}function Nl(v){if(Me=!1,cl(v),!Ce)if(A(R)!==null)Ce=!0,He||(He=!0,Ge());else{var E=A(_);E!==null&&gl(Nl,E.startTime-v)}}var He=!1,W=-1,qe=5,yl=-1;function Lt(){return Tl?!0:!(y.unstable_now()-yl<qe)}function Sl(){if(Tl=!1,He){var v=y.unstable_now();yl=v;var E=!0;try{e:{Ce=!1,Me&&(Me=!1,$l(W),W=-1),Je=!0;var B=me;try{l:{for(cl(v),U=A(R);U!==null&&!(U.expirationTime>v&&Lt());){var ne=U.callback;if(typeof ne=="function"){U.callback=null,me=U.priorityLevel;var ie=ne(U.expirationTime<=v);if(v=y.unstable_now(),typeof ie=="function"){U.callback=ie,cl(v),E=!0;break l}U===A(R)&&f(R),cl(v)}else f(R);U=A(R)}if(U!==null)E=!0;else{var u=A(_);u!==null&&gl(Nl,u.startTime-v),E=!1}}break e}finally{U=null,me=B,Je=!1}E=void 0}}finally{E?Ge():He=!1}}}var Ge;if(typeof Re=="function")Ge=function(){Re(Sl)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Ol=yt.port2;yt.port1.onmessage=Sl,Ge=function(){Ol.postMessage(null)}}else Ge=function(){We(Sl,0)};function gl(v,E){W=We(function(){v(y.unstable_now())},E)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(v){v.callback=null},y.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<v?Math.floor(1e3/v):5},y.unstable_getCurrentPriorityLevel=function(){return me},y.unstable_next=function(v){switch(me){case 1:case 2:case 3:var E=3;break;default:E=me}var B=me;me=E;try{return v()}finally{me=B}},y.unstable_requestPaint=function(){Tl=!0},y.unstable_runWithPriority=function(v,E){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var B=me;me=v;try{return E()}finally{me=B}},y.unstable_scheduleCallback=function(v,E,B){var ne=y.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=B+ie,v={id:F++,callback:E,priorityLevel:v,startTime:B,expirationTime:ie,sortIndex:-1},B>ne?(v.sortIndex=B,w(_,v),A(R)===null&&v===A(_)&&(Me?($l(W),W=-1):Me=!0,gl(Nl,B-ne))):(v.sortIndex=ie,w(R,v),Ce||Je||(Ce=!0,He||(He=!0,Ge()))),v},y.unstable_shouldYield=Lt,y.unstable_wrapCallback=function(v){var E=me;return function(){var B=me;me=E;try{return v.apply(this,arguments)}finally{me=B}}}})(od)),od}var yx;function cf(){return yx||(yx=1,id.exports=nf()),id.exports}var ud={exports:{}},ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx;function rf(){if(Sx)return ze;Sx=1;var y=xd();function w(R){var _="https://react.dev/errors/"+R;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)_+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+R+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var f={d:{f:A,r:function(){throw Error(w(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},C=Symbol.for("react.portal");function H(R,_,F){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:U==null?null:""+U,children:R,containerInfo:_,implementation:F}}var q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function le(R,_){if(R==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ze.createPortal=function(R,_){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(w(299));return H(R,_,null,F)},ze.flushSync=function(R){var _=q.T,F=f.p;try{if(q.T=null,f.p=2,R)return R()}finally{q.T=_,f.p=F,f.d.f()}},ze.preconnect=function(R,_){typeof R=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,f.d.C(R,_))},ze.prefetchDNS=function(R){typeof R=="string"&&f.d.D(R)},ze.preinit=function(R,_){if(typeof R=="string"&&_&&typeof _.as=="string"){var F=_.as,U=le(F,_.crossOrigin),me=typeof _.integrity=="string"?_.integrity:void 0,Je=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;F==="style"?f.d.S(R,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:U,integrity:me,fetchPriority:Je}):F==="script"&&f.d.X(R,{crossOrigin:U,integrity:me,fetchPriority:Je,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},ze.preinitModule=function(R,_){if(typeof R=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var F=le(_.as,_.crossOrigin);f.d.M(R,{crossOrigin:F,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&f.d.M(R)},ze.preload=function(R,_){if(typeof R=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var F=_.as,U=le(F,_.crossOrigin);f.d.L(R,F,{crossOrigin:U,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},ze.preloadModule=function(R,_){if(typeof R=="string")if(_){var F=le(_.as,_.crossOrigin);f.d.m(R,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:F,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else f.d.m(R)},ze.requestFormReset=function(R){f.d.r(R)},ze.unstable_batchedUpdates=function(R,_){return R(_)},ze.useFormState=function(R,_,F){return q.H.useFormState(R,_,F)},ze.useFormStatus=function(){return q.H.useHostTransitionStatus()},ze.version="19.2.0",ze}var _x;function df(){if(_x)return ud.exports;_x=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(w){console.error(w)}}return y(),ud.exports=rf(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function of(){if(Ex)return Na;Ex=1;var y=cf(),w=xd(),A=df();function f(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)l+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H(e){var l=e,s=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(s=l.return),e=l.return;while(e)}return l.tag===3?s:null}function q(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function le(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function R(e){if(H(e)!==e)throw Error(f(188))}function _(e){var l=e.alternate;if(!l){if(l=H(e),l===null)throw Error(f(188));return l!==e?null:e}for(var s=e,a=l;;){var n=s.return;if(n===null)break;var c=n.alternate;if(c===null){if(a=n.return,a!==null){s=a;continue}break}if(n.child===c.child){for(c=n.child;c;){if(c===s)return R(n),e;if(c===a)return R(n),l;c=c.sibling}throw Error(f(188))}if(s.return!==a.return)s=n,a=c;else{for(var r=!1,d=n.child;d;){if(d===s){r=!0,s=n,a=c;break}if(d===a){r=!0,a=n,s=c;break}d=d.sibling}if(!r){for(d=c.child;d;){if(d===s){r=!0,s=c,a=n;break}if(d===a){r=!0,a=c,s=n;break}d=d.sibling}if(!r)throw Error(f(189))}}if(s.alternate!==a)throw Error(f(190))}if(s.tag!==3)throw Error(f(188));return s.stateNode.current===s?e:l}function F(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=F(e),l!==null)return l;e=e.sibling}return null}var U=Object.assign,me=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Ce=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),$l=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),cl=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),yl=Symbol.for("react.activity"),Lt=Symbol.for("react.memo_cache_sentinel"),Sl=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Sl&&e[Sl]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function Ol(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case We:return"Profiler";case Tl:return"StrictMode";case Nl:return"Suspense";case He:return"SuspenseList";case yl:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ce:return"Portal";case Re:return e.displayName||"Context";case $l:return(e._context.displayName||"Context")+".Consumer";case cl:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return l=e.displayName||null,l!==null?l:Ol(e.type)||"Memo";case qe:l=e._payload,e=e._init;try{return Ol(e(l))}catch{}}return null}var gl=Array.isArray,v=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},ne=[],ie=-1;function u(e){return{current:e}}function S(e){0>ie||(e.current=ne[ie],ne[ie]=null,ie--)}function k(e,l){ie++,ne[ie]=e.current,e.current=l}var T=u(null),Y=u(null),Q=u(null),te=u(null);function Ue(e,l){switch(k(Q,l),k(Y,e),k(T,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?Gu(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=Gu(l),e=Yu(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(T),k(T,e)}function ge(){S(T),S(Y),S(Q)}function As(e){e.memoizedState!==null&&k(te,e);var l=T.current,s=Yu(l,e.type);l!==s&&(k(Y,e),k(T,s))}function Sa(e){Y.current===e&&(S(T),S(Y)),te.current===e&&(S(te),pa._currentValue=B)}var Ln,hd;function St(e){if(Ln===void 0)try{throw Error()}catch(s){var l=s.stack.trim().match(/\n( *(at )?)/);Ln=l&&l[1]||"",hd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ln+e+hd}var Vn=!1;function Qn(e,l){if(!e||Vn)return"";Vn=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(g){var p=g}Reflect.construct(e,[],N)}else{try{N.call()}catch(g){p=g}e.call(N.prototype)}}else{try{throw Error()}catch(g){p=g}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),r=c[0],d=c[1];if(r&&d){var i=r.split(`
`),h=d.split(`
`);for(n=a=0;a<i.length&&!i[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===i.length||n===h.length)for(a=i.length-1,n=h.length-1;1<=a&&0<=n&&i[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(i[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||i[a]!==h[n]){var b=`
`+i[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=n);break}}}finally{Vn=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?St(s):""}function Rx(e,l){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==l&&l!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Qn(e.type,!1);case 11:return Qn(e.type.render,!1);case 1:return Qn(e.type,!0);case 31:return St("Activity");default:return""}}function pd(e){try{var l="",s=null;do l+=Rx(e,s),s=e,e=e.return;while(e);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Xn=Object.prototype.hasOwnProperty,Zn=y.unstable_scheduleCallback,Kn=y.unstable_cancelCallback,zx=y.unstable_shouldYield,Mx=y.unstable_requestPaint,$e=y.unstable_now,Ux=y.unstable_getCurrentPriorityLevel,gd=y.unstable_ImmediatePriority,bd=y.unstable_UserBlockingPriority,_a=y.unstable_NormalPriority,Bx=y.unstable_LowPriority,vd=y.unstable_IdlePriority,Cx=y.log,Hx=y.unstable_setDisableYieldValue,Ds=null,Fe=null;function Fl(e){if(typeof Cx=="function"&&Hx(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Ds,e)}catch{}}var Pe=Math.clz32?Math.clz32:Yx,qx=Math.log,Gx=Math.LN2;function Yx(e){return e>>>=0,e===0?32:31-(qx(e)/Gx|0)|0}var Ea=256,ka=262144,Aa=4194304;function _t(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Da(e,l,s){var a=e.pendingLanes;if(a===0)return 0;var n=0,c=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~c,a!==0?n=_t(a):(r&=d,r!==0?n=_t(r):s||(s=d&~e,s!==0&&(n=_t(s))))):(d=a&~c,d!==0?n=_t(d):r!==0?n=_t(r):s||(s=a&~e,s!==0&&(n=_t(s)))),n===0?0:l!==0&&l!==n&&(l&c)===0&&(c=n&-n,s=l&-l,c>=s||c===32&&(s&4194048)!==0)?l:n}function Ts(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function Lx(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(){var e=Aa;return Aa<<=1,(Aa&62914560)===0&&(Aa=4194304),e}function Jn(e){for(var l=[],s=0;31>s;s++)l.push(e);return l}function Os(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vx(e,l,s,a,n,c){var r=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var d=e.entanglements,i=e.expirationTimes,h=e.hiddenUpdates;for(s=r&~s;0<s;){var b=31-Pe(s),N=1<<b;d[b]=0,i[b]=-1;var p=h[b];if(p!==null)for(h[b]=null,b=0;b<p.length;b++){var g=p[b];g!==null&&(g.lane&=-536870913)}s&=~N}a!==0&&Nd(e,a,0),c!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=c&~(r&~l))}function Nd(e,l,s){e.pendingLanes|=l,e.suspendedLanes&=~l;var a=31-Pe(l);e.entangledLanes|=l,e.entanglements[a]=e.entanglements[a]|1073741824|s&261930}function yd(e,l){var s=e.entangledLanes|=l;for(e=e.entanglements;s;){var a=31-Pe(s),n=1<<a;n&l|e[a]&l&&(e[a]|=l),s&=~n}}function Sd(e,l){var s=l&-l;return s=(s&42)!==0?1:Wn(s),(s&(e.suspendedLanes|l))!==0?0:s}function Wn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $n(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _d(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:ox(e.type))}function Ed(e,l){var s=E.p;try{return E.p=e,l()}finally{E.p=s}}var Pl=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Pl,Ye="__reactProps$"+Pl,Vt="__reactContainer$"+Pl,Fn="__reactEvents$"+Pl,Qx="__reactListeners$"+Pl,Xx="__reactHandles$"+Pl,kd="__reactResources$"+Pl,ws="__reactMarker$"+Pl;function Pn(e){delete e[Ae],delete e[Ye],delete e[Fn],delete e[Qx],delete e[Xx]}function Qt(e){var l=e[Ae];if(l)return l;for(var s=e.parentNode;s;){if(l=s[Vt]||s[Ae]){if(s=l.alternate,l.child!==null||s!==null&&s.child!==null)for(e=Ju(e);e!==null;){if(s=e[Ae])return s;e=Ju(e)}return l}e=s,s=e.parentNode}return null}function Xt(e){if(e=e[Ae]||e[Vt]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function Rs(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(f(33))}function Zt(e){var l=e[kd];return l||(l=e[kd]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Ee(e){e[ws]=!0}var Ad=new Set,Dd={};function Et(e,l){Kt(e,l),Kt(e+"Capture",l)}function Kt(e,l){for(Dd[e]=l,e=0;e<l.length;e++)Ad.add(l[e])}var Zx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Td={},Od={};function Kx(e){return Xn.call(Od,e)?!0:Xn.call(Td,e)?!1:Zx.test(e)?Od[e]=!0:(Td[e]=!0,!1)}function Ta(e,l,s){if(Kx(l))if(s===null)e.removeAttribute(l);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+s)}}function Oa(e,l,s){if(s===null)e.removeAttribute(l);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+s)}}function wl(e,l,s,a){if(a===null)e.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(l,s,""+a)}}function rl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Jx(e,l,s){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,c=a.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(r){s=""+r,c.call(this,r)}}),Object.defineProperty(e,l,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(r){s=""+r},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function In(e){if(!e._valueTracker){var l=wd(e)?"checked":"value";e._valueTracker=Jx(e,l,""+e[l])}}function Rd(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var s=l.getValue(),a="";return e&&(a=wd(e)?e.checked?"true":"false":e.value),e=a,e!==s?(l.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wx=/[\n"\\]/g;function dl(e){return e.replace(Wx,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function ec(e,l,s,a,n,c,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),l!=null?r==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+rl(l)):e.value!==""+rl(l)&&(e.value=""+rl(l)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),l!=null?lc(e,r,rl(l)):s!=null?lc(e,r,rl(s)):a!=null&&e.removeAttribute("value"),n==null&&c!=null&&(e.defaultChecked=!!c),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+rl(d):e.removeAttribute("name")}function zd(e,l,s,a,n,c,r,d){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),l!=null||s!=null){if(!(c!=="submit"&&c!=="reset"||l!=null)){In(e);return}s=s!=null?""+rl(s):"",l=l!=null?""+rl(l):s,d||l===e.value||(e.value=l),e.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),In(e)}function lc(e,l,s){l==="number"&&wa(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Jt(e,l,s,a){if(e=e.options,l){l={};for(var n=0;n<s.length;n++)l["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=l.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&a&&(e[s].defaultSelected=!0)}else{for(s=""+rl(s),l=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function Md(e,l,s){if(l!=null&&(l=""+rl(l),l!==e.value&&(e.value=l),s==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=s!=null?""+rl(s):""}function Ud(e,l,s,a){if(l==null){if(a!=null){if(s!=null)throw Error(f(92));if(gl(a)){if(1<a.length)throw Error(f(93));a=a[0]}s=a}s==null&&(s=""),l=s}s=rl(l),e.defaultValue=s,a=e.textContent,a===s&&a!==""&&a!==null&&(e.value=a),In(e)}function Wt(e,l){if(l){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=l;return}}e.textContent=l}var $x=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bd(e,l,s){var a=l.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":a?e.setProperty(l,s):typeof s!="number"||s===0||$x.has(l)?l==="float"?e.cssFloat=s:e[l]=(""+s).trim():e[l]=s+"px"}function Cd(e,l,s){if(l!=null&&typeof l!="object")throw Error(f(62));if(e=e.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&s[n]!==a&&Bd(e,n,a)}else for(var c in l)l.hasOwnProperty(c)&&Bd(e,c,l[c])}function tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(e){return Px.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rl(){}var sc=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,Ft=null;function Hd(e){var l=Xt(e);if(l&&(e=l.stateNode)){var s=e[Ye]||null;e:switch(e=l.stateNode,l.type){case"input":if(ec(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),l=s.name,s.type==="radio"&&l!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+dl(""+l)+'"][type="radio"]'),l=0;l<s.length;l++){var a=s[l];if(a!==e&&a.form===e.form){var n=a[Ye]||null;if(!n)throw Error(f(90));ec(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<s.length;l++)a=s[l],a.form===e.form&&Rd(a)}break e;case"textarea":Md(e,s.value,s.defaultValue);break e;case"select":l=s.value,l!=null&&Jt(e,!!s.multiple,l,!1)}}}var nc=!1;function qd(e,l,s){if(nc)return e(l,s);nc=!0;try{var a=e(l);return a}finally{if(nc=!1,($t!==null||Ft!==null)&&(jn(),$t&&(l=$t,e=Ft,Ft=$t=null,Hd(l),e)))for(l=0;l<e.length;l++)Hd(e[l])}}function zs(e,l){var s=e.stateNode;if(s===null)return null;var a=s[Ye]||null;if(a===null)return null;s=a[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(f(231,l,typeof s));return s}var zl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(zl)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{cc=!1}var Il=null,rc=null,za=null;function Gd(){if(za)return za;var e,l=rc,s=l.length,a,n="value"in Il?Il.value:Il.textContent,c=n.length;for(e=0;e<s&&l[e]===n[e];e++);var r=s-e;for(a=1;a<=r&&l[s-a]===n[c-a];a++);return za=n.slice(e,1<a?1-a:void 0)}function Ma(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Ua(){return!0}function Yd(){return!1}function Le(e){function l(s,a,n,c,r){this._reactName=s,this._targetInst=n,this.type=a,this.nativeEvent=c,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(s=e[d],this[d]=s?s(c):c[d]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ua:Yd,this.isPropagationStopped=Yd,this}return U(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),l}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Le(kt),Us=U({},kt,{view:0,detail:0}),Ix=Le(Us),dc,ic,Bs,Ca=U({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bs&&(Bs&&e.type==="mousemove"?(dc=e.screenX-Bs.screenX,ic=e.screenY-Bs.screenY):ic=dc=0,Bs=e),dc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Ld=Le(Ca),em=U({},Ca,{dataTransfer:0}),lm=Le(em),tm=U({},Us,{relatedTarget:0}),oc=Le(tm),sm=U({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Le(sm),nm=U({},kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Le(nm),rm=U({},kt,{data:0}),Vd=Le(rm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=om[e])?!!l[e]:!1}function uc(){return um}var xm=U({},Us,{key:function(e){if(e.key){var l=dm[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mm=Le(xm),fm=U({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Le(fm),hm=U({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),pm=Le(hm),gm=U({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=Le(gm),vm=U({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Le(vm),Nm=U({},kt,{newState:0,oldState:0}),ym=Le(Nm),Sm=[9,13,27,32],xc=zl&&"CompositionEvent"in window,Cs=null;zl&&"documentMode"in document&&(Cs=document.documentMode);var _m=zl&&"TextEvent"in window&&!Cs,Xd=zl&&(!xc||Cs&&8<Cs&&11>=Cs),Zd=" ",Kd=!1;function Jd(e,l){switch(e){case"keyup":return Sm.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Em(e,l){switch(e){case"compositionend":return Wd(l);case"keypress":return l.which!==32?null:(Kd=!0,Zd);case"textInput":return e=l.data,e===Zd&&Kd?null:e;default:return null}}function km(e,l){if(Pt)return e==="compositionend"||!xc&&Jd(e,l)?(e=Gd(),za=rc=Il=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Xd&&l.locale!=="ko"?null:l.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!Am[e.type]:l==="textarea"}function Fd(e,l,s,a){$t?Ft?Ft.push(a):Ft=[a]:$t=a,l=An(l,"onChange"),0<l.length&&(s=new Ba("onChange","change",null,s,a),e.push({event:s,listeners:l}))}var Hs=null,qs=null;function Dm(e){Mu(e,0)}function Ha(e){var l=Rs(e);if(Rd(l))return e}function Pd(e,l){if(e==="change")return l}var Id=!1;if(zl){var mc;if(zl){var fc="oninput"in document;if(!fc){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),fc=typeof ei.oninput=="function"}mc=fc}else mc=!1;Id=mc&&(!document.documentMode||9<document.documentMode)}function li(){Hs&&(Hs.detachEvent("onpropertychange",ti),qs=Hs=null)}function ti(e){if(e.propertyName==="value"&&Ha(qs)){var l=[];Fd(l,qs,e,ac(e)),qd(Dm,l)}}function Tm(e,l,s){e==="focusin"?(li(),Hs=l,qs=s,Hs.attachEvent("onpropertychange",ti)):e==="focusout"&&li()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(qs)}function wm(e,l){if(e==="click")return Ha(l)}function Rm(e,l){if(e==="input"||e==="change")return Ha(l)}function zm(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var Ie=typeof Object.is=="function"?Object.is:zm;function Gs(e,l){if(Ie(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var s=Object.keys(e),a=Object.keys(l);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var n=s[a];if(!Xn.call(l,n)||!Ie(e[n],l[n]))return!1}return!0}function si(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ai(e,l){var s=si(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=l&&a>=l)return{node:s,offset:l-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=si(s)}}function ni(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?ni(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function ci(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=wa(e.document);l instanceof e.HTMLIFrameElement;){try{var s=typeof l.contentWindow.location.href=="string"}catch{s=!1}if(s)e=l.contentWindow;else break;l=wa(e.document)}return l}function hc(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var Mm=zl&&"documentMode"in document&&11>=document.documentMode,It=null,pc=null,Ys=null,gc=!1;function ri(e,l,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gc||It==null||It!==wa(a)||(a=It,"selectionStart"in a&&hc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ys&&Gs(Ys,a)||(Ys=a,a=An(pc,"onSelect"),0<a.length&&(l=new Ba("onSelect","select",null,l,s),e.push({event:l,listeners:a}),l.target=It)))}function At(e,l){var s={};return s[e.toLowerCase()]=l.toLowerCase(),s["Webkit"+e]="webkit"+l,s["Moz"+e]="moz"+l,s}var es={animationend:At("Animation","AnimationEnd"),animationiteration:At("Animation","AnimationIteration"),animationstart:At("Animation","AnimationStart"),transitionrun:At("Transition","TransitionRun"),transitionstart:At("Transition","TransitionStart"),transitioncancel:At("Transition","TransitionCancel"),transitionend:At("Transition","TransitionEnd")},bc={},di={};zl&&(di=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Dt(e){if(bc[e])return bc[e];if(!es[e])return e;var l=es[e],s;for(s in l)if(l.hasOwnProperty(s)&&s in di)return bc[e]=l[s];return e}var ii=Dt("animationend"),oi=Dt("animationiteration"),ui=Dt("animationstart"),Um=Dt("transitionrun"),Bm=Dt("transitionstart"),Cm=Dt("transitioncancel"),xi=Dt("transitionend"),mi=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function bl(e,l){mi.set(e,l),Et(l,[e])}var qa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},il=[],ls=0,jc=0;function Ga(){for(var e=ls,l=jc=ls=0;l<e;){var s=il[l];il[l++]=null;var a=il[l];il[l++]=null;var n=il[l];il[l++]=null;var c=il[l];if(il[l++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}c!==0&&fi(s,n,c)}}function Ya(e,l,s,a){il[ls++]=e,il[ls++]=l,il[ls++]=s,il[ls++]=a,jc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Nc(e,l,s,a){return Ya(e,l,s,a),La(e)}function Tt(e,l){return Ya(e,null,null,l),La(e)}function fi(e,l,s){e.lanes|=s;var a=e.alternate;a!==null&&(a.lanes|=s);for(var n=!1,c=e.return;c!==null;)c.childLanes|=s,a=c.alternate,a!==null&&(a.childLanes|=s),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(n=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,n&&l!==null&&(n=31-Pe(s),e=c.hiddenUpdates,a=e[n],a===null?e[n]=[l]:a.push(l),l.lane=s|536870912),c):null}function La(e){if(50<ia)throw ia=0,Or=null,Error(f(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var ts={};function Hm(e,l,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function el(e,l,s,a){return new Hm(e,l,s,a)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ml(e,l){var s=e.alternate;return s===null?(s=el(e.tag,l,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=l,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,l=e.dependencies,s.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function hi(e,l){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,l=s.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function Va(e,l,s,a,n,c){var r=0;if(a=e,typeof e=="function")yc(e)&&(r=1);else if(typeof e=="string")r=V0(e,s,T.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case yl:return e=el(31,s,l,n),e.elementType=yl,e.lanes=c,e;case Me:return Ot(s.children,n,c,l);case Tl:r=8,n|=24;break;case We:return e=el(12,s,l,n|2),e.elementType=We,e.lanes=c,e;case Nl:return e=el(13,s,l,n),e.elementType=Nl,e.lanes=c,e;case He:return e=el(19,s,l,n),e.elementType=He,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:r=10;break e;case $l:r=9;break e;case cl:r=11;break e;case W:r=14;break e;case qe:r=16,a=null;break e}r=29,s=Error(f(130,e===null?"null":typeof e,"")),a=null}return l=el(r,s,l,n),l.elementType=e,l.type=a,l.lanes=c,l}function Ot(e,l,s,a){return e=el(7,e,a,l),e.lanes=s,e}function Sc(e,l,s){return e=el(6,e,null,l),e.lanes=s,e}function pi(e){var l=el(18,null,null,0);return l.stateNode=e,l}function _c(e,l,s){return l=el(4,e.children!==null?e.children:[],e.key,l),l.lanes=s,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var gi=new WeakMap;function ol(e,l){if(typeof e=="object"&&e!==null){var s=gi.get(e);return s!==void 0?s:(l={value:e,source:l,stack:pd(l)},gi.set(e,l),l)}return{value:e,source:l,stack:pd(l)}}var ss=[],as=0,Qa=null,Ls=0,ul=[],xl=0,et=null,_l=1,El="";function Ul(e,l){ss[as++]=Ls,ss[as++]=Qa,Qa=e,Ls=l}function bi(e,l,s){ul[xl++]=_l,ul[xl++]=El,ul[xl++]=et,et=e;var a=_l;e=El;var n=32-Pe(a)-1;a&=~(1<<n),s+=1;var c=32-Pe(l)+n;if(30<c){var r=n-n%5;c=(a&(1<<r)-1).toString(32),a>>=r,n-=r,_l=1<<32-Pe(l)+n|s<<n|a,El=c+e}else _l=1<<c|s<<n|a,El=e}function Ec(e){e.return!==null&&(Ul(e,1),bi(e,1,0))}function kc(e){for(;e===Qa;)Qa=ss[--as],ss[as]=null,Ls=ss[--as],ss[as]=null;for(;e===et;)et=ul[--xl],ul[xl]=null,El=ul[--xl],ul[xl]=null,_l=ul[--xl],ul[xl]=null}function vi(e,l){ul[xl++]=_l,ul[xl++]=El,ul[xl++]=et,_l=l.id,El=l.overflow,et=e}var De=null,ue=null,$=!1,lt=null,ml=!1,Ac=Error(f(519));function tt(e){var l=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vs(ol(l,e)),Ac}function ji(e){var l=e.stateNode,s=e.type,a=e.memoizedProps;switch(l[Ae]=e,l[Ye]=a,s){case"dialog":Z("cancel",l),Z("close",l);break;case"iframe":case"object":case"embed":Z("load",l);break;case"video":case"audio":for(s=0;s<ua.length;s++)Z(ua[s],l);break;case"source":Z("error",l);break;case"img":case"image":case"link":Z("error",l),Z("load",l);break;case"details":Z("toggle",l);break;case"input":Z("invalid",l),zd(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Z("invalid",l);break;case"textarea":Z("invalid",l),Ud(l,a.value,a.defaultValue,a.children)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||l.textContent===""+s||a.suppressHydrationWarning===!0||Hu(l.textContent,s)?(a.popover!=null&&(Z("beforetoggle",l),Z("toggle",l)),a.onScroll!=null&&Z("scroll",l),a.onScrollEnd!=null&&Z("scrollend",l),a.onClick!=null&&(l.onclick=Rl),l=!0):l=!1,l||tt(e,!0)}function Ni(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:ml=!1;return;case 27:case 3:ml=!0;return;default:De=De.return}}function ns(e){if(e!==De)return!1;if(!$)return Ni(e),$=!0,!1;var l=e.tag,s;if((s=l!==3&&l!==27)&&((s=l===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Xr(e.type,e.memoizedProps)),s=!s),s&&ue&&tt(e),Ni(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));ue=Ku(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));ue=Ku(e)}else l===27?(l=ue,pt(e.type)?(e=$r,$r=null,ue=e):ue=l):ue=De?hl(e.stateNode.nextSibling):null;return!0}function wt(){ue=De=null,$=!1}function Dc(){var e=lt;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),lt=null),e}function Vs(e){lt===null?lt=[e]:lt.push(e)}var Tc=u(null),Rt=null,Bl=null;function st(e,l,s){k(Tc,l._currentValue),l._currentValue=s}function Cl(e){e._currentValue=Tc.current,S(Tc)}function Oc(e,l,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),e===s)break;e=e.return}}function wc(e,l,s,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var c=n.dependencies;if(c!==null){var r=n.child;c=c.firstContext;e:for(;c!==null;){var d=c;c=n;for(var i=0;i<l.length;i++)if(d.context===l[i]){c.lanes|=s,d=c.alternate,d!==null&&(d.lanes|=s),Oc(c.return,s,e),a||(r=null);break e}c=d.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(f(341));r.lanes|=s,c=r.alternate,c!==null&&(c.lanes|=s),Oc(r,s,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function cs(e,l,s,a){e=null;for(var n=l,c=!1;n!==null;){if(!c){if((n.flags&524288)!==0)c=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var d=n.type;Ie(n.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(n===te.current){if(r=n.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pa):e=[pa])}n=n.return}e!==null&&wc(l,e,s,a),l.flags|=262144}function Xa(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zt(e){Rt=e,Bl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Te(e){return yi(Rt,e)}function Za(e,l){return Rt===null&&zt(e),yi(e,l)}function yi(e,l){var s=l._currentValue;if(l={context:l,memoizedValue:s,next:null},Bl===null){if(e===null)throw Error(f(308));Bl=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else Bl=Bl.next=l;return s}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(s,a){e.push(a)}};this.abort=function(){l.aborted=!0,e.forEach(function(s){return s()})}},Gm=y.unstable_scheduleCallback,Ym=y.unstable_NormalPriority,je={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new qm,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&Gm(Ym,function(){e.controller.abort()})}var Xs=null,zc=0,rs=0,ds=null;function Lm(e,l){if(Xs===null){var s=Xs=[];zc=0,rs=Br(),ds={status:"pending",value:void 0,then:function(a){s.push(a)}}}return zc++,l.then(Si,Si),l}function Si(){if(--zc===0&&Xs!==null){ds!==null&&(ds.status="fulfilled");var e=Xs;Xs=null,rs=0,ds=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function Vm(e,l){var s=[],a={status:"pending",value:null,reason:null,then:function(n){s.push(n)}};return e.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<s.length;n++)(0,s[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<s.length;n++)(0,s[n])(void 0)}),a}var _i=v.S;v.S=function(e,l){du=$e(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Lm(e,l),_i!==null&&_i(e,l)};var Mt=u(null);function Mc(){var e=Mt.current;return e!==null?e:oe.pooledCache}function Ka(e,l){l===null?k(Mt,Mt.current):k(Mt,l.pool)}function Ei(){var e=Mc();return e===null?null:{parent:je._currentValue,pool:e}}var is=Error(f(460)),Uc=Error(f(474)),Ja=Error(f(542)),Wa={then:function(){}};function ki(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ai(e,l,s){switch(s=e[s],s===void 0?e.push(l):s!==l&&(l.then(Rl,Rl),l=s),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Ti(e),e;default:if(typeof l.status=="string")l.then(Rl,Rl);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=l,e.status="pending",e.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Ti(e),e}throw Bt=l,is}}function Ut(e){try{var l=e._init;return l(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Bt=s,is):s}}var Bt=null;function Di(){if(Bt===null)throw Error(f(459));var e=Bt;return Bt=null,e}function Ti(e){if(e===is||e===Ja)throw Error(f(483))}var os=null,Zs=0;function $a(e){var l=Zs;return Zs+=1,os===null&&(os=[]),Ai(os,e,l)}function Ks(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function Fa(e,l){throw l.$$typeof===me?Error(f(525)):(e=Object.prototype.toString.call(l),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function Oi(e){function l(x,o){if(e){var m=x.deletions;m===null?(x.deletions=[o],x.flags|=16):m.push(o)}}function s(x,o){if(!e)return null;for(;o!==null;)l(x,o),o=o.sibling;return null}function a(x){for(var o=new Map;x!==null;)x.key!==null?o.set(x.key,x):o.set(x.index,x),x=x.sibling;return o}function n(x,o){return x=Ml(x,o),x.index=0,x.sibling=null,x}function c(x,o,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<o?(x.flags|=67108866,o):m):(x.flags|=67108866,o)):(x.flags|=1048576,o)}function r(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function d(x,o,m,j){return o===null||o.tag!==6?(o=Sc(m,x.mode,j),o.return=x,o):(o=n(o,m),o.return=x,o)}function i(x,o,m,j){var z=m.type;return z===Me?b(x,o,m.props.children,j,m.key):o!==null&&(o.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qe&&Ut(z)===o.type)?(o=n(o,m.props),Ks(o,m),o.return=x,o):(o=Va(m.type,m.key,m.props,null,x.mode,j),Ks(o,m),o.return=x,o)}function h(x,o,m,j){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=_c(m,x.mode,j),o.return=x,o):(o=n(o,m.children||[]),o.return=x,o)}function b(x,o,m,j,z){return o===null||o.tag!==7?(o=Ot(m,x.mode,j,z),o.return=x,o):(o=n(o,m),o.return=x,o)}function N(x,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Sc(""+o,x.mode,m),o.return=x,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Je:return m=Va(o.type,o.key,o.props,null,x.mode,m),Ks(m,o),m.return=x,m;case Ce:return o=_c(o,x.mode,m),o.return=x,o;case qe:return o=Ut(o),N(x,o,m)}if(gl(o)||Ge(o))return o=Ot(o,x.mode,m,null),o.return=x,o;if(typeof o.then=="function")return N(x,$a(o),m);if(o.$$typeof===Re)return N(x,Za(x,o),m);Fa(x,o)}return null}function p(x,o,m,j){var z=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return z!==null?null:d(x,o,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:return m.key===z?i(x,o,m,j):null;case Ce:return m.key===z?h(x,o,m,j):null;case qe:return m=Ut(m),p(x,o,m,j)}if(gl(m)||Ge(m))return z!==null?null:b(x,o,m,j,null);if(typeof m.then=="function")return p(x,o,$a(m),j);if(m.$$typeof===Re)return p(x,o,Za(x,m),j);Fa(x,m)}return null}function g(x,o,m,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return x=x.get(m)||null,d(o,x,""+j,z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Je:return x=x.get(j.key===null?m:j.key)||null,i(o,x,j,z);case Ce:return x=x.get(j.key===null?m:j.key)||null,h(o,x,j,z);case qe:return j=Ut(j),g(x,o,m,j,z)}if(gl(j)||Ge(j))return x=x.get(m)||null,b(o,x,j,z,null);if(typeof j.then=="function")return g(x,o,m,$a(j),z);if(j.$$typeof===Re)return g(x,o,m,Za(o,j),z);Fa(o,j)}return null}function D(x,o,m,j){for(var z=null,P=null,O=o,V=o=0,J=null;O!==null&&V<m.length;V++){O.index>V?(J=O,O=null):J=O.sibling;var I=p(x,O,m[V],j);if(I===null){O===null&&(O=J);break}e&&O&&I.alternate===null&&l(x,O),o=c(I,o,V),P===null?z=I:P.sibling=I,P=I,O=J}if(V===m.length)return s(x,O),$&&Ul(x,V),z;if(O===null){for(;V<m.length;V++)O=N(x,m[V],j),O!==null&&(o=c(O,o,V),P===null?z=O:P.sibling=O,P=O);return $&&Ul(x,V),z}for(O=a(O);V<m.length;V++)J=g(O,x,V,m[V],j),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?V:J.key),o=c(J,o,V),P===null?z=J:P.sibling=J,P=J);return e&&O.forEach(function(Nt){return l(x,Nt)}),$&&Ul(x,V),z}function M(x,o,m,j){if(m==null)throw Error(f(151));for(var z=null,P=null,O=o,V=o=0,J=null,I=m.next();O!==null&&!I.done;V++,I=m.next()){O.index>V?(J=O,O=null):J=O.sibling;var Nt=p(x,O,I.value,j);if(Nt===null){O===null&&(O=J);break}e&&O&&Nt.alternate===null&&l(x,O),o=c(Nt,o,V),P===null?z=Nt:P.sibling=Nt,P=Nt,O=J}if(I.done)return s(x,O),$&&Ul(x,V),z;if(O===null){for(;!I.done;V++,I=m.next())I=N(x,I.value,j),I!==null&&(o=c(I,o,V),P===null?z=I:P.sibling=I,P=I);return $&&Ul(x,V),z}for(O=a(O);!I.done;V++,I=m.next())I=g(O,x,V,I.value,j),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?V:I.key),o=c(I,o,V),P===null?z=I:P.sibling=I,P=I);return e&&O.forEach(function(ef){return l(x,ef)}),$&&Ul(x,V),z}function de(x,o,m,j){if(typeof m=="object"&&m!==null&&m.type===Me&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:e:{for(var z=m.key;o!==null;){if(o.key===z){if(z=m.type,z===Me){if(o.tag===7){s(x,o.sibling),j=n(o,m.props.children),j.return=x,x=j;break e}}else if(o.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qe&&Ut(z)===o.type){s(x,o.sibling),j=n(o,m.props),Ks(j,m),j.return=x,x=j;break e}s(x,o);break}else l(x,o);o=o.sibling}m.type===Me?(j=Ot(m.props.children,x.mode,j,m.key),j.return=x,x=j):(j=Va(m.type,m.key,m.props,null,x.mode,j),Ks(j,m),j.return=x,x=j)}return r(x);case Ce:e:{for(z=m.key;o!==null;){if(o.key===z)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){s(x,o.sibling),j=n(o,m.children||[]),j.return=x,x=j;break e}else{s(x,o);break}else l(x,o);o=o.sibling}j=_c(m,x.mode,j),j.return=x,x=j}return r(x);case qe:return m=Ut(m),de(x,o,m,j)}if(gl(m))return D(x,o,m,j);if(Ge(m)){if(z=Ge(m),typeof z!="function")throw Error(f(150));return m=z.call(m),M(x,o,m,j)}if(typeof m.then=="function")return de(x,o,$a(m),j);if(m.$$typeof===Re)return de(x,o,Za(x,m),j);Fa(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(s(x,o.sibling),j=n(o,m),j.return=x,x=j):(s(x,o),j=Sc(m,x.mode,j),j.return=x,x=j),r(x)):s(x,o)}return function(x,o,m,j){try{Zs=0;var z=de(x,o,m,j);return os=null,z}catch(O){if(O===is||O===Ja)throw O;var P=el(29,O,null,x.mode);return P.lanes=j,P.return=x,P}finally{}}}var Ct=Oi(!0),wi=Oi(!1),at=!1;function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ct(e,l,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ee&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=La(e),fi(e,null,s),l}return Ya(e,a,l,s),La(e)}function Js(e,l,s){if(l=l.updateQueue,l!==null&&(l=l.shared,(s&4194048)!==0)){var a=l.lanes;a&=e.pendingLanes,s|=a,l.lanes=s,yd(e,s)}}function Hc(e,l){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var n=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var r={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};c===null?n=c=r:c=c.next=r,s=s.next}while(s!==null);c===null?n=c=l:c=c.next=l}else n=c=l;s={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=l:e.next=l,s.lastBaseUpdate=l}var qc=!1;function Ws(){if(qc){var e=ds;if(e!==null)throw e}}function $s(e,l,s,a){qc=!1;var n=e.updateQueue;at=!1;var c=n.firstBaseUpdate,r=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var i=d,h=i.next;i.next=null,r===null?c=h:r.next=h,r=i;var b=e.alternate;b!==null&&(b=b.updateQueue,d=b.lastBaseUpdate,d!==r&&(d===null?b.firstBaseUpdate=h:d.next=h,b.lastBaseUpdate=i))}if(c!==null){var N=n.baseState;r=0,b=h=i=null,d=c;do{var p=d.lane&-536870913,g=p!==d.lane;if(g?(K&p)===p:(a&p)===p){p!==0&&p===rs&&(qc=!0),b!==null&&(b=b.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var D=e,M=d;p=l;var de=s;switch(M.tag){case 1:if(D=M.payload,typeof D=="function"){N=D.call(de,N,p);break e}N=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=M.payload,p=typeof D=="function"?D.call(de,N,p):D,p==null)break e;N=U({},N,p);break e;case 2:at=!0}}p=d.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[p]:g.push(p))}else g={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},b===null?(h=b=g,i=N):b=b.next=g,r|=p;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;g=d,d=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);b===null&&(i=N),n.baseState=i,n.firstBaseUpdate=h,n.lastBaseUpdate=b,c===null&&(n.shared.lanes=0),ut|=r,e.lanes=r,e.memoizedState=N}}function Ri(e,l){if(typeof e!="function")throw Error(f(191,e));e.call(l)}function zi(e,l){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Ri(s[e],l)}var us=u(null),Pa=u(0);function Mi(e,l){e=Zl,k(Pa,e),k(us,l),Zl=e|l.baseLanes}function Gc(){k(Pa,Zl),k(us,us.current)}function Yc(){Zl=Pa.current,S(us),S(Pa)}var ll=u(null),fl=null;function rt(e){var l=e.alternate;k(be,be.current&1),k(ll,e),fl===null&&(l===null||us.current!==null||l.memoizedState!==null)&&(fl=e)}function Lc(e){k(be,be.current),k(ll,e),fl===null&&(fl=e)}function Ui(e){e.tag===22?(k(be,be.current),k(ll,e),fl===null&&(fl=e)):dt()}function dt(){k(be,be.current),k(ll,ll.current)}function tl(e){S(ll),fl===e&&(fl=null),S(be)}var be=u(0);function Ia(e){for(var l=e;l!==null;){if(l.tag===13){var s=l.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Jr(s)||Wr(s)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Hl=0,L=null,ce=null,Ne=null,en=!1,xs=!1,Ht=!1,ln=0,Fs=0,ms=null,Qm=0;function he(){throw Error(f(321))}function Vc(e,l){if(l===null)return!1;for(var s=0;s<l.length&&s<e.length;s++)if(!Ie(e[s],l[s]))return!1;return!0}function Qc(e,l,s,a,n,c){return Hl=c,L=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,v.H=e===null||e.memoizedState===null?vo:nr,Ht=!1,c=s(a,n),Ht=!1,xs&&(c=Ci(l,s,a,n)),Bi(e),c}function Bi(e){v.H=ea;var l=ce!==null&&ce.next!==null;if(Hl=0,Ne=ce=L=null,en=!1,Fs=0,ms=null,l)throw Error(f(300));e===null||ye||(e=e.dependencies,e!==null&&Xa(e)&&(ye=!0))}function Ci(e,l,s,a){L=e;var n=0;do{if(xs&&(ms=null),Fs=0,xs=!1,25<=n)throw Error(f(301));if(n+=1,Ne=ce=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}v.H=jo,c=l(s,a)}while(xs);return c}function Xm(){var e=v.H,l=e.useState()[0];return l=typeof l.then=="function"?Ps(l):l,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(L.flags|=1024),l}function Xc(){var e=ln!==0;return ln=0,e}function Zc(e,l,s){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~s}function Kc(e){if(en){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}en=!1}Hl=0,Ne=ce=L=null,xs=!1,Fs=ln=0,ms=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?L.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ve(){if(ce===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var l=Ne===null?L.memoizedState:Ne.next;if(l!==null)Ne=l,ce=e;else{if(e===null)throw L.alternate===null?Error(f(467)):Error(f(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Ne===null?L.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function tn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ps(e){var l=Fs;return Fs+=1,ms===null&&(ms=[]),e=Ai(ms,e,l),l=L,(Ne===null?l.memoizedState:Ne.next)===null&&(l=l.alternate,v.H=l===null||l.memoizedState===null?vo:nr),e}function sn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ps(e);if(e.$$typeof===Re)return Te(e)}throw Error(f(438,String(e)))}function Jc(e){var l=null,s=L.updateQueue;if(s!==null&&(l=s.memoCache),l==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),s===null&&(s=tn(),L.updateQueue=s),s.memoCache=l,s=l.data[l.index],s===void 0)for(s=l.data[l.index]=Array(e),a=0;a<e;a++)s[a]=Lt;return l.index++,s}function ql(e,l){return typeof l=="function"?l(e):l}function an(e){var l=ve();return Wc(l,ce,e)}function Wc(e,l,s){var a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=s;var n=e.baseQueue,c=a.pending;if(c!==null){if(n!==null){var r=n.next;n.next=c.next,c.next=r}l.baseQueue=n=c,a.pending=null}if(c=e.baseState,n===null)e.memoizedState=c;else{l=n.next;var d=r=null,i=null,h=l,b=!1;do{var N=h.lane&-536870913;if(N!==h.lane?(K&N)===N:(Hl&N)===N){var p=h.revertLane;if(p===0)i!==null&&(i=i.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),N===rs&&(b=!0);else if((Hl&p)===p){h=h.next,p===rs&&(b=!0);continue}else N={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},i===null?(d=i=N,r=c):i=i.next=N,L.lanes|=p,ut|=p;N=h.action,Ht&&s(c,N),c=h.hasEagerState?h.eagerState:s(c,N)}else p={lane:N,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},i===null?(d=i=p,r=c):i=i.next=p,L.lanes|=N,ut|=N;h=h.next}while(h!==null&&h!==l);if(i===null?r=c:i.next=d,!Ie(c,e.memoizedState)&&(ye=!0,b&&(s=ds,s!==null)))throw s;e.memoizedState=c,e.baseState=r,e.baseQueue=i,a.lastRenderedState=c}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function $c(e){var l=ve(),s=l.queue;if(s===null)throw Error(f(311));s.lastRenderedReducer=e;var a=s.dispatch,n=s.pending,c=l.memoizedState;if(n!==null){s.pending=null;var r=n=n.next;do c=e(c,r.action),r=r.next;while(r!==n);Ie(c,l.memoizedState)||(ye=!0),l.memoizedState=c,l.baseQueue===null&&(l.baseState=c),s.lastRenderedState=c}return[c,a]}function Hi(e,l,s){var a=L,n=ve(),c=$;if(c){if(s===void 0)throw Error(f(407));s=s()}else s=l();var r=!Ie((ce||n).memoizedState,s);if(r&&(n.memoizedState=s,ye=!0),n=n.queue,Ic(Yi.bind(null,a,n,e),[e]),n.getSnapshot!==l||r||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,fs(9,{destroy:void 0},Gi.bind(null,a,n,s,l),null),oe===null)throw Error(f(349));c||(Hl&127)!==0||qi(a,l,s)}return s}function qi(e,l,s){e.flags|=16384,e={getSnapshot:l,value:s},l=L.updateQueue,l===null?(l=tn(),L.updateQueue=l,l.stores=[e]):(s=l.stores,s===null?l.stores=[e]:s.push(e))}function Gi(e,l,s,a){l.value=s,l.getSnapshot=a,Li(l)&&Vi(e)}function Yi(e,l,s){return s(function(){Li(l)&&Vi(e)})}function Li(e){var l=e.getSnapshot;e=e.value;try{var s=l();return!Ie(e,s)}catch{return!0}}function Vi(e){var l=Tt(e,2);l!==null&&Ke(l,e,2)}function Fc(e){var l=Be();if(typeof e=="function"){var s=e;if(e=s(),Ht){Fl(!0);try{s()}finally{Fl(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:e},l}function Qi(e,l,s,a){return e.baseState=s,Wc(e,ce,typeof a=="function"?a:ql)}function Zm(e,l,s,a,n){if(rn(e))throw Error(f(485));if(e=l.action,e!==null){var c={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){c.listeners.push(r)}};v.T!==null?s(!0):c.isTransition=!1,a(c),s=l.pending,s===null?(c.next=l.pending=c,Xi(l,c)):(c.next=s.next,l.pending=s.next=c)}}function Xi(e,l){var s=l.action,a=l.payload,n=e.state;if(l.isTransition){var c=v.T,r={};v.T=r;try{var d=s(n,a),i=v.S;i!==null&&i(r,d),Zi(e,l,d)}catch(h){Pc(e,l,h)}finally{c!==null&&r.types!==null&&(c.types=r.types),v.T=c}}else try{c=s(n,a),Zi(e,l,c)}catch(h){Pc(e,l,h)}}function Zi(e,l,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(a){Ki(e,l,a)},function(a){return Pc(e,l,a)}):Ki(e,l,s)}function Ki(e,l,s){l.status="fulfilled",l.value=s,Ji(l),e.state=s,l=e.pending,l!==null&&(s=l.next,s===l?e.pending=null:(s=s.next,l.next=s,Xi(e,s)))}function Pc(e,l,s){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=s,Ji(l),l=l.next;while(l!==a)}e.action=null}function Ji(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function Wi(e,l){return l}function $i(e,l){if($){var s=oe.formState;if(s!==null){e:{var a=L;if($){if(ue){l:{for(var n=ue,c=ml;n.nodeType!==8;){if(!c){n=null;break l}if(n=hl(n.nextSibling),n===null){n=null;break l}}c=n.data,n=c==="F!"||c==="F"?n:null}if(n){ue=hl(n.nextSibling),a=n.data==="F!";break e}}tt(a)}a=!1}a&&(l=s[0])}}return s=Be(),s.memoizedState=s.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:l},s.queue=a,s=po.bind(null,L,a),a.dispatch=s,a=Fc(!1),c=ar.bind(null,L,!1,a.queue),a=Be(),n={state:l,dispatch:null,action:e,pending:null},a.queue=n,s=Zm.bind(null,L,n,c,s),n.dispatch=s,a.memoizedState=e,[l,s,!1]}function Fi(e){var l=ve();return Pi(l,ce,e)}function Pi(e,l,s){if(l=Wc(e,l,Wi)[0],e=an(ql)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Ps(l)}catch(r){throw r===is?Ja:r}else a=l;l=ve();var n=l.queue,c=n.dispatch;return s!==l.memoizedState&&(L.flags|=2048,fs(9,{destroy:void 0},Km.bind(null,n,s),null)),[a,c,e]}function Km(e,l){e.action=l}function Ii(e){var l=ve(),s=ce;if(s!==null)return Pi(l,s,e);ve(),l=l.memoizedState,s=ve();var a=s.queue.dispatch;return s.memoizedState=e,[l,a,!1]}function fs(e,l,s,a){return e={tag:e,create:s,deps:a,inst:l,next:null},l=L.updateQueue,l===null&&(l=tn(),L.updateQueue=l),s=l.lastEffect,s===null?l.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,l.lastEffect=e),e}function eo(){return ve().memoizedState}function nn(e,l,s,a){var n=Be();L.flags|=e,n.memoizedState=fs(1|l,{destroy:void 0},s,a===void 0?null:a)}function cn(e,l,s,a){var n=ve();a=a===void 0?null:a;var c=n.memoizedState.inst;ce!==null&&a!==null&&Vc(a,ce.memoizedState.deps)?n.memoizedState=fs(l,c,s,a):(L.flags|=e,n.memoizedState=fs(1|l,c,s,a))}function lo(e,l){nn(8390656,8,e,l)}function Ic(e,l){cn(2048,8,e,l)}function Jm(e){L.flags|=4;var l=L.updateQueue;if(l===null)l=tn(),L.updateQueue=l,l.events=[e];else{var s=l.events;s===null?l.events=[e]:s.push(e)}}function to(e){var l=ve().memoizedState;return Jm({ref:l,nextImpl:e}),function(){if((ee&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}function so(e,l){return cn(4,2,e,l)}function ao(e,l){return cn(4,4,e,l)}function no(e,l){if(typeof l=="function"){e=e();var s=l(e);return function(){typeof s=="function"?s():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function co(e,l,s){s=s!=null?s.concat([e]):null,cn(4,4,no.bind(null,l,e),s)}function er(){}function ro(e,l){var s=ve();l=l===void 0?null:l;var a=s.memoizedState;return l!==null&&Vc(l,a[1])?a[0]:(s.memoizedState=[e,l],e)}function io(e,l){var s=ve();l=l===void 0?null:l;var a=s.memoizedState;if(l!==null&&Vc(l,a[1]))return a[0];if(a=e(),Ht){Fl(!0);try{e()}finally{Fl(!1)}}return s.memoizedState=[a,l],a}function lr(e,l,s){return s===void 0||(Hl&1073741824)!==0&&(K&261930)===0?e.memoizedState=l:(e.memoizedState=s,e=ou(),L.lanes|=e,ut|=e,s)}function oo(e,l,s,a){return Ie(s,l)?s:us.current!==null?(e=lr(e,s,a),Ie(e,l)||(ye=!0),e):(Hl&42)===0||(Hl&1073741824)!==0&&(K&261930)===0?(ye=!0,e.memoizedState=s):(e=ou(),L.lanes|=e,ut|=e,l)}function uo(e,l,s,a,n){var c=E.p;E.p=c!==0&&8>c?c:8;var r=v.T,d={};v.T=d,ar(e,!1,l,s);try{var i=n(),h=v.S;if(h!==null&&h(d,i),i!==null&&typeof i=="object"&&typeof i.then=="function"){var b=Vm(i,a);Is(e,l,b,nl(e))}else Is(e,l,a,nl(e))}catch(N){Is(e,l,{then:function(){},status:"rejected",reason:N},nl())}finally{E.p=c,r!==null&&d.types!==null&&(r.types=d.types),v.T=r}}function Wm(){}function tr(e,l,s,a){if(e.tag!==5)throw Error(f(476));var n=xo(e).queue;uo(e,n,l,B,s===null?Wm:function(){return mo(e),s(a)})}function xo(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:B},next:null};var s={};return l.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:s},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function mo(e){var l=xo(e);l.next===null&&(l=e.alternate.memoizedState),Is(e,l.next.queue,{},nl())}function sr(){return Te(pa)}function fo(){return ve().memoizedState}function ho(){return ve().memoizedState}function $m(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var s=nl();e=nt(s);var a=ct(l,e,s);a!==null&&(Ke(a,l,s),Js(a,l,s)),l={cache:Rc()},e.payload=l;return}l=l.return}}function Fm(e,l,s){var a=nl();s={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},rn(e)?go(l,s):(s=Nc(e,l,s,a),s!==null&&(Ke(s,e,a),bo(s,l,a)))}function po(e,l,s){var a=nl();Is(e,l,s,a)}function Is(e,l,s,a){var n={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(rn(e))go(l,n);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=l.lastRenderedReducer,c!==null))try{var r=l.lastRenderedState,d=c(r,s);if(n.hasEagerState=!0,n.eagerState=d,Ie(d,r))return Ya(e,l,n,0),oe===null&&Ga(),!1}catch{}finally{}if(s=Nc(e,l,n,a),s!==null)return Ke(s,e,a),bo(s,l,a),!0}return!1}function ar(e,l,s,a){if(a={lane:2,revertLane:Br(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rn(e)){if(l)throw Error(f(479))}else l=Nc(e,s,a,2),l!==null&&Ke(l,e,2)}function rn(e){var l=e.alternate;return e===L||l!==null&&l===L}function go(e,l){xs=en=!0;var s=e.pending;s===null?l.next=l:(l.next=s.next,s.next=l),e.pending=l}function bo(e,l,s){if((s&4194048)!==0){var a=l.lanes;a&=e.pendingLanes,s|=a,l.lanes=s,yd(e,s)}}var ea={readContext:Te,use:sn,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};ea.useEffectEvent=he;var vo={readContext:Te,use:sn,useCallback:function(e,l){return Be().memoizedState=[e,l===void 0?null:l],e},useContext:Te,useEffect:lo,useImperativeHandle:function(e,l,s){s=s!=null?s.concat([e]):null,nn(4194308,4,no.bind(null,l,e),s)},useLayoutEffect:function(e,l){return nn(4194308,4,e,l)},useInsertionEffect:function(e,l){nn(4,2,e,l)},useMemo:function(e,l){var s=Be();l=l===void 0?null:l;var a=e();if(Ht){Fl(!0);try{e()}finally{Fl(!1)}}return s.memoizedState=[a,l],a},useReducer:function(e,l,s){var a=Be();if(s!==void 0){var n=s(l);if(Ht){Fl(!0);try{s(l)}finally{Fl(!1)}}}else n=l;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Fm.bind(null,L,e),[a.memoizedState,e]},useRef:function(e){var l=Be();return e={current:e},l.memoizedState=e},useState:function(e){e=Fc(e);var l=e.queue,s=po.bind(null,L,l);return l.dispatch=s,[e.memoizedState,s]},useDebugValue:er,useDeferredValue:function(e,l){var s=Be();return lr(s,e,l)},useTransition:function(){var e=Fc(!1);return e=uo.bind(null,L,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,s){var a=L,n=Be();if($){if(s===void 0)throw Error(f(407));s=s()}else{if(s=l(),oe===null)throw Error(f(349));(K&127)!==0||qi(a,l,s)}n.memoizedState=s;var c={value:s,getSnapshot:l};return n.queue=c,lo(Yi.bind(null,a,c,e),[e]),a.flags|=2048,fs(9,{destroy:void 0},Gi.bind(null,a,c,s,l),null),s},useId:function(){var e=Be(),l=oe.identifierPrefix;if($){var s=El,a=_l;s=(a&~(1<<32-Pe(a)-1)).toString(32)+s,l="_"+l+"R_"+s,s=ln++,0<s&&(l+="H"+s.toString(32)),l+="_"}else s=Qm++,l="_"+l+"r_"+s.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:sr,useFormState:$i,useActionState:$i,useOptimistic:function(e){var l=Be();l.memoizedState=l.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=s,l=ar.bind(null,L,!0,s),s.dispatch=l,[e,l]},useMemoCache:Jc,useCacheRefresh:function(){return Be().memoizedState=$m.bind(null,L)},useEffectEvent:function(e){var l=Be(),s={impl:e};return l.memoizedState=s,function(){if((ee&2)!==0)throw Error(f(440));return s.impl.apply(void 0,arguments)}}},nr={readContext:Te,use:sn,useCallback:ro,useContext:Te,useEffect:Ic,useImperativeHandle:co,useInsertionEffect:so,useLayoutEffect:ao,useMemo:io,useReducer:an,useRef:eo,useState:function(){return an(ql)},useDebugValue:er,useDeferredValue:function(e,l){var s=ve();return oo(s,ce.memoizedState,e,l)},useTransition:function(){var e=an(ql)[0],l=ve().memoizedState;return[typeof e=="boolean"?e:Ps(e),l]},useSyncExternalStore:Hi,useId:fo,useHostTransitionStatus:sr,useFormState:Fi,useActionState:Fi,useOptimistic:function(e,l){var s=ve();return Qi(s,ce,e,l)},useMemoCache:Jc,useCacheRefresh:ho};nr.useEffectEvent=to;var jo={readContext:Te,use:sn,useCallback:ro,useContext:Te,useEffect:Ic,useImperativeHandle:co,useInsertionEffect:so,useLayoutEffect:ao,useMemo:io,useReducer:$c,useRef:eo,useState:function(){return $c(ql)},useDebugValue:er,useDeferredValue:function(e,l){var s=ve();return ce===null?lr(s,e,l):oo(s,ce.memoizedState,e,l)},useTransition:function(){var e=$c(ql)[0],l=ve().memoizedState;return[typeof e=="boolean"?e:Ps(e),l]},useSyncExternalStore:Hi,useId:fo,useHostTransitionStatus:sr,useFormState:Ii,useActionState:Ii,useOptimistic:function(e,l){var s=ve();return ce!==null?Qi(s,ce,e,l):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:ho};jo.useEffectEvent=to;function cr(e,l,s,a){l=e.memoizedState,s=s(a,l),s=s==null?l:U({},l,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var rr={enqueueSetState:function(e,l,s){e=e._reactInternals;var a=nl(),n=nt(a);n.payload=l,s!=null&&(n.callback=s),l=ct(e,n,a),l!==null&&(Ke(l,e,a),Js(l,e,a))},enqueueReplaceState:function(e,l,s){e=e._reactInternals;var a=nl(),n=nt(a);n.tag=1,n.payload=l,s!=null&&(n.callback=s),l=ct(e,n,a),l!==null&&(Ke(l,e,a),Js(l,e,a))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var s=nl(),a=nt(s);a.tag=2,l!=null&&(a.callback=l),l=ct(e,a,s),l!==null&&(Ke(l,e,s),Js(l,e,s))}};function No(e,l,s,a,n,c,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,r):l.prototype&&l.prototype.isPureReactComponent?!Gs(s,a)||!Gs(n,c):!0}function yo(e,l,s,a){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(s,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(s,a),l.state!==e&&rr.enqueueReplaceState(l,l.state,null)}function qt(e,l){var s=l;if("ref"in l){s={};for(var a in l)a!=="ref"&&(s[a]=l[a])}if(e=e.defaultProps){s===l&&(s=U({},s));for(var n in e)s[n]===void 0&&(s[n]=e[n])}return s}function So(e){qa(e)}function _o(e){console.error(e)}function Eo(e){qa(e)}function dn(e,l){try{var s=e.onUncaughtError;s(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function ko(e,l,s){try{var a=e.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function dr(e,l,s){return s=nt(s),s.tag=3,s.payload={element:null},s.callback=function(){dn(e,l)},s}function Ao(e){return e=nt(e),e.tag=3,e}function Do(e,l,s,a){var n=s.type.getDerivedStateFromError;if(typeof n=="function"){var c=a.value;e.payload=function(){return n(c)},e.callback=function(){ko(l,s,a)}}var r=s.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ko(l,s,a),typeof n!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function Pm(e,l,s,a,n){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=s.alternate,l!==null&&cs(l,s,n,!0),s=ll.current,s!==null){switch(s.tag){case 31:case 13:return fl===null?Nn():s.alternate===null&&pe===0&&(pe=3),s.flags&=-257,s.flags|=65536,s.lanes=n,a===Wa?s.flags|=16384:(l=s.updateQueue,l===null?s.updateQueue=new Set([a]):l.add(a),zr(e,a,n)),!1;case 22:return s.flags|=65536,a===Wa?s.flags|=16384:(l=s.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=l):(s=l.retryQueue,s===null?l.retryQueue=new Set([a]):s.add(a)),zr(e,a,n)),!1}throw Error(f(435,s.tag))}return zr(e,a,n),Nn(),!1}if($)return l=ll.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Ac&&(e=Error(f(422),{cause:a}),Vs(ol(e,s)))):(a!==Ac&&(l=Error(f(423),{cause:a}),Vs(ol(l,s))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=ol(a,s),n=dr(e.stateNode,a,n),Hc(e,n),pe!==4&&(pe=2)),!1;var c=Error(f(520),{cause:a});if(c=ol(c,s),da===null?da=[c]:da.push(c),pe!==4&&(pe=2),l===null)return!0;a=ol(a,s),s=l;do{switch(s.tag){case 3:return s.flags|=65536,e=n&-n,s.lanes|=e,e=dr(s.stateNode,a,e),Hc(s,e),!1;case 1:if(l=s.type,c=s.stateNode,(s.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(xt===null||!xt.has(c))))return s.flags|=65536,n&=-n,s.lanes|=n,n=Ao(n),Do(n,e,s,a),Hc(s,n),!1}s=s.return}while(s!==null);return!1}var ir=Error(f(461)),ye=!1;function Oe(e,l,s,a){l.child=e===null?wi(l,null,s,a):Ct(l,e.child,s,a)}function To(e,l,s,a,n){s=s.render;var c=l.ref;if("ref"in a){var r={};for(var d in a)d!=="ref"&&(r[d]=a[d])}else r=a;return zt(l),a=Qc(e,l,s,r,c,n),d=Xc(),e!==null&&!ye?(Zc(e,l,n),Gl(e,l,n)):($&&d&&Ec(l),l.flags|=1,Oe(e,l,a,n),l.child)}function Oo(e,l,s,a,n){if(e===null){var c=s.type;return typeof c=="function"&&!yc(c)&&c.defaultProps===void 0&&s.compare===null?(l.tag=15,l.type=c,wo(e,l,c,a,n)):(e=Va(s.type,null,a,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(c=e.child,!gr(e,n)){var r=c.memoizedProps;if(s=s.compare,s=s!==null?s:Gs,s(r,a)&&e.ref===l.ref)return Gl(e,l,n)}return l.flags|=1,e=Ml(c,a),e.ref=l.ref,e.return=l,l.child=e}function wo(e,l,s,a,n){if(e!==null){var c=e.memoizedProps;if(Gs(c,a)&&e.ref===l.ref)if(ye=!1,l.pendingProps=a=c,gr(e,n))(e.flags&131072)!==0&&(ye=!0);else return l.lanes=e.lanes,Gl(e,l,n)}return or(e,l,s,a,n)}function Ro(e,l,s,a){var n=a.children,c=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(c=c!==null?c.baseLanes|s:s,e!==null){for(a=l.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~c}else a=0,l.child=null;return zo(e,l,c,s,a)}if((s&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ka(l,c!==null?c.cachePool:null),c!==null?Mi(l,c):Gc(),Ui(l);else return a=l.lanes=536870912,zo(e,l,c!==null?c.baseLanes|s:s,s,a)}else c!==null?(Ka(l,c.cachePool),Mi(l,c),dt(),l.memoizedState=null):(e!==null&&Ka(l,null),Gc(),dt());return Oe(e,l,n,s),l.child}function la(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function zo(e,l,s,a,n){var c=Mc();return c=c===null?null:{parent:je._currentValue,pool:c},l.memoizedState={baseLanes:s,cachePool:c},e!==null&&Ka(l,null),Gc(),Ui(l),e!==null&&cs(e,l,a,!0),l.childLanes=n,null}function on(e,l){return l=xn({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function Mo(e,l,s){return Ct(l,e.child,null,s),e=on(l,l.pendingProps),e.flags|=2,tl(l),l.memoizedState=null,e}function Im(e,l,s){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,e===null){if($){if(a.mode==="hidden")return e=on(l,a),l.lanes=536870912,la(null,e);if(Lc(l),(e=ue)?(e=Zu(e,ml),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:et!==null?{id:_l,overflow:El}:null,retryLane:536870912,hydrationErrors:null},s=pi(e),s.return=l,l.child=s,De=l,ue=null)):e=null,e===null)throw tt(l);return l.lanes=536870912,null}return on(l,a)}var c=e.memoizedState;if(c!==null){var r=c.dehydrated;if(Lc(l),n)if(l.flags&256)l.flags&=-257,l=Mo(e,l,s);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(f(558));else if(ye||cs(e,l,s,!1),n=(s&e.childLanes)!==0,ye||n){if(a=oe,a!==null&&(r=Sd(a,s),r!==0&&r!==c.retryLane))throw c.retryLane=r,Tt(e,r),Ke(a,e,r),ir;Nn(),l=Mo(e,l,s)}else e=c.treeContext,ue=hl(r.nextSibling),De=l,$=!0,lt=null,ml=!1,e!==null&&vi(l,e),l=on(l,a),l.flags|=4096;return l}return e=Ml(e.child,{mode:a.mode,children:a.children}),e.ref=l.ref,l.child=e,e.return=l,e}function un(e,l){var s=l.ref;if(s===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(f(284));(e===null||e.ref!==s)&&(l.flags|=4194816)}}function or(e,l,s,a,n){return zt(l),s=Qc(e,l,s,a,void 0,n),a=Xc(),e!==null&&!ye?(Zc(e,l,n),Gl(e,l,n)):($&&a&&Ec(l),l.flags|=1,Oe(e,l,s,n),l.child)}function Uo(e,l,s,a,n,c){return zt(l),l.updateQueue=null,s=Ci(l,a,s,n),Bi(e),a=Xc(),e!==null&&!ye?(Zc(e,l,c),Gl(e,l,c)):($&&a&&Ec(l),l.flags|=1,Oe(e,l,s,c),l.child)}function Bo(e,l,s,a,n){if(zt(l),l.stateNode===null){var c=ts,r=s.contextType;typeof r=="object"&&r!==null&&(c=Te(r)),c=new s(a,c),l.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=rr,l.stateNode=c,c._reactInternals=l,c=l.stateNode,c.props=a,c.state=l.memoizedState,c.refs={},Bc(l),r=s.contextType,c.context=typeof r=="object"&&r!==null?Te(r):ts,c.state=l.memoizedState,r=s.getDerivedStateFromProps,typeof r=="function"&&(cr(l,s,r,a),c.state=l.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&rr.enqueueReplaceState(c,c.state,null),$s(l,a,c,n),Ws(),c.state=l.memoizedState),typeof c.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(e===null){c=l.stateNode;var d=l.memoizedProps,i=qt(s,d);c.props=i;var h=c.context,b=s.contextType;r=ts,typeof b=="object"&&b!==null&&(r=Te(b));var N=s.getDerivedStateFromProps;b=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function",d=l.pendingProps!==d,b||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d||h!==r)&&yo(l,c,a,r),at=!1;var p=l.memoizedState;c.state=p,$s(l,a,c,n),Ws(),h=l.memoizedState,d||p!==h||at?(typeof N=="function"&&(cr(l,s,N,a),h=l.memoizedState),(i=at||No(l,s,i,a,p,h,r))?(b||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(l.flags|=4194308)):(typeof c.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=h),c.props=a,c.state=h,c.context=r,a=i):(typeof c.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{c=l.stateNode,Cc(e,l),r=l.memoizedProps,b=qt(s,r),c.props=b,N=l.pendingProps,p=c.context,h=s.contextType,i=ts,typeof h=="object"&&h!==null&&(i=Te(h)),d=s.getDerivedStateFromProps,(h=typeof d=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(r!==N||p!==i)&&yo(l,c,a,i),at=!1,p=l.memoizedState,c.state=p,$s(l,a,c,n),Ws();var g=l.memoizedState;r!==N||p!==g||at||e!==null&&e.dependencies!==null&&Xa(e.dependencies)?(typeof d=="function"&&(cr(l,s,d,a),g=l.memoizedState),(b=at||No(l,s,b,a,p,g,i)||e!==null&&e.dependencies!==null&&Xa(e.dependencies))?(h||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,g,i),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,g,i)),typeof c.componentDidUpdate=="function"&&(l.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof c.componentDidUpdate!="function"||r===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=g),c.props=a,c.state=g,c.context=i,a=b):(typeof c.componentDidUpdate!="function"||r===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),a=!1)}return c=a,un(e,l),a=(l.flags&128)!==0,c||a?(c=l.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:c.render(),l.flags|=1,e!==null&&a?(l.child=Ct(l,e.child,null,n),l.child=Ct(l,null,s,n)):Oe(e,l,s,n),l.memoizedState=c.state,e=l.child):e=Gl(e,l,n),e}function Co(e,l,s,a){return wt(),l.flags|=256,Oe(e,l,s,a),l.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xr(e){return{baseLanes:e,cachePool:Ei()}}function mr(e,l,s){return e=e!==null?e.childLanes&~s:0,l&&(e|=al),e}function Ho(e,l,s){var a=l.pendingProps,n=!1,c=(l.flags&128)!==0,r;if((r=c)||(r=e!==null&&e.memoizedState===null?!1:(be.current&2)!==0),r&&(n=!0,l.flags&=-129),r=(l.flags&32)!==0,l.flags&=-33,e===null){if($){if(n?rt(l):dt(),(e=ue)?(e=Zu(e,ml),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:et!==null?{id:_l,overflow:El}:null,retryLane:536870912,hydrationErrors:null},s=pi(e),s.return=l,l.child=s,De=l,ue=null)):e=null,e===null)throw tt(l);return Wr(e)?l.lanes=32:l.lanes=536870912,null}var d=a.children;return a=a.fallback,n?(dt(),n=l.mode,d=xn({mode:"hidden",children:d},n),a=Ot(a,n,s,null),d.return=l,a.return=l,d.sibling=a,l.child=d,a=l.child,a.memoizedState=xr(s),a.childLanes=mr(e,r,s),l.memoizedState=ur,la(null,a)):(rt(l),fr(l,d))}var i=e.memoizedState;if(i!==null&&(d=i.dehydrated,d!==null)){if(c)l.flags&256?(rt(l),l.flags&=-257,l=hr(e,l,s)):l.memoizedState!==null?(dt(),l.child=e.child,l.flags|=128,l=null):(dt(),d=a.fallback,n=l.mode,a=xn({mode:"visible",children:a.children},n),d=Ot(d,n,s,null),d.flags|=2,a.return=l,d.return=l,a.sibling=d,l.child=a,Ct(l,e.child,null,s),a=l.child,a.memoizedState=xr(s),a.childLanes=mr(e,r,s),l.memoizedState=ur,l=la(null,a));else if(rt(l),Wr(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var h=r.dgst;r=h,a=Error(f(419)),a.stack="",a.digest=r,Vs({value:a,source:null,stack:null}),l=hr(e,l,s)}else if(ye||cs(e,l,s,!1),r=(s&e.childLanes)!==0,ye||r){if(r=oe,r!==null&&(a=Sd(r,s),a!==0&&a!==i.retryLane))throw i.retryLane=a,Tt(e,a),Ke(r,e,a),ir;Jr(d)||Nn(),l=hr(e,l,s)}else Jr(d)?(l.flags|=192,l.child=e.child,l=null):(e=i.treeContext,ue=hl(d.nextSibling),De=l,$=!0,lt=null,ml=!1,e!==null&&vi(l,e),l=fr(l,a.children),l.flags|=4096);return l}return n?(dt(),d=a.fallback,n=l.mode,i=e.child,h=i.sibling,a=Ml(i,{mode:"hidden",children:a.children}),a.subtreeFlags=i.subtreeFlags&65011712,h!==null?d=Ml(h,d):(d=Ot(d,n,s,null),d.flags|=2),d.return=l,a.return=l,a.sibling=d,l.child=a,la(null,a),a=l.child,d=e.child.memoizedState,d===null?d=xr(s):(n=d.cachePool,n!==null?(i=je._currentValue,n=n.parent!==i?{parent:i,pool:i}:n):n=Ei(),d={baseLanes:d.baseLanes|s,cachePool:n}),a.memoizedState=d,a.childLanes=mr(e,r,s),l.memoizedState=ur,la(e.child,a)):(rt(l),s=e.child,e=s.sibling,s=Ml(s,{mode:"visible",children:a.children}),s.return=l,s.sibling=null,e!==null&&(r=l.deletions,r===null?(l.deletions=[e],l.flags|=16):r.push(e)),l.child=s,l.memoizedState=null,s)}function fr(e,l){return l=xn({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function xn(e,l){return e=el(22,e,null,l),e.lanes=0,e}function hr(e,l,s){return Ct(l,e.child,null,s),e=fr(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function qo(e,l,s){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l),Oc(e.return,l,s)}function pr(e,l,s,a,n,c){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:n,treeForkCount:c}:(r.isBackwards=l,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=s,r.tailMode=n,r.treeForkCount=c)}function Go(e,l,s){var a=l.pendingProps,n=a.revealOrder,c=a.tail;a=a.children;var r=be.current,d=(r&2)!==0;if(d?(r=r&1|2,l.flags|=128):r&=1,k(be,r),Oe(e,l,a,s),a=$?Ls:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qo(e,s,l);else if(e.tag===19)qo(e,s,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(s=l.child,n=null;s!==null;)e=s.alternate,e!==null&&Ia(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=l.child,l.child=null):(n=s.sibling,s.sibling=null),pr(l,!1,n,s,c,a);break;case"backwards":case"unstable_legacy-backwards":for(s=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Ia(e)===null){l.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}pr(l,!0,s,null,c,a);break;case"together":pr(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Gl(e,l,s){if(e!==null&&(l.dependencies=e.dependencies),ut|=l.lanes,(s&l.childLanes)===0)if(e!==null){if(cs(e,l,s,!1),(s&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(f(153));if(l.child!==null){for(e=l.child,s=Ml(e,e.pendingProps),l.child=s,s.return=l;e.sibling!==null;)e=e.sibling,s=s.sibling=Ml(e,e.pendingProps),s.return=l;s.sibling=null}return l.child}function gr(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&Xa(e)))}function e0(e,l,s){switch(l.tag){case 3:Ue(l,l.stateNode.containerInfo),st(l,je,e.memoizedState.cache),wt();break;case 27:case 5:As(l);break;case 4:Ue(l,l.stateNode.containerInfo);break;case 10:st(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Lc(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(rt(l),l.flags|=128,null):(s&l.child.childLanes)!==0?Ho(e,l,s):(rt(l),e=Gl(e,l,s),e!==null?e.sibling:null);rt(l);break;case 19:var n=(e.flags&128)!==0;if(a=(s&l.childLanes)!==0,a||(cs(e,l,s,!1),a=(s&l.childLanes)!==0),n){if(a)return Go(e,l,s);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(be,be.current),a)break;return null;case 22:return l.lanes=0,Ro(e,l,s,l.pendingProps);case 24:st(l,je,e.memoizedState.cache)}return Gl(e,l,s)}function Yo(e,l,s){if(e!==null)if(e.memoizedProps!==l.pendingProps)ye=!0;else{if(!gr(e,s)&&(l.flags&128)===0)return ye=!1,e0(e,l,s);ye=(e.flags&131072)!==0}else ye=!1,$&&(l.flags&1048576)!==0&&bi(l,Ls,l.index);switch(l.lanes=0,l.tag){case 16:e:{var a=l.pendingProps;if(e=Ut(l.elementType),l.type=e,typeof e=="function")yc(e)?(a=qt(e,a),l.tag=1,l=Bo(null,l,e,a,s)):(l.tag=0,l=or(null,l,e,a,s));else{if(e!=null){var n=e.$$typeof;if(n===cl){l.tag=11,l=To(null,l,e,a,s);break e}else if(n===W){l.tag=14,l=Oo(null,l,e,a,s);break e}}throw l=Ol(e)||e,Error(f(306,l,""))}}return l;case 0:return or(e,l,l.type,l.pendingProps,s);case 1:return a=l.type,n=qt(a,l.pendingProps),Bo(e,l,a,n,s);case 3:e:{if(Ue(l,l.stateNode.containerInfo),e===null)throw Error(f(387));a=l.pendingProps;var c=l.memoizedState;n=c.element,Cc(e,l),$s(l,a,null,s);var r=l.memoizedState;if(a=r.cache,st(l,je,a),a!==c.cache&&wc(l,[je],s,!0),Ws(),a=r.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:r.cache},l.updateQueue.baseState=c,l.memoizedState=c,l.flags&256){l=Co(e,l,a,s);break e}else if(a!==n){n=ol(Error(f(424)),l),Vs(n),l=Co(e,l,a,s);break e}else{switch(e=l.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=hl(e.firstChild),De=l,$=!0,lt=null,ml=!0,s=wi(l,null,a,s),l.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(wt(),a===n){l=Gl(e,l,s);break e}Oe(e,l,a,s)}l=l.child}return l;case 26:return un(e,l),e===null?(s=Pu(l.type,null,l.pendingProps,null))?l.memoizedState=s:$||(s=l.type,e=l.pendingProps,a=Dn(Q.current).createElement(s),a[Ae]=l,a[Ye]=e,we(a,s,e),Ee(a),l.stateNode=a):l.memoizedState=Pu(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return As(l),e===null&&$&&(a=l.stateNode=Wu(l.type,l.pendingProps,Q.current),De=l,ml=!0,n=ue,pt(l.type)?($r=n,ue=hl(a.firstChild)):ue=n),Oe(e,l,l.pendingProps.children,s),un(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&$&&((n=a=ue)&&(a=O0(a,l.type,l.pendingProps,ml),a!==null?(l.stateNode=a,De=l,ue=hl(a.firstChild),ml=!1,n=!0):n=!1),n||tt(l)),As(l),n=l.type,c=l.pendingProps,r=e!==null?e.memoizedProps:null,a=c.children,Xr(n,c)?a=null:r!==null&&Xr(n,r)&&(l.flags|=32),l.memoizedState!==null&&(n=Qc(e,l,Xm,null,null,s),pa._currentValue=n),un(e,l),Oe(e,l,a,s),l.child;case 6:return e===null&&$&&((e=s=ue)&&(s=w0(s,l.pendingProps,ml),s!==null?(l.stateNode=s,De=l,ue=null,e=!0):e=!1),e||tt(l)),null;case 13:return Ho(e,l,s);case 4:return Ue(l,l.stateNode.containerInfo),a=l.pendingProps,e===null?l.child=Ct(l,null,a,s):Oe(e,l,a,s),l.child;case 11:return To(e,l,l.type,l.pendingProps,s);case 7:return Oe(e,l,l.pendingProps,s),l.child;case 8:return Oe(e,l,l.pendingProps.children,s),l.child;case 12:return Oe(e,l,l.pendingProps.children,s),l.child;case 10:return a=l.pendingProps,st(l,l.type,a.value),Oe(e,l,a.children,s),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,zt(l),n=Te(n),a=a(n),l.flags|=1,Oe(e,l,a,s),l.child;case 14:return Oo(e,l,l.type,l.pendingProps,s);case 15:return wo(e,l,l.type,l.pendingProps,s);case 19:return Go(e,l,s);case 31:return Im(e,l,s);case 22:return Ro(e,l,s,l.pendingProps);case 24:return zt(l),a=Te(je),e===null?(n=Mc(),n===null&&(n=oe,c=Rc(),n.pooledCache=c,c.refCount++,c!==null&&(n.pooledCacheLanes|=s),n=c),l.memoizedState={parent:a,cache:n},Bc(l),st(l,je,n)):((e.lanes&s)!==0&&(Cc(e,l),$s(l,null,null,s),Ws()),n=e.memoizedState,c=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),st(l,je,a)):(a=c.cache,st(l,je,a),a!==n.cache&&wc(l,[je],s,!0))),Oe(e,l,l.pendingProps.children,s),l.child;case 29:throw l.pendingProps}throw Error(f(156,l.tag))}function Yl(e){e.flags|=4}function br(e,l,s,a,n){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(fu())e.flags|=8192;else throw Bt=Wa,Uc}else e.flags&=-16777217}function Lo(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sx(l))if(fu())e.flags|=8192;else throw Bt=Wa,Uc}function mn(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?jd():536870912,e.lanes|=l,bs|=l)}function ta(e,l){if(!$)switch(e.tailMode){case"hidden":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var l=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(l)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=s,l}function l0(e,l,s){var a=l.pendingProps;switch(kc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(l),null;case 1:return xe(l),null;case 3:return s=l.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Cl(je),ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ns(l)?Yl(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Dc())),xe(l),null;case 26:var n=l.type,c=l.memoizedState;return e===null?(Yl(l),c!==null?(xe(l),Lo(l,c)):(xe(l),br(l,n,null,a,s))):c?c!==e.memoizedState?(Yl(l),xe(l),Lo(l,c)):(xe(l),l.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yl(l),xe(l),br(l,n,e,a,s)),null;case 27:if(Sa(l),s=Q.current,n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(!a){if(l.stateNode===null)throw Error(f(166));return xe(l),null}e=T.current,ns(l)?ji(l):(e=Wu(n,a,s),l.stateNode=e,Yl(l))}return xe(l),null;case 5:if(Sa(l),n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(!a){if(l.stateNode===null)throw Error(f(166));return xe(l),null}if(c=T.current,ns(l))ji(l);else{var r=Dn(Q.current);switch(c){case 1:c=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:c=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":c=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":c=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":c=r.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}c[Ae]=l,c[Ye]=a;e:for(r=l.child;r!==null;){if(r.tag===5||r.tag===6)c.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===l)break e;for(;r.sibling===null;){if(r.return===null||r.return===l)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l.stateNode=c;e:switch(we(c,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yl(l)}}return xe(l),br(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,s),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(f(166));if(e=Q.current,ns(l)){if(e=l.stateNode,s=l.memoizedProps,a=null,n=De,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ae]=l,e=!!(e.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||Hu(e.nodeValue,s)),e||tt(l,!0)}else e=Dn(e).createTextNode(a),e[Ae]=l,l.stateNode=e}return xe(l),null;case 31:if(s=l.memoizedState,e===null||e.memoizedState!==null){if(a=ns(l),s!==null){if(e===null){if(!a)throw Error(f(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ae]=l}else wt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;xe(l),e=!1}else s=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return l.flags&256?(tl(l),l):(tl(l),null);if((l.flags&128)!==0)throw Error(f(558))}return xe(l),null;case 13:if(a=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ns(l),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(f(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Ae]=l}else wt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;xe(l),n=!1}else n=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(tl(l),l):(tl(l),null)}return tl(l),(l.flags&128)!==0?(l.lanes=s,l):(s=a!==null,e=e!==null&&e.memoizedState!==null,s&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==n&&(a.flags|=2048)),s!==e&&s&&(l.child.flags|=8192),mn(l,l.updateQueue),xe(l),null);case 4:return ge(),e===null&&Gr(l.stateNode.containerInfo),xe(l),null;case 10:return Cl(l.type),xe(l),null;case 19:if(S(be),a=l.memoizedState,a===null)return xe(l),null;if(n=(l.flags&128)!==0,c=a.rendering,c===null)if(n)ta(a,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(c=Ia(e),c!==null){for(l.flags|=128,ta(a,!1),e=c.updateQueue,l.updateQueue=e,mn(l,e),l.subtreeFlags=0,e=s,s=l.child;s!==null;)hi(s,e),s=s.sibling;return k(be,be.current&1|2),$&&Ul(l,a.treeForkCount),l.child}e=e.sibling}a.tail!==null&&$e()>bn&&(l.flags|=128,n=!0,ta(a,!1),l.lanes=4194304)}else{if(!n)if(e=Ia(c),e!==null){if(l.flags|=128,n=!0,e=e.updateQueue,l.updateQueue=e,mn(l,e),ta(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!$)return xe(l),null}else 2*$e()-a.renderingStartTime>bn&&s!==536870912&&(l.flags|=128,n=!0,ta(a,!1),l.lanes=4194304);a.isBackwards?(c.sibling=l.child,l.child=c):(e=a.last,e!==null?e.sibling=c:l.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,s=be.current,k(be,n?s&1|2:s&1),$&&Ul(l,a.treeForkCount),e):(xe(l),null);case 22:case 23:return tl(l),Yc(),a=l.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(s&536870912)!==0&&(l.flags&128)===0&&(xe(l),l.subtreeFlags&6&&(l.flags|=8192)):xe(l),s=l.updateQueue,s!==null&&mn(l,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==s&&(l.flags|=2048),e!==null&&S(Mt),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),l.memoizedState.cache!==s&&(l.flags|=2048),Cl(je),xe(l),null;case 25:return null;case 30:return null}throw Error(f(156,l.tag))}function t0(e,l){switch(kc(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return Cl(je),ge(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return Sa(l),null;case 31:if(l.memoizedState!==null){if(tl(l),l.alternate===null)throw Error(f(340));wt()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(tl(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(f(340));wt()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return S(be),null;case 4:return ge(),null;case 10:return Cl(l.type),null;case 22:case 23:return tl(l),Yc(),e!==null&&S(Mt),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return Cl(je),null;case 25:return null;default:return null}}function Vo(e,l){switch(kc(l),l.tag){case 3:Cl(je),ge();break;case 26:case 27:case 5:Sa(l);break;case 4:ge();break;case 31:l.memoizedState!==null&&tl(l);break;case 13:tl(l);break;case 19:S(be);break;case 10:Cl(l.type);break;case 22:case 23:tl(l),Yc(),e!==null&&S(Mt);break;case 24:Cl(je)}}function sa(e,l){try{var s=l.updateQueue,a=s!==null?s.lastEffect:null;if(a!==null){var n=a.next;s=n;do{if((s.tag&e)===e){a=void 0;var c=s.create,r=s.inst;a=c(),r.destroy=a}s=s.next}while(s!==n)}}catch(d){ae(l,l.return,d)}}function it(e,l,s){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var c=n.next;a=c;do{if((a.tag&e)===e){var r=a.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,n=l;var i=s,h=d;try{h()}catch(b){ae(n,i,b)}}}a=a.next}while(a!==c)}}catch(b){ae(l,l.return,b)}}function Qo(e){var l=e.updateQueue;if(l!==null){var s=e.stateNode;try{zi(l,s)}catch(a){ae(e,e.return,a)}}}function Xo(e,l,s){s.props=qt(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(a){ae(e,l,a)}}function aa(e,l){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof s=="function"?e.refCleanup=s(a):s.current=a}}catch(n){ae(e,l,n)}}function kl(e,l){var s=e.ref,a=e.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(n){ae(e,l,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(n){ae(e,l,n)}else s.current=null}function Zo(e){var l=e.type,s=e.memoizedProps,a=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src?a.src=s.src:s.srcSet&&(a.srcset=s.srcSet)}}catch(n){ae(e,e.return,n)}}function vr(e,l,s){try{var a=e.stateNode;_0(a,e.type,s,l),a[Ye]=l}catch(n){ae(e,e.return,n)}}function Ko(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pt(e.type)||e.tag===4}function jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ko(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nr(e,l,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,l):(l=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,l.appendChild(e),s=s._reactRootContainer,s!=null||l.onclick!==null||(l.onclick=Rl));else if(a!==4&&(a===27&&pt(e.type)&&(s=e.stateNode,l=null),e=e.child,e!==null))for(Nr(e,l,s),e=e.sibling;e!==null;)Nr(e,l,s),e=e.sibling}function fn(e,l,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?s.insertBefore(e,l):s.appendChild(e);else if(a!==4&&(a===27&&pt(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fn(e,l,s),e=e.sibling;e!==null;)fn(e,l,s),e=e.sibling}function Jo(e){var l=e.stateNode,s=e.memoizedProps;try{for(var a=e.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);we(l,a,s),l[Ae]=e,l[Ye]=s}catch(c){ae(e,e.return,c)}}var Ll=!1,Se=!1,yr=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,ke=null;function s0(e,l){if(e=e.containerInfo,Vr=Un,e=ci(e),hc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var n=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var r=0,d=-1,i=-1,h=0,b=0,N=e,p=null;l:for(;;){for(var g;N!==s||n!==0&&N.nodeType!==3||(d=r+n),N!==c||a!==0&&N.nodeType!==3||(i=r+a),N.nodeType===3&&(r+=N.nodeValue.length),(g=N.firstChild)!==null;)p=N,N=g;for(;;){if(N===e)break l;if(p===s&&++h===n&&(d=r),p===c&&++b===a&&(i=r),(g=N.nextSibling)!==null)break;N=p,p=N.parentNode}N=g}s=d===-1||i===-1?null:{start:d,end:i}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qr={focusedElem:e,selectionRange:s},Un=!1,ke=l;ke!==null;)if(l=ke,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,ke=e;else for(;ke!==null;){switch(l=ke,c=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)n=e[s],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,s=l,n=c.memoizedProps,c=c.memoizedState,a=s.stateNode;try{var D=qt(s.type,n);e=a.getSnapshotBeforeUpdate(D,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(M){ae(s,s.return,M)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,s=e.nodeType,s===9)Kr(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=l.sibling,e!==null){e.return=l.return,ke=e;break}ke=l.return}}function $o(e,l,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:Ql(e,s),a&4&&sa(5,s);break;case 1:if(Ql(e,s),a&4)if(e=s.stateNode,l===null)try{e.componentDidMount()}catch(r){ae(s,s.return,r)}else{var n=qt(s.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(n,l,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ae(s,s.return,r)}}a&64&&Qo(s),a&512&&aa(s,s.return);break;case 3:if(Ql(e,s),a&64&&(e=s.updateQueue,e!==null)){if(l=null,s.child!==null)switch(s.child.tag){case 27:case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}try{zi(e,l)}catch(r){ae(s,s.return,r)}}break;case 27:l===null&&a&4&&Jo(s);case 26:case 5:Ql(e,s),l===null&&a&4&&Zo(s),a&512&&aa(s,s.return);break;case 12:Ql(e,s);break;case 31:Ql(e,s),a&4&&Io(e,s);break;case 13:Ql(e,s),a&4&&eu(e,s),a&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=x0.bind(null,s),R0(e,s))));break;case 22:if(a=s.memoizedState!==null||Ll,!a){l=l!==null&&l.memoizedState!==null||Se,n=Ll;var c=Se;Ll=a,(Se=l)&&!c?Xl(e,s,(s.subtreeFlags&8772)!==0):Ql(e,s),Ll=n,Se=c}break;case 30:break;default:Ql(e,s)}}function Fo(e){var l=e.alternate;l!==null&&(e.alternate=null,Fo(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&Pn(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,Ve=!1;function Vl(e,l,s){for(s=s.child;s!==null;)Po(e,l,s),s=s.sibling}function Po(e,l,s){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Ds,s)}catch{}switch(s.tag){case 26:Se||kl(s,l),Vl(e,l,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Se||kl(s,l);var a=fe,n=Ve;pt(s.type)&&(fe=s.stateNode,Ve=!1),Vl(e,l,s),ma(s.stateNode),fe=a,Ve=n;break;case 5:Se||kl(s,l);case 6:if(a=fe,n=Ve,fe=null,Vl(e,l,s),fe=a,Ve=n,fe!==null)if(Ve)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(s.stateNode)}catch(c){ae(s,l,c)}else try{fe.removeChild(s.stateNode)}catch(c){ae(s,l,c)}break;case 18:fe!==null&&(Ve?(e=fe,Qu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ks(e)):Qu(fe,s.stateNode));break;case 4:a=fe,n=Ve,fe=s.stateNode.containerInfo,Ve=!0,Vl(e,l,s),fe=a,Ve=n;break;case 0:case 11:case 14:case 15:it(2,s,l),Se||it(4,s,l),Vl(e,l,s);break;case 1:Se||(kl(s,l),a=s.stateNode,typeof a.componentWillUnmount=="function"&&Xo(s,l,a)),Vl(e,l,s);break;case 21:Vl(e,l,s);break;case 22:Se=(a=Se)||s.memoizedState!==null,Vl(e,l,s),Se=a;break;default:Vl(e,l,s)}}function Io(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ks(e)}catch(s){ae(l,l.return,s)}}}function eu(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ks(e)}catch(s){ae(l,l.return,s)}}function a0(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new Wo),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new Wo),l;default:throw Error(f(435,e.tag))}}function hn(e,l){var s=a0(e);l.forEach(function(a){if(!s.has(a)){s.add(a);var n=m0.bind(null,e,a);a.then(n,n)}})}function Qe(e,l){var s=l.deletions;if(s!==null)for(var a=0;a<s.length;a++){var n=s[a],c=e,r=l,d=r;e:for(;d!==null;){switch(d.tag){case 27:if(pt(d.type)){fe=d.stateNode,Ve=!1;break e}break;case 5:fe=d.stateNode,Ve=!1;break e;case 3:case 4:fe=d.stateNode.containerInfo,Ve=!0;break e}d=d.return}if(fe===null)throw Error(f(160));Po(c,r,n),fe=null,Ve=!1,c=n.alternate,c!==null&&(c.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)lu(l,e),l=l.sibling}var vl=null;function lu(e,l){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(l,e),Xe(e),a&4&&(it(3,e,e.return),sa(3,e),it(5,e,e.return));break;case 1:Qe(l,e),Xe(e),a&512&&(Se||s===null||kl(s,s.return)),a&64&&Ll&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var n=vl;if(Qe(l,e),Xe(e),a&512&&(Se||s===null||kl(s,s.return)),a&4){var c=s!==null?s.memoizedState:null;if(a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null){e:{a=e.type,s=e.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":c=n.getElementsByTagName("title")[0],(!c||c[ws]||c[Ae]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=n.createElement(a),n.head.insertBefore(c,n.querySelector("head > title"))),we(c,a,s),c[Ae]=e,Ee(c),a=c;break e;case"link":var r=lx("link","href",n).get(a+(s.href||""));if(r){for(var d=0;d<r.length;d++)if(c=r[d],c.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&c.getAttribute("rel")===(s.rel==null?null:s.rel)&&c.getAttribute("title")===(s.title==null?null:s.title)&&c.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(d,1);break l}}c=n.createElement(a),we(c,a,s),n.head.appendChild(c);break;case"meta":if(r=lx("meta","content",n).get(a+(s.content||""))){for(d=0;d<r.length;d++)if(c=r[d],c.getAttribute("content")===(s.content==null?null:""+s.content)&&c.getAttribute("name")===(s.name==null?null:s.name)&&c.getAttribute("property")===(s.property==null?null:s.property)&&c.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&c.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(d,1);break l}}c=n.createElement(a),we(c,a,s),n.head.appendChild(c);break;default:throw Error(f(468,a))}c[Ae]=e,Ee(c),a=c}e.stateNode=a}else tx(n,e.type,e.stateNode);else e.stateNode=ex(n,a,e.memoizedProps);else c!==a?(c===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):c.count--,a===null?tx(n,e.type,e.stateNode):ex(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vr(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qe(l,e),Xe(e),a&512&&(Se||s===null||kl(s,s.return)),s!==null&&a&4&&vr(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qe(l,e),Xe(e),a&512&&(Se||s===null||kl(s,s.return)),e.flags&32){n=e.stateNode;try{Wt(n,"")}catch(D){ae(e,e.return,D)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,vr(e,n,s!==null?s.memoizedProps:n)),a&1024&&(yr=!0);break;case 6:if(Qe(l,e),Xe(e),a&4){if(e.stateNode===null)throw Error(f(162));a=e.memoizedProps,s=e.stateNode;try{s.nodeValue=a}catch(D){ae(e,e.return,D)}}break;case 3:if(wn=null,n=vl,vl=Tn(l.containerInfo),Qe(l,e),vl=n,Xe(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{ks(l.containerInfo)}catch(D){ae(e,e.return,D)}yr&&(yr=!1,tu(e));break;case 4:a=vl,vl=Tn(e.stateNode.containerInfo),Qe(l,e),Xe(e),vl=a;break;case 12:Qe(l,e),Xe(e);break;case 31:Qe(l,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 13:Qe(l,e),Xe(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gn=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 22:n=e.memoizedState!==null;var i=s!==null&&s.memoizedState!==null,h=Ll,b=Se;if(Ll=h||n,Se=b||i,Qe(l,e),Se=b,Ll=h,Xe(e),a&8192)e:for(l=e.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(s===null||i||Ll||Se||Gt(e)),s=null,l=e;;){if(l.tag===5||l.tag===26){if(s===null){i=s=l;try{if(c=i.stateNode,n)r=c.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=i.stateNode;var N=i.memoizedProps.style,p=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(D){ae(i,i.return,D)}}}else if(l.tag===6){if(s===null){i=l;try{i.stateNode.nodeValue=n?"":i.memoizedProps}catch(D){ae(i,i.return,D)}}}else if(l.tag===18){if(s===null){i=l;try{var g=i.stateNode;n?Xu(g,!0):Xu(i.stateNode,!1)}catch(D){ae(i,i.return,D)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;s===l&&(s=null),l=l.return}s===l&&(s=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=e.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,hn(e,s))));break;case 19:Qe(l,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 30:break;case 21:break;default:Qe(l,e),Xe(e)}}function Xe(e){var l=e.flags;if(l&2){try{for(var s,a=e.return;a!==null;){if(Ko(a)){s=a;break}a=a.return}if(s==null)throw Error(f(160));switch(s.tag){case 27:var n=s.stateNode,c=jr(e);fn(e,c,n);break;case 5:var r=s.stateNode;s.flags&32&&(Wt(r,""),s.flags&=-33);var d=jr(e);fn(e,d,r);break;case 3:case 4:var i=s.stateNode.containerInfo,h=jr(e);Nr(e,h,i);break;default:throw Error(f(161))}}catch(b){ae(e,e.return,b)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function tu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;tu(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function Ql(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)$o(e,l.alternate,l),l=l.sibling}function Gt(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:it(4,l,l.return),Gt(l);break;case 1:kl(l,l.return);var s=l.stateNode;typeof s.componentWillUnmount=="function"&&Xo(l,l.return,s),Gt(l);break;case 27:ma(l.stateNode);case 26:case 5:kl(l,l.return),Gt(l);break;case 22:l.memoizedState===null&&Gt(l);break;case 30:Gt(l);break;default:Gt(l)}e=e.sibling}}function Xl(e,l,s){for(s=s&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=e,c=l,r=c.flags;switch(c.tag){case 0:case 11:case 15:Xl(n,c,s),sa(4,c);break;case 1:if(Xl(n,c,s),a=c,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ae(a,a.return,h)}if(a=c,n=a.updateQueue,n!==null){var d=a.stateNode;try{var i=n.shared.hiddenCallbacks;if(i!==null)for(n.shared.hiddenCallbacks=null,n=0;n<i.length;n++)Ri(i[n],d)}catch(h){ae(a,a.return,h)}}s&&r&64&&Qo(c),aa(c,c.return);break;case 27:Jo(c);case 26:case 5:Xl(n,c,s),s&&a===null&&r&4&&Zo(c),aa(c,c.return);break;case 12:Xl(n,c,s);break;case 31:Xl(n,c,s),s&&r&4&&Io(n,c);break;case 13:Xl(n,c,s),s&&r&4&&eu(n,c);break;case 22:c.memoizedState===null&&Xl(n,c,s),aa(c,c.return);break;case 30:break;default:Xl(n,c,s)}l=l.sibling}}function Sr(e,l){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Qs(s))}function _r(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Qs(e))}function jl(e,l,s,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)su(e,l,s,a),l=l.sibling}function su(e,l,s,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:jl(e,l,s,a),n&2048&&sa(9,l);break;case 1:jl(e,l,s,a);break;case 3:jl(e,l,s,a),n&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Qs(e)));break;case 12:if(n&2048){jl(e,l,s,a),e=l.stateNode;try{var c=l.memoizedProps,r=c.id,d=c.onPostCommit;typeof d=="function"&&d(r,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(i){ae(l,l.return,i)}}else jl(e,l,s,a);break;case 31:jl(e,l,s,a);break;case 13:jl(e,l,s,a);break;case 23:break;case 22:c=l.stateNode,r=l.alternate,l.memoizedState!==null?c._visibility&2?jl(e,l,s,a):na(e,l):c._visibility&2?jl(e,l,s,a):(c._visibility|=2,hs(e,l,s,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Sr(r,l);break;case 24:jl(e,l,s,a),n&2048&&_r(l.alternate,l);break;default:jl(e,l,s,a)}}function hs(e,l,s,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var c=e,r=l,d=s,i=a,h=r.flags;switch(r.tag){case 0:case 11:case 15:hs(c,r,d,i,n),sa(8,r);break;case 23:break;case 22:var b=r.stateNode;r.memoizedState!==null?b._visibility&2?hs(c,r,d,i,n):na(c,r):(b._visibility|=2,hs(c,r,d,i,n)),n&&h&2048&&Sr(r.alternate,r);break;case 24:hs(c,r,d,i,n),n&&h&2048&&_r(r.alternate,r);break;default:hs(c,r,d,i,n)}l=l.sibling}}function na(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var s=e,a=l,n=a.flags;switch(a.tag){case 22:na(s,a),n&2048&&Sr(a.alternate,a);break;case 24:na(s,a),n&2048&&_r(a.alternate,a);break;default:na(s,a)}l=l.sibling}}var ca=8192;function ps(e,l,s){if(e.subtreeFlags&ca)for(e=e.child;e!==null;)au(e,l,s),e=e.sibling}function au(e,l,s){switch(e.tag){case 26:ps(e,l,s),e.flags&ca&&e.memoizedState!==null&&Q0(s,vl,e.memoizedState,e.memoizedProps);break;case 5:ps(e,l,s);break;case 3:case 4:var a=vl;vl=Tn(e.stateNode.containerInfo),ps(e,l,s),vl=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ca,ca=16777216,ps(e,l,s),ca=a):ps(e,l,s));break;default:ps(e,l,s)}}function nu(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function ra(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var s=0;s<l.length;s++){var a=l[s];ke=a,ru(a,e)}nu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cu(e),e=e.sibling}function cu(e){switch(e.tag){case 0:case 11:case 15:ra(e),e.flags&2048&&it(9,e,e.return);break;case 3:ra(e);break;case 12:ra(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,pn(e)):ra(e);break;default:ra(e)}}function pn(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var s=0;s<l.length;s++){var a=l[s];ke=a,ru(a,e)}nu(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:it(8,l,l.return),pn(l);break;case 22:s=l.stateNode,s._visibility&2&&(s._visibility&=-3,pn(l));break;default:pn(l)}e=e.sibling}}function ru(e,l){for(;ke!==null;){var s=ke;switch(s.tag){case 0:case 11:case 15:it(8,s,l);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qs(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,ke=a;else e:for(s=e;ke!==null;){a=ke;var n=a.sibling,c=a.return;if(Fo(a),a===s){ke=null;break e}if(n!==null){n.return=c,ke=n;break e}ke=c}}}var n0={getCacheForType:function(e){var l=Te(je),s=l.data.get(e);return s===void 0&&(s=e(),l.data.set(e,s)),s},cacheSignal:function(){return Te(je).controller.signal}},c0=typeof WeakMap=="function"?WeakMap:Map,ee=0,oe=null,X=null,K=0,se=0,sl=null,ot=!1,gs=!1,Er=!1,Zl=0,pe=0,ut=0,Yt=0,kr=0,al=0,bs=0,da=null,Ze=null,Ar=!1,gn=0,du=0,bn=1/0,vn=null,xt=null,_e=0,mt=null,vs=null,Kl=0,Dr=0,Tr=null,iu=null,ia=0,Or=null;function nl(){return(ee&2)!==0&&K!==0?K&-K:v.T!==null?Br():_d()}function ou(){if(al===0)if((K&536870912)===0||$){var e=ka;ka<<=1,(ka&3932160)===0&&(ka=262144),al=e}else al=536870912;return e=ll.current,e!==null&&(e.flags|=32),al}function Ke(e,l,s){(e===oe&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(js(e,0),ft(e,K,al,!1)),Os(e,s),((ee&2)===0||e!==oe)&&(e===oe&&((ee&2)===0&&(Yt|=s),pe===4&&ft(e,K,al,!1)),Al(e))}function uu(e,l,s){if((ee&6)!==0)throw Error(f(327));var a=!s&&(l&127)===0&&(l&e.expiredLanes)===0||Ts(e,l),n=a?i0(e,l):Rr(e,l,!0),c=a;do{if(n===0){gs&&!a&&ft(e,l,0,!1);break}else{if(s=e.current.alternate,c&&!r0(s)){n=Rr(e,l,!1),c=!1;continue}if(n===2){if(c=l,e.errorRecoveryDisabledLanes&c)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){l=r;e:{var d=e;n=da;var i=d.current.memoizedState.isDehydrated;if(i&&(js(d,r).flags|=256),r=Rr(d,r,!1),r!==2){if(Er&&!i){d.errorRecoveryDisabledLanes|=c,Yt|=c,n=4;break e}c=Ze,Ze=n,c!==null&&(Ze===null?Ze=c:Ze.push.apply(Ze,c))}n=r}if(c=!1,n!==2)continue}}if(n===1){js(e,0),ft(e,l,0,!0);break}e:{switch(a=e,c=n,c){case 0:case 1:throw Error(f(345));case 4:if((l&4194048)!==l)break;case 6:ft(a,l,al,!ot);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(f(329))}if((l&62914560)===l&&(n=gn+300-$e(),10<n)){if(ft(a,l,al,!ot),Da(a,0,!0)!==0)break e;Kl=l,a.timeoutHandle=Lu(xu.bind(null,a,s,Ze,vn,Ar,l,al,Yt,bs,ot,c,"Throttled",-0,0),n);break e}xu(a,s,Ze,vn,Ar,l,al,Yt,bs,ot,c,null,-0,0)}}break}while(!0);Al(e)}function xu(e,l,s,a,n,c,r,d,i,h,b,N,p,g){if(e.timeoutHandle=-1,N=l.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rl},au(l,c,N);var D=(c&62914560)===c?gn-$e():(c&4194048)===c?du-$e():0;if(D=X0(N,D),D!==null){Kl=c,e.cancelPendingCommit=D(ju.bind(null,e,l,c,s,a,n,r,d,i,b,N,null,p,g)),ft(e,c,r,!h);return}}ju(e,l,c,s,a,n,r,d,i)}function r0(e){for(var l=e;;){var s=l.tag;if((s===0||s===11||s===15)&&l.flags&16384&&(s=l.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var a=0;a<s.length;a++){var n=s[a],c=n.getSnapshot;n=n.value;try{if(!Ie(c(),n))return!1}catch{return!1}}if(s=l.child,l.subtreeFlags&16384&&s!==null)s.return=l,l=s;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ft(e,l,s,a){l&=~kr,l&=~Yt,e.suspendedLanes|=l,e.pingedLanes&=~l,a&&(e.warmLanes|=l),a=e.expirationTimes;for(var n=l;0<n;){var c=31-Pe(n),r=1<<c;a[c]=-1,n&=~r}s!==0&&Nd(e,s,l)}function jn(){return(ee&6)===0?(oa(0),!1):!0}function wr(){if(X!==null){if(se===0)var e=X.return;else e=X,Bl=Rt=null,Kc(e),os=null,Zs=0,e=X;for(;e!==null;)Vo(e.alternate,e),e=e.return;X=null}}function js(e,l){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,A0(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Kl=0,wr(),oe=e,X=s=Ml(e.current,null),K=l,se=0,sl=null,ot=!1,gs=Ts(e,l),Er=!1,bs=al=kr=Yt=ut=pe=0,Ze=da=null,Ar=!1,(l&8)!==0&&(l|=l&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=l;0<a;){var n=31-Pe(a),c=1<<n;l|=e[n],a&=~c}return Zl=l,Ga(),s}function mu(e,l){L=null,v.H=ea,l===is||l===Ja?(l=Di(),se=3):l===Uc?(l=Di(),se=4):se=l===ir?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,sl=l,X===null&&(pe=1,dn(e,ol(l,e.current)))}function fu(){var e=ll.current;return e===null?!0:(K&4194048)===K?fl===null:(K&62914560)===K||(K&536870912)!==0?e===fl:!1}function hu(){var e=v.H;return v.H=ea,e===null?ea:e}function pu(){var e=v.A;return v.A=n0,e}function Nn(){pe=4,ot||(K&4194048)!==K&&ll.current!==null||(gs=!0),(ut&134217727)===0&&(Yt&134217727)===0||oe===null||ft(oe,K,al,!1)}function Rr(e,l,s){var a=ee;ee|=2;var n=hu(),c=pu();(oe!==e||K!==l)&&(vn=null,js(e,l)),l=!1;var r=pe;e:do try{if(se!==0&&X!==null){var d=X,i=sl;switch(se){case 8:wr(),r=6;break e;case 3:case 2:case 9:case 6:ll.current===null&&(l=!0);var h=se;if(se=0,sl=null,Ns(e,d,i,h),s&&gs){r=0;break e}break;default:h=se,se=0,sl=null,Ns(e,d,i,h)}}d0(),r=pe;break}catch(b){mu(e,b)}while(!0);return l&&e.shellSuspendCounter++,Bl=Rt=null,ee=a,v.H=n,v.A=c,X===null&&(oe=null,K=0,Ga()),r}function d0(){for(;X!==null;)gu(X)}function i0(e,l){var s=ee;ee|=2;var a=hu(),n=pu();oe!==e||K!==l?(vn=null,bn=$e()+500,js(e,l)):gs=Ts(e,l);e:do try{if(se!==0&&X!==null){l=X;var c=sl;l:switch(se){case 1:se=0,sl=null,Ns(e,l,c,1);break;case 2:case 9:if(ki(c)){se=0,sl=null,bu(l);break}l=function(){se!==2&&se!==9||oe!==e||(se=7),Al(e)},c.then(l,l);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:ki(c)?(se=0,sl=null,bu(l)):(se=0,sl=null,Ns(e,l,c,7));break;case 5:var r=null;switch(X.tag){case 26:r=X.memoizedState;case 5:case 27:var d=X;if(r?sx(r):d.stateNode.complete){se=0,sl=null;var i=d.sibling;if(i!==null)X=i;else{var h=d.return;h!==null?(X=h,yn(h)):X=null}break l}}se=0,sl=null,Ns(e,l,c,5);break;case 6:se=0,sl=null,Ns(e,l,c,6);break;case 8:wr(),pe=6;break e;default:throw Error(f(462))}}o0();break}catch(b){mu(e,b)}while(!0);return Bl=Rt=null,v.H=a,v.A=n,ee=s,X!==null?0:(oe=null,K=0,Ga(),pe)}function o0(){for(;X!==null&&!zx();)gu(X)}function gu(e){var l=Yo(e.alternate,e,Zl);e.memoizedProps=e.pendingProps,l===null?yn(e):X=l}function bu(e){var l=e,s=l.alternate;switch(l.tag){case 15:case 0:l=Uo(s,l,l.pendingProps,l.type,void 0,K);break;case 11:l=Uo(s,l,l.pendingProps,l.type.render,l.ref,K);break;case 5:Kc(l);default:Vo(s,l),l=X=hi(l,Zl),l=Yo(s,l,Zl)}e.memoizedProps=e.pendingProps,l===null?yn(e):X=l}function Ns(e,l,s,a){Bl=Rt=null,Kc(l),os=null,Zs=0;var n=l.return;try{if(Pm(e,n,l,s,K)){pe=1,dn(e,ol(s,e.current)),X=null;return}}catch(c){if(n!==null)throw X=n,c;pe=1,dn(e,ol(s,e.current)),X=null;return}l.flags&32768?($||a===1?e=!0:gs||(K&536870912)!==0?e=!1:(ot=e=!0,(a===2||a===9||a===3||a===6)&&(a=ll.current,a!==null&&a.tag===13&&(a.flags|=16384))),vu(l,e)):yn(l)}function yn(e){var l=e;do{if((l.flags&32768)!==0){vu(l,ot);return}e=l.return;var s=l0(l.alternate,l,Zl);if(s!==null){X=s;return}if(l=l.sibling,l!==null){X=l;return}X=l=e}while(l!==null);pe===0&&(pe=5)}function vu(e,l){do{var s=t0(e.alternate,e);if(s!==null){s.flags&=32767,X=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!l&&(e=e.sibling,e!==null)){X=e;return}X=e=s}while(e!==null);pe=6,X=null}function ju(e,l,s,a,n,c,r,d,i){e.cancelPendingCommit=null;do Sn();while(_e!==0);if((ee&6)!==0)throw Error(f(327));if(l!==null){if(l===e.current)throw Error(f(177));if(c=l.lanes|l.childLanes,c|=jc,Vx(e,s,c,r,d,i),e===oe&&(X=oe=null,K=0),vs=l,mt=e,Kl=s,Dr=c,Tr=n,iu=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f0(_a,function(){return Eu(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,n=E.p,E.p=2,r=ee,ee|=4;try{s0(e,l,s)}finally{ee=r,E.p=n,v.T=a}}_e=1,Nu(),yu(),Su()}}function Nu(){if(_e===1){_e=0;var e=mt,l=vs,s=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||s){s=v.T,v.T=null;var a=E.p;E.p=2;var n=ee;ee|=4;try{lu(l,e);var c=Qr,r=ci(e.containerInfo),d=c.focusedElem,i=c.selectionRange;if(r!==d&&d&&d.ownerDocument&&ni(d.ownerDocument.documentElement,d)){if(i!==null&&hc(d)){var h=i.start,b=i.end;if(b===void 0&&(b=h),"selectionStart"in d)d.selectionStart=h,d.selectionEnd=Math.min(b,d.value.length);else{var N=d.ownerDocument||document,p=N&&N.defaultView||window;if(p.getSelection){var g=p.getSelection(),D=d.textContent.length,M=Math.min(i.start,D),de=i.end===void 0?M:Math.min(i.end,D);!g.extend&&M>de&&(r=de,de=M,M=r);var x=ai(d,M),o=ai(d,de);if(x&&o&&(g.rangeCount!==1||g.anchorNode!==x.node||g.anchorOffset!==x.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var m=N.createRange();m.setStart(x.node,x.offset),g.removeAllRanges(),M>de?(g.addRange(m),g.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),g.addRange(m))}}}}for(N=[],g=d;g=g.parentNode;)g.nodeType===1&&N.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var j=N[d];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Un=!!Vr,Qr=Vr=null}finally{ee=n,E.p=a,v.T=s}}e.current=l,_e=2}}function yu(){if(_e===2){_e=0;var e=mt,l=vs,s=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||s){s=v.T,v.T=null;var a=E.p;E.p=2;var n=ee;ee|=4;try{$o(e,l.alternate,l)}finally{ee=n,E.p=a,v.T=s}}_e=3}}function Su(){if(_e===4||_e===3){_e=0,Mx();var e=mt,l=vs,s=Kl,a=iu;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?_e=5:(_e=0,vs=mt=null,_u(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xt=null),$n(s),l=l.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Ds,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=v.T,n=E.p,E.p=2,v.T=null;try{for(var c=e.onRecoverableError,r=0;r<a.length;r++){var d=a[r];c(d.value,{componentStack:d.stack})}}finally{v.T=l,E.p=n}}(Kl&3)!==0&&Sn(),Al(e),n=e.pendingLanes,(s&261930)!==0&&(n&42)!==0?e===Or?ia++:(ia=0,Or=e):ia=0,oa(0)}}function _u(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,Qs(l)))}function Sn(){return Nu(),yu(),Su(),Eu()}function Eu(){if(_e!==5)return!1;var e=mt,l=Dr;Dr=0;var s=$n(Kl),a=v.T,n=E.p;try{E.p=32>s?32:s,v.T=null,s=Tr,Tr=null;var c=mt,r=Kl;if(_e=0,vs=mt=null,Kl=0,(ee&6)!==0)throw Error(f(331));var d=ee;if(ee|=4,cu(c.current),su(c,c.current,r,s),ee=d,oa(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Ds,c)}catch{}return!0}finally{E.p=n,v.T=a,_u(e,l)}}function ku(e,l,s){l=ol(s,l),l=dr(e.stateNode,l,2),e=ct(e,l,2),e!==null&&(Os(e,2),Al(e))}function ae(e,l,s){if(e.tag===3)ku(e,e,s);else for(;l!==null;){if(l.tag===3){ku(l,e,s);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xt===null||!xt.has(a))){e=ol(s,e),s=Ao(2),a=ct(l,s,2),a!==null&&(Do(s,a,l,e),Os(a,2),Al(a));break}}l=l.return}}function zr(e,l,s){var a=e.pingCache;if(a===null){a=e.pingCache=new c0;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(s)||(Er=!0,n.add(s),e=u0.bind(null,e,l,s),l.then(e,e))}function u0(e,l,s){var a=e.pingCache;a!==null&&a.delete(l),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,oe===e&&(K&s)===s&&(pe===4||pe===3&&(K&62914560)===K&&300>$e()-gn?(ee&2)===0&&js(e,0):kr|=s,bs===K&&(bs=0)),Al(e)}function Au(e,l){l===0&&(l=jd()),e=Tt(e,l),e!==null&&(Os(e,l),Al(e))}function x0(e){var l=e.memoizedState,s=0;l!==null&&(s=l.retryLane),Au(e,s)}function m0(e,l){var s=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(l),Au(e,s)}function f0(e,l){return Zn(e,l)}var _n=null,ys=null,Mr=!1,En=!1,Ur=!1,ht=0;function Al(e){e!==ys&&e.next===null&&(ys===null?_n=ys=e:ys=ys.next=e),En=!0,Mr||(Mr=!0,p0())}function oa(e,l){if(!Ur&&En){Ur=!0;do for(var s=!1,a=_n;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var c=0;else{var r=a.suspendedLanes,d=a.pingedLanes;c=(1<<31-Pe(42|e)+1)-1,c&=n&~(r&~d),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(s=!0,wu(a,c))}else c=K,c=Da(a,a===oe?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||Ts(a,c)||(s=!0,wu(a,c));a=a.next}while(s);Ur=!1}}function h0(){Du()}function Du(){En=Mr=!1;var e=0;ht!==0&&k0()&&(e=ht);for(var l=$e(),s=null,a=_n;a!==null;){var n=a.next,c=Tu(a,l);c===0?(a.next=null,s===null?_n=n:s.next=n,n===null&&(ys=s)):(s=a,(e!==0||(c&3)!==0)&&(En=!0)),a=n}_e!==0&&_e!==5||oa(e),ht!==0&&(ht=0)}function Tu(e,l){for(var s=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var r=31-Pe(c),d=1<<r,i=n[r];i===-1?((d&s)===0||(d&a)!==0)&&(n[r]=Lx(d,l)):i<=l&&(e.expiredLanes|=d),c&=~d}if(l=oe,s=K,s=Da(e,e===l?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,s===0||e===l&&(se===2||se===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Kn(a),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ts(e,s)){if(l=s&-s,l===e.callbackPriority)return l;switch(a!==null&&Kn(a),$n(s)){case 2:case 8:s=bd;break;case 32:s=_a;break;case 268435456:s=vd;break;default:s=_a}return a=Ou.bind(null,e),s=Zn(s,a),e.callbackPriority=l,e.callbackNode=s,l}return a!==null&&a!==null&&Kn(a),e.callbackPriority=2,e.callbackNode=null,2}function Ou(e,l){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Sn()&&e.callbackNode!==s)return null;var a=K;return a=Da(e,e===oe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(uu(e,a,l),Tu(e,$e()),e.callbackNode!=null&&e.callbackNode===s?Ou.bind(null,e):null)}function wu(e,l){if(Sn())return null;uu(e,l,!0)}function p0(){D0(function(){(ee&6)!==0?Zn(gd,h0):Du()})}function Br(){if(ht===0){var e=rs;e===0&&(e=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),ht=e}return ht}function Ru(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ra(""+e)}function zu(e,l){var s=l.ownerDocument.createElement("input");return s.name=l.name,s.value=l.value,e.id&&s.setAttribute("form",e.id),l.parentNode.insertBefore(s,l),e=new FormData(e),s.parentNode.removeChild(s),e}function g0(e,l,s,a,n){if(l==="submit"&&s&&s.stateNode===n){var c=Ru((n[Ye]||null).action),r=a.submitter;r&&(l=(l=r[Ye]||null)?Ru(l.formAction):r.getAttribute("formAction"),l!==null&&(c=l,r=null));var d=new Ba("action","action",null,a,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ht!==0){var i=r?zu(n,r):new FormData(n);tr(s,{pending:!0,data:i,method:n.method,action:c},null,i)}}else typeof c=="function"&&(d.preventDefault(),i=r?zu(n,r):new FormData(n),tr(s,{pending:!0,data:i,method:n.method,action:c},c,i))},currentTarget:n}]})}}for(var Cr=0;Cr<vc.length;Cr++){var Hr=vc[Cr],b0=Hr.toLowerCase(),v0=Hr[0].toUpperCase()+Hr.slice(1);bl(b0,"on"+v0)}bl(ii,"onAnimationEnd"),bl(oi,"onAnimationIteration"),bl(ui,"onAnimationStart"),bl("dblclick","onDoubleClick"),bl("focusin","onFocus"),bl("focusout","onBlur"),bl(Um,"onTransitionRun"),bl(Bm,"onTransitionStart"),bl(Cm,"onTransitionCancel"),bl(xi,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Et("onBeforeInput",["compositionend","keypress","textInput","paste"]),Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ua));function Mu(e,l){l=(l&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],n=a.event;a=a.listeners;e:{var c=void 0;if(l)for(var r=a.length-1;0<=r;r--){var d=a[r],i=d.instance,h=d.currentTarget;if(d=d.listener,i!==c&&n.isPropagationStopped())break e;c=d,n.currentTarget=h;try{c(n)}catch(b){qa(b)}n.currentTarget=null,c=i}else for(r=0;r<a.length;r++){if(d=a[r],i=d.instance,h=d.currentTarget,d=d.listener,i!==c&&n.isPropagationStopped())break e;c=d,n.currentTarget=h;try{c(n)}catch(b){qa(b)}n.currentTarget=null,c=i}}}}function Z(e,l){var s=l[Fn];s===void 0&&(s=l[Fn]=new Set);var a=e+"__bubble";s.has(a)||(Uu(l,e,2,!1),s.add(a))}function qr(e,l,s){var a=0;l&&(a|=4),Uu(s,e,a,l)}var kn="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[kn]){e[kn]=!0,Ad.forEach(function(s){s!=="selectionchange"&&(j0.has(s)||qr(s,!1,e),qr(s,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[kn]||(l[kn]=!0,qr("selectionchange",!1,l))}}function Uu(e,l,s,a){switch(ox(l)){case 2:var n=J0;break;case 8:n=W0;break;default:n=ld}s=n.bind(null,l,s,e),n=void 0,!cc||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(l,s,{capture:!0,passive:n}):e.addEventListener(l,s,!0):n!==void 0?e.addEventListener(l,s,{passive:n}):e.addEventListener(l,s,!1)}function Yr(e,l,s,a,n){var c=a;if((l&1)===0&&(l&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var d=a.stateNode.containerInfo;if(d===n)break;if(r===4)for(r=a.return;r!==null;){var i=r.tag;if((i===3||i===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;d!==null;){if(r=Qt(d),r===null)return;if(i=r.tag,i===5||i===6||i===26||i===27){a=c=r;continue e}d=d.parentNode}}a=a.return}qd(function(){var h=c,b=ac(s),N=[];e:{var p=mi.get(e);if(p!==void 0){var g=Ba,D=e;switch(e){case"keypress":if(Ma(s)===0)break e;case"keydown":case"keyup":g=mm;break;case"focusin":D="focus",g=oc;break;case"focusout":D="blur",g=oc;break;case"beforeblur":case"afterblur":g=oc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pm;break;case ii:case oi:case ui:g=am;break;case xi:g=bm;break;case"scroll":case"scrollend":g=Ix;break;case"wheel":g=jm;break;case"copy":case"cut":case"paste":g=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qd;break;case"toggle":case"beforetoggle":g=ym}var M=(l&4)!==0,de=!M&&(e==="scroll"||e==="scrollend"),x=M?p!==null?p+"Capture":null:p;M=[];for(var o=h,m;o!==null;){var j=o;if(m=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||m===null||x===null||(j=zs(o,x),j!=null&&M.push(xa(o,j,m))),de)break;o=o.return}0<M.length&&(p=new g(p,D,null,s,b),N.push({event:p,listeners:M}))}}if((l&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&s!==sc&&(D=s.relatedTarget||s.fromElement)&&(Qt(D)||D[Vt]))break e;if((g||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,g?(D=s.relatedTarget||s.toElement,g=h,D=D?Qt(D):null,D!==null&&(de=H(D),M=D.tag,D!==de||M!==5&&M!==27&&M!==6)&&(D=null)):(g=null,D=h),g!==D)){if(M=Ld,j="onMouseLeave",x="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(M=Qd,j="onPointerLeave",x="onPointerEnter",o="pointer"),de=g==null?p:Rs(g),m=D==null?p:Rs(D),p=new M(j,o+"leave",g,s,b),p.target=de,p.relatedTarget=m,j=null,Qt(b)===h&&(M=new M(x,o+"enter",D,s,b),M.target=m,M.relatedTarget=de,j=M),de=j,g&&D)l:{for(M=N0,x=g,o=D,m=0,j=x;j;j=M(j))m++;j=0;for(var z=o;z;z=M(z))j++;for(;0<m-j;)x=M(x),m--;for(;0<j-m;)o=M(o),j--;for(;m--;){if(x===o||o!==null&&x===o.alternate){M=x;break l}x=M(x),o=M(o)}M=null}else M=null;g!==null&&Bu(N,p,g,M,!1),D!==null&&de!==null&&Bu(N,de,D,M,!0)}}e:{if(p=h?Rs(h):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=Pd;else if($d(p))if(Id)P=Rm;else{P=Om;var O=Tm}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?h&&tc(h.elementType)&&(P=Pd):P=wm;if(P&&(P=P(e,h))){Fd(N,P,s,b);break e}O&&O(e,p,h),e==="focusout"&&h&&p.type==="number"&&h.memoizedProps.value!=null&&lc(p,"number",p.value)}switch(O=h?Rs(h):window,e){case"focusin":($d(O)||O.contentEditable==="true")&&(It=O,pc=h,Ys=null);break;case"focusout":Ys=pc=It=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,ri(N,s,b);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":ri(N,s,b)}var V;if(xc)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Pt?Jd(e,s)&&(J="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(J="onCompositionStart");J&&(Xd&&s.locale!=="ko"&&(Pt||J!=="onCompositionStart"?J==="onCompositionEnd"&&Pt&&(V=Gd()):(Il=b,rc="value"in Il?Il.value:Il.textContent,Pt=!0)),O=An(h,J),0<O.length&&(J=new Vd(J,e,null,s,b),N.push({event:J,listeners:O}),V?J.data=V:(V=Wd(s),V!==null&&(J.data=V)))),(V=_m?Em(e,s):km(e,s))&&(J=An(h,"onBeforeInput"),0<J.length&&(O=new Vd("onBeforeInput","beforeinput",null,s,b),N.push({event:O,listeners:J}),O.data=V)),g0(N,e,h,s,b)}Mu(N,l)})}function xa(e,l,s){return{instance:e,listener:l,currentTarget:s}}function An(e,l){for(var s=l+"Capture",a=[];e!==null;){var n=e,c=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||c===null||(n=zs(e,s),n!=null&&a.unshift(xa(e,n,c)),n=zs(e,l),n!=null&&a.push(xa(e,n,c))),e.tag===3)return a;e=e.return}return[]}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bu(e,l,s,a,n){for(var c=l._reactName,r=[];s!==null&&s!==a;){var d=s,i=d.alternate,h=d.stateNode;if(d=d.tag,i!==null&&i===a)break;d!==5&&d!==26&&d!==27||h===null||(i=h,n?(h=zs(s,c),h!=null&&r.unshift(xa(s,h,i))):n||(h=zs(s,c),h!=null&&r.push(xa(s,h,i)))),s=s.return}r.length!==0&&e.push({event:l,listeners:r})}var y0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(S0,"")}function Hu(e,l){return l=Cu(l),Cu(e)===l}function re(e,l,s,a,n,c){switch(s){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Wt(e,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Wt(e,""+a);break;case"className":Oa(e,"class",a);break;case"tabIndex":Oa(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oa(e,s,a);break;case"style":Cd(e,a,c);break;case"data":if(l!=="object"){Oa(e,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||s!=="href")){e.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ra(""+a),e.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(s==="formAction"?(l!=="input"&&re(e,l,"name",n.name,n,null),re(e,l,"formEncType",n.formEncType,n,null),re(e,l,"formMethod",n.formMethod,n,null),re(e,l,"formTarget",n.formTarget,n,null)):(re(e,l,"encType",n.encType,n,null),re(e,l,"method",n.method,n,null),re(e,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ra(""+a),e.setAttribute(s,a);break;case"onClick":a!=null&&(e.onclick=Rl);break;case"onScroll":a!=null&&Z("scroll",e);break;case"onScrollEnd":a!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(s=a.__html,s!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=s}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}s=Ra(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""+a):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":a===!0?e.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,a):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(s,a):e.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(s):e.setAttribute(s,a);break;case"popover":Z("beforetoggle",e),Z("toggle",e),Ta(e,"popover",a);break;case"xlinkActuate":wl(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":wl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":wl(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":wl(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":wl(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":wl(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":wl(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":wl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":wl(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ta(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Fx.get(s)||s,Ta(e,s,a))}}function Lr(e,l,s,a,n,c){switch(s){case"style":Cd(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(s=a.__html,s!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=s}}break;case"children":typeof a=="string"?Wt(e,a):(typeof a=="number"||typeof a=="bigint")&&Wt(e,""+a);break;case"onScroll":a!=null&&Z("scroll",e);break;case"onScrollEnd":a!=null&&Z("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dd.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(n=s.endsWith("Capture"),l=s.slice(2,n?s.length-7:void 0),c=e[Ye]||null,c=c!=null?c[s]:null,typeof c=="function"&&e.removeEventListener(l,c,n),typeof a=="function")){typeof c!="function"&&c!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(l,a,n);break e}s in e?e[s]=a:a===!0?e.setAttribute(s,""):Ta(e,s,a)}}}function we(e,l,s){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var a=!1,n=!1,c;for(c in s)if(s.hasOwnProperty(c)){var r=s[c];if(r!=null)switch(c){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,l));default:re(e,l,c,r,s,null)}}n&&re(e,l,"srcSet",s.srcSet,s,null),a&&re(e,l,"src",s.src,s,null);return;case"input":Z("invalid",e);var d=c=r=n=null,i=null,h=null;for(a in s)if(s.hasOwnProperty(a)){var b=s[a];if(b!=null)switch(a){case"name":n=b;break;case"type":r=b;break;case"checked":i=b;break;case"defaultChecked":h=b;break;case"value":c=b;break;case"defaultValue":d=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,l));break;default:re(e,l,a,b,s,null)}}zd(e,c,d,i,h,r,n,!1);return;case"select":Z("invalid",e),a=r=c=null;for(n in s)if(s.hasOwnProperty(n)&&(d=s[n],d!=null))switch(n){case"value":c=d;break;case"defaultValue":r=d;break;case"multiple":a=d;default:re(e,l,n,d,s,null)}l=c,s=r,e.multiple=!!a,l!=null?Jt(e,!!a,l,!1):s!=null&&Jt(e,!!a,s,!0);return;case"textarea":Z("invalid",e),c=n=a=null;for(r in s)if(s.hasOwnProperty(r)&&(d=s[r],d!=null))switch(r){case"value":a=d;break;case"defaultValue":n=d;break;case"children":c=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(f(91));break;default:re(e,l,r,d,s,null)}Ud(e,a,n,c);return;case"option":for(i in s)if(s.hasOwnProperty(i)&&(a=s[i],a!=null))switch(i){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:re(e,l,i,a,s,null)}return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(a=0;a<ua.length;a++)Z(ua[a],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in s)if(s.hasOwnProperty(h)&&(a=s[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,l));default:re(e,l,h,a,s,null)}return;default:if(tc(l)){for(b in s)s.hasOwnProperty(b)&&(a=s[b],a!==void 0&&Lr(e,l,b,a,s,void 0));return}}for(d in s)s.hasOwnProperty(d)&&(a=s[d],a!=null&&re(e,l,d,a,s,null))}function _0(e,l,s,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,c=null,r=null,d=null,i=null,h=null,b=null;for(g in s){var N=s[g];if(s.hasOwnProperty(g)&&N!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":i=N;default:a.hasOwnProperty(g)||re(e,l,g,null,a,N)}}for(var p in a){var g=a[p];if(N=s[p],a.hasOwnProperty(p)&&(g!=null||N!=null))switch(p){case"type":c=g;break;case"name":n=g;break;case"checked":h=g;break;case"defaultChecked":b=g;break;case"value":r=g;break;case"defaultValue":d=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,l));break;default:g!==N&&re(e,l,p,g,a,N)}}ec(e,r,d,i,h,b,c,n);return;case"select":g=r=d=p=null;for(c in s)if(i=s[c],s.hasOwnProperty(c)&&i!=null)switch(c){case"value":break;case"multiple":g=i;default:a.hasOwnProperty(c)||re(e,l,c,null,a,i)}for(n in a)if(c=a[n],i=s[n],a.hasOwnProperty(n)&&(c!=null||i!=null))switch(n){case"value":p=c;break;case"defaultValue":d=c;break;case"multiple":r=c;default:c!==i&&re(e,l,n,c,a,i)}l=d,s=r,a=g,p!=null?Jt(e,!!s,p,!1):!!a!=!!s&&(l!=null?Jt(e,!!s,l,!0):Jt(e,!!s,s?[]:"",!1));return;case"textarea":g=p=null;for(d in s)if(n=s[d],s.hasOwnProperty(d)&&n!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:re(e,l,d,null,a,n)}for(r in a)if(n=a[r],c=s[r],a.hasOwnProperty(r)&&(n!=null||c!=null))switch(r){case"value":p=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==c&&re(e,l,r,n,a,c)}Md(e,p,g);return;case"option":for(var D in s)if(p=s[D],s.hasOwnProperty(D)&&p!=null&&!a.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:re(e,l,D,null,a,p)}for(i in a)if(p=a[i],g=s[i],a.hasOwnProperty(i)&&p!==g&&(p!=null||g!=null))switch(i){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:re(e,l,i,p,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in s)p=s[M],s.hasOwnProperty(M)&&p!=null&&!a.hasOwnProperty(M)&&re(e,l,M,null,a,p);for(h in a)if(p=a[h],g=s[h],a.hasOwnProperty(h)&&p!==g&&(p!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,l));break;default:re(e,l,h,p,a,g)}return;default:if(tc(l)){for(var de in s)p=s[de],s.hasOwnProperty(de)&&p!==void 0&&!a.hasOwnProperty(de)&&Lr(e,l,de,void 0,a,p);for(b in a)p=a[b],g=s[b],!a.hasOwnProperty(b)||p===g||p===void 0&&g===void 0||Lr(e,l,b,p,a,g);return}}for(var x in s)p=s[x],s.hasOwnProperty(x)&&p!=null&&!a.hasOwnProperty(x)&&re(e,l,x,null,a,p);for(N in a)p=a[N],g=s[N],!a.hasOwnProperty(N)||p===g||p==null&&g==null||re(e,l,N,p,a,g)}function qu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function E0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,s=performance.getEntriesByType("resource"),a=0;a<s.length;a++){var n=s[a],c=n.transferSize,r=n.initiatorType,d=n.duration;if(c&&d&&qu(r)){for(r=0,d=n.responseEnd,a+=1;a<s.length;a++){var i=s[a],h=i.startTime;if(h>d)break;var b=i.transferSize,N=i.initiatorType;b&&qu(N)&&(i=i.responseEnd,r+=b*(i<d?1:(d-h)/(i-h)))}if(--a,l+=8*(c+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vr=null,Qr=null;function Dn(e){return e.nodeType===9?e:e.ownerDocument}function Gu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yu(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function Xr(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Zr=null;function k0(){var e=window.event;return e&&e.type==="popstate"?e===Zr?!1:(Zr=e,!0):(Zr=null,!1)}var Lu=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(T0)}:Lu;function T0(e){setTimeout(function(){throw e})}function pt(e){return e==="head"}function Qu(e,l){var s=l,a=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"||s==="/&"){if(a===0){e.removeChild(n),ks(l);return}a--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")a++;else if(s==="html")ma(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ma(s);for(var c=s.firstChild;c;){var r=c.nextSibling,d=c.nodeName;c[ws]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&c.rel.toLowerCase()==="stylesheet"||s.removeChild(c),c=r}}else s==="body"&&ma(e.ownerDocument.body);s=n}while(s);ks(l)}function Xu(e,l){var s=e;e=0;do{var a=s.nextSibling;if(s.nodeType===1?l?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(l?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=a}while(s)}function Kr(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var s=l;switch(l=l.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Kr(s),Pn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function O0(e,l,s,a){for(;e.nodeType===1;){var n=s;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ws])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var c=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=hl(e.nextSibling),e===null)break}return null}function w0(e,l,s){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=hl(e.nextSibling),e===null))return null;return e}function Zu(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=hl(e.nextSibling),e===null))return null;return e}function Jr(e){return e.data==="$?"||e.data==="$~"}function Wr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function R0(e,l){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||s.readyState!=="loading")l();else{var a=function(){l(),s.removeEventListener("DOMContentLoaded",a)};s.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function hl(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var $r=null;function Ku(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(l===0)return hl(e.nextSibling);l--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||l++}e=e.nextSibling}return null}function Ju(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(l===0)return e;l--}else s!=="/$"&&s!=="/&"||l++}e=e.previousSibling}return null}function Wu(e,l,s){switch(l=Dn(s),e){case"html":if(e=l.documentElement,!e)throw Error(f(452));return e;case"head":if(e=l.head,!e)throw Error(f(453));return e;case"body":if(e=l.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function ma(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Pn(e)}var pl=new Map,$u=new Set;function Tn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jl=E.d;E.d={f:z0,r:M0,D:U0,C:B0,L:C0,m:H0,X:G0,S:q0,M:Y0};function z0(){var e=Jl.f(),l=jn();return e||l}function M0(e){var l=Xt(e);l!==null&&l.tag===5&&l.type==="form"?mo(l):Jl.r(e)}var Ss=typeof document>"u"?null:document;function Fu(e,l,s){var a=Ss;if(a&&typeof l=="string"&&l){var n=dl(l);n='link[rel="'+e+'"][href="'+n+'"]',typeof s=="string"&&(n+='[crossorigin="'+s+'"]'),$u.has(n)||($u.add(n),e={rel:e,crossOrigin:s,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),we(l,"link",e),Ee(l),a.head.appendChild(l)))}}function U0(e){Jl.D(e),Fu("dns-prefetch",e,null)}function B0(e,l){Jl.C(e,l),Fu("preconnect",e,l)}function C0(e,l,s){Jl.L(e,l,s);var a=Ss;if(a&&e&&l){var n='link[rel="preload"][as="'+dl(l)+'"]';l==="image"&&s&&s.imageSrcSet?(n+='[imagesrcset="'+dl(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(n+='[imagesizes="'+dl(s.imageSizes)+'"]')):n+='[href="'+dl(e)+'"]';var c=n;switch(l){case"style":c=_s(e);break;case"script":c=Es(e)}pl.has(c)||(e=U({rel:"preload",href:l==="image"&&s&&s.imageSrcSet?void 0:e,as:l},s),pl.set(c,e),a.querySelector(n)!==null||l==="style"&&a.querySelector(fa(c))||l==="script"&&a.querySelector(ha(c))||(l=a.createElement("link"),we(l,"link",e),Ee(l),a.head.appendChild(l)))}}function H0(e,l){Jl.m(e,l);var s=Ss;if(s&&e){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+dl(a)+'"][href="'+dl(e)+'"]',c=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Es(e)}if(!pl.has(c)&&(e=U({rel:"modulepreload",href:e},l),pl.set(c,e),s.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ha(c)))return}a=s.createElement("link"),we(a,"link",e),Ee(a),s.head.appendChild(a)}}}function q0(e,l,s){Jl.S(e,l,s);var a=Ss;if(a&&e){var n=Zt(a).hoistableStyles,c=_s(e);l=l||"default";var r=n.get(c);if(!r){var d={loading:0,preload:null};if(r=a.querySelector(fa(c)))d.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":l},s),(s=pl.get(c))&&Fr(e,s);var i=r=a.createElement("link");Ee(i),we(i,"link",e),i._p=new Promise(function(h,b){i.onload=h,i.onerror=b}),i.addEventListener("load",function(){d.loading|=1}),i.addEventListener("error",function(){d.loading|=2}),d.loading|=4,On(r,l,a)}r={type:"stylesheet",instance:r,count:1,state:d},n.set(c,r)}}}function G0(e,l){Jl.X(e,l);var s=Ss;if(s&&e){var a=Zt(s).hoistableScripts,n=Es(e),c=a.get(n);c||(c=s.querySelector(ha(n)),c||(e=U({src:e,async:!0},l),(l=pl.get(n))&&Pr(e,l),c=s.createElement("script"),Ee(c),we(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(n,c))}}function Y0(e,l){Jl.M(e,l);var s=Ss;if(s&&e){var a=Zt(s).hoistableScripts,n=Es(e),c=a.get(n);c||(c=s.querySelector(ha(n)),c||(e=U({src:e,async:!0,type:"module"},l),(l=pl.get(n))&&Pr(e,l),c=s.createElement("script"),Ee(c),we(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(n,c))}}function Pu(e,l,s,a){var n=(n=Q.current)?Tn(n):null;if(!n)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(l=_s(s.href),s=Zt(n).hoistableStyles,a=s.get(l),a||(a={type:"style",instance:null,count:0,state:null},s.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=_s(s.href);var c=Zt(n).hoistableStyles,r=c.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,r),(c=n.querySelector(fa(e)))&&!c._p&&(r.instance=c,r.state.loading=5),pl.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pl.set(e,s),c||L0(n,e,s,r.state))),l&&a===null)throw Error(f(528,""));return r}if(l&&a!==null)throw Error(f(529,""));return null;case"script":return l=s.async,s=s.src,typeof s=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Es(s),s=Zt(n).hoistableScripts,a=s.get(l),a||(a={type:"script",instance:null,count:0,state:null},s.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function _s(e){return'href="'+dl(e)+'"'}function fa(e){return'link[rel="stylesheet"]['+e+"]"}function Iu(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function L0(e,l,s,a){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=e.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),we(l,"link",s),Ee(l),e.head.appendChild(l))}function Es(e){return'[src="'+dl(e)+'"]'}function ha(e){return"script[async]"+e}function ex(e,l,s){if(l.count++,l.instance===null)switch(l.type){case"style":var a=e.querySelector('style[data-href~="'+dl(s.href)+'"]');if(a)return l.instance=a,Ee(a),a;var n=U({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ee(a),we(a,"style",n),On(a,s.precedence,e),l.instance=a;case"stylesheet":n=_s(s.href);var c=e.querySelector(fa(n));if(c)return l.state.loading|=4,l.instance=c,Ee(c),c;a=Iu(s),(n=pl.get(n))&&Fr(a,n),c=(e.ownerDocument||e).createElement("link"),Ee(c);var r=c;return r._p=new Promise(function(d,i){r.onload=d,r.onerror=i}),we(c,"link",a),l.state.loading|=4,On(c,s.precedence,e),l.instance=c;case"script":return c=Es(s.src),(n=e.querySelector(ha(c)))?(l.instance=n,Ee(n),n):(a=s,(n=pl.get(c))&&(a=U({},s),Pr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ee(n),we(n,"link",a),e.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(f(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,On(a,s.precedence,e));return l.instance}function On(e,l,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,c=n,r=0;r<a.length;r++){var d=a[r];if(d.dataset.precedence===l)c=d;else if(c!==n)break}c?c.parentNode.insertBefore(e,c.nextSibling):(l=s.nodeType===9?s.head:s,l.insertBefore(e,l.firstChild))}function Fr(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function Pr(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var wn=null;function lx(e,l,s){if(wn===null){var a=new Map,n=wn=new Map;n.set(s,a)}else n=wn,a=n.get(s),a||(a=new Map,n.set(s,a));if(a.has(e))return a;for(a.set(e,null),s=s.getElementsByTagName(e),n=0;n<s.length;n++){var c=s[n];if(!(c[ws]||c[Ae]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var r=c.getAttribute(l)||"";r=e+r;var d=a.get(r);d?d.push(c):a.set(r,[c])}}return a}function tx(e,l,s){e=e.ownerDocument||e,e.head.insertBefore(s,l==="title"?e.querySelector("head > title"):null)}function V0(e,l,s){if(s===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return e=l.disabled,typeof l.precedence=="string"&&e==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function sx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q0(e,l,s,a){if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var n=_s(a.href),c=l.querySelector(fa(n));if(c){l=c._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=Rn.bind(e),l.then(e,e)),s.state.loading|=4,s.instance=c,Ee(c);return}c=l.ownerDocument||l,a=Iu(a),(n=pl.get(n))&&Fr(a,n),c=c.createElement("link"),Ee(c);var r=c;r._p=new Promise(function(d,i){r.onload=d,r.onerror=i}),we(c,"link",a),s.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,l),(l=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Rn.bind(e),l.addEventListener("load",s),l.addEventListener("error",s))}}var Ir=0;function X0(e,l){return e.stylesheets&&e.count===0&&Mn(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var a=setTimeout(function(){if(e.stylesheets&&Mn(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+l);0<e.imgBytes&&Ir===0&&(Ir=62500*E0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mn(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Ir?50:800)+l);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Rn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zn=null;function Mn(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zn=new Map,l.forEach(Z0,e),zn=null,Rn.call(e))}function Z0(e,l){if(!(l.state.loading&4)){var s=zn.get(e);if(s)var a=s.get(null);else{s=new Map,zn.set(e,s);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<n.length;c++){var r=n[c];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(s.set(r.dataset.precedence,r),a=r)}a&&s.set(null,a)}n=l.instance,r=n.getAttribute("data-precedence"),c=s.get(r)||a,c===a&&s.set(null,n),s.set(r,n),this.count++,a=Rn.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),c?c.parentNode.insertBefore(n,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),l.state.loading|=4}}var pa={$$typeof:Re,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function K0(e,l,s,a,n,c,r,d,i){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.hiddenUpdates=Jn(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=c,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function ax(e,l,s,a,n,c,r,d,i,h,b,N){return e=new K0(e,l,s,r,i,h,b,N,d),l=1,c===!0&&(l|=24),c=el(3,null,null,l),e.current=c,c.stateNode=e,l=Rc(),l.refCount++,e.pooledCache=l,l.refCount++,c.memoizedState={element:a,isDehydrated:s,cache:l},Bc(c),e}function nx(e){return e?(e=ts,e):ts}function cx(e,l,s,a,n,c){n=nx(n),a.context===null?a.context=n:a.pendingContext=n,a=nt(l),a.payload={element:s},c=c===void 0?null:c,c!==null&&(a.callback=c),s=ct(e,a,l),s!==null&&(Ke(s,e,l),Js(s,e,l))}function rx(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<l?s:l}}function ed(e,l){rx(e,l),(e=e.alternate)&&rx(e,l)}function dx(e){if(e.tag===13||e.tag===31){var l=Tt(e,67108864);l!==null&&Ke(l,e,67108864),ed(e,67108864)}}function ix(e){if(e.tag===13||e.tag===31){var l=nl();l=Wn(l);var s=Tt(e,l);s!==null&&Ke(s,e,l),ed(e,l)}}var Un=!0;function J0(e,l,s,a){var n=v.T;v.T=null;var c=E.p;try{E.p=2,ld(e,l,s,a)}finally{E.p=c,v.T=n}}function W0(e,l,s,a){var n=v.T;v.T=null;var c=E.p;try{E.p=8,ld(e,l,s,a)}finally{E.p=c,v.T=n}}function ld(e,l,s,a){if(Un){var n=td(a);if(n===null)Yr(e,l,a,Bn,s),ux(e,a);else if(F0(n,e,l,s,a))a.stopPropagation();else if(ux(e,a),l&4&&-1<$0.indexOf(e)){for(;n!==null;){var c=Xt(n);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var r=_t(c.pendingLanes);if(r!==0){var d=c;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var i=1<<31-Pe(r);d.entanglements[1]|=i,r&=~i}Al(c),(ee&6)===0&&(bn=$e()+500,oa(0))}}break;case 31:case 13:d=Tt(c,2),d!==null&&Ke(d,c,2),jn(),ed(c,2)}if(c=td(a),c===null&&Yr(e,l,a,Bn,s),c===n)break;n=c}n!==null&&a.stopPropagation()}else Yr(e,l,a,null,s)}}function td(e){return e=ac(e),sd(e)}var Bn=null;function sd(e){if(Bn=null,e=Qt(e),e!==null){var l=H(e);if(l===null)e=null;else{var s=l.tag;if(s===13){if(e=q(l),e!==null)return e;e=null}else if(s===31){if(e=le(l),e!==null)return e;e=null}else if(s===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return Bn=e,null}function ox(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ux()){case gd:return 2;case bd:return 8;case _a:case Bx:return 32;case vd:return 268435456;default:return 32}default:return 32}}var ad=!1,gt=null,bt=null,vt=null,ga=new Map,ba=new Map,jt=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ux(e,l){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":ga.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(l.pointerId)}}function va(e,l,s,a,n,c){return e===null||e.nativeEvent!==c?(e={blockedOn:l,domEventName:s,eventSystemFlags:a,nativeEvent:c,targetContainers:[n]},l!==null&&(l=Xt(l),l!==null&&dx(l)),e):(e.eventSystemFlags|=a,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function F0(e,l,s,a,n){switch(l){case"focusin":return gt=va(gt,e,l,s,a,n),!0;case"dragenter":return bt=va(bt,e,l,s,a,n),!0;case"mouseover":return vt=va(vt,e,l,s,a,n),!0;case"pointerover":var c=n.pointerId;return ga.set(c,va(ga.get(c)||null,e,l,s,a,n)),!0;case"gotpointercapture":return c=n.pointerId,ba.set(c,va(ba.get(c)||null,e,l,s,a,n)),!0}return!1}function xx(e){var l=Qt(e.target);if(l!==null){var s=H(l);if(s!==null){if(l=s.tag,l===13){if(l=q(s),l!==null){e.blockedOn=l,Ed(e.priority,function(){ix(s)});return}}else if(l===31){if(l=le(s),l!==null){e.blockedOn=l,Ed(e.priority,function(){ix(s)});return}}else if(l===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cn(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var s=td(e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);sc=a,s.target.dispatchEvent(a),sc=null}else return l=Xt(s),l!==null&&dx(l),e.blockedOn=s,!1;l.shift()}return!0}function mx(e,l,s){Cn(e)&&s.delete(l)}function P0(){ad=!1,gt!==null&&Cn(gt)&&(gt=null),bt!==null&&Cn(bt)&&(bt=null),vt!==null&&Cn(vt)&&(vt=null),ga.forEach(mx),ba.forEach(mx)}function Hn(e,l){e.blockedOn===l&&(e.blockedOn=null,ad||(ad=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,P0)))}var qn=null;function fx(e){qn!==e&&(qn=e,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){qn===e&&(qn=null);for(var l=0;l<e.length;l+=3){var s=e[l],a=e[l+1],n=e[l+2];if(typeof a!="function"){if(sd(a||s)===null)continue;break}var c=Xt(s);c!==null&&(e.splice(l,3),l-=3,tr(c,{pending:!0,data:n,method:s.method,action:a},a,n))}}))}function ks(e){function l(i){return Hn(i,e)}gt!==null&&Hn(gt,e),bt!==null&&Hn(bt,e),vt!==null&&Hn(vt,e),ga.forEach(l),ba.forEach(l);for(var s=0;s<jt.length;s++){var a=jt[s];a.blockedOn===e&&(a.blockedOn=null)}for(;0<jt.length&&(s=jt[0],s.blockedOn===null);)xx(s),s.blockedOn===null&&jt.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var n=s[a],c=s[a+1],r=n[Ye]||null;if(typeof c=="function")r||fx(s);else if(r){var d=null;if(c&&c.hasAttribute("formAction")){if(n=c,r=c[Ye]||null)d=r.formAction;else if(sd(n)!==null)continue}else d=r.action;typeof d=="function"?s[a+1]=d:(s.splice(a,3),a-=3),fx(s)}}}function hx(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(s,20)}function s(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(s,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function nd(e){this._internalRoot=e}Gn.prototype.render=nd.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(f(409));var s=l.current,a=nl();cx(s,a,e,l,null,null)},Gn.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;cx(e.current,2,null,e,null,null),jn(),l[Vt]=null}};function Gn(e){this._internalRoot=e}Gn.prototype.unstable_scheduleHydration=function(e){if(e){var l=_d();e={blockedOn:null,target:e,priority:l};for(var s=0;s<jt.length&&l!==0&&l<jt[s].priority;s++);jt.splice(s,0,e),s===0&&xx(e)}};var px=w.version;if(px!=="19.2.0")throw Error(f(527,px,"19.2.0"));E.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=_(l),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var I0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yn.isDisabled&&Yn.supportsFiber)try{Ds=Yn.inject(I0),Fe=Yn}catch{}}return Na.createRoot=function(e,l){if(!C(e))throw Error(f(299));var s=!1,a="",n=So,c=_o,r=Eo;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError)),l=ax(e,1,!1,null,null,s,a,null,n,c,r,hx),e[Vt]=l.current,Gr(e),new nd(l)},Na.hydrateRoot=function(e,l,s){if(!C(e))throw Error(f(299));var a=!1,n="",c=So,r=_o,d=Eo,i=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onUncaughtError!==void 0&&(c=s.onUncaughtError),s.onCaughtError!==void 0&&(r=s.onCaughtError),s.onRecoverableError!==void 0&&(d=s.onRecoverableError),s.formState!==void 0&&(i=s.formState)),l=ax(e,1,!0,l,s??null,a,n,i,c,r,d,hx),l.context=nx(null),s=l.current,a=nl(),a=Wn(a),n=nt(a),n.callback=null,ct(s,n,a),s=a,l.current.lanes=s,Os(l,s),Al(l),e[Vt]=l.current,Gr(e),new Gn(l)},Na.version="19.2.0",Na}var kx;function uf(){if(kx)return dd.exports;kx=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(w){console.error(w)}}return y(),dd.exports=of(),dd.exports}var xf=uf();const mf=Tx(xf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hf=y=>y.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,A,f)=>f?f.toUpperCase():A.toLowerCase()),Ax=y=>{const w=hf(y);return w.charAt(0).toUpperCase()+w.slice(1)},Ox=(...y)=>y.filter((w,A,f)=>!!w&&w.trim()!==""&&f.indexOf(w)===A).join(" ").trim(),pf=y=>{for(const w in y)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Dl.forwardRef(({color:y="currentColor",size:w=24,strokeWidth:A=2,absoluteStrokeWidth:f,className:C="",children:H,iconNode:q,...le},R)=>Dl.createElement("svg",{ref:R,...gf,width:w,height:w,stroke:y,strokeWidth:f?Number(A)*24/Number(w):A,className:Ox("lucide",C),...!H&&!pf(le)&&{"aria-hidden":"true"},...le},[...q.map(([_,F])=>Dl.createElement(_,F)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=(y,w)=>{const A=Dl.forwardRef(({className:f,...C},H)=>Dl.createElement(bf,{ref:H,iconNode:w,className:Ox(`lucide-${ff(Ax(y))}`,`lucide-${y}`,f),...C}));return A.displayName=Ax(y),A};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],md=Wl("chevron-left",vf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fd=Wl("chevron-right",jf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Dx=Wl("circle-alert",Nf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ya=Wl("database",yf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_f=Wl("layers",Sf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],kf=Wl("lock",Ef);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Df=Wl("network",Af);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Of=Wl("panels-top-left",Tf);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],wx=Wl("server",wf),Rf=()=>{const[y,w]=Dl.useState(0),A=[{title:"Розгортання FastAPI додатку в Docker",subtitle:"Backend: FastAPI + PostgreSQL + Redis",content:t.jsxs("div",{className:"text-center space-y-6",children:[t.jsxs("div",{className:"flex justify-center gap-8 mt-8",children:[t.jsxs("div",{className:"bg-blue-100 p-6 rounded-lg",children:[t.jsx(wx,{className:"w-16 h-16 text-blue-600 mx-auto mb-2"}),t.jsx("p",{className:"font-semibold",children:"FastAPI"})]}),t.jsxs("div",{className:"bg-green-100 p-6 rounded-lg",children:[t.jsx(ya,{className:"w-16 h-16 text-green-600 mx-auto mb-2"}),t.jsx("p",{className:"font-semibold",children:"PostgreSQL"})]}),t.jsxs("div",{className:"bg-red-100 p-6 rounded-lg",children:[t.jsx(ya,{className:"w-16 h-16 text-red-600 mx-auto mb-2"}),t.jsx("p",{className:"font-semibold",children:"Redis"})]})]}),t.jsx("p",{className:"text-lg text-gray-600 mt-8",children:"Практична лекція з контейнеризації backend сервісів"})]})},{title:"1. Запуск PostgreSQL в контейнері",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(ya,{className:"w-5 h-5"}),"Запуск PostgreSQL"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`docker run -d \\
  --name postgres_container \\
  -e POSTGRES_USER=myuser \\
  -e POSTGRES_PASSWORD=mypassword \\
  -e POSTGRES_DB=mydb \\
  -p 5432:5432 \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15`})]}),t.jsx("div",{className:"bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Важливо:"})," Volume забезпечує збереження даних після перезапуску контейнера"]})})]})},{title:"2. Запуск Redis в контейнері",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border-l-4 border-green-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(ya,{className:"w-5 h-5"}),"Development (без персистентності)"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`docker run -d \\
  --name redis_container \\
  -p 6379:6379 \\
  redis:7-alpine`}),t.jsx("p",{className:"text-sm mt-2 text-gray-700",children:"✓ Швидко, просто, дані не критичні"})]}),t.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border-l-4 border-red-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(ya,{className:"w-5 h-5"}),"Production (з персистентністю)"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`docker run -d \\
  --name redis_container \\
  -p 6379:6379 \\
  -v redis_data:/data \\
  redis:7-alpine redis-server --appendonly yes`}),t.jsx("p",{className:"text-sm mt-2 text-gray-700",children:"✓ Дані зберігаються, безпечно для prod"})]})]})},{title:"3. Структура проекту FastAPI",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border-l-4 border-green-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"✅ Best Practice (рекомендовано)"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded overflow-x-auto text-xs",children:`project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── auth.py
│   ├── crud.py
│   └── models.py
├── .env
├── .env.docker
├── .env.example
├── Dockerfile.dev
├── Dockerfile.prod
├── requirements.txt
└── .gitignore`}),t.jsxs("p",{className:"text-xs mt-2 text-gray-700",children:["Команда: ",t.jsx("code",{children:"uvicorn app.main:app"})]})]}),t.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"⚠️ Простий варіант"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded overflow-x-auto text-xs",children:`project/
├── main.py
├── config.py
├── auth.py
├── crud.py
├── models.py
├── .env
├── .env.docker
├── .env.example
├── Dockerfile.dev
├── Dockerfile.prod
├── requirements.txt
└── .gitignore`}),t.jsxs("p",{className:"text-xs mt-2 text-gray-700",children:["Команда: ",t.jsx("code",{children:"uvicorn main:app"})]})]})]}),t.jsxs("div",{className:"bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm",children:[t.jsx("p",{children:t.jsx("strong",{children:"Додайте в .gitignore:"})}),t.jsx("pre",{className:"bg-gray-800 text-white p-2 rounded mt-2 text-xs",children:`.env
.env.docker
__pycache__/
*.pyc
.venv/`})]})]})},{title:"4. Файл .env (приклад)",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(kf,{className:"w-5 h-5"}),".env.example (публічний шаблон)"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Database
POSTGRES_USER=myuser
POSTGRES_PASSWORD=changeme
POSTGRES_DB=mydb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Application
SECRET_KEY=your-secret-key-here
DEBUG=True`})]}),t.jsxs("p",{className:"text-sm text-gray-600",children:[t.jsx("strong",{children:"Примітка:"})," Створіть копію як ",t.jsx("code",{children:".env"})," та ",t.jsx("code",{children:".env.docker"})," з реальними значеннями"]})]})},{title:"5. Конфігурація FastAPI (config.py)",content:t.jsx("div",{className:"space-y-4",children:t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

# ВАЖЛИВО: override=False не перезаписує існуючі змінні
load_dotenv(override=False)

class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432
    
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    
    ENVIRONMENT: str = "development"
    ALLOWED_ORIGINS: str = "http://localhost:5173"
    SECRET_KEY: str
    DEBUG: bool = False
    
    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"
    
    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}"
    
    class Config:
        env_file = ".env"

settings = Settings()`})})},{title:"6. Використання settings в main.py",content:t.jsxs("div",{className:"space-y-4",children:[t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`from dotenv import load_dotenv

# ВАЖЛИВО: load_dotenv() на самому початку файлу!
load_dotenv(override=False)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import redis
from app.config import settings

app = FastAPI(title="Wish List API", version="1.0.0")

# CORS - використовуємо settings
origins = [origin.strip() for origin in settings.ALLOWED_ORIGINS.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Redis - використовуємо settings.REDIS_URL
redis_client = redis.from_url(settings.REDIS_URL, decode_responses=True)

# PostgreSQL (приклад для SQLAlchemy)
# from sqlalchemy import create_engine
# engine = create_engine(settings.DATABASE_URL)`}),t.jsx("div",{className:"bg-blue-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"✓ Переваги:"})," Вся конфігурація в config.py, легко тестувати, типізація"]})})]})},{title:"7. Dockerfile.dev (Development)",content:t.jsxs("div",{className:"space-y-4",children:[t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`FROM python:3.11-slim

WORKDIR /app

# Встановлення залежностей
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir -r requirements.txt

# Копіювання коду
COPY . .

# Порт
EXPOSE 8000

# Запуск з hot-reload для розробки
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", \\
     "--port", "8000", "--reload"]`}),t.jsx("div",{className:"bg-blue-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Особливості:"})," ",t.jsx("code",{children:"--reload"})," для автоматичного перезавантаження при змінах коду"]})}),t.jsx("div",{className:"bg-yellow-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"⚠️ Важливо:"})," ",t.jsx("code",{children:"app.main:app"})," для структури з папкою app/. Якщо main.py в корені → ",t.jsx("code",{children:"main:app"})]})})]})},{title:"7. Dockerfile.prod (Production)",content:t.jsxs("div",{className:"space-y-4",children:[t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`FROM python:3.11-slim AS builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir --prefix=/install -r requirements.txt


FROM python:3.11-slim

WORKDIR /app

COPY --from=builder /install /usr/local

COPY . .

RUN useradd -m -u 1000 appuser && \\
    chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}),t.jsx("div",{className:"bg-green-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Multi-stage build:"})," Білдимо залежності окремо → копіюємо тільки результат. Образ менший на 30-40%!"]})})]})},{title:"8. Файл .env.docker",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"Конфігурація для Docker мережі"}),t.jsxs("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:[`# Database (використовуємо назви контейнерів!)
          POSTGRES_USER=myuser
          POSTGRES_PASSWORD=strongpassword123
          POSTGRES_DB=mydb
          POSTGRES_HOST=`,t.jsx("span",{className:"bg-yellow-300 text-gray-900 px-1 font-bold",children:"postgres_container"}),`
          POSTGRES_PORT=5432
          
          # Redis (назва контейнера!)
          REDIS_HOST=`,t.jsx("span",{className:"bg-yellow-300 text-gray-900 px-1 font-bold",children:"redis_container"}),`
          REDIS_PORT=6379
          
          # Application
          SECRET_KEY=super-secret-production-key
          DEBUG=False`]})]}),t.jsxs("div",{className:"bg-yellow-50 p-3 rounded text-sm border-l-4 border-yellow-500",children:[t.jsx(Dx,{className:"w-5 h-5 inline mr-2 text-yellow-600"}),t.jsx("strong",{children:"Ключова відмінність:"})," HOST використовує ",t.jsx("span",{className:"bg-yellow-300 px-1 font-mono font-bold",children:"назви контейнерів"})," замість ",t.jsx("span",{className:"line-through text-red-600",children:"localhost"})]}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[t.jsx("strong",{children:"Чому не localhost?"})," У Docker кожен контейнер — окрема машина. Docker DNS автоматично резолвить назви контейнерів в IP адреси всередині мережі."]})]})},{title:"9. Створення Docker мережі",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(Df,{className:"w-5 h-5"}),"Створення власної мережі"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Створити мережу
docker network create myapp_network

# Перевірити створення
docker network ls

# Переглянути деталі мережі
docker network inspect myapp_network`})]}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[t.jsx("p",{children:t.jsx("strong",{children:"Переваги власної мережі:"})}),t.jsxs("ul",{className:"list-disc list-inside ml-2 mt-2",children:[t.jsx("li",{children:"DNS резолюція по іменах контейнерів"}),t.jsx("li",{children:"Ізоляція від інших контейнерів"}),t.jsx("li",{children:"Краща безпека"})]})]})]})},{title:"10. Додавання існуючих контейнерів до мережі",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"Підключення вже запущених контейнерів"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Додати PostgreSQL до мережі
docker network connect myapp_network postgres_container

# Додати Redis до мережі
docker network connect myapp_network redis_container

# Перевірити підключення
docker network inspect myapp_network`})]}),t.jsx("div",{className:"bg-gray-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Результат inspect:"}),' Побачите контейнери в секції "Containers" з їх IP адресами']})})]})},{title:"11. Запуск контейнерів одразу в мережі",content:t.jsxs("div",{className:"space-y-4",children:[t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# PostgreSQL з мережею
docker run -d \\
  --name postgres_container \\
  --network myapp_network \\
  -e POSTGRES_USER=myuser \\
  -e POSTGRES_PASSWORD=mypassword \\
  -e POSTGRES_DB=mydb \\
  -p 5432:5432 \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15

# Redis з мережею
docker run -d \\
  --name redis_container \\
  --network myapp_network \\
  -p 6379:6379 \\
  -v redis_data:/data \\
  redis:7-alpine`}),t.jsx("div",{className:"bg-green-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Параметр --network"})," одразу додає контейнер до мережі при створенні"]})})]})},{title:"12. Білд FastAPI Docker образу",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"Development образ"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Білд dev образу
docker build -f Dockerfile.dev -t myapp:dev .

# Білд production образу
docker build -f Dockerfile.prod -t myapp:prod .`})]}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[t.jsx("p",{children:t.jsx("strong",{children:"Параметри:"})}),t.jsxs("ul",{className:"list-disc list-inside ml-2",children:[t.jsxs("li",{children:[t.jsx("code",{children:"-f"})," - вказує конкретний Dockerfile"]}),t.jsxs("li",{children:[t.jsx("code",{children:"-t"})," - тег для образу"]})]})]})]})},{title:"13. Запуск FastAPI в мережі",content:t.jsxs("div",{className:"space-y-4",children:[t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Development
docker run -d \\
  --name fastapi_dev \\
  --network myapp_network \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  -v $(pwd)/app:/app/app \\
  myapp:dev

# Production
docker run -d \\
  --name fastapi_prod \\
  --network myapp_network \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  myapp:prod`}),t.jsx("div",{className:"bg-yellow-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Dev особливості:"})," Volume mount для коду дозволяє hot-reload без перезбирання"]})})]})},{title:"14. Перевірка з'єднань",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border-l-4 border-green-500",children:[t.jsx("h3",{className:"font-semibold mb-2",children:"Тестування підключень"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Перевірити логи FastAPI
docker logs fastapi_dev

# Зайти в контейнер для діагностики
docker exec -it fastapi_dev /bin/bash

# Всередині контейнера: перевірити доступність через Python
python -c "import socket; socket.create_connection(('postgres_container', 5432), timeout=2); print('PostgreSQL is available!')"

python -c "import socket; socket.create_connection(('redis_container', 6379), timeout=2); print('Redis is available!')"

# Перевірити змінні оточення
env | grep POSTGRES
env | grep REDIS

# Тест підключення через settings
python -c "from app.config import settings; print(settings.DATABASE_URL)"
python -c "from app.config import settings; print(settings.REDIS_URL)"`})]}),t.jsx("div",{className:"bg-yellow-50 p-3 rounded text-sm",children:t.jsxs("p",{children:[t.jsx("strong",{children:"Примітка:"})," В slim образі немає ping/curl, тому використовуємо Python socket"]})})]})},{title:"15. Метод --link (застарілий)",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border-l-4 border-red-500",children:[t.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[t.jsx(Dx,{className:"w-5 h-5"}),"Legacy метод (тільки для старих систем)"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:`# Синтаксис: --link <container_name>:<alias>
docker run -d \\
  --name fastapi_app \\
  --link postgres_container:postgres \\
  --link redis_container:redis \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  myapp:dev

# Перевірити /etc/hosts всередині контейнера
docker exec fastapi_app cat /etc/hosts`})]}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm space-y-2",children:[t.jsx("p",{children:t.jsx("strong",{children:"Як працює --link:"})}),t.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[t.jsxs("li",{children:[t.jsx("code",{children:"postgres_container:postgres"}),' - контейнер доступний як "postgres"']}),t.jsxs("li",{children:[t.jsx("code",{children:"redis_container:redis"}),' - контейнер доступний як "redis"']}),t.jsx("li",{children:"Docker додає записи в /etc/hosts контейнера"}),t.jsx("li",{children:"Аліас може бути довільним, але логічним"})]})]}),t.jsxs("div",{className:"bg-orange-50 p-3 rounded text-sm",children:[t.jsx("p",{children:t.jsx("strong",{children:"В .env.docker треба змінити HOST на аліаси:"})}),t.jsxs("pre",{className:"bg-gray-800 text-white p-2 rounded mt-1",children:["POSTGRES_HOST=postgres",t.jsx("br",{}),"REDIS_HOST=redis"]}),t.jsxs("p",{className:"mt-2",children:[t.jsx("strong",{children:"⚠️ Важливо:"})," --link застарів. З --link НЕ треба --network! Використовуйте docker network!"]})]})]})},{title:"16. Корисні команди",content:t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm mb-3",children:[t.jsx("strong",{children:"💡 Порада:"})," Використовуйте ці команди для управління Docker контейнерами та очищення системи"]}),t.jsxs("pre",{className:"bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm",children:[`
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ПЕРЕГЛЯД ==="}),`
          # Переглянути всі контейнери (включно із зупиненими)
          docker ps -a
          
          # Переглянути тільки запущені контейнери
          docker ps
          
          # Переглянути всі образи
          docker images
          
          # Переглянути volumes
          docker volume ls
          
          # Переглянути мережі
          docker network ls
          
          # Використання диску
          docker system df
          
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ЛОГИ ==="}),`
          # Переглянути логи в реальному часі
          docker logs -f fastapi_dev
          
          # Останні 100 рядків логів
          docker logs --tail 100 fastapi_dev
          
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ЗУПИНКА ==="}),`
          # Зупинити всі контейнери
          docker stop fastapi_dev postgres_container redis_container
          
          # Зупинити всі запущені контейнери
          docker stop $(docker ps -q)
          
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ВИДАЛЕННЯ ==="}),`
          # Видалити контейнери
          docker rm fastapi_dev postgres_container redis_container
          
          # Видалити образи
          docker rmi myapp:dev myapp:prod
          
          # Видалити volume
          docker volume rm redis_data postgres_data
          
          # Видалити мережу
          docker network rm myapp_network
          
          `,t.jsx("span",{className:"text-yellow-400 font-bold",children:"# === ОЧИЩЕННЯ (обережно!) ==="}),`
          # Видалити все невикористовуване (БЕЗ volumes)
          docker system prune -a
          
          # Видалити все невикористовуване (З volumes!)
          docker system prune -a --volumes
          
          # Видалити тільки зупинені контейнери
          docker container prune
          
          # Видалити тільки невикористовувані образи
          docker image prune -a
          
          # Видалити тільки невикористовувані volumes
          docker volume prune
          
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ІНСПЕКЦІЯ ==="}),`
          # Детальна інформація про контейнер
          docker inspect fastapi_dev
          
          # Перевірити IP адресу контейнера
          docker inspect fastapi_dev | grep IPAddress
          
          # Подивитися змінні оточення
          docker inspect fastapi_dev | grep -A 20 "Env"
          
          `,t.jsx("span",{className:"text-cyan-400 font-bold",children:"# === ВИКОНАННЯ КОМАНД ==="}),`
          # Увійти в контейнер
          docker exec -it fastapi_dev bash
          
          # Виконати команду в контейнері
          docker exec fastapi_dev ls -la
          
          # Перевірити змінні всередині контейнера
          docker exec fastapi_dev env`]}),t.jsxs("div",{className:"bg-red-50 p-3 rounded text-sm border-l-4 border-red-500",children:[t.jsx("strong",{children:"⚠️ Увага:"})," Команди з ",t.jsx("code",{className:"bg-red-200 px-1",children:"--volumes"})," видаляють дані назавжди!"]})]})},{title:"17. Troubleshooting",content:t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-red-50 p-3 rounded border-l-4 border-red-500",children:[t.jsx("p",{className:"font-semibold",children:"Проблема: Не може підключитися до БД"}),t.jsxs("ul",{className:"list-disc list-inside ml-2 mt-1",children:[t.jsxs("li",{children:["Перевірте чи контейнери в одній мережі: ",t.jsx("code",{children:"docker network inspect"})]}),t.jsx("li",{children:"Перевірте POSTGRES_HOST в .env.docker (має бути назва контейнера)"}),t.jsx("li",{children:"Перевірте load_dotenv(override=False)"})]})]}),t.jsxs("div",{className:"bg-yellow-50 p-3 rounded border-l-4 border-yellow-500",children:[t.jsx("p",{className:"font-semibold",children:"Проблема: Зміни коду не відображаються"}),t.jsxs("ul",{className:"list-disc list-inside ml-2 mt-1",children:[t.jsxs("li",{children:["Dev: Перевірте volume mount ",t.jsx("code",{children:"-v $(pwd)/app:/app/app"})]}),t.jsxs("li",{children:["Prod: Потрібно перезібрати образ ",t.jsx("code",{children:"docker build"})]})]})]}),t.jsxs("div",{className:"bg-blue-50 p-3 rounded border-l-4 border-blue-500",children:[t.jsx("p",{className:"font-semibold",children:"Проблема: Port already allocated"}),t.jsxs("ul",{className:"list-disc list-inside ml-2 mt-1",children:[t.jsxs("li",{children:["Зупиніть старий контейнер: ",t.jsx("code",{children:"docker stop"})]}),t.jsxs("li",{children:["Або змініть порт: ",t.jsx("code",{children:"-p 8001:8000"})]})]})]})]})},{title:"Підсумок",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg",children:[t.jsx("h3",{className:"text-xl font-bold mb-4",children:"Ключові моменти:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-blue-600",children:"✓ Окремі контейнери"}),t.jsx("p",{className:"text-gray-600",children:"PostgreSQL, Redis, FastAPI"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-green-600",children:"✓ .env файли"}),t.jsx("p",{className:"text-gray-600",children:".env, .env.docker (не в git!)"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-purple-600",children:"✓ Два Dockerfile"}),t.jsx("p",{className:"text-gray-600",children:"dev (reload) та prod (gunicorn)"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-orange-600",children:"✓ Docker Network"}),t.jsx("p",{className:"text-gray-600",children:"Для зв'язку між контейнерами"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-red-600",children:"✓ override=False"}),t.jsx("p",{className:"text-gray-600",children:"В load_dotenv()"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("p",{className:"font-semibold text-teal-600",children:"✓ Назви контейнерів"}),t.jsx("p",{className:"text-gray-600",children:"Як HOST в .env.docker"})]})]})]}),t.jsxs("div",{className:"text-center text-gray-600 mt-8",children:[t.jsx("p",{className:"text-lg",children:"Готово до практики! 🚀"}),t.jsx("p",{className:"text-sm mt-2",children:"Далі: Docker Compose та Frontend"})]})]})}],f=()=>{w(q=>(q+1)%A.length)},C=()=>{w(q=>(q-1+A.length)%A.length)},H=q=>{w(q)};return t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col",children:t.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:t.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[600px] flex flex-col",children:[t.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:A[y].title}),A[y].subtitle&&t.jsx("p",{className:"text-xl text-gray-600",children:A[y].subtitle})]}),t.jsx("div",{className:"flex-1 overflow-y-auto",children:A[y].content})]}),t.jsx("div",{className:"border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("button",{onClick:C,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===0,children:[t.jsx(md,{className:"w-5 h-5"}),"Назад"]}),t.jsx("div",{className:"flex gap-2",children:A.map((q,le)=>t.jsx("button",{onClick:()=>H(le),className:`w-2 h-2 rounded-full transition ${le===y?"bg-blue-600 w-8":"bg-gray-300 hover:bg-gray-400"}`},le))}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{className:"text-sm text-gray-600",children:[y+1," / ",A.length]}),t.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===A.length-1,children:["Далі",t.jsx(fd,{className:"w-5 h-5"})]})]})]})})]})})})},zf=()=>{const[y,w]=Dl.useState(0),A=[{title:"📁 Структура Vue.js проекту",slideNumber:"1 / 12",gradient:"from-green-600 to-blue-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-green-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"⭐"}),"Best Practices"]}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`frontend/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── views/
  │   ├── router/
  │   ├── store/
  │   │   └── auth.ts
  │   ├── services/
  │   │   └── api.ts      ✓
  │   ├── types/
  │   ├── App.vue
  │   └── main.ts
  ├── public/
  ├── .env.development
  ├── .env.production
  ├── Dockerfile.dev
  ├── Dockerfile.prod
  ├── nginx.conf
  ├── docker-compose.yml
  ├── package.json
  └── vite.config.ts`})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-blue-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🚀"}),"Simple"]}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`frontend/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── views/
  │   ├── router/
  │   ├── store/
  │   │   └── auth.ts
  │   ├── App.vue
  │   └── main.ts
  ├── public/
  ├── api.ts           ✓
  ├── .env.development
  ├── .env.production
  ├── Dockerfile.dev
  ├── Dockerfile.prod
  ├── nginx.conf
  ├── docker-compose.yml
  ├── package.json
  └── vite.config.ts`})]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"⭐ Best Practices"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Логічна структура для великих проектів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Легко додати нові сервіси"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Зручно для команди"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Масштабування без проблем"})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🚀 Simple"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Швидкий старт для малих проектів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Менше папок - простіше навігація"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Ідеально для прототипів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Мінімалістичний підхід"})]})]})]})]})]})},{title:"⚙️ .env файли для Frontend",slideNumber:"2 / 12",gradient:"from-yellow-500 to-red-500",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-yellow-50 border-4 border-yellow-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-yellow-700 mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🔧"}),"Development"]}),t.jsx("div",{className:"text-sm text-yellow-600 font-mono mb-3",children:".env.development"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Прямий доступ до backend
  VITE_API_BASE=http://localhost:8000
  
  VITE_APP_TITLE=My App (Dev)
  VITE_ENABLE_DEBUG=true`})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-blue-700 mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🚀"}),"Production"]}),t.jsx("div",{className:"text-sm text-blue-600 font-mono mb-3",children:".env.production"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Через nginx proxy
  VITE_API_BASE=/api
  
  VITE_APP_TITLE=My App
  VITE_ENABLE_DEBUG=false`})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-6",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"💻 Використання в коді (api.ts):"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`import axios from 'axios'
  
  const API_BASE = import.meta.env.VITE_API_BASE as string 
                  || 'http://localhost:8000'
  
  const api = axios.create({
    baseURL: API_BASE,
  })
  
  // Development: baseURL = 'http://localhost:8000'
  // Production:  baseURL = '/api'`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-2 text-lg",children:"Важливо!"}),t.jsxs("p",{className:"text-sm text-yellow-800 leading-relaxed",children:[t.jsx("strong",{children:"Development:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"VITE_API_BASE=http://localhost:8000"})," - frontend звертається напряму до backend",t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Production:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"VITE_API_BASE=/api"})," - frontend звертається через Nginx proxy (same origin, CORS не потрібен!)"]})]})]})]})},{title:"🔧 Dockerfile.dev (Development)",slideNumber:"3 / 12",gradient:"from-teal-500 to-cyan-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-teal-50 border-4 border-teal-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-teal-700 mb-3",children:"З Hot-Reload для розробки"}),t.jsx("pre",{className:"bg-gray-900 text-teal-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`FROM node:20-alpine
  
  WORKDIR /app
  
  # Копіюємо package файли
  COPY package*.json ./
  
  # Встановлюємо залежності
  RUN npm install
  
  # Копіюємо весь код
  COPY . .
  
  # Відкриваємо порт для Vite dev server
  EXPOSE 5173
  
  # Запускаємо dev server з hot-reload
  CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]`})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"vite.config.ts:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  
  export default defineConfig({
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      watch: {
        usePolling: true  // Для Docker
      }
    }
  })`})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-lg",children:"Важливо!"}),t.jsxs("p",{className:"text-sm text-green-800 leading-relaxed",children:[t.jsx("code",{className:"bg-green-200 px-2 py-1 rounded",children:"usePolling: true"})," потрібен для hot-reload в Docker, інакше зміни файлів не відслідковуються!"]})]})]})]})},{title:"🚀 Dockerfile.prod (Production)",slideNumber:"4 / 12",gradient:"from-red-500 to-pink-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-red-700 mb-3",children:"Multi-stage build з Nginx"}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Stage 1: Build
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  
  # Build для production з правильним API_BASE
  ARG VITE_API_BASE=/api
  ENV VITE_API_BASE=\${VITE_API_BASE}
  
  RUN npm run build
  
  # Stage 2: Production з nginx
  FROM nginx:alpine
  
  # Копіюємо білд
  COPY --from=build /app/dist /usr/share/nginx/html
  
  # Копіюємо nginx конфіг
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"✓ Переваги Multi-stage:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"•"}),t.jsx("span",{children:"Малий розмір образу (~25MB vs ~500MB)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"•"}),t.jsx("span",{children:"Без dev залежностей"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"•"}),t.jsx("span",{children:"Швидше розгортання"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"•"}),t.jsx("span",{children:"Безпечніше для production"})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3",children:"💡 ARG + ENV для API:"}),t.jsxs("div",{className:"text-sm text-yellow-800 leading-relaxed space-y-2",children:[t.jsxs("p",{children:[t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded font-semibold",children:"ARG"})," дозволяє змінювати API URL при build:"]}),t.jsx("code",{className:"block bg-gray-800 text-green-300 px-2 py-1 rounded text-xs",children:"docker build --build-arg VITE_API_BASE=/v2/api"}),t.jsxs("p",{className:"mt-2",children:["Vite вбудовує це значення в JavaScript під час ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded",children:"npm run build"})]})]})]})]})]})},{title:"🤔 Чому Nginx замість Vite в Production?",slideNumber:"5 / 12",gradient:"from-purple-500 to-pink-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-teal-50 border-4 border-teal-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-teal-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🔧"}),"Development - Vite"]}),t.jsx("pre",{className:"bg-gray-900 text-teal-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 5173
  
  # Vite dev server
  CMD ["npm", "run", "dev"]`}),t.jsxs("div",{className:"mt-4 space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Hot-reload для розробки"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Source maps для debugging"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Швидкий рестарт"})]})]})]}),t.jsxs("div",{className:"bg-orange-50 border-4 border-orange-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-orange-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🚀"}),"Production - Nginx"]}),t.jsx("pre",{className:"bg-gray-900 text-orange-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Stage 1: Build
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  ...
  RUN npm run build
  
  # Stage 2: Nginx
  FROM nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  CMD ["nginx", "-g", "daemon off;"]`}),t.jsxs("div",{className:"mt-4 space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"Оптимізовано для production"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"Малий розмір (~25MB)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"Максимальна швидкість"})]})]}),t.jsxs("div",{className:"mt-3 bg-orange-100 p-2 rounded text-xs text-orange-700",children:[t.jsx("strong",{children:"📝 daemon off:"})," тримає nginx у foreground (PID 1), щоб Docker не зупинив контейнер. Офіційний nginx:alpine вже має це."]})]})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-2",children:"⚡ Performance"}),t.jsxs("p",{className:"text-xs text-red-800 leading-relaxed",children:[t.jsx("strong",{children:"Vite:"})," Node.js процес (~200MB RAM)",t.jsx("br",{}),t.jsx("strong",{children:"Nginx:"})," C-написаний (~10MB RAM)",t.jsx("br",{}),t.jsx("span",{className:"text-green-600 font-bold",children:"Nginx в 100x швидше!"})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2",children:"🔒 Безпека"}),t.jsxs("p",{className:"text-xs text-blue-800 leading-relaxed",children:[t.jsx("strong",{children:"Vite dev server:"})," НЕ для production!",t.jsx("br",{}),t.jsx("strong",{children:"Nginx:"})," Battle-tested, DDoS захист, rate limiting"]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2",children:"📦 Розмір"}),t.jsxs("p",{className:"text-xs text-green-800 leading-relaxed",children:[t.jsx("strong",{children:"З Vite:"})," ~500MB (Node + modules)",t.jsx("br",{}),t.jsx("strong",{children:"З Nginx:"})," ~25MB (тільки статика)",t.jsx("br",{}),t.jsx("span",{className:"text-green-600 font-bold",children:"95% економії!"})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("div",{className:"text-sm text-purple-800 leading-relaxed",children:[t.jsx("strong",{children:"Development:"})," Vite dev server - hot-reload, debugging, зручність",t.jsx("br",{}),t.jsx("strong",{children:"Production:"})," Vite build → Nginx - швидкість, безпека, економія ресурсів",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{className:"font-bold",children:"Vite компілює в обох випадках, але:"}),t.jsx("br",{}),"• Dev: запускає dev server",t.jsx("br",{}),"• Prod: робить build → віддає Nginx"]})]})]})]})},{title:"📦 Multi-stage Build - Пояснення",slideNumber:"5 / 12",gradient:"from-indigo-500 to-purple-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-indigo-700 mb-4",children:"Етапи Multi-stage Build:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# ═══════════════════════════════════════════════════
  # Stage 1: BUILD (node:20-alpine ~500MB)
  # ═══════════════════════════════════════════════════
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  RUN npm run build
  # Результат: /app/dist з статичними файлами
  
  # ═══════════════════════════════════════════════════
  # Stage 2: PRODUCTION (nginx:alpine ~25MB)
  # ═══════════════════════════════════════════════════
  FROM nginx:alpine
  # Копіюємо ТІЛЬКИ білд з першого stage
  COPY --from=build /app/dist /usr/share/nginx/html
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  CMD ["nginx", "-g", "daemon off;"]
  
  # ✓ Фінальний образ: тільки nginx + статичні файли`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"✓ Переваги:"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600 font-bold",children:"📉"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Малий розмір:"})," ~25MB замість ~500MB",t.jsx("br",{}),t.jsx("span",{className:"text-green-600",children:"Економія: 95%!"})]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600 font-bold",children:"🚀"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Швидше:"})," менший образ = швидше завантаження і розгортання"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600 font-bold",children:"🔒"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Безпечніше:"})," немає node_modules, npm, dev залежностей"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600 font-bold",children:"⚡"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Оптимізовано:"})," тільки nginx + мініфіковані файли"]})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3 text-lg",children:"✗ Single-stage (погано):"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600 font-bold",children:"📈"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Великий розмір:"})," ~500MB",t.jsx("br",{}),t.jsx("span",{className:"text-red-600",children:"Непотрібні node_modules у фіналі"})]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600 font-bold",children:"🐌"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Повільніше:"})," довге завантаження і розгортання"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600 font-bold",children:"⚠️"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Небезпечно:"})," вихідний код + залежності в production"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600 font-bold",children:"💰"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Дорожче:"})," більше місця = більші витрати на хостинг"]})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-lg",children:"Як це працює:"}),t.jsxs("p",{className:"text-sm text-blue-800 leading-relaxed",children:[t.jsx("strong",{children:"Stage 1:"})," Використовує Node.js для збірки (npm install, npm run build)",t.jsx("br",{}),t.jsx("strong",{children:"Stage 2:"})," Бере ТІЛЬКИ результат збірки (/app/dist) і копіює в легкий nginx",t.jsx("br",{}),t.jsx("strong",{children:"Результат:"})," Фінальний образ не містить Node.js, npm, node_modules - тільки статичні файли!"]})]})]})]})},{title:"⚙️ Nginx конфігурація",slideNumber:"6 / 12",gradient:"from-orange-500 to-red-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-orange-50 border-4 border-orange-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-orange-700 mb-3",children:"nginx.conf - повна конфігурація:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`server {
      listen 80;
      server_name localhost;
      root /usr/share/nginx/html;
      index index.html;
  
      # ════════════════════════════════════════════
      # Gzip compression для швидкості
      # ════════════════════════════════════════════
      gzip on;
      gzip_types text/css application/javascript application/json;
  
      # ════════════════════════════════════════════
      # API proxy до FastAPI backend
      # ════════════════════════════════════════════
      location /api/ {
          # Видаляємо /api з URL перед проксуванням
          # /api/users → http://backend:8000/users
          rewrite ^/api/(.*) /$1 break;
          
          proxy_pass http://backend:8000;
          proxy_http_version 1.1;
          
          # Headers для правильної роботи
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          
          # WebSocket підтримка (якщо потрібно)
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
      }
  
      # ════════════════════════════════════════════
      # SPA routing - всі запити на index.html
      # ════════════════════════════════════════════
      location / {
          try_files $uri $uri/ /index.html;
      }
  
      # ════════════════════════════════════════════
      # Кешування статичних файлів
      # ════════════════════════════════════════════
      location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
          expires 1y;
          add_header Cache-Control "public, immutable";
      }
  }`})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-sm",children:"🔀 API Proxy"}),t.jsxs("p",{className:"text-xs text-blue-800 leading-relaxed",children:[t.jsx("code",{className:"bg-blue-200 px-1 py-0.5 rounded text-xs",children:"/api/*"})," запити перенаправляються на backend:8000. Rewrite видаляє /api з URL."]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-sm",children:"🎯 SPA Routing"}),t.jsxs("p",{className:"text-xs text-green-800 leading-relaxed",children:[t.jsx("code",{className:"bg-green-200 px-1 py-0.5 rounded text-xs",children:"try_files"})," забезпечує, що всі маршрути Vue Router працюють (повертає index.html)."]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-2 text-sm",children:"⚡ Кешування"}),t.jsx("p",{className:"text-xs text-purple-800 leading-relaxed",children:"Статичні файли (JS, CSS, images) кешуються на 1 рік для максимальної швидкості."})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-2 text-lg",children:"Як працює API proxy:"}),t.jsxs("div",{className:"text-sm text-yellow-800 leading-relaxed space-y-2",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Frontend запит:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"await api.get('/users')"})]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Браузер:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"GET http://localhost/api/users"})]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Nginx rewrite:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"/api/users → /users"})]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Proxy pass:"})," ",t.jsx("code",{className:"bg-yellow-200 px-2 py-1 rounded",children:"http://backend:8000/users"})]}),t.jsx("div",{className:"text-green-600 font-bold",children:"✓ Same origin = CORS не потрібен!"})]})]})]})]})},{title:"🔗 З'єднання Frontend → Backend",slideNumber:"9 / 12",gradient:"from-purple-500 to-indigo-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-purple-700 mb-4 text-center",children:"Схема з'єднання:"}),t.jsx("div",{className:"bg-white p-6 rounded-lg border-2 border-purple-300",children:t.jsx("pre",{className:"text-purple-700 text-xs leading-relaxed",children:`┌─────────────── DEVELOPMENT ───────────────────────────────┐
  │                                                            │
  │  Browser                                                   │
  │     │                                                      │
  │     ├──► http://localhost:5173 ──► Frontend (Vite)        │
  │     │                                    │                 │
  │     │                                    │ CORS потрібен!  │
  │     │                                    ↓                 │
  │     └──► http://localhost:8000 ──► Backend (FastAPI)      │
  │                                                            │
  │  ✗ Різні порти = Різні origins = CORS required            │
  └────────────────────────────────────────────────────────────┘
  
  ┌─────────────── PRODUCTION ────────────────────────────────┐
  │                                                            │
  │  Browser                                                   │
  │     │                                                      │
  │     └──► http://localhost ──► Nginx (port 80)             │
  │                                   │                        │
  │                  ┌────────────────┴─────────────┐          │
  │                  │                              │          │
  │                  ▼                              ▼          │
  │           /  → Vue SPA                /api/* → Backend     │
  │           (статичні файли)            (proxy_pass)         │
  │                                                            │
  │  ✓ Same origin через proxy = CORS не потрібен!            │
  │                                                            │
  │  Примітка: Backend може бути:                             │
  │  • На іншому сервері (http://api.example.com)             │
  │  • В іншому Docker контейнері                             │
  │  • Локально на host machine                               │
  └────────────────────────────────────────────────────────────┘`})})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"🔧 Development"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-yellow-200",children:[t.jsx("strong",{children:"Frontend запит:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs",children:"await api.get('/users')"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-yellow-200",children:[t.jsx("strong",{children:"Реальний URL:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs",children:"http://localhost:8000/users"})]}),t.jsxs("div",{className:"bg-red-100 p-3 rounded border border-red-300",children:[t.jsx("span",{className:"text-red-700 font-bold",children:"✗ CORS потрібен!"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-red-600",children:"5173 ≠ 8000 (різні порти)"})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🚀 Production"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{children:"Frontend запит:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs",children:"await api.get('/users')"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{children:"Реальний URL:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs",children:`/api/users
  → Nginx proxy
  → http://backend-server:8000/users`})]}),t.jsxs("div",{className:"bg-green-100 p-3 rounded border border-green-300",children:[t.jsx("span",{className:"text-green-700 font-bold",children:"✓ CORS не потрібен!"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-green-600",children:"Same origin через proxy"})]})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"⚙️ Nginx Proxy конфігурація"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-indigo-700",children:"nginx.conf:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-300 p-3 rounded mt-2 text-xs leading-relaxed",children:`location /api/ {
      rewrite ^/api/(.*) /$1 break;
      
      # Proxy до backend сервера
      proxy_pass http://your-backend:8000;
      
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
  }`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-indigo-700",children:"Варіанти backend:"}),t.jsxs("ul",{className:"mt-2 space-y-2 text-indigo-800 text-xs",children:[t.jsxs("li",{className:"bg-white p-2 rounded",children:["• ",t.jsx("strong",{children:"Інший сервер:"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"proxy_pass http://api.example.com;"})]}),t.jsxs("li",{className:"bg-white p-2 rounded",children:["• ",t.jsx("strong",{children:"Localhost:"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"proxy_pass http://host.docker.internal:8000;"})]}),t.jsxs("li",{className:"bg-white p-2 rounded",children:["• ",t.jsx("strong",{children:"IP адреса:"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"proxy_pass http://192.168.1.100:8000;"})]})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-lg",children:"Ключові моменти:"}),t.jsxs("div",{className:"text-sm text-green-800 leading-relaxed space-y-1",children:[t.jsxs("p",{children:["• ",t.jsx("strong",{children:"Development:"})," Frontend і Backend на різних портах → потрібен CORS"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"Production:"})," Все йде через Nginx на порту 80 → CORS не потрібен"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"Nginx Proxy:"})," перенаправляє /api/* запити на backend сервер"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"Backend може бути:"})," на іншому сервері, в Docker, або локально"]})]})]})]})]})},{title:"🌐 CORS налаштування",slideNumber:"10 / 12",gradient:"from-pink-500 to-rose-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-pink-50 border-4 border-pink-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-pink-700 mb-3",children:"FastAPI Backend - main.py:"}),t.jsx("pre",{className:"bg-gray-900 text-pink-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`from fastapi import FastAPI, Depends
  from fastapi.middleware.cors import CORSMiddleware
  from fastapi.security import OAuth2PasswordBearer
  
  app = FastAPI()
  
  # ════════════════════════════════════════════════════
  # CORS налаштування для Development
  # ════════════════════════════════════════════════════
  app.add_middleware(
      CORSMiddleware,
      allow_origins=[
          "http://localhost:5173",   # Vite dev server
          "http://localhost:80",      # Production через nginx
          "http://frontend",          # Docker network name
      ],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
  )
  
  oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
  
  @app.post("/auth/login")
  async def login(username: str, password: str):
      # Ваша логіка авторизації
      return {
          "access_token": "jwt_token_here",
          "token_type": "bearer",
          "user": {"id": 1, "username": username}
      }
  
  @app.get("/users")
  async def get_users(token: str = Depends(oauth2_scheme)):
      # Token автоматично з Authorization header
      return [{"id": 1, "name": "John"}]`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3 text-lg",children:"❌ Development - CORS потрібен"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[t.jsx("strong",{children:"Чому?"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-2 rounded mt-2 text-xs leading-relaxed",children:`Frontend: http://localhost:5173
  Backend:  http://localhost:8000
  
  Різні порти = Різні origins
  → Browser блокує запити без CORS!`})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[t.jsx("strong",{children:"Рішення:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-2 rounded mt-2 text-xs",children:`allow_origins=[
    "http://localhost:5173"
  ]`})]}),t.jsxs("div",{className:"bg-red-100 p-3 rounded",children:[t.jsx("span",{className:"text-red-700 font-bold",children:"⚠️ Без CORS:"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-red-600",children:"Access to fetch has been blocked by CORS policy"})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"✅ Production - CORS не потрібен"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{children:"Чому?"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs leading-relaxed",children:`Browser → http://localhost/
           → http://localhost/api/users
  
  Той самий origin (localhost:80)
  → Same origin policy = OK!`})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{children:"Nginx робить proxy:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs",children:`/api/* → backend:8000
  (внутрішній Docker routing)`})]}),t.jsxs("div",{className:"bg-green-100 p-3 rounded",children:[t.jsx("span",{className:"text-green-700 font-bold",children:"✓ Same Origin:"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-green-600",children:"Browser бачить все з localhost:80"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🔐 JWT Authentication з CORS"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Frontend (api.ts):"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`api.interceptors.request.use(config => {
    const token = useAuthStore().token
    if (token) {
      config.headers.Authorization = 
        \`Bearer \${token}\`
    }
    return config
  })`})]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Backend перевіряє:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`@app.get("/users")
  async def get_users(
    token: str = Depends(oauth2_scheme)
  ):
    # oauth2_scheme витягує токен
    # з Authorization header
    return users`})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("div",{className:"text-sm text-yellow-800 leading-relaxed space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-yellow-900",children:"Development:"}),t.jsx("br",{}),"• Frontend (5173) → Backend (8000) - різні порти",t.jsx("br",{}),"• CORS middleware обов'язковий в FastAPI",t.jsx("br",{}),"• ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded",children:'allow_origins=["http://localhost:5173"]'})]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-yellow-900",children:"Production:"}),t.jsx("br",{}),"• Browser → Nginx (80) → Backend (internal)",t.jsx("br",{}),"• Same origin через proxy = CORS не потрібен",t.jsx("br",{}),"• Але краще залишити в коді для сумісності"]})]})]})]})]})},{title:"▶️ Команди запуску контейнерів",slideNumber:"11 / 12",gradient:"from-emerald-500 to-green-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-emerald-50 border-4 border-emerald-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🔧"}),"Development"]}),t.jsx("pre",{className:"bg-gray-900 text-emerald-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Build development образу
  docker build -f Dockerfile.dev -t vue-app-dev .
  
  # Запуск development контейнера
  docker run -d \\
    --name vue-frontend-dev \\
    -p 5173:5173 \\
    -v $(pwd):/app \\
    -v /app/node_modules \\
    vue-app-dev
  
  # Перегляд логів
  docker logs -f vue-frontend-dev
  
  # Зупинка
  docker stop vue-frontend-dev
  
  # Видалення
  docker rm vue-frontend-dev`})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-blue-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🚀"}),"Production"]}),t.jsx("pre",{className:"bg-gray-900 text-blue-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Build production образу
  docker build \\
    -f Dockerfile.prod \\
    --build-arg VITE_API_BASE=/api \\
    -t vue-app-prod .
  
  # Запуск production контейнера
  docker run -d \\
    --name vue-frontend \\
    -p 80:80 \\
    vue-app-prod
  
  # Перегляд логів
  docker logs -f vue-frontend
  
  # Зупинка
  docker stop vue-frontend
  
  # Видалення
  docker rm vue-frontend`})]})]}),t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-purple-700 mb-3",children:"🔍 Debugging команди:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-300 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Зайти в контейнер
  docker exec -it vue-frontend sh
  
  # Переглянути запущені контейнери
  docker ps
  
  # Переглянути всі контейнери (включно зі зупиненими)
  docker ps -a
  
  # Статистика використання ресурсів
  docker stats
  
  # Перезапуск контейнера
  docker restart vue-frontend
  
  # Переглянути образи
  docker images
  
  # Видалити образ
  docker rmi vue-app-prod
  
  # Повне очищення
  docker system prune -a`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"🧪 Тестування:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Перевірка frontend (prod)
  curl http://localhost
  
  # Перевірка frontend (dev)
  curl http://localhost:5173
  
  # Перевірити nginx конфігурацію
  docker exec vue-frontend \\
    cat /etc/nginx/conf.d/default.conf
  
  # Перевірити статичні файли
  docker exec vue-frontend \\
    ls /usr/share/nginx/html`})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"📍 Доступ:"}),t.jsxs("div",{className:"space-y-3 text-xs",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{className:"text-green-700",children:"Development:"}),t.jsx("br",{}),t.jsx("code",{className:"text-green-600",children:"http://localhost:5173"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{className:"text-blue-700",children:"Production:"}),t.jsx("br",{}),t.jsx("code",{className:"text-blue-600",children:"http://localhost"})]})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"⚠️"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-red-700 mb-2 text-lg",children:"Важливо!"}),t.jsxs("div",{className:"text-sm text-red-800 leading-relaxed space-y-1",children:[t.jsxs("p",{children:["• ",t.jsx("strong",{children:"-d"})," - detached mode (у фоновому режимі)"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"-p host:container"})," - mapping портів"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"-v"})," - volumes для hot-reload в dev"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"--build-arg"})," - передача змінних при build"]}),t.jsxs("p",{children:["• ",t.jsx("strong",{children:"--name"})," - ім'я контейнера для зручності"]})]})]})]})]})},{title:"🔴 Troubleshooting - Типові проблеми",slideNumber:"12 / 12",gradient:"from-red-500 to-pink-600",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-red-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔴"})," Контейнер не запускається"]}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити статус
  docker ps -a
  
  # Подивитись логи
  docker logs vue-frontend
  
  # Перевірити чи порт зайнятий
  lsof -i :80
  lsof -i :5173
  
  # Видалити і створити заново
  docker rm vue-frontend
  docker run -d --name vue-frontend -p 80:80 vue-app-prod`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟡"})," CORS помилки в Development"]}),t.jsx("pre",{className:"bg-gray-900 text-yellow-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити .env
  cat .env.development
  # Має бути: VITE_API_BASE=http://localhost:8000
  
  # Перевірити чи backend доступний
  curl http://localhost:8000/docs
  
  # Додати в FastAPI CORS
  allow_origins=["http://localhost:5173"]
  
  # Перезапустити контейнер
  docker restart vue-frontend-dev`})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-blue-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔵"})," Hot-reload не працює"]}),t.jsx("pre",{className:"bg-gray-900 text-blue-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити vite.config.ts
  server: {
    watch: {
      usePolling: true  // Для Docker!
    }
  }
  
  # Перевірити volumes при запуску
  docker run -d \\
    -v $(pwd):/app \\
    -v /app/node_modules \\
    ...
  
  # Rebuild і перезапуск
  docker build -f Dockerfile.dev -t vue-app-dev .
  docker rm vue-frontend-dev
  docker run ...`})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-green-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟢"})," Nginx 404 при refresh сторінки"]}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити nginx.conf
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  # Перевірити чи файли є
  docker exec vue-frontend ls /usr/share/nginx/html
  
  # Перевірити nginx конфігурацію
  docker exec vue-frontend \\
    cat /etc/nginx/conf.d/default.conf
  
  # Rebuild
  docker build -f Dockerfile.prod -t vue-app-prod .
  docker rm vue-frontend
  docker run -d --name vue-frontend -p 80:80 vue-app-prod`})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-purple-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟣"})," JWT 401 Unauthorized"]}),t.jsx("pre",{className:"bg-gray-900 text-purple-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити токен в DevTools Console
  localStorage.getItem('token')
  
  # Перевірити header в Network tab
  Authorization: Bearer <token>
  
  # Перевірити Axios interceptor
  console.log(useAuthStore().token)
  
  # Очистити localStorage
  localStorage.clear()
  location.reload()`})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-orange-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟠"})," Build fails / Помилки збірки"]}),t.jsx("pre",{className:"bg-gray-900 text-orange-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Очистити Docker кеш
  docker system prune -a
  
  # Видалити всі образи проекту
  docker rmi vue-app-dev vue-app-prod
  
  # Видалити node_modules локально
  rm -rf node_modules package-lock.json
  
  # Build без кешу
  docker build --no-cache -f Dockerfile.prod -t vue-app-prod .
  
  # Перевірити логи build
  docker build -f Dockerfile.prod -t vue-app-prod . 2>&1 | tee build.log`})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-4 border-indigo-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-indigo-700 mb-3",children:"🛠️ Загальні команди для діагностики:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Перевірити всі контейнери
  docker ps -a
  
  # Переглянути логи контейнера
  docker logs -f vue-frontend
  
  # Останні 100 рядків логів
  docker logs --tail 100 vue-frontend
  
  # Перевірити використання ресурсів
  docker stats
  
  # Перевірити образи
  docker images
  
  # Зайти всередину контейнера
  docker exec -it vue-frontend sh
  
  # Перевірити змінні середовища в контейнері
  docker exec vue-frontend env
  
  # Перевірити процеси в контейнері
  docker top vue-frontend
  
  # Інформація про контейнер
  docker inspect vue-frontend
  
  # Видалити зупинені контейнери
  docker container prune
  
  # Видалити невикористані образи
  docker image prune`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 flex gap-3",children:[t.jsx("div",{className:"text-2xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-2",children:"Поради:"}),t.jsxs("div",{className:"text-xs text-yellow-800 leading-relaxed space-y-1",children:[t.jsxs("p",{children:["• Завжди перевіряйте логи: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded",children:"docker logs -f container-name"})]}),t.jsx("p",{children:"• При змінах в Dockerfile: обов'язково rebuild образу"}),t.jsxs("p",{children:["• При проблемах з кешем: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded",children:"--no-cache"})]}),t.jsx("p",{children:"• Використовуйте DevTools Network tab для перевірки API запитів"}),t.jsx("p",{children:"• Перевіряйте .env файли перед build"}),t.jsx("p",{children:"• Docker Desktop показує логи та статус візуально"}),t.jsx("p",{children:"• Порти мають бути вільні перед запуском контейнера"})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4 flex gap-3",children:[t.jsx("div",{className:"text-2xl",children:"✅"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2",children:"Швидка перевірка працездатності:"}),t.jsxs("div",{className:"text-xs text-green-800 space-y-1",children:[t.jsxs("p",{children:["1. ",t.jsx("code",{className:"bg-green-200 px-1 rounded",children:"docker ps"})," - контейнер запущений?"]}),t.jsxs("p",{children:["2. ",t.jsx("code",{className:"bg-green-200 px-1 rounded",children:"docker logs vue-frontend"})," - немає помилок?"]}),t.jsxs("p",{children:["3. ",t.jsx("code",{className:"bg-green-200 px-1 rounded",children:"curl http://localhost"})," - frontend працює?"]}),t.jsx("p",{children:"4. Відкрити DevTools → Network - запити йдуть правильно?"}),t.jsx("p",{children:"5. Перевірити nginx конфігурацію всередині контейнера"})]})]})]})]})},{title:"✅ Підсумок - Чеклист готовності",slideNumber:"13 / 13",gradient:"from-green-500 to-emerald-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4 text-center",children:"🎉 Ви навчились розгортати Vue.js у Docker!"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-green-300",children:[t.jsxs("h4",{className:"font-bold text-green-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"📁"})," Структура"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Best Practices vs Simple"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Організація файлів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"TypeScript setup"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-blue-300",children:[t.jsxs("h4",{className:"font-bold text-blue-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"⚙️"})," Конфігурація"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:".env файли"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"VITE_API_BASE"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"vite.config.ts"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-purple-300",children:[t.jsxs("h4",{className:"font-bold text-purple-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🔐"})," API & Auth"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"Axios instance"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"JWT interceptors"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"Pinia auth store"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-teal-300",children:[t.jsxs("h4",{className:"font-bold text-teal-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🔧"})," Development"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Dockerfile.dev"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Vite dev server"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-teal-600",children:"✓"}),t.jsx("span",{children:"Hot-reload"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-red-300",children:[t.jsxs("h4",{className:"font-bold text-red-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🚀"})," Production"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Dockerfile.prod"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Multi-stage build"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Nginx optimization"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-orange-300",children:[t.jsxs("h4",{className:"font-bold text-orange-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"⚙️"})," Nginx"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"API proxy"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"SPA routing"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"✓"}),t.jsx("span",{children:"Кешування"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-pink-300",children:[t.jsxs("h4",{className:"font-bold text-pink-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🔗"})," З'єднання"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-pink-600",children:"✓"}),t.jsx("span",{children:"Frontend → Backend"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-pink-600",children:"✓"}),t.jsx("span",{children:"Dev vs Prod схеми"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-pink-600",children:"✓"}),t.jsx("span",{children:"CORS setup"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-indigo-300",children:[t.jsxs("h4",{className:"font-bold text-indigo-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"▶️"})," Команди"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-indigo-600",children:"✓"}),t.jsx("span",{children:"docker build"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-indigo-600",children:"✓"}),t.jsx("span",{children:"docker run"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-indigo-600",children:"✓"}),t.jsx("span",{children:"Debugging"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-red-300",children:[t.jsxs("h4",{className:"font-bold text-red-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🔴"})," Troubleshooting"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Типові проблеми"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Діагностика"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✓"}),t.jsx("span",{children:"Рішення"})]})]})]})]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"📋 Чеклист для Production:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:".env.production налаштований (VITE_API_BASE=/api)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Dockerfile.prod з multi-stage build"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"nginx.conf з API proxy та SPA routing"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Backend налаштований (CORS якщо треба)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Протестовано: curl http://localhost/api/"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Образ розміром ~25MB (перевірити docker images)"})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"🚀 Наступні кроки:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Docker Compose"})," - оркестрація multiple сервісів"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"CI/CD"})," - автоматизація build і deploy"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Kubernetes"})," - масштабування в production"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"SSL/HTTPS"})," - захищений зв'язок"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Monitoring"})," - логування та метрики"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Performance"})," - оптимізація та CDN"]})]})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-500 rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-purple-700 mb-3 text-center",children:"🎯 Ключові висновки:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"Development:"})," Vite dev server + hot-reload = швидка розробка"]}),t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"Production:"})," Multi-stage build + Nginx = оптимальний результат"]}),t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"Розмір:"})," 500MB → 25MB (економія 95%)"]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"CORS:"})," Потрібен в dev, не потрібен в prod (proxy!)"]}),t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"API:"})," Axios + JWT interceptors = зручна авторизація"]}),t.jsxs("p",{className:"text-purple-800",children:[t.jsx("strong",{children:"Nginx:"})," API proxy + SPA routing + кешування"]})]})]})]}),t.jsxs("div",{className:"text-center mt-6",children:[t.jsx("p",{className:"text-3xl mb-2",children:"🎉"}),t.jsx("p",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Дякую за увагу!"}),t.jsx("p",{className:"text-lg text-gray-600",children:"Vue.js + Docker = ❤️"}),t.jsx("p",{className:"text-sm text-gray-500 mt-3",children:"Наступна тема: Docker Compose для оркестрації сервісів"})]})]})}],f=()=>{w(q=>(q+1)%A.length)},C=()=>{w(q=>(q-1+A.length)%A.length)},H=q=>{w(q)};return t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col",children:t.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:t.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[600px] flex flex-col",children:[t.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:A[y].title}),A[y].subtitle&&t.jsx("p",{className:"text-xl text-gray-600",children:A[y].subtitle})]}),t.jsx("div",{className:"flex-1 overflow-y-auto",children:A[y].content})]}),t.jsx("div",{className:"border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("button",{onClick:C,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===0,children:[t.jsx(md,{className:"w-5 h-5"}),"Назад"]}),t.jsx("div",{className:"flex gap-2",children:A.map((q,le)=>t.jsx("button",{onClick:()=>H(le),className:`w-2 h-2 rounded-full transition ${le===y?"bg-blue-600 w-8":"bg-gray-300 hover:bg-gray-400"}`},le))}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{className:"text-sm text-gray-600",children:[y+1," / ",A.length]}),t.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===A.length-1,children:["Далі",t.jsx(fd,{className:"w-5 h-5"})]})]})]})})]})})})},Mf=()=>{const[y,w]=Dl.useState(0),A=[{title:"🐳 Що таке Docker Compose?",slideNumber:"1 / 12",gradient:"from-blue-500 to-cyan-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-red-700 mb-4 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"😫"}),"Проблема: Занадто багато команд!"]}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Запуск PostgreSQL
docker run -d \\
  --name postgres_db \\
  --network app-network \\
  -e POSTGRES_USER=user \\
  -e POSTGRES_PASSWORD=pass \\
  -e POSTGRES_DB=mydb \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15

# Запуск Backend
docker run -d \\
  --name fastapi_backend \\
  --network app-network \\
  -e DATABASE_URL=postgresql://user:pass@postgres_db:5432/mydb \\
  -e SECRET_KEY=secret \\
  --depends-on postgres_db \\  # Не працює в docker run!
  backend-image

# Запуск Frontend
docker run -d \\
  --name vue_frontend \\
  --network app-network \\
  -p 80:80 \\
  --depends-on fastapi_backend \\  # Не працює в docker run!
  frontend-image

# 😱 І це тільки для запуску!
# А якщо треба зупинити? Перезапустити? Rebuild?`})]}),t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsxs("h3",{className:"text-xl font-bold text-green-700 mb-4 flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"✨"}),"Рішення: Docker Compose!"]}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/mydb
      SECRET_KEY: secret
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:

# 🚀 Запуск всього стеку:
# docker-compose up -d`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"✨ Переваги Docker Compose:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Декларативний підхід:"})," описуєте бажаний стан, а не команди"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Одна команда:"})," запускає весь стек (db + backend + frontend)"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Залежності:"})," depends_on гарантує правильний порядок"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Мережі:"})," автоматично створює спільну мережу"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Масштабування:"})," легко додати нові сервіси"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Відтворюваність:"})," однакове середовище для всіх"]})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3 text-lg",children:"🎯 Коли використовувати:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Локальна розробка:"})," запуск повного стеку на dev машині"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Тестування:"})," CI/CD pipeline з multiple сервісами"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Staging:"})," середовище перед production"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Single-server prod:"})," малі проекти на одному сервері"]})]}),t.jsxs("div",{className:"bg-yellow-100 p-3 rounded mt-3 border border-yellow-300",children:[t.jsx("strong",{className:"text-yellow-800",children:"⚠️ Не для масштабованих production!"}),t.jsx("p",{className:"text-xs text-yellow-700 mt-1",children:"Для великих production систем → Kubernetes"})]})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"📊 Порівняння: docker run vs docker-compose"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-red-700",children:"❌ docker run:"}),t.jsxs("ul",{className:"mt-2 space-y-1 text-red-800 text-xs",children:[t.jsx("li",{children:"• Багато окремих команд"}),t.jsx("li",{children:"• Важко керувати залежностями"}),t.jsx("li",{children:"• Треба вручну створювати networks"}),t.jsx("li",{children:"• Складно відтворити на іншій машині"}),t.jsx("li",{children:"• Немає версіонування конфігурації"}),t.jsx("li",{children:"• Важко масштабувати"})]})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-green-700",children:"✅ docker-compose:"}),t.jsxs("ul",{className:"mt-2 space-y-1 text-green-800 text-xs",children:[t.jsx("li",{children:"• Одна команда для всього"}),t.jsx("li",{children:"• Автоматичне управління залежностями"}),t.jsx("li",{children:"• Автоматичне створення networks"}),t.jsx("li",{children:"• Легко поділитися через git"}),t.jsx("li",{children:"• Версіонування через YAML файл"}),t.jsx("li",{children:"• Легко масштабувати та додавати сервіси"})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-green-800 leading-relaxed",children:[t.jsx("strong",{children:"Docker Compose"})," - це інструмент для визначення і запуску multi-container Docker застосунків. Замість десятків команд ",t.jsx("code",{className:"bg-green-200 px-2 py-1 rounded",children:"docker run"}),", ви описуєте всю інфраструктуру в одному YAML файлі і керуєте всім стеком однією командою",t.jsx("code",{className:"bg-green-200 px-2 py-1 rounded",children:"docker-compose up"}),"!"]})]})]})]})},{title:"📁 Структура docker-compose.yml",slideNumber:"2 / 12",gradient:"from-purple-500 to-indigo-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-purple-700 mb-4",children:"📋 Базова структура YAML файлу:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`version: '3.8'
  
  services:
    service1:
      image: example:latest
    service2:
      build: ./path
  
  networks:
    network1:
      driver: bridge
  
  volumes:
    volume1:`})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-blue-700 mb-4",children:"🔍 Повний приклад:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`version: '3.8'
  
  services:
    db:
      image: postgres:15
      container_name: postgres_db
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
      volumes:
        - postgres_data:/var/lib/postgresql/data
      networks:
        - app-network
  
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.prod
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
      depends_on:
        - db
      networks:
        - app-network
  
    frontend:
      build: ./frontend
      ports:
        - "80:80"
      depends_on:
        - backend
      networks:
        - app-network
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data:`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-sm",children:"1️⃣ version"}),t.jsx("p",{className:"text-xs text-green-800",children:"Версія синтаксису Docker Compose. Рекомендується 3.8"})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-sm",children:"2️⃣ services"}),t.jsx("p",{className:"text-xs text-blue-800 mb-2",children:"Список контейнерів. Кожен сервіс = один контейнер."}),t.jsxs("div",{className:"bg-white p-2 rounded text-xs",children:[t.jsx("strong",{children:"Основні параметри:"}),t.jsxs("ul",{className:"mt-1 space-y-1 ml-4",children:[t.jsx("li",{children:"• image - готовий образ"}),t.jsx("li",{children:"• build - з Dockerfile"}),t.jsx("li",{children:"• ports - публічні порти"}),t.jsx("li",{children:"• environment - змінні"}),t.jsx("li",{children:"• volumes - дані"}),t.jsx("li",{children:"• depends_on - залежності"})]})]})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-2 text-sm",children:"3️⃣ networks"}),t.jsx("p",{className:"text-xs text-purple-800",children:"Мережі для з'єднання сервісів між собою"})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4",children:[t.jsx("h4",{className:"font-bold text-orange-700 mb-2 text-sm",children:"4️⃣ volumes"}),t.jsx("p",{className:"text-xs text-orange-800 mb-2",children:"Named volumes для постійного зберігання даних"}),t.jsxs("div",{className:"bg-white p-2 rounded text-xs",children:[t.jsx("strong",{children:"Типи:"}),t.jsxs("ul",{className:"mt-1 space-y-1 ml-4",children:[t.jsx("li",{children:"• Named volume: postgres_data:/data"}),t.jsx("li",{children:"• Bind mount: ./code:/app"})]})]})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"image vs build"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded",children:[t.jsx("strong",{children:"image:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs",children:"image: postgres:15"}),t.jsx("span",{className:"text-xs text-gray-600",children:"Готовий образ з Docker Hub"})]}),t.jsxs("div",{className:"bg-white p-3 rounded",children:[t.jsx("strong",{children:"build:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs",children:`build:
    context: ./backend
    dockerfile: Dockerfile.prod`}),t.jsx("span",{className:"text-xs text-gray-600",children:"Build з Dockerfile"})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-2 text-lg",children:"💡 Важливо:"}),t.jsxs("div",{className:"text-sm text-indigo-800 space-y-1",children:[t.jsx("p",{children:"• Відступи YAML: 2 пробіли"}),t.jsx("p",{children:"• Імена сервісів = hostname в мережі"}),t.jsx("p",{children:"• depends_on чекає запуску, але не готовності"}),t.jsx("p",{children:"• Порти: host:container (80:80)"})]})]})]})},{title:"🔧 docker-compose.dev.yml - Development",slideNumber:"3 / 12",gradient:"from-green-500 to-teal-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-green-700 mb-4",children:"📝 Повна конфігурація для розробки:"}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`version: '3.8'
  
  services:
    # ═══════════════════════════════════════════
    # PostgreSQL Database
    # ═══════════════════════════════════════════
    db:
      image: postgres:15
      container_name: postgres_db_dev
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: mydb
      ports:
        - "5432:5432"  # ← Відкриваємо для прямого доступу!
      volumes:
        - postgres_data_dev:/var/lib/postgresql/data
      networks:
        - app-network
      restart: unless-stopped
  
    # ═══════════════════════════════════════════
    # FastAPI Backend (Development)
    # ═══════════════════════════════════════════
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.dev  # ← Dev версія!
      container_name: fastapi_backend_dev
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
        SECRET_KEY: dev-secret-key-12345
        DEBUG: "true"
      ports:
        - "8000:8000"  # ← Відкриваємо для прямого доступу!
      volumes:
        - ./backend:/app           # ← Hot-reload!
        - /app/__pycache__         # Не перезаписуємо
      networks:
        - app-network
      depends_on:
        - db
      restart: unless-stopped
      command: uvicorn main:app --host 0.0.0.0 --reload  # --reload для hot-reload
  
    # ═══════════════════════════════════════════
    # Vue.js Frontend (Development)
    # ═══════════════════════════════════════════
    frontend:
      build:
        context: ./frontend
        dockerfile: Dockerfile.dev  # ← Dev версія!
      container_name: vue_frontend_dev
      environment:
        VITE_API_BASE: http://localhost:8000  # ← Прямий доступ до backend!
        VITE_ENABLE_DEBUG: "true"
      ports:
        - "5173:5173"  # ← Vite dev server
      volumes:
        - ./frontend:/app          # ← Hot-reload!
        - /app/node_modules        # Не перезаписуємо
      networks:
        - app-network
      depends_on:
        - backend
      restart: unless-stopped
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data_dev:`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-teal-700 mb-3 text-lg",children:"✨ Особливості Development:"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-teal-200",children:[t.jsx("strong",{className:"text-teal-700",children:"1. Всі порти відкриті"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs",children:`ports:
    - "5432:5432"  # PostgreSQL
    - "8000:8000"  # Backend
    - "5173:5173"  # Frontend`}),t.jsx("span",{className:"text-xs text-teal-600",children:"Прямий доступ для debugging"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-teal-200",children:[t.jsx("strong",{className:"text-teal-700",children:"2. Volumes для hot-reload"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs",children:`volumes:
    - ./frontend:/app
    - /app/node_modules`}),t.jsx("span",{className:"text-xs text-teal-600",children:"Синхронізація коду з хостом"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-teal-200",children:[t.jsx("strong",{className:"text-teal-700",children:"3. Debug режим"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs",children:`environment:
    DEBUG: "true"
    VITE_ENABLE_DEBUG: "true"`}),t.jsx("span",{className:"text-xs text-teal-600",children:"Детальні логи та помилки"})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🚀 Команди для роботи:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Запуск development
  docker-compose -f docker-compose.dev.yml up
  
  # У фоновому режимі
  docker-compose -f docker-compose.dev.yml up -d
  
  # З rebuild
  docker-compose -f docker-compose.dev.yml up --build
  
  # Rebuild конкретного сервісу
  docker-compose -f docker-compose.dev.yml build frontend
  
  # Перегляд логів
  docker-compose -f docker-compose.dev.yml logs -f
  
  # Логи одного сервісу
  docker-compose -f docker-compose.dev.yml logs -f backend
  
  # Зупинка
  docker-compose -f docker-compose.dev.yml down
  
  # Зупинка + видалення volumes
  docker-compose -f docker-compose.dev.yml down -v
  
  # Перезапуск сервісу
  docker-compose -f docker-compose.dev.yml restart frontend`})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-yellow-700 mb-3",children:"💾 Volumes - Hot-reload magic:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Bind mount для коду:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`volumes:
    - ./frontend:/app
  
  # Що це означає:
  # ./frontend (на хості) 
  #     ↓
  # /app (в контейнері)
  
  # Зміни в ./frontend автоматично
  # відображаються в /app`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Anonymous volume для node_modules:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`volumes:
    - /app/node_modules
  
  # Захищає node_modules від 
  # перезапису з хоста
  
  # node_modules залишається 
  # тим, що був встановлений
  # в контейнері при build`})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3 text-lg",children:"📍 Доступ до сервісів:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-purple-200",children:[t.jsx("strong",{className:"text-purple-700",children:"Frontend:"}),t.jsx("br",{}),t.jsx("code",{className:"text-purple-600 text-xs",children:"http://localhost:5173"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-gray-600",children:"Vite dev server з HMR"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-purple-200",children:[t.jsx("strong",{className:"text-purple-700",children:"Backend:"}),t.jsx("br",{}),t.jsx("code",{className:"text-purple-600 text-xs",children:"http://localhost:8000"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-gray-600",children:"FastAPI з auto-reload"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-purple-200",children:[t.jsx("strong",{className:"text-purple-700",children:"Database:"}),t.jsx("br",{}),t.jsx("code",{className:"text-purple-600 text-xs",children:"localhost:5432"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-gray-600",children:"Прямий доступ для DBeaver"})]})]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"✅ Переваги для розробки:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"🔥"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Hot-reload:"})," зміни коду автоматично застосовуються"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"🐛"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Debug:"})," прямий доступ до всіх сервісів"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"💾"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Volumes:"})," код синхронізується миттєво"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"📊"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Логи:"})," детальні помилки та trace"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"🗄️"}),t.jsxs("span",{children:[t.jsx("strong",{children:"БД доступна:"})," можна під'єднатися через GUI"]})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3",children:"⚠️ НЕ для Production:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Всі порти відкриті назовні"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Debug режим = більше інформації про помилки"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Використовує Vite dev server, а не Nginx"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Непотрібні volumes підключені"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Менш оптимізований для performance"})]})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-indigo-800 leading-relaxed",children:[t.jsx("code",{className:"bg-indigo-200 px-2 py-1 rounded",children:"docker-compose.dev.yml"})," налаштований для",t.jsx("strong",{children:" максимальної зручності розробки"}),": всі порти відкриті для debugging, volumes синхронізують код для hot-reload, debug режим увімкнений. Одна команда",t.jsx("code",{className:"bg-indigo-200 px-2 py-1 rounded",children:"docker-compose -f docker-compose.dev.yml up"}),"запускає весь стек (БД + Backend + Frontend) з усіма налаштуваннями для розробки!"]})]})]})]})},{title:"🚀 docker-compose.yml - Production",slideNumber:"4 / 12",gradient:"from-red-500 to-pink-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-red-700 mb-4",children:"📝 Повна конфігурація для Production:"}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`version: '3.8'
  
  services:
    db:
      image: postgres:15
      container_name: postgres_db
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: mydb
      volumes:
        - postgres_data:/var/lib/postgresql/data
      networks:
        - app-network
      restart: unless-stopped
      # Порт НЕ відкритий назовні!
  
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.prod
      container_name: fastapi_backend
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
        SECRET_KEY: production-secret-key
      networks:
        - app-network
      depends_on:
        - db
      restart: unless-stopped
      # Порт НЕ відкритий назовні!
  
    frontend:
      build:
        context: ./frontend
        dockerfile: Dockerfile.prod
        args:
          VITE_API_BASE: /api
      container_name: vue_frontend
      ports:
        - "80:80"
      networks:
        - app-network
      depends_on:
        - backend
      restart: unless-stopped
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data:`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"✅ Production особливості:"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{className:"text-green-700",children:"1. Мінімум відкритих портів"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs",children:`# Тільки frontend відкритий
  ports:
    - "80:80"
  
  # Backend і DB - internal only`}),t.jsx("span",{className:"text-xs text-green-600",children:"Безпека через ізоляцію"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{className:"text-green-700",children:"2. Production Dockerfiles"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs",children:`dockerfile: Dockerfile.prod
  
  # Multi-stage build
  # Nginx замість Vite
  # Оптимізовані образи`}),t.jsx("span",{className:"text-xs text-green-600",children:"Мінімальний розмір, максимальна швидкість"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{className:"text-green-700",children:"3. БЕЗ volumes для коду"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs",children:`# НЕ використовуємо:
  # volumes:
  #   - ./backend:/app
  
  # Код вбудований в образ`}),t.jsx("span",{className:"text-xs text-green-600",children:"Іммутабельні контейнери"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[t.jsx("strong",{className:"text-green-700",children:"4. Restart policies"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs",children:`restart: unless-stopped
  
  # Автоматичний перезапуск
  # після збоїв або reboot`}),t.jsx("span",{className:"text-xs text-green-600",children:"Висока доступність"})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🚀 Команди для Production:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Запуск production
  docker-compose up -d
  
  # З rebuild
  docker-compose up --build -d
  
  # Rebuild без кешу
  docker-compose build --no-cache
  
  # Перегляд статусу
  docker-compose ps
  
  # Логи
  docker-compose logs -f
  
  # Логи за останню годину
  docker-compose logs --since 1h
  
  # Зупинка
  docker-compose down
  
  # Зупинка БЕЗ видалення volumes
  # (БД залишається!)
  docker-compose down
  
  # Перезапуск одного сервісу
  docker-compose restart backend
  
  # Масштабування (додати копії)
  docker-compose up -d --scale backend=3`})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-yellow-700 mb-3",children:"🔐 Secrets & Environment variables:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:".env файл (root):"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`# .env
  POSTGRES_PASSWORD=super_secret_pass
  SECRET_KEY=jwt_secret_key_here
  DATABASE_URL=postgresql://user:pass@db/mydb`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Використання в docker-compose:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`environment:
    POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
    SECRET_KEY: \${SECRET_KEY}
  
  # Docker Compose автоматично
  # підставить значення з .env`})]})]}),t.jsxs("div",{className:"bg-red-100 border border-red-300 p-3 rounded mt-3",children:[t.jsx("strong",{className:"text-red-700",children:"⚠️ Важливо:"}),t.jsx("p",{className:"text-xs text-red-700 mt-1",children:"Додайте .env в .gitignore! Ніколи не комітьте паролі в git!"})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3 text-lg",children:"📊 Dev vs Production:"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-purple-100",children:t.jsxs("tr",{children:[t.jsx("th",{className:"p-2 text-left",children:"Параметр"}),t.jsx("th",{className:"p-2 text-left",children:"Development"}),t.jsx("th",{className:"p-2 text-left",children:"Production"})]})}),t.jsxs("tbody",{className:"text-xs",children:[t.jsxs("tr",{className:"border-t",children:[t.jsx("td",{className:"p-2 font-bold",children:"Ports"}),t.jsx("td",{className:"p-2 text-green-700",children:"Всі відкриті (5432, 8000, 5173)"}),t.jsx("td",{className:"p-2 text-blue-700",children:"Тільки 80 (frontend)"})]}),t.jsxs("tr",{className:"border-t bg-purple-50",children:[t.jsx("td",{className:"p-2 font-bold",children:"Volumes"}),t.jsx("td",{className:"p-2 text-green-700",children:"Bind mounts для hot-reload"}),t.jsx("td",{className:"p-2 text-blue-700",children:"Тільки БД (named volume)"})]}),t.jsxs("tr",{className:"border-t",children:[t.jsx("td",{className:"p-2 font-bold",children:"Dockerfile"}),t.jsx("td",{className:"p-2 text-green-700",children:"Dockerfile.dev (Vite server)"}),t.jsx("td",{className:"p-2 text-blue-700",children:"Dockerfile.prod (Nginx)"})]}),t.jsxs("tr",{className:"border-t bg-purple-50",children:[t.jsx("td",{className:"p-2 font-bold",children:"Debug"}),t.jsx("td",{className:"p-2 text-green-700",children:"Увімкнений"}),t.jsx("td",{className:"p-2 text-blue-700",children:"Вимкнений"})]}),t.jsxs("tr",{className:"border-t",children:[t.jsx("td",{className:"p-2 font-bold",children:"Restart"}),t.jsx("td",{className:"p-2 text-green-700",children:"unless-stopped"}),t.jsx("td",{className:"p-2 text-blue-700",children:"unless-stopped"})]}),t.jsxs("tr",{className:"border-t bg-purple-50",children:[t.jsx("td",{className:"p-2 font-bold",children:"Secrets"}),t.jsx("td",{className:"p-2 text-green-700",children:"Прості паролі"}),t.jsx("td",{className:"p-2 text-blue-700",children:"З .env файлу"})]})]})]})})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"📍 Доступ у Production:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-indigo-200",children:[t.jsx("strong",{className:"text-indigo-700",children:"Frontend:"}),t.jsx("br",{}),t.jsx("code",{className:"text-indigo-600 text-xs",children:"http://localhost/"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-green-600",children:"✓ Доступний"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-indigo-200",children:[t.jsx("strong",{className:"text-indigo-700",children:"API через Nginx:"}),t.jsx("br",{}),t.jsx("code",{className:"text-indigo-600 text-xs",children:"http://localhost/api/"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-green-600",children:"✓ Через proxy"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-gray-200",children:[t.jsx("strong",{className:"text-gray-700",children:"Backend + DB:"}),t.jsx("br",{}),t.jsx("code",{className:"text-gray-600 text-xs",children:"Internal only"}),t.jsx("br",{}),t.jsx("span",{className:"text-xs text-red-600",children:"✗ Не доступні ззовні"})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-green-800 leading-relaxed",children:["Production конфігурація оптимізована для ",t.jsx("strong",{children:"безпеки та performance"}),": мінімум відкритих портів, production Dockerfiles з multi-stage build та Nginx, без volumes для коду (іммутабельні контейнери), secrets з .env файлу. Команда ",t.jsx("code",{className:"bg-green-200 px-2 py-1 rounded",children:"docker-compose up -d"}),"запускає весь production-ready стек!"]})]})]})]})},{title:"🔗 Docker Networks",slideNumber:"5 / 12",gradient:"from-indigo-500 to-purple-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-indigo-700 mb-4 text-center",children:"🌐 Як працює Docker Network:"}),t.jsx("div",{className:"bg-white p-6 rounded-lg border-2 border-indigo-300",children:t.jsx("pre",{className:"text-indigo-700 text-xs leading-relaxed",children:`┌─────────────────────────────────────────────────────────────┐
  │                  Docker Network: app-network                │
  │                         (bridge)                            │
  │                                                             │
  │  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
  │  │  Frontend    │    │   Backend    │    │  PostgreSQL  │  │
  │  │  (Nginx)     │◄──►│  (FastAPI)   │◄──►│     (DB)     │  │
  │  │              │    │              │    │              │  │
  │  │ Port: 80     │    │ Internal     │    │ Internal     │  │
  │  └──────┬───────┘    └──────────────┘    └──────────────┘  │
  │         │                                                   │
  │         │  Hostname резолюція:                             │
  │         │  • frontend → 172.20.0.2                         │
  │         │  • backend  → 172.20.0.3                         │
  │         │  • db       → 172.20.0.4                         │
  │         │                                                   │
  └─────────┼───────────────────────────────────────────────────┘
            │
            ↓
      [Host: 80] ← Тільки frontend доступний ззовні`})})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🎯 Як сервіси знаходять один одного:"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{className:"text-blue-700",children:"1. По імені сервісу"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs",children:`# Backend підключається до БД:
  DATABASE_URL=postgresql://user:pass@db:5432/mydb
                                      ↑
                              Ім'я сервісу з docker-compose!`})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{className:"text-blue-700",children:"2. Nginx проксує на backend"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs",children:`# nginx.conf
  location /api/ {
      proxy_pass http://backend:8000;
                        ↑
                Ім'я сервісу з docker-compose!
  }`})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-blue-200",children:[t.jsx("strong",{className:"text-blue-700",children:"3. Внутрішня DNS резолюція"}),t.jsx("p",{className:"text-xs text-blue-600 mt-2",children:'Docker автоматично створює DNS записи для кожного сервісу. Коли контейнер звертається до "db", Docker резолвить це в IP адресу контейнера БД.'})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3 text-lg",children:"✨ Автоматичні можливості:"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Auto-discovery:"})," Сервіси автоматично знаходять один одного по імені"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Ізоляція:"})," Тільки сервіси в одній мережі можуть спілкуватися"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("div",{children:[t.jsx("strong",{children:"DNS:"})," Внутрішній DNS server резолвить імена в IP"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Load balancing:"})," При масштабуванні (scale) автоматично розподіляє навантаження"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("div",{children:[t.jsx("strong",{children:"No port conflicts:"})," Внутрішні порти не конфліктують між контейнерами"]})]})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-purple-700 mb-3",children:"⚙️ Конфігурація мережі в docker-compose:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Створення мережі:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`# В кінці docker-compose.yml
  networks:
    app-network:
      driver: bridge  # Тип мережі
  
  # bridge - default, для одного хоста
  # overlay - для Docker Swarm (multi-host)
  # host - використовує мережу хоста`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Підключення сервісів:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`services:
    backend:
      # ...
      networks:
        - app-network  # Підключаємо до мережі
  
    frontend:
      # ...
      networks:
        - app-network  # Та сама мережа!`})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"📡 Типи Docker Networks:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 text-xs",children:[t.jsxs("div",{className:"bg-white p-3 rounded border border-yellow-200",children:[t.jsx("strong",{className:"text-yellow-700",children:"bridge (default)"}),t.jsx("p",{className:"text-yellow-600 mt-2",children:"Ізольована мережа на одному хості. Контейнери можуть спілкуватися між собою, але ізольовані від інших мереж."}),t.jsx("div",{className:"mt-2 text-green-600",children:"✓ Використовуємо в наших compose файлах"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-yellow-200",children:[t.jsx("strong",{className:"text-yellow-700",children:"host"}),t.jsx("p",{className:"text-yellow-600 mt-2",children:"Контейнер використовує мережу хоста напряму. Немає ізоляції портів."}),t.jsx("div",{className:"mt-2 text-red-600",children:"✗ Рідко використовується"})]}),t.jsxs("div",{className:"bg-white p-3 rounded border border-yellow-200",children:[t.jsx("strong",{className:"text-yellow-700",children:"overlay"}),t.jsx("p",{className:"text-yellow-600 mt-2",children:"Для Docker Swarm. З'єднує контейнери на різних хостах."}),t.jsx("div",{className:"mt-2 text-blue-600",children:"→ Для кластерів"})]})]})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-orange-700 mb-3 text-lg",children:"🔍 Debugging мережі:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Переглянути всі мережі
  docker network ls
  
  # Інспектувати конкретну мережу
  docker network inspect app-network
  
  # Перевірити з'єднання між контейнерами
  docker exec frontend ping backend
  docker exec backend ping db
  
  # Переглянути IP адреси контейнерів
  docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' frontend
  
  # DNS резолюція
  docker exec frontend nslookup backend
  docker exec frontend getent hosts db
  
  # Порти, які слухають контейнери
  docker exec backend netstat -tulpn`})]}),t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-teal-700 mb-3 text-lg",children:"🔀 Множинні мережі (Advanced):"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Можна створити кілька мереж для ізоляції
  networks:
    frontend-network:    # Frontend + Backend
    backend-network:     # Backend + DB
  
  services:
    frontend:
      networks:
        - frontend-network
  
    backend:
      networks:
        - frontend-network  # Доступ від frontend
        - backend-network   # Доступ до db
  
    db:
      networks:
        - backend-network   # Тільки backend може звертатися!
  
  # Frontend НЕ може напряму звертатися до db`}),t.jsxs("div",{className:"bg-teal-100 p-3 rounded mt-3",children:[t.jsx("strong",{className:"text-teal-800",children:"💡 Use case:"}),t.jsx("p",{className:"text-xs text-teal-700 mt-1",children:"Додатковий рівень безпеки - frontend не має прямого доступу до БД"})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-blue-800 leading-relaxed",children:["Docker Compose автоматично створює ",t.jsx("strong",{children:"bridge мережу"})," для всіх сервісів. Кожен сервіс отримує ",t.jsx("strong",{children:"hostname = ім'я сервісу"})," з docker-compose.yml. Внутрішній DNS резолвить імена в IP адреси. Сервіси можуть спілкуватися між собою по іменам (backend → db, frontend → backend), але ізольовані від зовнішнього світу (якщо порти не відкриті через ports). Це забезпечує ",t.jsx("strong",{children:"безпеку та зручність"}),"!"]})]})]})]})},{title:"💾 Volumes & Data Persistence",slideNumber:"6 / 12",gradient:"from-orange-500 to-red-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-red-700 mb-4",children:"❌ Проблема: Контейнери ephemeral (тимчасові)"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-red-800 mb-3",children:"Коли контейнер видаляється, всі дані всередині нього теж видаляються!"}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-3 rounded text-xs leading-relaxed",children:`# Запускаємо PostgreSQL
  docker-compose up -d
  
  # Додаємо дані в БД
  INSERT INTO users ...
  
  # Видаляємо контейнер
  docker-compose down
  
  # Запускаємо знову
  docker-compose up -d
  
  # 😱 Всі дані зникли!`})]}),t.jsxs("div",{className:"bg-white p-4 rounded border border-red-300",children:[t.jsx("strong",{className:"text-red-700",children:"Що відбувається:"}),t.jsxs("div",{className:"mt-3 space-y-2 text-xs",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"📦"}),t.jsx("span",{children:"Контейнер створюється з образу"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"💾"}),t.jsx("span",{children:"Дані пишуться всередину контейнера"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🗑️"}),t.jsx("span",{children:"docker-compose down видаляє контейнер"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"💥"}),t.jsx("span",{className:"text-red-600 font-bold",children:"Всі дані втрачені!"})]})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-green-700 mb-4",children:"✅ Рішення: Docker Volumes"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx("div",{children:t.jsx("pre",{className:"bg-gray-900 text-green-300 p-3 rounded text-xs leading-relaxed",children:`version: '3.8'
  
  services:
    db:
      image: postgres:15
      volumes:
        - postgres_data:/var/lib/postgresql/data
          ↑              ↑
        Named volume   Шлях в контейнері
  
  volumes:
    postgres_data:  # Оголошуємо volume
  
  # Тепер дані зберігаються ПОЗА контейнером!`})}),t.jsxs("div",{className:"bg-white p-4 rounded border border-green-300",children:[t.jsx("strong",{className:"text-green-700",children:"Що відбувається тепер:"}),t.jsxs("div",{className:"mt-3 space-y-2 text-xs",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"📦"}),t.jsx("span",{children:"Контейнер створюється"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"💾"}),t.jsx("span",{children:"Дані пишуться у VOLUME (поза контейнером)"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🗑️"}),t.jsx("span",{children:"docker-compose down видаляє контейнер"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"✅"}),t.jsx("span",{className:"text-green-600 font-bold",children:"Дані залишаються у volume!"})]})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-blue-700 mb-4",children:"📚 Три типи volumes:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-4 rounded border-2 border-green-400",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-2",children:"1️⃣ Named Volume"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded text-xs mt-2",children:`volumes:
    - postgres_data:/data
  
  volumes:
    postgres_data:`}),t.jsxs("div",{className:"mt-3 space-y-1 text-xs",children:[t.jsx("p",{children:t.jsx("strong",{children:"Де зберігається:"})}),t.jsx("p",{className:"text-gray-600",children:"/var/lib/docker/volumes/"}),t.jsx("p",{className:"mt-2",children:t.jsx("strong",{children:"Використання:"})}),t.jsx("p",{className:"text-green-600",children:"✓ БД (PostgreSQL, MySQL)"}),t.jsx("p",{className:"text-green-600",children:"✓ Постійні дані в production"})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded border-2 border-blue-400",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2",children:"2️⃣ Bind Mount"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded text-xs mt-2",children:`volumes:
    - ./frontend:/app
    - ./backend:/app`}),t.jsxs("div",{className:"mt-3 space-y-1 text-xs",children:[t.jsx("p",{children:t.jsx("strong",{children:"Де зберігається:"})}),t.jsx("p",{className:"text-gray-600",children:"На хості (./frontend)"}),t.jsx("p",{className:"mt-2",children:t.jsx("strong",{children:"Використання:"})}),t.jsx("p",{className:"text-blue-600",children:"✓ Development (hot-reload)"}),t.jsx("p",{className:"text-blue-600",children:"✓ Синхронізація коду"})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded border-2 border-purple-400",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-2",children:"3️⃣ Anonymous Volume"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded text-xs mt-2",children:`volumes:
    - /app/node_modules`}),t.jsxs("div",{className:"mt-3 space-y-1 text-xs",children:[t.jsx("p",{children:t.jsx("strong",{children:"Де зберігається:"})}),t.jsx("p",{className:"text-gray-600",children:"Docker створює автоматично"}),t.jsx("p",{className:"mt-2",children:t.jsx("strong",{children:"Використання:"})}),t.jsx("p",{className:"text-purple-600",children:"✓ Захист папок від перезапису"}),t.jsx("p",{className:"text-purple-600",children:"✓ node_modules, __pycache__"})]})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3 text-lg",children:"🎯 Реальний приклад використання:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Development:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`frontend:
    volumes:
      # Bind mount - hot-reload
      - ./frontend:/app
      
      # Anonymous - захист node_modules
      - /app/node_modules
  
  backend:
    volumes:
      - ./backend:/app
      - /app/__pycache__
  
  db:
    volumes:
      # Named - постійні дані БД
      - postgres_data:/var/lib/postgresql/data`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Production:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`frontend:
    # БЕЗ volumes!
    # Код вбудований в образ
  
  backend:
    # БЕЗ volumes!
    # Код вбудований в образ
  
  db:
    volumes:
      # Тільки БД має volume
      - postgres_data:/var/lib/postgresql/data
  
  volumes:
    postgres_data:`})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"🛠️ Команди для роботи з volumes:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Переглянути всі volumes
  docker volume ls
  
  # Інспектувати конкретний volume
  docker volume inspect postgres_data
  
  # Де фізично зберігається volume
  docker volume inspect postgres_data | grep Mountpoint
  
  # Видалити невикористані volumes
  docker volume prune
  
  # Видалити конкретний volume
  docker volume rm postgres_data
  
  # Backup volume
  docker run --rm -v postgres_data:/data -v $(pwd):/backup \\
    alpine tar czf /backup/backup.tar.gz /data
  
  # Restore volume
  docker run --rm -v postgres_data:/data -v $(pwd):/backup \\
    alpine tar xzf /backup/backup.tar.gz -C /
  
  # Видалити контейнери і volumes
  docker-compose down -v  # ← Видалить volumes!
  docker-compose down     # ← Залишить volumes`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"✅ Best Practices:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Named volumes"})," для БД та постійних даних"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Bind mounts"})," тільки в development"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Anonymous volumes"})," для захисту node_modules"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"В production: код в образі, дані у volumes"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Регулярні backups важливих volumes"})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3",children:"⚠️ Увага:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"!"}),t.jsxs("span",{children:[t.jsx("strong",{children:"docker-compose down -v"})," видаляє volumes!"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"!"}),t.jsx("span",{children:"Volumes займають місце на диску - прибирайте старі"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"!"}),t.jsx("span",{children:"БД volumes потребують регулярних backups"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"!"}),t.jsx("span",{children:"Bind mounts мають permissions issues на Linux"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"!"}),t.jsx("span",{children:"НЕ використовуйте bind mounts в production!"})]})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-indigo-800 leading-relaxed",children:[t.jsx("strong",{children:"Volumes"})," зберігають дані поза контейнерами. ",t.jsx("strong",{children:"Named volumes"})," для постійних даних (БД), ",t.jsx("strong",{children:"bind mounts"})," для development (hot-reload),",t.jsx("strong",{children:"anonymous volumes"})," для захисту папок від перезапису. В production: тільки БД має volume, код вбудований в образ. Команда ",t.jsx("strong",{children:"docker-compose down"})," зберігає volumes, ",t.jsx("strong",{children:"docker-compose down -v"})," - видаляє!"]})]})]})]})},{title:"⚙️ Environment Variables & .env файли",slideNumber:"7 / 12",gradient:"from-yellow-500 to-orange-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-yellow-50 border-4 border-yellow-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-yellow-700 mb-4",children:"🤔 Навіщо потрібні Environment Variables?"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-4 rounded border border-red-300",children:[t.jsx("strong",{className:"text-red-700",children:"❌ Погана практика:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs",children:`# Хардкод в коді
  DATABASE_URL = "postgresql://user:pass@db/mydb"
  SECRET_KEY = "my-secret-key"
  
  # Проблеми:
  # - Паролі в git
  # - Не можна змінити без rebuild`})]}),t.jsxs("div",{className:"bg-white p-4 rounded border border-green-300",children:[t.jsx("strong",{className:"text-green-700",children:"✅ Правильно:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs",children:`# Змінні середовища
  DATABASE_URL = os.getenv("DATABASE_URL")
  SECRET_KEY = os.getenv("SECRET_KEY")
  
  # Переваги:
  # - Паролі в .env (не в git)
  # - Можна змінити без rebuild`})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-xl font-bold text-blue-700 mb-3",children:"📝 Структура файлів:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-blue-700",children:".env файл:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs",children:`# .env в root проекту
  POSTGRES_USER=user
  POSTGRES_PASSWORD=secure_pass
  POSTGRES_DB=mydb
  
  SECRET_KEY=jwt_secret_key
  DEBUG=false
  
  VITE_API_BASE=/api`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-blue-700",children:"Структура:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs",children:`project/
  ├── .env
  ├── .env.example
  ├── .gitignore
  ├── docker-compose.yml
  ├── frontend/
  └── backend/`})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"🔧 Використання в docker-compose:"}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-4 rounded text-xs",children:`services:
    db:
      environment:
        POSTGRES_USER: \${POSTGRES_USER}
        POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
  
    backend:
      environment:
        SECRET_KEY: \${SECRET_KEY}
        DEBUG: \${DEBUG}`})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3",children:"🔀 ARG vs ENV:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-3 rounded",children:[t.jsx("strong",{children:"ARG (Build-time):"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2 text-xs",children:`# Dockerfile
  ARG VITE_API_BASE
  ENV VITE_API_BASE=\${VITE_API_BASE}
  
  # docker-compose
  build:
    args:
      VITE_API_BASE: /api`}),t.jsx("p",{className:"text-xs text-purple-600 mt-2",children:"Під час build"})]}),t.jsxs("div",{className:"bg-white p-3 rounded",children:[t.jsx("strong",{children:"ENV (Runtime):"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs",children:`# docker-compose
  environment:
    DATABASE_URL: postgresql://...
    SECRET_KEY: \${SECRET_KEY}`}),t.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"В запущеному контейнері"})]})]})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-orange-700 mb-3",children:"📄 .env.example:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{children:".env.example (комітимо):"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-3 rounded mt-2 text-xs",children:`POSTGRES_USER=user
  POSTGRES_PASSWORD=CHANGE_ME
  POSTGRES_DB=mydb
  SECRET_KEY=GENERATE_KEY
  DEBUG=false`})]}),t.jsxs("div",{children:[t.jsx("strong",{children:".gitignore:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-3 rounded mt-2 text-xs",children:`# Не комітьте!
  .env
  .env.local
  
  # Комітьте template
  # .env.example`})]})]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"✅ Best Practices:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:".env для secrets"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:".env.example як template"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:".env в .gitignore"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Різні .env для dev/prod"})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3",children:"❌ НЕ робіть:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Комітити .env в git"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Хардкодити паролі"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Прості паролі в prod"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2",children:"💡 Підсумок:"}),t.jsx("p",{className:"text-sm text-blue-800",children:"Environment variables дозволяють змінювати конфігурацію без rebuild. .env файл зберігає secrets і НЕ комітиться в git. ARG для build-time, ENV для runtime. Docker Compose автоматично читає .env з root проекту."})]})]})},{title:"⏱️ Depends_on & Service Dependencies",slideNumber:"8 / 12",gradient:"from-pink-500 to-rose-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-red-700 mb-4",children:"❌ Проблема: Неправильний порядок запуску"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-red-700",children:"Що відбувається БЕЗ depends_on:"}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-3 rounded mt-2 text-xs leading-relaxed",children:`# docker-compose up
  
  # Всі сервіси стартують одночасно:
  Starting db... done
  Starting backend... done
  Starting frontend... done
  
  # Backend намагається з'єднатися з БД
  Error: Connection refused (db:5432)
  # БД ще не готова!
  
  # Backend падає з помилкою
  backend exited with code 1`})]}),t.jsxs("div",{className:"bg-white p-4 rounded border border-red-300",children:[t.jsx("strong",{className:"text-red-700",children:"Проблема:"}),t.jsxs("div",{className:"mt-3 space-y-3 text-xs",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🗄️"}),t.jsx("span",{children:"БД починає ініціалізацію (повільно)"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"⚡"}),t.jsx("span",{children:"Backend стартує одразу (швидко)"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"💥"}),t.jsx("span",{className:"text-red-600 font-bold",children:"Backend не може з'єднатися!"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"🔄"}),t.jsx("span",{children:"Контейнер перезапускається, але знову помилка"})]})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-green-700 mb-4",children:"✅ Рішення 1: depends_on (базовий)"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx("div",{children:t.jsx("pre",{className:"bg-gray-900 text-green-300 p-3 rounded text-xs leading-relaxed",children:`version: '3.8'
  
  services:
    db:
      image: postgres:15
      # БД стартує першою
  
    backend:
      build: ./backend
      depends_on:
        - db  # Чекаємо запуску db
  
    frontend:
      build: ./frontend
      depends_on:
        - backend  # Чекаємо запуску backend
  
  # Порядок запуску:
  # 1. db
  # 2. backend (після db)
  # 3. frontend (після backend)`})}),t.jsxs("div",{className:"bg-white p-4 rounded border border-green-300",children:[t.jsx("strong",{className:"text-green-700",children:"Що робить depends_on:"}),t.jsxs("div",{className:"mt-3 space-y-3 text-xs",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"1️⃣"}),t.jsx("span",{children:"Спочатку запускає db"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"2️⃣"}),t.jsx("span",{children:"Потім backend (після запуску db)"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"3️⃣"}),t.jsx("span",{children:"Потім frontend (після запуску backend)"})]}),t.jsxs("div",{className:"mt-4 bg-yellow-100 p-3 rounded border border-yellow-400",children:[t.jsx("strong",{className:"text-yellow-800",children:"⚠️ Але!"}),t.jsxs("p",{className:"text-yellow-700 mt-1",children:["depends_on чекає тільки ЗАПУСКУ контейнера,",t.jsx("br",{}),"а НЕ його готовності!"]})]})]})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"⚠️ Обмеження depends_on:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Що НЕ робить depends_on:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`# depends_on чекає запуску контейнера
  # але НЕ чекає:
  
  # PostgreSQL готова приймати з'єднання?
  # ✗ Може ще ініціалізуватися
  
  # FastAPI готова обробляти запити?
  # ✗ Може ще імпортувати модулі
  
  # Nginx готовий проксувати?
  # ✗ Може ще парсити конфіг`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Часові рамки запуску:"}),t.jsxs("div",{className:"mt-2 space-y-2 text-xs",children:[t.jsxs("div",{className:"bg-white p-2 rounded",children:[t.jsx("strong",{children:"PostgreSQL:"}),t.jsx("br",{}),"Контейнер запустився: 1 сек",t.jsx("br",{}),"БД готова: 5-10 сек"]}),t.jsxs("div",{className:"bg-white p-2 rounded",children:[t.jsx("strong",{children:"FastAPI:"}),t.jsx("br",{}),"Контейнер запустився: 1 сек",t.jsx("br",{}),"App готова: 2-3 сек"]}),t.jsxs("div",{className:"bg-white p-2 rounded",children:[t.jsx("strong",{children:"Nginx:"}),t.jsx("br",{}),"Контейнер запустився: 1 сек",t.jsx("br",{}),"Nginx готовий: 1-2 сек"]})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-blue-700 mb-4",children:"✅ Рішення 2: depends_on + healthcheck (краще)"}),t.jsx("pre",{className:"bg-gray-900 text-blue-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`version: '3.8'
  
  services:
    db:
      image: postgres:15
      # Health check - перевіряє чи БД готова
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U user"]
        interval: 5s      # Перевіряти кожні 5 сек
        timeout: 5s       # Timeout для команди
        retries: 5        # Кількість спроб
        start_period: 10s # Чекати 10 сек перед першою перевіркою
  
    backend:
      build: ./backend
      depends_on:
        db:
          condition: service_healthy  # Чекати ГОТОВНОСТІ!
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
        interval: 10s
        timeout: 5s
        retries: 3
  
    frontend:
      build: ./frontend
      depends_on:
        backend:
          condition: service_healthy
  
  # Тепер чекає ГОТОВНОСТІ, а не тільки запуску!`})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-purple-700 mb-3 text-lg",children:"🏥 Приклади Health Checks:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"PostgreSQL:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`healthcheck:
    test: ["CMD-SHELL", "pg_isready -U user"]
    interval: 5s
    timeout: 5s
    retries: 5`}),t.jsx("strong",{className:"text-purple-700 mt-3 block",children:"MySQL:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`healthcheck:
    test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval: 5s
    timeout: 5s
    retries: 5`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"FastAPI:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`# Потрібен endpoint /health
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
    interval: 10s
    timeout: 5s
    retries: 3`}),t.jsx("strong",{className:"text-purple-700 mt-3 block",children:"Redis:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`healthcheck:
    test: ["CMD", "redis-cli", "ping"]
    interval: 5s
    timeout: 3s
    retries: 5`})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"✅ Рішення 3: wait-for-it скрипт"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-indigo-700",children:"Dockerfile.prod (backend):"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`FROM python:3.11
  
  WORKDIR /app
  
  # Додаємо wait-for-it скрипт
  ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
  RUN chmod +x /wait-for-it.sh
  
  COPY requirements.txt .
  RUN pip install -r requirements.txt
  
  COPY . .
  
  # Чекаємо БД, потім запускаємо
  CMD ["/wait-for-it.sh", "db:5432", "--", "uvicorn", "main:app", "--host", "0.0.0.0"]`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-indigo-700",children:"docker-compose.yml:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-400 p-3 rounded mt-2 text-xs leading-relaxed",children:`services:
    db:
      image: postgres:15
  
    backend:
      build: ./backend
      depends_on:
        - db
      # wait-for-it вбудований в CMD
  
  # Backend почекає поки db:5432 буде доступний
  # І тільки потім запустить uvicorn`}),t.jsxs("div",{className:"mt-3 bg-green-100 p-3 rounded border border-green-400",children:[t.jsx("strong",{className:"text-green-800 text-xs",children:"✓ Переваги:"}),t.jsxs("p",{className:"text-xs text-green-700 mt-1",children:["• Просто впровадити",t.jsx("br",{}),"• Не потрібен health check",t.jsx("br",{}),"• Працює з будь-якими сервісами"]})]})]})]})]}),t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-teal-700 mb-3 text-lg",children:"📊 Порівняння підходів:"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-xs",children:[t.jsx("thead",{className:"bg-teal-100",children:t.jsxs("tr",{children:[t.jsx("th",{className:"p-2 text-left",children:"Підхід"}),t.jsx("th",{className:"p-2 text-left",children:"Складність"}),t.jsx("th",{className:"p-2 text-left",children:"Надійність"}),t.jsx("th",{className:"p-2 text-left",children:"Коли використовувати"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-t",children:[t.jsx("td",{className:"p-2 font-bold",children:"depends_on"}),t.jsx("td",{className:"p-2 text-green-700",children:"✓ Просто"}),t.jsx("td",{className:"p-2 text-yellow-700",children:"⚠️ Середня"}),t.jsx("td",{className:"p-2",children:"Малі проекти, швидкі сервіси"})]}),t.jsxs("tr",{className:"border-t bg-teal-50",children:[t.jsx("td",{className:"p-2 font-bold",children:"+ healthcheck"}),t.jsx("td",{className:"p-2 text-yellow-700",children:"⚠️ Складніше"}),t.jsx("td",{className:"p-2 text-green-700",children:"✓ Висока"}),t.jsx("td",{className:"p-2",children:"Production, критичні сервіси"})]}),t.jsxs("tr",{className:"border-t",children:[t.jsx("td",{className:"p-2 font-bold",children:"wait-for-it"}),t.jsx("td",{className:"p-2 text-green-700",children:"✓ Середня"}),t.jsx("td",{className:"p-2 text-green-700",children:"✓ Висока"}),t.jsx("td",{className:"p-2",children:"Коли немає health endpoint"})]})]})]})})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-orange-700 mb-3 text-lg",children:"🔍 Перевірка статусу:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Переглянути статус health checks
  docker-compose ps
  
  # Детальна інформація
  docker inspect --format='{{.State.Health.Status}}' postgres_db
  
  # Історія health checks
  docker inspect --format='{{json .State.Health}}' postgres_db | jq
  
  # Логи під час запуску
  docker-compose logs -f
  
  # Порядок запуску сервісів
  docker-compose config --services`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"✅ Best Practices:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Завжди використовуйте depends_on"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Додайте healthcheck для БД"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Створіть /health endpoint в API"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Використовуйте restart: unless-stopped"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Тестуйте порядок запуску локально"})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-red-700 mb-3",children:"⚠️ Поширені помилки:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Покладатися тільки на depends_on"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Немає retry логіки в додатку"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Занадто короткий interval для healthcheck"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-red-600",children:"✗"}),t.jsx("span",{children:"Немає start_period для повільних сервісів"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-blue-800 leading-relaxed",children:[t.jsx("strong",{children:"depends_on"})," контролює порядок запуску, але чекає тільки старту контейнера. Для production додайте ",t.jsx("strong",{children:"healthcheck"})," з",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"condition: service_healthy"}),"- це гарантує, що сервіс дійсно готовий. Альтернатива - ",t.jsx("strong",{children:"wait-for-it"}),"скрипт в CMD. Завжди створюйте ",t.jsx("strong",{children:"/health endpoint"})," в API для моніторингу!"]})]})]})]})},{title:"▶️ Команди Docker Compose",slideNumber:"9 / 12",gradient:"from-emerald-500 to-green-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-emerald-50 border-4 border-emerald-500 rounded-xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-xl font-bold text-emerald-700 mb-4",children:"🚀 Основні команди:"}),t.jsx("pre",{className:"bg-gray-900 text-emerald-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Запуск всіх сервісів
  docker-compose up
  
  # Запуск у фоновому режимі (detached)
  docker-compose up -d
  
  # Запуск з rebuild образів
  docker-compose up --build
  
  # Запуск конкретного сервісу
  docker-compose up frontend
  
  # Зупинка всіх сервісів (контейнери залишаються)
  docker-compose stop
  
  # Зупинка та видалення контейнерів
  docker-compose down
  
  # Зупинка + видалення volumes (БД буде очищена!)
  docker-compose down -v
  
  # Зупинка + видалення всього (images також)
  docker-compose down --rmi all`})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-blue-700 mb-3",children:"🔨 Build команди:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Build всіх сервісів
  docker-compose build
  
  # Build без кешу
  docker-compose build --no-cache
  
  # Build конкретного сервісу
  docker-compose build frontend
  
  # Build з іншим compose файлом
  docker-compose -f docker-compose.dev.yml build
  
  # Build і одразу запуск
  docker-compose up --build -d`})]}),t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-purple-700 mb-3",children:"📊 Логи та моніторинг:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Перегляд логів всіх сервісів
  docker-compose logs
  
  # Логи в live режимі (follow)
  docker-compose logs -f
  
  # Логи конкретного сервісу
  docker-compose logs -f frontend
  
  # Останні 100 рядків
  docker-compose logs --tail 100 backend
  
  # Логи за останню годину
  docker-compose logs --since 1h
  
  # Логи кількох сервісів
  docker-compose logs frontend backend
  
  # Переглянути статус сервісів
  docker-compose ps
  
  # Детальна інформація
  docker-compose ps -a`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"⚙️ Управління сервісами:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Перезапуск всіх сервісів
  docker-compose restart
  
  # Перезапуск конкретного сервісу
  docker-compose restart backend
  
  # Зупинити сервіс
  docker-compose stop frontend
  
  # Запустити зупинений сервіс
  docker-compose start frontend
  
  # Пауза (freeze) сервісу
  docker-compose pause backend
  
  # Зняти паузу
  docker-compose unpause backend
  
  # Видалити зупинені контейнери
  docker-compose rm
  
  # Видалити без підтвердження
  docker-compose rm -f`})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-green-700 mb-3",children:"🔧 exec - команди в запущеному контейнері:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded text-xs leading-relaxed",children:`# Зайти в shell контейнера
  docker-compose exec backend sh
  docker-compose exec frontend sh
  
  # Виконати команду
  docker-compose exec backend python manage.py migrate
  docker-compose exec frontend npm run build
  
  # Як root
  docker-compose exec -u root backend sh
  
  # Без TTY (для scripts)
  docker-compose exec -T backend python script.py`})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3",children:"🏃 run - разова команда (новий контейнер):"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-3 rounded text-xs leading-relaxed",children:`# Запустити разову команду
  docker-compose run backend python script.py
  
  # Без залежностей
  docker-compose run --no-deps backend pytest
  
  # Видалити після виконання
  docker-compose run --rm backend pytest
  
  # З іншими змінними
  docker-compose run -e DEBUG=true backend python manage.py shell`})]})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-orange-700 mb-3 text-lg",children:"📈 Масштабування сервісів:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Запустити 3 копії backend
  docker-compose up -d --scale backend=3
  
  # Масштабувати кілька сервісів
  docker-compose up -d --scale backend=3 --scale frontend=2
  
  # Перевірити статус
  docker-compose ps
  
  # Переглянути логи всіх копій
  docker-compose logs -f backend
  
  # Примітка: Не можна масштабувати сервіс з явним container_name
  # Видаліть container_name для масштабування`})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"🔍 Перевірка конфігурації:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Валідація docker-compose.yml
  docker-compose config
  
  # Показати конфігурацію
  docker-compose config --services
  
  # Показати volumes
  docker-compose config --volumes
  
  # Перевірити з іншим файлом
  docker-compose -f docker-compose.dev.yml config
  
  # Показати resolved змінні (.env підставлені)
  docker-compose config`})]}),t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-teal-700 mb-3 text-lg",children:"📂 Робота з множинними файлами:"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# Використати інший файл
  docker-compose -f docker-compose.dev.yml up
  
  # Комбінувати кілька файлів (override)
  docker-compose -f docker-compose.yml -f docker-compose.override.yml up
  
  # Змінна середовища для default файлу
  export COMPOSE_FILE=docker-compose.dev.yml
  docker-compose up
  
  # Порядок пріоритету:
  # 1. docker-compose.yml (base)
  # 2. docker-compose.override.yml (автоматично, якщо існує)
  # 3. docker-compose -f custom.yml (явно вказаний)`})]}),t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-purple-700 mb-3",children:"💡 Корисні комбінації команд:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Швидкий restart з rebuild:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`docker-compose down
  docker-compose up --build -d`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Очистити все і почати заново:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`docker-compose down -v --rmi all
  docker-compose up --build -d`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Перевірити logs під час запуску:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:`docker-compose up
  # Без -d щоб бачити логи`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-purple-700",children:"Backup БД:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:"docker-compose exec db pg_dump -U user mydb > backup.sql"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 border-4 border-blue-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-blue-700 mb-3 text-center",children:"📋 Шпаргалка - найчастіше використовувані:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-3 text-xs",children:[t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-green-700",children:"Запуск:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2",children:"docker-compose up -d"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-blue-700",children:"Логи:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2",children:"docker-compose logs -f"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-purple-700",children:"Статус:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:"docker-compose ps"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-orange-700",children:"Rebuild:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-2 rounded mt-2",children:"docker-compose up --build -d"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-red-700",children:"Зупинка:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-2 rounded mt-2",children:"docker-compose down"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-teal-700",children:"Shell:"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-2 rounded mt-2",children:"docker-compose exec backend sh"})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-indigo-800 leading-relaxed",children:["Docker Compose має команди для всього життєвого циклу: ",t.jsx("strong",{children:"up"})," (запуск),",t.jsx("strong",{children:"down"})," (зупинка), ",t.jsx("strong",{children:"logs"})," (перегляд логів),",t.jsx("strong",{children:"exec"})," (команди в контейнері), ",t.jsx("strong",{children:"build"})," (rebuild образів). Прапор ",t.jsx("strong",{children:"-d"})," для фонового режиму, ",t.jsx("strong",{children:"-f"})," для іншого файлу. Найчастіше використовують: ",t.jsx("code",{className:"bg-indigo-200 px-1 rounded",children:"up -d"}),",",t.jsx("code",{className:"bg-indigo-200 px-1 rounded",children:"logs -f"}),",",t.jsx("code",{className:"bg-indigo-200 px-1 rounded",children:"down"}),"!"]})]})]})]})},{title:"⭐ Best Practices",slideNumber:"10 / 12",gradient:"from-indigo-500 to-purple-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-indigo-700 mb-2",children:"🏆 Найкращі практики Docker Compose"}),t.jsx("p",{className:"text-indigo-600",children:"Перевірені підходи для production-ready проектів"})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-green-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"1️⃣"})," Структура файлів"]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-green-700",children:"✅ Правильно:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs",children:`project/
  ├── docker-compose.yml           # Production
  ├── docker-compose.dev.yml       # Development
  ├── docker-compose.override.yml  # Local overrides
  ├── .env.example                 # Template
  ├── .env                         # Secrets (в .gitignore)
  ├── .dockerignore
  ├── frontend/
  │   ├── Dockerfile.dev
  │   └── Dockerfile.prod
  └── backend/
      ├── Dockerfile.dev
      └── Dockerfile.prod`})]}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Окремі файли для dev і prod"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Override файл для локальних змін"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:".env.example для onboarding команди"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:".dockerignore для швидкого build"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-blue-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"2️⃣"})," Іменування сервісів"]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-red-700",children:"❌ Погано:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs",children:`services:
    container1:
      # Незрозуміло що це
    my-app:
      # Занадто загально
    frontend-production-v2:
      # Занадто специфічно`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-green-700",children:"✅ Добре:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs",children:`services:
    frontend:
      # Зрозуміло і коротко
    backend:
      # Описує призначення
    db:
      # Стандартна назва
    redis:
      # По типу сервісу`})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-purple-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"3️⃣"})," Версіонування образів"]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-red-700",children:"❌ Погано:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs",children:`services:
    db:
      image: postgres
      # Якщо версія зміниться - проблеми!
      
    redis:
      image: redis:latest
      # Latest нестабільний!`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-green-700",children:"✅ Добре:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs",children:`services:
    db:
      image: postgres:15
      # Конкретна версія
      
    redis:
      image: redis:7-alpine
      # Major version + alpine для розміру`})]})]})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-orange-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"4️⃣"})," Health Checks обов'язкові"]}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-4 rounded text-xs",children:`services:
    db:
      image: postgres:15
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U user"]
        interval: 10s
        timeout: 5s
        retries: 5
        start_period: 10s
  
    backend:
      depends_on:
        db:
          condition: service_healthy  # Чекає готовності!
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
        interval: 30s`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-yellow-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"5️⃣"})," Restart Policies"]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Для Production:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs",children:`services:
    backend:
      restart: unless-stopped
      # Перезапуск при падінні
      # Але не після manual stop
  
    db:
      restart: unless-stopped
      # Критичні сервіси`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-yellow-700",children:"Для Development:"}),t.jsx("pre",{className:"bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs",children:`services:
    backend:
      restart: "no"
      # Або unless-stopped
      # Залежить від вподобань
  
    frontend:
      restart: unless-stopped`})]})]})]}),t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-red-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"6️⃣"})," Resources Limits (Production)"]}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-4 rounded text-xs",children:`services:
    backend:
      deploy:
        resources:
          limits:
            cpus: '0.5'      # Макс 50% CPU
            memory: 512M     # Макс 512MB RAM
          reservations:
            cpus: '0.25'     # Мін 25% CPU
            memory: 256M     # Мін 256MB RAM
  
    db:
      deploy:
        resources:
          limits:
            memory: 1G       # БД потребує більше
          reservations:
            memory: 512M`})]}),t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-teal-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"7️⃣"})," Secrets Management"]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("strong",{className:"text-red-700",children:"❌ Ніколи:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs",children:`services:
    backend:
      environment:
        DB_PASSWORD: "hardcoded_pass"
        SECRET_KEY: "12345"
        # Паролі в коді!`})]}),t.jsxs("div",{children:[t.jsx("strong",{className:"text-green-700",children:"✅ Правильно:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs",children:`# .env
  DB_PASSWORD=secure_password
  SECRET_KEY=random_key
  
  # docker-compose.yml
  services:
    backend:
      environment:
        DB_PASSWORD: \${DB_PASSWORD}
        SECRET_KEY: \${SECRET_KEY}`})]})]})]}),t.jsxs("div",{className:"bg-pink-50 border-l-4 border-pink-500 rounded-lg p-5",children:[t.jsxs("h4",{className:"font-bold text-pink-700 mb-3 text-lg flex items-center gap-2",children:[t.jsx("span",{children:"8️⃣"})," Logging Configuration"]}),t.jsx("pre",{className:"bg-gray-900 text-pink-400 p-4 rounded text-xs",children:`services:
    backend:
      logging:
        driver: "json-file"
        options:
          max-size: "10m"      # Макс розмір файлу
          max-file: "3"        # Кількість файлів
          # Запобігає заповненню диску логами
  
    frontend:
      logging:
        driver: "json-file"
        options:
          max-size: "5m"
          max-file: "2"`})]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4 text-center",children:"✅ Production Readiness Checklist:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Окремі compose файли для dev/prod"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Конкретні версії образів (не latest)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Health checks для всіх сервісів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"depends_on з condition: service_healthy"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"restart: unless-stopped"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Resources limits налаштовані"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Secrets в .env (не в git)"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:".env.example створений"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Logging з max-size налаштований"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Named volumes для БД"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"Networks явно створені"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:".dockerignore створений"})]})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-indigo-800 leading-relaxed",children:[t.jsx("strong",{children:"Best practices"})," забезпечують стабільність, безпеку та зручність підтримки. Ключові моменти: окремі файли для dev/prod, конкретні версії образів, health checks, restart policies, resources limits, secrets в .env, logging налаштування. Використовуйте checklist перед deploy в production!"]})]})]})]})},{title:"🔴 Troubleshooting",slideNumber:"11 / 12",gradient:"from-red-500 to-pink-600",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-red-50 border-l-4 border-red-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-red-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔴"})," Сервіс не запускається"]}),t.jsx("pre",{className:"bg-gray-900 text-red-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити статус
  docker-compose ps
  
  # Подивитись логи
  docker-compose logs backend
  
  # Перевірити конфігурацію
  docker-compose config
  
  # Перевірити чи порт вільний
  lsof -i :8000
  netstat -tulpn | grep 8000
  
  # Restart з rebuild
  docker-compose down
  docker-compose up --build -d`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟡"})," Сервіси не бачать один одного"]}),t.jsx("pre",{className:"bg-gray-900 text-yellow-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити мережу
  docker network ls
  docker network inspect project_app-network
  
  # Перевірити чи сервіси в одній мережі
  docker-compose config | grep networks
  
  # Перевірити з'єднання
  docker-compose exec frontend ping backend
  docker-compose exec backend ping db
  
  # Перевірити DNS
  docker-compose exec frontend nslookup backend
  
  # Пересторити мережу
  docker-compose down
  docker network prune
  docker-compose up -d`})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-blue-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔵"})," Backend не може з'єднатися з БД"]}),t.jsx("pre",{className:"bg-gray-900 text-blue-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити чи БД запущена
  docker-compose ps db
  
  # Перевірити health check
  docker inspect --format='{{.State.Health.Status}}' postgres_db
  
  # Перевірити з'єднання з БД
  docker-compose exec backend ping db
  
  # Перевірити змінні середовища
  docker-compose exec backend env | grep DATABASE
  
  # Додати depends_on з condition
  services:
    backend:
      depends_on:
        db:
          condition: service_healthy`})]}),t.jsxs("div",{className:"bg-green-50 border-l-4 border-green-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-green-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟢"})," Volume не зберігає дані"]}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити volumes
  docker volume ls
  
  # Інспектувати volume
  docker volume inspect project_postgres_data
  
  # Перевірити чи volume підключений
  docker-compose config | grep volumes
  
  # Видалити і створити заново
  docker-compose down -v
  docker-compose up -d
  
  # УВАГА: -v видаляє дані!
  # Без -v дані залишаються:
  docker-compose down
  docker-compose up -d`})]}),t.jsxs("div",{className:"bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-purple-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟣"})," Змінні з .env не підставляються"]}),t.jsx("pre",{className:"bg-gray-900 text-purple-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Перевірити чи .env існує
  ls -la .env
  
  # Перевірити синтаксис .env (без пробілів!)
  cat .env
  # Правильно: KEY=value
  # Неправильно: KEY = value
  
  # Перевірити підставлення
  docker-compose config
  
  # Перевірити в контейнері
  docker-compose exec backend env
  
  # Restart після зміни .env
  docker-compose down
  docker-compose up -d`})]}),t.jsxs("div",{className:"bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-orange-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🟠"})," Build fails або дуже повільний"]}),t.jsx("pre",{className:"bg-gray-900 text-orange-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Build без кешу
  docker-compose build --no-cache
  
  # Очистити все
  docker system prune -a
  docker volume prune
  
  # Перевірити .dockerignore
  cat frontend/.dockerignore
  # Має містити:
  # node_modules
  # .git
  # .env
  
  # Rebuild конкретного сервісу
  docker-compose build frontend
  
  # Паралельний build
  docker-compose build --parallel`})]}),t.jsxs("div",{className:"bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-teal-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔷"})," Port already in use"]}),t.jsx("pre",{className:"bg-gray-900 text-teal-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Знайти процес на порту
  lsof -i :80
  lsof -i :8000
  netstat -tulpn | grep 80
  
  # Вбити процес
  kill -9 <PID>
  
  # Або змінити порт в docker-compose.yml
  ports:
    - "8080:80"  # Використовує 8080 замість 80
  
  # Зупинити всі контейнери
  docker stop $(docker ps -aq)`})]}),t.jsxs("div",{className:"bg-pink-50 border-l-4 border-pink-500 rounded-lg p-4",children:[t.jsxs("h4",{className:"font-bold text-pink-800 mb-2 text-sm flex items-center gap-2",children:[t.jsx("span",{children:"🔶"})," Контейнер постійно перезапускається"]}),t.jsx("pre",{className:"bg-gray-900 text-pink-300 p-3 rounded text-xs overflow-x-auto leading-relaxed",children:`# Подивитись логи
  docker-compose logs --tail 50 backend
  
  # Перевірити exit code
  docker-compose ps
  
  # Вимкнути restart для debugging
  services:
    backend:
      restart: "no"
  
  # Запустити вручну для перевірки
  docker-compose run --rm backend sh
  
  # Перевірити CMD в Dockerfile
  docker inspect project_backend | grep -A 5 Cmd`})]}),t.jsxs("div",{className:"bg-indigo-50 border-4 border-indigo-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-indigo-700 mb-3",children:"🛠️ Загальні debugging команди:"}),t.jsx("pre",{className:"bg-gray-900 text-indigo-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`# Статус всіх сервісів
  docker-compose ps
  
  # Логи всіх сервісів
  docker-compose logs -f
  
  # Логи за останні 5 хвилин
  docker-compose logs --since 5m
  
  # Інспектувати контейнер
  docker inspect project_backend
  
  # Статистика ресурсів
  docker stats
  
  # Перевірити файли в контейнері
  docker-compose exec backend ls -la /app
  
  # Перевірити процеси в контейнері
  docker-compose exec backend ps aux
  
  # Тест з'єднання
  docker-compose exec frontend wget -O- http://backend:8000/health
  
  # Повна діагностика мережі
  docker network inspect project_app-network | jq
  
  # Експорт логів у файл
  docker-compose logs > debug.log`})]}),t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-green-700 mb-3",children:"⚡ Швидке вирішення більшості проблем:"}),t.jsx("pre",{className:"bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed",children:`# "Turn it off and on again" для Docker:
  
  # 1. Повна зупинка
  docker-compose down
  
  # 2. Очистити volumes (якщо не критичні дані)
  docker-compose down -v
  
  # 3. Очистити Docker кеш
  docker system prune -a
  
  # 4. Rebuild без кешу
  docker-compose build --no-cache
  
  # 5. Запустити заново
  docker-compose up -d
  
  # 6. Перевірити логи
  docker-compose logs -f
  
  # Це вирішує ~80% проблем! 🎯`})]}),t.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-yellow-700 mb-3 text-lg",children:"❓ Коли питати допомоги:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-yellow-600",children:"1."}),t.jsxs("span",{children:["Зберіть інформацію: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded text-xs",children:"docker-compose logs > logs.txt"})]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-yellow-600",children:"2."}),t.jsxs("span",{children:["Конфігурація: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded text-xs",children:"docker-compose config > config.yml"})]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-yellow-600",children:"3."}),t.jsxs("span",{children:["Статус: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded text-xs",children:"docker-compose ps"})]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-yellow-600",children:"4."}),t.jsxs("span",{children:["Версії: ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded text-xs",children:"docker-compose version"}),", ",t.jsx("code",{className:"bg-yellow-200 px-1 rounded text-xs",children:"docker version"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4",children:[t.jsx("div",{className:"text-3xl",children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-2 text-lg",children:"Підсумок:"}),t.jsxs("p",{className:"text-sm text-blue-800 leading-relaxed",children:["Більшість проблем вирішуються через ",t.jsx("strong",{children:"перегляд логів"})," і",t.jsx("strong",{children:"перевірку конфігурації"}),". Використовуйте",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"docker-compose ps"}),",",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"logs -f"}),",",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"config"}),". Для складних випадків: повне очищення",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"down -v"})," →",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"system prune"})," →",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"build --no-cache"})," →",t.jsx("code",{className:"bg-blue-200 px-1 rounded",children:"up -d"}),"!"]})]})]})]})},{title:"✅ Підсумок & Чеклист",slideNumber:"12 / 12",gradient:"from-green-500 to-emerald-600",content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 shadow-lg text-center",children:[t.jsx("h3",{className:"text-3xl font-bold text-gray-800 mb-3",children:"🎉 Docker Compose освоєно!"}),t.jsx("p",{className:"text-lg text-gray-600",children:"Тепер ви можете керувати multi-container застосунками як про!"})]}),t.jsxs("div",{className:"bg-blue-50 border-4 border-blue-500 rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-blue-700 mb-4 text-center",children:"📚 Що ви навчились:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[t.jsxs("h4",{className:"font-bold text-green-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"📋"})," Основи"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Що таке Docker Compose"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"Структура docker-compose.yml"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"✓"}),t.jsx("span",{children:"services, networks, volumes"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[t.jsxs("h4",{className:"font-bold text-blue-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"🔧"})," Конфігурація"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Dev vs Prod налаштування"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Environment variables"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"✓"}),t.jsx("span",{children:"Depends_on & Health checks"})]})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[t.jsxs("h4",{className:"font-bold text-purple-700 mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"text-xl",children:"⚙️"})," Практика"]}),t.jsxs("div",{className:"space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"Команди Docker Compose"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"Best Practices"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"✓"}),t.jsx("span",{children:"Troubleshooting"})]})]})]})]})]}),t.jsxs("div",{className:"bg-purple-50 border-4 border-purple-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-xl font-bold text-purple-700 mb-4 text-center",children:"🎯 Ваш повний стек тепер:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed",children:`project/
  ├── docker-compose.yml              # Production
  ├── docker-compose.dev.yml          # Development
  ├── .env                            # Secrets
  ├── .env.example                    # Template
  │
  ├── frontend/
  │   ├── Dockerfile.dev              # Vite dev server
  │   ├── Dockerfile.prod             # Nginx + multi-stage
  │   ├── nginx.conf                  # API proxy
  │   └── src/
  │
  ├── backend/
  │   ├── Dockerfile.dev              # FastAPI + hot-reload
  │   ├── Dockerfile.prod             # Optimized
  │   └── main.py
  │
  # Одна команда запускає все:
  docker-compose up -d
  
  # Frontend: http://localhost
  # Backend: internal (через nginx proxy)
  # Database: internal (тільки для backend)`})]}),t.jsxs("div",{className:"bg-green-50 border-4 border-green-500 rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-green-700 mb-4 text-center",children:"✅ Production Readiness Checklist:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-green-700",children:"📁 Структура:"}),t.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:"docker-compose.yml і .dev.yml"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:".env.example створений"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:".env в .gitignore"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-green-600",children:"☐"}),t.jsx("span",{children:".dockerignore налаштований"})]})]})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-blue-700",children:"🔧 Конфігурація:"}),t.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Конкретні версії образів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"Health checks налаштовані"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"depends_on з condition"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"☐"}),t.jsx("span",{children:"restart: unless-stopped"})]})]})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-purple-700",children:"🔒 Безпека:"}),t.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"☐"}),t.jsx("span",{children:"Secrets в .env файлі"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"☐"}),t.jsx("span",{children:"Мінімум відкритих портів"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"☐"}),t.jsx("span",{children:"Resources limits"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-purple-600",children:"☐"}),t.jsx("span",{children:"Logging налаштований"})]})]})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-orange-700",children:"💾 Дані:"}),t.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"☐"}),t.jsx("span",{children:"Named volumes для БД"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"☐"}),t.jsx("span",{children:"Backup стратегія готова"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"☐"}),t.jsx("span",{children:"Networks налаштовані"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-orange-600",children:"☐"}),t.jsx("span",{children:"Протестовано локально"})]})]})]})]})]})]}),t.jsxs("div",{className:"bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-yellow-700 mb-3 text-center",children:"⚡ Команди на кожен день:"}),t.jsxs("div",{className:"grid grid-cols-3 gap-3 text-xs",children:[t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-green-700",children:"🚀 Запуск:"}),t.jsx("pre",{className:"bg-gray-900 text-green-400 p-2 rounded mt-2",children:"docker-compose up -d"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-blue-700",children:"📊 Логи:"}),t.jsx("pre",{className:"bg-gray-900 text-blue-400 p-2 rounded mt-2",children:"docker-compose logs -f"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-purple-700",children:"🔄 Restart:"}),t.jsx("pre",{className:"bg-gray-900 text-purple-400 p-2 rounded mt-2",children:"docker-compose restart"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-orange-700",children:"🔨 Build:"}),t.jsx("pre",{className:"bg-gray-900 text-orange-400 p-2 rounded mt-2",children:"docker-compose build"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-red-700",children:"🛑 Stop:"}),t.jsx("pre",{className:"bg-gray-900 text-red-400 p-2 rounded mt-2",children:"docker-compose down"})]}),t.jsxs("div",{className:"bg-white p-3 rounded shadow",children:[t.jsx("strong",{className:"text-teal-700",children:"💻 Shell:"}),t.jsx("pre",{className:"bg-gray-900 text-teal-400 p-2 rounded mt-2",children:"docker-compose exec backend sh"})]})]})]}),t.jsxs("div",{className:"bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-indigo-700 mb-3 text-lg",children:"📊 docker run vs docker-compose:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white p-4 rounded",children:[t.jsx("strong",{className:"text-red-700",children:"❌ Без Compose:"}),t.jsxs("ul",{className:"mt-2 space-y-1 text-xs text-red-600",children:[t.jsx("li",{children:"• Багато команд docker run"}),t.jsx("li",{children:"• Важко керувати залежностями"}),t.jsx("li",{children:"• Ручне створення networks"}),t.jsx("li",{children:"• Складно відтворити на іншій машині"}),t.jsx("li",{children:"• Немає версіонування"})]})]}),t.jsxs("div",{className:"bg-white p-4 rounded",children:[t.jsx("strong",{className:"text-green-700",children:"✅ З Compose:"}),t.jsxs("ul",{className:"mt-2 space-y-1 text-xs text-green-600",children:[t.jsx("li",{children:"• Одна команда для всього"}),t.jsx("li",{children:"• Автоматичні залежності (depends_on)"}),t.jsx("li",{children:"• Автоматичні networks"}),t.jsx("li",{children:"• YAML файл в git = просто поділитися"}),t.jsx("li",{children:"• Версіонування через git"})]})]})]})]}),t.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5",children:[t.jsx("h4",{className:"font-bold text-blue-700 mb-3 text-lg",children:"🚀 Наступні кроки:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"CI/CD:"})," GitHub Actions, GitLab CI"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Docker Swarm:"})," для кластеризації"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Kubernetes:"})," для великих проектів"]})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Monitoring:"})," Prometheus, Grafana"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Logging:"})," ELK Stack"]})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-600",children:"→"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Security:"})," Docker security best practices"]})]})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 text-center",children:[t.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-3",children:"Вітаємо!"}),t.jsxs("p",{className:"text-lg text-gray-700 mb-4",children:["Тепер ви можете розгортати повний стек",t.jsx("br",{}),t.jsx("strong",{children:"Vue.js + FastAPI + PostgreSQL"}),t.jsx("br",{}),"однією командою!"]}),t.jsx("div",{className:"bg-white inline-block px-6 py-3 rounded-lg shadow-lg",children:t.jsx("code",{className:"text-green-600 text-xl font-bold",children:"docker-compose up -d"})}),t.jsx("p",{className:"text-gray-600 mt-4 text-sm",children:"Docker + Docker Compose = 💪"})]})]})}],f=()=>{w(q=>(q+1)%A.length)},C=()=>{w(q=>(q-1+A.length)%A.length)},H=q=>{w(q)};return t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col",children:t.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:t.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[600px] flex flex-col",children:[t.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:A[y].title}),A[y].subtitle&&t.jsx("p",{className:"text-xl text-gray-600",children:A[y].subtitle})]}),t.jsx("div",{className:"flex-1 overflow-y-auto",children:A[y].content})]}),t.jsx("div",{className:"border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("button",{onClick:C,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===0,children:[t.jsx(md,{className:"w-5 h-5"}),"Назад"]}),t.jsx("div",{className:"flex gap-2",children:A.map((q,le)=>t.jsx("button",{onClick:()=>H(le),className:`w-2 h-2 rounded-full transition ${le===y?"bg-blue-600 w-8":"bg-gray-300 hover:bg-gray-400"}`},le))}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{className:"text-sm text-gray-600",children:[y+1," / ",A.length]}),t.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",disabled:y===A.length-1,children:["Далі",t.jsx(fd,{className:"w-5 h-5"})]})]})]})})]})})})};function Uf(){const[y,w]=Dl.useState(1);return t.jsxs("div",{children:[t.jsxs("div",{className:"bg-gray-800 p-4",children:[t.jsx("h1",{className:"text-2xl font-bold text-white text-center mb-4",children:"Розгортання Full Stack додатку в Docker"}),t.jsxs("div",{className:"flex justify-center gap-4",children:[t.jsxs("button",{onClick:()=>w(1),className:`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${y===1?"bg-blue-600 text-white shadow-lg":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[t.jsx(wx,{className:"w-5 h-5"}),"Backend"]}),t.jsxs("button",{onClick:()=>w(2),className:`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${y===2?"bg-green-600 text-white shadow-lg":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[t.jsx(Of,{className:"w-5 h-5"}),"Frontend"]}),t.jsxs("button",{onClick:()=>w(3),className:`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${y===3?"bg-purple-600 text-white shadow-lg":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[t.jsx(_f,{className:"w-5 h-5"}),"Docker Compose"]})]})]}),y===1&&t.jsx(Rf,{}),y===2&&t.jsx(zf,{}),y===3&&t.jsx(Mf,{})]})}mf.createRoot(document.getElementById("root")).render(t.jsx(af.StrictMode,{children:t.jsx(Uf,{})}));
