//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class MapNavigationOnViewInit
{
    //begin eventHandler
    public void MapNavigationOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var region = new Rect() { Left = -134.5, Top = 16.0, Width = 70.0, Height = 37.0 };
        map.ZoomToGeographic(region);
    }
    //end eventHandler
}
