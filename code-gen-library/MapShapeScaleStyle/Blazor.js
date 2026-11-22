//begin eventHandler
const populationColors = ["DodgerBlue", "yellow", "#c2f542", "#e8c902", "#e8b602", "#e87902", "brown"];
igRegisterScript("MapShapeScaleStyle", (sender, args) => {
    const record = args.getItems(args.startIndex, args.endIndex)[0];
    const population = record.getFieldValue("Population");
    let fill = "Gray";
    if (Number.isFinite(population) && population >= 5000 && population <= 2000000000) {
        const minimum = Math.log10(5000);
        const maximum = Math.log10(2000000000);
        const scaled = (Math.log10(population) - minimum) / (maximum - minimum);
        fill = populationColors[Math.round(scaled * (populationColors.length - 1))];
    }
    args.fill = fill;
    args.stroke = "Black";
    args.strokeThickness = 0.5;
    args.opacity = 1;
}, false);
//end eventHandler
