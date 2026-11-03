igRegisterScript("TestsRadialGaugePrependLabels", (sender, args) => {
		const o = CodeGenHelper.findByName("LabelPrependValue");
        const obj = JSON.parse(o["value"]);
         var v = obj.Text;
		args.label = v + args.value.toString();
}, false);
