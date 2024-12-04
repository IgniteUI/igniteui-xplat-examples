//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class ColorEditorToggleSeriesBrush
{

    //begin eventHandler
    public void ColorEditorToggleSeriesBrush(IgbToolCommandEventArgs args)
    {
        var target = CodeGenHelper.GetDescription<IgbDataChart>("content");
		var colorEditorTool = CodeGenHelper.GetDescription<IgbToolbar>("aboveContentLeft").Actions[0];
		var color = ((ToolActionColorEditor)colorEditorTool).Value;
		if (e.Command.CommandId == "ToggleSeriesBrush" && target.Series.Count != 0)
		{
			IgbSeries series = target.Series[0];
			series.Brush = color;
		}
        
    }
    //end eventHandler
}