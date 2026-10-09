//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeSankeyMonth
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeSankeyMonth(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        var month = args.NewValue.ToString();
        var series = chart.Series;
        for (var i = 0; i < series.Count; i++)
        {
            var sankey = series[i] as SankeySeries;
            if (sankey != null)
            {
                // The links carry one value column per month; reading another column animates the
                // flows to that month's values (ShouldAnimateOnDataSourceSwap + TransitionDuration).
                sankey.LinkValueMemberPath = month;
            }
        }
    }
    //end eventHandler
}
