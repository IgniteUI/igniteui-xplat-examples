registerScript("TestsDataLegendHideRowOnSeriesTwo", (sender, args) => {
    if (args.seriesTitle == "Two")
		args.isRowVisible = false;
});
