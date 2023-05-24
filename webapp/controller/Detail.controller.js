sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gvdpl/training/sandboxApp/model/models"
], function (Controller, Models) {
	"use strict";

	return Controller.extend("gvdpl.training.sandboxApp.controller.Detail", {

		onInit: function () {
			const oLayoutModel = Models.getLayoutModel();
			oLayoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
		},

	});

});