//begin eventHandler
igRegisterScript("WebHierarchicalGridPinRowOnRendered", (event) => {
	    var hierarchicalGrid = document.getElementById("hierarchicalGrid") || document.getElementById("grid");
		hierarchicalGrid.pinRow(this.singersData[0].Photo);
		hierarchicalGrid.pinRow(this.singersData[1].Photo);
}, false);
//end eventHandler