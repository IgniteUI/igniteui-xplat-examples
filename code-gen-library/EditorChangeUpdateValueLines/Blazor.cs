//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateValueLines
{

    //begin eventHandler
    public void EditorChangeUpdateValueLines(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        //var item = CodeGenHelper.GetDescription<IgbPropertyEditorPanel>("editor").Properties.Where((p) => p.PropertyPath == "MarkerType").First();
        //var value = (string)item.PrimitiveValue;
        //var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");

        var valueLineType = (ValueLayerValueMode)Enum.Parse(typeof(ValueLayerValueMode), args.NewValue.ToString());
        chart.ValueLines.Clear();
        chart.ValueLines.Add(valueLineType);
    }
    //end eventHandler
}