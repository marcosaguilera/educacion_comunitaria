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
        this.inscpersonaeducomLiveVariable1.filter.setValue("educom.activo_retirado", true);
        this.inscpersonaeducomLiveVariable1.filter.setValue("persona.idPersona", undefined);
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
		main.educomDojoGrid.setSortIndex(2);
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
	_end: 0
});