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
		
		readEmployeeDetails: function() {
			const sPath = "/DetailsSet('11111111')";
			const sService = "/sap/opu/odata/sap/ZKBU_PROFILE_SRV";
			const oModel = new ODataModel(sService);
			
			return new Promise(function (resolve, reject) {
				oModel.read(sPath, {
					success: function(oData, oResponse) {
						resolve(oData);
					},
					error: function () {

					}
				});
			});
		}

	};
});