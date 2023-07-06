sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"gvdpl/training/sandboxApp/model/models"
], function(Controller, History, UIComponent, Models) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.BaseController", {

		getRouter : function() {
			//return UIComponent.getRouterFor(this);
			return this.getOwnerComponent().getRouter();
		},

		onNavBack: function() {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("master", {}, true /*no history*/);
				const oLayoutModel = Models.getLayoutModel();
				oLayoutModel.setProperty("/layout", "OneColumn");
				

			}
		}

	});

});