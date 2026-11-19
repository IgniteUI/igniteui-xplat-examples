//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class EditorChangeSankeyMonth
{

    //begin eventHandler
    public void EditorChangeSankeyMonth(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var month = args.NewValue.ToString();
        var series = chart.ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            var sankey = series[i] as IgbSankeySeries;
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
