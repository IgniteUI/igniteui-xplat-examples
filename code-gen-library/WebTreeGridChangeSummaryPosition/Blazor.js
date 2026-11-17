//begin eventHandler
registerScript("WebTreeGridChangeSummaryPosition", (sender, evtArgs) => {
    var treeGrid = document.getElementById("treeGrid");
	treeGrid.summaryPosition = evtArgs.newValue;
});
//end eventHandler