//begin eventHandler
// Cache by series and record so redraws keep each country's first chosen color.
const randomShapeColors = new WeakMap();
igRegisterScript("MapShapeRandomStyle", (sender, args) => {
    let colors = randomShapeColors.get(sender);
    if (!colors) {
        colors = new WeakMap();
        randomShapeColors.set(sender, colors);
    }
    const record = args.getItems(args.startIndex, args.endIndex)[0];
    let fill = colors.get(record);
    if (!fill) {
        const palette = ["#8C23D1", "#0E9759", "#B4D336", "#F2A464", "#D74545", "DodgerBlue"];
        fill = palette[Math.round(Math.random() * (palette.length - 1))];
        colors.set(record, fill);
    }
    args.fill = fill;
    args.stroke = "Black";
    args.strokeThickness = 0.5;
    args.opacity = 1;
}, false);
//end eventHandler
