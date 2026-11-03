igRegisterScript("TestsDataLegendStyleSummaryColumnsByGroup1", (sender, args) => {
        switch (args.groupName)
		{
			case "Group1":
				args.labelText = "Value";
				args.labelTextColor = "blue";
				args.valueTextColor = "blue";
				break;
			case "Group2":
				args.labelText = "Value";
				args.labelTextColor = "red";
				args.valueTextColor = "red";
			   break;
		}
}, false);
