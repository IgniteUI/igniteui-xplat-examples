//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class ToolbarToggleAnnotations
{

    //begin eventHandler
    public void ToolbarToggleAnnotations(IgbToolCommandEventArgs args)
    {
        var target = CodeGenHelper.GetDescription<IgbDataChart>("content");
        switch (args.Command.CommandId)
        {
            case "EnableTooltips":
                IgbSeries annotationSeries = null;
                foreach (var s in target.Series)
                {
                    if (s is IgbDataToolTipLayer)
                    {
                        annotationSeries = s;
                    }
                }
                
                if (annotationSeries == null) {
                    target.Series.Add(new IgbDataToolTipLayer());
                } else {
                    target.Series.Remove(annotationSeries);
                }
                break;
            case "EnableCrosshairs":
                IgbSeries crosshairSeries = null;

                foreach (var s in target.Series)
                {
                    if (s is IgbCrosshairLayer)
                    {
                        crosshairSeries = s;
                    }
                }

                if (crosshairSeries == null)
                {
                    target.Series.Add(new IgbCrosshairLayer());
                }
                else
                {
                    target.Series.Remove(crosshairSeries);
                }
                break;
            case "EnableFinalValues":
                IgbSeries finalValuesSeries = null;

                foreach (var s in target.Series)
                {
                    if (s is IgbFinalValueLayer)
                    {
                        finalValuesSeries = s;
                    }
                }

                if (finalValuesSeries == null)
                {
                    target.Series.Add(new IgbFinalValueLayer());
                }
                else
                {
                    target.Series.Remove(finalValuesSeries);
                }
                break;
		}
    }
    //end eventHandler
}