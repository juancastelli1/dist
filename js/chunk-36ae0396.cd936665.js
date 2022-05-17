(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ae0396"],{3697:function(t,e,o){"use strict";o("7a74")},"7a74":function(t,e,o){},8210:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app"}},[o("div",{staticClass:"myTable",attrs:{id:"devoluciones"}},[o("vue-headful",{attrs:{title:"devoluciones - Aranda Distribuciones"}}),o("h2",[t._v("Listado de devoluciones")]),o("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:t.testFetch}},[o("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[t._v("mdi-cached")]),t._v(" Actualizar ")],1),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Nuevo Pago de devolucion"},on:{click:function(e){return t.altadevolucion()}}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")]),t._v(" Nuevo devolucion ")],1),o("b-modal",{ref:"modalalta",attrs:{"no-close-on-backdrop":"",id:"modal-alta","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[o("h5",{staticClass:"modal-title"},[t._v("Alta")])]},proxy:!0}])},[o("devoluciones-alta",{attrs:{updateTable:t.testFetch}})],1),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-eliminarTodo",modifiers:{"modal-eliminarTodo":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"danger",id:"btn_del_full",title:"Eliminar todos los registros",disabled:t.btn_del_full}},[o("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1),o("div",[o("b-modal",{ref:"my-modal",attrs:{id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[t.selected.length===t.rows?o("div",{staticClass:"d-bk text-center"},[o("h3",[t._v("¿Está seguro de eliminar todos los registros?")])]):o("div",{staticClass:"d-bk text-center"},[t.selected.length>1?o("h3",[t._v("¿Está seguro de eliminar "+t._s(t.selected.length)+" registros?")]):o("h3",[t._v("¿Está seguro de eliminar un registro?")])]),o("b-button",{staticClass:"mt-2",attrs:{bk:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),o("b-button",{staticClass:"mt-3",attrs:{variant:"danger",bk:"",title:"Eliminar"},on:{click:function(e){return t.delete_all_devoluciones()}}},[t._v(" Eliminar ")])],1)],1),o("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[o("b-input-group",{attrs:{size:"sm"}},[o("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),o("b-input-group-append",[o("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Limpiar")])],1)],1)],1),t.rows>0?o("div",[t.selected.length>0?o("div",[o("pre",[t._v("                        Cantidad de registros: "+t._s(t.rows)+" | Filas seleccionadas: "+t._s(t.selected.length))])]):o("div",[o("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])]),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Seleccionar Todo",disabled:t.btn_select},on:{click:t.seleccionar_todas}},[t._v(" Seleccionar Todo ")]),o("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{size:"sm",title:"Limpiar Seleccion",disabled:t.btn_limpiar},on:{click:t.limpiar_seleccion}},[t._v(" Limpiar Seleccion ")])],1):o("div",[o("pre",[t._v("Cantidad de registros: "+t._s(t.rows))])]),o("section",{staticClass:"container"},[o("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",sortable:"",responsive:"",hover:"",items:t._f("Cliente")(t._f("Producto")(t._f("FechaRange")(t.tabla_devoluciones,t.dateDesde,t.dateHasta),t.filter_producto),t.filter_cliente),"show-empty":"","sticky-header":!1,"no-border-collapse":!1,"per-page":t.perPage,"current-page":t.currentPage,id:"tablaregistros",selectable:"","select-mode":"multi","empty-text":"No hay registros cargados","empty-filtered-text":"No hemos encontrado registros que coincidan con lo que está buscando",filter:t.filter},on:{"row-selected":t.seleccionar_una,filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(selected)",fn:function(e){var a=e.rowSelected;return[a?[o("span",{attrs:{"aria-hidden":"true"}},[t._v("✓")]),o("span",{staticClass:"sr-only"},[t._v("Selected")])]:[o("span",{attrs:{"aria-hidden":"true"}},[t._v(" ")]),o("span",{staticClass:"sr-only"},[t._v("Not selected")])]]}},{key:"cell(id_cliente)",fn:function(e){return[t._v(" "+t._s(e.value.split("/")[4])+" ")]}},{key:"cell(id_stock)",fn:function(e){return[t._v(" "+t._s(e.value.split("/")[4])+" ")]}},{key:"cell(action)",fn:function(e){return[o("div",{staticClass:"mt-3"},[o("b-button-group",[o("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Información adicional",disabled:t.btn_mostrar},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Detalles ")]),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal_editar",modifiers:{modal_editar:!0}}],attrs:{variant:"warning",id:"button-2",title:"Editar este registro",disabled:t.btn_editar},on:{click:function(o){return t.editardevolucion(e.item,e.index)}}},[o("v-icon",{staticClass:"mr-2"},[t._v(" mdi-pencil ")]),t._v(" Editar ")],1),o("b-button",{attrs:{variant:"danger",id:"button-3",title:"Eliminar este registro",disabled:t.btn_eliminar},on:{click:function(o){return t.showModalinfo(e.item,e.index)}}},[o("v-icon",{staticClass:"mr-2"},[t._v(" mdi-delete ")]),t._v(" Eliminar ")],1)],1)],1)]}},{key:"row-details",fn:function(e){return[o("b-card",[o("b-list-group",{attrs:{horizontal:""}},[o("b-list-group",[o("b-list-group-item",[o("b",[t._v("Fecha en la que se Realizo:")]),t._v(" "+t._s(e.item.fecharealizacion)+" ")]),o("b-list-group-item",[o("b",[t._v("Total:")]),t._v(" "+t._s(e.item.total)+" ")]),e.item.componentes.length>0?o("b-card",{attrs:{title:"Productos: "}},[o("b-list-group",{attrs:{horizontal:""}},t._l(e.item.componentes,(function(e){return o("div",{key:e.id},[o("b-list-group",[o("b-list-group-item",[o("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),o("b-list-group-item",[o("p",[o("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),o("b-list-group-item",[o("p",[o("b",[t._v("Precio: ")]),t._v(" "+t._s(e.precio)+" ")])])],1)],1)})),0)],1):o("b-list-group-item",[t._v(" Sin Productos ")])],1),t._v("   ")],1)],1)]}}])}),o("b-container",{attrs:{fluid:""}},[o("b-col",{staticClass:"my-1"},[o("b-pagination",{attrs:{align:"center",pills:"","total-rows":t.totalRows,"per-page":t.perPage,"aria-controls":"table_devoluciones"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),o("b-modal",{ref:"my-modaledit",attrs:{"no-close-on-backdrop":"",id:"modal_editar","hide-footer":"",title:"Editar","ok-only":""}},[o("devoluciones-update",{attrs:{devoluciones:t.editar,updateTable:t.testFetch}})],1),o("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[o("div",{staticClass:"d-bk text-center"},[o("h3",[t._v(" ¿Esta seguro de eliminar los datos del devolucion '"+t._s(t.infoEliminar.devolucion.fecharealizacion)+"'? ")])]),o("b-button",{staticClass:"mt-2",attrs:{bk:"",title:"Volver Atras"},on:{click:t.hideModal}},[t._v(" Volver Atras ")]),o("b-button",{staticClass:"mt-3",attrs:{variant:"danger",bk:"",title:"Eliminar"},on:{click:function(e){return t.deletedevolucion(t.infoEliminar.devolucion.id_devolucion)}}},[t._v(" Eliminar ")])],1)],1),o("aside",{directives:[{name:"show",rawName:"v-show",value:t.rows>0,expression:"rows > 0"}]},[o("div",[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"text-center",attrs:{"bg-variant":"primary","text-variant":"white",header:"REGISTROS POR PAGINA"}},[o("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"per-page-select"}},[o("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1)],1),o("br"),o("div",[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"text-center",staticStyle:{width:"100%"},attrs:{"bg-variant":"primary","text-variant":"white",header:"FILTRAR POR"}},[o("div",{staticClass:"accordion",staticStyle:{width:"100%"},attrs:{role:"tablist"}},[o("b-card",{attrs:{"no-body":""}},[o("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{bk:"",variant:"info"}},[t._v(" FECHA DE PAGO ")])],1),o("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[o("b-card-body",[o("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Desde","label-for":"fechaDesde"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[o("b-form-input",{attrs:{id:"fechaDesde",type:"date","aria-label":"Desde",placeholder:"Ingrese una Fecha","invalid-feedback":"Complete este campo",required:""},model:{value:t.dateDesde,callback:function(e){t.dateDesde=e},expression:"dateDesde"}}),t._v(" "+t._s(t.dateDesde)+" ")],1),o("b-form-group",{staticStyle:{color:"black"},attrs:{label:"Hasta","label-for":"fechaHasta"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[o("b-form-input",{attrs:{id:"fechaHasta",type:"date",placeholder:"Ingrese una Fecha",required:""},model:{value:t.dateHasta,callback:function(e){t.dateHasta=e},expression:"dateHasta"}}),t._v(" "+t._s(t.dateHasta)+" ")],1),o("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.dateDesde&&null!=t.dateHasta,expression:"dateDesde != null && dateHasta != null"}]},[o("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){return t.limpiar_filtro_fecha()}}},[t._v(" Limpiar ")])],1)],1)],1)],1),o("b-card",{attrs:{"no-body":""}},[o("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{bk:"",variant:"info"}},[t._v(" PRODUCTO ")])],1),o("b-collapse",{attrs:{id:"accordion-2",visible:"",accordion:"my-accordion",role:"tabpanel"}},[o("b-card-body",[o("b-form-group",{attrs:{id:"input-group-4"}},[o("v-autocomplete",{attrs:{id:"letra",items:t.options_producto,type:"text",solo:"",filled:""},model:{value:t.filter_producto,callback:function(e){t.filter_producto=e},expression:"filter_producto"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.filter_producto,expression:"filter_producto != null"}]},[o("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){t.filter_producto=null}}},[t._v(" Limpiar ")])],1)],1)],1)],1)],1),o("b-card",{attrs:{"no-body":""}},[o("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticStyle:{"font-size":"0.82em"},attrs:{bk:"",variant:"info"}},[t._v(" CLIENTE ")])],1),o("b-collapse",{attrs:{id:"accordion-3",visible:"",accordion:"my-accordion",role:"tabpanel"}},[o("b-card-body",[o("b-form-group",{attrs:{id:"input-group-4"}},[o("v-autocomplete",{attrs:{id:"letra",items:t.options_cliente,type:"text",solo:"",filled:""},model:{value:t.filter_cliente,callback:function(e){t.filter_cliente=e},expression:"filter_cliente"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.filter_cliente,expression:"filter_cliente != null"}]},[o("b-button",{attrs:{title:"Limpiar"},on:{click:function(e){t.filter_cliente=null}}},[t._v(" Limpiar ")])],1)],1)],1)],1)],1)],1)])],1)],1)])],1)])},i=[],r=o("1da1"),n=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("d81d"),o("4de4"),o("159b"),o("ac1f"),o("1276"),o("7db0"),o("5319"),o("2b06")),s=o("9f92"),l=o("bc3a"),c=o.n(l),d=o("c03a"),u=o("1940"),p=o.n(u),b=new URL("http://alhost:8081");b.pathname="devoluciones/";var m={components:{devolucionesAlta:n["a"],devolucionesUpdate:s["a"]},data:function(){return{tabla_devoluciones:[],productos:[],stockusado:[],options_cliente:[],filter_cliente:null,stocks:[],fields:[{key:"selected",label:""},{key:"id_devolucion",label:"ID",sortable:!0},{key:"tipo_dev",label:"Tipo",sortable:!0},{key:"fecharealizacion",label:"Fecha de Realizacion",sortable:!0},{key:"gastototal",label:"Gasto Total",sortable:!0},{key:"id_cliente",label:"Cliente",sortable:!0},{key:"id_stock",label:"Stock",sortable:!0},{key:"action",label:"Acciones",variant:"secondary"}],modal:!1,clientes:[],dateDesde:null,productonuevo:{},dateHasta:null,options_producto:[{value:null,text:"Elija un Producto",selected:!0}],productoelegido:{},editar:{},filter:null,filter_producto:null,totalRows:1,currentPage:1,perPage:10,pageOptions:[10,20,40,100,{value:1e4,text:"Todos"}],selected:[],infoEliminar:{id:"modal_eliminar",devolucion:-1},btn_del_full:!0,btn_mostrar:!1,btn_editar:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_devoluciones.length},sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{testFetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(b);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,t.tabla_devoluciones=a.results,t.tabla_devoluciones.forEach((function(e){var o={};o.value=e.id_cliente.split("/")[4],o.text=t.getCliente(e.id_cliente.split("/")[4]).nombre,t.options_cliente.find((function(t){return t.value==o.value}))?console.log(o," ya se encuentra en el listado"):t.options_cliente.push(o),e.componentes.forEach((function(e){var o={};o.value=e.producto,o.text=t.getProducto(e.producto.split("/")[4]).nombre,t.options_producto.find((function(t){return t.value==o.value}))?console.log(o," ya se encuentra en el listado"):t.options_producto.push(o)}))})),t.checkeodemodal(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},checkeodemodal:function(){"true"==this.$route.query.abrir&&this.$refs["modalalta"].show()},redirect:function(){this.$session.exists()||window.ation.replace("/login"),"administrador"!=this.$session.get("tipocuenta")&&window.ation.replace("/")},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},info:function(t){alert("id: "+t)},showModalinfo:function(t,e){this.infoEliminar.devolucion=t,this.showModal()},seleccionar_una:function(t){this.selected=t,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_limpiar=!0)},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0},altadevolucion:function(){},editardevolucion:function(t,e){this.editar=t},actualizarStockProducto1:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=e.getStock(t.id_stock.split("/")[4]),e.stockusado.nombre=a.nombre,e.stockusado.id_reparto=a.id_reparto,e.stockusado.fechastock=a.fechastock,e.stockusado.cerrado=a.cerrado,e.stockusado.componentes=a.componentes,t.componentes.forEach((function(t){var o=t.producto.split("/")[4];e.checkprodstock(o)?e.stockusado.componentes.forEach((function(e){e.producto.split("/")[4]==o&&(e.cantidad=parseInt(e.cantidad)-parseInt(t.cantidad))})):(e.productonuevo.producto=t.producto,e.productonuevo.cantidad=t.cantidad,e.stockusado.componentes.push(e.productonuevo)),console.log("Id del producto en venta:",o)})),console.log(e.stockusado),o.next=10,c.a.put("http://alhost:8081/stocks/"+a.id_stock+"/",e.stockusado);case 10:case"end":return o.stop()}}),o)})))()},actualizarStockProducto:function(t,e){var o=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(o.getProducto(t)),i=o.getProducto(t),o.productoelegido.id_producto=i.id_producto,o.productoelegido.nombre=i.nombre,o.productoelegido.tipo_producto=i.tipo_producto,o.productoelegido.letra=i.letra,o.productoelegido.numero_producto=i.numero_producto,o.productoelegido.codigo_unico=i.codigo_unico,o.productoelegido.stocktotal=parseInt(i.stocktotal)-parseInt(e),o.productoelegido.precioref=i.precioref,console.log(o.productoelegido),a.next=13,c.a.put("http://alhost:8081/productos/"+o.productoelegido.id_producto+"/",o.productoelegido);case 13:case"end":return a.stop()}}),a)})))()},getProductos:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new d["a"],o.apiUrl.pathname="productos/",e.next=4,o.getData();case 4:t.productos=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getClientes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new d["a"],o.apiUrl.pathname="clientes/",e.next=4,o.getData();case 4:t.clientes=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getStocks:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new d["a"],o.apiUrl.pathname="stocks/",e.next=4,o.getData();case 4:t.stocks=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getProducto:function(t){var e=this;return this.productos==[]?getProductos().then((function(){return e.getProducto(t)})):this.productos.find((function(e){return e.id_producto==t}))},getCliente:function(t){var e=this;return this.clientes==[]?getClientes().then((function(){return e.getCliente(t)})):this.clientes.find((function(e){return e.numero_cliente==t}))},getStock:function(t){var e=this;return this.productos==[]?getStocks().then((function(){return e.getStock(t)})):this.stocks.find((function(e){return e.id_stock==t}))},deletedevolucion:function(t,e){var o=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:c.a.delete("http://alhost:8081/devoluciones/"+t+"/").then((function(t){0==o.getStock(e.id_Stock.split("/")[4]).cerrado?o.actualizarStockProducto1(e):e.componentes.forEach((function(t){console.log("Longitud"),o.actualizarStockProducto(t.producto.split("/")[4],t.cantidad)})),p()("Eliminacion Exitosa"," ","success"),console.log(t),o.hideModal()})).catch((function(t){p()("¡ERROR!","Se ha detectado un problema ","error"),console.log(t),o.hideModal()})).finally((function(){return o.testFetch()}));case 1:case"end":return a.stop()}}),a)})))()},delete_all_devoluciones:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.selected.length,e.prev=1,a=0;case 3:if(!(a<o)){e.next=11;break}if(c.a.delete("http://alhost:8081/devoluciones/"+t.selected[a].id_devolucion+"/"),0!=t.selected.length){e.next=8;break}return console.log("Eliminacion Exitosa"),e.abrupt("break",11);case 8:a++,e.next=3;break;case 11:t.hideModal(),p()("Eliminacion Exitosa"," ","success"),e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](1),t.hideModal(),p()("¡ERROR!","Se ha detectado un problema ","error"),console.log(e.t0);case 20:return e.prev=20,t.testFetch(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,15,20,23]])})))()},limpiar_filtro_fecha:function(){this.dateDesde=null,this.dateHasta=null},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},beforeMount:function(){this.getProductos(),this.getClientes(),this.testFetch(),this.redirect(),this.getStocks()}},h=m,f=(o("3697"),o("2877")),v=Object(f["a"])(h,a,i,!1,null,"789261f2",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-36ae0396.cd936665.js.map