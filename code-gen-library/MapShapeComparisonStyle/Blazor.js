//begin eventHandler
const regionColors = {
    "Eastern Europe": "Red",
    "Central Asia": "Red",
    "Eastern Asia": "Red",
    "Southern Asia": "Orange",
    "Middle East": "Orange",
    "Northern Africa": "Orange",
    "Eastern Africa": "Yellow",
    "Western Africa": "Yellow",
    "Middle Africa": "Yellow",
    "Southern Africa": "Yellow",
    "Central America": "DodgerBlue",
    "Northern America": "DodgerBlue",
    "Western Europe": "DodgerBlue",
    "Southern Europe": "DodgerBlue",
    "Northern Europe": "DodgerBlue",
    "South America": "#22c928",
    "Melanesia": "#b64fff",
    "Micronesia": "#b64fff",
    "Polynesia": "#b64fff",
    "Australia": "#b64fff"
};
igRegisterScript("MapShapeComparisonStyle", (sender, args) => {
    const record = args.getItems(args.startIndex, args.endIndex)[0];
    const region = record.getFieldValue("Region");
    args.fill = Object.prototype.hasOwnProperty.call(regionColors, region) ? regionColors[region] : "Gray";
    args.stroke = "Black";
    args.strokeThickness = 0.5;
    args.opacity = 1;
}, false);
//end eventHandler
