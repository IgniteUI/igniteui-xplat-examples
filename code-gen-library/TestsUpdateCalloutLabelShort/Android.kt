//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelShort
{
    //begin eventHandler
    public fun testsUpdateCalloutLabelShort(sender: Any?, args: IgaCalloutLabelUpdatingEventArgs)
    {
        args.label = "X";
    }
    //end eventHandler
}
