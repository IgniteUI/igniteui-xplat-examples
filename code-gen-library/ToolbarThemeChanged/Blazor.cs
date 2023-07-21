//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

//TODO: unfinished

public class ToolbarThemeChanged
{

    //begin eventHandler
    public void ToolbarThemeChanged(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var target = CodeGenHelper.GetDescription<IgbDataChart>("content");
        switch (args.Command.CommandId)
		{
			case "EnableTooltips":
                IgbSeries toRemove = null;
                foreach (var s in target.Series)
                {
                    if (s is IgbDataToolTipLayer)
                    {
                        toRemove = s;
                    }
                }
               
                if (toRemove == null) {
                    target.Series.Add(new IgbDataToolTipLayer());
                } else {
                    target.Series.Remove(toRemove);
                }
				break;
		}
    }
    //end eventHandler
}