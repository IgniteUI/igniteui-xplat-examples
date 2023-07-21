//begin eventHandler
igRegisterScript("WebTreeGridPinRowOnRendered", (event) => {
        var treeGrid = document.getElementById("treeGrid");
        treeGrid.data = [...tGrid.data];
        treeGrid.pinRow(1);
        treeGrid.pinRow(11);
}, false);
//end eventHandler