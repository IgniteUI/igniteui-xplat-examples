//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateMarkerType
{

    //begin eventHandler
    public void EditorChangeUpdateMarkerType(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        //var item = CodeGenHelper.GetDescription<IgbPropertyEditorPanel>("editor").Properties.Where((p) => p.PropertyPath == "MarkerType").First();
        //var value = (string)item.PrimitiveValue;
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");

        var markerVal = (MarkerType)Enum.Parse(typeof(MarkerType), args.NewValue.ToString());
        chart.MarkerTypes.Clear();
        chart.MarkerTypes.Add(markerVal);
    }
    //end eventHandler
}