igRegisterScript("TestsRadialGaugeAlignLabels", (sender, args) => {
	    const o = CodeGenHelper.findByName("LabelAlignValues");
        const obj = JSON.parse(o["value"]);
		args.offsetX = obj.X;
        args.offsetY = obj.Y;
}, false);
