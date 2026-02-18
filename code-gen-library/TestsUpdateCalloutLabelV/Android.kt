//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //Kotlin: Any?___String?
    public fun testsUpdateCalloutLabelV(sender: Any?, item: IgaCalloutLabelUpdatingEventArgs)
    {    
        var item = args.Item;
        args.label = item["Label"].ToString() + "-V-" + item["Value"].ToString();
    }
    //end eventHandler
}