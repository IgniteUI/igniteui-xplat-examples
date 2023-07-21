//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateMarkerType
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateMarkerType(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var item = (PropertyEditorPropertyDescription)sender;
        var value = (string)item.PrimitiveValue;
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
       
        var markerVal = (MarkerType)Enum.Parse(typeof(MarkerType), value);
        chart.MarkerTypes.Clear();
        chart.MarkerTypes.Add(markerVal);
    }
    //end eventHandler
}