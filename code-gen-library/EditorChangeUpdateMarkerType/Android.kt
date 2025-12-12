//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateMarkerType {
    //begin eventHandler
    public fun editorChangeUpdateMarkerType(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var item = sender as IgaPropertyEditorPropertyDescription;
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        
        var markerVal = item.primitiveValue!!;
        chart.markerTypes = markerVal;   
    }
    //end eventHandler
}