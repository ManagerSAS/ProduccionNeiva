(window.webpackJsonp=window.webpackJsonp||[]).push([[54,21,72],{422:function(e,t,r){"use strict";r.r(t);var o=r(84),n=r.n(o).a.create({baseURL:"https://api-neiva.losolivos.co/",headers:{"Access-Control-Allow-Origin":"*"}});t.default=n},623:function(e,t,r){var content=r(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("41bdc840",content,!0,{sourceMap:!1})},634:function(e,t,r){"use strict";r.r(t);var o=r(11),n=(r(65),r(422));t.default={login:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.default.post("/api/v1/login",e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},707:function(e,t,r){e.exports=r.p+"img/imageLogin.daf24b6.png"},708:function(e,t,r){"use strict";r(623)},709:function(e,t,r){var o=r(40)(!1);o.push([e.i,".vh-100[data-v-4e316049]{height:100vh}.background-container-login[data-v-4e316049]{background-color:rgba(127,255,212,.16078)}.all-center[data-v-4e316049]{align-items:center;justify-content:center}",""]),e.exports=o},801:function(e,t,r){"use strict";r.r(t);var o=r(11),n=(r(65),r(81),r(634)),l=r(112),c={data:function(){return{show:!1,email:"",password:"",rules:{required:function(e){return!!e||"Requerido."},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Correo invalido."}},loadLogin:!1,snackbarColor:"",showError:!1,messageInvalid:null}},mounted:function(){console.log(l.default.state.auth)},methods:{validateDataForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadLogin=!0,r={usuario:e.email,clave:e.password},t.prev=2,t.next=5,n.default.login(r);case 5:data=t.sent,o=data.data.token,200===data.status&&null!==o?o&&(setTimeout((function(){e.loadLogin=!1}),3e3),localStorage.setItem("token",o),localStorage.setItem("username",data.data.rows[0].usuario),localStorage.setItem("authenticated-olivos-neiva",!0),l.default.commit("doLogin",o),l.default.dispatch("doLogin",o),window.location.href="/PanelAdmon/Panel"):(e.snackbarColor="red accent-3",e.showError=!0,e.messageInvalid="Asegúrate que el usuario y la contraseña sean correctos",setTimeout((function(){e.snackbarColor="",e.showError=!1,e.messageInvalid=""}),5e3)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}},d=(r(708),r(69)),v=r(62),m=r.n(v),f=r(371),h=r(472),w=r(438),k=r(411),x=r(440),C=r(541),_=r(381),y=r(357),V=r(412),L=r(516),z=r(442),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",[o("v-col",{staticClass:"pl-md-15",attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"5"}},[o("v-card",{staticClass:"pt-md-15 pl-md-15 pr-md-15",attrs:{flat:"",color:"transparent"}},[o("v-card-text",{staticClass:"pl-lg-10 pr-lg-10 pt-lg-10"},[o("div",{staticClass:"mb-8"},[o("v-img",{attrs:{src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1663336092/lcc7rkefopzlyhlnlzrb.png","max-width":"65"}})],1),e._v(" "),o("div",{staticClass:"mb-6"},[o("h1",{staticClass:"display-1 font-weight-bold"},[e._v("Login")]),e._v(" "),o("p",[e._v(" Si tienes problemas para ingresar comunicate con un administrador. ")])]),e._v(" "),o("v-divider",{staticClass:"mb-9"}),e._v(" "),o("v-form",{ref:"login",attrs:{"lazy-validation":""}},[o("v-text-field",{attrs:{rules:[e.rules.required],rounded:"",filled:"",color:"teal darken-3",label:"Usuario"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.show?"text":"password",label:"Contraseña",rounded:"",filled:"",color:"teal darken-3"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),o("v-btn",{staticClass:"mb-9",attrs:{color:"teal darken-3",elevation:"0",dark:"",large:"",block:"",rounded:""},on:{click:e.validateDataForm}},[e._v("\r\n                        Ingresar\r\n                    ")]),e._v(" "),o("div",{staticClass:"d-flex justify-center mb-8 pt-15"},[o("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loadLogin,expression:"loadLogin"}],attrs:{indeterminate:"",color:"teal darken-3"}})],1),e._v(" "),o("v-snackbar",{staticClass:"pa-5 text--center",attrs:{timeout:-1,value:e.showError,color:e.snackbarColor,rounded:"pill"}},[o("span",[e._v(" "+e._s(e.messageInvalid)+" ")])])],1)],1),e._v(" "),o("v-card-text",{staticClass:"pl-md-15 pr-md-15 mt-10"},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{justify:"center",align:"center",cols:"12",sm:"10",md:"12",lg:"12",xl:"9"}},[o("v-img",{attrs:{src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1663336412/yfqdte1djmvy0czmmepz.png","max-width":"30"}}),e._v(" "),o("span",[e._v(" ©copyright | Todos los derechos reservados 2022 By: ")]),e._v(" "),o("a",{attrs:{href:"htpps://www.agenciamanager.com"}},[e._v("Manager - El equipo para tu marca")])],1)],1)],1)],1)],1),e._v(" "),o("v-col",{staticClass:"background-container-login all-center d-none d-md-none d-lg-flex vh-100",attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"7",width:""}},[o("img",{attrs:{src:r(707),width:"800",height:"650"}})])],1)}),[],!1,null,"4e316049",null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:h.a,VCardText:w.b,VCol:k.a,VDivider:x.a,VForm:C.a,VImg:_.a,VProgressCircular:y.a,VRow:V.a,VSnackbar:L.a,VTextField:z.a})}}]);