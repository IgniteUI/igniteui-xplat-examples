//begin eventHandler
igRegisterScript("DataGridPriceCellUpdating", (grid, args) => {
    const valuesIncreasedColor = "#4EB862";
    const valuesDecreasedColor = "#FF134A";

    const item = args.cellInfo.rowItem;
    const priceShiftUp = item.Change >= 0;
    const templ = args.cellInfo;

    if (args.isCanvasBased) {
        const resized = args.ensureCorrectSize();
        if (resized || args.cellInfo.isContentDirty) {
            args.renderStandardBackground();

            const context = args.context;
            let iconText = "trending_up";
            let iconColor = valuesIncreasedColor;

            const scale = window.devicePixelRatio;
            if (scale !== 1.0) {
                context.save();
                context.scale(scale, scale);
            }

            if (priceShiftUp) {
                iconText = "trending_up";
                iconColor = valuesIncreasedColor;
            } else {
                iconText = "trending_down";
                iconColor = valuesDecreasedColor;
            }

            const txt = "$" + (+templ.value).toFixed(2);
            context.font = "13px Verdana";
            const width = context.measureText(txt).width;

            context.font = "13px 'Material Icons'";
            const iconWidth = context.measureText(iconText).width;

            const totalWidth = width + iconWidth;
            context.font = "13px Verdana";
            context.fillStyle = iconColor;
            context.textBaseline = "top";
            context.fillText(txt, templ.width - (totalWidth + 5), (templ.height / 2.0) - 7);

            context.font = "13px 'Material Icons'";
            context.fillStyle = iconColor;
            context.textBaseline = "top";
            context.fillText(iconText, templ.width - (iconWidth + 5), (templ.height / 2.0) - 7);

            if (scale !== 1.0) {
                context.restore();
            }
        }
        return;
    }

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
            icon.textContent = "trending_up";
            icon.style.color = "#4EB862";
            sp.style.color = "#4EB862";
        } else {
            icon.textContent = "trending_down";
            icon.style.color = "#FF134A";
            sp.style.color = "#FF134A";
        }
    }
}, false);
//end eventHandler
