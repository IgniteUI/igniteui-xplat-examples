igRegisterScript("TestsDataLegendStyleSummaryRowsByGroup1", (sender, args) => {
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "The Total";
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleText = "The Total";
				 args.titleTextColor = "red";
				 break;
		 }
}, false);
