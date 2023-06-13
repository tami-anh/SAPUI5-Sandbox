sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/model/models"
], function (Controller, Models) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Detail", {

		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRouteMatched(this._handleRouteMatched, this);
			const oLayoutModel = Models.getLayoutModel();
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
		},
		
		_handleRouteMatched: function(oEvent) {
			const oView = this.getView();
			const oContext = oEvent.getParameter("arguments").ctx;
			oView.setBindingContext(oContext);
			debugger;
		}

	});

});