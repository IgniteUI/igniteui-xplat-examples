//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class EditorChangeAzureImageryStyle
{
    //begin eventHandler
    public void EditorChangeAzureImageryStyle(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var imagery = map.BackgroundContent as IgbAzureMapsImagery;
        if (imagery != null && Enum.TryParse(args.NewValue.ToString(), out AzureMapsImageryStyle style))
        {
            imagery.ImageryStyle = style;
        }
    }
    //end eventHandler
}
