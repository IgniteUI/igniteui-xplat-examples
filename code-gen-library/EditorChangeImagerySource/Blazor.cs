//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class EditorChangeImagerySource
{
    //begin eventHandler
    public void EditorChangeImagerySource(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var name = args.NewValue.ToString();
        if (name == "OpenStreetMaps")
        {
            map.BackgroundContent = new IgbOpenStreetMapImagery();
        }
        else
        {
            var imagery = new IgbArcGISOnlineMapImagery();
            imagery.MapServerUri = name;
            map.BackgroundContent = imagery;
        }
    }
    //end eventHandler
}
