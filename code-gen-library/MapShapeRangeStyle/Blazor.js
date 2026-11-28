//begin eventHandler
const populationRanges = [
    {
        "fill": "yellow",
        "minimum": 5000,
        "maximum": 10000000
    },
    {
        "fill": "orange",
        "minimum": 10000000,
        "maximum": 100000000
    },
    {
        "fill": "red",
        "minimum": 100000000,
        "maximum": 500000000
    },
    {
        "fill": "brown",
        "minimum": 500000000,
        "maximum": 2000000000
    }
];
igRegisterScript("MapShapeRangeStyle", (sender, args) => {
    const record = args.getItems(args.startIndex, args.endIndex)[0];
    const population = record.getFieldValue("Population");
    const range = population == null ? null : populationRanges.find(band =>
        band.minimum <= population && population < band.maximum);
    args.fill = range ? range.fill : "Gray";
    args.stroke = "Black";
    args.strokeThickness = 0.5;
    args.opacity = 1;
}, false);
//end eventHandler
