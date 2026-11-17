//begin eventHandler
registerScript("WebTreeGridChangeSummaryCalculationMode", (sender, evtArgs) => {
    var treeGrid = document.getElementById("treeGrid");
	treeGrid.summaryCalculationMode = evtArgs.newValue;
});
//end eventHandler