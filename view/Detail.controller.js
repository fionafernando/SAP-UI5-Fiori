sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	
	"use strict";

var DetailController = Controller.extend("sap.ui.demo.myFiori2.view.Detail", { 
	onInit: function () {
			// set explored app's demo model on this sample			
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.myFiori2.model", "/products.json"));
			this.getView().setModel(oModel);
    },
	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	onAddNewProduct : function(evt){
       this.nav.to("AddNewProd")
	},
	handleListItemPress : function(evt){
        this.nav.to("NewForm");
   	}	
});
	return DetailController; 
});