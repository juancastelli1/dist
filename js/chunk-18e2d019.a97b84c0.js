(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18e2d019"],{"12a7":function(t,e,a){},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");var r=a("ade3");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"618c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[a("section",{staticClass:"pdf-item"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",[a("b-card-text",[a("h6",[t._v("Aranda Distribucion")]),a("h1",[t._v("Reparto")]),a("div",[a("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",responsive:"sm",hover:"",items:t.PDFventa,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros"}})],1)])],1)],1)],1)]),a("br"),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Descargar",variant:"info"},on:{click:function(e){return t.generarPDF()}}},[t._v("DESCARGAR")]),a("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!0,"paginate-elements-by-height":1400,filename:"ListadoVentas","pdf-quality":2,"manual-pagination":!1,"pdf-format":"legal","pdf-orientation":"portrait","pdf-content-width":"100%"},on:{progress:function(e){return t.onProgress(e)},startPagination:function(e){return t.startPagination()},hasPaginated:function(e){return t.hasPaginated()},beforeDownload:function(e){return t.beforeDownload(e)},hasDownloaded:function(e){return t.hasDownloaded(e)}}},[a("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[a("section",{staticClass:"pdf-item"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",[a("b-card-text",[a("h6",[t._v("Federación Tucumana de Mutuales")])])],1)],1),a("div",{staticClass:"table"},[a("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",responsive:"sm",small:"",hover:"",items:t.PDFventa,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros"}})],1)],1)])])],1)},n=[],o=a("6480"),i=a("6775"),s=a("2b0e");s["default"].use(i["a"]);var c={props:{PDFventa:{}},components:{VueHtml2pdf:o["a"]},data:function(){return{fields:[{key:"numero_cliente",label:"Nro",sortable:!0},{key:"nombre",label:"Nombre",sortable:!0},{key:"cuitocuil",label:"CUIT",sortable:!0},{key:"saldo",label:"Saldo Pollo",sortable:!0},{key:"id_stock",label:"Saldo Congelados",sortable:!0}]}},methods:{generarPDF:function(){console.log("Creando Archivo"),this.$refs.html2Pdf.generatePdf()},onShown:function(){this.$refs.cancel.focus()},onHidden:function(){this.$refs.show.focus()}},beforeMount:function(){},computed:{}},l=c,d=a("2877"),u=Object(d["a"])(l,r,n,!1,null,null,null);e["a"]=u.exports},6921:function(t,e,a){"use strict";a("12a7")},"991d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myTable",staticStyle:{"text-align":"center","vertical-align":"middle"},attrs:{id:"clientes"}},[a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Inicial","label-for":"fechainiusada"}},[a("b-form-input",{attrs:{id:"fechainiusada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(e){return t.fechausadacambio()}},model:{value:t.fechainiusada,callback:function(e){t.fechainiusada=e},expression:"fechainiusada"}})],1),a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Final","label-for":"fechafinusada"}},[a("b-form-input",{attrs:{id:"fechafinusada",gma:"",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(e){return t.fechausadacambio()}},model:{value:t.fechafinusada,callback:function(e){t.fechafinusada=e},expression:"fechafinusada"}})],1),a("b-modal",{ref:"modal-pdf",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-pdf","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Vista Previa")])]},proxy:!0}])},[a("reporte-listadopdf",{attrs:{PDFventa:t.ordenAPDF}})],1),a("div",[a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar PDF",variant:"danger"},on:{click:function(e){return t.generarPDF()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar PDF ")]),a("vue-excel-xlsx",{attrs:{data:t.creartablaexcel(),columns:t.columns,"file-name":"Tabla exportada","file-type":"xlsx","sheet-name":"sheetname"}},[a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar Excel",variant:"success"}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar Excel ")])],1)],1),a("script",{tag:"component",attrs:{src:"https://code.jquery.com/jquery-1.12.3.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdn.jsdelivr.net/npm/chart.js@2.9.4",async:""}}),a("div",{attrs:{id:"divpdf"}},[t._m(0),a("vue-headful",{attrs:{title:"Ventas por cada Reparto"}}),a("div",{attrs:{id:"tablaproductos"}},[a("h3",[t._v("Periodo: "+t._s(t.fechainiusada)+" - "+t._s(t.fechafinusada))]),a("h2",[t._v("Listado de Productos")]),a("b-button",{staticStyle:{"margin-right":"1em"},attrs:{variant:"primary"},on:{click:function(e){return t.Detalles2(!1)}}},[t._v(" Ocultar Detalles ")]),a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.Detalles2(!0)}}},[t._v(" Mostrar Detalles ")]),a("br"),a("br"),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v(" Total Vendido: $"+t._s(t.totalvendedo)+" ")]),a("p",[t._v(" Ganancia Total: $"+t._s(t.gananciatot)+" ")])]),a("div",{staticStyle:{"max-width":"100%",display:"inline-block",margin:"2em"}},[a("b-table",{ref:"tablaregistros",attrs:{fields:t.fields,striped:"",responsive:"","data-show-export":"true",hover:"",items:t.productoslista,"show-empty":"","tbody-tr-class":t.rowClass,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(nroventas)",fn:function(e){return[t._v(" "+t._s(e.item.tabla_ventas.length)+" ")]}},{key:"cell(recaudado)",fn:function(e){return[t._v(" "+t._s(t.suma(e.item.tabla_ventas))+" ")]}},{key:"cell(costototal)",fn:function(e){return[t._v(" "+t._s(t.costos(e.item.tabla_ventas))+" ")]}},{key:"cell(ganancia)",fn:function(e){return[t._v(" "+t._s(t.ganancia(e.item.tabla_ventas))+" ")]}},{key:"cell(totalvendido)",fn:function(e){return[t._v(" "+t._s(t.cantidadvendida(e.item))+" ")]}},{key:"cell(precioprom)",fn:function(e){return[t._v(" "+t._s(Math.round(100*t.proventas(e.item))/100)+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Informaci�n adicional"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Ventas ")])],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-card",{attrs:{title:" Ventas: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.tabla_ventas,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Venta:")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Total: ")]),t._v(" "+t._s(e.gananciatotal)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Stock: ")]),t._v(" "+t._s(e.id_stock.split("/")[4])+" ")])])],1),a("br"),a("h5",[t._v("Productos comprados")]),t._l(e.componentes,(function(e){return a("div",{key:e.id},[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" "),a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" "),a("b",[t._v("Precio: ")]),t._v(" $"+t._s(e.precio)+" ")])])}))],2)})),0)],1)],1),t._v("   ")],1)],1)]}}])})],1)],1),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar PDF",variant:"danger"},on:{click:function(e){return t.generarPDF2()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar PDF ")]),a("div",{attrs:{id:"productosolitario"}},[a("b-form-group",{attrs:{label:"*Producto","label-for":"id_producto"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_producto",type:"text",placeholder:"Ingrese un Producto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:t.op_productos},on:{change:function(e){return t.cambiarprodusado(t.idprodus)}},model:{value:t.idprodus,callback:function(e){t.idprodus=e},expression:"idprodus"}})],1),a("h1",[t._v("Variacion Producto: "+t._s(t.productousado.produ.nombre))]),a("h3",[t._v("Periodo: "+t._s(t.fechainiusada)+" - "+t._s(t.fechafinusada))]),t._m(1)],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"graficos"}},[a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart4",width:"300",height:"500"}})]),a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart3",width:"300",height:"500"}})]),a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart",width:"300",height:"500"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart2",width:"700",height:"200"}})])}],o=a("1da1"),i=a("5530"),s=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("4de4"),a("caad"),a("2532"),a("159b"),a("ac1f"),a("1276"),a("fb6a"),a("7db0"),a("6480")),c=a("bc3a"),l=a.n(c),d=(a("6ada"),a("8baf"),a("618c")),u=a("aa47"),p=a("d67e"),f=a.n(p),h=a("d549"),b=a("6775"),v=a("2b0e"),g=(a("f7e2"),a("c03a")),m=(a("e4a4"),new URL("http://93.188.162.174:8081"));m.pathname="ventas",v["default"].use(b["a"]);var _=function(t,e,a){return u["a"].create(t,Object(i["a"])({},e))},y={name:"sortable",bind:function(t,e,a){var r=t.querySelector("table");r._sortable=_(r.querySelector("tbody"),e.value,a)}},w={directives:{sortable:y},components:{VueHtml2pdf:s["a"],ReporteListadopdf:d["a"]},data:function(){return{productoslista:[],reparto:{},chart:null,chart2:null,chart3:null,chart4:null,datarep:[],listacli:[],gananciatot:0,totalvendedo:0,tablaexcel:[],hex:[],idprodus:-1,lista_id:[],productousado:{produ:{},tabla_ventas:[]},productos:[],datachart:{labels:[],datasets:[]},datachart4:{labels:[],datasets:[]},datachart3:{labels:["Congelados","Pollo"],datasets:[]},datachart2:{labels:[],datasets:[]},fields:[{key:"produ.id_producto",label:"Id Producto",sortable:!0},{key:"produ.nombre",label:"Nombre/s",sortable:!0},{key:"produ.precioref",label:"Precio Ref",sortable:!0},{key:"precioprom",label:"Pro Venta",sortable:!0},{key:"totalvendido",label:"Cantidad Vendida",sortable:!0},{key:"recaudado",label:"Venta Total",sortable:!0},{key:"costototal",label:"Costo Total",sortable:!0},{key:"produ.tipo_producto",label:"Tipo",sortable:!0},{key:"nroventas",label:"Numero de Ventas",sortable:!0},{key:"ganancia",label:"Ganancia",sortable:!0},{key:"action",label:"",variant:"secondary"}],columns:[{field:"produ.id_producto",label:"Id Producto"},{field:"produ.nombre",label:"Nombre/s"},{field:"produ.precioref",label:"Precio Ref"},{field:"precioprom",label:"Pro Venta"},{field:"totalvendido",label:"Cantidad Vendida"},{field:"recaudado",label:"Venta Total"},{field:"costototal",label:"Costo Total"},{field:"produ.tipo_producto",label:"Tipo"},{field:"nroventas",label:"Numero de Ventas"},{field:"ganancia",label:"Ganancia"}],totalRows:1,currentPage:1,perPage:10,buscar:"",fechas:[],op_repartos:[],op_productos:[],fechainiusada:null,fechafinusada:null,sortableOptions:{chosenClass:"is-selected"},token:"",infoVisitar:{id:"modal_visitar",cliente:-1},ordenAPDF:{}}},computed:{rows:function(){return this.tabla_ventas.length},id:function(){return this.tabla_ventas.numero_orden},items:function(){var t=this;return tabla_ordenes.filter((function(e){return e.numero_orden.toLowerCase().includes(t.buscar.toLowerCase())}))}},methods:{suma:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].totalpagado+t[a].totalpagadomp;return e},Detalles2:function(t){this.productoslista.forEach((function(e){e._showDetails=t}))},costos:function(t){var e=0;return t.forEach((function(t){e+=t.costototal})),e},ganancia:function(t){var e=0;return t.forEach((function(t){e+=t.ganancia})),e},creartablaexcel:function(){var t=this,e=[];return this.productoslista.forEach((function(a){var r={produ:null,tabla_ventas:[]};r.produ=a.produ,r.tabla_ventas=a.tabla_ventas,r.precioprom=t.proventas(a),r.totalvendido=t.cantidadvendida(a),r.recaudado=t.suma(a.tabla_ventas),r.costototal=t.costos(a.tabla_ventas),r.nroventas=a.tabla_ventas.length,r.ganancia=t.ganancia(a.tabla_ventas),e.push(r)})),e},stockinicial:function(t){var e=t.produ.stocktotal;return t.tabla_ventas.forEach((function(a){a.componentes.forEach((function(a){parseInt(a.producto.split("/")[4])==t.produ.id_producto&&(e+=a.cantidad)}))})),e},cantidadvendida:function(t){var e=0;return t.tabla_ventas.forEach((function(a){a.componentes.forEach((function(a){parseInt(a.producto.split("/")[4])==t.produ.id_producto&&(e+=a.cantidad)}))})),e},proventas:function(t){var e=0;t.tabla_ventas.forEach((function(a){a.componentes.forEach((function(a){parseInt(a.producto.split("/")[4])==t.produ.id_producto&&(e+=a.precio)}))}));var a=t.produ.precioref;return 0!=t.tabla_ventas.length&&(a=e/t.tabla_ventas.length),a},fechausadacambio:function(){this.setGraph(),this.testFetch(),this.fechaperiodo()},fechaperiodo:function(){this.fechas=[];var t=new Date(this.fechainiusada),e=new Date(this.fechafinusada);console.log(t.getDay());while(t.getTime()<=e.getTime())this.fechas.push(("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+t.getFullYear()),t.setDate(t.getDate()+1);console.log(this.fechas)},cambiarprodusado:function(t){this.productousado=this.productoslista.find((function(e){return e.produ.id_producto==t})),this.armarGrafico()},armarGrafico:function(){var t=this;this.datachart2.datasets=[],this.datachart2.labels=this.fechas;var e={label:"Precio Ref",data:[],borderColor:"rgb(255, 165, 0)",backgroundColor:"rgb(255, 165, 0)",hoverOffset:4,yAxisID:"y"},a={label:"Precio Real",data:[],borderColor:"rgb(54, 162, 235)",backgroundColor:"rgb(54, 162, 235)",hoverOffset:4,yAxisID1:"y"};this.fechas.forEach((function(r){var n=r.split("-")[0],o=r.split("-")[1],i=r.split("-")[2],s=[];if(t.productousado.tabla_ventas.forEach((function(t){t.fecharealizacion==i+"-"+o+"-"+n&&s.push(t)})),0!=s.length){var c=0,l=0;s.forEach((function(e){e.componentes.forEach((function(e){parseInt(e.producto.split("/")[4])==t.productousado.produ.id_producto&&(c+=e.precioref,l+=e.precio)}))})),c/=s.length,l/=s.length,a.data.push(l),e.data.push(c)}else a.data.push(a.data[a.data.length-1]),e.data.push(e.data[e.data.length-1])})),this.datachart2.datasets.push(e),this.datachart2.datasets.push(a);var r=document.getElementById("chart2");this.chart2&&this.chart2.destroy(),this.chart2=new h["a"](r,{type:"line",data:this.datachart2,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}},interaction:{mode:"index",intersect:!1}})},rowClass:function(t,e){var a=this;if(!t||"row"!==e)return"table-danger";var r=0;return this.productoslista.forEach((function(t){var e=a.cantidadvendida(t);e>r&&(r=e)})),this.cantidadvendida(t)==r?"table-success":void 0},getLimite:function(t){var e=this.listacat.find((function(e){return e.id_categoria==t}));return e},getCategorias:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new g["a"],a.apiUrl.pathname="categorias/",e.next=4,a.getData();case 4:t.listacat=e.sent;case 5:case"end":return e.stop()}}),e)})))()},testFetch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.gananciatot=0,t.totalvendedo=0,n=0,o=0,r.results.length,t.productoslista=[],t.datachart.datasets=[],t.datachart4.datasets=[],t.datachart3.datasets=[],t.datachart.labels=[],t.datachart4.labels=[],i={label:"Ganancia por Producto",data:[],backgroundColor:["rgb(276, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},s={label:"Cantidad Vendida por Producto",data:[],backgroundColor:["rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)","rgb(54, 162, 235)"],hoverOffset:4},c={label:"Pollo vs Congelado",data:[],backgroundColor:["rgb(102, 229, 42)","rgb(137, 30, 53)"],hoverOffset:4},t.productos.forEach((function(e){var a={produ:null,tabla_ventas:[]};a.produ=e,t.datachart.labels.push(e.nombre),t.datachart4.labels.push(e.nombre);for(var c=0;c<r.results.length;c++)t.checkearfecha(r.results[c].fecharealizacion)&&function(){var i=[];r.results[c].componentes.forEach((function(t){return i.push(parseInt(t.producto.split("/")[4]))})),console.log("la lista"),console.log(i),console.log("el produ"),console.log(t.productousado.produ.id_producto),i.includes(e.id_producto)&&("Pollo"==r.results[c].tipo_venta?n++:o++,a.tabla_ventas.push(r.results[c]))}();t.gananciatot=t.gananciatot+t.ganancia(a.tabla_ventas),t.totalvendedo=t.totalvendedo+t.suma(a.tabla_ventas),i.data.push(t.ganancia(a.tabla_ventas)),s.data.push(t.cantidadvendida(a)),t.datachart.datasets.push(i),t.datachart4.datasets.push(s),0!=a.tabla_ventas.length&&t.productoslista.push(a)})),console.log(t.productoslista),c.data.push(o),c.data.push(n),t.datachart3.datasets.push(c),console.log(t.repartoslista),t.setGraph(),t.creartablaexcel(),e.next=34;break;case 31:e.prev=31,e.t0=e["catch"](0),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})))()},getRepartos:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new g["a"],a.apiUrl.pathname="repartos/",e.next=4,a.getData();case 4:t.datarep=e.sent,t.datarep.forEach((function(e){r={},r.value=e.id_reparto,r.text=e.nombre,console.log(r),t.op_repartos.push(r)}));case 6:case"end":return e.stop()}}),e)})))()},getProductos:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new g["a"],a.apiUrl.pathname="productos/",e.next=4,a.getData();case 4:t.productos=e.sent,t.productos.forEach((function(e){r={},r.value=e.id_producto,r.text=e.nombre,console.log(r),t.op_productos.push(r)}));case 6:case"end":return e.stop()}}),e)})))()},getClientes:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new g["a"],a.apiUrl.pathname="clientes/",e.next=4,a.getData();case 4:t.listacli=e.sent;case 5:case"end":return e.stop()}}),e)})))()},checkearfecha:function(t){var e=new Date(this.fechainiusada),a=new Date(this.fechafinusada),r=new Date(t);if(r.getTime()<=a.getTime()&&r.getTime()>=e.getTime())return!0},setGraph:function(){var t=document.getElementById("chart");this.chart&&this.chart.destroy(),this.chart=new h["a"](t,{type:"bar",data:this.datachart,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}});var e=document.getElementById("chart4");this.chart4&&this.chart4.destroy(),this.chart4=new h["a"](e,{type:"bar",data:this.datachart4,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}});var a=document.getElementById("chart3");this.chart3&&this.chart3.destroy(),this.chart3=new h["a"](a,{type:"pie",data:this.datachart3,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}})},testFetch2:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,"undefined"!==typeof t.$route.params.repa){e.next=8;break}return console.log("Reparto vacio"),a="http://93.188.162.174:8081",e.next=6,l.a.get(a+"/repartos/"+t.$route.query.id);case 6:r=e.sent,t.reparto=r.data;case 8:return e.next=10,fetch(m);case 10:return n=e.sent,e.next=13,n.json();case 13:o=e.sent,o.results.filter((function(e){return e.id_medico.split("/")[4]==t.profesional.id_medico})),t.tabla_ordenes=lista_ordenes,e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(t,e){this.infoVisitar.cliente=t,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},fechaactual:function(){var t=new Date;console.log(t.toLocaleDateString());var e=function(t){return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+t.getFullYear()};return console.log(e(t)),e(t)},fechaactual2:function(){var t=new Date,e=function(t){return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)};return console.log(e(t)),e(t)},buscarnow:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,c,l,d,u,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a=t.$refs.buscadorlista,r=a.value.toUpperCase(),n=document.getElementById("tablaregistros"),o=n.getElementsByTagName("tr"),s=1;s<o.length;s++)i=o[s].getElementsByTagName("td"),l=i[0].textContent||i[0].innerText,d=i[1].textContent||i[1].innerText,u=i[3].textContent||i[3].innerText,p=i[4].textContent||i[4].innerText,f=i[6].textContent||i[6].innerText,c=l+d+u+p+f,c.toUpperCase().indexOf(r)>-1?o[s].style.display="":o[s].style.display="none";case 5:case"end":return e.stop()}}),e)})))()},getReparto:function(t){var e=this.datarep.find((function(e){return e.id_reparto==t}));return e},getProducto:function(t){var e=this.productos.find((function(e){return e.id_producto==t}));return e},inicializar:function(){"reparto"==this.$session.get("tipocuenta")&&(console.log(this.$session.get("repartused")),this.reparto=this.$session.get("repartused")),this.fechainiusada=this.fechaactual2(),this.fechafinusada=this.fechaactual2()},generarPDF:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=document.getElementById("graficos"),f()().set({margin:1,filename:"GraficosPeriodoDe"+t.fechainiusada+" a "+t.fechafinusada+".pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"landscape"}}).from(a).save().catch((function(t){return console.log(t)})),r=document.getElementById("tablaproductos"),f()().set({margin:1,filename:"TablaPeriodoDe"+t.fechainiusada+" a "+t.fechafinusada+".pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a3",orientation:"landscape"}}).from(r).save().catch((function(t){return console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},generarPDF2:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=document.getElementById("productosolitario"),f()().set({margin:1,filename:t.productousado.produ.nombre+" Variacion.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a3",orientation:"landscape"}}).from(a).save().catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.getRepartos(),this.getCategorias(),this.inicializar(),this.getClientes(),this.getProductos(),this.testFetch()}},x=w,k=(a("6921"),a("2877")),P=Object(k["a"])(x,r,n,!1,null,"38ce66f8",null);e["default"]=P.exports},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),o=a("56ef"),i=a("fc6a"),s=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=i(t),n=s.f,l=o(r),d={},u=0;while(l.length>u)a=n(r,e=l[u++]),void 0!==a&&c(d,e,a);return d}})},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),o=a("fc6a"),i=a("06cf").f,s=a("83ab"),c=n((function(){i(1)})),l=!s||c;r({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})}}]);
//# sourceMappingURL=chunk-18e2d019.a97b84c0.js.map