//begin imports
import { FormatRadialGaugeLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsRadialGaugeFormatLabelWithDecimals
{
    //begin eventHandler
    public testsRadialGaugeFormatLabelWithDecimals(sender: any,args: FormatRadialGaugeLabelEventArgs)
    {		
		if (args.value !== undefined)	{
            const s: string = args.value.toFixed(3); 
            args.label = s;
        }
			
    }
    //end eventHandler
}