//begin eventHandler
igRegisterScript("WebTreeGridChangeSummaryPosition", (sender, evtArgs) => {
    var treeGrid = document.getElementById("treeGrid");
	treeGrid.summaryPosition = evtArgs.newValue;
}, false);
//end eventHandler