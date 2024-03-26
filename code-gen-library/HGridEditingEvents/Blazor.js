//begin eventHandler
igRegisterScript("HGridEditingEvents", (ev) => {
    var d = ev.detail;

    if (d.column != null && d.column.field == "Debut") {
        if (d.newValue > today.getFullYear()) {
            d.cancel = true;
            alert("The debut year must be in the past!")
        }
    }
}, false);
//end eventHandler
