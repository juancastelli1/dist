(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e49165a8"],{"2c8d":function(e,t,o){},"461b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{id:"app"}},[o("div",{staticClass:"myTable",attrs:{id:"proveedores"}},[o("vue-headful",{attrs:{title:"Proveedores - Aranda"}}),o("h2",[e._v("Listado de Proveedores")]),o("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:e.testFetch}},[o("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[e._v("mdi-cached")]),e._v(" Actualizar ")],1),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Nuevo Proveedor"},on:{click:function(t){return e.altaProveedor()}}},[o("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")]),e._v(" Nuevo Proveedor ")],1),o("b-modal",{attrs:{"no-close-on-backdrop":"",id:"modal-alta","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("h5",{staticClass:"modal-title"},[e._v("Alta")])]},proxy:!0}])},[o("proveedores-alta",{attrs:{updateTable:e.testFetch}})],1),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar PDF",variant:"danger"},on:{click:function(t){return e.generarPDF()}}},[o("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),o("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),e._v(" Generar PDF ")]),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-excel",modifiers:{"modal-excel":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"success",id:"btn_del_full",title:"Importar desde Excel"}},[e._v(" Importar Excel ")]),o("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-excel","hide-footer":"",title:"Importar desde Excel","ok-only":""}},[o("h4",[e._v("Elige un archivo para importar")]),o("input",{ref:"archivo",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:e.uploadFile}}),o("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),o("b-button",{staticClass:"mt-3",attrs:{variant:"success",block:"",title:"Importar"},on:{click:e.importarExcel}},[e._v(" Importar ")])],1),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-eliminarTodo",modifiers:{"modal-eliminarTodo":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"danger",id:"btn_del_full",title:"Eliminar todos los registros",disabled:e.btn_del_full}},[o("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[e._v(" mdi-delete ")]),e._v(" Eliminar ")],1),o("div",[o("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[e.selected.length===e.rows?o("div",{staticClass:"d-block text-center"},[o("h3",[e._v("¿Esta seguro de eliminar todos los registros ?")])]):o("div",{staticClass:"d-block text-center"},[o("h3",[e._v("¿Esta seguro de eliminar "+e._s(e.selected.length)+" registros ?")])]),o("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),o("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.delete_all_Proveedores()}}},[e._v(" Eliminar ")])],1)],1),o("b-form-group",{directives:[{name:"show",rawName:"v-show",value:e.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[o("b-input-group",{attrs:{size:"sm"}},[o("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),o("b-input-group-append",[o("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Limpiar")])],1)],1)],1),e.rows>0?o("div",[e.selected.length>0?o("div",[e.rows!=e.rowsFilter?o("div",[o("pre",[e._v("Registros Fitrados: "+e._s(e.rowsFilter)+" | Filas seleccionadas: "+e._s(e.selected.length))])]):o("div",[o("pre",[e._v("Cantidad de registros: "+e._s(e.rows)+" | Filas seleccionadas: "+e._s(e.selected.length))])])]):o("div",[e.rows!=e.rowsFilter?o("div",[o("pre",[e._v("Registros Fitrados: "+e._s(e.rowsFilter)+" ")])]):o("div",[o("pre",[e._v("Cantidad de registros: "+e._s(e.rows))])])]),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Seleccionar Todo",disabled:e.btn_select},on:{click:e.seleccionar_todas}},[e._v(" Seleccionar Todo ")]),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Limpiar Seleccion",disabled:e.btn_limpiar},on:{click:e.limpiar_seleccion}},[e._v(" Limpiar Seleccion ")])],1):o("div",[o("pre",[e._v("Cantidad de registros: "+e._s(e.rows))])]),o("section",[o("b-table",{ref:"tablaregistros",attrs:{fields:e.fields,striped:"",sortable:"",responsive:"",hover:"","sort-by":e.letra,"sort-asc":!0,items:e.tabla_proveedores,"show-empty":"","per-page":e.perPage,"current-page":e.currentPage,"no-border-collapse":!1,id:"tablaregistros",filter:e.filter,selectable:"","select-mode":"multi"},on:{filtered:e.onFiltered,"row-selected":e.seleccionar_una},scopedSlots:e._u([{key:"empty",fn:function(){return[o("b",[e._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(codigo_proveedor)",fn:function(t){return[o("b",[e._v(e._s(t.value))])]}},{key:"cell(nombre)",fn:function(t){return[e._v(" "+e._s(t.value.toUpperCase())+" ")]}},{key:"cell(localidad)",fn:function(t){return[e._v(" "+e._s(t.value.toUpperCase())+" ")]}},{key:"cell(provincia)",fn:function(t){return[e._v(" "+e._s(t.value.toUpperCase())+" ")]}},{key:"cell(responsable)",fn:function(t){return[e._v(" "+e._s(t.value.toUpperCase())+" ")]}},{key:"cell(selected)",fn:function(t){var a=t.rowSelected;return[a?[o("span",{attrs:{"aria-hidden":"true"}},[e._v("✓")]),o("span",{staticClass:"sr-only"},[e._v("Selected")])]:[o("span",{attrs:{"aria-hidden":"true"}},[e._v(" ")]),o("span",{staticClass:"sr-only"},[e._v("Not selected")])]]}},{key:"cell(action)",fn:function(t){return[o("div",{staticClass:"mt-3"},[o("b-button-group",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-editar",modifiers:{"modal-editar":!0}}],attrs:{variant:"warning",id:"button-2",title:"Editar este registro",disabled:e.btn_editar},on:{click:function(o){return e.editarProveedor(t.item,t.index)}}},[o("v-icon",{staticClass:"mr-2"},[e._v(" mdi-pencil ")]),e._v(" Editar ")],1),o("b-button",{attrs:{variant:"danger",id:"button-3",title:"Eliminar este registro",disabled:e.btn_eliminar},on:{click:function(o){return e.showModalinfo(t.item,t.index)}}},[o("v-icon",{staticClass:"mr-2"},[e._v(" mdi-delete ")]),e._v(" Eliminar ")],1)],1)],1)]}}])}),o("b-container",{attrs:{fluid:""}},[o("b-col",{staticClass:"my-1"},[o("b-pagination",{attrs:{align:"center",pills:"","total-rows":e.totalRows,"per-page":e.perPage,"aria-controls":"tabla_proveedores"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1),o("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[o("div",{staticClass:"d-block text-center"},[o("h3",[e._v(" ¿Esta seguro de eliminar los datos del proveedor "+e._s(e.infoEliminar.proveedores.codigo_proveedor)+"? ")])]),o("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v("Volver Atras")]),o("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.deleteProveedor(e.infoEliminar.proveedor.codigo_proveedor)}}},[e._v(" Eliminar ")])],1),o("b-modal",{attrs:{"no-close-on-backdrop":"",id:"modal-editar","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("h5",{staticClass:"modal-title"},[e._v(" Editar: "+e._s(e.editar.codigo_proveedor)+" ")])]},proxy:!0}])},[o("proveedores-update",{attrs:{proveedor:e.editar,updateTable:e.testFetch}})],1),o("b-modal",{ref:"modal-pdfProveedor",attrs:{size:"xl",id:"modal-pdfProveedor","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("h5",{staticClass:"modal-title"},[e._v("Vista Previa")])]},proxy:!0}])},[o("proveedores-listadopdf",{attrs:{PDFproveedor:e.proveedorAPdf}})],1)],1)])},r=[],l=o("1da1"),i=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("d81d"),o("4de4"),o("ac1f"),o("5319"),o("159b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Nombre","label-for":"nombre"}},[o("b-form-input",{attrs:{id:"nombre",state:e.validacion.nombre.estado,type:"text",placeholder:"Ingrese un Nombre","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.nombre,callback:function(t){e.$set(e.proveedor,"nombre",t)},expression:"proveedor.nombre"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.nombre.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Letra de Codificacion","label-for":"letra"}},[o("b-form-input",{attrs:{id:"letra",state:e.validacion.letra.estado,type:"text",placeholder:"Ingrese una letra","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.letra,callback:function(t){e.$set(e.proveedor,"letra",t)},expression:"proveedor.letra"}}),o("b-form-invalid-feedback",{attrs:{id:"letra-live-feedback"}},[e._v(" "+e._s(e.validacion.letra.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Direccion","label-for":"direccion"}},[o("b-form-input",{attrs:{id:"direccion",state:e.validacion.direccion.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.direccion,callback:function(t){e.$set(e.proveedor,"direccion",t)},expression:"proveedor.direccion"}}),o("b-form-invalid-feedback",{attrs:{id:"direccion-live-feedback"}},[e._v(" "+e._s(e.validacion.direccion.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Provincia","label-for":"provincia"}},[o("v-autocomplete",{attrs:{id:"provincia",state:e.validacion.provincia.estado,type:"text",placeholder:"Ingrese una provincia","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",selected:e.Tucumán,items:e.options_provincia},model:{value:e.proveedor.provincia,callback:function(t){e.$set(e.proveedor,"provincia",t)},expression:"proveedor.provincia"}}),o("b-form-invalid-feedback",{attrs:{id:"provincia-live-feedback"}},[e._v(" "+e._s(e.validacion.provincia.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Localidad","label-for":"localidad"}},[o("b-form-input",{attrs:{id:"localidad",state:e.validacion.localidad.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.localidad,callback:function(t){e.$set(e.proveedor,"localidad",t)},expression:"proveedor.localidad"}}),o("b-form-invalid-feedback",{attrs:{id:"localidad-live-feedback"}},[e._v(" "+e._s(e.validacion.localidad.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Codigo Postal","label-for":"codigopostal"}},[o("b-form-input",{attrs:{id:"codigopostal",state:e.validacion.codigopostal.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.codigopostal,callback:function(t){e.$set(e.proveedor,"codigopostal",t)},expression:"proveedor.codigopostal"}}),o("b-form-invalid-feedback",{attrs:{id:"codigopostal-live-feedback"}},[e._v(" "+e._s(e.validacion.codigopostal.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Telefono","label-for":"telefono"}},[o("b-form-input",{attrs:{id:"telefono",state:e.validacion.telefono.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.telefono,callback:function(t){e.$set(e.proveedor,"telefono",t)},expression:"proveedor.telefono"}}),o("b-form-invalid-feedback",{attrs:{id:"telefono-live-feedback"}},[e._v(" "+e._s(e.validacion.telefono.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Contacto Referencia","label-for":"responsable"}},[o("b-form-input",{attrs:{id:"responsable",state:e.validacion.responsable.estado,type:"text",placeholder:"Ingrese un Nombre","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.responsable,callback:function(t){e.$set(e.proveedor,"responsable",t)},expression:"proveedor.responsable"}}),o("b-form-invalid-feedback",{attrs:{id:"responsable-live-feedback"}},[e._v(" "+e._s(e.validacion.responsable.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Celular","label-for":"telefono_responsable"}},[o("b-form-input",{attrs:{id:"telefono_responsable",state:e.validacion.telefono_responsable.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.telefono_responsable,callback:function(t){e.$set(e.proveedor,"telefono_responsable",t)},expression:"proveedor.telefono_responsable"}}),o("b-form-invalid-feedback",{attrs:{id:"telefono_responsable-live-feedback"}},[e._v(" "+e._s(e.validacion.telefono_responsable.mensaje)+" ")])],1)],1),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.postProveedor()}}},[e._v("Guardar")])],1)}),n=[],s=o("c03a"),d={props:{updateTable:Function},data:function(){return{proveedor:{},data:{},options_provincia:[{value:"Buenos Aires",text:"1- Buenos Aires"},{value:"Catamarca",text:"2- Catamarca"},{value:"Chaco",text:"3- Chaco"},{value:"Chubut",text:"4- Chubut"},{value:"Córdoba",text:"5- Córdoba"},{value:"Corrientes",text:"6- Corrientes"},{value:"Entre Ríos",text:"7- Entre Ríos"},{value:"Formosa",text:"8- Formosa"},{value:"Jujuy",text:"9- Jujuy"},{value:"La Pampa",text:"10- La Pampa"},{value:"La Rioja",text:"11- La Rioja"},{value:"Mendoza",text:"12- Mendoza"},{value:"Misiones",text:"13- Misiones"},{value:"Neuquén",text:"14- Neuquén"},{value:"Río Negro",text:"15- Río Negro"},{value:"Salta",text:"16- Salta"},{value:"San Juan",text:"17- San Juan"},{value:"San Luis",text:"18- San Luis"},{value:"Santa Cruz",text:"19- Santa Cruz"},{value:"Santa Fe",text:"20- Santa Fe"},{value:"Santiago del Estero",text:"21- Santiago del Estero"},{value:"Tierra del Fuego",text:"22- Tierra del Fuego"},{value:"Tucumán",text:"23- Tucumán"}],validacion:{nombre:{estado:null,mensaje:""},letra:{estado:null,mensaje:""},direccion:{estado:null,mensaje:""},localidad:{estado:null,mensaje:""},provincia:{estado:null,mensaje:""},codigopostal:{estado:null,mensaje:""},telefono:{estado:null,mensaje:""},responsable:{estado:null,mensaje:""},telefono_responsable:{estado:null,mensaje:""}},respuesta:null}},methods:{getProveedores:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new s["a"],t.next=3,o.getData();case 3:e.data=t.sent;case 4:case"end":return t.stop()}}),t)})))()},postProveedor:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new s["a"],o.apiUrl.pathname="proveedores/",t.next=4,o.postData(e.proveedor);case 4:e.respuesta=t.sent,e.cargarFeedback(),e.updateTable();case 7:case"end":return t.stop()}}),t)})))()},handleInput:function(){this.proveedor.provincia="Tucumán"},cargarFeedback:function(){var e;if("undefined"!==typeof this.respuesta)for(var t in this.validacion)e=!this.respuesta.hasOwnProperty(t),this.validacion[t].estado=e,e||(this.validacion[t].mensaje=this.respuesta[t][0])}},beforeMount:function(){this.handleInput()}},c=d,u=o("2877"),p=Object(u["a"])(c,i,n,!1,null,null,null),b=p.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Codigo de proveedor","label-for":"codigo_proveedor"}},[o("b-form-input",{attrs:{id:"codigo_proveedor",type:"text",placeholder:"Ingrese el código","invalid-feedback":"Complete este campo",required:"",disabled:!0},on:{change:e.cambiocodigo},model:{value:e.proveedor.codigo_proveedor,callback:function(t){e.$set(e.proveedor,"codigo_proveedor",t)},expression:"proveedor.codigo_proveedor"}})],1),o("b-form-group",{attrs:{label:"*Nombre","label-for":"nombre"}},[o("b-form-input",{attrs:{id:"nombre",state:e.validacion.nombre.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.nombre,callback:function(t){e.$set(e.proveedor,"nombre",t)},expression:"proveedor.nombre"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.nombre.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Letra de Codificacion","label-for":"letra"}},[o("b-form-input",{attrs:{id:"letra",state:e.validacion.letra.estado,type:"text",placeholder:"Ingrese una letra","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.letra,callback:function(t){e.$set(e.proveedor,"letra",t)},expression:"proveedor.letra"}}),o("b-form-invalid-feedback",{attrs:{id:"letra-live-feedback"}},[e._v(" "+e._s(e.validacion.letra.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Direccion","label-for":"direccion"}},[o("b-form-input",{attrs:{id:"direccion",state:e.validacion.direccion.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.direccion,callback:function(t){e.$set(e.proveedor,"direccion",t)},expression:"proveedor.direccion"}}),o("b-form-invalid-feedback",{attrs:{id:"direccion-live-feedback"}},[e._v(" "+e._s(e.validacion.direccion.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Provincia","label-for":"provincia"}},[o("b-form-select",{attrs:{id:"provincia",state:e.validacion.provincia.estado,type:"text",placeholder:"Ingrese una provincia","invalid-feedback":"Complete este campo",required:"",options:e.options_provincia},model:{value:e.proveedor.provincia,callback:function(t){e.$set(e.proveedor,"provincia",t)},expression:"proveedor.provincia"}}),o("b-form-invalid-feedback",{attrs:{id:"provincia-live-feedback"}},[e._v(" "+e._s(e.validacion.provincia.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Localidad","label-for":"localidad"}},[o("b-form-input",{attrs:{id:"localidad",state:e.validacion.localidad.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.localidad,callback:function(t){e.$set(e.proveedor,"localidad",t)},expression:"proveedor.localidad"}}),o("b-form-invalid-feedback",{attrs:{id:"localidad-live-feedback"}},[e._v(" "+e._s(e.validacion.localidad.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Codigo Postal","label-for":"codigopostal"}},[o("b-form-input",{attrs:{id:"codigopostal",state:e.validacion.codigopostal.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.codigopostal,callback:function(t){e.$set(e.proveedor,"codigopostal",t)},expression:"proveedor.codigopostal"}}),o("b-form-invalid-feedback",{attrs:{id:"codigopostal-live-feedback"}},[e._v(" "+e._s(e.validacion.codigopostal.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Telefono","label-for":"telefono"}},[o("b-form-input",{attrs:{id:"telefono",state:e.validacion.telefono.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.telefono,callback:function(t){e.$set(e.proveedor,"telefono",t)},expression:"proveedor.telefono"}}),o("b-form-invalid-feedback",{attrs:{id:"telefono-live-feedback"}},[e._v(" "+e._s(e.validacion.telefono.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Responsable","label-for":"responsable"}},[o("b-form-input",{attrs:{id:"responsable",state:e.validacion.responsable.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.responsable,callback:function(t){e.$set(e.proveedor,"responsable",t)},expression:"proveedor.responsable"}}),o("b-form-invalid-feedback",{attrs:{id:"responsable-live-feedback"}},[e._v(" "+e._s(e.validacion.telefono.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Telefono del responsable","label-for":"telefono_responsable"}},[o("b-form-input",{attrs:{id:"telefono_responsable",state:e.validacion.telefono_responsable.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:""},model:{value:e.proveedor.telefono_responsable,callback:function(t){e.$set(e.proveedor,"telefono_responsable",t)},expression:"proveedor.telefono_responsable"}}),o("b-form-invalid-feedback",{attrs:{id:"telefono_responsable-live-feedback"}},[e._v(" "+e._s(e.validacion.telefono_responsable.mensaje)+" ")])],1)],1),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.putProveedor()}}},[e._v("Guardar")])],1)},m=[],f=o("bc3a"),h=o.n(f),g={props:{proveedor:{},updateTable:Function},data:function(){return{data:{},options_provincia:[{value:"Buenos Aires",text:"1- Buenos Aires"},{value:"Catamarca",text:"2- Catamarca"},{value:"Chaco",text:"3- Chaco"},{value:"Chubut",text:"4- Chubut"},{value:"Córdoba",text:"5- Córdoba"},{value:"Corrientes",text:"6- Corrientes"},{value:"Entre Ríos",text:"7- Entre Ríos"},{value:"Formosa",text:"8- Formosa"},{value:"Jujuy",text:"9- Jujuy"},{value:"La Pampa",text:"10- La Pampa"},{value:"La Rioja",text:"11- La Rioja"},{value:"Mendoza",text:"12- Mendoza"},{value:"Misiones",text:"13- Misiones"},{value:"Neuquén",text:"14- Neuquén"},{value:"Río Negro",text:"15- Río Negro"},{value:"Salta",text:"16- Salta"},{value:"San Juan",text:"17- San Juan"},{value:"San Luis",text:"18- San Luis"},{value:"Santa Cruz",text:"19- Santa Cruz"},{value:"Santa Fe",text:"20- Santa Fe"},{value:"Santiago del Estero",text:"21- Santiago del Estero"},{value:"Tierra del Fuego",text:"22- Tierra del Fuego"},{value:"Tucumán",text:"23- Tucumán"}],validacion:{nombre:{estado:null,mensaje:""},letra:{estado:null,mensaje:""},direccion:{estado:null,mensaje:""},localidad:{estado:null,mensaje:""},provincia:{estado:null,mensaje:""},codigopostal:{estado:null,mensaje:""},telefono:{estado:null,mensaje:""},responsable:{estado:null,mensaje:""},telefono_responsable:{estado:null,mensaje:""}},respuesta:null}},methods:{getProveedores:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new s["a"],t.next=3,o.getData();case 3:e.data=t.sent;case 4:case"end":return t.stop()}}),t)})))()},putProveedor:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o="vacio",t.next=3,h.a.put("http://93.188.162.174:8081/proveedores/"+e.proveedor.codigo_proveedor+"/",e.proveedor).then((function(e){swal("Operación Exitosa"," ","success")})).catch((function(e){swal("¡ERROR!","Se ha detectado un problema ","error"),o=e.response.data}));case 3:e.cargarFeedback(o),console.log("respuesta: ",o),e.updateTable();case 6:case"end":return t.stop()}}),t)})))()},cargarFeedback:function(){var e;for(var t in this.validacion)e=!this.respuesta.hasOwnProperty(t),this.validacion[t].estado=e,e||(this.validacion[t].mensaje=this.respuesta[t][0])}},beforeMount:function(){}},_=g,k=Object(u["a"])(_,v,m,!1,null,null,null),x=k.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[o("section",{staticClass:"pdf-item"},[o("b-card-group",{attrs:{deck:""}},[o("b-card",[o("b-card-text",[o("h6",[e._v("Aranda Distribucion")]),o("div",[o("b-table",{ref:"tablaregistros",attrs:{fields:e.fields,striped:"",responsive:"sm",hover:"",items:e.PDFproveedor,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros"}})],1)])],1)],1)],1)]),o("br"),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Descargar",variant:"info"},on:{click:function(t){return e.generarPDF()}}},[e._v("DESCARGAR")]),o("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!0,"paginate-elements-by-height":1400,filename:"ListadoProveedores","pdf-quality":2,"manual-pagination":!1,"pdf-format":"legal","pdf-orientation":"portrait","pdf-content-width":"100%"},on:{progress:function(t){return e.onProgress(t)},startPagination:function(t){return e.startPagination()},hasPaginated:function(t){return e.hasPaginated()},beforeDownload:function(t){return e.beforeDownload(t)},hasDownloaded:function(t){return e.hasDownloaded(t)}}},[o("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[o("section",{staticClass:"pdf-item"},[o("b-card-group",{attrs:{deck:""}},[o("b-card",[o("b-card-text",[o("h6",[e._v("Federación Tucumana de Mutuales")])])],1)],1),o("div",{staticClass:"table"},[o("b-table",{ref:"tablaregistros",attrs:{fields:e.fields,striped:"",responsive:"sm",small:"",hover:"",items:e.PDFproveedor,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros"}})],1)],1)])])],1)},y=[],C=o("6480"),P={props:{PDFproveedor:{}},components:{VueHtml2pdf:C["a"]},data:function(){return{fields:[{key:"codigo_proveedor",label:"Codigo",sortable:!0},{key:"nombre",label:"Nombre",sortable:!0},{key:"letra",label:"Letra Codificacion",sortable:!0},{key:"direccion",label:"Direccion",sortable:!0},{key:"localidad",label:"Localidad",sortable:!0},{key:"provincia",label:"Provincia",sortable:!0},{key:"codigopostal",label:"Codigo Postal",sortable:!0},{key:"telefono",label:"Telefono",sortable:!0},{key:"responsable",label:"Responsable",sortable:!0},{key:"telefono_reponsable",label:"Telefono Responsable",sortable:!0}]}},methods:{generarPDF:function(){console.log("Creando Archivo"),this.$refs.html2Pdf.generatePdf()},onShown:function(){this.$refs.cancel.focus()},onHidden:function(){this.$refs.show.focus()}},beforeMount:function(){},computed:{}},j=P,R=Object(u["a"])(j,w,y,!1,null,null,null),S=R.exports,F=new URL("http://93.188.162.174:8081");F.pathname="proveedores";var E=o("25ca"),N={props:{updateTable:Function},components:{ProveedoresAlta:b,ProveedoresUpdate:x,ProveedoresListadopdf:S,VueHtml2pdf:C["a"]},data:function(){return{tabla_proveedores:[],fields:[{key:"selected",label:"Seleccionar",sortable:!0},{key:"nombre",label:"Nombre",sortable:!0},{key:"letra",label:"Letra",sortable:!0},{key:"direccion",label:"Direccion",sortable:!0},{key:"localidad",label:"Localidad",sortable:!0},{key:"provincia",label:"Provincia",sortable:!0},{key:"telefono",label:"Telefono",sortable:!0},{key:"codigopostal",label:"Codigo Postal",sortable:!0},{key:"responsable",label:"Responsable",sortable:!0},{key:"telefono_responsable",label:"Telefono Responsable",sortable:!0},{key:"action",label:"Acciones",variant:"secondary"}],totalRows:1,currentPage:1,perPage:10,selected:[],buscar:"",filter:null,editar:{},infoEliminar:{id:"modal_eliminar",proveedores:-1},images:null,proveedorAPdf:{},btn_down_pdf:!0,btn_del_full:!0,msj_tabla:" Presione 'Mostrar' para ver los regitros ",btn_mostrar:!1,btn_editar:!1,btn_ordenes:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_proveedores.length},rowsFilter:function(){return this.totalRows},id:function(){return this.tabla_proveedores.codigo_proveedor},sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},methods:{testFetch:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(F);case 3:return o=t.sent,t.next=6,o.json();case 6:a=t.sent,r=a.results,console.log(r),e.tabla_proveedores=r,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},editarProveedor:function(e,t){this.editar=e},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(e,t){this.infoEliminar.proveedor=e,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},uploadFile:function(){this.images=this.$refs.archivo.files[0],console.log(this.images)},redirect:function(){this.$session.exists()||window.location.replace("/login"),"reparto"==this.$session.get("tipocuenta")&&window.location.replace("/")},importarExcel:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,a,r,l,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.images.arrayBuffer();case 2:o=t.sent,a=E.read(o),r=a.SheetNames,console.log("workbook1"),console.log(a),console.log("SheetNames"),console.log(a.SheetNames),l=new s["a"],i=E.utils.sheet_to_json(a.Sheets[r[0]]),console.log("datos"),console.log(i),l.apiUrl.pathname="proveedores/",i.forEach((function(e){return l.postData(e)})),e.testFetch();case 16:case"end":return t.stop()}}),t)})))()},altaProveedor:function(){},deleteProveedor:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:h.a.delete("http://93.188.162.174:8081/proveedores/"+e+"/").then((function(e){swal("Operación Exitosa"," ","success"),console.log(e),t.hideModal()})).catch((function(e){swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(e),t.hideModal()})).finally((function(){t.hideModal(),t.testFetch()}));case 1:case"end":return o.stop()}}),o)})))()},delete_all_Proveedores:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.selected.length,t.prev=1,a=0;case 3:if(!(a<o)){t.next=11;break}if(h.a.delete("https://arandadistribucion.pythonanywhere.com/proveedores/"+e.selected[a].codigo_proveedor+"/"),0!=e.selected.length){t.next=8;break}return console.log("Eliminacion Exitosa"),t.abrupt("break",11);case 8:a++,t.next=3;break;case 11:e.hideModal(),swal("Eliminacion Exitosa"," ","success"),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](1),e.hideModal(),swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(t.t0);case 20:return t.prev=20,e.testFetch(),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[1,15,20,23]])})))()},seleccionar_una:function(e){this.selected=e,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_ordenes=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_ordenes=!1,this.btn_limpiar=!0)},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_ordenes=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_ordenes=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},generarPDF:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0!=e.tabla_proveedores.length?(e.proveedorAPdf=e.tabla_proveedores,e.$refs["modal-pdfProveedor"].show()):swal("Debe tener al menos 1 registro");case 1:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.testFetch(),this.redirect()}},$=N,T=(o("608e"),Object(u["a"])($,a,r,!1,null,"3e0fa358",null));t["default"]=T.exports},"608e":function(e,t,o){"use strict";o("2c8d")}}]);
//# sourceMappingURL=chunk-e49165a8.adbc1575.js.map