igRegisterScript("TestsAssignStyleToNegativeShapes", (sender, args) => {
    if (args.selectionHighlightingInfo != null && args.isNegativeShape){			
            args.fill  = "blue";
			args.stroke = "black";
			args.highlightingHandled = true;
		}
},false);

