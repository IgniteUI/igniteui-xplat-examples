//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateInitialFilter {
    //begin eventHandler
    public fun editorChangeUpdateInitialFilter(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var chart = CodeGenHelper.getDescription<IgcCategoryChart>("content")!!;
        var intialFilterVal = args.newValue!!.toString();
        chart.initialFilter = intialFilterVal;   
    }
    //end eventHandler
}