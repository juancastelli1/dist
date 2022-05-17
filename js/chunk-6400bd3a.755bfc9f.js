(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6400bd3a"],{"7aad":function(t,e,a){},ac52:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("div",{staticClass:"myTable",attrs:{id:"camiones"}},[a("vue-headful",{attrs:{title:"Camiones - Aranda Distribucion"}}),a("h2",[t._v("Listado de Camiones")]),a("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:t.testFetch}},[a("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[t._v("mdi-cached")]),t._v(" Actualizar ")],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Nuevo Camion"},on:{click:function(e){return t.altaCamion()}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")]),t._v(" Nuevo Camion ")],1),a("b-modal",{attrs:{id:"modal-alta","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Alta")])]},proxy:!0}])},[a("camiones-alta",{attrs:{updateTable:t.testFetch}})],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-eliminarTodo",modifiers:{"modal-eliminarTodo":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"danger",id:"btn_del_full",title:"Eliminar todos los registros",disabled:t.btn_del_full}},[a("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[t.selected.length===t.rows?a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("¿Esta seguro de eliminar todos los registros ?")])]):a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("¿Esta seguro de eliminar "+t._s(t.selected.length)+" registros ?")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(e){return t.delete_all_Camiones()}}},[t._v(" Eliminar ")])],1)],1),a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Limpiar")])],1)],1)],1),t.rows>0?a("div",[t.selected.length>0?a("div",[t.rows!=t.rowsFilter?a("div",[a("pre",[t._v("Registros Fitrados: "+t._s(t.rowsFilter)+" | Filas seleccionadas: "+t._s(t.selected.length))])]):a("div",[a("pre",[t._v("Cantidad de registros: "+t._s(t.rows)+" | Filas seleccionadas: "+t._s(t.selected.length))])])]):a("div",[t.rows!=t.rowsFilter?a("div",[a("pre",[t._v("Registros Fitrados: "+t._s(t.rowsFilter)+" ")])]):a("div",[a("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])])]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Seleccionar Todo",disabled:t.btn_select},on:{click:t.seleccionar_todas}},[t._v(" Seleccionar Todo ")]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Limpiar Seleccion",disabled:t.btn_limpiar},on:{click:t.limpiar_seleccion}},[t._v(" Limpiar Seleccion ")])],1):a("div",[a("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])]),a("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",sortable:"",responsive:"",hover:"",items:t.tabla_camiones,"show-empty":"","per-page":t.perPage,"current-page":t.currentPage,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros",filter:t.filter,selectable:"","select-mode":"multi"},on:{filtered:t.onFiltered,"row-selected":t.seleccionar_una},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(total)",fn:function(e){return[a("b",[t._v("$"+t._s(e.value))])]}},{key:"cell(fecha)",fn:function(e){return[t._v(" "+t._s(t._f("Date")(e.value))+" ")]}},{key:"cell(selected)",fn:function(e){var i=e.rowSelected;return[i?[a("span",{attrs:{"aria-hidden":"true"}},[t._v("✓")]),a("span",{staticClass:"sr-only"},[t._v("Selected")])]:[a("span",{attrs:{"aria-hidden":"true"}},[t._v(" ")]),a("span",{staticClass:"sr-only"},[t._v("Not selected")])]]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Info",disabled:t.btn_mostrar},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" detalles ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-editar",modifiers:{"modal-editar":!0}}],attrs:{variant:"warning",id:"button-2",title:"Editar este registro",disabled:t.btn_editar},on:{click:function(a){return t.editarCamion(e.item,e.index)}}},[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-pencil ")]),t._v(" Editar ")],1),a("b-button",{attrs:{variant:"danger",id:"button-3",title:"Eliminar este registro",disabled:t.btn_eliminar},on:{click:function(a){return t.showModalinfo(e.item,e.index)}}},[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1)],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",{attrs:{title:"Datos del camion: "}},[a("div",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",{staticClass:"col-3"},[a("b-list-group-item",[a("b",[t._v("Id camion:")]),t._v(" "+t._s(e.item.id_camion))]),a("b-list-group-item",[a("b",[t._v("Numero de ticket:")]),t._v(" "+t._s(e.item.nro_ticket))]),a("b-list-group-item",[a("b",[t._v("Descripcion:")]),t._v(" "+t._s(e.item.descripcion))]),a("b-list-group-item",[a("b",[t._v("Total:")]),t._v(" "+t._s(e.item.total))]),a("b-list-group-item",[a("b",[t._v("Fecha:")]),t._v(" "+t._s(e.item.fecha))])],1),t._v("   ")],1)],1)])]}}])}),a("b-modal",{ref:"my-modal",attrs:{id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[a("div",{staticClass:"d-block text-center"},[a("h3",[t._v(" ¿Esta seguro de eliminar los datos de "+t._s(t.infoEliminar.camion.id_camion)+" - Nro ticket "+t._s(t.infoEliminar.camion.patente)+"? ")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v("Volver Atras")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(e){return t.deleteCamion(t.infoEliminar.camion.id_camion)}}},[t._v(" Eliminar ")])],1),a("b-container",{attrs:{fluid:""}},[a("b-col",{staticClass:"my-1"},[a("b-pagination",{attrs:{align:"center",pills:"","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"table_camiones"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),a("b-modal",{attrs:{id:"modal-editar","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Editar")])]},proxy:!0}])},[a("camiones-update",{attrs:{camion:t.editar,updateTable:t.testFetch}})],1)],1)])},n=[],r=a("1da1"),s=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("d81d"),a("4de4"),a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",[t._v("Los campos en (*) son obligatorios")]),a("h4",[t._v("Registrar nuevo camion:")]),a("b-form",[a("b-form-group",{attrs:{label:"*Patente","label-for":"patente"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"patente",type:"text",placeholder:"Ingrese el numero del patente",state:t.validacion.patente.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:t.camion.patente,callback:function(e){t.$set(t.camion,"patente",e)},expression:"camion.patente"}}),a("b-form-invalid-feedback",{attrs:{id:"patente-live-feedback"}},[t._v(" "+t._s(t.validacion.patente.mensaje)+" ")])],1)],1),a("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(e){return t.postCamion()}}},[t._v("Guardar")])],1)}),o=[],l=a("c03a"),c={props:{updateTable:Function},data:function(){return{camion:{},data:{},validacion:{patente:{estado:null,mensaje:""}},respuesta:{}}},methods:{getCamiones:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new l["a"],e.next=3,a.getData();case 3:t.data=e.sent;case 4:case"end":return e.stop()}}),e)})))()},postCamion:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new l["a"],a.apiUrl.pathname="camiones/",e.next=4,a.postData(t.camion);case 4:t.respuesta=e.sent,t.cargarFeedback(),t.updateTable();case 7:case"end":return e.stop()}}),e)})))()},cargarFeedback:function(){var t;for(var e in this.respuesta=this.respuesta||{},this.validacion)t=!this.respuesta.hasOwnProperty(e),this.validacion[e].estado=t,t||(this.validacion[e].mensaje=this.respuesta[e][0])}}},d=c,u=a("2877"),m=Object(u["a"])(d,s,o,!1,null,null,null),b=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",[t._v("Los campos en (*) son obligatorios")]),a("h4",[t._v("Datos")]),a("b-form",[a("b-form-group",{attrs:{label:"*Patente","label-for":"patente"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"patente",type:"text",placeholder:"Ingrese el numero del patente",state:t.validacion.patente.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:t.camion.patente,callback:function(e){t.$set(t.camion,"patente",e)},expression:"camion.patente"}}),a("b-form-invalid-feedback",{attrs:{id:"patente-live-feedback"}},[t._v(" "+t._s(t.validacion.patente.mensaje)+" ")])],1)],1),a("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(e){return t.putCamion()}}},[t._v("Modificar")])],1)},h=[],f=(a("159b"),a("bc3a")),v=a.n(f),_={props:{camion:{},updateTable:Function},data:function(){return{camiones:{},data:{},options:[{value:null,text:"Elija una gasto",disabled:!0}],validacion:{patente:{estado:null,mensaje:""}}}},created:function(){this.getCamiones()},methods:{getCamiones:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new l["a"],a.apiUrl.pathname="camiones/",e.next=4,a.getData(t.camiones);case 4:t.data=e.sent,t.data.forEach((function(e){var a={};a.value="https://arandadistribucion.pythonanywhere.com/camiones/"+e.id_camion+"/",a.text=e.camiones,console.log(a),t.options.push(a)}));case 6:case"end":return e.stop()}}),e)})))()},putCamion:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="vacio",e.next=3,v.a.put("https://arandadistribucion.pythonanywhere.com/camiones/"+t.gastoSaliente.id_gasto+"/",t.camion).then((function(t){swal("Operación Exitosa"," ","success")})).catch((function(t){var e=t.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",e,"error"),a=t.response.data}));case 3:t.cargarFeedback(a),t.updateTable();case 5:case"end":return e.stop()}}),e)})))()},cargarFeedback:function(t){var e;for(var a in console.log("respuestaAPI"),console.log(t),this.validacion)e=!t.hasOwnProperty(a),this.validacion[a].estado=e,console.log(a),e||(this.validacion[a].mensaje=t[a][0])}}},g=_,w=Object(u["a"])(g,p,h,!1,null,null,null),k=w.exports,y=new URL("https://arandadistribucion.pythonanywhere.com");y.pathname="camiones";var C={components:{CamionesAlta:b,CamionesUpdate:k},data:function(){return{tabla_camiones:[],fields:[{key:"selected",label:"Seleccionar",sortable:!0},{key:"id_camion",label:"Id Camion",sortable:!0},{key:"patente",label:"Patente",sortable:!0},{key:"action",label:"Acciones",variant:"secondary"}],selected:[],filter:null,totalRows:1,currentPage:1,perPage:10,buscar:"",editar:{},infoEliminar:{id:"modal_eliminar",camion:-1},btn_down_pdf:!0,btn_del_full:!0,msj_tabla:" Presione 'Mostrar' para ver los regitros ",btn_mostrar:!1,btn_editar:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_camiones.length},rowsFilter:function(){return this.totalRows},id:function(){return this.tabla_camiones.id_camion},sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{testFetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y);case 3:return a=e.sent,e.next=6,a.json();case 6:i=e.sent,n=i.results,console.log(n),t.tabla_camiones=n,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},editarCamion:function(t,e){this.editar=t},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(t,e){this.infoEliminar.camion=t,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},altaCamion:function(){},deleteCamion:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:v.a.delete("https://arandadistribucion.pythonanywhere.com/camiones/"+t+"/").then((function(t){swal("Operación Exitosa"," ","success"),console.log(t),e.hideModal()})).catch((function(t){swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(t),e.hideModal()})).finally((function(){return e.testFetch()}));case 1:case"end":return a.stop()}}),a)})))()},redirect:function(){this.$session.exists()||window.location.replace("/login"),"administrador"!=this.$session.get("tipocuenta")&&"reparto"!=this.$session.get("tipocuenta")||window.location.replace("/Home")},delete_all_Camiones:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.selected.length,e.prev=1,i=0;case 3:if(!(i<a)){e.next=11;break}if(v.a.delete("https://arandadistribucion.pythonanywhere.com/camiones/"+t.selected[i].id_camion+"/"),0!=t.selected.length){e.next=8;break}return console.log("Eliminacion Exitosa"),e.abrupt("break",11);case 8:i++,e.next=3;break;case 11:t.hideModal(),swal("Eliminacion Exitosa"," ","success"),e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](1),t.hideModal(),swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(e.t0);case 20:return e.prev=20,t.testFetch(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,15,20,23]])})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},seleccionar_una:function(t){this.selected=t,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_limpiar=!0)},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0}},beforeMount:function(){this.redirect(),this.testFetch()}},x=C,E=(a("f14a"),Object(u["a"])(x,i,n,!1,null,"5b38acaa",null));e["default"]=E.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").map,r=a("1dde"),s=r("map");i({target:"Array",proto:!0,forced:!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f14a:function(t,e,a){"use strict";a("7aad")}}]);
//# sourceMappingURL=chunk-6400bd3a.755bfc9f.js.map