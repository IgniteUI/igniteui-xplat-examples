//begin eventHandler
igRegisterScript("ShapeFileStyling", (o, e) => {
    // The event describes an item range; read its record through the current event API.
    var record = e.getItems(e.startIndex, e.endIndex)[0];
    var c = record.getFieldValue("Continent");
    if (c == "Africa") {
        e.fill = "#ECB912";
    } else if (c == "Asia") {
        e.fill = "#E11D1D";
    } else if (c == "Europe") {
        e.fill = "#2894EC";
    } else if (c == "South America" || c == "North America") {
        e.fill = "#0CC308";
    } else if (c == "Australia") {
        e.fill = "#B42AE9";
    } else {
        e.fill = "gray";
    }
    e.stroke = "black";
}, false);
//end eventHandler