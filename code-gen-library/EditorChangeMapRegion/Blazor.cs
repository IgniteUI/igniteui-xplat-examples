//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

public class EditorChangeMapRegion
{
    //begin eventHandler
    public Dictionary<string, Rect> MapRegions = new Dictionary<string, Rect>
    {
        { "Australia", new Rect() { Left = 81.5, Top = -52.0, Width = 98.0, Height = 56.0 } },
        { "Caribbean", new Rect() { Left = -92.9, Top = 5.4, Width = 35.1, Height = 25.8 } },
        { "Egypt", new Rect() { Left = 19.3, Top = 19.9, Width = 19.3, Height = 13.4 } },
        { "European", new Rect() { Left = -36.0, Top = 31.0, Width = 98.0, Height = 38.0 } },
        { "Hawaii", new Rect() { Left = -161.2, Top = 18.5, Width = 6.6, Height = 4.8 } },
        { "Japan", new Rect() { Left = 122.7, Top = 29.4, Width = 27.5, Height = 17.0 } },
        { "Poland", new Rect() { Left = 13.0, Top = 48.0, Width = 11.0, Height = 9.0 } },
        { "SouthAfrica", new Rect() { Left = 9.0, Top = -37.1, Width = 26.0, Height = 17.8 } },
        { "UnitedKingdom", new Rect() { Left = -15.0, Top = 49.5, Width = 22.5, Height = 8.0 } },
        { "UnitedStates", new Rect() { Left = -134.5, Top = 16.0, Width = 70.0, Height = 37.0 } },
        { "Uruguay", new Rect() { Left = -62.1, Top = -35.7, Width = 10.6, Height = 7.0 } }
    };

    public void EditorChangeMapRegion(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var name = args.NewValue.ToString();
        if (this.MapRegions.TryGetValue(name, out var region))
        {
            map.ZoomToGeographic(region);
        }
    }
    //end eventHandler
}
