sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"gvdpl/training/sandboxApp/util/DataManager"
], function (JSONModel, Device, DataManager) {
	"use strict";

	return {
		
		initialize: function(oComponent) {
			this.oComponent = oComponent;
			this._createDeviceModel();
			this._createMainModel();
			this._createLayoutModel();
			this._createDetailsModel();
		},
		
		downloadMainModel: async function() {
			const oModels = this;
			const oMainModel = oModels.getMainModel();
			const oData = await DataManager.readMainModel();
			oMainModel.setProperty("/", oData);
			return oMainModel;
		},
		
		downloadDetailsModel: async function() {
			const oModels = this;
			const oDetailsModel = oModels.getDetailsModel();
			const oData = await DataManager.readEmployeeDetails();
			oDetailsModel.setProperty("/", oData);
			return oDetailsModel;
		},
		
		_createMainModel: function() {
			const oModel = new JSONModel({});                    
			this.getComponent().setModel(oModel, "MainModel");
		},
		
		_createDetailsModel: function() {
			const oModel = new JSONModel({});                    
			this.getComponent().setModel(oModel, "DetailsModel");
		},
		
		_createLayoutModel: function() {
			const oModel = new JSONModel({
				layout: "OneColumn"
			});
			this.getComponent().setModel(oModel, "LayoutModel");
		},

		_createDeviceModel: function() {
			const oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			this.getComponent().setModel(oModel, "device");
		},
		
		// GETTERS AND SETTERS
		getMainModel: function() {
			return this.getComponent().getModel("MainModel");
		},
		
		getDetailsModel: function() {
			return this.getComponent().getModel("DetailsModel");
		},
		
		// setMainModel: function(oMainModel) {
		// 	this.oMainModel = oMainModel;
		// },
		
		getLayoutModel: function() {
			return this.getComponent().getModel("LayoutModel");
		},
		
		getComponent: function() {
			return this.oComponent;
		}
	};
});