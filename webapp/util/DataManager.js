sap.ui.define([
	"sap/ui/model/odata/v2/ODataModel"
], function(ODataModel) {
	return {

		readMainModel: function() {
			const sPath = "/EmployeeSet";
			const sService = "/sap/opu/odata/sap/ZKBU_PROFILE_SRV";
			const oModel = new ODataModel(sService);

			return new Promise(function (resolve, reject) {
				oModel.read(sPath, {
					urlParameters: {
						"$expand": "ObjectsDetails"
					},
					success: function(oData, oResponse) {
						resolve(oData);
					},
					error: function () {

					}
				});
			});
		},
		
		readEmployeeDetails: function(sPernr) {
			const sPath = "/DetailsSet('" + sPernr + "')";
			const sService = "/sap/opu/odata/sap/ZKBU_PROFILE_SRV";
			const oModel = new ODataModel(sService);
			
			return new Promise(function (resolve, reject) {
				oModel.read(sPath, {
					success: function(oData, oResponse) {
						resolve(oData);
					},
					error: function(oError) {

					}
				});
			});
		},
		
		uploadDataToBackend: function(sPernr, oDataToSend) {
			const sPath = "/DetailsSet('" + sPernr + "')";
			const sService = "/sap/opu/odata/sap/ZKBU_PROFILE_SRV";
			const oModel = new ODataModel(sService);
			
			return new Promise(function (resolve, reject) {
				oModel.update(sPath, oDataToSend, {
					success: function(oData, oResponse) {
						resolve(oData);
					},
					error: function(oError) {

					}
				});
			});
		},

	};
});