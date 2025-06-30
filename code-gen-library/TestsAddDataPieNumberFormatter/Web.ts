//begin imports
import { IgcDataPieChartComponent } from 'igniteui-webcomponents-charts';
import { NumberFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataPieNumberFormatter
{

    //begin eventHandler
	//WPF: System.Action
    public testsAddDataPieNumberFormatter(){
		

		var dataPie = CodeGenHelper.getDescription<IgcDataPieChartComponent>("content");
		var formaters: NumberFormatSpecifier[] = [];
		var spec = new NumberFormatSpecifier();
		spec.locale = "en-US",
		spec.minimumIntegerDigits = 4,
		spec.minimumFractionDigits = 2,
		spec.maximumFractionDigits = 2,
			spec.useGrouping = false
        formaters.push(spec);
		dataPie.sliceLabelFormatSpecifiers = formaters;
		
		dataPie.othersSliceLabelFormatSpecifiers = formaters;

    }
    //end eventHandler

}