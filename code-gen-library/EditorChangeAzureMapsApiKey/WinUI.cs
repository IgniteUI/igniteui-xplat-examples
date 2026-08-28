//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
//end imports

public class EditorChangeAzureMapsApiKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeAzureMapsApiKey(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        // One key, two places that need it. The overlay styles -- traffic, labels, hybrids -- draw
        // over a base map rather than replacing it, so the sample keeps a background imagery beneath
        // the tile series, and Azure asks both of them for the same key.
        var key = args.NewValue == null ? "" : args.NewValue.ToString();
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var series = CodeGenHelper.GetDescription<GeographicTileSeries>("imagerySeries");

        var background = map.BackgroundContent as AzureMapsImagery;
        if (background != null)
        {
            background.ApiKey = key;
        }
        var overlay = series.TileImagery as AzureMapsImagery;
        if (overlay != null)
        {
            overlay.ApiKey = key;
        }
    }
    //end eventHandler
}
