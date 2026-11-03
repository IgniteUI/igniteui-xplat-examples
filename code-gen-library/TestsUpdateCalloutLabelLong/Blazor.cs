//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsUpdateCalloutLabelLong
{
    //begin eventHandler
    public void TestsUpdateCalloutLabelLong(IgbCalloutLabelUpdatingEventArgs args)
    {
        args.Label = args.Label + " EXTENDED BY THE LABEL UPDATING EVENT";
    }
    //end eventHandler
}
