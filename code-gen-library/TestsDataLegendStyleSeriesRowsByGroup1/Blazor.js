igRegisterScript("TestsDataLegendStyleSeriesRowsByGroup1", (sender, args) => {
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleTextColor = "red";
				 break;
		 }
}, false);
