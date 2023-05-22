/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gvdpl/training/trainingApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});