igRegisterScript("TestsStyleDataAnnotationsShapes", (sender, args) => {
    const o = CodeGenHelper.findByName("DataAnnotationShapeStylingOptions");
    if (o === undefined) return;
    const array = JSON.parse(o.value.toString());

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const index = item.Index;
        if (index === -1) {
            styleShape(item, args);
            return;
        }
        if (index === args.dataIndex) {
            styleShape(item, args);
            return;
        }
    }
}, false);

// Hoisted from the Web.ts private styleShape method (registered scripts have no instance).
function styleShape(options, args) {
    if (options.Brush !== undefined && options.Brush !== "")
        args.shapeBrush = options.Brush;
    if (options.OutlineBrush !== undefined && options.OutlineBrush !== "")
        args.shapeOutline = options.OutlineBrush;
    if (options.Thickness !== "NaN")
        args.shapeThickness = options.Thickness;
}
