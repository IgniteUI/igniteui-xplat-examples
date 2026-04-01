//begin imports
import { AlignRadialGaugeLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsRadialGaugeAlignLabels
{
    //begin eventHandler
    public testsRadialGaugeAlignLabels(sender: any,args: AlignRadialGaugeLabelEventArgs)
    {		
	    const o = CodeGenHelper.findByName<any>("LabelAlignValues");
        const obj = JSON.parse(o["value"]);

		args.offsetX = obj.X;
        args.offsetY = obj.Y;
			
    }
    //end eventHandler
}