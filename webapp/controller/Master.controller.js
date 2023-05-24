sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/util/Utils"
], function (Controller, Utils) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Master", {

		onInit: function () {

		},
		
		handleValueSubmit:function(){
			this.oRouter = this.getOwnerComponent().getRouter().navTo("detail", {});
		}

	});

});