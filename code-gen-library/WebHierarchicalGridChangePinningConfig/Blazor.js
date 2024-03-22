//begin eventHandler
igRegisterScript("WebHierarchicalGridChangePinningConfig", (sender, evtArgs) => {
    var pinningConfig = new IgbPinningConfig();
	pinningConfig.columns = ColumnPinningPosition.End;
    if(evtArgs.newValue === "Bottom"){
        pinningConfig.rows = RowPinningPosition.Bottom;
    } else {
        pinningConfig.rows = RowPinningPosition.Top;
    } 
	var hierarchicalGrid = document.getElementById("hierarchicalGrid");
	hierarchicalGrid.pinning = pinningConfig;
	var rowIsland1 = document.getElementById('rowIsland1');
    rowIsland1.pinning = pinningConfig;
	var rowIsland2 = document.getElementById('rowIsland2');
	if(rowIsland2) {
        rowIsland2.pinning = pinningConfig;
    }
    var rowIsland3 = document.getElementById('rowIsland3');
    if(rowIsland3) {
        rowIsland3.pinning = pinningConfig;
    }
}, false);
//end eventHandler