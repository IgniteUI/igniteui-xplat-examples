//begin eventHandler
igRegisterScript("DataGridPerformanceAvgSaleCellUpdating", (grid, args) => {
    const valuesIncreasedColor = "#4EB862";
    const valuesDecreasedColor = "#FF134A";

    const row = args.cellInfo.rowItem;
    const priceShiftUp = row.Change >= 0;
    const templ = args.cellInfo;

    const content = args.content;
    let sp;
    let icon;
    if (content.childElementCount > 0) {
        sp = content.children[0];
        icon = content.children[1];
    } else {
        content.style.textAlign = "right";
        sp = document.createElement("span");
        icon = document.createElement("span");
        sp.style.font = "13px Verdana";
        sp.style.verticalAlign = "center";
        content.appendChild(sp);
        content.appendChild(icon);
        icon.style.fontFamily = "Material Icons";
        icon.style.fontSize = "13px";
        icon.style.fontFeatureSettings = "liga";
        icon.style.verticalAlign = "center";
    }

    sp.textContent = "$" + (+templ.value).toFixed(2);

    if (sp.__isUp === undefined || sp.__isUp !== priceShiftUp) {
        sp.__isUp = priceShiftUp;
        if (priceShiftUp) {
            icon.style.color = valuesIncreasedColor;
            sp.style.color = valuesIncreasedColor;
        } else {
            icon.style.color = valuesDecreasedColor;
            sp.style.color = valuesDecreasedColor;
        }
    }
}, false);
//end eventHandler
