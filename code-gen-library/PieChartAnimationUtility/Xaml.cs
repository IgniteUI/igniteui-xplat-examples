//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Charts;
using System;
using System.Windows.Threading;
//end imports

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
public static class PieChartAnimation
{
    private static DispatcherTimer timer;

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
        var chart = CodeGenHelper.GetDescription<XamPieChart>("content");
        chart.StartAngle = 0;
        chart.RadiusFactor = 0.1;
        timer = new DispatcherTimer();
        timer.Interval = TimeSpan.FromMilliseconds(15);
        timer.Tick += (s, e) => Tick();
        timer.Start();
    }

    public static void Stop()
    {
        if (timer != null)
        {
            timer.Stop();
            timer = null;
        }
    }

    private static void Tick()
    {
        var chart = CodeGenHelper.GetDescription<XamPieChart>("content");
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
