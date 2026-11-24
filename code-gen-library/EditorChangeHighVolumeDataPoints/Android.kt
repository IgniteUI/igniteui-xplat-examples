//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
//end imports

public class EditorChangeHighVolumeDataPoints {
    //begin eventHandler
    public fun editorChangeHighVolumeDataPoints(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        CategoryChartVolumeData.count = (args!!.newValue as Number).toInt();
    }
    //end eventHandler
}
