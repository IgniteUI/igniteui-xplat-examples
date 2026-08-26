igRegisterScript("TestsRadialGaugeFormatLabelWithDecimals", (sender, args) => {
		if (args.value !== undefined)	{
            const s = args.value.toFixed(3);
            args.label = s;
        }
}, false);
