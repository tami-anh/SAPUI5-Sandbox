sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"gvdpl/training/sandboxApp/model/models"
], function (UIComponent, Device, Models) {
	"use strict";

	return UIComponent.extend("gvdpl.training.sandboxApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			Models.initialize(this);
		}
	});
});