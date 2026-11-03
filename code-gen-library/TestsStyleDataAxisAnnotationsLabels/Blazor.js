igRegisterScript("TestsStyleDataAxisAnnotationsLabels", (sender, args) => {
    let o = CodeGenHelper.findByName("AxisAnnotationStlingOtions");
    if (o === undefined)
        return;
    const obj = JSON.parse(o.value.toString());

    for (let i = 0; i < obj.length; i++)
    {
        var item = obj[i];
        var index = item["Index"];
        if (index == -1)
        {
            StyleShape(item, args);
            return;
        }
        if (index == args.dataIndex)
        {
            StyleShape(item, args);
            return;
        }
    }
}, false);

// Hoisted from the Web.ts private StyleShape method (registered scripts have no instance).
function StyleShape(options, args)
{
    if (options.Background !== undefined && options.Background != "")
        args.background = options.Background;
    if (options.BorderColor !== undefined)
        args.borderColor = options.BorderColor;
    if (options.TextColor !== undefined)
        args.textColor = options.TextColor;
    if (options.BorderThickness != "NaN")
        args.borderThickness = options.BorderThickness;
    if (options.BorderRadius != "NaN")
        args.borderRadius = options.BorderRadius;
    if (options.XAxisLabel !== undefined && options.XAxisLabel != "")
        args.xAxisLabel = options.XAxisLabel;
    if (options.YAxisLabel !== undefined && options.YAxisLabel != "")
        args.yAxisLabel = options.YAxisLabel;
}
