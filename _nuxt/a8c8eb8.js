(window.webpackJsonp=window.webpackJsonp||[]).push([[52,136,137,138,139,140,148,157,170,173,174],{338:function(t,e){t.exports=function(t){return Map.prototype.entries.call(t)}},342:function(t,e,r){"use strict";var n=r(377),o=r(378);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},343:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(379);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},344:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(80),f=r(338),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},345:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(42),l=r(9),f=r(61),d=r(80),v=r(122),h=r(338),y=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},346:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(80),f=r(338),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},347:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(80),f=r(338),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},348:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(338),f=r(380),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return d(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},349:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(338),f=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},350:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(42),l=r(9),f=r(61),d=r(80),v=r(122),h=r(338),y=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},351:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(42),l=r(9),f=r(61),d=r(80),v=r(122),h=r(338),y=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},352:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(61),f=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),r=arguments.length,i=0;i<r;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},353:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(61),f=r(338),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),d(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},354:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(80),f=r(338),d=r(232);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},355:function(t,e,r){"use strict";var n=r(2),o=r(48),c=r(9),l=r(61);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},377:function(t,e,r){"use strict";var n=r(2),o=r(5),c=r(100),l=r(32),f=r(235),d=r(232),v=r(123),h=r(10),y=r(4),O=r(160),S=r(71),E=r(163);t.exports=function(t,e,r){var j=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),R=j?"set":"add",T=o[t],m=T&&T.prototype,I=T,x={},_=function(t){var e=m[t];l(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof T||!(w||m.forEach&&!y((function(){(new T).entries().next()})))))I=r.getConstructor(e,t,j,R),f.enable();else if(c(t,!0)){var N=new I,A=N[R](w?{}:-0,1)!=N,M=y((function(){N.has(1)})),P=O((function(t){new T(t)})),k=!w&&y((function(){for(var t=new T,e=5;e--;)t[R](e,e);return!t.has(-0)}));P||((I=e((function(e,r){v(e,I,t);var n=E(new T,e,I);return null!=r&&d(r,n[R],{that:n,AS_ENTRIES:j}),n}))).prototype=m,m.constructor=I),(M||k)&&(_("delete"),_("has"),j&&_("get")),(k||A)&&_(R),w&&m.clear&&delete m.clear}return x[t]=I,n({global:!0,forced:I!=T},x),S(I,t),w||r.setStrong(I,t,j),I}},378:function(t,e,r){"use strict";var n=r(28).f,o=r(55),c=r(161),l=r(80),f=r(123),d=r(232),v=r(164),h=r(162),y=r(21),O=r(235).fastKey,S=r(49),E=S.set,j=S.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),E(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[v],{that:t,AS_ENTRIES:r})})),S=j(e),w=function(t,e,r){var n,o,c=S(t),l=R(t,e);return l?l.value=r:(c.last=l={index:o=O(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},R=function(t,e){var r,n=S(t),o=O(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=S(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,r=S(e),n=R(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),y?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=S(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!R(this,t)}}),c(h.prototype,r?{get:function(t){var e=R(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return S(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=j(e),c=j(n);v(t,e,(function(t,e){E(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},379:function(t,e,r){"use strict";var n=r(9),o=r(61);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},380:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},411:function(t,e,r){"use strict";r(14),r(23),r(30),r(31);var n=r(3),o=(r(157),r(17),r(25),r(43),r(342),r(7),r(24),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(26),r(54),r(16),r(63),r(365),r(1)),c=r(340),l=r(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function E(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=j.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var n=r[t],o=E(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),j.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},412:function(t,e,r){"use strict";r(14),r(23),r(30),r(31);var n=r(3),o=(r(54),r(70),r(36),r(17),r(25),r(43),r(342),r(7),r(24),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(26),r(16),r(365),r(1)),c=r(340),l=r(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(l.E)(n)]=e(),r}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},S=y("align",(function(){return{type:String,default:null,validator:O}})),E=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},j=y("justify",(function(){return{type:String,default:null,validator:E}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},R=y("alignContent",(function(){return{type:String,default:null,validator:w}})),T={align:Object.keys(S),justify:Object.keys(j),alignContent:Object.keys(R)},m={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,r){var n=m[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},S),{},{justify:{type:String,default:null,validator:E}},j),{},{alignContent:{type:String,default:null,validator:w}},R),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],T)T[e].forEach((function(t){var n=r[t],o=I(e,t,n);o&&d.push(o)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),x.set(l,d)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},543:function(t,e,r){"use strict";r.r(e);var n=r(69),o=r(62),c=r.n(o),l=r(411),f=r(910),d=r(412),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"pt-15 mt-15 fixed-bar header-section"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{justify:"center",align:"center",cols:"12",sm:"8",md:"8",lg:"12",xl:"12"}},[r("p",{staticClass:"text-raleway",staticStyle:{color:"white","font-size":"20px","font-weight":"400"}},[t._v("Gracias por ser parte de la RED de Servicios Funerarios más importante de Colombia.")]),t._v(" "),r("p",{staticClass:"text-raleway",staticStyle:{color:"white","font-size":"20px","font-weight":"400"}},[t._v("¡Con tu aporte nos ayudas a crecer y mejorar cada día!")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticStyle:{color:"white"},attrs:{justify:"center",align:"center",cols:"12",sm:"10",md:"12",lg:"12",xl:"9"}},[r("span",[t._v(" ©copyright | Todos los derechos reservados 2022 By: ")]),t._v(" "),r("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"htpps://www.agenciamanager.com"}},[t._v("Manager - El equipo para tu marca")])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VContainer:f.a,VRow:d.a})}}]);