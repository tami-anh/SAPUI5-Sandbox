sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {
		
		initialize: function(oComponent) {
			this.oComponent = oComponent;
			this._createDeviceModel();
			this._createMainModel();
		},
		
		_createMainModel: function() {
			const oModel = new JSONModel({
				results: [
					{
						"ProductID": 1,
						"ProductName": "Chai",
						"UnitsInStock": 39,
						"UnitsOnOrder": 10,
						"UnitPrice": 8,
						"SupplierID": 1,
						"Discontinued": false,
						"Supplier": {
						  "__deferred": {
						    "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(1)/Supplier"
						  }
						}
					},
					{
						"ProductID": 2,
						"ProductName": "Chang",
						"UnitsInStock": 81,
						"UnitsOnOrder": 7,
						"UnitPrice": 6,
						"SupplierID": 1,
						"Discontinued": true,
						"Supplier": {
						  "__deferred": {
						    "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(2)/Supplier"
						  }
						}
					},
					{
						"ProductID": 3,
						"ProductName": "Aniseed Syrup",
						"UnitsInStock": 100,
						"UnitsOnOrder": 6,
						"UnitPrice": 3,
						"SupplierID": 3,
						"Discontinued": false,
						"Supplier": {
						  "__deferred": {
						    "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/Products(3)/Supplier"
						  }
						}
					}
				]
			});
			
			this.getComponent().setModel(oModel, "MainModel");
		},

		_createDeviceModel: function() {
			const oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			this.getComponent().setModel(oModel, "device");
		},
		
		// GETTERS AND SETTERS
		getMainModel: function() {
			return this.oMainModel;
		},
		
		setMainModel: function(oMainModel) {
			this.oMainModel = oMainModel;
		},
		
		getComponent: function() {
			return this.oComponent;
		}
	};
});