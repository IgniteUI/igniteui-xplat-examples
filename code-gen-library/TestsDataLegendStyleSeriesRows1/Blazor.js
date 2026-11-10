igRegisterScript("TestsDataLegendStyleSeriesRows1", (sender, args) => {
		 switch (args.seriesTitle)
		 {
			 case "One":
				 args.titleText = "Series1";
				 args.titleTextColor = "blue";
				 break;
			 case "Two":
				 args.titleText = "Series2";
				 args.titleTextColor = "red";
				 break;
			 case "Three":
				 args.titleText = "Series3";
				 args.titleTextColor = "green";
				 break;
		 }
}, false);
