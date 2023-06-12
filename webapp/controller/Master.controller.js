sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/util/Utils",
	"gvdpl/training/sandboxApp/util/DataManager"
], function (Controller, Utils, DataManager) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Master", {

		onInit: async function () {
			const oData = await DataManager.readMainModel();
			debugger;
		},
		
		onEmployeePress: function() {
			this.oRouter = this.getOwnerComponent().getRouter().navTo("detail", {});
		}

	});

});