(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca6bb14"],{4186:function(t,e,a){},d3b8:function(t,e,a){"use strict";a("4186")},df18:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("div",{staticClass:"myTable",attrs:{id:"ventas"}},[a("vue-headful",{attrs:{title:"ventas - Aranda Distribuciones"}}),a("h2",[t._v("Listado de ventas")]),a("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:t.testFetch}},[a("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[t._v("mdi-cached")]),t._v(" Actualizar ")],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{"data-backdrop":"static","data-keyboard":"false",title:"Nuevo Pago de venta"},on:{click:function(e){return t.altaventa()}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")]),t._v(" Nuevo venta ")],1),a("b-modal",{ref:"modalalta",attrs:{"no-close-on-backdrop":"",id:"modal-alta","hide-footer":"","data-backdrop":"static","data-keyboard":"false"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Alta")])]},proxy:!0}])},[a("ventas-alta",{attrs:{updateTable:t.testFetch}})],1),a("vue-excel-xlsx",{attrs:{data:t.tabla_ventas,columns:t.columns,"file-name":"Tabla exportada","file-type":"xlsx","sheet-name":"sheetname"}},[a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar Excel",variant:"success"}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar Excel ")])],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-excel",modifiers:{"modal-excel":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"success",id:"btn_del_full",title:"Importar Excel"}},[t._v(" Importar Excel ")]),a("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-excel","hide-footer":"",title:"Importar desde Excel","ok-only":""}},[a("h4",[t._v("Elige un archivo para importar")]),a("input",{ref:"archivo",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:t.uploadFile}}),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"success",block:"",title:"Importar"},on:{click:t.importarExcel}},[t._v(" Importar ")])],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-eliminarTodo",modifiers:{"modal-eliminarTodo":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"danger",id:"btn_del_full",title:"Eliminar todos los registros",disabled:t.btn_del_full}},[a("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[t.selected.length===t.rows?a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("¿Está seguro de eliminar todos los registros?")])]):a("div",{staticClass:"d-block text-center"},[t.selected.length>1?a("h3",[t._v("¿Está seguro de eliminar "+t._s(t.selected.length)+" registros?")]):a("h3",[t._v("¿Está seguro de eliminar un registro?")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(e){return t.delete_all_ventas()}}},[t._v(" Eliminar ")])],1)],1),a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Limpiar")])],1)],1)],1),t.rows>0?a("div",[t.selected.length>0?a("div",[a("pre",[t._v("                        Cantidad de registros: "+t._s(t.rows)+" | Filas seleccionadas: "+t._s(t.selected.length))])]):a("div",[a("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Seleccionar Todo",disabled:t.btn_select},on:{click:t.seleccionar_todas}},[t._v(" Seleccionar Todo ")]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Limpiar Seleccion",disabled:t.btn_limpiar},on:{click:t.limpiar_seleccion}},[t._v(" Limpiar Seleccion ")])],1):a("div",[a("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])]),a("section",{staticClass:"container"},[a("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",sortable:"","sticky-header":"450px",responsive:"",hover:"",items:t._f("TotalRange")(t._f("Tipo")(t._f("Producto")(t._f("FechaRange")(t.tabla_ventas,t.dateDesde,t.dateHasta),t.filter_producto),t.filter_tipo),t.totalDesde,t.totalHasta),"show-empty":"","no-border-collapse":!1,"per-page":t.perPage,"current-page":t.currentPage,id:"tablaregistros",selectable:"","select-mode":"multi","empty-text":"No hay registros cargados","empty-filtered-text":"No hemos encontrado registros que coincidan con lo que está buscando",filter:t.filter},on:{"row-selected":t.seleccionar_una,filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(selected)",fn:function(e){var o=e.rowSelected;return[o?[a("span",{attrs:{"aria-hidden":"true"}},[t._v("✓")]),a("span",{staticClass:"sr-only"},[t._v("Selected")])]:[a("span",{attrs:{"aria-hidden":"true"}},[t._v(" ")]),a("span",{staticClass:"sr-only"},[t._v("Not selected")])]]}},{key:"cell(id_reparto)",fn:function(e){return[t._v(" "+t._s(e.value.split("/")[4])+" ")]}},{key:"cell(id_stock)",fn:function(e){return[t._v(" "+t._s(e.value.split("/")[4])+" ")]}},{key:"cell(id_cliente)",fn:function(e){return[t._v(" "+t._s(t.getCliente(e.value.split("/")[4]).nombre)+" ")]}},{key:"cell(gananciatotal)",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}},{key:"cell(costototal)",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}},{key:"cell(ganancia)",fn:function(e){return[a("b",[t._v("$"+t._s(e.value))])]}},{key:"cell(totalpagado)",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}},{key:"cell(diferencia)",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",size:"sm",title:"Mostrar Información adicional",disabled:t.btn_mostrar},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Detalles ")]),a("b-button",{attrs:{variant:"danger",id:"button-3",size:"sm",title:"Eliminar este registro",disabled:t.btn_eliminar},on:{click:function(a){return t.showModalinfo(e.item,e.index)}}},[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1)],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Nombre del venta:")]),t._v(" "+t._s(e.item.fecharealizacion)+" ")]),a("b-list-group-item",[a("b",[t._v("Reparto:")]),t._v(" "+t._s(e.item.id_reparto.split("/")[4])+" ")]),a("b-list-group-item",[a("b",[t._v("Stock:")]),t._v(" "+t._s(e.item.id_stock)+" ")]),a("b-list-group-item",[a("b",[t._v("Cliente:")]),t._v(" "+t._s(t.getCliente(e.item.id_cliente.split("/")[4]).nombre)+" ")]),a("b-list-group-item",[a("b",[t._v("Venta Total:")]),t._v(" $"+t._s(e.item.gananciatotal)+" ")]),e.item.componentes.length>0?a("b-card",{attrs:{title:"Productos: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.componentes,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio: ")]),t._v(" $"+t._s(e.precio)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Costo: ")]),t._v(" $"+t._s(e.costo)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Ref: ")]),t._v(" $"+t._s(e.precioref)+" ")])])],1)],1)})),0)],1):a("b-list-group-item",[t._v(" Sin Productos ")])],1),t._v("   ")],1)],1)]}}])}),a("b-container",{attrs:{fluid:""}},[a("b-col",{staticClass:"my-1"},[a("b-pagination",{attrs:{align:"center",pills:"","total-rows":t.totalRows,"per-page":t.perPage,"aria-controls":"table_ventas"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),a("b-modal",{ref:"my-modaledit",attrs:{"no-close-on-backdrop":"",id:"modal_editar","hide-footer":"",title:"Editar","ok-only":""}},[a("ventas-update",{attrs:{ventas:t.editar,updateTable:t.testFetch}})],1),a("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[a("div",{staticClass:"d-block text-center"},[a("h3",[t._v(" ¿Esta seguro de eliminar los datos del venta '"+t._s(t.infoEliminar.venta.id_venta)+"'? ")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(e){return t.deleteventa(t.infoEliminar.venta.id_venta,t.infoEliminar.venta)}}},[t._v(" Eliminar ")])],1)],1),a("aside",{directives:[{name:"show",rawName:"v-show",value:t.rows>0,expression:"rows > 0"}]},[a("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:t.testFetch}},[a("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[t._v("mdi-calculator")]),t._v(" Calcular ")],1),a("div",{staticStyle:{"text-align":"left"}},[a("p",[t._v(" Total Vendido: $"+t._s(t.totalvendedo)+" ")]),a("p",[t._v(" Total Cobrado: Mp: $"+t._s(t.totalmp)+" + Efectivo: $"+t._s(t.totalefec)+" = $"+t._s(t.totalmp+t.totalefec)+" ")]),a("p",[t._v(" Ganancia Total: $"+t._s(t.gananciatot)+" ")])]),a("div",[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"primary","text-variant":"white",header:"REGISTROS POR PAGINA"}},[a("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"per-page-select"}},[a("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1)],1),a("br"),a("div",[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"text-center",staticStyle:{width:"100%"},attrs:{"bg-variant":"primary","text-variant":"white",header:"FILTRAR POR"}},[a("div",{staticClass:"accordion",staticStyle:{width:"100%"},attrs:{role:"tablist"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{block:"",variant:"info"}},[t._v(" Fecha Realizada ")])],1),a("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Desde","label-for":"fechaDesde"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"fechaDesde",type:"date","aria-label":"Desde",placeholder:"Ingrese una Fecha","invalid-feedback":"Complete este campo",required:""},model:{value:t.dateDesde,callback:function(e){t.dateDesde=e},expression:"dateDesde"}}),t._v(" "+t._s(t.dateDesde)+" ")],1),a("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Hasta","label-for":"fechaHasta"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"fechaHasta",type:"date",placeholder:"Ingrese una Fecha",required:""},model:{value:t.dateHasta,callback:function(e){t.dateHasta=e},expression:"dateHasta"}}),t._v(" "+t._s(t.dateHasta)+" ")],1),a("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.dateDesde&&null!=t.dateHasta,expression:"dateDesde != null && dateHasta != null"}]},[a("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){return t.limpiar_filtro_fecha()}}},[t._v(" Limpiar ")])],1)],1)],1)],1),a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{block:"",variant:"info"}},[t._v(" PRODUCTO ")])],1),a("b-collapse",{attrs:{id:"accordion-2",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-form-group",{attrs:{id:"input-group-4"}},[a("v-autocomplete",{attrs:{id:"filter_producto",items:t.options_producto,solo:"",filled:""},model:{value:t.filter_producto,callback:function(e){t.filter_producto=e},expression:"filter_producto"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.filter_producto,expression:"filter_producto != null"}]},[a("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){t.filter_producto=null}}},[t._v(" Limpiar ")])],1)],1)],1)],1)],1),a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{block:"",variant:"info"}},[t._v(" Tipo ")])],1),a("b-collapse",{attrs:{id:"accordion-3",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-form-group",{attrs:{id:"input-group-4"}},[a("v-autocomplete",{attrs:{id:"tipo",items:t.options_tipo,solo:"",filled:""},model:{value:t.filter_tipo,callback:function(e){t.filter_tipo=e},expression:"filter_tipo"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.filter_tipo,expression:"filter_tipo != null"}]},[a("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){t.filter_tipo=null}}},[t._v(" Limpiar ")])],1)],1)],1)],1)],1),a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{block:"",variant:"info"}},[t._v(" Total de la venta ")])],1),a("b-collapse",{attrs:{id:"accordion-4",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Desde","label-for":"totalDesde"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"totalDesde",type:"number","aria-label":"Desde",placeholder:"Ingrese un numero","invalid-feedback":"Complete este campo",required:""},model:{value:t.totalDesde,callback:function(e){t.totalDesde=e},expression:"totalDesde"}}),t._v(" "+t._s(t.totalDesde)+" ")],1),a("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Hasta","label-for":"totalHasta"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"totalHasta",type:"number",placeholder:"Ingrese un Total",required:""},model:{value:t.totalHasta,callback:function(e){t.totalHasta=e},expression:"totalHasta"}}),t._v(" "+t._s(t.totalHasta)+" ")],1),a("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.totalDesde&&null!=t.totalHasta,expression:"totalDesde != null && totalHasta != null"}]},[a("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){return t.limpiar_filtro_total()}}},[t._v(" Limpiar ")])],1)],1)],1)],1)],1)])],1)],1)],1),a("b-modal",{ref:"modal-pdfVenta",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-pdfVenta","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Vista Previa")])]},proxy:!0}])},[a("ventas-listadopdf",{attrs:{PDFventa:t.ventaAPdf}})],1)],1)])},i=[],r=a("1da1"),l=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("d81d"),a("4de4"),a("159b"),a("ac1f"),a("1276"),a("7db0"),a("fb6a"),a("5319"),a("efae")),n=a("b2a6"),s=a("0dcd"),c=a("6775"),d=a("bc3a"),u=a.n(d),p=a("6480"),b=a("c03a"),m=a("1940"),f=a.n(m),v=a("2b0e"),h=a("0628"),g=a.n(h),_=new URL("http://93.188.162.174:8081");_.pathname="ventas/",v["default"].use(c["a"]);var k=a("25ca");v["default"].use(g.a);var w={components:{ventasAlta:l["a"],ventasUpdate:n["a"],VentasListadopdf:s["a"],VueHtml2pdf:p["a"]},data:function(){return{tabla_ventas:[],productos:[],fields:[{key:"selected",label:"Seleccionar"},{key:"id_venta",label:"ID",sortable:!0},{key:"tipo_venta",label:"Tipo",sortable:!0},{key:"fecharealizacion",label:"Fecha",sortable:!0},{key:"costototal",label:"Costo",sortable:!0},{key:"gananciatotal",label:"Total",sortable:!0},{key:"ganancia",label:"Ganancia",sortable:!0},{key:"id_reparto",label:"Reparto",sortable:!0},{key:"id_stock",label:"Stock",sortable:!0},{key:"id_cliente",label:"Cliente",sortable:!0},{key:"totalpagado",label:"Total Pagado",sortable:!0},{key:"totalpagadomp",label:"Total MP",sortable:!0},{key:"diferencia",label:"Diferencia",sortable:!0},{key:"action",label:"Acciones",variant:"secondary"}],columns:[{field:"id_venta",label:"ID"},{field:"tipo_venta",label:"Tipo"},{field:"fecharealizacion",label:"Fecha"},{field:"costototal",label:"Costo"},{field:"gananciatotal",label:"Total"},{field:"ganancia",label:"Ganancia"},{field:"id_reparto",label:"Reparto"},{field:"id_stock",label:"Stock"},{field:"id_cliente",label:"Cliente"},{field:"totalpagado",label:"Total Pagado"},{field:"totalpagadomp",label:"Total Pagado con MP"},{field:"diferencia",label:"Diferencia"}],modal:!1,productoelegido:{},clienteelegido:{},stockusado:{},stockusado2:{},dateDesde:null,gananciatot:0,totalmp:0,totalefec:0,dateHasta:null,ventaAPdf:{},editar:{},listastocks:[],listacli:[],filter:null,options_producto:[],options_tipo:[{value:"Pollo",text:"Pollo"},{value:"Congelados",text:"Congelados"}],filter_producto:null,filter_tipo:null,totalvendedo:0,totalRows:1,currentPage:1,perPage:10,pageOptions:[10,20,40,100,{value:1e4,text:"Todos"}],selected:[],infoEliminar:{id:"modal_eliminar",venta:-1},btn_del_full:!0,btn_mostrar:!1,totalDesde:null,totalHasta:null,btn_editar:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_ventas.length},sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{testFetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new b["a"],a.apiUrl.pathname="productos/",e.next=5,a.getData();case 5:return t.productos=e.sent,e.next=8,fetch(_);case 8:return o=e.sent,e.next=11,o.json();case 11:i=e.sent,t.tabla_ventas=i.results,t.checkeodemodal(),t.tabla_ventas.forEach((function(e){e.componentes.forEach((function(e){var a={};a.value=e.producto,a.text=t.getProducto(e.producto.split("/")[4]).nombre,t.options_producto.find((function(t){return t.value==a.value}))?console.log(a," ya se encuentra en el listado"):t.options_producto.push(a)}))})),t.totalvendido(),t.totalcobradomp(),t.totalcobradoefec(),t.gananciatotal(),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()},actualizarcosas:function(){this.totalvendido(),this.totalcobradomp(),this.totalcobradoefec(),this.gananciatotal(),this.actualizarcosas2()},totalvendido:function(){var t=this;return this.totalvendedo=0,this.$refs.tablaregistros.filteredItems.forEach((function(e){t.totalvendedo+=e.gananciatotal})),this.totalvendedo},totalcobradomp:function(){var t=this;return this.totalmp=0,this.$refs.tablaregistros.filteredItems.forEach((function(e){t.totalmp+=e.totalpagadomp})),this.totalmp},totalcobradoefec:function(){var t=this;return this.totalefec=0,this.$refs.tablaregistros.filteredItems.forEach((function(e){t.totalefec+=e.totalpagado})),this.totalefec},gananciatotal:function(){var t=this;return this.gananciatot=0,this.$refs.tablaregistros.filteredItems.forEach((function(e){t.gananciatot+=e.ganancia})),this.gananciatot},importarExcel:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o,i,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.images.arrayBuffer();case 2:a=e.sent,o=k.read(a),i=o.SheetNames,console.log("workbook1"),console.log(o),console.log("SheetNames"),console.log(o.SheetNames),r=new b["a"],l=k.utils.sheet_to_json(o.Sheets[i[0]]),console.log("datos"),console.log(l),r.apiUrl.pathname="ventas/",l.forEach((function(t){return r.postData(t)})),t.testFetch();case 16:case"end":return e.stop()}}),e)})))()},uploadFile:function(){this.images=this.$refs.archivo.files[0],console.log(this.images)},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},info:function(t){alert("id: "+t)},checkeodemodal:function(){"true"==this.$route.query.abrir&&this.$refs["modalalta"].show()},showModalinfo:function(t,e){this.infoEliminar.venta=t,this.showModal()},generarPDF:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:0!=t.tabla_ventas.length?(t.ventaAPdf=t.tabla_ventas,t.$refs["modal-pdfVenta"].show()):f()("Debe tener al menos 1 registro");case 1:case"end":return e.stop()}}),e)})))()},seleccionar_una:function(t){this.selected=t,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_limpiar=!0)},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0},altaventa:function(){},editarventa:function(t,e){this.editar=t},actualizarStockProducto:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(a.getProducto(t)),i=a.getProducto(t),a.productoelegido.id_producto=i.id_producto,a.productoelegido.nombre=i.nombre,a.productoelegido.tipo_producto=i.tipo_producto,a.productoelegido.letra=i.letra,a.productoelegido.numero_producto=i.numero_producto,a.productoelegido.codigo_unico=i.codigo_unico,a.productoelegido.stocktotal=parseFloat(i.stocktotal)+parseFloat(e),a.productoelegido.precioref=i.precioref,console.log(a.productoelegido),o.next=13,u.a.put("http://93.188.162.174:8081/productos/"+a.productoelegido.id_producto+"/",a.productoelegido);case 13:case"end":return o.stop()}}),o)})))()},getCliente:function(t){var e=this.listacli.find((function(e){return e.numero_cliente==t}));return e},getClientes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listacli=[],a=new b["a"],a.apiUrl.pathname="clientes/",e.next=5,a.getData();case 5:t.listacli=e.sent;case 6:case"end":return e.stop()}}),e)})))()},getProductos:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="productos/",e.next=4,a.getData();case 4:t.productos=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getProducto:function(t){var e=this;return t=parseInt(t),this.productos==[]?getProductos().then((function(){return e.getProducto(t)})):this.productos.find((function(e){return e.id_producto==t}))},getProducto2:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=parseInt(t),o=new b["a"],o.apiUrl.pathname="productos/",a.next=5,o.getData();case 5:return e.productos=a.sent,i=e.productos.find((function(e){return e.id_producto==t})),a.abrupt("return",i);case 8:case"end":return a.stop()}}),a)})))()},actualizarStockProducto1:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.getStock(t.id_stock.split("/")[4]),e.stockusado2.nombre=o.nombre,e.stockusado2.id_reparto=o.id_reparto,e.stockusado2.fechastock=o.fechastock,t.componentes.forEach((function(a){var i=a.producto.split("/")[4];null==e.checkprodstock(i,t.id_stock.split("/")[4])?(e.productonuevo.producto=a.producto,e.productonuevo.cantidad=0-parseFloat(a.cantidad),o.componentes.push(e.productonuevo)):o.componentes.forEach((function(t){t.producto.split("/")[4]==i&&(t.cantidad=parseFloat(t.cantidad)+parseFloat(a.cantidad))})),console.log("Id del producto en venta:",i)})),e.stockusado2.componentes=o.componentes,console.log(JSON.parse(JSON.stringify(e.stockusado2))),a.next=9,u.a.put("http://93.188.162.174:8081/stocks/"+o.id_stock+"/",e.stockusado2);case 9:case"end":return a.stop()}}),a)})))()},checkprodstock:function(t,e){var a=null,o=this.getStock(e);if(o!={})for(var i=0;i<o.componentes.length;i++)o.componentes[i].producto.split("/")[4]==t&&(a=o.componentes[i].cantidad);return a},fechaactual:function(){var t=new Date;console.log(t.toLocaleDateString());var e=function(t){return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)};return console.log(e(t)),e(t)},redirect:function(){this.$session.exists()||window.location.replace("/login"),"reparto"==this.$session.get("tipocuenta")&&window.location.replace("/ventasReparto/?id_repa="+this.$session.get("repartused").id_reparto)},getStocks:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="stocks/",e.next=4,a.getData();case 4:t.listastocks=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getStock:function(t){var e=this.listastocks.find((function(e){return e.id_stock==t}));return e},actualizarSaldoClientePollo:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=a.getCliente(t),a.clienteelegido.numero_cliente=i.numero_cliente,a.clienteelegido.nombre=i.nombre,a.clienteelegido.cuitocuil=i.cuitocuil,a.clienteelegido.calle=i.calle,a.clienteelegido.localidad=i.localidad,a.clienteelegido.provincia=i.provincia,a.clienteelegido.cod_postal=i.cod_postal,a.clienteelegido.email=i.email,a.clienteelegido.tel_fijo=i.tel_fijo,a.clienteelegido.tel_celular=i.tel_celular,a.clienteelegido.categoria=i.categoria,a.clienteelegido.saldocongelados=i.saldocongelados,console.log(i.saldopollo),console.log(e),a.clienteelegido.saldopollo=parseFloat(i.saldopollo)-parseFloat(e),o.next=18,u.a.put("http://93.188.162.174:8081/clientes/"+i.numero_cliente+"/",a.clienteelegido);case 18:case"end":return o.stop()}}),o)})))()},actualizarSaldoClienteCongelado:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=a.getCliente(t),a.clienteelegido.numero_cliente=i.numero_cliente,a.clienteelegido.nombre=i.nombre,a.clienteelegido.cuitocuil=i.cuitocuil,a.clienteelegido.calle=i.calle,a.clienteelegido.localidad=i.localidad,a.clienteelegido.provincia=i.provincia,a.clienteelegido.cod_postal=i.cod_postal,a.clienteelegido.email=i.email,a.clienteelegido.tel_fijo=i.tel_fijo,a.clienteelegido.tel_celular=i.tel_celular,a.clienteelegido.categoria=i.categoria,a.clienteelegido.saldopollo=i.saldopollo,a.clienteelegido.saldocongelados=parseFloat(i.saldocongelados)-parseFloat(e),console.log(a.clienteelegido),o.next=17,u.a.put("http://93.188.162.174:8081/clientes/"+i.numero_cliente+"/",a.clienteelegido);case 17:case"end":return o.stop()}}),o)})))()},deleteventa:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:a.getClientes(),u.a.delete("http://93.188.162.174:8081/ventas/"+t+"/").then((function(t){console.log(e.fecharealizacion),e.fecharealizacion===a.fechaactual()?a.actualizarStockProducto1(e):e.componentes.forEach((function(t){console.log("Longitud"),a.actualizarStockProducto(t.producto.split("/")[4],t.cantidad)}));var o=0;o=parseFloat(e.gananciatotal)-(parseFloat(e.totalpagado)+parseFloat(e.totalpagadomp)),"Pollo"===e.tipo_venta?a.actualizarSaldoClientePollo(e.id_cliente.split("/")[4],o):a.actualizarSaldoClienteCongelado(e.id_cliente.split("/")[4],o),f()("Eliminacion Exitosa"," ","success"),console.log(t),a.hideModal()})).catch((function(t){f()("¡ERROR!","Se ha detectado un problema ","error"),console.log(t),a.hideModal()})).finally((function(){return a.testFetch()}));case 2:case"end":return o.stop()}}),o)})))()},delete_all_ventas:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.selected.length,e.prev=1,o=0;case 3:if(!(o<a)){e.next=11;break}if(u.a.delete("http://93.188.162.174:8081/ventas/"+t.selected[o].id_venta+"/"),0!=t.selected.length){e.next=8;break}return console.log("Eliminacion Exitosa"),e.abrupt("break",11);case 8:o++,e.next=3;break;case 11:t.hideModal(),f()("Eliminacion Exitosa"," ","success"),e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](1),t.hideModal(),f()("¡ERROR!","Se ha detectado un problema ","error"),console.log(e.t0);case 20:return e.prev=20,t.testFetch(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,15,20,23]])})))()},limpiar_filtro_fecha:function(){this.dateDesde=null,this.dateHasta=null},limpiar_filtro_total:function(){this.totalDesde=null,this.totalHasta=null},onFiltered:function(t){this.totalRows=t.length,this.totalvendido(t),this.totalcobradomp(t),this.totalcobradoefec(t),this.gananciatotal(t),this.currentPage=1}},beforeMount:function(){this.getProductos(),this.getClientes(),this.getStocks(),this.testFetch(),this.redirect()}},y=w,x=(a("d3b8"),a("2877")),C=Object(x["a"])(y,o,i,!1,null,"6e058edd",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-1ca6bb14.002f7617.js.map