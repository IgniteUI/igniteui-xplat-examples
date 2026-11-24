//begin imports
import com.infragistics.mobile.controls.IgaGridCustomFilterRequestedEventArgs;
//end imports

public class GroupG1AndA {
    //begin eventHandler
    public fun groupG1AndA(sender: Any?, args: IgaGridCustomFilterRequestedEventArgs?) {
        val factory = args!!.filterFactory!!;
        args.expression = factory.property("Group")!!.isEqualTo(literalValue = "G1")!!
            .and(factory.property(args.column!!.field)!!.contains(subString = "A"));
    }
    //end eventHandler
}
