dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
costosLiveForm1BeginInsert: function(inSender) {
this.gradoLookup1.setDisplayValue("EDUCACIÓN COMUNITARIA");
this.syLookup2.setDisplayValue("2013-2014");
this.lsTipoCosto.update();
},
educomLiveForm1BeginUpdate: function(inSender) {
var count= main.global_ls_costos.getCount();
var tipo= 2;
console.log(count);
if(count===0){
main.global_ls_costos.filter.setValue("tipoCosto", tipo);
this.global_ls_costos.update();
}else{/*nothing to do*/}
main.costoslookup1.setReadonly(true);
main.syLookup2.setReadonly(true);
},
educomLiveForm1BeginInsert: function(inSender) {
var count= main.global_ls_costos.getCount();
var tipo= 2;
console.log(count);
if(count === 0){
main.global_ls_costos.filter.setValue("tipoCosto", tipo);
this.global_ls_costos.update();
}else{
//nothing to do
}
this.profesor1Editor1.setDataValue(0);
this.profesor2Editor1.setDataValue(0);
main.costoslookup1.setReadonly(false);
main.syLookup2.setReadonly(false);
},
inscripcionesShow: function(inSender) {
var count= main.global_ls_costos.getCount();
var tipo= 2;
console.log(count);
if(count === 0){
this.global_ls_costos.update();
}else{
//nothing to do
}
this.inscpersonaeducomLiveVariable1.update();
},
// filter Persona by id into lookup in form
inscpersonaeducomLiveForm1BeginUpdate: function(inSender) {
var idp = main.inscpersonaeducomDojoGrid.selectedItem.data.persona.data.idPersona;
var date= main.inscpersonaeducomDojoGrid.selectedItem.data.fechaCreacion;
this.global_ls_personas.filter.setValue("idPersona", idp);
this.fechaCreacionEditor1.disable();
main.fechaCreacionEditor1.setDataValue(date);
this.global_ls_personas.update();
},
// on beginInsert enable fechaCreacionEditor1
inscpersonaeducomLiveForm1BeginInsert: function(inSender) {
this.fechaCreacionEditor1.enable();
this.tipoPagoLookup1.setDisplayValue("Diners");
this.descuentoEditor1.setDataValue("0");
},
// filter personaLiveVariable
inscripciones_list_personasSelect1: function(inSender, inItem) {
var idpersona = main.inscripciones_list_personas.selectedItem.data.idpersona;
this.inscpersonaeducomLiveVariable1.filter.setValue("persona.idPersona", idpersona);
this.inscpersonaeducomLiveVariable1.update();
},
// clear filters when the user tries to add a insc_persona_educom
inscripciones_clearFilterClick: function(inSender) {
this.inscripciones_cursos_texto.clear();
this.inscripciones_search_people_text.clear();
/*this.inscpersonaeducomLiveVariable1.filter.setValue("educom.activo_retirado", true);
this.inscpersonaeducomLiveVariable1.filter.setValue("persona.idPersona", undefined);*/
this.inscpersonaeducomLiveVariable1.filter.clearData();
this.inscpersonaeducomLiveVariable1.update();
},
// enable button described above
inscripciones_list_personasSelect2: function(inSender, inItem) {
this.inscpersonaeducomNewButton.enable();
},
// clear filters when the user tries to add a insc_persona_educom
inscripcionesShow1: function(inSender) {
this.educomLiveVariable1.filter.clearData();
this.cursos_search_cursos.clear();
this.educomLiveVariable1.update();
},
// triggerin' insc_alum_costo insertion on insc_persona_educom has been succesed
/*inscpersonaeducomLiveForm1InsertData: function(inSender) {
var idp= main.personaLookup1.getDataValue().idPersona;
var idc= main.educomLookup1.getDataValue().costos.idCosto;
var idsy= main.educomLookup1.getDataValue().sy.idSy;
var dto= this.descuentoEditor1.getDataValue();
var pdto= 0;
var fechainicio= main.educomLookup1.getDataValue().fechaInicio;
var fechafin= main.educomLookup1.getDataValue().fechaFin;
var valorPagoAnticipado= main.educomLookup1.getDataValue().tarifaAnticipado;
var valorSinDescuento= main.educomLookup1.getDataValue().costos.valor;
if(dto > 0){
var cociente= valorPagoAnticipado/2;
this.insertInscAlumCosto.setValue("costos.idCosto", idc);
this.insertInscAlumCosto.setValue("persona.idPersona", idp);
this.insertInscAlumCosto.setValue("sy.idSy", idsy);
this.insertInscAlumCosto.setValue("inscrito", "true");
this.insertInscAlumCosto.setValue("observacion", "anticipado");
this.insertInscAlumCosto.setValue("descuentoPorcentaje", pdto);
this.insertInscAlumCosto.setValue("descuentoValor", dto);
this.insertInscAlumCosto.setValue("valorFinalDescuento", cociente);
this.insertInscAlumCosto.setValue("fechaInicio", fechainicio);
this.insertInscAlumCosto.setValue("fechaFin", fechainicio);
this.insertPersonaCosto.setDataSet(this.insertInscAlumCosto);
this.insertPersonaCosto.insertData();
}
if(dto===0 || dto===undefined){
var cociente= valorSinDescuento/4;
this.insertInscAlumCosto.setValue("costos.idCosto", idc);
this.insertInscAlumCosto.setValue("persona.idPersona", idp);
this.insertInscAlumCosto.setValue("sy.idSy", idsy);
this.insertInscAlumCosto.setValue("inscrito", "true");
this.insertInscAlumCosto.setValue("observacion", "mensual");
this.insertInscAlumCosto.setValue("descuentoPorcentaje", pdto);
this.insertInscAlumCosto.setValue("descuentoValor", dto);
this.insertInscAlumCosto.setValue("valorFinalDescuento", cociente);
this.insertInscAlumCosto.setValue("fechaInicio", fechainicio);
this.insertInscAlumCosto.setValue("fechaFin", fechafin);
this.insertPersonaCosto.setDataSet(this.insertInscAlumCosto);
this.insertPersonaCosto.insertData();
}
},*/
educomLiveForm1BeginUpdate1: function(inSender) {
var count= main.global_ls_costos.getCount();
var tipo= 2;
if(count===0){
main.global_ls_costos.filter.setValue("tipoCosto", tipo);
this.global_ls_costos.update();
}else{/*nothing to do*/}
main.costoslookup1.setReadonly(true);
main.syLookup2.setReadonly(true);
},
// inserting record / data for external user
personaLiveForm1BeginInsert: function(inSender) {
this.global_ls_tipopersona.filter.setValue("idTipoPersona","28");
this.global_ls_grupoFamiliar.filter.setValue("idGrupoFamiliar","10586");
this.global_ls_pais.filter.setValue("idPais", "49");
this.global_ls_tipopersona.update();
this.global_ls_grupoFamiliar.update();
this.global_ls_pais.update();
},
// updating record / data for external user
personaLiveForm1BeginUpdate: function(inSender) {
this.global_ls_tipopersona.filter.setValue("idTipoPersona","28");
this.global_ls_grupoFamiliar.filter.setValue("idGrupoFamiliar","10586");
this.global_ls_pais.filter.setValue("idPais", "49");
this.global_ls_tipopersona.update();
this.global_ls_grupoFamiliar.update();
this.global_ls_pais.update();
},
// onShow inscripciones educomLiveVariable1 will start update
Cursos_extracurricularesShow: function(inSender) {
this.educomLiveVariable1.filter.setValue("activo_retirado", true);
this.educomLiveVariable1.update();
},
// sometime appears a blnk space between the records in dojoGrid, maybe this script solve it!
educomLiveVariable1Success: function(inSender, inDeprecated) {
//main.educomDojoGrid.setSortIndex(2);
},
//onShow inscripciones inscpersonaeducomLiveVariable1 will start update
inscripcionesShow2: function(inSender) {
this.inscpersonaeducomLiveVariable1.update();
},
//when the insert begining the list of curses will filter by the active
inscpersonaeducomLiveForm1BeginInsert1: function(inSender) {
this.educomLiveVariable1.filter.setValue("activo_retirado", true);
this.educomLiveVariable1.update();
},
inscpersonaeducomLiveForm1InsertData1: function(inSender) {
var usuario_sistema= main.templateUsernameVar.data.dataValue;
var hoy= new Date().getTime();
var idpersona= this.personaLookup1.getDataValue().idPersona;
var idcurso= this.educomLookup1.getDataValue().idEducom;
var accion= "c-"+idpersona+"-"+idcurso;
var tabla= "inscpersonaeducom";
this.accionesLogEducom.setValue("usuario", usuario_sistema);
this.accionesLogEducom.setValue("accionRealizada", accion);
this.accionesLogEducom.setValue("tablaAfectada", tabla);
this.accionesLogEducom.setValue("fechaCreacion", hoy);
this.accionesLogEducom.setValue("fechaActualizacion", hoy);
this.logEducom.setDataSet(this.accionesLogEducom);
this.logEducom.insertData();
},
inscpersonaeducomLiveForm1UpdateData: function(inSender) {
var usuario_sistema= main.templateUsernameVar.data.dataValue;
var hoy= new Date().getTime();
var idpersona= this.personaLookup1.getDataValue().idPersona;
var idcurso= this.educomLookup1.getDataValue().idEducom;
var accion= "u-"+idpersona+"-"+idcurso;
var tabla= "inscpersonaeducom";
this.accionesLogEducom.setValue("usuario", usuario_sistema);
this.accionesLogEducom.setValue("accionRealizada", accion);
this.accionesLogEducom.setValue("tablaAfectada", tabla);
this.accionesLogEducom.setValue("fechaCreacion", hoy);
this.accionesLogEducom.setValue("fechaActualizacion", hoy);
this.logEducom.setDataSet(this.accionesLogEducom);
this.logEducom.insertData();
},
inscpersonaeducomLiveForm1DeleteData: function(inSender) {
var usuario_sistema= main.templateUsernameVar.data.dataValue;
var hoy= new Date().getTime();
var id= main.inscpersonaeducomDojoGrid.selectedItem.data.idInscPersonaEduCom;
var accion= "de-ideducom"+id;
var tabla= "inscpersonaeducom";
this.accionesLogEducom.setValue("usuario", usuario_sistema);
this.accionesLogEducom.setValue("accionRealizada", accion);
this.accionesLogEducom.setValue("tablaAfectada", tabla);
this.accionesLogEducom.setValue("fechaCreacion", hoy);
this.accionesLogEducom.setValue("fechaActualizacion", hoy);
this.logEducom.setDataSet(this.accionesLogEducom);
this.logEducom.insertData();
},
inscpersonaeducomLiveForm1BeginUpdate2: function(inSender) {
var hoy= new Date().getTime();
this.fechaActualizacionEditor1.setDataValue(hoy);
},
inscpersonaeducomLiveForm1BeginUpdate3: function(inSender) {
this.educomLiveVariable1.filter.setValue("activo_retirado", true);
this.educomLiveVariable1.update();
},
_end: 0
});

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
costosLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"matchMode":"anywhere","maxResults":100,"orderBy":"asc: nombreProducto ","type":"com.aprendoz_desarrollodb.data.Costos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"codigo_tipo.dataValue","targetProperty":"filter.tipoCosto"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"comunity_nombre.dataValue","targetProperty":"filter.nombreProducto"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Costos","related":["grado","sy"],"view":[
{"caption":"IdCosto","sortable":true,"dataIndex":"idCosto","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"NombreProducto","sortable":true,"dataIndex":"nombreProducto","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Valor","sortable":true,"dataIndex":"valor","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Nuevo","sortable":true,"dataIndex":"nuevo","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Obligatorio","sortable":true,"dataIndex":"obligatorio","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Positivo","sortable":true,"dataIndex":"positivo","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Anual","sortable":true,"dataIndex":"anual","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"TipoCosto","sortable":true,"dataIndex":"tipoCosto","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}
]}, {}]
}],
lsTipoCosto: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.aprendoz_desarrollodb.data.TipoCosto"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.TipoCosto","view":[
{"caption":"IdTipoCosto","sortable":true,"dataIndex":"idTipoCosto","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoCosto","sortable":true,"dataIndex":"tipoCosto","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
educomLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"matchMode":"anywhere","maxResults":100,"orderBy":"asc: costos.nombreProducto","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.Educom"}, {"onSuccess":"educomLiveVariable1Success"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Educom","related":["sy","costos"],"view":[
{"caption":"IdEducom","sortable":true,"dataIndex":"idEducom","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"EdadRequeridadFinal","sortable":true,"dataIndex":"edadRequeridadFinal","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"EdadRequeridaInicial","sortable":true,"dataIndex":"edadRequeridaInicial","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Comentario","sortable":true,"dataIndex":"comentario","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"CupoMinimo","sortable":true,"dataIndex":"cupoMinimo","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"CupoMaximo","sortable":true,"dataIndex":"cupoMaximo","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Lunes","sortable":true,"dataIndex":"lunes","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Hora1Lunes","sortable":true,"dataIndex":"hora1Lunes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"Hora2Lunes","sortable":true,"dataIndex":"hora2Lunes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Martes","sortable":true,"dataIndex":"martes","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"Hora1Martes","sortable":true,"dataIndex":"hora1Martes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Hora2Martes","sortable":true,"dataIndex":"hora2Martes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Miercoles","sortable":true,"dataIndex":"miercoles","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Hora1Miercoles","sortable":true,"dataIndex":"hora1Miercoles","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"Hora2Miercoles","sortable":true,"dataIndex":"hora2Miercoles","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"Jueves","sortable":true,"dataIndex":"jueves","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Hora1Jueves","sortable":true,"dataIndex":"hora1Jueves","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"Hora2Jueves","sortable":true,"dataIndex":"hora2Jueves","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"Viernes","sortable":true,"dataIndex":"viernes","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"Hora1Viernes","sortable":true,"dataIndex":"hora1Viernes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"Hora2Viernes","sortable":true,"dataIndex":"hora2Viernes","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"Sabado","sortable":true,"dataIndex":"sabado","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Hora1Sabado","sortable":true,"dataIndex":"hora1Sabado","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"Hora2Sabado","sortable":true,"dataIndex":"hora2Sabado","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Domingo","sortable":true,"dataIndex":"domingo","type":"java.lang.Byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Hora1Domingo","sortable":true,"dataIndex":"hora1Domingo","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"Hora2Domingo","sortable":true,"dataIndex":"hora2Domingo","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Profesor1","sortable":true,"dataIndex":"profesor1","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"Profesor2","sortable":true,"dataIndex":"profesor2","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"NumeroHoras","sortable":true,"dataIndex":"numeroHoras","type":"java.lang.Float","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ValorHonorarios","sortable":true,"dataIndex":"valorHonorarios","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"FechaAperturaCurso","sortable":true,"dataIndex":"fechaAperturaCurso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"FechaCierreCurso","sortable":true,"dataIndex":"fechaCierreCurso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"ValorTransporte","sortable":true,"dataIndex":"valorTransporte","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"TarifaAnticipado","sortable":true,"dataIndex":"tarifaAnticipado","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"CostoTransporte","sortable":true,"dataIndex":"costoTransporte","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"TipoEducom","sortable":true,"dataIndex":"tipoEducom","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cursos_search_cursos.dataValue","targetProperty":"filter.costos.nombreProducto"}, {}]
}]
}],
global_ls_costos: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.Costos"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Costos","view":[
{"caption":"IdCosto","sortable":true,"dataIndex":"idCosto","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"NombreProducto","sortable":true,"dataIndex":"nombreProducto","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Valor","sortable":true,"dataIndex":"valor","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Nuevo","sortable":true,"dataIndex":"nuevo","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Obligatorio","sortable":true,"dataIndex":"obligatorio","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Positivo","sortable":true,"dataIndex":"positivo","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Anual","sortable":true,"dataIndex":"anual","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"TipoCosto","sortable":true,"dataIndex":"tipoCosto","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}
]}, {}]
}],
global_tipo_curso: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"Actividades Formativas Recreativas\", \n\t\"dataValue\": \"AFR\"\n},\n{\n    \"name\": \"Escuelas PreDeportivas\", \n    \"dataValue\": \"EPD\"\n},\n{\n    \"name\": \"Equipos de Alto Desempeño\", \n    \"dataValue\": \"EAD\"\n}]","type":"EntryData"}, {}],
inscpersonaeducomLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"matchMode":"anywhere","maxResults":50,"orderBy":"desc: educom.activo_retirado, asc: educom.costos.nombreProducto","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.InscPersonaEduCom"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.InscPersonaEduCom","related":["educom","educom.costos","tipoPago","persona"],"view":[
{"caption":"IdInscPersonaEduCom","sortable":true,"dataIndex":"idInscPersonaEduCom","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Descuento","sortable":true,"dataIndex":"descuento","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"TomaTransporte","sortable":true,"dataIndex":"tomaTransporte","type":"java.lang.Byte","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Plazo","sortable":true,"dataIndex":"plazo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Beca","sortable":true,"dataIndex":"beca","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscripciones_cursos_texto.dataValue","targetProperty":"filter.educom.costos.nombreProducto"}, {}]
}]
}],
inscripciones_personas_combined_sv: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getPeopleInfoCombined","service":"aprendoz_desarrolloDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getPeopleInfoCombinedInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscripciones_search_people_text.dataValue","targetProperty":"search"}, {}]
}]
}]
}],
global_ls_personas: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.Persona"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscripciones_list_personas.selectedItem.idpersona","targetProperty":"filter.idPersona"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Persona","view":[
{"caption":"IdPersona","sortable":true,"dataIndex":"idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"apellido1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"apellido2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"nombre1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"nombre2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono","sortable":true,"dataIndex":"telefono","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Religion","sortable":true,"dataIndex":"religion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"NoDocumento","sortable":true,"dataIndex":"noDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Barrio","sortable":true,"dataIndex":"barrio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Municipio","sortable":true,"dataIndex":"municipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Departamento","sortable":true,"dataIndex":"departamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Eps","sortable":true,"dataIndex":"eps","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ViveCon","sortable":true,"dataIndex":"viveCon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"TipoSangre","sortable":true,"dataIndex":"tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"Sexo","sortable":true,"dataIndex":"sexo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":41,"subType":null},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":42,"subType":null},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":43,"subType":null},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":44,"subType":null},
{"caption":"Promocion","sortable":true,"dataIndex":"promocion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":45,"subType":null},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":46,"subType":null},
{"caption":"Profesion","sortable":true,"dataIndex":"profesion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":47,"subType":null},
{"caption":"Empresa","sortable":true,"dataIndex":"empresa","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":48,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":49,"subType":null},
{"caption":"Celular","sortable":true,"dataIndex":"celular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":50,"subType":null},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":51,"subType":null},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":52,"subType":null},
{"caption":"Parentesco","sortable":true,"dataIndex":"parentesco","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":53,"subType":null},
{"caption":"RutaM","sortable":true,"dataIndex":"rutaM","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":54,"subType":null},
{"caption":"RutaT","sortable":true,"dataIndex":"rutaT","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":55,"subType":null},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":56,"subType":null},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":57,"subType":null},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":58,"subType":null},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":59,"subType":null},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":60,"subType":null}
]}, {}]
}],
templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
insertInscAlumCosto: ["wm.Variable", {"type":"com.aprendoz_desarrollodb.data.InscAlumCosto"}, {}],
lsTipoPeriodoCurso: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"BIMESTRE\",\"dataValue\":\"BIMESTRE\"},{\"name\":\"SEMESTRE\",\"dataValue\":\"SEMESTRE\"}]","type":"EntryData"}, {}],
personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_desarrollodb.data.Persona"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Persona","related":["pais","tipoPersona","grupoFamiliar"],"view":[
{"caption":"IdPersona","sortable":true,"dataIndex":"idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"apellido1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"apellido2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"nombre1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"nombre2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono","sortable":true,"dataIndex":"telefono","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Religion","sortable":true,"dataIndex":"religion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"NoDocumento","sortable":true,"dataIndex":"noDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Barrio","sortable":true,"dataIndex":"barrio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Municipio","sortable":true,"dataIndex":"municipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Departamento","sortable":true,"dataIndex":"departamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Eps","sortable":true,"dataIndex":"eps","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ViveCon","sortable":true,"dataIndex":"viveCon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"TipoSangre","sortable":true,"dataIndex":"tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"Sexo","sortable":true,"dataIndex":"sexo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":41,"subType":null},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":42,"subType":null},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":43,"subType":null},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":44,"subType":null},
{"caption":"Promocion","sortable":true,"dataIndex":"promocion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":45,"subType":null},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":46,"subType":null},
{"caption":"Profesion","sortable":true,"dataIndex":"profesion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":47,"subType":null},
{"caption":"Empresa","sortable":true,"dataIndex":"empresa","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":48,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":49,"subType":null},
{"caption":"Celular","sortable":true,"dataIndex":"celular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":50,"subType":null},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":51,"subType":null},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":52,"subType":null},
{"caption":"Parentesco","sortable":true,"dataIndex":"parentesco","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":53,"subType":null},
{"caption":"RutaM","sortable":true,"dataIndex":"rutaM","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":54,"subType":null},
{"caption":"RutaT","sortable":true,"dataIndex":"rutaT","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":55,"subType":null},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":56,"subType":null},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":57,"subType":null},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":58,"subType":null},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":59,"subType":null},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":60,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personas_default_group.dataValue","targetProperty":"filter.grupoFamiliar.idGrupoFamiliar"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"personas_no_identidad.dataValue","targetProperty":"filter.noDocumento"}, {}]
}]
}],
global_ls_pais: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.Pais"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.Pais","view":[
{"caption":"IdPais","sortable":true,"dataIndex":"idPais","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Pais","sortable":true,"dataIndex":"pais","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
global_ls_grupoFamiliar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.GrupoFamiliar"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.GrupoFamiliar","view":[
{"caption":"IdGrupoFamiliar","sortable":true,"dataIndex":"idGrupoFamiliar","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"GrupoFamiliar","sortable":true,"dataIndex":"grupoFamiliar","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"GrupoLdap","sortable":true,"dataIndex":"grupoLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
global_ls_tipopersona: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollodb.data.TipoPersona"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollodb.data.TipoPersona","view":[
{"caption":"IdTipoPersona","sortable":true,"dataIndex":"idTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoPersona","sortable":true,"dataIndex":"tipoPersona","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
lsPlazo: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"Anticipado\", \n\t\"dataValue\": \"anticipado\"\n},\n{\n    \"name\": \"Mensual\", \n\t\"dataValue\": \"mensual\"\n}]","type":"EntryData"}, {}],
lsTipoDocumento: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"Cédula de Ciudadanía\", \n\t\"dataValue\": \"C.C\"\n},\n{\n    \"name\": \"NUIP\", \n\t\"dataValue\": \"N.U.I.P\"\n},\n{\n    \"name\": \"Cédula de Extranjería\", \n    \"dataValue\": \"C.E\"\n},\n{\n    \"name\": \"Tarjeta de Identidad\", \n    \"dataValue\": \"T.I\"\n},\n{\n    \"name\": \"Pasaporte\", \n    \"dataValue\": \"P.S\"\n}]","type":"EntryData"}, {}],
accionesLogEducom: ["wm.Variable", {"type":"com.aprendoz_desarrollodb.data.EducomLog"}, {}],
costosDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"520px","height":"520px","styles":{"backgroundColor":"#e8e8e8"},"title":"Costos","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
costosLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"412px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onBeginInsert":"costosLiveForm1BeginInsert","onSuccess":"costosLivePanel2.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"costosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idCostoEditor1: ["wm.Number", {"caption":"Id costo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idCosto","height":"30px","styles":{},"width":"100%"}, {}],
codigoEditor1: ["wm.Text", {"caption":"Código","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigo","height":"30px","maxChars":6,"required":true,"styles":{},"width":"100%"}, {}],
nombreProductoEditor1: ["wm.Text", {"caption":"Nombre","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombreProducto","height":"30px","maxChars":50,"required":true,"styles":{},"width":"100%"}, {}],
descripcionEditor1: ["wm.LargeTextArea", {"caption":"Descripción","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"72px","emptyValue":"emptyString","formField":"descripcion","height":"72px","maxChars":65535,"styles":{},"width":"100%"}, {}],
valorEditor1: ["wm.Number", {"caption":"Valor","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"valor","height":"30px","required":true,"width":"100%"}, {}],
nuevoEditor1: ["wm.Checkbox", {"caption":"Nuevo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"nuevo","height":"30px","width":"100%"}, {}],
obligatorioEditor1: ["wm.Checkbox", {"caption":"Obligatorio","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"obligatorio","height":"30px","width":"100%"}, {}],
positivoEditor1: ["wm.Checkbox", {"caption":"Positivo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"positivo","height":"30px","width":"100%"}, {}],
anualEditor1: ["wm.Checkbox", {"caption":"Anual","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"anual","height":"30px","width":"100%"}, {}],
tipoCostoSelectEditor1: ["wm.SelectMenu", {"caption":"Tipo costo","captionAlign":"right","captionSize":"140px","dataField":"idTipoCosto","dataType":"com.aprendoz_desarrollodb.data.TipoCosto","displayField":"tipoCosto","formField":"tipoCosto","height":"30px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lsTipoCosto","targetProperty":"dataSet"}, {}]
}]
}],
gradoLookup1: ["wm.Lookup", {"caption":"Grado ","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Grado","displayField":"grado","formField":"grado","height":"30px","required":true,"width":"100%"}, {}],
syLookup1: ["wm.Lookup", {"caption":"Año escolar","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Sy","displayField":"schoolYear","formField":"sy","height":"30px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
costosSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px","showing":false}, {"onclick":"costosLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"costosLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
costosCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px","imageIndex":35,"imageList":"app.silkIconList","width":"130px"}, {"onclick":"costosDialog.hide","onclick1":"costosLiveForm1.cancelEdit"}]
}]
}],
educomDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"920px","height":"920px","styles":{"backgroundColor":"#e8e8e8"},"title":"Cursos de educación Comunitaria","width":"600px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
educomLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"733px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"educomLiveForm1BeginInsert","onBeginUpdate":"educomLiveForm1BeginUpdate","onBeginUpdate1":"educomLiveForm1BeginUpdate1","onSuccess":"educomLivePanel2.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"educomDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.sy"}, {}]
}],
idEducomEditor1: ["wm.Number", {"caption":"Id","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idEducom","height":"30px","width":"100%"}, {}],
activoCheckbox4: ["wm.Checkbox", {"caption":"Activo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"activo_retirado","height":"30px","width":"180px"}, {}],
panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
edadRequeridadFinalEditor1: ["wm.Number", {"caption":"Edad años","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"edadRequeridadFinal","height":"30px","placeHolder":"desde","width":"287px"}, {}],
edadRequeridaInicialEditor1: ["wm.Number", {"caption":undefined,"captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"edadRequeridaInicial","height":"30px","helpText":"Definida la edad mínima y máxima","placeHolder":"hasta","width":"160px"}, {}]
}],
bimestralSemestralSelectEditor: ["wm.SelectMenu", {"caption":"Periodo","captionAlign":"right","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","displayField":"name","formField":"comentario","height":"30px","helpText":"Bimestral / Semestral","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lsTipoPeriodoCurso","targetProperty":"dataSet"}, {}]
}]
}],
panel2: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
date1: ["wm.Date", {"caption":"Fecha inicio y fin","captionAlign":"right","captionSize":"140px","emptyValue":"emptyString","formField":"fechaInicio","height":"30px","width":"287px"}, {}],
date2: ["wm.Date", {"caption":undefined,"captionAlign":"right","captionSize":"140px","emptyValue":"emptyString","formField":"fechaFin","height":"30px","width":"160px"}, {}]
}],
panel3: ["wm.Panel", {"height":"33px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
cupoMinimoEditor1: ["wm.Number", {"caption":"Cupo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"cupoMinimo","height":"30px","placeHolder":"mínimo","required":true,"width":"287px"}, {}],
cupoMaximoEditor1: ["wm.Number", {"caption":undefined,"captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"cupoMaximo","height":"30px","placeHolder":"máximo","required":true,"width":"160px"}, {}]
}],
tabLayers1: ["wm.TabLayers", {"height":"250px","styles":{"backgroundColor":"#ffffff"}}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Horario","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
left_column: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
Lunescheckbox1: ["wm.Checkbox", {"caption":"Lunes","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"lunes","height":"30px","width":"100%"}, {}],
checkbox1: ["wm.Checkbox", {"caption":"Martes","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"martes","height":"30px","width":"180px"}, {}],
Miercolescheckbox2: ["wm.Checkbox", {"caption":"Miercoles","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"miercoles","height":"30px","width":"180px"}, {}],
Juevescheckbox3: ["wm.Checkbox", {"caption":"Jueves","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"jueves","height":"30px","width":"180px"}, {}],
Viernescheckbox4: ["wm.Checkbox", {"caption":"Viernes","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"viernes","height":"30px","width":"180px"}, {}],
Sabadocheckbox5: ["wm.Checkbox", {"caption":"Sabado","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"sabado","height":"30px","width":"180px"}, {}],
Domingocheckbox6: ["wm.Checkbox", {"caption":"Domingo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"domingo","height":"30px","width":"180px"}, {}]
}],
center_column: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
hora1LunesEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Lunes","height":"30px","width":"100%"}, {}],
hora1MartesEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Martes","height":"30px","width":"100%"}, {}],
hora1MiercolesEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Miercoles","height":"30px","width":"100%"}, {}],
hora1JuevesEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Jueves","height":"30px","width":"100%"}, {}],
hora1ViernesEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Viernes","height":"30px","width":"100%"}, {}],
hora1SabadoEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Sabado","height":"30px","width":"100%"}, {}],
hora1DomingoEditor1: ["wm.Time", {"caption":"Hora inicio","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora1Domingo","height":"30px","width":"100%"}, {}]
}],
right_column: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
hora2LunesEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Lunes","height":"30px","width":"100%"}, {}],
hora2MartesEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Martes","height":"30px","width":"100%"}, {}],
hora2MiercolesEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Miercoles","height":"30px","width":"100%"}, {}],
hora2JuevesEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Jueves","height":"30px","width":"100%"}, {}],
hora2ViernesEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Viernes","height":"30px","width":"100%"}, {}],
hora2SabadoEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Sabado","height":"30px","width":"100%"}, {}],
hora2DomingoEditor1: ["wm.Time", {"caption":"Hora fin","captionAlign":"right","captionSize":"80px","emptyValue":"zero","formField":"hora2Domingo","height":"30px","width":"100%"}, {}]
}]
}]
}],
profesor1Editor1: ["wm.Number", {"caption":"Profesor #1","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"profesor1","height":"30px","placeHolder":"escriba el nombre del docente","required":true,"showing":false,"width":"100%"}, {}],
profesor2Editor1: ["wm.Number", {"caption":"Profesor #2","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"profesor2","height":"30px","placeHolder":"escriba el nombre del docente","required":true,"showing":false,"width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
numeroHorasEditor1: ["wm.Number", {"caption":"No. Horas","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"numeroHoras","height":"30px","placeHolder":"ingrese el número de horas","required":true,"width":"100%"}, {}],
valorHonorariosEditor1: ["wm.Number", {"caption":"Honorarios ($)","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"valorHonorarios","height":"30px","required":true,"width":"100%"}, {}]
}],
panel4: ["wm.Panel", {"height":"38px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fechaAperturaCursoEditor1: ["wm.DateTime", {"caption":"Oferta del curso","captionAlign":"right","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaAperturaCurso","height":"30px","width":"287px"}, {}],
fechaCierreCursoEditor1: ["wm.DateTime", {"caption":undefined,"captionAlign":"right","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaCierreCurso","height":"30px","helpText":"¿Qué es esto?<br>Oferta del curso indica las fechas en las que estará disponible para inscripción de la comúnidad.","width":"160px"}, {}]
}],
valorTransporteEditor1: ["wm.Number", {"caption":"Valor Transporte","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"valorTransporte","height":"30px","width":"100%"}, {}],
tarifaAnticipadoEditor1: ["wm.Number", {"caption":"Tarifa Anticipado","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"tarifaAnticipado","height":"30px","width":"100%"}, {}],
costoTransporteEditor1: ["wm.Number", {"caption":"Costo Transporte","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"costoTransporte","height":"30px","width":"100%"}, {}],
descripcionEditor2: ["wm.LargeTextArea", {"caption":"Descripcion","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"descripcion","height":"30px","maxChars":65535,"width":"100%"}, {}],
selectMenu1: ["wm.SelectMenu", {"caption":"Tipo curso","captionAlign":"right","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","displayField":"name","formField":"tipoEducom","height":"30px","helpText":"Seleccione entre <br>Actividades Formativas Recreativas<br>Escuelas PreDeportivas<br>Equipos de Alto Desempeño","width":"172%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_tipo_curso","targetProperty":"dataSet"}, {}]
}]
}],
costoslookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Costos","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Costos","displayExpression":"${nombreProducto}+\" - $\"+${valor}","displayField":"nombreProducto","formField":"costos","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"costoslookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"global_ls_costos","targetProperty":"dataSet"}, {}]
}]
}],
syLookup2: ["wm.Lookup", {"caption":"Año escolar","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Sy","displayField":"schoolYear","formField":"sy","height":"30px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
educomSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px","imageIndex":0,"imageList":"app.silkIconList","width":"119px"}, {"onclick":"educomLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"educomLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
educomCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px","imageIndex":35,"imageList":"app.silkIconList","width":"115px"}, {"onclick":"educomDialog.hide","onclick1":"educomLiveForm1.cancelEdit"}]
}]
}],
loadingDialog1: ["wm.LoadingDialog", {"caption":"Cargando volumen de datos. Espere por favor","serviceVariableToTrack":["costosLiveVariable1","lsTipoCosto"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
}]
}],
Inscipciones: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","desktopHeight":"450px","height":"450px","styles":{"backgroundColor":"#e8e8e8"},"title":"Inscripciones","width":"500px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
inscpersonaeducomLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"312px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"inscpersonaeducomLiveForm1BeginInsert","onBeginInsert1":"inscpersonaeducomLiveForm1BeginInsert1","onBeginUpdate":"inscpersonaeducomLiveForm1BeginUpdate","onBeginUpdate1":"inscpersonaeducomLiveForm1BeginUpdate1","onBeginUpdate2":"inscpersonaeducomLiveForm1BeginUpdate2","onBeginUpdate3":"inscpersonaeducomLiveForm1BeginUpdate3","onDeleteData":"inscpersonaeducomLiveForm1DeleteData","onInsertData":"inscpersonaeducomLiveForm1InsertData","onInsertData1":"inscpersonaeducomLiveForm1InsertData1","onSuccess":"inscpersonaeducomLivePanel1.popupLiveFormSuccess","onUpdateData":"inscpersonaeducomLiveForm1UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscpersonaeducomDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
fechaActualizacionEditor1: ["wm.DateTime", {"caption":"FechaActualizacion","captionAlign":"right","captionSize":"140px","emptyValue":"emptyString","formField":"fechaActualizacion","height":"30px","showing":false,"width":"100%"}, {}],
idInscPersonaEduComEditor1: ["wm.Number", {"caption":"Id","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idInscPersonaEduCom","height":"30px","width":"100%"}, {}],
panel6: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fechaCreacionEditor1: ["wm.Date", {"caption":"Fecha creación","captionAlign":"right","captionSize":"140px","formField":"fechaCreacion","height":"30px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}]
}],
tomaTransporteCheckbox1: ["wm.Checkbox", {"caption":"Toma transporte","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"tomaTransporte","height":"30px","width":"100%"}, {}],
checkbox2: ["wm.Checkbox", {"caption":"Activo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"activoRetirado","height":"30px","width":"180px"}, {}],
checkbox3: ["wm.Checkbox", {"caption":"Beca","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"beca","height":"30px","width":"180px"}, {}],
plazoSelect: ["wm.SelectMenu", {"caption":"Plazo","captionAlign":"right","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","displayField":"name","formField":"plazo","height":"30px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lsPlazo","targetProperty":"dataSet"}, {}]
}]
}],
descuentoEditor1: ["wm.Number", {"caption":"Descuento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"descuento","height":"30px","helpText":"Si la persona tiene un descuento especial, se debe ingresar aquí con valores en pesos","placeHolder":"Ingrese el valor del descuento","required":true,"styles":{},"width":"100%"}, {}],
tipoPagoLookup1: ["wm.Lookup", {"caption":"Tipo pago","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.TipoPago","displayField":"tipoPago","formField":"tipoPago","height":"30px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"tipoPagoLookup1.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
educomLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Curso","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Educom","displayExpression":"${costos.nombreProducto}+\" - \"+${tipoEducom}","displayField":"costos.nombreProducto","formField":"educom","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"educomLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"educomLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
personaLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Persona","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Persona","displayExpression":"${codigo}+\" \"+${apellido1}+\" \"+${apellido2}+\" \"+${nombre1}+\" \"+${nombre2}","displayField":"idPersona","formField":"persona","height":"30px","required":true,"styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_ls_personas","targetProperty":"dataSet"}, {}]
}]
}]
}],
insertPersonaCosto: ["wm.LiveForm", {"height":"20px","horizontalAlign":"left","verticalAlign":"top"}, {}]
}],
buttonBar2: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
inscpersonaeducomSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px","imageIndex":0,"imageList":"app.silkIconList","width":"114px"}, {"onclick":"inscpersonaeducomLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"inscpersonaeducomLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
inscpersonaeducomCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px","imageIndex":35,"imageList":"app.silkIconList","width":"126px"}, {"onclick":"Inscipciones.hide","onclick1":"inscpersonaeducomLiveForm1.cancelEdit"}]
}]
}],
personaDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","desktopHeight":"500px","height":"500px","title":"Registro de personas","width":"500px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
personaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"347px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onBeginInsert":"personaLiveForm1BeginInsert","onBeginUpdate":"personaLiveForm1BeginUpdate","onSuccess":"personaLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idPersonaEditor1: ["wm.Number", {"caption":"Id Persona","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idPersona","height":"30px","width":"100%"}, {}],
nombreLdapEditor1: ["wm.Text", {"caption":"NombreLdap","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombreLdap","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
claveEditor1: ["wm.Text", {"caption":"Clave","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"clave","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
codigoEditor2: ["wm.Text", {"caption":"Codigo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigo","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
emailEditor1: ["wm.LargeTextArea", {"caption":"Email","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"email","height":"30px","maxChars":65535,"showing":false,"width":"100%"}, {}],
activoRetiradoEditor1: ["wm.Checkbox", {"caption":"ActivoRetirado","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"activoRetirado","height":"30px","showing":false,"width":"100%"}, {}],
panel10: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
apellido1Editor1: ["wm.Text", {"caption":"Apellidos","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"apellido1","height":"30px","maxChars":45,"placeHolder":"1er apellido","width":"300px"}, {}],
apellido2Editor1: ["wm.Text", {"caption":undefined,"captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"apellido2","height":"30px","maxChars":45,"placeHolder":"2do apellido","width":"180px"}, {}]
}],
panel11: ["wm.Panel", {"height":"33px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
nombre1Editor1: ["wm.Text", {"caption":"Nombres","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombre1","height":"30px","maxChars":45,"placeHolder":"1er nombre","width":"300px"}, {}],
nombre2Editor1: ["wm.Text", {"caption":undefined,"captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombre2","height":"30px","maxChars":45,"placeHolder":"2do nombre","width":"100%"}, {}]
}],
nivelAcademicoEditor1: ["wm.Text", {"caption":"NivelAcademico","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nivelAcademico","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
fechaNacimientoEditor1: ["wm.DateTime", {"caption":"FechaNacimiento","captionAlign":"right","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaNacimiento","height":"30px","showing":false,"width":"100%"}, {}],
lugarNacimientoMunicipioEditor1: ["wm.Text", {"caption":"LugarNacimientoMunicipio","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"lugarNacimientoMunicipio","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
lugarNacimientoDepartamentoEditor1: ["wm.Text", {"caption":"LugarNacimientoDepartamento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"lugarNacimientoDepartamento","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
nacionalidadEditor1: ["wm.Text", {"caption":"Nacionalidad","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nacionalidad","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
direccionResidenciaEditor1: ["wm.LargeTextArea", {"caption":"DireccionResidencia","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"direccionResidencia","height":"30px","maxChars":500,"showing":false,"width":"100%"}, {}],
telefonoEditor1: ["wm.Text", {"caption":"Telefono","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"telefono","height":"30px","maxChars":45,"placeHolder":"télefono","width":"100%"}, {}],
telefono2Editor1: ["wm.Text", {"caption":"No. movil","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"telefono2","height":"30px","maxChars":45,"placeHolder":"movil","width":"100%"}, {}],
religionEditor1: ["wm.Text", {"caption":"Religion","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"religion","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
tipoDocumentoEditor1: ["wm.SelectMenu", {"caption":"Tipo documento","captionAlign":"right","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","displayField":"name","formField":"tipoDocumento","height":"30px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lsTipoDocumento","targetProperty":"dataSet"}, {}]
}]
}],
noDocumentoEditor1: ["wm.Text", {"caption":"No. documento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"noDocumento","height":"30px","maxChars":45,"placeHolder":"no. documento","width":"100%"}, {}],
lugarExpedicionMunicipioEditor1: ["wm.Text", {"caption":"LugarExpedicionMunicipio","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"lugarExpedicionMunicipio","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
lugarExpedicionDepartamentoEditor1: ["wm.Text", {"caption":"LugarExpedicionDepartamento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"lugarExpedicionDepartamento","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
barrioEditor1: ["wm.LargeTextArea", {"caption":"Barrio","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"barrio","height":"30px","maxChars":200,"showing":false,"width":"100%"}, {}],
municipioEditor1: ["wm.Text", {"caption":"Municipio","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"municipio","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
departamentoEditor1: ["wm.Text", {"caption":"Departamento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"departamento","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
saludPrepagadaEditor1: ["wm.Text", {"caption":"SaludPrepagada","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"saludPrepagada","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
epsEditor1: ["wm.Text", {"caption":"Eps","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"eps","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
numeroContratoSaludEditor1: ["wm.Text", {"caption":"NumeroContratoSalud","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"numeroContratoSalud","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
clinicaEmergenciaEditor1: ["wm.Text", {"caption":"ClinicaEmergencia","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"clinicaEmergencia","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
viveConEditor1: ["wm.Text", {"caption":"ViveCon","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"viveCon","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
tipoSangreEditor1: ["wm.Text", {"caption":"TipoSangre","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"tipoSangre","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
codigoFamiliaEditor1: ["wm.Text", {"caption":"CodigoFamilia","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigoFamilia","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
fechaIngresoEditor1: ["wm.DateTime", {"caption":"FechaIngreso","captionAlign":"right","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaIngreso","height":"30px","showing":false,"width":"100%"}, {}],
gradoIngresoEditor1: ["wm.Text", {"caption":"GradoIngreso","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"gradoIngreso","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
cursoIngresoEditor1: ["wm.Text", {"caption":"CursoIngreso","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"cursoIngreso","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
fechaRetiroEditor1: ["wm.DateTime", {"caption":"FechaRetiro","captionAlign":"right","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaRetiro","height":"30px","showing":false,"width":"100%"}, {}],
comentarioRetiroEditor1: ["wm.LargeTextArea", {"caption":"ComentarioRetiro","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"comentarioRetiro","height":"30px","maxChars":65535,"showing":false,"width":"100%"}, {}],
colegioAnteriorEditor1: ["wm.Text", {"caption":"ColegioAnterior","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"colegioAnterior","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
hijoDeExalumnoEditor1: ["wm.Checkbox", {"caption":"HijoDeExalumno","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"hijoDeExalumno","height":"30px","showing":false,"width":"100%"}, {}],
nombrePadreExalumnoEditor1: ["wm.LargeTextArea", {"caption":"NombrePadreExalumno","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombrePadreExalumno","height":"30px","maxChars":200,"showing":false,"width":"100%"}, {}],
promocionEditor1: ["wm.Text", {"caption":"Promocion","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"promocion","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
profesionEditor1: ["wm.Text", {"caption":"Profesion","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"profesion","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
empresaEditor1: ["wm.Text", {"caption":"Empresa","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"empresa","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
cargoEditor1: ["wm.Text", {"caption":"Cargo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"cargo","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
celularEditor1: ["wm.Text", {"caption":"Celular","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"celular","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
direccionOficinaEditor1: ["wm.LargeTextArea", {"caption":"DireccionOficina","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"direccionOficina","height":"30px","maxChars":500,"showing":false,"width":"100%"}, {}],
telefonoOficinaEditor1: ["wm.Text", {"caption":"TelefonoOficina","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"telefonoOficina","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
parentescoEditor1: ["wm.Text", {"caption":"Parentesco","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"parentesco","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
rutaMEditor1: ["wm.Text", {"caption":"RutaM","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"rutaM","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
rutaTEditor1: ["wm.Text", {"caption":"RutaT","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"rutaT","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
tomaAlmuerzoEditor1: ["wm.Checkbox", {"caption":"TomaAlmuerzo","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"tomaAlmuerzo","height":"30px","showing":false,"width":"100%"}, {}],
tomaMediasNuevesEditor1: ["wm.Checkbox", {"caption":"TomaMediasNueves","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"tomaMediasNueves","height":"30px","showing":false,"width":"100%"}, {}],
tomaSeguroAccidentesEditor1: ["wm.Checkbox", {"caption":"TomaSeguroAccidentes","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"tomaSeguroAccidentes","height":"30px","showing":false,"width":"100%"}, {}],
noPlaquetaEditor1: ["wm.Text", {"caption":"NoPlaqueta","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"noPlaqueta","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
matriculadoEditor1: ["wm.Checkbox", {"caption":"Matriculado","captionAlign":"right","captionSize":"140px","displayValue":false,"formField":"matriculado","height":"30px","showing":false,"width":"100%"}, {}],
inscAlumCursoIdInscAlumCursoEditor1: ["wm.Number", {"caption":"InscAlumCursoIdInscAlumCurso","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"inscAlumCursoIdInscAlumCurso","height":"30px","showing":false,"width":"100%"}, {}],
paisDomicilioEditor1: ["wm.Text", {"caption":"PaisDomicilio","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"paisDomicilio","height":"30px","maxChars":45,"showing":false,"width":"100%"}, {}],
codigoPostalEditor1: ["wm.Text", {"caption":"CodigoPostal","captionAlign":"right","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigoPostal","height":"30px","maxChars":8,"showing":false,"width":"100%"}, {}],
sexoSelectEditor: ["wm.SelectMenu", {"caption":"Genero","captionAlign":"right","captionSize":"140px","dataField":"dataValue","displayField":"dataValue","formField":"sexo","height":"30px","options":"Femenino, Masculino","width":"100%"}, {}],
grupoFamiliarLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Grupo familiar","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.GrupoFamiliar","displayField":"grupoFamiliar","formField":"grupoFamiliar","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_ls_grupoFamiliar","targetProperty":"dataSet"}, {}]
}]
}],
paisLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Pais","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.Pais","displayField":"pais","formField":"pais","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_ls_pais","targetProperty":"dataSet"}, {}]
}]
}],
tipoPersonaLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo persona","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollodb.data.TipoPersona","displayField":"tipoPersona","formField":"tipoPersona","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_ls_tipopersona","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
buttonBar3: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
personaSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px"}, {"onclick":"personaLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
personaCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px"}, {"onclick":"personaDialog.hide","onclick1":"personaLiveForm1.cancelEdit"}]
}]
}],
loadingDialog2: ["wm.LoadingDialog", {"serviceVariableToTrack":["educomLiveVariable1","inscpersonaeducomLiveVariable1"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"educomDojoGrid","targetProperty":"widgetToCover"}, {}]
}]
}],
loadingDialog3: ["wm.LoadingDialog", {"caption":"Cargando datos...","serviceVariableToTrack":["inscpersonaeducomLiveVariable1"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscpersonaeducomDojoGrid","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10","styles":{},"verticalAlign":"top"}, {}, {
MenuonTop: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"v","height":"58px","source":"resources/images/logos/logo.jpg","width":"240px"}, {}],
spacer1: ["wm.Spacer", {"height":"48px","styles":{},"width":"226px"}, {}],
SecurityComponents: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"252px"}, {}, {
templateUserNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","height":"26px","padding":"4","singleLine":false,"styles":{},"width":"237px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Bienvenid@, \" + ${templateUsernameVar.dataValue}","targetProperty":"caption"}, {}]
}]
}]
}],
logoutButton: ["wm.Button", {"border":"1","caption":"Salir","desktopHeight":"35px","height":"35px","imageIndex":42,"imageList":"app.silkIconList","margin":"4","styles":{}}, {"onclick":"varTemplateLogout"}]
}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
comunity_table: ["wm.FancyPanel", {"title":"Gestión de Educación Comunitaria"}, {}, {
educomLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"right","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"educomDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"educomLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"educomDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"educomSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
breadcrumbLayers1: ["wm.TabLayers", {"clientBorderColor":"#ffffff","headerWidth":"150px","layoutKind":"left-to-right","styles":{},"verticalButtons":true}, {}, {
costos: ["wm.Layer", {"border":"1","borderColor":"#ffffff","caption":"<img src=\"resources/images/buttons/pesos.png\" width=\"14px\" height=\"14px\">&nbsp;&nbsp;Costos","horizontalAlign":"left","roles":["7","10"],"styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
costosLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"costosDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"costosLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"costosDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"costosSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
top_header_extra: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{"backgroundColor":"#fee5ac"},"verticalAlign":"middle","width":"100%"}, {}, {
codigo_tipo: ["wm.Text", {"caption":undefined,"captionSize":"20px","disabled":true,"displayValue":"2","height":"30px","showing":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"2","targetProperty":"dataValue"}, {}]
}]
}],
comunity_nombre: ["wm.Text", {"caption":undefined,"captionSize":"150px","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"30px","mobileHeight":"100%","placeHolder":"ingrese nombre del producto a buscar","styles":{},"width":"300px"}, {"onchange":"costosLiveVariable1"}],
comunity_search: ["wm.Button", {"_classes":{"domNode":["Success"]},"border":"1","borderColor":"#51a351","caption":"Buscar","desktopHeight":"28px","height":"28px","imageIndex":67,"imageList":"app.silkIconList","mobileHeight":"100%","showing":false,"width":"105px"}, {"onclick":"costosLiveVariable1"}]
}],
costosLivePanel2: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"costosDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"costosLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"costosDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"costosSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
costosDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idCosto","title":"IdCosto","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"codigo","title":"Código","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nombreProducto","title":"Producto","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"valor","title":"Valor","width":"80px","align":"left","formatFunc":"wm_number_formatter","mobileColumn":false},
{"show":false,"field":"nuevo","title":"Nuevo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"obligatorio","title":"Obligatorio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"positivo","title":"Positivo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"anual","title":"Anual","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoCosto","title":"TipoCosto","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Código: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Producto: \" + ${nombreProducto}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Valor: \" + ${wm.runtimeId}.formatCell(\"valor\", ${valor}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollodb.data.Costos","height":"100%","localizationStructure":{},"minDesktopHeight":60,"styles":{"fontSize":"10px"}}, {"onCellDblClick":"costosLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"costosLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
costosGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
costosNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","height":"30px"}, {"onclick":"costosLivePanel2.popupLivePanelInsert"}],
costosUpdateButton: ["wm.Button", {"border":"1","caption":"Modificar","height":"30px"}, {"onclick":"costosLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"costosDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
costosDeleteButton: ["wm.Button", {"border":"1","caption":"Eliminar","height":"30px"}, {"onclick":"costosLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"costosDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}],
Cursos_extracurriculares: ["wm.Layer", {"border":"1","borderColor":"#ffffff","caption":"<img src=\"resources/images/buttons/cursos.png\" width=\"14px\" height=\"14px\">&nbsp;&nbsp;Cursos","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"Cursos_extracurricularesShow"}, {
educomLivePanel2: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"educomDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"educomLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"educomDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"educomSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
panel7: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#cd5555"},"verticalAlign":"middle","width":"100%"}, {}, {
cursos_search_cursos: ["wm.Text", {"caption":undefined,"changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"30px","placeHolder":"ingrese el nombre del curso","width":"300px"}, {"onchange":"educomLiveVariable1"}]
}],
educomDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idEducom","title":" ","width":"50px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"edadRequeridadFinal","title":"Mín. Edad","width":"60px","align":"left","formatFunc":"","editorProps":null,"expression":"${edadRequeridadFinal}+\" años\"","mobileColumn":false},
{"show":true,"field":"edadRequeridaInicial","title":"Max. Edad","width":"60px","align":"left","formatFunc":"","expression":"${edadRequeridaInicial}+\" años\"","mobileColumn":false},
{"show":false,"field":"comentario","title":"Comentario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaInicio","title":"Inicia","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"fechaFin","title":"Finaliza","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"cupoMinimo","title":"Mín. Cupo","width":"60px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cupoMaximo","title":"Máx. Cupo","width":"60px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lunes","title":"Lunes","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Lunes","title":"Hora1Lunes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Lunes","title":"Hora2Lunes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"martes","title":"Martes","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Martes","title":"Hora1Martes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Martes","title":"Hora2Martes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"miercoles","title":"Miercoles","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Miercoles","title":"Hora1Miercoles","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Miercoles","title":"Hora2Miercoles","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"jueves","title":"Jueves","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Jueves","title":"Hora1Jueves","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Jueves","title":"Hora2Jueves","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"viernes","title":"Viernes","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Viernes","title":"Hora1Viernes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Viernes","title":"Hora2Viernes","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"sabado","title":"Sabado","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Sabado","title":"Hora1Sabado","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Sabado","title":"Hora2Sabado","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"domingo","title":"Domingo","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hora1Domingo","title":"Hora1Domingo","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"hora2Domingo","title":"Hora2Domingo","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"profesor1","title":"Profesor1","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"profesor2","title":"Profesor2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"numeroHoras","title":"NumeroHoras","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"valorHonorarios","title":"ValorHonorarios","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaAperturaCurso","title":"FechaAperturaCurso","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaCierreCurso","title":"FechaCierreCurso","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"valorTransporte","title":"ValorTransporte","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tarifaAnticipado","title":"TarifaAnticipado","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"costoTransporte","title":"CostoTransporte","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoEducom","title":"TipoEducom","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idEducom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Mín. Edad: \" + ${wm.runtimeId}.formatCell(\"edadRequeridadFinal\", ${edadRequeridadFinal}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Max. Edad: \" + ${wm.runtimeId}.formatCell(\"edadRequeridaInicial\", ${edadRequeridaInicial}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inicia: \" + ${wm.runtimeId}.formatCell(\"fechaInicio\", ${fechaInicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Finaliza: \" + ${wm.runtimeId}.formatCell(\"fechaFin\", ${fechaFin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Mín. Cupo: \" + ${cupoMinimo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Máx. Cupo: \" + ${cupoMaximo}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"activoRetirado","title":"ActivoRetirado","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""}
],"dsType":"com.aprendoz_desarrollodb.data.Educom","height":"100%","minDesktopHeight":60,"styles":{"fontSize":"10px"}}, {"onCellDblClick":"educomLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"educomLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
educomGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","roles":["10"],"verticalAlign":"top","width":"100%"}, {}, {
educomNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","height":"30px"}, {"onclick":"educomLivePanel2.popupLivePanelInsert"}],
educomUpdateButton: ["wm.Button", {"border":"1","caption":"Modificar","height":"30px"}, {"onclick":"educomLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"educomDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
educomDeleteButton: ["wm.Button", {"border":"1","caption":"Eliminar","height":"30px"}, {"onclick":"educomLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"educomDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
Personas_abonados: ["wm.Layer", {"border":"1","borderColor":"#ffffff","caption":"<img src=\"resources/images/buttons/users.png\" width=\"14px\" height=\"14px\">&nbsp;&nbsp;Personas","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"personaLiveVariable1"}, {
personaLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"personaLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"personaDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"personaSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
panel12: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#74bbfb"},"verticalAlign":"middle","width":"100%"}, {}, {
personas_default_group: ["wm.Number", {"caption":undefined,"dataValue":10586,"displayValue":"10.586","height":"30px","showing":false}, {}],
personas_no_identidad: ["wm.Text", {"caption":undefined,"changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"30px","placeHolder":"ingrese No. de identidad","styles":{},"width":"300px"}, {"onchange":"personaLiveVariable1"}]
}],
personaDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idPersona","title":"IdPersona","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"apellido2","title":"Apellido2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombre1","title":"Nombre1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombre2","title":"Nombre2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefono","title":"Telefono","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoDocumento","title":"Documento","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"noDocumento","title":"No. Documento","width":"120px","align":"left","formatFunc":"","expression":"${tipoDocumento}+\" - \"+${noDocumento}","mobileColumn":false},
{"show":true,"field":"apellido1","title":"Nombre completo","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"expression":"${apellido1}+\" \"+${apellido2}+\" \"+${nombre1}+\" \"+${nombre2}","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"No. Documento: \" + ${wm.runtimeId}.formatCell(\"noDocumento\", ${noDocumento}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre completo: \" + ${wm.runtimeId}.formatCell(\"apellido1\", ${apellido1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"direccionResidencia","title":"DireccionResidencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefono2","title":"Telefono2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombreLdap","title":"NombreLdap","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"clave","title":"Clave","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codigo","title":"Codigo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"activoRetirado","title":"ActivoRetirado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nivelAcademico","title":"NivelAcademico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaNacimiento","title":"FechaNacimiento","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"lugarNacimientoMunicipio","title":"LugarNacimientoMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lugarNacimientoDepartamento","title":"LugarNacimientoDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nacionalidad","title":"Nacionalidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"religion","title":"Religion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lugarExpedicionMunicipio","title":"LugarExpedicionMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lugarExpedicionDepartamento","title":"LugarExpedicionDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"barrio","title":"Barrio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"municipio","title":"Municipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"departamento","title":"Departamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"saludPrepagada","title":"SaludPrepagada","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eps","title":"Eps","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"numeroContratoSalud","title":"NumeroContratoSalud","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"clinicaEmergencia","title":"ClinicaEmergencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"viveCon","title":"ViveCon","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoSangre","title":"TipoSangre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"sexo","title":"Sexo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codigoFamilia","title":"CodigoFamilia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaIngreso","title":"FechaIngreso","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"gradoIngreso","title":"GradoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"cursoIngreso","title":"CursoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaRetiro","title":"FechaRetiro","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"comentarioRetiro","title":"ComentarioRetiro","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"colegioAnterior","title":"ColegioAnterior","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"hijoDeExalumno","title":"HijoDeExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombrePadreExalumno","title":"NombrePadreExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"promocion","title":"Promocion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"profesion","title":"Profesion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"empresa","title":"Empresa","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"cargo","title":"Cargo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"celular","title":"Celular","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"direccionOficina","title":"DireccionOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefonoOficina","title":"TelefonoOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"parentesco","title":"Parentesco","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"rutaM","title":"RutaM","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"rutaT","title":"RutaT","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tomaAlmuerzo","title":"TomaAlmuerzo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tomaMediasNueves","title":"TomaMediasNueves","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tomaSeguroAccidentes","title":"TomaSeguroAccidentes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"noPlaqueta","title":"NoPlaqueta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"matriculado","title":"Matriculado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"inscAlumCursoIdInscAlumCurso","title":"InscAlumCursoIdInscAlumCurso","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"paisDomicilio","title":"PaisDomicilio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codigoPostal","title":"CodigoPostal","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"numeroTarjetaCredito","title":"NumeroTarjetaCredito","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"dsType":"com.aprendoz_desarrollodb.data.Persona","height":"100%","minDesktopHeight":60,"styles":{"fontSize":"10px"}}, {"onCellDblClick":"personaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personaLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
personaGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"30px","verticalAlign":"top","width":"100%"}, {}, {
personaNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","height":"30px"}, {"onclick":"personaLivePanel1.popupLivePanelInsert"}],
personaUpdateButton: ["wm.Button", {"border":"1","caption":"Modificar","height":"30px"}, {"onclick":"personaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
personaDeleteButton: ["wm.Button", {"border":"1","caption":"Eliminar","height":"30px"}, {"onclick":"personaLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
inscripciones: ["wm.Layer", {"border":"1","borderColor":"#ffffff","caption":"<img src=\"resources/images/buttons/users.png\" width=\"14px\" height=\"14px\">&nbsp;&nbsp;Inscripciones","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"inscripcionesShow","onShow1":"inscripcionesShow1","onShow2":"inscripcionesShow2"}, {
inscripciones_left_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,3,3,3","styles":{"backgroundColor":"#fafafa"},"verticalAlign":"top","width":"250px"}, {}, {
panel9: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#8cdd81"},"verticalAlign":"top","width":"100%"}, {}, {
inscripciones_search_people_text: ["wm.Text", {"caption":undefined,"changeOnKey":true,"dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","placeHolder":"ingrese el nombre de la persona","styles":{},"width":"100%"}, {"onchange":"inscripciones_personas_combined_sv"}]
}],
inscripciones_list_personas: ["wm.List", {"_classes":{"domNode":["Striped","GridListStyle"]},"columns":[
{"show":true,"field":"codigo","title":"Código","width":"60px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idpersona","title":"Idpersona","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nombreCompleto","title":"Nombre completo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Código: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre completo: \" + ${nombreCompleto}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"styles":{"fontSize":"10px"}}, {"onSelect":"global_ls_personas","onSelect1":"inscripciones_list_personasSelect1","onSelect2":"inscripciones_list_personasSelect2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscripciones_personas_combined_sv","targetProperty":"dataSet"}, {}]
}]
}]
}],
inscripciones_right_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
inscpersonaeducomLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Inscipciones","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"inscpersonaeducomLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"inscpersonaeducomDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"inscpersonaeducomSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
panel8: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#8cdd81"},"verticalAlign":"middle","width":"100%"}, {}, {
boolCheckActivo: ["wm.Checkbox", {"caption":"BoolCheckActivo","dataValue":true,"displayValue":true,"height":"30px","showing":false,"startChecked":true,"width":"130px"}, {}],
inscripciones_cursos_texto: ["wm.Text", {"caption":undefined,"changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"30px","placeHolder":"ingrese nombre del curso","styles":{},"width":"303px"}, {"onchange":"inscpersonaeducomLiveVariable1"}],
spacer2: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
inscripciones_clearFilter: ["wm.Button", {"_classes":{"domNode":["Success"]},"border":"1","borderColor":"#51a351","caption":"Restaurar","height":"30px","imageIndex":8,"imageList":"app.silkIconList","width":"130px"}, {"onclick":"inscripciones_clearFilterClick"}]
}],
inscpersonaeducomDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idInscPersonaEduCom","title":" ","width":"35px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaCreacion","title":"Fecha creación","width":"50px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"descuento","title":"Dto","width":"30px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"tomaTransporte","title":"Trans","width":"40px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idInscPersonaEduCom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Trans: \" + ${tomaTransporte}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Ins activa: \" + ${activoRetirado}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Beca: \" + ${beca}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"activoRetirado","title":"Ins activa","width":"60px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":true,"field":"beca","title":"Beca","width":"30px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"plazo","title":"Plazo","width":"56px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false}
],"dsType":"com.aprendoz_desarrollodb.data.InscPersonaEduCom","height":"100%","minDesktopHeight":60,"styles":{"fontSize":"10px"}}, {"onCellDblClick":"inscpersonaeducomLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"inscpersonaeducomLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
inscpersonaeducomGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
inscpersonaeducomNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","disabled":true,"height":"30px"}, {"onclick":"inscpersonaeducomLivePanel1.popupLivePanelInsert"}],
inscpersonaeducomUpdateButton: ["wm.Button", {"border":"1","caption":"Modificar","height":"30px"}, {"onclick":"inscpersonaeducomLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"inscpersonaeducomDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
inscpersonaeducomDeleteButton: ["wm.Button", {"border":"1","caption":"Eliminar","height":"30px"}, {"onclick":"inscpersonaeducomLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"inscpersonaeducomDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2013-2014 Colegio Rochester","height":"100%","padding":"4","width":"100%"}, {}]
}]
}],
logEducom: ["wm.LiveForm", {"height":"20px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}]
}]
}]
};

Main.prototype._cssText = '#main_costosDojoGrid{\
cursor: pointer;\
}\
#main_educomDojoGrid{\
cursor: pointer;\
}\
#main_inscripciones_list_personas{\
cursor: pointer;\
}\
#main_inscpersonaeducomDojoGrid{\
cursor: pointer;\
}\
#main_comunity_search{\
top: 8px !important;\
}\
#main_breadcrumbLayers1_decorator_button1 {\
background-color: #EEB422;\
color: #fff;\
border: 0px !important;\
}\
#main_breadcrumbLayers1_decorator_button2 {\
background-color: #BE2625;\
color: #fff;\
border: 0px !important;\
}\
#main_breadcrumbLayers1_decorator_button3 {\
background-color: #60AFFE;\
color: #fff;\
border: 0px !important;\
}\
#main_breadcrumbLayers1_decorator_button4{\
background-color: #4DBD33;\
color: #fff;\
border: 0px !important;\
}\
';
Main.prototype._htmlText = '';