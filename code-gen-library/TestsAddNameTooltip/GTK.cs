//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using System.Collections.Generic;
//end imports

public class TestsAddNameTooltip
{
    //begin eventHandler
    //WPF: System.Action
    public void TestsAddNameTooltip()
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
                        var tv = new Gtk.Label();
                        // Tooltip collision tests must not inherit the desktop's font or DPI size.
                        using (var font = new Pango.FontDescription())
                        using (var attributes = new Pango.AttrList())
                        {
                            font.Family = "Segoe UI";
                            font.AbsoluteSize = 16 * Pango.Scale.PangoScale;
                            attributes.Insert(new Pango.AttrFontDesc(font));
                            tv.Attributes = attributes;
                        }
                        cv = tv;
                        args.CurrentView = cv;
                    }
                    var item = args.CurrentData.Item as IDictionary<string, object>;
                    if (item != null && item.ContainsKey("Name"))
                    {
                        ((Gtk.Label)cv).Text = item["Name"] as string;
                    }
                };
            }
        }
    }
    //end eventHandler

}
