igRegisterScript("TestsAssignStyleToSelectedMarkers", (sender, args) => {
        if (args.selectionHighlightingInfo != null)
        {                
            args.fill = "blue";
            args.stroke = "black";
            args.highlightingHandled = true;
        }
},false);

