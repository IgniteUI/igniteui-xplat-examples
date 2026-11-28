//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class MapOfflineImagerySourceChanged
{
    //begin eventHandler
    public void MapOfflineImagerySourceChanged(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var source = args.NewValue.ToString();
        IgbGeographicMapImagery imagery = source == "OpenStreetMaps"
            ? (IgbGeographicMapImagery)new IgbOpenStreetMapImagery() : new IgbArcGISOnlineMapImagery();
        imagery.IsDryRun = true;
        imagery.DryRunRequestScript = "MapOfflineImageryResponse";
        if (imagery is IgbArcGISOnlineMapImagery arcgis) arcgis.MapServerUri = source;
        map.BackgroundContent = imagery;
    }
    //end eventHandler
}
