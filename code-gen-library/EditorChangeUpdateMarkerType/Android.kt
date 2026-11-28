//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
import com.infragistics.mobile.controls.IgaMarkerType;
import com.infragistics.mobile.controls.IgaMarkerTypeCollection;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateMarkerType {
    //begin eventHandler
    public fun editorChangeUpdateMarkerType(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var item = sender as IgaPropertyEditorPropertyDescription;
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        
        val markerVal = IgaMarkerType.valueOf(item.primitiveValue.toString().uppercase());
        val markers = IgaMarkerTypeCollection();
        markers.add(markerVal);
        chart.markerTypes = markers;
    }
    //end eventHandler
}