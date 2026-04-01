//begin imports
import { FormatRadialGaugeLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsRadialGaugePrependLabels
{
    //begin eventHandler
    public testsRadialGaugePrependLabels(sender: any,args: FormatRadialGaugeLabelEventArgs)
    {		
		const o = CodeGenHelper.findByName<any>("LabelPrependValue");
        const obj = JSON.parse(o["value"]);
         var v = obj.Text;
		args.label = v + args.value.toString();
			
    }
    //end eventHandler
}