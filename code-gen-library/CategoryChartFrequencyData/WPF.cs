//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Charts;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Windows.Threading;
//end imports

//begin supportingTypes
// A window onto a series that keeps arriving: every tick appends one reading and drops the oldest,
// so the line scrolls without the collection growing. The chart is told about each end separately --
// an insert at the tail and a remove at the head -- which is what lets it move a chart of this size
// without rebuilding it.
//
// All of it lives here because five controls drive one running chart between them: start and stop,
// how often it ticks, how many points it holds, and generating a fresh set. Each of those is a
// separate entry point, and they have to be talking about the same data and the same timer.
public class CategoryChartFrequencyItem
{
    public string Label { get; set; }
    public double Value { get; set; }
}

public static class CategoryChartFrequency
{
    public static int Points = 100000;
    public static int RefreshMilliseconds = 10;
    public static bool Running = false;

    private static List<CategoryChartFrequencyItem> data = new List<CategoryChartFrequencyItem>();
    private static int index = 0;
    private static DispatcherTimer timer;
    private static Random random = new Random();

    public static void Generate()
    {
        data = new List<CategoryChartFrequencyItem>();
        var value = 100.0;
        for (var i = 0; i <= Points; i++)
        {
            value += random.NextDouble() * 4.0 - 2.0;
            var item = new CategoryChartFrequencyItem();
            item.Label = i.ToString(CultureInfo.InvariantCulture);
            item.Value = Math.Round(value);
            data.Add(item);
        }
        index = data.Count;
        Chart().ItemsSource = data;
    }

    public static void Toggle()
    {
        Running = !Running;
    }

    // Restarted rather than adjusted, because the interval is fixed when the timer is created.
    public static void RestartTimer()
    {
        if (timer != null)
        {
            timer.Stop();
        }
        timer = new DispatcherTimer();
        timer.Interval = TimeSpan.FromMilliseconds(RefreshMilliseconds);
        timer.Tick += (s, e) => Tick();
        timer.Start();
    }

    private static XamCategoryChart Chart()
    {
        return CodeGenHelper.GetDescription<XamCategoryChart>("content");
    }

    private static void Tick()
    {
        if (!Running)
        {
            return;
        }
        var chart = Chart();

        var previous = data[data.Count - 1];
        var arrived = new CategoryChartFrequencyItem();
        arrived.Label = (++index).ToString(CultureInfo.InvariantCulture);
        arrived.Value = previous.Value + random.NextDouble() * 4.0 - 2.0;

        var leaving = data[0];
        data.Add(arrived);
        chart.NotifyInsertItem(data, data.Count - 1, arrived);
        data.RemoveAt(0);
        chart.NotifyRemoveItem(data, 0, leaving);
    }
}
//end supportingTypes
