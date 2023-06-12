sap.ui.define([
	"sap/ui/model/odata/v2/ODataModel"
], function(ODataModel) {
	return {

		readMainModel: function() {
			const sPath = "/EmployeeSet";
			const sService = "/sap/opu/odata/sap/ZKBU_PROFILE_SRV";
			const oModel = new oDataModel(sService);

			return new Promise(function (resolve, reject) {
				oModel.read(sPath, {
					urlParameters: {
						"$expand": "Details"
					},
					success: function(oData, oResponse) {
						resolve(oData);
					},
					error: function () {

					}
				});
			});
		},

	};
});