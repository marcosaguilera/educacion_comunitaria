dojo.declare("Main", wm.Page, {
	start: function() {
		var now= new Date().getTime();
        this.getSybyDate.input.setValue("f1", now);
        this.getSybyDate.update();
	},
	"preferredDevice": "desktop",
    
    myCurSy: function(){
        var sy= main.getSybyDate.getItem(0).data.idsy;
        return sy;
    },

	costosLiveForm1BeginInsert: function(inSender) {
	    this.gradoLookup1.setDisplayValue("EDUCACIÓN COMUNITARIA");
        this.syLookup2.setDisplayValue("2014-2015");
        this.lsTipoCosto.update();
	},
    
	educomLiveForm1BeginUpdate: function(inSender) {
        var count= main.global_ls_costos.getCount();      
        var tipo= 2;
        console.log(count);
        if(count === 0){
           main.global_ls_costos.filter.setValue("tipoCosto", 2);
           main.global_ls_costos.filter.setValue("sy.idSy", this.myCurSy());
           this.global_ls_costos.update(); 
        }else{/*nothing to do*/}   
        this.costoslookup1.disable();
        this.syLookup2.disable();
	},
    
	educomLiveForm1BeginInsert: function(inSender) {
		var count= main.global_ls_costos.getCount();
        var tipo = 2;
        console.log(count);
        if(count === 0){
           this.global_ls_costos.filter.setValue("tipoCosto", tipo);
           this.global_ls_costos.filter.setValue("sy.idSy", this.myCurSy());
           this.global_ls_costos.update();  
        }else{/*nothing to do*/}
        this.profesor1Editor1.setDataValue(0);
        this.profesor2Editor1.setDataValue(0);
        his.costoslookup1.enable();
        this.syLookup2.enable();      
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
        this.inscpersonaeducomLiveVariable1.filter.setValue("educom.costos.sy.idSy", 5);
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
        this.inscpersonaeducomLiveVariable1.filter.setValue("educom.costos.sy.idSy", 5);
        this.inscpersonaeducomLiveVariable1.filter.setValue("persona.idPersona", undefined);
        //this.inscpersonaeducomLiveVariable1.filter.clearData();
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
        var sy = this.myCurSy();
        this.educomLiveVariable1.filter.setValue("activoRetirado", true);
        this.educomLiveVariable1.filter.setValue("sy.idSy", this.myCurSy());
        this.educomLiveVariable1.update();
        this.global_ls_grados.update();
	},
    // sometime appears a blnk space between the records in dojoGrid, maybe this script solve it!
	educomLiveVariable1Success: function(inSender, inDeprecated) {
	    var count = this.educomLiveVariable1.getCount();
        this.cursos_totalcursos_activos.setCaption(count + " Cursos cargados" );
	},
    //onShow inscripciones inscpersonaeducomLiveVariable1 will start update
	inscripcionesShow2: function(inSender) {       
        //this.inscpersonaeducomLiveVariable1.update();
	},
    //when the insert begining the list of curses will filter by the active 
	inscpersonaeducomLiveForm1BeginInsert1: function(inSender) {
		this.educomLiveVariable1.filter.setValue("activo_retirado", true);
        this.educomLiveVariable1.filter.setValue("sy.idSy", 5);
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
	inscpersonaeducomLiveVariable1Success: function(inSender, inDeprecated) {
		this.inscpersonaeducomDojoGrid.setSortIndex(4);
	},
	educomLiveVariable1Success1: function(inSender, inDeprecated) {
		this.educomDojoGrid.setSortIndex(2);
	},
	templateUsernameVarSuccess: function(inSender, inDeprecated) {
		var user= main.templateUsernameVar.getData().dataValue;
        this.getUserDetails.input.setValue("username", user);
        this.getUserDetails.update();
	},
	generarReporteButtClick: function(inSender) {
    	var id= main.getUserDetails.getItem(0).data.id;
        var out = this.formato_salida.getDataValue();
        var clave= main.getUserDetails.getItem(0).data.c;    
        var formatType= "PDF";
        $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
            failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
            httpMethod: "POST",
            data:{ idp: id, 
                   pass: clave,
                   uri: "/aprendozreports/EXT001",
                   format: out                  
             }
        });
        inEvent.preventDefault();
	},
	generarReporteButt2Click: function(inSender) {
	    var id= main.getUserDetails.getItem(0).data.id;
        var clave= main.getUserDetails.getItem(0).data.c;   
        var out = this.formato_salida.getDataValue();
        var formatType= "PDF";
        $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
            failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
            httpMethod: "POST",
            data:{ idp: id, 
                   pass: clave,
                   uri: "/aprendozreports/EDU004",
                   format: out                  
             }
        });
        inEvent.preventDefault();
	},
  cursos_search_cursosChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var searchText = this.cursos_search_cursos.getDataValue();
        this.educomLiveVariable1.filter.setValue("costos.nombreProducto", searchText);
        this.educomLiveVariable1.filter.setValue("activoRetirado", true);
        this.educomLiveVariable1.filter.setValue("sy.idSy", this.myCurSy());
        this.educomLiveVariable1.update();
	},
	_end: 0
});