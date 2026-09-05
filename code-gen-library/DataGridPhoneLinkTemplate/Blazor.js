//begin eventHandler
igRegisterScript("DataGridPhoneLinkTemplate", (s, args) => {
    const content = args.content;
    const item = args.cellInfo.rowItem;
    let link = null;

    if (content.childElementCount === 0) {
        link = document.createElement("a");
        content.style.verticalAlign = "center";
        content.style.justifyContent = "center";
        content.style.lineHeight = "normal";
        content.style.display = "inline-block";
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";
        content.style.color = "#4286f4";
        content.style.width = "100%";
        content.appendChild(link);
    } else {
        link = content.children[0];
    }

    link.href = "tel:" + item.Phone;
    link.textContent = item.Phone;
}, false);
//end eventHandler
