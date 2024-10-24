//begin eventHandler
igRegisterScript("WebHierarchicalGridChangePinningConfig", (sender, evtArgs) => {
    var newPinningPosition = evtArgs.newValue === "Top" ? 0 : 1;
    var hierarchicalGrid = document.getElementById("grid");
    hierarchicalGrid.pinning.rows = newPinningPosition;
    var rowIsland1 = document.getElementsByTagName("igc-row-island")[0];
    rowIsland1.pinning.rows = newPinningPosition;
    var rowIsland2 = document.getElementsByTagName("igc-row-island")[1];
    if (rowIsland2) {
        rowIsland2.pinning.rows = newPinningPosition;
    }
    var rowIsland3 = document.getElementsByTagName("igc-row-island")[2];
    if (rowIsland3) {
        rowIsland3.pinning.rows = newPinningPosition;
    }
}, false);
//end eventHandler