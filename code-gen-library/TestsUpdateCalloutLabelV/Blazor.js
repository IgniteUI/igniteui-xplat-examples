igRegisterScript("TestsUpdateCalloutLabelV", (sender, args) => {
       args.label = args.item["Label"] + "-V-" + args.item["Value"];
}, false);
