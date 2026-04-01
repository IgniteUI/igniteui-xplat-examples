//begin imports
import { AlignRadialGaugeLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsAlignGaugeLabels
{
    //begin eventHandler
    public testsAlignGaugeLabels(sender: any,args: AlignRadialGaugeLabelEventArgs)
    {															
		 args.offsetX = 15
		 args.offsetY = 12
			
    }
    //end eventHandler
}