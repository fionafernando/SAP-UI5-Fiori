sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";
 
	var BlockController = Controller.extend("sap.ui.demo.myFiori2.view.NewForm", { 
		onInit: function () {
			// set explored app's demo model on this sample
			// var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		   //oView.setModel(oModel);
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.myFiori2.model", "/products.json"));
			this.getView().setModel(oModel);
		},
		
		handleNavButtonPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.back("Detail");
		},

		onSliderMoved: function (event) {
			// var value = event.getParameter("value");
			// this.getView().byId("containerLayout").setWidth(value + "%");
		},

		onButtonClick : function(){
         alert("Edit Style");
	}
	}); 
	return BlockController; 
});