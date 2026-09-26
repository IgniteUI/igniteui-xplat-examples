igRegisterScript("TestsDataLegendCalcSummaryAdd100WDetails", (sender, args) => {
        let total = 100;

        for (const val of args.columnValues) {
            total += val;
        }
		
		args.summaryValue = total;		
        args.summaryLabel = "A:";
        args.summaryUnits = "S+100";
},false);

