//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddStaticTextTooltip
{
    //begin eventHandler
    //WPF: System.Action
    public void TestsAddStaticTextTooltip()
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        foreach (var series in chart.Series)
        {
            if (!series.IsLayer)
            {
                series.ChartToolTipUpdating += (sender, args) =>
                {
                    var cv = args.CurrentView;
                    if (cv == null)
                    {
                        var label = new Gtk.Label();
                        cv = label;
                        args.CurrentView = cv;
                    }
                    ((Gtk.Label)cv).Text = "text";
                };
            }
        }
    }
    //end eventHandler

}
