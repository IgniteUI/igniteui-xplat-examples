//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaCategoryChart;
import com.infragistics.mobile.controls.IgaValueModeCollection;
import com.infragistics.mobile.controls.IgaValueLayerValueMode;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateValueLines {
    //begin eventHandler
    public fun editorChangeUpdateValueLines(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var item = sender as IgaPropertyEditorPropertyDescription;
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        
        val valueLineType = IgaValueLayerValueMode.values().first { it.name.replace("_", "").equals(item.primitiveValue.toString(), ignoreCase = true) };
        val lines = IgaValueModeCollection();
        lines.add(valueLineType);
        chart.valueLines = lines;
    }
    //end eventHandler
}