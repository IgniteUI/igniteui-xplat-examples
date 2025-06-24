//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateInitialGroups {
    //begin eventHandler
    public fun editorChangeUpdateInitialGroups(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        chart.initialGroups = args.newValue!!.toString();
    }
    //end eventHandler
}