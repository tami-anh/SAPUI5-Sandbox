sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"gvdpl/training/sandboxApp/util/Utils",
	"gvdpl/training/sandboxApp/util/DataManager",
	"gvdpl/training/sandboxApp/model/models"
], function (Controller, MessageBox, Utils, DataManager, Models) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Master", {

		onInit: async function () {
			const oController = this;
			this.oRouter = this.getOwnerComponent().getRouter();
			
			try{
				await Promise.all([
					Models.downloadMainModel()                
				]);
			} catch(oError) {
				const sBackendErrorMessage = JSON.parse(oError.responseText).error.message.value;
				if(!sBackendErrorMessage){
					MessageBox.error(oError.responseText);
				} else {
					MessageBox.error(sBackendErrorMessage);
				}
			}
		},
		
		onEmployeePress: function(oEvent) {
			const oController = this;
			const oMainModel = oController.getView().getModel("MainModel");
			const oContext = oEvent.getSource().getBindingContext("MainModel");
			const sPath = oContext.sPath;
			const sId = sPath.split("/")[2];
			//const sPernr = oMainModel.getProperty(sPath).Pernr;
			this.oRouter.navTo("detail", {id: sId});
		}

	});

});