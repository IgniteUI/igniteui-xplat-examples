igRegisterScript("TestsDataLegendHideRowOnSeriesTwo", (sender, args) => {
    if (args.seriesTitle == "Two")
		args.isRowVisible = false;
},false);
