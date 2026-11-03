//begin eventHandler
igRegisterScript("DataGridPriceDataBound", (grid, args) => {
    const item = args.cellInfo.rowItem;
    if (item === null) { return; }

    if (item.PriceHeat > 0) {
        const p = +item.PriceHeat;
        const minA = 1.0, maxA = 0.25;
        const minR = 1.0, maxR = 0.0;
        const minG = 1.0, maxG = 1.0;
        const minB = 1.0, maxB = 0.0;

        const a = minA + (maxA - minA) * p;
        let r = minR + (maxR - minR) * p;
        let g = minG + (maxG - minG) * p;
        let b = minB + (maxB - minB) * p;
        r = Math.round(r * 255.0);
        g = Math.round(g * 255.0);
        b = Math.round(b * 255.0);

        args.cellInfo.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else if (item.PriceHeat < 0) {
        const p = +item.PriceHeat * -1.0;
        const minA = 1.0, maxA = 0.25;
        const minR = 1.0, maxR = 1.0;
        const minG = 1.0, maxG = 0.0;
        const minB = 1.0, maxB = 0.0;

        const a = minA + (maxA - minA) * p;
        let r = minR + (maxR - minR) * p;
        let g = minG + (maxG - minG) * p;
        let b = minB + (maxB - minB) * p;
        r = Math.round(r * 255.0);
        g = Math.round(g * 255.0);
        b = Math.round(b * 255.0);

        args.cellInfo.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
        args.cellInfo.background = "white";
    }
}, false);
//end eventHandler
