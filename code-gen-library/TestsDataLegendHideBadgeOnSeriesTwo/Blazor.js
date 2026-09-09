igRegisterScript("TestsDataLegendHideBadgeOnSeriesTwo", (sender, args) => {
    if (args.seriesTitle == "Two")
		args.isBadgeVisible = false;
},false);

