//begin imports
using Infragistics.Controls.Maps;
using System;
//end imports

public class MapNavigationOnViewInit
{
    //begin eventHandler
    //WinUI: System.Action
    public void MapNavigationOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var region = new Infragistics.Controls.IGRect(-134.5, 16.0, 70.0, 37.0);
        map.ZoomToGeographic(region);
    }
    //end eventHandler
}
