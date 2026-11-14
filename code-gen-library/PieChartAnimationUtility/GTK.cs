//begin imports
using Infragistics.Controls.Charts;
using System;
using Infragistics.Core.Graphics;
//end imports

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
//
// The chart is handed in rather than looked up here. Asking for a description resolves, where the
// sample is generated, to the field the component was assigned to -- which only means anything
// inside the component's own instance, so the entry points do the asking and pass the answer on.
public static class PieChartAnimation
{
    private static XamPieChart chart;
    // The GLib timeout driving the ticks; 0 while none is scheduled.
    private static uint timer;

    public static bool Running
    {
        get { return timer != 0; }
    }

    public static void Toggle(XamPieChart target)
    {
        if (Running)
        {
            Stop();
        }
        else
        {
            Start(target);
        }
    }

    public static void Start(XamPieChart target)
    {
        Stop();
        chart = target;
        // Leaving the sample stops the animation, so the timer does not outlive the chart.
        chart.Destroyed += Chart_Destroyed;
        chart.StartAngle = 0;
        chart.RadiusFactor = 0.1;
        timer = GLib.Timeout.Add((uint)15, () =>
        {
            Tick();
            // Tick may have stopped the timer, which has removed this source already.
            return timer != 0;
        });
    }

    public static void Stop()
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
        Stop();
        chart = null;
    }

    private static void Tick()
    {
        if (chart == null)
        {
            return;
        }
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
