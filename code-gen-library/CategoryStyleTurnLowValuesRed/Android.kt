//begin imports
import com.infragistics.mobile.controls.IgaAssigningCategoryStyleEventArgs;
import com.infragistics.mobile.controls.IgaSeries;
import com.infragistics.mobile.controls.IgaBrush;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class CategoryStyleTurnLowValuesRed {
    //begin eventHandler
    public fun categoryStyleTurnLowValuesRed(sender: Any?, args: IgaAssigningCategoryStyleEventArgs) {
        var series = sender as IgaSeries;
        var items = args.getItems!!(args.startIndex, args.endIndex)!!;
        for (i in 0..< items.size) 
        {
            var item = items[i]!!;
            var value = series.getItemValue(item, "valueMemberPath") as Double;
            if (value < 60) {
                args.fill = IgaBrush.fromString("red");
            }
        }
    }
    //end eventHandler
}