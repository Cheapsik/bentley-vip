(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function cS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qf={exports:{}},ae={};var mg;function uS(){if(mg)return ae;mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(U,et,_t){this.props=U,this.context=et,this.refs=y,this.updater=_t||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,et){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,et,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function O(U,et,_t){this.props=U,this.context=et,this.refs=y,this.updater=_t||A}var N=O.prototype=new P;N.constructor=O,R(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(U,et,_t){var At=_t.ref;return{$$typeof:o,type:U,key:et,ref:At!==void 0?At:null,props:_t}}function w(U,et){return C(U.type,et,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function rt(U){var et={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return et[_t]})}var nt=/\/+/g;function pt(U,et){return typeof U=="object"&&U!==null&&U.key!=null?rt(""+U.key):et.toString(36)}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(et){U.status==="pending"&&(U.status="fulfilled",U.value=et)},function(et){U.status==="pending"&&(U.status="rejected",U.reason=et)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,et,_t,At,It){var tt=typeof U;(tt==="undefined"||tt==="boolean")&&(U=null);var ut=!1;if(U===null)ut=!0;else switch(tt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(U.$$typeof){case o:case e:ut=!0;break;case v:return ut=U._init,L(ut(U._payload),et,_t,At,It)}}if(ut)return It=It(U),ut=At===""?"."+pt(U,0):At,F(It)?(_t="",ut!=null&&(_t=ut.replace(nt,"$&/")+"/"),L(It,et,_t,"",function(Ht){return Ht})):It!=null&&(k(It)&&(It=w(It,_t+(It.key==null||U&&U.key===It.key?"":(""+It.key).replace(nt,"$&/")+"/")+ut)),et.push(It)),1;ut=0;var Dt=At===""?".":At+":";if(F(U))for(var kt=0;kt<U.length;kt++)At=U[kt],tt=Dt+pt(At,kt),ut+=L(At,et,_t,tt,It);else if(kt=E(U),typeof kt=="function")for(U=kt.call(U),kt=0;!(At=U.next()).done;)At=At.value,tt=Dt+pt(At,kt++),ut+=L(At,et,_t,tt,It);else if(tt==="object"){if(typeof U.then=="function")return L(ft(U),et,_t,At,It);throw et=String(U),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(U,et,_t){if(U==null)return U;var At=[],It=0;return L(U,At,"","",function(tt){return et.call(_t,tt,It++)}),At}function it(U){if(U._status===-1){var et=U._result;et=et(),et.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=et)}if(U._status===1)return U._result.default;throw U._result}var Mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},St={map:H,forEach:function(U,et,_t){H(U,function(){et.apply(this,arguments)},_t)},count:function(U){var et=0;return H(U,function(){et++}),et},toArray:function(U){return H(U,function(et){return et})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ae.Activity=_,ae.Children=St,ae.Component=x,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(U,et,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=R({},U.props),It=U.key;if(et!=null)for(tt in et.key!==void 0&&(It=""+et.key),et)!j.call(et,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&et.ref===void 0||(At[tt]=et[tt]);var tt=arguments.length-2;if(tt===1)At.children=_t;else if(1<tt){for(var ut=Array(tt),Dt=0;Dt<tt;Dt++)ut[Dt]=arguments[Dt+2];At.children=ut}return C(U.type,It,At)},ae.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ae.createElement=function(U,et,_t){var At,It={},tt=null;if(et!=null)for(At in et.key!==void 0&&(tt=""+et.key),et)j.call(et,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=et[At]);var ut=arguments.length-2;if(ut===1)It.children=_t;else if(1<ut){for(var Dt=Array(ut),kt=0;kt<ut;kt++)Dt[kt]=arguments[kt+2];It.children=Dt}if(U&&U.defaultProps)for(At in ut=U.defaultProps,ut)It[At]===void 0&&(It[At]=ut[At]);return C(U,tt,It)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:h,render:U}},ae.isValidElement=k,ae.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:it}},ae.memo=function(U,et){return{$$typeof:p,type:U,compare:et===void 0?null:et}},ae.startTransition=function(U){var et=z.T,_t={};z.T=_t;try{var At=U(),It=z.S;It!==null&&It(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,Mt)}catch(tt){Mt(tt)}finally{et!==null&&_t.types!==null&&(et.types=_t.types),z.T=et}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(U){return z.H.use(U)},ae.useActionState=function(U,et,_t){return z.H.useActionState(U,et,_t)},ae.useCallback=function(U,et){return z.H.useCallback(U,et)},ae.useContext=function(U){return z.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,et){return z.H.useDeferredValue(U,et)},ae.useEffect=function(U,et){return z.H.useEffect(U,et)},ae.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(U,et,_t){return z.H.useImperativeHandle(U,et,_t)},ae.useInsertionEffect=function(U,et){return z.H.useInsertionEffect(U,et)},ae.useLayoutEffect=function(U,et){return z.H.useLayoutEffect(U,et)},ae.useMemo=function(U,et){return z.H.useMemo(U,et)},ae.useOptimistic=function(U,et){return z.H.useOptimistic(U,et)},ae.useReducer=function(U,et,_t){return z.H.useReducer(U,et,_t)},ae.useRef=function(U){return z.H.useRef(U)},ae.useState=function(U){return z.H.useState(U)},ae.useSyncExternalStore=function(U,et,_t){return z.H.useSyncExternalStore(U,et,_t)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.2.3",ae}var gg;function bh(){return gg||(gg=1,qf.exports=uS()),qf.exports}var Ti=bh();const ct=cS(Ti);var Yf={exports:{}},wo={},Zf={exports:{}},jf={};var _g;function fS(){return _g||(_g=1,(function(o){function e(L,H){var it=L.length;L.push(H);t:for(;0<it;){var Mt=it-1>>>1,St=L[Mt];if(0<l(St,H))L[Mt]=H,L[it]=St,it=Mt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],it=L.pop();if(it!==H){L[0]=it;t:for(var Mt=0,St=L.length,U=St>>>1;Mt<U;){var et=2*(Mt+1)-1,_t=L[et],At=et+1,It=L[At];if(0>l(_t,it))At<St&&0>l(It,_t)?(L[Mt]=It,L[At]=it,Mt=At):(L[Mt]=_t,L[et]=it,Mt=et);else if(At<St&&0>l(It,it))L[Mt]=It,L[At]=it,Mt=At;else break t}}return H}function l(L,H){var it=L.sortIndex-H.sortIndex;return it!==0?it:L.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,E=!1,A=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=L)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(L){if(R=!1,N(L),!A)if(i(m)!==null)A=!0,I||(I=!0,rt());else{var H=i(p);H!==null&&ft(F,H.startTime-L)}}var I=!1,z=-1,j=5,C=-1;function w(){return y?!0:!(o.unstable_now()-C<j)}function k(){if(y=!1,I){var L=o.unstable_now();C=L;var H=!0;try{t:{A=!1,R&&(R=!1,P(z),z=-1),E=!0;var it=S;try{e:{for(N(L),_=i(m);_!==null&&!(_.expirationTime>L&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,S=_.priorityLevel;var St=Mt(_.expirationTime<=L);if(L=o.unstable_now(),typeof St=="function"){_.callback=St,N(L),H=!0;break e}_===i(m)&&r(m),N(L)}else r(m);_=i(m)}if(_!==null)H=!0;else{var U=i(p);U!==null&&ft(F,U.startTime-L),H=!1}}break t}finally{_=null,S=it,E=!1}H=void 0}}finally{H?rt():I=!1}}}var rt;if(typeof O=="function")rt=function(){O(k)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,pt=nt.port2;nt.port1.onmessage=k,rt=function(){pt.postMessage(null)}}else rt=function(){x(k,0)};function ft(L,H){z=x(function(){L(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var it=S;S=H;try{return L()}finally{S=it}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var it=S;S=L;try{return H()}finally{S=it}},o.unstable_scheduleCallback=function(L,H,it){var Mt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Mt+it:Mt):it=Mt,L){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=it+St,L={id:v++,callback:H,priorityLevel:L,startTime:it,expirationTime:St,sortIndex:-1},it>Mt?(L.sortIndex=it,e(p,L),i(m)===null&&L===i(p)&&(R?(P(z),z=-1):R=!0,ft(F,it-Mt))):(L.sortIndex=St,e(m,L),A||E||(A=!0,I||(I=!0,rt()))),L},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(L){var H=S;return function(){var it=S;S=H;try{return L.apply(this,arguments)}finally{S=it}}}})(jf)),jf}var vg;function dS(){return vg||(vg=1,Zf.exports=fS()),Zf.exports}var Kf={exports:{}},wn={};var xg;function hS(){if(xg)return wn;xg=1;var o=bh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},wn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var Sg;function pS(){if(Sg)return Kf.exports;Sg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=hS(),Kf.exports}var yg;function mS(){if(yg)return wo;yg=1;var o=dS(),e=bh(),i=pS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,s=f;break}if(b===s){g=!0,s=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=c;break}if(b===s){g=!0,s=f,a=c;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ft=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Mt=[],St=-1;function U(t){return{current:t}}function et(t){0>St||(t.current=Mt[St],Mt[St]=null,St--)}function _t(t,n){St++,Mt[St]=t.current,t.current=n}var At=U(null),It=U(null),tt=U(null),ut=U(null);function Dt(t,n){switch(_t(tt,n),_t(It,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=B0(n),t=I0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(At),_t(At,t)}function kt(){et(At),et(It),et(tt)}function Ht(t){t.memoizedState!==null&&_t(ut,t);var n=At.current,a=I0(n,t.type);n!==a&&(_t(It,t),_t(At,a))}function de(t){It.current===t&&(et(At),et(It)),ut.current===t&&(et(ut),To._currentValue=it)}var Ke,ge;function he(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+ge}var Re=!1;function se(t,n){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var $=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){$=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){$=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var B=g.split(`
`),Q=b.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===Q.length)for(s=B.length-1,c=Q.length-1;1<=s&&0<=c&&B[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==Q[c]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?he(a):""}function Qe(t,n){switch(t.tag){case 26:case 27:case 5:return he(t.type);case 16:return he("Lazy");case 13:return t.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return he("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Qe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,Et=null,bt=null;function Ft(t){if(typeof Xt=="function"&&ee(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,wt=Math.log,le=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Nt=256,Tt=262144,zt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=yt(s):(g&=b,g!==0?c=yt(g):a||(a=b&~t,a!==0&&(c=yt(a))))):(b=s&~f,b!==0?c=yt(b):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Pt(a),gt=1<<dt;b[dt]=0,B[dt]=-1;var $=Q[dt];if($!==null)for(Q[dt]=null,dt=0;dt<$.length;dt++){var ot=$[dt];ot!==null&&(ot.lane&=-536870913)}a&=~gt}s!==0&&Zo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Zo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function zs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ur(t,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Fs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:lg(t.type))}function Di(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ti=Math.random().toString(36).slice(2),rn="__reactFiber$"+ti,_n="__reactProps$"+ti,_i="__reactContainer$"+ti,Lr="__reactEvents$"+ti,Or="__reactListeners$"+ti,jo="__reactHandles$"+ti,Is="__reactResources$"+ti,er="__reactMarker$"+ti;function Hs(t){delete t[rn],delete t[_n],delete t[Lr],delete t[Or],delete t[jo]}function Sa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[rn])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function ya(t){if(t=t[rn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Is];return n||(n=t[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[er]=!0}var q=new Set,st={};function J(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Gt(t){return Ye.call(Lt,t)?!0:Ye.call(Bt,t)?!1:Ut.test(t)?Lt[t]=!0:(Bt[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){if(!t._valueTracker){var n=Ce(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Ne(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var we=/[\n"\\]/g;function ie(t){return t.replace(we,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,s,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,$t(n)):a!=null?xn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+$t(b):t.removeAttribute("name")}function Xi(t,n,a,s,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xe(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Xe(t)}function xn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ei(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xe(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Pr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Mn(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Mn(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Fr=null;function Fh(t){var n=ya(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));vn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ne(s)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ei(t,!!a.multiple,n,!1)}}}var Xc=!1;function Bh(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var s=t(n);return s}finally{if(Xc=!1,(zr!==null||Fr!==null)&&(Fl(),zr&&(n=zr,t=Fr,Fr=zr=null,Fh(n),t)))for(n=0;n<t.length;n++)Fh(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(qi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Wc=!1}var Ea=null,qc=null,Qo=null;function Ih(){if(Qo)return Qo;var t,n=qc,a=n.length,s,c="value"in Ea?Ea.value:Ea.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Qo=c.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Hh(){return!1}function zn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Hh,this.isPropagationStopped=Hh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=zn(ir),ks=_({},ir,{view:0,detail:0}),ov=zn(ks),Yc,Zc,Xs,el=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Yc=t.screenX-Xs.screenX,Zc=t.screenY-Xs.screenY):Zc=Yc=0,Xs=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Gh=zn(el),lv=_({},el,{dataTransfer:0}),cv=zn(lv),uv=_({},ks,{relatedTarget:0}),jc=zn(uv),fv=_({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=zn(fv),hv=_({},ir,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pv=zn(hv),mv=_({},ir,{data:0}),Vh=zn(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vv[t])?!!n[t]:!1}function Kc(){return xv}var Sv=_({},ks,{key:function(t){if(t.key){var n=gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yv=zn(Sv),Mv=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=zn(Mv),Ev=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),bv=zn(Ev),Tv=_({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=zn(Tv),Rv=_({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=zn(Rv),wv=_({},ir,{newState:0,oldState:0}),Dv=zn(wv),Uv=[9,13,27,32],Qc=qi&&"CompositionEvent"in window,Ws=null;qi&&"documentMode"in document&&(Ws=document.documentMode);var Nv=qi&&"TextEvent"in window&&!Ws,Xh=qi&&(!Qc||Ws&&8<Ws&&11>=Ws),Wh=" ",qh=!1;function Yh(t,n){switch(t){case"keyup":return Uv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Lv(t,n){switch(t){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(qh=!0,Wh);case"textInput":return t=n.data,t===Wh&&qh?null:t;default:return null}}function Ov(t,n){if(Br)return t==="compositionend"||!Qc&&Yh(t,n)?(t=Ih(),Qo=qc=Ea=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xh&&n.locale!=="ko"?null:n.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Pv[t.type]:n==="textarea"}function Kh(t,n,a,s){zr?Fr?Fr.push(s):Fr=[s]:zr=s,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var qs=null,Ys=null;function zv(t){N0(t,0)}function nl(t){var n=nr(t);if(Ne(n))return t}function Qh(t,n){if(t==="change")return n}var Jh=!1;if(qi){var Jc;if(qi){var $c="oninput"in document;if(!$c){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),$c=typeof $h.oninput=="function"}Jc=$c}else Jc=!1;Jh=Jc&&(!document.documentMode||9<document.documentMode)}function tp(){qs&&(qs.detachEvent("onpropertychange",ep),Ys=qs=null)}function ep(t){if(t.propertyName==="value"&&nl(Ys)){var n=[];Kh(n,Ys,t,kc(t)),Bh(zv,n)}}function Fv(t,n,a){t==="focusin"?(tp(),qs=n,Ys=a,qs.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(Ys)}function Iv(t,n){if(t==="click")return nl(n)}function Hv(t,n){if(t==="input"||t==="change")return nl(n)}function Gv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Gv;function Zs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vv=qi&&"documentMode"in document&&11>=document.documentMode,Ir=null,eu=null,js=null,nu=!1;function sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ir==null||Ir!==Kt(s)||(s=Ir,"selectionStart"in s&&tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Zs(js,s)||(js=s,s=Xl(eu,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ir)))}function ar(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},iu={},op={};qi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function rr(t){if(iu[t])return iu[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return iu[t]=n[a];return t}var lp=rr("animationend"),cp=rr("animationiteration"),up=rr("animationstart"),kv=rr("transitionrun"),Xv=rr("transitionstart"),Wv=rr("transitioncancel"),fp=rr("transitionend"),dp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function xi(t,n){dp.set(t,n),J(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Gr=0,ru=0;function al(){for(var t=Gr,n=ru=Gr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&hp(a,c,f)}}function rl(t,n,a,s){ni[Gr++]=t,ni[Gr++]=n,ni[Gr++]=a,ni[Gr++]=s,ru|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function su(t,n,a,s){return rl(t,n,a,s),sl(t)}function sr(t,n){return rl(t,null,null,n),sl(t)}function hp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<vo)throw vo=0,gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function qv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new qv(t,n,a,s)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")ou(t)&&(g=1);else if(typeof t=="string")g=Qx(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=qn(31,a,n,c),t.elementType=C,t.lanes=f,t;case R:return or(a.children,c,f,n);case y:g=8,c|=24;break;case x:return t=qn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case F:return t=qn(13,a,n,c),t.elementType=F,t.lanes=f,t;case I:return t=qn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case P:g=9;break t;case N:g=11;break t;case z:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function or(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function lu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function mp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},gp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var kr=[],Xr=0,ll=null,Ks=0,ai=[],ri=0,ba=null,Ui=1,Ni="";function Zi(t,n){kr[Xr++]=Ks,kr[Xr++]=ll,ll=t,Ks=n}function _p(t,n,a){ai[ri++]=Ui,ai[ri++]=Ni,ai[ri++]=ba,ba=t;var s=Ui;t=Ni;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ui=1<<32-Pt(n)+c|a<<c|s,Ni=f+t}else Ui=1<<f|a<<c|s,Ni=t}function uu(t){t.return!==null&&(Zi(t,1),_p(t,1,0))}function fu(t){for(;t===ll;)ll=kr[--Xr],kr[Xr]=null,Ks=kr[--Xr],kr[Xr]=null;for(;t===ba;)ba=ai[--ri],ai[ri]=null,Ni=ai[--ri],ai[ri]=null,Ui=ai[--ri],ai[ri]=null}function vp(t,n){ai[ri++]=Ui,ai[ri++]=Ni,ai[ri++]=ba,Ui=n.id,Ni=n.overflow,ba=t}var En=null,We=null,xe=!1,Ta=null,si=!1,du=Error(r(519));function Aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ii(n,t)),du}function xp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[_n]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)me(So[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Xi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||z0(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Aa(t,!0)}function Sp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Wr(t){if(t!==En)return!1;if(!xe)return Sp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&We&&Aa(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=W0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=W0(t)}else n===27?(n=We,Ha(t.type)?(t=zf,zf=null,We=t):We=n):We=En?li(t.stateNode.nextSibling):null;return!0}function lr(){We=En=null,xe=!1}function hu(){var t=Ta;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Ta=null),t}function Qs(t){Ta===null?Ta=[t]:Ta.push(t)}var pu=U(null),cr=null,ji=null;function Ra(t,n,a){_t(pu,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=pu.current,et(pu)}function mu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),mu(f.return,a,t),s||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),mu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=c.type;Wn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===ut.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&gu(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){cr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return yp(cr,t)}function ul(t,n){return cr===null&&ur(t),yp(t,n)}function yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,jv=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Yv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&Zv(jv,function(){t.controller.abort()})}var $s=null,vu=0,Yr=0,Zr=null;function Kv(t,n){if($s===null){var a=$s=[];vu=0,Yr=Mf(),Zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vu++,n.then(Mp,Mp),n}function Mp(){if(--vu===0&&$s!==null){Zr!==null&&(Zr.status="fulfilled");var t=$s;$s=null,Yr=0,Zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=L.S;L.S=function(t,n){s0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kv(t,n),Ep!==null&&Ep(t,n)};var fr=U(null);function xu(){var t=fr.current;return t!==null?t:ke.pooledCache}function fl(t,n){n===null?_t(fr,fr.current):_t(fr,n.pool)}function bp(){var t=xu();return t===null?null:{parent:sn._currentValue,pool:t}}var jr=Error(r(460)),Su=Error(r(474)),dl=Error(r(542)),hl={then:function(){}};function Tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw hr=n,jr}}function dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,jr):a}}var hr=null;function Rp(){if(hr===null)throw Error(r(459));var t=hr;return hr=null,t}function Cp(t){if(t===jr||t===dl)throw Error(r(483))}var Kr=null,to=0;function pl(t){var n=to;return to+=1,Kr===null&&(Kr=[]),Ap(Kr,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wp(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Yi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,K,mt){return V===null||V.tag!==6?(V=lu(K,Y.mode,mt),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function B(Y,V,K,mt){var Qt=K.type;return Qt===R?dt(Y,V,K.props.children,mt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&dr(Qt)===V.type)?(V=c(V,K.props),eo(V,K),V.return=Y,V):(V=ol(K.type,K.key,K.props,null,Y.mode,mt),eo(V,K),V.return=Y,V)}function Q(Y,V,K,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=cu(K,Y.mode,mt),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function dt(Y,V,K,mt,Qt){return V===null||V.tag!==7?(V=or(K,Y.mode,mt,Qt),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function gt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lu(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=ol(V.type,V.key,V.props,null,Y.mode,K),eo(K,V),K.return=Y,K;case A:return V=cu(V,Y.mode,K),V.return=Y,V;case j:return V=dr(V),gt(Y,V,K)}if(ft(V)||rt(V))return V=or(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,pl(V),K);if(V.$$typeof===O)return gt(Y,ul(Y,V),K);ml(Y,V)}return null}function $(Y,V,K,mt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:b(Y,V,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?B(Y,V,K,mt):null;case A:return K.key===Qt?Q(Y,V,K,mt):null;case j:return K=dr(K),$(Y,V,K,mt)}if(ft(K)||rt(K))return Qt!==null?null:dt(Y,V,K,mt,null);if(typeof K.then=="function")return $(Y,V,pl(K),mt);if(K.$$typeof===O)return $(Y,V,ul(Y,K),mt);ml(Y,K)}return null}function ot(Y,V,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(K)||null,b(V,Y,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return Y=Y.get(mt.key===null?K:mt.key)||null,B(V,Y,mt,Qt);case A:return Y=Y.get(mt.key===null?K:mt.key)||null,Q(V,Y,mt,Qt);case j:return mt=dr(mt),ot(Y,V,K,mt,Qt)}if(ft(mt)||rt(mt))return Y=Y.get(K)||null,dt(V,Y,mt,Qt,null);if(typeof mt.then=="function")return ot(Y,V,K,pl(mt),Qt);if(mt.$$typeof===O)return ot(Y,V,K,ul(V,mt),Qt);ml(V,mt)}return null}function Vt(Y,V,K,mt){for(var Qt=null,be=null,Zt=V,ce=V=0,ve=null;Zt!==null&&ce<K.length;ce++){Zt.index>ce?(ve=Zt,Zt=null):ve=Zt.sibling;var Te=$(Y,Zt,K[ce],mt);if(Te===null){Zt===null&&(Zt=ve);break}t&&Zt&&Te.alternate===null&&n(Y,Zt),V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te,Zt=ve}if(ce===K.length)return a(Y,Zt),xe&&Zi(Y,ce),Qt;if(Zt===null){for(;ce<K.length;ce++)Zt=gt(Y,K[ce],mt),Zt!==null&&(V=f(Zt,V,ce),be===null?Qt=Zt:be.sibling=Zt,be=Zt);return xe&&Zi(Y,ce),Qt}for(Zt=s(Zt);ce<K.length;ce++)ve=ot(Zt,Y,ce,K[ce],mt),ve!==null&&(t&&ve.alternate!==null&&Zt.delete(ve.key===null?ce:ve.key),V=f(ve,V,ce),be===null?Qt=ve:be.sibling=ve,be=ve);return t&&Zt.forEach(function(Wa){return n(Y,Wa)}),xe&&Zi(Y,ce),Qt}function te(Y,V,K,mt){if(K==null)throw Error(r(151));for(var Qt=null,be=null,Zt=V,ce=V=0,ve=null,Te=K.next();Zt!==null&&!Te.done;ce++,Te=K.next()){Zt.index>ce?(ve=Zt,Zt=null):ve=Zt.sibling;var Wa=$(Y,Zt,Te.value,mt);if(Wa===null){Zt===null&&(Zt=ve);break}t&&Zt&&Wa.alternate===null&&n(Y,Zt),V=f(Wa,V,ce),be===null?Qt=Wa:be.sibling=Wa,be=Wa,Zt=ve}if(Te.done)return a(Y,Zt),xe&&Zi(Y,ce),Qt;if(Zt===null){for(;!Te.done;ce++,Te=K.next())Te=gt(Y,Te.value,mt),Te!==null&&(V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te);return xe&&Zi(Y,ce),Qt}for(Zt=s(Zt);!Te.done;ce++,Te=K.next())Te=ot(Zt,Y,ce,Te.value,mt),Te!==null&&(t&&Te.alternate!==null&&Zt.delete(Te.key===null?ce:Te.key),V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te);return t&&Zt.forEach(function(lS){return n(Y,lS)}),xe&&Zi(Y,ce),Qt}function Ge(Y,V,K,mt){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===R){if(V.tag===7){a(Y,V.sibling),mt=c(V,K.props.children),mt.return=Y,Y=mt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&dr(Qt)===V.type){a(Y,V.sibling),mt=c(V,K.props),eo(mt,K),mt.return=Y,Y=mt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===R?(mt=or(K.props.children,Y.mode,mt,K.key),mt.return=Y,Y=mt):(mt=ol(K.type,K.key,K.props,null,Y.mode,mt),eo(mt,K),mt.return=Y,Y=mt)}return g(Y);case A:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),mt=c(V,K.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}mt=cu(K,Y.mode,mt),mt.return=Y,Y=mt}return g(Y);case j:return K=dr(K),Ge(Y,V,K,mt)}if(ft(K))return Vt(Y,V,K,mt);if(rt(K)){if(Qt=rt(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),te(Y,V,K,mt)}if(typeof K.then=="function")return Ge(Y,V,pl(K),mt);if(K.$$typeof===O)return Ge(Y,V,ul(Y,K),mt);ml(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),mt=c(V,K),mt.return=Y,Y=mt):(a(Y,V),mt=lu(K,Y.mode,mt),mt.return=Y,Y=mt),g(Y)):a(Y,V)}return function(Y,V,K,mt){try{to=0;var Qt=Ge(Y,V,K,mt);return Kr=null,Qt}catch(Zt){if(Zt===jr||Zt===dl)throw Zt;var be=qn(29,Zt,null,Y.mode);return be.lanes=mt,be.return=Y,be}finally{}}}var pr=wp(!0),Dp=wp(!1),Ca=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=sl(t),hp(t,null,a),n}return rl(t,s,n,a),sl(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,zs(t,a)}}function Eu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bu=!1;function io(){if(bu){var t=Zr;if(t!==null)throw t}}function ao(t,n,a,s){bu=!1;var c=t.updateQueue;Ca=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,Q=B.next;B.next=null,g===null?f=Q:g.next=Q,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==g&&(b===null?dt.firstBaseUpdate=Q:b.next=Q,dt.lastBaseUpdate=B))}if(f!==null){var gt=c.baseState;g=0,dt=Q=B=null,b=f;do{var $=b.lane&-536870913,ot=$!==b.lane;if(ot?(_e&$)===$:(s&$)===$){$!==0&&$===Yr&&(bu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=t,te=b;$=n;var Ge=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){gt=Vt.call(Ge,gt,$);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,$=typeof Vt=="function"?Vt.call(Ge,gt,$):Vt,$==null)break t;gt=_({},gt,$);break t;case 2:Ca=!0}}$=b.callback,$!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[$]:ot.push($))}else ot={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(Q=dt=ot,B=gt):dt=dt.next=ot,g|=$;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);dt===null&&(B=gt),c.baseState=B,c.firstBaseUpdate=Q,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Pa|=g,t.lanes=g,t.memoizedState=gt}}function Up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Np(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var Qr=U(null),gl=U(0);function Lp(t,n){t=ra,_t(gl,t),_t(Qr,n),ra=t|n.baseLanes}function Tu(){_t(gl,ra),_t(Qr,Qr.current)}function Au(){ra=gl.current,et(Qr),et(gl)}var Yn=U(null),oi=null;function Ua(t){var n=t.alternate;_t(tn,tn.current&1),_t(Yn,t),oi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(oi=t)}function Ru(t){_t(tn,tn.current),_t(Yn,t),oi===null&&(oi=t)}function Op(t){t.tag===22?(_t(tn,tn.current),_t(Yn,t),oi===null&&(oi=t)):Na()}function Na(){_t(tn,tn.current),_t(Yn,Yn.current)}function Zn(t){et(Yn),oi===t&&(oi=null),et(tn)}var tn=U(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,oe=null,Ie=null,on=null,vl=!1,Jr=!1,mr=!1,xl=0,ro=0,$r=null,Jv=0;function Je(){throw Error(r(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wu(t,n,a,s,c,f){return Qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?_m:Xu,mr=!1,f=a(s,c),mr=!1,Jr&&(f=zp(n,a,s,c)),Pp(t),f}function Pp(t){L.H=lo;var n=Ie!==null&&Ie.next!==null;if(Qi=0,on=Ie=oe=null,vl=!1,ro=0,$r=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&cl(t)&&(ln=!0))}function zp(t,n,a,s){oe=t;var c=0;do{if(Jr&&($r=null),ro=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=vm,f=n(a,s)}while(Jr);return f}function $v(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(oe.flags|=1024),n}function Du(){var t=xl!==0;return xl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nu(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Qi=0,on=Ie=oe=null,Jr=!1,ro=xl=0,$r=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function en(){if(Ie===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,Ie=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,$r===null&&($r=[]),t=Ap($r,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?_m:Xu),t}function yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===O)return bn(t)}throw Error(r(438,String(t)))}function Lu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Ml(t){var n=en();return Ou(n,Ie,t)}function Ou(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,B=null,Q=n,dt=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(_e&gt)===gt:(Qi&gt)===gt){var $=Q.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===Yr&&(dt=!0);else if((Qi&$)===$){Q=Q.next,$===Yr&&(dt=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(b=B=gt,g=f):B=B.next=gt,oe.lanes|=$,Pa|=$;gt=Q.action,mr&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else $={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(b=B=$,g=f):B=B.next=$,oe.lanes|=gt,Pa|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?g=f:B.next=b,!Wn(f,t.memoizedState)&&(ln=!0,dt&&(a=Zr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Pu(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Fp(t,n,a){var s=oe,c=en(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Ie||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Bu(Hp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,ts(9,{destroy:void 0},Ip.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(Qi&127)!==0||Bp(s,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Sl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Vp(t){var n=sr(t,2);n!==null&&Gn(n,t,2)}function zu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),mr){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function kp(t,n,a,s){return t.baseState=a,Ou(t,Ie,typeof s=="function"?s:Ji)}function tx(t,n,a,s,c){if(Tl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var b=a(c,s),B=L.S;B!==null&&B(g,b),Wp(t,n,b)}catch(Q){Fu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,s),Wp(t,n,f)}catch(Q){Fu(t,n,Q)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qp(t,n,s)},function(s){return Fu(t,n,s)}):qp(t,n,a)}function qp(t,n,a){n.status="fulfilled",n.value=a,Yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Xp(t,a)))}function Fu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function jp(t,n){if(xe){var a=ke.formState;if(a!==null){t:{var s=oe;if(xe){if(We){e:{for(var c=We,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=li(c.nextSibling),s=c.data==="F!";break t}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=pm.bind(null,oe,s),s.dispatch=a,s=zu(!1),f=ku.bind(null,oe,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=tx.bind(null,oe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Kp(t){var n=en();return Qp(n,Ie,t)}function Qp(t,n,a){if(n=Ou(t,n,Zp)[0],t=Ml(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=so(n)}catch(g){throw g===jr?dl:g}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ts(9,{destroy:void 0},ex.bind(null,c,a),null)),[s,f,t]}function ex(t,n){t.action=n}function Jp(t){var n=en(),a=Ie;if(a!==null)return Qp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ts(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Sl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function $p(){return en().memoizedState}function El(t,n,a,s){var c=Ln();oe.flags|=t,c.memoizedState=ts(1|n,{destroy:void 0},a,s===void 0?null:s)}function bl(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Ie!==null&&s!==null&&Cu(s,Ie.memoizedState.deps)?c.memoizedState=ts(n,f,a,s):(oe.flags|=t,c.memoizedState=ts(1|n,f,a,s))}function tm(t,n){El(8390656,8,t,n)}function Bu(t,n){bl(2048,8,t,n)}function nx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Sl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=en().memoizedState;return nx({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return bl(4,2,t,n)}function im(t,n){return bl(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rm(t,n,a){a=a!=null?a.concat([t]):null,bl(4,4,am.bind(null,n,t),a)}function Iu(){}function sm(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cu(n,s[1]))return s[0];if(s=t(),mr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s}function Hu(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=l0(),oe.lanes|=t,Pa|=t,a)}function lm(t,n,a,s){return Wn(a,n)?a:Qr.current!==null?(t=Hu(t,a,s),Wn(t,n)||(ln=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=l0(),oe.lanes|=t,Pa|=t,n)}function cm(t,n,a,s,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=L.T,b={};L.T=b,ku(t,!1,n,a);try{var B=c(),Q=L.S;if(Q!==null&&Q(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Qv(B,s);oo(t,n,dt,Qn(t))}else oo(t,n,s,Qn(t))}catch(gt){oo(t,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),L.T=g}}function ix(){}function Gu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=um(t).queue;cm(t,c,n,it,a===null?ix:function(){return fm(t),a(s)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Vu(){return bn(To)}function dm(){return en().memoizedState}function hm(){return en().memoizedState}function ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=wa(a);var s=Da(n,t,a);s!==null&&(Gn(s,n,a),no(s,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function rx(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(t)?mm(n,a):(a=su(t,n,a,s),a!==null&&(Gn(a,t,s),gm(a,n,s)))}function pm(t,n,a){var s=Qn();oo(t,n,a,s)}function oo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(t))mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,g))return rl(t,n,c,0),ke===null&&al(),!1}catch{}finally{}if(a=su(t,n,c,s),a!==null)return Gn(a,t,s),gm(a,n,s),!0}return!1}function ku(t,n,a,s){if(s={lane:2,revertLane:Mf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tl(t)){if(n)throw Error(r(479))}else n=su(t,a,s,2),n!==null&&Gn(n,t,2)}function Tl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function mm(t,n){Jr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,zs(t,a)}}var lo={readContext:bn,use:yl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};lo.useEffectEvent=Je;var _m={readContext:bn,use:yl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(mr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(mr){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=rx.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=pm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(t,n){var a=Ln();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=cm.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,c=Ln();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(_e&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Hp.bind(null,s,f,t),[t]),s.flags|=2048,ts(9,{destroy:void 0},Ip.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=ke.identifierPrefix;if(xe){var a=Ni,s=Ui;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lu,useCacheRefresh:function(){return Ln().memoizedState=ax.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:bn,use:yl,useCallback:sm,useContext:bn,useEffect:Bu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Ml,useRef:$p,useState:function(){return Ml(Ji)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=en();return lm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Ml(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Fp,useId:dm,useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=en();return kp(a,Ie,t,n)},useMemoCache:Lu,useCacheRefresh:hm};Xu.useEffectEvent=em;var vm={readContext:bn,use:yl,useCallback:sm,useContext:bn,useEffect:Bu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Pu,useRef:$p,useState:function(){return Pu(Ji)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=en();return Ie===null?Hu(a,t,n):lm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Pu(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Fp,useId:dm,useHostTransitionStatus:Vu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=en();return Ie!==null?kp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:hm};vm.useEffectEvent=em;function Wu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=wa(s);c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,s),n!==null&&(Gn(n,t,s),no(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=wa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,s),n!==null&&(Gn(n,t,s),no(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=wa(a);s.tag=2,n!=null&&(s.callback=n),n=Da(t,s,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function xm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(c,f):!0}function Sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&qu.enqueueReplaceState(n,n.state,null)}function gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ym(t){il(t)}function Mm(t){console.error(t)}function Em(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function bm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Tm(t){return t=wa(t),t.tag=3,t}function Am(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){bm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){bm(n,a,s),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function sx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Bl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),xf(t,s,c)),!1;case 22:return a.flags|=65536,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),xf(t,s,c)),!1}throw Error(r(435,a.tag))}return xf(t,s,c),Bl(),!1}if(xe)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==du&&(t=Error(r(422),{cause:s}),Qs(ii(t,a)))):(s!==du&&(n=Error(r(423),{cause:s}),Qs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Yu(t.stateNode,s,c),Eu(t,c),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),$e!==4&&($e=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yu(a.stateNode,s,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Tm(c),Am(c,t,a,s),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var Zu=Error(r(461)),ln=!1;function Tn(t,n,a,s){n.child=t===null?Dp(n,null,a,s):pr(n,t.child,a,s)}function Rm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return ur(n),s=wu(t,n,a,g,f,c),b=Du(),t!==null&&!ln?(Uu(t,n,c),$i(t,n,c)):(xe&&b&&uu(n),n.flags|=1,Tn(t,n,s,c),n.child)}function Cm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(t,n,f,s,c)):(t=ol(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(g,s)&&t.ref===n.ref)return $i(t,n,c)}return n.flags|=1,t=Yi(f,s),t.ref=n.ref,t.return=n,n.child=t}function wm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Zs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,nf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,$i(t,n,c)}return ju(t,n,a,s,c)}function Dm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Um(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):Tu(),Op(n);else return s=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(fl(n,f.cachePool),Lp(n,f),Na(),n.memoizedState=null):(t!==null&&fl(n,null),Tu(),Na());return Tn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,s,c){var f=xu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),Tu(),Op(n),t!==null&&qr(t,n,s,!0),n.childLanes=c,null}function Rl(t,n){return n=wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Nm(t,n,a){return pr(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function ox(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,co(null,t);if(Ru(n),(t=We)?(t=X0(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Nm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||qr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=ke,s!==null&&(g=Ur(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,sr(t,g),Gn(s,t,g),Zu;Bl(),n=Nm(t,n,a)}else t=f.treeContext,We=li(g.nextSibling),En=n,xe=!0,Ta=null,si=!1,t!==null&&vp(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=Yi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ju(t,n,a,s,c){return ur(n),a=wu(t,n,a,s,void 0,c),s=Du(),t!==null&&!ln?(Uu(t,n,c),$i(t,n,c)):(xe&&s&&uu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Lm(t,n,a,s,c,f){return ur(n),n.updateQueue=null,a=zp(n,s,a,c),Pp(t),s=Du(),t!==null&&!ln?(Uu(t,n,f),$i(t,n,f)):(xe&&s&&uu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Om(t,n,a,s,c){if(ur(n),n.stateNode===null){var f=Vr,g=a.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},yu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?bn(g):Vr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&qu.enqueueReplaceState(f,f.state,null),ao(n,s,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=gr(a,b);f.props=B;var Q=f.context,dt=a.contextType;g=Vr,typeof dt=="object"&&dt!==null&&(g=bn(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==g)&&Sm(n,f,s,g),Ca=!1;var $=n.memoizedState;f.state=$,ao(n,s,f,c),io(),Q=n.memoizedState,b||$!==Q||Ca?(typeof gt=="function"&&(Wu(n,a,gt,s),Q=n.memoizedState),(B=Ca||xm(n,a,B,s,$,Q,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Mu(t,n),g=n.memoizedProps,dt=gr(a,g),f.props=dt,gt=n.pendingProps,$=f.context,Q=a.contextType,B=Vr,typeof Q=="object"&&Q!==null&&(B=bn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||$!==B)&&Sm(n,f,s,B),Ca=!1,$=n.memoizedState,f.state=$,ao(n,s,f,c),io();var ot=n.memoizedState;g!==gt||$!==ot||Ca||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof b=="function"&&(Wu(n,a,b,s),ot=n.memoizedState),(dt=Ca||xm(n,a,dt,s,$,ot,B)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=pr(n,t.child,null,c),n.child=pr(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=$i(t,n,c),t}function Pm(t,n,a,s){return lr(),n.flags|=256,Tn(t,n,a,s),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:bp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function zm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?Ua(n):Na(),(t=We)?(t=X0(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Aa(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(Na(),c=n.mode,b=wl({mode:"hidden",children:b},c),s=or(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,g,a),n.memoizedState=Ku,co(null,s)):(Ua(n),$u(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),b=s.fallback,c=n.mode,s=wl({mode:"visible",children:s.children},c),b=or(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,pr(n,t.child,null,a),s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,g,a),n.memoizedState=Ku,n=co(null,s));else if(Ua(n),Pf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Qs({value:s,source:null,stack:null}),n=tf(t,n,a)}else if(ln||qr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=ke,g!==null&&(s=Ur(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,sr(t,s),Gn(g,t,s),Zu;Of(b)||Bl(),n=tf(t,n,a)}else Of(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=li(b.nextSibling),En=n,xe=!0,Ta=null,si=!1,t!==null&&vp(n,t),n=$u(n,s.children),n.flags|=4096);return n}return c?(Na(),b=s.fallback,c=n.mode,B=t.child,Q=B.sibling,s=Yi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,Q!==null?b=Yi(Q,b):(b=or(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,co(null,s),s=n.child,b=t.child.memoizedState,b===null?b=Qu(a):(c=b.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=bp(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Ju(t,g,a),n.memoizedState=Ku,co(t.child,s)):(Ua(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return pr(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Bm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,_t(tn,g),Tn(t,n,s,a),s=xe?Ks:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,a,n);else if(t.tag===19)Fm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,s);break;case"together":ef(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function lx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ra(n,sn,t.memoizedState.cache),lr();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(Ua(n),t=$i(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Dm(t,n,a,n.pendingProps);case 24:Ra(n,sn,t.memoizedState.cache)}return $i(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return ln=!1,lx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&_p(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=dr(n.elementType),n.type=t,typeof t=="function")ou(t)?(s=gr(t,s),n.tag=1,n=Om(null,n,t,s,a)):(n.tag=0,n=ju(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Rm(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=Cm(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ju(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=gr(s,n.pendingProps),Om(t,n,s,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),ao(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ra(n,sn,s),s!==f.cache&&gu(n,[sn],a,!0),io(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),Qs(c),n=Pm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=li(t.firstChild),En=n,xe=!0,Ta=null,si=!0,a=Dp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(lr(),s===c){n=$i(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=K0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Wl(tt.current).createElement(a),s[rn]=n,s[_n]=t,An(s,a,t),T(s),n.stateNode=s):n.memoizedState=K0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&xe&&(s=n.stateNode=Y0(n.type,n.pendingProps,tt.current),En=n,si=!0,c=We,Ha(n.type)?(zf=c,We=li(s.firstChild)):We=c),Tn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=We)&&(s=Bx(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,We=li(s.firstChild),si=!1,c=!0):c=!1),c||Aa(n)),Ht(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Uf(c,f)?s=null:g!==null&&Uf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,$v,null,null,a),To._currentValue=c),Cl(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=Ix(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,We=null,t=!0):t=!1),t||Aa(n)),null;case 13:return zm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=pr(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ur(n),c=bn(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return wm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return ox(t,n,a);case 22:return Dm(t,n,a,n.pendingProps);case 24:return ur(n),s=bn(sn),t===null?(c=xu(),c===null&&(c=ke,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},yu(n),Ra(n,sn,c)):((t.lanes&a)!==0&&(Mu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,sn,s)):(s=f.cache,Ra(n,sn,s),s!==c.cache&&gu(n,[sn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function af(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(d0())t.flags|=8192;else throw hr=hl,Su}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!eg(n))if(d0())t.flags|=8192;else throw hr=hl,Su}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,as|=n)}function uo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function cx(t,n,a){var s=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(sn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wr(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ta(n),f!==null?(qe(n),Hm(n,f)):(qe(n),af(n,c,null,s,a))):f?f!==t.memoizedState?(ta(n),qe(n),Hm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ta(n),qe(n),af(n,c,t,s,a)),null;case 27:if(de(n),a=tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=At.current,Wr(n)?xp(n):(t=Y0(c,s,a),n.stateNode=t,ta(n))}return qe(n),null;case 5:if(de(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=At.current,Wr(n))xp(n);else{var g=Wl(tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ta(n)}}return qe(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,Wr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||z0(t.nodeValue,a)),t||Aa(n,!0)}else t=Wl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Wr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Wr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),qe(n),null);case 4:return kt(),t===null&&Af(n.stateNode.containerInfo),qe(n),null;case 10:return Ki(n.type),qe(n),null;case 19:if(et(tn),s=n.memoizedState,s===null)return qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)uo(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,uo(s,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return _t(tn,tn.current&1|2),xe&&Zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Pl&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return qe(n),null}else 2*M()-s.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=tn.current,_t(tn,c?a&1|2:a&1),xe&&Zi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return Zn(n),Au(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(sn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(tn),null;case 4:return kt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Zn(n),Au(),t!==null&&et(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(sn),null;case 25:return null;default:return null}}function Gm(t,n){switch(fu(n),n.tag){case 3:Ki(sn),kt();break;case 26:case 27:case 5:de(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:et(tn);break;case 10:Ki(n.type);break;case 22:case 23:Zn(n),Au(),t!==null&&et(fr);break;case 24:Ki(sn)}}function fo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(b){ze(n,n.return,b)}}function La(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var B=a,Q=b;try{Q()}catch(dt){ze(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){ze(n,n.return,dt)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Np(n,a)}catch(s){ze(t,t.return,s)}}}function km(t,n,a){a.props=gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ze(t,n,c)}}function Li(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Xm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function rf(t,n,a){try{var s=t.stateNode;Nx(s,t.type,a,n),s[_n]=n}catch(c){ze(t,t.return,c)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[rn]=t,n[_n]=a}catch(f){ze(t,t.return,f)}}var ea=!1,cn=!1,lf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,mn=null;function fx(t,n){if(t=t.containerInfo,wf=Jl,t=rp(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,B=-1,Q=0,dt=0,gt=t,$=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(b=g+c),gt!==f||s!==0&&gt.nodeType!==3||(B=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)$=gt,gt=ot;for(;;){if(gt===t)break e;if($===a&&++Q===c&&(b=g),$===f&&++dt===s&&(B=g),(ot=gt.nextSibling)!==null)break;gt=$,$=gt.parentNode}gt=ot}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Jl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=gr(a.type,c);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){ze(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),s&4&&fo(5,a);break;case 1:if(ia(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var c=gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}s&64&&Vm(a),s&512&&ho(a,a.return);break;case 3:if(ia(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Np(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:ia(t,a),n===null&&s&4&&Xm(a),s&512&&ho(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),s&4&&Qm(t,a);break;case 13:ia(t,a),s&4&&Jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Sx.bind(null,a),Hx(t,a))));break;case 22:if(s=a.memoizedState!==null||ea,!s){n=n!==null&&n.memoizedState!==null||cn,c=ea;var f=cn;ea=s,(cn=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ea=c,cn=f}break;case 30:break;default:ia(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function na(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:cn||Li(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Li(a,n);var s=je,c=Fn;Ha(a.type)&&(je=a.stateNode,Fn=!1),na(t,n,a),Mo(a.stateNode),je=s,Fn=c;break;case 5:cn||Li(a,n);case 6:if(s=je,c=Fn,je=null,na(t,n,a),je=s,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,V0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ds(t)):V0(je,a.stateNode));break;case 4:s=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,na(t,n,a),je=s,Fn=c;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),na(t,n,a);break;case 1:cn||(Li(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,na(t,n,a),cn=s;break;default:na(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ds(t)}catch(a){ze(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ds(t)}catch(a){ze(n,n.return,a)}}function dx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ym),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=dx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=yx.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){je=b.stateNode,Fn=!1;break t}break;case 5:je=b.stateNode,Fn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(je===null)throw Error(r(160));Km(f,g,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var Si=null;function $m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),s&4&&(La(3,t,t.return),fo(3,t),La(5,t,t.return));break;case 1:Bn(n,t),In(t),s&512&&(cn||a===null||Li(a,a.return)),s&64&&ea&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Bn(n,t),In(t),s&512&&(cn||a===null||Li(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[rn]=t,T(f),s=f;break t;case"link":var g=$0("link","href",c).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(g=$0("meta","content",c).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,T(f),s=f}t.stateNode=s}else tg(c,t.type,t.stateNode);else t.stateNode=J0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?tg(c,t.type,t.stateNode):J0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),s&512&&(cn||a===null||Li(a,a.return)),a!==null&&s&4&&rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),s&512&&(cn||a===null||Li(a,a.return)),t.flags&32){c=t.stateNode;try{fn(c,"")}catch(Vt){ze(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,rf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(lf=!0);break;case 6:if(Bn(n,t),In(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){ze(t,t.return,Vt)}}break;case 3:if(Zl=null,c=Si,Si=ql(n.containerInfo),Bn(n,t),Si=c,In(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Vt){ze(t,t.return,Vt)}lf&&(lf=!1,t0(t));break;case 4:s=Si,Si=ql(t.stateNode.containerInfo),Bn(n,t),In(t),Si=s;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=ea,dt=cn;if(ea=Q||c,cn=dt||B,Bn(n,t),cn=dt,ea=Q,In(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ea||cn||_r(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=B.stateNode;var gt=B.memoizedProps.style,$=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Vt){ze(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Vt){ze(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?k0(ot,!0):k0(B.stateNode,!1)}catch(Vt){ze(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);Ul(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var b=sf(t);Ul(t,b,g);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=sf(t);of(t,Q,B);break;default:throw Error(r(161))}}catch(dt){ze(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_r(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),_r(n);break;case 27:Mo(n.stateNode);case 26:case 5:Li(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),fo(4,f);break;case 1:if(aa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Up(B[c],b)}catch(Q){ze(s,s.return,Q)}}a&&g&64&&Vm(f),ho(f,f.return);break;case 27:qm(f);case 26:case 5:aa(c,f,a),a&&s===null&&g&4&&Xm(f),ho(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&g&4&&Qm(c,f);break;case 13:aa(c,f,a),a&&g&4&&Jm(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),ho(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e0(t,n,a,s),n=n.sibling}function e0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&fo(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):po(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,es(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(g,n);break;case 24:yi(t,n,a,s),c&2048&&uf(n.alternate,n);break;default:yi(t,n,a,s)}}function es(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,B=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:es(f,g,b,B,c),fo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?es(f,g,b,B,c):po(f,g):(dt._visibility|=2,es(f,g,b,B,c)),c&&Q&2048&&cf(g.alternate,g);break;case 24:es(f,g,b,B,c),c&&Q&2048&&uf(g.alternate,g);break;default:es(f,g,b,B,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&cf(s.alternate,s);break;case 24:po(a,s),c&2048&&uf(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function ns(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)n0(t,n,a),t=t.sibling}function n0(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&mo&&t.memoizedState!==null&&Jx(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var s=Si;Si=ql(t.stateNode.containerInfo),ns(t,n,a),Si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=mo,mo=16777216,ns(t,n,a),mo=s):ns(t,n,a));break;default:ns(t,n,a)}}function i0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,r0(s,t)}i0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a0(t),t=t.sibling}function a0(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&La(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):go(t);break;default:go(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,r0(s,t)}i0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function r0(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(jm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var hx={getCacheForType:function(t){var n=bn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},px=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,pe=null,_e=0,Pe=0,jn=null,Oa=!1,is=!1,ff=!1,ra=0,$e=0,Pa=0,vr=0,df=0,Kn=0,as=0,_o=null,Hn=null,hf=!1,Ol=0,s0=0,Pl=1/0,zl=null,za=null,dn=0,Fa=null,rs=null,sa=0,pf=0,mf=null,o0=null,vo=0,gf=null;function Qn(){return(De&2)!==0&&_e!==0?_e&-_e:L.T!==null?Mf():Bs()}function l0(){if(Kn===0)if((_e&536870912)===0||xe){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Gn(t,n,a){(t===ke&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Ba(t,_e,Kn,!1)),Cn(t,a),((De&2)===0||t!==ke)&&(t===ke&&((De&2)===0&&(vr|=a),$e===4&&Ba(t,_e,Kn,!1)),Oi(t))}function c0(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),c=s?_x(t,n):vf(t,n,!0),f=s;do{if(c===0){is&&!s&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!mx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=_o;var B=b.current.memoizedState.isDehydrated;if(B&&(ss(b,g).flags|=256),g=vf(b,g,!1),g!==2){if(ff&&!B){b.errorRecoveryDisabledLanes|=f,vr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ss(t,0),Ba(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(s,n,Kn,!Oa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ol+300-M(),10<c)){if(Ba(s,n,Kn,!Oa),vt(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=H0(u0.bind(null,s,a,Hn,zl,hf,n,Kn,vr,as,Oa,f,"Throttled",-0,0),c);break t}u0(s,a,Hn,zl,hf,n,Kn,vr,as,Oa,f,null,-0,0)}}break}while(!0);Oi(t)}function u0(t,n,a,s,c,f,g,b,B,Q,dt,gt,$,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},n0(n,f,gt);var Vt=(f&62914560)===f?Ol-M():(f&4194048)===f?s0-M():0;if(Vt=$x(gt,Vt),Vt!==null){sa=f,t.cancelPendingCommit=Vt(v0.bind(null,t,n,f,a,s,c,g,b,B,dt,gt,null,$,ot)),Ba(t,f,g,!Q);return}}v0(t,n,f,a,s,c,g,b,B)}function mx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,s){n&=~df,n&=~vr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Zo(t,a,n)}function Fl(){return(De&6)===0?(xo(0),!1):!0}function _f(){if(pe!==null){if(Pe===0)var t=pe.return;else t=pe,ji=cr=null,Nu(t),Kr=null,to=0,t=pe;for(;t!==null;)Gm(t.alternate,t),t=t.return;pe=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,_f(),ke=t,pe=a=Yi(t.current,null),_e=n,Pe=0,jn=null,Oa=!1,is=Rt(t,n),ff=!1,as=Kn=df=vr=Pa=$e=0,Hn=_o=null,hf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return ra=n,al(),a}function f0(t,n){oe=null,L.H=lo,n===jr||n===dl?(n=Rp(),Pe=3):n===Su?(n=Rp(),Pe=4):Pe=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,pe===null&&($e=1,Al(t,ii(n,t.current)))}function d0(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function h0(){var t=L.H;return L.H=lo,t===null?lo:t}function p0(){var t=L.A;return L.A=hx,t}function Bl(){$e=4,Oa||(_e&4194048)!==_e&&Yn.current!==null||(is=!0),(Pa&134217727)===0&&(vr&134217727)===0||ke===null||Ba(ke,_e,Kn,!1)}function vf(t,n,a){var s=De;De|=2;var c=h0(),f=p0();(ke!==t||_e!==n)&&(zl=null,ss(t,n)),n=!1;var g=$e;t:do try{if(Pe!==0&&pe!==null){var b=pe,B=jn;switch(Pe){case 8:_f(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=Pe;if(Pe=0,jn=null,os(t,b,B,Q),a&&is){g=0;break t}break;default:Q=Pe,Pe=0,jn=null,os(t,b,B,Q)}}gx(),g=$e;break}catch(dt){f0(t,dt)}while(!0);return n&&t.shellSuspendCounter++,ji=cr=null,De=s,L.H=c,L.A=f,pe===null&&(ke=null,_e=0,al()),g}function gx(){for(;pe!==null;)m0(pe)}function _x(t,n){var a=De;De|=2;var s=h0(),c=p0();ke!==t||_e!==n?(zl=null,Pl=M()+500,ss(t,n)):is=Rt(t,n);t:do try{if(Pe!==0&&pe!==null){n=pe;var f=jn;e:switch(Pe){case 1:Pe=0,jn=null,os(t,n,f,1);break;case 2:case 9:if(Tp(f)){Pe=0,jn=null,g0(n);break}n=function(){Pe!==2&&Pe!==9||ke!==t||(Pe=7),Oi(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Tp(f)?(Pe=0,jn=null,g0(n)):(Pe=0,jn=null,os(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?eg(g):b.stateNode.complete){Pe=0,jn=null;var B=b.sibling;if(B!==null)pe=B;else{var Q=b.return;Q!==null?(pe=Q,Il(Q)):pe=null}break e}}Pe=0,jn=null,os(t,n,f,5);break;case 6:Pe=0,jn=null,os(t,n,f,6);break;case 8:_f(),$e=6;break t;default:throw Error(r(462))}}vx();break}catch(dt){f0(t,dt)}while(!0);return ji=cr=null,L.H=s,L.A=c,De=a,pe!==null?0:(ke=null,_e=0,al(),$e)}function vx(){for(;pe!==null&&!Yt();)m0(pe)}function m0(t){var n=Im(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Il(t):pe=n}function g0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Nu(n);default:Gm(a,n),n=pe=pp(n,ra),n=Im(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Il(t):pe=n}function os(t,n,a,s){ji=cr=null,Nu(n),Kr=null,to=0;var c=n.return;try{if(sx(t,c,n,a,_e)){$e=1,Al(t,ii(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;$e=1,Al(t,ii(a,t.current)),pe=null;return}n.flags&32768?(xe||s===1?t=!0:is||(_e&536870912)!==0?t=!1:(Oa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_0(n,t)):Il(n)}function Il(t){var n=t;do{if((n.flags&32768)!==0){_0(n,Oa);return}t=n.return;var a=cx(n.alternate,n,ra);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);$e===0&&($e=5)}function _0(t,n){do{var a=ux(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);$e=6,pe=null}function v0(t,n,a,s,c,f,g,b,B){t.cancelPendingCommit=null;do Hl();while(dn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ru,gi(t,a,f,g,b,B),t===ke&&(pe=ke=null,_e=0),rs=n,Fa=t,sa=a,pf=f,mf=c,o0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Mx(lt,function(){return E0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=H.p,H.p=2,g=De,De|=4;try{fx(t,n,a)}finally{De=g,H.p=c,L.T=s}}dn=1,x0(),S0(),y0()}}function x0(){if(dn===1){dn=0;var t=Fa,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var c=De;De|=4;try{$m(n,t);var f=Df,g=rp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&ap(b.ownerDocument.documentElement,b)){if(B!==null&&tu(b)){var Q=B.start,dt=B.end;if(dt===void 0&&(dt=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(dt,b.value.length);else{var gt=b.ownerDocument||document,$=gt&&gt.defaultView||window;if($.getSelection){var ot=$.getSelection(),Vt=b.textContent.length,te=Math.min(B.start,Vt),Ge=B.end===void 0?te:Math.min(B.end,Vt);!ot.extend&&te>Ge&&(g=Ge,Ge=te,te=g);var Y=ip(b,te),V=ip(b,Ge);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>Ge?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(gt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var mt=gt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Jl=!!wf,Df=wf=null}finally{De=c,H.p=s,L.T=a}}t.current=n,dn=2}}function S0(){if(dn===2){dn=0;var t=Fa,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var c=De;De|=4;try{Zm(t,n.alternate,n)}finally{De=c,H.p=s,L.T=a}}dn=3}}function y0(){if(dn===4||dn===3){dn=0,D();var t=Fa,n=rs,a=sa,s=o0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,rs=Fa=null,M0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(za=null),Nr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=H.p,H.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{L.T=n,H.p=c}}(sa&3)!==0&&Hl(),Oi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?vo++:(vo=0,gf=t):vo=0,xo(0)}}function M0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Hl(){return x0(),S0(),y0(),E0()}function E0(){if(dn!==5)return!1;var t=Fa,n=pf;pf=0;var a=Nr(sa),s=L.T,c=H.p;try{H.p=32>a?32:a,L.T=null,a=mf,mf=null;var f=Fa,g=sa;if(dn=0,rs=Fa=null,sa=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,a0(f.current),e0(f,f.current,g,a),De=b,xo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{H.p=c,L.T=s,M0(t,n)}}function b0(t,n,a){n=ii(a,n),n=Yu(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Cn(t,2),Oi(t))}function ze(t,n,a){if(t.tag===3)b0(t,t,a);else for(;n!==null;){if(n.tag===3){b0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){t=ii(a,t),a=Tm(2),s=Da(n,a,2),s!==null&&(Am(a,s,n,t),Cn(s,2),Oi(s));break}}n=n.return}}function xf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ff=!0,c.add(a),t=xx.bind(null,t,n,a),n.then(t,t))}function xx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>M()-Ol?(De&2)===0&&ss(t,0):df|=a,as===_e&&(as=0)),Oi(t)}function T0(t,n){n===0&&(n=Le()),t=sr(t,n),t!==null&&(Cn(t,n),Oi(t))}function Sx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),T0(t,a)}function yx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),T0(t,a)}function Mx(t,n){return ye(t,n)}var Gl=null,ls=null,Sf=!1,Vl=!1,yf=!1,Ia=0;function Oi(t){t!==ls&&t.next===null&&(ls===null?Gl=ls=t:ls=ls.next=t),Vl=!0,Sf||(Sf=!0,bx())}function xo(t,n){if(!yf&&Vl){yf=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,w0(s,f))}else f=_e,f=vt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,w0(s,f));s=s.next}while(a);yf=!1}}function Ex(){A0()}function A0(){Vl=Sf=!1;var t=0;Ia!==0&&Ox()&&(t=Ia);for(var n=M(),a=null,s=Gl;s!==null;){var c=s.next,f=R0(s,n);f===0?(s.next=null,a===null?Gl=c:a.next=c,c===null&&(ls=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=c}dn!==0&&dn!==5||xo(t),Ia!==0&&(Ia=0)}function R0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),b=1<<g,B=c[g];B===-1?((b&a)===0||(b&s)!==0)&&(c[g]=ne(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=ke,a=_e,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Nr(a)){case 2:case 8:a=xt;break;case 32:a=lt;break;case 268435456:a=Ct;break;default:a=lt}return s=C0.bind(null,t),a=ye(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function C0(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=_e;return s=vt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(c0(t,s,n),R0(t,M()),t.callbackNode!=null&&t.callbackNode===a?C0.bind(null,t):null)}function w0(t,n){if(Hl())return null;c0(t,n,!0)}function bx(){zx(function(){(De&6)!==0?ye(ht,Ex):A0()})}function Mf(){if(Ia===0){var t=Yr;t===0&&(t=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ia=t}return Ia}function D0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function U0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Tx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=D0((c[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?D0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new tl("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ia!==0){var B=g?U0(c,g):new FormData(c);Gu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=g?U0(c,g):new FormData(c),Gu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var bf=au[Ef],Ax=bf.toLowerCase(),Rx=bf[0].toUpperCase()+bf.slice(1);xi(Ax,"on"+Rx)}xi(lp,"onAnimationEnd"),xi(cp,"onAnimationIteration"),xi(up,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(kv,"onTransitionRun"),xi(Xv,"onTransitionStart"),xi(Wv,"onTransitionCancel"),xi(fp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function N0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],B=b.instance,Q=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(b=s[g],B=b.instance,Q=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=B}}}}function me(t,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=t+"__bubble";a.has(s)||(L0(n,t,2,!1),a.add(s))}function Tf(t,n,a){var s=0;n&&(s|=4),L0(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[kl]){t[kl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Tf("selectionchange",!1,n))}}function L0(t,n,a,s){switch(lg(n)){case 2:var c=nS;break;case 8:c=iS;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Sa(b),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}b=b.parentNode}}s=s.return}Bh(function(){var Q=f,dt=kc(a),gt=[];t:{var $=dp.get(t);if($!==void 0){var ot=tl,Vt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=yv;break;case"focusin":Vt="focus",ot=jc;break;case"focusout":Vt="blur",ot=jc;break;case"beforeblur":case"afterblur":ot=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=bv;break;case lp:case cp:case up:ot=dv;break;case fp:ot=Av;break;case"scroll":case"scrollend":ot=ov;break;case"wheel":ot=Cv;break;case"copy":case"cut":case"paste":ot=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=kh;break;case"toggle":case"beforetoggle":ot=Dv}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),Y=te?$!==null?$+"Capture":null:$;te=[];for(var V=Q,K;V!==null;){var mt=V;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||Y===null||(mt=Gs(V,Y),mt!=null&&te.push(yo(V,mt,K))),Ge)break;V=V.return}0<te.length&&($=new ot($,Vt,null,a,dt),gt.push({event:$,listeners:te}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",$&&a!==Vc&&(Vt=a.relatedTarget||a.fromElement)&&(Sa(Vt)||Vt[_i]))break t;if((ot||$)&&($=dt.window===dt?dt:($=dt.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?Sa(Vt):null,Vt!==null&&(Ge=u(Vt),te=Vt.tag,Vt!==Ge||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if(te=Gh,mt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=kh,mt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ge=ot==null?$:nr(ot),K=Vt==null?$:nr(Vt),$=new te(mt,V+"leave",ot,a,dt),$.target=Ge,$.relatedTarget=K,mt=null,Sa(dt)===Q&&(te=new te(Y,V+"enter",Vt,a,dt),te.target=K,te.relatedTarget=Ge,mt=te),Ge=mt,ot&&Vt)e:{for(te=wx,Y=ot,V=Vt,K=0,mt=Y;mt;mt=te(mt))K++;mt=0;for(var Qt=V;Qt;Qt=te(Qt))mt++;for(;0<K-mt;)Y=te(Y),K--;for(;0<mt-K;)V=te(V),mt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;ot!==null&&O0(gt,$,ot,te,!1),Vt!==null&&Ge!==null&&O0(gt,Ge,Vt,te,!0)}}t:{if($=Q?nr(Q):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var be=Qh;else if(jh($))if(Jh)be=Hv;else{be=Bv;var Zt=Fv}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&vi(Q.elementType)&&(be=Qh):be=Iv;if(be&&(be=be(t,Q))){Kh(gt,be,a,dt);break t}Zt&&Zt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&xn($,"number",$.value)}switch(Zt=Q?nr(Q):window,t){case"focusin":(jh(Zt)||Zt.contentEditable==="true")&&(Ir=Zt,eu=Q,js=null);break;case"focusout":js=eu=Ir=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,sp(gt,a,dt);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":sp(gt,a,dt)}var ce;if(Qc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Br?Yh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Xh&&a.locale!=="ko"&&(Br||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Br&&(ce=Ih()):(Ea=dt,qc="value"in Ea?Ea.value:Ea.textContent,Br=!0)),Zt=Xl(Q,ve),0<Zt.length&&(ve=new Vh(ve,t,null,a,dt),gt.push({event:ve,listeners:Zt}),ce?ve.data=ce:(ce=Zh(a),ce!==null&&(ve.data=ce)))),(ce=Nv?Lv(t,a):Ov(t,a))&&(ve=Xl(Q,"onBeforeInput"),0<ve.length&&(Zt=new Vh("onBeforeInput","beforeinput",null,a,dt),gt.push({event:Zt,listeners:ve}),Zt.data=ce)),Tx(gt,t,Q,a,dt)}N0(gt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gs(t,a),c!=null&&s.unshift(yo(t,c,f)),c=Gs(t,n),c!=null&&s.push(yo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function wx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O0(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,B=b.alternate,Q=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||Q===null||(B=Q,c?(Q=Gs(a,f),Q!=null&&g.unshift(yo(a,Q,B))):c||(Q=Gs(a,f),Q!=null&&g.push(yo(a,Q,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Dx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function P0(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Ux,"")}function z0(t,n){return n=P0(n),P0(t)===n}function He(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Pr(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rv.get(a)||a,Wt(t,a,s))}}function Cf(t,n,a,s,c,f){switch(a){case"style":Pr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?fn(t,s):(typeof s=="number"||typeof s=="bigint")&&fn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=c=null,B=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":Q=dt;break;case"value":f=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:He(t,n,s,dt,a,null)}}Xi(t,f,b,B,Q,g,c,!1);return;case"select":me("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:He(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ei(t,!!s,n,!1):a!=null&&ei(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:He(t,n,g,b,a,null)}Sn(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:He(t,n,B,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<So.length;s++)me(So[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,Q,s,a,null)}return;default:if(vi(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Cf(t,n,dt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&He(t,n,b,s,a,null))}function Nx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,B=null,Q=null,dt=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=gt;default:s.hasOwnProperty(ot)||He(t,n,ot,null,s,gt)}}for(var $ in s){var ot=s[$];if(gt=a[$],s.hasOwnProperty($)&&(ot!=null||gt!=null))switch($){case"type":f=ot;break;case"name":c=ot;break;case"checked":Q=ot;break;case"defaultChecked":dt=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&He(t,n,$,ot,s,gt)}}vn(t,g,b,B,Q,dt,f,c);return;case"select":ot=g=b=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||He(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==B&&He(t,n,c,f,s,B)}n=b,a=g,s=ot,$!=null?ei(t,!!a,$,!1):!!s!=!!a&&(n!=null?ei(t,!!a,n,!0):ei(t,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(t,n,b,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":$=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(t,n,g,c,s,f)}Oe(t,$,ot);return;case"option":for(var Vt in a)if($=a[Vt],a.hasOwnProperty(Vt)&&$!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:He(t,n,Vt,null,s,$)}for(B in s)if($=s[B],ot=a[B],s.hasOwnProperty(B)&&$!==ot&&($!=null||ot!=null))switch(B){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:He(t,n,B,$,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!s.hasOwnProperty(te)&&He(t,n,te,null,s,$);for(Q in s)if($=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&$!==ot&&($!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:He(t,n,Q,$,s,ot)}return;default:if(vi(n)){for(var Ge in a)$=a[Ge],a.hasOwnProperty(Ge)&&$!==void 0&&!s.hasOwnProperty(Ge)&&Cf(t,n,Ge,void 0,s,$);for(dt in s)$=s[dt],ot=a[dt],!s.hasOwnProperty(dt)||$===ot||$===void 0&&ot===void 0||Cf(t,n,dt,$,s,ot);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!s.hasOwnProperty(Y)&&He(t,n,Y,null,s,$);for(gt in s)$=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||$===ot||$==null&&ot==null||He(t,n,gt,$,s,ot)}function F0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&F0(g)){for(g=0,b=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],Q=B.startTime;if(Q>b)break;var dt=B.transferSize,gt=B.initiatorType;dt&&F0(gt)&&(B=B.responseEnd,g+=dt*(B<b?1:(b-Q)/(B-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Ox(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(t){return G0.resolve(null).then(t).catch(Fx)}:H0;function Fx(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function V0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ds(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[er]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);ds(n)}function k0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[er])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function X0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function W0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Y0(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hs(t)}var ci=new Map,Z0=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=H.d;H.d={f:Gx,r:Vx,D:kx,C:Xx,L:Wx,m:qx,X:Zx,S:Yx,M:jx};function Gx(){var t=oa.f(),n=Fl();return t||n}function Vx(t){var n=ya(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):oa.r(t)}var cs=typeof document>"u"?null:document;function j0(t,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Z0.has(c)||(Z0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function kx(t){oa.D(t),j0("dns-prefetch",t,null)}function Xx(t,n){oa.C(t,n),j0("preconnect",t,n)}function Wx(t,n,a){oa.L(t,n,a);var s=cs;if(s&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=us(t);break;case"script":f=fs(t)}ci.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Eo(f))||n==="script"&&s.querySelector(bo(f))||(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function qx(t,n){oa.m(t,n);var a=cs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(t)}if(!ci.has(f)&&(t=_({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}s=a.createElement("link"),An(s,"link",t),T(s),a.head.appendChild(s)}}}function Yx(t,n,a){oa.S(t,n,a);var s=cs;if(s&&t){var c=Ma(s).hoistableStyles,f=us(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(Eo(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Ff(t,a);var B=g=s.createElement("link");T(B),An(B,"link",t),B._p=new Promise(function(Q,dt){B.onload=Q,B.onerror=dt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function Zx(t,n){oa.X(t,n);var a=cs;if(a&&t){var s=Ma(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function jx(t,n){oa.M(t,n);var a=cs;if(a&&t){var s=Ma(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Bf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function K0(t,n,a,s){var c=(c=tt.current)?ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Ma(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=Ma(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||Kx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=Ma(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+ie(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Kx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),T(n),t.head.appendChild(n))}function fs(t){return'[src="'+ie(t)+'"]'}function bo(t){return"script[async]"+t}function J0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,T(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),T(s),An(s,"style",c),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":c=us(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=Q0(a),(c=ci.get(c))&&Ff(s,c),f=(t.ownerDocument||t).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),An(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=fs(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,T(c),c):(s=a,(c=ci.get(f))&&(s=_({},a),Bf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),T(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function $0(t,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[er]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=Q0(s),(c=ci.get(c))&&Ff(s,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var If=0;function $x(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&If===0&&(If=62500*Lx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>If?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(tS,t),Kl=null,jl.call(t))}function tS(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var s=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=jl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:O,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function eS(t,n,a,s,c,f,g,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ng(t,n,a,s,c,f,g,b,B,Q,dt,gt){return t=new eS(t,n,a,g,B,Q,dt,gt,b),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},yu(f),t}function ig(t){return t?(t=Vr,t):Vr}function ag(t,n,a,s,c,f){c=ig(c),s.context===null?s.context=c:s.pendingContext=c,s=wa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Da(t,s,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){rg(t,n),(t=t.alternate)&&rg(t,n)}function sg(t){if(t.tag===13||t.tag===31){var n=sr(t,67108864);n!==null&&Gn(n,t,67108864),Hf(t,67108864)}}function og(t){if(t.tag===13||t.tag===31){var n=Qn();n=Fs(n);var a=sr(t,n);a!==null&&Gn(a,t,n),Hf(t,n)}}var Jl=!0;function nS(t,n,a,s){var c=L.T;L.T=null;var f=H.p;try{H.p=2,Gf(t,n,a,s)}finally{H.p=f,L.T=c}}function iS(t,n,a,s){var c=L.T;L.T=null;var f=H.p;try{H.p=8,Gf(t,n,a,s)}finally{H.p=f,L.T=c}}function Gf(t,n,a,s){if(Jl){var c=Vf(s);if(c===null)Rf(t,n,s,$l,a),cg(t,s);else if(rS(c,t,n,a,s))s.stopPropagation();else if(cg(t,s),n&4&&-1<aS.indexOf(t)){for(;c!==null;){var f=ya(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var B=1<<31-Pt(g);b.entanglements[1]|=B,g&=~B}Oi(f),(De&6)===0&&(Pl=M()+500,xo(0))}}break;case 31:case 13:b=sr(f,2),b!==null&&Gn(b,f,2),Fl(),Hf(f,2)}if(f=Vf(s),f===null&&Rf(t,n,s,$l,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Rf(t,n,s,null,a)}}function Vf(t){return t=kc(t),kf(t)}var $l=null;function kf(t){if($l=null,t=Sa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case xt:return 8;case lt:case jt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ga=null,Va=null,ka=null,Ao=new Map,Ro=new Map,Xa=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cg(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ya(n),n!==null&&sg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function rS(t,n,a,s,c){switch(n){case"focusin":return Ga=Co(Ga,t,n,a,s,c),!0;case"dragenter":return Va=Co(Va,t,n,a,s,c),!0;case"mouseover":return ka=Co(ka,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,s,c)),!0}return!1}function ug(t){var n=Sa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){og(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){og(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Vc=s,a.target.dispatchEvent(s),Vc=null}else return n=ya(a),n!==null&&sg(n),t.blockedOn=a,!1;n.shift()}return!0}function fg(t,n,a){tc(t)&&a.delete(n)}function sS(){Xf=!1,Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),ka!==null&&tc(ka)&&(ka=null),Ao.forEach(fg),Ro.forEach(fg)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sS)))}var nc=null;function dg(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=ya(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ds(t){function n(B){return ec(B,t)}Ga!==null&&ec(Ga,t),Va!==null&&ec(Va,t),ka!==null&&ec(ka,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)ug(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[_n]||null;if(typeof f=="function")g||dg(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)b=g.formAction;else if(kf(c)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),dg(a)}}}function hg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}ic.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();ag(a,s,t,n,null,null)},ic.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ag(t.current,2,null,t,null,null),Fl(),n[_i]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Bs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&ug(t)}};var pg=e.version;if(pg!=="19.2.3")throw Error(r(527,pg,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var oS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Et=ac.inject(oS),bt=ac}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ym,f=Mm,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=ng(t,1,!1,null,null,a,s,null,c,f,g,hg),t[_i]=n.current,Af(t),new Wf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=ym,g=Mm,b=Em,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ng(t,1,!0,n,a??null,s,c,B,f,g,b,hg),n.context=ig(null),a=n.current,s=Qn(),s=Fs(s),c=wa(s),c.callback=null,Da(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Oi(n),t[_i]=n.current,Af(t),new ic(n)},wo.version="19.2.3",wo}var Mg;function gS(){if(Mg)return Yf.exports;Mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=mS(),Yf.exports}var _S=gS();const vS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Eg=o=>{const e=xS(o);return e.charAt(0).toUpperCase()+e.slice(1)},M_=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),SS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var yS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const MS=Ti.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},m)=>Ti.createElement("svg",{ref:m,...yS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:M_("lucide",l),...!u&&!SS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>Ti.createElement(p,v)),...Array.isArray(u)?u:[u]]));const ki=(o,e)=>{const i=Ti.forwardRef(({className:r,...l},u)=>Ti.createElement(MS,{ref:u,iconNode:e,className:M_(`lucide-${vS(Eg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Eg(o),i};const ES=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bS=ki("award",ES);const TS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],AS=ki("chevron-down",TS);const RS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bg=ki("clock",RS);const CS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wS=ki("mail",CS);const DS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],US=ki("map-pin",DS);const NS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],LS=ki("menu",NS);const OS=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Tg=ki("phone",OS);const PS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],zS=ki("shield",PS);const FS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],BS=ki("star",FS);const IS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],HS=ki("x",IS);const Th="182",GS=0,Ag=1,VS=2,Cc=1,kS=2,Fo=3,tr=0,kn=1,ha=2,ma=0,Rs=1,Cd=2,Rg=3,Cg=4,XS=5,Ar=100,WS=101,qS=102,YS=103,ZS=104,jS=200,KS=201,QS=202,JS=203,wd=204,Dd=205,$S=206,ty=207,ey=208,ny=209,iy=210,ay=211,ry=212,sy=213,oy=214,Ud=0,Nd=1,Ld=2,ws=3,Od=4,Pd=5,zd=6,Fd=7,E_=0,ly=1,cy=2,Ii=0,b_=1,T_=2,A_=3,R_=4,C_=5,w_=6,D_=7,U_=300,Dr=301,Ds=302,Bd=303,Id=304,Fc=306,Hd=1e3,pa=1001,Gd=1002,Rn=1003,uy=1004,rc=1005,Nn=1006,Qf=1007,Cr=1008,hi=1009,N_=1010,L_=1011,Io=1012,Ah=1013,Gi=1014,Fi=1015,_a=1016,Rh=1017,Ch=1018,Ho=1020,O_=35902,P_=35899,z_=1021,F_=1022,Ri=1023,va=1026,wr=1027,B_=1028,wh=1029,Us=1030,Dh=1031,Uh=1033,wc=33776,Dc=33777,Uc=33778,Nc=33779,Vd=35840,kd=35841,Xd=35842,Wd=35843,qd=36196,Yd=37492,Zd=37496,jd=37488,Kd=37489,Qd=37490,Jd=37491,$d=37808,th=37809,eh=37810,nh=37811,ih=37812,ah=37813,rh=37814,sh=37815,oh=37816,lh=37817,ch=37818,uh=37819,fh=37820,dh=37821,hh=36492,ph=36494,mh=36495,gh=36283,_h=36284,vh=36285,xh=36286,fy=3200,dy=0,hy=1,Ja="",fi="srgb",Ns="srgb-linear",Oc="linear",Fe="srgb",hs=7680,wg=519,py=512,my=513,gy=514,Nh=515,_y=516,vy=517,Lh=518,xy=519,Dg=35044,Ug="300 es",Bi=2e3,Pc=2001;function I_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Sy(){const o=zc("canvas");return o.style.display="block",o}const Ng={};function Lg(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ae(...o){const e="THREE."+o.shift();console.error(e,...o)}function Go(...o){const e=o.join(" ");e in Ng||(Ng[e]=!0,re(...o))}function yy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Os{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,Sh=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function My(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,i=0){Ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=u[d+0],E=u[d+1],A=u[d+2],R=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=E,e[i+2]=A,e[i+3]=R;return}if(_!==R||m!==S||p!==E||v!==A){let y=m*S+p*E+v*A+_*R;y<0&&(S=-S,E=-E,A=-A,R=-R,y=-y);let x=1-h;if(y<.9995){const P=Math.acos(y),O=Math.sin(P);x=Math.sin(x*P)/O,h=Math.sin(h*P)/O,m=m*x+S*h,p=p*x+E*h,v=v*x+A*h,_=_*x+R*h}else{m=m*x+S*h,p=p*x+E*h,v=v*x+A*h,_=_*x+R*h;const P=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=P,p*=P,v*=P,_*=P}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],S=u[d+1],E=u[d+2],A=u[d+3];return e[i]=h*A+v*_+m*E-p*S,e[i+1]=m*A+v*S+p*_-h*E,e[i+2]=p*A+v*E+h*S-m*_,e[i+3]=v*A-h*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),S=m(r/2),E=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"YXZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"ZXY":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"ZYX":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"YZX":this._x=S*v*_+p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_-S*E*A;break;case"XZY":this._x=S*v*_-p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_+S*E*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Og.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new at,Og=new Xo;class ue{constructor(e,i,r,l,u,d,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],E=r[5],A=r[8],R=l[0],y=l[3],x=l[6],P=l[1],O=l[4],N=l[7],F=l[2],I=l[5],z=l[8];return u[0]=d*R+h*P+m*F,u[3]=d*y+h*O+m*I,u[6]=d*x+h*N+m*z,u[1]=p*R+v*P+_*F,u[4]=p*y+v*O+_*I,u[7]=p*x+v*N+_*z,u[2]=S*R+E*P+A*F,u[5]=S*y+E*O+A*I,u[8]=S*x+E*N+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,S=h*m-v*u,E=p*u-d*m,A=i*_+r*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(l*p-v*r)*R,e[2]=(h*r-l*d)*R,e[3]=S*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=E*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ed.makeScale(e,i)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,i){return this.premultiply(ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new ue,Pg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Fe&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Oc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ns]:{primaries:e,whitePoint:r,transfer:Oc,toXYZ:Pg,fromXYZ:zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:Pg,fromXYZ:zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ee=Ey();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class by{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=zc("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(nd(l[d].image)):u.push(nd(l[d]))}else u=nd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?by.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let Ay=0;const id=new at;class Pn extends Os{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=pa,l=pa,u=Nn,d=Cr,h=Ri,m=hi,p=Pn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=ko(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=U_;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],A=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,F=(x+1)/2,I=(v+S)/4,z=(_+R)/4,j=(A+y)/4;return O>N&&O>F?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=I/r,u=z/r):N>F?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=I/l,u=j/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=j/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-A)*(y-A)+(_-R)*(_-R)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-A)/P,this.y=(_-R)/P,this.z=(S-v)/P,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends Os{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Oh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Ry{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class H_ extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),oc.subVectors(this.max,Uo),ms.subVectors(e.a,Uo),gs.subVectors(e.b,Uo),_s.subVectors(e.c,Uo),qa.subVectors(gs,ms),Ya.subVectors(_s,gs),xr.subVectors(ms,_s);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-xr.z,xr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,xr.z,0,-xr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-xr.y,xr.x,0];return!ad(i,ms,gs,_s,oc)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,ms,gs,_s,oc))?!1:(lc.crossVectors(qa,Ya),i=[lc.x,lc.y,lc.z],ad(i,ms,gs,_s,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new at,new at,new at,new at,new at,new at,new at,new at],Mi=new at,sc=new Wo,ms=new at,gs=new at,_s=new at,qa=new at,Ya=new at,xr=new at,Uo=new at,oc=new at,lc=new at,Sr=new at;function ad(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Sr.fromArray(o,u);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=e.dot(Sr),p=i.dot(Sr),v=r.dot(Sr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const wy=new Wo,No=new at,rd=new at;class Bc{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):wy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(rd)),this.expandByPoint(No.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new at,sd=new at,cc=new at,Za=new at,od=new at,uc=new at,ld=new at;class G_{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){sd.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(sd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(cc),h=Za.dot(this.direction),m=-Za.dot(cc),p=Za.lengthSq(),v=Math.abs(1-d*d);let _,S,E,A;if(v>0)if(_=d*m-h,S=d*h-m,A=u*v,_>=0)if(S>=-A)if(S<=A){const R=1/v;_*=R,S*=R,E=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(sd).addScaledVector(cc,S),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,u){od.subVectors(i,e),uc.subVectors(r,e),ld.crossVectors(od,uc);let d=this.direction.dot(ld),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(uc.crossVectors(Za,uc));if(m<0)return null;const p=h*this.direction.dot(od.cross(Za));if(p<0||m+p>d)return null;const v=-h*Za.dot(ld);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,u,d,h,m,p,v,_,S,E,A,R,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,_,S,E,A,R,y)}set(e,i,r,l,u,d,h,m,p,v,_,S,E,A,R,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=A,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),u=1/vs.setFromMatrixColumn(e,1).length(),d=1/vs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=d*v,E=d*_,A=h*v,R=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+A*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=A+E*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,E=m*_,A=p*v,R=p*_;i[0]=S+R*h,i[4]=A*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=E*h-A,i[6]=R+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,E=m*_,A=p*v,R=p*_;i[0]=S-R*h,i[4]=-d*_,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*v,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,E=d*_,A=h*v,R=h*_;i[0]=m*v,i[4]=A*p-E,i[8]=S*p+R,i[1]=m*_,i[5]=R*p+S,i[9]=E*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,E=d*p,A=h*m,R=h*p;i[0]=m*v,i[4]=R-S*_,i[8]=A*_+E,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*_+A,i[10]=S-R*_}else if(e.order==="XZY"){const S=d*m,E=d*p,A=h*m,R=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+R,i[5]=d*v,i[9]=E*_-A,i[2]=A*_-E,i[6]=h*v,i[10]=R*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(r,Jn),ja.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(r,Jn)),ja.normalize(),fc.crossVectors(Jn,ja),l[0]=ja.x,l[4]=fc.x,l[8]=Jn.x,l[1]=ja.y,l[5]=fc.y,l[9]=Jn.y,l[2]=ja.z,l[6]=fc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],E=r[13],A=r[2],R=r[6],y=r[10],x=r[14],P=r[3],O=r[7],N=r[11],F=r[15],I=l[0],z=l[4],j=l[8],C=l[12],w=l[1],k=l[5],rt=l[9],nt=l[13],pt=l[2],ft=l[6],L=l[10],H=l[14],it=l[3],Mt=l[7],St=l[11],U=l[15];return u[0]=d*I+h*w+m*pt+p*it,u[4]=d*z+h*k+m*ft+p*Mt,u[8]=d*j+h*rt+m*L+p*St,u[12]=d*C+h*nt+m*H+p*U,u[1]=v*I+_*w+S*pt+E*it,u[5]=v*z+_*k+S*ft+E*Mt,u[9]=v*j+_*rt+S*L+E*St,u[13]=v*C+_*nt+S*H+E*U,u[2]=A*I+R*w+y*pt+x*it,u[6]=A*z+R*k+y*ft+x*Mt,u[10]=A*j+R*rt+y*L+x*St,u[14]=A*C+R*nt+y*H+x*U,u[3]=P*I+O*w+N*pt+F*it,u[7]=P*z+O*k+N*ft+F*Mt,u[11]=P*j+O*rt+N*L+F*St,u[15]=P*C+O*nt+N*H+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],E=e[14],A=e[3],R=e[7],y=e[11],x=e[15],P=m*E-p*S,O=h*E-p*_,N=h*S-m*_,F=d*E-p*v,I=d*S-m*v,z=d*_-h*v;return i*(R*P-y*O+x*N)-r*(A*P-y*F+x*I)+l*(A*O-R*F+x*z)-u*(A*N-R*I+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],E=e[11],A=e[12],R=e[13],y=e[14],x=e[15],P=_*y*p-R*S*p+R*m*E-h*y*E-_*m*x+h*S*x,O=A*S*p-v*y*p-A*m*E+d*y*E+v*m*x-d*S*x,N=v*R*p-A*_*p+A*h*E-d*R*E-v*h*x+d*_*x,F=A*_*m-v*R*m-A*h*S+d*R*S+v*h*y-d*_*y,I=i*P+r*O+l*N+u*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=P*z,e[1]=(R*S*u-_*y*u-R*l*E+r*y*E+_*l*x-r*S*x)*z,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*x+r*m*x)*z,e[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*E-r*m*E)*z,e[4]=O*z,e[5]=(v*y*u-A*S*u+A*l*E-i*y*E-v*l*x+i*S*x)*z,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*x-i*m*x)*z,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*E+i*m*E)*z,e[8]=N*z,e[9]=(A*_*u-v*R*u-A*r*E+i*R*E+v*r*x-i*_*x)*z,e[10]=(d*R*u-A*h*u+A*r*p-i*R*p-d*r*x+i*h*x)*z,e[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*E-i*h*E)*z,e[12]=F*z,e[13]=(v*R*l-A*_*l+A*r*S-i*R*S-v*r*y+i*_*y)*z,e[14]=(A*h*l-d*R*l-A*r*m+i*R*m+d*r*y-i*h*y)*z,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*S+i*h*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,S=u*p,E=u*v,A=u*_,R=d*v,y=d*_,x=h*_,P=m*p,O=m*v,N=m*_,F=r.x,I=r.y,z=r.z;return l[0]=(1-(R+x))*F,l[1]=(E+N)*F,l[2]=(A-O)*F,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(S+x))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(A+O)*z,l[9]=(y-P)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=vs.set(l[0],l[1],l[2]).length();const d=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,v=1/d,_=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Bi,m=!1){const p=this.elements,v=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let A,R;if(m)A=u/(d-u),R=d*u/(d-u);else if(h===Bi)A=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Pc)A=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Bi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,R;if(m)A=1/(d-u),R=d/(d-u);else if(h===Bi)A=-2/(d-u),R=-(d+u)/(d-u);else if(h===Pc)A=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vs=new at,Ei=new an,Dy=new at(0,0,0),Uy=new at(1,1,1),ja=new at,fc=new at,Jn=new at,Fg=new an,Bg=new Xo;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const Ig=new at,xs=new Xo,ua=new an,dc=new at,Lo=new at,Ly=new at,Oy=new Xo,Hg=new at(1,0,0),Gg=new at(0,1,0),Vg=new at(0,0,1),kg={type:"added"},Py={type:"removed"},Ss={type:"childadded",child:null},cd={type:"childremoved",child:null};class Xn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new at,i=new xa,r=new Xo,l=new at(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ue}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,i){return Ig.copy(e).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Lo,dc,this.up):ua.lookAt(dc,Lo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(ua),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Py),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),E=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new at(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new at,fa=new at,ud=new at,da=new at,ys=new at,Ms=new at,Xg=new at,fd=new at,dd=new at,hd=new at,pd=new nn,md=new nn,gd=new nn;class Ai{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),fa.subVectors(r,i),ud.subVectors(e,i);const d=bi.dot(bi),h=bi.dot(fa),m=bi.dot(ud),p=fa.dot(fa),v=fa.dot(ud),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(pd,u.x),d.addScaledVector(md,u.y),d.addScaledVector(gd,u.z),d}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),fa.subVectors(e,i),bi.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),bi.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ys.subVectors(l,r),Ms.subVectors(u,r),fd.subVectors(e,r);const m=ys.dot(fd),p=Ms.dot(fd);if(m<=0&&p<=0)return i.copy(r);dd.subVectors(e,l);const v=ys.dot(dd),_=Ms.dot(dd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ys,d);hd.subVectors(e,u);const E=ys.dot(hd),A=Ms.dot(hd);if(A>=0&&E<=A)return i.copy(u);const R=E*p-m*A;if(R<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(Ms,h);const y=v*A-E*_;if(y<=0&&_-v>=0&&E-A>=0)return Xg.subVectors(u,l),h=(_-v)/(_-v+(E-A)),i.copy(l).addScaledVector(Xg,h);const x=1/(y+R+S);return d=R*x,h=S*x,i.copy(r).addScaledVector(ys,d).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},hc={h:0,s:0,l:0};function _d(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=My(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=_d(d,u,e+1/3),this.g=_d(d,u,e),this.b=_d(d,u,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=k_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ee.workingToColorSpace(Un.copy(this),e),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=fi){Ee.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(hc);const r=$f(Ka.h,hc.h,i),l=$f(Ka.s,hc.s,i),u=$f(Ka.l,hc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Be;Be.NAMES=k_;let zy=0;class qo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Rs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Dd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Dd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ph extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new at,pc=new Ve;let Fy=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Dg,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dg&&(e.usage=this.usage),e}}class X_ extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let By=0;const ui=new an,vd=new Xn,Es=new at,$n=new Wo,Oo=new Wo,gn=new at;class mi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors($n.min,Oo.min),$n.expandByPoint(gn),gn.addVectors($n.max,Oo.max),$n.expandByPoint(gn)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(e,p),gn.add(Es)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new at,m[j]=new at;const p=new at,v=new at,_=new at,S=new Ve,E=new Ve,A=new Ve,R=new at,y=new at;function x(j,C,w){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,C),_.fromBufferAttribute(r,w),S.fromBufferAttribute(u,j),E.fromBufferAttribute(u,C),A.fromBufferAttribute(u,w),v.sub(p),_.sub(p),E.sub(S),A.sub(S);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(k),h[j].add(R),h[C].add(R),h[w].add(R),m[j].add(y),m[C].add(y),m[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,C=P.length;j<C;++j){const w=P[j],k=w.start,rt=w.count;for(let nt=k,pt=k+rt;nt<pt;nt+=3)x(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const O=new at,N=new at,F=new at,I=new at;function z(j){F.fromBufferAttribute(l,j),I.copy(F);const C=h[j];O.copy(C),O.sub(F.multiplyScalar(F.dot(C))).normalize(),N.crossVectors(I,C);const k=N.dot(m[j])<0?-1:1;d.setXYZW(j,O.x,O.y,O.z,k)}for(let j=0,C=P.length;j<C;++j){const w=P[j],k=w.start,rt=w.count;for(let nt=k,pt=k+rt;nt<pt;nt+=3)z(e.getX(nt+0)),z(e.getX(nt+1)),z(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new at,u=new at,d=new at,h=new at,m=new at,p=new at,v=new at,_=new at;if(e)for(let S=0,E=e.count;S<E;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let E=0,A=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?E=m[R]*h.data.stride+h.offset:E=m[R]*v;for(let x=0;x<v;x++)S[A++]=p[E++]}return new Ci(S,v,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=e(S,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new an,yr=new G_,mc=new Bc,qg=new at,gc=new at,_c=new at,vc=new at,xd=new at,xc=new at,Yg=new at,Sc=new at;class wi extends Xn{constructor(e=new mi,i=new Ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(xd.fromBufferAttribute(_,e),d?xc.addScaledVector(xd,v):xc.addScaledVector(xd.sub(i),v))}i.add(xc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(u),yr.copy(e.ray).recast(e.near),!(mc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(mc,qg)===null||yr.origin.distanceToSquared(qg)>(e.far-e.near)**2))&&(Wg.copy(u).invert(),yr.copy(e.ray).applyMatrix4(Wg),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],x=d[y.materialIndex],P=Math.max(y.start,E.start),O=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=O;N<F;N+=3){const I=h.getX(N),z=h.getX(N+1),j=h.getX(N+2);l=yc(this,x,e,r,p,v,_,I,z,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=A,x=R;y<x;y+=3){const P=h.getX(y),O=h.getX(y+1),N=h.getX(y+2);l=yc(this,d,e,r,p,v,_,P,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],x=d[y.materialIndex],P=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=O;N<F;N+=3){const I=N,z=N+1,j=N+2;l=yc(this,x,e,r,p,v,_,I,z,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let y=A,x=R;y<x;y+=3){const P=y,O=y+1,N=y+2;l=yc(this,d,e,r,p,v,_,P,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Iy(o,e,i,r,l,u,d,h){let m;if(e.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===tr,h),m===null)return null;Sc.copy(h),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function yc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,gc),o.getVertexPosition(m,_c),o.getVertexPosition(p,vc);const v=Iy(o,e,i,r,gc,_c,vc,Yg);if(v){const _=new at;Ai.getBarycoord(Yg,gc,_c,vc,_),l&&(v.uv=Ai.getInterpolatedAttribute(l,h,m,p,_,new Ve)),u&&(v.uv1=Ai.getInterpolatedAttribute(u,h,m,p,_,new Ve)),d&&(v.normal=Ai.getInterpolatedAttribute(d,h,m,p,_,new at),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new at,materialIndex:0};Ai.getNormal(gc,_c,vc,S.normal),v.face=S,v.barycoord=_}return v}class Yo extends mi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,E=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new pi(p,3)),this.setAttribute("normal",new pi(v,3)),this.setAttribute("uv",new pi(_,2));function A(R,y,x,P,O,N,F,I,z,j,C){const w=N/z,k=F/j,rt=N/2,nt=F/2,pt=I/2,ft=z+1,L=j+1;let H=0,it=0;const Mt=new at;for(let St=0;St<L;St++){const U=St*k-nt;for(let et=0;et<ft;et++){const _t=et*w-rt;Mt[R]=_t*P,Mt[y]=U*O,Mt[x]=pt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[y]=0,Mt[x]=I>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),_.push(et/z),_.push(1-St/j),H+=1}}for(let St=0;St<j;St++)for(let U=0;U<z;U++){const et=S+U+ft*St,_t=S+U+ft*(St+1),At=S+(U+1)+ft*(St+1),It=S+(U+1)+ft*St;m.push(et,_t,It),m.push(_t,At,It),it+=6}h.addGroup(E,it,C),E+=it,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)e[l]=r[l]}return e}function Hy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const Gy={clone:Ls,merge:On};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new at,Zg=new Ve,jg=new Ve;class di extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,Zg,jg),i.subVectors(jg,Zg)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class Xy extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(bs,Ts,e,i);l.layers=this.layers,this.add(l);const u=new di(bs,Ts,e,i);u.layers=this.layers,this.add(u);const d=new di(bs,Ts,e,i);d.layers=this.layers,this.add(d);const h=new di(bs,Ts,e,i);h.layers=this.layers,this.add(h);const m=new di(bs,Ts,e,i);m.layers=this.layers,this.add(m);const p=new di(bs,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Z_ extends Pn{constructor(e=[],i=Dr,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j_ extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Z_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ma});u.uniforms.tEquirect.value=i;const d=new wi(l,u),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Nn),new Xy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Mc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(p,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class qy extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Yy extends Pn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=Rn,v=Rn,_,S){super(null,d,h,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yd=new at,Zy=new at,jy=new ue;class Tr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=yd.subVectors(r,i).cross(Zy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||jy.getNormalMatrix(e),l=this.coplanarPoint(yd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Bc,Ky=new Ve(.5,.5),Ec=new at;class K_{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,u=new Tr,d=new Tr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],A=u[8],R=u[9],y=u[10],x=u[11],P=u[12],O=u[13],N=u[14],F=u[15];if(l[0].setComponents(p-d,E-v,x-A,F-P).normalize(),l[1].setComponents(p+d,E+v,x+A,F+P).normalize(),l[2].setComponents(p+h,E+_,x+R,F+O).normalize(),l[3].setComponents(p-h,E-_,x-R,F-O).normalize(),r)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,E-S,x-y,F-N).normalize();else if(l[4].setComponents(p-m,E-S,x-y,F-N).normalize(),i===Bi)l[5].setComponents(p+m,E+S,x+y,F+N).normalize();else if(i===Pc)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const i=Ky.distanceTo(e.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q_ extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new an,yh=new G_,bc=new Bc,Tc=new at;class Qy extends Xn{constructor(e=new mi,i=new Q_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,e.ray.intersectsSphere(bc)===!1)return;Kg.copy(l).invert(),yh.copy(e.ray).applyMatrix4(Kg);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let A=S,R=E;A<R;A++){const y=p.getX(A);Tc.fromBufferAttribute(_,y),Qg(Tc,y,m,l,e,i,this)}}else{const S=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let A=S,R=E;A<R;A++)Tc.fromBufferAttribute(_,A),Qg(Tc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Qg(o,e,i,r,l,u,d){const h=yh.distanceSqToPoint(o);if(h<i){const m=new at;yh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Vo extends Pn{constructor(e,i,r=Gi,l,u,d,h=Rn,m=Rn,p,v=va,_=1){if(v!==va&&v!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jy extends Vo{constructor(e,i=Gi,r=Dr,l,u,d=Rn,h=Rn,m,p=va){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,u,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ic extends mi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,E=[],A=[],R=[],y=[];for(let x=0;x<v;x++){const P=x*S-d;for(let O=0;O<p;O++){const N=O*_-u;A.push(N,-P,0),R.push(0,0,1),y.push(O/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const O=P+p*x,N=P+p*(x+1),F=P+1+p*(x+1),I=P+1+p*x;E.push(O,N,I),E.push(N,F,I)}this.setIndex(E),this.setAttribute("position",new pi(A,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class zh extends mi{constructor(e=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],v=new at,_=new at,S=new at;for(let E=0;E<=r;E++)for(let A=0;A<=l;A++){const R=A/l*u,y=E/r*Math.PI*2;_.x=(e+i*Math.cos(y))*Math.cos(R),_.y=(e+i*Math.cos(y))*Math.sin(R),_.z=i*Math.sin(y),h.push(_.x,_.y,_.z),v.x=e*Math.cos(R),v.y=e*Math.sin(R),S.subVectors(_,v).normalize(),m.push(S.x,S.y,S.z),p.push(A/l),p.push(E/r)}for(let E=1;E<=r;E++)for(let A=1;A<=l;A++){const R=(l+1)*E+A-1,y=(l+1)*(E-1)+A-1,x=(l+1)*(E-1)+A,P=(l+1)*E+A;d.push(R,y,P),d.push(y,x,P)}this.setIndex(d),this.setAttribute("position",new pi(h,3)),this.setAttribute("normal",new pi(m,3)),this.setAttribute("uv",new pi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $y extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tM extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $_ extends Y_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jg(o,e,i,r){const l=iM(r);switch(i){case z_:return o*e;case B_:return o*e/l.components*l.byteLength;case wh:return o*e/l.components*l.byteLength;case Us:return o*e*2/l.components*l.byteLength;case Dh:return o*e*2/l.components*l.byteLength;case F_:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Uh:return o*e*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:case Wd:return Math.max(o,16)*Math.max(e,8)/4;case Vd:case Xd:return Math.max(o,8)*Math.max(e,8)/2;case qd:case Yd:case jd:case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case gh:case _h:return Math.ceil(o/4)*Math.ceil(e/4)*8;case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iM(o){switch(o){case hi:case N_:return{byteLength:1,components:1};case Io:case L_:case _a:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Gi:case Ah:case Fi:return{byteLength:4,components:1};case O_:case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function tv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function aM(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<_.length;E++){const A=_[S],R=_[E];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,_[S]=R)}_.length=S+1;for(let E=0,A=_.length;E<A;E++){const R=_[E];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
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
#endif`,oM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
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
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vM=`#ifdef USE_IRIDESCENCE
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
#endif`,xM=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DM=`vec3 transformedNormal = objectNormal;
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
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
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
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
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
#endif`,iE=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,aE=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rE=`#if defined( RE_IndirectDiffuse )
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pE=`#if defined( USE_POINTS_UV )
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
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
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
#endif`,yE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,CE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kE=`float getShadowMask() {
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,fb=`#if DEPTH_PACKING == 3200
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
}`,db=`#define DISTANCE
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
}`,hb=`#define DISTANCE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,xb=`uniform vec3 diffuse;
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
}`,Sb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
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
}`,Mb=`#define MATCAP
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
}`,Eb=`#define MATCAP
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
}`,bb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,Ab=`#define PHONG
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
}`,Rb=`#define PHONG
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
}`,Cb=`#define STANDARD
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
}`,wb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Nb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:rM,alphahash_pars_fragment:sM,alphamap_fragment:oM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:fM,aomap_pars_fragment:dM,batching_pars_vertex:hM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:xM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:bM,color_pars_fragment:TM,color_pars_vertex:AM,color_vertex:RM,common:CM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:DM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:LM,emissivemap_pars_fragment:OM,colorspace_fragment:PM,colorspace_pars_fragment:zM,envmap_fragment:FM,envmap_common_pars_fragment:BM,envmap_pars_fragment:IM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:QM,envmap_vertex:GM,fog_vertex:VM,fog_pars_vertex:kM,fog_fragment:XM,fog_pars_fragment:WM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:YM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:jM,lights_pars_begin:KM,lights_toon_fragment:JM,lights_toon_pars_fragment:$M,lights_phong_fragment:tE,lights_phong_pars_fragment:eE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:aE,lights_fragment_maps:rE,lights_fragment_end:sE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:dE,map_particle_fragment:hE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:xE,morphtarget_pars_vertex:SE,morphtarget_vertex:yE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:bE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:DE,iridescence_pars_fragment:UE,opaque_fragment:NE,packing:LE,premultiplied_alpha_fragment:OE,project_vertex:PE,dithering_fragment:zE,dithering_pars_fragment:FE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:GE,shadowmap_vertex:VE,shadowmask_pars_fragment:kE,skinbase_vertex:XE,skinning_pars_vertex:WE,skinning_vertex:qE,skinnormal_vertex:YE,specularmap_fragment:ZE,specularmap_pars_fragment:jE,tonemapping_fragment:KE,tonemapping_pars_fragment:QE,transmission_fragment:JE,transmission_pars_fragment:$E,uv_pars_fragment:tb,uv_pars_vertex:eb,uv_vertex:nb,worldpos_vertex:ib,background_vert:ab,background_frag:rb,backgroundCube_vert:sb,backgroundCube_frag:ob,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:fb,distance_vert:db,distance_frag:hb,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:vb,meshbasic_frag:xb,meshlambert_vert:Sb,meshlambert_frag:yb,meshmatcap_vert:Mb,meshmatcap_frag:Eb,meshnormal_vert:bb,meshnormal_frag:Tb,meshphong_vert:Ab,meshphong_frag:Rb,meshphysical_vert:Cb,meshphysical_frag:wb,meshtoon_vert:Db,meshtoon_frag:Ub,points_vert:Nb,points_frag:Lb,shadow_vert:Ob,shadow_frag:Pb,sprite_vert:zb,sprite_frag:Fb},Ot={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},zi={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Be(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Be(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};zi.physical={uniforms:On([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Ac={r:0,b:0,g:0},Er=new xa,Bb=new an;function Ib(o,e,i,r,l,u,d){const h=new Be(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function A(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function R(O){let N=!1;const F=A(O);F===null?x(h,m):F&&F.isColor&&(x(F,1),N=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,N){const F=A(N);F&&(F.isCubeTexture||F.mapping===Fc)?(v===void 0&&(v=new wi(new Yo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Ls(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Er.copy(N.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Er)),v.material.toneMapped=Ee.getTransfer(F.colorSpace)!==Fe,(_!==F||S!==F.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new wi(new Ic(2,2),new Vi({name:"BackgroundMaterial",uniforms:Ls(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,N){O.getRGB(Ac,q_(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,N,d)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,N=1){h.set(O),m=N,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(h,m)},render:R,addToRenderList:y,dispose:P}}function Hb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(w,k,rt,nt,pt){let ft=!1;const L=_(nt,rt,k);u!==L&&(u=L,p(u.object)),ft=E(w,nt,rt,pt),ft&&A(w,nt,rt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,N(w,k,rt,nt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,k,rt){const nt=rt.wireframe===!0;let pt=r[w.id];pt===void 0&&(pt={},r[w.id]=pt);let ft=pt[k.id];ft===void 0&&(ft={},pt[k.id]=ft);let L=ft[nt];return L===void 0&&(L=S(m()),ft[nt]=L),L}function S(w){const k=[],rt=[],nt=[];for(let pt=0;pt<i;pt++)k[pt]=0,rt[pt]=0,nt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:rt,attributeDivisors:nt,object:w,attributes:{},index:null}}function E(w,k,rt,nt){const pt=u.attributes,ft=k.attributes;let L=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){const St=pt[it];let U=ft[it];if(U===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),St===void 0||St.attribute!==U||U&&St.data!==U.data)return!0;L++}return u.attributesNum!==L||u.index!==nt}function A(w,k,rt,nt){const pt={},ft=k.attributes;let L=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){let St=ft[it];St===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const U={};U.attribute=St,St&&St.data&&(U.data=St.data),pt[it]=U,L++}u.attributes=pt,u.attributesNum=L,u.index=nt}function R(){const w=u.newAttributes;for(let k=0,rt=w.length;k<rt;k++)w[k]=0}function y(w){x(w,0)}function x(w,k){const rt=u.newAttributes,nt=u.enabledAttributes,pt=u.attributeDivisors;rt[w]=1,nt[w]===0&&(o.enableVertexAttribArray(w),nt[w]=1),pt[w]!==k&&(o.vertexAttribDivisor(w,k),pt[w]=k)}function P(){const w=u.newAttributes,k=u.enabledAttributes;for(let rt=0,nt=k.length;rt<nt;rt++)k[rt]!==w[rt]&&(o.disableVertexAttribArray(rt),k[rt]=0)}function O(w,k,rt,nt,pt,ft,L){L===!0?o.vertexAttribIPointer(w,k,rt,pt,ft):o.vertexAttribPointer(w,k,rt,nt,pt,ft)}function N(w,k,rt,nt){R();const pt=nt.attributes,ft=rt.getAttributes(),L=k.defaultAttributeValues;for(const H in ft){const it=ft[H];if(it.location>=0){let Mt=pt[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const St=Mt.normalized,U=Mt.itemSize,et=e.get(Mt);if(et===void 0)continue;const _t=et.buffer,At=et.type,It=et.bytesPerElement,tt=At===o.INT||At===o.UNSIGNED_INT||Mt.gpuType===Ah;if(Mt.isInterleavedBufferAttribute){const ut=Mt.data,Dt=ut.stride,kt=Mt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<it.locationSize;Ht++)x(it.location+Ht,ut.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<it.locationSize;Ht++)y(it.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Ht=0;Ht<it.locationSize;Ht++)O(it.location+Ht,U/it.locationSize,At,St,Dt*It,(kt+U/it.locationSize*Ht)*It,tt)}else{if(Mt.isInstancedBufferAttribute){for(let ut=0;ut<it.locationSize;ut++)x(it.location+ut,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ut=0;ut<it.locationSize;ut++)y(it.location+ut);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let ut=0;ut<it.locationSize;ut++)O(it.location+ut,U/it.locationSize,At,St,U*It,U/it.locationSize*ut*It,tt)}}else if(L!==void 0){const St=L[H];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(it.location,St);break;case 3:o.vertexAttrib3fv(it.location,St);break;case 4:o.vertexAttrib4fv(it.location,St);break;default:o.vertexAttrib1fv(it.location,St)}}}}P()}function F(){j();for(const w in r){const k=r[w];for(const rt in k){const nt=k[rt];for(const pt in nt)v(nt[pt].object),delete nt[pt];delete k[rt]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const rt in k){const nt=k[rt];for(const pt in nt)v(nt[pt].object),delete nt[pt];delete k[rt]}delete r[w.id]}function z(w){for(const k in r){const rt=r[k];if(rt[w.id]===void 0)continue;const nt=rt[w.id];for(const pt in nt)v(nt[pt].object),delete nt[pt];delete rt[w.id]}}function j(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:P}}function Gb(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A];i.update(E,r,1)}function m(p,v,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let A=0;for(let R=0;R<_;R++)A+=v[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Vb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==hi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:N,maxSamples:F,samples:I}}function kb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Tr,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const A=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const P=u?0:r,O=P*4;let N=x.clippingState||null;m.value=N,N=v(A,S,O,E);for(let F=0;F!==O;++F)N[F]=i[F];x.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,E,A){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const x=E+R*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,N=E;O!==R;++O,N+=4)d.copy(_[O]).applyMatrix4(P,h),d.normal.toArray(y,N),y[N+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function Xb(o){let e=new WeakMap;function i(d,h){return h===Bd?d.mapping=Dr:h===Id&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Bd||h===Id)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new j_(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const $a=4,$g=[.125,.215,.35,.446,.526,.582],Rr=20,Wb=256,Po=new $_,t_=new Be;let Md=null,Ed=0,bd=0,Td=!1;const qb=new at;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=qb}=u;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,bd),this._renderer.xr.enabled=Td,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:_a,format:Ri,colorSpace:Ns,depthBuffer:!1},l=n_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(u)),this._blurMaterial=jb(u,e,i),this._ggxMaterial=Zb(u,e,i)}return l}_compileMaterial(e){const i=new wi(new mi,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,u){const m=new di(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(t_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new Yo,new Ph({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,x=!0):(y.color.copy(t_),x=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[O]));const F=this._cubeSize;As(l,N*F,O>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(R,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:A}=this,R=this._sizeLods[r],y=3*R*(r>A-$a?r-A+$a:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,As(u,y,x,3*R,2*R),l.setRenderTarget(u),l.render(h,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,As(e,y,x,3*R,2*R),l.setRenderTarget(e),l.render(h,Po)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Rr-1),R=u/A,y=isFinite(u)?1+Math.floor(v*R):Rr;y>Rr&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const x=[];let P=0;for(let z=0;z<Rr;++z){const j=z/R,C=Math.exp(-j*j/2);x.push(C),z===0?P+=C:z<y&&(P+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=A,S.mipInt.value=O-r;const N=this._sizeLods[l],F=3*N*(l>O-$a?l-O+$a:0),I=4*(this._cubeSize-N);As(i,F,I,3*N,2*N),m.setRenderTarget(i),m.render(_,Po)}}function Yb(o){const e=[],i=[],r=[];let l=o;const u=o-$a+1+$g.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-$a?m=$g[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,A=6,R=3,y=2,x=1,P=new Float32Array(R*A*E),O=new Float32Array(y*A*E),N=new Float32Array(x*A*E);for(let I=0;I<E;I++){const z=I%3*2/3-1,j=I>2?0:-1,C=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];P.set(C,R*A*I),O.set(S,y*A*I);const w=[I,I,I,I,I,I];N.set(w,x*A*I)}const F=new mi;F.setAttribute("position",new Ci(P,R)),F.setAttribute("uv",new Ci(O,y)),F.setAttribute("faceIndex",new Ci(N,x)),r.push(new wi(F,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function n_(o,e,i){const r=new Hi(o,e,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Zb(o,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function jb(o,e,i){const r=new Float32Array(Rr),l=new at(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function i_(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function a_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function Kb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Bd||m===Id,v=m===Dr||m===Ds;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new e_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new e_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Qb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Go("WebGLRenderer: "+r+" extension not supported."),l}}}function Jb(o,e,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,A=_.attributes.position;let R=0;if(E!==null){const P=E.array;R=E.version;for(let O=0,N=P.length;O<N;O+=3){const F=P[O+0],I=P[O+1],z=P[O+2];S.push(F,I,I,z,z,F)}}else if(A!==void 0){const P=A.array;R=A.version;for(let O=0,N=P.length/3-1;O<N;O+=3){const F=O+0,I=O+1,z=O+2;S.push(F,I,I,z,z,F)}}else return;const y=new(I_(S)?W_:X_)(S,1);y.version=R;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function $b(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(r,E,u,S*d),i.update(E,r,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(r,E,u,S*d,A),i.update(E,r,A))}function v(S,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,S,0,A);let y=0;for(let x=0;x<A;x++)y+=E[x];i.update(y,r,1)}function _(S,E,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,E[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,S,0,R,0,A);let x=0;for(let P=0;P<A;P++)x+=E[P]*R[P];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function tT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ae("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eT(o,e,i){const r=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let w=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;A===!0&&(N=1),R===!0&&(N=2),y===!0&&(N=3);let F=h.attributes.position.count*N,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*I*4*_),j=new H_(z,F,I,_);j.type=Fi,j.needsUpdate=!0;const C=N*4;for(let k=0;k<_;k++){const rt=x[k],nt=P[k],pt=O[k],ft=F*I*4*k;for(let L=0;L<rt.count;L++){const H=L*C;A===!0&&(l.fromBufferAttribute(rt,L),z[ft+H+0]=l.x,z[ft+H+1]=l.y,z[ft+H+2]=l.z,z[ft+H+3]=0),R===!0&&(l.fromBufferAttribute(nt,L),z[ft+H+4]=l.x,z[ft+H+5]=l.y,z[ft+H+6]=l.z,z[ft+H+7]=0),y===!0&&(l.fromBufferAttribute(pt,L),z[ft+H+8]=l.x,z[ft+H+9]=l.y,z[ft+H+10]=l.z,z[ft+H+11]=pt.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Ve(F,I)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function nT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const iT={[b_]:"LINEAR_TONE_MAPPING",[T_]:"REINHARD_TONE_MAPPING",[A_]:"CINEON_TONE_MAPPING",[R_]:"ACES_FILMIC_TONE_MAPPING",[w_]:"AGX_TONE_MAPPING",[D_]:"NEUTRAL_TONE_MAPPING",[C_]:"CUSTOM_TONE_MAPPING"};function aT(o,e,i,r,l){const u=new Hi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Hi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),h=new mi;h.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pi([0,2,0,0,2,0],2));const m=new $y({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new wi(h,m),v=new $_(-1,1,1,-1,0,1);let _=null,S=null,E=!1,A,R=null,y=[],x=!1;this.setSize=function(P,O){u.setSize(P,O),d.setSize(P,O);for(let N=0;N<y.length;N++){const F=y[N];F.setSize&&F.setSize(P,O)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const O=u.width,N=u.height;for(let F=0;F<y.length;F++){const I=y[F];I.setSize&&I.setSize(O,N)}},this.begin=function(P,O){if(E||P.toneMapping===Ii&&y.length===0)return!1;if(R=O,O!==null){const N=O.width,F=O.height;(u.width!==N||u.height!==F)&&this.setSize(N,F)}return x===!1&&P.setRenderTarget(u),A=P.toneMapping,P.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(P,O){P.toneMapping=A,E=!0;let N=u,F=d;for(let I=0;I<y.length;I++){const z=y[I];if(z.enabled!==!1&&(z.render(P,F,N,O),z.needsSwap!==!1)){const j=N;N=F,F=j}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},Ee.getTransfer(_)===Fe&&(m.defines.SRGB_TRANSFER="");const I=iT[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,P.setRenderTarget(R),P.render(p,v),R=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const ev=new Pn,Mh=new Vo(1,1),nv=new H_,iv=new Cy,av=new Z_,r_=[],s_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function Ps(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=r_[l];if(u===void 0&&(u=new Float32Array(l),r_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Gc(o,e){let i=s_[e];i===void 0&&(i=new Int32Array(e),s_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function rT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function cT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;c_.set(r),o.uniformMatrix2fv(this.addr,!1,c_),pn(i,r)}}function uT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;l_.set(r),o.uniformMatrix3fv(this.addr,!1,l_),pn(i,r)}}function fT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;o_.set(r),o.uniformMatrix4fv(this.addr,!1,o_),pn(i,r)}}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function gT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function ST(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Mh.compareFunction=i.isReversedDepthBuffer()?Lh:Nh,u=Mh):u=ev,i.setTexture2D(e||u,l)}function yT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iv,l)}function MT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||av,l)}function ET(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nv,l)}function bT(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(o,e){o.uniform1fv(this.addr,e)}function AT(o,e){const i=Ps(e,this.size,2);o.uniform2fv(this.addr,i)}function RT(o,e){const i=Ps(e,this.size,3);o.uniform3fv(this.addr,i)}function CT(o,e){const i=Ps(e,this.size,4);o.uniform4fv(this.addr,i)}function wT(o,e){const i=Ps(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DT(o,e){const i=Ps(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function UT(o,e){const i=Ps(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function NT(o,e){o.uniform1iv(this.addr,e)}function LT(o,e){o.uniform2iv(this.addr,e)}function OT(o,e){o.uniform3iv(this.addr,e)}function PT(o,e){o.uniform4iv(this.addr,e)}function zT(o,e){o.uniform1uiv(this.addr,e)}function FT(o,e){o.uniform2uiv(this.addr,e)}function BT(o,e){o.uniform3uiv(this.addr,e)}function IT(o,e){o.uniform4uiv(this.addr,e)}function HT(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Mh:d=ev;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function GT(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||iv,u[d])}function VT(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||av,u[d])}function kT(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||nv,u[d])}function XT(o){switch(o){case 5126:return TT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return zT;case 36294:return FT;case 36295:return BT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class WT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bT(i.type)}}class qT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XT(i.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function u_(o,e){o.seq.push(e),o.map[e.id]=e}function ZT(o,e,i){const r=o.name,l=r.length;for(Ad.lastIndex=0;;){const u=Ad.exec(r),d=Ad.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){u_(i,p===void 0?new WT(h,o,e):new qT(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new YT(h),u_(i,_)),i=_}}}class Lc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);ZT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function f_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const jT=37297;let KT=0;function QT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const d_=new ue;function JT(o){Ee._getMatrix(d_,Ee.workingColorSpace,o);const e=`mat3( ${d_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Oc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function h_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+QT(o.getShaderSource(e),h)}else return u}function $T(o,e){const i=JT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const t1={[b_]:"Linear",[T_]:"Reinhard",[A_]:"Cineon",[R_]:"ACESFilmic",[w_]:"AgX",[D_]:"Neutral",[C_]:"Custom"};function e1(o,e){const i=t1[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new at;function n1(){Ee.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),e=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function a1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function r1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Bo(o){return o!==""}function p_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(o){return o.replace(s1,l1)}const o1=new Map;function l1(o,e){let i=fe[e];if(i===void 0){const r=o1.get(e);if(r!==void 0)i=fe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(i)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(o){return o.replace(c1,u1)}function u1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function __(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const f1={[Cc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function d1(o){return f1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h1={[Dr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function p1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":h1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const m1={[Ds]:"ENVMAP_MODE_REFRACTION"};function g1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":m1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _1={[E_]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function v1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_1[o.combine]||"ENVMAP_BLENDING_NONE"}function x1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function S1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=d1(i),p=p1(i),v=g1(i),_=v1(i),S=x1(i),E=i1(i),A=a1(u),R=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[__(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ii?e1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),n1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=Eh(d),d=p_(d,i),d=m_(d,i),h=Eh(h),h=p_(h,i),h=m_(h,i),d=g_(d),h=g_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=P+y+d,N=P+x+h,F=f_(l,l.VERTEX_SHADER,O),I=f_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,F),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(k){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(R)||"",nt=l.getShaderInfoLog(F)||"",pt=l.getShaderInfoLog(I)||"",ft=rt.trim(),L=nt.trim(),H=pt.trim();let it=!0,Mt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,I);else{const St=h_(l,F,"vertex"),U=h_(l,I,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+St+`
`+U)}else ft!==""?re("WebGLProgram: Program Info Log:",ft):(L===""||H==="")&&(Mt=!1);Mt&&(k.diagnostics={runnable:it,programLog:ft,vertexShader:{log:L,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(I),j=new Lc(l,R),C=r1(l,R)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,jT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=I,this}let y1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new E1(e),i.set(e,r)),r}}class E1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function b1(o,e,i,r,l,u,d){const h=new V_,m=new M1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,k,rt,nt){const pt=rt.fog,ft=nt.geometry,L=C.isMeshStandardMaterial?rt.environment:null,H=(C.isMeshStandardMaterial?i:e).get(C.envMap||L),it=H&&H.mapping===Fc?H.image.height:null,Mt=A[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&re("WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const St=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,U=St!==void 0?St.length:0;let et=0;ft.morphAttributes.position!==void 0&&(et=1),ft.morphAttributes.normal!==void 0&&(et=2),ft.morphAttributes.color!==void 0&&(et=3);let _t,At,It,tt;if(Mt){const Me=zi[Mt];_t=Me.vertexShader,At=Me.fragmentShader}else _t=C.vertexShader,At=C.fragmentShader,m.update(C),It=m.getVertexShaderID(C),tt=m.getFragmentShaderID(C);const ut=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=nt.isInstancedMesh===!0,Ht=nt.isBatchedMesh===!0,de=!!C.map,Ke=!!C.matcap,ge=!!H,he=!!C.aoMap,Re=!!C.lightMap,se=!!C.bumpMap,Qe=!!C.normalMap,G=!!C.displacementMap,Ye=!!C.emissiveMap,ye=!!C.metalnessMap,Ue=!!C.roughnessMap,Yt=C.anisotropy>0,D=C.clearcoat>0,M=C.dispersion>0,W=C.iridescence>0,ht=C.sheen>0,xt=C.transmission>0,lt=Yt&&!!C.anisotropyMap,jt=D&&!!C.clearcoatMap,Ct=D&&!!C.clearcoatNormalMap,Xt=D&&!!C.clearcoatRoughnessMap,ee=W&&!!C.iridescenceMap,Et=W&&!!C.iridescenceThicknessMap,bt=ht&&!!C.sheenColorMap,Ft=ht&&!!C.sheenRoughnessMap,Pt=!!C.specularMap,wt=!!C.specularColorMap,le=!!C.specularIntensityMap,X=xt&&!!C.transmissionMap,Nt=xt&&!!C.thicknessMap,Tt=!!C.gradientMap,zt=!!C.alphaMap,yt=C.alphaTest>0,vt=!!C.alphaHash,Rt=!!C.extensions;let ne=Ii;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Le={shaderID:Mt,shaderType:C.type,shaderName:C.name,vertexShader:_t,fragmentShader:At,defines:C.defines,customVertexShaderID:It,customFragmentShaderID:tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:Ht,batchingColor:Ht&&nt._colorsTexture!==null,instancing:kt,instancingColor:kt&&nt.instanceColor!==null,instancingMorph:kt&&nt.morphTexture!==null,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ns,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:Ke,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:it,aoMap:he,lightMap:Re,bumpMap:se,normalMap:Qe,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Qe&&C.normalMapType===hy,normalMapTangentSpace:Qe&&C.normalMapType===dy,metalnessMap:ye,roughnessMap:Ue,anisotropy:Yt,anisotropyMap:lt,clearcoat:D,clearcoatMap:jt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:xt,transmissionMap:X,thicknessMap:Nt,gradientMap:Tt,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:yt,alphaHash:vt,combine:C.combine,mapUv:de&&R(C.map.channel),aoMapUv:he&&R(C.aoMap.channel),lightMapUv:Re&&R(C.lightMap.channel),bumpMapUv:se&&R(C.bumpMap.channel),normalMapUv:Qe&&R(C.normalMap.channel),displacementMapUv:G&&R(C.displacementMap.channel),emissiveMapUv:Ye&&R(C.emissiveMap.channel),metalnessMapUv:ye&&R(C.metalnessMap.channel),roughnessMapUv:Ue&&R(C.roughnessMap.channel),anisotropyMapUv:lt&&R(C.anisotropyMap.channel),clearcoatMapUv:jt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&R(C.sheenRoughnessMap.channel),specularMapUv:Pt&&R(C.specularMap.channel),specularColorMapUv:wt&&R(C.specularColorMap.channel),specularIntensityMapUv:le&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Nt&&R(C.thicknessMap.channel),alphaMapUv:zt&&R(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Qe||Yt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ft.attributes.uv&&(de||zt),fog:!!pt,useFog:C.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:nt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&Ee.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ye&&C.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ha,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(P(w,C),O(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function P(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const w=A[C.type];let k;if(w){const rt=zi[w];k=Gy.clone(rt.uniforms)}else k=C.uniforms;return k}function F(C,w){let k=_.get(w);return k!==void 0?++k.usedTimes:(k=new S1(o,w,C,u),v.push(k),_.set(w,k)),k}function I(C){if(--C.usedTimes===0){const w=v.indexOf(C);v[w]=v[v.length-1],v.pop(),_.delete(C.cacheKey),C.destroy()}}function z(C){m.remove(C)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:v,dispose:j}}function T1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function A1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function v_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function x_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,E,A,R,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:A,renderOrder:_.renderOrder,z:R,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=R,x.group=y),e++,x}function h(_,S,E,A,R,y){const x=d(_,S,E,A,R,y);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,A,R,y){const x=d(_,S,E,A,R,y);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||A1),r.length>1&&r.sort(S||v_),l.length>1&&l.sort(S||v_)}function v(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function R1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new x_,o.set(r,[d])):l>=u.length?(d=new x_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function C1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Be};break;case"SpotLight":i={position:new at,direction:new at,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function w1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let D1=0;function U1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function N1(o){const e=new C1,i=w1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,u=new an,d=new an;function h(p){let v=0,_=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let E=0,A=0,R=0,y=0,x=0,P=0,O=0,N=0,F=0,I=0,z=0;p.sort(U1);for(let C=0,w=p.length;C<w;C++){const k=p[C],rt=k.color,nt=k.intensity,pt=k.distance;let ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Us?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=rt.r*nt,_+=rt.g*nt,S+=rt.b*nt;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],nt);z++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.directionalShadow[E]=it,r.directionalShadowMap[E]=ft,r.directionalShadowMatrix[E]=k.shadow.matrix,P++}r.directional[E]=L,E++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(rt).multiplyScalar(nt),L.distance=pt,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[R]=L;const H=k.shadow;if(k.map&&(r.spotLightMap[F]=k.map,F++,H.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[R]=H.matrix,k.castShadow){const it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.spotShadow[R]=it,r.spotShadowMap[R]=ft,N++}R++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(rt).multiplyScalar(nt),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=L,y++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,r.pointShadow[A]=it,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=k.shadow.matrix,O++}r.point[A]=L,A++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(nt),L.groundColor.copy(k.groundColor).multiplyScalar(nt),r.hemi[x]=L,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==E||j.pointLength!==A||j.spotLength!==R||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==P||j.numPointShadows!==O||j.numSpotShadows!==N||j.numSpotMaps!==F||j.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,j.directionalLength=E,j.pointLength=A,j.spotLength=R,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=P,j.numPointShadows=O,j.numSpotShadows=N,j.numSpotMaps=F,j.numLightProbes=z,r.version=D1++)}function m(p,v){let _=0,S=0,E=0,A=0,R=0;const y=v.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const O=p[x];if(O.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(O.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),d.identity(),u.copy(O.matrixWorld),u.premultiply(y),d.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function S_(o){const e=new N1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function L1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new S_(o),e.set(l,[h])):u>=d.length?(h=new S_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
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
}`,z1=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],F1=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],y_=new an,zo=new at,Rd=new at;function B1(o,e,i){let r=new K_;const l=new Ve,u=new Ve,d=new nn,h=new tM,m=new eM,p={},v=i.maxTextureSize,_={[tr]:kn,[kn]:tr,[ha]:ha},S=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:O1,fragmentShader:P1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new mi;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new wi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let x=this.type;this.render=function(I,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===kS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Cc);const C=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(ma),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const nt=x!==this.type;nt&&z.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(ft=>ft.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,ft=I.length;pt<ft;pt++){const L=I[pt],H=L.shadow;if(H===void 0){re("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/it.x),l.x=u.x*it.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/it.y),l.y=u.y*it.y,H.mapSize.y=u.y)),H.map===null||nt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fo){if(L.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Hi(l.x,l.y,{format:Us,type:_a,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new Vo(l.x,l.y,Fi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=va,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{L.isPointLight?(H.map=new j_(l.x),H.map.depthTexture=new Jy(l.x,Gi)):(H.map=new Hi(l.x,l.y),H.map.depthTexture=new Vo(l.x,l.y,Gi)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=va;const St=o.state.buffers.depth.getReversed();this.type===Cc?(H.map.depthTexture.compareFunction=St?Lh:Nh,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Mt;St++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,St),o.clear();else{St===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(St);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),rt.viewport(d)}if(L.isPointLight){const U=H.camera,et=H.matrix,_t=L.distance||U.far;_t!==U.far&&(U.far=_t,U.updateProjectionMatrix()),zo.setFromMatrixPosition(L.matrixWorld),U.position.copy(zo),Rd.copy(U.position),Rd.add(z1[St]),U.up.copy(F1[St]),U.lookAt(Rd),U.updateMatrixWorld(),et.makeTranslation(-zo.x,-zo.y,-zo.z),y_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(y_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(L);r=H.getFrustum(),N(z,j,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===Fo&&P(H,j),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,k)};function P(I,z){const j=e.update(R);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hi(l.x,l.y,{format:Us,type:_a})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,R,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,j,E,R,null)}function O(I,z,j,C){let w=null;const k=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)w=k;else if(w=j.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const rt=w.uuid,nt=z.uuid;let pt=p[rt];pt===void 0&&(pt={},p[rt]=pt);let ft=pt[nt];ft===void 0&&(ft=w.clone(),pt[nt]=ft,z.addEventListener("dispose",F)),w=ft}if(w.visible=z.visible,w.wireframe=z.wireframe,C===Fo?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=o.properties.get(w);rt.light=j}return w}function N(I,z,j,C,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Fo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const nt=e.update(I),pt=I.material;if(Array.isArray(pt)){const ft=nt.groups;for(let L=0,H=ft.length;L<H;L++){const it=ft[L],Mt=pt[it.materialIndex];if(Mt&&Mt.visible){const St=O(I,Mt,C,w);I.onBeforeShadow(o,I,z,j,nt,St,it),o.renderBufferDirect(j,null,nt,St,I,it),I.onAfterShadow(o,I,z,j,nt,St,it)}}}else if(pt.visible){const ft=O(I,pt,C,w);I.onBeforeShadow(o,I,z,j,nt,ft,null),o.renderBufferDirect(j,null,nt,ft,I,null),I.onAfterShadow(o,I,z,j,nt,ft,null)}}const rt=I.children;for(let nt=0,pt=rt.length;nt<pt;nt++)N(rt[nt],z,j,C,w)}function F(I){I.target.removeEventListener("dispose",F);for(const j in p){const C=p[j],w=I.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const I1={[Ud]:Nd,[Ld]:zd,[Od]:Fd,[ws]:Pd,[Nd]:Ud,[zd]:Ld,[Fd]:Od,[Pd]:ws};function H1(o,e){function i(){let X=!1;const Nt=new nn;let Tt=null;const zt=new nn(0,0,0,0);return{setMask:function(yt){Tt!==yt&&!X&&(o.colorMask(yt,yt,yt,yt),Tt=yt)},setLocked:function(yt){X=yt},setClear:function(yt,vt,Rt,ne,Le){Le===!0&&(yt*=ne,vt*=ne,Rt*=ne),Nt.set(yt,vt,Rt,ne),zt.equals(Nt)===!1&&(o.clearColor(yt,vt,Rt,ne),zt.copy(Nt))},reset:function(){X=!1,Tt=null,zt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,Tt=null,zt=null,yt=null;return{setReversed:function(vt){if(Nt!==vt){const Rt=e.get("EXT_clip_control");vt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(vt){vt?ut(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!X&&(o.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Nt&&(vt=I1[vt]),zt!==vt){switch(vt){case Ud:o.depthFunc(o.NEVER);break;case Nd:o.depthFunc(o.ALWAYS);break;case Ld:o.depthFunc(o.LESS);break;case ws:o.depthFunc(o.LEQUAL);break;case Od:o.depthFunc(o.EQUAL);break;case Pd:o.depthFunc(o.GEQUAL);break;case zd:o.depthFunc(o.GREATER);break;case Fd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){yt!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),yt=vt)},reset:function(){X=!1,Tt=null,zt=null,yt=null,Nt=!1}}}function l(){let X=!1,Nt=null,Tt=null,zt=null,yt=null,vt=null,Rt=null,ne=null,Le=null;return{setTest:function(Me){X||(Me?ut(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!X&&(o.stencilMask(Me),Nt=Me)},setFunc:function(Me,Cn,gi){(Tt!==Me||zt!==Cn||yt!==gi)&&(o.stencilFunc(Me,Cn,gi),Tt=Me,zt=Cn,yt=gi)},setOp:function(Me,Cn,gi){(vt!==Me||Rt!==Cn||ne!==gi)&&(o.stencilOp(Me,Cn,gi),vt=Me,Rt=Cn,ne=gi)},setLocked:function(Me){X=Me},setClear:function(Me){Le!==Me&&(o.clearStencil(Me),Le=Me)},reset:function(){X=!1,Nt=null,Tt=null,zt=null,yt=null,vt=null,Rt=null,ne=null,Le=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],A=null,R=!1,y=null,x=null,P=null,O=null,N=null,F=null,I=null,z=new Be(0,0,0),j=0,C=!1,w=null,k=null,rt=null,nt=null,pt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),L=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),L=H>=2);let Mt=null,St={};const U=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),_t=new nn().fromArray(U),At=new nn().fromArray(et);function It(X,Nt,Tt,zt){const yt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<Tt;Rt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Nt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return vt}const tt={};tt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(ws),se(!1),Qe(Ag),ut(o.CULL_FACE),he(ma);function ut(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function kt(X,Nt){return _[X]!==Nt?(o.bindFramebuffer(X,Nt),_[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(X,Nt){let Tt=E,zt=!1;if(X){Tt=S.get(Nt),Tt===void 0&&(Tt=[],S.set(Nt,Tt));const yt=X.textures;if(Tt.length!==yt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Rt=yt.length;vt<Rt;vt++)Tt[vt]=o.COLOR_ATTACHMENT0+vt;Tt.length=yt.length,zt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Tt)}function de(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const Ke={[Ar]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[qS]:o.FUNC_REVERSE_SUBTRACT};Ke[YS]=o.MIN,Ke[ZS]=o.MAX;const ge={[jS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[wd]:o.SRC_ALPHA,[iy]:o.SRC_ALPHA_SATURATE,[ey]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[Dd]:o.ONE_MINUS_SRC_ALPHA,[ny]:o.ONE_MINUS_DST_COLOR,[ty]:o.ONE_MINUS_DST_ALPHA,[ay]:o.CONSTANT_COLOR,[ry]:o.ONE_MINUS_CONSTANT_COLOR,[sy]:o.CONSTANT_ALPHA,[oy]:o.ONE_MINUS_CONSTANT_ALPHA};function he(X,Nt,Tt,zt,yt,vt,Rt,ne,Le,Me){if(X===ma){R===!0&&(Dt(o.BLEND),R=!1);return}if(R===!1&&(ut(o.BLEND),R=!0),X!==XS){if(X!==y||Me!==C){if((x!==Ar||N!==Ar)&&(o.blendEquation(o.FUNC_ADD),x=Ar,N=Ar),Me)switch(X){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cd:o.blendFunc(o.ONE,o.ONE);break;case Rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ae("WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rg:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",X);break}P=null,O=null,F=null,I=null,z.set(0,0,0),j=0,y=X,C=Me}return}yt=yt||Nt,vt=vt||Tt,Rt=Rt||zt,(Nt!==x||yt!==N)&&(o.blendEquationSeparate(Ke[Nt],Ke[yt]),x=Nt,N=yt),(Tt!==P||zt!==O||vt!==F||Rt!==I)&&(o.blendFuncSeparate(ge[Tt],ge[zt],ge[vt],ge[Rt]),P=Tt,O=zt,F=vt,I=Rt),(ne.equals(z)===!1||Le!==j)&&(o.blendColor(ne.r,ne.g,ne.b,Le),z.copy(ne),j=Le),y=X,C=!1}function Re(X,Nt){X.side===ha?Dt(o.CULL_FACE):ut(o.CULL_FACE);let Tt=X.side===kn;Nt&&(Tt=!Tt),se(Tt),X.blending===Rs&&X.transparent===!1?he(ma):he(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const zt=X.stencilWrite;h.setTest(zt),zt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ye(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Qe(X){X!==GS?(ut(o.CULL_FACE),X!==k&&(X===Ag?o.cullFace(o.BACK):X===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),k=X}function G(X){X!==rt&&(L&&o.lineWidth(X),rt=X)}function Ye(X,Nt,Tt){X?(ut(o.POLYGON_OFFSET_FILL),(nt!==Nt||pt!==Tt)&&(o.polygonOffset(Nt,Tt),nt=Nt,pt=Tt)):Dt(o.POLYGON_OFFSET_FILL)}function ye(X){X?ut(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ue(X){X===void 0&&(X=o.TEXTURE0+ft-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function Yt(X,Nt,Tt){Tt===void 0&&(Mt===null?Tt=o.TEXTURE0+ft-1:Tt=Mt);let zt=St[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},St[Tt]=zt),(zt.type!==X||zt.texture!==Nt)&&(Mt!==Tt&&(o.activeTexture(Tt),Mt=Tt),o.bindTexture(X,Nt||tt[X]),zt.type=X,zt.texture=Nt)}function D(){const X=St[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function bt(X){_t.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Ft(X){At.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Pt(X,Nt){let Tt=p.get(Nt);Tt===void 0&&(Tt=new WeakMap,p.set(Nt,Tt));let zt=Tt.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(Nt,X.name),Tt.set(X,zt))}function wt(X,Nt){const zt=p.get(Nt).get(X);m.get(Nt)!==zt&&(o.uniformBlockBinding(Nt,zt,X.__bindingPointIndex),m.set(Nt,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Mt=null,St={},_={},S=new WeakMap,E=[],A=null,R=!1,y=null,x=null,P=null,O=null,N=null,F=null,I=null,z=new Be(0,0,0),j=0,C=!1,w=null,k=null,rt=null,nt=null,pt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ut,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:de,setBlending:he,setMaterial:Re,setFlipSided:se,setCullFace:Qe,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:ye,activeTexture:Ue,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:ee,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:bt,viewport:Ft,reset:le}}function G1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return E?new OffscreenCanvas(D,M):zc("canvas")}function R(D,M,W){let ht=1;const xt=Yt(D);if((xt.width>W||xt.height>W)&&(ht=W/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ht*xt.width),jt=Math.floor(ht*xt.height);_===void 0&&(_=A(lt,jt));const Ct=M?A(lt,jt):_;return Ct.width=lt,Ct.height=jt,Ct.getContext("2d").drawImage(D,0,0,lt,jt),re("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+lt+"x"+jt+")."),Ct}else return"data"in D&&re("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,M,W,ht,xt=!1){if(D!==null){if(o[D]!==void 0)return o[D];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=M;if(M===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),M===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),M===o.RGBA){const jt=xt?Oc:Ee.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=jt===Fe?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function N(D,M){let W;return D?M===null||M===Gi||M===Ho?W=o.DEPTH24_STENCIL8:M===Fi?W=o.DEPTH32F_STENCIL8:M===Io&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===Ho?W=o.DEPTH_COMPONENT24:M===Fi?W=o.DEPTH_COMPONENT32F:M===Io&&(W=o.DEPTH_COMPONENT16),W}function F(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function I(D){const M=D.target;M.removeEventListener("dispose",I),j(M),M.isVideoTexture&&v.delete(M)}function z(D){const M=D.target;M.removeEventListener("dispose",z),w(M)}function j(D){const M=r.get(D);if(M.__webglInit===void 0)return;const W=D.source,ht=S.get(W);if(ht){const xt=ht[M.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(D),Object.keys(ht).length===0&&S.delete(W)}r.remove(D)}function C(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const W=D.source,ht=S.get(W);delete ht[M.__cacheKey],d.memory.textures--}function w(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let xt=0;xt<M.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=D.textures;for(let ht=0,xt=W.length;ht<xt;ht++){const lt=r.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(W[ht])}r.remove(D)}let k=0;function rt(){k=0}function nt(){const D=k;return D>=l.maxTextures&&re("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pt(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ft(D,M){const W=r.get(D);if(D.isVideoTexture&&ye(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ht=D.image;if(ht===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,D,M);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function L(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,M);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function it(D,M){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ut(W,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const Mt={[Hd]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Gd]:o.MIRRORED_REPEAT},St={[Rn]:o.NEAREST,[uy]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[Cr]:o.LINEAR_MIPMAP_LINEAR},U={[py]:o.NEVER,[xy]:o.ALWAYS,[my]:o.LESS,[Nh]:o.LEQUAL,[gy]:o.EQUAL,[Lh]:o.GEQUAL,[_y]:o.GREATER,[vy]:o.NOTEQUAL};function et(D,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Qf||M.magFilter===rc||M.magFilter===Cr||M.minFilter===Nn||M.minFilter===Qf||M.minFilter===rc||M.minFilter===Cr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,St[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,St[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==rc&&M.minFilter!==Cr||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function _t(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",I));const ht=M.source;let xt=S.get(ht);xt===void 0&&(xt={},S.set(ht,xt));const lt=pt(M);if(lt!==D.__cacheKey){xt[lt]===void 0&&(xt[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),xt[lt].usedTimes++;const jt=xt[D.__cacheKey];jt!==void 0&&(xt[D.__cacheKey].usedTimes--,jt.usedTimes===0&&C(M)),D.__cacheKey=lt,D.__webglTexture=xt[lt].texture}return W}function At(D,M,W){return Math.floor(Math.floor(D/W)/M)}function It(D,M,W,ht){const lt=D.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ht,M.data);else{lt.sort((Et,bt)=>Et.start-bt.start);let jt=0;for(let Et=1;Et<lt.length;Et++){const bt=lt[jt],Ft=lt[Et],Pt=bt.start+bt.count,wt=At(Ft.start,M.width,4),le=At(bt.start,M.width,4);Ft.start<=Pt+1&&wt===le&&At(Ft.start+Ft.count-1,M.width,4)===wt?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++jt,lt[jt]=Ft)}lt.length=jt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Et=0,bt=lt.length;Et<bt;Et++){const Ft=lt[Et],Pt=Math.floor(Ft.start/4),wt=Math.ceil(Ft.count/4),le=Pt%M.width,X=Math.floor(Pt/M.width),Nt=wt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,le,X,Nt,Tt,W,ht,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function tt(D,M,W){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=_t(D,M),lt=M.source;i.bindTexture(ht,D.__webglTexture,o.TEXTURE0+W);const jt=r.get(lt);if(lt.version!==jt.__version||xt===!0){i.activeTexture(o.TEXTURE0+W);const Ct=Ee.getPrimaries(Ee.workingColorSpace),Xt=M.colorSpace===Ja?null:Ee.getPrimaries(M.colorSpace),ee=M.colorSpace===Ja||Ct===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=R(M.image,!1,l.maxTextureSize);Et=Ue(M,Et);const bt=u.convert(M.format,M.colorSpace),Ft=u.convert(M.type);let Pt=O(M.internalFormat,bt,Ft,M.colorSpace,M.isVideoTexture);et(ht,M);let wt;const le=M.mipmaps,X=M.isVideoTexture!==!0,Nt=jt.__version===void 0||xt===!0,Tt=lt.dataReady,zt=F(M,Et);if(M.isDepthTexture)Pt=N(M.format===wr,M.type),Nt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,Ft,null));else if(M.isDataTexture)if(le.length>0){X&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,bt,Ft,wt.data);M.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height),Tt&&It(M,Et,bt,Ft)):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,Ft,Et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,le[0].width,le[0].height,Et.depth);for(let yt=0,vt=le.length;yt<vt;yt++)if(wt=le[yt],M.format!==Ri)if(bt!==null)if(X){if(Tt)if(M.layerUpdates.size>0){const Rt=Jg(wt.width,wt.height,M.format,M.type);for(const ne of M.layerUpdates){const Le=wt.data.subarray(ne*Rt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,wt.width,wt.height,1,bt,Le)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,wt.width,wt.height,Et.depth,0,wt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,Ft,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,wt.width,wt.height,Et.depth,0,bt,Ft,wt.data)}else{X&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],M.format!==Ri?bt!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,bt,Ft,wt.data)}else if(M.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,Et.width,Et.height,Et.depth),Tt)if(M.layerUpdates.size>0){const yt=Jg(Et.width,Et.height,M.format,M.type);for(const vt of M.layerUpdates){const Rt=Et.data.subarray(vt*yt/Et.data.BYTES_PER_ELEMENT,(vt+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,bt,Ft,Rt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ft,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Et.width,Et.height,Et.depth,0,bt,Ft,Et.data);else if(M.isData3DTexture)X?(Nt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ft,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Et.width,Et.height,Et.depth,0,bt,Ft,Et.data);else if(M.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height);else{let yt=Et.width,vt=Et.height;for(let Rt=0;Rt<zt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Pt,yt,vt,0,bt,Ft,null),yt>>=1,vt>>=1}}else if(le.length>0){if(X&&Nt){const yt=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height)}for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Ft,wt):i.texImage2D(o.TEXTURE_2D,yt,Pt,bt,Ft,wt);M.generateMipmaps=!1}else if(X){if(Nt){const yt=Yt(Et);i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ft,Et)}else i.texImage2D(o.TEXTURE_2D,0,Pt,bt,Ft,Et);y(M)&&x(ht),jt.__version=lt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ut(D,M,W){if(M.image.length!==6)return;const ht=_t(D,M),xt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const lt=r.get(xt);if(xt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const jt=Ee.getPrimaries(Ee.workingColorSpace),Ct=M.colorSpace===Ja?null:Ee.getPrimaries(M.colorSpace),Xt=M.colorSpace===Ja||jt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Et=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!ee&&!Et?bt[vt]=R(M.image[vt],!0,l.maxCubemapSize):bt[vt]=Et?M.image[vt].image:M.image[vt],bt[vt]=Ue(M,bt[vt]);const Ft=bt[0],Pt=u.convert(M.format,M.colorSpace),wt=u.convert(M.type),le=O(M.internalFormat,Pt,wt,M.colorSpace),X=M.isVideoTexture!==!0,Nt=lt.__version===void 0||ht===!0,Tt=xt.dataReady;let zt=F(M,Ft);et(o.TEXTURE_CUBE_MAP,M);let yt;if(ee){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,Ft.width,Ft.height);for(let vt=0;vt<6;vt++){yt=bt[vt].mipmaps;for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];M.format!==Ri?Pt!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(yt=M.mipmaps,X&&Nt){yt.length>0&&zt++;const vt=Yt(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,Pt,wt,bt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,bt[vt].width,bt[vt].height,0,Pt,wt,bt[vt].data);for(let Rt=0;Rt<yt.length;Rt++){const Le=yt[Rt].image[vt].image;X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Le.width,Le.height,Pt,wt,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,Le.width,Le.height,0,Pt,wt,Le.data)}}else{X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Pt,wt,bt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,Pt,wt,bt[vt]);for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Pt,wt,ne.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,Pt,wt,ne.image[vt])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),lt.__version=xt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Dt(D,M,W,ht,xt,lt){const jt=u.convert(W.format,W.colorSpace),Ct=u.convert(W.type),Xt=O(W.internalFormat,jt,Ct,W.colorSpace),ee=r.get(M),Et=r.get(W);if(Et.__renderTarget=M,!ee.__hasExternalTextures){const bt=Math.max(1,M.width>>lt),Ft=Math.max(1,M.height>>lt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,lt,Xt,bt,Ft,M.depth,0,jt,Ct,null):i.texImage2D(xt,lt,Xt,bt,Ft,0,jt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,0,G(M)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(D,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const ht=M.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,lt=N(M.stencilBuffer,xt),jt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),lt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),lt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,lt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,D)}else{const ht=M.textures;for(let xt=0;xt<ht.length;xt++){const lt=ht[xt],jt=u.convert(lt.format,lt.colorSpace),Ct=u.convert(lt.type),Xt=O(lt.internalFormat,jt,Ct,lt.colorSpace);Ye(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),Xt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),Xt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(D,M,W){const ht=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(M.depthTexture);if(xt.__renderTarget=M,(!xt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),et(o.TEXTURE_CUBE_MAP,M.depthTexture);const ee=u.convert(M.depthTexture.format),Et=u.convert(M.depthTexture.type);let bt;M.depthTexture.format===va?bt=o.DEPTH_COMPONENT24:M.depthTexture.format===wr&&(bt=o.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,M.width,M.height,0,ee,Et,null)}}else ft(M.depthTexture,0);const lt=xt.__webglTexture,jt=G(M),Ct=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=M.depthTexture.format===wr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===va)Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,lt,0);else if(M.depthTexture.format===wr)Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,lt,0);else throw new Error("Unknown depthTexture format")}function de(D){const M=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const xt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),M.__depthDisposeCallback=xt}M.__boundDepthTexture=ht}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Ht(M.__webglFramebuffer[ht],D,ht);else{const ht=D.texture.mipmaps;ht&&ht.length>0?Ht(M.__webglFramebuffer[0],D,0):Ht(M.__webglFramebuffer,D,0)}else if(W){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),kt(M.__webglDepthbuffer[ht],D,!1);else{const xt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,lt)}}else{const ht=D.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),kt(M.__webglDepthbuffer,D,!1);else{const xt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(D,M,W){const ht=r.get(D);M!==void 0&&Dt(ht.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&de(D)}function ge(D){const M=D.texture,W=r.get(D),ht=r.get(M);D.addEventListener("dispose",z);const xt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,jt=xt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,d.memory.textures++),lt){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)W.__webglFramebuffer[Ct][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Ct=0,Xt=xt.length;Ct<Xt;Ct++){const ee=r.get(xt[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ye(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Xt=xt[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const ee=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),bt=O(Xt.internalFormat,ee,Et,Xt.colorSpace,D.isXRRenderTarget===!0),Ft=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),et(o.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Ct][Xt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else Dt(W.__webglFramebuffer[Ct],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ct=0,Xt=xt.length;Ct<Xt;Ct++){const ee=xt[Ct],Et=r.get(ee);let bt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),et(bt,ee),Dt(W.__webglFramebuffer,D,ee,o.COLOR_ATTACHMENT0+Ct,bt,0),y(ee)&&x(bt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),et(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Xt],D,M,o.COLOR_ATTACHMENT0,Ct,Xt);else Dt(W.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ct,0);y(M)&&x(Ct),i.unbindTexture()}D.depthBuffer&&de(D)}function he(D){const M=D.textures;for(let W=0,ht=M.length;W<ht;W++){const xt=M[W];if(y(xt)){const lt=P(D),jt=r.get(xt).__webglTexture;i.bindTexture(lt,jt),x(lt),i.unbindTexture()}}}const Re=[],se=[];function Qe(D){if(D.samples>0){if(Ye(D)===!1){const M=D.textures,W=D.width,ht=D.height;let xt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(D),Ct=M.length>1;if(Ct)for(let ee=0;ee<M.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Et=r.get(M[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,xt,o.NEAREST),m===!0&&(Re.length=0,se.length=0,Re.push(o.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Re.push(lt),se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<M.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Et=r.get(M[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Ye(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function Ue(D,M){const W=D.colorSpace,ht=D.format,xt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ns&&W!==Ja&&(Ee.getTransfer(W)===Fe?(ht!==Ri||xt!==hi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",W)),M}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=rt,this.setTexture2D=ft,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Ke,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function V1(o,e){function i(r,l=Ja){let u;const d=Ee.getTransfer(l);if(r===hi)return o.UNSIGNED_BYTE;if(r===Rh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ch)return o.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===N_)return o.BYTE;if(r===L_)return o.SHORT;if(r===Io)return o.UNSIGNED_SHORT;if(r===Ah)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===Fi)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===z_)return o.ALPHA;if(r===F_)return o.RGB;if(r===Ri)return o.RGBA;if(r===va)return o.DEPTH_COMPONENT;if(r===wr)return o.DEPTH_STENCIL;if(r===B_)return o.RED;if(r===wh)return o.RED_INTEGER;if(r===Us)return o.RG;if(r===Dh)return o.RG_INTEGER;if(r===Uh)return o.RGBA_INTEGER;if(r===wc||r===Dc||r===Uc||r===Nc)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vd||r===kd||r===Xd||r===Wd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd||r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===qd||r===Yd)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Zd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===jd)return u.COMPRESSED_R11_EAC;if(r===Kd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Qd)return u.COMPRESSED_RG11_EAC;if(r===Jd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===$d)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===th)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hh||r===ph||r===mh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===hh)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gh||r===_h||r===vh||r===xh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===gh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===_h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
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

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new J_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Vi({vertexShader:k1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Ic(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends Os{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,A=null;const R=typeof XRWebGLBinding<"u",y=new W1,x={},P=i.getContextAttributes();let O=null,N=null;const F=[],I=[],z=new Ve;let j=null;const C=new di;C.viewport=new nn;const w=new di;w.viewport=new nn;const k=[C,w],rt=new nM;let nt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=F[tt];return ut===void 0&&(ut=new Sd,F[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=F[tt];return ut===void 0&&(ut=new Sd,F[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=F[tt];return ut===void 0&&(ut=new Sd,F[tt]=ut),ut.getHandSpace()};function ft(tt){const ut=I.indexOf(tt.inputSource);if(ut===-1)return;const Dt=F[ut];Dt!==void 0&&(Dt.update(tt.inputSource,tt.frame,p||d),Dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let tt=0;tt<F.length;tt++){const ut=I[tt];ut!==null&&(I[tt]=null,F[tt].disconnect(ut))}nt=null,pt=null,y.reset();for(const tt in x)delete x[tt];e.setRenderTarget(O),E=null,S=null,_=null,l=null,N=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;P.depth&&(Ht=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=P.stencil?wr:va,kt=P.stencil?Ho:Gi);const de={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new Hi(S.textureWidth,S.textureHeight,{format:Ri,type:hi,depthTexture:new Vo(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(tt){for(let ut=0;ut<tt.removed.length;ut++){const Dt=tt.removed[ut],kt=I.indexOf(Dt);kt>=0&&(I[kt]=null,F[kt].disconnect(Dt))}for(let ut=0;ut<tt.added.length;ut++){const Dt=tt.added[ut];let kt=I.indexOf(Dt);if(kt===-1){for(let de=0;de<F.length;de++)if(de>=I.length){I.push(Dt),kt=de;break}else if(I[de]===null){I[de]=Dt,kt=de;break}if(kt===-1)break}const Ht=F[kt];Ht&&Ht.connect(Dt)}}const it=new at,Mt=new at;function St(tt,ut,Dt){it.setFromMatrixPosition(ut.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const kt=it.distanceTo(Mt),Ht=ut.projectionMatrix.elements,de=Dt.projectionMatrix.elements,Ke=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),he=(Ht[9]+1)/Ht[5],Re=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],Qe=(de[8]+1)/de[0],G=Ke*se,Ye=Ke*Qe,ye=kt/(-se+Qe),Ue=ye*-se;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ue),tt.translateZ(ye),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Yt=Ke+ye,D=ge+ye,M=G-Ue,W=Ye+(kt-Ue),ht=he*ge/D*Yt,xt=Re*ge/D*Yt;tt.projectionMatrix.makePerspective(M,W,ht,xt,Yt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function U(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let ut=tt.near,Dt=tt.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),rt.near=w.near=C.near=ut,rt.far=w.far=C.far=Dt,(nt!==rt.near||pt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),nt=rt.near,pt=rt.far),rt.layers.mask=tt.layers.mask|6,C.layers.mask=rt.layers.mask&3,w.layers.mask=rt.layers.mask&5;const kt=tt.parent,Ht=rt.cameras;U(rt,kt);for(let de=0;de<Ht.length;de++)U(Ht[de],kt);Ht.length===2?St(rt,C,w):rt.projectionMatrix.copy(C.projectionMatrix),et(tt,rt,kt)};function et(tt,ut,Dt){Dt===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(Dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Sh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(rt)},this.getCameraTexture=function(tt){return x[tt]};let _t=null;function At(tt,ut){if(v=ut.getViewerPose(p||d),A=ut,v!==null){const Dt=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let kt=!1;Dt.length!==rt.cameras.length&&(rt.cameras.length=0,kt=!0);for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge];let Re=null;if(E!==null)Re=E.getViewport(he);else{const Qe=_.getViewSubImage(S,he);Re=Qe.viewport,ge===0&&(e.setRenderTargetTextures(N,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(N))}let se=k[ge];se===void 0&&(se=new di,se.layers.enable(ge),se.viewport=new nn,k[ge]=se),se.matrix.fromArray(he.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(he.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(rt.matrix.copy(se.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),kt===!0&&rt.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const ge=_.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge].camera;if(he){let Re=x[he];Re||(Re=new J_,x[he]=Re);const se=_.getCameraImage(he);Re.sourceTexture=se}}}}for(let Dt=0;Dt<F.length;Dt++){const kt=I[Dt],Ht=F[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,ut,p||d)}_t&&_t(tt,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),A=null}const It=new tv;It.setAnimationLoop(At),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const br=new xa,Y1=new an;function Z1(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,q_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,O,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(u(y,x),A(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),R(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,P,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=e.get(x),O=P.envMap,N=P.envMapRotation;O&&(y.envMap.value=O,br.copy(N),br.x*=-1,br.y*=-1,br.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(br)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const P=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function j1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const N=O.program;r.uniformBlockBinding(P,N)}function p(P,O){let N=l[P.id];N===void 0&&(A(P),N=v(P),l[P.id]=N,P.addEventListener("dispose",y));const F=O.program;r.updateUBOMapping(P,F);const I=e.render.frame;u[P.id]!==I&&(S(P),u[P.id]=I)}function v(P){const O=_();P.__bindingPointIndex=O;const N=o.createBuffer(),F=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function _(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],N=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,z=N.length;I<z;I++){const j=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,w=j.length;C<w;C++){const k=j[C];if(E(k,I,C,F)===!0){const rt=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value];let pt=0;for(let ft=0;ft<nt.length;ft++){const L=nt[ft],H=R(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,rt+pt,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,pt),pt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,O,N,F){const I=P.value,z=O+"_"+N;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const j=F[z];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return F[z]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function A(P){const O=P.uniforms;let N=0;const F=16;for(let z=0,j=O.length;z<j;z++){const C=Array.isArray(O[z])?O[z]:[O[z]];for(let w=0,k=C.length;w<k;w++){const rt=C[w],nt=Array.isArray(rt.value)?rt.value:[rt.value];for(let pt=0,ft=nt.length;pt<ft;pt++){const L=nt[pt],H=R(L),it=N%F,Mt=it%H.boundary,St=it+Mt;N+=Mt,St!==0&&F-St<H.storage&&(N+=F-St),rt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=N,N+=H.storage}}}const I=N%F;return I>0&&(N+=F-I),P.__size=N,P.__cache={},this}function R(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const K1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function Q1(){return Pi===null&&(Pi=new Yy(K1,16,16,Us,_a),Pi.name="DFG_LUT",Pi.minFilter=Nn,Pi.magFilter=Nn,Pi.wrapS=pa,Pi.wrapT=pa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class J1{constructor(e={}){const{canvas:i=Sy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=hi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const R=E,y=new Set([Uh,Dh,wh]),x=new Set([hi,Gi,Io,Ho,Rh,Ch]),P=new Uint32Array(4),O=new Int32Array(4);let N=null,F=null;const I=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=fi;let k=0,rt=0,nt=null,pt=-1,ft=null;const L=new nn,H=new nn;let it=null;const Mt=new Be(0);let St=0,U=i.width,et=i.height,_t=1,At=null,It=null;const tt=new nn(0,0,U,et),ut=new nn(0,0,U,et);let Dt=!1;const kt=new K_;let Ht=!1,de=!1;const Ke=new an,ge=new at,he=new nn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Qe(){return nt===null?_t:1}let G=r;function Ye(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Th}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",Me,!1),G===null){const q="webgl2";if(G=Ye(q,T),G===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ae("WebGLRenderer: "+T.message),T}let ye,Ue,Yt,D,M,W,ht,xt,lt,jt,Ct,Xt,ee,Et,bt,Ft,Pt,wt,le,X,Nt,Tt,zt,yt;function vt(){ye=new Qb(G),ye.init(),Tt=new V1(G,ye),Ue=new Vb(G,ye,e,Tt),Yt=new H1(G,ye),Ue.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),D=new tT(G),M=new T1,W=new G1(G,ye,Yt,M,Ue,Tt,D),ht=new Xb(C),xt=new Kb(C),lt=new aM(G),zt=new Hb(G,lt),jt=new Jb(G,lt,D,zt),Ct=new nT(G,jt,lt,D),le=new eT(G,Ue,W),Ft=new kb(M),Xt=new b1(C,ht,xt,ye,Ue,zt,Ft),ee=new Z1(C,M),Et=new R1,bt=new L1(ye),wt=new Ib(C,ht,xt,Yt,Ct,A,m),Pt=new B1(C,Ct,Ue),yt=new j1(G,D,Ue,Yt),X=new Gb(G,ye,D),Nt=new $b(G,ye,D),D.programs=Xt.programs,C.capabilities=Ue,C.extensions=ye,C.properties=M,C.renderLists=Et,C.shadowMap=Pt,C.state=Yt,C.info=D}vt(),R!==hi&&(j=new aT(R,i.width,i.height,l,u));const Rt=new q1(C,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(U,et,!1))},this.getSize=function(T){return T.set(U,et)},this.setSize=function(T,q,st=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,et=q,i.width=Math.floor(T*_t),i.height=Math.floor(q*_t),st===!0&&(i.style.width=T+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(U*_t,et*_t).floor()},this.setDrawingBufferSize=function(T,q,st){U=T,et=q,_t=st,i.width=Math.floor(T*st),i.height=Math.floor(q*st),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(R===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,q,st,J){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,q,st,J),Yt.viewport(L.copy(tt).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,q,st,J){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,q,st,J),Yt.scissor(H.copy(ut).multiplyScalar(_t).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){Yt.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){At=T},this.setTransparentSort=function(T){It=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,st=!0){let J=0;if(T){let Z=!1;if(nt!==null){const Ut=nt.texture.format;Z=y.has(Ut)}if(Z){const Ut=nt.texture.type,Bt=x.has(Ut),Lt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;Bt?(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Gt,G.clearBufferuiv(G.COLOR,0,P)):(O[0]=Wt,O[1]=Jt,O[2]=qt,O[3]=Gt,G.clearBufferiv(G.COLOR,0,O))}else J|=G.COLOR_BUFFER_BIT}q&&(J|=G.DEPTH_BUFFER_BIT),st&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",Me,!1),wt.dispose(),Et.dispose(),bt.dispose(),M.dispose(),ht.dispose(),xt.dispose(),Ct.dispose(),zt.dispose(),yt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Nr),Rt.removeEventListener("sessionend",Bs),Di.stop()};function ne(T){T.preventDefault(),Lg("WebGLRenderer: Context Lost."),w=!0}function Le(){Lg("WebGLRenderer: Context Restored."),w=!1;const T=D.autoReset,q=Pt.enabled,st=Pt.autoUpdate,J=Pt.needsUpdate,Z=Pt.type;vt(),D.autoReset=T,Pt.enabled=q,Pt.autoUpdate=st,Pt.needsUpdate=J,Pt.type=Z}function Me(T){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Cn(T){const q=T.target;q.removeEventListener("dispose",Cn),gi(q)}function gi(T){Zo(T),M.remove(T)}function Zo(T){const q=M.get(T).programs;q!==void 0&&(q.forEach(function(st){Xt.releaseProgram(st)}),T.isShaderMaterial&&Xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,st,J,Z,Ut){q===null&&(q=Re);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=er(T,q,st,J,Z);Yt.setMaterial(J,Bt);let Gt=st.index,Wt=1;if(J.wireframe===!0){if(Gt=jt.getWireframeAttribute(st),Gt===void 0)return;Wt=2}const Jt=st.drawRange,qt=st.attributes.position;let $t=Jt.start*Wt,Ce=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),Ce=Math.min(Ce,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),Ce=Math.min(Ce,Gt.count)):qt!=null&&($t=Math.max($t,0),Ce=Math.min(Ce,qt.count));const Ze=Ce-$t;if(Ze<0||Ze===1/0)return;zt.setup(Z,J,Lt,st,Gt);let Xe,Ne=X;if(Gt!==null&&(Xe=lt.get(Gt),Ne=Nt,Ne.setIndex(Xe)),Z.isMesh)J.wireframe===!0?(Yt.setLineWidth(J.wireframeLinewidth*Qe()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*Qe()),Z.isLineSegments?Ne.setMode(G.LINES):Z.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else Z.isPoints?Ne.setMode(G.POINTS):Z.isSprite&&Ne.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,we=Z._multiDrawCounts,ie=Z._multiDrawCount,vn=Gt?lt.get(Gt).bytesPerElement:1,Xi=M.get(J).currentProgram.getUniforms();for(let xn=0;xn<ie;xn++)Xi.setValue(G,"_gl_DrawID",xn),Ne.render(Kt[xn]/vn,we[xn])}else if(Z.isInstancedMesh)Ne.renderInstances($t,Ze,Z.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,we=Math.min(st.instanceCount,Kt);Ne.renderInstances($t,Ze,we)}else Ne.render($t,Ze)};function zs(T,q,st){T.transparent===!0&&T.side===ha&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,Or(T,q,st),T.side=tr,T.needsUpdate=!0,Or(T,q,st),T.side=ha):Or(T,q,st)}this.compile=function(T,q,st=null){st===null&&(st=T),F=bt.get(st),F.init(q),z.push(F),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),T!==st&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const J=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Lt=Ut[Bt];zs(Lt,st,Z),J.add(Lt)}else zs(Ut,st,Z),J.add(Ut)}),F=z.pop(),J},this.compileAsync=function(T,q,st=null){const J=this.compile(T,q,st);return new Promise(Z=>{function Ut(){if(J.forEach(function(Bt){M.get(Bt).currentProgram.isReady()&&J.delete(Bt)}),J.size===0){Z(T);return}setTimeout(Ut,10)}ye.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ur=null;function Fs(T){Ur&&Ur(T)}function Nr(){Di.stop()}function Bs(){Di.start()}const Di=new tv;Di.setAnimationLoop(Fs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(T){Ur=T,Rt.setAnimationLoop(T),T===null?Di.stop():Di.start()},Rt.addEventListener("sessionstart",Nr),Rt.addEventListener("sessionend",Bs),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=Rt.enabled===!0&&Rt.isPresenting===!0,J=j!==null&&(nt===null||st)&&j.begin(C,nt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,q,nt),F=bt.get(T,z.length),F.init(q),z.push(F),Ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,Bi,q.reversedDepth),de=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,de),N=Et.get(T,I.length),N.init(),I.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Bt=C.xr.getDepthSensingMesh();Bt!==null&&ti(Bt,q,-1/0,C.sortObjects)}ti(T,q,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(At,It),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&wt.addToRenderList(N,T),this.info.render.frame++,Ht===!0&&Ft.beginShadows();const Z=F.state.shadowsArray;if(Pt.render(Z,T,q),Ht===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&j.hasRenderPass())===!1){const Bt=N.opaque,Lt=N.transmissive;if(F.setupLights(),q.isArrayCamera){const Gt=q.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];_n(Bt,Lt,T,qt)}se&&wt.render(T);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];rn(N,T,qt,qt.viewport)}}else Lt.length>0&&_n(Bt,Lt,T,q),se&&wt.render(T),rn(N,T,q)}nt!==null&&rt===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),J&&j.end(C),T.isScene===!0&&T.onAfterRender(C,T,q),zt.resetDefaultState(),pt=-1,ft=null,z.pop(),z.length>0?(F=z[z.length-1],Ht===!0&&Ft.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function ti(T,q,st,J){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||kt.intersectsSprite(T)){J&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Bt=Ct.update(T),Lt=T.material;Lt.visible&&N.push(T,Bt,Lt,st,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||kt.intersectsObject(T))){const Bt=Ct.update(T),Lt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),he.copy(Bt.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(Lt)){const Gt=Bt.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&N.push(T,Bt,$t,st,he.z,qt)}}else Lt.visible&&N.push(T,Bt,Lt,st,he.z,null)}}const Ut=T.children;for(let Bt=0,Lt=Ut.length;Bt<Lt;Bt++)ti(Ut[Bt],q,st,J)}function rn(T,q,st,J){const{opaque:Z,transmissive:Ut,transparent:Bt}=T;F.setupLightsView(st),Ht===!0&&Ft.setGlobalState(C.clippingPlanes,st),J&&Yt.viewport(L.copy(J)),Z.length>0&&_i(Z,q,st),Ut.length>0&&_i(Ut,q,st),Bt.length>0&&_i(Bt,q,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function _n(T,q,st,J){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[J.id]===void 0){const $t=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[J.id]=new Hi(1,1,{generateMipmaps:!0,type:$t?_a:hi,minFilter:Cr,samples:Ue.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Ut=F.state.transmissionRenderTarget[J.id],Bt=J.viewport||L;Ut.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget(),Gt=C.getActiveCubeFace(),Wt=C.getActiveMipmapLevel();C.setRenderTarget(Ut),C.getClearColor(Mt),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),se&&wt.render(st);const Jt=C.toneMapping;C.toneMapping=Ii;const qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),F.setupLightsView(J),Ht===!0&&Ft.setGlobalState(C.clippingPlanes,J),_i(T,st,J),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),ye.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ce=0,Ze=q.length;Ce<Ze;Ce++){const Xe=q[Ce],{object:Ne,geometry:Kt,material:we,group:ie}=Xe;if(we.side===ha&&Ne.layers.test(J.layers)){const vn=we.side;we.side=kn,we.needsUpdate=!0,Lr(Ne,st,J,Kt,we,ie),we.side=vn,we.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}C.setRenderTarget(Lt,Gt,Wt),C.setClearColor(Mt,St),qt!==void 0&&(J.viewport=qt),C.toneMapping=Jt}function _i(T,q,st){const J=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ut=T.length;Z<Ut;Z++){const Bt=T[Z],{object:Lt,geometry:Gt,group:Wt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&J!==null&&(Jt=J),Lt.layers.test(st.layers)&&Lr(Lt,q,st,Gt,Jt,Wt)}}function Lr(T,q,st,J,Z,Ut){T.onBeforeRender(C,q,st,J,Z,Ut),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(C,q,st,J,T,Ut),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(st,q,J,Z,T,Ut),Z.side=tr,Z.needsUpdate=!0,C.renderBufferDirect(st,q,J,Z,T,Ut),Z.side=ha):C.renderBufferDirect(st,q,J,Z,T,Ut),T.onAfterRender(C,q,st,J,Z,Ut)}function Or(T,q,st){q.isScene!==!0&&(q=Re);const J=M.get(T),Z=F.state.lights,Ut=F.state.shadowsArray,Bt=Z.state.version,Lt=Xt.getParameters(T,Z.state,Ut,q,st),Gt=Xt.getProgramCacheKey(Lt);let Wt=J.programs;J.environment=T.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(T.isMeshStandardMaterial?xt:ht).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Cn),Wt=new Map,J.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===Bt)return Is(T,Lt),Jt}else Lt.uniforms=Xt.getUniforms(T),T.onBeforeCompile(Lt,C),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),J.uniforms=Lt.uniforms;const qt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Ft.uniform),Is(T,Lt),J.needsLights=Sa(T),J.lightsStateVersion=Bt,J.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function jo(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Lc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Is(T,q){const st=M.get(T);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function er(T,q,st,J,Z){q.isScene!==!0&&(q=Re),W.resetTextureUnits();const Ut=q.fog,Bt=J.isMeshStandardMaterial?q.environment:null,Lt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ns,Gt=(J.isMeshStandardMaterial?xt:ht).get(J.envMap||Bt),Wt=J.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let Ze=Ii;J.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ze=C.toneMapping);const Xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=Xe!==void 0?Xe.length:0,Kt=M.get(J),we=F.state.lights;if(Ht===!0&&(de===!0||T!==ft)){const yn=T===ft&&J.id===pt;Ft.setState(J,T,yn)}let ie=!1;J.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==we.state.version||Kt.outputColorSpace!==Lt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Gt||J.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ft.numPlanes||Kt.numIntersection!==Ft.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==Ce||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Ne)&&(ie=!0):(ie=!0,Kt.__version=J.version);let vn=Kt.currentProgram;ie===!0&&(vn=Or(J,q,Z));let Xi=!1,xn=!1,ei=!1;const Oe=vn.getUniforms(),Sn=Kt.uniforms;if(Yt.useProgram(vn.program)&&(Xi=!0,xn=!0,ei=!0),J.id!==pt&&(pt=J.id,xn=!0),Xi||ft!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",T.projectionMatrix),Oe.setValue(G,"viewMatrix",T.matrixWorldInverse);const Mn=Oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,ge.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ft!==T&&(ft=T,xn=!0,ei=!0)}if(Kt.needsLights&&(we.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",we.state.directionalShadowMap,W),we.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",we.state.spotShadowMap,W),we.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",we.state.pointShadowMap,W)),Z.isSkinnedMesh){Oe.setOptional(G,Z,"bindMatrix"),Oe.setOptional(G,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(G,"boneTexture",yn.boneTexture,W))}Z.isBatchedMesh&&(Oe.setOptional(G,Z,"batchingTexture"),Oe.setValue(G,"batchingTexture",Z._matricesTexture,W),Oe.setOptional(G,Z,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Oe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&le.update(Z,st,vn),(xn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Oe.setValue(G,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Gt,Sn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=Q1()),xn&&(Oe.setValue(G,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&Hs(Sn,ei),Ut&&J.fog===!0&&ee.refreshFogUniforms(Sn,Ut),ee.refreshMaterialUniforms(Sn,J,_t,et,F.state.transmissionRenderTarget[T.id]),Lc.upload(G,jo(Kt),Sn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lc.upload(G,jo(Kt),Sn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(G,"center",Z.center),Oe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(G,"normalMatrix",Z.normalMatrix),Oe.setValue(G,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let Mn=0,Pr=yn.length;Mn<Pr;Mn++){const vi=yn[Mn];yt.update(vi,vn),yt.bind(vi,vn)}}return vn}function Hs(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Sa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(T,q,st){const J=M.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=q,M.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:st,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const st=M.get(T);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const ya=G.createFramebuffer();this.setRenderTarget=function(T,q=0,st=0){nt=T,k=q,rt=st;let J=null,Z=!1,Ut=!1;if(T){const Lt=M.get(T);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(T.viewport),H.copy(T.scissor),it=T.scissorTest,Yt.viewport(L),Yt.scissor(H),Yt.setScissorTest(it),pt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Lt.__hasExternalTextures)W.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?J=Wt[q][st]:J=Wt[q],Z=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?J=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[st]:J=Wt,L.copy(T.viewport),H.copy(T.scissor),it=T.scissorTest}else L.copy(tt).multiplyScalar(_t).floor(),H.copy(ut).multiplyScalar(_t).floor(),it=Dt;if(st!==0&&(J=ya),Yt.bindFramebuffer(G.FRAMEBUFFER,J)&&Yt.drawBuffers(T,J),Yt.viewport(L),Yt.scissor(H),Yt.setScissorTest(it),Z){const Lt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Ut){const Lt=q;for(let Gt=0;Gt<T.textures.length;Gt++){const Wt=M.get(T.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,st,Lt)}}else if(T!==null&&st!==0){const Lt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}pt=-1},this.readRenderTargetPixels=function(T,q,st,J,Z,Ut,Bt,Lt=0){if(!(T&&T.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=T.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Ue.textureFormatReadable(Jt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(qt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-J&&st>=0&&st<=T.height-Z&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,J,Z,Tt.convert(Jt),Tt.convert(qt),Ut))}finally{const Wt=nt!==null?M.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,q,st,J,Z,Ut,Bt,Lt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(q>=0&&q<=T.width-J&&st>=0&&st<=T.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=T.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Ue.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,J,Z,Tt.convert(Jt),Tt.convert(qt),0);const Ce=nt!==null?M.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Ce);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await yy(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer($t),G.deleteSync(Ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,st=0){const J=Math.pow(2,-st),Z=Math.floor(T.image.width*J),Ut=Math.floor(T.image.height*J),Bt=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Bt,Lt,Z,Ut),Yt.unbindTexture()};const nr=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(T,q,st=null,J=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let Bt,Lt,Gt,Wt,Jt,qt,$t,Ce,Ze;const Xe=T.isCompressedTexture?T.mipmaps[Ut]:T.image;if(st!==null)Bt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,Jt=st.min.y,qt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-Z);Bt=Math.floor(Xe.width*fn),Lt=Math.floor(Xe.height*fn),T.isDataArrayTexture?Gt=Xe.depth:T.isData3DTexture?Gt=Math.floor(Xe.depth*fn):Gt=1,Wt=0,Jt=0,qt=0}J!==null?($t=J.x,Ce=J.y,Ze=J.z):($t=0,Ce=0,Ze=0);const Ne=Tt.convert(q.format),Kt=Tt.convert(q.type);let we;q.isData3DTexture?(W.setTexture3D(q,0),we=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),we=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),we=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ie=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ei=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Oe=T.isDataArrayTexture||T.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const fn=M.get(T),yn=M.get(q),Mn=M.get(fn.__renderTarget),Pr=M.get(yn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let vi=0;vi<Gt;vi++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Z,qt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Ut,Ze+vi)),G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,Ce,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||M.has(T)){const fn=M.get(T),yn=M.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,nr),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let Mn=0;Mn<Gt;Mn++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qt+Mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Ut,Ze+Mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Ut),Z!==0?G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,Ce,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(we,Ut,$t,Ce,Ze+Mn,Wt,Jt,Bt,Lt):G.copyTexSubImage2D(we,Ut,$t,Ce,Wt,Jt,Bt,Lt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(we,Ut,$t,Ce,Ze,Bt,Lt,Gt,Ne,Kt,Xe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(we,Ut,$t,Ce,Ze,Bt,Lt,Gt,Ne,Xe.data):G.texSubImage3D(we,Ut,$t,Ce,Ze,Bt,Lt,Gt,Ne,Kt,Xe):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,Bt,Lt,Ne,Kt,Xe.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,Xe.width,Xe.height,Ne,Xe.data):G.texSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,Bt,Lt,Ne,Kt,Xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ei),Ut===0&&q.generateMipmaps&&G.generateMipmap(we),Yt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){k=0,rt=0,nt=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const $1=()=>{const[o,e]=Ti.useState(0),[i,r]=Ti.useState(!1),l=Ti.useRef(null);Ti.useEffect(()=>{const R=()=>e(window.scrollY);return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R)}},[]);const u=400;let d=1730;if(typeof window<"u"){const R=window.innerWidth;R<768?d=1200:R<1024&&(d=1400)}const h=window.innerWidth<768,m=(o-d)/u,p=Math.max(0,Math.min(1,m)),v=`${100-p*100}%`,_=p,S={...h?{aspectRatio:"1 / 1"}:{height:"calc(100vh - 200px)",maxHeight:"2000px"}};Ti.useEffect(()=>{if(!l.current)return;const R=new qy,y=new di(75,window.innerWidth/window.innerHeight,.1,1e3),x=new J1({canvas:l.current,alpha:!0,antialias:!0});x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,0),y.position.z=5;const P=new mi,O=1e3,N=new Float32Array(O*3);for(let nt=0;nt<O*3;nt++)N[nt]=(Math.random()-.5)*10;P.setAttribute("position",new Ci(N,3));const F=new Q_({size:.015,color:13938487,transparent:!0,opacity:.8,blending:Cd}),I=new Qy(P,F);R.add(I);const z=new zh(2,.02,16,100),j=new Ph({color:13938487,transparent:!0,opacity:.3}),C=new wi(z,j),w=new wi(z,j);w.rotation.x=Math.PI/2,R.add(C,w);const k=()=>{requestAnimationFrame(k),I.rotation.y+=.001,I.rotation.x+=5e-4,C.rotation.x+=.003,C.rotation.y+=.002,w.rotation.y+=.002,w.rotation.z+=.003,y.lookAt(0,0,0),x.render(R,y)};k();const rt=()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",rt),()=>{window.removeEventListener("resize",rt),x.dispose()}},[]);const E=R=>{document.getElementById(R)?.scrollIntoView({behavior:"smooth"}),r(!1)},A=[{icon:zS,title:"Bezpieczeństwo",desc:"Najwyższej klasy systemy i doświadczony kierowca"},{icon:BS,title:"Prestiż",desc:"Najbardziej rozpoznawalna marka premium"},{icon:bg,title:"Komfort",desc:"Luksusowe wnętrze z najlepszych materiałów"},{icon:bS,title:"Doskonałość",desc:"Perfekcja w każdym detalu"}];return ct.createElement("div",{className:"bg-black text-white font-sans overflow-hidden relative"},ct.createElement("canvas",{ref:l,className:"fixed top-0 left-0 w-full h-full pointer-events-none z-0",style:{opacity:.4}}),ct.createElement("div",{className:"fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"},ct.createElement("div",{className:"absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-3xl opacity-20",style:{top:"10%",left:"10%"}}),ct.createElement("div",{className:"absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-3xl opacity-20",style:{bottom:"20%",right:"10%"}})),ct.createElement("nav",{className:"fixed top-0 w-full z-50 transition-all duration-300",style:{background:o>50?"rgba(0, 0, 0, 0.7)":"transparent",backdropFilter:o>50?"blur(20px)":"none"}},ct.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"flex justify-between items-center h-20 md:h-24"},ct.createElement("div",{className:"text-xl md:text-3xl font-thin tracking-[0.2em] md:tracking-[0.3em] relative"},ct.createElement("span",{className:"absolute inset-0 blur-sm bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"},"BENTLEY"),ct.createElement("span",{className:"relative bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"},"BENTLEY")),ct.createElement("div",{className:"hidden lg:flex items-center space-x-8 xl:space-x-12"},["Start","O Samochodzie","Galeria","Kontakt"].map((R,y)=>ct.createElement("button",{key:y,onClick:()=>E(["home","about","gallery","contact"][y]),className:"relative text-sm tracking-widest hover:text-amber-400 transition-all duration-300 group"},R,ct.createElement("span",{className:"absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300"}))),ct.createElement("a",{href:"tel:999999999",className:"px-6 xl:px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"},"ZADZWOŃ")),ct.createElement("button",{className:"lg:hidden text-amber-400",onClick:()=>r(!i)},i?ct.createElement(HS,{size:24}):ct.createElement(LS,{size:24}))),i&&ct.createElement("div",{className:"lg:hidden py-6 space-y-4 backdrop-blur-xl bg-black/80"},["Start","O Samochodzie","Galeria","Kontakt"].map((R,y)=>ct.createElement("button",{key:y,onClick:()=>E(["home","about","gallery","contact"][y]),className:"block w-full text-left py-3 text-base tracking-wider hover:text-amber-400 transition-colors"},R)),ct.createElement("a",{href:"tel:999999999",className:"block text-center py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider"},"ZADZWOŃ")))),ct.createElement("section",{id:"home",className:"relative min-h-screen flex items-center justify-center overflow-hidden px-4"},ct.createElement("div",{className:"absolute inset-0"},ct.createElement("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"}),ct.createElement("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"})),ct.createElement("div",{className:"relative z-10 text-center max-w-6xl mx-auto w-full"},ct.createElement("div",{className:"mb-6 md:mb-8 inline-block",style:{opacity:1-o/500}},ct.createElement("div",{className:"text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 animate-pulse"},"Ekskluzywny Wynajem"),ct.createElement("div",{className:"h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"})),ct.createElement("h1",{className:"text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[6rem] font-thin mb-6 md:mb-8 tracking-tighter leading-none",style:{opacity:1-o/400}},ct.createElement("span",{className:"block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"},"BENTLEY"),ct.createElement("span",{className:"block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent font-light"},"FLYING SPUR")),ct.createElement("p",{className:"text-base sm:text-lg md:text-1xl lg:text-1xl mb-12 md:mb-16 text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4",style:{opacity:1-o/500}},"Uczyń swój ślub ",ct.createElement("span",{className:"text-amber-400"},"niezapomnianym"),". Luksus, elegancja i prestiż w jednym."),ct.createElement("div",{className:"flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"},ct.createElement("a",{href:"tel:999999999",className:"group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold tracking-widest overflow-hidden transform hover:scale-105 transition-all duration-300 text-sm md:text-base"},ct.createElement("div",{className:"absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),ct.createElement("div",{className:"relative flex items-center justify-center gap-3"},ct.createElement(Tg,{size:18,className:"md:w-5 md:h-5"}),"ZADZWOŃ TERAZ"),ct.createElement("div",{className:"absolute inset-0 shadow-lg shadow-amber-500/50 group-hover:shadow-amber-500/80 transition-all duration-300"})),ct.createElement("button",{onClick:()=>E("contact"),className:"group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border-2 border-amber-400 text-amber-400 font-semibold tracking-widest overflow-hidden backdrop-blur-sm bg-black/30 text-sm md:text-base"},ct.createElement("div",{className:"absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"}),ct.createElement("span",{className:"relative group-hover:text-black transition-colors duration-300"},"ZAPYTAJ O OFERTĘ")))),ct.createElement("div",{className:"absolute bottom-8 md:bottom-4 left-1/2",style:{opacity:1-o/300,transform:"translateX(-35%)"}},ct.createElement("div",{className:"animate-bounce flex flex-col items-center"},ct.createElement(AS,{size:32,className:"md:w-10 md:h-10 text-amber-400"})),ct.createElement("div",{className:"text-xs tracking-widest text-amber-400 mt-2"},"SCROLL")),ct.createElement("div",{className:"hidden md:block absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"}),ct.createElement("div",{className:"hidden md:block absolute bottom-1/4 right-10 w-3 h-3 border border-amber-400 rotate-45"})),ct.createElement("section",{className:"relative py-20 md:py-32 overflow-hidden"},ct.createElement("div",{className:"absolute inset-0 flex items-center justify-center",style:{transform:`scale(${1+o/3e3})`}},ct.createElement("div",{className:"w-full h-full bg-gradient-to-br from-amber-900/20 via-black to-black"})),ct.createElement("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"backdrop-blur-xl bg-white/5 border border-amber-400/20 p-1 md:p-2 rounded-lg shadow-2xl"},ct.createElement("div",{className:"aspect-video bg-gradient-to-br from-gray-900 via-amber-900/20 to-black flex items-center justify-center text-xl sm:text-3xl md:text-5xl lg:text-6xl text-amber-400/30 font-thin tracking-wider rounded p-4 text-center leading-tight"},"[FILMIK PREZENTACYJNY",ct.createElement("br",{className:"hidden sm:block"}),"BENTLEY FLYING SPUR]")))),ct.createElement("section",{id:"about",className:"relative py-20 md:py-40"},ct.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"space-y-6 md:space-y-8",style:{transform:window.innerWidth>=1024?`translateX(${Math.max(0,200-o+800)}px)`:"none",opacity:Math.min(1,(o-800)/300)}},ct.createElement("div",{className:"flex"},ct.createElement("div",{className:"flex-1"},ct.createElement("div",{className:"text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6"},"O Samochodzie"),ct.createElement("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-6 md:mb-8 leading-tight"},"Bentley",ct.createElement("br",null),ct.createElement("span",{className:"bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light"},"Flying Spur")),ct.createElement("div",{className:"h-1 w-20 md:w-24 bg-gradient-to-r from-amber-400 to-transparent mb-6 md:mb-8"}),ct.createElement("p",{className:"text-gray-400 text-base md:text-lg leading-relaxed font-light"},"Bentley Flying Spur to uosobienie brytyjskiego luksusu i rzemiosła motoryzacyjnego. Ten wyjątkowy samochód łączy w sobie niespotykaną elegancję z imponującą mocą, tworząc idealne połączenie dla najbardziej wymagających ceremonii ślubnych."))),ct.createElement("div",{className:"flex flex-col md:flex-row gap-4"},A.map((R,y)=>ct.createElement("div",{key:y,className:"flex-1 group rounded-lg backdrop-blur-xl bg-white/5 border border-amber-400/10 p-5 md:p-6 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105",style:{opacity:Math.min(1,(o-1e3)/300)}},ct.createElement("div",{className:"bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300"},ct.createElement(R.icon,{className:"text-amber-400",size:20})),ct.createElement("h3",{className:"text-lg md:text-xl font-light mb-2 tracking-wide"},R.title),ct.createElement("p",{className:"text-gray-500 text-sm leading-relaxed"},R.desc))))))),ct.createElement("section",{className:"lg:mb-40 lg:pl-20 lg:pr-20 mb-40 pr-10 pl-10"},ct.createElement("div",{className:"relative mt-12 lg:mt-0",style:{transform:`translateX(${v})`,opacity:_,willChange:"transform, opacity"}},ct.createElement("div",{className:"relative"},ct.createElement("div",{className:`w-full h-full bg-gradient-to-br from-amber-900/30 via-black to-black\r
                      flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl\r
                      text-amber-400/20 font-thin backdrop-blur-sm border border-amber-400/20\r
                      rounded-lg p-8 md:p-12 text-center leading-tight`,style:S},"[GŁÓWNE ZDJĘCIE",ct.createElement("br",null),"BENTLEY",ct.createElement("br",null),"FLYING SPUR]")),ct.createElement("div",{className:"absolute -inset-8 border border-amber-400/20 rounded-lg -z-10"}))),ct.createElement("section",{id:"gallery",className:"relative py-20 md:py-40 overflow-hidden"},ct.createElement("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black"}),ct.createElement("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"text-center mb-12 md:mb-20"},ct.createElement("div",{className:"text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6"},"Galeria"),ct.createElement("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4 md:mb-6"},"Zobacz"," ",ct.createElement("span",{className:"bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light"},"Detale")),ct.createElement("div",{className:"h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"})),ct.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"},[1,2,3,4,5,6].map(R=>ct.createElement("div",{key:R,className:"group relative overflow-hidden",style:{opacity:Math.min(1,(o-1800-R*50)/200),transform:`translateY(${Math.max(0,50-(o-1800-R*50)/4)}px)`}},ct.createElement("div",{className:"aspect-video backdrop-blur-xl bg-gradient-to-br from-amber-900/20 via-black to-black flex items-center justify-center text-lg sm:text-xl md:text-2xl text-amber-400/30 font-thin border border-amber-400/20 rounded-lg overflow-hidden relative group-hover:border-amber-400/40 transition-all duration-500 p-4"},ct.createElement("span",{className:"relative z-10 text-center"},"[ZDJĘCIE ",R,"]"),ct.createElement("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/10 group-hover:to-yellow-600/10 transition-all duration-500"})),ct.createElement("div",{className:"absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-20 transform scale-105 group-hover:scale-100 transition-all duration-500 rounded-lg pointer-events-none"})))))),ct.createElement("section",{id:"contact",className:"relative py-20 md:py-40"},ct.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"text-center mb-12 md:mb-20"},ct.createElement("div",{className:"text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6"},"Kontakt"),ct.createElement("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4 md:mb-6"},"Skontaktuj się"," ",ct.createElement("span",{className:"bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light"},"z Nami")),ct.createElement("div",{className:"h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"})),ct.createElement("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"},[{icon:Tg,label:"Telefon",value:"999 999 999",href:"tel:999999999"},{icon:wS,label:"Email",value:"kontakt@bentleywedding.pl",href:"mailto:kontakt@bentleywedding.pl"},{icon:US,label:"Adres",value:"Warszawa, Polska"},{icon:bg,label:"Godziny",value:"Pn-Pt: 9-20, Sb-Nd: 10-18"}].map((R,y)=>ct.createElement("a",{key:y,href:R.href||"#",className:"group flex flex-col items-center text-center backdrop-blur-xl bg-white/5 border border-amber-400/20 p-6 md:p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"},ct.createElement("div",{className:"bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 md:mb-6"},ct.createElement(R.icon,{className:"text-amber-400",size:24})),ct.createElement("div",{className:"text-xs text-amber-400 tracking-wider uppercase mb-2"},R.label),ct.createElement("div",{className:"text-sm md:text-base font-light break-all"},R.value)))))),ct.createElement("footer",{className:"relative border-t border-amber-400/20 py-12 md:py-20"},ct.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ct.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"},ct.createElement("div",{className:"sm:col-span-2"},ct.createElement("h3",{className:"text-2xl md:text-3xl font-thin tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6"},ct.createElement("span",{className:"bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"},"BENTLEY"),ct.createElement("span",{className:"text-white"}," WEDDING")),ct.createElement("p",{className:"text-gray-500 leading-relaxed font-light text-sm md:text-base"},"Ekskluzywny wynajem Bentley Flying Spur na Twój wymarzony ślub. Luksus i elegancja w każdym detalu.")),ct.createElement("div",null,ct.createElement("h4",{className:"text-amber-400 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6"},"Szybkie Linki"),ct.createElement("div",{className:"space-y-2 md:space-y-3"},["O Samochodzie","Galeria","Kontakt"].map((R,y)=>ct.createElement("button",{key:y,onClick:()=>E(["about","gallery","contact"][y]),className:"block text-gray-500 hover:text-amber-400 transition-colors font-light text-sm md:text-base"},R)))),ct.createElement("div",null,ct.createElement("h4",{className:"text-amber-400 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6"},"Kontakt"),ct.createElement("div",{className:"space-y-2 md:space-y-3 text-gray-500 font-light text-sm md:text-base"},ct.createElement("a",{href:"tel:999999999",className:"block hover:text-amber-400 transition-colors"},"999 999 999"),ct.createElement("a",{href:"mailto:kontakt@bentleywedding.pl",className:"block hover:text-amber-400 transition-colors break-all"},"kontakt@bentleywedding.pl"),ct.createElement("p",null,"Warszawa, Polska")))),ct.createElement("div",{className:"border-t border-amber-400/20 pt-6 md:pt-8 text-center text-gray-600 text-xs md:text-sm font-light tracking-wider"},ct.createElement("p",null,"© 2024 Bentley Wedding. Wszystkie prawa zastrzeżone."))),ct.createElement("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"})))};_S.createRoot(document.getElementById("root")).render(ct.createElement(ct.StrictMode,null,ct.createElement($1,null)));
