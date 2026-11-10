igRegisterScript("CategoryStyleTurnLowValuesRed", (sender, args) => {
        var series = sender;
        var items = args.getItems(args.startIndex, args.endIndex);
        for (var i = 0; i < items.length; i++)
        {
            var item = items[i];
            var value = series.getItemValue(item, "valueMemberPath");
            if (value < 60) {
                args.fill = "red";
            }
        }
}, false);
