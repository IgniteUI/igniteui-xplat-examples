//begin imports
using Infragistics.Controls.Maps;
using System;
using System.Windows;
//end imports

public class MapNavigationOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void MapNavigationOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var region = new Rect(-134.5, 16.0, 70.0, 37.0);
        map.ZoomToGeographic(region);
    }
    //end eventHandler
}
