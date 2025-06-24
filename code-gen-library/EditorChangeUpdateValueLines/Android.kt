//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateValueLines {
    //begin eventHandler
    public fun editorChangeUpdateValueLines(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var item = sender as IgaPropertyEditorPropertyDescription;
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        
        var valueLineType = item.primitiveValue!!;
        chart.valueLines = valueLineType;   
    }
    //end eventHandler
}