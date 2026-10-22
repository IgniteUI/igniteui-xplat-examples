igRegisterScript("TestsDataLegendStyleSummaryRowsByGroup2", (sender, args) => {
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "Summary";
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleText = "Summary";
				 args.titleTextColor = "red";
				 break;
		 }
}, false);
