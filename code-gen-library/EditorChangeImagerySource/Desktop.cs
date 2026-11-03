//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
using System;
//end imports

public class EditorChangeImagerySource
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeImagerySource(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var name = args.NewValue.ToString();
        if (name == "OpenStreetMaps")
        {
            map.BackgroundContent = new OpenStreetMapImagery();
        }
        else
        {
            var imagery = new ArcGISOnlineMapImagery();
            imagery.MapServerUri = name;
            map.BackgroundContent = imagery;
        }
    }
    //end eventHandler
}
