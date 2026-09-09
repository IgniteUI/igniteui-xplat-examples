//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
//end imports

public class EditorChangeMapRegion
{
    //begin eventHandler
    public Dictionary<string, Infragistics.Controls.IGRect> MapRegions = new Dictionary<string, Infragistics.Controls.IGRect>
    {
        { "Australia", new Infragistics.Controls.IGRect(81.5, -52.0, 98.0, 56.0) },
        { "Caribbean", new Infragistics.Controls.IGRect(-92.9, 5.4, 35.1, 25.8) },
        { "Egypt", new Infragistics.Controls.IGRect(19.3, 19.9, 19.3, 13.4) },
        { "European", new Infragistics.Controls.IGRect(-36.0, 31.0, 98.0, 38.0) },
        { "Hawaii", new Infragistics.Controls.IGRect(-161.2, 18.5, 6.6, 4.8) },
        { "Japan", new Infragistics.Controls.IGRect(122.7, 29.4, 27.5, 17.0) },
        { "Poland", new Infragistics.Controls.IGRect(13.0, 48.0, 11.0, 9.0) },
        { "SouthAfrica", new Infragistics.Controls.IGRect(9.0, -37.1, 26.0, 17.8) },
        { "UnitedKingdom", new Infragistics.Controls.IGRect(-15.0, 49.5, 22.5, 8.0) },
        { "UnitedStates", new Infragistics.Controls.IGRect(-134.5, 16.0, 70.0, 37.0) },
        { "Uruguay", new Infragistics.Controls.IGRect(-62.1, -35.7, 10.6, 7.0) }
    };

    //WinUI: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeMapRegion(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var name = args.NewValue.ToString();
        if (this.MapRegions.TryGetValue(name, out var region))
        {
            map.ZoomToGeographic(region);
        }
    }
    //end eventHandler
}
