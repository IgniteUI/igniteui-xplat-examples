//begin eventHandler
igRegisterScript("DataGridAddressLinesTemplate", (s, args) => {
    const content = args.content;
    const item = args.cellInfo.rowItem;
    let span1 = null;
    let span2 = null;

    if (content.childElementCount === 0) {
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";
        content.style.verticalAlign = "center";
        content.style.lineHeight = "normal";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.height = "100%";
        content.style.width = "100%";
        content.style.color = "rgb(24, 29, 31)";
        span1 = document.createElement("span");
        span2 = document.createElement("span");
        content.appendChild(span1);
        content.appendChild(span2);
    } else {
        span1 = content.children[0];
        span2 = content.children[1];
    }

    span1.textContent = item.Street;
    span2.textContent = item.City + ", " + item.Country;
}, false);
//end eventHandler
