(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{366:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(3),o=n(376);function l(t,e,n){return Object(o.a)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}l("itemGroup")},375:function(t,e,n){"use strict";n(395);var r=n(1);e.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},376:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var r=n(3),o=(n(36),n(1)),l=n(18);function c(t,e){return function(){return Object(l.c)("The ".concat(t," component must be used inside a ").concat(e))}}function d(t,e,n){var l=e&&n?{register:c(e,n),unregister:c(e,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},t,{default:l})})}function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.extend({name:"registrable-provide",provide:function(){return Object(r.a)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},588:function(t,e,n){t.exports=n.p+"img/sinergia1.0c1355f.png"},835:function(t,e,n){"use strict";n.r(e);var r=n(69),o=n(62),l=n.n(o),c=n(371),d=n(411),m=n(910),v=n(412),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"6",lg:"5",xl:"5",justify:"center",align:"center","data-aos":"fade-up","data-aos-delay":"300"}},[r("img",{staticClass:"d-none d-xl-block d-lg-block ",attrs:{src:n(588),width:"550",alt:""}}),t._v(" "),r("img",{staticClass:"d-none d-md-block d-lg-none ",attrs:{src:n(588),width:"450",alt:""}}),t._v(" "),r("img",{staticClass:"d-block d-sm-none ",attrs:{src:n(588),width:"80%",alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6","data-aos":"fade-up","data-aos-delay":"300"}},[r("div",{staticClass:"ml-lg-5 mr-md-8 ml-5 mr-5 "},[r("h2",{staticClass:"mb-10 text-raleway font-weight-bold",staticStyle:{color:"#7AB929","font-size":"40px"}},[t._v("Sinergia Solidaria"),r("br")]),t._v(" "),r("div",{staticClass:"mb-6"},[r("p",{staticClass:"text-comfortaa mb-6",staticStyle:{"font-size":"20px"}},[t._v("Para Los olivos es un orgullo contar con el respaldo solidario a través de nuestras asociadas, con aporte técnico a través de la Aseguradora Solidaria de Colombia y operativo por medio de la Red Nacional Los Olivos.\n                        ")]),t._v(" "),r("p",{staticClass:"text-comfortaa",staticStyle:{"font-size":"20px"}},[t._v("Los Olivos, es líder en la prestación de servicios funerarios integrales y de previsión exequial en Colombia y está presente en todo el territorio nacional.")])]),t._v(" "),r("div",{staticClass:"mb-6"},[r("v-btn",{staticClass:"text-none shadow-principal btn-hover text-raleway",staticStyle:{background:"linear-gradient(to right, #9FC419, #7AB929)",color:"white"},attrs:{"rounded-xl":"",dark:"",large:"",to:"/Sinergia"}},[t._v("\n                        Conoce todas las asistencias\n                    ")])],1)])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCol:d.a,VContainer:m.a,VRow:v.a})}}]);