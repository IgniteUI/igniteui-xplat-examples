//begin imports
import { FormatLinearGraphLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsLinearGaugeThousandsLabels
{
    //begin eventHandler
    public testsLinearGaugeThousandsLabels(sender: any,args: FormatLinearGraphLabelEventArgs)
    {		
		
		let value = args.value;
		if (args.value > 1000) {
			value = args.value / 1000;
		}
		args.label = `$${value} K`;

			
    }
    //end eventHandler
}