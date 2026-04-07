//begin imports
import { FormatLinearGraphLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsLinearGaugePrependLabels
{
    //begin eventHandler
    public testsLinearGaugePrependLabels(sender: any,args: FormatLinearGraphLabelEventArgs)
    {		
		const o = CodeGenHelper.findByName<any>("LabelPrependValue");
        const obj = JSON.parse(o.value.toString()   );
        var v = obj.Text;
    	args.label = v + args.value;
			
    }
    //end eventHandler
}