igRegisterScript("TestsDataLegendStyleSeriesRows2", (sender, args) => {
		 switch (args.seriesTitle)
		 {
			 case "Financial1":
				 args.titleText = "F1";
				 args.titleTextColor = "blue";
				 break;
			 case "Financial2":
				 args.titleText = "F2";
				 args.titleTextColor = "orange";
				 break;
		 }
}, false);
