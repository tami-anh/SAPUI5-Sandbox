sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/model/models",
], function (Controller, Models) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Detail", {

		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.getRoute("detail").attachPatternMatched(this._handleRouteMatched, this);
		},
		
		handleClose: function () {
			const oLayoutModel = Models.getLayoutModel();
			this.oRouter.navTo("master");
			oLayoutModel.setProperty("/layout", "OneColumn");
		},
		
		handleFullScreen: function () {
			const oLayoutModel = Models.getLayoutModel();
			const oScreenModeModel = Models.getScreenModeModel();
			oScreenModeModel.setProperty("/isFullScreen", true);
			oLayoutModel.setProperty("/layout", "MidColumnFullScreen");
		},
		
		handleExitFullScreen: function () {
			const oLayoutModel = Models.getLayoutModel();
			const oScreenModeModel = Models.getScreenModeModel();
			oScreenModeModel.setProperty("/isFullScreen", false);
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
		},
		
		_handleRouteMatched: function(oEvent) {
			const oController = this;
			const oView = oController.getView();
			const sPernr = oEvent.getParameter("arguments").pernr;
			const oDetailsData = Models.downloadDetailsModel(sPernr);
			const oLayoutModel = Models.getLayoutModel();
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
		}

	});

});