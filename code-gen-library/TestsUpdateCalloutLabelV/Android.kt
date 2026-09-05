//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    public fun testsUpdateCalloutLabelV(sender: Any?, args: IgaCalloutLabelUpdatingEventArgs)
    {    
        var item = args.item as Map<*, *>;
        args.label = item["Label"].toString() + "-V-" + item["Value"].toString();
    }
    //end eventHandler
}