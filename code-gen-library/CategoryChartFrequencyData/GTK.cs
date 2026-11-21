//begin imports
using Infragistics.Controls.Charts;
using System;
using System.Collections.Generic;
using System.Globalization;
using Infragistics.Core.Graphics;
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
//
// The chart is handed in rather than looked up here. Asking for a description resolves, where the
// sample is generated, to the field the component was assigned to -- which only means anything
// inside the component's own instance, so the entry points do the asking and pass the answer on.
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

    private static XamCategoryChart chart;
    private static List<CategoryChartFrequencyItem> data = new List<CategoryChartFrequencyItem>();
    private static int index = 0;
    // The GLib timeout driving the ticks; 0 while none is scheduled.
    private static uint timer;
    private static Random random = new Random();

    public static void Generate(XamCategoryChart target)
    {
        chart = target;
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
        chart.DataSource = data;
    }

    public static void Toggle()
    {
        Running = !Running;
    }

    // Restarted rather than adjusted, because the interval is fixed when the timer is created.
    public static void RestartTimer(XamCategoryChart target)
    {
        StopTimer();
        chart = target;
        // Leaving the sample stops the timer, so it does not keep ticking against a chart that is gone.
        chart.Destroyed += Chart_Destroyed;
        timer = GLib.Timeout.Add((uint)RefreshMilliseconds, () =>
        {
            Tick();
            // Tick may have stopped the timer, which has removed this source already.
            return timer != 0;
        });
    }


    public static void StopTimer()
    {
        if (timer != 0)
        {
            GLib.Source.Remove(timer);
            timer = 0;
        }
        if (chart != null)
        {
            chart.Destroyed -= Chart_Destroyed;
        }
    }

    private static void Chart_Destroyed(object sender, EventArgs e)
    {
        StopTimer();
        Running = false;
        chart = null;
    }

    private static void Tick()
    {
        if (!Running)
        {
            return;
        }
        if (chart == null)
        {
            return;
        }

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
