(function(){
'use strict';var h=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function p(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function q(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function t(b,a,c){c=c?c:new Set;for(var d=b;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)t(d,a,c);d=q(b,e);continue}else if("template"===f){d=q(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)t(e,a,c)}d=d.firstChild?d.firstChild:q(b,d)}}function u(b,a,c){b[a]=c};function v(){this.a=new Map;this.o=new Map;this.f=[];this.b=!1}function ba(b,a,c){b.a.set(a,c);b.o.set(c.constructor,c)}function w(b,a){b.b=!0;b.f.push(a)}function x(b,a){b.b&&t(a,function(a){return y(b,a)})}function y(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.f.length;c++)b.f[c](a)}}function z(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state?b.connectedCallback(d):A(b,d)}}
function B(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state&&b.disconnectedCallback(d)}}
function C(b,a,c){c=c?c:{};var d=c.w||new Set,e=c.s||function(a){return A(b,a)},f=[];t(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var c=a.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var c=a.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);C(b,c,{w:f,s:e})}})}else f.push(a)},d);if(b.b)for(a=0;a<
f.length;a++)y(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function A(b,a){if(void 0===a.__CE_state){var c=a.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=b.a.get(a.localName)){c.constructionStack.push(a);var d=c.constructor;try{try{if(new d!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(m){throw a.__CE_state=2,m;}a.__CE_state=1;a.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}p(a)&&b.connectedCallback(a)}}}v.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};v.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
v.prototype.attributeChangedCallback=function(b,a,c,d,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,c,d,e)};function D(b,a){this.c=b;this.a=a;this.b=void 0;C(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function E(b){b.b&&b.b.disconnect()}D.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||E(this);for(a=0;a<b.length;a++)for(var c=b[a].addedNodes,d=0;d<c.length;d++)C(this.c,c[d])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function F(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function G(b){this.i=!1;this.c=b;this.m=new Map;this.j=function(b){return b()};this.g=!1;this.l=[];this.u=new D(b,document)}
G.prototype.define=function(b,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var d,e,f,m,l;try{var g=function(b){var a=k[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},k=a.prototype;if(!(k instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");d=g("connectedCallback");e=g("disconnectedCallback");f=g("adoptedCallback");m=g("attributeChangedCallback");l=a.observedAttributes||[]}catch(r){return}finally{this.i=!1}a={localName:b,constructor:a,connectedCallback:d,disconnectedCallback:e,adoptedCallback:f,attributeChangedCallback:m,observedAttributes:l,constructionStack:[]};ba(this.c,b,a);this.l.push(a);this.g||
(this.g=!0,this.j(function(){return da(c)}))};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.l,c=[],d=new Map,e=0;e<a.length;e++)d.set(a[e].localName,[]);C(b.c,document,{s:function(a){if(void 0===a.__CE_state){var e=a.localName,f=d.get(e);f?f.push(a):b.c.a.get(e)&&c.push(a)}}});for(e=0;e<c.length;e++)A(b.c,c[e]);for(;0<a.length;){for(var f=a.shift(),e=f.localName,f=d.get(f.localName),m=0;m<f.length;m++)A(b.c,f[m]);(e=b.m.get(e))&&F(e)}}}G.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};
G.prototype.whenDefined=function(b){if(!n(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.m.get(b);if(a)return a.f;a=new ca;this.m.set(b,a);this.c.a.get(b)&&!this.l.some(function(a){return a.localName===b})&&F(a);return a.f};G.prototype.v=function(b){E(this.u);var a=this.j;this.j=function(c){return b(function(){return a(c)})}};window.CustomElementRegistry=G;G.prototype.define=G.prototype.define;G.prototype.get=G.prototype.get;
G.prototype.whenDefined=G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback=G.prototype.v;var H=window.Document.prototype.createElement,ea=window.Document.prototype.createElementNS,fa=window.Document.prototype.importNode,ga=window.Document.prototype.prepend,ha=window.Document.prototype.append,ia=window.DocumentFragment.prototype.prepend,ja=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,J=window.Node.prototype.appendChild,K=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),O=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Q=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,T=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.prepend,na=window.Element.prototype.append,
V=window.Element.prototype.before,oa=window.Element.prototype.after,pa=window.Element.prototype.replaceWith,qa=window.Element.prototype.remove,ra=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),sa=window.HTMLElement.prototype.insertAdjacentElement;function ta(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,d=b.o.get(a);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(!e.length)return e=H.call(document,d.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=d,y(b,e),e;var d=e.length-1,f=e[d];if(f===h)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=h;Object.setPrototypeOf(f,a.prototype);y(b,f);return f}a.prototype=ra.prototype;return a}()};function Y(b,a,c){function d(a){return function(d){for(var c=[],e=0;e<arguments.length;++e)c[e-0]=arguments[e];for(var e=[],f=[],k=0;k<c.length;k++){var r=c[k];r instanceof Element&&p(r)&&f.push(r);if(r instanceof DocumentFragment)for(r=r.firstChild;r;r=r.nextSibling)e.push(r);else e.push(r)}a.apply(this,c);for(c=0;c<f.length;c++)B(b,f[c]);if(p(this))for(c=0;c<e.length;c++)f=e[c],f instanceof Element&&z(b,f)}}c.h&&(a.prepend=d(c.h));c.append&&(a.append=d(c.append))};function ua(){var b=X;u(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var c=b.a.get(a);if(c)return new c.constructor}a=H.call(this,a);y(b,a);return a});u(Document.prototype,"importNode",function(a,c){a=fa.call(this,a,c);this.__CE_hasRegistry?C(b,a):x(b,a);return a});u(Document.prototype,"createElementNS",function(a,c){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var d=b.a.get(c);if(d)return new d.constructor}a=ea.call(this,a,c);y(b,a);return a});
Y(b,Document.prototype,{h:ga,append:ha})};function va(){var b=X;function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,l=e.length;if(0<l&&p(this))for(var c=Array(l),g=0;g<l;g++)c[g]=e[g]}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)B(b,c[a])}}})}u(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=K.call(this,a,d);if(p(this))for(d=0;d<c.length;d++)z(b,c[d]);return a}c=p(a);d=K.call(this,a,d);c&&B(b,a);p(this)&&z(b,a);return d});u(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=J.call(this,a);if(p(this))for(var e=0;e<c.length;e++)z(b,c[e]);return a}c=p(a);e=J.call(this,a);c&&B(b,a);p(this)&&z(b,a);return e});u(Node.prototype,"cloneNode",function(a){a=I.call(this,a);this.ownerDocument.__CE_hasRegistry?C(b,a):x(b,a);
return a});u(Node.prototype,"removeChild",function(a){var c=p(a),e=L.call(this,a);c&&B(b,a);return e});u(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=M.call(this,a,d);if(p(this))for(B(b,d),d=0;d<e.length;d++)z(b,e[d]);return a}var e=p(a),c=M.call(this,a,d),m=p(this);m&&B(b,d);e&&B(b,a);m&&z(b,a);return c});N&&N.get?a(Node.prototype,N):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)L.call(this,this.firstChild);J.call(this,document.createTextNode(a))}})})};function wa(b){var a=Element.prototype;function c(a){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];for(var e=[],l=[],g=0;g<d.length;g++){var k=d[g];k instanceof Element&&p(k)&&l.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}a.apply(this,d);for(d=0;d<l.length;d++)B(b,l[d]);if(p(this))for(d=0;d<e.length;d++)l=e[d],l instanceof Element&&z(b,l)}}V&&(a.before=c(V));V&&(a.after=c(oa));pa&&u(a,"replaceWith",function(a){for(var d=
[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];for(var c=[],m=[],l=0;l<d.length;l++){var g=d[l];g instanceof Element&&p(g)&&m.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}l=p(this);pa.apply(this,d);for(d=0;d<m.length;d++)B(b,m[d]);if(l)for(B(b,this),d=0;d<c.length;d++)m=c[d],m instanceof Element&&z(b,m)});qa&&u(a,"remove",function(){var a=p(this);qa.call(this);a&&B(b,this)})};function xa(){var b=X;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var d=this,e=void 0;p(this)&&(e=[],t(this,function(a){a!==d&&e.push(a)}));c.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var k=e[f];1===k.__CE_state&&b.disconnectedCallback(k)}this.ownerDocument.__CE_hasRegistry?C(b,this):x(b,this);return a}})}function c(a,c){u(a,"insertAdjacentElement",function(a,d){var e=p(d);a=c.call(this,a,d);e&&B(b,d);p(a)&&z(b,d);
return a})}O&&u(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=O.call(this,a)});P&&P.get?a(Element.prototype,P):W&&W.get?a(HTMLElement.prototype,W):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,d=b?this.content:this,c=H.call(document,this.localName);for(c.innerHTML=a;0<d.childNodes.length;)L.call(d,d.childNodes[0]);for(a=b?c.content:c;0<a.childNodes.length;)J.call(d,
a.childNodes[0])}})});u(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return R.call(this,a,c);var d=Q.call(this,a);R.call(this,a,c);c=Q.call(this,a);b.attributeChangedCallback(this,a,d,c,null)});u(Element.prototype,"setAttributeNS",function(a,c,f){if(1!==this.__CE_state)return U.call(this,a,c,f);var d=T.call(this,a,c);U.call(this,a,c,f);f=T.call(this,a,c);b.attributeChangedCallback(this,c,d,f,a)});u(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return S.call(this,
a);var c=Q.call(this,a);S.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});u(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return ka.call(this,a,c);var d=T.call(this,a,c);ka.call(this,a,c);var e=T.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});sa?c(HTMLElement.prototype,sa):la?c(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Y(b,Element.prototype,{h:ma,append:na});wa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new v;ta();ua();Y(X,DocumentFragment.prototype,{h:ia,append:ja});va();xa();document.__CE_hasRegistry=!0;var customElements=new G(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


// /**
//  * @license
//  * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
//  * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
//  * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
//  * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
//  * Code distributed by Google as part of the polymer project is also
//  * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
//  */
// // @version 0.6.0-58c8709
// window.WebComponents = window.WebComponents || {};
//
// (function(scope) {
//   var flags = scope.flags || {};
//   var file = "webcomponents.js";
//   var script = document.querySelector('script[src*="' + file + '"]');
//   if (!flags.noOpts) {
//     location.search.slice(1).split("&").forEach(function(o) {
//       o = o.split("=");
//       o[0] && (flags[o[0]] = o[1] || true);
//     });
//     if (script) {
//       for (var i = 0, a; a = script.attributes[i]; i++) {
//         if (a.name !== "src") {
//           flags[a.name] = a.value || true;
//         }
//       }
//     }
//     if (flags.log) {
//       var parts = flags.log.split(",");
//       flags.log = {};
//       parts.forEach(function(f) {
//         flags.log[f] = true;
//       });
//     } else {
//       flags.log = {};
//     }
//   }
//   flags.shadow = flags.shadow || flags.shadowdom || flags.polyfill;
//   if (flags.shadow === "native") {
//     flags.shadow = false;
//   } else {
//     flags.shadow = flags.shadow || !HTMLElement.prototype.createShadowRoot;
//   }
//   if (flags.register) {
//     window.CustomElements = window.CustomElements || {
//       flags: {}
//     };
//     window.CustomElements.flags.register = flags.register;
//   }
//   scope.flags = flags;
// })(WebComponents);
//
// (function(scope) {
//   "use strict";
//   var hasWorkingUrl = false;
//   if (!scope.forceJURL) {
//     try {
//       var u = new URL("b", "http://a");
//       u.pathname = "c%20d";
//       hasWorkingUrl = u.href === "http://a/c%20d";
//     } catch (e) {}
//   }
//   if (hasWorkingUrl) return;
//   var relative = Object.create(null);
//   relative["ftp"] = 21;
//   relative["file"] = 0;
//   relative["gopher"] = 70;
//   relative["http"] = 80;
//   relative["https"] = 443;
//   relative["ws"] = 80;
//   relative["wss"] = 443;
//   var relativePathDotMapping = Object.create(null);
//   relativePathDotMapping["%2e"] = ".";
//   relativePathDotMapping[".%2e"] = "..";
//   relativePathDotMapping["%2e."] = "..";
//   relativePathDotMapping["%2e%2e"] = "..";
//   function isRelativeScheme(scheme) {
//     return relative[scheme] !== undefined;
//   }
//   function invalid() {
//     clear.call(this);
//     this._isInvalid = true;
//   }
//   function IDNAToASCII(h) {
//     if ("" == h) {
//       invalid.call(this);
//     }
//     return h.toLowerCase();
//   }
//   function percentEscape(c) {
//     var unicode = c.charCodeAt(0);
//     if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 63, 96 ].indexOf(unicode) == -1) {
//       return c;
//     }
//     return encodeURIComponent(c);
//   }
//   function percentEscapeQuery(c) {
//     var unicode = c.charCodeAt(0);
//     if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 96 ].indexOf(unicode) == -1) {
//       return c;
//     }
//     return encodeURIComponent(c);
//   }
//   var EOF = undefined, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
//   function parse(input, stateOverride, base) {
//     function err(message) {
//       errors.push(message);
//     }
//     var state = stateOverride || "scheme start", cursor = 0, buffer = "", seenAt = false, seenBracket = false, errors = [];
//     loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
//       var c = input[cursor];
//       switch (state) {
//        case "scheme start":
//         if (c && ALPHA.test(c)) {
//           buffer += c.toLowerCase();
//           state = "scheme";
//         } else if (!stateOverride) {
//           buffer = "";
//           state = "no scheme";
//           continue;
//         } else {
//           err("Invalid scheme.");
//           break loop;
//         }
//         break;
//
//        case "scheme":
//         if (c && ALPHANUMERIC.test(c)) {
//           buffer += c.toLowerCase();
//         } else if (":" == c) {
//           this._scheme = buffer;
//           buffer = "";
//           if (stateOverride) {
//             break loop;
//           }
//           if (isRelativeScheme(this._scheme)) {
//             this._isRelative = true;
//           }
//           if ("file" == this._scheme) {
//             state = "relative";
//           } else if (this._isRelative && base && base._scheme == this._scheme) {
//             state = "relative or authority";
//           } else if (this._isRelative) {
//             state = "authority first slash";
//           } else {
//             state = "scheme data";
//           }
//         } else if (!stateOverride) {
//           buffer = "";
//           cursor = 0;
//           state = "no scheme";
//           continue;
//         } else if (EOF == c) {
//           break loop;
//         } else {
//           err("Code point not allowed in scheme: " + c);
//           break loop;
//         }
//         break;
//
//        case "scheme data":
//         if ("?" == c) {
//           query = "?";
//           state = "query";
//         } else if ("#" == c) {
//           this._fragment = "#";
//           state = "fragment";
//         } else {
//           if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
//             this._schemeData += percentEscape(c);
//           }
//         }
//         break;
//
//        case "no scheme":
//         if (!base || !isRelativeScheme(base._scheme)) {
//           err("Missing scheme.");
//           invalid.call(this);
//         } else {
//           state = "relative";
//           continue;
//         }
//         break;
//
//        case "relative or authority":
//         if ("/" == c && "/" == input[cursor + 1]) {
//           state = "authority ignore slashes";
//         } else {
//           err("Expected /, got: " + c);
//           state = "relative";
//           continue;
//         }
//         break;
//
//        case "relative":
//         this._isRelative = true;
//         if ("file" != this._scheme) this._scheme = base._scheme;
//         if (EOF == c) {
//           this._host = base._host;
//           this._port = base._port;
//           this._path = base._path.slice();
//           this._query = base._query;
//           break loop;
//         } else if ("/" == c || "\\" == c) {
//           if ("\\" == c) err("\\ is an invalid code point.");
//           state = "relative slash";
//         } else if ("?" == c) {
//           this._host = base._host;
//           this._port = base._port;
//           this._path = base._path.slice();
//           this._query = "?";
//           state = "query";
//         } else if ("#" == c) {
//           this._host = base._host;
//           this._port = base._port;
//           this._path = base._path.slice();
//           this._query = base._query;
//           this._fragment = "#";
//           state = "fragment";
//         } else {
//           var nextC = input[cursor + 1];
//           var nextNextC = input[cursor + 2];
//           if ("file" != this._scheme || !ALPHA.test(c) || nextC != ":" && nextC != "|" || EOF != nextNextC && "/" != nextNextC && "\\" != nextNextC && "?" != nextNextC && "#" != nextNextC) {
//             this._host = base._host;
//             this._port = base._port;
//             this._path = base._path.slice();
//             this._path.pop();
//           }
//           state = "relative path";
//           continue;
//         }
//         break;
//
//        case "relative slash":
//         if ("/" == c || "\\" == c) {
//           if ("\\" == c) {
//             err("\\ is an invalid code point.");
//           }
//           if ("file" == this._scheme) {
//             state = "file host";
//           } else {
//             state = "authority ignore slashes";
//           }
//         } else {
//           if ("file" != this._scheme) {
//             this._host = base._host;
//             this._port = base._port;
//           }
//           state = "relative path";
//           continue;
//         }
//         break;
//
//        case "authority first slash":
//         if ("/" == c) {
//           state = "authority second slash";
//         } else {
//           err("Expected '/', got: " + c);
//           state = "authority ignore slashes";
//           continue;
//         }
//         break;
//
//        case "authority second slash":
//         state = "authority ignore slashes";
//         if ("/" != c) {
//           err("Expected '/', got: " + c);
//           continue;
//         }
//         break;
//
//        case "authority ignore slashes":
//         if ("/" != c && "\\" != c) {
//           state = "authority";
//           continue;
//         } else {
//           err("Expected authority, got: " + c);
//         }
//         break;
//
//        case "authority":
//         if ("@" == c) {
//           if (seenAt) {
//             err("@ already seen.");
//             buffer += "%40";
//           }
//           seenAt = true;
//           for (var i = 0; i < buffer.length; i++) {
//             var cp = buffer[i];
//             if ("	" == cp || "\n" == cp || "\r" == cp) {
//               err("Invalid whitespace in authority.");
//               continue;
//             }
//             if (":" == cp && null === this._password) {
//               this._password = "";
//               continue;
//             }
//             var tempC = percentEscape(cp);
//             null !== this._password ? this._password += tempC : this._username += tempC;
//           }
//           buffer = "";
//         } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
//           cursor -= buffer.length;
//           buffer = "";
//           state = "host";
//           continue;
//         } else {
//           buffer += c;
//         }
//         break;
//
//        case "file host":
//         if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
//           if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ":" || buffer[1] == "|")) {
//             state = "relative path";
//           } else if (buffer.length == 0) {
//             state = "relative path start";
//           } else {
//             this._host = IDNAToASCII.call(this, buffer);
//             buffer = "";
//             state = "relative path start";
//           }
//           continue;
//         } else if ("	" == c || "\n" == c || "\r" == c) {
//           err("Invalid whitespace in file host.");
//         } else {
//           buffer += c;
//         }
//         break;
//
//        case "host":
//        case "hostname":
//         if (":" == c && !seenBracket) {
//           this._host = IDNAToASCII.call(this, buffer);
//           buffer = "";
//           state = "port";
//           if ("hostname" == stateOverride) {
//             break loop;
//           }
//         } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
//           this._host = IDNAToASCII.call(this, buffer);
//           buffer = "";
//           state = "relative path start";
//           if (stateOverride) {
//             break loop;
//           }
//           continue;
//         } else if ("	" != c && "\n" != c && "\r" != c) {
//           if ("[" == c) {
//             seenBracket = true;
//           } else if ("]" == c) {
//             seenBracket = false;
//           }
//           buffer += c;
//         } else {
//           err("Invalid code point in host/hostname: " + c);
//         }
//         break;
//
//        case "port":
//         if (/[0-9]/.test(c)) {
//           buffer += c;
//         } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c || stateOverride) {
//           if ("" != buffer) {
//             var temp = parseInt(buffer, 10);
//             if (temp != relative[this._scheme]) {
//               this._port = temp + "";
//             }
//             buffer = "";
//           }
//           if (stateOverride) {
//             break loop;
//           }
//           state = "relative path start";
//           continue;
//         } else if ("	" == c || "\n" == c || "\r" == c) {
//           err("Invalid code point in port: " + c);
//         } else {
//           invalid.call(this);
//         }
//         break;
//
//        case "relative path start":
//         if ("\\" == c) err("'\\' not allowed in path.");
//         state = "relative path";
//         if ("/" != c && "\\" != c) {
//           continue;
//         }
//         break;
//
//        case "relative path":
//         if (EOF == c || "/" == c || "\\" == c || !stateOverride && ("?" == c || "#" == c)) {
//           if ("\\" == c) {
//             err("\\ not allowed in relative path.");
//           }
//           var tmp;
//           if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
//             buffer = tmp;
//           }
//           if (".." == buffer) {
//             this._path.pop();
//             if ("/" != c && "\\" != c) {
//               this._path.push("");
//             }
//           } else if ("." == buffer && "/" != c && "\\" != c) {
//             this._path.push("");
//           } else if ("." != buffer) {
//             if ("file" == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == "|") {
//               buffer = buffer[0] + ":";
//             }
//             this._path.push(buffer);
//           }
//           buffer = "";
//           if ("?" == c) {
//             this._query = "?";
//             state = "query";
//           } else if ("#" == c) {
//             this._fragment = "#";
//             state = "fragment";
//           }
//         } else if ("	" != c && "\n" != c && "\r" != c) {
//           buffer += percentEscape(c);
//         }
//         break;
//
//        case "query":
//         if (!stateOverride && "#" == c) {
//           this._fragment = "#";
//           state = "fragment";
//         } else if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
//           this._query += percentEscapeQuery(c);
//         }
//         break;
//
//        case "fragment":
//         if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
//           this._fragment += c;
//         }
//         break;
//       }
//       cursor++;
//     }
//   }
//   function clear() {
//     this._scheme = "";
//     this._schemeData = "";
//     this._username = "";
//     this._password = null;
//     this._host = "";
//     this._port = "";
//     this._path = [];
//     this._query = "";
//     this._fragment = "";
//     this._isInvalid = false;
//     this._isRelative = false;
//   }
//   function jURL(url, base) {
//     if (base !== undefined && !(base instanceof jURL)) base = new jURL(String(base));
//     this._url = url;
//     clear.call(this);
//     var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
//     parse.call(this, input, null, base);
//   }
//   jURL.prototype = {
//     toString: function() {
//       return this.href;
//     },
//     get href() {
//       if (this._isInvalid) return this._url;
//       var authority = "";
//       if ("" != this._username || null != this._password) {
//         authority = this._username + (null != this._password ? ":" + this._password : "") + "@";
//       }
//       return this.protocol + (this._isRelative ? "//" + authority + this.host : "") + this.pathname + this._query + this._fragment;
//     },
//     set href(href) {
//       clear.call(this);
//       parse.call(this, href);
//     },
//     get protocol() {
//       return this._scheme + ":";
//     },
//     set protocol(protocol) {
//       if (this._isInvalid) return;
//       parse.call(this, protocol + ":", "scheme start");
//     },
//     get host() {
//       return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
//     },
//     set host(host) {
//       if (this._isInvalid || !this._isRelative) return;
//       parse.call(this, host, "host");
//     },
//     get hostname() {
//       return this._host;
//     },
//     set hostname(hostname) {
//       if (this._isInvalid || !this._isRelative) return;
//       parse.call(this, hostname, "hostname");
//     },
//     get port() {
//       return this._port;
//     },
//     set port(port) {
//       if (this._isInvalid || !this._isRelative) return;
//       parse.call(this, port, "port");
//     },
//     get pathname() {
//       return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
//     },
//     set pathname(pathname) {
//       if (this._isInvalid || !this._isRelative) return;
//       this._path = [];
//       parse.call(this, pathname, "relative path start");
//     },
//     get search() {
//       return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
//     },
//     set search(search) {
//       if (this._isInvalid || !this._isRelative) return;
//       this._query = "?";
//       if ("?" == search[0]) search = search.slice(1);
//       parse.call(this, search, "query");
//     },
//     get hash() {
//       return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
//     },
//     set hash(hash) {
//       if (this._isInvalid) return;
//       this._fragment = "#";
//       if ("#" == hash[0]) hash = hash.slice(1);
//       parse.call(this, hash, "fragment");
//     },
//     get origin() {
//       var host;
//       if (this._isInvalid || !this._scheme) {
//         return "";
//       }
//       switch (this._scheme) {
//        case "data":
//        case "file":
//        case "javascript":
//        case "mailto":
//         return "null";
//       }
//       host = this.host;
//       if (!host) {
//         return "";
//       }
//       return this._scheme + "://" + host;
//     }
//   };
//   var OriginalURL = scope.URL;
//   if (OriginalURL) {
//     jURL.createObjectURL = function(blob) {
//       return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
//     };
//     jURL.revokeObjectURL = function(url) {
//       OriginalURL.revokeObjectURL(url);
//     };
//   }
//   scope.URL = jURL;
// })(this);
//
// if (typeof WeakMap === "undefined") {
//   (function() {
//     var defineProperty = Object.defineProperty;
//     var counter = Date.now() % 1e9;
//     var WeakMap = function() {
//       this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
//     };
//     WeakMap.prototype = {
//       set: function(key, value) {
//         var entry = key[this.name];
//         if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
//           value: [ key, value ],
//           writable: true
//         });
//         return this;
//       },
//       get: function(key) {
//         var entry;
//         return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
//       },
//       "delete": function(key) {
//         var entry = key[this.name];
//         if (!entry || entry[0] !== key) return false;
//         entry[0] = entry[1] = undefined;
//         return true;
//       },
//       has: function(key) {
//         var entry = key[this.name];
//         if (!entry) return false;
//         return entry[0] === key;
//       }
//     };
//     window.WeakMap = WeakMap;
//   })();
// }
//
// (function(global) {
//   var registrationsTable = new WeakMap();
//   var setImmediate;
//   if (/Trident|Edge/.test(navigator.userAgent)) {
//     setImmediate = setTimeout;
//   } else if (window.setImmediate) {
//     setImmediate = window.setImmediate;
//   } else {
//     var setImmediateQueue = [];
//     var sentinel = String(Math.random());
//     window.addEventListener("message", function(e) {
//       if (e.data === sentinel) {
//         var queue = setImmediateQueue;
//         setImmediateQueue = [];
//         queue.forEach(function(func) {
//           func();
//         });
//       }
//     });
//     setImmediate = function(func) {
//       setImmediateQueue.push(func);
//       window.postMessage(sentinel, "*");
//     };
//   }
//   var isScheduled = false;
//   var scheduledObservers = [];
//   function scheduleCallback(observer) {
//     scheduledObservers.push(observer);
//     if (!isScheduled) {
//       isScheduled = true;
//       setImmediate(dispatchCallbacks);
//     }
//   }
//   function wrapIfNeeded(node) {
//     return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
//   }
//   function dispatchCallbacks() {
//     isScheduled = false;
//     var observers = scheduledObservers;
//     scheduledObservers = [];
//     observers.sort(function(o1, o2) {
//       return o1.uid_ - o2.uid_;
//     });
//     var anyNonEmpty = false;
//     observers.forEach(function(observer) {
//       var queue = observer.takeRecords();
//       removeTransientObserversFor(observer);
//       if (queue.length) {
//         observer.callback_(queue, observer);
//         anyNonEmpty = true;
//       }
//     });
//     if (anyNonEmpty) dispatchCallbacks();
//   }
//   function removeTransientObserversFor(observer) {
//     observer.nodes_.forEach(function(node) {
//       var registrations = registrationsTable.get(node);
//       if (!registrations) return;
//       registrations.forEach(function(registration) {
//         if (registration.observer === observer) registration.removeTransientObservers();
//       });
//     });
//   }
//   function forEachAncestorAndObserverEnqueueRecord(target, callback) {
//     for (var node = target; node; node = node.parentNode) {
//       var registrations = registrationsTable.get(node);
//       if (registrations) {
//         for (var j = 0; j < registrations.length; j++) {
//           var registration = registrations[j];
//           var options = registration.options;
//           if (node !== target && !options.subtree) continue;
//           var record = callback(options);
//           if (record) registration.enqueue(record);
//         }
//       }
//     }
//   }
//   var uidCounter = 0;
//   function JsMutationObserver(callback) {
//     this.callback_ = callback;
//     this.nodes_ = [];
//     this.records_ = [];
//     this.uid_ = ++uidCounter;
//   }
//   JsMutationObserver.prototype = {
//     observe: function(target, options) {
//       target = wrapIfNeeded(target);
//       if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
//         throw new SyntaxError();
//       }
//       var registrations = registrationsTable.get(target);
//       if (!registrations) registrationsTable.set(target, registrations = []);
//       var registration;
//       for (var i = 0; i < registrations.length; i++) {
//         if (registrations[i].observer === this) {
//           registration = registrations[i];
//           registration.removeListeners();
//           registration.options = options;
//           break;
//         }
//       }
//       if (!registration) {
//         registration = new Registration(this, target, options);
//         registrations.push(registration);
//         this.nodes_.push(target);
//       }
//       registration.addListeners();
//     },
//     disconnect: function() {
//       this.nodes_.forEach(function(node) {
//         var registrations = registrationsTable.get(node);
//         for (var i = 0; i < registrations.length; i++) {
//           var registration = registrations[i];
//           if (registration.observer === this) {
//             registration.removeListeners();
//             registrations.splice(i, 1);
//             break;
//           }
//         }
//       }, this);
//       this.records_ = [];
//     },
//     takeRecords: function() {
//       var copyOfRecords = this.records_;
//       this.records_ = [];
//       return copyOfRecords;
//     }
//   };
//   function MutationRecord(type, target) {
//     this.type = type;
//     this.target = target;
//     this.addedNodes = [];
//     this.removedNodes = [];
//     this.previousSibling = null;
//     this.nextSibling = null;
//     this.attributeName = null;
//     this.attributeNamespace = null;
//     this.oldValue = null;
//   }
//   function copyMutationRecord(original) {
//     var record = new MutationRecord(original.type, original.target);
//     record.addedNodes = original.addedNodes.slice();
//     record.removedNodes = original.removedNodes.slice();
//     record.previousSibling = original.previousSibling;
//     record.nextSibling = original.nextSibling;
//     record.attributeName = original.attributeName;
//     record.attributeNamespace = original.attributeNamespace;
//     record.oldValue = original.oldValue;
//     return record;
//   }
//   var currentRecord, recordWithOldValue;
//   function getRecord(type, target) {
//     return currentRecord = new MutationRecord(type, target);
//   }
//   function getRecordWithOldValue(oldValue) {
//     if (recordWithOldValue) return recordWithOldValue;
//     recordWithOldValue = copyMutationRecord(currentRecord);
//     recordWithOldValue.oldValue = oldValue;
//     return recordWithOldValue;
//   }
//   function clearRecords() {
//     currentRecord = recordWithOldValue = undefined;
//   }
//   function recordRepresentsCurrentMutation(record) {
//     return record === recordWithOldValue || record === currentRecord;
//   }
//   function selectRecord(lastRecord, newRecord) {
//     if (lastRecord === newRecord) return lastRecord;
//     if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
//     return null;
//   }
//   function Registration(observer, target, options) {
//     this.observer = observer;
//     this.target = target;
//     this.options = options;
//     this.transientObservedNodes = [];
//   }
//   Registration.prototype = {
//     enqueue: function(record) {
//       var records = this.observer.records_;
//       var length = records.length;
//       if (records.length > 0) {
//         var lastRecord = records[length - 1];
//         var recordToReplaceLast = selectRecord(lastRecord, record);
//         if (recordToReplaceLast) {
//           records[length - 1] = recordToReplaceLast;
//           return;
//         }
//       } else {
//         scheduleCallback(this.observer);
//       }
//       records[length] = record;
//     },
//     addListeners: function() {
//       this.addListeners_(this.target);
//     },
//     addListeners_: function(node) {
//       var options = this.options;
//       if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
//       if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
//       if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
//       if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
//     },
//     removeListeners: function() {
//       this.removeListeners_(this.target);
//     },
//     removeListeners_: function(node) {
//       var options = this.options;
//       if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
//       if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
//       if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
//       if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
//     },
//     addTransientObserver: function(node) {
//       if (node === this.target) return;
//       this.addListeners_(node);
//       this.transientObservedNodes.push(node);
//       var registrations = registrationsTable.get(node);
//       if (!registrations) registrationsTable.set(node, registrations = []);
//       registrations.push(this);
//     },
//     removeTransientObservers: function() {
//       var transientObservedNodes = this.transientObservedNodes;
//       this.transientObservedNodes = [];
//       transientObservedNodes.forEach(function(node) {
//         this.removeListeners_(node);
//         var registrations = registrationsTable.get(node);
//         for (var i = 0; i < registrations.length; i++) {
//           if (registrations[i] === this) {
//             registrations.splice(i, 1);
//             break;
//           }
//         }
//       }, this);
//     },
//     handleEvent: function(e) {
//       e.stopImmediatePropagation();
//       switch (e.type) {
//        case "DOMAttrModified":
//         var name = e.attrName;
//         var namespace = e.relatedNode.namespaceURI;
//         var target = e.target;
//         var record = new getRecord("attributes", target);
//         record.attributeName = name;
//         record.attributeNamespace = namespace;
//         var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
//         forEachAncestorAndObserverEnqueueRecord(target, function(options) {
//           if (!options.attributes) return;
//           if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
//             return;
//           }
//           if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
//           return record;
//         });
//         break;
//
//        case "DOMCharacterDataModified":
//         var target = e.target;
//         var record = getRecord("characterData", target);
//         var oldValue = e.prevValue;
//         forEachAncestorAndObserverEnqueueRecord(target, function(options) {
//           if (!options.characterData) return;
//           if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
//           return record;
//         });
//         break;
//
//        case "DOMNodeRemoved":
//         this.addTransientObserver(e.target);
//
//        case "DOMNodeInserted":
//         var changedNode = e.target;
//         var addedNodes, removedNodes;
//         if (e.type === "DOMNodeInserted") {
//           addedNodes = [ changedNode ];
//           removedNodes = [];
//         } else {
//           addedNodes = [];
//           removedNodes = [ changedNode ];
//         }
//         var previousSibling = changedNode.previousSibling;
//         var nextSibling = changedNode.nextSibling;
//         var record = getRecord("childList", e.target.parentNode);
//         record.addedNodes = addedNodes;
//         record.removedNodes = removedNodes;
//         record.previousSibling = previousSibling;
//         record.nextSibling = nextSibling;
//         forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
//           if (!options.childList) return;
//           return record;
//         });
//       }
//       clearRecords();
//     }
//   };
//   global.JsMutationObserver = JsMutationObserver;
//   if (!global.MutationObserver) global.MutationObserver = JsMutationObserver;
// })(this);
//
// window.HTMLImports = window.HTMLImports || {
//   flags: {}
// };
//
// (function(scope) {
//   var IMPORT_LINK_TYPE = "import";
//   var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement("link"));
//   var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
//   var wrap = function(node) {
//     return hasShadowDOMPolyfill ? ShadowDOMPolyfill.wrapIfNeeded(node) : node;
//   };
//   var rootDocument = wrap(document);
//   var currentScriptDescriptor = {
//     get: function() {
//       var script = HTMLImports.currentScript || document.currentScript || (document.readyState !== "complete" ? document.scripts[document.scripts.length - 1] : null);
//       return wrap(script);
//     },
//     configurable: true
//   };
//   Object.defineProperty(document, "_currentScript", currentScriptDescriptor);
//   Object.defineProperty(rootDocument, "_currentScript", currentScriptDescriptor);
//   var isIE = /Trident|Edge/.test(navigator.userAgent);
//   function whenReady(callback, doc) {
//     doc = doc || rootDocument;
//     whenDocumentReady(function() {
//       watchImportsLoad(callback, doc);
//     }, doc);
//   }
//   var requiredReadyState = isIE ? "complete" : "interactive";
//   var READY_EVENT = "readystatechange";
//   function isDocumentReady(doc) {
//     return doc.readyState === "complete" || doc.readyState === requiredReadyState;
//   }
//   function whenDocumentReady(callback, doc) {
//     if (!isDocumentReady(doc)) {
//       var checkReady = function() {
//         if (doc.readyState === "complete" || doc.readyState === requiredReadyState) {
//           doc.removeEventListener(READY_EVENT, checkReady);
//           whenDocumentReady(callback, doc);
//         }
//       };
//       doc.addEventListener(READY_EVENT, checkReady);
//     } else if (callback) {
//       callback();
//     }
//   }
//   function markTargetLoaded(event) {
//     event.target.__loaded = true;
//   }
//   function watchImportsLoad(callback, doc) {
//     var imports = doc.querySelectorAll("link[rel=import]");
//     var parsedCount = 0, importCount = imports.length, newImports = [], errorImports = [];
//     function checkDone() {
//       if (parsedCount == importCount && callback) {
//         callback({
//           allImports: imports,
//           loadedImports: newImports,
//           errorImports: errorImports
//         });
//       }
//     }
//     function loadedImport(e) {
//       markTargetLoaded(e);
//       newImports.push(this);
//       parsedCount++;
//       checkDone();
//     }
//     function errorLoadingImport(e) {
//       errorImports.push(this);
//       parsedCount++;
//       checkDone();
//     }
//     if (importCount) {
//       for (var i = 0, imp; i < importCount && (imp = imports[i]); i++) {
//         if (isImportLoaded(imp)) {
//           parsedCount++;
//           checkDone();
//         } else {
//           imp.addEventListener("load", loadedImport);
//           imp.addEventListener("error", errorLoadingImport);
//         }
//       }
//     } else {
//       checkDone();
//     }
//   }
//   function isImportLoaded(link) {
//     return useNative ? link.__loaded || link.import && link.import.readyState !== "loading" : link.__importParsed;
//   }
//   if (useNative) {
//     new MutationObserver(function(mxns) {
//       for (var i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
//         if (m.addedNodes) {
//           handleImports(m.addedNodes);
//         }
//       }
//     }).observe(document.head, {
//       childList: true
//     });
//     function handleImports(nodes) {
//       for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
//         if (isImport(n)) {
//           handleImport(n);
//         }
//       }
//     }
//     function isImport(element) {
//       return element.localName === "link" && element.rel === "import";
//     }
//     function handleImport(element) {
//       var loaded = element.import;
//       if (loaded) {
//         markTargetLoaded({
//           target: element
//         });
//       } else {
//         element.addEventListener("load", markTargetLoaded);
//         element.addEventListener("error", markTargetLoaded);
//       }
//     }
//     (function() {
//       if (document.readyState === "loading") {
//         var imports = document.querySelectorAll("link[rel=import]");
//         for (var i = 0, l = imports.length, imp; i < l && (imp = imports[i]); i++) {
//           handleImport(imp);
//         }
//       }
//     })();
//   }
//   whenReady(function(detail) {
//     HTMLImports.ready = true;
//     HTMLImports.readyTime = new Date().getTime();
//     var evt = rootDocument.createEvent("CustomEvent");
//     evt.initCustomEvent("HTMLImportsLoaded", true, true, detail);
//     rootDocument.dispatchEvent(evt);
//   });
//   scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
//   scope.useNative = useNative;
//   scope.rootDocument = rootDocument;
//   scope.whenReady = whenReady;
//   scope.isIE = isIE;
// })(HTMLImports);
//
// (function(scope) {
//   var modules = [];
//   var addModule = function(module) {
//     modules.push(module);
//   };
//   var initializeModules = function() {
//     modules.forEach(function(module) {
//       module(scope);
//     });
//   };
//   scope.addModule = addModule;
//   scope.initializeModules = initializeModules;
// })(HTMLImports);
//
// HTMLImports.addModule(function(scope) {
//   var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
//   var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
//   var path = {
//     resolveUrlsInStyle: function(style, linkUrl) {
//       var doc = style.ownerDocument;
//       var resolver = doc.createElement("a");
//       style.textContent = this.resolveUrlsInCssText(style.textContent, linkUrl, resolver);
//       return style;
//     },
//     resolveUrlsInCssText: function(cssText, linkUrl, urlObj) {
//       var r = this.replaceUrls(cssText, urlObj, linkUrl, CSS_URL_REGEXP);
//       r = this.replaceUrls(r, urlObj, linkUrl, CSS_IMPORT_REGEXP);
//       return r;
//     },
//     replaceUrls: function(text, urlObj, linkUrl, regexp) {
//       return text.replace(regexp, function(m, pre, url, post) {
//         var urlPath = url.replace(/["']/g, "");
//         if (linkUrl) {
//           urlPath = new URL(urlPath, linkUrl).href;
//         }
//         urlObj.href = urlPath;
//         urlPath = urlObj.href;
//         return pre + "'" + urlPath + "'" + post;
//       });
//     }
//   };
//   scope.path = path;
// });
//
// HTMLImports.addModule(function(scope) {
//   var xhr = {
//     async: true,
//     ok: function(request) {
//       return request.status >= 200 && request.status < 300 || request.status === 304 || request.status === 0;
//     },
//     load: function(url, next, nextContext) {
//       var request = new XMLHttpRequest();
//       if (scope.flags.debug || scope.flags.bust) {
//         url += "?" + Math.random();
//       }
//       request.open("GET", url, xhr.async);
//       request.addEventListener("readystatechange", function(e) {
//         if (request.readyState === 4) {
//           var locationHeader = request.getResponseHeader("Location");
//           var redirectedUrl = null;
//           if (locationHeader) {
//             var redirectedUrl = locationHeader.substr(0, 1) === "/" ? location.origin + locationHeader : locationHeader;
//           }
//           next.call(nextContext, !xhr.ok(request) && request, request.response || request.responseText, redirectedUrl);
//         }
//       });
//       request.send();
//       return request;
//     },
//     loadDocument: function(url, next, nextContext) {
//       this.load(url, next, nextContext).responseType = "document";
//     }
//   };
//   scope.xhr = xhr;
// });
//
// HTMLImports.addModule(function(scope) {
//   var xhr = scope.xhr;
//   var flags = scope.flags;
//   var Loader = function(onLoad, onComplete) {
//     this.cache = {};
//     this.onload = onLoad;
//     this.oncomplete = onComplete;
//     this.inflight = 0;
//     this.pending = {};
//   };
//   Loader.prototype = {
//     addNodes: function(nodes) {
//       this.inflight += nodes.length;
//       for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
//         this.require(n);
//       }
//       this.checkDone();
//     },
//     addNode: function(node) {
//       this.inflight++;
//       this.require(node);
//       this.checkDone();
//     },
//     require: function(elt) {
//       var url = elt.src || elt.href;
//       elt.__nodeUrl = url;
//       if (!this.dedupe(url, elt)) {
//         this.fetch(url, elt);
//       }
//     },
//     dedupe: function(url, elt) {
//       if (this.pending[url]) {
//         this.pending[url].push(elt);
//         return true;
//       }
//       var resource;
//       if (this.cache[url]) {
//         this.onload(url, elt, this.cache[url]);
//         this.tail();
//         return true;
//       }
//       this.pending[url] = [ elt ];
//       return false;
//     },
//     fetch: function(url, elt) {
//       flags.load && console.log("fetch", url, elt);
//       if (!url) {
//         setTimeout(function() {
//           this.receive(url, elt, {
//             error: "href must be specified"
//           }, null);
//         }.bind(this), 0);
//       } else if (url.match(/^data:/)) {
//         var pieces = url.split(",");
//         var header = pieces[0];
//         var body = pieces[1];
//         if (header.indexOf(";base64") > -1) {
//           body = atob(body);
//         } else {
//           body = decodeURIComponent(body);
//         }
//         setTimeout(function() {
//           this.receive(url, elt, null, body);
//         }.bind(this), 0);
//       } else {
//         var receiveXhr = function(err, resource, redirectedUrl) {
//           this.receive(url, elt, err, resource, redirectedUrl);
//         }.bind(this);
//         xhr.load(url, receiveXhr);
//       }
//     },
//     receive: function(url, elt, err, resource, redirectedUrl) {
//       this.cache[url] = resource;
//       var $p = this.pending[url];
//       for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
//         this.onload(url, p, resource, err, redirectedUrl);
//         this.tail();
//       }
//       this.pending[url] = null;
//     },
//     tail: function() {
//       --this.inflight;
//       this.checkDone();
//     },
//     checkDone: function() {
//       if (!this.inflight) {
//         this.oncomplete();
//       }
//     }
//   };
//   scope.Loader = Loader;
// });
//
// HTMLImports.addModule(function(scope) {
//   var Observer = function(addCallback) {
//     this.addCallback = addCallback;
//     this.mo = new MutationObserver(this.handler.bind(this));
//   };
//   Observer.prototype = {
//     handler: function(mutations) {
//       for (var i = 0, l = mutations.length, m; i < l && (m = mutations[i]); i++) {
//         if (m.type === "childList" && m.addedNodes.length) {
//           this.addedNodes(m.addedNodes);
//         }
//       }
//     },
//     addedNodes: function(nodes) {
//       if (this.addCallback) {
//         this.addCallback(nodes);
//       }
//       for (var i = 0, l = nodes.length, n, loading; i < l && (n = nodes[i]); i++) {
//         if (n.children && n.children.length) {
//           this.addedNodes(n.children);
//         }
//       }
//     },
//     observe: function(root) {
//       this.mo.observe(root, {
//         childList: true,
//         subtree: true
//       });
//     }
//   };
//   scope.Observer = Observer;
// });
//
// HTMLImports.addModule(function(scope) {
//   var path = scope.path;
//   var rootDocument = scope.rootDocument;
//   var flags = scope.flags;
//   var isIE = scope.isIE;
//   var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
//   var IMPORT_SELECTOR = "link[rel=" + IMPORT_LINK_TYPE + "]";
//   var importParser = {
//     documentSelectors: IMPORT_SELECTOR,
//     importsSelectors: [ IMPORT_SELECTOR, "link[rel=stylesheet]", "style", "script:not([type])", 'script[type="text/javascript"]' ].join(","),
//     map: {
//       link: "parseLink",
//       script: "parseScript",
//       style: "parseStyle"
//     },
//     dynamicElements: [],
//     parseNext: function() {
//       var next = this.nextToParse();
//       if (next) {
//         this.parse(next);
//       }
//     },
//     parse: function(elt) {
//       if (this.isParsed(elt)) {
//         flags.parse && console.log("[%s] is already parsed", elt.localName);
//         return;
//       }
//       var fn = this[this.map[elt.localName]];
//       if (fn) {
//         this.markParsing(elt);
//         fn.call(this, elt);
//       }
//     },
//     parseDynamic: function(elt, quiet) {
//       this.dynamicElements.push(elt);
//       if (!quiet) {
//         this.parseNext();
//       }
//     },
//     markParsing: function(elt) {
//       flags.parse && console.log("parsing", elt);
//       this.parsingElement = elt;
//     },
//     markParsingComplete: function(elt) {
//       elt.__importParsed = true;
//       this.markDynamicParsingComplete(elt);
//       if (elt.__importElement) {
//         elt.__importElement.__importParsed = true;
//         this.markDynamicParsingComplete(elt.__importElement);
//       }
//       this.parsingElement = null;
//       flags.parse && console.log("completed", elt);
//     },
//     markDynamicParsingComplete: function(elt) {
//       var i = this.dynamicElements.indexOf(elt);
//       if (i >= 0) {
//         this.dynamicElements.splice(i, 1);
//       }
//     },
//     parseImport: function(elt) {
//       if (HTMLImports.__importsParsingHook) {
//         HTMLImports.__importsParsingHook(elt);
//       }
//       if (elt.import) {
//         elt.import.__importParsed = true;
//       }
//       this.markParsingComplete(elt);
//       if (elt.__resource && !elt.__error) {
//         elt.dispatchEvent(new CustomEvent("load", {
//           bubbles: false
//         }));
//       } else {
//         elt.dispatchEvent(new CustomEvent("error", {
//           bubbles: false
//         }));
//       }
//       if (elt.__pending) {
//         var fn;
//         while (elt.__pending.length) {
//           fn = elt.__pending.shift();
//           if (fn) {
//             fn({
//               target: elt
//             });
//           }
//         }
//       }
//       this.parseNext();
//     },
//     parseLink: function(linkElt) {
//       if (nodeIsImport(linkElt)) {
//         this.parseImport(linkElt);
//       } else {
//         linkElt.href = linkElt.href;
//         this.parseGeneric(linkElt);
//       }
//     },
//     parseStyle: function(elt) {
//       var src = elt;
//       elt = cloneStyle(elt);
//       src.__appliedElement = elt;
//       elt.__importElement = src;
//       this.parseGeneric(elt);
//     },
//     parseGeneric: function(elt) {
//       this.trackElement(elt);
//       this.addElementToDocument(elt);
//     },
//     rootImportForElement: function(elt) {
//       var n = elt;
//       while (n.ownerDocument.__importLink) {
//         n = n.ownerDocument.__importLink;
//       }
//       return n;
//     },
//     addElementToDocument: function(elt) {
//       var port = this.rootImportForElement(elt.__importElement || elt);
//       port.parentNode.insertBefore(elt, port);
//     },
//     trackElement: function(elt, callback) {
//       var self = this;
//       var done = function(e) {
//         if (callback) {
//           callback(e);
//         }
//         self.markParsingComplete(elt);
//         self.parseNext();
//       };
//       elt.addEventListener("load", done);
//       elt.addEventListener("error", done);
//       if (isIE && elt.localName === "style") {
//         var fakeLoad = false;
//         if (elt.textContent.indexOf("@import") == -1) {
//           fakeLoad = true;
//         } else if (elt.sheet) {
//           fakeLoad = true;
//           var csr = elt.sheet.cssRules;
//           var len = csr ? csr.length : 0;
//           for (var i = 0, r; i < len && (r = csr[i]); i++) {
//             if (r.type === CSSRule.IMPORT_RULE) {
//               fakeLoad = fakeLoad && Boolean(r.styleSheet);
//             }
//           }
//         }
//         if (fakeLoad) {
//           elt.dispatchEvent(new CustomEvent("load", {
//             bubbles: false
//           }));
//         }
//       }
//     },
//     parseScript: function(scriptElt) {
//       var script = document.createElement("script");
//       script.__importElement = scriptElt;
//       script.src = scriptElt.src ? scriptElt.src : generateScriptDataUrl(scriptElt);
//       scope.currentScript = scriptElt;
//       this.trackElement(script, function(e) {
//         script.parentNode.removeChild(script);
//         scope.currentScript = null;
//       });
//       this.addElementToDocument(script);
//     },
//     nextToParse: function() {
//       this._mayParse = [];
//       return !this.parsingElement && (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic());
//     },
//     nextToParseInDoc: function(doc, link) {
//       if (doc && this._mayParse.indexOf(doc) < 0) {
//         this._mayParse.push(doc);
//         var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
//         for (var i = 0, l = nodes.length, p = 0, n; i < l && (n = nodes[i]); i++) {
//           if (!this.isParsed(n)) {
//             if (this.hasResource(n)) {
//               return nodeIsImport(n) ? this.nextToParseInDoc(n.import, n) : n;
//             } else {
//               return;
//             }
//           }
//         }
//       }
//       return link;
//     },
//     nextToParseDynamic: function() {
//       return this.dynamicElements[0];
//     },
//     parseSelectorsForNode: function(node) {
//       var doc = node.ownerDocument || node;
//       return doc === rootDocument ? this.documentSelectors : this.importsSelectors;
//     },
//     isParsed: function(node) {
//       return node.__importParsed;
//     },
//     needsDynamicParsing: function(elt) {
//       return this.dynamicElements.indexOf(elt) >= 0;
//     },
//     hasResource: function(node) {
//       if (nodeIsImport(node) && node.import === undefined) {
//         return false;
//       }
//       return true;
//     }
//   };
//   function nodeIsImport(elt) {
//     return elt.localName === "link" && elt.rel === IMPORT_LINK_TYPE;
//   }
//   function generateScriptDataUrl(script) {
//     var scriptContent = generateScriptContent(script);
//     return "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent);
//   }
//   function generateScriptContent(script) {
//     return script.textContent + generateSourceMapHint(script);
//   }
//   function generateSourceMapHint(script) {
//     var owner = script.ownerDocument;
//     owner.__importedScripts = owner.__importedScripts || 0;
//     var moniker = script.ownerDocument.baseURI;
//     var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
//     owner.__importedScripts++;
//     return "\n//# sourceURL=" + moniker + num + ".js\n";
//   }
//   function cloneStyle(style) {
//     var clone = style.ownerDocument.createElement("style");
//     clone.textContent = style.textContent;
//     path.resolveUrlsInStyle(clone);
//     return clone;
//   }
//   scope.parser = importParser;
//   scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
// });
//
// HTMLImports.addModule(function(scope) {
//   var flags = scope.flags;
//   var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
//   var IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
//   var rootDocument = scope.rootDocument;
//   var Loader = scope.Loader;
//   var Observer = scope.Observer;
//   var parser = scope.parser;
//   var importer = {
//     documents: {},
//     documentPreloadSelectors: IMPORT_SELECTOR,
//     importsPreloadSelectors: [ IMPORT_SELECTOR ].join(","),
//     loadNode: function(node) {
//       importLoader.addNode(node);
//     },
//     loadSubtree: function(parent) {
//       var nodes = this.marshalNodes(parent);
//       importLoader.addNodes(nodes);
//     },
//     marshalNodes: function(parent) {
//       return parent.querySelectorAll(this.loadSelectorsForNode(parent));
//     },
//     loadSelectorsForNode: function(node) {
//       var doc = node.ownerDocument || node;
//       return doc === rootDocument ? this.documentPreloadSelectors : this.importsPreloadSelectors;
//     },
//     loaded: function(url, elt, resource, err, redirectedUrl) {
//       flags.load && console.log("loaded", url, elt);
//       elt.__resource = resource;
//       elt.__error = err;
//       if (isImportLink(elt)) {
//         var doc = this.documents[url];
//         if (doc === undefined) {
//           doc = err ? null : makeDocument(resource, redirectedUrl || url);
//           if (doc) {
//             doc.__importLink = elt;
//             this.bootDocument(doc);
//           }
//           this.documents[url] = doc;
//         }
//         elt.import = doc;
//       }
//       parser.parseNext();
//     },
//     bootDocument: function(doc) {
//       this.loadSubtree(doc);
//       this.observer.observe(doc);
//       parser.parseNext();
//     },
//     loadedAll: function() {
//       parser.parseNext();
//     }
//   };
//   var importLoader = new Loader(importer.loaded.bind(importer), importer.loadedAll.bind(importer));
//   importer.observer = new Observer();
//   function isImportLink(elt) {
//     return isLinkRel(elt, IMPORT_LINK_TYPE);
//   }
//   function isLinkRel(elt, rel) {
//     return elt.localName === "link" && elt.getAttribute("rel") === rel;
//   }
//   function hasBaseURIAccessor(doc) {
//     return !!Object.getOwnPropertyDescriptor(doc, "baseURI");
//   }
//   function makeDocument(resource, url) {
//     var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
//     doc._URL = url;
//     var base = doc.createElement("base");
//     base.setAttribute("href", url);
//     if (!doc.baseURI && !hasBaseURIAccessor(doc)) {
//       Object.defineProperty(doc, "baseURI", {
//         value: url
//       });
//     }
//     var meta = doc.createElement("meta");
//     meta.setAttribute("charset", "utf-8");
//     doc.head.appendChild(meta);
//     doc.head.appendChild(base);
//     doc.body.innerHTML = resource;
//     if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
//       HTMLTemplateElement.bootstrap(doc);
//     }
//     return doc;
//   }
//   if (!document.baseURI) {
//     var baseURIDescriptor = {
//       get: function() {
//         var base = document.querySelector("base");
//         return base ? base.href : window.location.href;
//       },
//       configurable: true
//     };
//     Object.defineProperty(document, "baseURI", baseURIDescriptor);
//     Object.defineProperty(rootDocument, "baseURI", baseURIDescriptor);
//   }
//   scope.importer = importer;
//   scope.importLoader = importLoader;
// });
//
// HTMLImports.addModule(function(scope) {
//   var parser = scope.parser;
//   var importer = scope.importer;
//   var dynamic = {
//     added: function(nodes) {
//       var owner, parsed, loading;
//       for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
//         if (!owner) {
//           owner = n.ownerDocument;
//           parsed = parser.isParsed(owner);
//         }
//         loading = this.shouldLoadNode(n);
//         if (loading) {
//           importer.loadNode(n);
//         }
//         if (this.shouldParseNode(n) && parsed) {
//           parser.parseDynamic(n, loading);
//         }
//       }
//     },
//     shouldLoadNode: function(node) {
//       return node.nodeType === 1 && matches.call(node, importer.loadSelectorsForNode(node));
//     },
//     shouldParseNode: function(node) {
//       return node.nodeType === 1 && matches.call(node, parser.parseSelectorsForNode(node));
//     }
//   };
//   importer.observer.addCallback = dynamic.added.bind(dynamic);
//   var matches = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
// });
//
// (function(scope) {
//   var initializeModules = scope.initializeModules;
//   var isIE = scope.isIE;
//   if (scope.useNative) {
//     return;
//   }
//   if (isIE && typeof window.CustomEvent !== "function") {
//     window.CustomEvent = function(inType, params) {
//       params = params || {};
//       var e = document.createEvent("CustomEvent");
//       e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
//       return e;
//     };
//     window.CustomEvent.prototype = window.Event.prototype;
//   }
//   initializeModules();
//   var rootDocument = scope.rootDocument;
//   function bootstrap() {
//     HTMLImports.importer.bootDocument(rootDocument);
//   }
//   if (document.readyState === "complete" || document.readyState === "interactive" && !window.attachEvent) {
//     bootstrap();
//   } else {
//     document.addEventListener("DOMContentLoaded", bootstrap);
//   }
// })(HTMLImports);
//
// window.CustomElements = window.CustomElements || {
//   flags: {}
// };
//
// (function(scope) {
//   var flags = scope.flags;
//   var modules = [];
//   var addModule = function(module) {
//     modules.push(module);
//   };
//   var initializeModules = function() {
//     modules.forEach(function(module) {
//       module(scope);
//     });
//   };
//   scope.addModule = addModule;
//   scope.initializeModules = initializeModules;
//   scope.hasNative = Boolean(document.registerElement);
//   scope.useNative = !flags.register && scope.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || HTMLImports.useNative);
// })(CustomElements);
//
// CustomElements.addModule(function(scope) {
//   var IMPORT_LINK_TYPE = window.HTMLImports ? HTMLImports.IMPORT_LINK_TYPE : "none";
//   function forSubtree(node, cb) {
//     findAllElements(node, function(e) {
//       if (cb(e)) {
//         return true;
//       }
//       forRoots(e, cb);
//     });
//     forRoots(node, cb);
//   }
//   function findAllElements(node, find, data) {
//     var e = node.firstElementChild;
//     if (!e) {
//       e = node.firstChild;
//       while (e && e.nodeType !== Node.ELEMENT_NODE) {
//         e = e.nextSibling;
//       }
//     }
//     while (e) {
//       if (find(e, data) !== true) {
//         findAllElements(e, find, data);
//       }
//       e = e.nextElementSibling;
//     }
//     return null;
//   }
//   function forRoots(node, cb) {
//     var root = node.shadowRoot;
//     while (root) {
//       forSubtree(root, cb);
//       root = root.olderShadowRoot;
//     }
//   }
//   var processingDocuments;
//   function forDocumentTree(doc, cb) {
//     processingDocuments = [];
//     _forDocumentTree(doc, cb);
//     processingDocuments = null;
//   }
//   function _forDocumentTree(doc, cb) {
//     doc = wrap(doc);
//     if (processingDocuments.indexOf(doc) >= 0) {
//       return;
//     }
//     processingDocuments.push(doc);
//     var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");
//     for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
//       if (n.import) {
//         _forDocumentTree(n.import, cb);
//       }
//     }
//     cb(doc);
//   }
//   scope.forDocumentTree = forDocumentTree;
//   scope.forSubtree = forSubtree;
// });
//
// CustomElements.addModule(function(scope) {
//   var flags = scope.flags;
//   var forSubtree = scope.forSubtree;
//   var forDocumentTree = scope.forDocumentTree;
//   function addedNode(node) {
//     return added(node) || addedSubtree(node);
//   }
//   function added(node) {
//     if (scope.upgrade(node)) {
//       return true;
//     }
//     attached(node);
//   }
//   function addedSubtree(node) {
//     forSubtree(node, function(e) {
//       if (added(e)) {
//         return true;
//       }
//     });
//   }
//   function attachedNode(node) {
//     attached(node);
//     if (inDocument(node)) {
//       forSubtree(node, function(e) {
//         attached(e);
//       });
//     }
//   }
//   var hasPolyfillMutations = !window.MutationObserver || window.MutationObserver === window.JsMutationObserver;
//   scope.hasPolyfillMutations = hasPolyfillMutations;
//   var isPendingMutations = false;
//   var pendingMutations = [];
//   function deferMutation(fn) {
//     pendingMutations.push(fn);
//     if (!isPendingMutations) {
//       isPendingMutations = true;
//       setTimeout(takeMutations);
//     }
//   }
//   function takeMutations() {
//     isPendingMutations = false;
//     var $p = pendingMutations;
//     for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
//       p();
//     }
//     pendingMutations = [];
//   }
//   function attached(element) {
//     if (hasPolyfillMutations) {
//       deferMutation(function() {
//         _attached(element);
//       });
//     } else {
//       _attached(element);
//     }
//   }
//   function _attached(element) {
//     if (element.__upgraded__ && (element.attachedCallback || element.detachedCallback)) {
//       if (!element.__attached && inDocument(element)) {
//         element.__attached = true;
//         if (element.attachedCallback) {
//           element.attachedCallback();
//         }
//       }
//     }
//   }
//   function detachedNode(node) {
//     detached(node);
//     forSubtree(node, function(e) {
//       detached(e);
//     });
//   }
//   function detached(element) {
//     if (hasPolyfillMutations) {
//       deferMutation(function() {
//         _detached(element);
//       });
//     } else {
//       _detached(element);
//     }
//   }
//   function _detached(element) {
//     if (element.__upgraded__ && (element.attachedCallback || element.detachedCallback)) {
//       if (element.__attached && !inDocument(element)) {
//         element.__attached = false;
//         if (element.detachedCallback) {
//           element.detachedCallback();
//         }
//       }
//     }
//   }
//   function inDocument(element) {
//     var p = element;
//     var doc = wrap(document);
//     while (p) {
//       if (p == doc) {
//         return true;
//       }
//       p = p.parentNode || p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host;
//     }
//   }
//   function watchShadow(node) {
//     if (node.shadowRoot && !node.shadowRoot.__watched) {
//       flags.dom && console.log("watching shadow-root for: ", node.localName);
//       var root = node.shadowRoot;
//       while (root) {
//         observe(root);
//         root = root.olderShadowRoot;
//       }
//     }
//   }
//   function handler(mutations) {
//     if (flags.dom) {
//       var mx = mutations[0];
//       if (mx && mx.type === "childList" && mx.addedNodes) {
//         if (mx.addedNodes) {
//           var d = mx.addedNodes[0];
//           while (d && d !== document && !d.host) {
//             d = d.parentNode;
//           }
//           var u = d && (d.URL || d._URL || d.host && d.host.localName) || "";
//           u = u.split("/?").shift().split("/").pop();
//         }
//       }
//       console.group("mutations (%d) [%s]", mutations.length, u || "");
//     }
//     mutations.forEach(function(mx) {
//       if (mx.type === "childList") {
//         forEach(mx.addedNodes, function(n) {
//           if (!n.localName) {
//             return;
//           }
//           addedNode(n);
//         });
//         forEach(mx.removedNodes, function(n) {
//           if (!n.localName) {
//             return;
//           }
//           detachedNode(n);
//         });
//       }
//     });
//     flags.dom && console.groupEnd();
//   }
//   function takeRecords(node) {
//     node = wrap(node);
//     if (!node) {
//       node = wrap(document);
//     }
//     while (node.parentNode) {
//       node = node.parentNode;
//     }
//     var observer = node.__observer;
//     if (observer) {
//       handler(observer.takeRecords());
//       takeMutations();
//     }
//   }
//   var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
//   function observe(inRoot) {
//     if (inRoot.__observer) {
//       return;
//     }
//     var observer = new MutationObserver(handler);
//     observer.observe(inRoot, {
//       childList: true,
//       subtree: true
//     });
//     inRoot.__observer = observer;
//   }
//   function upgradeDocument(doc) {
//     doc = wrap(doc);
//     flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
//     addedNode(doc);
//     observe(doc);
//     flags.dom && console.groupEnd();
//   }
//   function upgradeDocumentTree(doc) {
//     forDocumentTree(doc, upgradeDocument);
//   }
//   var originalCreateShadowRoot = Element.prototype.createShadowRoot;
//   if (originalCreateShadowRoot) {
//     Element.prototype.createShadowRoot = function() {
//       var root = originalCreateShadowRoot.call(this);
//       CustomElements.watchShadow(this);
//       return root;
//     };
//   }
//   scope.watchShadow = watchShadow;
//   scope.upgradeDocumentTree = upgradeDocumentTree;
//   scope.upgradeSubtree = addedSubtree;
//   scope.upgradeAll = addedNode;
//   scope.attachedNode = attachedNode;
//   scope.takeRecords = takeRecords;
// });
//
// CustomElements.addModule(function(scope) {
//   var flags = scope.flags;
//   function upgrade(node) {
//     if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
//       var is = node.getAttribute("is");
//       var definition = scope.getRegisteredDefinition(is || node.localName);
//       if (definition) {
//         if (is && definition.tag == node.localName) {
//           return upgradeWithDefinition(node, definition);
//         } else if (!is && !definition.extends) {
//           return upgradeWithDefinition(node, definition);
//         }
//       }
//     }
//   }
//   function upgradeWithDefinition(element, definition) {
//     flags.upgrade && console.group("upgrade:", element.localName);
//     if (definition.is) {
//       element.setAttribute("is", definition.is);
//     }
//     implementPrototype(element, definition);
//     element.__upgraded__ = true;
//     created(element);
//     scope.attachedNode(element);
//     scope.upgradeSubtree(element);
//     flags.upgrade && console.groupEnd();
//     return element;
//   }
//   function implementPrototype(element, definition) {
//     if (Object.__proto__) {
//       element.__proto__ = definition.prototype;
//     } else {
//       customMixin(element, definition.prototype, definition.native);
//       element.__proto__ = definition.prototype;
//     }
//   }
//   function customMixin(inTarget, inSrc, inNative) {
//     var used = {};
//     var p = inSrc;
//     while (p !== inNative && p !== HTMLElement.prototype) {
//       var keys = Object.getOwnPropertyNames(p);
//       for (var i = 0, k; k = keys[i]; i++) {
//         if (!used[k]) {
//           Object.defineProperty(inTarget, k, Object.getOwnPropertyDescriptor(p, k));
//           used[k] = 1;
//         }
//       }
//       p = Object.getPrototypeOf(p);
//     }
//   }
//   function created(element) {
//     if (element.createdCallback) {
//       element.createdCallback();
//     }
//   }
//   scope.upgrade = upgrade;
//   scope.upgradeWithDefinition = upgradeWithDefinition;
//   scope.implementPrototype = implementPrototype;
// });
//
// CustomElements.addModule(function(scope) {
//   var upgradeDocumentTree = scope.upgradeDocumentTree;
//   var upgrade = scope.upgrade;
//   var upgradeWithDefinition = scope.upgradeWithDefinition;
//   var implementPrototype = scope.implementPrototype;
//   var useNative = scope.useNative;
//   function register(name, options) {
//     var definition = options || {};
//     if (!name) {
//       throw new Error("document.registerElement: first argument `name` must not be empty");
//     }
//     if (name.indexOf("-") < 0) {
//       throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(name) + "'.");
//     }
//     if (isReservedTag(name)) {
//       throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(name) + "'. The type name is invalid.");
//     }
//     if (getRegisteredDefinition(name)) {
//       throw new Error("DuplicateDefinitionError: a type with name '" + String(name) + "' is already registered");
//     }
//     if (!definition.prototype) {
//       definition.prototype = Object.create(HTMLElement.prototype);
//     }
//     definition.__name = name.toLowerCase();
//     definition.lifecycle = definition.lifecycle || {};
//     definition.ancestry = ancestry(definition.extends);
//     resolveTagName(definition);
//     resolvePrototypeChain(definition);
//     overrideAttributeApi(definition.prototype);
//     registerDefinition(definition.__name, definition);
//     definition.ctor = generateConstructor(definition);
//     definition.ctor.prototype = definition.prototype;
//     definition.prototype.constructor = definition.ctor;
//     if (scope.ready) {
//       upgradeDocumentTree(document);
//     }
//     return definition.ctor;
//   }
//   function overrideAttributeApi(prototype) {
//     if (prototype.setAttribute._polyfilled) {
//       return;
//     }
//     var setAttribute = prototype.setAttribute;
//     prototype.setAttribute = function(name, value) {
//       changeAttribute.call(this, name, value, setAttribute);
//     };
//     var removeAttribute = prototype.removeAttribute;
//     prototype.removeAttribute = function(name) {
//       changeAttribute.call(this, name, null, removeAttribute);
//     };
//     prototype.setAttribute._polyfilled = true;
//   }
//   function changeAttribute(name, value, operation) {
//     name = name.toLowerCase();
//     var oldValue = this.getAttribute(name);
//     operation.apply(this, arguments);
//     var newValue = this.getAttribute(name);
//     if (this.attributeChangedCallback && newValue !== oldValue) {
//       this.attributeChangedCallback(name, oldValue, newValue);
//     }
//   }
//   function isReservedTag(name) {
//     for (var i = 0; i < reservedTagList.length; i++) {
//       if (name === reservedTagList[i]) {
//         return true;
//       }
//     }
//   }
//   var reservedTagList = [ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ];
//   function ancestry(extnds) {
//     var extendee = getRegisteredDefinition(extnds);
//     if (extendee) {
//       return ancestry(extendee.extends).concat([ extendee ]);
//     }
//     return [];
//   }
//   function resolveTagName(definition) {
//     var baseTag = definition.extends;
//     for (var i = 0, a; a = definition.ancestry[i]; i++) {
//       baseTag = a.is && a.tag;
//     }
//     definition.tag = baseTag || definition.__name;
//     if (baseTag) {
//       definition.is = definition.__name;
//     }
//   }
//   function resolvePrototypeChain(definition) {
//     if (!Object.__proto__) {
//       var nativePrototype = HTMLElement.prototype;
//       if (definition.is) {
//         var inst = document.createElement(definition.tag);
//         var expectedPrototype = Object.getPrototypeOf(inst);
//         if (expectedPrototype === definition.prototype) {
//           nativePrototype = expectedPrototype;
//         }
//       }
//       var proto = definition.prototype, ancestor;
//       while (proto && proto !== nativePrototype) {
//         ancestor = Object.getPrototypeOf(proto);
//         proto.__proto__ = ancestor;
//         proto = ancestor;
//       }
//       definition.native = nativePrototype;
//     }
//   }
//   function instantiate(definition) {
//     return upgradeWithDefinition(domCreateElement(definition.tag), definition);
//   }
//   var registry = {};
//   function getRegisteredDefinition(name) {
//     if (name) {
//       return registry[name.toLowerCase()];
//     }
//   }
//   function registerDefinition(name, definition) {
//     registry[name] = definition;
//   }
//   function generateConstructor(definition) {
//     return function() {
//       return instantiate(definition);
//     };
//   }
//   var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
//   function createElementNS(namespace, tag, typeExtension) {
//     if (namespace === HTML_NAMESPACE) {
//       return createElement(tag, typeExtension);
//     } else {
//       return domCreateElementNS(namespace, tag);
//     }
//   }
//   function createElement(tag, typeExtension) {
//     var definition = getRegisteredDefinition(typeExtension || tag);
//     if (definition) {
//       if (tag == definition.tag && typeExtension == definition.is) {
//         return new definition.ctor();
//       }
//       if (!typeExtension && !definition.is) {
//         return new definition.ctor();
//       }
//     }
//     var element;
//     if (typeExtension) {
//       element = createElement(tag);
//       element.setAttribute("is", typeExtension);
//       return element;
//     }
//     element = domCreateElement(tag);
//     if (tag.indexOf("-") >= 0) {
//       implementPrototype(element, HTMLElement);
//     }
//     return element;
//   }
//   function cloneNode(deep) {
//     var n = domCloneNode.call(this, deep);
//     upgrade(n);
//     return n;
//   }
//   var domCreateElement = document.createElement.bind(document);
//   var domCreateElementNS = document.createElementNS.bind(document);
//   var domCloneNode = Node.prototype.cloneNode;
//   var isInstance;
//   if (!Object.__proto__ && !useNative) {
//     isInstance = function(obj, ctor) {
//       var p = obj;
//       while (p) {
//         if (p === ctor.prototype) {
//           return true;
//         }
//         p = p.__proto__;
//       }
//       return false;
//     };
//   } else {
//     isInstance = function(obj, base) {
//       return obj instanceof base;
//     };
//   }
//   document.registerElement = register;
//   document.createElement = createElement;
//   document.createElementNS = createElementNS;
//   Node.prototype.cloneNode = cloneNode;
//   scope.registry = registry;
//   scope.instanceof = isInstance;
//   scope.reservedTagList = reservedTagList;
//   scope.getRegisteredDefinition = getRegisteredDefinition;
//   document.register = document.registerElement;
// });
//
// (function(scope) {
//   var useNative = scope.useNative;
//   var initializeModules = scope.initializeModules;
//   var isIE11OrOlder = /Trident/.test(navigator.userAgent);
//   if (isIE11OrOlder) {
//     (function() {
//       var importNode = document.importNode;
//       document.importNode = function() {
//         var n = importNode.apply(document, arguments);
//         if (n.nodeType == n.DOCUMENT_FRAGMENT_NODE) {
//           var f = document.createDocumentFragment();
//           f.appendChild(n);
//           return f;
//         } else {
//           return n;
//         }
//       };
//     })();
//   }
//   if (useNative) {
//     var nop = function() {};
//     scope.watchShadow = nop;
//     scope.upgrade = nop;
//     scope.upgradeAll = nop;
//     scope.upgradeDocumentTree = nop;
//     scope.upgradeSubtree = nop;
//     scope.takeRecords = nop;
//     scope.instanceof = function(obj, base) {
//       return obj instanceof base;
//     };
//   } else {
//     initializeModules();
//   }
//   var upgradeDocumentTree = scope.upgradeDocumentTree;
//   if (!window.wrap) {
//     if (window.ShadowDOMPolyfill) {
//       window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
//       window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;
//     } else {
//       window.wrap = window.unwrap = function(node) {
//         return node;
//       };
//     }
//   }
//   function bootstrap() {
//     upgradeDocumentTree(wrap(document));
//     if (window.HTMLImports) {
//       HTMLImports.__importsParsingHook = function(elt) {
//         upgradeDocumentTree(wrap(elt.import));
//       };
//     }
//     CustomElements.ready = true;
//     setTimeout(function() {
//       CustomElements.readyTime = Date.now();
//       if (window.HTMLImports) {
//         CustomElements.elapsed = CustomElements.readyTime - HTMLImports.readyTime;
//       }
//       document.dispatchEvent(new CustomEvent("WebComponentsReady", {
//         bubbles: true
//       }));
//     });
//   }
//   if (isIE11OrOlder && typeof window.CustomEvent !== "function") {
//     window.CustomEvent = function(inType, params) {
//       params = params || {};
//       var e = document.createEvent("CustomEvent");
//       e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
//       return e;
//     };
//     window.CustomEvent.prototype = window.Event.prototype;
//   }
//   if (document.readyState === "complete" || scope.flags.eager) {
//     bootstrap();
//   } else if (document.readyState === "interactive" && !window.attachEvent && (!window.HTMLImports || window.HTMLImports.ready)) {
//     bootstrap();
//   } else {
//     var loadEvent = window.HTMLImports && !HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
//     window.addEventListener(loadEvent, bootstrap);
//   }
// })(window.CustomElements);
//
// if (typeof HTMLTemplateElement === "undefined") {
//   (function() {
//     var TEMPLATE_TAG = "template";
//     HTMLTemplateElement = function() {};
//     HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);
//     HTMLTemplateElement.decorate = function(template) {
//       if (!template.content) {
//         template.content = template.ownerDocument.createDocumentFragment();
//         var child;
//         while (child = template.firstChild) {
//           template.content.appendChild(child);
//         }
//       }
//     };
//     HTMLTemplateElement.bootstrap = function(doc) {
//       var templates = doc.querySelectorAll(TEMPLATE_TAG);
//       for (var i = 0, l = templates.length, t; i < l && (t = templates[i]); i++) {
//         HTMLTemplateElement.decorate(t);
//       }
//     };
//     addEventListener("DOMContentLoaded", function() {
//       HTMLTemplateElement.bootstrap(document);
//     });
//   })();
// }
//
// (function(scope) {
//   var style = document.createElement("style");
//   style.textContent = "" + "body {" + "transition: opacity ease-in 0.2s;" + " } \n" + "body[unresolved] {" + "opacity: 0; display: block; overflow: hidden; position: relative;" + " } \n";
//   var head = document.querySelector("head");
//   head.insertBefore(style, head.firstChild);
// })(window.WebComponents);
