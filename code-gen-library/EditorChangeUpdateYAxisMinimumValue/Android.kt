//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;
import java.lang.Double

public class EditorChangeUpdateYAxisMinimumValue {
    //begin eventHandler
    public fun editorChangeUpdateYAxisMinimumValue(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var yAxisMinimumVal = args.newValue!! as String;;
        CodeGenHelper.getDescription<IgaCategoryChart>("content")!!.yAxisMinimumValue = yAxisMinimumVal.toDoubleOrNull() ?: Double.NaN;      		
    }
    //end eventHandler
}