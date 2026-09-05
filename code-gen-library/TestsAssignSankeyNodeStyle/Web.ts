//begin imports
import { IgcAssigningFlowStyleEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsAssignSankeyNodeStyle
{
    //begin eventHandler
    public testsAssignSankeyNodeStyle(sender: any, args: IgcAssigningFlowStyleEventArgs)
    {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if (args.startIndex == 0) {
            args.fill = "purple";
        }
    }
    //end eventHandler
}
