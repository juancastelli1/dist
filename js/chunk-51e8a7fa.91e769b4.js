(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51e8a7fa"],{"2b06":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Fecha","label-for":"fecharealizacion"}},[o("b-form-input",{attrs:{id:"fecharealizacion",type:"date",disabled:e.stockhabilitado,placeholder:"Ingrese la fecha de realizacion de la devolucion","invalid-feedback":"Complete este campo",state:e.validacion.fecharealizacion.estado,required:""},model:{value:e.devoluciones.fecharealizacion,callback:function(t){e.$set(e.devoluciones,"fecharealizacion",t)},expression:"devoluciones.fecharealizacion"}}),o("b-form-invalid-feedback",{attrs:{id:"fecharealizacion-live-feedback"}},[e._v(" "+e._s(e.validacion.fecharealizacion.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Tipo de Devolucion","label-for":"tipo_dev"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("b-form-select",{attrs:{id:"tipo_dev",type:"text",placeholder:"Describa el tipo de devolucion","invalid-feedback":"Complete este campo",state:e.validacion.tipo_dev.estado,required:"",options:e.tipos_productos},on:{change:function(t){return e.cambiodetipo()}},model:{value:e.devoluciones.tipo_dev,callback:function(t){e.$set(e.devoluciones,"tipo_dev",t)},expression:"devoluciones.tipo_dev"}}),o("b-form-invalid-feedback",{attrs:{id:"tipo_dev-live-feedback"}},[e._v(" "+e._s(e.validacion.tipo_dev.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cliente","label-for":"id_cliente"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_cliente",state:e.validacion.id_cliente.estado,type:"text",placeholder:"Ingrese un cliente","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_clientes},model:{value:e.devoluciones.id_cliente,callback:function(t){e.$set(e.devoluciones,"id_cliente",t)},expression:"devoluciones.id_cliente"}}),o("b-form-invalid-feedback",{attrs:{id:"id_cliente-live-feedback"}},[e._v(" "+e._s(e.validacion.id_cliente.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Stock","label-for":"id_stock"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_stock",state:e.validacion.id_stock.estado,type:"text",placeholder:"Ingrese un stock","invalid-feedback":"Complete este campo",required:"",solo:"",disabled:e.stockhabilitado,filled:"",items:e.op_stocks},on:{change:e.setStock},model:{value:e.devoluciones.id_stock,callback:function(t){e.$set(e.devoluciones,"id_stock",t)},expression:"devoluciones.id_stock"}}),o("b-form-invalid-feedback",{attrs:{id:"id_stock-live-feedback"}},[e._v(" "+e._s(e.validacion.id_stock.mensaje)+" ")])],1),e._l(e.devoluciones.componentes,(function(t,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.btn_producto,expression:"btn_producto"}],key:n},[o("b-form",[o("div",{staticClass:"d-flex  justify-content-between"},[o("h4",[e._v("Producto: "+e._s(n+1))]),o("b-button",{staticStyle:{color:"white"},attrs:{variant:"danger"},on:{click:function(t){return e.eliminarProducto(n)}}},[o("v-icon",{staticStyle:{color:"white"}},[e._v(" mdi-delete ")])],1)],1),o("b-form-group",{attrs:{label:"*Producto","label-for":"producto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"producto",state:e.validacion.componentes[n].producto.estado,type:"text",placeholder:"Ingrese un Producto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_productos},on:{change:function(t){return e.cambiarUnitario(n)}},model:{value:t.producto,callback:function(o){e.$set(t,"producto",o)},expression:"item.producto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].producto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cantidad Devuelta","label-for":"cantidad"}},[o("b-form-input",{attrs:{id:"cantidad",state:e.validacion.componentes[n].cantidad.estado,type:"number",placeholder:"*Ingrese la cantidad","invalid-feedback":"Complete este campo",required:""},on:{keyup:function(o){return e.sumar(t.cantidad,t.precio)}},model:{value:t.cantidad,callback:function(o){e.$set(t,"cantidad",o)},expression:"item.cantidad"}}),o("b-form-invalid-feedback",{attrs:{id:"cantidad-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].cantidad.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Importe Reconocido","label-for":"precio"}},[o("span",{staticStyle:{display:"inline-block",width:"3%"}},[e._v("$")]),o("b-form-input",{staticStyle:{width:"97%",display:"inline-block"},attrs:{id:"precio",state:e.validacion.componentes[n].precio.estado,type:"number",placeholder:"*Ingrese el precio","invalid-feedback":"Complete este campo",required:""},on:{keyup:function(o){return e.sumar(t.cantidad,t.precio,n)}},model:{value:t.precio,callback:function(o){e.$set(t,"precio",o)},expression:"item.precio"}}),o("b-form-invalid-feedback",{attrs:{id:"precio-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].precio.mensaje)+" ")])],1),o("span",[e._v("Total Producto: $")]),e._v(" "+e._s(t.cantidad*t.precio)+" ")],1),o("b-button",{staticClass:"my-3",staticStyle:{color:"white"},attrs:{variant:"success"},on:{click:function(t){return e.sumarProductos()}}},[e._v("+")])],1)})),o("br"),o("br"),o("span",{staticStyle:{"text-align":"center",width:"100%"}},[e._v("Total devolucion: $"+e._s(e.totalpago))])],2),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.postdevolucion()}}},[e._v("Guardar")])],1)},a=[],c=o("1da1"),i=(o("96cf"),o("ac1f"),o("1276"),o("7db0"),o("159b"),o("fb6a"),o("caad"),o("2532"),o("a434"),o("c03a")),s=o("bc3a"),r=o.n(s),l={props:{updateTable:Function},data:function(){return{devoluciones:{componentes:[]},data:{},list_productos:{},listacli:[],productoelegido:{},text:"",totalprod:[0],totalpago:0,stockviejo:[],numero:-1,stockhabilitado:!1,stockusado:{},op_productos:[],op_clientes:[],op_stocks:[],productonuevo:{},tipos_productos:[{value:null,text:"Elija un tipo de producto",disabled:!0},{value:"Pollo",text:"Pollo"},{value:"Congelados",text:"Congelado"}],listaproduct:[],listastock:[],validacion:{fecharealizacion:{estado:null,mensaje:""},tipo_dev:{estado:null,mensaje:""},id_cliente:{estado:null,mensaje:""},id_stock:{estado:null,mensaje:""},componentes:[]}}},methods:{postdevolucion:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="devoluciones/",console.log(e.devoluciones.id_stock.split("/")[4]),e.actualizarStockProducto(),t.next=6,o.postData(e.devoluciones);case 6:n=t.sent,e.cargarFeedback(n),e.updateTable();case 9:case"end":return t.stop()}}),t)})))()},getProducto:function(e){var t=this.listaproduct.find((function(t){return t.id_producto==e}));return t},actualizarStockProducto:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.getStock(e.devoluciones.id_stock.split("/")[4]),console.log("Hola"),console.log(o),e.stockusado.nombre=o.nombre,e.stockusado.id_reparto=o.id_reparto,e.stockusado.fechastock=o.fechastock,e.stockusado.componentes=o.componentes,e.devoluciones.componentes.forEach((function(t){var o=t.producto.split("/")[4];e.checkprodstock(o)?e.stockusado.componentes.forEach((function(e){e.producto.split("/")[4]==o&&(e.cantidad=parseFloat(e.cantidad)+parseFloat(t.cantidad))})):(e.productonuevo.producto=t.producto,e.productonuevo.cantidad=t.cantidad,e.stockusado.componentes.push(e.productonuevo)),console.log("Id del producto en venta:",o)})),console.log(e.stockusado),t.next=11,r.a.put("http://93.188.162.174:8081/stocks/"+o.id_stock+"/",e.stockusado);case 11:case"end":return t.stop()}}),t)})))()},checkprodstock2:function(e){var t=null;if(this.stockusado!={})for(var o=0;o<this.stockusado.componentes.length;o++)this.stockusado.componentes[o].producto.split("/")[4]==e&&(t=this.stockusado.componentes[o].cantidad);return t},cambiodetipo:function(){this.getClientes(),this.getProductos()},getStock:function(e){e=parseInt(e),console.log(this.listastock);var t=this.listastock.find((function(t){return t.id_stock==e}));return t},checkprodstock:function(e){var t=!1;if(this.stockusado!={})for(var o=0;o<this.stockusado.componentes.length;o++)this.stockusado.componentes[o].producto.split("/")[4]==e&&(t=!0);return t},cambiarUnitario:function(e){this.devoluciones.componentes[e].precio=this.getProducto(this.devoluciones.componentes[e].producto.split("/")[4]).precioref,this.calctotalpago()},sumar:function(e,t,o){var n=0;e=parseFloat(e),t=parseFloat(t),n=parseFloat(e)*parseFloat(t),this.totalprod[o]=n,this.totalprod.push(0),this.totalprod.pop(),this.calctotalpago()},calctotalpago:function(){for(var e=0,t=0;t<this.devoluciones.componentes.length;t++)isNaN(this.devoluciones.componentes[t].precio)||isNaN(this.devoluciones.componentes[t].cantidad)||(e+=this.devoluciones.componentes[t].precio*this.devoluciones.componentes[t].cantidad);console.log(e),this.totalpago=e},handleInput:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listastock=[],o=new i["a"],o.apiUrl.pathname="stocks/",t.next=5,o.getData();case 5:e.listastock=t.sent,n=new Date,n.setDate(n.getDate()),a=n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2),e.devoluciones.fecharealizacion=a,e.devoluciones.tipo_dev="Pollo",console.log(String(a)),e.$session.exists()&&("reparto"==e.$session.get("tipocuenta")&&(e.devoluciones.id_stock="http://93.188.162.174:8081/stocks/"+e.$session.get("stockused").id_stock+"/",e.stockhabilitado=!0,e.getClientesRep()),e.stockusado=e.getStock(e.$session.get("stockused").id_stock),e.getProductos());case 13:case"end":return t.stop()}}),t)})))()},getClientesRep:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="clientes/",t.next=4,o.getData();case 4:e.listacli=t.sent,e.op_clientes=[],n={},e.listacli.forEach((function(t){n={},n.value="http://93.188.162.174:8081/clientes/"+t.numero_cliente+"/",n.text=t.nombre,e.$session.get("repartused").clientes_reparto.includes(n.value)&&e.op_clientes.push(n)}));case 8:case"end":return t.stop()}}),t)})))()},resetForm:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.devoluciones.fecharealizacion="",e.devoluciones.componentes=null;case 2:case"end":return t.stop()}}),t)})))()},getProductos:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="productos/",t.next=4,o.getData();case 4:e.listaproduct=t.sent,e.op_productos=[],e.listaproduct.forEach((function(t){n={},n.value="http://93.188.162.174:8081/productos/"+t.id_producto+"/",n.text=t.nombre+" - Pre Ref: $"+t.precioref,"general"==e.devoluciones.id_stock?(n.text=n.text+"- Stock: "+t.stocktotal,t.tipo_producto==e.devoluciones.tipo_dev&&e.op_productos.push(n)):(null==e.checkprodstock2(t.id_producto)?n.text=n.text+" - sin stock":n.text=n.text+" - Stock: "+e.checkprodstock2(t.id_producto),console.log(n)),t.tipo_producto==e.devoluciones.tipo_dev&&e.op_productos.push(n)}));case 7:case"end":return t.stop()}}),t)})))()},setStock:function(){console.log(this.devoluciones.id_stock),"general"!=this.devoluciones.id_stock&&(this.stockusado=this.getStock(this.devoluciones.id_stock.split("/")[4]),console.log(this.stockusado)),this.getProductos()},getStocks:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="stocks/",t.next=4,o.getData();case 4:e.listastock=t.sent,e.listastock.forEach((function(t){n={},n.value="http://93.188.162.174:8081/stocks/"+t.id_stock+"/",n.text="Id Stock: "+t.id_stock+" - Reparto: "+t.id_reparto.split("/")[4]+" - Fecha: "+t.fechastock,console.log(n),0==t.cerrado&&e.op_stocks.push(n)}));case 6:case"end":return t.stop()}}),t)})))()},getClientes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="clientes/",t.next=4,o.getData();case 4:e.listacli=t.sent,e.listacli.forEach((function(t){n={},n.value="http://93.188.162.174:8081/clientes/"+t.numero_cliente+"/",n.text=t.nombre,console.log(n),e.op_clientes.push(n)}));case 6:case"end":return t.stop()}}),t)})))()},getFechaPrecio:function(e){var t="Nunca se compro",o=new Date(2e3,1,1),n=0;return console.log(this.listadevolucion),this.listadevolucion.forEach((function(a){o=new Date(a.fecharealizacion),a.componentes.forEach((function(a){a.producto.split("/")[4]==e&&(n=a.precio,t=o.getUTCDate()+"/"+(o.getMonth()+1)+"/"+o.getUTCFullYear())}))})),"Ultimo precio:"+n+" - Fecha:"+t},sumarProductos:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.btn_producto=!0,e.numero=e.numero+1,e.devoluciones.componentes.push({cantidad:0,producto:null,precio:0}),e.validacion.componentes.push({cantidad:{estado:null,mensaje:""},producto:{estado:null,mensaje:""},precio:{estado:null,mensaje:""}});case 4:case"end":return t.stop()}}),t)})))()},eliminarProducto:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:1==t.devoluciones.componentes.length?alert("Tiene que haber al menos 1 producto"):(t.devoluciones.componentes.splice(e,1),t.validacion.componentes.splice(e,1),t.totalprod.splice(e),t.numero=t.numero-1,t.calctotalpago());case 1:case"end":return o.stop()}}),o)})))()},cargarFeedback:function(e){var t;for(var o in e||(e={}),this.validacion)t=!e.hasOwnProperty(o),this.validacion[o].estado=t,t||(this.validacion[o].mensaje=e[o][0]);this.cargarFeedbackcomponentes(e)},cargarFeedbackcomponentes:function(e){var t,o=!1;e.componentes||(o=!0),this.validacion.componentes.forEach((function(n,a){for(var c in n)t=o||!e.componentes[a].hasOwnProperty(c),n[c].estado=t,console.log(c),t||(n[c].mensaje=e.componentes[a][c][0])}))}},beforeMount:function(){this.getStocks(),this.getClientes(),this.sumarProductos(),this.handleInput(),this.getProductos()}},d=l,u=o("2877"),p=Object(u["a"])(d,n,a,!1,null,null,null);t["a"]=p.exports},"9f92":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h6",[e._v("Los campos en (*) son obligatorios")]),o("b-form",[o("b-form-group",{attrs:{label:"*Fecha","label-for":"fecharealizacion"}},[o("b-form-input",{attrs:{id:"fecharealizacion",type:"date",disabled:e.stockhabilitado,placeholder:"Ingrese la fecha de realizacion de la devolucion","invalid-feedback":"Complete este campo",state:e.validacion.fecharealizacion.estado,required:""},model:{value:e.devoluciones.fecharealizacion,callback:function(t){e.$set(e.devoluciones,"fecharealizacion",t)},expression:"devoluciones.fecharealizacion"}}),o("b-form-invalid-feedback",{attrs:{id:"fecharealizacion-live-feedback"}},[e._v(" "+e._s(e.validacion.fecharealizacion.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Tipo de Devolucion","label-for":"tipo_dev"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("b-form-select",{attrs:{id:"tipo_dev",type:"text",placeholder:"Describa el tipo de producto","invalid-feedback":"Complete este campo",state:e.validacion.tipo_dev.estado,required:"",options:e.tipos_productos},on:{change:function(t){return e.cambiodetipo()}},model:{value:e.devoluciones.tipo_dev,callback:function(t){e.$set(e.devoluciones,"tipo_dev",t)},expression:"devoluciones.tipo_dev"}}),o("b-form-invalid-feedback",{attrs:{id:"tipo_dev-live-feedback"}},[e._v(" "+e._s(e.validacion.tipo_dev.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cliente","label-for":"id_cliente"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_cliente",state:e.validacion.id_cliente.estado,type:"text",placeholder:"Ingrese un cliente","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_clientes},model:{value:e.devoluciones.id_cliente,callback:function(t){e.$set(e.devoluciones,"id_cliente",t)},expression:"devoluciones.id_cliente"}}),o("b-form-invalid-feedback",{attrs:{id:"id_cliente-live-feedback"}},[e._v(" "+e._s(e.validacion.id_cliente.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Stock","label-for":"id_stock"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_stock",state:e.validacion.id_stock.estado,type:"text",placeholder:"Ingrese un stock","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_stocks},on:{change:e.setStock},model:{value:e.devoluciones.id_stock,callback:function(t){e.$set(e.devoluciones,"id_stock",t)},expression:"devoluciones.id_stock"}}),o("b-form-invalid-feedback",{attrs:{id:"id_stock-live-feedback"}},[e._v(" "+e._s(e.validacion.id_stock.mensaje)+" ")])],1),e._l(e.devoluciones.componentes,(function(t,n){return o("divs",{key:n},[o("b-form",[o("div",{staticClass:"d-flex  justify-content-between"},[o("h4",[e._v("Producto: "+e._s(n+1))]),o("b-button",{staticStyle:{color:"white"},attrs:{variant:"danger"},on:{click:function(t){return e.eliminarProducto(n)}}},[o("v-icon",{staticStyle:{color:"white"}},[e._v(" mdi-delete ")])],1)],1),o("b-form-group",{attrs:{label:"*Producto","label-for":"producto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"producto",state:e.validacion.componentes[n].producto.estado,type:"text",placeholder:"Ingrese un producto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_productos},on:{change:function(t){return e.cambiarUnitario(n)}},model:{value:t.producto,callback:function(o){e.$set(t,"producto",o)},expression:"item.producto"}}),o("b-form-invalid-feedback",{attrs:{id:"producto-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].producto.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Cantidad Devuelta","label-for":"cantidad"}},[o("b-form-input",{attrs:{id:"cantidad",state:e.validacion.componentes[n].cantidad.estado,type:"number",placeholder:"*Ingrese la cantidad","invalid-feedback":"Complete este campo",required:""},on:{keyup:function(o){return e.sumar(t.cantidad,t.precio)}},model:{value:t.cantidad,callback:function(o){e.$set(t,"cantidad",o)},expression:"item.cantidad"}}),o("b-form-invalid-feedback",{attrs:{id:"cantidad-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].cantidad.mensaje)+" ")])],1),o("b-form-group",{attrs:{label:"*Importe Reconocido","label-for":"precio"}},[o("span",{staticStyle:{display:"inline-block",width:"3%"}},[e._v("$")]),o("b-form-input",{staticStyle:{width:"97%",display:"inline-block"},attrs:{id:"precio",state:e.validacion.componentes[n].precio.estado,type:"number",placeholder:"*Ingrese el precio","invalid-feedback":"Complete este campo",required:""},on:{keyup:function(o){return e.sumar(t.cantidad,t.precio,n)}},model:{value:t.precio,callback:function(o){e.$set(t,"precio",o)},expression:"item.precio"}}),o("b-form-invalid-feedback",{attrs:{id:"precio-live-feedback"}},[e._v(" "+e._s(e.validacion.componentes[n].precio.mensaje)+" ")])],1),o("span",[e._v("Total Producto: $")]),e._v(" "+e._s(t.cantidad*t.precio)+" ")],1),o("b-button",{staticClass:"my-3",staticStyle:{color:"white"},attrs:{variant:"success"},on:{click:function(t){return e.sumarProductos()}}},[e._v("+")])],1)})),o("br"),o("br"),o("span",{staticStyle:{"text-align":"center",width:"100%"}},[e._v("Total devolucion: $"+e._s(e.totalpago))])],2),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.putDevolucion()}}},[e._v("Guardar")])],1)},a=[],c=o("1da1"),i=(o("7db0"),o("159b"),o("ac1f"),o("1276"),o("a434"),o("fb6a"),o("96cf"),o("c03a")),s=o("bc3a"),r=o.n(s),l={props:{devoluciones:{},updateTable:Function},data:function(){return{data:{},list_productos:{},productoelegido:{},text:"",totalprod:[0],totalpago:0,tipos_productos:[{value:null,text:"Elija un tipo de producto",disabled:!0},{value:"Pollo",text:"Pollo"},{value:"Congelados",text:"Congelado"}],numero:-1,stockusado:{},stockviejo:[],op_productos:[],op_clientes:[],op_stocks:[],productonuevo:{},listaproduct:[],listastock:[],validacion:{fecharealizacion:{estado:null,mensaje:""},id_cliente:{estado:null,mensaje:""},tipo_dev:{estado:null,mensaje:""},id_stock:{estado:null,mensaje:""},componentes:[]}}},methods:{sumar:function(e,t,o){var n=0;e=parseFloat(e),t=parseFloat(t),n=parseFloat(e)*parseFloat(t),this.totalprod[o]=n,this.totalprod.push(0),this.totalprod.pop(),this.calctotalpago()},calctotalpago:function(){for(var e=0,t=0;t<this.totalprod.length;t++)console.log(this.totalprod[t]),e+=this.totalprod[t];console.log(e),this.totalpago=e},resetForm:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.devoluciones.fecharealizacion="",e.devoluciones.componentes=null;case 2:case"end":return t.stop()}}),t)})))()},getProducto:function(e){var t=this.listaproduct.find((function(t){return t.id_producto==e}));return t},getStockViejo:function(e){var t=0,o=0;return this.stockviejo.forEach((function(n){t=parseInt(n.producto.split("/")[4]),t==e&&(o=parseFloat(n.cantidad))})),o},actualizarStockProducto2:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.getStock(e.devoluciones.id_stock.split("/")[4]),console.log("Hola"),console.log(o),e.stockusado.nombre=o.nombre,e.stockusado.id_reparto=o.id_reparto,e.stockusado.fechastock=o.fechastock,e.stockusado.componentes=o.componentes,e.devoluciones.componentes.forEach((function(t){var o=t.producto.split("/")[4];e.checkprodstock(o)?e.stockusado.componentes.forEach((function(n){n.producto.split("/")[4]==o&&(n.cantidad=parseFloat(n.cantidad)-parseFloat(e.getStockViejo(n.producto.split("/")[4]))+parseFloat(t.cantidad))})):(e.productonuevo.producto=t.producto,e.productonuevo.cantidad=t.cantidad,e.stockusado.componentes.push(e.productonuevo)),console.log("Id del producto en venta:",o)})),t.next=10,r.a.put("http://93.188.162.174:8081/stocks/"+o.id_stock+"/",e.stockusado);case 10:case"end":return t.stop()}}),t)})))()},cambiodetipo:function(){this.getClientes(),this.getProductos()},actualizarStockProducto:function(e,t){var o=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(o.getProducto(e)),a=o.getProducto(e),o.productoelegido.id_producto=a.id_producto,o.productoelegido.nombre=a.nombre,o.productoelegido.tipo_producto=a.tipo_producto,o.productoelegido.letra=a.letra,o.productoelegido.numero_producto=a.numero_producto,o.productoelegido.codigo_unico=a.codigo_unico,c=parseInt(e),console.log("stock viejo"),console.log(o.getStockViejo(c)),o.productoelegido.stocktotal=parseFloat(a.stocktotal)-parseFloat(o.getStockViejo(c))+parseFloat(t),o.productoelegido.precioref=a.precioref,console.log(o.productoelegido),n.next=16,r.a.put("http://93.188.162.174:8081/productos/"+o.productoelegido.id_producto+"/",o.productoelegido);case 16:case"end":return n.stop()}}),n)})))()},sumarProductos:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.btn_producto=!0,e.numero=e.numero+1,e.devoluciones.componentes.push({cantidad:0,producto:null,precio:0}),e.validacion.componentes.push({cantidad:{estado:null,mensaje:""},producto:{estado:null,mensaje:""},precio:{estado:null,mensaje:""}});case 4:case"end":return t.stop()}}),t)})))()},eliminarProducto:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t.devoluciones.componentes.splice(e,1),t.validacion.componentes.splice(e,1),t.totalprod.pop(t.numero),t.numero=t.numero-1;case 4:case"end":return o.stop()}}),o)})))()},fechaactual:function(){var e=new Date;console.log(e.toLocaleDateString());var t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},putDevolucion:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.devoluciones.id_devolucion,t.prev=1,t.next=4,r.a.put("http://93.188.162.174:8081/devoluciones/"+o+"/",e.devoluciones);case 4:e.respuesta=t.sent,e.stockusado.fechastock==e.fechaactual()?(console.log("anashey"),e.actualizarStockProducto2()):e.devoluciones.componentes.forEach((function(t){console.log("Longitud"),e.actualizarStockProducto(t.producto.split("/")[4],t.cantidad)})),swal("Carga Exitosa"," ","success"),t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](1),n=t.t0.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ",swal("¡ERROR!",n,"error"),e.respuesta=t.t0.response.data,console.log(t.t0);case 15:e.cargarFeedback(),e.updateTable();case 17:case"end":return t.stop()}}),t,null,[[1,9]])})))()},cargarFeedback:function(e){var t;for(var o in e||(e={}),this.validacion)t=!e.hasOwnProperty(o),this.validacion[o].estado=t,t||(this.validacion[o].mensaje=e[o][0]);this.cargarFeedbackcomponentes(e)},cargarFeedbackcomponentes:function(e){var t,o=!1;e.componentes||(o=!0),this.validacion.componentes.forEach((function(n,a){for(var c in n)t=o||!e.componentes[a].hasOwnProperty(c),n[c].estado=t,console.log(c),t||(n[c].mensaje=e.componentes[a][c][0])}))},inicializar:function(){console.log("fuera del for!");for(var e=0;e<this.devoluciones.componentes.length;e++)console.log("iniciando!"),this.validacion.componentes.push({cantidad:{estado:null,mensaje:""},precio:{estado:null,mensaje:""},producto:{estado:null,mensaje:""}})},saveStocksViejos:function(){console.log(this.devoluciones.componentes);for(var e=0;e<this.devoluciones.componentes.length;e++){var t={};t.producto=this.devoluciones.componentes[e].producto,t.cantidad=this.devoluciones.componentes[e].cantidad,this.stockviejo.push(t)}console.log("hola"),console.log(this.stockviejo)},checkprodstock2:function(e){var t=null;if(this.stockusado!={})for(var o=0;o<this.stockusado.componentes.length;o++)this.stockusado.componentes[o].producto.split("/")[4]==e&&(t=this.stockusado.componentes[o].cantidad);return t},getStock:function(e){e=parseInt(e);var t=this.listastock.find((function(t){return t.id_stock==e}));return t},checkprodstock:function(e){var t=!1;if(this.stockusado!={})for(var o=0;o<this.stockusado.componentes.length;o++)this.stockusado.componentes[o].producto.split("/")[4]==e&&(t=!0);return t},cambiarUnitario:function(e){this.devoluciones.componentes[e].precio=this.getProducto(this.devoluciones.componentes[e].producto.split("/")[4]).precioref,this.calctotalpago()},getProductos:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="productos/",t.next=4,o.getData();case 4:e.listaproduct=t.sent,e.op_productos=[],e.listaproduct.forEach((function(t){console.log("olaa"),n={},n.value="http://93.188.162.174:8081/productos/"+t.id_producto+"/",n.text=t.nombre+" - Pre. Ref: $"+t.precioref,"general"==e.devoluciones.id_stock?(n.text=n.text+"- Stock: "+t.stocktotal,t.tipo_producto==e.devoluciones.tipo_dev&&e.op_productos.push(n)):(null==e.checkprodstock2(t.id_producto)?n.text=n.text+" - sin stock":n.text=n.text+" - Stock: "+e.checkprodstock2(t.id_producto),console.log(n)),t.tipo_producto==e.devoluciones.tipo_dev&&e.op_productos.push(n)}));case 7:case"end":return t.stop()}}),t)})))()},setStock:function(){console.log(this.devoluciones.id_stock),"general"!=this.devoluciones.id_stock&&(this.stockusado=this.getStock(this.devoluciones.id_stock.split("/")[4]),console.log("epico")),this.getProductos()},getStocks:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="stocks/",t.next=4,o.getData();case 4:e.listastock=t.sent,e.listastock.forEach((function(t){n={},n.value="http://93.188.162.174:8081/stocks/"+t.id_stock+"/",n.text="Id Stock: "+t.id_stock+" - Reparto: "+t.id_reparto.split("/")[4]+" - Fecha: "+t.fechastock,console.log(n),e.op_stocks.push(n)})),e.setStock();case 7:case"end":return t.stop()}}),t)})))()},getClientes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new i["a"],o.apiUrl.pathname="clientes/",t.next=4,o.getData();case 4:e.data=t.sent,e.data.forEach((function(t){n={},n.value="http://93.188.162.174:8081/clientes/"+t.numero_cliente+"/",n.text=t.nombre,console.log(n),e.op_clientes.push(n)}));case 6:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getStocks(),this.inicializar(),this.getClientes(),this.saveStocksViejos()}},d=l,u=o("2877"),p=Object(u["a"])(d,n,a,!1,null,null,null);t["a"]=p.exports},a434:function(e,t,o){"use strict";var n=o("23e7"),a=o("23cb"),c=o("a691"),i=o("50c4"),s=o("7b0b"),r=o("65f0"),l=o("8418"),d=o("1dde"),u=d("splice"),p=Math.max,v=Math.min,m=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var o,n,d,u,h,k,b=s(this),g=i(b.length),_=a(e,g),w=arguments.length;if(0===w?o=n=0:1===w?(o=0,n=g-_):(o=w-2,n=v(p(c(t),0),g-_)),g+o-n>m)throw TypeError(f);for(d=r(b,n),u=0;u<n;u++)h=_+u,h in b&&l(d,u,b[h]);if(d.length=n,o<n){for(u=_;u<g-n;u++)h=u+n,k=u+o,h in b?b[k]=b[h]:delete b[k];for(u=g;u>g-n+o;u--)delete b[u-1]}else if(o>n)for(u=g-n;u>_;u--)h=u+n-1,k=u+o-1,h in b?b[k]=b[h]:delete b[k];for(u=0;u<o;u++)b[u+_]=arguments[u+2];return b.length=g-n+o,d}})}}]);
//# sourceMappingURL=chunk-51e8a7fa.91e769b4.js.map