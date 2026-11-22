//begin imports
using Infragistics.Controls.Charts;
using System;
using System.Diagnostics;
using Infragistics.Core.Graphics;
using Infragistics.Portable;
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
    // The original 360 updates at 15ms describe a 5.4-second animation.
    private const double DurationMilliseconds = 5400;
    private static XamPieChart chart;
    // The GLib timeout driving the ticks; 0 while none is scheduled.
    private static uint timer;
    //begin testing
    private static GlobalAnimationState animationState;
    //end testing

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
        var started = Stopwatch.StartNew();
        //begin testing
        animationState = GlobalAnimationState.Instance;
        animationState.NotifyAnimationStart();
        //end testing
        timer = GLib.Timeout.Add((uint)15, () =>
        {
            Tick(started.Elapsed.TotalMilliseconds);
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
            //begin testing
            animationState.NotifyAnimationEnd();
            animationState = null;
            //end testing
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

    private static void Tick(double elapsedMilliseconds)
    {
        if (chart == null)
        {
            return;
        }
        // Timer callbacks can arrive less often than requested under rendering load.
        var progress = Math.Min(1.0, elapsedMilliseconds / DurationMilliseconds);
        chart.RadiusFactor = 0.1 + 0.9 * progress;
        chart.StartAngle = 360 * progress;
        if (progress >= 1.0)
        {
            Stop();
        }
    }
}
//end supportingTypes
