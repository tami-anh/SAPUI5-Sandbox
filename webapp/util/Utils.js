sap.ui.define([],
	function () {
		return {
			_getRouter: function() {
				this.oRouter = this.getOwnerComponent().getRouter();
			},
			
			isTruthy: function(sValue) {
            	if(sValue === undefined) return false;
            	if(sValue === null) return false;
            	if(sValue === "") return false;
            	if(sValue == 0) return false;   
            	return true;
			},
			
			isFalsy: function(sValue) {
        		if(sValue === undefined) return true;
        		if(sValue === null) return true;
        		if(sValue === "") return true;
            	if(sValue == 0) return true;
            	return false;
			},
			
			getText: function(sText){
				const oI18nModel = new sap.ui.model.resource.ResourceModel({
				    	bundleName: "gvdpl.training.sandboxApp.i18n.i18n"
				});
				
				const oTextResourceBundle = oI18nModel.getResourceBundle();
				return oTextResourceBundle.getText(sText);
			}
		};
	});