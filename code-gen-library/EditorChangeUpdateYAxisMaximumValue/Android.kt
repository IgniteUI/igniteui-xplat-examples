//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

public class EditorChangeUpdateYAxisMaximumValue {
    //begin eventHandler
    public fun editorChangeUpdateYAxisMaximumValue(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        val maximum = args.newValue.toString().toDoubleOrNull() ?: Double.NaN;
        CodeGenHelper.getDescription<IgaCategoryChart>("content")!!.yAxisMaximumValue = maximum;
    }
    //end eventHandler
}
