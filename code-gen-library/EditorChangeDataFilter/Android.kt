//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeDataFilter {
    //begin eventHandler
    public fun editorChangeDataFilter(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        var filter = args.newValue.toString();
        chart.initialFilter = "(contains(Year," + "'" + filter + "'" + "))";
    }
    //end eventHandler
}