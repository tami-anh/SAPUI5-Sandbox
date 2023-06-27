sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("gvdpl.training.sandboxApp.controls.InputText", {
		metadata: {
			properties: {
					editMode: {type: "boolean", defaultValue: false}
			}
		},
		
		aggregations: {
			_Text: {
				type: "sap.m.Text",
				multiple: false,
			},
			_Input: {
				type: "sap.m.Input",
				multiple: false,
			}
		},
		
		_get_Text: function (){ 	return this.getAggregation("_Text");	},
		_get_Input: function(){ 	return this.getAggregation("_Input");	},
		
		init: function () {
		},
		
		renderer: function (oRm, oControl) {
			// oRm.write("<div");
			// 	oRm.writeControlData(oControl);
			// 	oRm.writeStyles();
			// // 	oRm.writeClasses();
			// oRm.write(">");
				
				// oRm.write("<div");
			if(oControl.getEditMode()) {
				oRm.renderControl(oControl._get_Input());
			} else {
				oRm.renderControl(oControl._get_Text());
			}
			// 	oRm.write(">");
				
				// oRm.write("</div>");
			
			// oRm.write("</div>");
		}
	});
});