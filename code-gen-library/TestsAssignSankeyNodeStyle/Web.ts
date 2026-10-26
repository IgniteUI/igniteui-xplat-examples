//begin imports
//end imports

export class TestsAssignSankeyNodeStyle
{
    //begin eventHandler
    public testsAssignSankeyNodeStyle(sender: any, args: { startIndex: number; fill: string })
    {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if (args.startIndex == 0) {
            args.fill = "purple";
        }
    }
    //end eventHandler
}
