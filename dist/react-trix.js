parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.concurrent_mode"):60111,a=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,s=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,r,t,n,o,u,l,i){if(!e){if(e=void 0,void 0===r)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,n,o,u,l,i],c=0;(e=Error(r.replace(/%s/g,function(){return f[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var r=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<r;n++)t+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}function S(){}function $(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=$.prototype=new S;g.constructor=$,e(g,_.prototype),g.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,n){var o=void 0,u={},l=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(l=""+r.key),r)w.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var c=Array(f),a=0;a<f;a++)c[a]=arguments[a+2];u.children=c}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:t,type:e,key:l,ref:i,props:u,_owner:k.current}}function j(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function E(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var R=/\/+/g,O=[];function A(e,r,t,n){if(O.length){var o=O.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function q(e,r,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return o(u,e,""===r?"."+I(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var f=0;f<e.length;f++){var c=r+I(l=e[f],f);i+=q(l,c,o,u)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=d&&e[d]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),f=0;!(l=e.next()).done;)i+=q(l=l.value,c=r+I(l,f++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return i}function F(e,r,t){return null==e?0:q(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?E(e.key):r.toString(36)}function M(e,r){e.func.call(e.context,r,e.count++)}function T(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?V(e,n,t,function(e){return e}):null!=e&&(C(e)&&(e=j(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function V(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),F(e,T,r=A(r,u,n,o)),U(r)}var D={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return V(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;F(e,M,r=A(null,null,r,t)),U(r)},count:function(e){return F(e,function(){return null},null)},toArray:function(e){var r=[];return V(e,r,null,function(e){return e}),r},only:function(e){return C(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:$,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},Fragment:o,StrictMode:u,Suspense:p,createElement:P,cloneElement:function(r,n,o){null==r&&m("267",r);var u=void 0,l=e({},r.props),i=r.key,f=r.ref,c=r._owner;if(null!=n){void 0!==n.ref&&(f=n.ref,c=k.current),void 0!==n.key&&(i=""+n.key);var a=void 0;for(u in r.type&&r.type.defaultProps&&(a=r.type.defaultProps),n)w.call(n,u)&&!x.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var p=0;p<u;p++)a[p]=arguments[p+2];l.children=a}return{$$typeof:t,type:r.type,key:i,ref:f,props:l,_owner:c}},createFactory:function(e){var r=P.bind(null,e);return r.type=e,r},isValidElement:C,version:"16.7.0",unstable_ConcurrentMode:c,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:e}},L={default:D},N=L&&D||L;module.exports=N.default||N;
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"kdL1":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),e=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("react")),n=function(e){function n(t){var r=e.call(this,t)||this;return r.container=null,r.editor=null,r.d=null,r.id=r.generateId(),r.state={showMergeTags:!1,tags:[]},r}return t(n,e),n.prototype.generateId=function(){var t=(new Date).getTime();return"T"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?r:3&r|8).toString(16)})},n.prototype.componentDidMount=function(){var t=this,e=this.props;this.container=document.getElementById("editor-"+this.id),this.container?(this.container.addEventListener("trix-initialize",function(){t.editor=t.container.editor,t.editor||console.error("cannot  find trix editor"),e.onEditorReady&&"function"==typeof e.onEditorReady&&e.onEditorReady(t.editor)},!1),this.container.addEventListener("trix-change",this.handleChange.bind(this),!1),e.uploadURL&&this.container.addEventListener("trix-attachment-add",this.handleUpload.bind(this))):console.error("editor not found")},n.prototype.componentWillUnmount=function(){this.container.removeEventListener("trix-initialize",this.handleChange),this.container.removeEventListener("trix-change",this.handleChange),this.props.uploadURL&&this.container.removeEventListener("trix-attachment-add",this.handleUpload)},n.prototype.handleChange=function(t){var e=this.props,r=this.state,n=t.target.innerText;e.onChange&&e.onChange(t.target.innerHTML,n);var o=this.editor.getSelectedRange();if(n&&o[0]==o[1]&&e.mergeTags){var i=o[0]-1;if(i>=0&&i<n.length)for(var a=n[i],s=0;s<e.mergeTags.length;s++)if(a==e.mergeTags[s].trigger){r.showMergeTags=!0,r.tags=e.mergeTags[s].tags,this.setState(r);break}}},n.prototype.handleUpload=function(t){var e=t.attachment;if(e.file)return this.uploadAttachment(e)},n.prototype.uploadAttachment=function(t){var e,r,n;if(e=t.file,r=new FormData,this.props.uploadData)for(var o in this.props.uploadData)r.append(o,this.props.uploadData[o]);return r.append(this.props.fileParamName||"file",e),(n=new XMLHttpRequest).open("POST",this.props.uploadURL,!0),n.upload.onprogress=function(e){var r=e.loaded/e.total*100;return t.setUploadProgress(r)},n.onload=function(){var e,r;if(n.status>=200&&n.status<300)return r=e=n.responseText,t.setAttributes({url:r,href:e})},n.send(r)},n.prototype.handleTagSelected=function(t,e){e.preventDefault();var r=this.state;r.showMergeTags=!1,this.setState(r),this.editor.expandSelectionInDirection("backward"),this.editor.insertString(t.tag)},n.prototype.renderTagSelector=function(t){var e=this;if(!t)return null;var n=document.getElementById("trix-editor-top-level").getBoundingClientRect(),o=this.editor.getClientRectAtPosition(this.editor.getSelectedRange()[0]),i={position:"absolute",top:o.top+25-n.top,left:o.left+25-n.left,width:"250px",boxSizing:"border-box",padding:0,margin:".2em 0 0",backgroundColor:"hsla(0,0%,100%,.9)",borderRadius:".3em",background:"linear-gradient(to bottom right, white, hsla(0,0%,100%,.8))",border:"1px solid rgba(0,0,0,.3)",boxShadow:".05em .2em .6em rgba(0,0,0,.2)",textShadow:"none"},a={display:"block",padding:".2em .5em",cursor:"pointer"};return r.createElement("div",{style:i,className:"react-trix-suggestions"},t.map(function(t){return r.createElement("a",{key:t.name,style:a,href:"#",onClick:e.handleTagSelected.bind(e,t)},t.name)}))},n.prototype.render=function(){var t=this,e=this.state,n=this.props,o={id:"editor-"+this.id,input:"input-"+this.id};n.className&&(o.class=n.className),n.autoFocus&&(o.autoFocus=n.autoFocus.toString()),n.placeholder&&(o.placeholder=n.placeholder),n.toolbar&&(o.toolbar=n.toolbar);var i=null;return e.showMergeTags&&(i=this.renderTagSelector(e.tags)),r.createElement("div",{id:"trix-editor-top-level",ref:function(e){return t.d=e},style:{position:"relative"}},r.createElement("trix-editor",o),r.createElement("input",{type:"hidden",id:"input-"+this.id,value:this.props.value}),i)},n}(r.Component);exports.TrixEditor=n;
},{"react":"n8MK"}]},{},["kdL1"], null)
//# sourceMappingURL=/react-trix.js.map