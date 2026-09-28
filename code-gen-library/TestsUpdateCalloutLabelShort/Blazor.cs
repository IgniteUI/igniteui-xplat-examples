//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsUpdateCalloutLabelShort
{
    //begin eventHandler
    public void TestsUpdateCalloutLabelShort(IgbCalloutLabelUpdatingEventArgs args)
    {
        args.Label = "X";
    }
    //end eventHandler
}
