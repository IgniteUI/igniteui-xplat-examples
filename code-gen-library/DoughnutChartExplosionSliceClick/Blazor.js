// The chart consumes the event argument before the event returns.
igRegisterScript("DoughnutChartExplosionSliceClick", function (sender, args) {
    args.isExploded = !args.isExploded;
}, false);
