//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelLong
{
    //begin eventHandler
    public fun testsUpdateCalloutLabelLong(sender: Any?, args: IgaCalloutLabelUpdatingEventArgs)
    {
        args.label = args.label.toString() + " EXTENDED BY THE LABEL UPDATING EVENT";
    }
    //end eventHandler
}
