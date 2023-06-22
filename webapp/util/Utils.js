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
		};
	});