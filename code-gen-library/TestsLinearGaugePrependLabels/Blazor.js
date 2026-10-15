igRegisterScript("TestsLinearGaugePrependLabels", (sender, args) => {
		const o = CodeGenHelper.findByName("LabelPrependValue");
        const obj = JSON.parse(o.value.toString()   );
        var v = obj.Text;
    	args.label = v + args.value;
}, false);
