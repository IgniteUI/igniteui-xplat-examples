igRegisterScript("TestsLinearGaugeThousandsLabels", (sender, args) => {
		let value = args.value;
		if (args.value > 1000) {
			value = args.value / 1000;
		}
		args.label = `$${value} K`;
}, false);
