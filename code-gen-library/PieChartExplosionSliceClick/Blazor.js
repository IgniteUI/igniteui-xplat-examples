// The chart reads these arguments synchronously before completing the click.
igRegisterScript("PieChartExplosionSliceClick", function (sender, args) {
    args.isExploded = !args.isExploded;
    args.isSelected = false;
}, false);
