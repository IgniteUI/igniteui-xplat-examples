//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class WebGridTestOnInit
{

    //begin eventHandler
    public void WebGridTestOnInit()
    {
        var grid = CodeGenHelper.GetDescription<IgbGrid>("grid");
        grid.AllowFiltering = true;
        grid.FilterMode = FilterMode.ExcelStyleFilter;
    }
    //end eventHandler
}