//begin eventHandler
igRegisterScript("WebGridPasteModeChange", (sender, evtArgs) => {
    var item = sender;
    var newVal = item.primitiveValue;
    this["pasteMode"] = newVal === "NewRecords" ? "Paste data as new records" : "Paste starting from active cell";
}, false);
//end eventHandler