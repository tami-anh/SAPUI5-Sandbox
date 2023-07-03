sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/model/models",
	"gvdpl/training/sandboxApp/util/Formatter",
	"sap/ui/core/Fragment",
], function (Controller, Models, Formatter, Fragment) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Detail", {
		
		formatter: Formatter,
		
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.getRoute("detail").attachPatternMatched(this._handleRouteMatched, this);
		},
		
		onEditModePressAsync: async function() {
			const oController = this;
			const oDisplayPageLayout = oController.byId("displayPageLayout");
			oDisplayPageLayout.setVisible(false);
			
			if(!oController.oEditPageLayout) {
				oController.oEditPageLayout = await Fragment.load({
					name: "gvdpl.training.sandboxApp.view.fragments.EditPageLayout",
					controller: oController,
					addToDependents: false
				}).then(function(oFragment) {
					this.getView().insertContent(oFragment, 0);
				}.bind(this));
			}
			
			oController.oEditPageLayout.then(function() {
				const oEditPageLayout = this.byId("editPageLayout");
				oEditPageLayout.setVisible(true);
			}.bind(this));
			
		},
		
		handleClose: function () {
			const oLayoutModel = Models.getLayoutModel();
			this.oRouter.navTo("master");
			oLayoutModel.setProperty("/layout", "OneColumn");
		},
		
		handleFullScreen: function() {
			const oLayoutModel = Models.getLayoutModel();
			const oScreenModeModel = Models.getScreenModeModel();
			oScreenModeModel.setProperty("/isFullScreen", true);
			oLayoutModel.setProperty("/layout", "MidColumnFullScreen");
		},
		
		handleExitFullScreen: function() {
			const oLayoutModel = Models.getLayoutModel();
			const oScreenModeModel = Models.getScreenModeModel();
			oScreenModeModel.setProperty("/isFullScreen", false);
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
		},
		
		_handleRouteMatched: function(oEvent) {
			const oController = this;
			const oMainModel = Models.getMainModel();
			const sId = oEvent.getParameter("arguments").id;
			const sPernr = oMainModel.getData().results[sId].Pernr;
			const oDetailsData = Models.downloadDetailsModel(sPernr);
			const oLayoutModel = Models.getLayoutModel();
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
			
			//Bindowanie z mainModelu w ramach praktyki
			const oFlexBox = oController.byId("gvdFlexBox");
			oFlexBox.bindElement({ path: "/results/" + sId, model: "MainModel" });
			
		}

	});

});