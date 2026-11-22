//begin imports
using System;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
//end imports

public class MapOfflineImagerySourceChanged
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void MapOfflineImagerySourceChanged(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var response = CodeGenHelper.FindByName<ImageryRequestEventHandler>("MapOfflineImageryResponse");
        if (response == null) throw new InvalidOperationException("The sidecar's offline imagery response handler is not bound.");
        var source = args.NewValue.ToString();
        GeographicMapImagery imagery = source == "OpenStreetMaps"
            ? (GeographicMapImagery)new OpenStreetMapImagery() : new ArcGISOnlineMapImagery();
        imagery.IsDryRun = true;
        imagery.DryRunRequest += response;
        if (imagery is ArcGISOnlineMapImagery arcgis) arcgis.MapServerUri = source;
        map.BackgroundContent = imagery;
    }
    //end eventHandler
}
