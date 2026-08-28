//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Timers;
//end imports

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
public static class PieChartAnimation
{
    private static Timer timer;

    public static bool Running
    {
        get { return timer != null; }
    }

    public static void Toggle()
    {
        if (Running)
        {
            Stop();
        }
        else
        {
            Start();
        }
    }

    public static void Start()
    {
        Stop();
        var chart = CodeGenHelper.GetDescription<IgbPieChart>("content");
        chart.StartAngle = 0;
        chart.RadiusFactor = 0.1;
        timer = new Timer(15);
        timer.Elapsed += (s, e) => Tick();
        timer.AutoReset = true;
        timer.Start();
    }

    public static void Stop()
    {
        if (timer != null)
        {
            timer.Stop();
            timer.Dispose();
            timer = null;
        }
    }

    private static void Tick()
    {
        var chart = CodeGenHelper.GetDescription<IgbPieChart>("content");
        if (chart.RadiusFactor < 1.0)
        {
            chart.RadiusFactor += 0.0025;
        }
        if (chart.StartAngle < 360)
        {
            chart.StartAngle++;
        }
        // Both have arrived, so there is nothing left to step.
        if (chart.RadiusFactor >= 1.0 && chart.StartAngle >= 360)
        {
            Stop();
        }
    }
}
//end supportingTypes
