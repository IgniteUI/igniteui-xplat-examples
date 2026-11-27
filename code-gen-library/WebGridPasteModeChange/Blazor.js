//begin eventHandler
registerScript("WebGridPasteModeChange", (sender, evtArgs) => {
    var item = sender;
    var newVal = item.primitiveValue;
    pasteMode = newVal === "NewRecords" ? "Paste data as new records" : "Paste starting from active cell";
});
//end eventHandler