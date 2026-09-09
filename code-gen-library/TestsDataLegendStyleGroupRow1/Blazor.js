igRegisterScript("TestsDataLegendStyleGroupRow1", (sender, args) => {
    switch (args.groupName)
	{
		case "Group1":
			args.titleText = "Collection 1";
			args.titleTextColor = "blue";
			break;
		case "Group2":
			args.titleText = "Collection 2";
			args.titleTextColor = "red";
			break;			 
	}
},false);

