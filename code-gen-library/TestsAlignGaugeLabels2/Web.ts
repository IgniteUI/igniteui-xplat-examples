//begin imports
import { AlignLinearGraphLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsAlignGaugeLabels2
{
    //begin eventHandler
    public testsAlignGaugeLabels2(sender: any,args: AlignLinearGraphLabelEventArgs)
    {															
		 args.offsetX = 10
		 args.offsetY = 10
			
    }
    //end eventHandler
}