/*! For license information please see b32eb834fbd43ab990e25c71f97d05c4fbb799a1-fd7b6cac6f84e786f4ce.js.LICENSE.txt */
(self.webpackChunksimple_gallery=self.webpackChunksimple_gallery||[]).push([[656],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8525:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(7294),o=n(5697),a=n.n(o),i=n(4184),c=n.n(i),l=n(2040);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var s=["className","cssModule","active","tag","innerRef"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var h={active:a().bool,className:a().string,cssModule:a().object,disabled:a().bool,href:a().any,innerRef:a().oneOfType([a().object,a().func,a().string]),onClick:a().func,tag:l.iC},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(i,e);var t,n,o,a=d(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).onClick=t.onClick.bind(v(t)),t}return t=i,(n=[{key:"onClick",value:function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.active,a=e.tag,i=void 0===a?"a":a,u=e.innerRef,y=p(e,s),b=(0,l.mx)(c()(t,"nav-link",{disabled:y.disabled,active:o}),n);return r.createElement(i,f({},y,{ref:u,onClick:this.onClick,className:b}))}}])&&y(t.prototype,n),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);g.propTypes=h;var O=g,j=["expand","className","cssModule","light","dark","fixed","sticky","color","container","tag","children"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={children:a().node,className:a().string,color:a().string,container:a().oneOfType([a().bool,a().string]),cssModule:a().object,dark:a().bool,expand:a().oneOfType([a().bool,a().string]),fixed:a().string,light:a().bool,role:a().string,sticky:a().string,tag:l.iC};function S(e){var t,n=e.expand,o=void 0!==n&&n,a=e.className,i=e.cssModule,u=e.light,s=e.dark,f=e.fixed,p=e.sticky,y=e.color,b=e.container,d=void 0===b?"fluid":b,v=e.tag,m=void 0===v?"nav":v,h=e.children,g=x(e,j),O=(0,l.mx)(c()(a,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-".concat(e))}(o),(E(t={"navbar-light":u,"navbar-dark":s},"bg-".concat(y),y),E(t,"fixed-".concat(f),f),E(t,"sticky-".concat(p),p),t)),i),k=d&&!0===d?"container":"container-".concat(d);return r.createElement(m,w({},g,{className:O}),d?r.createElement("div",{className:k},h):h)}S.propTypes=k;var P=S,C=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M={card:a().bool,className:a().string,cssModule:a().object,fill:a().bool,horizontal:a().oneOf(["center","end"]),justified:a().bool,navbar:a().bool,pills:a().bool,tabs:a().bool,tag:l.iC,vertical:a().oneOfType([a().bool,a().string])};function _(e){var t=e.className,n=e.cssModule,o=e.tabs,a=e.pills,i=e.vertical,u=void 0!==i&&i,s=e.horizontal,f=e.justified,p=e.fill,y=e.navbar,b=e.card,d=e.tag,v=void 0===d?"ul":d,m=T(e,C),h=(0,l.mx)(c()(t,y?"navbar-nav":"nav",!!s&&"justify-content-".concat(s),function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-".concat(e,"-column"))}(u),{"nav-tabs":o,"card-header-tabs":b&&o,"nav-pills":a,"card-header-pills":b&&a,"nav-justified":f,"nav-fill":p}),n);return r.createElement(v,N({},m,{className:h}))}_.propTypes=M;var R=_,A=n(4160);var I=e=>{let{pageTitle:t,children:n}=e;var o=[r.createElement(O,null,r.createElement(A.rU,{to:"/"},"Character Design")),r.createElement(O,null,r.createElement(A.rU,{to:"/illustration/"},"Illustration")),r.createElement(O,null,r.createElement(A.rU,{to:"/story/"},"Story")),r.createElement(O,null,r.createElement(A.rU,{to:"/shortfilms/"},"Short Films")),r.createElement(O,null,r.createElement(A.rU,{to:"/about/"},"About"))];return r.createElement("div",{className:"layout"},r.createElement("main",null,r.createElement("div",{className:"menu"},r.createElement(P,null,r.createElement(R,{className:"m-auto"},o))),r.createElement("div",{className:"header",style:{textAlign:"center",paddingBottom:"30px"}},r.createElement("h1",null,"Matthew Lei"),r.createElement("h2",null,t)),n))}},2040:function(e,t,n){"use strict";n.d(t,{Kn:function(){return p},iC:function(){return f},mx:function(){return c},x9:function(){return u}});var r,o=n(5697),a=n.n(o);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var l={};function u(e,t){return function(n,r,o){var a;null!==n[r]&&void 0!==n[r]&&(a='"'.concat(r,'" property of "').concat(o,'" has been deprecated.\n').concat(t),l[a]||("undefined"!=typeof console&&console.error(a),l[a]=!0));for(var i=arguments.length,c=new Array(i>3?i-3:0),u=3;u<i;u++)c[u-3]=arguments[u];return e.apply(void 0,[n,r,o].concat(c))}}var s="object"===("undefined"==typeof window?"undefined":i(window))&&window.Element||function(){};a().oneOfType([a().string,a().func,function(e,t,n){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]);var f=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]);"undefined"==typeof window||!window.document||window.document.createElement;function p(e){var t=i(e);return null!=e&&("object"===t||"function"===t)}}}]);
//# sourceMappingURL=b32eb834fbd43ab990e25c71f97d05c4fbb799a1-fd7b6cac6f84e786f4ce.js.map