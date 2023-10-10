//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class WebGridColumnInitEvent
{

    //begin eventHandler
    public void WebGridColumnInitEvent(IgbColumnComponentEventArgs args)
    {
        var column = (IgbColumn)args.FindByName(args.Name);
        column.Sortable = true;
    }
    //end eventHandler
}