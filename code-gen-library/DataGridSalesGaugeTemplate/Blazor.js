//begin eventHandler
igRegisterScript("DataGridSalesGaugeTemplate", (s, args) => {
    const content = args.content;
    const info = args.cellInfo;
    const sales = info.rowItem.Sales;
    let gaugeValue = null;
    let gaugeBar = null;

    if (content.childElementCount === 0) {
        gaugeValue = document.createElement("span");
        gaugeValue.style.margin = "0px";
        gaugeValue.style.marginTop = "2px";
        gaugeValue.style.padding = "0px";
        gaugeValue.style.fontFamily = "Verdana";
        gaugeValue.style.fontSize = "13px";
        gaugeValue.style.textAlign = "center";

        gaugeBar = document.createElement("div");
        gaugeBar.style.background = "#7f7f7f";
        gaugeBar.style.padding = "0px";
        gaugeBar.style.margin = "0px";
        gaugeBar.style.height = "6px";
        gaugeBar.style.left = "0px";
        gaugeBar.style.top = "0px";
        gaugeBar.style.position = "relative";

        const gauge = document.createElement("div");
        gauge.style.background = "#dddddd";
        gauge.style.padding = "0px";
        gauge.style.margin = "0px";
        gauge.style.height = "4px";
        gauge.style.marginTop = "8px";
        gauge.style.width = "100%";
        gauge.appendChild(gaugeBar);

        content.style.verticalAlign = "center";
        content.style.lineHeight = "normal";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.height = "100%";
        content.style.width = "calc(100% - 2rem)";
        content.style.marginRight = "1rem";
        content.style.marginLeft = "1rem";

        content.appendChild(gauge);
        content.appendChild(gaugeValue);
    } else {
        const gauge = content.children[0];
        gaugeBar = gauge.children[0];
        gaugeValue = content.children[1];
    }

    if (sales < 400000) {
        gaugeValue.style.color = "rgb(211, 17, 3)";
        gaugeBar.style.background = "rgb(211, 17, 3)";
    } else if (sales < 650000) {
        gaugeValue.style.color = "Orange";
        gaugeBar.style.background = "Orange";
    } else {
        gaugeValue.style.color = "rgb(21, 190, 6)";
        gaugeBar.style.background = "rgb(21, 190, 6)";
    }

    let gaugeWidth = (sales / 990000) * 100;
    gaugeWidth = Math.min(100, gaugeWidth);
    gaugeBar.style.width = gaugeWidth + "%";

    gaugeValue.textContent = "$" + sales / 1000 + ",000";
}, false);
//end eventHandler
