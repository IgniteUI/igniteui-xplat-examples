//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeAzureMapsApiKey
{
    //begin eventHandler
    public void EditorChangeAzureMapsApiKey(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        // One key, two places that need it. The overlay styles -- traffic, labels, hybrids -- draw
        // over a base map rather than replacing it, so the sample keeps a background imagery beneath
        // the tile series, and Azure asks both of them for the same key.
        var key = args.NewValue == null ? "" : args.NewValue.ToString();
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var series = CodeGenHelper.GetDescription<IgbGeographicTileSeries>("imagerySeries");

        var background = map.BackgroundContent as IgbAzureMapsImagery;
        if (background != null)
        {
            background.ApiKey = key;
        }
        var overlay = series.TileImagery as IgbAzureMapsImagery;
        if (overlay != null)
        {
            overlay.ApiKey = key;
        }
    }
    //end eventHandler
}
