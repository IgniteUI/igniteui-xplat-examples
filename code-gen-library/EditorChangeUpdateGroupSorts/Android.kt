//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

public class EditorChangeUpdateGroupSorts {
    //begin eventHandler
    public fun editorChangeUpdateGroupSorts(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        var groupSortsVal = args.newValue!!.toString();
        chart.groupSorts = groupSortsVal;      
    }
    //end eventHandler
}