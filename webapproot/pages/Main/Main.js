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
        }else{
            //nothing to do
        }
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
    
	inscpersonaeducomLiveForm1BeginUpdate: function(inSender) {
		 var idp = main.inscpersonaeducomDojoGrid.selectedItem.data.persona.data.idPersona;
         var date= main.inscpersonaeducomDojoGrid.selectedItem.data.fechaCreacion;
         this.global_ls_personas.filter.setValue("idPersona", idp);
         this.fechaCreacionEditor1.disable();
         main.fechaCreacionEditor1.setDataValue(date);
         this.global_ls_personas.update();
	},
    
	inscpersonaeducomLiveForm1BeginInsert: function(inSender) {
		this.fechaCreacionEditor1.enable();
	},
    
	inscripciones_list_personasSelect1: function(inSender, inItem) {
		var idpersona = main.inscripciones_list_personas.selectedItem.data.idpersona;       
        this.inscpersonaeducomLiveVariable1.filter.setValue("persona.idPersona", idpersona);
        this.inscpersonaeducomLiveVariable1.update();
	},
    
	inscripciones_clearFilterClick: function(inSender) {
        this.inscripciones_cursos_texto.clear();
        this.inscripciones_search_people_text.clear();
		this.inscpersonaeducomLiveVariable1.filter.clearData();
        this.inscpersonaeducomLiveVariable1.update();
	},
    
	inscripciones_list_personasSelect2: function(inSender, inItem) {
		this.inscpersonaeducomNewButton.enable();
	},	
    
	inscripcionesShow1: function(inSender) {
		this.educomLiveVariable1.filter.clearData();
        this.cursos_search_cursos.clear();
        this.educomLiveVariable1.update();
	},
	_end: 0
});