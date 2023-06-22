sap.ui.define([
	"gvdpl/training/sandboxApp/util/Utils"
	],
	function (Utils) {
		return {
			
			formatDate: function(oDate) {
				if(Utils.isFalsy(oDate)) return "";
				const yyyy = oDate.getFullYear();
				let mm = oDate.getMonth() + 1; // Months start at 0!
				let dd = oDate.getDate();
				if (dd < 10) dd = '0' + dd;
				if (mm < 10) mm = '0' + mm;
				
				return dd + '.' + mm + '.' + yyyy;
			},
			
			

		};
	});