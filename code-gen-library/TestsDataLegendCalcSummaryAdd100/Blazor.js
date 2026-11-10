igRegisterScript("TestsDataLegendCalcSummaryAdd100", (sender, args) => {
    let total = 100;
    for (const val of args.columnValues) {
        total += val;
    }

	args.summaryValue = total;
},false);

