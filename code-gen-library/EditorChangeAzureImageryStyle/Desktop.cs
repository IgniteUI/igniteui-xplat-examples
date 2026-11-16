//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
using System;
//end imports

public class EditorChangeAzureImageryStyle
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeAzureImageryStyle(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var imagery = map.BackgroundContent as AzureMapsImagery;
        if (imagery != null && Enum.TryParse(args.NewValue.ToString(), out AzureMapsImageryStyle style))
        {
            imagery.ImageryStyle = style;
        }
    }
    //end eventHandler
}
