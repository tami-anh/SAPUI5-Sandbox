sap.ui.define([],
	function () {
		return {
			_getRouter: function() {
				this.oRouter = this.getOwnerComponent().getRouter();
			},
		};
	});