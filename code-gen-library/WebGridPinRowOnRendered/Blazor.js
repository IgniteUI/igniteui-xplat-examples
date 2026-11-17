//begin eventHandler
registerScript("WebGridPinRowOnRendered", (event) => {
        var grid = document.getElementById("grid");
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
});
//end eventHandler