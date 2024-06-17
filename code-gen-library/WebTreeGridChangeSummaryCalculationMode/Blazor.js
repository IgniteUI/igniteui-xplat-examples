//begin eventHandler
igRegisterScript("WebTreeGridChangeSummaryCalculationMode", (sender, evtArgs) => {
    var treeGrid = document.getElementById("treeGrid");
	treeGrid.summaryCalculationMode = evtArgs.newValue;
}, false);
//end eventHandler