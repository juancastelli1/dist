(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3116b6ea"],{"0cf8":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Reparto","label-for":"id_reparto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_reparto",type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_repartos},model:{value:e.stocks.id_reparto,callback:function(t){e.$set(e.stocks,"id_reparto",t)},expression:"stocks.id_reparto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.id_reparto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Fecha","label-for":"fechastock"}},[o("b-form-input",{attrs:{id:"fechastock",type:"date",placeholder:"Ingrese la fecha del stock","invalid-feedback":"Complete este campo",required:""},model:{value:e.stocks.fecha,callback:function(t){e.$set(e.stocks,"fecha",t)},expression:"stocks.fecha"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.nombre.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Nombre","label-for":"nombre"}},[o("b-form-input",{attrs:{id:"nombre",type:"text",placeholder:"Ingrese el nombre del stock","invalid-feedback":"Complete este campo",state:e.validacion.nombre.estado,required:""},model:{value:e.stocks.nombre,callback:function(t){e.$set(e.stocks,"nombre",t)},expression:"stocks.nombre"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.nombre.mensaje)+" ")])],1),e._l(e.stocks.componentes,(function(t,a){return o("div",{key:a},[o("b-form",[o("div",{staticClass:"d-flex  justify-content-between"},[o("h4",[e._v("Producto: "+e._s(a+1))]),o("b-button",{staticStyle:{color:"white"},attrs:{variant:"danger"},on:{click:function(t){return e.eliminarProducto(a)}}},[o("v-icon",{staticStyle:{color:"white"}},[e._v(" mdi-delete ")])],1)],1),o("b-form-group",{attrs:{label:"*Producto","label-for":"producto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"producto",state:e.validacion.componentes[a].producto.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_productos},model:{value:t.producto,callback:function(o){e.$set(t,"producto",o)},expression:"item.producto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[a].producto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cantidad","label-for":"cantidad"}},[o("b-form-input",{attrs:{id:"cantidad",state:e.validacion.componentes[a].cantidad.estado,type:"number",placeholder:"*Ingrese la cantidad","invalid-feedback":"Complete este campo",required:""},on:{change:function(o){return e.checkearstock(t.producto,t.cantidad,a)}},model:{value:t.cantidad,callback:function(o){e.$set(t,"cantidad",o)},expression:"item.cantidad"}}),o("b-form-invalid-feedback",{attrs:{id:"cantidad-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[a].cantidad.mensaje)+" ")])],1)],1),o("b-button",{staticClass:"my-3",staticStyle:{color:"white"},attrs:{variant:"success"},on:{click:function(t){return e.sumarProductos()}}},[e._v("+")])],1)}))],2),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.putStock()}}},[e._v("Guardar")])],1)},r=[],n=o("1da1"),c=(o("159b"),o("ac1f"),o("1276"),o("a434"),o("7db0"),o("96cf"),o("c03a")),s=o("bc3a"),i=o.n(s),d={props:{stocks:{},updateTable:Function},data:function(){return{data:{},list_productos:{},text:"",op_productos:[],listaproduct:[],stockviejo:[],productoelegido:{},op_repartos:[],validacion:{nombre:{estado:null,mensaje:""},fechastock:{estado:null,mensaje:""},id_reparto:{estado:null,mensaje:""},componentes:[]}}},methods:{resetForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.stocks.nombre="",e.stocks.componentes=null;case 2:case"end":return t.stop()}}),t)})))()},getProductos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new c["a"],o.apiUrl.pathname="productos/",t.next=4,o.getData();case 4:e.listaproduct=t.sent,e.listaproduct.forEach((function(t){a={},a.value="http://93.188.162.174:8081/productos/"+t.id_producto+"/",a.text=t.nombre+" - Stock: "+t.stocktotal,console.log(a),e.op_productos.push(a)}));case 6:case"end":return t.stop()}}),t)})))()},getRepartos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new c["a"],o.apiUrl.pathname="repartos/",t.next=4,o.getData(e.list_repartos);case 4:e.data=t.sent,e.data.forEach((function(t){var o={};o.value="http://93.188.162.174:8081/repartos/"+t.id_reparto+"/",o.text=t.id_reparto+"-- "+t.nombre,console.log(o),e.op_repartos.push(o)}));case 6:case"end":return t.stop()}}),t)})))()},putStock:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.stocks.id_stock,t.prev=1,t.next=4,i.a.put("http://93.188.162.174:8081/stocks/"+o+"/",e.stocks);case 4:e.respuesta=t.sent,e.stocks.componentes.forEach((function(t){console.log("Longitud"),e.actualizarStockProducto(t.producto.split("/")[4],t.cantidad)})),swal("Carga Exitosa"," ","success"),t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](1),a=t.t0.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ",swal("¡ERROR!",a,"error"),e.respuesta=t.t0.response.data,console.log(t.t0);case 15:e.cargarFeedback(),e.updateTable();case 17:case"end":return t.stop()}}),t,null,[[1,9]])})))()},cargarFeedback:function(){var e;for(var t in this.respuesta||(this.respuesta={}),this.validacion)e=!this.respuesta.hasOwnProperty(t),this.validacion[t].estado=e,console.log(t),e||(this.validacion[t].mensaje=this.respuesta[t][0]);this.cargarFeedbackComponentes()},cargarFeedbackComponentes:function(){var e,t=this,o=!1;this.respuesta.componentes||(o=!0),this.validacion.componentes.forEach((function(a,r){for(var n in a)e=o||!t.respuesta.componentes[r].hasOwnProperty(n),a[n].estado=e,console.log(n),e||(a[n].mensaje=t.respuesta.componentes[r][n][0])}))},sumarProductos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.btn_producto=!0,e.stocks.componentes.push({cantidad:0,producto:null}),e.validacion.componentes.push({cantidad:{estado:null,mensaje:""},producto:{estado:null,mensaje:""}});case 3:case"end":return t.stop()}}),t)})))()},eliminarProducto:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:0==e?alert("debe haber al menos un producto en el stock"):(t.stocks.componentes.splice(e,1),t.validacion.componentes.splice(e,1));case 1:case"end":return o.stop()}}),o)})))()},getProducto:function(e){var t=this.listaproduct.find((function(t){return t.id_producto==e}));return t},getStockViejo:function(e){var t=0,o=0;return this.stockviejo.forEach((function(a){t=parseInt(a.producto.split("/")[4]),t==e&&(o=parseInt(a.cantidad))})),o},actualizarStockProducto:function(e,t){var o=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(o.getProducto(e)),r=o.getProducto(e),o.productoelegido.id_producto=r.id_producto,o.productoelegido.nombre=r.nombre,o.productoelegido.tipo_producto=r.tipo_producto,o.productoelegido.letra=r.letra,o.productoelegido.numero_producto=r.numero_producto,o.productoelegido.codigo_unico=r.codigo_unico,n=parseInt(e),console.log("stock viejo"),console.log(o.getStockViejo(n)),o.productoelegido.stocktotal=parseInt(r.stocktotal)+parseInt(o.getStockViejo(n))-parseInt(t),o.productoelegido.precioref=r.precioref,console.log(o.productoelegido),a.next=16,i.a.put("http://93.188.162.174:8081/productos/"+o.productoelegido.id_producto+"/",o.productoelegido);case 16:case"end":return a.stop()}}),a)})))()},saveStocksViejos:function(){console.log(this.stocks.componentes);for(var e=0;e<this.stocks.componentes.length;e++){var t={};t.producto=this.stocks.componentes[e].producto,t.cantidad=this.stocks.componentes[e].cantidad,this.stockviejo.push(t)}console.log("hola"),console.log(this.stockviejo)},inicializar:function(){console.log("fuera del for!");for(var e=0;e<this.stocks.componentes.length;e++)console.log("iniciando!"),this.validacion.componentes.push({cantidad:{estado:null,mensaje:""},producto:{estado:null,mensaje:""}})}},beforeMount:function(){this.getProductos(),this.inicializar(),this.getRepartos(),this.saveStocksViejos()}},u=d,l=o("2877"),p=Object(l["a"])(u,a,r,!1,null,null,null);t["a"]=p.exports},"3efe":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Reparto","label-for":"id_reparto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_reparto",type:"text",state:e.validacion.id_reparto.estado,placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_repartos},model:{value:e.stocks.id_reparto,callback:function(t){e.$set(e.stocks,"id_reparto",t)},expression:"stocks.id_reparto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.id_reparto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Fecha","label-for":"fechastock"}},[o("b-form-input",{attrs:{id:"fechastock",type:"date",state:e.validacion.fechastock.estado,placeholder:"Ingrese la fecha del stock","invalid-feedback":"Complete este campo",required:""},model:{value:e.stocks.fechastock,callback:function(t){e.$set(e.stocks,"fechastock",t)},expression:"stocks.fechastock"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.fechastock.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"Referencia","label-for":"nombre"}},[o("b-form-input",{attrs:{id:"nombre",type:"text",placeholder:"Ingrese el nombre del stock","invalid-feedback":"Complete este campo",state:e.validacion.nombre.estado},model:{value:e.stocks.nombre,callback:function(t){e.$set(e.stocks,"nombre",t)},expression:"stocks.nombre"}}),o("b-form-invalid-feedback",{attrs:{id:"nombre-live-feedback"}},[e._v(" "+e._s(e.validacion.nombre.mensaje)+" ")])],1),e._l(e.stocks.componentes,(function(t,a){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.btn_producto,expression:"btn_producto"}],key:a},[o("b-form",[o("div",{staticClass:"d-flex  justify-content-between"},[o("h4",[e._v("Producto: "+e._s(a+1))]),o("b-button",{staticStyle:{color:"white"},attrs:{variant:"danger"},on:{click:function(t){return e.eliminarProducto(a)}}},[o("v-icon",{staticStyle:{color:"white"}},[e._v(" mdi-delete ")])],1)],1),o("b-form-group",{attrs:{label:"*Producto","label-for":"producto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"producto",state:e.validacion.componentes[a].producto.estado,type:"text",placeholder:"Ingrese un Numero","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_productos},model:{value:t.producto,callback:function(o){e.$set(t,"producto",o)},expression:"item.producto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[a].producto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cantidad","label-for":"cantidad"}},[o("b-form-input",{attrs:{id:"cantidad",state:e.validacion.componentes[a].cantidad.estado,type:"number",placeholder:"*Ingrese la cantidad","invalid-feedback":"Complete este campo",required:""},on:{change:function(o){return e.checkearstock(t.producto,t.cantidad,a)}},model:{value:t.cantidad,callback:function(o){e.$set(t,"cantidad",o)},expression:"item.cantidad"}}),o("b-form-invalid-feedback",{attrs:{id:"cantidad-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[a].cantidad.mensaje)+" ")])],1)],1),o("b-button",{staticClass:"my-3",staticStyle:{color:"white"},attrs:{variant:"success"},on:{click:function(t){return e.sumarProductos()}}},[e._v("+")])],1)}))],2),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.postStock()}}},[e._v("Guardar")])],1)},r=[],n=o("1da1"),c=(o("96cf"),o("159b"),o("ac1f"),o("1276"),o("7db0"),o("fb6a"),o("a434"),o("c03a")),s=o("bc3a"),i=o.n(s),d={props:{updateTable:Function},data:function(){return{stocks:{componentes:[]},data:{},list_productos:{},productoelegido:{},text:"",op_productos:[],op_repartos:[],listaproduct:[],validacion:{nombre:{estado:null,mensaje:""},fechastock:{estado:null,mensaje:""},id_reparto:{estado:null,mensaje:""},componentes:[]}}},methods:{postStock:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new c["a"],o.apiUrl.pathname="stocks/",console.log(stocks),e.stocks.componentes.forEach((function(t){e.actualizarStockProducto(t.producto.split("/")[4],t.cantidad)})),t.next=6,o.postData(e.stocks);case 6:a=t.sent,e.cargarFeedback(a),e.updateTable();case 9:case"end":return t.stop()}}),t)})))()},resetForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.stocks.nombre="",e.stocks.componentes=null;case 2:case"end":return t.stop()}}),t)})))()},getProductos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new c["a"],o.apiUrl.pathname="productos/",t.next=4,o.getData();case 4:e.listaproduct=t.sent,e.listaproduct.forEach((function(t){a={},a.value="http://93.188.162.174:8081/productos/"+t.id_producto+"/",a.text=t.nombre+" - Stock: "+t.stocktotal,console.log(a),e.op_productos.push(a)}));case 6:case"end":return t.stop()}}),t)})))()},checkearstock:function(e,t,o){var a=this.getProducto(e.split("/")[4]);a.stocktotal<t&&alert("El stock del producto no alcanza")},getProducto:function(e){var t=this.listaproduct.find((function(t){return t.id_producto==e}));return t},actualizarStockProducto:function(e,t){var o=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("Producto Final"),console.log(o.getProducto(e)),r=o.getProducto(e),o.productoelegido.id_producto=r.id_producto,o.productoelegido.nombre=r.nombre,o.productoelegido.tipo_producto=r.tipo_producto,o.productoelegido.letra=r.letra,o.productoelegido.numero_producto=r.numero_producto,o.productoelegido.codigo_unico=r.codigo_unico,o.productoelegido.stocktotal=parseInt(r.stocktotal)-parseInt(t),o.productoelegido.precioref=r.precioref,console.log(o.productoelegido),a.next=14,i.a.put("http://93.188.162.174:8081/productos/"+o.productoelegido.id_producto+"/",o.productoelegido);case 14:case"end":return a.stop()}}),a)})))()},getRepartos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new c["a"],o.apiUrl.pathname="repartos/",t.next=4,o.getData(e.list_repartos);case 4:e.data=t.sent,e.data.forEach((function(t){var o={};o.value="http://93.188.162.174:8081/repartos/"+t.id_reparto+"/",o.text=t.id_reparto+"-- "+t.nombre,console.log(o),e.op_repartos.push(o)}));case 6:case"end":return t.stop()}}),t)})))()},handleInput:function(){var e=new Date;e.setDate(e.getDate());var t=e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2);this.stocks.fechastock=t,console.log(String(t))},sumarProductos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.btn_producto=!0,e.stocks.componentes.push({cantidad:0,producto:null}),e.validacion.componentes.push({cantidad:{estado:null,mensaje:""},producto:{estado:null,mensaje:""}});case 3:case"end":return t.stop()}}),t)})))()},eliminarProducto:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:1==t.stocks.componentes.length?alert("debe haber al menos un producto en el stock"):(t.stocks.componentes.splice(e,1),t.validacion.componentes.splice(e,1));case 1:case"end":return o.stop()}}),o)})))()},cargarFeedback:function(e){var t;for(var o in e||(e={}),this.validacion)t=!e.hasOwnProperty(o),this.validacion[o].estado=t,t||(this.validacion[o].mensaje=e[o][0]);this.cargarFeedbackcomponentes(e)},cargarFeedbackcomponentes:function(e){var t,o=!1;e.componentes||(o=!0),this.validacion.componentes.forEach((function(a,r){for(var n in a)t=o||!e.componentes[r].hasOwnProperty(n),a[n].estado=t,console.log(n),t||(a[n].mensaje=e.componentes[r][n][0])}))}},beforeMount:function(){this.getProductos(),this.getRepartos(),this.sumarProductos(),this.handleInput()}},u=d,l=o("2877"),p=Object(l["a"])(u,a,r,!1,null,null,null);t["a"]=p.exports},a434:function(e,t,o){"use strict";var a=o("23e7"),r=o("23cb"),n=o("a691"),c=o("50c4"),s=o("7b0b"),i=o("65f0"),d=o("8418"),u=o("1dde"),l=u("splice"),p=Math.max,m=Math.min,f=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!l},{splice:function(e,t){var o,a,u,l,v,h,k=s(this),g=c(k.length),_=r(e,g),w=arguments.length;if(0===w?o=a=0:1===w?(o=0,a=g-_):(o=w-2,a=m(p(n(t),0),g-_)),g+o-a>f)throw TypeError(b);for(u=i(k,a),l=0;l<a;l++)v=_+l,v in k&&d(u,l,k[v]);if(u.length=a,o<a){for(l=_;l<g-a;l++)v=l+a,h=l+o,v in k?k[h]=k[v]:delete k[h];for(l=g;l>g-a+o;l--)delete k[l-1]}else if(o>a)for(l=g-a;l>_;l--)v=l+a-1,h=l+o-1,v in k?k[h]=k[v]:delete k[h];for(l=0;l<o;l++)k[l+_]=arguments[l+2];return k.length=g-a+o,u}})},d81d:function(e,t,o){"use strict";var a=o("23e7"),r=o("b727").map,n=o("1dde"),c=n("map");a({target:"Array",proto:!0,forced:!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-3116b6ea.b8cecc0d.js.map