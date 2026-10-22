igRegisterScript("TestsAssignStyleToNegativeShapes2", (sender, args) => {
   if (args.selectionHighlightingInfo != null && args.isNegativeShape){
			args.fill  = "blue";
    		args.stroke = "black";
    		args.strokeThickness = 2;
    		args.highlightingHandled = true;
		}
},false);

