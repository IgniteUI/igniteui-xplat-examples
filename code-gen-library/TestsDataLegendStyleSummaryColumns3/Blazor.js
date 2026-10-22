igRegisterScript("TestsDataLegendStyleSummaryColumns3", (sender, args) => {
		switch(args.valueMemberPath)
		{
			case "Open":
			case "[Open]":
				args.valueTextColor = "green";
				break;
			case "High":
			case "[High]":
				args.valueTextColor = "blue";
				break;
			case "Low":
			case "[Low]":
				args.valueTextColor = "orange";
				break;
			case "Close":
			case "[Close]":
				args.valueTextColor = "red";
				break;
		}
}, false);
