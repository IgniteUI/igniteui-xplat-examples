//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateInitialSummaries {
    //begin eventHandler
    public fun editorChangeUpdateInitialSummaries(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        var intialSummaryVal = args.newValue!!.toString();
        chart.initialSummaries = intialSummaryVal;   
    }
    //end eventHandler
}