(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{366:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(3),r=o(376);function l(t,e,o){return Object(r.a)(t,e,o).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}l("itemGroup")},375:function(t,e,o){"use strict";o(395);var n=o(1);e.a=n.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},376:function(t,e,o){"use strict";o.d(e,"a",(function(){return v})),o.d(e,"b",(function(){return d}));var n=o(3),r=(o(36),o(1)),l=o(18);function c(t,e){return function(){return Object(l.c)("The ".concat(t," component must be used inside a ").concat(e))}}function v(t,e,o){var l=e&&o?{register:c(e,o),unregister:c(e,o)}:null;return r.a.extend({name:"registrable-inject",inject:Object(n.a)({},t,{default:l})})}function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.a.extend({name:"registrable-provide",provide:function(){return Object(n.a)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},613:function(t,e,o){var content=o(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("422f8966",content,!0,{sourceMap:!1})},678:function(t,e,o){t.exports=o.p+"img/velacion.44887c8.png"},679:function(t,e,o){"use strict";o(613)},680:function(t,e,o){var n=o(40)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa&display=swap);"]),n.push([t.i,'.font{font-family:"Comfortaa",cursive;font-size:20px}.texto{font-family:"Raleway",sans-serif;font-weight:700;font-size:30px;color:#003b4c}',""]),t.exports=n},794:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{mostrar:!1}}},r=(o(679),o(69)),l=o(62),c=o.n(l),v=o(371),d=o(411),f=o(910),m=o(412),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{id:"empresariales",justify:"center",align:"center"}},[n("v-col",{staticClass:"mt-5 mb-5",attrs:{cols:"12",sm:"12",md:"12",lg:"10",xl:"9"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"5",lg:"6",xl:"5","data-aos":"fade-up","data-aos-delay":"300",justify:"center",align:"center"}},[n("img",{staticClass:"img-hover",attrs:{src:o(678),width:"60%"}})]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6","data-aos":"fade-up","data-aos-delay":"300"}},[n("div",{staticClass:"ml-5 mr-5"},[n("p",{staticClass:"texto ",staticStyle:{color:"#ED6D81"}},[t._v("Durante la Velación:")]),n("br"),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("1.")]),t._v(" Salas de velación hasta por 24 horas en la Red Nacional LOS OLIVOS, excepto en el Departamento de Antioquia, donde el servicio de velación es hasta por 12 horas y en donde la Red Nacional tenga convenio vigente de acuerdo al caso. ")]),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("2.")]),t._v(" Una ofrenda Floral.")]),t._v(" "),t.mostrar?n("div",[n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("3.")]),t._v(" Conjunto recordatorio (denario, libro de oraciones, registro de asistencia). ")]),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("4.")]),t._v(" Servicio de Cafetería (tinto, aromática y agua). ")]),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("5.")]),t._v(" Servicio de teléfono y fax (en donde exista este servicio).")]),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("6.")]),t._v(" Una serie de hasta seis (6) carteles.")]),t._v(" "),n("p",{staticClass:"font"},[n("span",{staticStyle:{color:"#ED6D81"}},[t._v("7.")]),t._v(" Velación domiciliaria (incluye préstamo de implementos para la velación y un kit de cafetería). Se realiza de acuerdo a la normatividad vigente.")])]):t._e(),t._v(" "),n("div",{attrs:{align:"center",justify:"center"}},[!1===t.mostrar?n("v-btn",{staticClass:"mt-2 text-capitalize",staticStyle:{"background-color":"#ED6D81",color:"white"},attrs:{elevation:"2"},on:{click:function(e){t.mostrar=!t.mostrar}}},[t._v("Ver más")]):t._e(),t._v(" "),!0===t.mostrar?n("v-btn",{staticClass:"mt-2 text-capitalize",staticStyle:{"background-color":"#ED6D81",color:"white"},attrs:{elevation:"2"},on:{click:function(e){t.mostrar=!t.mostrar}}},[t._v("Ver menos")]):t._e(),t._v(" "),n("v-btn",{staticClass:"mt-2 text-capitalize",staticStyle:{"background-color":"#ED6D81",color:"white"},attrs:{href:"/AfiliacionOnLine",elevation:"2"}},[t._v("Afiliarme")])],1)])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:d.a,VContainer:f.a,VRow:m.a})}}]);