//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeStackedSeriesType
{
    //begin eventHandler
    // Every stacked type carries the same five fragments, one per fuel, so they are built once and
    // handed to whichever stack the reader picks.
    private IgbStackedFragmentSeries[] Fragments()
    {
        var fuels = new string[] { "Coal", "Hydro", "Nuclear", "Gas", "Oil" };
        var made = new IgbStackedFragmentSeries[fuels.Length];
        for (var i = 0; i < fuels.Length; i++)
        {
            var fragment = new IgbStackedFragmentSeries();
            fragment.ValueMemberPath = fuels[i];
            fragment.Title = fuels[i];
            made[i] = fragment;
        }
        return made;
    }

    private IgbStackedSeriesBase Make(string name)
    {
        switch (name)
        {
            case "Stacked Area Series": return new IgbStackedAreaSeries();
            case "Stacked 100 Area Series": return new IgbStacked100AreaSeries();
            case "Stacked Bar Series": return new IgbStackedBarSeries();
            case "Stacked 100 Bar Series": return new IgbStacked100BarSeries();
            case "Stacked 100 Column Series": return new IgbStacked100ColumnSeries();
            case "Stacked Line Series": return new IgbStackedLineSeries();
            case "Stacked 100 Line Series": return new IgbStacked100LineSeries();
            case "Stacked Spline Series": return new IgbStackedSplineSeries();
            case "Stacked 100 Spline Series": return new IgbStacked100SplineSeries();
        }
        return new IgbStackedColumnSeries();
    }

    public void EditorChangeStackedSeriesType(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var name = args.NewValue.ToString();

        // A bar stack grows along the other axis, so it reads the category down the side and the
        // numbers across the bottom; every other type is the other way round. Both pairs of axes
        // are declared on the chart, and the swap is which pair this stack is given.
        var bar = name.IndexOf("Bar") >= 0;
        var stack = Make(name);
        stack.XAxisName = bar ? "numXAxis" : "catXAxis";
        stack.YAxisName = bar ? "catYAxis" : "numYAxis";

        foreach (var fragment in Fragments())
        {
            stack.Series.Add(fragment);
        }

        chart.Series.Clear();
        chart.Series.Add(stack);
    }
    //end eventHandler
}
