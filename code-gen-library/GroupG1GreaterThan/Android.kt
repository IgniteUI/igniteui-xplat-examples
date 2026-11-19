//begin imports
import com.infragistics.mobile.controls.IgaGridCustomFilterRequestedEventArgs
//end imports

public class GroupG1GreaterThan {
    //begin eventHandler
    public fun groupG1GreaterThan(sender: Any?, args: IgaGridCustomFilterRequestedEventArgs) {
        val factory = args.filterFactory!!
        val group = factory.property("Group")!!.isEqualTo("G1")!!
        val value = factory.property(args.column!!.field)!!.isGreaterThan(args.value)
        args.expression = group.and(value)
    }
    //end eventHandler
}
